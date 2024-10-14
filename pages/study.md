---
layout: default
title: Study
description: 学习笔记
keywords: study, 学习, 监督
permalink: /study/
---

这个页面的文章不会被归档，包括数学证明、学习记录等。

在 2024 年 9 月到 2025 年 6 月高考前，主要更新学习报告。

<h2>Article</h2>

<div class="postlist">
{% for art in site.study reversed %}
<div class="overview">
    <div class="date">{{ art.date | date: "%b %d, %Y" }}</div>
    <div class="detail"><a href="{{ site.url }}{{ art.url }}">{{ art.title }}</a></div>
  </div>
{% endfor %}
</div>
