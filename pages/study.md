---
layout: default
title: 学习
description: 大学课程、信息学竞赛、中学数学与高中学习记录。
keywords: 学习, 课程, 数学, 算法, 信息学竞赛, 学习记录
permalink: /study/
learning_page: true
---

{% assign learning_documents = site.posts | concat: site.study %}
{% assign informatics_documents = learning_documents | where: 'learning_area', 'informatics' %}
{% assign mathematics_documents = learning_documents | where: 'learning_area', 'mathematics' %}
{% assign high_school_documents = learning_documents | where: 'learning_area', 'high-school' %}
{% assign updating_courses = site.data.courses | where: 'status', 'updating' %}
<article class="learning-hub">
  <h1>学习</h1>
  <nav class="learning-entries" aria-label="学习内容入口">
    <a class="learning-entry" href="{{ '/courses/' | relative_url }}">
      <h2>大学课程笔记</h2>
      <span>共 {{ site.data.courses.size }} 门</span>
    </a>
    <a class="learning-entry" href="{{ '/study/topics/' | relative_url }}">
      <h2>信息学竞赛</h2>
      <span>共 {{ informatics_documents.size }} 篇</span>
    </a>
    <a class="learning-entry" href="{{ '/study/mathematics/' | relative_url }}">
      <h2>中学数学</h2>
      <span>共 {{ mathematics_documents.size }} 篇</span>
    </a>
    <a class="learning-entry" href="{{ '/study/records/' | relative_url }}">
      <h2>高中学习报告</h2>
      <span>共 {{ high_school_documents.size }} 篇</span>
    </a>
  </nav>
  {% if updating_courses.size > 0 %}
    <section class="learning-active">
      <h2>更新中的课程</h2>
      <ul>
        {% for course in updating_courses %}<li><a href="{{ course.url | relative_url }}">{{ course.title | escape }}</a></li>{% endfor %}
      </ul>
    </section>
  {% endif %}
  <section class="learning-recent">
    <h2>最近的笔记与记录</h2>
    {% assign learning_articles = learning_documents | where_exp: 'article', 'article.learning_area' %}
    {% assign course_articles = site.courses | where: 'doc_type', 'note' %}
    {% assign recent_documents = learning_articles | concat: course_articles %}
    {% capture recent_keys %}{% for document in recent_documents %}{{ document.created_at | default: document.date | date: '%Y%m%d%H%M%S' }}::{{ document.url }}|{% endfor %}{% endcapture %}
    {% assign recent_keys = recent_keys | split: '|' | sort | reverse %}
    <ol class="learning-article-list">
      {% for key in recent_keys limit: 5 %}
        {% assign document_url = key | split: '::' | last %}
        {% assign document = recent_documents | where: 'url', document_url | first %}
        <li>{% include article-overview.html article=document show_course=true %}</li>
      {% endfor %}
    </ol>
  </section>
</article>
