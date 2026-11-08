---
title: "Manifold - 流形"
course_id: "differential-geometry"
course_title: "微分几何"
section: ""
status: "updating"
created_at: "2026-10-15T15:36:26+08:00"
updated_at: "2026-11-08T17:51:58+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/differential-geometry/manifold/"
course_page: true
doc_type: "note"
description: "微分几何 · Manifold - 流形"
excerpt: "微分几何 · Manifold - 流形"
---

{% raw %}


## 拓扑基础
{: #section-1 }


前置： <a href="{% endraw %}{{ '/courses/discrete-mathematics/set-and-function/' | relative_url }}{% raw %}">Set and Function - 集合与函数</a>

**开子集（Open Subset）**：我们把集合 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的**幂集** <span class="course-math" data-tex="\mathscr{P}" data-display="false"><code>\mathscr{P}</code></span> **划分为两部分**，一部分是 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的开子集，剩下的部分为 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的非开子集。
这里开子集的那一部分，就是 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的一个**拓扑（Topology）**，记作 <span class="course-math" data-tex="\mathscr{T}" data-display="false"><code>\mathscr{T}</code></span>。这个划分也要满足三个基本性质：
- **空集与全集。** 
<span class="course-math course-math-display" data-tex="\varnothing, X\in \mathscr{T}" data-display="true"><code>\varnothing, X\in \mathscr{T}</code></span>
- **有限个开子集之交也是开子集。** 
<span class="course-math course-math-display" data-tex="O_{i}\in \mathscr{T},i=1,2, \dots,n\to \bigcap _{i}O_{i}\in \mathscr{T}" data-display="true"><code>O_{i}\in \mathscr{T},i=1,2, \dots,n\to \bigcap _{i}O_{i}\in \mathscr{T}</code></span>
- **任意个开子集之并也是开子集。**
<span class="course-math course-math-display" data-tex="O_{\alpha}\in \mathscr{T},\forall \alpha\to \bigcup _{\alpha}O_{\alpha}\in \mathscr{T}" data-display="true"><code>O_{\alpha}\in \mathscr{T},\forall \alpha\to \bigcup _{\alpha}O_{\alpha}\in \mathscr{T}</code></span>
一个集合配上它的一个拓扑，记为  <span class="course-math" data-tex="(X,\mathscr{T})" data-display="false"><code>(X,\mathscr{T})</code></span> ，就是一个**拓扑空间（Topological Space）**。
一些特殊的拓扑空间：
- **离散拓扑。**<span class="course-math" data-tex="(X,\mathscr{T}=\mathscr{P})" data-display="false"><code>(X,\mathscr{T}=\mathscr{P})</code></span>，开子集最多。
- **凝聚拓扑。**<span class="course-math" data-tex="(X,\mathscr{T}=\{ \varnothing ,X\})" data-display="false"><code>(X,\mathscr{T}=\{ \varnothing ,X\})</code></span>，开子集最少。
- 对 <span class="course-math" data-tex="X=\mathbb{R}^{n}" data-display="false"><code>X=\mathbb{R}^{n}</code></span>：先定义开球（Open Ball）：
<span class="course-math course-math-display" data-tex="B(x_{0},r)=\{ x\in \mathbb{R}^{n}&#124; \lvert x-x_{0} \rvert&lt;r \}" data-display="true"><code>B(x_{0},r)=\{ x\in \mathbb{R}^{n}&#124; \lvert x-x_{0} \rvert&lt;r \}</code></span>
- 其中 <span class="course-math" data-tex="\lvert x-x_{0} \rvert" data-display="false"><code>\lvert x-x_{0} \rvert</code></span> 表示 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 与 <span class="course-math" data-tex="x_{0}" data-display="false"><code>x_{0}</code></span> 之间的欧氏距离。
- 那么可以定义 **通常拓扑** 为所有 **可表示为开球之并** 的子集，记作 <span class="course-math" data-tex="\mathscr{T}_{u}" data-display="false"><code>\mathscr{T}_{u}</code></span>。
- 对 <span class="course-math" data-tex="\mathbb{R}^{2}" data-display="false"><code>\mathbb{R}^{2}</code></span> 就是开圆盘（Open Disk），对 <span class="course-math" data-tex="\mathbb{R}^{1}" data-display="false"><code>\mathbb{R}^{1}</code></span> 就是开区间（Open Interval）。

**诱导拓扑（Induced Topology）**：当我们有 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的子集 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，可以从 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的拓扑 <span class="course-math" data-tex="\mathscr{T}" data-display="false"><code>\mathscr{T}</code></span> 得到子集 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个拓扑
<span class="course-math course-math-display" data-tex="\mathscr{S}:=\{ V \subseteq A \mid \exists O \in \mathscr{T},\, V=O\cap A \}" data-display="true"><code>\mathscr{S}:=\{ V \subseteq A \mid \exists O \in \mathscr{T},\, V=O\cap A \}</code></span>

定义拓扑空间之间的映射 <span class="course-math" data-tex="f:(X,\mathscr{T})\to (Y,\mathscr{S})" data-display="false"><code>f:(X,\mathscr{T})\to (Y,\mathscr{S})</code></span> 的 **连续性**（记作 <span class="course-math" data-tex="C^{0}" data-display="false"><code>C^{0}</code></span>）：
<span class="course-math course-math-display" data-tex="O\in \mathscr{S}\to f^{-1}[O]\in \mathscr{T}" data-display="true"><code>O\in \mathscr{S}\to f^{-1}[O]\in \mathscr{T}</code></span>
这里 <span class="course-math" data-tex="f^{-1}[O]" data-display="false"><code>f^{-1}[O]</code></span> 表示 <span class="course-math" data-tex="O" data-display="false"><code>O</code></span> 的所有元素对应的原像组成的集合。
- 考虑 <span class="course-math" data-tex="f:\mathbb{R}\to \mathbb{R}" data-display="false"><code>f:\mathbb{R}\to \mathbb{R}</code></span> 一元函数，上述定义和通常的 <span class="course-math" data-tex="\varepsilon-\delta" data-display="false"><code>\varepsilon-\delta</code></span> 语言是等价的：陪域的一个开区间的“逆像”是定义域中开区间的并。

定义 **同胚（Homeomorphism）**：我们说两个拓扑空间是**相互同胚**的，若它们之间存在双射，且这个映射及其逆映射都是连续的。这个映射就叫做**同胚映射**，简称**同胚**。
- 几何直观上看，对一个几何对象不剪，不粘地变换，就和原来是相互同胚的。
{% endraw %}
