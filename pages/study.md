---
layout: default
title: Study
description: 学习笔记以及监督屏幕使用时间
keywords: study, 学习, 监督
permalink: /study/
---

<ul>
{% for art in site.study %}
{% if art.title != "Study Template" %}
<li><a href="{{ site.url }}{{ art.url }}">{{ art.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
