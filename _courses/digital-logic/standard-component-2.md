---
title: "Standard Component 2 - 标准组件（时序电路）"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-11-17T14:28:13+08:00"
updated_at: "2026-11-17T15:50:14+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/digital-logic/standard-component-2/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Standard Component 2 - 标准组件（时序电路）"
excerpt: "数字逻辑 · Standard Component 2 - 标准组件（时序电路）"
---

{% raw %}


## 寄存器（Register）
{: #section-1 }


种类：
- SISO（Serial-in to Serial-out）
- SIPO（Serial-in to Parallel-out）
- PISO（Parallel-in to Serial-out）
- PIPO（Parallel-in to Parallel-out）
方向：
- 左移位（Left shift）
- 右移位（Right shift）
- 旋转（Rotate left/right）
- 双向（Bidirectional）
也有通用寄存器（Universal shift register）
可以用 FF 来实现，所有的 FF 都由同一个时钟信号驱动。

4-bit SISO Register：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）" width="623" height="168" loading="lazy" decoding="async">数据会在每一个时钟周期往右传递一位。

4-bit PISO Register：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-1.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-1" width="574" height="235" loading="lazy" decoding="async">
4-bit PIPO Register：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-2.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-2" width="527" height="187" loading="lazy" decoding="async">但是这种实现方法，会让输出在时钟上升沿始终与输入同步。为了实现 load 的功能，可以使用多路选择器，把 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 再接回 FF 的输入端口，实现用一个 load 信号来控制是透传还是维持：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-3.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-3" width="515" height="315" loading="lazy" decoding="async">
Universal shift register：可以双方向移位，以及并行 load/out。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-4.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-4" width="502" height="201" loading="lazy" decoding="async">具体实现：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-5.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-5" width="423" height="312" loading="lazy" decoding="async">
Serial to Parallel Converter：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-6.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-6" width="498" height="260" loading="lazy" decoding="async">这里 SIPO 的时钟要更快。


## Sequence Generator
{: #section-2 }


<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个 FF 可以生成一个长度 <span class="course-math" data-tex="N\leq2 ^{n}" data-display="false"><code>N\leq2 ^{n}</code></span> 的序列。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-7.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-7" width="538" height="178" loading="lazy" decoding="async">要不停生成某个序列，就需要去设计上图中的组合电路。这就需要我们列出真值表。
例如，要生成序列 10011，需要 3 个 FF，因为 <span class="course-math" data-tex="5\leq2^{3}" data-display="false"><code>5\leq2^{3}</code></span>。于是可以列出 input Z 与 <span class="course-math" data-tex="Q_{0},Q_{1},Q_{2}" data-display="false"><code>Q_{0},Q_{1},Q_{2}</code></span> 的真值表，从而得到表达式 <span class="course-math" data-tex="Z=(Q_{1}Q_{2})&#x27;" data-display="false"><code>Z=(Q_{1}Q_{2})&#x27;</code></span>，最后完成整个序列生成器。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-8.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-8" width="890" height="330" loading="lazy" decoding="async">再比如，要生成 110101，按同样的方法画真值表，会发现有同样的两个状态，对应不同的次态。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-9.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-9" width="291" height="241" loading="lazy" decoding="async">因此，三个 FF 是不够的，需要四个。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-10.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-10" width="761" height="403" loading="lazy" decoding="async">
{% endraw %}
