---
layout: default
title: 课程笔记
description: 大学课程与公开课的学习笔记，按课程和章节整理。
permalink: /courses/
course_page: true
---

<h1>课程笔记</h1>
<p class="course-breadcrumb"><a href="{{ '/study/' | relative_url }}">学习</a> / 课程笔记</p>
{% assign course_groups = site.data.courses | group_by: 'status' %}
{% for group in course_groups %}
<h2>{% if group.name == 'updating' %}还在更新{% else %}已完成{% endif %}</h2>
<div class="course-catalog">
{% for course in group.items %}
  <section class="course-card" data-status="{{ course.status }}">
    <h2><a href="{{ course.url | relative_url }}">{{ course.title | escape }}</a></h2>
    <p><span class="course-status">{% if course.status == 'updating' %}更新中{% else %}已完成{% endif %}</span> · {{ course.coverage | escape }} · {{ course.count }} 篇笔记{% if course.resources.size > 0 %} · {{ course.resources.size }} 份 PDF{% endif %}</p>
  </section>
{% endfor %}
</div>
{% endfor %}
{% if site.data.course_references.size > 0 %}
<h2>补充材料</h2>
<ul class="course-note-list">
{% for note in site.data.course_references %}
  <li><a href="{{ note.url | relative_url }}">{{ note.title | escape }}</a></li>
{% endfor %}
</ul>
{% endif %}
