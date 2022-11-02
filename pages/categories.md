---
layout: default
title: Categories
description: 本博客所有文章分类列表
keywords: 分类
permalink: /categories/
---

这里是这个博客中所有文章的**分类列表**。可能有些文章存在分类错误。

<div class='tag_cloud'>
{% for cat in site.categories %} 
<a href="#{{ cat[0] }}" title="{{ cat[0] }}" rel="{{ cat[1].size }}">{{ cat[0] }}({{ cat[1].size }}) </a>
{% endfor %}
</div>

{% for category in site.categories %}
<h3>{{ category | first }}</h3>
<ul id="{{ category[0] }}">
{% for post in category.last %}
<li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}
