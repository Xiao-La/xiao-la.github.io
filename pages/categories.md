---
layout: default
title: 文章分类
description: 本博客所有文章分类列表
keywords: 分类
permalink: /categories/
---

<div class="categories-page" id="categories-top">
  <nav class="category-index" aria-label="文章分类索引">
    {% for category in site.categories %}
      {% assign category_name = category[0] %}
      <a href="#{{ category[0] | slugify }}">
        <span>{{ site.data.categories[category_name] | default: category_name | escape }}</span>
        <small>{{ category[1].size }} 篇</small>
      </a>
    {% endfor %}
  </nav>

  {% for category in site.categories %}
    {% assign category_name = category[0] %}
    <section class="category-section" id="{{ category[0] | slugify }}" aria-labelledby="{{ category[0] | slugify }}-title">
      <header class="category-heading">
        <h3 id="{{ category[0] | slugify }}-title">{{ site.data.categories[category_name] | default: category_name | escape }}</h3>
        <span>{{ category[1].size }} 篇</span>
      </header>
      <ol class="category-post-list">
        {% for post in category.last %}
          <li>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ol>
    </section>
  {% endfor %}
</div>
