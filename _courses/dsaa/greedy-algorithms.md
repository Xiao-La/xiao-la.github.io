---
title: "Greedy Algorithms"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-11-24T16:37:06+08:00"
updated_at: "2026-11-26T17:46:44+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/dsaa/greedy-algorithms/"
course_page: true
doc_type: "note"
description: "数据结构与算法分析 · Greedy Algorithms"
excerpt: "数据结构与算法分析 · Greedy Algorithms"
---

{% raw %}
通过不断做局部最优的选择来解决问题。


## 例子
{: #section-1 }


**活动规划。** 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个活动 <span class="course-math" data-tex="a_{1},a_{2}, \dots, a_{n}" data-display="false"><code>a_{1},a_{2}, \dots, a_{n}</code></span>，每个活动有开始时间 <span class="course-math" data-tex="s_{i}" data-display="false"><code>s_{i}</code></span> 和结束时间 <span class="course-math" data-tex="f_{i}" data-display="false"><code>f_{i}</code></span>，求最多能选几个活动使得这些活动的时间不发生重合。假设已经按照结束时间排过序：<span class="course-math" data-tex="f_{1}\leq f_{2}\leq \dots\leq f_{n}" data-display="false"><code>f_{1}\leq f_{2}\leq \dots\leq f_{n}</code></span>。
- 可以使用区间 DP。令 <span class="course-math" data-tex="S_{ij}" data-display="false"><code>S_{ij}</code></span> 表示所有在 <span class="course-math" data-tex="a_{i}" data-display="false"><code>a_{i}</code></span> 结束之后开始，且在 <span class="course-math" data-tex="a_{j}" data-display="false"><code>a_{j}</code></span> 开始前结束的活动的集合，则：
<span class="course-math course-math-display" data-tex="c[i,j]=\begin{cases}&#10;0, &amp; S_{ij}=\varnothing \\&#10;\max \{ c[i,k] + c[k,j] + 1\mid a_{k}\in S_{ij}\}, &amp; S_{ij}\neq \varnothing&#10;\end{cases}" data-display="true"><code>c[i,j]=\begin{cases}&#10;0, &amp; S_{ij}=\varnothing \\&#10;\max \{ c[i,k] + c[k,j] + 1\mid a_{k}\in S_{ij}\}, &amp; S_{ij}\neq \varnothing&#10;\end{cases}</code></span>
- 最后的答案就是 <span class="course-math" data-tex="c[0,n+1]" data-display="false"><code>c[0,n+1]</code></span>。运行时间是 <span class="course-math" data-tex="O(n^{3})" data-display="false"><code>O(n^{3})</code></span>。
- 贪心的做法：总是选择能留出最多空间的活动，也就是结束时间最早的活动（或者等价的，选开始时间最晚的活动）。
- 这依赖于这样一个定理：令 <span class="course-math" data-tex="S_{k}" data-display="false"><code>S_{k}</code></span> 为在 <span class="course-math" data-tex="a_{k}" data-display="false"><code>a_{k}</code></span> 结束后开始的活动的集合。考虑任意非空的子问题 <span class="course-math" data-tex="S_{k}" data-display="false"><code>S_{k}</code></span>，令 <span class="course-math" data-tex="a_{m}" data-display="false"><code>a_{m}</code></span> 是 <span class="course-math" data-tex="S_{k}" data-display="false"><code>S_{k}</code></span> 中一个结束最早的活动（贪心的选择），那么，<span class="course-math" data-tex="a_{m}" data-display="false"><code>a_{m}</code></span> 被包含在某个最优的选择方案 <span class="course-math" data-tex="A_{k}" data-display="false"><code>A_{k}</code></span> 中（最优的选择）。
- 证明：<span class="course-math" data-tex="a_{m}" data-display="false"><code>a_{m}</code></span> 是整个子问题中结束最早的活动，假设 <span class="course-math" data-tex="a_{j}" data-display="false"><code>a_{j}</code></span> 是最优选择方案 <span class="course-math" data-tex="A_{k}" data-display="false"><code>A_{k}</code></span> 中结束最早的活动，且 <span class="course-math" data-tex="j\neq m" data-display="false"><code>j\neq m</code></span>，于是有 <span class="course-math" data-tex="f_{m}\leq f_{j}" data-display="false"><code>f_{m}\leq f_{j}</code></span>。那么我们把 <span class="course-math" data-tex="a_{j}" data-display="false"><code>a_{j}</code></span> 换成 <span class="course-math" data-tex="a_{m}" data-display="false"><code>a_{m}</code></span>，由于 <span class="course-math" data-tex="a_{j}" data-display="false"><code>a_{j}</code></span> 在最优选择方案里结束最早，而换成 <span class="course-math" data-tex="a_{m}" data-display="false"><code>a_{m}</code></span> 不会让结束时间变晚，于是不会和其他活动冲突。那么新的方案 <span class="course-math" data-tex="A_{k}&#x27;=(A_{k}\setminus \{ a_{j} \})\cup \{ a_{m} \}" data-display="false"><code>A_{k}&#x27;=(A_{k}\setminus \{ a_{j} \})\cup \{ a_{m} \}</code></span> 也合法，且活动个数不变。
- 伪代码（注意这里已经按结束时间排序）：
<pre class="course-pseudocode">\begin{algorithm}
\begin{algorithmic}
  \Procedure{Greedy-Activity-Selector}{$s, f, n$}
    \State $A=\{a_1\}$
    \State $k=1$
    \For{$m=2$ \To $n$}
      \If{$s[m] \ge f[k]$}
        \State $A=A\cup \{a_m \}$
        \State $k=m$
      \EndIf
    \EndFor
    \Return $A$
  \EndProcedure
\end{algorithmic}
\end{algorithm}
</pre>

**找零。** 用最少的硬币数组成一个金额。那么可以通过不断取最大面额的硬币来实现（贪心的选择）。（不是所有货币系统都可以贪心，有些面额是不行的）

一些看起来可以贪心但是正确性不对的问题：
- TSP
- 0-1 背包
（都是 NP 完全问题）
不过如果物品可以切分（可以只拿一个物品的一部分，价值和重量都按比例缩放），背包问题可以贪心。
{% endraw %}
