---
layout: default
title: 专题笔记
description: 数学证明、算法知识专题、代码模板与刷题题解。
permalink: /study/topics/
learning_page: true
---

{% assign learning_documents = site.posts | concat: site.study %}
{% assign topics = learning_documents | where: 'learning_kind', 'topic' %}
<article class="learning-index">
  <p class="learning-breadcrumb"><a href="{{ '/study/' | relative_url }}">学习</a> / 专题笔记</p>
  <h1>专题笔记</h1>
  <nav class="learning-section-nav" aria-label="专题索引">
    {% for topic in site.data.learning.topics %}
      {% assign articles = topics | where: 'learning_topic', topic.id %}
      <a href="#{{ topic.id }}">{{ topic.title | escape }} <small>{{ articles.size }} 篇</small></a>
    {% endfor %}
  </nav>
  {% for topic in site.data.learning.topics %}
    {% assign articles = topics | where: 'learning_topic', topic.id | sort: 'date' | reverse %}
    <section class="learning-section" id="{{ topic.id }}">
      <h2>{{ topic.title | escape }}</h2>
      {% if topic.id == 'algorithms' %}
        {% for format in site.data.learning.formats %}
          {% assign format_articles = articles | where: 'learning_format', format.id %}
          <h3>{{ format.title | escape }}</h3>
          {% include learning-list.html documents=format_articles %}
        {% endfor %}
      {% else %}
        {% include learning-list.html documents=articles %}
      {% endif %}
    </section>
  {% endfor %}
</article>
