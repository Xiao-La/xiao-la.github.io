---
layout: default
title: Categories
description: 本博客所有文章分类列表
keywords: 分类
permalink: /categories/
---

<div class="categories-page" id="categories-top">
  <nav class="category-index" aria-label="文章分类索引">
    {% for category in site.categories %}
      <a href="#{{ category[0] | slugify }}">
        <span>{{ category[0] }}</span>
        <small>{{ category[1].size }} 篇</small>
      </a>
    {% endfor %}
  </nav>

  {% for category in site.categories %}
    <section class="category-section" id="{{ category[0] | slugify }}" aria-labelledby="{{ category[0] | slugify }}-title">
      <header class="category-heading">
        <h3 id="{{ category[0] | slugify }}-title">{{ category[0] }}</h3>
        <span>{{ category[1].size }} 篇</span>
      </header>
      <ol class="category-post-list">
        {% for post in category.last %}
          <li>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ol>
    </section>
  {% endfor %}
</div>
