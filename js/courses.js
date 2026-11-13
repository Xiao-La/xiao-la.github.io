(function () {
  'use strict';

  var content = document.querySelector('.course-content');
  if (!content) return;

  var toc = document.querySelector('.course-toc');
  var headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  var firstLevel = headings.length ? Math.min.apply(null, Array.from(headings, function (heading) {
    return Number(heading.tagName.slice(1));
  })) : 1;
  headings.forEach(function (heading, index) {
    if (!heading.id) heading.id = 'section-' + (index + 1);
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    item.style.marginLeft = (Number(heading.tagName.slice(1)) - firstLevel) + 'em';
    item.appendChild(link);
    toc.querySelector('ol').appendChild(item);
  });
  toc.hidden = headings.length === 0;

  content.querySelectorAll('table').forEach(function (table) {
    var wrapper = document.createElement('div');
    wrapper.className = 'course-table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', '表格（可横向滚动）');
    table.replaceWith(wrapper);
    wrapper.appendChild(table);
  });

  window.courseRenderErrors = [];
  if (!content.querySelector('.course-math, .course-pseudocode')) {
    content.dataset.rendered = 'true';
    return;
  }
  window.courseRendering = Promise.resolve(window.MathJax && MathJax.startup.promise)
    .then(async function () {
      if (!window.MathJax || !MathJax.tex2svgPromise) throw new Error('公式渲染器未加载');
      for (var element of content.querySelectorAll('.course-math')) {
        try {
          var rendered = await MathJax.tex2svgPromise(element.dataset.tex, {
            display: element.dataset.display === 'true'
          });
          if (rendered.querySelector('[data-mjx-error]')) {
            throw new Error(rendered.querySelector('[data-mjx-error]').getAttribute('data-mjx-error'));
          }
          element.replaceChildren(rendered);
        } catch (error) {
          element.classList.add('course-math-error');
          window.courseRenderErrors.push({ tex: element.dataset.tex, error: error.message });
        }
      }
      // ```pseudo blocks use the Obsidian plugin's own parser and flat renderer
      // (assets/vendor/pseudocode-suite), so both look the same.
      for (var block of content.querySelectorAll('.course-pseudocode')) {
        try {
          var model = PseudocodeSuite.parseLatex(block.textContent);
          var rendered = PseudocodeSuite.renderBlock(model, {
            lineNumbers: true, indentSize: '1.2em', commentDelimiter: '//'
          });
          for (var span of rendered.querySelectorAll('.ps-math[data-tex]')) {
            var tex = span.dataset.tex;
            var svg = await MathJax.tex2svgPromise(tex, { display: false });
            if (svg.querySelector('[data-mjx-error]')) {
              throw new Error(svg.querySelector('[data-mjx-error]').getAttribute('data-mjx-error') + ': ' + tex);
            }
            delete span.dataset.tex;
            span.replaceChildren(svg);
          }
          // Keep the source visible if parsing or typesetting fails.
          block.replaceWith(rendered);
        } catch (error) {
          window.courseRenderErrors.push({ pseudocode: true, error: error.message });
        }
      }
      // Direct tex2svg conversion does not install the document styles by
      // itself. This also hides visual duplicates of assistive MathML.
      MathJax.startup.document.updateDocument();
      if (window.formatInlineMath) window.formatInlineMath(content);
      content.dataset.rendered = 'true';
      if (window.courseRenderErrors.length) console.error('Course render errors:', window.courseRenderErrors);
    }).catch(function (error) {
      window.courseRenderErrors.push({ error: error.message });
      content.dataset.rendered = 'failed';
      console.error(error);
    });
}());
