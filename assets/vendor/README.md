# Local browser libraries

The site uses local copies of these pinned packages, so pages need no CDN.

- MathJax **3.2.2**, Apache-2.0: `mathjax/tex-svg-full.js` from the npm
  `mathjax@3.2.2` package, used by posts, study pages and course notes. The full
  bundle already includes `mhchem` for chemistry formulas.
  Upstream: <https://github.com/mathjax/MathJax/tree/3.2.2>.
- Waline client **3.16.1**, MIT: `waline/3.16.1/waline.umd.js` and
  `waline/3.16.1/waline.css` from npm `@waline/client@3.16.1`, used by the
  comment panel on posts and pages. Upstream: <https://github.com/walinejs/waline>.
- pseudocode.js **2.4.1**, MIT: `pseudocode/pseudocode.min.js` and
  `pseudocode/pseudocode.min.css` from npm `pseudocode@2.4.1`.
  Upstream: <https://github.com/SaswatPadhi/pseudocode.js>.
- Apache ECharts **5.3.1**, Apache-2.0: `echarts/5.3.1/echarts.min.js` from npm
  `echarts@5.3.1`, used by `reports/202508footprint.html`.
  Upstream: <https://github.com/apache/echarts>.

Each directory includes the upstream license. The libraries are unmodified.
`js/courses.js` provides an SVG adapter for pseudocode.js's MathJax 3 CHTML API.
