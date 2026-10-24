---
title: "Sequential Logic - 时序逻辑"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-10-20T15:28:58+08:00"
updated_at: "2026-10-20T15:50:05+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/digital-logic/sequential-logic/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Sequential Logic - 时序逻辑"
excerpt: "数字逻辑 · Sequential Logic - 时序逻辑"
---

{% raw %}

时序逻辑相比于组合逻辑，就是：输出不仅取决于输入，还取决于电路当前的状态。那么就必须要有一个寄存的单元，把电路的当前状态存下来。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑" width="1456" height="422" loading="lazy" decoding="async">
分为：
- 同步时序电路：依赖于离散的时间。
- 异步时序电路：依赖于每一个瞬间的状态。

同步时序电路需要一个时钟模块，输出只被时钟的脉冲影响。


## 锁存器（Latch）
{: #section-1 }



### SR Latch
{: #section-2 }


Set / Reset Latch 可以存 1 bit 的信号。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-1.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-1" width="1868" height="576" loading="lazy" decoding="async">

两种可用的状态：
- Set：<span class="course-math" data-tex="Q=1,Q&#x27;=0" data-display="false"><code>Q=1,Q&#x27;=0</code></span>
- Reset: <span class="course-math" data-tex="Q=0,Q&#x27;=1" data-display="false"><code>Q=0,Q&#x27;=1</code></span>

分析：
- 若 <span class="course-math" data-tex="R=1,S=0" data-display="false"><code>R=1,S=0</code></span>，由于 NOR Gate 的性质，容易发现，会形成稳定状态 <span class="course-math" data-tex="Q=0,Q&#x27;=1" data-display="false"><code>Q=0,Q&#x27;=1</code></span>。
- 若 <span class="course-math" data-tex="R=0,S=1" data-display="false"><code>R=0,S=1</code></span>，由于 NOR Gate 的性质，容易发现，会形成稳定状态 <span class="course-math" data-tex="Q=1,Q&#x27;=0" data-display="false"><code>Q=1,Q&#x27;=0</code></span>。
- 若 <span class="course-math" data-tex="R=0,S=0" data-display="false"><code>R=0,S=0</code></span>。假设此时 <span class="course-math" data-tex="Q=0,Q&#x27;=1" data-display="false"><code>Q=0,Q&#x27;=1</code></span>，那么会发现电路状态不改变；假设此时 <span class="course-math" data-tex="Q=1,Q&#x27;=0" data-display="false"><code>Q=1,Q&#x27;=0</code></span>，那么会发现电路状态也不会改变。（会保持原来的状态）。
- 若 <span class="course-math" data-tex="R=1,S=1" data-display="false"><code>R=1,S=1</code></span>。发现此时 <span class="course-math" data-tex="Q=0,Q&#x27;=0" data-display="false"><code>Q=0,Q&#x27;=0</code></span>，我们**禁止**这种情况。

因此 SR Latch 的 function table 就是：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-2.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-2" width="1108" height="626" loading="lazy" decoding="async">
时序图：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-3.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-3" width="1300" height="558" loading="lazy" decoding="async">
{% endraw %}
