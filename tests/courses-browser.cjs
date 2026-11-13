/* Run against a production Jekyll build served by a local HTTP server. */
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const base = process.env.COURSES_TEST_URL || 'http://127.0.0.1:4173';
const output = process.env.COURSES_TEST_OUTPUT || path.join(root, '.course-test-results');
const courses = JSON.parse(fs.readFileSync(path.join(root, '_data/courses.json')));
const references = JSON.parse(fs.readFileSync(path.join(root, '_data/course_references.json')));
const syncReport = JSON.parse(fs.readFileSync(path.join(root, 'reports/courses-sync.json')));
const notes = courses.flatMap(course => course.notes).concat(references);
const report = { pages: [], failures: [], totals: { math: 0, images: 0, pseudocode: 0, pdf: 0, tables: 0 }, screenshots: [] };
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  // Block unrelated remote footer services. Course rendering must work offline.
  await context.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin
    ? route.continue() : route.abort());
  try {
    const page = await context.newPage();
    let pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    for (const note of notes) {
      pageErrors = [];
      await page.setViewportSize({ width: 1280, height: 900 });
      const response = await page.goto(base + note.url, { waitUntil: 'domcontentloaded' });
      assert.equal(response.status(), 200, note.url);
      await page.waitForFunction(() => document.querySelector('.course-content')?.dataset.rendered, null, { timeout: 60000 });
      await page.evaluate(async () => {
        document.querySelectorAll('.course-image').forEach(image => image.loading = 'eager');
        await Promise.all([...document.querySelectorAll('.course-image')].map(image => image.decode().catch(() => {})));
      });
      const result = await page.evaluate(() => {
        const content = document.querySelector('.course-content');
        return {
          rendered: content.dataset.rendered,
          status: content.closest('article').querySelector('.course-status')?.textContent,
          headings: [...content.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
            id: h.id, topLevel: h.parentElement === content
          })),
          tocLinks: [...document.querySelectorAll('.course-toc a')].map(a => a.getAttribute('href')),
          neighbors: [...document.querySelectorAll('.article-neighbors a')].map(a => a.getAttribute('href')),
          errors: window.courseRenderErrors,
          math: content.querySelectorAll('.course-math').length,
          svgMath: content.querySelectorAll('.course-math > mjx-container > svg').length,
          mathJaxErrors: content.querySelectorAll('[data-mjx-error]').length,
          unknownMathCommands: [...content.querySelectorAll('mtext[mathcolor="red"]')].map(e => e.textContent).filter(t => /^\\[A-Za-z]/.test(t)),
          visibleAssistiveMath: [...content.querySelectorAll('mjx-assistive-mml')].filter(e => getComputedStyle(e).position !== 'absolute').length,
          images: content.querySelectorAll('.course-image').length,
          brokenImages: [...content.querySelectorAll('.course-image')].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
          pseudocode: content.querySelectorAll('.ps-block').length,
          tables: content.querySelectorAll('table').length,
          unrenderedPseudocode: content.querySelectorAll('.course-pseudocode').length,
          duplicateIds: [...document.querySelectorAll('[id]')].map(e => e.id).filter((id, i, ids) => ids.indexOf(id) !== i),
          localLinks: [...document.querySelectorAll('.course-note a[href]')].map(a => a.getAttribute('href')).filter(h => h.startsWith('/') || h.startsWith('#')),
          rawWiki: /!?\[\[/.test(content.innerText.replace(/\[\[5, 2\], \[-10, -12\]\]/g, ''))
        };
      });
      report.totals.math += result.math;
      report.totals.images += result.images;
      report.totals.pseudocode += result.pseudocode;
      report.totals.tables += result.tables;
      if (!note.reference) assert.equal(result.status, note.status === 'updating' ? '更新中' : '已完成');
      const expectedIds = Array.from({ length: syncReport.heading_counts[note.url] }, (_, i) => `section-${i + 1}`);
      assert.deepEqual(result.headings.map(h => h.id), expectedIds, note.url);
      assert.ok(result.headings.every(h => h.topLevel), `Nested heading: ${note.url}`);
      assert.deepEqual(result.tocLinks, expectedIds.map(id => '#' + id), note.url);
      if (!note.reference) {
        const course = courses.find(c => c.id === note.course_id);
        const index = course.notes.findIndex(n => n.url === note.url);
        assert.deepEqual(result.neighbors, [course.notes[index - 1], course.notes[index + 1]].filter(Boolean).map(n => n.url), note.url);
      }
      if (result.errors.length || result.brokenImages.length || result.math !== result.svgMath ||
          result.mathJaxErrors || result.unknownMathCommands.length || result.visibleAssistiveMath || result.unrenderedPseudocode || result.duplicateIds.length || result.rawWiki || pageErrors.length) {
        report.failures.push({ url: note.url, result, pageErrors });
      }
      for (const href of result.localLinks) {
        const u = new URL(href, base + note.url);
        const relative = u.pathname.slice(new URL(base).pathname.replace(/\/$/, '').length);
        const localPath = path.join(root, '_site', decodeURIComponent(relative), relative.endsWith('/') ? 'index.html' : '');
        if (!fs.existsSync(localPath)) {
          report.failures.push({ url: note.url, brokenLink: href });
        } else if (u.hash) {
          const text = fs.readFileSync(localPath, 'utf8');
          if (!text.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`)) report.failures.push({ url: note.url, missingAnchor: href });
        }
      }
      await page.setViewportSize({ width: 390, height: 844 });
      // Allow resize handlers and the resulting layout to paint before measuring.
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      const mobile = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
      if (mobile.scroll > mobile.width + 2) report.failures.push({ url: note.url, mobileOverflow: mobile });
      report.pages.push({ url: note.url, math: result.math, images: result.images, pseudocode: result.pseudocode, mobile });
      console.log(`${report.pages.length}/${notes.length} ${note.url} (${result.math} formulas)`);
    }
    assert.equal(report.totals.math, syncReport.stats.inline_math + syncReport.stats.display_math);
    assert.equal(report.totals.images, syncReport.stats.image_embeds);
    assert.equal(report.totals.pseudocode, syncReport.stats.pseudocode_blocks);
    assert.equal(report.totals.tables, syncReport.stats.tables);

    await page.goto(base + '/courses/');
    assert.equal(await page.locator('.course-card').count(), courses.length);
    for (const status of ['completed', 'updating']) {
      assert.equal(await page.locator(`.course-card[data-status="${status}"]`).count(), courses.filter(c => c.status === status).length);
    }
    for (const course of courses) {
      await page.goto(base + course.url);
      assert.equal(await page.locator('.course-note-list a').count(), course.count);
      assert.equal(await page.locator('.course-status').innerText(), course.status === 'updating' ? '更新中' : '已完成');
      assert.equal(await page.locator('.course-resource-list a').count(), course.resources.length);
      for (const resource of course.resources) {
        const response = await context.request.get(base + resource.url);
        assert.equal(response.status(), 200);
        assert.match(response.headers()['content-type'], /application\/pdf/);
        assert.equal((await response.body()).subarray(0, 5).toString(), '%PDF-');
        report.totals.pdf++;
      }
    }
    await page.goto(base + '/courses/');
    await page.locator('#search-toggle').click();
    await page.locator('#search-input').fill('热力学');
    await page.locator('.search-result').first().waitFor();
    assert.match(await page.locator('.search-result').first().getAttribute('href'), /\/courses\/physics\/thermodynamics\//);
    await page.locator('[data-search-close]').last().click();

    const screenshots = [
      ['catalog', '/courses/', 1280],
      ['chemistry', '/courses/chemistry/midterm-review/', 1280],
      ['pseudocode', '/courses/cs50-ai/0/', 1280],
      ['images', '/courses/physics/rolling-and-precession/', 1280],
      ['mobile', '/courses/calculus/vector-calculus/', 390]
    ];
    for (const [name, url, width] of screenshots) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      await page.goto(base + url);
      if (await page.locator('.course-content').count()) await page.waitForFunction(() => document.querySelector('.course-content').dataset.rendered);
      if (name === 'pseudocode') await page.locator('.ps-block').scrollIntoViewIfNeeded();
      if (name === 'images') await page.locator('.course-image-layout').scrollIntoViewIfNeeded();
      await page.evaluate(async () => {
        await Promise.all([...document.querySelectorAll('.course-image-layout img')].map(image => image.decode().catch(() => {})));
      });
      if (name === 'chemistry') await page.locator('.course-table-scroll').last().scrollIntoViewIfNeeded();
      const filename = `${name}.png`;
      await page.screenshot({ path: path.join(output, filename) });
      report.screenshots.push(filename);
    }
    // The algorithm must contain rendered mathematical symbols too.
    await page.goto(base + '/courses/cs50-ai/0/');
    await page.waitForFunction(() => document.querySelector('.course-content').dataset.rendered);
    assert.ok(await page.locator('.ps-block svg').count());
    // Java's literal double braces must survive Liquid processing.
    await page.goto(base + '/courses/java/sustech-cs109/');
    assert.ok((await page.locator('pre').allTextContents()).some(t => t.includes('{{1, 2}, {3, 4, 5}}')));
    // Python arrays resembling wikilinks must survive export.
    await page.goto(base + '/courses/cs50-ai/3/');
    assert.ok((await page.locator('pre').allTextContents()).some(t => t.includes('[[5, 2], [-10, -12]]')));
  } catch (error) {
    report.failures.push({ exception: error.stack });
  } finally {
    await browser.close();
    fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  }
  console.log(JSON.stringify({ pages: report.pages.length, totals: report.totals, failures: report.failures.length }));
  if (report.failures.length) process.exitCode = 1;
})();
