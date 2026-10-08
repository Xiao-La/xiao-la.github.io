---
title: "Matrices and System of Linear Equations -  矩阵与线性方程组"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2025-12-10T17:22:32+08:00"
updated_at: "2026-10-08T21:08:23+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/linear-algebra/matrices-and-system-of-linear-equations/"
course_page: true
doc_type: "note"
description: "线性代数 · Matrices and System of Linear Equations -  矩阵与线性方程组"
excerpt: "线性代数 · Matrices and System of Linear Equations -  矩阵与线性方程组"
---

{% raw %}

## 矩阵基本概念
{: #section-1 }


<span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 行 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 列的矩阵可记成 <span class="course-math" data-tex="\mathbf{A}=[a_{ij}]_{m\times n}" data-display="false"><code>\mathbf{A}=[a_{ij}]_{m\times n}</code></span>

矩阵的线性运算（加减，数乘）和向量是一样的，直接对对应的分量（Entry）运算。

单位矩阵/恒等矩阵（Identity Matrix）：记作 <span class="course-math" data-tex="\mathbf{I}_{n}" data-display="false"><code>\mathbf{I}_{n}</code></span> ，其中 <span class="course-math" data-tex="a_{i,i}=1" data-display="false"><code>a_{i,i}=1</code></span>，其他为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的方矩阵。

## 矩阵乘法 (Matrix Multiplication)
{: #section-2 }


<span class="course-math" data-tex="n\times m" data-display="false"><code>n\times m</code></span> 和 <span class="course-math" data-tex="m \times p" data-display="false"><code>m \times p</code></span> 的矩阵可以相乘得到一个 <span class="course-math" data-tex="n\times p" data-display="false"><code>n\times p</code></span> 的矩阵，矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 和矩阵 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 相乘，得到矩阵 <span class="course-math" data-tex="\mathbf{C}" data-display="false"><code>\mathbf{C}</code></span> 中的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列的数为
<span class="course-math course-math-display" data-tex="c_{ij}=\sum_{k}a_{ik}b_{kj}" data-display="true"><code>c_{ij}=\sum_{k}a_{ik}b_{kj}</code></span>
有几种视角来解释矩阵乘法；
1. 新矩阵中，第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列的数由 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行与 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列做向量点乘得到。
2. 新矩阵的列由 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列组合而来。
   >  <span class="course-math course-math-display" data-tex="\begin{bmatrix}&#10;a&amp;b \\&#10;c&amp;d \\&#10;e&amp;f&#10;\end{bmatrix}&#10;\begin{bmatrix}&#10;x&amp;y \\&#10;z&amp;l&#10;\end{bmatrix}&#10;\text{的第1列为：}x\begin{bmatrix}&#10;a \\&#10;c \\&#10;e&#10;\end{bmatrix}&#10;+z \begin{bmatrix}&#10;b \\&#10;d \\&#10;f&#10;\end{bmatrix}" data-display="true"><code>\begin{bmatrix}&#10;a&amp;b \\&#10;c&amp;d \\&#10;e&amp;f&#10;\end{bmatrix}&#10;\begin{bmatrix}&#10;x&amp;y \\&#10;z&amp;l&#10;\end{bmatrix}&#10;\text{的第1列为：}x\begin{bmatrix}&#10;a \\&#10;c \\&#10;e&#10;\end{bmatrix}&#10;+z \begin{bmatrix}&#10;b \\&#10;d \\&#10;f&#10;\end{bmatrix}</code></span>
3. 新矩阵的行由 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的行组合而来。
4. 新矩阵由 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列（<span class="course-math" data-tex="n\times 1" data-display="false"><code>n\times 1</code></span>）和 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的行（<span class="course-math" data-tex="1 \times p" data-display="false"><code>1 \times p</code></span> ）相乘（得到 <span class="course-math" data-tex="n\times p" data-display="false"><code>n\times p</code></span> 矩阵）再相加而来。

矩阵乘法满足：
1. 结合律（Associative Law）：<span class="course-math" data-tex="(\mathbf{A}\mathbf{B})\mathbf{C}=\mathbf{A}(\mathbf{B}\mathbf{C})" data-display="false"><code>(\mathbf{A}\mathbf{B})\mathbf{C}=\mathbf{A}(\mathbf{B}\mathbf{C})</code></span>。
2. 分配律（Distributive Law）：<span class="course-math" data-tex="(\mathbf{A}+\mathbf{B})\mathbf{C}=\mathbf{A}\mathbf{C}+\mathbf{B}\mathbf{C}" data-display="false"><code>(\mathbf{A}+\mathbf{B})\mathbf{C}=\mathbf{A}\mathbf{C}+\mathbf{B}\mathbf{C}</code></span>。
但不满足交换律（Commutative Law）：<span class="course-math" data-tex="\mathbf{A}\mathbf{B}" data-display="false"><code>\mathbf{A}\mathbf{B}</code></span> 与 <span class="course-math" data-tex="\mathbf{B}\mathbf{A}" data-display="false"><code>\mathbf{B}\mathbf{A}</code></span> 不一定相等。

方矩阵的幂： <span class="course-math" data-tex="\mathbf{A}^0=\mathbf{I}_{n}, \mathbf{A}^k=\mathbf{A}^{k-1}\mathbf{A}" data-display="false"><code>\mathbf{A}^0=\mathbf{I}_{n}, \mathbf{A}^k=\mathbf{A}^{k-1}\mathbf{A}</code></span>。
一个矩阵与单位矩阵相乘会得到它自己，与零矩阵相乘会得到零矩阵。


### 基于乘法的特殊变换矩阵
{: #section-3 }


置换矩阵（Permutation Matrix）：每行每列都恰有一个 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>、其余元素均为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的方阵。用它左乘另一个矩阵，可以交换矩阵的某些行。

**初等矩阵：**
- 可交换两行的置换矩阵。
- 将 <span class="course-math" data-tex="\mathbf{I}_{n}" data-display="false"><code>\mathbf{I}_{n}</code></span> 中的 <span class="course-math" data-tex="(i,j)" data-display="false"><code>(i,j)</code></span> 位置（<span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>）替换为 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span> 得到的矩阵。用它左乘另一个矩阵，可以把该矩阵的第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行乘以 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span> 加到第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行上去。
- 将单位矩阵中第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行的 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 替换为 <span class="course-math" data-tex="k\neq 0" data-display="false"><code>k\neq 0</code></span> 得到的矩阵。用它左乘以另一个矩阵，可以把该矩阵的第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行乘以 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span>。
>  【左行右列】以上如果换成右乘这些变换矩阵，会变成初等列变换。



## 线性方程组（Linear System）
{: #section-4 }


用矩阵可以表示线性方程组：<span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span>，其中 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为线性方程组的系数矩阵（Coefficient Matrix）。 

将线性方程组的系数矩阵右侧添加常数列，就构成了增广矩阵（Augmented Matrix），记作 <span class="course-math" data-tex="[\mathbf{A}&#124;\mathbf{b}]" data-display="false"><code>[\mathbf{A}&#124;\mathbf{b}]</code></span>。


### 行观点和列观点
{: #section-5 }


若线性方程组至少有一组解，则称其为相容的（Consistent），反之则为不相容的（Inconsistent）。
- 行观点（Row Picture）：每个方程表示一个平面。线性方程组相容，当且仅当所有平面有非空交。
- 列观点（Column Picture）：方程组表示了向量的线性组合。线性方程组相容，当且仅当常数列表示的向量落在系数列表示的向量张成的空间。

### 线性方程组的奇异性
{: #section-6 }


奇异（Singular）：没有解或无穷多组解。
非奇异 （Nonsingular）：有且仅有一组解。
从而可以定义矩阵的奇异性： <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 是非奇异矩阵当且仅当 <span class="course-math" data-tex="\forall \mathbf{b},\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\forall \mathbf{b},\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 非奇异。

## 高斯消元与 LU 分解
{: #section-7 }



### 高斯消元法
{: #section-8 }


保持线性方程组的解不变（Equivalent System）的线性变换叫做初等变换（Elementary Operations）。
交换两个方程（<span class="course-math" data-tex="E_{i} \leftrightarrow E_{j}" data-display="false"><code>E_{i} \leftrightarrow E_{j}</code></span>），将某个方程乘一个非零常数（<span class="course-math" data-tex="E_{i} \gets kE_{i}" data-display="false"><code>E_{i} \gets kE_{i}</code></span>），以及把一个方程的倍数加到另一个方程上（<span class="course-math" data-tex="E_{i}\gets E_{i}+ kE_{j}" data-display="false"><code>E_{i}\gets E_{i}+ kE_{j}</code></span>），都属于初等变换。
对矩阵的行进行类似的变换，叫做初等行变换（Elementary Row Operations）。

那么高斯消元（Gaussian Elimination）的步骤：
1. 对增广矩阵进行初等行变换为行阶梯形（Row Echelon Form）；
2. 回代（Back Substitution）。

>  每一行中第一个非零的元素称为主元（Pivots）。


### LU 分解 （LU factorization）
{: #section-9 }


假设矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 进行高斯消元之后得到上三角矩阵（Upper triangular matrix） <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span>，则它可以分解为：
<span class="course-math course-math-display" data-tex="\mathbf{A}=\mathbf{L}\mathbf{U}" data-display="true"><code>\mathbf{A}=\mathbf{L}\mathbf{U}</code></span>
其中 <span class="course-math" data-tex="\mathbf{L}" data-display="false"><code>\mathbf{L}</code></span> 是下三角矩阵（Lower triangle matrix），对角元素为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。高斯消元的乘子（Multiplier）记录在对角线（Diagonal）的下方。
- <span class="course-math" data-tex="l_{ij}" data-display="false"><code>l_{ij}</code></span> 表示高斯消元中的步骤：<span class="course-math" data-tex="E_{i} \leftarrow E_{i}-l_{ij}E_{j}" data-display="false"><code>E_{i} \leftarrow E_{i}-l_{ij}E_{j}</code></span>。
<span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 是上三角矩阵，对角元素为主元。

>  若发现高斯消元中需要进行交换两行的操作，则引入 <span class="course-math" data-tex="\mathbf{A}&#x27;=\mathbf{P}\mathbf{A}" data-display="false"><code>\mathbf{A}&#x27;=\mathbf{P}\mathbf{A}</code></span>，然后再对 <span class="course-math" data-tex="\mathbf{A}&#x27;" data-display="false"><code>\mathbf{A}&#x27;</code></span> 进行高斯消元。一般的，有：
>  <span class="course-math course-math-display" data-tex="\mathbf{P}\mathbf{A}=\mathbf{L}\mathbf{U}" data-display="true"><code>\mathbf{P}\mathbf{A}=\mathbf{L}\mathbf{U}</code></span>

若已知 LU 分解，则可以把方程 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 转换为：
<span class="course-math course-math-display" data-tex="\begin{cases}&#10; \mathbf{U}\mathbf{x}=\mathbf{c} \\&#10;\mathbf{Lc}=\mathbf{b}&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10; \mathbf{U}\mathbf{x}=\mathbf{c} \\&#10;\mathbf{Lc}=\mathbf{b}&#10;\end{cases}</code></span>
这两个方程分别为下三角和上三角方程组，可以用前代与回代求解。

>  LU 分解的唯一性：若 <span class="course-math" data-tex="\mathbf A" data-display="false"><code>\mathbf A</code></span> 可逆，且 <span class="course-math" data-tex="\mathbf{A}=\mathbf{L}_{1}\mathbf{U}_{1}=\mathbf{L}_{2}\mathbf{U}_{2}" data-display="false"><code>\mathbf{A}=\mathbf{L}_{1}\mathbf{U}_{1}=\mathbf{L}_{2}\mathbf{U}_{2}</code></span>，且 <span class="course-math" data-tex="\mathbf{L}_{1}, \mathbf{L}_{2}" data-display="false"><code>\mathbf{L}_{1}, \mathbf{L}_{2}</code></span> 的对角元素都是 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，则 <span class="course-math" data-tex="\mathbf{L}_{1}=\mathbf{L}_{2}, \mathbf{U}_{1}=\mathbf{U}_{2}" data-display="false"><code>\mathbf{L}_{1}=\mathbf{L}_{2}, \mathbf{U}_{1}=\mathbf{U}_{2}</code></span>。

>  LDU 分解：使用对角矩阵 <span class="course-math" data-tex="\mathbf{D}" data-display="false"><code>\mathbf{D}</code></span> （对角元素为主元）使得 <span class="course-math" data-tex="\mathbf{L}, \mathbf{U}" data-display="false"><code>\mathbf{L}, \mathbf{U}</code></span> 的对角元素都是 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。





### 解一般的方程组 Ax=b
{: #section-10 }


>  行最简形（Reduced row echelon form）：主元都是 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，且每个主元位置所在列都只有这个主元不为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。

一般的，对于 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{0}</code></span>，可以用初等行变换得到行最简形 <span class="course-math" data-tex="\mathbf{R}\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{R}\mathbf{x}=\mathbf{0}</code></span>。
把变量分为主元变量和自由变量。
将自由变量其中一个赋值为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，其他赋值为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，会得到（ # 自由变量 ）个特解，它们的线性组合即为所有解 （也就是零空间 <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span>）。

对一般的方程组 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}, \mathbf{b} \neq \mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}, \mathbf{b} \neq \mathbf{0}</code></span>，其中 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵：
- <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}\to \mathbf{U}\mathbf{x}=\mathbf{c}\to \mathbf{R}\mathbf{x}=\mathbf{d}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}\to \mathbf{U}\mathbf{x}=\mathbf{c}\to \mathbf{R}\mathbf{x}=\mathbf{d}</code></span>，有 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个主元行和 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个主元列，则 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的秩（Rank）为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>。<span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 和 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行都是 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。故当且仅当 <span class="course-math" data-tex="\mathbf{c}" data-display="false"><code>\mathbf{c}</code></span> 和 <span class="course-math" data-tex="\mathbf{d}" data-display="false"><code>\mathbf{d}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个分量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 时，原方程有解。
  >  也就是说，原方程有解有 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个条件。
- 完整的解集为： <span class="course-math" data-tex="\mathbf{x}=\mathbf{x}_{p}+\mathbf{x}_{n}" data-display="false"><code>\mathbf{x}=\mathbf{x}_{p}+\mathbf{x}_{n}</code></span>，其中 <span class="course-math" data-tex="\mathbf{x}_{p}" data-display="false"><code>\mathbf{x}_{p}</code></span> 为使得所有自由变量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 的特解，<span class="course-math" data-tex="\mathbf{x}_{n}\in N(\mathbf{A})" data-display="false"><code>\mathbf{x}_{n}\in N(\mathbf{A})</code></span>（也就是解 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{0}</code></span> 时将自由变量其中一个赋值为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，其他赋值为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，得到的 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解的线性组合）。
  >  也就是说， <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> 有 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解。
{% endraw %}
