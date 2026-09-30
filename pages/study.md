---
layout: default
title: 学习
description: 课程笔记、专题笔记与学习过程记录。
keywords: 学习, 课程, 数学, 算法, 学习记录
permalink: /study/
learning_page: true
---

{% assign learning_documents = site.posts | concat: site.study %}
{% assign topics = learning_documents | where: 'learning_kind', 'topic' %}
{% assign records = learning_documents | where: 'learning_kind', 'record' %}
{% assign updating_courses = site.data.courses | where: 'status', 'updating' %}
<article class="learning-hub">
  <h1>学习</h1>
  <nav class="learning-entries" aria-label="学习内容入口">
    <a class="learning-entry" href="{{ '/courses/' | relative_url }}">
      <h2>课程笔记</h2>
      <p>大学课程与公开课笔记，按课程和章节整理。</p>
      <span>{{ site.data.courses.size }} 门课程 · {{ updating_courses.size }} 门更新中</span>
    </a>
    <a class="learning-entry" href="{{ '/study/topics/' | relative_url }}">
      <h2>专题笔记</h2>
      <p>数学证明、算法专题、代码模板与题解。</p>
      <span>{{ topics.size }} 篇专题笔记</span>
    </a>
    <a class="learning-entry" href="{{ '/study/records/' | relative_url }}">
      <h2>学习记录</h2>
      <p>阶段报告、竞赛经历与学习方法。</p>
      <span>{{ records.size }} 篇学习记录</span>
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
    {% assign recent = learning_documents | where_exp: 'article', 'article.learning_kind' | sort: 'date' | reverse %}
    {% include learning-list.html documents=recent limit=5 %}
  </section>
</article>
