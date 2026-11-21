---
title: "Dynamic Programming"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-11-17T16:46:38+08:00"
updated_at: "2026-11-21T13:27:50+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/dsaa/dynamic-programming/"
course_page: true
doc_type: "note"
description: "数据结构与算法分析 · Dynamic Programming"
excerpt: "数据结构与算法分析 · Dynamic Programming"
---

{% raw %}
动态规划（Dynamic Programming）是一种算法设计方式，通常用于，问题的解是由一系列的“决定”组成的。解决的方法是分成一些子问题，把这些子问题的解存在一个表里以避免重复计算。与分治的区别是，动态规划分的子问题常常会有重叠。

一些比较抽象的使用条件：
- 解决的问题最好有 **最优子结构（Optimal Substructure）：** 当原问题的解是最优的时候，每个子问题的解也是最优的。
- 子问题所占的空间较小（因为要用表格存下来）。
- 子问题可以在多项式时间内解决。
典型的问题结构：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Dynamic%20Programming.webp' | relative_url }}{% raw %}" alt="Dynamic Programming" width="152" height="351" loading="lazy" decoding="async">这里，例如 4 到 3 的箭头，表示规模为 4 的问题依赖于规模为 3 的问题的答案。


## 例子
{: #section-1 }


有一段长度为整数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的木棍，可以不花成本地把它切成一些长度仍为整数的段。长度为 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的段的价值为 <span class="course-math" data-tex="p_{i}" data-display="false"><code>p_{i}</code></span>，求切分后，最大的 **每段价值之和**。
- 一共有 <span class="course-math" data-tex="2^{n-1}" data-display="false"><code>2^{n-1}</code></span> 种切分方式，不可简单枚举。
- 这具有最优子结构。长度为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的木棍，若在 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 处切分，最优价值就是左边长度为 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的最优价值，和右边长度为 <span class="course-math" data-tex="n-i" data-display="false"><code>n-i</code></span> 的最优价值加起来；也可以不切，价值为 <span class="course-math" data-tex="p_{n}" data-display="false"><code>p_{n}</code></span>。
- 设长度为 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的最优价值为 <span class="course-math" data-tex="r_{i}" data-display="false"><code>r_{i}</code></span>，那么有 Bellman Equation：
<span class="course-math course-math-display" data-tex="r_{n}= \max \{ p_{n}, r_{i}+r_{n-i} \mid 1\leq i\leq n-1 \}" data-display="true"><code>r_{n}= \max \{ p_{n}, r_{i}+r_{n-i} \mid 1\leq i\leq n-1 \}</code></span>
- 这也等价于另一种形式，就是去枚举最左边第一刀的长度：
<span class="course-math course-math-display" data-tex="r_{n}= \max \{ p_{i}+r_{n-i}\mid1\leq i\leq n \}" data-display="true"><code>r_{n}= \max \{ p_{i}+r_{n-i}\mid1\leq i\leq n \}</code></span>
- 这里 <span class="course-math" data-tex="r_{0}=0, r_{1}=p_{1}" data-display="false"><code>r_{0}=0, r_{1}=p_{1}</code></span>。
实现方式：
- 直接递归。这样的话 <span class="course-math" data-tex="T(n)=1+\sum _{i=0}^{n-1}T(i)" data-display="false"><code>T(n)=1+\sum _{i=0}^{n-1}T(i)</code></span>，这个结果是 <span class="course-math" data-tex="T(n)=\Theta(2^{n})" data-display="false"><code>T(n)=\Theta(2^{n})</code></span>。
- 循环，bottom-up。这样的话 <span class="course-math" data-tex="T(n)=\Theta(n^{2})" data-display="false"><code>T(n)=\Theta(n^{2})</code></span>。
- 记忆化搜索（Memoization）。同样有 <span class="course-math" data-tex="T(n)=\Theta(n^{2})" data-display="false"><code>T(n)=\Theta(n^{2})</code></span>。
若要得到最优的一种切分方式，可以在过程中记录一些额外的信息，例如记 <span class="course-math" data-tex="s_{i}" data-display="false"><code>s_{i}</code></span> 表示，对于长度为 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的木棒，最优的切分方式，最左边第一刀切的长度，那么取 max 过程中就可以得到这个 <span class="course-math" data-tex="s_{i}" data-display="false"><code>s_{i}</code></span>。
{% endraw %}
