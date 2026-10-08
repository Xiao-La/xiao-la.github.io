(function () {
  'use strict';

  var roots = new Set();
  var pending = false;

  function availableWidth(element) {
    var parent = element.parentElement;
    while (parent) {
      var style = getComputedStyle(parent);
      if (style.display !== 'inline' && style.display !== 'contents') {
        return parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      }
      parent = parent.parentElement;
    }
    return 0;
  }

  function update(root) {
    root.querySelectorAll('.article-math-inline, .course-math:not(.course-math-display)').forEach(function (element) {
      var svg = element.querySelector('mjx-container > svg');
      if (!svg) return;
      // Tables already have a scroll container. Ordinary inline formulas must
      // stay in the text flow so MathJax can align their baseline correctly.
      var width = availableWidth(element);
      var scroll = !element.closest('.article-table-scroll, .course-table-scroll') &&
        width > 0 && svg.getBoundingClientRect().width > width + 1;
      element.classList.toggle('math-inline-scroll', scroll);
      if (scroll) {
        element.tabIndex = 0;
        element.setAttribute('role', 'region');
        element.setAttribute('aria-label', '长公式（可横向滚动）');
      } else {
        element.removeAttribute('tabindex');
        element.removeAttribute('role');
        element.removeAttribute('aria-label');
      }
    });
  }

  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      pending = false;
      roots.forEach(update);
    });
  }

  window.formatInlineMath = function (root) {
    if (!root) return;
    roots.add(root);
    update(root);
  };

  window.addEventListener('resize', schedule);
  if (document.fonts) document.fonts.ready.then(schedule);
}());
