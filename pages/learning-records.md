---
layout: default
title: 学习记录
description: 高三学习报告、信息学竞赛经历、学习方法与早期习惯记录。
permalink: /study/records/
learning_page: true
---

{% assign learning_documents = site.posts | concat: site.study %}
{% assign records = learning_documents | where: 'learning_kind', 'record' %}
<article class="learning-index">
  <p class="learning-breadcrumb"><a href="{{ '/study/' | relative_url }}">学习</a> / 学习记录</p>
  <h1>学习记录</h1>
  <nav class="learning-section-nav" aria-label="学习记录索引">
    {% for stage in site.data.learning.stages %}
      {% assign articles = records | where: 'learning_stage', stage.id %}
      <a href="#{{ stage.id }}">{{ stage.title | escape }} <small>{{ articles.size }} 篇</small></a>
    {% endfor %}
  </nav>
  {% for stage in site.data.learning.stages %}
    {% assign articles = records | where: 'learning_stage', stage.id | sort: 'date' | reverse %}
    <section class="learning-section" id="{{ stage.id }}">
      <h2>{{ stage.title | escape }}</h2>
      {% include learning-list.html documents=articles %}
    </section>
  {% endfor %}
</article>
