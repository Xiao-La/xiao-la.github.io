---
layout: post
title: 近期对 Blog 本身的小更新
categories: life
description: blog update
keywords: blog, jekyll, valine
---

把建立这个 Blog 以来的小更新罗列一下。

### 添加搜索功能

使用 js 项目 [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search) 为 Blog 添加了简单的静态搜索功能。

具体地，在页面中引用 `simple-jekyll-search.min.js`，这个可以在 Github 的页面上下载到。页面中还需要包含以下代码块：

```html
<div class="dropdown navbar-form navbar-right ">
    <input id="dLabel" name="word" type="text"  aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" class="form-control typeahead"   placeholder="Search..">
    <ul class="dropdown-menu" aria-labelledby="dLabel" id="c">
    </ul>
</div>
<script>
    window.simpleJekyllSearch = new SimpleJekyllSearch({
    searchInput: document.getElementById('dLabel'),
    resultsContainer: document.getElementById('c'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No Result',
    limit: 20,
    fuzzy: false
    })
</script>
```

这里参考了 [这篇文章](http://ichenkaihua.github.io/2015/11/16/jekyll-search-via-simple_jekyll_search/) 利用 bootstrap 优化了搜索框的外观。

在 Blog 根目录下新建文件 `search.json`，填入以下内容：

```json
[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "date"     : "{{ post.date }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
```

即可按照这些关键字来查找文章。

效果可以在页面顶部查看。

### 添加评论功能

原有的 [solid](http://github.com/mzlogin/jekyll-theme-solid) 主题支持 Gitalk、 disqus 等静态评论功能，但是发现这些在国内环境下并不是很好用。

于是找到了一个静态评论项目：[Valine](https://valine.js.org/)，这个项目利用 LeanCloud 提供的免费数据存储。

为了避免备案的麻烦，我使用了 LeanCloud 国际版，注意使用国际版会导致一些 api 的域名被墙的问题，稍后会提如何解决。

首先注册 LeanCloud 账号，在「设置」中的「应用凭证」获取 App Key 和 App ID。在页面中引用 [valine.min.js](//unpkg.com/valine/dist/Valine.min.js)，再在评论应该出现的地方加入以下代码块，填入相应的变量：

```html
<div id="vcomments"></div>
<script>
    new Valine({
        el: '#vcomments',
        appId: 'Your appID',
        appKey: 'Your appKey',
        placeholder: 'Post a comment here...',
        serverURLs: 'Your Domain',
        visitor: true,
        path: location.pathname
    })
</script>
```

注意到其中的 serverURLs 这个变量，不是必填的，然而如果不填的话，发送评论的 api 在墙内无法访问。为了解决这个问题，我们可以在 LeanCloud 的「设置」中的「域名绑定」中，依据提示绑定自己的域名。

同时，注意到其中的 visitor 这个变量，也不是必填的，默认为 `false`。如果设置为 `true`，则会自动添加一个访问量统计的功能。只要在你想显示访问量的地方填入以下代码块：


```html
<span id="{{ page.url }}" class="leancloud_visitors" data-flag-title="{{ page.title }}">
    <p class="post-meta-item-text" style="display: inline; color: #686868">页面访问次数 </em>
    <p class="leancloud-visitors-count" style="display: inline; color: #383838; font-family: Impact"> ♥ </i>
</span>
```

即可显示访问量。这个访问量每次刷新都会增加一次，不会对同一 IP 短时间多次访问有限制，所以没什么统计意义。

### 域名自动续期

网站使用了 [freenom](https://www.freenom.com/) 提供的免费域名，但是这个域名每年都要手动续期一次，非常麻烦，前两年我都是靠定时邮件来提醒自己。

但是看到了 [freenom_auto_renew](https://github.com/luolongfei/freenom) 这个项目。虽然项目的 readme 里写没有服务器的用户推荐使用 Koyeb，但是现在这个平台已经需要信用卡扣款验证才能使用。经过尝试，发现阿里云函数比较适合，按量计费价格也很便宜，还有免费额度。

通过 readme 中写的步骤，一步一步配置，这个脚本就会每天运行一次，检测你的域名是否需要续期。