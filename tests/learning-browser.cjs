const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const base = 'http://127.0.0.1:4173';
const output = path.join(root, '.course-test-results');
const expected = JSON.parse(fs.readFileSync(path.join(output, 'learning-expected.json')));
const updatingCourses = JSON.parse(fs.readFileSync(path.join(root, '_data', 'courses.json')))
  .filter(course => course.status === 'updating').length;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
  await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
  const page = await context.newPage();
  const results = [];
  try {
    const pages = ['/study/', '/study/topics/', '/study/mathematics/', '/study/records/'];
    for (const url of pages) {
      assert.equal((await page.goto(base + url)).status(), 200);
      assert.deepEqual(await page.locator('.nav_nav a').allTextContents(), ['首页', '分类', '学习', '链接', '关于']);
      const links = await page.locator('.learning-hub a, .learning-index a').evaluateAll(as => as.map(a => a.getAttribute('href')));
      for (const href of links) {
        const target = new URL(href, base + url);
        const filename = path.join(root, '_site', decodeURIComponent(target.pathname), target.pathname.endsWith('/') ? 'index.html' : '');
        assert.ok(fs.existsSync(filename), `${url}: ${href}`);
        if (target.hash) assert.ok(fs.readFileSync(filename, 'utf8').includes(`id="${target.hash.slice(1)}"`), href);
      }
      for (const width of [1280, 390]) {
        await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), `${url}: ${width}px`);
        await page.screenshot({ path: path.join(output, `learning-${url.split('/').filter(Boolean).pop()}-${width}.png`), fullPage: url === '/study/' });
      }
      results.push({ url, links: links.length });
    }
    const mathUrls = new Set([
      '/study/2021-07-29-射影定理证明/',
      '/study/2021-12-12-两直线垂直/',
      '/study/2022-3-29-垂足三角形/',
      '/study/2024-6-10-2024gaokaoT19/',
      '/2023/09/20/mathexamexp/'
    ]);
    const oiDiaryUrls = expected.filter(item => item.kind === 'record' && item.title.startsWith('OI Diary')).map(item => item.url);
    const informaticsUrls = [
      ...expected.filter(item => item.kind === 'topic').map(item => item.url).filter(url => !mathUrls.has(url)),
      ...oiDiaryUrls
    ];
    const mathematicsUrls = [...mathUrls];
    const highSchoolUrls = expected
      .filter(item => item.kind === 'record' && !oiDiaryUrls.includes(item.url) && item.url !== '/2023/09/20/mathexamexp/' && !decodeURI(item.url).includes('屏幕使用时间'))
      .map(item => item.url);
    const pageGroups = [
      ['/study/topics/', informaticsUrls],
      ['/study/mathematics/', mathematicsUrls],
      ['/study/records/', highSchoolUrls]
    ];
    for (const [url, expectedUrls] of pageGroups) {
      await page.goto(base + url);
      const links = await page.locator('.learning-article-list a').evaluateAll(as => as.map(a => decodeURI(a.getAttribute('href'))));
      assert.equal(links.length, expectedUrls.length, url);
      assert.equal(new Set(links).size, links.length);
      assert.deepEqual([...links].sort(), [...expectedUrls].sort(), url);
    }
    await page.goto(base + '/study/records/');
    assert.equal(await page.locator('#reports .learning-article-list li').count(), 9);
    const dates = await page.locator('#reports time').evaluateAll(times => times.map(t => t.getAttribute('datetime')));
    assert.deepEqual(dates, [...dates].sort().reverse());
    await page.goto(base + '/study/');
    assert.equal(await page.locator('.learning-entries a').count(), 4);
    assert.equal(await page.locator('.learning-active a').count(), updatingCourses);
    assert.equal(await page.locator('.learning-recent li').count(), 5);
    for (const item of expected.filter(item => !decodeURI(item.url).includes('屏幕使用时间'))) {
      const response = await context.request.get(base + encodeURI(item.url));
      assert.equal(response.status(), 200, item.url);
      assert.ok((await response.text()).includes('class="breadcrumb learning-breadcrumb"'), item.url);
    }
    const index = await (await context.request.get(base + '/search.json')).json();
    for (const item of expected) assert.ok(index.some(result => decodeURI(result.url) === item.url), `Missing in search: ${item.url}`);
    await page.locator('#search-toggle').click();
    await page.locator('#search-input').fill('射影定理');
    await page.locator('.search-result').first().waitFor();
    assert.ok(decodeURI(await page.locator('.search-result').first().getAttribute('href')).includes('射影定理证明'));
    for (const url of ['/courses/', '/courses/dsaa/', '/courses/dsaa/sorting/']) {
      await page.goto(base + url);
      assert.equal(await page.locator('.course-breadcrumb a').first().getAttribute('href'), '/study/');
    }
    const report = { indexes: results, informatics: informaticsUrls.length, mathematics: mathematicsUrls.length, highSchool: highSchoolUrls.length, status: 'passed' };
    console.log(JSON.stringify(report));
    fs.writeFileSync(path.join(output, 'learning-report.json'), JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
