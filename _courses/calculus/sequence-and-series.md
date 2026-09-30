---
title: "Sequence and Series - 数列与级数"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "下"
status: "completed"
reference: false
layout: "course"
permalink: "/courses/calculus/sequence-and-series/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Sequence and Series - 数列与级数"
excerpt: "高等数学（上）/（下） · Sequence and Series - 数列与级数"
---

{% raw %}

## 概念与定义
{: #section-1 }

**数列（Sequence）** 收敛（Converge）到 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 记作：
<span class="course-math course-math-display" data-tex="\lim_{ n \to \infty } a_{n}=L" data-display="true"><code>\lim_{ n \to \infty } a_{n}=L</code></span>
也称 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 为数列 <span class="course-math" data-tex="a_{n}" data-display="false"><code>a_{n}</code></span> 的极限。严谨定义为：
 <span class="course-math course-math-display" data-tex="\forall \varepsilon &gt;0, \exists N(\varepsilon)&gt;0,s.t. &#124;a_{n}-L&#124;&lt;\varepsilon,\forall n&gt;N(\varepsilon)" data-display="true"><code>\forall \varepsilon &gt;0, \exists N(\varepsilon)&gt;0,s.t. &#124;a_{n}-L&#124;&lt;\varepsilon,\forall n&gt;N(\varepsilon)</code></span>

数列**有界（Bound）** 的定义为数列同时有上界（Upper Bound）和下界（Lower Bound）。
- 上界的定义： <span class="course-math" data-tex="a_{n}\leq M, \forall n \in \mathbb{N}^+" data-display="false"><code>a_{n}\leq M, \forall n \in \mathbb{N}^+</code></span>，则 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 为上界。最小的 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 称为最小上界（Least Lower Bound）。


数列**单调（Monotonic）** 的定义为数列不降（Nondecreasing）或不升（Nonincreasing）。

为了使用求函数极限的方法求数列极限，有如下定理：若 <span class="course-math" data-tex="a_{n}=f(n),\forall n\in \mathbb{N}^+" data-display="false"><code>a_{n}=f(n),\forall n\in \mathbb{N}^+</code></span> 且 <span class="course-math" data-tex="\lim_{ x \to \infty }f(x)=L" data-display="false"><code>\lim_{ x \to \infty }f(x)=L</code></span>，那么有 <span class="course-math" data-tex="\lim_{ n \to \infty }a_{n}=\lim_{ x \to \infty }f(x)=L" data-display="false"><code>\lim_{ n \to \infty }a_{n}=\lim_{ x \to \infty }f(x)=L</code></span> 。

常见数列极限：
- <span class="course-math" data-tex="\lim_{ n \to \infty } \frac {{\ln n}} {n}=0" data-display="false"><code>\lim_{ n \to \infty } \frac {{\ln n}} {n}=0</code></span>。
- <span class="course-math" data-tex="\lim_{ n \to \infty} n^{1/n}=1" data-display="false"><code>\lim_{ n \to \infty} n^{1/n}=1</code></span>。
- <span class="course-math" data-tex="\lim_{ n \to \infty }x^{1/n}=1" data-display="false"><code>\lim_{ n \to \infty }x^{1/n}=1</code></span>。
- <span class="course-math" data-tex="\lim_{ n \to \infty }x^{n}=0(&#124;x&#124;&lt;1)" data-display="false"><code>\lim_{ n \to \infty }x^{n}=0(&#124;x&#124;&lt;1)</code></span>。
- <span class="course-math" data-tex="\lim_{ n \to \infty }\left( 1+\frac{x}{n} \right)^n=e^x" data-display="false"><code>\lim_{ n \to \infty }\left( 1+\frac{x}{n} \right)^n=e^x</code></span>。
- <span class="course-math" data-tex="\lim_{ n \to \infty } \frac{x^n}{n!}=0" data-display="false"><code>\lim_{ n \to \infty } \frac{x^n}{n!}=0</code></span>。

**无穷级数（Infinite Series）** 的定义为：给定数列 <span class="course-math" data-tex="\{a_{n}\}" data-display="false"><code>\{a_{n}\}</code></span>，那么 <span class="course-math" data-tex="a_{1}+a_{2}+ \dots +a_{n}+ \dots =\sum^{\infty}_{n=1}a_{n}" data-display="false"><code>a_{1}+a_{2}+ \dots +a_{n}+ \dots =\sum^{\infty}_{n=1}a_{n}</code></span> 称为无穷级数。

**部分和（Partial sum）** 的定义为：给定数列 <span class="course-math" data-tex="\{a_{n}\}" data-display="false"><code>\{a_{n}\}</code></span>，那么定义 <span class="course-math" data-tex="s_{n}=\sum^{n}_{k=1}a_{k}" data-display="false"><code>s_{n}=\sum^{n}_{k=1}a_{k}</code></span> 为部分和数列（Sequence of partial sums）<span class="course-math" data-tex="\{s_{n}\}" data-display="false"><code>\{s_{n}\}</code></span>。

**级数收敛**的定义：若部分和收敛（<span class="course-math" data-tex="s_{n}\to L" data-display="false"><code>s_{n}\to L</code></span>），则称级数 <span class="course-math" data-tex="\sum^{\infty}_{n=1}a_{n}" data-display="false"><code>\sum^{\infty}_{n=1}a_{n}</code></span> 收敛。

余项（Remainder）：
<span class="course-math course-math-display" data-tex="R_{n}:=S-s_{n}" data-display="true"><code>R_{n}:=S-s_{n}</code></span>
其中 <span class="course-math" data-tex="S=\sum a_{n}, a_{k}=f(k)&gt;0" data-display="false"><code>S=\sum a_{n}, a_{k}=f(k)&gt;0</code></span> 且 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 连续且递减。

**级数绝对收敛（Absolutely convergent）：** <span class="course-math" data-tex="\sum &#124;a_{n}&#124;\text{收敛}" data-display="false"><code>\sum &#124;a_{n}&#124;\text{收敛}</code></span>。**这是强于 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 收敛的。**

**级数条件收敛（Conditionally convergent）：** 级数收敛但不绝对收敛。

**幂级数（Power Series）**：<span class="course-math" data-tex="\sum^{\infty}_{n=0}c_{n}(x-a)^n" data-display="false"><code>\sum^{\infty}_{n=0}c_{n}(x-a)^n</code></span> 为以 <span class="course-math" data-tex="x=a" data-display="false"><code>x=a</code></span> 为中心的幂级数。

## 定理
{: #section-2 }

### 数列极限
{: #section-3 }

数列极限的性质与函数极限类似：四则运算与求极限可以交换位置。

同样也适用**夹逼定理（The Sandwich Theorem）**：若 <span class="course-math" data-tex="\lim_{ n \to \infty }a_{n}=\lim_{ n \to \infty }c_{n}=L, c_{n}\leq b_{n}\leq a_{n}" data-display="false"><code>\lim_{ n \to \infty }a_{n}=\lim_{ n \to \infty }c_{n}=L, c_{n}\leq b_{n}\leq a_{n}</code></span>，则有 <span class="course-math" data-tex="\lim_{ n \to \infty }b_{n}=L" data-display="false"><code>\lim_{ n \to \infty }b_{n}=L</code></span>。

**数列连续函数定理（The Continuous Function Theorem for Sequences）**：若 <span class="course-math" data-tex="\lim_{ n \to \infty }a_{n}=L" data-display="false"><code>\lim_{ n \to \infty }a_{n}=L</code></span> 且 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 在 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 处连续，那么有 <span class="course-math" data-tex="\lim_{ n \to \infty }f(a_{n})=f(L)" data-display="false"><code>\lim_{ n \to \infty }f(a_{n})=f(L)</code></span>。也就是说，复合一个连续函数和求极限可以交换位置。
- 推论：若数列 <span class="course-math" data-tex="\{a_{n}\}" data-display="false"><code>\{a_{n}\}</code></span> 存在极限 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 且有递推式 <span class="course-math" data-tex="a_{n+1}=f(a_{n})" data-display="false"><code>a_{n+1}=f(a_{n})</code></span>，则 <span class="course-math" data-tex="\lim_{ n \to \infty }a_{n+1}=\lim_{ n \to \infty }f(a_{n})\implies L=f(L)" data-display="false"><code>\lim_{ n \to \infty }a_{n+1}=\lim_{ n \to \infty }f(a_{n})\implies L=f(L)</code></span>，也就是用不动点法求数列极限。

### 判断敛散性
{: #section-4 }

常见结果：
- 单调有界定理（The Monotonic Sequence Theorem）：单调且有界的数列一定收敛。
- 对公比为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 的等比级数（Geometric Series） <span class="course-math" data-tex="a+ar+ar^{2}+\dots+ar^{n-1}+\dots" data-display="false"><code>a+ar+ar^{2}+\dots+ar^{n-1}+\dots</code></span>：
  - 若 <span class="course-math" data-tex="&#124;r&#124;&lt;1" data-display="false"><code>&#124;r&#124;&lt;1</code></span> ，则级数收敛到 <span class="course-math" data-tex="\frac{a}{1-r}" data-display="false"><code>\frac{a}{1-r}</code></span>。
  - 否则，级数发散。
- 若级数 <span class="course-math" data-tex="\sum^{\infty}_{n=1} a_{n}" data-display="false"><code>\sum^{\infty}_{n=1} a_{n}</code></span> 收敛，则 <span class="course-math" data-tex="a_{n}\to 0" data-display="false"><code>a_{n}\to 0</code></span>。反过来不一定成立（反例：<span class="course-math" data-tex="a_{n}=\frac{1}{n}" data-display="false"><code>a_{n}=\frac{1}{n}</code></span>）。
- 发散判别法（The Test for Divergence）：若 <span class="course-math" data-tex="\lim_{ n \to \infty }a_{n}" data-display="false"><code>\lim_{ n \to \infty }a_{n}</code></span> 不存在或不为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，则级数 <span class="course-math" data-tex="\sum^{\infty}_{n=1} a_{n}" data-display="false"><code>\sum^{\infty}_{n=1} a_{n}</code></span> 发散。

线性性质：
- 若级数 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 和 <span class="course-math" data-tex="\sum b_{n}" data-display="false"><code>\sum b_{n}</code></span> 都收敛，则它们的线性运算可以和求和符号交换位置：
<span class="course-math course-math-display" data-tex="\sum(a_{n}+kb_{n})=\sum a_{n}+k\sum b_{n}" data-display="true"><code>\sum(a_{n}+kb_{n})=\sum a_{n}+k\sum b_{n}</code></span>
- 若级数 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 发散，则 <span class="course-math" data-tex="\sum ka_{n}" data-display="false"><code>\sum ka_{n}</code></span> 也发散。
- 若级数 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 发散，级数 <span class="course-math" data-tex="\sum b_{n}" data-display="false"><code>\sum b_{n}</code></span> 收敛，则级数 <span class="course-math" data-tex="\sum (a_{n}+b_{n})" data-display="false"><code>\sum (a_{n}+b_{n})</code></span> 发散。

单调有界定理的推论（Corollary）：若 <span class="course-math" data-tex="a_{n}\geq 0" data-display="false"><code>a_{n}\geq 0</code></span>，则级数 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 收敛当且仅当 <span class="course-math" data-tex="s_{n}" data-display="false"><code>s_{n}</code></span> 有上界。

**积分判别法（The Integral Test）：** 若 <span class="course-math" data-tex="a_{n}=f(n)&gt;0" data-display="false"><code>a_{n}=f(n)&gt;0</code></span>，且 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="x\geq N" data-display="false"><code>x\geq N</code></span> 时连续且递减，则有：
<span class="course-math course-math-display" data-tex="\sum a_{n} \text{ 收敛} \Longleftrightarrow \int _{N}^{\infty}f(x)dx \text{ 收敛}" data-display="true"><code>\sum a_{n} \text{ 收敛} \Longleftrightarrow \int _{N}^{\infty}f(x)dx \text{ 收敛}</code></span>
推论： <span class="course-math" data-tex="p-\text{series}" data-display="false"><code>p-\text{series}</code></span> <span class="course-math" data-tex="\sum_{n=1}^{\infty} \frac{1}{n^{p}}" data-display="false"><code>\sum_{n=1}^{\infty} \frac{1}{n^{p}}</code></span> 当 <span class="course-math" data-tex="p&gt;1" data-display="false"><code>p&gt;1</code></span> 时收敛，当 <span class="course-math" data-tex="p\leq 1" data-display="false"><code>p\leq 1</code></span> 时发散。这个和反常积分判断敛散性是一样的。
推论：<span class="course-math" data-tex="\sum\frac{1}{n\ln n}" data-display="false"><code>\sum\frac{1}{n\ln n}</code></span> 是发散的。

在积分判别法中，余项的上下界：
<span class="course-math course-math-display" data-tex="\int^{\infty}_{n+1} f(x)dx\leq R_{n}\leq \int^{\infty}_{n} f(x)dx" data-display="true"><code>\int^{\infty}_{n+1} f(x)dx\leq R_{n}\leq \int^{\infty}_{n} f(x)dx</code></span>

**比较判别法（The Comparison Test）**：若级数 <span class="course-math" data-tex="\sum a_{n}, \sum b_{n}, \sum c_{n}" data-display="false"><code>\sum a_{n}, \sum b_{n}, \sum c_{n}</code></span> 都的各项都非负，且有：
<span class="course-math course-math-display" data-tex="\exists N, s.t. a_{n}\leq b_{n}\leq c_{n} \forall n&gt;N" data-display="true"><code>\exists N, s.t. a_{n}\leq b_{n}\leq c_{n} \forall n&gt;N</code></span>
则：
- 若 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 发散，则 <span class="course-math" data-tex="\sum b_{n}" data-display="false"><code>\sum b_{n}</code></span> 发散。
- 若 <span class="course-math" data-tex="\sum c_{n}" data-display="false"><code>\sum c_{n}</code></span> 收敛，则 <span class="course-math" data-tex="\sum b_{n}" data-display="false"><code>\sum b_{n}</code></span> 收敛。

**极限比较判别法（Limit Comparison test）**：若 <span class="course-math" data-tex="a_{n}&gt;0" data-display="false"><code>a_{n}&gt;0</code></span> 且 <span class="course-math" data-tex="b_{n}&gt;0" data-display="false"><code>b_{n}&gt;0</code></span> 对所有 <span class="course-math" data-tex="n\geq N" data-display="false"><code>n\geq N</code></span>：
- 若 <span class="course-math" data-tex="\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}=c&gt;0" data-display="false"><code>\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}=c&gt;0</code></span>，则 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 和 <span class="course-math" data-tex="\sum b_{n}" data-display="false"><code>\sum b_{n}</code></span> 同敛散。
- 若 <span class="course-math" data-tex="\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}=0" data-display="false"><code>\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}=0</code></span>，则 <span class="course-math" data-tex="\sum b_{n} \text{收敛}\implies \sum a_{n}\text{收敛}" data-display="false"><code>\sum b_{n} \text{收敛}\implies \sum a_{n}\text{收敛}</code></span>。
- 若 <span class="course-math" data-tex="\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}=\infty" data-display="false"><code>\lim_{ n \to \infty } \frac{a_{n}}{b_{n}}=\infty</code></span>，则 <span class="course-math" data-tex="\sum b_{n}\text{发散}\implies \sum a_{n}\text{发散}" data-display="false"><code>\sum b_{n}\text{发散}\implies \sum a_{n}\text{发散}</code></span> 。

**绝对收敛判别法（The Absolute Convergent Test）：** 若 <span class="course-math" data-tex="\sum&#124;a_{n}&#124;" data-display="false"><code>\sum&#124;a_{n}&#124;</code></span> 收敛，则 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 收敛。

**比值判别法（The Ratio Test）：** 若对 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span>，有 <span class="course-math" data-tex="\lim_{ n \to \infty } \left&#124;\frac{a_{n+1}}{a_{n}}\right&#124;=\rho" data-display="false"><code>\lim_{ n \to \infty } \left&#124;\frac{a_{n+1}}{a_{n}}\right&#124;=\rho</code></span>：
- 若 <span class="course-math" data-tex="\rho &gt;1" data-display="false"><code>\rho &gt;1</code></span>，则 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 发散。
- 若 <span class="course-math" data-tex="\rho &lt;1" data-display="false"><code>\rho &lt;1</code></span>，则 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 绝对收敛。
（<span class="course-math" data-tex="\rho=1" data-display="false"><code>\rho=1</code></span> 情形不定）

**根值判别法（The Root Test）：** 若对 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span>，有 <span class="course-math" data-tex="\lim_{ n \to \infty }\sqrt[n]{ &#124;a_{n}&#124; }=\rho" data-display="false"><code>\lim_{ n \to \infty }\sqrt[n]{ &#124;a_{n}&#124; }=\rho</code></span>：
- 若 <span class="course-math" data-tex="\rho &gt;1" data-display="false"><code>\rho &gt;1</code></span>，则 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 发散。
- 若 <span class="course-math" data-tex="\rho&lt;1" data-display="false"><code>\rho&lt;1</code></span>，则 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 绝对收敛。
（<span class="course-math" data-tex="\rho=1" data-display="false"><code>\rho=1</code></span> 情形不定）

**交错级数判别法（The Alternating Series Test）：**  <span class="course-math" data-tex="\sum (-1)^{n+1}u_{n}" data-display="false"><code>\sum (-1)^{n+1}u_{n}</code></span> 收敛当：
- <span class="course-math" data-tex="u_{n}&gt;0" data-display="false"><code>u_{n}&gt;0</code></span>。
- <span class="course-math" data-tex="u_{n}\geq u_{n+1}" data-display="false"><code>u_{n}\geq u_{n+1}</code></span>。
- <span class="course-math" data-tex="\lim_{ n \to \infty }u_{n}=0" data-display="false"><code>\lim_{ n \to \infty }u_{n}=0</code></span>

**交错级数估计定理（The Alternating Series Estimation Theorem）：** 若 <span class="course-math" data-tex="\sum a_{n}=\sum (-1)^{n+1}u_{n}=L" data-display="false"><code>\sum a_{n}=\sum (-1)^{n+1}u_{n}=L</code></span>，则：
-  <span class="course-math" data-tex="&#124;s_{n}-L&#124; &lt; u_{n+1}" data-display="false"><code>&#124;s_{n}-L&#124; &lt; u_{n+1}</code></span>。
- <span class="course-math" data-tex="\text{sgn}(L-s_{n})=\text{sgn}(a_{n+1})=(-1)^{n}" data-display="false"><code>\text{sgn}(L-s_{n})=\text{sgn}(a_{n+1})=(-1)^{n}</code></span>。

**绝对收敛数列重排定理（The Rearrangement Theorem for Absolutely Convergent Series）：** 若 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 绝对收敛，且 <span class="course-math" data-tex="b_{n}" data-display="false"><code>b_{n}</code></span> 是 <span class="course-math" data-tex="a_{n}" data-display="false"><code>a_{n}</code></span> 的任意重排，则 <span class="course-math" data-tex="\sum a_{n}=\sum b_{n}" data-display="false"><code>\sum a_{n}=\sum b_{n}</code></span>。
>  若 <span class="course-math" data-tex="\sum a_{n}" data-display="false"><code>\sum a_{n}</code></span> 条件收敛，则它重排之后极限与原来不一定相同。


### 幂级数
{: #section-5 }

**幂级数收敛定理（The Convergence Theorem for Power Series）：** 对级数 <span class="course-math" data-tex="\sum c_{n}x^n" data-display="false"><code>\sum c_{n}x^n</code></span>：
- 若它在 <span class="course-math" data-tex="x=c" data-display="false"><code>x=c</code></span> 处收敛，则它在 <span class="course-math" data-tex="&#124;x&#124;&lt;&#124;c&#124;" data-display="false"><code>&#124;x&#124;&lt;&#124;c&#124;</code></span> 绝对收敛。
- 若它在 <span class="course-math" data-tex="x=d" data-display="false"><code>x=d</code></span> 处发散，则它在 <span class="course-math" data-tex="&#124;x&#124;&gt;&#124;d&#124;" data-display="false"><code>&#124;x&#124;&gt;&#124;d&#124;</code></span> 发散。
>  推论：对幂级数 <span class="course-math" data-tex="\sum c_{n}x^n" data-display="false"><code>\sum c_{n}x^n</code></span>，它必属于以下三种：
>  - <span class="course-math" data-tex="\exists R&gt;0, s.t. \sum a_{n}" data-display="false"><code>\exists R&gt;0, s.t. \sum a_{n}</code></span> 在 <span class="course-math" data-tex="&#124;x-a&#124;&lt;R" data-display="false"><code>&#124;x-a&#124;&lt;R</code></span> 绝对收敛，在 <span class="course-math" data-tex="&#124;x-a&#124;&gt; R" data-display="false"><code>&#124;x-a&#124;&gt; R</code></span> 发散。
>  - <span class="course-math" data-tex="R=0" data-display="false"><code>R=0</code></span>。
>  - <span class="course-math" data-tex="R=\infty" data-display="false"><code>R=\infty</code></span>。
>  其中 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 称为幂级数的收敛半径（Radius of Convergence），收敛的区间称为收敛区间（Interval of Convergence）。


**幂级数乘法定理（The Series Multiplication Theorem for Power Series）:** 若 <span class="course-math" data-tex="\sum a_{n}x^{n}" data-display="false"><code>\sum a_{n}x^{n}</code></span> 和 <span class="course-math" data-tex="\sum b_{n}x^n" data-display="false"><code>\sum b_{n}x^n</code></span> 都对 <span class="course-math" data-tex="&#124;x&#124;&lt;R" data-display="false"><code>&#124;x&#124;&lt;R</code></span> 绝对收敛，则
<span class="course-math course-math-display" data-tex="\left( \sum a_{n}x^{n} \right)\left( \sum b_{n}x^{n} \right)=\sum c_{n}x^{n}" data-display="true"><code>\left( \sum a_{n}x^{n} \right)\left( \sum b_{n}x^{n} \right)=\sum c_{n}x^{n}</code></span>
其中
<span class="course-math course-math-display" data-tex="c_{n}=\sum^{n}_{k=0}a_{k}b_{n-k}" data-display="true"><code>c_{n}=\sum^{n}_{k=0}a_{k}b_{n-k}</code></span>

**定理：** 若 <span class="course-math" data-tex="\sum a_{n}x^{n}" data-display="false"><code>\sum a_{n}x^{n}</code></span> 对 <span class="course-math" data-tex="&#124;x&#124;&lt;R" data-display="false"><code>&#124;x&#124;&lt;R</code></span> 绝对收敛，则 <span class="course-math" data-tex="\sum a_{n} (f(x))^n" data-display="false"><code>\sum a_{n} (f(x))^n</code></span> 对 <span class="course-math" data-tex="&#124;f(x)&#124;&lt;R" data-display="false"><code>&#124;f(x)&#124;&lt;R</code></span> 绝对收敛。

**逐项微分定理（The Term-by-term Differentiation Theorem）：** 若 <span class="course-math" data-tex="f(x)=\sum c_{n}(x-a)^n" data-display="false"><code>f(x)=\sum c_{n}(x-a)^n</code></span> 对 <span class="course-math" data-tex="&#124;x-a&#124;&lt;R" data-display="false"><code>&#124;x-a&#124;&lt;R</code></span> 收敛，则有
<span class="course-math course-math-display" data-tex="f&#x27;(x)=\sum n c_{n}(x-a)^{n-1}" data-display="true"><code>f&#x27;(x)=\sum n c_{n}(x-a)^{n-1}</code></span>

**逐项积分定理（The Term-by-term Differentiation Theorem）：** 若 <span class="course-math" data-tex="f(x)=\sum c_{n}(x-a)^n" data-display="false"><code>f(x)=\sum c_{n}(x-a)^n</code></span> 对 <span class="course-math" data-tex="&#124;x-a&#124;&lt;R" data-display="false"><code>&#124;x-a&#124;&lt;R</code></span> 收敛，则有
<span class="course-math course-math-display" data-tex="\int f(x)\,dx= \sum c_{n} \frac{(x-a)^{n+1}}{n+1}+C" data-display="true"><code>\int f(x)\,dx= \sum c_{n} \frac{(x-a)^{n+1}}{n+1}+C</code></span>
#### 求幂级数
{: #section-6 }

<a href="{% endraw %}{{ '/courses/calculus/limit-and-derivative/' | relative_url }}{% raw %}">Limit and Derivative - 极限与导数</a>

利用核心公式：
<span class="course-math course-math-display" data-tex="\frac{1}{1-x}=\sum_{n=0}^{\infty} x^n" data-display="true"><code>\frac{1}{1-x}=\sum_{n=0}^{\infty} x^n</code></span>
<span class="course-math course-math-display" data-tex="-\ln(1-x)=\sum_{n=1}^{\infty} \frac{x^n}{n}" data-display="true"><code>-\ln(1-x)=\sum_{n=1}^{\infty} \frac{x^n}{n}</code></span>
这两个式子是求导的关系。

例：
- 求 <span class="course-math" data-tex="\sum \frac{1}{(n+1)2^n}" data-display="false"><code>\sum \frac{1}{(n+1)2^n}</code></span>。
   - 令 <span class="course-math" data-tex="f(x)= \sum \frac{1}{n+1} x^n" data-display="false"><code>f(x)= \sum \frac{1}{n+1} x^n</code></span>。故 <span class="course-math" data-tex="xf(x)=\sum \frac{x^{n+1}}{n+1}" data-display="false"><code>xf(x)=\sum \frac{x^{n+1}}{n+1}</code></span>，于是 <span class="course-math" data-tex="(xf(x))&#x27;=\sum x^n=\frac{1}{1-x}-1" data-display="false"><code>(xf(x))&#x27;=\sum x^n=\frac{1}{1-x}-1</code></span>，积分回去就有 <span class="course-math" data-tex="xf(x)=-\ln(1-x)-x" data-display="false"><code>xf(x)=-\ln(1-x)-x</code></span>。代入 <span class="course-math" data-tex="x=\frac{1}{2}" data-display="false"><code>x=\frac{1}{2}</code></span> 得 <span class="course-math" data-tex="\sum \frac{1}{(n+1)2^n}=f\left( \frac{1}{2}\right)=2\ln(2)-1" data-display="false"><code>\sum \frac{1}{(n+1)2^n}=f\left( \frac{1}{2}\right)=2\ln(2)-1</code></span>。
   - 也可以直接配凑出 <span class="course-math" data-tex="-\ln(1-x)" data-display="false"><code>-\ln(1-x)</code></span> 的展开。

-  求 <span class="course-math" data-tex="\sum \frac{n}{2^n}" data-display="false"><code>\sum \frac{n}{2^n}</code></span> 。
  - 令 <span class="course-math" data-tex="f(x)=\sum nx^n" data-display="false"><code>f(x)=\sum nx^n</code></span>。故 <span class="course-math" data-tex="\frac{f(x)}{x}= \sum nx^{n-1}" data-display="false"><code>\frac{f(x)}{x}= \sum nx^{n-1}</code></span>，于是 <span class="course-math" data-tex="\int \frac{f(x)}{x}dx=\sum x^n= \frac{1}{1-x}-1" data-display="false"><code>\int \frac{f(x)}{x}dx=\sum x^n= \frac{1}{1-x}-1</code></span>。于是有 <span class="course-math" data-tex="\frac{f(x)}{x}=\frac{1}{(1-x)^{2}}" data-display="false"><code>\frac{f(x)}{x}=\frac{1}{(1-x)^{2}}</code></span> 。代入  <span class="course-math" data-tex="x=\frac{1}{2}" data-display="false"><code>x=\frac{1}{2}</code></span> 得 <span class="course-math" data-tex="\sum \frac{n}{2^n}=2" data-display="false"><code>\sum \frac{n}{2^n}=2</code></span>。
{% endraw %}
