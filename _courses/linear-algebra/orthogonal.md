---
title: "Orthogonal - 正交"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-04-03T14:42:42+08:00"
updated_at: "2026-05-15T14:37:00+08:00"
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

<span class="course-math" data-tex="x, y \in \mathbb{R}^{n}" data-display="false"><code>x, y \in \mathbb{R}^{n}</code></span> 正交（Orthogonal）定义为  <span class="course-math" data-tex="x^Ty=0" data-display="false"><code>x^Ty=0</code></span>。
<span class="course-math" data-tex="x\in \mathbb{R}^n" data-display="false"><code>x\in \mathbb{R}^n</code></span> 的长度（Length）定义为 <span class="course-math" data-tex="&#124;&#124;x&#124;&#124; = \sqrt{ x^Tx }" data-display="false"><code>&#124;&#124;x&#124;&#124; = \sqrt{ x^Tx }</code></span>。
<span class="course-math" data-tex="x,y\in \mathbb{R}^n" data-display="false"><code>x,y\in \mathbb{R}^n</code></span> 之间的角度定义为 <span class="course-math" data-tex="\cos\theta= \frac{x^Ty}{\lVert x \rVert\lVert y \rVert}" data-display="false"><code>\cos\theta= \frac{x^Ty}{\lVert x \rVert\lVert y \rVert}</code></span>。

**柯西-施瓦茨不等式（Cauchy-Schwarz）：** 对于任意两个内积空间中的向量 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span>，有：
<span class="course-math course-math-display" data-tex="&#124;x\cdot y&#124;^{2}\leq \lvert x \cdot x \rvert \lvert y\cdot y \rvert" data-display="true"><code>&#124;x\cdot y&#124;^{2}\leq \lvert x \cdot x \rvert \lvert y\cdot y \rvert</code></span>
这和角度的定义相统一，因为 <span class="course-math" data-tex="&#124;\cos\theta&#124;\leq 1" data-display="false"><code>&#124;\cos\theta&#124;\leq 1</code></span> 。

定理：若一组向量相互正交且它们不是零向量，则它们是线性无关的。
- 证明：对于方程 <span class="course-math" data-tex="c_{1}v_{1}+c_{2}v_{2}+\dots+c_{n}v_{n}=0" data-display="false"><code>c_{1}v_{1}+c_{2}v_{2}+\dots+c_{n}v_{n}=0</code></span>，将它点乘 <span class="course-math" data-tex="v_{1}" data-display="false"><code>v_{1}</code></span> 得 <span class="course-math" data-tex="v_{1}^T(c_{1}v_{1}+c_{2}v_{2}+\dots+c_{n}v_{n})=0" data-display="false"><code>v_{1}^T(c_{1}v_{1}+c_{2}v_{2}+\dots+c_{n}v_{n})=0</code></span>，也就是说 <span class="course-math" data-tex="v_{1}^Tc_{1}v_{1}=c_{1}\lVert v_{1} \rVert^{2}=0" data-display="false"><code>v_{1}^Tc_{1}v_{1}=c_{1}\lVert v_{1} \rVert^{2}=0</code></span>。由于 <span class="course-math" data-tex="\lVert v_{1} \rVert\neq 0" data-display="false"><code>\lVert v_{1} \rVert\neq 0</code></span>，那么 <span class="course-math" data-tex="c_{1}=0" data-display="false"><code>c_{1}=0</code></span>。类似的 <span class="course-math" data-tex="c_{i}" data-display="false"><code>c_{i}</code></span> 都为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。

两个子空间 <span class="course-math" data-tex="V,W" data-display="false"><code>V,W</code></span> 彼此正交定义为 <span class="course-math" data-tex="\forall v\in V, w\in W" data-display="false"><code>\forall v\in V, w\in W</code></span>，有 <span class="course-math" data-tex="v^Tw=0" data-display="false"><code>v^Tw=0</code></span>。记作 <span class="course-math" data-tex="V \perp W" data-display="false"><code>V \perp W</code></span>。

<span class="course-math" data-tex="C(A)\perp N(A^T)" data-display="false"><code>C(A)\perp N(A^T)</code></span>
- 证明：<span class="course-math" data-tex="b \in C(A) \implies \exists x,\text{s.t. }Ax=b" data-display="false"><code>b \in C(A) \implies \exists x,\text{s.t. }Ax=b</code></span>；<span class="course-math" data-tex="y\in N(A^T)\implies y^TA=0" data-display="false"><code>y\in N(A^T)\implies y^TA=0</code></span>。从而 <span class="course-math" data-tex="y^Tb=y^T(Ax)=(y^TA)x=0" data-display="false"><code>y^Tb=y^T(Ax)=(y^TA)x=0</code></span>。从而 <span class="course-math" data-tex="y^T\perp b" data-display="false"><code>y^T\perp b</code></span>。

<span class="course-math" data-tex="C(A^T)\perp N(A)" data-display="false"><code>C(A^T)\perp N(A)</code></span>
- 证明：<span class="course-math" data-tex="x\in N(A)\implies Ax=0\implies x^TA^T=0" data-display="false"><code>x\in N(A)\implies Ax=0\implies x^TA^T=0</code></span>，故 <span class="course-math" data-tex="x\perp A^T" data-display="false"><code>x\perp A^T</code></span>。

<span class="course-math" data-tex="V\subseteq \mathbb{R}^n" data-display="false"><code>V\subseteq \mathbb{R}^n</code></span> 的垂直补（Orthogonal Complement）定义为所有满足 <span class="course-math" data-tex="v\perp V" data-display="false"><code>v\perp V</code></span> 的向量 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 组成的集合，记作 <span class="course-math" data-tex="V^{\perp}" data-display="false"><code>V^{\perp}</code></span>。一个空间和其垂直补的维数之和为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>。

可以证明 <span class="course-math" data-tex="C(A)^{\perp}=N(A^T), C(A^{T})^{\perp}= N(A)" data-display="false"><code>C(A)^{\perp}=N(A^T), C(A^{T})^{\perp}= N(A)</code></span>。
- <span class="course-math" data-tex="Ax=b" data-display="false"><code>Ax=b</code></span> 相容的一个等价条件：<span class="course-math" data-tex="y^Tb=0 , \forall y\in N(A^{T})" data-display="false"><code>y^Tb=0 , \forall y\in N(A^{T})</code></span>。

<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 表示的线性变换把 <span class="course-math" data-tex="C(A^T)" data-display="false"><code>C(A^T)</code></span> 映射到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中，把 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 映射到 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。对于任何一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 维向量 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>，它可以写成 <span class="course-math" data-tex="x=x_{r}+x_{n}" data-display="false"><code>x=x_{r}+x_{n}</code></span>，而 <span class="course-math" data-tex="Ax=A(x_{r}+x_{n})=Ax_{r}" data-display="false"><code>Ax=A(x_{r}+x_{n})=Ax_{r}</code></span>。这里 <span class="course-math" data-tex="x_{r}" data-display="false"><code>x_{r}</code></span> 是行空间中的一个向量，而 <span class="course-math" data-tex="Ax_{r}" data-display="false"><code>Ax_{r}</code></span> 是列空间中的一个向量。所以从几何上看，它把自己的行空间映射到列空间。


## 投影与最小平方解
{: #section-1 }


<span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 在 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 上的投影（Projection）：<span class="course-math" data-tex="p= \lVert p \rVert \frac{a}{\lVert a \rVert}= \lVert b \rVert\cos\theta  \frac{a}{\lVert a \rVert}=\frac{a^Tb}{\lVert a \rVert^{2}}a" data-display="false"><code>p= \lVert p \rVert \frac{a}{\lVert a \rVert}= \lVert b \rVert\cos\theta  \frac{a}{\lVert a \rVert}=\frac{a^Tb}{\lVert a \rVert^{2}}a</code></span>。
投影的矩阵表示： <span class="course-math" data-tex="T:\mathbb{R}^n\to \mathbb{R}^n, b \mapsto \frac{a^Tb}{\lVert a \rVert^{2}}a" data-display="false"><code>T:\mathbb{R}^n\to \mathbb{R}^n, b \mapsto \frac{a^Tb}{\lVert a \rVert^{2}}a</code></span>。所以矩阵表示就是 <span class="course-math" data-tex="\frac{aa^T}{a^Ta}" data-display="false"><code>\frac{aa^T}{a^Ta}</code></span>。

应用：**最小平方解（Least Square Solutions）**，求平方和 <span class="course-math" data-tex="\sum_{i=1}^m(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}" data-display="false"><code>\sum_{i=1}^m(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}</code></span> 的最小值，其中 <span class="course-math" data-tex="a_{ij}, b_{i}" data-display="false"><code>a_{ij}, b_{i}</code></span> 为常数。
- 把问题转换为求 <span class="course-math" data-tex="\lVert Ax-b \rVert^{2}" data-display="false"><code>\lVert Ax-b \rVert^{2}</code></span> 的最小值。<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 将 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 映射到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中。在平面 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中的向量 <span class="course-math" data-tex="Ax" data-display="false"><code>Ax</code></span> 与任意向量 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 终点连线的长度最小，需要这个连线与 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 垂直，所以 <span class="course-math" data-tex="b-A\hat{x} \in C(A)^{\perp}=N(A^T)" data-display="false"><code>b-A\hat{x} \in C(A)^{\perp}=N(A^T)</code></span>。那么 <span class="course-math" data-tex="A^T(b-A\hat{x})=0" data-display="false"><code>A^T(b-A\hat{x})=0</code></span>。
- **只需解方程 <span class="course-math" data-tex="\mathbf{(A^T A)\hat{x}=A^T b}" data-display="false"><code>\mathbf{(A^T A)\hat{x}=A^T b}</code></span>。**
- 为什么这个方程组有解？从几何角度可以理解。
- 也可以通过证明 <span class="course-math" data-tex="\text{rank}(A^TA)=\text{rank}(\begin{bmatrix}A^TA &amp;A^Tb\end{bmatrix})" data-display="false"><code>\text{rank}(A^TA)=\text{rank}(\begin{bmatrix}A^TA &amp;A^Tb\end{bmatrix})</code></span>。
  - 显然 <span class="course-math" data-tex="\text{rank}(A^TA)\leq\text{rank}(\begin{bmatrix}A^TA &amp;A^Tb\end{bmatrix})" data-display="false"><code>\text{rank}(A^TA)\leq\text{rank}(\begin{bmatrix}A^TA &amp;A^Tb\end{bmatrix})</code></span>。
  - 另有 <span class="course-math" data-tex="\text{rank}(A^TA)=\text{rank}(A^T)\geq\text{rank}(A^T \begin{bmatrix}A &amp; b\end{bmatrix})=\text{rank}(\begin{bmatrix}A^TA &amp; A^Tb\end{bmatrix})" data-display="false"><code>\text{rank}(A^TA)=\text{rank}(A^T)\geq\text{rank}(A^T \begin{bmatrix}A &amp; b\end{bmatrix})=\text{rank}(\begin{bmatrix}A^TA &amp; A^Tb\end{bmatrix})</code></span>。
- 若 <span class="course-math" data-tex="A^T A" data-display="false"><code>A^T A</code></span> 可逆，则 <span class="course-math" data-tex="\hat{x}=(A^TA)^{-1}A^T b" data-display="false"><code>\hat{x}=(A^TA)^{-1}A^T b</code></span> 。也就是，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的最优左逆左乘 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span>。
- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆，则可以进一步得到 <span class="course-math" data-tex="\hat{x}=A^{-1}b" data-display="false"><code>\hat{x}=A^{-1}b</code></span>。

对于 <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span> 的情况就是用最小二乘法求线性回归直线。
- 设这个回归直线为  <span class="course-math" data-tex="b=C+Dt" data-display="false"><code>b=C+Dt</code></span>。则要使得残差平方和 <span class="course-math" data-tex="\sum_{i=1}^m(C+Dt_{i}-b_{i})^{2}" data-display="false"><code>\sum_{i=1}^m(C+Dt_{i}-b_{i})^{2}</code></span> 最小。
- 这里 <span class="course-math" data-tex="A=\begin{bmatrix}1 &amp; t_{1} \\ 1  &amp; t_{2} \\ \dots &amp; \dots \\ 1 &amp; t_{m}\end{bmatrix}" data-display="false"><code>A=\begin{bmatrix}1 &amp; t_{1} \\ 1  &amp; t_{2} \\ \dots &amp; \dots \\ 1 &amp; t_{m}\end{bmatrix}</code></span>，<span class="course-math" data-tex="b=\begin{bmatrix}b_{1} \\ b_{2} \\ \dots \\ b_{m}\end{bmatrix}" data-display="false"><code>b=\begin{bmatrix}b_{1} \\ b_{2} \\ \dots \\ b_{m}\end{bmatrix}</code></span>。
- 则只需解方程 <span class="course-math" data-tex="A^TA\begin{bmatrix}C \\ D\end{bmatrix}=A^T" data-display="false"><code>A^TA\begin{bmatrix}C \\ D\end{bmatrix}=A^T</code></span> 即可求出直线的系数。
- 为了方便计算，可以让 <span class="course-math" data-tex="b=C_{1}+D_{1}(t-\bar{t})" data-display="false"><code>b=C_{1}+D_{1}(t-\bar{t})</code></span>，这里原直线的参数 <span class="course-math" data-tex="C=C_{1}-D_{1}t, D=D_{1}" data-display="false"><code>C=C_{1}-D_{1}t, D=D_{1}</code></span>。那么 <span class="course-math" data-tex="A=\begin{bmatrix}1 &amp; t_{1}-\bar{t} \\ 1 &amp; t_{2}-\bar{t} \\ \dots &amp; \dots \\ 1 &amp; t_{n}-\bar{t}\end{bmatrix}" data-display="false"><code>A=\begin{bmatrix}1 &amp; t_{1}-\bar{t} \\ 1 &amp; t_{2}-\bar{t} \\ \dots &amp; \dots \\ 1 &amp; t_{n}-\bar{t}\end{bmatrix}</code></span>，则 <span class="course-math" data-tex="A=\begin{bmatrix}v_{1} &amp; v_{2}\end{bmatrix}" data-display="false"><code>A=\begin{bmatrix}v_{1} &amp; v_{2}\end{bmatrix}</code></span> 的两列是正交的。那么 <span class="course-math" data-tex="\hat{C}=\frac{v_{1}^Tb}{v_{1}^Tv_{1}},\hat{D}=\frac{v_{2}^Tb}{v_{2}^Tv_{2}}" data-display="false"><code>\hat{C}=\frac{v_{1}^Tb}{v_{1}^Tv_{1}},\hat{D}=\frac{v_{2}^Tb}{v_{2}^Tv_{2}}</code></span>。

考虑这个几何问题。
- 由于 <span class="course-math" data-tex="A\hat{x}" data-display="false"><code>A\hat{x}</code></span> 为 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 上使得其终点与 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 终点连线垂直于 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的向量，<span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 在 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 上的投影即为 <span class="course-math" data-tex="p=A\hat{x}=A(A^TA)^{-1}A^Tb" data-display="false"><code>p=A\hat{x}=A(A^TA)^{-1}A^Tb</code></span>。
- 那么投影到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的线性变换的矩阵表示为 <span class="course-math" data-tex="P=A(A^TA)^{-1} A^T" data-display="false"><code>P=A(A^TA)^{-1} A^T</code></span>。
- 这里 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 有些性质。比如 <span class="course-math" data-tex="P^{2}=P" data-display="false"><code>P^{2}=P</code></span>, <span class="course-math" data-tex="P^T=P" data-display="false"><code>P^T=P</code></span>。


**定义投影矩阵（Projection Matrix）**：满足 <span class="course-math" data-tex="P^{2}=P" data-display="false"><code>P^{2}=P</code></span> 且 <span class="course-math" data-tex="P^T=P" data-display="false"><code>P^T=P</code></span> 的矩阵。
- 任何投影矩阵都来自于投影到某个列空间 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的投影。
- 推论：容易验证 <span class="course-math" data-tex="Q=I-P" data-display="false"><code>Q=I-P</code></span> 也是投影矩阵。若 <span class="course-math" data-tex="P=A(A^TA)^{-1}A^T" data-display="false"><code>P=A(A^TA)^{-1}A^T</code></span>，则 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是投影到 <span class="course-math" data-tex="C(A)^{\perp}=N(A^T)" data-display="false"><code>C(A)^{\perp}=N(A^T)</code></span> 的投影矩阵。这是因为，<span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 可以正交分解为 <span class="course-math" data-tex="Px+(I-P)x" data-display="false"><code>Px+(I-P)x</code></span>。
- 例如要求投影到平面 <span class="course-math" data-tex="x+y+z=0" data-display="false"><code>x+y+z=0</code></span> 的投影矩阵，可以先求投影到其法向量 <span class="course-math" data-tex="n=\begin{bmatrix}1 \\ 1 \\ 1\end{bmatrix}" data-display="false"><code>n=\begin{bmatrix}1 \\ 1 \\ 1\end{bmatrix}</code></span> 上的投影矩阵 <span class="course-math" data-tex="\frac{nn^T}{n^Tn}" data-display="false"><code>\frac{nn^T}{n^Tn}</code></span>，再用恒等矩阵减去它。
- 求高维投影矩阵，不如去找它正交补的投影矩阵，再用恒等矩阵减去它就好了。


加权最小平方解（Weighted least-square solution）：求平方和 <span class="course-math" data-tex="\sum_{i=1}^mw_{i}^{2}(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}" data-display="false"><code>\sum_{i=1}^mw_{i}^{2}(a_{i1}x_{1}+a_{i2}x_{2}+\dots+a_{in}x_{n}-b_{i})^{2}</code></span> 的最小值，其中 <span class="course-math" data-tex="a_{ij}, b_{i}" data-display="false"><code>a_{ij}, b_{i}</code></span> 为常数。
- 只需要把 <span class="course-math" data-tex="w_{i}" data-display="false"><code>w_{i}</code></span> 放到平方里面去即可。
- 构造 <span class="course-math" data-tex="W=\begin{bmatrix}w_{1} &amp; \dots &amp; \dots &amp; \dots \\ \dots  &amp; w_{2} &amp; \dots &amp; \dots \\ \dots &amp; \dots &amp; \dots &amp; \dots \\ \dots &amp; \dots &amp; \dots &amp; w_{n} \end{bmatrix}" data-display="false"><code>W=\begin{bmatrix}w_{1} &amp; \dots &amp; \dots &amp; \dots \\ \dots  &amp; w_{2} &amp; \dots &amp; \dots \\ \dots &amp; \dots &amp; \dots &amp; \dots \\ \dots &amp; \dots &amp; \dots &amp; w_{n} \end{bmatrix}</code></span>，则转换为求 <span class="course-math" data-tex="\lVert WA\hat{x_{w}}-Wb \rVert^{2}" data-display="false"><code>\lVert WA\hat{x_{w}}-Wb \rVert^{2}</code></span> 的最小值。
- 也就是 <span class="course-math" data-tex="(WA)^T(WA)\hat{x_{w}}=(WA)^T(Wb" data-display="false"><code>(WA)^T(WA)\hat{x_{w}}=(WA)^T(Wb</code></span>。
- 也就是 <span class="course-math" data-tex="A^T(W^TW)A\hat{x_{w}}=A^T(W^TW)B" data-display="false"><code>A^T(W^TW)A\hat{x_{w}}=A^T(W^TW)B</code></span>。


## 规范正交基与正交矩阵
{: #section-2 }


规定 <span class="course-math" data-tex="q_{1},q_{2},\dots,q_{s}" data-display="false"><code>q_{1},q_{2},\dots,q_{s}</code></span> 为一组向量，且满足：
  <span class="course-math course-math-display" data-tex="q_{i}^Tq_{j}=\begin{cases}&#10;1 &amp; i=j \\&#10;0 &amp; i\neq j&#10;\end{cases}" data-display="true"><code>q_{i}^Tq_{j}=\begin{cases}&#10;1 &amp; i=j \\&#10;0 &amp; i\neq j&#10;\end{cases}</code></span>
则称它们是规范正交（Orthonormal）的。
若 <span class="course-math" data-tex="q_{1}, q_{2},\dots,q_{n}" data-display="false"><code>q_{1}, q_{2},\dots,q_{n}</code></span> 是空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组基且它们规范正交，则称它们为规范正交基（Orthonormal Basis）。

正交矩阵（Orthogonal Matrix）：一个有着规范正交的列的**方矩阵**
<span class="course-math course-math-display" data-tex="Q^TQ=I" data-display="true"><code>Q^TQ=I</code></span>
例如，旋转矩阵，排列矩阵以及反射矩阵都是正交矩阵。
正交矩阵代表的变换会保持长度不变：
<span class="course-math course-math-display" data-tex="\lVert Qx \rVert=\lVert x \rVert" data-display="true"><code>\lVert Qx \rVert=\lVert x \rVert</code></span>
这是因为，<span class="course-math" data-tex="(Qx)^T(Qx)=x^TQ^TQx=x^Tx" data-display="false"><code>(Qx)^T(Qx)=x^TQ^TQx=x^Tx</code></span>。
更一般地，它会保持内积不变/夹角不变：
<span class="course-math course-math-display" data-tex="(Qx)^T(Qy)=x^Ty" data-display="true"><code>(Qx)^T(Qy)=x^Ty</code></span>

正交基/正交矩阵的好处：
- 坐标非常容易求出来。
<span class="course-math course-math-display" data-tex="b=\sum x_{i}q_{i}" data-display="true"><code>b=\sum x_{i}q_{i}</code></span>
<span class="course-math course-math-display" data-tex="\implies q_{i}^Tb=q_{i}^Tq_{i}x_{i}" data-display="true"><code>\implies q_{i}^Tb=q_{i}^Tq_{i}x_{i}</code></span>
<span class="course-math course-math-display" data-tex="\implies x_{i}=q_{i}^Tb" data-display="true"><code>\implies x_{i}=q_{i}^Tb</code></span>
- 逆非常容易求出来。
<span class="course-math course-math-display" data-tex="Q=\begin{bmatrix}&#10;q_{1} &amp; q_{2} &amp; \dots &amp; q_{n}&#10;\end{bmatrix}" data-display="true"><code>Q=\begin{bmatrix}&#10;q_{1} &amp; q_{2} &amp; \dots &amp; q_{n}&#10;\end{bmatrix}</code></span>
<span class="course-math course-math-display" data-tex="\implies Q^{-1}=Q^T" data-display="true"><code>\implies Q^{-1}=Q^T</code></span>
<span class="course-math course-math-display" data-tex="Qx=b\implies x=Q^Tb=\begin{bmatrix}&#10;q_{1}^Tb \\&#10;\dots \\&#10;q_{n}^Tb&#10;\end{bmatrix}" data-display="true"><code>Qx=b\implies x=Q^Tb=\begin{bmatrix}&#10;q_{1}^Tb \\&#10;\dots \\&#10;q_{n}^Tb&#10;\end{bmatrix}</code></span>
- 任意向量分解到基上都相当于投影上去。
<span class="course-math course-math-display" data-tex="b=\sum (q_{i}^Tb)q_{i}" data-display="true"><code>b=\sum (q_{i}^Tb)q_{i}</code></span>
- 长度很好求。
<span class="course-math course-math-display" data-tex="\lVert b \rVert = \sqrt{ \sum (q_{i}b)^{2} }" data-display="true"><code>\lVert b \rVert = \sqrt{ \sum (q_{i}b)^{2} }</code></span>

- <span class="course-math" data-tex="Q^T" data-display="false"><code>Q^T</code></span> 也是一个正交矩阵，也就是说行也是正交的
<span class="course-math course-math-display" data-tex="(Q^T)^TQ^T=(QQ^T)^T=I" data-display="true"><code>(Q^T)^TQ^T=(QQ^T)^T=I</code></span>
- 【*注意这里的 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 代表不一定为方阵，但列正交的情况* 】若要求 <span class="course-math" data-tex="Qx=b" data-display="false"><code>Qx=b</code></span> 的最小平方解，则 <span class="course-math" data-tex="\hat{x}=(Q^TQ)Q^Tb=Q^Tb" data-display="false"><code>\hat{x}=(Q^TQ)Q^Tb=Q^Tb</code></span>，则投影 <span class="course-math" data-tex="p=Q\hat{x}=QQ^Tb=\sum (q_{i}^Tb)q_{i}" data-display="false"><code>p=Q\hat{x}=QQ^Tb=\sum (q_{i}^Tb)q_{i}</code></span>，也就是说，投影到 <span class="course-math" data-tex="C(Q)" data-display="false"><code>C(Q)</code></span> 相当于投影到 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 的列向量上再相加。
- 投影到 <span class="course-math" data-tex="C(Q)" data-display="false"><code>C(Q)</code></span> 上的投影矩阵为 <span class="course-math" data-tex="P=Q(Q^TQ)^{-1}Q^T=QQ^T" data-display="false"><code>P=Q(Q^TQ)^{-1}Q^T=QQ^T</code></span>。


## Householder 变换
{: #section-3 }


Householder 变换：将某个向量 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 关于某个 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 维超平面  <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>  做反射。假设平面的法向量为 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span>，则变换的矩阵表示为
<span class="course-math course-math-display" data-tex="H=I_{n}-2 \frac{vv^T}{v^Tv}" data-display="true"><code>H=I_{n}-2 \frac{vv^T}{v^Tv}</code></span>
这是因为，<span class="course-math" data-tex="H:\mathbb{R}^n \to \mathbb{R}^n, x=x_{\parallel}+x_{\perp}\mapsto x_{\parallel}-x_{\perp}" data-display="false"><code>H:\mathbb{R}^n \to \mathbb{R}^n, x=x_{\parallel}+x_{\perp}\mapsto x_{\parallel}-x_{\perp}</code></span>，又有 <span class="course-math" data-tex="P_{v}x=x_{\perp}" data-display="false"><code>P_{v}x=x_{\perp}</code></span>，则 <span class="course-math" data-tex="Hx=x_{\parallel}-x_{\perp}=x-2x_{\perp}=x-2P_{v}x" data-display="false"><code>Hx=x_{\parallel}-x_{\perp}=x-2x_{\perp}=x-2P_{v}x</code></span>，进而 <span class="course-math" data-tex="H=I-2P_{v}=I-2 \frac{vv^T}{v^Tv}" data-display="false"><code>H=I-2P_{v}=I-2 \frac{vv^T}{v^Tv}</code></span>。
- 对合性：<span class="course-math" data-tex="H^{2}=I" data-display="false"><code>H^{2}=I</code></span>
- 正交性：<span class="course-math" data-tex="H^TH=0" data-display="false"><code>H^TH=0</code></span>
- 对称性：<span class="course-math" data-tex="H=H^T" data-display="false"><code>H=H^T</code></span>
Householder 变换的意义在于，作为一个反射变换，它可以将向量的某些元素置零而保持长度不变。
- 例题：要找某个对称矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 使得 <span class="course-math" data-tex="A^{2}=I" data-display="false"><code>A^{2}=I</code></span> 且其第一列为某单位向量 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span>。
- 不妨令 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为一个 Householder 矩阵，由题意得 <span class="course-math" data-tex="Ae_{1}=u" data-display="false"><code>Ae_{1}=u</code></span>，也就是说 <span class="course-math" data-tex="e_{1}" data-display="false"><code>e_{1}</code></span> 与 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 关于 Householder 变换的超平面对称，那么可以取法向量 <span class="course-math" data-tex="v=e_{1}-u" data-display="false"><code>v=e_{1}-u</code></span>。从而得到矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>。 


## Gram-Schmidt 正交化
{: #section-4 }


若我们已经有了 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组基 <span class="course-math" data-tex="\{ a_{1},a_{2},\dots,a_{n} \}" data-display="false"><code>\{ a_{1},a_{2},\dots,a_{n} \}</code></span>，我们可以通过 Gram-Schmidt 正交化（Orthogonalization）求出 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组规范正交基 <span class="course-math" data-tex="q_{1},q_{2},\dots,q_{n}" data-display="false"><code>q_{1},q_{2},\dots,q_{n}</code></span>。
先把 <span class="course-math" data-tex="a_{1}" data-display="false"><code>a_{1}</code></span> 归一化：
  <span class="course-math course-math-display" data-tex="q_{1}=\frac{a_{1}}{\lVert a_{1} \rVert}" data-display="true"><code>q_{1}=\frac{a_{1}}{\lVert a_{1} \rVert}</code></span>
把 <span class="course-math" data-tex="a_{2}" data-display="false"><code>a_{2}</code></span> 去掉其投影到 <span class="course-math" data-tex="q_{1}" data-display="false"><code>q_{1}</code></span> 的部分，再归一化
<span class="course-math course-math-display" data-tex="q_{2}=\frac{a_{2}-(q_{1}^Ta_{2})a_{1}}{\lVert a_{2}-(q_{1}^Ta_{2}) a_{1}\rVert }" data-display="true"><code>q_{2}=\frac{a_{2}-(q_{1}^Ta_{2})a_{1}}{\lVert a_{2}-(q_{1}^Ta_{2}) a_{1}\rVert }</code></span>
循环往复，减去往前面所有（正交的）向量做的投影：
<span class="course-math course-math-display" data-tex="A_{j+1}=a_{j+1}-\sum_{i=1}^j (q_{i}^T a_{j+1})q_{i}" data-display="true"><code>A_{j+1}=a_{j+1}-\sum_{i=1}^j (q_{i}^T a_{j+1})q_{i}</code></span>
<span class="course-math course-math-display" data-tex="q_{j+1}= \frac{A_{j+1}}{\lVert A_{j+1} \rVert }" data-display="true"><code>q_{j+1}= \frac{A_{j+1}}{\lVert A_{j+1} \rVert }</code></span>
当然也可以到最后再做单位化，计算会简单一些。


### QR 分解
{: #section-5 }


<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}&#10;a_{1} &amp; a_{2} &amp; \dots &amp; a_{n}&#10;\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}&#10;a_{1} &amp; a_{2} &amp; \dots &amp; a_{n}&#10;\end{bmatrix}</code></span>
<span class="course-math course-math-display" data-tex="Q=\begin{bmatrix}&#10;q_{1} &amp; q_{2} &amp; \dots &amp; q_{n}&#10;\end{bmatrix}" data-display="true"><code>Q=\begin{bmatrix}&#10;q_{1} &amp; q_{2} &amp; \dots &amp; q_{n}&#10;\end{bmatrix}</code></span>
这里有：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;a_{1}&amp;=\lVert a_{1} \rVert q_{1}= q_{1}^Ta_{1}q_{1}\\&#10;a_{2}&amp;=(q_{1}^Ta_{2})q_{1}+(q_{2}^Ta_{2})q_{2} \\&#10;\dots \\&#10;a_{n}&amp;=\sum_{i=1}^n(q_{i}^Ta_{n})q_{i}&#10;\end{align}" data-display="true"><code>\begin{align}&#10;a_{1}&amp;=\lVert a_{1} \rVert q_{1}= q_{1}^Ta_{1}q_{1}\\&#10;a_{2}&amp;=(q_{1}^Ta_{2})q_{1}+(q_{2}^Ta_{2})q_{2} \\&#10;\dots \\&#10;a_{n}&amp;=\sum_{i=1}^n(q_{i}^Ta_{n})q_{i}&#10;\end{align}</code></span>
因此可以构造矩阵
<span class="course-math course-math-display" data-tex="R=\begin{bmatrix}&#10;q_{1}^Ta_{1} &amp; q_{1}^Ta_{2} &amp; \dots &amp; q_{1}^Ta_{n} \\&#10;0 &amp; q_{2}^Ta_{2} &amp; \dots &amp; q_{2}^Ta_{n} \\&#10;0 &amp; 0 &amp; \dots &amp; \dots \\&#10;0 &amp; 0 &amp; 0 &amp; q_{n}^Ta_{n} \\&#10;\end{bmatrix}" data-display="true"><code>R=\begin{bmatrix}&#10;q_{1}^Ta_{1} &amp; q_{1}^Ta_{2} &amp; \dots &amp; q_{1}^Ta_{n} \\&#10;0 &amp; q_{2}^Ta_{2} &amp; \dots &amp; q_{2}^Ta_{n} \\&#10;0 &amp; 0 &amp; \dots &amp; \dots \\&#10;0 &amp; 0 &amp; 0 &amp; q_{n}^Ta_{n} \\&#10;\end{bmatrix}</code></span>
使得 <span class="course-math" data-tex="A=QR" data-display="false"><code>A=QR</code></span>。也就是说，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列在 <span class="course-math" data-tex="q_{1},q_{2},\dots,q_{i}" data-display="false"><code>q_{1},q_{2},\dots,q_{i}</code></span> 做投影得到。也可以用 <span class="course-math" data-tex="R=Q^TA" data-display="false"><code>R=Q^TA</code></span> 来算。
这里 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个列线性无关的 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，<span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是列规范正交的 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是可逆的上三角矩阵。
（若 <span class="course-math" data-tex="m=n" data-display="false"><code>m=n</code></span>：任何可逆的矩阵可以分解成一个正交矩阵乘一个上三角矩阵。）

若 <span class="course-math" data-tex="A=QR" data-display="false"><code>A=QR</code></span>，则 <span class="course-math" data-tex="Ax=b" data-display="false"><code>Ax=b</code></span> 的最小平方解： <span class="course-math" data-tex="A^TA=(QR)^T(QR)=R^TR" data-display="false"><code>A^TA=(QR)^T(QR)=R^TR</code></span>，故方程 <span class="course-math" data-tex="A^TA\hat{x}=A^Tb" data-display="false"><code>A^TA\hat{x}=A^Tb</code></span> 化简为 <span class="course-math" data-tex="R^TR\hat{x}=R^TQ^Tb" data-display="false"><code>R^TR\hat{x}=R^TQ^Tb</code></span>，由于 <span class="course-math" data-tex="R^T" data-display="false"><code>R^T</code></span> 可逆，有：
<span class="course-math course-math-display" data-tex="R\hat{x}=Q^Tb" data-display="true"><code>R\hat{x}=Q^Tb</code></span> 这个方程比较好解，因为 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是上三角矩阵，只需回代即可。


## 内积
{: #section-6 }


定义抽象的向量空间中的内积 <span class="course-math" data-tex="\left&lt; \cdot, \cdot \right&gt;:V\times V\to \mathbb{R}" data-display="false"><code>\left&lt; \cdot, \cdot \right&gt;:V\times V\to \mathbb{R}</code></span>，要求满足：
- 对称性（Symmetric）：<span class="course-math" data-tex="\left&lt; v,w \right&gt; =\left&lt; w,v \right&gt;" data-display="false"><code>\left&lt; v,w \right&gt; =\left&lt; w,v \right&gt;</code></span> 
- 双线性（Bilinear）：<span class="course-math" data-tex="\left&lt; c_{1}v+c_{2}w,a \right&gt; = c_{1} \left&lt; v,a \right&gt; + c_{2}\left&lt; w,a \right&gt;, \left&lt; a, c_{1}v+c_{2}w \right&gt; = c_{1}\left&lt; a,v \right&gt;+c_{2}\left&lt; a,w \right&gt;" data-display="false"><code>\left&lt; c_{1}v+c_{2}w,a \right&gt; = c_{1} \left&lt; v,a \right&gt; + c_{2}\left&lt; w,a \right&gt;, \left&lt; a, c_{1}v+c_{2}w \right&gt; = c_{1}\left&lt; a,v \right&gt;+c_{2}\left&lt; a,w \right&gt;</code></span>。
- 正定性（Positive-Definiteness）： <span class="course-math" data-tex="\left&lt; v,v \right&gt; \geq 0" data-display="false"><code>\left&lt; v,v \right&gt; \geq 0</code></span>, 且 <span class="course-math" data-tex="v=\vec{0} \iff \left&lt; v,v \right&gt; = 0" data-display="false"><code>v=\vec{0} \iff \left&lt; v,v \right&gt; = 0</code></span>


例如，对定义在 <span class="course-math" data-tex="[0,1]" data-display="false"><code>[0,1]</code></span> 上的 <span class="course-math" data-tex="f(t)" data-display="false"><code>f(t)</code></span>，要找其最佳拟合直线 <span class="course-math" data-tex="b=C+Dt" data-display="false"><code>b=C+Dt</code></span>，则需要让 <span class="course-math" data-tex="E^{2}=\int_{0}^1(f(t)-C-Dt)^{2}dt" data-display="false"><code>E^{2}=\int_{0}^1(f(t)-C-Dt)^{2}dt</code></span> 最小。
- 我们定义这里的内积为 <span class="course-math" data-tex="\left&lt; f,g \right&gt; =\int_{0}^1f(t)g(t)dt" data-display="false"><code>\left&lt; f,g \right&gt; =\int_{0}^1f(t)g(t)dt</code></span>。
- 让 <span class="course-math" data-tex="v_{1}=f(t), v_{2}=C\cdot 1+D \cdot t" data-display="false"><code>v_{1}=f(t), v_{2}=C\cdot 1+D \cdot t</code></span>，则要让 <span class="course-math" data-tex="\lVert v_{1}-v_{2} \rVert^{2}" data-display="false"><code>\lVert v_{1}-v_{2} \rVert^{2}</code></span> 最小。
- 这里 <span class="course-math" data-tex="v_{2}" data-display="false"><code>v_{2}</code></span> 在 <span class="course-math" data-tex="\{ 1,t \}" data-display="false"><code>\{ 1,t \}</code></span> 张成的平面内，故这个长度最小，需要 <span class="course-math" data-tex="v_{2}" data-display="false"><code>v_{2}</code></span> 为 <span class="course-math" data-tex="v_{1}" data-display="false"><code>v_{1}</code></span> 在这个平面上的投影。
- 用 Gram-Schmidt 正交化可以找到一组正交基 <span class="course-math" data-tex="a_{1}=  1, a_{2}=t-\frac{1}{2}" data-display="false"><code>a_{1}=  1, a_{2}=t-\frac{1}{2}</code></span> 。
- 于是这个投影就是  
<span class="course-math course-math-display" data-tex="\frac{\left&lt; a_{1}, v \right&gt; }{\left&lt; a_{1}, a_{1} \right&gt; } a_{1}+ \frac{\left&lt; a_{2},v \right&gt; }{\left&lt; a_{2},a_{2} \right&gt; } a_{2}" data-display="true"><code>\frac{\left&lt; a_{1}, v \right&gt; }{\left&lt; a_{1}, a_{1} \right&gt; } a_{1}+ \frac{\left&lt; a_{2},v \right&gt; }{\left&lt; a_{2},a_{2} \right&gt; } a_{2}</code></span>
- 这也就是要找的直线。
{% endraw %}
