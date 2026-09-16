(function () {
  'use strict';

  var config = window.blogSearchConfig || {};
  var modal = document.getElementById('search-modal');
  var toggle = document.getElementById('search-toggle');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var closeButtons = document.querySelectorAll('[data-search-close]');
  var index = null;
  var loading = null;
  var lastFocus = null;

  if (!modal || !toggle || !input || !results || !status || !config.indexUrl) {
    return;
  }

  function normalize(value) {
    return String(value || '').normalize('NFKC').toLowerCase().trim();
  }

  function loadIndex() {
    if (index) {
      return Promise.resolve(index);
    }

    if (!loading) {
      status.textContent = '正在载入文章索引…';
      loading = fetch(config.indexUrl, { credentials: 'same-origin' })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('HTTP ' + response.status);
          }
          return response.json();
        })
        .then(function (items) {
          index = items.map(function (item) {
            item.searchText = normalize([
              item.title,
              item.category,
              item.tags,
              item.description
            ].join(' '));
            item.normalizedTitle = normalize(item.title);
            return item;
          });
          status.textContent = '输入关键词开始搜索';
          return index;
        })
        .catch(function (error) {
          loading = null;
          status.textContent = '搜索索引加载失败，请稍后重试。';
          console.error('Search index failed to load:', error);
          throw error;
        });
    }

    return loading;
  }

  function formatDate(value) {
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '';
    }
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  function score(item, query, tokens) {
    if (!tokens.every(function (token) { return item.searchText.indexOf(token) !== -1; })) {
      return -1;
    }

    var value = 0;
    if (item.normalizedTitle === query) value += 120;
    if (item.normalizedTitle.indexOf(query) === 0) value += 80;
    if (item.normalizedTitle.indexOf(query) !== -1) value += 50;

    tokens.forEach(function (token) {
      if (item.normalizedTitle.indexOf(token) !== -1) value += 20;
      if (normalize(item.category).indexOf(token) !== -1) value += 8;
      if (normalize(item.tags).indexOf(token) !== -1) value += 6;
    });

    return value;
  }

  function makeResult(item) {
    var entry = document.createElement('li');
    var link = document.createElement('a');
    var title = document.createElement('span');
    var description = document.createElement('span');
    var meta = document.createElement('span');
    var date = formatDate(item.date);
    var category = item.category || '';

    link.className = 'search-result';
    link.href = item.url;
    title.className = 'search-result-title';
    title.textContent = item.title;
    description.className = 'search-result-description';
    description.textContent = item.description || '暂无摘要';
    meta.className = 'search-result-meta';
    meta.textContent = [date, category].filter(Boolean).join(' · ');

    link.appendChild(title);
    link.appendChild(description);
    link.appendChild(meta);
    entry.appendChild(link);
    return entry;
  }

  function render() {
    var query = normalize(input.value);
    results.replaceChildren();

    if (!query) {
      status.textContent = '输入关键词开始搜索';
      return;
    }

    if (!index) {
      loadIndex().then(render).catch(function () {});
      return;
    }

    var tokens = query.split(/\s+/).filter(Boolean);
    var rankedMatches = index
      .map(function (item) {
        return { item: item, score: score(item, query, tokens) };
      })
      .filter(function (match) { return match.score >= 0; })
      .sort(function (left, right) {
        if (right.score !== left.score) return right.score - left.score;
        return new Date(right.item.date) - new Date(left.item.date);
      });
    var matches = rankedMatches.slice(0, 12);

    if (!matches.length) {
      status.textContent = '没有找到与“' + input.value.trim() + '”相关的文章';
      return;
    }

    status.textContent = rankedMatches.length > matches.length
      ? '找到 ' + rankedMatches.length + ' 篇相关文章，显示前 ' + matches.length + ' 篇'
      : '找到 ' + matches.length + ' 篇相关文章';
    matches.forEach(function (match) {
      results.appendChild(makeResult(match.item));
    });
  }

  function openSearch() {
    lastFocus = document.activeElement;
    modal.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('search-open');
    loadIndex().catch(function () {});
    window.requestAnimationFrame(function () { input.focus(); });
  }

  function closeSearch() {
    modal.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('search-open');
    input.value = '';
    results.replaceChildren();
    status.textContent = '输入关键词开始搜索';
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
  }

  toggle.addEventListener('click', openSearch);
  input.addEventListener('input', render);
  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeSearch);
  });

  document.addEventListener('keydown', function (event) {
    var target = event.target;
    var isTyping = target && (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    );

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      modal.hidden ? openSearch() : closeSearch();
    } else if (event.key === '/' && !isTyping && modal.hidden) {
      event.preventDefault();
      openSearch();
    } else if (event.key === 'Escape' && !modal.hidden) {
      closeSearch();
    } else if (event.key === 'Tab' && !modal.hidden) {
      var focusable = Array.prototype.slice.call(
        modal.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]')
      );
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}());
