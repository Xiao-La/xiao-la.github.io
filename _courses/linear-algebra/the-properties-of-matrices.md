---
title: "The Properties of Matrices - 矩阵的性质"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-03-11T16:31:38+08:00"
updated_at: "2026-10-08T21:23:24+08:00"
reference: false
order: 3
layout: "course"
permalink: "/courses/linear-algebra/the-properties-of-matrices/"
course_page: true
doc_type: "note"
description: "线性代数 · The Properties of Matrices - 矩阵的性质"
excerpt: "线性代数 · The Properties of Matrices - 矩阵的性质"
---

{% raw %}
<a href="{% endraw %}{{ '/courses/linear-algebra/matrices-and-system-of-linear-equations/' | relative_url }}{% raw %}">Matrices and System of Linear Equations -  矩阵与线性方程组</a>

## 矩阵的逆
{: #section-1 }


矩阵的逆（Inverse）：方阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的逆记作 <span class="course-math" data-tex="\mathbf{A}^{-1}" data-display="false"><code>\mathbf{A}^{-1}</code></span>，符合 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{-1}= \mathbf{A}^{-1}\mathbf{A}=\mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{A}^{-1}= \mathbf{A}^{-1}\mathbf{A}=\mathbf{I}</code></span>。

矩阵的逆如果存在，则一定唯一：

>  假设存在两个矩阵 <span class="course-math" data-tex="\mathbf{B}_{1}, \mathbf{B}_{2}" data-display="false"><code>\mathbf{B}_{1}, \mathbf{B}_{2}</code></span> 使得 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}_{1}=\mathbf{B}_{1}\mathbf{A}=\mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{B}_{1}=\mathbf{B}_{1}\mathbf{A}=\mathbf{I}</code></span> 且 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}_{2}=\mathbf{B}_{2}\mathbf{A}=\mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{B}_{2}=\mathbf{B}_{2}\mathbf{A}=\mathbf{I}</code></span> ，那么有：
>  <span class="course-math course-math-display" data-tex="\begin{cases}&#10;(\mathbf{B}_{1}\mathbf{A})\mathbf{B}_{2}=\mathbf{I}\mathbf{B}_{2}=\mathbf{B}_{2}\\&#10;\mathbf{B}_{1}(\mathbf{A}\mathbf{B}_{2})=\mathbf{B}_{1}\mathbf{I}=\mathbf{B}_{1}&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;(\mathbf{B}_{1}\mathbf{A})\mathbf{B}_{2}=\mathbf{I}\mathbf{B}_{2}=\mathbf{B}_{2}\\&#10;\mathbf{B}_{1}(\mathbf{A}\mathbf{B}_{2})=\mathbf{B}_{1}\mathbf{I}=\mathbf{B}_{1}&#10;\end{cases}</code></span>
>  即 <span class="course-math" data-tex="\mathbf{B}_{1}=\mathbf{B}_{2}" data-display="false"><code>\mathbf{B}_{1}=\mathbf{B}_{2}</code></span>。

性质：
-  <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{-1}=\mathbf{B}^{-1}\mathbf{A}^{-1}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{-1}=\mathbf{B}^{-1}\mathbf{A}^{-1}</code></span>。  
- <span class="course-math" data-tex="(\mathbf{A}_{1}\dots \mathbf{A}_{n})^{-1}=\mathbf{A}_{n}^{-1}\mathbf{A}_{n-1}^{-1}\dots \mathbf{A}_{1}^{-1}" data-display="false"><code>(\mathbf{A}_{1}\dots \mathbf{A}_{n})^{-1}=\mathbf{A}_{n}^{-1}\mathbf{A}_{n-1}^{-1}\dots \mathbf{A}_{1}^{-1}</code></span>

矩阵的左/右逆（Left/Right Inverse）：对 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，若存在 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 使得 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}=\mathbf{I}_{m}" data-display="false"><code>\mathbf{A}\mathbf{B}=\mathbf{I}_{m}</code></span>，则称 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 为 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的右逆矩阵，<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的左逆矩阵。

对一个 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，它存在右逆等价于 <span class="course-math" data-tex="r=m" data-display="false"><code>r=m</code></span>（行满秩，也说明 <span class="course-math" data-tex="C(\mathbf{A})=\mathbb{R}^m" data-display="false"><code>C(\mathbf{A})=\mathbb{R}^m</code></span>）。类似的，存在左逆等价于 <span class="course-math" data-tex="r=n" data-display="false"><code>r=n</code></span>（列满秩，也说明 <span class="course-math" data-tex="C(\mathbf{A}^T)=\mathbb{R}^n" data-display="false"><code>C(\mathbf{A}^T)=\mathbb{R}^n</code></span>）。记忆： <span class="course-math" data-tex="\begin{bmatrix}1  &amp; 0\end{bmatrix}\begin{bmatrix}1 \\ 0\end{bmatrix}=\mathbf{I}_{1}" data-display="false"><code>\begin{bmatrix}1  &amp; 0\end{bmatrix}\begin{bmatrix}1 \\ 0\end{bmatrix}=\mathbf{I}_{1}</code></span>。
推论：矩阵可逆的条件为 <span class="course-math" data-tex="r=m=n" data-display="false"><code>r=m=n</code></span>。

左右逆的最佳选择（Best Choices）<span class="course-math" data-tex="\mathbf{B}=(\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T, \mathbf{C}=\mathbf{A}^T(\mathbf{A}\mathbf{A}^T)^{-1}" data-display="false"><code>\mathbf{B}=(\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T, \mathbf{C}=\mathbf{A}^T(\mathbf{A}\mathbf{A}^T)^{-1}</code></span>。

#### 高斯-约旦方法（Gauss-Jordan method）求逆
{: #section-2 }


<span class="course-math course-math-display" data-tex="\mathbf{A}\mathbf{B}=\mathbf{I}" data-display="true"><code>\mathbf{A}\mathbf{B}=\mathbf{I}</code></span>
<span class="course-math course-math-display" data-tex="\implies  \mathbf{A}\begin{bmatrix}&#10;\mathbf{b}_{1} &amp; \mathbf{b}_{2} &amp; \dots &amp; \mathbf{b}_{n}&#10;\end{bmatrix}=\begin{bmatrix}&#10;\mathbf{e}_{1} &amp; \mathbf{e}_{2} &amp; \dots &amp; \mathbf{e}_{n}&#10;\end{bmatrix} \\" data-display="true"><code>\implies  \mathbf{A}\begin{bmatrix}&#10;\mathbf{b}_{1} &amp; \mathbf{b}_{2} &amp; \dots &amp; \mathbf{b}_{n}&#10;\end{bmatrix}=\begin{bmatrix}&#10;\mathbf{e}_{1} &amp; \mathbf{e}_{2} &amp; \dots &amp; \mathbf{e}_{n}&#10;\end{bmatrix} \\</code></span>
<span class="course-math course-math-display" data-tex="\implies \mathbf{A}\mathbf{b}_{i}=\mathbf{e}_{i}(1\leq i\leq n)" data-display="true"><code>\implies \mathbf{A}\mathbf{b}_{i}=\mathbf{e}_{i}(1\leq i\leq n)</code></span>
第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 组解 <span class="course-math" data-tex="\mathbf{b}_{i}" data-display="false"><code>\mathbf{b}_{i}</code></span> 即对应逆矩阵的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列。为解这一系列的线性方程组，可以构造增广矩阵：
<span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;\mathbf{A} &#124; \mathbf{I}&#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;\mathbf{A} &#124; \mathbf{I}&#10;\end{bmatrix}</code></span>
对它进行一系列初等行变换，把它化成形式：
<span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;\mathbf{I}&#124;\mathbf{B}&#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;\mathbf{I}&#124;\mathbf{B}&#10;\end{bmatrix}</code></span>
那么右边的每 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列就是第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 个方程组的解，于是得到 <span class="course-math" data-tex="\mathbf{A}^{-1}=\mathbf{B}" data-display="false"><code>\mathbf{A}^{-1}=\mathbf{B}</code></span>。
另一种角度，设一系列初等行变换的复合 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 使得 <span class="course-math" data-tex="\mathbf{T}\mathbf{A}=\mathbf{I}" data-display="false"><code>\mathbf{T}\mathbf{A}=\mathbf{I}</code></span>，那么 <span class="course-math" data-tex="\mathbf{B}=\mathbf{T}\mathbf{I}=\mathbf{T}=\mathbf{A}^{-1}" data-display="false"><code>\mathbf{B}=\mathbf{T}\mathbf{I}=\mathbf{T}=\mathbf{A}^{-1}</code></span>。


#### 判断逆是否存在
{: #section-3 }


- <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftrightarrow \mathbf{A}\text{ has a full set of pivots}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftrightarrow \mathbf{A}\text{ has a full set of pivots}</code></span> 
 > Proof:
 > - <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftarrow \text{ Gauss-Jordan method works} \Leftarrow \mathbf{A}\text{ has a full set of pivots}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftarrow \text{ Gauss-Jordan method works} \Leftarrow \mathbf{A}\text{ has a full set of pivots}</code></span> 
 > - <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Rightarrow \mathbf{A}\mathbf{x}=\mathbf{O}\text{ only has zero solution} \Rightarrow \mathbf{A}\text{ has a full set of pivots}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Rightarrow \mathbf{A}\mathbf{x}=\mathbf{O}\text{ only has zero solution} \Rightarrow \mathbf{A}\text{ has a full set of pivots}</code></span>  

- <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftrightarrow \mathbf{A}\text{ is nonsingular}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftrightarrow \mathbf{A}\text{ is nonsingular}</code></span> 
 > Proof:
 > - <span class="course-math" data-tex="\mathbf{A}\text{ is invertible}\Leftarrow \mathbf{A}\text{ has a full set of pivots} \Leftarrow \mathbf{A}\mathbf{x}=\mathbf{O}\text{ only has zero solution} \Leftarrow  \mathbf{A}\text{ is nonsingular}" data-display="false"><code>\mathbf{A}\text{ is invertible}\Leftarrow \mathbf{A}\text{ has a full set of pivots} \Leftarrow \mathbf{A}\mathbf{x}=\mathbf{O}\text{ only has zero solution} \Leftarrow  \mathbf{A}\text{ is nonsingular}</code></span>
 > - <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Rightarrow \mathbf{x}=\mathbf{A}^{-1}\mathbf{b}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Rightarrow \mathbf{x}=\mathbf{A}^{-1}\mathbf{b}</code></span>  


- <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftrightarrow \mathbf{A}\mathbf{x}=\mathbf{0}\text{ only has zero solution}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftrightarrow \mathbf{A}\mathbf{x}=\mathbf{0}\text{ only has zero solution}</code></span> 
- <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftrightarrow\text{rank}(A)=n" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftrightarrow\text{rank}(A)=n</code></span>
- <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftrightarrow N(A)=\{ 0 \}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftrightarrow N(A)=\{ 0 \}</code></span>
- <span class="course-math" data-tex="\mathbf{A}\text{ is invertible} \Leftrightarrow\text{The columns/rows of A is linear independent}" data-display="false"><code>\mathbf{A}\text{ is invertible} \Leftrightarrow\text{The columns/rows of A is linear independent}</code></span>

#### 求二阶矩阵的逆
{: #section-4 }


<span class="course-math course-math-display" data-tex="\mathbf{A}=\begin{bmatrix}&#10;a &amp; b \\&#10;c &amp; d&#10;\end{bmatrix}" data-display="true"><code>\mathbf{A}=\begin{bmatrix}&#10;a &amp; b \\&#10;c &amp; d&#10;\end{bmatrix}</code></span>
 的逆为 
 <span class="course-math course-math-display" data-tex="\mathbf{A}^{-1}=\frac{1}{\det(\mathbf{A})} \begin{bmatrix}&#10;d &amp; -b \\&#10;-c &amp; a&#10;\end{bmatrix}" data-display="true"><code>\mathbf{A}^{-1}=\frac{1}{\det(\mathbf{A})} \begin{bmatrix}&#10;d &amp; -b \\&#10;-c &amp; a&#10;\end{bmatrix}</code></span>


#### 求三阶矩阵的逆
{: #section-5 }

<span class="course-math course-math-display" data-tex="\mathbf{A}=\begin{bmatrix}&#10;a_{11} &amp; a_{12} &amp; a_{13} \\&#10;a_{21} &amp; a_{22} &amp; a_{23} \\&#10;a_{31} &amp; a_{32} &amp; a_{33}&#10;\end{bmatrix}" data-display="true"><code>\mathbf{A}=\begin{bmatrix}&#10;a_{11} &amp; a_{12} &amp; a_{13} \\&#10;a_{21} &amp; a_{22} &amp; a_{23} \\&#10;a_{31} &amp; a_{32} &amp; a_{33}&#10;\end{bmatrix}</code></span>
需要先构造余子式的矩阵
<span class="course-math course-math-display" data-tex="\mathbf{M}= \begin{bmatrix}&#10;M_{11} &amp; M_{12} &amp; M_{13} \\&#10;M_{21} &amp; M_{22} &amp; M_{23} \\&#10;M_{31} &amp; M_{32} &amp; M_{33}&#10;\end{bmatrix}" data-display="true"><code>\mathbf{M}= \begin{bmatrix}&#10;M_{11} &amp; M_{12} &amp; M_{13} \\&#10;M_{21} &amp; M_{22} &amp; M_{23} \\&#10;M_{31} &amp; M_{32} &amp; M_{33}&#10;\end{bmatrix}</code></span>
再交替添负号
<span class="course-math course-math-display" data-tex="\mathbf{C}=\begin{bmatrix}&#10;M_{11} &amp; -M_{12} &amp; M_{13} \\&#10;-M_{21} &amp; M_{22} &amp; -M_{23} \\&#10;M_{31} &amp; -M_{32} &amp; M_{33}&#10;\end{bmatrix}" data-display="true"><code>\mathbf{C}=\begin{bmatrix}&#10;M_{11} &amp; -M_{12} &amp; M_{13} \\&#10;-M_{21} &amp; M_{22} &amp; -M_{23} \\&#10;M_{31} &amp; -M_{32} &amp; M_{33}&#10;\end{bmatrix}</code></span>
最后做转置
<span class="course-math course-math-display" data-tex="\mathbf{C}^T=\begin{bmatrix}&#10;M_{11} &amp; -M_{21} &amp; M_{31} \\&#10;-M_{12} &amp; M_{22} &amp; -M_{32} \\&#10;M_{13} &amp; -M_{23} &amp; M_{33}&#10;\end{bmatrix}" data-display="true"><code>\mathbf{C}^T=\begin{bmatrix}&#10;M_{11} &amp; -M_{21} &amp; M_{31} \\&#10;-M_{12} &amp; M_{22} &amp; -M_{32} \\&#10;M_{13} &amp; -M_{23} &amp; M_{33}&#10;\end{bmatrix}</code></span>
那么
<span class="course-math course-math-display" data-tex="\mathbf{A}^{-1}=\frac{1}{\det(\mathbf{A})}\mathbf{C}^T" data-display="true"><code>\mathbf{A}^{-1}=\frac{1}{\det(\mathbf{A})}\mathbf{C}^T</code></span>

即 <span class="course-math" data-tex="a_{ij}&#x27;=\frac{1}{\det(\mathbf{A})}M_{ji} (-1)^{i+j}" data-display="false"><code>a_{ij}&#x27;=\frac{1}{\det(\mathbf{A})}M_{ji} (-1)^{i+j}</code></span> 。
（证明见行列式）

## 矩阵的转置
{: #section-6 }


矩阵的转置（Transpose）：矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的转置记作 <span class="course-math" data-tex="\mathbf{A}^T" data-display="false"><code>\mathbf{A}^T</code></span> ，其中 <span class="course-math" data-tex="a_{ij}&#x27;= a_{ji}" data-display="false"><code>a_{ij}&#x27;= a_{ji}</code></span>。相当于把行换成列，列换成行。转置的性质：
- <span class="course-math" data-tex="(\mathbf{A}^T)^T=\mathbf{A}" data-display="false"><code>(\mathbf{A}^T)^T=\mathbf{A}</code></span>
- <span class="course-math" data-tex="(k\mathbf{A})^T=kA^T" data-display="false"><code>(k\mathbf{A})^T=kA^T</code></span>
- <span class="course-math" data-tex="(\mathbf{A}+\mathbf{B})^T=\mathbf{A}^T+\mathbf{B}^{T}" data-display="false"><code>(\mathbf{A}+\mathbf{B})^T=\mathbf{A}^T+\mathbf{B}^{T}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^T=\mathbf{B}^{T}\mathbf{A}^{T}" data-display="false"><code>(\mathbf{A}\mathbf{B})^T=\mathbf{B}^{T}\mathbf{A}^{T}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}^{-1})^{T}=(\mathbf{A}^{T})^{-1}" data-display="false"><code>(\mathbf{A}^{-1})^{T}=(\mathbf{A}^{T})^{-1}</code></span>

对称矩阵（Symmetric Matrix）：满足  <span class="course-math" data-tex="\mathbf{A}^T=\mathbf{A}" data-display="false"><code>\mathbf{A}^T=\mathbf{A}</code></span> 的矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 称为对称矩阵。
- 对称矩阵的逆还是对称矩阵。
- <span class="course-math" data-tex="\mathbf{R}\mathbf{R}^T" data-display="false"><code>\mathbf{R}\mathbf{R}^T</code></span> 为对称矩阵。 
- <span class="course-math" data-tex="\mathbf{S}=\mathbf{L}\mathbf{D}\mathbf{L}^T" data-display="false"><code>\mathbf{S}=\mathbf{L}\mathbf{D}\mathbf{L}^T</code></span>。

定理：若 <span class="course-math" data-tex="\mathbf{A}^T=\mathbf{A}" data-display="false"><code>\mathbf{A}^T=\mathbf{A}</code></span> 可以被在不用行交换的情况下分解为 <span class="course-math" data-tex="\mathbf{L}\mathbf{D}\mathbf{U}" data-display="false"><code>\mathbf{L}\mathbf{D}\mathbf{U}</code></span>，则有 <span class="course-math" data-tex="\mathbf{L}^T=\mathbf{U}" data-display="false"><code>\mathbf{L}^T=\mathbf{U}</code></span>。


## 分块矩阵
{: #section-7 }


使用分块矩阵（Partitioned Matrices）来思考矩阵的运算。也就是说，把矩阵分为若干块，每一块是一个小矩阵，则可以把这些小矩阵看成一个新的元素。

用分块矩阵来看矩阵乘法：把 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的每一行看成一个新的元素，则 <span class="course-math" data-tex="\mathbf{A}=\begin{bmatrix}\mathbf{a}_{1} \\ \mathbf{a}_{2} \\ \vdots \\\mathbf{a}_{n}\end{bmatrix}" data-display="false"><code>\mathbf{A}=\begin{bmatrix}\mathbf{a}_{1} \\ \mathbf{a}_{2} \\ \vdots \\\mathbf{a}_{n}\end{bmatrix}</code></span>，把 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的每一列看成一个新的元素，则 <span class="course-math" data-tex="\mathbf{B}=\begin{bmatrix}\mathbf{b}_{1} &amp; \mathbf{b}_{2} &amp; \cdots &amp; \mathbf{b}_{n}\end{bmatrix}" data-display="false"><code>\mathbf{B}=\begin{bmatrix}\mathbf{b}_{1} &amp; \mathbf{b}_{2} &amp; \cdots &amp; \mathbf{b}_{n}\end{bmatrix}</code></span> 。
那么可以把 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}" data-display="false"><code>\mathbf{A}\mathbf{B}</code></span> 看成
<span class="course-math course-math-display" data-tex="\mathbf{A}\mathbf{B}=\begin{bmatrix}&#10;\mathbf{A}&#10;\end{bmatrix}\begin{bmatrix}\mathbf{b}_{1} &amp; \mathbf{b}_{2} &amp; \cdots &amp; \mathbf{b}_{n}\end{bmatrix}=\begin{bmatrix}\mathbf{A}\mathbf{b}_{1} &amp; \mathbf{A}\mathbf{b}_{2} &amp; \cdots &amp; \mathbf{A}\mathbf{b}_{n}\end{bmatrix}" data-display="true"><code>\mathbf{A}\mathbf{B}=\begin{bmatrix}&#10;\mathbf{A}&#10;\end{bmatrix}\begin{bmatrix}\mathbf{b}_{1} &amp; \mathbf{b}_{2} &amp; \cdots &amp; \mathbf{b}_{n}\end{bmatrix}=\begin{bmatrix}\mathbf{A}\mathbf{b}_{1} &amp; \mathbf{A}\mathbf{b}_{2} &amp; \cdots &amp; \mathbf{A}\mathbf{b}_{n}\end{bmatrix}</code></span>
或
<span class="course-math course-math-display" data-tex="\mathbf{A}\mathbf{B}=\begin{bmatrix}\mathbf{a}_{1} \\ \mathbf{a}_{2} \\ \vdots \\\mathbf{a}_{n}\end{bmatrix}\begin{bmatrix}&#10;\mathbf{B}&#10;\end{bmatrix}&#10;=\begin{bmatrix}\mathbf{a}_{1}\mathbf{B} \\ \mathbf{a}_{2}\mathbf{B} \\ \vdots \\\mathbf{a}_{n}\mathbf{B}\end{bmatrix}" data-display="true"><code>\mathbf{A}\mathbf{B}=\begin{bmatrix}\mathbf{a}_{1} \\ \mathbf{a}_{2} \\ \vdots \\\mathbf{a}_{n}\end{bmatrix}\begin{bmatrix}&#10;\mathbf{B}&#10;\end{bmatrix}&#10;=\begin{bmatrix}\mathbf{a}_{1}\mathbf{B} \\ \mathbf{a}_{2}\mathbf{B} \\ \vdots \\\mathbf{a}_{n}\mathbf{B}\end{bmatrix}</code></span>
注意分块的矩阵尺寸要保证可乘。


## 矩阵的秩
{: #section-8 }


线性相关（Linear Dependent）：设 <span class="course-math" data-tex="\mathbf{v}_{1}, \mathbf{v}_{2},\dots \mathbf{v}_{n}\in V" data-display="false"><code>\mathbf{v}_{1}, \mathbf{v}_{2},\dots \mathbf{v}_{n}\in V</code></span>，若 <span class="course-math" data-tex="c_{1}\mathbf{v}_{1}+c_{2}\mathbf{v}_{2}+\dots+c_{n}\mathbf{v}_{n}=\mathbf{0}" data-display="false"><code>c_{1}\mathbf{v}_{1}+c_{2}\mathbf{v}_{2}+\dots+c_{n}\mathbf{v}_{n}=\mathbf{0}</code></span> 当且仅当 <span class="course-math" data-tex="c_{1}=c_{2}=\dots =c_{n}=0" data-display="false"><code>c_{1}=c_{2}=\dots =c_{n}=0</code></span>，则称这组向量线性无关。否则，称为线性相关。
- 线性相关：存在 <span class="course-math" data-tex="c_{i}\neq 0" data-display="false"><code>c_{i}\neq 0</code></span> 使得 <span class="course-math" data-tex="c_{i}\mathbf{v}_{i}=\sum _{j\neq i} c_{j}\mathbf{v}_{j}" data-display="false"><code>c_{i}\mathbf{v}_{i}=\sum _{j\neq i} c_{j}\mathbf{v}_{j}</code></span>，即 <span class="course-math" data-tex="\mathbf{v}_{i}=\sum_{j\neq i} \frac{c_{j}}{c_{i}}\mathbf{v}_{j}" data-display="false"><code>\mathbf{v}_{i}=\sum_{j\neq i} \frac{c_{j}}{c_{i}}\mathbf{v}_{j}</code></span> ，即存在一个向量可以表示为其他向量的线性组合。

判断向量是否线性相关等价于判断 <span class="course-math" data-tex="\begin{bmatrix}\mathbf{v}_{1} &amp; \mathbf{v}_{2}  &amp; \dots &amp; \mathbf{v}_{n}\end{bmatrix}\mathbf{x}=\mathbf{0}" data-display="false"><code>\begin{bmatrix}\mathbf{v}_{1} &amp; \mathbf{v}_{2}  &amp; \dots &amp; \mathbf{v}_{n}\end{bmatrix}\mathbf{x}=\mathbf{0}</code></span> 是否存在非零解。
<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列线性无关当且仅当 <span class="course-math" data-tex="N(\mathbf{A})=\{ \mathbf{0} \}" data-display="false"><code>N(\mathbf{A})=\{ \mathbf{0} \}</code></span>。

>  零向量与任何向量线性相关。
>  行阶梯矩阵的非零行之间是线性无关的。
>  在 <span class="course-math" data-tex="\mathbb{R}^{2}" data-display="false"><code>\mathbb{R}^{2}</code></span> 中，两个向量线性相关说明它们同一条直线上，三个向量之间一定是线性相关的。
>  在 <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> 中，任何 <span class="course-math" data-tex="n(n&gt;m)" data-display="false"><code>n(n&gt;m)</code></span> 个向量必然线性相关。


矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的秩（Rank）：
- 主元的个数，记作 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 或 <span class="course-math" data-tex="\text{rank}(\mathbf{A})" data-display="false"><code>\text{rank}(\mathbf{A})</code></span>。
- 极大的线性无关（Linearly Independent）的行/列的个数。

关于秩的一些性质：
- <span class="course-math" data-tex="r\leq \min(m,n)" data-display="false"><code>r\leq \min(m,n)</code></span>
- <span class="course-math" data-tex="r(\mathbf{A}\mathbf{B})\leq \min(r(\mathbf{A}), r(\mathbf{B}))" data-display="false"><code>r(\mathbf{A}\mathbf{B})\leq \min(r(\mathbf{A}), r(\mathbf{B}))</code></span>

**秩一矩阵（Rank 1 matrix）** 可以拆成一个列向量乘一个行向量。这是因为，它的列空间的维数 <span class="course-math" data-tex="\text{dim} C(\mathbf{A})=\text{rank}(\mathbf{A})=1" data-display="false"><code>\text{dim} C(\mathbf{A})=\text{rank}(\mathbf{A})=1</code></span>。

若 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是一个可逆矩阵，则 <span class="course-math" data-tex="r(\mathbf{P}\mathbf{A})=r(\mathbf{A}\mathbf{P})=r(\mathbf{A})" data-display="false"><code>r(\mathbf{P}\mathbf{A})=r(\mathbf{A}\mathbf{P})=r(\mathbf{A})</code></span>。

若 <span class="course-math" data-tex="AB=O" data-display="false"><code>AB=O</code></span>，则有 <span class="course-math" data-tex="C(B) \subseteq N(A)" data-display="false"><code>C(B) \subseteq N(A)</code></span>，则有 <span class="course-math" data-tex="\text{rank}(B)\leq n-\text{rank(A)}" data-display="false"><code>\text{rank}(B)\leq n-\text{rank(A)}</code></span>，也就是：
<span class="course-math course-math-display" data-tex="\text{rank}(A)+\text{rank}(B)\leq n" data-display="true"><code>\text{rank}(A)+\text{rank}(B)\leq n</code></span>
一般的，有<span class="course-math course-math-display" data-tex="\text{rank}(AB)=\text{rank}(B)-\text{dim}(N(A)\cap C(B))\geq\text{rank}(B)-\text{dim}N(A)=\text{rank}(B)+\text{rank}(A)-n" data-display="true"><code>\text{rank}(AB)=\text{rank}(B)-\text{dim}(N(A)\cap C(B))\geq\text{rank}(B)-\text{dim}N(A)=\text{rank}(B)+\text{rank}(A)-n</code></span> 故而有
<span class="course-math course-math-display" data-tex="\text{rank}(A)+\text{rank}(B)-n\leq\text{rank}(AB)" data-display="true"><code>\text{rank}(A)+\text{rank}(B)-n\leq\text{rank}(AB)</code></span>

一些题目中的结论： <span class="course-math" data-tex="\text{rank}(A^TA)=\text{rank}(A)" data-display="false"><code>\text{rank}(A^TA)=\text{rank}(A)</code></span>， <span class="course-math" data-tex="\text{rank}(A+B)\leq\text{rank}(A)+\text{rank}(B)" data-display="false"><code>\text{rank}(A+B)\leq\text{rank}(A)+\text{rank}(B)</code></span>。
<span class="course-math" data-tex="Ax=b" data-display="false"><code>Ax=b</code></span> 有解等价于 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 与 <span class="course-math" data-tex="\begin{bmatrix}A &#124;b\end{bmatrix}" data-display="false"><code>\begin{bmatrix}A &#124;b\end{bmatrix}</code></span> 的秩相等。
{% endraw %}
