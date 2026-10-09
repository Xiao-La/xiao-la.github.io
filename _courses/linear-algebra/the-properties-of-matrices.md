---
title: "The Properties of Matrices - 矩阵的性质"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-03-11T16:31:38+08:00"
updated_at: "2026-10-09T17:19:46+08:00"
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


矩阵的逆（Inverse）：方阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的逆记作 <span class="course-math" data-tex="A^{-1}" data-display="false"><code>A^{-1}</code></span>，符合 <span class="course-math" data-tex="AA^{-1}= A^{-1}A=I" data-display="false"><code>AA^{-1}= A^{-1}A=I</code></span>。

矩阵的逆如果存在，则一定唯一：

>  假设存在两个矩阵 <span class="course-math" data-tex="B_{1}, B_{2}" data-display="false"><code>B_{1}, B_{2}</code></span> 使得 <span class="course-math" data-tex="AB_{1}=B_{1}A=I" data-display="false"><code>AB_{1}=B_{1}A=I</code></span> 且 <span class="course-math" data-tex="AB_{2}=B_{2}A=I" data-display="false"><code>AB_{2}=B_{2}A=I</code></span> ，那么有：
>  <span class="course-math course-math-display" data-tex="\begin{cases}&#10;(B_{1}A)B_{2}=IB_{2}=B_{2}\\&#10;B_{1}(AB_{2})=B_{1}I=B_{1}&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;(B_{1}A)B_{2}=IB_{2}=B_{2}\\&#10;B_{1}(AB_{2})=B_{1}I=B_{1}&#10;\end{cases}</code></span>
>  即 <span class="course-math" data-tex="B_{1}=B_{2}" data-display="false"><code>B_{1}=B_{2}</code></span>。

性质：
-  <span class="course-math" data-tex="(AB)^{-1}=B^{-1}A^{-1}" data-display="false"><code>(AB)^{-1}=B^{-1}A^{-1}</code></span>。  
- <span class="course-math" data-tex="(A_{1}\dots A_{n})^{-1}=A_{n}^{-1}A_{n-1}^{-1}\dots A_{1}^{-1}" data-display="false"><code>(A_{1}\dots A_{n})^{-1}=A_{n}^{-1}A_{n-1}^{-1}\dots A_{1}^{-1}</code></span>

矩阵的左/右逆（Left/Right Inverse）：对 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，若存在 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 使得 <span class="course-math" data-tex="AB=I_{m}" data-display="false"><code>AB=I_{m}</code></span>，则称 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的右逆矩阵，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的左逆矩阵。

对一个 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，它存在右逆等价于 <span class="course-math" data-tex="r=m" data-display="false"><code>r=m</code></span>（行满秩，也说明 <span class="course-math" data-tex="C(A)=\mathbb{R}^m" data-display="false"><code>C(A)=\mathbb{R}^m</code></span>）。类似的，存在左逆等价于 <span class="course-math" data-tex="r=n" data-display="false"><code>r=n</code></span>（列满秩，也说明 <span class="course-math" data-tex="C(A^{\top})=\mathbb{R}^n" data-display="false"><code>C(A^{\top})=\mathbb{R}^n</code></span>）。记忆：

<span class="course-math course-math-display" data-tex="\begin{bmatrix}1  &amp; 0\end{bmatrix}\begin{bmatrix}1 \\ 0\end{bmatrix}=I_{1}" data-display="true"><code>\begin{bmatrix}1  &amp; 0\end{bmatrix}\begin{bmatrix}1 \\ 0\end{bmatrix}=I_{1}</code></span>

。
推论：矩阵可逆的条件为 <span class="course-math" data-tex="r=m=n" data-display="false"><code>r=m=n</code></span>。

左右逆的最佳选择（Best Choices）<span class="course-math" data-tex="B=(A^{\top}A)^{-1}A^{\top}, C=A^{\top}(AA^{\top})^{-1}" data-display="false"><code>B=(A^{\top}A)^{-1}A^{\top}, C=A^{\top}(AA^{\top})^{-1}</code></span>。

#### 高斯-约旦方法（Gauss-Jordan method）求逆
{: #section-2 }


<span class="course-math course-math-display" data-tex="AB=I" data-display="true"><code>AB=I</code></span>
<span class="course-math course-math-display" data-tex="\implies  A\begin{bmatrix}&#10;\boldsymbol{b}_{1} &amp; \boldsymbol{b}_{2} &amp; \dots &amp; \boldsymbol{b}_{n}&#10;\end{bmatrix}=\begin{bmatrix}&#10;\boldsymbol{e}_{1} &amp; \boldsymbol{e}_{2} &amp; \dots &amp; \boldsymbol{e}_{n}&#10;\end{bmatrix} \\" data-display="true"><code>\implies  A\begin{bmatrix}&#10;\boldsymbol{b}_{1} &amp; \boldsymbol{b}_{2} &amp; \dots &amp; \boldsymbol{b}_{n}&#10;\end{bmatrix}=\begin{bmatrix}&#10;\boldsymbol{e}_{1} &amp; \boldsymbol{e}_{2} &amp; \dots &amp; \boldsymbol{e}_{n}&#10;\end{bmatrix} \\</code></span>
<span class="course-math course-math-display" data-tex="\implies A\boldsymbol{b}_{i}=\boldsymbol{e}_{i}(1\leq i\leq n)" data-display="true"><code>\implies A\boldsymbol{b}_{i}=\boldsymbol{e}_{i}(1\leq i\leq n)</code></span>
第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 组解 <span class="course-math" data-tex="\boldsymbol{b}_{i}" data-display="false"><code>\boldsymbol{b}_{i}</code></span> 即对应逆矩阵的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列。为解这一系列的线性方程组，可以构造增广矩阵：
<span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;A \mid  I&#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;A \mid  I&#10;\end{bmatrix}</code></span>
对它进行一系列初等行变换，把它化成形式：
<span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;I\mid B&#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;I\mid B&#10;\end{bmatrix}</code></span>
那么右边的每 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列就是第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 个方程组的解，于是得到 <span class="course-math" data-tex="A^{-1}=B" data-display="false"><code>A^{-1}=B</code></span>。
另一种角度，设一系列初等行变换的复合 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 使得 <span class="course-math" data-tex="TA=I" data-display="false"><code>TA=I</code></span>，那么 <span class="course-math" data-tex="B=TI=T=A^{-1}" data-display="false"><code>B=TI=T=A^{-1}</code></span>。


#### 判断逆是否存在
{: #section-3 }


- <span class="course-math" data-tex="A\text{ is invertible} \Leftrightarrow A\text{ has a full set of pivots}" data-display="false"><code>A\text{ is invertible} \Leftrightarrow A\text{ has a full set of pivots}</code></span>
 > Proof:
 > - <span class="course-math" data-tex="A\text{ is invertible} \Leftarrow \text{ Gauss-Jordan method works} \Leftarrow A\text{ has a full set of pivots}" data-display="false"><code>A\text{ is invertible} \Leftarrow \text{ Gauss-Jordan method works} \Leftarrow A\text{ has a full set of pivots}</code></span>
 > - <span class="course-math" data-tex="A\text{ is invertible} \Rightarrow A\boldsymbol{x}=\boldsymbol{0}\text{ only has zero solution} \Rightarrow A\text{ has a full set of pivots}" data-display="false"><code>A\text{ is invertible} \Rightarrow A\boldsymbol{x}=\boldsymbol{0}\text{ only has zero solution} \Rightarrow A\text{ has a full set of pivots}</code></span>  

- <span class="course-math" data-tex="A\text{ is invertible} \Leftrightarrow A\text{ is nonsingular}" data-display="false"><code>A\text{ is invertible} \Leftrightarrow A\text{ is nonsingular}</code></span>
 > Proof:
 > - <span class="course-math" data-tex="A\text{ is invertible}\Leftarrow A\text{ has a full set of pivots} \Leftarrow A\boldsymbol{x}=\boldsymbol{0}\text{ only has zero solution} \Leftarrow  A\text{ is nonsingular}" data-display="false"><code>A\text{ is invertible}\Leftarrow A\text{ has a full set of pivots} \Leftarrow A\boldsymbol{x}=\boldsymbol{0}\text{ only has zero solution} \Leftarrow  A\text{ is nonsingular}</code></span>
 > - <span class="course-math" data-tex="A\text{ is invertible} \Rightarrow \boldsymbol{x}=A^{-1}\boldsymbol{b}" data-display="false"><code>A\text{ is invertible} \Rightarrow \boldsymbol{x}=A^{-1}\boldsymbol{b}</code></span>  


- <span class="course-math" data-tex="A\text{ is invertible} \Leftrightarrow A\boldsymbol{x}=\boldsymbol{0}\text{ only has zero solution}" data-display="false"><code>A\text{ is invertible} \Leftrightarrow A\boldsymbol{x}=\boldsymbol{0}\text{ only has zero solution}</code></span>
- <span class="course-math" data-tex="A\text{ is invertible} \Leftrightarrow\operatorname{rank}(A)=n" data-display="false"><code>A\text{ is invertible} \Leftrightarrow\operatorname{rank}(A)=n</code></span>
- <span class="course-math" data-tex="A\text{ is invertible} \Leftrightarrow N(A)=\{ 0 \}" data-display="false"><code>A\text{ is invertible} \Leftrightarrow N(A)=\{ 0 \}</code></span>
- <span class="course-math" data-tex="A\text{ is invertible} \Leftrightarrow\text{The columns/rows of A is linear independent}" data-display="false"><code>A\text{ is invertible} \Leftrightarrow\text{The columns/rows of A is linear independent}</code></span>

#### 求二阶矩阵的逆
{: #section-4 }


<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}&#10;a &amp; b \\&#10;c &amp; d&#10;\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}&#10;a &amp; b \\&#10;c &amp; d&#10;\end{bmatrix}</code></span>
 的逆为
 <span class="course-math course-math-display" data-tex="A^{-1}=\frac{1}{\det(A)} \begin{bmatrix}&#10;d &amp; -b \\&#10;-c &amp; a&#10;\end{bmatrix}" data-display="true"><code>A^{-1}=\frac{1}{\det(A)} \begin{bmatrix}&#10;d &amp; -b \\&#10;-c &amp; a&#10;\end{bmatrix}</code></span>


#### 求三阶矩阵的逆
{: #section-5 }

<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}&#10;a_{11} &amp; a_{12} &amp; a_{13} \\&#10;a_{21} &amp; a_{22} &amp; a_{23} \\&#10;a_{31} &amp; a_{32} &amp; a_{33}&#10;\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}&#10;a_{11} &amp; a_{12} &amp; a_{13} \\&#10;a_{21} &amp; a_{22} &amp; a_{23} \\&#10;a_{31} &amp; a_{32} &amp; a_{33}&#10;\end{bmatrix}</code></span>
需要先构造余子式的矩阵
<span class="course-math course-math-display" data-tex="M= \begin{bmatrix}&#10;M_{11} &amp; M_{12} &amp; M_{13} \\&#10;M_{21} &amp; M_{22} &amp; M_{23} \\&#10;M_{31} &amp; M_{32} &amp; M_{33}&#10;\end{bmatrix}" data-display="true"><code>M= \begin{bmatrix}&#10;M_{11} &amp; M_{12} &amp; M_{13} \\&#10;M_{21} &amp; M_{22} &amp; M_{23} \\&#10;M_{31} &amp; M_{32} &amp; M_{33}&#10;\end{bmatrix}</code></span>
再交替添负号
<span class="course-math course-math-display" data-tex="C=\begin{bmatrix}&#10;M_{11} &amp; -M_{12} &amp; M_{13} \\&#10;-M_{21} &amp; M_{22} &amp; -M_{23} \\&#10;M_{31} &amp; -M_{32} &amp; M_{33}&#10;\end{bmatrix}" data-display="true"><code>C=\begin{bmatrix}&#10;M_{11} &amp; -M_{12} &amp; M_{13} \\&#10;-M_{21} &amp; M_{22} &amp; -M_{23} \\&#10;M_{31} &amp; -M_{32} &amp; M_{33}&#10;\end{bmatrix}</code></span>
最后做转置
<span class="course-math course-math-display" data-tex="C^{\top}=\begin{bmatrix}&#10;M_{11} &amp; -M_{21} &amp; M_{31} \\&#10;-M_{12} &amp; M_{22} &amp; -M_{32} \\&#10;M_{13} &amp; -M_{23} &amp; M_{33}&#10;\end{bmatrix}" data-display="true"><code>C^{\top}=\begin{bmatrix}&#10;M_{11} &amp; -M_{21} &amp; M_{31} \\&#10;-M_{12} &amp; M_{22} &amp; -M_{32} \\&#10;M_{13} &amp; -M_{23} &amp; M_{33}&#10;\end{bmatrix}</code></span>
那么
<span class="course-math course-math-display" data-tex="A^{-1}=\frac{1}{\det(A)}C^{\top}" data-display="true"><code>A^{-1}=\frac{1}{\det(A)}C^{\top}</code></span>

即 <span class="course-math" data-tex="a_{ij}&#x27;=\frac{1}{\det(A)}M_{ji} (-1)^{i+j}" data-display="false"><code>a_{ij}&#x27;=\frac{1}{\det(A)}M_{ji} (-1)^{i+j}</code></span> 。
（证明见行列式）

## 矩阵的转置
{: #section-6 }


矩阵的转置（Transpose）：矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的转置记作 <span class="course-math" data-tex="A^{\top}" data-display="false"><code>A^{\top}</code></span> ，其中 <span class="course-math" data-tex="a_{ij}&#x27;= a_{ji}" data-display="false"><code>a_{ij}&#x27;= a_{ji}</code></span>。相当于把行换成列，列换成行。转置的性质：
- <span class="course-math" data-tex="(A^{\top})^{\top}=A" data-display="false"><code>(A^{\top})^{\top}=A</code></span>
- <span class="course-math" data-tex="(kA)^{\top}=kA^{\top}" data-display="false"><code>(kA)^{\top}=kA^{\top}</code></span>
- <span class="course-math" data-tex="(A+B)^{\top}=A^{\top}+B^{\top}" data-display="false"><code>(A+B)^{\top}=A^{\top}+B^{\top}</code></span>
- <span class="course-math" data-tex="(AB)^{\top}=B^{\top}A^{\top}" data-display="false"><code>(AB)^{\top}=B^{\top}A^{\top}</code></span>
- <span class="course-math" data-tex="(A^{-1})^{\top}=(A^{\top})^{-1}" data-display="false"><code>(A^{-1})^{\top}=(A^{\top})^{-1}</code></span>

对称矩阵（Symmetric Matrix）：满足  <span class="course-math" data-tex="A^{\top}=A" data-display="false"><code>A^{\top}=A</code></span> 的矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 称为对称矩阵。
- 对称矩阵的逆还是对称矩阵。
- <span class="course-math" data-tex="RR^{\top}" data-display="false"><code>RR^{\top}</code></span> 为对称矩阵。
- <span class="course-math" data-tex="S=LDL^{\top}" data-display="false"><code>S=LDL^{\top}</code></span>。

定理：若 <span class="course-math" data-tex="A^{\top}=A" data-display="false"><code>A^{\top}=A</code></span> 可以被在不用行交换的情况下分解为 <span class="course-math" data-tex="LDU" data-display="false"><code>LDU</code></span>，则有 <span class="course-math" data-tex="L^{\top}=U" data-display="false"><code>L^{\top}=U</code></span>。


## 分块矩阵
{: #section-7 }


使用分块矩阵（Partitioned Matrices）来思考矩阵的运算。也就是说，把矩阵分为若干块，每一块是一个小矩阵，则可以把这些小矩阵看成一个新的元素。

用分块矩阵来看矩阵乘法：把 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的每一行看成一个新的元素，则

<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}\boldsymbol{a}_{1} \\ \boldsymbol{a}_{2} \\ \vdots \\\boldsymbol{a}_{n}\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}\boldsymbol{a}_{1} \\ \boldsymbol{a}_{2} \\ \vdots \\\boldsymbol{a}_{n}\end{bmatrix}</code></span>

，把 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的每一列看成一个新的元素，则 <span class="course-math" data-tex="B=\begin{bmatrix}\boldsymbol{b}_{1} &amp; \boldsymbol{b}_{2} &amp; \cdots &amp; \boldsymbol{b}_{n}\end{bmatrix}" data-display="false"><code>B=\begin{bmatrix}\boldsymbol{b}_{1} &amp; \boldsymbol{b}_{2} &amp; \cdots &amp; \boldsymbol{b}_{n}\end{bmatrix}</code></span> 。
那么可以把 <span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 看成
<span class="course-math course-math-display" data-tex="AB=\begin{bmatrix}&#10;A&#10;\end{bmatrix}\begin{bmatrix}\boldsymbol{b}_{1} &amp; \boldsymbol{b}_{2} &amp; \cdots &amp; \boldsymbol{b}_{n}\end{bmatrix}=\begin{bmatrix}A\boldsymbol{b}_{1} &amp; A\boldsymbol{b}_{2} &amp; \cdots &amp; A\boldsymbol{b}_{n}\end{bmatrix}" data-display="true"><code>AB=\begin{bmatrix}&#10;A&#10;\end{bmatrix}\begin{bmatrix}\boldsymbol{b}_{1} &amp; \boldsymbol{b}_{2} &amp; \cdots &amp; \boldsymbol{b}_{n}\end{bmatrix}=\begin{bmatrix}A\boldsymbol{b}_{1} &amp; A\boldsymbol{b}_{2} &amp; \cdots &amp; A\boldsymbol{b}_{n}\end{bmatrix}</code></span>
或
<span class="course-math course-math-display" data-tex="AB=\begin{bmatrix}\boldsymbol{a}_{1} \\ \boldsymbol{a}_{2} \\ \vdots \\\boldsymbol{a}_{n}\end{bmatrix}\begin{bmatrix}&#10;B&#10;\end{bmatrix}&#10;=\begin{bmatrix}\boldsymbol{a}_{1}B \\ \boldsymbol{a}_{2}B \\ \vdots \\\boldsymbol{a}_{n}B\end{bmatrix}" data-display="true"><code>AB=\begin{bmatrix}\boldsymbol{a}_{1} \\ \boldsymbol{a}_{2} \\ \vdots \\\boldsymbol{a}_{n}\end{bmatrix}\begin{bmatrix}&#10;B&#10;\end{bmatrix}&#10;=\begin{bmatrix}\boldsymbol{a}_{1}B \\ \boldsymbol{a}_{2}B \\ \vdots \\\boldsymbol{a}_{n}B\end{bmatrix}</code></span>
注意分块的矩阵尺寸要保证可乘。


## 矩阵的秩
{: #section-8 }


线性相关（Linear Dependent）：设 <span class="course-math" data-tex="\boldsymbol{v}_{1}, \boldsymbol{v}_{2},\dots \boldsymbol{v}_{n}\in V" data-display="false"><code>\boldsymbol{v}_{1}, \boldsymbol{v}_{2},\dots \boldsymbol{v}_{n}\in V</code></span>，若 <span class="course-math" data-tex="c_{1}\boldsymbol{v}_{1}+c_{2}\boldsymbol{v}_{2}+\dots+c_{n}\boldsymbol{v}_{n}=\boldsymbol{0}" data-display="false"><code>c_{1}\boldsymbol{v}_{1}+c_{2}\boldsymbol{v}_{2}+\dots+c_{n}\boldsymbol{v}_{n}=\boldsymbol{0}</code></span> 当且仅当 <span class="course-math" data-tex="c_{1}=c_{2}=\dots =c_{n}=0" data-display="false"><code>c_{1}=c_{2}=\dots =c_{n}=0</code></span>，则称这组向量线性无关。否则，称为线性相关。
- 线性相关：存在 <span class="course-math" data-tex="c_{i}\neq 0" data-display="false"><code>c_{i}\neq 0</code></span> 使得 <span class="course-math" data-tex="c_{i}\boldsymbol{v}_{i}=\sum _{j\neq i} c_{j}\boldsymbol{v}_{j}" data-display="false"><code>c_{i}\boldsymbol{v}_{i}=\sum _{j\neq i} c_{j}\boldsymbol{v}_{j}</code></span>，即 <span class="course-math" data-tex="\boldsymbol{v}_{i}=\sum_{j\neq i} \frac{c_{j}}{c_{i}}\boldsymbol{v}_{j}" data-display="false"><code>\boldsymbol{v}_{i}=\sum_{j\neq i} \frac{c_{j}}{c_{i}}\boldsymbol{v}_{j}</code></span> ，即存在一个向量可以表示为其他向量的线性组合。

判断向量是否线性相关等价于判断 <span class="course-math" data-tex="\begin{bmatrix}\boldsymbol{v}_{1} &amp; \boldsymbol{v}_{2}  &amp; \dots &amp; \boldsymbol{v}_{n}\end{bmatrix}\boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>\begin{bmatrix}\boldsymbol{v}_{1} &amp; \boldsymbol{v}_{2}  &amp; \dots &amp; \boldsymbol{v}_{n}\end{bmatrix}\boldsymbol{x}=\boldsymbol{0}</code></span> 是否存在非零解。
<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列线性无关当且仅当 <span class="course-math" data-tex="N(A)=\{ \boldsymbol{0} \}" data-display="false"><code>N(A)=\{ \boldsymbol{0} \}</code></span>。

>  零向量与任何向量线性相关。
>  行阶梯矩阵的非零行之间是线性无关的。
>  在 <span class="course-math" data-tex="\mathbb{R}^{2}" data-display="false"><code>\mathbb{R}^{2}</code></span> 中，两个向量线性相关说明它们同一条直线上，三个向量之间一定是线性相关的。
>  在 <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> 中，任何 <span class="course-math" data-tex="n(n&gt;m)" data-display="false"><code>n(n&gt;m)</code></span> 个向量必然线性相关。


矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的秩（Rank）：
- 主元的个数，记作 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 或 <span class="course-math" data-tex="\operatorname{rank}(A)" data-display="false"><code>\operatorname{rank}(A)</code></span>。
- 极大的线性无关（Linearly Independent）的行/列的个数。

关于秩的一些性质：
- <span class="course-math" data-tex="r\leq \min(m,n)" data-display="false"><code>r\leq \min(m,n)</code></span>
- <span class="course-math" data-tex="r(AB)\leq \min(r(A), r(B))" data-display="false"><code>r(AB)\leq \min(r(A), r(B))</code></span>

**秩一矩阵（Rank 1 matrix）** 可以拆成一个列向量乘一个行向量。这是因为，它的列空间的维数 <span class="course-math" data-tex="\dim C(A)=\operatorname{rank}(A)=1" data-display="false"><code>\dim C(A)=\operatorname{rank}(A)=1</code></span>。

若 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是一个可逆矩阵，则 <span class="course-math" data-tex="r(PA)=r(AP)=r(A)" data-display="false"><code>r(PA)=r(AP)=r(A)</code></span>。

若 <span class="course-math" data-tex="AB=O" data-display="false"><code>AB=O</code></span>，则有 <span class="course-math" data-tex="C(B) \subseteq N(A)" data-display="false"><code>C(B) \subseteq N(A)</code></span>，则有 <span class="course-math" data-tex="\operatorname{rank}(B)\leq n-\operatorname{rank}(A)" data-display="false"><code>\operatorname{rank}(B)\leq n-\operatorname{rank}(A)</code></span>，也就是：
<span class="course-math course-math-display" data-tex="\operatorname{rank}(A)+\operatorname{rank}(B)\leq n" data-display="true"><code>\operatorname{rank}(A)+\operatorname{rank}(B)\leq n</code></span>
一般的，有<span class="course-math course-math-display" data-tex="\operatorname{rank}(AB)=\operatorname{rank}(B)-\dim(N(A)\cap C(B))\geq\operatorname{rank}(B)-\dim N(A)=\operatorname{rank}(B)+\operatorname{rank}(A)-n" data-display="true"><code>\operatorname{rank}(AB)=\operatorname{rank}(B)-\dim(N(A)\cap C(B))\geq\operatorname{rank}(B)-\dim N(A)=\operatorname{rank}(B)+\operatorname{rank}(A)-n</code></span> 故而有
<span class="course-math course-math-display" data-tex="\operatorname{rank}(A)+\operatorname{rank}(B)-n\leq\operatorname{rank}(AB)" data-display="true"><code>\operatorname{rank}(A)+\operatorname{rank}(B)-n\leq\operatorname{rank}(AB)</code></span>

一些题目中的结论： <span class="course-math" data-tex="\operatorname{rank}(A^{\top}A)=\operatorname{rank}(A)" data-display="false"><code>\operatorname{rank}(A^{\top}A)=\operatorname{rank}(A)</code></span>， <span class="course-math" data-tex="\operatorname{rank}(A+B)\leq\operatorname{rank}(A)+\operatorname{rank}(B)" data-display="false"><code>\operatorname{rank}(A+B)\leq\operatorname{rank}(A)+\operatorname{rank}(B)</code></span>。
<span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 有解等价于 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 与 <span class="course-math" data-tex="\begin{bmatrix}A \mid \boldsymbol{b}\end{bmatrix}" data-display="false"><code>\begin{bmatrix}A \mid \boldsymbol{b}\end{bmatrix}</code></span> 的秩相等。
{% endraw %}
