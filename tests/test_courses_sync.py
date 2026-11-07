import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('sync_courses', Path(__file__).resolve().parents[1]/'scripts/sync_courses.py')
sync = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sync)


class CourseExportTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.vault = Path(self.temp.name)
        self.course = {'id': 'example', 'title': 'Example', 'coverage': '全', 'sources': ['Example']}
        self.write('README.md', '已经完成的课程：\n- 【全】Example\n还在更新的课程：\n')

    def tearDown(self):
        self.temp.cleanup()

    def write(self, name, text):
        p = self.vault/name
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(text)
        return p

    def exporter(self):
        return sync.Exporter(self.vault, [self.course.copy()])

    def test_code_and_arrays_are_not_wikilinks(self):
        p = self.write('Example/Arrays.md', '```python\nx = [[5, 2], [-10, -12]]\n```\n`[[not a note]]`')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('x = [[5, 2], [-10, -12]]', result)
        self.assertIn('`[[not a note]]`', result)
        self.assertNotIn('<a ', result)

    def test_same_named_proof_and_image_resolve_by_type(self):
        p = self.write('Example/First.md', '[[Proof]]\n![[Proof.png|320]]')
        proof = self.write('笔记依赖/证明/Proof.md', '$x_i$')
        self.write('笔记依赖/图片/Proof.png', 'image')
        e = self.exporter()
        e.collect()
        self.assertIn(proof, e.notes)
        result = e.convert(p)
        self.assertIn('/courses/references/proof/', result)
        self.assertIn('width="320"', result)
        self.assertEqual(e.stats['image_embeds'], 1)

    def test_math_is_protected_from_markdown_tables_and_liquid(self):
        p = self.write('Example/Math.md', '| Math |\n| --- |\n| $a_{{i}} \\mid |x|$ |\n\n$$\na_{i}^2\n$$')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('a_{{i}}', result)
        self.assertIn('&#124;x&#124;', result)
        self.assertIn('data-display="true"', result)
        self.assertTrue(result.startswith('{% raw %}'))
        self.assertEqual(e.stats['inline_math'], 1)
        self.assertEqual(e.stats['display_math'], 1)

    def test_multiline_math_in_obsidian_callouts_keeps_tex_without_quote_markers(self):
        p = self.write('Example/Callout.md',
                       '> [!note]- Proof\n>\n> $$\n> \\begin{aligned}\n'
                       '> a&=b\\\\\n> c&>d\n> \\end{aligned}\n> $$\n')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('> [!note]- Proof', result)
        self.assertIn('a&amp;=b', result)
        self.assertIn('c&amp;&gt;d', result)
        self.assertNotIn('&#10;&gt; ', result)
        self.assertEqual(e.stats['display_math'], 1)

    def test_transitive_dependencies_are_included(self):
        self.write('Example/First.md', '[[Proof]]')
        self.write('笔记依赖/证明/Proof.md', '[[Second]]')
        p = self.write('笔记依赖/证明/Second.md', 'A proof.')
        e = self.exporter()
        e.collect()
        self.assertIn(p, e.notes)
        self.assertEqual(len(e.notes), 3)

    def test_unfinished_course_is_not_silently_published(self):
        self.write('Example/First.md', '[[Unfinished]]')
        self.write('Other/Unfinished.md', 'Draft.')
        with self.assertRaisesRegex(ValueError, 'outside the publication list'):
            self.exporter().collect()

    def test_changed_readme_requires_scope_review(self):
        self.write('Example/First.md', 'Note.')
        self.write('README.md', '已经完成的课程：\n- 【全】New Course\n还在更新的课程：')
        with self.assertRaisesRegex(ValueError, 'list changed'):
            self.exporter().collect()

    def test_missing_target_fails_before_export(self):
        self.write('Example/First.md', '![[Missing.png]]')
        with self.assertRaisesRegex(ValueError, 'unresolved/ambiguous'):
            self.exporter().export()

    def test_block_and_heading_links_have_stable_anchors(self):
        p = self.write('Example/First.md', '[[Second#Heading]] [[Second#^proof]]')
        q = self.write('Example/Second.md', '## Heading\n\nProof. ^proof')
        e = self.exporter()
        e.collect()
        self.assertIn('#section-1', e.convert(p))
        self.assertIn('#block-proof', e.convert(p))
        self.assertIn('{: #section-1 }', e.convert(q))
        self.assertIn('id="block-proof"', e.convert(q))

    def test_existing_markdown_table_of_contents_is_relinked(self):
        p = self.write('Example/First.md', '[目录](#1-命题逻辑--语法)\n\n## 1. 命题逻辑 — 语法')
        e = self.exporter()
        e.collect()
        self.assertIn('[目录](#section-1)', e.convert(p))

    def test_missing_source_section_is_reported_without_a_dead_link(self):
        p = self.write('Example/First.md', '[不存在的章节](#missing)\n\n## Existing')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('不存在的章节', result)
        self.assertNotIn('](#missing)', result)
        self.assertEqual(len(e.warnings), 1)

    def test_pdfs_in_completed_course_are_exported_as_resources(self):
        self.write('Example/First.md', 'Note.')
        pdf = self.write('Example/Review.pdf', '%PDF-1.4')
        other = self.write('Other/Unfinished.pdf', '%PDF-1.4')
        e = self.exporter()
        output, assets, report = e.export()
        self.assertIn(pdf, assets.values())
        self.assertNotIn(other, assets.values())
        self.assertEqual(report['pdf_resources'], 1)

    def test_table_followed_by_paragraph_gets_a_block_boundary(self):
        p = self.write('Example/First.md', '| A | B |\n| --- | --- |\n| $a$ | $b$ |\n**Next paragraph**')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('|\n\n**Next paragraph**', result)
        self.assertEqual(e.stats['tables'], 1)

    def test_plain_pipe_notation_is_not_a_headerless_table(self):
        p = self.write('Example/First.md', '- NP : N | D NP\n\n| One column |\n| --- |\n| Value |')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('NP : N &#124; D NP', result)
        self.assertIn('| One column |', result)
        self.assertEqual(e.stats['tables'], 1)

    def test_updating_course_is_included_and_marked(self):
        self.write('README.md', '已经完成的课程：\n- 【全】Example\n还在更新的课程：\n- Ongoing')
        self.write('Example/First.md', '[[New topic]]')
        note = self.write('Other/New topic.md', '$x$')
        ongoing = {'id': 'ongoing', 'title': 'Ongoing', 'coverage': '持续补充',
                   'status': 'updating', 'sources': ['Other']}
        e = sync.Exporter(self.vault, [self.course.copy(), ongoing])
        output, assets, report = e.export()
        self.assertEqual(report['updating_courses'], 1)
        self.assertEqual(report['completed_courses'], 1)
        self.assertIn('status: "updating"', output['_courses/ongoing/new-topic.md'])
        self.assertFalse(e.notes[note]['reference'])

    def test_changed_updating_list_requires_scope_review(self):
        self.write('Example/First.md', 'Note.')
        self.write('README.md', '已经完成的课程：\n- 【全】Example\n还在更新的课程：\n- New Course')
        with self.assertRaisesRegex(ValueError, 'updating-course list changed'):
            self.exporter().collect()

    def test_headings_after_lists_and_quotes_get_block_boundaries(self):
        p = self.write('Example/First.md', '> Quote\n### First\n\n- Item\n#### Second\n\n```python\n# Code comment\n```')
        e = self.exporter()
        e.collect()
        result = e.convert(p)
        self.assertIn('> Quote\n\n### First\n{: #section-1 }\n\n', result)
        self.assertIn('- Item\n\n#### Second\n{: #section-2 }\n\n', result)
        self.assertIn('```python\n# Code comment\n```', result)
        self.assertEqual(sync.heading_titles(p.read_text()), ['First', 'Second'])

    def test_note_order_uses_numbering_before_timestamps(self):
        course = {'id': 'example', 'notes': [
            self.note('10 - Last', '10', '2025-01-01'),
            self.note('2 - Second', '2', '2025-03-01'),
            self.note('0 - First', '0', '2025-04-01')]}
        sync.order_course_notes(course)
        self.assertEqual([n['title'] for n in course['notes']], ['0 - First', '2 - Second', '10 - Last'])

    @staticmethod
    def note(title, slug, created, updated=None, section=''):
        return dict(title=title, url=f'/courses/example/{slug}/', section=section,
                    created_at=created, updated_at=updated or created)

    def test_note_order_preserves_creation_order_when_a_note_is_edited(self):
        course = {'id': 'example', 'notes': [
            self.note('A later topic', 'a', '2025-02-01'),
            self.note('Z first topic', 'z', '2025-01-01', '2025-09-01')]}
        sync.order_course_notes(course)
        self.assertEqual([n['order'] for n in course['notes']], [1, 2])
        self.assertEqual(course['notes'][0]['title'], 'Z first topic')

    def test_logical_order_overrides_creation_and_groups_sections(self):
        course = {'id': 'example', 'note_order': ['intro', 'advanced', 'later'], 'notes': [
            self.note('Later semester', 'later', '2025-01-01', section='下'),
            self.note('Advanced topic', 'advanced', '2025-01-01', section='上'),
            self.note('Introduction', 'intro', '2025-03-01', section='上')]}
        sync.order_course_notes(course)
        self.assertEqual([n['url'].split('/')[-2] for n in course['notes']], ['intro', 'advanced', 'later'])

    def test_bad_logical_order_fails_before_export(self):
        for logical in [['missing'], ['first', 'first']]:
            with self.subTest(logical=logical), self.assertRaisesRegex(ValueError, 'Invalid note_order'):
                sync.order_course_notes({'id': 'example', 'note_order': logical,
                                         'notes': [self.note('First', 'first', '2025-01-01')]})


if __name__ == '__main__':
    unittest.main()
