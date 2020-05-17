---
layout: default
title: Study
description: 学习笔记以及监督屏幕使用时间
keywords: study, 学习, 监督
permalink: /study/
---

<ul>
{% for study in paginator.study %}
{% if study.title != "Study Template" %}
<li><a href="{{ site.url }}{{ study.url }}">{{ study.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
