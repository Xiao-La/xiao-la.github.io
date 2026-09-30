---
title: "Limit and Derivative - 极限与导数"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-10-26T18:15:02+08:00"
updated_at: "2026-03-26T18:28:11+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/calculus/limit-and-derivative/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Limit and Derivative - 极限与导数"
excerpt: "高等数学（上）/（下） · Limit and Derivative - 极限与导数"
---

{% raw %}


## 概念与定义
{: #section-1 }


函数连续（Continuous）的定义： <span class="course-math" data-tex="\lim_{ x \to c }f(x)=f(c)" data-display="false"><code>\lim_{ x \to c }f(x)=f(c)</code></span>

导数（Derivative）的定义：<span class="course-math" data-tex="\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}" data-display="false"><code>\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}</code></span>

关键点（Critical Points）：导数为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 或导数未定义的点。

函数增（Increase）和减（Decrease）：<span class="course-math" data-tex="f&#x27;(x)&gt;0" data-display="false"><code>f&#x27;(x)&gt;0</code></span> 或 <span class="course-math" data-tex="f&#x27;(x)&lt;0" data-display="false"><code>f&#x27;(x)&lt;0</code></span>。

Concave Up 和 Concave Down：<span class="course-math" data-tex="f&#x27;&#x27;(x)&gt;0" data-display="false"><code>f&#x27;&#x27;(x)&gt;0</code></span> 或 <span class="course-math" data-tex="f&#x27;&#x27;(x)&lt;0" data-display="false"><code>f&#x27;&#x27;(x)&lt;0</code></span>。

拐点（Inflection Point）：左右两边 <span class="course-math" data-tex="f&#x27;&#x27;(x)" data-display="false"><code>f&#x27;&#x27;(x)</code></span> 符号不同（注意不要求 <span class="course-math" data-tex="f&#x27;&#x27;(x)" data-display="false"><code>f&#x27;&#x27;(x)</code></span> 存在）。

一对一函数（One-to-one Function）：<span class="course-math" data-tex="f(x_{1})=f(x_{2})\implies x_{1}=x_{2}" data-display="false"><code>f(x_{1})=f(x_{2})\implies x_{1}=x_{2}</code></span>（一个充分条件是 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 严格单调） 

反函数（Inverse Function）：对一对一函数（One-to-one Function）来说，存在反函数 <span class="course-math" data-tex="y=f^{-1}(x)" data-display="false"><code>y=f^{-1}(x)</code></span>，使得 <span class="course-math" data-tex="f(y)=x" data-display="false"><code>f(y)=x</code></span>。 

小 o 记号（little-oh Notation）：<span class="course-math" data-tex="f=o(g)" data-display="false"><code>f=o(g)</code></span>（“<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> is little-oh of <span class="course-math" data-tex="g" data-display="false"><code>g</code></span>”），当  <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的阶比 <span class="course-math" data-tex="g" data-display="false"><code>g</code></span> 的阶更小，即 <span class="course-math" data-tex="\lim\limits_{x\to\infty}\frac{f(x)}{g(x)}=0" data-display="false"><code>\lim\limits_{x\to\infty}\frac{f(x)}{g(x)}=0</code></span>

大 O 记号（big-oh Notation）： <span class="course-math" data-tex="f=O(g)" data-display="false"><code>f=O(g)</code></span>（“<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> is big-oh of <span class="course-math" data-tex="g" data-display="false"><code>g</code></span>”），当的阶小于或等于 <span class="course-math" data-tex="g" data-display="false"><code>g</code></span>  的阶，即 <span class="course-math" data-tex="\lim\limits_{x\to\infty}\frac{f(x)}{g(x)}\le M" data-display="false"><code>\lim\limits_{x\to\infty}\frac{f(x)}{g(x)}\le M</code></span>


## 定理
{: #section-2 }


- **夹逼定理（The Sandwich Theorem）**：
  - 适用条件：存在 <span class="course-math" data-tex="a\in\mathbb{R}" data-display="false"><code>a\in\mathbb{R}</code></span>，在 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的某去心邻域内有
    <span class="course-math course-math-display" data-tex="f(x)\le g(x)\le h(x)," data-display="true"><code>f(x)\le g(x)\le h(x),</code></span>
    且
    <span class="course-math course-math-display" data-tex="\lim_{x\to a} f(x)=\lim_{x\to a} h(x)=L." data-display="true"><code>\lim_{x\to a} f(x)=\lim_{x\to a} h(x)=L.</code></span>
  - 结论：
    <span class="course-math course-math-display" data-tex="\lim_{x\to a} g(x)=L." data-display="true"><code>\lim_{x\to a} g(x)=L.</code></span>
- **介值定理（Intermediate Value Theorem, IVT）：**
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在闭区间 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续。
  - 结论：对任意 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 介于 <span class="course-math" data-tex="f(a)" data-display="false"><code>f(a)</code></span> 与 <span class="course-math" data-tex="f(b)" data-display="false"><code>f(b)</code></span> 之间，存在 <span class="course-math" data-tex="c\in[a,b]" data-display="false"><code>c\in[a,b]</code></span>（当 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 严格介于两者间时可取 <span class="course-math" data-tex="c\in(a,b)" data-display="false"><code>c\in(a,b)</code></span>）使得 <span class="course-math" data-tex="f(c)=y" data-display="false"><code>f(c)=y</code></span>。

- **极值定理（Extreme Value Theorem, EVT）：**
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在闭区间 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续。
  - 结论：存在 <span class="course-math" data-tex="x_{\min},x_{\max}\in[a,b]" data-display="false"><code>x_{\min},x_{\max}\in[a,b]</code></span>，使得
    <span class="course-math course-math-display" data-tex="f(x_{\min})=\min_{x\in[a,b]} f(x),\quad&#10;    f(x_{\max})=\max_{x\in[a,b]} f(x)." data-display="true"><code>f(x_{\min})=\min_{x\in[a,b]} f(x),\quad&#10;    f(x_{\max})=\max_{x\in[a,b]} f(x).</code></span>

- **罗尔定理（Rolle's Theorem）：**
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续、在 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 内可导，且 <span class="course-math" data-tex="f(a)=f(b)" data-display="false"><code>f(a)=f(b)</code></span>。
  - 结论：存在 <span class="course-math" data-tex="c\in(a,b)" data-display="false"><code>c\in(a,b)</code></span> 使 <span class="course-math" data-tex="f&#x27;(c)=0" data-display="false"><code>f&#x27;(c)=0</code></span>。
  - 常用来证明等式。

- **拉格朗日中值定理（The Mean Value Theorem, Lagrange MVT）：**
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续、在 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 内可导。
  - 结论：存在 <span class="course-math" data-tex="c\in(a,b)" data-display="false"><code>c\in(a,b)</code></span> 使
    <span class="course-math course-math-display" data-tex="f&#x27;(c)=\frac{f(b)-f(a)}{b-a}." data-display="true"><code>f&#x27;(c)=\frac{f(b)-f(a)}{b-a}.</code></span>
  - 常用来证明不等式。

- **柯西中值定理（Cauchy Mean Value Theorem, CMVT）：**
  - 适用条件：<span class="course-math" data-tex="f,g" data-display="false"><code>f,g</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续、在 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 内可导，且 <span class="course-math" data-tex="g(b)\ne g(a)" data-display="false"><code>g(b)\ne g(a)</code></span>。
  - 结论：存在 <span class="course-math" data-tex="c\in(a,b)" data-display="false"><code>c\in(a,b)</code></span> 使
    <span class="course-math course-math-display" data-tex="[f(b)-f(a)]\,g&#x27;(c)=[g(b)-g(a)]\,f&#x27;(c)." data-display="true"><code>[f(b)-f(a)]\,g&#x27;(c)=[g(b)-g(a)]\,f&#x27;(c).</code></span>
    若另知 <span class="course-math" data-tex="g&#x27;(c)\ne 0" data-display="false"><code>g&#x27;(c)\ne 0</code></span>（例如 <span class="course-math" data-tex="g&#x27;(x)\ne 0" data-display="false"><code>g&#x27;(x)\ne 0</code></span> 于 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span>），则
    <span class="course-math course-math-display" data-tex="\frac{f&#x27;(c)}{g&#x27;(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}." data-display="true"><code>\frac{f&#x27;(c)}{g&#x27;(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.</code></span>
- **费马引理（Fermat's Lemma）：**
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在某开区间 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 上定义，<span class="course-math" data-tex="c\in I" data-display="false"><code>c\in I</code></span> 为内点；<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 处可导；<span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 是 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的局部极值点（极大或极小）。
  - 结论：<span class="course-math" data-tex="f&#x27;(c)=0" data-display="false"><code>f&#x27;(c)=0</code></span>。
- **洛必达法则（L’Hôpital’s rule）：**
  - 适用条件：设 <span class="course-math" data-tex="f,g" data-display="false"><code>f,g</code></span> 在点 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的某去心邻域内可导，且
    <span class="course-math course-math-display" data-tex="\lim_{x\to a} f(x)=\lim_{x\to a} g(x)=0 \quad\text{或}\quad \lim_{x\to a} f(x)=\pm\infty,\ \lim_{x\to a} g(x)=\pm\infty," data-display="true"><code>\lim_{x\to a} f(x)=\lim_{x\to a} g(x)=0 \quad\text{或}\quad \lim_{x\to a} f(x)=\pm\infty,\ \lim_{x\to a} g(x)=\pm\infty,</code></span>
    并且 <span class="course-math" data-tex="g&#x27;(x)\ne 0" data-display="false"><code>g&#x27;(x)\ne 0</code></span>（在该邻域内），极限
    <span class="course-math course-math-display" data-tex="\lim_{x\to a}\frac{f&#x27;(x)}{g&#x27;(x)}" data-display="true"><code>\lim_{x\to a}\frac{f&#x27;(x)}{g&#x27;(x)}</code></span>
    存在（有限或为 <span class="course-math" data-tex="\pm\infty" data-display="false"><code>\pm\infty</code></span>）。
  - 结论：
    <span class="course-math course-math-display" data-tex="\lim_{x\to a}\frac{f(x)}{g(x)} \;=\; \lim_{x\to a}\frac{f&#x27;(x)}{g&#x27;(x)}." data-display="true"><code>\lim_{x\to a}\frac{f(x)}{g(x)} \;=\; \lim_{x\to a}\frac{f&#x27;(x)}{g&#x27;(x)}.</code></span>

## 经典反例
{: #section-3 }


1. <span class="course-math" data-tex="f(x)=\begin{cases}x^2\sin \left( \frac{1}{x} \right) &amp; x\neq 0 \\ 0 &amp; x=0\end{cases}" data-display="false"><code>f(x)=\begin{cases}x^2\sin \left( \frac{1}{x} \right) &amp; x\neq 0 \\ 0 &amp; x=0\end{cases}</code></span>
	<span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 连续且处处可导，但 <span class="course-math" data-tex="f&#x27;(x)" data-display="false"><code>f&#x27;(x)</code></span> 在 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 处不连续，因为 <span class="course-math" data-tex="\lim_{ x \to 0 }f&#x27;(x)" data-display="false"><code>\lim_{ x \to 0 }f&#x27;(x)</code></span> 不存在。
	这个函数在 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 附近震荡非常强烈，例如可构造 <span class="course-math" data-tex="g(x)=2f(x)+x" data-display="false"><code>g(x)=2f(x)+x</code></span> 让 <span class="course-math" data-tex="f&#x27;(x)" data-display="false"><code>f&#x27;(x)</code></span> 在 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 附近符号频繁变化。
	另外，它在  <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>  处没有二阶导，<span class="course-math" data-tex="(0,0)" data-display="false"><code>(0,0)</code></span> 也不是它的拐点。
2.  <span class="course-math" data-tex="f(x)=\begin{cases}1 &amp; x\neq 0 \\ 0 &amp; x=0\end{cases}" data-display="false"><code>f(x)=\begin{cases}1 &amp; x\neq 0 \\ 0 &amp; x=0\end{cases}</code></span>
	和第 1 条类似但稍弱一些，说明 <span class="course-math" data-tex="f&#x27;(0)" data-display="false"><code>f&#x27;(0)</code></span> 和 <span class="course-math" data-tex="\lim_{ x \to 0 }f&#x27;(x)" data-display="false"><code>\lim_{ x \to 0 }f&#x27;(x)</code></span> 不是一回事。


## 杂类
{: #section-4 }


**"函数在 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 处连续" 是 "函数在 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 处可导" 的必要不充分条件。**

**牛顿迭代法（Newton's Method）：**<span class="course-math" data-tex="x_{n+1}=x_{n}-\frac{f(x_{n})}{f&#x27;(x_{n})}" data-display="false"><code>x_{n+1}=x_{n}-\frac{f(x_{n})}{f&#x27;(x_{n})}</code></span>

**渐近线（Asymptotes）：**
- 垂直（Vertical）渐近线：<span class="course-math" data-tex="\lim_{ x \to a^{\pm} }f(x)=\pm \infty \to x=a" data-display="false"><code>\lim_{ x \to a^{\pm} }f(x)=\pm \infty \to x=a</code></span>
- 水平（Horizontal）渐近线：<span class="course-math" data-tex="y=\lim_{ x \to \pm \infty }f(x)" data-display="false"><code>y=\lim_{ x \to \pm \infty }f(x)</code></span>
- 斜（Oblique）渐近线：
  - <span class="course-math" data-tex="y=ax+b" data-display="false"><code>y=ax+b</code></span> ，其中 <span class="course-math" data-tex="a = \lim_{ x \to \pm \infty } \frac{f(x)}{x}, b = \lim_{ x \to \pm \infty } (f(x)-ax)" data-display="false"><code>a = \lim_{ x \to \pm \infty } \frac{f(x)}{x}, b = \lim_{ x \to \pm \infty } (f(x)-ax)</code></span>。
  - 对多项式的商，如果分子比分母的最高次数多 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，可能产生斜渐近线。

**线性化（Linearization）**：切线。

**画函数图像**：注意单调性和极值 / 凸性和拐点 / 渐近线。

**三角函数和反三角函数导数公式表：** <a href="{% endraw %}{{ '/courses/references/derivative-1/' | relative_url }}{% raw %}">Derivative-1</a>

对**向量值函数（Vector-Valued Functions）** 求导：只需对向量的各组成部分分别求导。


## 泰勒公式
{: #section-5 }


若函数 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在包含 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的开区间 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 上存在各阶导数，则对任意正整数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 及任意 <span class="course-math" data-tex="x\in I" data-display="false"><code>x\in I</code></span>，有泰勒展开

<span class="course-math course-math-display" data-tex="f(x)=\left(\sum^{n}_{i=0}\frac{f^{(i)}(a)(x-a)^i}{i!}\right)+R_n(x)" data-display="true"><code>f(x)=\left(\sum^{n}_{i=0}\frac{f^{(i)}(a)(x-a)^i}{i!}\right)+R_n(x)</code></span>

余项 <span class="course-math" data-tex="R_n(x)=\dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}" data-display="false"><code>R_n(x)=\dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}</code></span>，其中 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 位于 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 与 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 之间。
**余项估计定理（Remainder Estimation Theorem）：** 若存在正常数 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 使得
<span class="course-math course-math-display" data-tex="&#124;f^{(n)}(x)&#124;\leq M" data-display="true"><code>&#124;f^{(n)}(x)&#124;\leq M</code></span>
对每个 <span class="course-math" data-tex="n\geq 0" data-display="false"><code>n\geq 0</code></span> 成立，则该级数收敛到 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span>。

若此时 <span class="course-math" data-tex="R_{n}\to 0" data-display="false"><code>R_{n}\to 0</code></span> 当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span> 对 <span class="course-math" data-tex="x \in I" data-display="false"><code>x \in I</code></span> 恒成立，则 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="x=a" data-display="false"><code>x=a</code></span> 处的泰勒展开收敛到 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span>，记作
<span class="course-math course-math-display" data-tex="f(x)=\sum^{\infty}_{i=0} \frac{f^{(i)}(a)(x-a)}{i!}" data-display="true"><code>f(x)=\sum^{\infty}_{i=0} \frac{f^{(i)}(a)(x-a)}{i!}</code></span>
麦克劳林级数（Maclaurin series）是在 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 处的泰勒公式。 
一些常见函数的麦克劳林展开：
<span class="course-math course-math-display" data-tex="\sin x=x- \frac{x^3}{3!}+ \frac{x^5}{5!} - \frac{x^7}{7!}+\cdots (x\to 0)" data-display="true"><code>\sin x=x- \frac{x^3}{3!}+ \frac{x^5}{5!} - \frac{x^7}{7!}+\cdots (x\to 0)</code></span>
<span class="course-math course-math-display" data-tex="\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}- \frac{x^6}{6!} + \cdots(x\to 0)" data-display="true"><code>\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}- \frac{x^6}{6!} + \cdots(x\to 0)</code></span>
<span class="course-math course-math-display" data-tex="e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots(x\to 0)" data-display="true"><code>e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots(x\to 0)</code></span>
这三个容易直观理解。
<span class="course-math course-math-display" data-tex="\tan x=x+\frac{1}{3}x^3+\frac{2}{15}x^5+\cdots(x\to 0)" data-display="true"><code>\tan x=x+\frac{1}{3}x^3+\frac{2}{15}x^5+\cdots(x\to 0)</code></span>
这个需要死记硬背。
<span class="course-math course-math-display" data-tex="\tan^{-1}x=x-\frac{x^3}{3}+\frac{x^5}{5}+\cdots(x\to 0)" data-display="true"><code>\tan^{-1}x=x-\frac{x^3}{3}+\frac{x^5}{5}+\cdots(x\to 0)</code></span>
注意，上面这些公式在其定义域内都收敛。
<span class="course-math course-math-display" data-tex="\frac{1}{1-x}=1+x+x^2+x^3+\cdots(x\to 0)" data-display="true"><code>\frac{1}{1-x}=1+x+x^2+x^3+\cdots(x\to 0)</code></span>
<span class="course-math course-math-display" data-tex="\frac{1}{1+x}=1-x+x^2-x^3+\cdots(x \to 0)" data-display="true"><code>\frac{1}{1+x}=1-x+x^2-x^3+\cdots(x \to 0)</code></span>
<span class="course-math course-math-display" data-tex="\ln(1+x)=x- \frac{x^2}{2}+ \frac{x^3}{3}-\frac{x^4}{4} + \cdots (x \to 0)" data-display="true"><code>\ln(1+x)=x- \frac{x^2}{2}+ \frac{x^3}{3}-\frac{x^4}{4} + \cdots (x \to 0)</code></span>
这几个都可以互推。
注意，前两个公式收敛需要 <span class="course-math" data-tex="&#124;x&#124;&lt;1" data-display="false"><code>&#124;x&#124;&lt;1</code></span>，最后一个公式收敛需要 <span class="course-math" data-tex="-1&lt;x\leq 1" data-display="false"><code>-1&lt;x\leq 1</code></span>。
特别的，
<span class="course-math course-math-display" data-tex="\ln(\cos x)=\ln\left( 1-\frac{x^2}{2}+o(x^2) \right)=-\frac{x^2}{2}+o(x^2)" data-display="true"><code>\ln(\cos x)=\ln\left( 1-\frac{x^2}{2}+o(x^2) \right)=-\frac{x^2}{2}+o(x^2)</code></span>
用广义二项式定理求幂级数：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;(1+x)^{\alpha}&amp;=\sum_{k=0}^{\infty}\binom{\alpha}{k}x^k \\&#10;&amp;=\sum_{k=0}^{\infty} \frac{\alpha(\alpha-1)(\alpha-2)\cdots (\alpha-k+1)}{k!}x^k&#10;\end{align}" data-display="true"><code>\begin{align}&#10;(1+x)^{\alpha}&amp;=\sum_{k=0}^{\infty}\binom{\alpha}{k}x^k \\&#10;&amp;=\sum_{k=0}^{\infty} \frac{\alpha(\alpha-1)(\alpha-2)\cdots (\alpha-k+1)}{k!}x^k&#10;\end{align}</code></span>
{% endraw %}
