---
layout: page
title: About
comments: true
menu: 关于
permalink: /about/
---

> 一年一度秋风劲，不似春光。胜似春光。

我是Xiao_La，这是我的博客。

正在学习*python*。欢迎一起学习。

## 联系

{% for website in site.data.social %}
* {{ website.sitename }}：[@{{ website.name }}]({{ website.url }})
{% endfor %}

## Skill Keywords

{% for category in site.data.skills %}
### {{ category.name }}
<div class="btn-inline">
{% for keyword in category.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
