---
layout: default
title: Study
description: 学习笔记
keywords: study, 学习, 监督
permalink: /study/
---

这个页面的文章**不会被归档**。

<div class="postlist">
{% for art in site.study reversed %}
<div class="overview">
    <div class="date">{{ art.date | date: "%b %d, %Y" }}</div>
    <div class="detail"><a href="{{ site.url }}{{ art.url }}">{{ art.title }}</a></div>
  </div>
{% endfor %}
</div>
