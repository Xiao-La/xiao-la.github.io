(function () {
  function wrap(node, className, tagName) {
    if (node.parentElement.classList.contains(className)) return;
    var wrapper = document.createElement(tagName);
    wrapper.className = className;
    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);
  }

  window.formatArticleMath = function () {
    document.querySelectorAll('main article .MJXc-display, main article .MathJax_Display').forEach(function (math) {
      wrap(math, 'article-math-display', 'div');
    });
    document.querySelectorAll('main article .MathJax_CHTML, main article .MathJax').forEach(function (math) {
      if (!math.closest('.article-math-display')) wrap(math, 'article-math-inline', 'span');
    });
  };

  document.querySelectorAll('main article table').forEach(function (table) {
    wrap(table, 'article-table-scroll', 'div');
  });

  if (window.MathJax && window.MathJax.Hub) {
    window.MathJax.Hub.Register.StartupHook('End', window.formatArticleMath);
  }
}());
