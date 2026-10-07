(function () {
  function wrap(node, className, tagName) {
    if (node.parentElement.classList.contains(className)) return;
    var wrapper = document.createElement(tagName);
    wrapper.className = className;
    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);
  }

  window.formatArticleMath = function () {
    document.querySelectorAll('main article mjx-container[display="true"]').forEach(function (math) {
      wrap(math, 'article-math-display', 'div');
    });
    document.querySelectorAll('main article mjx-container:not([display="true"])').forEach(function (math) {
      if (!math.closest('.article-math-display')) wrap(math, 'article-math-inline', 'span');
    });
  };

  document.querySelectorAll('main article table').forEach(function (table) {
    wrap(table, 'article-table-scroll', 'div');
  });

  // MathJax can finish before this deferred script on a cached page.
  window.formatArticleMath();

  document.querySelectorAll('video[data-animated]').forEach(function (video) {
    video.muted = true;
    if (!window.IntersectionObserver) return;
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) video.play().catch(function () {});
      else video.pause();
    });
    observer.observe(video);
  });
}());
