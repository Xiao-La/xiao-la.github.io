---
title: "Orthogonal - 正交"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-04-03T14:42:42+08:00"
updated_at: "2026-10-09T17:19:46+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/linear-algebra/orthogonal/"
course_page: true
doc_type: "note"
description: "线性代数 · Orthogonal - 正交"
excerpt: "线性代数 · Orthogonal - 正交"
---

{% raw %}

<span class="course-math" data-tex="\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^{n}" data-display="false"><code>\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^{n}</code></span> 正交（Orthogonal）定义为  <span class="course-math" data-tex="\boldsymbol{x}^{\top}\boldsymbol{y}=0" data-display="false"><code>\boldsymbol{x}^{\top}\boldsymbol{y}=0</code></span>。
<span class="course-math" data-tex="\boldsymbol{x}\in \mathbb{R}^n" data-display="false"><code>\boldsymbol{x}\in \mathbb{R}^n</code></span> 的长度（Length）定义为 <span class="course-math" data-tex="\lVert \boldsymbol{x}\rVert  = \sqrt{ \boldsymbol{x}^{\top}\boldsymbol{x} }" data-display="false"><code>\lVert \boldsymbol{x}\rVert  = \sqrt{ \boldsymbol{x}^{\top}\boldsymbol{x} }</code></span>。
<span class="course-math" data-tex="\boldsymbol{x},\boldsymbol{y}\in \mathbb{R}^n" data-display="false"><code>\boldsymbol{x},\boldsymbol{y}\in \mathbb{R}^n</code></span> 之间的角度定义为 <span class="course-math" data-tex="\cos\theta= \frac{\boldsymbol{x}^{\top}\boldsymbol{y}}{\lVert \boldsymbol{x} \rVert\lVert \boldsymbol{y} \rVert}" data-display="false"><code>\cos\theta= \frac{\boldsymbol{x}^{\top}\boldsymbol{y}}{\lVert \boldsymbol{x} \rVert\lVert \boldsymbol{y} \rVert}</code></span>。

**柯西-施瓦茨不等式（Cauchy-Schwarz）：** 对于任意两个内积空间中的向量 <span class="course-math" data-tex="\boldsymbol{x},\boldsymbol{y}" data-display="false"><code>\boldsymbol{x},\boldsymbol{y}</code></span>，有：
<span class="course-math course-math-display" data-tex="\lvert \boldsymbol{x}\cdot \boldsymbol{y}\rvert ^{2}\leq \lvert \boldsymbol{x} \cdot \boldsymbol{x} \rvert \lvert \boldsymbol{y}\cdot \boldsymbol{y} \rvert" data-display="true"><code>\lvert \boldsymbol{x}\cdot \boldsymbol{y}\rvert ^{2}\leq \lvert \boldsymbol{x} \cdot \boldsymbol{x} \rvert \lvert \boldsymbol{y}\cdot \boldsymbol{y} \rvert</code></span>
这和角度的定义相统一，因为 <span class="course-math" data-tex="\lvert \cos\theta\rvert \leq 1" data-display="false"><code>\lvert \cos\theta\rvert \leq 1</code></span> 。

定理：若一组向量相互正交且它们不是零向量，则它们是线性无关的。
- 证明：对于方程 <span class="course-math" data-tex="c_{1}\boldsymbol{v}_{1}+c_{2}\boldsymbol{v}_{2}+\dots+c_{n}\boldsymbol{v}_{n}=0" data-display="false"><code>c_{1}\boldsymbol{v}_{1}+c_{2}\boldsymbol{v}_{2}+\dots+c_{n}\boldsymbol{v}_{n}=0</code></span>，将它点乘 <span class="course-math" data-tex="\boldsymbol{v}_{1}" data-display="false"><code>\boldsymbol{v}_{1}</code></span> 得 <span class="course-math" data-tex="\boldsymbol{v}_{1}^{\top}(c_{1}\boldsymbol{v}_{1}+c_{2}\boldsymbol{v}_{2}+\dots+c_{n}\boldsymbol{v}_{n})=0" data-display="false"><code>\boldsymbol{v}_{1}^{\top}(c_{1}\boldsymbol{v}_{1}+c_{2}\boldsymbol{v}_{2}+\dots+c_{n}\boldsymbol{v}_{n})=0</code></span>，也就是说 <span class="course-math" data-tex="\boldsymbol{v}_{1}^{\top}c_{1}\boldsymbol{v}_{1}=c_{1}\lVert \boldsymbol{v}_{1} \rVert^{2}=0" data-display="false"><code>\boldsymbol{v}_{1}^{\top}c_{1}\boldsymbol{v}_{1}=c_{1}\lVert \boldsymbol{v}_{1} \rVert^{2}=0</code></span>。由于 <span class="course-math" data-tex="\lVert \boldsymbol{v}_{1} \rVert\neq 0" data-display="false"><code>\lVert \boldsymbol{v}_{1} \rVert\neq 0</code></span>，那么 <span class="course-math" data-tex="c_{1}=0" data-display="false"><code>c_{1}=0</code></span>。类似的 <span class="course-math" data-tex="c_{i}" data-display="false"><code>c_{i}</code></span> 都为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。

两个子空间 <span class="course-math" data-tex="V,W" data-display="false"><code>V,W</code></span> 彼此正交定义为 <span class="course-math" data-tex="\forall \boldsymbol{v}\in V, \boldsymbol{w}\in W" data-display="false"><code>\forall \boldsymbol{v}\in V, \boldsymbol{w}\in W</code></span>，有 <span class="course-math" data-tex="\boldsymbol{v}^{\top}\boldsymbol{w}=0" data-display="false"><code>\boldsymbol{v}^{\top}\boldsymbol{w}=0</code></span>。记作 <span class="course-math" data-tex="V \perp W" data-display="false"><code>V \perp W</code></span>。

<span class="course-math" data-tex="C(A)\perp N(A^{\top})" data-display="false"><code>C(A)\perp N(A^{\top})</code></span>
- 证明：<span class="course-math" data-tex="\boldsymbol{b} \in C(A) \implies \exists \boldsymbol{x},\text{s.t. }A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>\boldsymbol{b} \in C(A) \implies \exists \boldsymbol{x},\text{s.t. }A\boldsymbol{x}=\boldsymbol{b}</code></span>；<span class="course-math" data-tex="\boldsymbol{y}\in N(A^{\top})\implies \boldsymbol{y}^{\top}A=0" data-display="false"><code>\boldsymbol{y}\in N(A^{\top})\implies \boldsymbol{y}^{\top}A=0</code></span>。从而 <span class="course-math" data-tex="\boldsymbol{y}^{\top}\boldsymbol{b}=\boldsymbol{y}^{\top}(A\boldsymbol{x})=(\boldsymbol{y}^{\top}A)\boldsymbol{x}=0" data-display="false"><code>\boldsymbol{y}^{\top}\boldsymbol{b}=\boldsymbol{y}^{\top}(A\boldsymbol{x})=(\boldsymbol{y}^{\top}A)\boldsymbol{x}=0</code></span>。从而 <span class="course-math" data-tex="\boldsymbol{y}^{\top}\perp \boldsymbol{b}" data-display="false"><code>\boldsymbol{y}^{\top}\perp \boldsymbol{b}</code></span>。

<span class="course-math" data-tex="C(A^{\top})\perp N(A)" data-display="false"><code>C(A^{\top})\perp N(A)</code></span>
- 证明：<span class="course-math" data-tex="\boldsymbol{x}\in N(A)\implies A\boldsymbol{x}=0\implies \boldsymbol{x}^{\top}A^{\top}=0" data-display="false"><code>\boldsymbol{x}\in N(A)\implies A\boldsymbol{x}=0\implies \boldsymbol{x}^{\top}A^{\top}=0</code></span>，故 <span class="course-math" data-tex="\boldsymbol{x}\perp A^{\top}" data-display="false"><code>\boldsymbol{x}\perp A^{\top}</code></span>。

<span class="course-math" data-tex="V\subseteq \mathbb{R}^n" data-display="false"><code>V\subseteq \mathbb{R}^n</code></span> 的垂直补（Orthogonal Complement）定义为所有满足 <span class="course-math" data-tex="\boldsymbol{v}\perp V" data-display="false"><code>\boldsymbol{v}\perp V</code></span> 的向量 <span class="course-math" data-tex="\boldsymbol{v}" data-display="false"><code>\boldsymbol{v}</code></span> 组成的集合，记作 <span class="course-math" data-tex="V^{\perp}" data-display="false"><code>V^{\perp}</code></span>。一个空间和其垂直补的维数之和为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>。

可以证明 <span class="course-math" data-tex="C(A)^{\perp}=N(A^{\top}), C(A^{\top})^{\perp}= N(A)" data-display="false"><code>C(A)^{\perp}=N(A^{\top}), C(A^{\top})^{\perp}= N(A)</code></span>。
- <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 相容的一个等价条件：<span class="course-math" data-tex="\boldsymbol{y}^{\top}\boldsymbol{b}=0 , \forall \boldsymbol{y}\in N(A^{\top})" data-display="false"><code>\boldsymbol{y}^{\top}\boldsymbol{b}=0 , \forall \boldsymbol{y}\in N(A^{\top})</code></span>。

<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 表示的线性变换把 <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span> 映射到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中，把 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 映射到 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。对于任何一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 维向量 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span>，它可以写成 <span class="course-math" data-tex="\boldsymbol{x}=\boldsymbol{x}_{r}+\boldsymbol{x}_{n}" data-display="false"><code>\boldsymbol{x}=\boldsymbol{x}_{r}+\boldsymbol{x}_{n}</code></span>，而 <span class="course-math" data-tex="A\boldsymbol{x}=A(\boldsymbol{x}_{r}+\boldsymbol{x}_{n})=A\boldsymbol{x}_{r}" data-display="false"><code>A\boldsymbol{x}=A(\boldsymbol{x}_{r}+\boldsymbol{x}_{n})=A\boldsymbol{x}_{r}</code></span>。这里 <span class="course-math" data-tex="\boldsymbol{x}_{r}" data-display="false"><code>\boldsymbol{x}_{r}</code></span> 是行空间中的一个向量，而 <span class="course-math" data-tex="A\boldsymbol{x}_{r}" data-display="false"><code>A\boldsymbol{x}_{r}</code></span> 是列空间中的一个向量。所以从几何上看，它把自己的行空间映射到列空间。


## 投影与最小平方解
{: #section-1 }


<span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 在非零向量 <span class="course-math" data-tex="\boldsymbol{a}" data-display="false"><code>\boldsymbol{a}</code></span> 上的投影（Projection）：<span class="course-math" data-tex="\boldsymbol{p}= \lVert \boldsymbol{b} \rVert\cos\theta  \frac{\boldsymbol{a}}{\lVert \boldsymbol{a} \rVert}=\frac{\boldsymbol{a}^{\top}\boldsymbol{b}}{\lVert \boldsymbol{a} \rVert^{2}}\boldsymbol{a}" data-display="false"><code>\boldsymbol{p}= \lVert \boldsymbol{b} \rVert\cos\theta  \frac{\boldsymbol{a}}{\lVert \boldsymbol{a} \rVert}=\frac{\boldsymbol{a}^{\top}\boldsymbol{b}}{\lVert \boldsymbol{a} \rVert^{2}}\boldsymbol{a}</code></span>。
投影的矩阵表示： <span class="course-math" data-tex="T:\mathbb{R}^n\to \mathbb{R}^n, \boldsymbol{b} \mapsto \frac{\boldsymbol{a}^{\top}\boldsymbol{b}}{\lVert \boldsymbol{a} \rVert^{2}}\boldsymbol{a}" data-display="false"><code>T:\mathbb{R}^n\to \mathbb{R}^n, \boldsymbol{b} \mapsto \frac{\boldsymbol{a}^{\top}\boldsymbol{b}}{\lVert \boldsymbol{a} \rVert^{2}}\boldsymbol{a}</code></span>。所以矩阵表示就是 <span class="course-math" data-tex="\frac{\boldsymbol{a}\boldsymbol{a}^{\top}}{\boldsymbol{a}^{\top}\boldsymbol{a}}" data-display="false"><code>\frac{\boldsymbol{a}\boldsymbol{a}^{\top}}{\boldsymbol{a}^{\top}\boldsymbol{a}}</code></span>。

应用：**最小平方解（Least Square Solutions）**，求平方和 <span class="course-math" data-tex="\sum_{i=1}^m(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}" data-display="false"><code>\sum_{i=1}^m(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}</code></span> 的最小值，其中 <span class="course-math" data-tex="a_{ij}, b_{i}" data-display="false"><code>a_{ij}, b_{i}</code></span> 为常数。
- 把问题转换为求 <span class="course-math" data-tex="\lVert A\boldsymbol{x}-\boldsymbol{b} \rVert^{2}" data-display="false"><code>\lVert A\boldsymbol{x}-\boldsymbol{b} \rVert^{2}</code></span> 的最小值。<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 将 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span> 映射到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中。在平面 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中的向量 <span class="course-math" data-tex="A\boldsymbol{x}" data-display="false"><code>A\boldsymbol{x}</code></span> 与任意向量 <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 终点连线的长度最小，需要这个连线与 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 垂直，所以 <span class="course-math" data-tex="\boldsymbol{b}-A\hat{\boldsymbol{x}} \in C(A)^{\perp}=N(A^{\top})" data-display="false"><code>\boldsymbol{b}-A\hat{\boldsymbol{x}} \in C(A)^{\perp}=N(A^{\top})</code></span>。那么 <span class="course-math" data-tex="A^{\top}(\boldsymbol{b}-A\hat{\boldsymbol{x}})=0" data-display="false"><code>A^{\top}(\boldsymbol{b}-A\hat{\boldsymbol{x}})=0</code></span>。
- **只需解方程 <span class="course-math" data-tex="(A^{\top} A)\hat{\boldsymbol{x}}=A^{\top} \boldsymbol{b}" data-display="false"><code>(A^{\top} A)\hat{\boldsymbol{x}}=A^{\top} \boldsymbol{b}</code></span>。**
- 为什么这个方程组有解？从几何角度可以理解。
- 也可以通过证明 <span class="course-math" data-tex="\operatorname{rank}(A^{\top}A)=\operatorname{rank}(\begin{bmatrix}A^{\top}A &amp;A^{\top}\boldsymbol{b}\end{bmatrix})" data-display="false"><code>\operatorname{rank}(A^{\top}A)=\operatorname{rank}(\begin{bmatrix}A^{\top}A &amp;A^{\top}\boldsymbol{b}\end{bmatrix})</code></span>。
  - 显然 <span class="course-math" data-tex="\operatorname{rank}(A^{\top}A)\leq\operatorname{rank}(\begin{bmatrix}A^{\top}A &amp;A^{\top}\boldsymbol{b}\end{bmatrix})" data-display="false"><code>\operatorname{rank}(A^{\top}A)\leq\operatorname{rank}(\begin{bmatrix}A^{\top}A &amp;A^{\top}\boldsymbol{b}\end{bmatrix})</code></span>。
  - 另有 <span class="course-math" data-tex="\operatorname{rank}(A^{\top}A)=\operatorname{rank}(A^{\top})\geq\operatorname{rank}(A^{\top} \begin{bmatrix}A &amp; \boldsymbol{b}\end{bmatrix})=\operatorname{rank}(\begin{bmatrix}A^{\top}A &amp; A^{\top}\boldsymbol{b}\end{bmatrix})" data-display="false"><code>\operatorname{rank}(A^{\top}A)=\operatorname{rank}(A^{\top})\geq\operatorname{rank}(A^{\top} \begin{bmatrix}A &amp; \boldsymbol{b}\end{bmatrix})=\operatorname{rank}(\begin{bmatrix}A^{\top}A &amp; A^{\top}\boldsymbol{b}\end{bmatrix})</code></span>。
- 若 <span class="course-math" data-tex="A^{\top} A" data-display="false"><code>A^{\top} A</code></span> 可逆，则 <span class="course-math" data-tex="\hat{\boldsymbol{x}}=(A^{\top}A)^{-1}A^{\top} \boldsymbol{b}" data-display="false"><code>\hat{\boldsymbol{x}}=(A^{\top}A)^{-1}A^{\top} \boldsymbol{b}</code></span> 。也就是，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的最优左逆左乘 <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span>。
- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆，则可以进一步得到 <span class="course-math" data-tex="\hat{\boldsymbol{x}}=A^{-1}\boldsymbol{b}" data-display="false"><code>\hat{\boldsymbol{x}}=A^{-1}\boldsymbol{b}</code></span>。

对于 <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span> 的情况就是用最小二乘法求线性回归直线。
- 设这个回归直线为  <span class="course-math" data-tex="b=C+Dt" data-display="false"><code>b=C+Dt</code></span>。则要使得残差平方和 <span class="course-math" data-tex="\sum_{i=1}^m(C+Dt_{i}-b_{i})^{2}" data-display="false"><code>\sum_{i=1}^m(C+Dt_{i}-b_{i})^{2}</code></span> 最小。
- 这里

  <span class="course-math course-math-display" data-tex="A=\begin{bmatrix}1 &amp; t_{1} \\ 1  &amp; t_{2} \\ \dots &amp; \dots \\ 1 &amp; t_{m}\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}1 &amp; t_{1} \\ 1  &amp; t_{2} \\ \dots &amp; \dots \\ 1 &amp; t_{m}\end{bmatrix}</code></span>

  ，

  <span class="course-math course-math-display" data-tex="\boldsymbol{b}=\begin{bmatrix}b_{1} \\ b_{2} \\ \dots \\ b_{m}\end{bmatrix}" data-display="true"><code>\boldsymbol{b}=\begin{bmatrix}b_{1} \\ b_{2} \\ \dots \\ b_{m}\end{bmatrix}</code></span>

  。
- 则只需解方程

  <span class="course-math course-math-display" data-tex="A^{\top}A\begin{bmatrix}C \\ D\end{bmatrix}=A^{\top}\boldsymbol{b}" data-display="true"><code>A^{\top}A\begin{bmatrix}C \\ D\end{bmatrix}=A^{\top}\boldsymbol{b}</code></span>

   即可求出直线的系数。
- 为了方便计算，可以让 <span class="course-math" data-tex="b=C_{1}+D_{1}(t-\bar{t})" data-display="false"><code>b=C_{1}+D_{1}(t-\bar{t})</code></span>，这里原直线的参数 <span class="course-math" data-tex="C=C_{1}-D_{1}\bar t, D=D_{1}" data-display="false"><code>C=C_{1}-D_{1}\bar t, D=D_{1}</code></span>。那么

  <span class="course-math course-math-display" data-tex="A=\begin{bmatrix}1 &amp; t_{1}-\bar{t} \\ 1 &amp; t_{2}-\bar{t} \\ \dots &amp; \dots \\ 1 &amp; t_{m}-\bar{t}\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}1 &amp; t_{1}-\bar{t} \\ 1 &amp; t_{2}-\bar{t} \\ \dots &amp; \dots \\ 1 &amp; t_{m}-\bar{t}\end{bmatrix}</code></span>

  ，则 <span class="course-math" data-tex="A=\begin{bmatrix}\boldsymbol{v}_{1} &amp; \boldsymbol{v}_{2}\end{bmatrix}" data-display="false"><code>A=\begin{bmatrix}\boldsymbol{v}_{1} &amp; \boldsymbol{v}_{2}\end{bmatrix}</code></span> 的两列是正交的。那么 <span class="course-math" data-tex="\hat{C}_1=\frac{\boldsymbol{v}_{1}^{\top}b}{\boldsymbol{v}_{1}^{\top}\boldsymbol{v}_{1}},\hat{D}_1=\frac{\boldsymbol{v}_{2}^{\top}b}{\boldsymbol{v}_{2}^{\top}\boldsymbol{v}_{2}}" data-display="false"><code>\hat{C}_1=\frac{\boldsymbol{v}_{1}^{\top}b}{\boldsymbol{v}_{1}^{\top}\boldsymbol{v}_{1}},\hat{D}_1=\frac{\boldsymbol{v}_{2}^{\top}b}{\boldsymbol{v}_{2}^{\top}\boldsymbol{v}_{2}}</code></span>。

考虑这个几何问题，选取 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的一组基作为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列（列满秩）。
- 由于 <span class="course-math" data-tex="A\hat{\boldsymbol{x}}" data-display="false"><code>A\hat{\boldsymbol{x}}</code></span> 为 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 上使得其终点与 <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 终点连线垂直于 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的向量，<span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 在 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 上的投影即为 <span class="course-math" data-tex="\boldsymbol{p}=A\hat{\boldsymbol{x}}=A(A^{\top}A)^{-1}A^{\top}\boldsymbol{b}" data-display="false"><code>\boldsymbol{p}=A\hat{\boldsymbol{x}}=A(A^{\top}A)^{-1}A^{\top}\boldsymbol{b}</code></span>。
- 那么投影到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的线性变换的矩阵表示为 <span class="course-math" data-tex="P=A(A^{\top}A)^{-1} A^{\top}" data-display="false"><code>P=A(A^{\top}A)^{-1} A^{\top}</code></span>。
- 这里 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 有些性质。比如 <span class="course-math" data-tex="P^{2}=P" data-display="false"><code>P^{2}=P</code></span>, <span class="course-math" data-tex="P^{\top}=P" data-display="false"><code>P^{\top}=P</code></span>。


**定义投影矩阵（Projection Matrix）**：满足 <span class="course-math" data-tex="P^{2}=P" data-display="false"><code>P^{2}=P</code></span> 且 <span class="course-math" data-tex="P^{\top}=P" data-display="false"><code>P^{\top}=P</code></span> 的矩阵。
- 任何投影矩阵都来自于投影到某个列空间 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的投影。
- 推论：容易验证 <span class="course-math" data-tex="Q=I-P" data-display="false"><code>Q=I-P</code></span> 也是投影矩阵。若 <span class="course-math" data-tex="P=A(A^{\top}A)^{-1}A^{\top}" data-display="false"><code>P=A(A^{\top}A)^{-1}A^{\top}</code></span>，则 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是投影到 <span class="course-math" data-tex="C(A)^{\perp}=N(A^{\top})" data-display="false"><code>C(A)^{\perp}=N(A^{\top})</code></span> 的投影矩阵。这是因为，<span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span> 可以正交分解为 <span class="course-math" data-tex="P\boldsymbol{x}+(I-P)\boldsymbol{x}" data-display="false"><code>P\boldsymbol{x}+(I-P)\boldsymbol{x}</code></span>。
- 例如要求投影到平面 <span class="course-math" data-tex="x+y+z=0" data-display="false"><code>x+y+z=0</code></span> 的投影矩阵，可以先求投影到其法向量

  <span class="course-math course-math-display" data-tex="\boldsymbol{n}=\begin{bmatrix}1 \\ 1 \\ 1\end{bmatrix}" data-display="true"><code>\boldsymbol{n}=\begin{bmatrix}1 \\ 1 \\ 1\end{bmatrix}</code></span>

   上的投影矩阵 <span class="course-math" data-tex="\frac{\boldsymbol{n}\boldsymbol{n}^{\top}}{\boldsymbol{n}^{\top}\boldsymbol{n}}" data-display="false"><code>\frac{\boldsymbol{n}\boldsymbol{n}^{\top}}{\boldsymbol{n}^{\top}\boldsymbol{n}}</code></span>，再用恒等矩阵减去它。
- 求高维投影矩阵，不如去找它正交补的投影矩阵，再用恒等矩阵减去它就好了。


加权最小平方解（Weighted least-square solution）：求平方和 <span class="course-math" data-tex="\sum_{i=1}^mw_{i}^{2}(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}" data-display="false"><code>\sum_{i=1}^mw_{i}^{2}(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}</code></span> 的最小值，其中 <span class="course-math" data-tex="a_{ij}, b_{i}" data-display="false"><code>a_{ij}, b_{i}</code></span> 为常数。
- 只需要把 <span class="course-math" data-tex="w_{i}" data-display="false"><code>w_{i}</code></span> 放到平方里面去即可。
- 构造 <span class="course-math" data-tex="W=\operatorname{diag}(w_1,\dots,w_m)" data-display="false"><code>W=\operatorname{diag}(w_1,\dots,w_m)</code></span>，则转换为求 <span class="course-math" data-tex="\lVert WA\hat{\boldsymbol{x}_{w}}-W\boldsymbol{b} \rVert^{2}" data-display="false"><code>\lVert WA\hat{\boldsymbol{x}_{w}}-W\boldsymbol{b} \rVert^{2}</code></span> 的最小值。
- 也就是 <span class="course-math" data-tex="(WA)^{\top}(WA)\hat{\boldsymbol{x}_{w}}=(WA)^{\top}(W\boldsymbol{b})" data-display="false"><code>(WA)^{\top}(WA)\hat{\boldsymbol{x}_{w}}=(WA)^{\top}(W\boldsymbol{b})</code></span>。
- 也就是 <span class="course-math" data-tex="A^{\top}(W^{\top}W)A\hat{\boldsymbol{x}_{w}}=A^{\top}(W^{\top}W)\boldsymbol{b}" data-display="false"><code>A^{\top}(W^{\top}W)A\hat{\boldsymbol{x}_{w}}=A^{\top}(W^{\top}W)\boldsymbol{b}</code></span>。


## 规范正交基与正交矩阵
{: #section-2 }


规定 <span class="course-math" data-tex="\boldsymbol{q}_{1},\boldsymbol{q}_{2},\dots,\boldsymbol{q}_{s}" data-display="false"><code>\boldsymbol{q}_{1},\boldsymbol{q}_{2},\dots,\boldsymbol{q}_{s}</code></span> 为一组向量，且满足：
  <span class="course-math course-math-display" data-tex="\boldsymbol{q}_{i}^{\top}\boldsymbol{q}_{j}=\begin{cases}&#10;1 &amp; i=j \\&#10;0 &amp; i\neq j&#10;\end{cases}" data-display="true"><code>\boldsymbol{q}_{i}^{\top}\boldsymbol{q}_{j}=\begin{cases}&#10;1 &amp; i=j \\&#10;0 &amp; i\neq j&#10;\end{cases}</code></span>
则称它们是规范正交（Orthonormal）的。
若 <span class="course-math" data-tex="\boldsymbol{q}_{1}, \boldsymbol{q}_{2},\dots,\boldsymbol{q}_{n}" data-display="false"><code>\boldsymbol{q}_{1}, \boldsymbol{q}_{2},\dots,\boldsymbol{q}_{n}</code></span> 是空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组基且它们规范正交，则称它们为规范正交基（Orthonormal Basis）。

正交矩阵（Orthogonal Matrix）：一个有着规范正交的列的**方矩阵**
<span class="course-math course-math-display" data-tex="Q^{\top}Q=I" data-display="true"><code>Q^{\top}Q=I</code></span>
例如，旋转矩阵，排列矩阵以及反射矩阵都是正交矩阵。
正交矩阵代表的变换会保持长度不变：
<span class="course-math course-math-display" data-tex="\lVert Q\boldsymbol{x} \rVert=\lVert \boldsymbol{x} \rVert" data-display="true"><code>\lVert Q\boldsymbol{x} \rVert=\lVert \boldsymbol{x} \rVert</code></span>
这是因为，<span class="course-math" data-tex="(Q\boldsymbol{x})^{\top}(Q\boldsymbol{x})=\boldsymbol{x}^{\top}Q^{\top}Q\boldsymbol{x}=\boldsymbol{x}^{\top}\boldsymbol{x}" data-display="false"><code>(Q\boldsymbol{x})^{\top}(Q\boldsymbol{x})=\boldsymbol{x}^{\top}Q^{\top}Q\boldsymbol{x}=\boldsymbol{x}^{\top}\boldsymbol{x}</code></span>。
更一般地，它会保持内积不变/夹角不变：
<span class="course-math course-math-display" data-tex="(Q\boldsymbol{x})^{\top}(Q\boldsymbol{y})=\boldsymbol{x}^{\top}\boldsymbol{y}" data-display="true"><code>(Q\boldsymbol{x})^{\top}(Q\boldsymbol{y})=\boldsymbol{x}^{\top}\boldsymbol{y}</code></span>

正交基/正交矩阵的好处：
- 坐标非常容易求出来。
<span class="course-math course-math-display" data-tex="\boldsymbol{b}=\sum x_{i}\boldsymbol{q}_{i}" data-display="true"><code>\boldsymbol{b}=\sum x_{i}\boldsymbol{q}_{i}</code></span>
<span class="course-math course-math-display" data-tex="\implies \boldsymbol{q}_{i}^{\top}\boldsymbol{b}=\boldsymbol{q}_{i}^{\top}\boldsymbol{q}_{i}x_{i}" data-display="true"><code>\implies \boldsymbol{q}_{i}^{\top}\boldsymbol{b}=\boldsymbol{q}_{i}^{\top}\boldsymbol{q}_{i}x_{i}</code></span>
<span class="course-math course-math-display" data-tex="\implies x_{i}=\boldsymbol{q}_{i}^{\top}\boldsymbol{b}" data-display="true"><code>\implies x_{i}=\boldsymbol{q}_{i}^{\top}\boldsymbol{b}</code></span>
- 逆非常容易求出来。
<span class="course-math course-math-display" data-tex="Q=\begin{bmatrix}&#10;\boldsymbol{q}_{1} &amp; \boldsymbol{q}_{2} &amp; \dots &amp; \boldsymbol{q}_{n}&#10;\end{bmatrix}" data-display="true"><code>Q=\begin{bmatrix}&#10;\boldsymbol{q}_{1} &amp; \boldsymbol{q}_{2} &amp; \dots &amp; \boldsymbol{q}_{n}&#10;\end{bmatrix}</code></span>
<span class="course-math course-math-display" data-tex="\implies Q^{-1}=Q^{\top}" data-display="true"><code>\implies Q^{-1}=Q^{\top}</code></span>
<span class="course-math course-math-display" data-tex="Q\boldsymbol{x}=\boldsymbol{b}\implies \boldsymbol{x}=Q^{\top}\boldsymbol{b}=\begin{bmatrix}&#10;\boldsymbol{q}_{1}^{\top}\boldsymbol{b} \\&#10;\dots \\&#10;\boldsymbol{q}_{n}^{\top}\boldsymbol{b}&#10;\end{bmatrix}" data-display="true"><code>Q\boldsymbol{x}=\boldsymbol{b}\implies \boldsymbol{x}=Q^{\top}\boldsymbol{b}=\begin{bmatrix}&#10;\boldsymbol{q}_{1}^{\top}\boldsymbol{b} \\&#10;\dots \\&#10;\boldsymbol{q}_{n}^{\top}\boldsymbol{b}&#10;\end{bmatrix}</code></span>
- 任意向量分解到基上都相当于投影上去。
<span class="course-math course-math-display" data-tex="\boldsymbol{b}=\sum (\boldsymbol{q}_{i}^{\top}\boldsymbol{b})\boldsymbol{q}_{i}" data-display="true"><code>\boldsymbol{b}=\sum (\boldsymbol{q}_{i}^{\top}\boldsymbol{b})\boldsymbol{q}_{i}</code></span>
- 长度很好求。
<span class="course-math course-math-display" data-tex="\lVert \boldsymbol{b} \rVert = \sqrt{ \sum (\boldsymbol{q}_{i}^{\top}\boldsymbol{b})^{2} }" data-display="true"><code>\lVert \boldsymbol{b} \rVert = \sqrt{ \sum (\boldsymbol{q}_{i}^{\top}\boldsymbol{b})^{2} }</code></span>

- <span class="course-math" data-tex="Q^{\top}" data-display="false"><code>Q^{\top}</code></span> 也是一个正交矩阵，也就是说行也是正交的
<span class="course-math course-math-display" data-tex="(Q^{\top})^{\top}Q^{\top}=(QQ^{\top})^{\top}=I" data-display="true"><code>(Q^{\top})^{\top}Q^{\top}=(QQ^{\top})^{\top}=I</code></span>
- 【*注意这里的 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 代表不一定为方阵，但列正交的情况* 】若要求 <span class="course-math" data-tex="Q\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>Q\boldsymbol{x}=\boldsymbol{b}</code></span> 的最小平方解，则 <span class="course-math" data-tex="\hat{\boldsymbol{x}}=(Q^{\top}Q)Q^{\top}\boldsymbol{b}=Q^{\top}\boldsymbol{b}" data-display="false"><code>\hat{\boldsymbol{x}}=(Q^{\top}Q)Q^{\top}\boldsymbol{b}=Q^{\top}\boldsymbol{b}</code></span>，则投影 <span class="course-math" data-tex="\boldsymbol{p}=Q\hat{\boldsymbol{x}}=QQ^{\top}\boldsymbol{b}=\sum (\boldsymbol{q}_{i}^{\top}\boldsymbol{b})\boldsymbol{q}_{i}" data-display="false"><code>\boldsymbol{p}=Q\hat{\boldsymbol{x}}=QQ^{\top}\boldsymbol{b}=\sum (\boldsymbol{q}_{i}^{\top}\boldsymbol{b})\boldsymbol{q}_{i}</code></span>，也就是说，投影到 <span class="course-math" data-tex="C(Q)" data-display="false"><code>C(Q)</code></span> 相当于投影到 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 的列向量上再相加。
- 投影到 <span class="course-math" data-tex="C(Q)" data-display="false"><code>C(Q)</code></span> 上的投影矩阵为 <span class="course-math" data-tex="P=Q(Q^{\top}Q)^{-1}Q^{\top}=QQ^{\top}" data-display="false"><code>P=Q(Q^{\top}Q)^{-1}Q^{\top}=QQ^{\top}</code></span>。


## Householder 变换
{: #section-3 }


Householder 变换：将某个向量 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span> 关于某个 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 维超平面  <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>  做反射。假设平面的法向量为 <span class="course-math" data-tex="\boldsymbol{v}" data-display="false"><code>\boldsymbol{v}</code></span>，则变换的矩阵表示为
<span class="course-math course-math-display" data-tex="H=I_{n}-2 \frac{\boldsymbol{v}\boldsymbol{v}^{\top}}{\boldsymbol{v}^{\top}\boldsymbol{v}}" data-display="true"><code>H=I_{n}-2 \frac{\boldsymbol{v}\boldsymbol{v}^{\top}}{\boldsymbol{v}^{\top}\boldsymbol{v}}</code></span>
这是因为，<span class="course-math" data-tex="H:\mathbb{R}^n \to \mathbb{R}^n, \boldsymbol{x}=\boldsymbol{x}_{\parallel}+\boldsymbol{x}_{\perp}\mapsto \boldsymbol{x}_{\parallel}-\boldsymbol{x}_{\perp}" data-display="false"><code>H:\mathbb{R}^n \to \mathbb{R}^n, \boldsymbol{x}=\boldsymbol{x}_{\parallel}+\boldsymbol{x}_{\perp}\mapsto \boldsymbol{x}_{\parallel}-\boldsymbol{x}_{\perp}</code></span>，又有 <span class="course-math" data-tex="P_{v}\boldsymbol{x}=\boldsymbol{x}_{\perp}" data-display="false"><code>P_{v}\boldsymbol{x}=\boldsymbol{x}_{\perp}</code></span>，则 <span class="course-math" data-tex="H\boldsymbol{x}=\boldsymbol{x}_{\parallel}-\boldsymbol{x}_{\perp}=\boldsymbol{x}-2\boldsymbol{x}_{\perp}=\boldsymbol{x}-2P_{v}\boldsymbol{x}" data-display="false"><code>H\boldsymbol{x}=\boldsymbol{x}_{\parallel}-\boldsymbol{x}_{\perp}=\boldsymbol{x}-2\boldsymbol{x}_{\perp}=\boldsymbol{x}-2P_{v}\boldsymbol{x}</code></span>，进而 <span class="course-math" data-tex="H=I-2P_{v}=I-2 \frac{\boldsymbol{v}\boldsymbol{v}^{\top}}{\boldsymbol{v}^{\top}\boldsymbol{v}}" data-display="false"><code>H=I-2P_{v}=I-2 \frac{\boldsymbol{v}\boldsymbol{v}^{\top}}{\boldsymbol{v}^{\top}\boldsymbol{v}}</code></span>。
- 对合性：<span class="course-math" data-tex="H^{2}=I" data-display="false"><code>H^{2}=I</code></span>
- 正交性：<span class="course-math" data-tex="H^{\top}H=I" data-display="false"><code>H^{\top}H=I</code></span>
- 对称性：<span class="course-math" data-tex="H=H^{\top}" data-display="false"><code>H=H^{\top}</code></span>
Householder 变换的意义在于，作为一个反射变换，它可以将向量的某些元素置零而保持长度不变。
- 例题：要找某个对称矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 使得 <span class="course-math" data-tex="A^{2}=I" data-display="false"><code>A^{2}=I</code></span> 且其第一列为某单位向量 <span class="course-math" data-tex="\boldsymbol{u}" data-display="false"><code>\boldsymbol{u}</code></span>。
- 若 <span class="course-math" data-tex="\boldsymbol{u}=\boldsymbol{e}_1" data-display="false"><code>\boldsymbol{u}=\boldsymbol{e}_1</code></span>，可取 <span class="course-math" data-tex="A=I" data-display="false"><code>A=I</code></span>；否则令 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为一个 Householder 矩阵，由题意得 <span class="course-math" data-tex="A\boldsymbol{e}_{1}=\boldsymbol{u}" data-display="false"><code>A\boldsymbol{e}_{1}=\boldsymbol{u}</code></span>，也就是说 <span class="course-math" data-tex="\boldsymbol{e}_{1}" data-display="false"><code>\boldsymbol{e}_{1}</code></span> 与 <span class="course-math" data-tex="\boldsymbol{u}" data-display="false"><code>\boldsymbol{u}</code></span> 关于 Householder 变换的超平面对称，那么可以取法向量 <span class="course-math" data-tex="\boldsymbol{v}=\boldsymbol{e}_{1}-\boldsymbol{u}" data-display="false"><code>\boldsymbol{v}=\boldsymbol{e}_{1}-\boldsymbol{u}</code></span>。从而得到矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>。


## Gram-Schmidt 正交化
{: #section-4 }


若我们已经有了 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组基 <span class="course-math" data-tex="\{ \boldsymbol{a}_{1},\boldsymbol{a}_{2},\dots,\boldsymbol{a}_{n} \}" data-display="false"><code>\{ \boldsymbol{a}_{1},\boldsymbol{a}_{2},\dots,\boldsymbol{a}_{n} \}</code></span>，我们可以通过 Gram-Schmidt 正交化（Orthogonalization）求出 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组规范正交基 <span class="course-math" data-tex="\boldsymbol{q}_{1},\boldsymbol{q}_{2},\dots,\boldsymbol{q}_{n}" data-display="false"><code>\boldsymbol{q}_{1},\boldsymbol{q}_{2},\dots,\boldsymbol{q}_{n}</code></span>。
先把 <span class="course-math" data-tex="\boldsymbol{a}_{1}" data-display="false"><code>\boldsymbol{a}_{1}</code></span> 归一化：
  <span class="course-math course-math-display" data-tex="\boldsymbol{q}_{1}=\frac{\boldsymbol{a}_{1}}{\lVert \boldsymbol{a}_{1} \rVert}" data-display="true"><code>\boldsymbol{q}_{1}=\frac{\boldsymbol{a}_{1}}{\lVert \boldsymbol{a}_{1} \rVert}</code></span>
把 <span class="course-math" data-tex="\boldsymbol{a}_{2}" data-display="false"><code>\boldsymbol{a}_{2}</code></span> 去掉其投影到 <span class="course-math" data-tex="\boldsymbol{q}_{1}" data-display="false"><code>\boldsymbol{q}_{1}</code></span> 的部分，再归一化
<span class="course-math course-math-display" data-tex="\boldsymbol{q}_{2}=\frac{\boldsymbol{a}_{2}-(\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{1}}{\lVert \boldsymbol{a}_{2}-(\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{1}\rVert }" data-display="true"><code>\boldsymbol{q}_{2}=\frac{\boldsymbol{a}_{2}-(\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{1}}{\lVert \boldsymbol{a}_{2}-(\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{1}\rVert }</code></span>
循环往复，减去往前面所有（正交的）向量做的投影：
<span class="course-math course-math-display" data-tex="\boldsymbol{u}_{j+1}=\boldsymbol{a}_{j+1}-\sum_{i=1}^j (\boldsymbol{q}_{i}^{\top} \boldsymbol{a}_{j+1})\boldsymbol{q}_{i}" data-display="true"><code>\boldsymbol{u}_{j+1}=\boldsymbol{a}_{j+1}-\sum_{i=1}^j (\boldsymbol{q}_{i}^{\top} \boldsymbol{a}_{j+1})\boldsymbol{q}_{i}</code></span>
<span class="course-math course-math-display" data-tex="\boldsymbol{q}_{j+1}= \frac{\boldsymbol{u}_{j+1}}{\lVert \boldsymbol{u}_{j+1} \rVert }" data-display="true"><code>\boldsymbol{q}_{j+1}= \frac{\boldsymbol{u}_{j+1}}{\lVert \boldsymbol{u}_{j+1} \rVert }</code></span>
当然也可以到最后再做单位化，计算会简单一些。


### QR 分解
{: #section-5 }


<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}&#10;\boldsymbol{a}_{1} &amp; \boldsymbol{a}_{2} &amp; \dots &amp; \boldsymbol{a}_{n}&#10;\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}&#10;\boldsymbol{a}_{1} &amp; \boldsymbol{a}_{2} &amp; \dots &amp; \boldsymbol{a}_{n}&#10;\end{bmatrix}</code></span>
<span class="course-math course-math-display" data-tex="Q=\begin{bmatrix}&#10;\boldsymbol{q}_{1} &amp; \boldsymbol{q}_{2} &amp; \dots &amp; \boldsymbol{q}_{n}&#10;\end{bmatrix}" data-display="true"><code>Q=\begin{bmatrix}&#10;\boldsymbol{q}_{1} &amp; \boldsymbol{q}_{2} &amp; \dots &amp; \boldsymbol{q}_{n}&#10;\end{bmatrix}</code></span>
这里有：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\boldsymbol{a}_{1}&amp;=\lVert \boldsymbol{a}_{1} \rVert \boldsymbol{q}_{1}= \boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{1}\boldsymbol{q}_{1}\\&#10;\boldsymbol{a}_{2}&amp;=(\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{1}+(\boldsymbol{q}_{2}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{2} \\&#10;\dots \\&#10;\boldsymbol{a}_{n}&amp;=\sum_{i=1}^n(\boldsymbol{q}_{i}^{\top}\boldsymbol{a}_{n})\boldsymbol{q}_{i}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\boldsymbol{a}_{1}&amp;=\lVert \boldsymbol{a}_{1} \rVert \boldsymbol{q}_{1}= \boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{1}\boldsymbol{q}_{1}\\&#10;\boldsymbol{a}_{2}&amp;=(\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{1}+(\boldsymbol{q}_{2}^{\top}\boldsymbol{a}_{2})\boldsymbol{q}_{2} \\&#10;\dots \\&#10;\boldsymbol{a}_{n}&amp;=\sum_{i=1}^n(\boldsymbol{q}_{i}^{\top}\boldsymbol{a}_{n})\boldsymbol{q}_{i}&#10;\end{aligned}</code></span>
因此可以构造矩阵
<span class="course-math course-math-display" data-tex="R=\begin{bmatrix}&#10;\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{1} &amp; \boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2} &amp; \dots &amp; \boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{n} \\&#10;0 &amp; \boldsymbol{q}_{2}^{\top}\boldsymbol{a}_{2} &amp; \dots &amp; \boldsymbol{q}_{2}^{\top}\boldsymbol{a}_{n} \\&#10;0 &amp; 0 &amp; \dots &amp; \dots \\&#10;0 &amp; 0 &amp; 0 &amp; \boldsymbol{q}_{n}^{\top}\boldsymbol{a}_{n} \\&#10;\end{bmatrix}" data-display="true"><code>R=\begin{bmatrix}&#10;\boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{1} &amp; \boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{2} &amp; \dots &amp; \boldsymbol{q}_{1}^{\top}\boldsymbol{a}_{n} \\&#10;0 &amp; \boldsymbol{q}_{2}^{\top}\boldsymbol{a}_{2} &amp; \dots &amp; \boldsymbol{q}_{2}^{\top}\boldsymbol{a}_{n} \\&#10;0 &amp; 0 &amp; \dots &amp; \dots \\&#10;0 &amp; 0 &amp; 0 &amp; \boldsymbol{q}_{n}^{\top}\boldsymbol{a}_{n} \\&#10;\end{bmatrix}</code></span>
使得 <span class="course-math" data-tex="A=QR" data-display="false"><code>A=QR</code></span>。也就是说，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列在 <span class="course-math" data-tex="\boldsymbol{q}_{1},\boldsymbol{q}_{2},\dots,\boldsymbol{q}_{i}" data-display="false"><code>\boldsymbol{q}_{1},\boldsymbol{q}_{2},\dots,\boldsymbol{q}_{i}</code></span> 做投影得到。也可以用 <span class="course-math" data-tex="R=Q^{\top}A" data-display="false"><code>R=Q^{\top}A</code></span> 来算。
这里 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个列线性无关的 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，<span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是列规范正交的 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是可逆的上三角矩阵。
（若 <span class="course-math" data-tex="m=n" data-display="false"><code>m=n</code></span>：任何可逆的矩阵可以分解成一个正交矩阵乘一个上三角矩阵。）

若 <span class="course-math" data-tex="A=QR" data-display="false"><code>A=QR</code></span>，则 <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 的最小平方解： <span class="course-math" data-tex="A^{\top}A=(QR)^{\top}(QR)=R^{\top}R" data-display="false"><code>A^{\top}A=(QR)^{\top}(QR)=R^{\top}R</code></span>，故方程 <span class="course-math" data-tex="A^{\top}A\hat{\boldsymbol{x}}=A^{\top}\boldsymbol{b}" data-display="false"><code>A^{\top}A\hat{\boldsymbol{x}}=A^{\top}\boldsymbol{b}</code></span> 化简为 <span class="course-math" data-tex="R^{\top}R\hat{\boldsymbol{x}}=R^{\top}Q^{\top}\boldsymbol{b}" data-display="false"><code>R^{\top}R\hat{\boldsymbol{x}}=R^{\top}Q^{\top}\boldsymbol{b}</code></span>，由于 <span class="course-math" data-tex="R^{\top}" data-display="false"><code>R^{\top}</code></span> 可逆，有：
<span class="course-math course-math-display" data-tex="R\hat{\boldsymbol{x}}=Q^{\top}\boldsymbol{b}" data-display="true"><code>R\hat{\boldsymbol{x}}=Q^{\top}\boldsymbol{b}</code></span> 这个方程比较好解，因为 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是上三角矩阵，只需回代即可。


## 内积
{: #section-6 }


定义抽象的向量空间中的内积 <span class="course-math" data-tex="\left\langle  \cdot, \cdot \right\rangle :V\times V\to \mathbb{R}" data-display="false"><code>\left\langle  \cdot, \cdot \right\rangle :V\times V\to \mathbb{R}</code></span>，要求满足：
- 对称性（Symmetric）：<span class="course-math" data-tex="\left\langle  \boldsymbol{v},\boldsymbol{w} \right\rangle  =\left\langle  \boldsymbol{w},\boldsymbol{v} \right\rangle" data-display="false"><code>\left\langle  \boldsymbol{v},\boldsymbol{w} \right\rangle  =\left\langle  \boldsymbol{w},\boldsymbol{v} \right\rangle</code></span>
- 双线性（Bilinear）：<span class="course-math" data-tex="\left\langle  c_{1}\boldsymbol{v}+c_{2}\boldsymbol{w},\boldsymbol{a} \right\rangle  = c_{1} \left\langle  \boldsymbol{v},\boldsymbol{a} \right\rangle  + c_{2}\left\langle  \boldsymbol{w},\boldsymbol{a} \right\rangle , \left\langle  \boldsymbol{a}, c_{1}\boldsymbol{v}+c_{2}\boldsymbol{w} \right\rangle  = c_{1}\left\langle  \boldsymbol{a},\boldsymbol{v} \right\rangle +c_{2}\left\langle  \boldsymbol{a},\boldsymbol{w} \right\rangle" data-display="false"><code>\left\langle  c_{1}\boldsymbol{v}+c_{2}\boldsymbol{w},\boldsymbol{a} \right\rangle  = c_{1} \left\langle  \boldsymbol{v},\boldsymbol{a} \right\rangle  + c_{2}\left\langle  \boldsymbol{w},\boldsymbol{a} \right\rangle , \left\langle  \boldsymbol{a}, c_{1}\boldsymbol{v}+c_{2}\boldsymbol{w} \right\rangle  = c_{1}\left\langle  \boldsymbol{a},\boldsymbol{v} \right\rangle +c_{2}\left\langle  \boldsymbol{a},\boldsymbol{w} \right\rangle</code></span>。
- 正定性（Positive-Definiteness）： <span class="course-math" data-tex="\left\langle  \boldsymbol{v},\boldsymbol{v} \right\rangle  \geq 0" data-display="false"><code>\left\langle  \boldsymbol{v},\boldsymbol{v} \right\rangle  \geq 0</code></span>, 且 <span class="course-math" data-tex="\boldsymbol{v}=\boldsymbol{0} \iff \left\langle  \boldsymbol{v},\boldsymbol{v} \right\rangle  = 0" data-display="false"><code>\boldsymbol{v}=\boldsymbol{0} \iff \left\langle  \boldsymbol{v},\boldsymbol{v} \right\rangle  = 0</code></span>


例如，对定义在 <span class="course-math" data-tex="[0,1]" data-display="false"><code>[0,1]</code></span> 上的 <span class="course-math" data-tex="f(t)" data-display="false"><code>f(t)</code></span>，要找其最佳拟合直线 <span class="course-math" data-tex="b=C+Dt" data-display="false"><code>b=C+Dt</code></span>，则需要让 <span class="course-math" data-tex="E^{2}=\int_{0}^1(f(t)-C-Dt)^{2}\,\mathrm{d}t" data-display="false"><code>E^{2}=\int_{0}^1(f(t)-C-Dt)^{2}\,\mathrm{d}t</code></span> 最小。
- 我们定义这里的内积为 <span class="course-math" data-tex="\left\langle  f,g \right\rangle  =\int_{0}^1f(t)g(t)\,\mathrm{d}t" data-display="false"><code>\left\langle  f,g \right\rangle  =\int_{0}^1f(t)g(t)\,\mathrm{d}t</code></span>。
- 让 <span class="course-math" data-tex="\boldsymbol{v}_{1}=f(t), \boldsymbol{v}_{2}=C\cdot 1+D \cdot t" data-display="false"><code>\boldsymbol{v}_{1}=f(t), \boldsymbol{v}_{2}=C\cdot 1+D \cdot t</code></span>，则要让 <span class="course-math" data-tex="\lVert \boldsymbol{v}_{1}-\boldsymbol{v}_{2} \rVert^{2}" data-display="false"><code>\lVert \boldsymbol{v}_{1}-\boldsymbol{v}_{2} \rVert^{2}</code></span> 最小。
- 这里 <span class="course-math" data-tex="\boldsymbol{v}_{2}" data-display="false"><code>\boldsymbol{v}_{2}</code></span> 在 <span class="course-math" data-tex="\{ 1,t \}" data-display="false"><code>\{ 1,t \}</code></span> 张成的平面内，故这个长度最小，需要 <span class="course-math" data-tex="\boldsymbol{v}_{2}" data-display="false"><code>\boldsymbol{v}_{2}</code></span> 为 <span class="course-math" data-tex="\boldsymbol{v}_{1}" data-display="false"><code>\boldsymbol{v}_{1}</code></span> 在这个平面上的投影。
- 用 Gram-Schmidt 正交化可以找到一组正交基 <span class="course-math" data-tex="\boldsymbol{a}_{1}=  1, \boldsymbol{a}_{2}=t-\frac{1}{2}" data-display="false"><code>\boldsymbol{a}_{1}=  1, \boldsymbol{a}_{2}=t-\frac{1}{2}</code></span> 。
- 于是这个投影就是  
<span class="course-math course-math-display" data-tex="\frac{\left\langle  \boldsymbol{a}_{1}, \boldsymbol{v}_1 \right\rangle  }{\left\langle  \boldsymbol{a}_{1}, \boldsymbol{a}_{1} \right\rangle  } \boldsymbol{a}_{1}+ \frac{\left\langle  \boldsymbol{a}_{2},\boldsymbol{v}_1 \right\rangle  }{\left\langle  \boldsymbol{a}_{2},\boldsymbol{a}_{2} \right\rangle  } \boldsymbol{a}_{2}" data-display="true"><code>\frac{\left\langle  \boldsymbol{a}_{1}, \boldsymbol{v}_1 \right\rangle  }{\left\langle  \boldsymbol{a}_{1}, \boldsymbol{a}_{1} \right\rangle  } \boldsymbol{a}_{1}+ \frac{\left\langle  \boldsymbol{a}_{2},\boldsymbol{v}_1 \right\rangle  }{\left\langle  \boldsymbol{a}_{2},\boldsymbol{a}_{2} \right\rangle  } \boldsymbol{a}_{2}</code></span>
- 这也就是要找的直线。
{% endraw %}
