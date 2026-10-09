---
title: "Vector Space - 向量空间"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-03-11T17:54:23+08:00"
updated_at: "2026-10-09T17:19:46+08:00"
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
- <span class="course-math" data-tex="\boldsymbol{x}+\boldsymbol{y}=\boldsymbol{y}+\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}+\boldsymbol{y}=\boldsymbol{y}+\boldsymbol{x}</code></span>。
- <span class="course-math" data-tex="(\boldsymbol{x}+\boldsymbol{y})+\boldsymbol{z}=\boldsymbol{x}+(\boldsymbol{y}+\boldsymbol{z})" data-display="false"><code>(\boldsymbol{x}+\boldsymbol{y})+\boldsymbol{z}=\boldsymbol{x}+(\boldsymbol{y}+\boldsymbol{z})</code></span>。
- 存在一个唯一的零向量 <span class="course-math" data-tex="\boldsymbol{0}" data-display="false"><code>\boldsymbol{0}</code></span> 使得 <span class="course-math" data-tex="\boldsymbol{x}+\boldsymbol{0}=\boldsymbol{0}+\boldsymbol{x}=\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}+\boldsymbol{0}=\boldsymbol{0}+\boldsymbol{x}=\boldsymbol{x}</code></span>。
- 对每个 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span>，存在一个唯一的 <span class="course-math" data-tex="-\boldsymbol{x}" data-display="false"><code>-\boldsymbol{x}</code></span> 使得 <span class="course-math" data-tex="\boldsymbol{x}+(-\boldsymbol{x})=(-\boldsymbol{x})+\boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>\boldsymbol{x}+(-\boldsymbol{x})=(-\boldsymbol{x})+\boldsymbol{x}=\boldsymbol{0}</code></span>
- <span class="course-math" data-tex="1\boldsymbol{x}=\boldsymbol{x}" data-display="false"><code>1\boldsymbol{x}=\boldsymbol{x}</code></span>
- <span class="course-math" data-tex="(c_{1}c_{2})\boldsymbol{x}=c_{1}(c_{2}\boldsymbol{x})" data-display="false"><code>(c_{1}c_{2})\boldsymbol{x}=c_{1}(c_{2}\boldsymbol{x})</code></span>
- <span class="course-math" data-tex="c(\boldsymbol{x}+\boldsymbol{y})=c\boldsymbol{x}+c\boldsymbol{y}" data-display="false"><code>c(\boldsymbol{x}+\boldsymbol{y})=c\boldsymbol{x}+c\boldsymbol{y}</code></span>
- <span class="course-math" data-tex="(c_{1}+c_{2})\boldsymbol{x}=c_{1}\boldsymbol{x}+c_{2}\boldsymbol{x}" data-display="false"><code>(c_{1}+c_{2})\boldsymbol{x}=c_{1}\boldsymbol{x}+c_{2}\boldsymbol{x}</code></span>
注意这里的向量可以不止是一列数字，也可以是矩阵，也可以是函数，只要能做线性组合就好。

定义 **向量空间（Vector Space）** <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 为一个向量的集合，其中定义了向量的加法运算与数乘运算，且这些运算满足以上 8 条性质。

对一个向量空间 <span class="course-math" data-tex="(V, +, \cdot)" data-display="false"><code>(V, +, \cdot)</code></span>，它具有以下性质：
- <span class="course-math" data-tex="0\cdot \boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>0\cdot \boldsymbol{x}=\boldsymbol{0}</code></span>
- <span class="course-math" data-tex="(-1)\cdot \boldsymbol{x}=-\boldsymbol{x}" data-display="false"><code>(-1)\cdot \boldsymbol{x}=-\boldsymbol{x}</code></span>
- 若 <span class="course-math" data-tex="\boldsymbol{x}+\boldsymbol{y}=\boldsymbol{x}+\boldsymbol{z}" data-display="false"><code>\boldsymbol{x}+\boldsymbol{y}=\boldsymbol{x}+\boldsymbol{z}</code></span>，则 <span class="course-math" data-tex="\boldsymbol{y}=\boldsymbol{z}" data-display="false"><code>\boldsymbol{y}=\boldsymbol{z}</code></span>
- <span class="course-math" data-tex="\beta \cdot \boldsymbol{0}=\boldsymbol{0}, \forall \beta \in \mathbb{R}" data-display="false"><code>\beta \cdot \boldsymbol{0}=\boldsymbol{0}, \forall \beta \in \mathbb{R}</code></span>
- <span class="course-math" data-tex="\alpha \cdot \boldsymbol{x}=\boldsymbol{0}\implies\alpha=0" data-display="false"><code>\alpha \cdot \boldsymbol{x}=\boldsymbol{0}\implies\alpha=0</code></span> 或 <span class="course-math" data-tex="\boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>\boldsymbol{x}=\boldsymbol{0}</code></span>

定义 **子空间（Subspace）** 为一个向量空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的非空子集 <span class="course-math" data-tex="W" data-display="false"><code>W</code></span>，且满足：
- 加法封闭性：若 <span class="course-math" data-tex="\boldsymbol{x},\boldsymbol{y}\in W" data-display="false"><code>\boldsymbol{x},\boldsymbol{y}\in W</code></span>，则 <span class="course-math" data-tex="\boldsymbol{x}+\boldsymbol{y}\in W" data-display="false"><code>\boldsymbol{x}+\boldsymbol{y}\in W</code></span>。
- 数乘封闭性：若 <span class="course-math" data-tex="\boldsymbol{x} \in W, c\in \mathbb{R}" data-display="false"><code>\boldsymbol{x} \in W, c\in \mathbb{R}</code></span>，则 <span class="course-math" data-tex="c \boldsymbol{x}\in W" data-display="false"><code>c \boldsymbol{x}\in W</code></span>
例如，对空间 <span class="course-math" data-tex="\mathbb{R}^{3}" data-display="false"><code>\mathbb{R}^{3}</code></span>，可能的子空间为零空间，通过原点的直线，通过原点的面，以及它本身。


### 四大基本空间
{: #section-1 }


对于一个 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，它的：

- **列空间（Column Space）：** 所有列向量的线性组合，记作 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span>，为一个 <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> 的子空间。
>  推论：<span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 是相容的当且仅当 <span class="course-math" data-tex="\boldsymbol{b}\in C(A)" data-display="false"><code>\boldsymbol{b}\in C(A)</code></span>；若 <span class="course-math" data-tex="A\in M_{n\times n}" data-display="false"><code>A\in M_{n\times n}</code></span> 非奇异，则 <span class="course-math" data-tex="C(A)=\mathbb{R}^n" data-display="false"><code>C(A)=\mathbb{R}^n</code></span>。
>  <span class="course-math" data-tex="\boldsymbol{b} \in C(A)\implies \exists \boldsymbol{c}\in \mathbb{R}^n,\text{s.t.} A\boldsymbol{c}=\boldsymbol{b}" data-display="false"><code>\boldsymbol{b} \in C(A)\implies \exists \boldsymbol{c}\in \mathbb{R}^n,\text{s.t.} A\boldsymbol{c}=\boldsymbol{b}</code></span>

- **零空间/核空间（Nullspace/Kernel）：** 所有使得 <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{0}</code></span> 的向量 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span>，记作 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span>，为一个 <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> 的子空间。
>  推论：若 <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 有特解 <span class="course-math" data-tex="\boldsymbol{x}_{0}" data-display="false"><code>\boldsymbol{x}_{0}</code></span>，则所有的解可以写成 <span class="course-math" data-tex="\boldsymbol{x}=\boldsymbol{x}_{0}+\boldsymbol{x}_{n}" data-display="false"><code>\boldsymbol{x}=\boldsymbol{x}_{0}+\boldsymbol{x}_{n}</code></span>，其中 <span class="course-math" data-tex="\boldsymbol{x}_{n} \in N(A)" data-display="false"><code>\boldsymbol{x}_{n} \in N(A)</code></span>。

- **行空间（Row Space）**：<span class="course-math" data-tex="C(A^{\top}) \subseteq \mathbb{R}^n" data-display="false"><code>C(A^{\top}) \subseteq \mathbb{R}^n</code></span>
- **左零空间（Left Nullspace）：** ****<span class="course-math" data-tex="N(A^{\top})\subseteq \mathbb{R}^m" data-display="false"><code>N(A^{\top})\subseteq \mathbb{R}^m</code></span>



### 向量张成的空间
{: #section-2 }


被向量 <span class="course-math" data-tex="\boldsymbol{w}_{1},\boldsymbol{w}_{2},\dots,\boldsymbol{w}_{l}" data-display="false"><code>\boldsymbol{w}_{1},\boldsymbol{w}_{2},\dots,\boldsymbol{w}_{l}</code></span> 张成的空间（Spanned by <span class="course-math" data-tex="\boldsymbol{w}_{1},\boldsymbol{w}_{2},\dots \boldsymbol{w}_{l}" data-display="false"><code>\boldsymbol{w}_{1},\boldsymbol{w}_{2},\dots \boldsymbol{w}_{l}</code></span>）为这些向量的所有线性组合构成的集合。

空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>  的基（Basis）：
- 一组线性无关的向量 <span class="course-math" data-tex="\boldsymbol{v}_{1},\boldsymbol{v}_{2},\dots,\boldsymbol{v}_{n}" data-display="false"><code>\boldsymbol{v}_{1},\boldsymbol{v}_{2},\dots,\boldsymbol{v}_{n}</code></span> 。
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 为这些向量张成的空间。
这里 <span class="course-math" data-tex="n=\dim V" data-display="false"><code>n=\dim V</code></span>。
记得验证空间非空。

定理：<span class="course-math" data-tex="\boldsymbol{v}_{1},\boldsymbol{v}_{2},\dots \boldsymbol{v}_{n}\in \mathbb{R}^n" data-display="false"><code>\boldsymbol{v}_{1},\boldsymbol{v}_{2},\dots \boldsymbol{v}_{n}\in \mathbb{R}^n</code></span> 是 <span class="course-math" data-tex="\mathbb{R}^{n}" data-display="false"><code>\mathbb{R}^{n}</code></span> 的一组基，当且仅当 <span class="course-math" data-tex="A=[\boldsymbol{v}_{1}\dots \boldsymbol{v}_{n}]" data-display="false"><code>A=[\boldsymbol{v}_{1}\dots \boldsymbol{v}_{n}]</code></span> 可逆。

对于多项式集 <span class="course-math" data-tex="\mathbb{R}[x]_{\leq n}=\{ a_{0}+a_{1}x+\dots+a_{n}x^{n} &#124; a_{0},a_{1},a_{2},\dots,a_{n}\in \mathbb{R}\}" data-display="false"><code>\mathbb{R}[x]_{\leq n}=\{ a_{0}+a_{1}x+\dots+a_{n}x^{n} &#124; a_{0},a_{1},a_{2},\dots,a_{n}\in \mathbb{R}\}</code></span>，一组基为 <span class="course-math" data-tex="1,x,x^{2},x^{3},\dots,x^{n}" data-display="false"><code>1,x,x^{2},x^{3},\dots,x^{n}</code></span>。

定理：若向量空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 存在两组基 <span class="course-math" data-tex="\boldsymbol{v}_{1},\boldsymbol{v}_{2},\dots,\boldsymbol{v}_{n}" data-display="false"><code>\boldsymbol{v}_{1},\boldsymbol{v}_{2},\dots,\boldsymbol{v}_{n}</code></span> 和 <span class="course-math" data-tex="\boldsymbol{w}_{1},\boldsymbol{w}_{2},\dots,\boldsymbol{w}_{m}" data-display="false"><code>\boldsymbol{w}_{1},\boldsymbol{w}_{2},\dots,\boldsymbol{w}_{m}</code></span>，则 <span class="course-math" data-tex="m=n" data-display="false"><code>m=n</code></span>。这里 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 定义为向量空间 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的维数（dimension）<span class="course-math" data-tex="\dim V" data-display="false"><code>\dim V</code></span>。


### 基本空间的基
{: #section-3 }


对于 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>：
**找 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的基：**
- 将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 化为阶梯型矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span>，则 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 的一组列线性无关等价于对应的 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列是线性无关的。
- <span class="course-math" data-tex="C(U)" data-display="false"><code>C(U)</code></span> 的一组基是其 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个包含主元的列（这与 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 不同，需要回去找 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列）。
- <span class="course-math" data-tex="\dim C(A)=r=\operatorname{rank}(A)" data-display="false"><code>\dim C(A)=r=\operatorname{rank}(A)</code></span>。
**找 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 的基：**
- 找 <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{0}</code></span> 的特解，也就是说化成行最简型 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 后得到 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个自由变量，将其中一个设为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，其他设为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 得到一个特解，总共得到 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解。这些特解就是基。
- <span class="course-math" data-tex="\dim N(A)=n-r" data-display="false"><code>\dim N(A)=n-r</code></span>，也称为零化度（Nullity）。

**秩-零化度定理：** <span class="course-math" data-tex="\operatorname{rank}(A)+\dim N(A)=n" data-display="false"><code>\operatorname{rank}(A)+\dim N(A)=n</code></span>。

**找 <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span> 的基：**
-  行变换不影响行空间，因此 <span class="course-math" data-tex="C(A^{\top})=C(U^{\top})" data-display="false"><code>C(A^{\top})=C(U^{\top})</code></span>。
-  <span class="course-math" data-tex="\dim C(A^{\top})=r=\operatorname{rank}(A^{\top})" data-display="false"><code>\dim C(A^{\top})=r=\operatorname{rank}(A^{\top})</code></span>。
**找 <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span> 的基：**
- 设 <span class="course-math" data-tex="A=LU" data-display="false"><code>A=LU</code></span>，则 <span class="course-math" data-tex="L^{-1}" data-display="false"><code>L^{-1}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行构成 <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span> 的基。
- <span class="course-math" data-tex="\dim N(A^{\top})=m-r" data-display="false"><code>\dim N(A^{\top})=m-r</code></span>。

从而我们可以发现，<span class="course-math" data-tex="C(A), N(A^{\top})\subseteq \mathbb{R}^m, C(A^{\top}), N(A)\subseteq \mathbb{R}^n" data-display="false"><code>C(A), N(A^{\top})\subseteq \mathbb{R}^m, C(A^{\top}), N(A)\subseteq \mathbb{R}^n</code></span> ，且有：
<span class="course-math course-math-display" data-tex="C(A) \perp N(A^{\top})" data-display="true"><code>C(A) \perp N(A^{\top})</code></span>
<span class="course-math course-math-display" data-tex="C(A^{\top}) \perp N(A)" data-display="true"><code>C(A^{\top}) \perp N(A)</code></span>

高斯-约旦消元法求解四大基本子空间：<span class="course-math" data-tex="\begin{bmatrix}A\mid I\end{bmatrix}\to \begin{bmatrix}R\mid E\end{bmatrix}" data-display="false"><code>\begin{bmatrix}A\mid I\end{bmatrix}\to \begin{bmatrix}R\mid E\end{bmatrix}</code></span>

|基本子空间|维数|提取方法|
|---|---|---|
|**行空间 <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span>**| <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |直接取 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个非零行向量|
|**列空间 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span>**| <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |找 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 中的主元列，取**原矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>** 中对应的列|
|**零空间 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span>**| <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> |利用 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 求解 <span class="course-math" data-tex="R\boldsymbol{x}=0" data-display="false"><code>R\boldsymbol{x}=0</code></span> 的基础解系|
|**左零空间 <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span>**| <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> |取 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 中对应 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 里全零行所在位置的那几行|
{% endraw %}
