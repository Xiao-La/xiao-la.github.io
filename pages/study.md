---
layout: default
title: Study
description: 学习笔记
keywords: study, 学习, 监督
permalink: /study/
---

这个页面的文章**不会被归档**。

主要是课内数学的一些分析文章。

<ul>
{% for art in site.study %}
<li><a href="{{ site.url }}{{ art.url }}">{{ art.title }}</a></li>
{% endfor %}
</ul>
