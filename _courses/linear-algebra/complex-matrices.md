---
title: "Complex Matrices - 复矩阵"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-05-15T17:06:00+08:00"
updated_at: "2026-10-09T16:58:39+08:00"
reference: false
order: 8
layout: "course"
permalink: "/courses/linear-algebra/complex-matrices/"
course_page: true
doc_type: "note"
description: "线性代数 · Complex Matrices - 复矩阵"
excerpt: "线性代数 · Complex Matrices - 复矩阵"
---

{% raw %}

### 复矩阵
{: #section-1 }


复向量空间 （Complex Vector Space） <span class="course-math" data-tex="\mathbb{C}^n" data-display="false"><code>\mathbb{C}^n</code></span>：
<span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;x_{1} \\&#10;\vdots \\&#10;x_{n}&#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;x_{1} \\&#10;\vdots \\&#10;x_{n}&#10;\end{bmatrix}</code></span>
其中 <span class="course-math" data-tex="x_{i}\in \mathbb{C}" data-display="false"><code>x_{i}\in \mathbb{C}</code></span>，也就是说，<span class="course-math" data-tex="x_{i}=a_{i}+i b_{i}" data-display="false"><code>x_{i}=a_{i}+i b_{i}</code></span>。
空间中定义的加法和数乘（这里的数是复数）都是平凡的。
定义共轭：
<span class="course-math course-math-display" data-tex="\bar{\mathbf{x}}=\begin{bmatrix}&#10;\overline{x_{1}} \\&#10;\vdots \\&#10;\overline{x_{n}}&#10;\end{bmatrix}" data-display="true"><code>\bar{\mathbf{x}}=\begin{bmatrix}&#10;\overline{x_{1}} \\&#10;\vdots \\&#10;\overline{x_{n}}&#10;\end{bmatrix}</code></span>
定义内积（inner product）：
<span class="course-math course-math-display" data-tex="\left\langle  \mathbf{x},\mathbf{y} \right\rangle  :=\overline{\mathbf{x}}^{\top}\mathbf{y}= \overline{x_{1}}y_{1}+\overline{x_{2}}y_{2}+\dots+\overline{x_{n}}y_{n}\in \mathbb{C}" data-display="true"><code>\left\langle  \mathbf{x},\mathbf{y} \right\rangle  :=\overline{\mathbf{x}}^{\top}\mathbf{y}= \overline{x_{1}}y_{1}+\overline{x_{2}}y_{2}+\dots+\overline{x_{n}}y_{n}\in \mathbb{C}</code></span>
定义正交：
<span class="course-math course-math-display" data-tex="\mathbf{x}\perp \mathbf{y}\iff \left\langle  \mathbf{x},\mathbf{y} \right\rangle  =0" data-display="true"><code>\mathbf{x}\perp \mathbf{y}\iff \left\langle  \mathbf{x},\mathbf{y} \right\rangle  =0</code></span>
定义长度（Length）：
<span class="course-math course-math-display" data-tex="\lVert \mathbf{x} \rVert ^{2}=\overline{\mathbf{x}}^{\top}\mathbf{x}=\overline{x_{1}}x_{1}+\overline{x_{2}}x_{2}+\dots+\overline{x_{n}}x_{n}" data-display="true"><code>\lVert \mathbf{x} \rVert ^{2}=\overline{\mathbf{x}}^{\top}\mathbf{x}=\overline{x_{1}}x_{1}+\overline{x_{2}}x_{2}+\dots+\overline{x_{n}}x_{n}</code></span>
复矩阵（Complex Matrices）:
<span class="course-math course-math-display" data-tex="\mathbf{A}=(a_{ij})_{m\times n}, a_{ij}\in \mathbb{C}" data-display="true"><code>\mathbf{A}=(a_{ij})_{m\times n}, a_{ij}\in \mathbb{C}</code></span>
共轭：
<span class="course-math course-math-display" data-tex="\bar{\mathbf{A}}=(\overline{a_{ij}})_{m\times n}" data-display="true"><code>\bar{\mathbf{A}}=(\overline{a_{ij}})_{m\times n}</code></span>
<span class="course-math course-math-display" data-tex="\overline{\mathbf{A}\mathbf{B}}=\overline{\mathbf{A}}\,\,\overline{\mathbf{B}}" data-display="true"><code>\overline{\mathbf{A}\mathbf{B}}=\overline{\mathbf{A}}\,\,\overline{\mathbf{B}}</code></span>
<span class="course-math course-math-display" data-tex="\overline{\lambda \mathbf{A}}=\overline{\lambda}\,\,\overline{\mathbf{A}}" data-display="true"><code>\overline{\lambda \mathbf{A}}=\overline{\lambda}\,\,\overline{\mathbf{A}}</code></span>
共轭转置（Conjugate Transpose）：
<span class="course-math course-math-display" data-tex="\mathbf{A}^{\mathrm{H}}:=\overline{\mathbf{A}}^{\top}=\overline{\mathbf{A}^{\top}}" data-display="true"><code>\mathbf{A}^{\mathrm{H}}:=\overline{\mathbf{A}}^{\top}=\overline{\mathbf{A}^{\top}}</code></span>
这里有
<span class="course-math course-math-display" data-tex="(\mathbf{A}\mathbf{B})^{\mathrm{H}}=\mathbf{B}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}" data-display="true"><code>(\mathbf{A}\mathbf{B})^{\mathrm{H}}=\mathbf{B}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}</code></span>
用定义容易证明。


#### 埃尔米特矩阵（Hermitian Matrices）
{: #section-2 }


满足 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}=\mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}=\mathbf{A}</code></span> 的矩阵。
- 埃尔米特矩阵是方阵。
- 对角元为实数。（共轭等于本身）
- 若这里 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 是实矩阵，则 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}=\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}=\mathbf{A}^{\top}</code></span>，所以它为一个对称矩阵。


**定理：埃尔米特矩阵的特征值是实数。**
  - 引理：<span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}</code></span> 是实数。这是因为，<span class="course-math" data-tex="(\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x})^{\mathrm{H}}=\mathbf{x}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}(\mathbf{x}^{\mathrm{H}})^{\mathrm{H}}=\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}" data-display="false"><code>(\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x})^{\mathrm{H}}=\mathbf{x}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}(\mathbf{x}^{\mathrm{H}})^{\mathrm{H}}=\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}</code></span>。
  - 假设 <span class="course-math" data-tex="\lambda\in \mathbb{C}" data-display="false"><code>\lambda\in \mathbb{C}</code></span> 是一个 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的特征值，对应非零的特征向量 <span class="course-math" data-tex="\mathbf{x}\in \mathbb{C}^n" data-display="false"><code>\mathbf{x}\in \mathbb{C}^n</code></span>。
  - 那么 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\lambda \mathbf{x}" data-display="false"><code>\mathbf{A}\mathbf{x}=\lambda \mathbf{x}</code></span>，因此 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}=\mathbf{x}^{\mathrm{H}}\lambda \mathbf{x}=\lambda \lVert \mathbf{x} \rVert^{2}" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}=\mathbf{x}^{\mathrm{H}}\lambda \mathbf{x}=\lambda \lVert \mathbf{x} \rVert^{2}</code></span> 是一个实数，而 <span class="course-math" data-tex="\lVert \mathbf{x} \rVert^{2}" data-display="false"><code>\lVert \mathbf{x} \rVert^{2}</code></span> 也是一个实数。
  - 那么 <span class="course-math" data-tex="\lambda= \frac{\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}}{\mathbf{x}^{\mathrm{H}}\mathbf{x}}" data-display="false"><code>\lambda= \frac{\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{x}}{\mathbf{x}^{\mathrm{H}}\mathbf{x}}</code></span> 是一个实数。

**定理：若 <span class="course-math" data-tex="\mathbf{x},\mathbf{y}" data-display="false"><code>\mathbf{x},\mathbf{y}</code></span> 是埃尔米特矩阵的两特征向量，对应不同的特征值 <span class="course-math" data-tex="\lambda,\mu" data-display="false"><code>\lambda,\mu</code></span>，则 <span class="course-math" data-tex="\mathbf{x}\perp \mathbf{y}" data-display="false"><code>\mathbf{x}\perp \mathbf{y}</code></span>。**
  - 证明：<span class="course-math" data-tex="(\mathbf{A}\mathbf{x})^{\mathrm{H}} \mathbf{y}" data-display="false"><code>(\mathbf{A}\mathbf{x})^{\mathrm{H}} \mathbf{y}</code></span>  既等于 <span class="course-math" data-tex="(\lambda \mathbf{x})^{\mathrm{H}}\mathbf{y}=\lambda (\mathbf{x}^{\mathrm{H}}\mathbf{y})" data-display="false"><code>(\lambda \mathbf{x})^{\mathrm{H}}\mathbf{y}=\lambda (\mathbf{x}^{\mathrm{H}}\mathbf{y})</code></span>，又等于 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{y}=\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{y}=\mathbf{x}^{\mathrm{H}}\mu \mathbf{y}=\mu(\mathbf{x}^{\mathrm{H}}\mathbf{y})" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{y}=\mathbf{x}^{\mathrm{H}}\mathbf{A}\mathbf{y}=\mathbf{x}^{\mathrm{H}}\mu \mathbf{y}=\mu(\mathbf{x}^{\mathrm{H}}\mathbf{y})</code></span>。由于 <span class="course-math" data-tex="\lambda\neq \mu" data-display="false"><code>\lambda\neq \mu</code></span>，必然有 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{y}=0" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{y}=0</code></span>。

**定理：实对称矩阵可以被对角化分解为 <span class="course-math" data-tex="\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}" data-display="false"><code>\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}</code></span> 的形式，其中 <span class="course-math" data-tex="\mathbf{Q}" data-display="false"><code>\mathbf{Q}</code></span> 是一个正交矩阵（列为特征向量），<span class="course-math" data-tex="\boldsymbol{\Lambda}" data-display="false"><code>\boldsymbol{\Lambda}</code></span> 是一个对角矩阵。**
- 实对称矩阵是埃尔米特矩阵，因此若特征值两两不同，可得特征向量两两垂直。再标准化一下就得到 <span class="course-math" data-tex="\mathbf{S}=\mathbf{Q}" data-display="false"><code>\mathbf{S}=\mathbf{Q}</code></span>，由于 <span class="course-math" data-tex="\mathbf{Q}^{\top}\mathbf{Q}=\mathbf{I}" data-display="false"><code>\mathbf{Q}^{\top}\mathbf{Q}=\mathbf{I}</code></span>，就得到上面的形式。
**进一步的，实对称矩阵可以写成一维投影矩阵（投影到每个特征向量上）的线性组合。**
-
<span class="course-math course-math-display" data-tex="\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}=\begin{bmatrix}&#10;\mathbf{x}_{1} &amp; \dots &amp; \mathbf{x}_{n}&#10;\end{bmatrix} \begin{bmatrix}&#10;\lambda_{1} \\&#10; &amp; \ddots \\&#10; &amp;  &amp; \lambda_{n}&#10;\end{bmatrix}\begin{bmatrix}&#10;\mathbf{x}_{1}^{\top} \\&#10;\vdots\\&#10;\mathbf{x}_{n}^{\top}&#10;&#10;\end{bmatrix}&#10;=\sum\lambda_{i}\mathbf{x}_{i}\mathbf{x}_{i}^{\top}" data-display="true"><code>\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}=\begin{bmatrix}&#10;\mathbf{x}_{1} &amp; \dots &amp; \mathbf{x}_{n}&#10;\end{bmatrix} \begin{bmatrix}&#10;\lambda_{1} \\&#10; &amp; \ddots \\&#10; &amp;  &amp; \lambda_{n}&#10;\end{bmatrix}\begin{bmatrix}&#10;\mathbf{x}_{1}^{\top} \\&#10;\vdots\\&#10;\mathbf{x}_{n}^{\top}&#10;&#10;\end{bmatrix}&#10;=\sum\lambda_{i}\mathbf{x}_{i}\mathbf{x}_{i}^{\top}</code></span>
**推广：埃尔米特矩阵可以被对角化分解为**
<span class="course-math course-math-display" data-tex="\mathbf{A}=\mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}" data-display="true"><code>\mathbf{A}=\mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}</code></span>
其中 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 是酉矩阵，满足 <span class="course-math" data-tex="\mathbf{U}^{\mathrm{H}}\mathbf{U}=\mathbf{I}" data-display="false"><code>\mathbf{U}^{\mathrm{H}}\mathbf{U}=\mathbf{I}</code></span>。


#### 酉矩阵 （Unitary Matrix）
{: #section-3 }


 有着规范正交的列的 <span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 的复矩阵。
<span class="course-math course-math-display" data-tex="\mathbf{U}^{\mathrm{H}}\mathbf{U}=\mathbf{I}" data-display="true"><code>\mathbf{U}^{\mathrm{H}}\mathbf{U}=\mathbf{I}</code></span>

**定理：<span class="course-math" data-tex="(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{y})=\mathbf{x}^{\mathrm{H}}\mathbf{y}" data-display="false"><code>(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{y})=\mathbf{x}^{\mathrm{H}}\mathbf{y}</code></span>（保内积）。**

**定理：每个 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 的特征值都有 <span class="course-math" data-tex="\lvert \lambda\rvert =1" data-display="false"><code>\lvert \lambda\rvert =1</code></span>。**
- <span class="course-math" data-tex="(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{x})=\mathbf{x}^{\mathrm{H}}\mathbf{x}=(\bar\lambda \mathbf{x}^{\mathrm{H}})(\lambda \mathbf{x})=\lvert \lambda\rvert ^{2}\mathbf{x}^{\mathrm{H}}\mathbf{x}\implies \lvert \lambda \rvert=1" data-display="false"><code>(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{x})=\mathbf{x}^{\mathrm{H}}\mathbf{x}=(\bar\lambda \mathbf{x}^{\mathrm{H}})(\lambda \mathbf{x})=\lvert \lambda\rvert ^{2}\mathbf{x}^{\mathrm{H}}\mathbf{x}\implies \lvert \lambda \rvert=1</code></span>
例如：
<span class="course-math course-math-display" data-tex="\mathbf{U}=\begin{bmatrix}&#10;\cos\theta &amp; -\sin\theta \\&#10;\sin\theta &amp; \cos\theta&#10;\end{bmatrix}" data-display="true"><code>\mathbf{U}=\begin{bmatrix}&#10;\cos\theta &amp; -\sin\theta \\&#10;\sin\theta &amp; \cos\theta&#10;\end{bmatrix}</code></span>
则
<span class="course-math course-math-display" data-tex="\det(\mathbf{U}-\lambda \mathbf{I}) =\lambda^{2}-2\cos\theta\lambda+1" data-display="true"><code>\det(\mathbf{U}-\lambda \mathbf{I}) =\lambda^{2}-2\cos\theta\lambda+1</code></span>
<span class="course-math course-math-display" data-tex="\implies\lambda=\cos\theta\pm i\sin\theta=e^{\pm i\theta}\implies \lvert \lambda \rvert =1" data-display="true"><code>\implies\lambda=\cos\theta\pm i\sin\theta=e^{\pm i\theta}\implies \lvert \lambda \rvert =1</code></span>
**定理：若 <span class="course-math" data-tex="\mathbf{x},\mathbf{y}" data-display="false"><code>\mathbf{x},\mathbf{y}</code></span> 是酉矩阵的两特征向量，对应不同的特征值 <span class="course-math" data-tex="\lambda,\mu" data-display="false"><code>\lambda,\mu</code></span>，则 <span class="course-math" data-tex="\mathbf{x}\perp \mathbf{y}" data-display="false"><code>\mathbf{x}\perp \mathbf{y}</code></span>。**
- <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{y}=(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{y})=(\lambda \mathbf{x})^{\mathrm{H}}(\mu \mathbf{y})=\mu\bar{\lambda}(\mathbf{x}^{\mathrm{H}}\mathbf{y})" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{y}=(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{y})=(\lambda \mathbf{x})^{\mathrm{H}}(\mu \mathbf{y})=\mu\bar{\lambda}(\mathbf{x}^{\mathrm{H}}\mathbf{y})</code></span>。
- 这里 <span class="course-math" data-tex="\mu\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+\lambda\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+1\neq 1" data-display="false"><code>\mu\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+\lambda\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+1\neq 1</code></span>。
- 所以 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{y}=0" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{y}=0</code></span>。


#### 斜埃尔米特矩阵（Skew-Hermitian Matrices）
{: #section-4 }


<span class="course-math course-math-display" data-tex="\mathbf{K}^{\mathrm{H}}=-\mathbf{K}" data-display="true"><code>\mathbf{K}^{\mathrm{H}}=-\mathbf{K}</code></span>
对角元素满足 <span class="course-math" data-tex="a-bi=-(a+bi)\implies a=0" data-display="false"><code>a-bi=-(a+bi)\implies a=0</code></span>，所以为纯虚数。
若 <span class="course-math" data-tex="\mathbf{K}" data-display="false"><code>\mathbf{K}</code></span> 是实矩阵，则称 <span class="course-math" data-tex="\mathbf{K}" data-display="false"><code>\mathbf{K}</code></span> 是斜对称/反对称（Skew-Symmetric）的（<span class="course-math" data-tex="\mathbf{K}^{\top}=-\mathbf{K}" data-display="false"><code>\mathbf{K}^{\top}=-\mathbf{K}</code></span>），对角元为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。
**若 <span class="course-math" data-tex="\mathbf{K}" data-display="false"><code>\mathbf{K}</code></span> 为 skew-Hermitian 矩阵，则 <span class="course-math" data-tex="i\mathbf{K}" data-display="false"><code>i\mathbf{K}</code></span> 为 Hermitian 矩阵。**
- <span class="course-math" data-tex="\mathbf{K}^{\mathrm{H}}=-\mathbf{K}\implies(i\mathbf{K})^{\mathrm{H}}=\bar i \mathbf{K}^{\mathrm{H}}=-i(-\mathbf{K})=i\mathbf{K}" data-display="false"><code>\mathbf{K}^{\mathrm{H}}=-\mathbf{K}\implies(i\mathbf{K})^{\mathrm{H}}=\bar i \mathbf{K}^{\mathrm{H}}=-i(-\mathbf{K})=i\mathbf{K}</code></span>。

**skew-Hermitian 矩阵的特征值为纯虚数。**
- <span class="course-math" data-tex="i\mathbf{K}" data-display="false"><code>i\mathbf{K}</code></span> 是 Hermitian 矩阵。因此，<span class="course-math" data-tex="(i\mathbf{K})\mathbf{x}=\lambda \mathbf{x},\lambda\in \mathbb{R}" data-display="false"><code>(i\mathbf{K})\mathbf{x}=\lambda \mathbf{x},\lambda\in \mathbb{R}</code></span>。
- 因此 <span class="course-math" data-tex="\mathbf{K}\mathbf{x}=\frac{\lambda}{i}\mathbf{x}=-\lambda i\mathbf{x}" data-display="false"><code>\mathbf{K}\mathbf{x}=\frac{\lambda}{i}\mathbf{x}=-\lambda i\mathbf{x}</code></span>.

**定理：若 <span class="course-math" data-tex="\mathbf{x},\mathbf{y}" data-display="false"><code>\mathbf{x},\mathbf{y}</code></span> 是斜埃尔米特矩阵的两特征向量，对应不同的特征值 <span class="course-math" data-tex="\lambda,\mu" data-display="false"><code>\lambda,\mu</code></span>，则 <span class="course-math" data-tex="\mathbf{x}\perp \mathbf{y}" data-display="false"><code>\mathbf{x}\perp \mathbf{y}</code></span>。**


#### 总结
{: #section-5 }



| Real                                | Cpx                                                |
| ----------------------------------- | -------------------------------------------------- |
| <span class="course-math" data-tex="\lVert \mathbf{x} \rVert^{2}=\sum x_{i}^{2}" data-display="false"><code>\lVert \mathbf{x} \rVert^{2}=\sum x_{i}^{2}</code></span>    | <span class="course-math" data-tex="\lVert \mathbf{x} \rVert^{2}=\sum \lvert x_{i} \rvert^{2}" data-display="false"><code>\lVert \mathbf{x} \rVert^{2}=\sum \lvert x_{i} \rvert^{2}</code></span> |
| <span class="course-math" data-tex="\left\langle  \mathbf{x},\mathbf{y} \right\rangle  =\mathbf{x}^{\top}\mathbf{y}" data-display="false"><code>\left\langle  \mathbf{x},\mathbf{y} \right\rangle  =\mathbf{x}^{\top}\mathbf{y}</code></span>          | <span class="course-math" data-tex="\left\langle  \mathbf{x},\mathbf{y} \right\rangle  =\mathbf{x}^{\mathrm{H}}\mathbf{y}" data-display="false"><code>\left\langle  \mathbf{x},\mathbf{y} \right\rangle  =\mathbf{x}^{\mathrm{H}}\mathbf{y}</code></span>                         |
| Orthogonal：<span class="course-math" data-tex="\mathbf{x}^{\top}\mathbf{y}=0" data-display="false"><code>\mathbf{x}^{\top}\mathbf{y}=0</code></span>                 | Orthogonal：<span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{y}=0" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{y}=0</code></span>                                |
| <span class="course-math" data-tex="\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}^{\top}</code></span>                               | <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}</code></span>                                              |
| <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{\top}=\mathbf{B}^{\top}\mathbf{A}^{\top}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{\top}=\mathbf{B}^{\top}\mathbf{A}^{\top}</code></span>                     | <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{\mathrm{H}}=\mathbf{B}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{\mathrm{H}}=\mathbf{B}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}</code></span>                                    |
| Symmetric Matrices <span class="course-math" data-tex="\mathbf{A}=\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}=\mathbf{A}^{\top}</code></span>          | Hermitian Matrices <span class="course-math" data-tex="\mathbf{A}=\mathbf{A}^{\mathrm{H}}" data-display="false"><code>\mathbf{A}=\mathbf{A}^{\mathrm{H}}</code></span>                         |
| Symmetric Matrices <span class="course-math" data-tex="\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}" data-display="false"><code>\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}</code></span> | Hermitian Matrices <span class="course-math" data-tex="\mathbf{A}=\mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}" data-display="false"><code>\mathbf{A}=\mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}</code></span>                |
| Orthogonal Matrices <span class="course-math" data-tex="\mathbf{Q}^{\top}\mathbf{Q}=\mathbf{I}" data-display="false"><code>\mathbf{Q}^{\top}\mathbf{Q}=\mathbf{I}</code></span>        | Unitary Matrices <span class="course-math" data-tex="\mathbf{U}^{\mathrm{H}}\mathbf{U}=\mathbf{I}" data-display="false"><code>\mathbf{U}^{\mathrm{H}}\mathbf{U}=\mathbf{I}</code></span>                          |
| Skew-Symmetric Matrices <span class="course-math" data-tex="\mathbf{A}^{\top}=-\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}=-\mathbf{A}</code></span>    | Skew-Hermitian Matrices <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}=-\mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}=-\mathbf{A}</code></span>                   |

对于 Hermitian, Unitary, Skew-Hermitian 矩阵，不同的特征值对应的特征向量相互垂直。它们都可以用酉矩阵进行对角化。


### 相似矩阵
{: #section-6 }


定义：称 <span class="course-math" data-tex="\mathbf{A},\mathbf{B}" data-display="false"><code>\mathbf{A},\mathbf{B}</code></span> 为相似矩阵，当且仅当存在可逆矩阵 <span class="course-math" data-tex="\mathbf{M}" data-display="false"><code>\mathbf{M}</code></span> 使得 <span class="course-math" data-tex="\mathbf{B}=\mathbf{M}^{-1}\mathbf{A}\mathbf{M}" data-display="false"><code>\mathbf{B}=\mathbf{M}^{-1}\mathbf{A}\mathbf{M}</code></span>（也就是 <span class="course-math" data-tex="\mathbf{A}=\mathbf{M}\mathbf{B}\mathbf{M}^{-1}" data-display="false"><code>\mathbf{A}=\mathbf{M}\mathbf{B}\mathbf{M}^{-1}</code></span>）。记作 <span class="course-math" data-tex="\mathbf{A}\sim \mathbf{B}" data-display="false"><code>\mathbf{A}\sim \mathbf{B}</code></span>。

定理：若 <span class="course-math" data-tex="\mathbf{A}\sim \mathbf{B}" data-display="false"><code>\mathbf{A}\sim \mathbf{B}</code></span>，则 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 和 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 有相同的特征值，且 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的每个特征向量 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span> 对应 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的特征向量 <span class="course-math" data-tex="\mathbf{M}^{-1}\mathbf{x}" data-display="false"><code>\mathbf{M}^{-1}\mathbf{x}</code></span>。
- <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\lambda \mathbf{x}\implies \mathbf{B}(\mathbf{M}^{-1}\mathbf{x})=\mathbf{M}^{-1}\mathbf{A}\mathbf{M}\mathbf{M}^{-1}\mathbf{x}=\mathbf{M}^{-1}\mathbf{A}\mathbf{x}=\lambda(\mathbf{M}^{-1}\mathbf{x})" data-display="false"><code>\mathbf{A}\mathbf{x}=\lambda \mathbf{x}\implies \mathbf{B}(\mathbf{M}^{-1}\mathbf{x})=\mathbf{M}^{-1}\mathbf{A}\mathbf{M}\mathbf{M}^{-1}\mathbf{x}=\mathbf{M}^{-1}\mathbf{A}\mathbf{x}=\lambda(\mathbf{M}^{-1}\mathbf{x})</code></span>。
- 另一种解释：<span class="course-math" data-tex="\det(\mathbf{B}-\lambda \mathbf{I})=\det(\mathbf{M}^{-1}\mathbf{A}\mathbf{M}-\lambda \mathbf{I})=\det(\mathbf{M}^{-1}(\mathbf{A}-\lambda \mathbf{I})\mathbf{M})=\det(\mathbf{A}-\lambda \mathbf{I})" data-display="false"><code>\det(\mathbf{B}-\lambda \mathbf{I})=\det(\mathbf{M}^{-1}\mathbf{A}\mathbf{M}-\lambda \mathbf{I})=\det(\mathbf{M}^{-1}(\mathbf{A}-\lambda \mathbf{I})\mathbf{M})=\det(\mathbf{A}-\lambda \mathbf{I})</code></span>。

相似矩阵的集合意义：<span class="course-math" data-tex="\mathbf{A}\sim \mathbf{B}" data-display="false"><code>\mathbf{A}\sim \mathbf{B}</code></span> 可以解释成它们代表相同的线性变换 <span class="course-math" data-tex="T:\mathbb{R}^n\to \mathbb{R}^n" data-display="false"><code>T:\mathbb{R}^n\to \mathbb{R}^n</code></span>，只是用不同的基 <span class="course-math" data-tex="\mathbf{V}=\begin{bmatrix}\mathbf{v}_{1} &amp; \dots &amp; \mathbf{v}_{n} \end{bmatrix}" data-display="false"><code>\mathbf{V}=\begin{bmatrix}\mathbf{v}_{1} &amp; \dots &amp; \mathbf{v}_{n} \end{bmatrix}</code></span> 和 <span class="course-math" data-tex="\mathbf{W}=\begin{bmatrix}\mathbf{w}_{1} &amp; \dots &amp; \mathbf{w}_{n}\end{bmatrix}" data-display="false"><code>\mathbf{W}=\begin{bmatrix}\mathbf{w}_{1} &amp; \dots &amp; \mathbf{w}_{n}\end{bmatrix}</code></span>，且有：
<span class="course-math course-math-display" data-tex="\mathbf{W}=\mathbf{V}\mathbf{M}" data-display="true"><code>\mathbf{W}=\mathbf{V}\mathbf{M}</code></span>
就有
<span class="course-math course-math-display" data-tex="\mathbf{B}=\mathbf{M}^{-1}\mathbf{A}\mathbf{M}" data-display="true"><code>\mathbf{B}=\mathbf{M}^{-1}\mathbf{A}\mathbf{M}</code></span>

Schur Lemma：对任意复矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，存在一个酉矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span>，使得 <span class="course-math" data-tex="\mathbf{T}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}" data-display="false"><code>\mathbf{T}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}</code></span> 为一个上三角矩阵。
证明：
- 假设存在 <span class="course-math" data-tex="\mathbf{T}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}" data-display="false"><code>\mathbf{T}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}</code></span> 是一个上三角矩阵，则 <span class="course-math" data-tex="\mathbf{A}\mathbf{U}=\mathbf{U}\mathbf{T}" data-display="false"><code>\mathbf{A}\mathbf{U}=\mathbf{U}\mathbf{T}</code></span>，设 <span class="course-math" data-tex="\mathbf{U}=\begin{bmatrix}\mathbf{x}_{1} &amp; \dots &amp; \mathbf{x}_{n}\end{bmatrix}" data-display="false"><code>\mathbf{U}=\begin{bmatrix}\mathbf{x}_{1} &amp; \dots &amp; \mathbf{x}_{n}\end{bmatrix}</code></span> 对照一下得到 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}_{1}=t_{11}\mathbf{x}_{1}" data-display="false"><code>\mathbf{A}\mathbf{x}_{1}=t_{11}\mathbf{x}_{1}</code></span>。那么 <span class="course-math" data-tex="\lVert \mathbf{x}_{1} \rVert=1" data-display="false"><code>\lVert \mathbf{x}_{1} \rVert=1</code></span> 且 <span class="course-math" data-tex="\mathbf{x}_{1}" data-display="false"><code>\mathbf{x}_{1}</code></span> 是 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的一个特征向量，特征值为 <span class="course-math" data-tex="t_{11}" data-display="false"><code>t_{11}</code></span>。
- <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span> 的情况：<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\mathbf{A}\mathbf{x}_{1}=t_{11}\mathbf{x}_{1} &amp; &amp; (1) \\&#10;\mathbf{A}\mathbf{x}_{2}=t_{12}\mathbf{x}_{1}+t_{22}\mathbf{x}_{2} &amp;  &amp; (2)&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\mathbf{A}\mathbf{x}_{1}=t_{11}\mathbf{x}_{1} &amp; &amp; (1) \\&#10;\mathbf{A}\mathbf{x}_{2}=t_{12}\mathbf{x}_{1}+t_{22}\mathbf{x}_{2} &amp;  &amp; (2)&#10;\end{aligned}</code></span>
- 由于 <span class="course-math" data-tex="\det (\mathbf{A}-\lambda \mathbf{I})=0" data-display="false"><code>\det (\mathbf{A}-\lambda \mathbf{I})=0</code></span> 有至少一个解 <span class="course-math" data-tex="\lambda_{1}\in \mathbb{C}" data-display="false"><code>\lambda_{1}\in \mathbb{C}</code></span>，则可以找到 <span class="course-math" data-tex="\mathbf{v}_{1}\in \mathbb{C}^{2}\setminus\{0\}" data-display="false"><code>\mathbf{v}_{1}\in \mathbb{C}^{2}\setminus\{0\}</code></span>，使得 <span class="course-math" data-tex="\mathbf{A}\mathbf{v}_{1}=\lambda_{1}\mathbf{v}_{1}" data-display="false"><code>\mathbf{A}\mathbf{v}_{1}=\lambda_{1}\mathbf{v}_{1}</code></span>。
- 我们令 <span class="course-math" data-tex="\mathbf{x}_{1}=\frac{\mathbf{v}_{1}}{\lVert \mathbf{v}_{1} \rVert},t_{11}=\lambda_{1}" data-display="false"><code>\mathbf{x}_{1}=\frac{\mathbf{v}_{1}}{\lVert \mathbf{v}_{1} \rVert},t_{11}=\lambda_{1}</code></span>，则 <span class="course-math" data-tex="(1)" data-display="false"><code>(1)</code></span> 成立。
- 存在 <span class="course-math" data-tex="\mathbf{x}_{2}\in \mathbb{C}^{2}" data-display="false"><code>\mathbf{x}_{2}\in \mathbb{C}^{2}</code></span>，使得 <span class="course-math" data-tex="\mathbf{x}_{1}\perp \mathbf{x}_{2}" data-display="false"><code>\mathbf{x}_{1}\perp \mathbf{x}_{2}</code></span>，<span class="course-math" data-tex="\lVert \mathbf{x}_{2} \rVert=1" data-display="false"><code>\lVert \mathbf{x}_{2} \rVert=1</code></span>，这里 <span class="course-math" data-tex="\mathbf{x}_{1},\mathbf{x}_{2}" data-display="false"><code>\mathbf{x}_{1},\mathbf{x}_{2}</code></span> 就是 <span class="course-math" data-tex="\mathbb{C}^{2}" data-display="false"><code>\mathbb{C}^{2}</code></span> 的一组基（用 Gram-Schmidt 正交化可以找到）, 那么存在 <span class="course-math" data-tex="t_{12},t_{22}\in \mathbb{C}" data-display="false"><code>t_{12},t_{22}\in \mathbb{C}</code></span>，使得 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}_{2}=t_{12}\mathbf{x}_{1}+t_{22}\mathbf{x}_{2}" data-display="false"><code>\mathbf{A}\mathbf{x}_{2}=t_{12}\mathbf{x}_{1}+t_{22}\mathbf{x}_{2}</code></span>。这就得到了一个上三角矩阵 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span>。
- <span class="course-math" data-tex="n=3" data-display="false"><code>n=3</code></span> 的情况：同样有一个 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}_{1}=\lambda_{1}\mathbf{x}_{1}" data-display="false"><code>\mathbf{A}\mathbf{x}_{1}=\lambda_{1}\mathbf{x}_{1}</code></span>，用 Gram-Schmidt 正交化方法，可以找到一组标准正交基 <span class="course-math" data-tex="\mathbf{x}_{1},\mathbf{x}_{2},\mathbf{x}_{3}\in \mathbb{C}^3" data-display="false"><code>\mathbf{x}_{1},\mathbf{x}_{2},\mathbf{x}_{3}\in \mathbb{C}^3</code></span>，那么有：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\mathbf{A}\mathbf{x}_{1}=\lambda_{1}\mathbf{x}_{1}  \\&#10;\mathbf{A}\mathbf{x}_{2}=a_{12}\mathbf{x}_{1}+a_{22}\mathbf{x}_{2}+a_{32}\mathbf{x}_{3}  \\&#10;\mathbf{A}\mathbf{x}_{3}=a_{13}\mathbf{x}_{1}+a_{23}\mathbf{x}_{2}+a_{33}\mathbf{x}_{3}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\mathbf{A}\mathbf{x}_{1}=\lambda_{1}\mathbf{x}_{1}  \\&#10;\mathbf{A}\mathbf{x}_{2}=a_{12}\mathbf{x}_{1}+a_{22}\mathbf{x}_{2}+a_{32}\mathbf{x}_{3}  \\&#10;\mathbf{A}\mathbf{x}_{3}=a_{13}\mathbf{x}_{1}+a_{23}\mathbf{x}_{2}+a_{33}\mathbf{x}_{3}&#10;\end{aligned}</code></span>
- 这里令 <span class="course-math" data-tex="\mathbf{U}&#x27;=\begin{bmatrix}\mathbf{x}_{1} &amp; \mathbf{x}_{2} &amp; \mathbf{x}_{3}\end{bmatrix}" data-display="false"><code>\mathbf{U}&#x27;=\begin{bmatrix}\mathbf{x}_{1} &amp; \mathbf{x}_{2} &amp; \mathbf{x}_{3}\end{bmatrix}</code></span> ，

  <span class="course-math course-math-display" data-tex="\mathbf{T}&#x27;=\begin{bmatrix}\lambda_{1} &amp; a_{12} &amp; a_{13} \\ 0 &amp; a_{22} &amp; a_{23} \\ 0 &amp; a_{32} &amp; a_{33}\end{bmatrix}" data-display="true"><code>\mathbf{T}&#x27;=\begin{bmatrix}\lambda_{1} &amp; a_{12} &amp; a_{13} \\ 0 &amp; a_{22} &amp; a_{23} \\ 0 &amp; a_{32} &amp; a_{33}\end{bmatrix}</code></span>

  。
- 那么就有 <span class="course-math" data-tex="\mathbf{A}\mathbf{U}&#x27;=\mathbf{U}&#x27;\mathbf{T}&#x27;" data-display="false"><code>\mathbf{A}\mathbf{U}&#x27;=\mathbf{U}&#x27;\mathbf{T}&#x27;</code></span>。把 <span class="course-math" data-tex="\mathbf{T}&#x27;" data-display="false"><code>\mathbf{T}&#x27;</code></span> 写成

  <span class="course-math course-math-display" data-tex="\begin{bmatrix}\lambda_{1} &amp; a \\ 0 &amp; \mathbf{A}_{1}\end{bmatrix}" data-display="true"><code>\begin{bmatrix}\lambda_{1} &amp; a \\ 0 &amp; \mathbf{A}_{1}\end{bmatrix}</code></span>

  。要把 <span class="course-math" data-tex="\mathbf{A}_{1}" data-display="false"><code>\mathbf{A}_{1}</code></span> 变成上三角矩阵，这个就是 <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span> 的情况，于是存在 <span class="course-math" data-tex="\mathbf{U}_{1}" data-display="false"><code>\mathbf{U}_{1}</code></span> 使得 <span class="course-math" data-tex="\mathbf{U}_{1}^{-1}\mathbf{A}_{1}\mathbf{U}_{1}" data-display="false"><code>\mathbf{U}_{1}^{-1}\mathbf{A}_{1}\mathbf{U}_{1}</code></span> 是上三角矩阵。
- 那么存在

  <span class="course-math course-math-display" data-tex="\mathbf{U}_{2}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; \mathbf{U}_{1}\end{bmatrix},\mathbf{U}_{2}^{-1}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; \mathbf{U}_{1}^{-1}\end{bmatrix}" data-display="true"><code>\mathbf{U}_{2}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; \mathbf{U}_{1}\end{bmatrix},\mathbf{U}_{2}^{-1}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; \mathbf{U}_{1}^{-1}\end{bmatrix}</code></span>

   是一个酉矩阵，使得

  <span class="course-math course-math-display" data-tex="\mathbf{T}=\mathbf{U}_{2}^{-1}\mathbf{T}&#x27;\mathbf{U}_{2}=\begin{bmatrix}\lambda_{1} &amp; a\mathbf{U}_{1} \\ 0 &amp; \mathbf{U}_{1}^{-1}\mathbf{A}_{1}\mathbf{U}_{1}\end{bmatrix}" data-display="true"><code>\mathbf{T}=\mathbf{U}_{2}^{-1}\mathbf{T}&#x27;\mathbf{U}_{2}=\begin{bmatrix}\lambda_{1} &amp; a\mathbf{U}_{1} \\ 0 &amp; \mathbf{U}_{1}^{-1}\mathbf{A}_{1}\mathbf{U}_{1}\end{bmatrix}</code></span>

   是一个上三角矩阵。
- 于是有 <span class="course-math" data-tex="\mathbf{T}=\mathbf{U}_{2}^{-1}\mathbf{U}&#x27;^{-1}\mathbf{A}\mathbf{U}&#x27;\mathbf{U}_{2}" data-display="false"><code>\mathbf{T}=\mathbf{U}_{2}^{-1}\mathbf{U}&#x27;^{-1}\mathbf{A}\mathbf{U}&#x27;\mathbf{U}_{2}</code></span>，也就是存在 <span class="course-math" data-tex="\mathbf{U}=\mathbf{U}&#x27;\mathbf{U}_{2}" data-display="false"><code>\mathbf{U}=\mathbf{U}&#x27;\mathbf{U}_{2}</code></span> 使得 <span class="course-math" data-tex="\mathbf{T}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}" data-display="false"><code>\mathbf{T}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}</code></span> 为上三角矩阵。
- 递归可证明原定理。


谱定理（Spectral Theorem）：若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 是埃尔米特矩阵，则存在酉矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 使得 <span class="course-math" data-tex="\mathbf{U}^{-1}\mathbf{A}\mathbf{U}=\boldsymbol{\Lambda}" data-display="false"><code>\mathbf{U}^{-1}\mathbf{A}\mathbf{U}=\boldsymbol{\Lambda}</code></span>（实对称矩阵）。
- Schur Lemma 给出存在酉矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 使得 <span class="course-math" data-tex="\mathbf{U}^{-1}\mathbf{A}\mathbf{U}" data-display="false"><code>\mathbf{U}^{-1}\mathbf{A}\mathbf{U}</code></span>  是上三角矩阵。
- 又因为 <span class="course-math" data-tex="(\mathbf{U}^{-1}\mathbf{A}\mathbf{U})^{\mathrm{H}}=(\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U})^{\mathrm{H}}=\mathbf{U}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{U}=\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}" data-display="false"><code>(\mathbf{U}^{-1}\mathbf{A}\mathbf{U})^{\mathrm{H}}=(\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U})^{\mathrm{H}}=\mathbf{U}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{U}=\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U}=\mathbf{U}^{-1}\mathbf{A}\mathbf{U}</code></span>，它是一个对角矩阵。

Remark：若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 是一个实对称矩阵，Schur Lemma 中的 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 可以选成 <span class="course-math" data-tex="\mathbf{Q}" data-display="false"><code>\mathbf{Q}</code></span>，进一步得出 <span class="course-math" data-tex="\mathbf{Q}^{-1}\mathbf{A}\mathbf{Q}" data-display="false"><code>\mathbf{Q}^{-1}\mathbf{A}\mathbf{Q}</code></span> 是对角矩阵。（正交对角化）

将对称矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 写成 <span class="course-math" data-tex="\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}" data-display="false"><code>\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}</code></span>，叫做 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的 **谱分解**：
<span class="course-math course-math-display" data-tex="\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}=\sum\lambda_{i}\mathbf{u}_{i}\mathbf{u}_{i}^{\top}" data-display="true"><code>\mathbf{A}=\mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}=\sum\lambda_{i}\mathbf{u}_{i}\mathbf{u}_{i}^{\top}</code></span>
这就是一些投影矩阵的和。

**代数重数**：特征方程中，某一个根的重根数，叫做这个根的代数重数。

谱分解定理（Spectrum Decomposition Theorem）：任何埃尔米特矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个特征值 <span class="course-math" data-tex="\lambda_{1},\dots,\lambda_{k}" data-display="false"><code>\lambda_{1},\dots,\lambda_{k}</code></span>，每个特征值对应的特征向量张成子空间 <span class="course-math" data-tex="V_{i}" data-display="false"><code>V_{i}</code></span> 则谱定理告诉我们：
<span class="course-math course-math-display" data-tex="\mathbf{A}=\sum\lambda_{i}P_{i}" data-display="true"><code>\mathbf{A}=\sum\lambda_{i}P_{i}</code></span>
其中 <span class="course-math" data-tex="P_{i}" data-display="false"><code>P_{i}</code></span> 为向子空间 <span class="course-math" data-tex="V_{i}" data-display="false"><code>V_{i}</code></span> 作投影的投影矩阵。

定义正规矩阵（Normal Matrices）：若 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\mathrm{H}}=\mathbf{A}^{\mathrm{H}}\mathbf{A}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\mathrm{H}}=\mathbf{A}^{\mathrm{H}}\mathbf{A}</code></span>，则称 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为正规的（Normal）。
- Hermitian, Skew-Hermitian, Unitary 矩阵都是正规矩阵。
Remark：
- Hermitian 矩阵 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}=\mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}=\mathbf{A}</code></span>，则 <span class="course-math" data-tex="\lambda=\bar{\lambda}" data-display="false"><code>\lambda=\bar{\lambda}</code></span>，则 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为实数。
- Skew Hermitian 矩阵 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}=-\mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}=-\mathbf{A}</code></span>，则 <span class="course-math" data-tex="\lambda=-\bar{\lambda}" data-display="false"><code>\lambda=-\bar{\lambda}</code></span>，则 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为纯虚数。
- Unitary 矩阵 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}\mathbf{A}=\mathbf{I}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}\mathbf{A}=\mathbf{I}</code></span>，则 <span class="course-math" data-tex="\bar{\lambda}\lambda=\lvert \lambda \rvert^{2}=1" data-display="false"><code>\bar{\lambda}\lambda=\lvert \lambda \rvert^{2}=1</code></span>，则 <span class="course-math" data-tex="\lvert \lambda \rvert=1" data-display="false"><code>\lvert \lambda \rvert=1</code></span>。

正规矩阵的谱定理（Spectral Theorem for Normal Matrices）：一个复矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可以被酉矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 对角化，当且仅当 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 是正规矩阵。
- 证明：<span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span>：<span class="course-math" data-tex="\mathbf{A}=\mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}" data-display="false"><code>\mathbf{A}=\mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}</code></span>，那么 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\mathrm{H}}=\mathbf{U}(\boldsymbol{\Lambda}\boldsymbol{\Lambda}^{\mathrm{H}})\mathbf{U}^{\mathrm{H}}=\mathbf{U}(\boldsymbol{\Lambda}^{\mathrm{H}}\boldsymbol{\Lambda})\mathbf{U}^{\mathrm{H}}=\mathbf{A}^{\mathrm{H}}\mathbf{A}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\mathrm{H}}=\mathbf{U}(\boldsymbol{\Lambda}\boldsymbol{\Lambda}^{\mathrm{H}})\mathbf{U}^{\mathrm{H}}=\mathbf{U}(\boldsymbol{\Lambda}^{\mathrm{H}}\boldsymbol{\Lambda})\mathbf{U}^{\mathrm{H}}=\mathbf{A}^{\mathrm{H}}\mathbf{A}</code></span>。
- 右推左：Schur Lemma 给出存在酉矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 使得 <span class="course-math" data-tex="\mathbf{T}=\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U}" data-display="false"><code>\mathbf{T}=\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U}</code></span> 是一个上三角矩阵。这里 <span class="course-math" data-tex="\mathbf{T}\mathbf{T}^{\mathrm{H}}=(\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U})(\mathbf{U}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{U})=\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{A}^{\mathrm{H}}\mathbf{U}=\mathbf{U}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{A}\mathbf{U}=\mathbf{T}^{\mathrm{H}}\mathbf{T}" data-display="false"><code>\mathbf{T}\mathbf{T}^{\mathrm{H}}=(\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{U})(\mathbf{U}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{U})=\mathbf{U}^{\mathrm{H}}\mathbf{A}\mathbf{A}^{\mathrm{H}}\mathbf{U}=\mathbf{U}^{\mathrm{H}}\mathbf{A}^{\mathrm{H}}\mathbf{A}\mathbf{U}=\mathbf{T}^{\mathrm{H}}\mathbf{T}</code></span>。那么 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 也是一个正规矩阵。可以证明，上三角的正规矩阵必然是对角矩阵，于是就完成了证明。

（期末不考）
定义约当块（Jordan Block）：
<span class="course-math course-math-display" data-tex="\mathbf{J}_{i}=\begin{bmatrix}&#10;\lambda_{i} &amp; 1 \\&#10; &amp; \lambda_{i} &amp; 1 \\&#10; &amp;  &amp; \ddots &amp; \ddots \\&#10; &amp;  &amp;  &amp; \ddots &amp; 1 \\&#10; &amp;  &amp;  &amp;  &amp; \lambda_i&#10;\end{bmatrix}" data-display="true"><code>\mathbf{J}_{i}=\begin{bmatrix}&#10;\lambda_{i} &amp; 1 \\&#10; &amp; \lambda_{i} &amp; 1 \\&#10; &amp;  &amp; \ddots &amp; \ddots \\&#10; &amp;  &amp;  &amp; \ddots &amp; 1 \\&#10; &amp;  &amp;  &amp;  &amp; \lambda_i&#10;\end{bmatrix}</code></span>
定义约当形（Jordan Form）：
<span class="course-math course-math-display" data-tex="\mathbf{J}=\begin{bmatrix}&#10;\mathbf{J}_{1} \\&#10; &amp; \mathbf{J}_{2} \\&#10; &amp;  &amp; \ddots \\&#10; &amp;  &amp;  &amp; \mathbf{J}_{s}&#10;\end{bmatrix}" data-display="true"><code>\mathbf{J}=\begin{bmatrix}&#10;\mathbf{J}_{1} \\&#10; &amp; \mathbf{J}_{2} \\&#10; &amp;  &amp; \ddots \\&#10; &amp;  &amp;  &amp; \mathbf{J}_{s}&#10;\end{bmatrix}</code></span>
其中 <span class="course-math" data-tex="\mathbf{J}_{i}" data-display="false"><code>\mathbf{J}_{i}</code></span> 为约当块。

那么：
- <span class="course-math" data-tex="\det(\mathbf{J}_{i}-\lambda \mathbf{I})=(\lambda_{i}-\lambda)^n=0\implies\lambda=\lambda_{i}" data-display="false"><code>\det(\mathbf{J}_{i}-\lambda \mathbf{I})=(\lambda_{i}-\lambda)^n=0\implies\lambda=\lambda_{i}</code></span>。
-   <span class="course-math course-math-display" data-tex="(\mathbf{J}_{i}-\lambda_{i}\mathbf{I})\mathbf{x}=0\implies \mathbf{x}=c\begin{bmatrix}1 \\ 0 \\ \vdots \\ 0\end{bmatrix},\quad c\in\mathbb{C}" data-display="true"><code>(\mathbf{J}_{i}-\lambda_{i}\mathbf{I})\mathbf{x}=0\implies \mathbf{x}=c\begin{bmatrix}1 \\ 0 \\ \vdots \\ 0\end{bmatrix},\quad c\in\mathbb{C}</code></span>

  。
约当形可对角化当且仅当所有约当块的大小均为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。
有相同的 Jordan Form 等价于相似。
{% endraw %}
