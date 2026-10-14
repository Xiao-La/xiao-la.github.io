(function () {
  'use strict';

  var roots = new Set();
  var pending = false;
  var displaySelector = '.article-math-display, .course-math-display';

  function meaningfulSibling(node, direction) {
    while (node && (node.nodeType === 8 ||
      (node.nodeType === 3 && !node.textContent.trim()))) {
      node = node[direction];
    }
    return node;
  }

  function isDisplay(node) {
    return node && node.nodeType === 1 && node.matches(displaySelector);
  }

  function normalizeDisplayMath(root) {
    var displays = root.querySelectorAll(displaySelector);
    displays.forEach(function (element) {
      // A display formula already starts and ends a line. Markdown's hard-wrap
      // <br> elements otherwise add an empty text line beside its block box.
      ['previousSibling', 'nextSibling'].forEach(function (direction) {
        var adjacent = meaningfulSibling(element[direction], direction);
        while (adjacent && adjacent.nodeName === 'BR') {
          var next = meaningfulSibling(adjacent[direction], direction);
          adjacent.remove();
          adjacent = next;
        }
      });
      element.classList.remove('math-display-followed', 'math-display-continuation');
    });

    root.querySelectorAll('p').forEach(function (paragraph) {
      var last = meaningfulSibling(paragraph.lastChild, 'previousSibling');
      // The final formula supplies the paragraph's bottom spacing itself.
      paragraph.classList.toggle('math-ending-paragraph', Boolean(isDisplay(last)));
    });

    displays.forEach(function (element) {
      var previous = meaningfulSibling(element.previousSibling, 'previousSibling');
      if (!previous && element.parentElement.tagName === 'P') {
        var paragraph = meaningfulSibling(element.parentElement.previousSibling, 'previousSibling');
        if (paragraph && paragraph.nodeName === 'P') {
          previous = meaningfulSibling(paragraph.lastChild, 'previousSibling');
        }
      }
      if (isDisplay(previous)) {
        previous.classList.add('math-display-followed');
        element.classList.add('math-display-continuation');
      }
    });
  }

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
    normalizeDisplayMath(root);
    update(root);
  };

  window.addEventListener('resize', schedule);
  if (document.fonts) document.fonts.ready.then(schedule);
}());
