---
title: "Vector Space - 向量空间"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-03-11T17:54:23+08:00"
updated_at: "2026-05-13T16:56:15+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/linear-algebra/vector-space/"
course_page: true
doc_type: "note"
description: "线性代数 · Vector Space - 向量空间"
excerpt: "线性代数 · Vector Space - 向量空间"
---

{% raw %}
向量（Vector）运算的 8 条性质：
- <span class="course-math" data-tex="\mathbf{x}+\mathbf{y}=\mathbf{y}+\mathbf{x}" data-display="false"><code>\mathbf{x}+\mathbf{y}=\mathbf{y}+\mathbf{x}</code></span>。
- <span class="course-math" data-tex="(\mathbf{x}+\mathbf{y})+\mathbf{z}=\mathbf{x}+(\mathbf{y}+\mathbf{z})" data-display="false"><code>(\mathbf{x}+\mathbf{y})+\mathbf{z}=\mathbf{x}+(\mathbf{y}+\mathbf{z})</code></span>。
- 存在一个唯一的零向量 <span class="course-math" data-tex="\mathbf{0}" data-display="false"><code>\mathbf{0}</code></span> 使得 <span class="course-math" data-tex="\mathbf{x}+\mathbf{0}=\mathbf{0}+\mathbf{x}=\mathbf{x}" data-display="false"><code>\mathbf{x}+\mathbf{0}=\mathbf{0}+\mathbf{x}=\mathbf{x}</code></span>。
- 对每个 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span>，存在一个唯一的 <span class="course-math" data-tex="-\mathbf{x}" data-display="false"><code>-\mathbf{x}</code></span> 使得 <span class="course-math" data-tex="\mathbf{x}+(-\mathbf{x})=(-\mathbf{x})+\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{x}+(-\mathbf{x})=(-\mathbf{x})+\mathbf{x}=\mathbf{0}</code></span>
- <span class="course-math" data-tex="1\mathbf{x}=\mathbf{x}" data-display="false"><code>1\mathbf{x}=\mathbf{x}</code></span>
- <span class="course-math" data-tex="(c_{1}c_{2})\mathbf{x}=c_{1}(c_{2}\mathbf{x})" data-display="false"><code>(c_{1}c_{2})\mathbf{x}=c_{1}(c_{2}\mathbf{x})</code></span>
- <span class="course-math" data-tex="c(\mathbf{x}+\mathbf{y})=c\mathbf{x}+c\mathbf{y}" data-display="false"><code>c(\mathbf{x}+\mathbf{y})=c\mathbf{x}+c\mathbf{y}</code></span>
- <span class="course-math" data-tex="(c_{1}+c_{2})\mathbf{x}=c_{1}\mathbf{x}+c_{2}\mathbf{x}" data-display="false"><code>(c_{1}+c_{2})\mathbf{x}=c_{1}\mathbf{x}+c_{2}\mathbf{x}</code></span>
注意这里的向量可以不止是一列数字，也可以是矩阵，也可以是函数，只要能做线性组合就好。

定义 **向量空间（Vector Space）** <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 为一个向量的集合，其中定义了向量的加法运算与数乘运算，且这些运算满足以上 8 条性质。

对一个向量空间 <span class="course-math" data-tex="(V, +, \cdot)" data-display="false"><code>(V, +, \cdot)</code></span>，它具有以下性质：
- <span class="course-math" data-tex="0\cdot \mathbf{x}=\mathbf{0}" data-display="false"><code>0\cdot \mathbf{x}=\mathbf{0}</code></span>
- <span class="course-math" data-tex="(-1)\cdot \mathbf{x}=-\mathbf{x}" data-display="false"><code>(-1)\cdot \mathbf{x}=-\mathbf{x}</code></span>
- 若 <span class="course-math" data-tex="\mathbf{x}+\mathbf{y}=\mathbf{x}+\mathbf{z}" data-display="false"><code>\mathbf{x}+\mathbf{y}=\mathbf{x}+\mathbf{z}</code></span>，则 <span class="course-math" data-tex="\mathbf{y}=\mathbf{z}" data-display="false"><code>\mathbf{y}=\mathbf{z}</code></span>
- <span class="course-math" data-tex="\beta \cdot \mathbf{0}=\mathbf{0}, \forall \beta \in \mathbb{R}" data-display="false"><code>\beta \cdot \mathbf{0}=\mathbf{0}, \forall \beta \in \mathbb{R}</code></span>
- <span class="course-math" data-tex="\alpha \cdot \mathbf{x}=\mathbf{0}\implies\alpha=0" data-display="false"><code>\alpha \cdot \mathbf{x}=\mathbf{0}\implies\alpha=0</code></span> 或 <span class="course-math" data-tex="\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{x}=\mathbf{0}</code></span>

定义 **子空间（Subspace）** 为一个向量空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的非空子集 <span class="course-math" data-tex="W" data-display="false"><code>W</code></span>，且满足：
- 加法封闭性：若 <span class="course-math" data-tex="\mathbf{x},\mathbf{y}\in W" data-display="false"><code>\mathbf{x},\mathbf{y}\in W</code></span>，则 <span class="course-math" data-tex="\mathbf{x}+\mathbf{y}\in W" data-display="false"><code>\mathbf{x}+\mathbf{y}\in W</code></span>。
- 数乘封闭性：若 <span class="course-math" data-tex="\mathbf{x} \in W, c\in \mathbb{R}" data-display="false"><code>\mathbf{x} \in W, c\in \mathbb{R}</code></span>，则 <span class="course-math" data-tex="c \mathbf{x}\in W" data-display="false"><code>c \mathbf{x}\in W</code></span>
例如，对空间 <span class="course-math" data-tex="\mathbb{R}^{3}" data-display="false"><code>\mathbb{R}^{3}</code></span>，可能的子空间为零空间，通过原点的直线，通过原点的面，以及它本身。


### 四大基本空间
{: #section-1 }


对于一个 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，它的：

- **列空间（Column Space）：** 所有列向量的线性组合，记作 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span>，为一个 <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> 的子空间。
>  推论：<span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 是相容的当且仅当 <span class="course-math" data-tex="\mathbf{b}\in C(\mathbf{A})" data-display="false"><code>\mathbf{b}\in C(\mathbf{A})</code></span>；若 <span class="course-math" data-tex="\mathbf{A}\in M_{n\times n}" data-display="false"><code>\mathbf{A}\in M_{n\times n}</code></span> 非奇异，则 <span class="course-math" data-tex="C(\mathbf{A})=\mathbb{R}^n" data-display="false"><code>C(\mathbf{A})=\mathbb{R}^n</code></span>。
>  <span class="course-math" data-tex="\mathbf{b} \in C(\mathbf{A})\implies \exists \mathbf{c}\in \mathbb{R}^m,\text{s.t.} \mathbf{A}\mathbf{c}=\mathbf{b}" data-display="false"><code>\mathbf{b} \in C(\mathbf{A})\implies \exists \mathbf{c}\in \mathbb{R}^m,\text{s.t.} \mathbf{A}\mathbf{c}=\mathbf{b}</code></span>

- **零空间/核空间（Nullspace/Kernal）：** 所有使得 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{0}</code></span> 的向量 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span>，记作 <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span>，为一个 <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> 的子空间。
>  推论：若 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 有特解 <span class="course-math" data-tex="\mathbf{x}_{0}" data-display="false"><code>\mathbf{x}_{0}</code></span>，则所有的解可以写成 <span class="course-math" data-tex="\mathbf{x}=\mathbf{x}_{0}+\mathbf{x}_{n}" data-display="false"><code>\mathbf{x}=\mathbf{x}_{0}+\mathbf{x}_{n}</code></span>，其中 <span class="course-math" data-tex="\mathbf{x}_{n} \in N(\mathbf{A})" data-display="false"><code>\mathbf{x}_{n} \in N(\mathbf{A})</code></span>。

- **行空间（Row Space）**：<span class="course-math" data-tex="C(\mathbf{A}^T) \subset \mathbb{R}^n" data-display="false"><code>C(\mathbf{A}^T) \subset \mathbb{R}^n</code></span>
- **左零空间（Left Nullspace）：** ****<span class="course-math" data-tex="N(\mathbf{A}^T)\subset \mathbb{R}^m" data-display="false"><code>N(\mathbf{A}^T)\subset \mathbb{R}^m</code></span>



### 向量张成的空间
{: #section-2 }


被向量 <span class="course-math" data-tex="\mathbf{w}_{1},\mathbf{w}_{2},\dots,\mathbf{w}_{l}" data-display="false"><code>\mathbf{w}_{1},\mathbf{w}_{2},\dots,\mathbf{w}_{l}</code></span> 张成的空间（Spanned by <span class="course-math" data-tex="\mathbf{w}_{1},\mathbf{w}_{2},\dots \mathbf{w}_{l}" data-display="false"><code>\mathbf{w}_{1},\mathbf{w}_{2},\dots \mathbf{w}_{l}</code></span>）为这些向量的所有线性组合构成的集合。

空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>  的基（Basis）：
- 一组线性无关的向量 <span class="course-math" data-tex="v_{1},v_{2},\dots,v_{n}" data-display="false"><code>v_{1},v_{2},\dots,v_{n}</code></span> 。
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 为这些向量张成的空间。
这里 <span class="course-math" data-tex="n=\text{dim}V" data-display="false"><code>n=\text{dim}V</code></span>。
记得验证空间非空。

定理：<span class="course-math" data-tex="\mathbf{v}_{1},\mathbf{v}_{2},\dots \mathbf{v}_{n}\in \mathbb{R}^n" data-display="false"><code>\mathbf{v}_{1},\mathbf{v}_{2},\dots \mathbf{v}_{n}\in \mathbb{R}^n</code></span> 是 <span class="course-math" data-tex="\mathbb{R}^{n}" data-display="false"><code>\mathbb{R}^{n}</code></span> 的一组基，当且仅当 <span class="course-math" data-tex="\mathbf{A}=[\mathbf{v}_{1}\dots \mathbf{v}_{n}]" data-display="false"><code>\mathbf{A}=[\mathbf{v}_{1}\dots \mathbf{v}_{n}]</code></span> 可逆。

对于多项式集 <span class="course-math" data-tex="\mathbb{R}[x]_{\leq n}=\{ a_{0}+a_{1}x+\dots+a_{n}x^{n} &#124; a_{1},a_{2},\dots,a_{n}\in \mathbb{R}\}" data-display="false"><code>\mathbb{R}[x]_{\leq n}=\{ a_{0}+a_{1}x+\dots+a_{n}x^{n} &#124; a_{1},a_{2},\dots,a_{n}\in \mathbb{R}\}</code></span>，一组基为 <span class="course-math" data-tex="1,x,x^{2},x^{3},\dots,x^{n}" data-display="false"><code>1,x,x^{2},x^{3},\dots,x^{n}</code></span>。

定理：若向量空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 存在两组基 <span class="course-math" data-tex="\mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{n}" data-display="false"><code>\mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{n}</code></span> 和 <span class="course-math" data-tex="\mathbf{w}_{1},\mathbf{w}_{2},\dots,\mathbf{w}_{n}" data-display="false"><code>\mathbf{w}_{1},\mathbf{w}_{2},\dots,\mathbf{w}_{n}</code></span>，则 <span class="course-math" data-tex="m=n" data-display="false"><code>m=n</code></span>。这里 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 定义为向量空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的维数（dimension）<span class="course-math" data-tex="\text{dim}V" data-display="false"><code>\text{dim}V</code></span>。


### 基本空间的基
{: #section-3 }


对于 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>：
**找 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span> 的基：**
- 将 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 化为阶梯型矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span>，则 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 的一组列线性无关等价于对应的 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列是线性无关的。
- <span class="course-math" data-tex="C(\mathbf{U})" data-display="false"><code>C(\mathbf{U})</code></span> 的一组基是其 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个包含主元的列（这与 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span> 不同，需要回去找 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列）。
- <span class="course-math" data-tex="\text{dim}C(\mathbf{A})=r=\text{rank}(\mathbf{A})" data-display="false"><code>\text{dim}C(\mathbf{A})=r=\text{rank}(\mathbf{A})</code></span>。
**找 <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> 的基：**
- 找 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{0}</code></span> 的特解，也就是说化成行最简型 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 后得到 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个自由变量，将其中一个设为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，其他设为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 得到一个特解，总共得到 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解。这些特解就是基。
- <span class="course-math" data-tex="\text{dim}N(\mathbf{A})=n-r" data-display="false"><code>\text{dim}N(\mathbf{A})=n-r</code></span>，也称为零化度（Nullity）。

**秩-零化度定理：** <span class="course-math" data-tex="\text{rank}(\mathbf{A})+\text{dim}N(\mathbf{A})=n" data-display="false"><code>\text{rank}(\mathbf{A})+\text{dim}N(\mathbf{A})=n</code></span>。

**找 <span class="course-math" data-tex="C(\mathbf{A}^T)" data-display="false"><code>C(\mathbf{A}^T)</code></span> 的基：**
-  行变换不影响行空间，因此 <span class="course-math" data-tex="C(\mathbf{A}^T)=C(\mathbf{U}^T)" data-display="false"><code>C(\mathbf{A}^T)=C(\mathbf{U}^T)</code></span>。
-  <span class="course-math" data-tex="\text{dim}C(\mathbf{A}^T)=r=\text{rank}(\mathbf{A}^T)" data-display="false"><code>\text{dim}C(\mathbf{A}^T)=r=\text{rank}(\mathbf{A}^T)</code></span>。
**找 <span class="course-math" data-tex="N(\mathbf{A}^T)" data-display="false"><code>N(\mathbf{A}^T)</code></span> 的基：
- 设 <span class="course-math" data-tex="\mathbf{A}=\mathbf{L}\mathbf{U}" data-display="false"><code>\mathbf{A}=\mathbf{L}\mathbf{U}</code></span>，则 <span class="course-math" data-tex="\mathbf{L}^{-1}" data-display="false"><code>\mathbf{L}^{-1}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行构成 <span class="course-math" data-tex="N(\mathbf{A}^T)" data-display="false"><code>N(\mathbf{A}^T)</code></span> 的基。
- <span class="course-math" data-tex="\text{dim}N(\mathbf{A}^T)=m-r" data-display="false"><code>\text{dim}N(\mathbf{A}^T)=m-r</code></span>。

从而我们可以发现，<span class="course-math" data-tex="C(\mathbf{A}), N(\mathbf{A}^T)\subset \mathbb{R}^m, C(\mathbf{A}^T), N(\mathbf{A})\subset \mathbb{R}^n" data-display="false"><code>C(\mathbf{A}), N(\mathbf{A}^T)\subset \mathbb{R}^m, C(\mathbf{A}^T), N(\mathbf{A})\subset \mathbb{R}^n</code></span> ，且有：
<span class="course-math course-math-display" data-tex="C(\mathbf{A}) \perp N(\mathbf{A}^{T})" data-display="true"><code>C(\mathbf{A}) \perp N(\mathbf{A}^{T})</code></span>
<span class="course-math course-math-display" data-tex="C(\mathbf{A^T}) \perp N(\mathbf{A})" data-display="true"><code>C(\mathbf{A^T}) \perp N(\mathbf{A})</code></span>

高斯-约旦消元法求解四大基本子空间：<span class="course-math" data-tex="\begin{bmatrix}A&#124;I\end{bmatrix}\to \begin{bmatrix}R&#124;E\end{bmatrix}" data-display="false"><code>\begin{bmatrix}A&#124;I\end{bmatrix}\to \begin{bmatrix}R&#124;E\end{bmatrix}</code></span>

|基本子空间|维数|提取方法|
|---|---|---|
|**行空间 <span class="course-math" data-tex="C(A^T)" data-display="false"><code>C(A^T)</code></span>**| <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |直接取 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个非零行向量|
|**列空间 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span>**| <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |找 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 中的主元列，取**原矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>** 中对应的列|
|**零空间 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span>**| <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> |利用 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 求解 <span class="course-math" data-tex="Rx=0" data-display="false"><code>Rx=0</code></span> 的基础解系|
|**左零空间 <span class="course-math" data-tex="N(A^T)" data-display="false"><code>N(A^T)</code></span>**| <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> |取 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 中对应 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 里全零行所在位置的那几行|
{% endraw %}
