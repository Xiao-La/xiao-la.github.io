---
title: "Determinant - 行列式"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-01-18T18:16:22+08:00"
updated_at: "2026-10-09T17:19:46+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/linear-algebra/determinant/"
course_page: true
doc_type: "note"
description: "线性代数 · Determinant - 行列式"
excerpt: "线性代数 · Determinant - 行列式"
---

{% raw %}

## 行列式的性质与定义
{: #section-1 }


二位和三维上，几何上，行列式是一个有向的面积或体积。

若要定义高维的体积 <span class="course-math" data-tex="\det (A)" data-display="false"><code>\det (A)</code></span>，它需要满足这些特性：
- <span class="course-math" data-tex="\det (I)=1" data-display="false"><code>\det (I)=1</code></span>。
- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有两行相同，则 <span class="course-math" data-tex="\det(A)=0" data-display="false"><code>\det(A)=0</code></span>。
- <span class="course-math" data-tex="\det(A)" data-display="false"><code>\det(A)</code></span> 线性地依赖于每一行：
<span class="course-math course-math-display" data-tex="B=\begin{bmatrix}&#10;\boldsymbol{v}_{1} \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, C=\begin{bmatrix}&#10;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, A=\begin{bmatrix}&#10;c_{1}\boldsymbol{v}_{1}+c_{1}&#x27;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}\implies \det (A)=c_{1}\det(B)+c_{1}&#x27;\det(C)" data-display="true"><code>B=\begin{bmatrix}&#10;\boldsymbol{v}_{1} \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, C=\begin{bmatrix}&#10;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, A=\begin{bmatrix}&#10;c_{1}\boldsymbol{v}_{1}+c_{1}&#x27;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}\implies \det (A)=c_{1}\det(B)+c_{1}&#x27;\det(C)</code></span>


从这些特性出发，可以证明：

- 若将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 交换两行得到 <span class="course-math" data-tex="A&#x27;" data-display="false"><code>A&#x27;</code></span>，则 <span class="course-math" data-tex="\det(A&#x27;)=-\det(A)" data-display="false"><code>\det(A&#x27;)=-\det(A)</code></span>。

- 第三种初等行变换（将某一行的倍数加到另一行）不改变行列式。

- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是三角形矩阵，则有 <span class="course-math" data-tex="\det(A)=\prod_{i=1}^n a_{ii}" data-display="false"><code>\det(A)=\prod_{i=1}^n a_{ii}</code></span>。

> 证明：
> 	若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是对角矩阵，则显然成立。
> 	若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的对角元素都非零，则可以用第三种初等行变换把它变成对角矩阵而不改变行列式。
> 	若有某个对角元素是零，则第三种初等行变换可以使 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 出现零行，于是行列式为零，也等于对角线元素的乘积。

- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 奇异，则 <span class="course-math" data-tex="\det (A)=0" data-display="false"><code>\det (A)=0</code></span>。若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆，则 <span class="course-math" data-tex="\det(A)\neq 0" data-display="false"><code>\det(A)\neq 0</code></span>。

>  证明：
> 	 初等行变换不会改变 <span class="course-math" data-tex="\det(A)" data-display="false"><code>\det(A)</code></span> 是否为零。
> 	 那么只需要看高斯消元得到的上三角矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 即可。
> 	 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 奇异，则 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 对角元素中有 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，故 <span class="course-math" data-tex="\det(A)=0" data-display="false"><code>\det(A)=0</code></span>。
> 	 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆，则 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 对角元素都非 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，则 <span class="course-math" data-tex="\det(A)\neq 0" data-display="false"><code>\det(A)\neq 0</code></span>。

  - <span class="course-math" data-tex="\det(AB)=\det(A)\det(B)" data-display="false"><code>\det(AB)=\det(A)\det(B)</code></span>。特别的，若 <span class="course-math" data-tex="B=A^{-1}" data-display="false"><code>B=A^{-1}</code></span>，则有 <span class="course-math" data-tex="\det(A)\det(A^{-1})=1" data-display="false"><code>\det(A)\det(A^{-1})=1</code></span>。
>  证明：
> 	 若 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 奇异，也就是说 <span class="course-math" data-tex="\det(B)=0" data-display="false"><code>\det(B)=0</code></span>，则 <span class="course-math" data-tex="\operatorname{rank}(AB)\leq\operatorname{rank}(B)&lt;n" data-display="false"><code>\operatorname{rank}(AB)\leq\operatorname{rank}(B)&lt;n</code></span>，故 <span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 也奇异，故 <span class="course-math" data-tex="\det(AB)=0" data-display="false"><code>\det(AB)=0</code></span>，得证。
> 	 若 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 可逆，也就是说 <span class="course-math" data-tex="\det(B)\neq 0" data-display="false"><code>\det(B)\neq 0</code></span>，只需要证明 <span class="course-math" data-tex="\frac{\det(AB)}{\det(B)}=\det(A)" data-display="false"><code>\frac{\det(AB)}{\det(B)}=\det(A)</code></span>。
> 	 构造一个映射 <span class="course-math" data-tex="d: M_{n\times n}\to \mathbb{R}, A \mapsto \frac{\det(AB)}{\det(B)}" data-display="false"><code>d: M_{n\times n}\to \mathbb{R}, A \mapsto \frac{\det(AB)}{\det(B)}</code></span>，那么只需要证明 <span class="course-math" data-tex="d(A)" data-display="false"><code>d(A)</code></span> 和 <span class="course-math" data-tex="\det(A)" data-display="false"><code>\det(A)</code></span> 是同一个映射。
> 	 检验三个特性即可：
> 	 1.  <span class="course-math" data-tex="d(I)=\frac{\det(IB)}{\det(B)}=1" data-display="false"><code>d(I)=\frac{\det(IB)}{\det(B)}=1</code></span>。
> 	 2. 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 两行相同，则 <span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 也有两行相同，则 <span class="course-math" data-tex="d(A)= \frac{\det(AB)}{\det(B)}=0" data-display="false"><code>d(A)= \frac{\det(AB)}{\det(B)}=0</code></span>。
> 	 3.
<span class="course-math course-math-display" data-tex="A_{1}=\begin{bmatrix}&#10;\boldsymbol{v}_{1} \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, A_{2}=\begin{bmatrix}&#10;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, A=\begin{bmatrix}&#10;c_{1}\boldsymbol{v}_{1}+c_{1}&#x27;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}\implies&#10;\begin{aligned}&#10;d(A)&amp;= \frac{\det(AB)}{\det(B)} \\ &amp;=\frac{c_{1}\det(A_{1}B)+c_{1}&#x27;\det(A_{2}B)}{\det(B)} \\ &amp;=c_{1}d(A_{1})+c_{1}&#x27;d(A_{2})&#10;\end{aligned}" data-display="true"><code>A_{1}=\begin{bmatrix}&#10;\boldsymbol{v}_{1} \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, A_{2}=\begin{bmatrix}&#10;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}, A=\begin{bmatrix}&#10;c_{1}\boldsymbol{v}_{1}+c_{1}&#x27;\boldsymbol{v}_{1}&#x27; \\&#10;\boldsymbol{v}_{2} \\&#10;\dots \\&#10;\boldsymbol{v}_{n}&#10;\end{bmatrix}\implies&#10;\begin{aligned}&#10;d(A)&amp;= \frac{\det(AB)}{\det(B)} \\ &amp;=\frac{c_{1}\det(A_{1}B)+c_{1}&#x27;\det(A_{2}B)}{\det(B)} \\ &amp;=c_{1}d(A_{1})+c_{1}&#x27;d(A_{2})&#10;\end{aligned}</code></span>


- <span class="course-math" data-tex="\det (A)=\det(A^{\top})" data-display="false"><code>\det (A)=\det(A^{\top})</code></span>
>  证明：
> 	 <span class="course-math" data-tex="\forall A,\exists P,L,U,s.t. PA=LU" data-display="false"><code>\forall A,\exists P,L,U,s.t. PA=LU</code></span>。
> 	 那么 <span class="course-math" data-tex="\det(P)\det(A)=\det(L)\det(U)" data-display="false"><code>\det(P)\det(A)=\det(L)\det(U)</code></span>。
> 	 另外， <span class="course-math" data-tex="(PA)^{\top}=(LU)^{\top}" data-display="false"><code>(PA)^{\top}=(LU)^{\top}</code></span>，也就是 <span class="course-math" data-tex="A^{\top}P^{\top}=U^{\top}L^{\top}" data-display="false"><code>A^{\top}P^{\top}=U^{\top}L^{\top}</code></span>。
> 	 那么 <span class="course-math" data-tex="\det(P^{\top})\det(A^{\top})=\det(U^{\top})\det(L^{\top})" data-display="false"><code>\det(P^{\top})\det(A^{\top})=\det(U^{\top})\det(L^{\top})</code></span>。
> 	 由于 <span class="course-math" data-tex="L,U" data-display="false"><code>L,U</code></span> 都是三角形矩阵，它们的行列式就是对角线元素之乘积。故它们做转置行列式不变。
> 	 另外，由于 <span class="course-math" data-tex="P^{\top}P=I" data-display="false"><code>P^{\top}P=I</code></span>，有 <span class="course-math" data-tex="\det(P)\det(P^{\top})=1" data-display="false"><code>\det(P)\det(P^{\top})=1</code></span>。另外，由于交换两行给行列式添符号，有 <span class="course-math" data-tex="\det(P)=\pm\det(I)=\pm 1" data-display="false"><code>\det(P)=\pm\det(I)=\pm 1</code></span>。结合两者得到 <span class="course-math" data-tex="\det(P)=\det(P^{\top})" data-display="false"><code>\det(P)=\det(P^{\top})</code></span>。
> 	 所以 <span class="course-math" data-tex="\det(A)=\det(A^{\top})" data-display="false"><code>\det(A)=\det(A^{\top})</code></span>。

- 满秩时 <span class="course-math" data-tex="\det(A)=\pm(\text{product of all }n\text{ pivots})" data-display="false"><code>\det(A)=\pm(\text{product of all }n\text{ pivots})</code></span>；秩不足时 <span class="course-math" data-tex="\det(A)=0" data-display="false"><code>\det(A)=0</code></span>。（用 <span class="course-math" data-tex="LU" data-display="false"><code>LU</code></span> 分解证明）

行列式的几何意义：假设 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 分解为 <span class="course-math" data-tex="A=QR" data-display="false"><code>A=QR</code></span>。
那么 <span class="course-math" data-tex="\det(A)=\det(Q)\det(R)" data-display="false"><code>\det(A)=\det(Q)\det(R)</code></span>。这里 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是一个正交矩阵，故 <span class="course-math" data-tex="\det(Q^{\top}Q)=1" data-display="false"><code>\det(Q^{\top}Q)=1</code></span>，则 <span class="course-math" data-tex="\det(Q)=\pm 1" data-display="false"><code>\det(Q)=\pm 1</code></span>。
那么 <span class="course-math" data-tex="\det(A)=\pm \det(R)=\pm \prod \boldsymbol{q}_{i}^{\top}\boldsymbol{a}_{i}" data-display="false"><code>\det(A)=\pm \det(R)=\pm \prod \boldsymbol{q}_{i}^{\top}\boldsymbol{a}_{i}</code></span>。这相当于 <span class="course-math" data-tex="\text{底}\times\text{高}\times\text{高}\times\dots" data-display="false"><code>\text{底}\times\text{高}\times\text{高}\times\dots</code></span>，是一个高维体积。

*注意一般 <span class="course-math" data-tex="\det(A+B)\neq \det(A)+\det(B)" data-display="false"><code>\det(A+B)\neq \det(A)+\det(B)</code></span>，例如 <span class="course-math" data-tex="\det(2A)=2^n\det(A)" data-display="false"><code>\det(2A)=2^n\det(A)</code></span>*


## 行列式的求法
{: #section-2 }



#### 求二阶矩阵的行列式
{: #section-3 }

<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}&#10;a &amp; b \\&#10;c &amp; d&#10;\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}&#10;a &amp; b \\&#10;c &amp; d&#10;\end{bmatrix}</code></span>
 的行列式为 <span class="course-math" data-tex="\det(A)=ad-bc" data-display="false"><code>\det(A)=ad-bc</code></span>。
 证明：
 <span class="course-math course-math-display" data-tex="\left\lvert  \begin{matrix} a &amp; b \\&#10;c &amp; d  \end{matrix} \right\rvert  = \left\lvert  \begin{matrix} a &amp; 0 \\&#10;c &amp; d \end{matrix} \right\rvert  + \left\lvert  \begin{matrix} 0 &amp; b \\&#10;c &amp; d \end{matrix} \right\rvert  =  ad \left\lvert  \begin{matrix} 1 &amp; 0 \\&#10;0 &amp; 1 \end{matrix} \right\rvert  +bc \left\lvert  \begin{matrix} 0 &amp; 1 \\&#10;1 &amp; 0 \end{matrix} \right\rvert  = ad-bc" data-display="true"><code>\left\lvert  \begin{matrix} a &amp; b \\&#10;c &amp; d  \end{matrix} \right\rvert  = \left\lvert  \begin{matrix} a &amp; 0 \\&#10;c &amp; d \end{matrix} \right\rvert  + \left\lvert  \begin{matrix} 0 &amp; b \\&#10;c &amp; d \end{matrix} \right\rvert  =  ad \left\lvert  \begin{matrix} 1 &amp; 0 \\&#10;0 &amp; 1 \end{matrix} \right\rvert  +bc \left\lvert  \begin{matrix} 0 &amp; 1 \\&#10;1 &amp; 0 \end{matrix} \right\rvert  = ad-bc</code></span>


#### 求三阶矩阵的行列式
{: #section-4 }

<span class="course-math course-math-display" data-tex="A=\begin{bmatrix}&#10;a_{11} &amp; a_{12} &amp; a_{13} \\&#10;a_{21} &amp; a_{22} &amp; a_{23} \\&#10;a_{31} &amp; a_{32} &amp; a_{33}&#10;\end{bmatrix}" data-display="true"><code>A=\begin{bmatrix}&#10;a_{11} &amp; a_{12} &amp; a_{13} \\&#10;a_{21} &amp; a_{22} &amp; a_{23} \\&#10;a_{31} &amp; a_{32} &amp; a_{33}&#10;\end{bmatrix}</code></span>
先定义矩阵中 <span class="course-math" data-tex="a_{ij}" data-display="false"><code>a_{ij}</code></span> 的余子式（Minor）<span class="course-math" data-tex="M_{ij}" data-display="false"><code>M_{ij}</code></span> 为删掉第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行和第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列后剩下项所组成矩阵的行列式。
那么三阶矩阵的行列式：
<span class="course-math course-math-display" data-tex="\det(A)=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}" data-display="true"><code>\det(A)=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}</code></span>
证明：
把 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 用行列式的线性特性拆成 <span class="course-math" data-tex="3^3" data-display="false"><code>3^3</code></span> 个行列式之和，每个形如

<span class="course-math course-math-display" data-tex="a_{1i}a_{2j}a_{3k}\left\lvert  \begin{matrix} e_{i}  \\ e_{j} \\ e_{k}\end{matrix} \right\rvert" data-display="true"><code>a_{1i}a_{2j}a_{3k}\left\lvert  \begin{matrix} e_{i}  \\ e_{j} \\ e_{k}\end{matrix} \right\rvert</code></span>

。这里，如果有两行相同，那么行列式为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，所以只剩下那些每行都不一样的，共有 <span class="course-math" data-tex="3! = 6" data-display="false"><code>3! = 6</code></span> 种。那么
<span class="course-math course-math-display" data-tex="\det(A)=\sum_{(\alpha_{1},\alpha_{2},\alpha_{3})} a_{1\alpha_{1}}a_{2\alpha_{2}}a_{3\alpha_{3}}\det(P)" data-display="true"><code>\det(A)=\sum_{(\alpha_{1},\alpha_{2},\alpha_{3})} a_{1\alpha_{1}}a_{2\alpha_{2}}a_{3\alpha_{3}}\det(P)</code></span>


#### 求一般矩阵的行列式
{: #section-5 }


将上面的情况推广到 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 阶：考虑 <span class="course-math" data-tex="(1,2,\dots,n)" data-display="false"><code>(1,2,\dots,n)</code></span> 的所有排列 <span class="course-math" data-tex="p=(\alpha_{1},\alpha_{2},\dots,\alpha_{n})" data-display="false"><code>p=(\alpha_{1},\alpha_{2},\dots,\alpha_{n})</code></span>，则有大公式（Big Formula）：
<span class="course-math course-math-display" data-tex="\det(A)=\sum_{(\alpha_{1},\alpha_{2},\dots,\alpha_{n})} a_{1\alpha_{1}}a_{2\alpha_{2}}\dots a_{n\alpha _{n}}\det(P)" data-display="true"><code>\det(A)=\sum_{(\alpha_{1},\alpha_{2},\dots,\alpha_{n})} a_{1\alpha_{1}}a_{2\alpha_{2}}\dots a_{n\alpha _{n}}\det(P)</code></span>
这里 <span class="course-math" data-tex="\det(P)=\pm 1" data-display="false"><code>\det(P)=\pm 1</code></span> 是该排列对应的置换矩阵的行列式，也是该排列的符号。该排列 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 的 **逆序数（Inversion Number）** 是集合 <span class="course-math" data-tex="\{ (i,j)\mid i&lt;j,\alpha_{i}&gt;\alpha_{j} \}" data-display="false"><code>\{ (i,j)\mid i&lt;j,\alpha_{i}&gt;\alpha_{j} \}</code></span> 的基数，记作 <span class="course-math" data-tex="\text{inv}(p)" data-display="false"><code>\text{inv}(p)</code></span>，则有
<span class="course-math course-math-display" data-tex="\det(P)=(-1)^{\text{inv}(p)}" data-display="true"><code>\det(P)=(-1)^{\text{inv}(p)}</code></span>
（这是因为，逆序数对应该置换矩阵要交换多少次行可以交换回恒等矩阵）
当然这个计算的复杂度是阶乘的，实际计算还是用 <span class="course-math" data-tex="PA=LU" data-display="false"><code>PA=LU</code></span> 分解然后求主元之积。

另外，如果我们固定 <span class="course-math" data-tex="\alpha_{1}=1" data-display="false"><code>\alpha_{1}=1</code></span>，得到大公式的一部分 <span class="course-math" data-tex="a_{11} \sum_{(\alpha_{2},\alpha_{3},\dots,\alpha_{n})}a_{2\alpha_{2}}\dots a_{n\alpha _{n}}\det(P)=a_{11}M_{11}" data-display="false"><code>a_{11} \sum_{(\alpha_{2},\alpha_{3},\dots,\alpha_{n})}a_{2\alpha_{2}}\dots a_{n\alpha _{n}}\det(P)=a_{11}M_{11}</code></span>，这里 <span class="course-math" data-tex="M_{ij}" data-display="false"><code>M_{ij}</code></span> 表示余子式（Minor），再定义 <span class="course-math" data-tex="C_{ij}=(-1)^{i+j}M_{ij}" data-display="false"><code>C_{ij}=(-1)^{i+j}M_{ij}</code></span> 为代数余子式（Cofactor）。继续固定 <span class="course-math" data-tex="\alpha_{1}=2,3,\dots" data-display="false"><code>\alpha_{1}=2,3,\dots</code></span>，可得到：
<span class="course-math course-math-display" data-tex="\det(A)=\sum_{k=1}^n(-1)^{k-1}a_{1k}M_{1k}= \sum_{i=1}^n a_{1i}C_{1i}" data-display="true"><code>\det(A)=\sum_{k=1}^n(-1)^{k-1}a_{1k}M_{1k}= \sum_{i=1}^n a_{1i}C_{1i}</code></span>
定义行列式对第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行的拉普拉斯展开（Laplace Expansion）：
<span class="course-math course-math-display" data-tex="\det(A)= \sum_{k=1}^n a_{ik}C_{ik}" data-display="true"><code>\det(A)= \sum_{k=1}^n a_{ik}C_{ik}</code></span>
由于 <span class="course-math" data-tex="\det(A)=\det(A^{\top})" data-display="false"><code>\det(A)=\det(A^{\top})</code></span> ，也可以对第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列展开：
<span class="course-math course-math-display" data-tex="\det(A)= \sum_{k=1}^n a_{kj}C_{kj}" data-display="true"><code>\det(A)= \sum_{k=1}^n a_{kj}C_{kj}</code></span>


#### 用行列式求矩阵的逆
{: #section-6 }


构建代数余子式构成的矩阵 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span>，其中 <span class="course-math" data-tex="C_{ij}=(-1)^{i+j}M_{ij}" data-display="false"><code>C_{ij}=(-1)^{i+j}M_{ij}</code></span>。
<span class="course-math course-math-display" data-tex="A^{-1}= \frac{C^{\top}}{\det(A)}" data-display="true"><code>A^{-1}= \frac{C^{\top}}{\det(A)}</code></span>
**证明：**
要证明
<span class="course-math course-math-display" data-tex="A \frac{C^{\top}}{\det(A)}=I" data-display="true"><code>A \frac{C^{\top}}{\det(A)}=I</code></span>
只需证明
<span class="course-math course-math-display" data-tex="AC^{\top}=\det(A)I" data-display="true"><code>AC^{\top}=\det(A)I</code></span>
考虑 <span class="course-math" data-tex="AC^{\top}" data-display="false"><code>AC^{\top}</code></span> 的 <span class="course-math" data-tex="(i,i)" data-display="false"><code>(i,i)</code></span> 分量，这正好是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的行列式对第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行展开：
<span class="course-math course-math-display" data-tex="(AC^{\top})_{i i}=\sum_{k=1}^n a_{i k}C_{i k}=\det(A)" data-display="true"><code>(AC^{\top})_{i i}=\sum_{k=1}^n a_{i k}C_{i k}=\det(A)</code></span>
考虑 <span class="course-math" data-tex="AC^{\top}" data-display="false"><code>AC^{\top}</code></span> 的 <span class="course-math" data-tex="(i,j)" data-display="false"><code>(i,j)</code></span> 分量（<span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>）：
<span class="course-math course-math-display" data-tex="(AC^{\top})_{ij}=\sum_{k=1}^na_{i k}C_{j k}" data-display="true"><code>(AC^{\top})_{ij}=\sum_{k=1}^na_{i k}C_{j k}</code></span>
我们构造一个新的矩阵 <span class="course-math" data-tex="A&#x27;" data-display="false"><code>A&#x27;</code></span>，使得它的第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行被替换为第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行，那么 <span class="course-math" data-tex="\det(A&#x27;)=0" data-display="false"><code>\det(A&#x27;)=0</code></span>，但是又会发现上面这个 <span class="course-math" data-tex="(AC^{\top})_{ij}" data-display="false"><code>(AC^{\top})_{ij}</code></span> 恰好是 <span class="course-math" data-tex="A&#x27;" data-display="false"><code>A&#x27;</code></span> 的行列式对第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行展开。故而有 <span class="course-math" data-tex="(AC^{\top})_{ij}=0" data-display="false"><code>(AC^{\top})_{ij}=0</code></span>。
这就证明了原命题。


#### 用行列式解方程
{: #section-7 }


对方程 <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span>，有 <span class="course-math" data-tex="\boldsymbol{x}=A^{-1}\boldsymbol{b}= \frac{C^{\top}}{\det(A)}\boldsymbol{b}" data-display="false"><code>\boldsymbol{x}=A^{-1}\boldsymbol{b}= \frac{C^{\top}}{\det(A)}\boldsymbol{b}</code></span>。
<span class="course-math" data-tex="C^{\top}\boldsymbol{b}" data-display="false"><code>C^{\top}\boldsymbol{b}</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 个分量为：
<span class="course-math course-math-display" data-tex="C_{1i}b_{1}+C_{2i}b_{2}+\dots+C_{ni}b_{n}" data-display="true"><code>C_{1i}b_{1}+C_{2i}b_{2}+\dots+C_{ni}b_{n}</code></span>
这可以看成把 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列替换成 <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> （设为 <span class="course-math" data-tex="B_{i}" data-display="false"><code>B_{i}</code></span>）然后将行列式按第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 列展开。
这就是 **克莱姆法则（Cramer's Rule）：**
<span class="course-math course-math-display" data-tex="x_{j}= \frac{\det(B_{j})}{\det(A)}" data-display="true"><code>x_{j}= \frac{\det(B_{j})}{\det(A)}</code></span>

### 用行列式求主元
{: #section-8 }


设第 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个主元为 <span class="course-math" data-tex="d_{k}" data-display="false"><code>d_{k}</code></span>，有
<span class="course-math course-math-display" data-tex="d_{k}= \frac{\det(A_{k})}{\det(A_{k-1})}" data-display="true"><code>d_{k}= \frac{\det(A_{k})}{\det(A_{k-1})}</code></span>
其中 <span class="course-math" data-tex="A_{k}" data-display="false"><code>A_{k}</code></span> 为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 左上角的 <span class="course-math" data-tex="k\times k" data-display="false"><code>k\times k</code></span> 子矩阵，假设无需换行即可消元，且所有顺序主子式 <span class="course-math" data-tex="\det(A_k)\neq 0" data-display="false"><code>\det(A_k)\neq 0</code></span>，约定 <span class="course-math" data-tex="\det(A_0)=1" data-display="false"><code>\det(A_0)=1</code></span>。
**证明：** 假设 <span class="course-math" data-tex="A=LDU" data-display="false"><code>A=LDU</code></span>，主元就是 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 中的对角线元素。那么用分块矩阵的思想有
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;A=LDU&amp;=\begin{bmatrix}&#10;L_{k}  &amp; 0 \\&#10;* &amp; *&#10;\end{bmatrix} \begin{bmatrix}&#10;D_{k} &amp; 0 \\&#10;0 &amp; *&#10;\end{bmatrix}&#10;\begin{bmatrix}&#10;U_{k} &amp; * \\&#10;0 &amp; *&#10;\end{bmatrix} \\&#10;&amp;=\begin{bmatrix}&#10;L_{k}D_{k}U_{k} &amp; * \\&#10;* &amp; *&#10;\end{bmatrix} =\begin{bmatrix}&#10;A_{k} &amp; * \\&#10;* &amp; *&#10;\end{bmatrix}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;A=LDU&amp;=\begin{bmatrix}&#10;L_{k}  &amp; 0 \\&#10;* &amp; *&#10;\end{bmatrix} \begin{bmatrix}&#10;D_{k} &amp; 0 \\&#10;0 &amp; *&#10;\end{bmatrix}&#10;\begin{bmatrix}&#10;U_{k} &amp; * \\&#10;0 &amp; *&#10;\end{bmatrix} \\&#10;&amp;=\begin{bmatrix}&#10;L_{k}D_{k}U_{k} &amp; * \\&#10;* &amp; *&#10;\end{bmatrix} =\begin{bmatrix}&#10;A_{k} &amp; * \\&#10;* &amp; *&#10;\end{bmatrix}&#10;\end{aligned}</code></span>
所以有 <span class="course-math" data-tex="A_{k}=L_{k}D_{k}U_{k}" data-display="false"><code>A_{k}=L_{k}D_{k}U_{k}</code></span>。
所以  <span class="course-math" data-tex="\det(A_{k})=\det(L_{k})\det(D_{k})\det(U_{k})=d_{1}d_{2}\dots d_{k}" data-display="false"><code>\det(A_{k})=\det(L_{k})\det(D_{k})\det(U_{k})=d_{1}d_{2}\dots d_{k}</code></span>。
那么 <span class="course-math" data-tex="d_{k}= \frac{d_{1}d_{2}\dots d_{k}}{d_{1}d_{2}\dots d_{k-1}}=\frac{\det(A_{k})}{\det(A_{k-1})}" data-display="false"><code>d_{k}= \frac{d_{1}d_{2}\dots d_{k}}{d_{1}d_{2}\dots d_{k-1}}=\frac{\det(A_{k})}{\det(A_{k-1})}</code></span> 。
{% endraw %}
