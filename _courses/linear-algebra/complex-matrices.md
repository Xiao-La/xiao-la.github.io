---
title: "Complex Matrices - 复矩阵"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
reference: false
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
<span class="course-math course-math-display" data-tex="\bar{x}=\begin{bmatrix}&#10;\overline{x_{1}} \\&#10;\vdots \\&#10;\overline{x_{n}}&#10;\end{bmatrix}" data-display="true"><code>\bar{x}=\begin{bmatrix}&#10;\overline{x_{1}} \\&#10;\vdots \\&#10;\overline{x_{n}}&#10;\end{bmatrix}</code></span>
定义内积（inner product）：
<span class="course-math course-math-display" data-tex="\left&lt; x,y \right&gt; :=\overline{x}^Ty= \overline{x_{1}}y_{1}+\overline{x_{2}}y_{2}+\dots+\overline{x_{n}}y_{n}\in \mathbb{C}" data-display="true"><code>\left&lt; x,y \right&gt; :=\overline{x}^Ty= \overline{x_{1}}y_{1}+\overline{x_{2}}y_{2}+\dots+\overline{x_{n}}y_{n}\in \mathbb{C}</code></span>
定义正交：
<span class="course-math course-math-display" data-tex="x\perp y\iff \left&lt; x,y \right&gt; =0" data-display="true"><code>x\perp y\iff \left&lt; x,y \right&gt; =0</code></span>
定义长度（Length）：
<span class="course-math course-math-display" data-tex="\lVert x \rVert ^{2}=\overline{x}^Tx=\overline{x_{1}}x_{1}+\overline{x_{2}}x_{2}+\dots+\overline{x_{n}}x_{n}" data-display="true"><code>\lVert x \rVert ^{2}=\overline{x}^Tx=\overline{x_{1}}x_{1}+\overline{x_{2}}x_{2}+\dots+\overline{x_{n}}x_{n}</code></span>
复矩阵（Complex Matrices）:
<span class="course-math course-math-display" data-tex="A=(a_{ij})_{m\times n}, a_{ij}\in \mathbb{C}" data-display="true"><code>A=(a_{ij})_{m\times n}, a_{ij}\in \mathbb{C}</code></span>
共轭：
<span class="course-math course-math-display" data-tex="\bar{A}=(\overline{a_{ij}})_{m\times n}" data-display="true"><code>\bar{A}=(\overline{a_{ij}})_{m\times n}</code></span>
<span class="course-math course-math-display" data-tex="\overline{AB}=\overline{A}\,\,\overline{B}" data-display="true"><code>\overline{AB}=\overline{A}\,\,\overline{B}</code></span>
<span class="course-math course-math-display" data-tex="\overline{\lambda A}=\overline{\lambda}\,\,\overline{A}" data-display="true"><code>\overline{\lambda A}=\overline{\lambda}\,\,\overline{A}</code></span>
共轭转置（Conjugate Transpose）：
<span class="course-math course-math-display" data-tex="A^H:=\overline{A}^T=\overline{A^T}" data-display="true"><code>A^H:=\overline{A}^T=\overline{A^T}</code></span>
这里有
<span class="course-math course-math-display" data-tex="(AB)^H=B^HA^H" data-display="true"><code>(AB)^H=B^HA^H</code></span>
用定义容易证明。

#### **埃尔米特矩阵（Hermitian Matrices）：*
{: #section-2 }

满足 <span class="course-math" data-tex="A^H=A" data-display="false"><code>A^H=A</code></span> 的矩阵。
- 埃尔米特矩阵是方阵。
- 对角元为实数。（共轭等于本身）
- 若这里 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是实矩阵，则 <span class="course-math" data-tex="A^H=A^T" data-display="false"><code>A^H=A^T</code></span>，所以它为一个对称矩阵。


**定理：埃尔米特矩阵的特征值是实数。**
  - 引理：<span class="course-math" data-tex="x^HAx" data-display="false"><code>x^HAx</code></span> 是实数。这是因为，<span class="course-math" data-tex="(x^HAx)^H=x^HA^H(x^H)^H=x^HAx" data-display="false"><code>(x^HAx)^H=x^HA^H(x^H)^H=x^HAx</code></span>。
  - 假设 <span class="course-math" data-tex="\lambda\in \mathbb{C}" data-display="false"><code>\lambda\in \mathbb{C}</code></span> 是一个 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的特征值，对应非零的特征向量 <span class="course-math" data-tex="x\in \mathbb{C}^n" data-display="false"><code>x\in \mathbb{C}^n</code></span>。
  - 那么 <span class="course-math" data-tex="Ax=\lambda x" data-display="false"><code>Ax=\lambda x</code></span>，因此 <span class="course-math" data-tex="x^HAx=x^H\lambda x=\lambda \lVert x \rVert^{2}" data-display="false"><code>x^HAx=x^H\lambda x=\lambda \lVert x \rVert^{2}</code></span> 是一个实数，而 <span class="course-math" data-tex="\lVert x \rVert^{2}" data-display="false"><code>\lVert x \rVert^{2}</code></span> 也是一个实数。
  - 那么 <span class="course-math" data-tex="\lambda= \frac{x^HAx}{x^Hx}" data-display="false"><code>\lambda= \frac{x^HAx}{x^Hx}</code></span> 是一个实数。

**定理：若 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 是埃尔米特矩阵的两特征向量，对应不同的特征值 <span class="course-math" data-tex="\lambda,\mu" data-display="false"><code>\lambda,\mu</code></span>，则 <span class="course-math" data-tex="x\perp y" data-display="false"><code>x\perp y</code></span>。**
  - 证明：<span class="course-math" data-tex="(Ax)^H y" data-display="false"><code>(Ax)^H y</code></span>  既等于 <span class="course-math" data-tex="(\lambda x)^Hy=\lambda (x^Hy)" data-display="false"><code>(\lambda x)^Hy=\lambda (x^Hy)</code></span>，又等于 <span class="course-math" data-tex="x^HA^Hy=x^HAy=x^H\mu y=\mu(x^Hy)" data-display="false"><code>x^HA^Hy=x^HAy=x^H\mu y=\mu(x^Hy)</code></span>。由于 <span class="course-math" data-tex="\lambda\neq \mu" data-display="false"><code>\lambda\neq \mu</code></span>，必然有 <span class="course-math" data-tex="x^Hy=0" data-display="false"><code>x^Hy=0</code></span>。

**定理：实对称矩阵可以被对角化分解为 <span class="course-math" data-tex="A=Q\Lambda Q^T" data-display="false"><code>A=Q\Lambda Q^T</code></span> 的形式，其中 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是一个正交矩阵（列为特征向量），<span class="course-math" data-tex="\Lambda" data-display="false"><code>\Lambda</code></span> 是一个对角矩阵。**
- 实对称矩阵是埃尔米特矩阵，因此若特征值两两不同，可得特征向量两两垂直。再标准化一下就得到 <span class="course-math" data-tex="S=Q" data-display="false"><code>S=Q</code></span>，由于 <span class="course-math" data-tex="Q^TQ=I" data-display="false"><code>Q^TQ=I</code></span>，就得到上面的形式。
**进一步的，实对称矩阵可以写成一维投影矩阵（投影到每个特征向量上）的线性组合。**
- 
<span class="course-math course-math-display" data-tex="A=Q\Lambda Q^T=\begin{bmatrix}&#10;x_{1} &amp; \dots &amp; x_{n} &#10;\end{bmatrix} \begin{bmatrix}&#10;\lambda_{1} \\&#10; &amp; \ddots \\&#10; &amp;  &amp; \lambda_{n}&#10;\end{bmatrix}\begin{bmatrix}&#10;x_{1}^T \\&#10;\vdots\\&#10;x_{n}^T&#10;&#10;\end{bmatrix}&#10;=\sum\lambda_{i}x_{i}x_{i}^T" data-display="true"><code>A=Q\Lambda Q^T=\begin{bmatrix}&#10;x_{1} &amp; \dots &amp; x_{n} &#10;\end{bmatrix} \begin{bmatrix}&#10;\lambda_{1} \\&#10; &amp; \ddots \\&#10; &amp;  &amp; \lambda_{n}&#10;\end{bmatrix}\begin{bmatrix}&#10;x_{1}^T \\&#10;\vdots\\&#10;x_{n}^T&#10;&#10;\end{bmatrix}&#10;=\sum\lambda_{i}x_{i}x_{i}^T</code></span>
**推广：埃尔米特矩阵可以被对角化分解为**
<span class="course-math course-math-display" data-tex="A=U\Lambda U^H" data-display="true"><code>A=U\Lambda U^H</code></span>
其中 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 是酉矩阵，满足 <span class="course-math" data-tex="U^HU=I" data-display="false"><code>U^HU=I</code></span>。

#### 酉矩阵 （Unitary Matrix）
{: #section-3 }
 
 有着规范正交的列的 <span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 的复矩阵。
<span class="course-math course-math-display" data-tex="U^HU=I" data-display="true"><code>U^HU=I</code></span>

**定理：<span class="course-math" data-tex="(Ux)^H(Uy)=x^Hy" data-display="false"><code>(Ux)^H(Uy)=x^Hy</code></span>（保内积）。**

**定理：每个 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 的特征值都有 <span class="course-math" data-tex="&#124;\lambda&#124;=1" data-display="false"><code>&#124;\lambda&#124;=1</code></span>。**
- <span class="course-math" data-tex="(Ux)^H(Ux)=x^Hx=(\lambda x^H)(\lambda x)=\lambda^{2}x^Hx\implies \lvert \lambda \rvert=1" data-display="false"><code>(Ux)^H(Ux)=x^Hx=(\lambda x^H)(\lambda x)=\lambda^{2}x^Hx\implies \lvert \lambda \rvert=1</code></span>
例如：
<span class="course-math course-math-display" data-tex="U=\begin{bmatrix}&#10;\cos\theta &amp; -\sin\theta \\&#10;\sin\theta &amp; \cos\theta&#10;\end{bmatrix}" data-display="true"><code>U=\begin{bmatrix}&#10;\cos\theta &amp; -\sin\theta \\&#10;\sin\theta &amp; \cos\theta&#10;\end{bmatrix}</code></span>
则
<span class="course-math course-math-display" data-tex="\lvert U-\lambda I \rvert =\lambda^{2}-2\cos\theta\lambda+1" data-display="true"><code>\lvert U-\lambda I \rvert =\lambda^{2}-2\cos\theta\lambda+1</code></span>
<span class="course-math course-math-display" data-tex="\implies\lambda=\cos\pm i\sin\theta=e^{\pm i\theta}\implies \lvert \lambda \rvert =1" data-display="true"><code>\implies\lambda=\cos\pm i\sin\theta=e^{\pm i\theta}\implies \lvert \lambda \rvert =1</code></span>
**定理：若 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 是酉矩阵的两特征向量，对应不同的特征值 <span class="course-math" data-tex="\lambda,\mu" data-display="false"><code>\lambda,\mu</code></span>，则 <span class="course-math" data-tex="x\perp y" data-display="false"><code>x\perp y</code></span>。****
- <span class="course-math" data-tex="x^Hy=(Ux)^H(Uy)=(\lambda x)^H(\mu y)=\mu\bar{\lambda}(x^Hy)" data-display="false"><code>x^Hy=(Ux)^H(Uy)=(\lambda x)^H(\mu y)=\mu\bar{\lambda}(x^Hy)</code></span>。
- 这里 <span class="course-math" data-tex="\mu\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+\lambda\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+1\neq 1" data-display="false"><code>\mu\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+\lambda\bar{\lambda}=(\mu-\lambda)\bar{\lambda}+1\neq 1</code></span>。
- 所以 <span class="course-math" data-tex="x^Hy=0" data-display="false"><code>x^Hy=0</code></span>。

#### 斜埃尔米特矩阵（Skew-Hermitian Matrices）
{: #section-4 }

<span class="course-math course-math-display" data-tex="K^H=-K" data-display="true"><code>K^H=-K</code></span>
对角元素满足 <span class="course-math" data-tex="a-bi=-(a+bi)\implies a=0" data-display="false"><code>a-bi=-(a+bi)\implies a=0</code></span>，所以为纯虚数。
若 <span class="course-math" data-tex="K" data-display="false"><code>K</code></span> 是实矩阵，则称 <span class="course-math" data-tex="K" data-display="false"><code>K</code></span> 是斜对称/反对称（Skew-Symmetric）的（<span class="course-math" data-tex="K^T=K" data-display="false"><code>K^T=K</code></span>），对角元为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。
**若 <span class="course-math" data-tex="K" data-display="false"><code>K</code></span> 为 skew-Hermitian 矩阵，则 <span class="course-math" data-tex="iK" data-display="false"><code>iK</code></span> 为 Hermitian 矩阵。**
- <span class="course-math" data-tex="K^H=-K\implies(iK)^H=(\bar{i} \bar{K})^T=K^T(-i)^T=-iK^H=iK" data-display="false"><code>K^H=-K\implies(iK)^H=(\bar{i} \bar{K})^T=K^T(-i)^T=-iK^H=iK</code></span>。

**skew-Hermitian 矩阵的特征值为纯虚数。**
- <span class="course-math" data-tex="iK" data-display="false"><code>iK</code></span> 是 Hermitian 矩阵。因此，<span class="course-math" data-tex="(iK)x=\lambda x,\lambda\in \mathbb{R}" data-display="false"><code>(iK)x=\lambda x,\lambda\in \mathbb{R}</code></span>。
- 因此 <span class="course-math" data-tex="Kx=\frac{\lambda}{i}x=-\lambda ix" data-display="false"><code>Kx=\frac{\lambda}{i}x=-\lambda ix</code></span>.

**定理：若 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 是斜埃尔米特矩阵的两特征向量，对应不同的特征值 <span class="course-math" data-tex="\lambda,\mu" data-display="false"><code>\lambda,\mu</code></span>，则 <span class="course-math" data-tex="x\perp y" data-display="false"><code>x\perp y</code></span>。

#### 总结
{: #section-5 }


| Real                                | Cpx                                                |
| ----------------------------------- | -------------------------------------------------- |
| <span class="course-math" data-tex="\lVert x \rVert=\sum x_{i}^{2}" data-display="false"><code>\lVert x \rVert=\sum x_{i}^{2}</code></span>    | <span class="course-math" data-tex="\lVert x \rVert^{2}=\sum \lvert x_{i} \rvert^{2}" data-display="false"><code>\lVert x \rVert^{2}=\sum \lvert x_{i} \rvert^{2}</code></span> |
| <span class="course-math" data-tex="\left&lt; x,y \right&gt; =x^Ty" data-display="false"><code>\left&lt; x,y \right&gt; =x^Ty</code></span>          | <span class="course-math" data-tex="\left&lt; x,y \right&gt; =x^Hy" data-display="false"><code>\left&lt; x,y \right&gt; =x^Hy</code></span>                         |
| Orthogonal：<span class="course-math" data-tex="x^Ty=0" data-display="false"><code>x^Ty=0</code></span>                 | Orthogonal：<span class="course-math" data-tex="x^Ty=0" data-display="false"><code>x^Ty=0</code></span>                                |
| <span class="course-math" data-tex="A^T" data-display="false"><code>A^T</code></span>                               | <span class="course-math" data-tex="A^H" data-display="false"><code>A^H</code></span>                                              |
| <span class="course-math" data-tex="(AB)^T=B^TA^T" data-display="false"><code>(AB)^T=B^TA^T</code></span>                     | <span class="course-math" data-tex="(AB)^H=B^HA^H" data-display="false"><code>(AB)^H=B^HA^H</code></span>                                    |
| Symmetric Matrices <span class="course-math" data-tex="A=A^T" data-display="false"><code>A=A^T</code></span>          | Hermitian Matrices <span class="course-math" data-tex="A=A^H" data-display="false"><code>A=A^H</code></span>                         |
| Symmetric Matrices <span class="course-math" data-tex="A=Q\Lambda Q^T" data-display="false"><code>A=Q\Lambda Q^T</code></span> | Hermitian Matrices <span class="course-math" data-tex="A=U\Lambda U^H" data-display="false"><code>A=U\Lambda U^H</code></span>                |
| Orthogonal Matrices <span class="course-math" data-tex="Q^TQ=I" data-display="false"><code>Q^TQ=I</code></span>        | Unitary Matrices <span class="course-math" data-tex="U^HU=I" data-display="false"><code>U^HU=I</code></span>                          |
| Skew-Symmetric Matrices <span class="course-math" data-tex="A^T=-A" data-display="false"><code>A^T=-A</code></span>    | Skew-Hermitian Matrices <span class="course-math" data-tex="A^H=-A" data-display="false"><code>A^H=-A</code></span>                   |

对于 Hermitian, Unitary, Skew-Hermitian 矩阵，不同的特征值对应的特征向量相互垂直。它们都可以用酉矩阵进行对角化。

### 相似矩阵
{: #section-6 }

定义：称 <span class="course-math" data-tex="A,B" data-display="false"><code>A,B</code></span> 为相似矩阵，当且仅当存在可逆矩阵 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 使得 <span class="course-math" data-tex="B=M^{-1}AM" data-display="false"><code>B=M^{-1}AM</code></span>（也就是 <span class="course-math" data-tex="A=MBM^{-1}" data-display="false"><code>A=MBM^{-1}</code></span>）。记作 <span class="course-math" data-tex="A\sim B" data-display="false"><code>A\sim B</code></span>。

定理：若 <span class="course-math" data-tex="A\sim B" data-display="false"><code>A\sim B</code></span>，则 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 有相同的特征值，且 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的每个特征向量 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 对应 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的特征向量 <span class="course-math" data-tex="M^{-1}x" data-display="false"><code>M^{-1}x</code></span>。
- <span class="course-math" data-tex="Ax=\lambda x\implies B(M^{-1}x)=M^{-1}AMM^{-1}x=M^{-1}Ax=\lambda(M^{-1}x)" data-display="false"><code>Ax=\lambda x\implies B(M^{-1}x)=M^{-1}AMM^{-1}x=M^{-1}Ax=\lambda(M^{-1}x)</code></span>。
- 另一种解释：<span class="course-math" data-tex="\det(B-\lambda I)=\det(M^{-1}AM-\lambda I)=\det(M^{-1}(A-\lambda I)M)=\det(A-\lambda I)" data-display="false"><code>\det(B-\lambda I)=\det(M^{-1}AM-\lambda I)=\det(M^{-1}(A-\lambda I)M)=\det(A-\lambda I)</code></span>。

相似矩阵的集合意义：<span class="course-math" data-tex="A\sim B" data-display="false"><code>A\sim B</code></span> 可以解释成它们代表相同的线性变换 <span class="course-math" data-tex="T:\mathbb{R}^n\to \mathbb{R}^n" data-display="false"><code>T:\mathbb{R}^n\to \mathbb{R}^n</code></span>，只是用不同的基 <span class="course-math" data-tex="V=\begin{bmatrix}v_{1} &amp; \dots &amp; v_{n} \end{bmatrix}" data-display="false"><code>V=\begin{bmatrix}v_{1} &amp; \dots &amp; v_{n} \end{bmatrix}</code></span> 和 <span class="course-math" data-tex="W=\begin{bmatrix}w_{1} &amp; \dots &amp; w_{n}\end{bmatrix}" data-display="false"><code>W=\begin{bmatrix}w_{1} &amp; \dots &amp; w_{n}\end{bmatrix}</code></span>，且有：
<span class="course-math course-math-display" data-tex="W=VM" data-display="true"><code>W=VM</code></span>
就有
<span class="course-math course-math-display" data-tex="B=M^{-1}AM" data-display="true"><code>B=M^{-1}AM</code></span>

Schor Lemma：对任意复矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，存在一个酉矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span>，使得 <span class="course-math" data-tex="T=U^{-1}AU" data-display="false"><code>T=U^{-1}AU</code></span> 为一个上三角矩阵。
证明：
- 假设存在 <span class="course-math" data-tex="T=U^{-1}AU" data-display="false"><code>T=U^{-1}AU</code></span> 是一个上三角矩阵，则 <span class="course-math" data-tex="AU=UT" data-display="false"><code>AU=UT</code></span>，设 <span class="course-math" data-tex="U=\begin{bmatrix}x_{1} &amp; \dots &amp; x_{n}\end{bmatrix}" data-display="false"><code>U=\begin{bmatrix}x_{1} &amp; \dots &amp; x_{n}\end{bmatrix}</code></span> 对照一下得到 <span class="course-math" data-tex="Ax_{1}=t_{11}x_{1}" data-display="false"><code>Ax_{1}=t_{11}x_{1}</code></span>。那么 <span class="course-math" data-tex="\lVert x_{1} \rVert=1" data-display="false"><code>\lVert x_{1} \rVert=1</code></span> 且 <span class="course-math" data-tex="x_{1}" data-display="false"><code>x_{1}</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个特征向量，特征值为 <span class="course-math" data-tex="t_{11}" data-display="false"><code>t_{11}</code></span>。
- <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span> 的情况：<span class="course-math course-math-display" data-tex="\begin{align}&#10;Ax_{1}=t_{11}x_{1} &amp; &amp; (1) \\&#10;Ax_{2}=t_{12}x_{1}+t_{22}u_{2} &amp;  &amp; (2)&#10;\end{align}" data-display="true"><code>\begin{align}&#10;Ax_{1}=t_{11}x_{1} &amp; &amp; (1) \\&#10;Ax_{2}=t_{12}x_{1}+t_{22}u_{2} &amp;  &amp; (2)&#10;\end{align}</code></span>
- 由于 <span class="course-math" data-tex="\det (A-\lambda I)=0" data-display="false"><code>\det (A-\lambda I)=0</code></span> 有至少一个解 <span class="course-math" data-tex="\lambda_{1}\in \mathbb{C}" data-display="false"><code>\lambda_{1}\in \mathbb{C}</code></span>，则可以找到 <span class="course-math" data-tex="v_{1}\in \mathbb{C}" data-display="false"><code>v_{1}\in \mathbb{C}</code></span>，使得 <span class="course-math" data-tex="Av_{1}=\lambda_{1}v_{1}" data-display="false"><code>Av_{1}=\lambda_{1}v_{1}</code></span>。
- 我们令 <span class="course-math" data-tex="x_{1}=\frac{v_{1}}{\lVert v_{1} \rVert},t_{11}=\lambda_{1}" data-display="false"><code>x_{1}=\frac{v_{1}}{\lVert v_{1} \rVert},t_{11}=\lambda_{1}</code></span>，则 <span class="course-math" data-tex="(1)" data-display="false"><code>(1)</code></span> 成立。
- 存在 <span class="course-math" data-tex="x_{2}\in \mathbb{C}^{2}" data-display="false"><code>x_{2}\in \mathbb{C}^{2}</code></span>，使得 <span class="course-math" data-tex="x_{1}\perp x_{2}" data-display="false"><code>x_{1}\perp x_{2}</code></span>，<span class="course-math" data-tex="\lVert x_{2} \rVert=1" data-display="false"><code>\lVert x_{2} \rVert=1</code></span>，这里 <span class="course-math" data-tex="x_{1},x_{2}" data-display="false"><code>x_{1},x_{2}</code></span> 就是 <span class="course-math" data-tex="\mathbb{C}^{2}" data-display="false"><code>\mathbb{C}^{2}</code></span> 的一组基（用 Gram-Schmidt 正交化可以找到）, 那么存在 <span class="course-math" data-tex="t_{12},t_{22}\in \mathbb{C}" data-display="false"><code>t_{12},t_{22}\in \mathbb{C}</code></span>，使得 <span class="course-math" data-tex="Ax_{2}=t_{12}x_{1}+t_{22}x_{2}" data-display="false"><code>Ax_{2}=t_{12}x_{1}+t_{22}x_{2}</code></span>。这就得到了一个上三角矩阵 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span>。
- <span class="course-math" data-tex="n=3" data-display="false"><code>n=3</code></span> 的情况：同样有一个 <span class="course-math" data-tex="Ax_{1}=\lambda_{1}x_{1}" data-display="false"><code>Ax_{1}=\lambda_{1}x_{1}</code></span>，用 Gram-Schmidt 正交化方法，可以找到一组标准正交基 <span class="course-math" data-tex="x_{1},x_{2},x_{3}\in \mathbb{C}^3" data-display="false"><code>x_{1},x_{2},x_{3}\in \mathbb{C}^3</code></span>，那么有：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;Ax_{1}=\lambda_{1}x_{1}  \\&#10;Ax_{2}=a_{12}x_{1}+a_{22}x_{2}+a_{32}x_{3}  \\&#10;Ax_{3}=a_{13}x_{1}+a_{23}x_{2}+a_{33}x_{3}&#10;\end{align}" data-display="true"><code>\begin{align}&#10;Ax_{1}=\lambda_{1}x_{1}  \\&#10;Ax_{2}=a_{12}x_{1}+a_{22}x_{2}+a_{32}x_{3}  \\&#10;Ax_{3}=a_{13}x_{1}+a_{23}x_{2}+a_{33}x_{3}&#10;\end{align}</code></span>
- 这里令 <span class="course-math" data-tex="U&#x27;=\begin{bmatrix}x_{1} &amp; x_{2} &amp; x_{3}\end{bmatrix}" data-display="false"><code>U&#x27;=\begin{bmatrix}x_{1} &amp; x_{2} &amp; x_{3}\end{bmatrix}</code></span> ，<span class="course-math" data-tex="T&#x27;=\begin{bmatrix}\lambda_{1} &amp; a_{12} &amp; a_{13} \\ 0 &amp; a_{22} &amp; a_{23} \\ 0 &amp; a_{32} &amp; a_{33}\end{bmatrix}" data-display="false"><code>T&#x27;=\begin{bmatrix}\lambda_{1} &amp; a_{12} &amp; a_{13} \\ 0 &amp; a_{22} &amp; a_{23} \\ 0 &amp; a_{32} &amp; a_{33}\end{bmatrix}</code></span>。
- 那么就有 <span class="course-math" data-tex="AU&#x27;=U&#x27;T&#x27;" data-display="false"><code>AU&#x27;=U&#x27;T&#x27;</code></span>。把 <span class="course-math" data-tex="T&#x27;" data-display="false"><code>T&#x27;</code></span> 写成 <span class="course-math" data-tex="\begin{bmatrix}\lambda_{1} &amp; a \\ 0 &amp; A_{1}\end{bmatrix}" data-display="false"><code>\begin{bmatrix}\lambda_{1} &amp; a \\ 0 &amp; A_{1}\end{bmatrix}</code></span>。要把 <span class="course-math" data-tex="A_{1}" data-display="false"><code>A_{1}</code></span> 变成上三角矩阵，这个就是 <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span> 的情况，于是存在 <span class="course-math" data-tex="U_{1}" data-display="false"><code>U_{1}</code></span> 使得 <span class="course-math" data-tex="U_{1}^{-1}A_{1}U_{1}" data-display="false"><code>U_{1}^{-1}A_{1}U_{1}</code></span> 是上三角矩阵。
- 那么存在 <span class="course-math" data-tex="U_{2}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; U_{1}\end{bmatrix},U_{2}^{-1}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; U_{1}^{-1}\end{bmatrix}" data-display="false"><code>U_{2}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; U_{1}\end{bmatrix},U_{2}^{-1}=\begin{bmatrix}1 &amp; 0 \\ 0 &amp; U_{1}^{-1}\end{bmatrix}</code></span> 是一个酉矩阵，使得 <span class="course-math" data-tex="T=U_{2}^{-1}T&#x27;U_{2}=\begin{bmatrix}\lambda_{1} &amp; aU_{1} \\ 0 &amp; U_{1}^{-1}A_{1}U_{1}\end{bmatrix}" data-display="false"><code>T=U_{2}^{-1}T&#x27;U_{2}=\begin{bmatrix}\lambda_{1} &amp; aU_{1} \\ 0 &amp; U_{1}^{-1}A_{1}U_{1}\end{bmatrix}</code></span> 是一个上三角矩阵。
- 于是有 <span class="course-math" data-tex="T=U_{1}^{-1}U&#x27;^{-1}T&#x27;U&#x27;U_{1}" data-display="false"><code>T=U_{1}^{-1}U&#x27;^{-1}T&#x27;U&#x27;U_{1}</code></span>，也就是存在 <span class="course-math" data-tex="U=U&#x27;U_{1}" data-display="false"><code>U=U&#x27;U_{1}</code></span> 使得 <span class="course-math" data-tex="T=U^{-1}AU" data-display="false"><code>T=U^{-1}AU</code></span> 为上三角矩阵。
- 递归可证明原定理。


谱定理（Spectral Theorem）：若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是埃尔米特矩阵，则存在酉矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 使得 <span class="course-math" data-tex="U^{-1}AU=\Lambda" data-display="false"><code>U^{-1}AU=\Lambda</code></span>（实对称矩阵）。
- Schor Lemma 给出存在酉矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 使得 <span class="course-math" data-tex="U^{-1}AU" data-display="false"><code>U^{-1}AU</code></span>  是上三角矩阵。
- 又因为 <span class="course-math" data-tex="(U^{-1}AU)^H=(U^HAU)^H=U^HA^HU=U^HAU=U^{-1}AU" data-display="false"><code>(U^{-1}AU)^H=(U^HAU)^H=U^HA^HU=U^HAU=U^{-1}AU</code></span>，它是一个对角矩阵。

Remark：若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个实对称矩阵，Schor Lemma 中的 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 可以选成 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>，进一步得出 <span class="course-math" data-tex="Q^{-1}AQ" data-display="false"><code>Q^{-1}AQ</code></span> 是对角矩阵。（正交对角化）

将对称矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 写成 <span class="course-math" data-tex="Q\Lambda Q^T" data-display="false"><code>Q\Lambda Q^T</code></span>，叫做 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的 **谱分解**：
<span class="course-math course-math-display" data-tex="A=Q\Lambda Q^T=\sum\lambda_{i}u_{i}u_{i}^T" data-display="true"><code>A=Q\Lambda Q^T=\sum\lambda_{i}u_{i}u_{i}^T</code></span>
这就是一些投影矩阵的和。

**代数重数**：特征方程中，某一个根的重根数，叫做这个根的代数重数。

谱分解定理（Spectrum Decomposition Theorem）：任何埃尔米特矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个特征值 <span class="course-math" data-tex="\lambda_{1},\dots,\lambda_{k}" data-display="false"><code>\lambda_{1},\dots,\lambda_{k}</code></span>，每个特征值对应的特征向量张成子空间 <span class="course-math" data-tex="V_{i}" data-display="false"><code>V_{i}</code></span> 则谱定理告诉我们：
<span class="course-math course-math-display" data-tex="A=\sum\lambda_{i}P_{i}" data-display="true"><code>A=\sum\lambda_{i}P_{i}</code></span>
其中 <span class="course-math" data-tex="P_{i}" data-display="false"><code>P_{i}</code></span> 为向子空间 <span class="course-math" data-tex="V_{i}" data-display="false"><code>V_{i}</code></span> 作投影的投影矩阵。

定义正规矩阵（Normal Matrices）：若 <span class="course-math" data-tex="AA^H=A^HA" data-display="false"><code>AA^H=A^HA</code></span>，则称 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为正规的（Normal）。
- Hermitian, Skew-Hermitian, Unitary 矩阵都是正规矩阵。
Remark：
- Hermitian 矩阵 <span class="course-math" data-tex="A^H=A" data-display="false"><code>A^H=A</code></span>，则 <span class="course-math" data-tex="\lambda=\bar{\lambda}" data-display="false"><code>\lambda=\bar{\lambda}</code></span>，则 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为实数。
- Skew Hermitian 矩阵 <span class="course-math" data-tex="A^H=-A" data-display="false"><code>A^H=-A</code></span>，则 <span class="course-math" data-tex="\lambda=-\bar{\lambda}" data-display="false"><code>\lambda=-\bar{\lambda}</code></span>，则 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为纯虚数。
- Unitary 矩阵 <span class="course-math" data-tex="A^HA=I" data-display="false"><code>A^HA=I</code></span>，则 <span class="course-math" data-tex="\bar{\lambda}\lambda=\lvert \lambda \rvert^{2}=1" data-display="false"><code>\bar{\lambda}\lambda=\lvert \lambda \rvert^{2}=1</code></span>，则 <span class="course-math" data-tex="\lvert \lambda \rvert=1" data-display="false"><code>\lvert \lambda \rvert=1</code></span>。

正规矩阵的谱定理（Spectral Theorem for Normal Matrices）：一个复矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可以被酉矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 对角化，当且仅当 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是正规矩阵。
- 证明：<span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span>：<span class="course-math" data-tex="A=U\Lambda U^H" data-display="false"><code>A=U\Lambda U^H</code></span>，那么 <span class="course-math" data-tex="AA^H=U(\Lambda\Lambda^H)U^H=U(\Lambda^H\Lambda)U^H=A^HA" data-display="false"><code>AA^H=U(\Lambda\Lambda^H)U^H=U(\Lambda^H\Lambda)U^H=A^HA</code></span>。 
- 右推左：Schor Lemma 给出存在酉矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 使得 <span class="course-math" data-tex="T=U^HAU" data-display="false"><code>T=U^HAU</code></span> 是一个上三角矩阵。这里 <span class="course-math" data-tex="TT^H=(U^HAU)(U^HA^HU)=U^HAA^HU=U^HA^HAU=T^HT" data-display="false"><code>TT^H=(U^HAU)(U^HA^HU)=U^HAA^HU=U^HA^HAU=T^HT</code></span>。那么 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 也是一个正当矩阵。可以证明，上三角的正规矩阵必然是对角矩阵，于是就完成了证明。

（期末不考）
定义约当块（Jordan Block）：
<span class="course-math course-math-display" data-tex="J_{i}=\begin{bmatrix}&#10;\lambda_{i} &amp; 1 \\&#10; &amp; \lambda_{i} &amp; 1 \\&#10; &amp;  &amp; \ddots &amp; \ddots \\&#10; &amp;  &amp;  &amp; \ddots &amp; 1 \\&#10; &amp;  &amp;  &amp;  &amp; \lambda_i&#10;\end{bmatrix}" data-display="true"><code>J_{i}=\begin{bmatrix}&#10;\lambda_{i} &amp; 1 \\&#10; &amp; \lambda_{i} &amp; 1 \\&#10; &amp;  &amp; \ddots &amp; \ddots \\&#10; &amp;  &amp;  &amp; \ddots &amp; 1 \\&#10; &amp;  &amp;  &amp;  &amp; \lambda_i&#10;\end{bmatrix}</code></span>
定义约当形（Jordan Form）：
<span class="course-math course-math-display" data-tex="J=\begin{bmatrix}&#10;J_{1} \\&#10; &amp; J_{2} \\&#10; &amp;  &amp; \ddots \\&#10; &amp;  &amp;  &amp; J_{s}&#10;\end{bmatrix}" data-display="true"><code>J=\begin{bmatrix}&#10;J_{1} \\&#10; &amp; J_{2} \\&#10; &amp;  &amp; \ddots \\&#10; &amp;  &amp;  &amp; J_{s}&#10;\end{bmatrix}</code></span>
其中 <span class="course-math" data-tex="J_{i}" data-display="false"><code>J_{i}</code></span> 为约当块。

那么：
- <span class="course-math" data-tex="\det(J_{i}-\lambda I)=(\lambda_{i}-\lambda)^n=0\implies\lambda=\lambda_{i}" data-display="false"><code>\det(J_{i}-\lambda I)=(\lambda_{i}-\lambda)^n=0\implies\lambda=\lambda_{i}</code></span>。
- <span class="course-math" data-tex="(J_{i}-\lambda_{i}I)x=0\implies x=\begin{bmatrix}1 \\ 0 \\ \vdots \\ 0\end{bmatrix}" data-display="false"><code>(J_{i}-\lambda_{i}I)x=0\implies x=\begin{bmatrix}1 \\ 0 \\ \vdots \\ 0\end{bmatrix}</code></span>。
约当形的矩阵是最不可对角化的形式。
有相同的 Jordan Form 等价于相似。
{% endraw %}
