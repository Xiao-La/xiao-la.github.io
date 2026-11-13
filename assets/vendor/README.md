# Local browser libraries

The site uses local copies of these pinned packages, so pages need no CDN.

- MathJax **3.2.2**, Apache-2.0: `mathjax/tex-svg-full.js` from the npm
  `mathjax@3.2.2` package, used by posts, study pages and course notes. The full
  bundle already includes `mhchem` for chemistry formulas.
  Upstream: <https://github.com/mathjax/MathJax/tree/3.2.2>.
- Waline client **3.16.1**, MIT: `waline/3.16.1/waline.umd.js` and
  `waline/3.16.1/waline.css` from npm `@waline/client@3.16.1`, used by the
  comment panel on posts and pages. Upstream: <https://github.com/walinejs/waline>.
- Pseudocode Suite renderer: `pseudocode-suite/pseudocode-suite.js` is generated
  by `scripts/sync_courses.py` from the Obsidian plugin's `src/core.js` and
  `src/render.js`, so ```` ```pseudo ```` blocks render the same as in Obsidian.
  Its fonts in `pseudocode-suite/fonts/` are CMU Serif (Computer Modern Unicode,
  by Andrey V. Panov), SIL Open Font License 1.1, converted from the plugin's
  TTF files to WOFF2 without other changes.
- Apache ECharts **5.3.1**, Apache-2.0: `echarts/5.3.1/echarts.min.js` from npm
  `echarts@5.3.1`, used by `reports/202508footprint.html`.
  Upstream: <https://github.com/apache/echarts>.

The third-party directories include the upstream license and are unmodified.
`js/courses.js` typesets the pseudocode renderer's math with MathJax SVG.
