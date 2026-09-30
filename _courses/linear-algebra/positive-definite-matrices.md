---
title: "Positive Definite Matrices - 正定矩阵"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-05-25T17:29:01+08:00"
updated_at: "2026-06-04T20:26:52+08:00"
reference: false
order: 9
layout: "course"
permalink: "/courses/linear-algebra/positive-definite-matrices/"
course_page: true
doc_type: "note"
description: "线性代数 · Positive Definite Matrices - 正定矩阵"
excerpt: "线性代数 · Positive Definite Matrices - 正定矩阵"
---

{% raw %}

### 二次型
{: #section-1 }


<span class="course-math course-math-display" data-tex="f(x,y)=ax^{2}+2bxy+cy^{2}" data-display="true"><code>f(x,y)=ax^{2}+2bxy+cy^{2}</code></span>
 这样的（二元）二次型在原点处都是驻点：<span class="course-math" data-tex="\frac{ \partial f }{ \partial x }=\frac{ \partial f }{ \partial y }=0" data-display="false"><code>\frac{ \partial f }{ \partial x }=\frac{ \partial f }{ \partial y }=0</code></span>。
 若 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 在原点之外是严格大于零的，称它为正定的（Positive Definite）。
 配方之后可以知道，这个二次型正定当且仅当：<span class="course-math course-math-display" data-tex="a&gt;0\&#10;,\, ac&gt;b^{2}" data-display="true"><code>a&gt;0\&#10;,\, ac&gt;b^{2}</code></span>
类似的，也有负定（Negative Definite）的情况：
<span class="course-math course-math-display" data-tex="a&lt;0\,,\,ac&gt;b^{2}" data-display="true"><code>a&lt;0\,,\,ac&gt;b^{2}</code></span>
正定负定的图形是碗形。
若 <span class="course-math" data-tex="a&gt;0,ac=b^{2}" data-display="false"><code>a&gt;0,ac=b^{2}</code></span>，称为半正定（ Positive Semidefinite）。
若 <span class="course-math" data-tex="a&lt;0, ac=b^{2}" data-display="false"><code>a&lt;0, ac=b^{2}</code></span>，称为半负定（ Negative Semidefinite）。
半定的图形是山谷形状，会有一条直线都是 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 。
若 <span class="course-math" data-tex="ac&lt;b^{2}" data-display="false"><code>ac&lt;b^{2}</code></span> ，图形会变成马鞍面（Saddle），此时原点叫做鞍点（Saddle Point）。

矩阵表示：
<span class="course-math course-math-display" data-tex="f(x,y)=\begin{bmatrix}&#10;x &amp; y &#10;\end{bmatrix} \begin{bmatrix}&#10;a &amp; b \\&#10;b &amp; c&#10;\end{bmatrix}\begin{bmatrix}&#10;x \\&#10;y&#10;\end{bmatrix}=x^TAx" data-display="true"><code>f(x,y)=\begin{bmatrix}&#10;x &amp; y &#10;\end{bmatrix} \begin{bmatrix}&#10;a &amp; b \\&#10;b &amp; c&#10;\end{bmatrix}\begin{bmatrix}&#10;x \\&#10;y&#10;\end{bmatrix}=x^TAx</code></span>
对于 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元的二次型：
<span class="course-math course-math-display" data-tex="f(x_{1},x_{2},\dots,x_{n})=x^TAx=\sum \sum a_{ij}x_{i}x_{j}" data-display="true"><code>f(x_{1},x_{2},\dots,x_{n})=x^TAx=\sum \sum a_{ij}x_{i}x_{j}</code></span>
其中 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个实对称矩阵，把它叫作一个二次型矩阵。
这里 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 中，若 <span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>，则 <span class="course-math" data-tex="x_{i}x_{j}" data-display="false"><code>x_{i}x_{j}</code></span> 的系数除以二才得到 <span class="course-math" data-tex="a_{ij}=a_{ji}" data-display="false"><code>a_{ij}=a_{ji}</code></span>。而矩阵的对角元就是平方项的系数。


### 正定矩阵
{: #section-2 }


若 <span class="course-math" data-tex="f=x^TAx" data-display="false"><code>f=x^TAx</code></span> 是一个**正定二次型**，则把对称矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 叫做**正定矩阵**。有时记作 <span class="course-math" data-tex="A&gt;0" data-display="false"><code>A&gt;0</code></span>。
对对称矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，TFAE：
1.  <span class="course-math" data-tex="x^TAx&gt;0\forall x\neq 0" data-display="false"><code>x^TAx&gt;0\forall x\neq 0</code></span>
2. 所有特征值 <span class="course-math" data-tex="\lambda_{1},\dots,\lambda_{n}&gt;0" data-display="false"><code>\lambda_{1},\dots,\lambda_{n}&gt;0</code></span>
3. 左上角 <span class="course-math" data-tex="k\times k" data-display="false"><code>k\times k</code></span> 的行列式 <span class="course-math" data-tex="\det(A_{k})&gt;0" data-display="false"><code>\det(A_{k})&gt;0</code></span> <span class="course-math" data-tex="\forall k" data-display="false"><code>\forall k</code></span>
4. 主元 <span class="course-math" data-tex="d_{k}&gt;0\,\forall k" data-display="false"><code>d_{k}&gt;0\,\forall k</code></span>
5. 存在一个可逆矩阵 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>，使得 <span class="course-math" data-tex="A=R^TR" data-display="false"><code>A=R^TR</code></span>

*TFAE : The following are equivalent.*

证明：
- 【 <span class="course-math" data-tex="1\implies 2" data-display="false"><code>1\implies 2</code></span> 】若 <span class="course-math" data-tex="x^TAx&gt;0" data-display="false"><code>x^TAx&gt;0</code></span>，假设 <span class="course-math" data-tex="\lambda _i" data-display="false"><code>\lambda _i</code></span> 是一个特征值，对应特征向量 <span class="course-math" data-tex="x_{i}\neq 0" data-display="false"><code>x_{i}\neq 0</code></span>，则 <span class="course-math" data-tex="x_{i}^TAx_{i}&gt;0" data-display="false"><code>x_{i}^TAx_{i}&gt;0</code></span>。又因为 <span class="course-math" data-tex="Ax_{i}=\lambda x_{i}" data-display="false"><code>Ax_{i}=\lambda x_{i}</code></span>，有 <span class="course-math" data-tex="\lambda_{i}x_{i}^Tx_{i}=\lambda_{i}\lVert x_{i} \rVert^{2}&gt;0" data-display="false"><code>\lambda_{i}x_{i}^Tx_{i}=\lambda_{i}\lVert x_{i} \rVert^{2}&gt;0</code></span>，故而 <span class="course-math" data-tex="\lambda_{i}&gt;0" data-display="false"><code>\lambda_{i}&gt;0</code></span>。
- 【 <span class="course-math" data-tex="2\implies 1" data-display="false"><code>2\implies 1</code></span> 】若 <span class="course-math" data-tex="\lambda_{i}&gt;0" data-display="false"><code>\lambda_{i}&gt;0</code></span>，由谱定理，因为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个对称矩阵，它可以被一个正交矩阵对角化，也就是说存在一组规范正交的特征向量 <span class="course-math" data-tex="x_{1},\dots,x_{n}" data-display="false"><code>x_{1},\dots,x_{n}</code></span> 使得 <span class="course-math" data-tex="Ax_{i}=\lambda_{i}x_{i}" data-display="false"><code>Ax_{i}=\lambda_{i}x_{i}</code></span>。任意向量可以写成这组特征向量的线性组合： <span class="course-math" data-tex="x=\sum c_{i}x_{i}" data-display="false"><code>x=\sum c_{i}x_{i}</code></span>。那么 <span class="course-math" data-tex="x^TAx=\left( \sum c_{i}x_{i}^T \right)A\left( \sum c_{i}x_{i} \right)=\left( \sum c_{i}x_{i}^T \right)\left( \sum c_{i}\lambda_{i}x_{i} \right)=\sum c_{i}^{2}\lambda_{i}" data-display="false"><code>x^TAx=\left( \sum c_{i}x_{i}^T \right)A\left( \sum c_{i}x_{i} \right)=\left( \sum c_{i}x_{i}^T \right)\left( \sum c_{i}\lambda_{i}x_{i} \right)=\sum c_{i}^{2}\lambda_{i}</code></span>（因为交叉项都为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>）。故而 <span class="course-math" data-tex="x^TAx&gt;0" data-display="false"><code>x^TAx&gt;0</code></span>。
- 【 <span class="course-math" data-tex="2\implies 3" data-display="false"><code>2\implies 3</code></span> 】 <span class="course-math" data-tex="\det(A_{n})=\prod\lambda_{i}&gt;0" data-display="false"><code>\det(A_{n})=\prod\lambda_{i}&gt;0</code></span>。设原来的二次型为 <span class="course-math" data-tex="g(x_{1}\dots x_{n})=\begin{bmatrix}x_{1}\dots x_{n}\end{bmatrix}A\begin{bmatrix}x_{1} \\ \vdots\\x_{n}\end{bmatrix}" data-display="false"><code>g(x_{1}\dots x_{n})=\begin{bmatrix}x_{1}\dots x_{n}\end{bmatrix}A\begin{bmatrix}x_{1} \\ \vdots\\x_{n}\end{bmatrix}</code></span>，它是正定的。那么考察 <span class="course-math" data-tex="f(x_{1}\dots x_{k})=\begin{bmatrix}x_{1}\dots x_{k}\end{bmatrix}A\begin{bmatrix}x_{1} \\ \vdots\\x_{k}\end{bmatrix}" data-display="false"><code>f(x_{1}\dots x_{k})=\begin{bmatrix}x_{1}\dots x_{k}\end{bmatrix}A\begin{bmatrix}x_{1} \\ \vdots\\x_{k}\end{bmatrix}</code></span>，它满足 <span class="course-math" data-tex="f=g(x_{1}\dots x_{k},0\dots 0)" data-display="false"><code>f=g(x_{1}\dots x_{k},0\dots 0)</code></span>，那么 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 也是正定的。于是 <span class="course-math" data-tex="\det(A_{k})&gt;0" data-display="false"><code>\det(A_{k})&gt;0</code></span>。
- 【 <span class="course-math" data-tex="3\implies 4" data-display="false"><code>3\implies 4</code></span> 】 <span class="course-math" data-tex="d_{k}= \frac{\det(A_{k})}{\det(A_{k-1})}&gt;0" data-display="false"><code>d_{k}= \frac{\det(A_{k})}{\det(A_{k-1})}&gt;0</code></span>。
- 【 <span class="course-math" data-tex="4\implies 1" data-display="false"><code>4\implies 1</code></span> 】 假设 <span class="course-math" data-tex="A=LDU" data-display="false"><code>A=LDU</code></span>，由于 <span class="course-math" data-tex="A^T=U^TDL^T=A=LDU" data-display="false"><code>A^T=U^TDL^T=A=LDU</code></span>，有 <span class="course-math" data-tex="U=L^T" data-display="false"><code>U=L^T</code></span>。那么 <span class="course-math" data-tex="\forall x\neq 0,x^TAx=x^T(LDU)x=x^TLDL^Tx" data-display="false"><code>\forall x\neq 0,x^TAx=x^T(LDU)x=x^TLDL^Tx</code></span>。令 <span class="course-math" data-tex="L^Tx=y\neq 0" data-display="false"><code>L^Tx=y\neq 0</code></span>，则 <span class="course-math" data-tex="x^TAx=y^TDy=\sum d_{i}y_{i}^{2}&gt;0" data-display="false"><code>x^TAx=y^TDy=\sum d_{i}y_{i}^{2}&gt;0</code></span>。
- 【 <span class="course-math" data-tex="5\implies 1" data-display="false"><code>5\implies 1</code></span> 】 <span class="course-math" data-tex="\forall x\neq 0, x^TAx=x^TR^TRx=\lVert Rx \rVert^{2}" data-display="false"><code>\forall x\neq 0, x^TAx=x^TR^TRx=\lVert Rx \rVert^{2}</code></span>，这里由于 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 可逆，<span class="course-math" data-tex="Rx" data-display="false"><code>Rx</code></span> 就不为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，因此 <span class="course-math" data-tex="x^TAx&gt;0" data-display="false"><code>x^TAx&gt;0</code></span>。
- 【 <span class="course-math" data-tex="A&gt;0\implies 5" data-display="false"><code>A&gt;0\implies 5</code></span> 】 
  - 法一（Cholesky Decomposition ）：<span class="course-math" data-tex="A=LDU=LDL^T=(L\sqrt{ D })(\sqrt{ D }L^T)" data-display="false"><code>A=LDU=LDL^T=(L\sqrt{ D })(\sqrt{ D }L^T)</code></span>，设 <span class="course-math" data-tex="R=\sqrt{ D }L^T" data-display="false"><code>R=\sqrt{ D }L^T</code></span>，则 <span class="course-math" data-tex="A=R^TR" data-display="false"><code>A=R^TR</code></span>，这里 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 显然可逆。
  - 法二： <span class="course-math" data-tex="A=Q\Lambda Q^T=Q\sqrt{ \Lambda }\sqrt{ \Lambda }Q^T" data-display="false"><code>A=Q\Lambda Q^T=Q\sqrt{ \Lambda }\sqrt{ \Lambda }Q^T</code></span> ，设 <span class="course-math" data-tex="R=\sqrt{ \Lambda }Q^T" data-display="false"><code>R=\sqrt{ \Lambda }Q^T</code></span>，则 <span class="course-math" data-tex="A=R^TR" data-display="false"><code>A=R^TR</code></span>，这里 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 显然可逆。
  - 法三：<span class="course-math" data-tex="A=Q\Lambda Q^T=(Q\sqrt{ \Lambda  }Q^T)(Q\sqrt{ \Lambda }Q^T)" data-display="false"><code>A=Q\Lambda Q^T=(Q\sqrt{ \Lambda  }Q^T)(Q\sqrt{ \Lambda }Q^T)</code></span>，设 <span class="course-math" data-tex="R=Q\sqrt{ \Lambda }Q^T" data-display="false"><code>R=Q\sqrt{ \Lambda }Q^T</code></span>，则 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是一个对称的正定矩阵，且 <span class="course-math" data-tex="A=R^TR=R^{2}" data-display="false"><code>A=R^TR=R^{2}</code></span>。（这里这种分解方式最好的保留了 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的对称和正交的性质，所以可以定义 <span class="course-math" data-tex="R=\sqrt{ A }&gt;0" data-display="false"><code>R=\sqrt{ A }&gt;0</code></span>）
  - 这里有无穷多种分解，因为若 <span class="course-math" data-tex="A=R^TR" data-display="false"><code>A=R^TR</code></span>，则对任意 <span class="course-math" data-tex="R&#x27;=QR" data-display="false"><code>R&#x27;=QR</code></span> 其中 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是任意正交矩阵，则 <span class="course-math" data-tex="A=R&#x27;^TR&#x27;" data-display="false"><code>A=R&#x27;^TR&#x27;</code></span>。

当然，根据定义，也可以去直接把二次多项式给 Complete the square 来判断。
这里你会发现，若 <span class="course-math" data-tex="A=LDU" data-display="false"><code>A=LDU</code></span>，则 <span class="course-math" data-tex="x^TAx=\sum d_{i}y_{i}^{2}" data-display="false"><code>x^TAx=\sum d_{i}y_{i}^{2}</code></span>，这里 <span class="course-math" data-tex="y_{i}=L^Tx_{i}" data-display="false"><code>y_{i}=L^Tx_{i}</code></span>，且 <span class="course-math" data-tex="d_{i}" data-display="false"><code>d_{i}</code></span> 为第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 个主元。这就是配方之后的结果！所以配方和高斯消元的过程其实是对应的。

将一个对称矩阵称为半正定的（Semipositive Definite），若 
<span class="course-math course-math-display" data-tex="x^TAx\geq 0\forall x" data-display="true"><code>x^TAx\geq 0\forall x</code></span>
记作 <span class="course-math" data-tex="A\geq 0" data-display="false"><code>A\geq 0</code></span>。
半负定： <span class="course-math" data-tex="x^TAx\leq 0 \forall x" data-display="false"><code>x^TAx\leq 0 \forall x</code></span>。记作 <span class="course-math" data-tex="A\leq 0" data-display="false"><code>A\leq 0</code></span>。

TFAE:
- <span class="course-math" data-tex="A\geq 0" data-display="false"><code>A\geq 0</code></span>
- 特征值 <span class="course-math" data-tex="\lambda_{i} \geq 0" data-display="false"><code>\lambda_{i} \geq 0</code></span>
- 没有主矩阵（Principle Matrices）有负的特征值。
  - 主矩阵：指标集（Index Set） <span class="course-math" data-tex="I\subset \{ 1,2,\dots,n \}" data-display="false"><code>I\subset \{ 1,2,\dots,n \}</code></span> 对应的主矩阵 <span class="course-math" data-tex="A_{I}" data-display="false"><code>A_{I}</code></span> ，定义为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个子矩阵，它来自于选取 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的所有满足 <span class="course-math" data-tex="i,j\in I" data-display="false"><code>i,j\in I</code></span> 的 <span class="course-math" data-tex="a_{ij}" data-display="false"><code>a_{ij}</code></span>。
- 主元 <span class="course-math" data-tex="d_{i}\geq 0" data-display="false"><code>d_{i}\geq 0</code></span>
- 存在矩阵 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 使得 <span class="course-math" data-tex="A=R^TR" data-display="false"><code>A=R^TR</code></span>。

要证明这些事情，可以用这个事实：
<span class="course-math course-math-display" data-tex="A\geq 0 \iff A+\varepsilon I&gt;0 \, \, \forall\text{sufficient small }\varepsilon&gt;0" data-display="true"><code>A\geq 0 \iff A+\varepsilon I&gt;0 \, \, \forall\text{sufficient small }\varepsilon&gt;0</code></span>
这个事实的证明：
- 左推右： <span class="course-math" data-tex="\forall x\neq 0, x^T(A+\varepsilon I)x=x^TAx+\varepsilon x^Tx&gt;0" data-display="false"><code>\forall x\neq 0, x^T(A+\varepsilon I)x=x^TAx+\varepsilon x^Tx&gt;0</code></span>。
- 右推左：<span class="course-math" data-tex="x^TAx=\lim_{ \varepsilon \to 0 } x^T(A+\varepsilon I)x\geq 0" data-display="false"><code>x^TAx=\lim_{ \varepsilon \to 0 } x^T(A+\varepsilon I)x\geq 0</code></span>。
例如要证明 <span class="course-math" data-tex="A\geq 0\implies\lambda_{i}\geq 0" data-display="false"><code>A\geq 0\implies\lambda_{i}\geq 0</code></span> ：<span class="course-math" data-tex="A\geq 0 \implies A+\varepsilon I &gt; 0 \implies \lambda_{i}+\varepsilon &gt; 0 \implies\lambda_{i}\geq 0" data-display="false"><code>A\geq 0 \implies A+\varepsilon I &gt; 0 \implies \lambda_{i}+\varepsilon &gt; 0 \implies\lambda_{i}\geq 0</code></span>。


### 合同矩阵
{: #section-3 }


对于二次型 <span class="course-math" data-tex="f=x^TAx" data-display="false"><code>f=x^TAx</code></span>，它可以做换元 <span class="course-math" data-tex="x=Cy" data-display="false"><code>x=Cy</code></span> 来研究，且 
<span class="course-math course-math-display" data-tex="x^TAx=y^T(C^TAC)y" data-display="true"><code>x^TAx=y^T(C^TAC)y</code></span>
其中 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 是一个可逆的矩阵。

这里定义 <span class="course-math" data-tex="A,B" data-display="false"><code>A,B</code></span> 为合同的（Congruent），若存在可逆矩阵 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 使得
<span class="course-math course-math-display" data-tex="B=C^TAC" data-display="true"><code>B=C^TAC</code></span>
合同关系（Congruence）有如下性质：
- 对称矩阵的合同矩阵也是对称矩阵。
- 单位矩阵 <span class="course-math" data-tex="A=I" data-display="false"><code>A=I</code></span> 的合同矩阵形如 <span class="course-math" data-tex="B=C^TC" data-display="false"><code>B=C^TC</code></span>。也就是说，它是正定的！那么 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的特征值都是正的。

塞维斯特惯性定律（Sylvester's Law of Inertia）：
-  <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的合同矩阵 <span class="course-math" data-tex="C^TAC" data-display="false"><code>C^TAC</code></span> 和 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有相同数量的正特征值，相同数量的负特征值和相同数量的零特征值。
- 把正特征值的数量称为正惯性指数（Positive index of inertia），记作 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>。
- 把负特征值的数量称为负惯性指数（Negative index of inertia），记作 <span class="course-math" data-tex="q" data-display="false"><code>q</code></span>。
- 这里 <span class="course-math" data-tex="p+q=\text{rank}(A)" data-display="false"><code>p+q=\text{rank}(A)</code></span>。<span class="course-math" data-tex="p-q" data-display="false"><code>p-q</code></span> 称为符号差（Signature）。
该定律也可以表述成：
- 设 <span class="course-math" data-tex="f(x_{1}\dots x_{n})=x^TAx" data-display="false"><code>f(x_{1}\dots x_{n})=x^TAx</code></span> 为秩为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 的 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元二次型。存在一个线性变量替换 <span class="course-math" data-tex="x=Cy" data-display="false"><code>x=Cy</code></span> 使得 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 变为
<span class="course-math course-math-display" data-tex="g(y_{1}\dots y_{n})=y_{1}^{2}+y_{2}^{2}+\dots+y_{p}^{2}-y_{{p+1}}^{2}-\dots-y_{r}^{2}" data-display="true"><code>g(y_{1}\dots y_{n})=y_{1}^{2}+y_{2}^{2}+\dots+y_{p}^{2}-y_{{p+1}}^{2}-\dots-y_{r}^{2}</code></span>
- 上述二次型被称为 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的规范型，其由 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 唯一决定。


### 应用
{: #section-4 }


二次超曲面（Geometry of Quadratic Hypersurface）可以写成
<span class="course-math course-math-display" data-tex="x^TAx=1" data-display="true"><code>x^TAx=1</code></span>
要看出它是一种怎样的矩阵，可以做坐标变换 <span class="course-math" data-tex="x=Qy" data-display="false"><code>x=Qy</code></span>，其中 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是一个正交矩阵。谱定理指出，由于 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是对称矩阵，存在这样的正交矩阵 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>，使得 <span class="course-math" data-tex="Q^TAQ=\Lambda" data-display="false"><code>Q^TAQ=\Lambda</code></span>。
那么原来的曲面等价于
<span class="course-math course-math-display" data-tex="x^TAx=(Qy)^TA(Qy)=y^T(Q^TAQ)y=y^T\Lambda y=\sum\lambda_{i}y_{i}^{2}=1" data-display="true"><code>x^TAx=(Qy)^TA(Qy)=y^T(Q^TAQ)y=y^T\Lambda y=\sum\lambda_{i}y_{i}^{2}=1</code></span>
那么只需要去看 <span class="course-math" data-tex="\lambda_{i}" data-display="false"><code>\lambda_{i}</code></span> 的正负，很容易就可看出来这个曲面是什么形状的。
对于 <span class="course-math" data-tex="n=3" data-display="false"><code>n=3</code></span> 的情况，这就可以用来判定三维空间中的二次曲面了：
<span class="course-math course-math-display" data-tex="x^TAx=\lambda_{1}y_{1}^{2}+\lambda_{2}y_{2}^{2}+\lambda_{3}y_{3}^{2}=1" data-display="true"><code>x^TAx=\lambda_{1}y_{1}^{2}+\lambda_{2}y_{2}^{2}+\lambda_{3}y_{3}^{2}=1</code></span>
- 若特征值全为正，如 <span class="course-math" data-tex="\lambda_{1},\lambda_{2},\lambda_{3}&gt;0" data-display="false"><code>\lambda_{1},\lambda_{2},\lambda_{3}&gt;0</code></span>，则为椭球面（Ellipsoid）。
<span class="course-math course-math-display" data-tex="x^{2}+y^{2}+z^{2}=1" data-display="true"><code>x^{2}+y^{2}+z^{2}=1</code></span>
- 若特征值两正一负，如 <span class="course-math" data-tex="\lambda_{1},\lambda_{2}&gt;0,\lambda_{3}&lt;0" data-display="false"><code>\lambda_{1},\lambda_{2}&gt;0,\lambda_{3}&lt;0</code></span>，则为单叶双曲面（Hyperboloid of One Sheet）。
<span class="course-math course-math-display" data-tex="x^{2}+y^{2}-z^{2}= 1" data-display="true"><code>x^{2}+y^{2}-z^{2}= 1</code></span>
- 若特征值一正两负，如 <span class="course-math" data-tex="\lambda_{1}&gt;0,\lambda_{2},\lambda_{3}&lt;0" data-display="false"><code>\lambda_{1}&gt;0,\lambda_{2},\lambda_{3}&lt;0</code></span>，则为双叶双曲面 （Hyperboloid of Two Sheet）。
<span class="course-math course-math-display" data-tex="x^{2}-y^{2}-z^{2}=1" data-display="true"><code>x^{2}-y^{2}-z^{2}=1</code></span>
- 若特征值全为负，如 <span class="course-math" data-tex="\lambda_{1},\lambda_{2},\lambda_{3}&lt;0" data-display="false"><code>\lambda_{1},\lambda_{2},\lambda_{3}&lt;0</code></span>，则为空集。
退化状态：
- 若特征值两正一零，如 <span class="course-math" data-tex="\lambda_{1},\lambda_{2}&gt;0, \lambda_{3}=0" data-display="false"><code>\lambda_{1},\lambda_{2}&gt;0, \lambda_{3}=0</code></span>，则为椭圆柱面（Elliptic Cylinder）。
<span class="course-math course-math-display" data-tex="x^{2}+y^{2}=1" data-display="true"><code>x^{2}+y^{2}=1</code></span>
- 若特征值一正一负一零，如 <span class="course-math" data-tex="\lambda_{1}&gt;0,\lambda_{2}&lt;0,\lambda_{3}=0" data-display="false"><code>\lambda_{1}&gt;0,\lambda_{2}&lt;0,\lambda_{3}=0</code></span>，则为双曲柱面（Hyperbolic Cylinder）。
<span class="course-math course-math-display" data-tex="x^{2}-y^{2}=1" data-display="true"><code>x^{2}-y^{2}=1</code></span>
- 若特征值两负一零，如 <span class="course-math" data-tex="\lambda_{1},\lambda_{2}&lt;0,\lambda_{3}=0" data-display="false"><code>\lambda_{1},\lambda_{2}&lt;0,\lambda_{3}=0</code></span>，则为空集。
- 若特征值一正两零，如 <span class="course-math" data-tex="\lambda_{1}&gt;0,\lambda_{2},\lambda_{3}=0" data-display="false"><code>\lambda_{1}&gt;0,\lambda_{2},\lambda_{3}=0</code></span>，则为两个平行平面（Two  Parallel Planes）。
<span class="course-math course-math-display" data-tex="x^{2}=1" data-display="true"><code>x^{2}=1</code></span>
- 若特征值一负两零，如 <span class="course-math" data-tex="\lambda_{1}&lt;0,\lambda_{2},\lambda_{3}=0" data-display="false"><code>\lambda_{1}&lt;0,\lambda_{2},\lambda_{3}=0</code></span>，则为空集。
- 若特征值全为零，<span class="course-math" data-tex="\lambda_{1},\lambda_{2},\lambda_{3}=0" data-display="false"><code>\lambda_{1},\lambda_{2},\lambda_{3}=0</code></span>，则为空集。

要求这个正负惯性指数，就可以利用塞维斯特惯性定律，转换为规范型就直接看出来了。
- 直接解特征方程。
- 利用韦达定理判断 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 的正负。
- 换元，配方转换为规范型。
*拉格朗日配方法：若至少一个平方项，那就直接对该平方项进行配方，迭代即可。若没有平方项，则挑一个交叉项 <span class="course-math" data-tex="x_{1}x_{2}" data-display="false"><code>x_{1}x_{2}</code></span>，令 <span class="course-math" data-tex="x_{1}=y_{1}+y_{2},x_{2}=y_{1}-y_{2}" data-display="false"><code>x_{1}=y_{1}+y_{2},x_{2}=y_{1}-y_{2}</code></span>，这就用平方差公式创造出了平方项。*

## 奇异值分解（Singular Value Decomposition, SVD）
{: #section-5 }



任何 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 的矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可以被分解为
<span class="course-math course-math-display" data-tex="A=U\Sigma V^T" data-display="true"><code>A=U\Sigma V^T</code></span>
其中：
- <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 是 <span class="course-math" data-tex="m\times m" data-display="false"><code>m\times m</code></span> 的一个正交矩阵。它是 <span class="course-math" data-tex="AA^T" data-display="false"><code>AA^T</code></span> 的特征向量构成的。
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 是 <span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 的一个正交矩阵。它是 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的特征向量构成的。
- <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 是一个 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 的对角矩阵，它可以写成分块矩阵
<span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;\Sigma_{1} &amp; 0 \\&#10;0  &amp;0 &#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;\Sigma_{1} &amp; 0 \\&#10;0  &amp;0 &#10;\end{bmatrix}</code></span>
- 其中
<span class="course-math course-math-display" data-tex="\Sigma_{1}= \begin{bmatrix}&#10;\sigma_{1} \\&#10; &amp; \ddots \\&#10; &amp;  &amp; \sigma_{r}&#10;\end{bmatrix}" data-display="true"><code>\Sigma_{1}= \begin{bmatrix}&#10;\sigma_{1} \\&#10; &amp; \ddots \\&#10; &amp;  &amp; \sigma_{r}&#10;\end{bmatrix}</code></span>
- 其中 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的秩，这里 <span class="course-math" data-tex="\sigma_{i}" data-display="false"><code>\sigma_{i}</code></span> 称为奇异值（Singular Value）。
**定义 ：** <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的奇异值 <span class="course-math" data-tex="\sigma_{i}=\sqrt{ \lambda_{i} }=\sqrt{ \mu_{i} }" data-display="false"><code>\sigma_{i}=\sqrt{ \lambda_{i} }=\sqrt{ \mu_{i} }</code></span> ，其中 <span class="course-math" data-tex="\lambda_{i},\mu_{i}" data-display="false"><code>\lambda_{i},\mu_{i}</code></span> 是 <span class="course-math" data-tex="AA^T" data-display="false"><code>AA^T</code></span> 和 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的非零特征值（<span class="course-math" data-tex="i=1,2,\dots,\text{rank}(A)" data-display="false"><code>i=1,2,\dots,\text{rank}(A)</code></span>）。

（可以这么定义是因为，<span class="course-math" data-tex="AA^T" data-display="false"><code>AA^T</code></span> 和 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 都是半正定矩阵，特征值都大于零，而且它们的秩都和 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 相同，且它们的非零特征值也相等。验证一下：这里
<span class="course-math course-math-display" data-tex="\begin{align}&#10;A^TA&amp;=(U\Sigma V^T)^TU\Sigma V^T&#10;\\&amp;=V\Sigma^TU^TU\Sigma V^T \\&#10;&amp;=V\Sigma^T\Sigma V^T \\&#10;&amp;=V\begin{bmatrix}&#10;\Sigma_{1}^T\Sigma_{1} &amp; 0 \\&#10;0 &amp; 0&#10;\end{bmatrix}V^T \\&#10;\end{align}" data-display="true"><code>\begin{align}&#10;A^TA&amp;=(U\Sigma V^T)^TU\Sigma V^T&#10;\\&amp;=V\Sigma^TU^TU\Sigma V^T \\&#10;&amp;=V\Sigma^T\Sigma V^T \\&#10;&amp;=V\begin{bmatrix}&#10;\Sigma_{1}^T\Sigma_{1} &amp; 0 \\&#10;0 &amp; 0&#10;\end{bmatrix}V^T \\&#10;\end{align}</code></span>
其中
<span class="course-math course-math-display" data-tex="\Sigma_{1}^T\Sigma_{1}=\begin{bmatrix}&#10;\sigma_{1}^{2} \\&#10; &amp; \ddots  \\&#10; &amp;  &amp;  \sigma_{r}^{2}&#10;\end{bmatrix}" data-display="true"><code>\Sigma_{1}^T\Sigma_{1}=\begin{bmatrix}&#10;\sigma_{1}^{2} \\&#10; &amp; \ddots  \\&#10; &amp;  &amp;  \sigma_{r}^{2}&#10;\end{bmatrix}</code></span>
这里就找到了 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的一个谱分解。那么，<span class="course-math" data-tex="\sigma_{i}^{2}" data-display="false"><code>\sigma_{i}^{2}</code></span> 就是 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的所有非零特征值！
类似的，由于 <span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 和 <span class="course-math" data-tex="BA" data-display="false"><code>BA</code></span> 有相同的非零特征值，那么 <span class="course-math" data-tex="\sigma_{i}^{2}" data-display="false"><code>\sigma_{i}^{2}</code></span> 也是 <span class="course-math" data-tex="AA^T" data-display="false"><code>AA^T</code></span> 的所有非零特征值。
有 <span class="course-math" data-tex="AA^T=U\Sigma \Sigma^TU^T" data-display="false"><code>AA^T=U\Sigma \Sigma^TU^T</code></span>。
）
这里会发现，由于 <span class="course-math" data-tex="AV=U\Sigma" data-display="false"><code>AV=U\Sigma</code></span>，如果对 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>进行分块：
<span class="course-math course-math-display" data-tex="A\begin{bmatrix}&#10;V_{r} &amp; V_{n-r}&#10;\end{bmatrix}=\begin{bmatrix}&#10;U_{r}  &amp; U_{m-r}&#10;\end{bmatrix}\begin{bmatrix}&#10;\Sigma_{r} &amp; 0 \\&#10;0 &amp; 0&#10;\end{bmatrix}" data-display="true"><code>A\begin{bmatrix}&#10;V_{r} &amp; V_{n-r}&#10;\end{bmatrix}=\begin{bmatrix}&#10;U_{r}  &amp; U_{m-r}&#10;\end{bmatrix}\begin{bmatrix}&#10;\Sigma_{r} &amp; 0 \\&#10;0 &amp; 0&#10;\end{bmatrix}</code></span>
也就是 <span class="course-math" data-tex="AV_{r}=U_{r}\Sigma_{r},AV_{n-r}=0" data-display="false"><code>AV_{r}=U_{r}\Sigma_{r},AV_{n-r}=0</code></span>。
那么 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 列就对应 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的行空间，后 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 列就对应 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的零空间。
同理， <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 的前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 列对应 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列空间，后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 列就对应 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的左零空间。

要求一个矩阵的 SVD 分解，不能随便选取 <span class="course-math" data-tex="U,V" data-display="false"><code>U,V</code></span>。
需要选取：
<span class="course-math course-math-display" data-tex="Av_{j}=\sigma_{j}u_{j}, j=1,\dots,r" data-display="true"><code>Av_{j}=\sigma_{j}u_{j}, j=1,\dots,r</code></span>
这个从上面的分块矩阵可以看出来。（存在性证明：
- 若 <span class="course-math" data-tex="v_{j}" data-display="false"><code>v_{j}</code></span> 是 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的一个单位特征向量，对应特征值 <span class="course-math" data-tex="\sigma_{j}^{2}" data-display="false"><code>\sigma_{j}^{2}</code></span>，则 <span class="course-math" data-tex="A^TAv_{j}=\sigma_{j}^{2}v_{j}" data-display="false"><code>A^TAv_{j}=\sigma_{j}^{2}v_{j}</code></span>，进而 <span class="course-math" data-tex="AA^TAv_{j}=\sigma_{j}^{2}Av_{j}" data-display="false"><code>AA^TAv_{j}=\sigma_{j}^{2}Av_{j}</code></span>，也就是 <span class="course-math" data-tex="Av_{j}" data-display="false"><code>Av_{j}</code></span> 是 <span class="course-math" data-tex="AA^T" data-display="false"><code>AA^T</code></span> 的一个特征向量，对应特征值 <span class="course-math" data-tex="\sigma_{j}^{2}" data-display="false"><code>\sigma_{j}^{2}</code></span>。而且
<span class="course-math course-math-display" data-tex="\lVert Av_{j} \rVert^{2}=v_{j}^TA^TAv_{j}=v_{j}^T\sigma_{j}^{2} v_{j}=\sigma_{j}^{2}" data-display="true"><code>\lVert Av_{j} \rVert^{2}=v_{j}^TA^TAv_{j}=v_{j}^T\sigma_{j}^{2} v_{j}=\sigma_{j}^{2}</code></span>
- 那么 <span class="course-math" data-tex="Av_{j} / \sigma_{j}=u_{j}" data-display="false"><code>Av_{j} / \sigma_{j}=u_{j}</code></span> 就是 <span class="course-math" data-tex="AA^T" data-display="false"><code>AA^T</code></span> 的一个单位特征向量，得证。）
那么就应该先求出 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个非零特征值对应的向量和 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 的零空间的向量，来构造 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>，再利用关系 <span class="course-math" data-tex="u_{j}= Av_{j} / \sigma_{j}" data-display="false"><code>u_{j}= Av_{j} / \sigma_{j}</code></span> 来得到前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个构造 <span class="course-math" data-tex="u_{j}" data-display="false"><code>u_{j}</code></span>。剩下的 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个 <span class="course-math" data-tex="u_{j}" data-display="false"><code>u_{j}</code></span> 需要去求 <span class="course-math" data-tex="N(A^T)" data-display="false"><code>N(A^T)</code></span> 然后再做正交化得到。


**定理 ：** 任意可逆方阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 都可以写成
<span class="course-math course-math-display" data-tex="A=Q_{1}SQ_{2}^{-1}" data-display="true"><code>A=Q_{1}SQ_{2}^{-1}</code></span>
其中 <span class="course-math" data-tex="Q_{1},Q_{2}" data-display="false"><code>Q_{1},Q_{2}</code></span> 为正交矩阵，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是一个正定矩阵。
证明：
<span class="course-math course-math-display" data-tex="x^TA^TAx=\lVert Ax \rVert^{2}&gt;0 \forall x\neq 0" data-display="true"><code>x^TA^TAx=\lVert Ax \rVert^{2}&gt;0 \forall x\neq 0</code></span>
所以 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 是正定的实对称矩阵。那么存在谱分解：
<span class="course-math course-math-display" data-tex="Q_{2}^TA^TAQ_{2}=\Lambda" data-display="true"><code>Q_{2}^TA^TAQ_{2}=\Lambda</code></span>
令 <span class="course-math" data-tex="S=\sqrt{ \Lambda }" data-display="false"><code>S=\sqrt{ \Lambda }</code></span>，那么 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是一个正定的对角的可逆矩阵。那么有：
<span class="course-math course-math-display" data-tex="S^{-1}Q_{2}^TQ^TAQ_{2}S^{-1}=I" data-display="true"><code>S^{-1}Q_{2}^TQ^TAQ_{2}S^{-1}=I</code></span>
那么 <span class="course-math" data-tex="AQ_{2}S^{-1}" data-display="false"><code>AQ_{2}S^{-1}</code></span> 就是一个正交矩阵，记为 <span class="course-math" data-tex="Q_{1}" data-display="false"><code>Q_{1}</code></span>。于是有
<span class="course-math course-math-display" data-tex="A=Q_{1}SQ_{2}^{-1}" data-display="true"><code>A=Q_{1}SQ_{2}^{-1}</code></span>


### SVD 的应用
{: #section-6 }


极分解（Polar Decomposition）：任何实方阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可以分解成 <span class="course-math" data-tex="A=QS" data-display="false"><code>A=QS</code></span>，其中 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是正交矩阵，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是对称的半正定的矩阵。
（<span class="course-math" data-tex="A=U\Sigma V^T=(UV^T)(V\Sigma V^T)=QS" data-display="false"><code>A=U\Sigma V^T=(UV^T)(V\Sigma V^T)=QS</code></span>）
类比 <span class="course-math" data-tex="z=re^{i\theta}" data-display="false"><code>z=re^{i\theta}</code></span>。这里 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 类似于  <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>，<span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 类似与 <span class="course-math" data-tex="e^{i\theta}" data-display="false"><code>e^{i\theta}</code></span>。

有效秩（Effective Rank）：用 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 来计算 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的秩，会更稳定（实际计算中数值可能有一些小的偏差，<span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 会把这些偏差平方，而缩小。）

图片压缩（Image Compression）：一个 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 的图像，可以进行 SVD 分解，只需要存储 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个奇异值和奇异向量，共 <span class="course-math" data-tex="r\times(m+n+1)" data-display="false"><code>r\times(m+n+1)</code></span> 个值。图片压缩比：<span class="course-math" data-tex="\frac{m\times n}{r\times(m+n+1)}" data-display="false"><code>\frac{m\times n}{r\times(m+n+1)}</code></span>。
图片降噪（Noice Reduction）：直接丢掉相对来说特别小的奇异值和奇异降噪。

最小二乘（Least Square）的最优解：最小二乘的 Normal Equation <span class="course-math" data-tex="A^TAx=A^Tb" data-display="false"><code>A^TAx=A^Tb</code></span> ，如果 <span class="course-math" data-tex="A^TA" data-display="false"><code>A^TA</code></span> 不可逆，也就是说，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 不是列满秩的，则可能有多个解 <span class="course-math" data-tex="\hat{x}" data-display="false"><code>\hat{x}</code></span>。其中最优解为长度最小的解 <span class="course-math" data-tex="x^{+}" data-display="false"><code>x^{+}</code></span>。
- 记作 <span class="course-math" data-tex="x^{+}=A^+b" data-display="false"><code>x^{+}=A^+b</code></span> 中，<span class="course-math" data-tex="A^+" data-display="false"><code>A^+</code></span> 称为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的伪逆（Pseuodoinverse）。
- 容易验证，<span class="course-math" data-tex="\Sigma^{+}" data-display="false"><code>\Sigma^{+}</code></span> 就是把每一个 <span class="course-math" data-tex="\sigma" data-display="false"><code>\sigma</code></span> 求倒数。
- 一般情况下，由于 <span class="course-math" data-tex="\hat{x}=x_{r}+x_{n}" data-display="false"><code>\hat{x}=x_{r}+x_{n}</code></span>，那么由于零空间和行空间正交，有 <span class="course-math" data-tex="\lVert \hat{x} \rVert^{2}=\lVert x_{r} \rVert^{2}+\lVert x_{n} \rVert ^{2}" data-display="false"><code>\lVert \hat{x} \rVert^{2}=\lVert x_{r} \rVert^{2}+\lVert x_{n} \rVert ^{2}</code></span>，取 <span class="course-math" data-tex="x_{n}=0" data-display="false"><code>x_{n}=0</code></span>，则得到了最优解，**所以最优解是行空间中的。** （可以解 Normal Equation 然后选行空间中的）
- <img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Positive%20Definite%20Matrices%20-%20%E6%AD%A3%E5%AE%9A%E7%9F%A9%E9%98%B5.png' | relative_url }}{% raw %}" alt="Positive Definite Matrices - 正定矩阵" loading="lazy">
- 一般情况下，伪逆有公式
<span class="course-math course-math-display" data-tex="A^{+}=V\Sigma^+ U^T" data-display="true"><code>A^{+}=V\Sigma^+ U^T</code></span>
- 证明：<span class="course-math" data-tex="\lVert Ax-b \rVert=\lVert U\Sigma V^Tx-b \rVert=\lVert \Sigma V^Tx-U^Tb \rVert" data-display="false"><code>\lVert Ax-b \rVert=\lVert U\Sigma V^Tx-b \rVert=\lVert \Sigma V^Tx-U^Tb \rVert</code></span>。
- 令 <span class="course-math" data-tex="y=V^Tx=V^{-1}x" data-display="false"><code>y=V^Tx=V^{-1}x</code></span>。只需最小化 <span class="course-math" data-tex="\lVert \Sigma y-U^Tb \rVert" data-display="false"><code>\lVert \Sigma y-U^Tb \rVert</code></span>。
- <span class="course-math" data-tex="y^+=\Sigma^+U^Tb" data-display="false"><code>y^+=\Sigma^+U^Tb</code></span>，故而 <span class="course-math" data-tex="x^+=V\Sigma^+U^T" data-display="false"><code>x^+=V\Sigma^+U^T</code></span>。
{% endraw %}
