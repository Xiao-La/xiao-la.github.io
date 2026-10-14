---
title: "Standard Component - 标准组件"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-10-13T15:24:29+08:00"
updated_at: "2026-10-13T15:42:22+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/digital-logic/standard-component/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Standard Component - 标准组件"
excerpt: "数字逻辑 · Standard Component - 标准组件"
---

{% raw %}


## 译码器（Decoder）
{: #section-1 }



**One-hot Representation.** 用 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个 bit 的比特串表示 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素，每串都只有一个 bit 为 1，其他 bit 为 0（或是反过来）。

例如： **3-to-8-Line Decoder.**
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6.png' | relative_url }}{% raw %}" alt="Standard Component - 标准组件" width="538" height="188" loading="lazy" decoding="async">
可以用框图来省略 decoder 内部的内容。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-1.png' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-1" width="1954" height="1090" loading="lazy" decoding="async">
这种 decoder 实际上生成了所有的 minterm。把它们连出来可以造出 SOM 形式的输出。

其他 decoder 的例子：
- BCD 码翻译到数码管的七段信号。
- 地址译码。
{% endraw %}
