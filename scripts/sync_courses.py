#!/usr/bin/env python3
"""Export README-listed Obsidian courses without changing the source vault.

Only Python's standard library and `cwebp` (for large PNG/JPEG attachments) are
needed. Generated files are tracked so a later sync can remove stale exports
without deleting hand-written website content.
"""
import argparse
from collections import defaultdict
from datetime import datetime
import hashlib
import html
import json
from pathlib import Path
import re
import shutil
import struct
import subprocess
from urllib.parse import quote, unquote, urlsplit
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
# Large slide screenshots are published as WebP; q90 keeps text edges sharp.
WEBP_MIN_BYTES = 50_000
WEBP_MAX_RATIO = 0.9
WEBP_ARGS = ['-quiet', '-q', '90', '-m', '6', '-metadata', 'none']
FENCE = re.compile(r"(?m)^ {0,3}(`{3,}|~{3,})([^\n]*)\n([\s\S]*?)^ {0,3}\1[ \t]*$")
CODE = re.compile(r"(`+)([^`\n]*?)\1")
MATH = re.compile(r"(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$|(?<![\\$])\$(?!\$)([^\n$]*?)(?<!\\)\$(?!\$)")
WIKI = re.compile(r"(!?)\[\[([^\n]+?)\]\]")
HEADING = re.compile(r'^#{1,6}[ \t]+.+$', re.M)


def dump(value):
    return json.dumps(value, ensure_ascii=False, indent=2) + "\n"


def frontmatter(meta, body):
    # JSON strings are also valid YAML scalars.
    return "---\n" + "".join(f"{key}: {json.dumps(value, ensure_ascii=False)}\n"
                                for key, value in meta.items()) + "---\n\n" + body.rstrip() + "\n"


def slug(value):
    value = value.split(" - ")[0].lower()
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-") or hashlib.sha256(value.encode()).hexdigest()[:12]


def visible_text(text):
    text = FENCE.sub(lambda m: m[3] if m[2].strip().startswith('image-layout-') else '', text)
    return MATH.sub('', CODE.sub('', text))


def heading_slug(value):
    return re.sub(r'[^\w -]', '', value.lower()).replace(' ', '-')


def heading_titles(text):
    text = FENCE.sub('', text)
    return [re.sub(r'^#{1,6}[ \t]+|[ \t]+#+[ \t]*$', '', m[0]).strip()
            for m in HEADING.finditer(text)]


def natural_key(value):
    return tuple((1, int(part)) if part.isdigit() else (0, part.casefold())
                 for part in re.split(r'(\d+)', value))


def order_course_notes(course):
    notes = course['notes']
    logical = course.get('note_order', [])
    slugs = {n['url'].rstrip('/').rsplit('/', 1)[-1] for n in notes}
    if len(logical) != len(set(logical)) or not set(logical) <= slugs:
        raise ValueError(f"Invalid note_order for {course['id']}: {logical}")
    ranks = {name: index for index, name in enumerate(logical)}

    def key(note):
        name = note['url'].rstrip('/').rsplit('/', 1)[-1]
        numbered = re.match(r'^(?:week\s*)?(\d+)(?:\D|$)', note['title'], re.I)
        sequence = (0, int(numbered[1])) if numbered else (1, 0)
        return (natural_key(note['section']), ranks.get(name, len(ranks)), sequence,
                note['created_at'], note['updated_at'], natural_key(note['title']))

    notes.sort(key=key)
    for index, note in enumerate(notes, 1):
        note['order'] = index


def normalize_tables(text):
    """Give GFM tables the block boundaries required by kramdown.

    Obsidian accepts a paragraph immediately after a table; kramdown can render
    the entire table as plain text without a separating blank line.
    Protected code/math tokens contain no table separators at this stage.
    """
    lines = text.splitlines()
    output, count, index = [], 0, 0
    while index < len(lines):
        if index + 1 < len(lines) and lines[index].lstrip().startswith('|'):
            separator = lines[index + 1].strip().strip('|').split('|')
            is_table = all(re.fullmatch(r':?-{3,}:?', c.strip()) for c in separator)
            if is_table:
                count += 1
                if output and output[-1].strip():
                    output.append('')
                output.extend(lines[index:index + 2])
                index += 2
                while index < len(lines) and lines[index].lstrip().startswith('|'):
                    output.append(lines[index])
                    index += 1
                if index < len(lines) and lines[index].strip():
                    output.append('')
                continue
        # kramdown accepts single pipe-containing lines as headerless tables.
        # Preserve ordinary grammar/probability notation as literal text.
        output.append(lines[index].replace('|', '&#124;'))
        index += 1
    return '\n'.join(output), count


class Exporter:
    def __init__(self, vault, courses, cache=ROOT/'.course-cache'/'webp'):
        self.vault, self.courses, self.cache = vault, courses, cache
        self.files = sorted(p for p in vault.rglob('*') if p.is_file()
                            and not any(part.startswith('.') for part in p.relative_to(vault).parts))
        self.notes = {}
        self.assets = {}  # published path -> file to copy
        self.links = []
        self.stats = defaultdict(int)
        self.warnings = []

    def resolve(self, source, target):
        name = unquote(target).replace('\\', '/')
        if not name:
            return source
        paths = [source.parent / name, self.vault / name]
        for p in paths:
            for candidate in [p, p.with_suffix('.md') if not p.suffix else p]:
                if candidate in self.files:
                    return candidate
        matches = [p for p in self.files if p.name == name or str(p.relative_to(self.vault)) == name
                   or (not Path(name).suffix and p.stem == name)]
        # Obsidian links without an extension refer to the note when a same-named
        # image exists as well. Keep the ambiguity check for duplicate note names.
        notes = [p for p in matches if p.suffix == '.md']
        if notes and not Path(name).suffix:
            matches = notes
        if len(matches) != 1:
            raise ValueError(f'{source.relative_to(self.vault)}: unresolved/ambiguous link {target!r}: {matches}')
        return matches[0]

    def add_note(self, path, course=None, section=''):
        if path in self.notes:
            return
        cid = course['id'] if course else 'references'
        note_slug = slug(path.stem)
        url = f'/courses/{cid}/{note_slug}/'
        if any(n['url'] == url for n in self.notes.values()):
            raise ValueError(f'Duplicate public URL: {url}')
        stat = path.stat()
        def timestamp(value):
            return datetime.fromtimestamp(value, ZoneInfo('Asia/Shanghai')).isoformat(timespec='seconds')
        self.notes[path] = {'title': path.stem, 'url': url, 'course_id': cid,
                            'course_title': course['title'] if course else '补充材料',
                            'section': section, 'source_path': str(path.relative_to(self.vault)),
                            'status': course.get('status', 'completed') if course else 'reference',
                            'created_at': timestamp(getattr(stat, 'st_birthtime', stat.st_mtime)),
                            'updated_at': timestamp(stat.st_mtime),
                            'output': f'_courses/{cid}/{note_slug}.md',
                            'reference': course is None}

    def collect(self):
        readme = (self.vault / 'README.md').read_text()
        completed = readme.split('已经完成的课程：', 1)[1].split('还在更新的课程：', 1)[0]
        entries = re.findall(r'^- 【([^】]+)】(.+)$', completed, re.M)
        for c in self.courses:
            c.setdefault('status', 'completed')
            if c['status'] not in {'completed', 'updating'}:
                raise ValueError(f"Invalid course status: {c['status']}")
        expected = [(c['coverage'], c['title']) for c in self.courses if c['status'] == 'completed']
        if entries != expected:
            raise ValueError('README completed-course list changed; review scripts/courses.json before exporting.')
        updating = re.findall(r'^- (.+)$', readme.split('还在更新的课程：', 1)[1], re.M)
        if updating != [c['title'] for c in self.courses if c['status'] == 'updating']:
            raise ValueError('README updating-course list changed; review scripts/courses.json before exporting.')
        for c in self.courses:
            c['notes'] = []
            c['resources'] = []
            for name in c['sources']:
                p = self.vault / name
                selected = sorted(p.rglob('*.md')) if p.is_dir() else [p]
                if not p.exists() or not selected:
                    raise ValueError(f'Course source missing: {p}')
                for note in selected:
                    if note in self.notes:
                        raise ValueError(f'Course sources overlap: {note}')
                    section = str(note.parent.relative_to(p)) if p.is_dir() else ''
                    self.add_note(note, c, '' if section == '.' else section)
                    c['notes'].append(self.notes[note])
                if p.is_dir():
                    for resource in sorted(p.rglob('*.pdf')):
                        if resource in self.files:
                            c['resources'].append({'title': resource.stem, 'url': self.asset_url(resource),
                                                   'source_path': str(resource.relative_to(self.vault))})
            order_course_notes(c)
        visited = set()
        while set(self.notes) - visited:
            for p in sorted(set(self.notes) - visited):
                visited.add(p)
                for m in WIKI.finditer(visible_text(p.read_text())):
                    target = m[2].split('|', 1)[0].split('#', 1)[0]
                    dest = self.resolve(p, target)
                    if dest.suffix == '.md' and dest not in self.notes:
                        # Only README-listed courses and their supplementary
                        # dependencies belong in the publication scope.
                        if dest.relative_to(self.vault).parts[0] != '笔记依赖':
                            raise ValueError(f'{p.name} references a course outside the publication list: {dest}')
                        self.add_note(dest)

    def asset_url(self, path):
        if path.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.pdf'}:
            raise ValueError(f'Unsupported public attachment: {path}')
        published, source = path.relative_to(self.vault), path
        webp = self.webp(path)
        if webp:
            published, source = published.with_suffix('.webp'), webp
        name = f'assets/courses/{published}'
        if self.assets.get(name, source) != source:
            raise ValueError(f'Two attachments publish to {name}')
        self.assets[name] = source
        return '/' + quote(name, safe='/')

    def webp(self, path):
        """Return a cached WebP copy of a large PNG/JPEG, or None to publish it as is."""
        if path.suffix.lower() not in {'.png', '.jpg', '.jpeg'} or path.stat().st_size <= WEBP_MIN_BYTES:
            return None
        data = path.read_bytes()
        key = hashlib.sha256(data + ' '.join(WEBP_ARGS).encode()).hexdigest()
        out, skip = self.cache/f'{key}.webp', self.cache/f'{key}.skip'
        if not out.exists() and not skip.exists():
            if not shutil.which('cwebp'):
                raise SystemExit('cwebp is required for large course images (brew install webp)')
            self.cache.mkdir(parents=True, exist_ok=True)
            tmp = out.with_suffix('.tmp')
            subprocess.run(['cwebp', *WEBP_ARGS, str(path), '-o', str(tmp)], check=True)
            if tmp.stat().st_size <= len(data) * WEBP_MAX_RATIO:
                tmp.replace(out)
            else:
                tmp.unlink()
                skip.touch()
        return out if out.exists() else None

    def wiki(self, source, match):
        embed, value = match[1], match[2]
        target, _, alias = value.partition('|')
        name, _, anchor = target.partition('#')
        dest = self.resolve(source, name)
        if dest.suffix == '.md':
            if embed:
                raise ValueError(f'Note transclusion needs review: {source}: {value}')
            url = self.notes[dest]['url']
            if anchor.startswith('^'):
                url += '#block-' + anchor[1:]
            elif anchor:
                headings = heading_titles(dest.read_text())
                if anchor not in headings:
                    raise ValueError(f'Heading missing: {target}')
                url += '#section-' + str(headings.index(anchor) + 1)
            self.links.append({'source': self.notes[source]['url'], 'target': url})
            self.stats['note_links'] += 1
            label = alias or name or self.notes[dest]['title']
            return f'<a href="{self.url_token(url)}">{html.escape(label)}</a>'
        url = self.asset_url(dest)
        if embed and dest.suffix.lower() != '.pdf':
            self.stats['image_embeds'] += 1
            # PNG dimensions reserve space before lazy-loaded course images arrive.
            # Keep the exporter dependency-free; all current course images are PNG.
            with dest.open('rb') as image_file:
                header = image_file.read(24)
            intrinsic = struct.unpack('>II', header[16:24]) if header[:8] == b'\x89PNG\r\n\x1a\n' and len(header) == 24 else None
            size = f' width="{intrinsic[0]}" height="{intrinsic[1]}"' if intrinsic else ''
            if alias:
                dims = re.fullmatch(r'(\d+)(?:x(\d+))?', alias)
                if not dims:
                    raise ValueError(f'Unknown image size: {value}')
                height = dims[2] or (str(round(int(dims[1]) * intrinsic[1] / intrinsic[0])) if intrinsic else None)
                size = f' width="{dims[1]}"' + (f' height="{height}"' if height else '')
            return f'<img class="course-image" src="{self.url_token(url)}" alt="{html.escape(dest.stem, quote=True)}"{size} loading="lazy" decoding="async">'
        return f'<a href="{self.url_token(url)}">{html.escape(alias or dest.name)}</a>'

    def url_token(self, url):
        token = f'COURSEURLTOKEN{len(self.urls)}END'
        self.urls[token] = url
        return token

    def convert(self, source):
        self.urls = {}
        tokens = {}

        def protect(value):
            token = f'COURSECONTENTTOKEN{len(tokens)}END'
            tokens[token] = value
            return token

        def fence(m):
            lang, body = m[2].strip(), m[3]
            if lang == 'pseudo':
                self.stats['pseudocode_blocks'] += 1
                return protect('<pre class="course-pseudocode">' + html.escape(body) + '</pre>')
            if lang == 'image-layout-a':
                self.stats['image_layouts'] += 1
                imgs = WIKI.sub(lambda match: self.wiki(source, match), body)
                return protect('<div class="course-image-layout">\n' + imgs + '</div>')
            if lang in {'dataview', 'dataviewjs', 'mermaid'} or lang.startswith('image-layout'):
                raise ValueError(f'Unsupported plugin block: {source}: {lang}')
            return protect(m[0])

        text = FENCE.sub(fence, source.read_text())
        text = CODE.sub(lambda m: protect(m[0]), text)

        def math(m):
            display = m[1] is not None
            tex = m[1] if display else m[2]
            # Obsidian permits multiline display math inside quoted callouts.
            # Quote markers describe Markdown structure, not TeX content.
            line_start = text.rfind('\n', 0, m.start()) + 1
            quote_prefix = text[line_start:m.start()]
            if display and re.fullmatch(r'[ \t]*(?:>[ \t]*)+', quote_prefix):
                tex = re.sub(r'(?m)^' + re.escape(quote_prefix), '', tex)
            self.stats['display_math' if display else 'inline_math'] += 1
            attr = html.escape(tex.strip(), quote=True).replace('\n', '&#10;').replace('|', '&#124;')
            cls = 'course-math course-math-display' if display else 'course-math'
            # A raw HTML code element preserves the fallback source as well as
            # underscores and pipes inside tables. No TeX reaches Markdown.
            fallback = html.escape(tex.strip()).replace('\n', '&#10;').replace('|', '&#124;')
            return protect(f'<span class="{cls}" data-tex="{attr}" data-display="{str(display).lower()}"><code>{fallback}</code></span>')

        text = MATH.sub(math, text)
        text = WIKI.sub(lambda m: self.wiki(source, m), text)
        text = re.sub(r'==([^\n]+?)==', lambda m: '<mark>' + m[1] + '</mark>', text)
        text = re.sub(r'%%[\s\S]*?%%', '', text)
        text = re.sub(r'\^([\w-]+)[ \t]*$', lambda m: f'<span id="block-{m[1]}"></span>', text, flags=re.M)
        heading_count = 0

        def heading(m):
            nonlocal heading_count
            heading_count += 1
            # Obsidian accepts headings immediately after lists/quotes. GFM's
            # lazy continuation can put them inside that block and attach the
            # heading's ID to the list/quote instead. Explicit boundaries keep
            # top-level headings and their anchors together.
            return '\n' + m[0] + f'\n{{: #section-{heading_count} }}\n'

        text = HEADING.sub(heading, text)

        def markdown_link(m):
            image, label, target = m[1], m[2], m[3]
            parsed = urlsplit(target)
            if target.startswith('#'):
                anchor = unquote(target[1:])
                if anchor.startswith('^'):
                    return f'[{label}](#block-{anchor[1:]})'
                headings = heading_titles(source.read_text())
                matches = [i for i, h in enumerate(headings) if heading_slug(h) == anchor or h == anchor]
                if len(matches) != 1:
                    self.warnings.append({'source': str(source.relative_to(self.vault)),
                                          'target': target, 'action': 'kept label without broken link',
                                          'reason': 'source note has no unique matching heading'})
                    return label
                return f'[{label}](#section-{matches[0] + 1})'
            if parsed.scheme or target.startswith('/'):
                return m[0]
            dest = self.resolve(source, parsed.path)
            if dest.suffix == '.md':
                if dest not in self.notes:
                    raise ValueError(f'Markdown link outside publication scope: {target}')
                url = self.notes[dest]['url']
            else:
                url = self.asset_url(dest)
            return f'{image}[{label}]({self.url_token(url)})'

        text = re.sub(r'(!?)\[([^\]\n]+)\]\(([^\s)]+)\)', markdown_link, text)
        text, tables = normalize_tables(text)
        self.stats['tables'] += tables
        # Restore protected blocks once, without recursively transforming code.
        text = re.sub(r'COURSECONTENTTOKEN\d+END', lambda m: tokens[m[0]], text)
        if '{% endraw %}' in text:
            raise ValueError(f'Literal Liquid endraw in {source}; review before exporting')
        # Raw blocks protect code and formulas even on Jekyll 3.10. URL tokens
        # briefly exit raw mode so the collection also works under a baseurl.
        text = re.sub(r'(?m)^(<img class="course-image"[^\n]*>)[ \t]+$', r'\1', text)
        text = '{% raw %}\n' + text.rstrip() + '\n{% endraw %}'
        for token, url in self.urls.items():
            text = text.replace(token, "{% endraw %}{{ '" + url.replace("'", '%27') + "' | relative_url }}{% raw %}")
        return text

    def export(self):
        self.collect()
        output = {}
        for source, note in sorted(self.notes.items()):
            body = self.convert(source)
            meta = {k: v for k, v in note.items() if k not in {'output', 'url', 'source_path'}}
            meta.update(layout='course', permalink=note['url'], course_page=True, doc_type='note',
                        description=f"{note['course_title']} · {note['title']}",
                        excerpt=f"{note['course_title']} · {note['title']}")
            output[note['output']] = frontmatter(meta, body)
        for c in self.courses:
            output[f"_courses/{c['id']}/index.md"] = frontmatter(
                dict(layout='course-index', title=c['title'], course_id=c['id'],
                     status=c['status'],
                     permalink=f"/courses/{c['id']}/", course_page=True, doc_type='index'), '')
            c['url'] = f"/courses/{c['id']}/"
            c['count'] = len(c['notes'])
            for note in c['notes']:
                note.pop('output', None)
        references = [n for n in self.notes.values() if n['reference']]
        for n in references:
            n.pop('output', None)
        public_courses = []
        for course in self.courses:
            public = {k: v for k, v in course.items() if k not in {'sources', 'notes', 'resources', 'note_order'}}
            public['notes'] = [{k: v for k, v in n.items() if k != 'source_path'} for n in course['notes']]
            public['resources'] = [{k: v for k, v in r.items() if k != 'source_path'} for r in course['resources']]
            public_courses.append(public)
        output['_data/courses.json'] = dump(public_courses)
        output['_data/course_references.json'] = dump([{k: v for k, v in n.items() if k != 'source_path'} for n in references])
        asset_files = dict(self.assets)
        generated = sorted([*output, *asset_files, 'reports/courses-sync.json'])
        report = {'source_readme_sha256': hashlib.sha256((self.vault/'README.md').read_bytes()).hexdigest(),
                  'courses': len(self.courses), 'course_notes': sum(c['count'] for c in self.courses),
                  'completed_courses': sum(c['status'] == 'completed' for c in self.courses),
                  'updating_courses': sum(c['status'] == 'updating' for c in self.courses),
                  'reference_notes': len(references), 'attachments': len(self.assets),
                  'pdf_resources': sum(len(c['resources']) for c in self.courses),
                  'stats': dict(self.stats), 'note_links': self.links,
                  'heading_counts': {note['url']: len(heading_titles(source.read_text()))
                                     for source, note in self.notes.items()},
                  'warnings': self.warnings,
                  'generated_files': generated}
        output['reports/courses-sync.json'] = dump(report)
        return output, asset_files, report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--vault', type=Path, default=Path.home()/'Documents/Obsidian Vault')
    parser.add_argument('--check', action='store_true', help='Check that committed exports match the current vault')
    args = parser.parse_args()
    exporter = Exporter(args.vault.resolve(), json.loads((ROOT/'scripts/courses.json').read_text()))
    output, assets, report = exporter.export()  # Validate everything before writing.
    report_path = ROOT/'reports/courses-sync.json'
    old = json.loads(report_path.read_text()) if report_path.exists() else {}
    stale = set(old.get('generated_files', [])) - set(report['generated_files'])
    changed = []
    for name, value in output.items():
        p = ROOT/name
        if not p.exists() or p.read_text() != value:
            changed.append(name)
            if not args.check:
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_text(value)
    for name, source in assets.items():
        p = ROOT/name
        if not p.exists() or p.read_bytes() != source.read_bytes():
            changed.append(name)
            if not args.check:
                p.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(source, p)
    for name in sorted(stale):
        p = ROOT/name
        if not (name.startswith('_courses/') or name.startswith('assets/courses/')):
            raise ValueError(f'Unexpected stale generated path: {name}')
        if p.exists():
            changed.append(name)
            if not args.check:
                p.unlink()
    print(f"{report['courses']} courses, {report['course_notes']} course notes, "
          f"{report['reference_notes']} references, {report['attachments']} attachments; "
          f"{len(changed)} files {'out of date' if args.check else 'updated'}")
    if report['warnings']:
        print(f"{len(report['warnings'])} source warning(s); see reports/courses-sync.json")
    if args.check and changed:
        raise SystemExit('\n'.join(changed))


if __name__ == '__main__':
    main()
