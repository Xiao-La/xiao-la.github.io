---
title: "Antiderivative and Integral - 积分"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-10-28T17:03:23+08:00"
updated_at: "2026-10-09T16:13:40+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/calculus/antiderivative-and-integral/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Antiderivative and Integral - 积分"
excerpt: "高等数学（上）/（下） · Antiderivative and Integral - 积分"
---

{% raw %}
前置： <a href="{% endraw %}{{ '/courses/calculus/limit-and-derivative/' | relative_url }}{% raw %}">Limit and Derivative - 极限与导数</a>

## 概念与定义
{: #section-1 }


定积分的定义：对黎曼和 <span class="course-math" data-tex="\sum^{n}_{i=1}f\left( a+ \frac{b-a}{n} i \right) \times \frac{b-a}{n}" data-display="false"><code>\sum^{n}_{i=1}f\left( a+ \frac{b-a}{n} i \right) \times \frac{b-a}{n}</code></span> 取极限。
**Lower / Upper Sum**：取区间的最小值/最大值为代表做黎曼和。
**Average Value** <span class="course-math" data-tex="\text{av}(f) = \frac{1}{b-a}\int^{b}_{a}f(x)\,\mathrm{d}x" data-display="false"><code>\text{av}(f) = \frac{1}{b-a}\int^{b}_{a}f(x)\,\mathrm{d}x</code></span> 。
**Centroid：** 几何中心，即质量均匀的物体的质心
**Improper Integral（反常积分）：**
1. Type 1： <span class="course-math" data-tex="\int_{b}^{\infty}y\,\mathrm{d}x=\lim_{ a \to \infty } \int _b^a  y\,\mathrm{d}x" data-display="false"><code>\int_{b}^{\infty}y\,\mathrm{d}x=\lim_{ a \to \infty } \int _b^a  y\,\mathrm{d}x</code></span>
2. Type 2：定义在 <span class="course-math" data-tex="\left [ b,a \right)" data-display="false"><code>\left [ b,a \right)</code></span> 上的函数 <span class="course-math" data-tex="y(x)" data-display="false"><code>y(x)</code></span> ， <span class="course-math" data-tex="\int_{b}^a y\,\mathrm{d}x= \lim_{ c \to a^- } \int_{b}^c y\,\mathrm{d}x" data-display="false"><code>\int_{b}^a y\,\mathrm{d}x= \lim_{ c \to a^- } \int_{b}^c y\,\mathrm{d}x</code></span>


## 定理
{: #section-2 }


- 积分中值定理（First Mean Value Theorem for Integrals）：
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续。
  - 结论：存在 <span class="course-math" data-tex="c\in(a,b)" data-display="false"><code>c\in(a,b)</code></span> 使
    <span class="course-math course-math-display" data-tex="\int_a^b f(x)\,\mathrm{d}x \;=\; f(c)\,(b-a)." data-display="true"><code>\int_a^b f(x)\,\mathrm{d}x \;=\; f(c)\,(b-a).</code></span>

- 微积分基本定理（The Fundamental Theorem of Calculus, Part 1）：
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上可积；定义 <span class="course-math" data-tex="F(x)=\int_a^x f(t)\,\mathrm{d}t" data-display="false"><code>F(x)=\int_a^x f(t)\,\mathrm{d}t</code></span>。
  - 结论：
    - <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续；
    - 若 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="c\in(a,b)" data-display="false"><code>c\in(a,b)</code></span> 处连续，则 <span class="course-math" data-tex="F&#x27;(c)=f(c)" data-display="false"><code>F&#x27;(c)=f(c)</code></span>。特别地，若 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续，则 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 在 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 上可导且 <span class="course-math" data-tex="F&#x27;(x)=f(x)" data-display="false"><code>F&#x27;(x)=f(x)</code></span>。

- 微积分基本定理（The Fundamental Theorem of Calculus, Part 2）：
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续；<span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 为 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的一个原函数（<span class="course-math" data-tex="F&#x27;=f" data-display="false"><code>F&#x27;=f</code></span> 于 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span>）。
  - 结论：
    <span class="course-math course-math-display" data-tex="\int_a^b f(x)\,\mathrm{d}x \;=\; F(b)-F(a)." data-display="true"><code>\int_a^b f(x)\,\mathrm{d}x \;=\; F(b)-F(a).</code></span>
- 莱布尼兹法则（Leibniz's Rule）：
  - 适用条件：<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上连续；<span class="course-math" data-tex="u(x),v(x)" data-display="false"><code>u(x),v(x)</code></span> 可导且取值落在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span>。
  - 结论：
    <span class="course-math course-math-display" data-tex="\frac{\mathrm{d}}{\mathrm{d}x}\int_{u(x)}^{v(x)} f(t)\,\mathrm{d}t&#10;    = f\!\big(v(x)\big)\,v&#x27;(x) \;-\; f\!\big(u(x)\big)\,u&#x27;(x)." data-display="true"><code>\frac{\mathrm{d}}{\mathrm{d}x}\int_{u(x)}^{v(x)} f(t)\,\mathrm{d}t&#10;    = f\!\big(v(x)\big)\,v&#x27;(x) \;-\; f\!\big(u(x)\big)\,u&#x27;(x).</code></span>


## 判断反常积分敛散性
{: #section-3 }


1. 对于可积函数，积出来之后根据反常积分的定义，判断极限是否存在即可。
2. 对非负被积函数，若被积函数不大于一个反常积分收敛的非负函数，则该积分也收敛。
3. 对非负被积函数，若被积函数不小于一个反常积分发散的非负函数，则该积分也发散。
4. 若在端点处 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 和 <span class="course-math" data-tex="g" data-display="false"><code>g</code></span> 同阶，即其比值趋于有限的正数（非负函数），则 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 和 <span class="course-math" data-tex="g" data-display="false"><code>g</code></span> 同敛散。
    具体而言，比如要判断 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 处端点是否可积，则可以用泰勒近似找一个同阶的幂函数，然后用下面的特例来判断即可；比如要判断无穷远处是否可积，则可以用抓大头的想法找一个同阶的幂函数，然后用下面的特例来判断即可。
5. 特例：
   <span class="course-math" data-tex="\int_{0}^t \frac{1}{x^p}\,\mathrm{d}x" data-display="false"><code>\int_{0}^t \frac{1}{x^p}\,\mathrm{d}x</code></span> 收敛当且仅当  <span class="course-math" data-tex="p&lt;1" data-display="false"><code>p&lt;1</code></span>；<span class="course-math" data-tex="\int_{t}^{\infty} \frac{1}{x^p}\,\mathrm{d}x" data-display="false"><code>\int_{t}^{\infty} \frac{1}{x^p}\,\mathrm{d}x</code></span> 收敛当且仅当 <span class="course-math" data-tex="p&gt;1" data-display="false"><code>p&gt;1</code></span>。


## 积分应用
{: #section-4 }


求体积
- Washer Method: 对截面进行积分 <span class="course-math" data-tex="V=\int \text{截面面积}(x)\,\mathrm{d}x" data-display="false"><code>V=\int \text{截面面积}(x)\,\mathrm{d}x</code></span>
- Shell Method: 旋转体可看成圆柱面的累加：<span class="course-math" data-tex="\int 2\pi \times\text{半径}(x)\times高度(x)\,\mathrm{d}x" data-display="false"><code>\int 2\pi \times\text{半径}(x)\times高度(x)\,\mathrm{d}x</code></span>
  - 其中半径是 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 到旋转轴的距离，高度为 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 处的被旋转面的截线长
- Pappus’s Theorem for Volumes: <span class="course-math" data-tex="V=2\pi \rho A" data-display="false"><code>V=2\pi \rho A</code></span>，即平面区域面积乘质心走的距离（旋转轴在该平面内且不穿过区域内部）

求弧长
<span class="course-math course-math-display" data-tex="\text{arc length} = \int^{b}_{a} \sqrt{ 1+ \left( \frac{\mathrm{d}y}{\mathrm{d}x} \right)^2 }\,\mathrm{d}x" data-display="true"><code>\text{arc length} = \int^{b}_{a} \sqrt{ 1+ \left( \frac{\mathrm{d}y}{\mathrm{d}x} \right)^2 }\,\mathrm{d}x</code></span>
<span class="course-math course-math-display" data-tex="\text{arc length} = \int^{b}_{a} \sqrt{ 1+ \left( \frac{\mathrm{d}x}{\mathrm{d}y} \right)^2 }\,\mathrm{d}y" data-display="true"><code>\text{arc length} = \int^{b}_{a} \sqrt{ 1+ \left( \frac{\mathrm{d}x}{\mathrm{d}y} \right)^2 }\,\mathrm{d}y</code></span>
求旋转体的表面积
<span class="course-math course-math-display" data-tex="A=\int^{b}_{a}2\pi \lvert f(x)\rvert \sqrt{ 1+[f&#x27;(x)]^2 }\,\mathrm{d}x" data-display="true"><code>A=\int^{b}_{a}2\pi \lvert f(x)\rvert \sqrt{ 1+[f&#x27;(x)]^2 }\,\mathrm{d}x</code></span>
- Pappus’s Theorem for Surface Areas：<span class="course-math" data-tex="A=2\pi \rho L" data-display="false"><code>A=2\pi \rho L</code></span>，即弧长乘质心走的距离（旋转轴在曲线平面内且不穿过曲线）

求平面图形质心
<span class="course-math course-math-display" data-tex="\bar{x}= \frac{\int \tilde{x}\,\mathrm{d}m}{\int\,\mathrm{d}m},\bar{y}= \frac{\int \tilde{y}\,\mathrm{d}m}{\int\,\mathrm{d}m}" data-display="true"><code>\bar{x}= \frac{\int \tilde{x}\,\mathrm{d}m}{\int\,\mathrm{d}m},\bar{y}= \frac{\int \tilde{y}\,\mathrm{d}m}{\int\,\mathrm{d}m}</code></span>
- 若密度分布不均匀，有密度分布函数 <span class="course-math" data-tex="\delta" data-display="false"><code>\delta</code></span>，则 <span class="course-math" data-tex="\mathrm{d}m=\delta\,\mathrm{d}A" data-display="false"><code>\mathrm{d}m=\delta\,\mathrm{d}A</code></span>。
- 若密度仅依赖 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>（均匀密度也适用），求两个函数包着的区域质心，其竖直截条高度为 <span class="course-math" data-tex="y=f(x)-g(x)" data-display="false"><code>y=f(x)-g(x)</code></span>，则可以将 <span class="course-math" data-tex="\tilde{y}" data-display="false"><code>\tilde{y}</code></span> 写成 <span class="course-math" data-tex="\frac{1}{2}(f(x)+g(x))" data-display="false"><code>\frac{1}{2}(f(x)+g(x))</code></span>：
  <span class="course-math course-math-display" data-tex="\bar{x}= \frac{1}{M} \int \delta x (f(x)-g(x))\,\mathrm{d}x" data-display="true"><code>\bar{x}= \frac{1}{M} \int \delta x (f(x)-g(x))\,\mathrm{d}x</code></span>
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\bar{y}&amp;= \frac{1}{M} \int \frac{f(x)+g(x)}{2} \delta  (f(x)-g(x))\,\mathrm{d}x\\&#10;&amp;= \frac{1}{M} \int \frac{\delta}{2}[f^2(x)-g^2(x)]\,\mathrm{d}x&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\bar{y}&amp;= \frac{1}{M} \int \frac{f(x)+g(x)}{2} \delta  (f(x)-g(x))\,\mathrm{d}x\\&#10;&amp;= \frac{1}{M} \int \frac{\delta}{2}[f^2(x)-g^2(x)]\,\mathrm{d}x&#10;\end{aligned}</code></span>

求几何中心（即 <span class="course-math" data-tex="\delta" data-display="false"><code>\delta</code></span> 是常数的情况）
<span class="course-math course-math-display" data-tex="\bar{x}= \frac{\int \tilde{x}\,\mathrm{d}A}{A}, \bar y=\frac{\int \tilde{y}\,\mathrm{d}A}{A}" data-display="true"><code>\bar{x}= \frac{\int \tilde{x}\,\mathrm{d}A}{A}, \bar y=\frac{\int \tilde{y}\,\mathrm{d}A}{A}</code></span>

求定积分的数值估计
**The Trapezoidal Rule：** 用梯形近似面积。

<span class="course-math course-math-display" data-tex="T= \frac{\Delta x}{2}(y_{0}+2y_{1}+2y_{2}+\dots +2y_{n-1}+y_{n})" data-display="true"><code>T= \frac{\Delta x}{2}(y_{0}+2y_{1}+2y_{2}+\dots +2y_{n-1}+y_{n})</code></span>
误差：<span class="course-math course-math-display" data-tex="\lvert E_{T}\rvert  \leq \frac{M(b-a)^3}{12n^2}" data-display="true"><code>\lvert E_{T}\rvert  \leq \frac{M(b-a)^3}{12n^2}</code></span>
其中 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 是 <span class="course-math" data-tex="\lvert f&#x27;&#x27;\rvert" data-display="false"><code>\lvert f&#x27;&#x27;\rvert</code></span> 的上界。

**Simpson’s Rule：** 用抛物线近似面积。

<span class="course-math course-math-display" data-tex="S=\frac{\Delta x}{3}(y_{0}+4y_{1}+2y_{2}+\dots+2y_{n-2}+4y_{n-1}+y_{n})" data-display="true"><code>S=\frac{\Delta x}{3}(y_{0}+4y_{1}+2y_{2}+\dots+2y_{n-2}+4y_{n-1}+y_{n})</code></span>
其中 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 为偶数。
误差：
<span class="course-math course-math-display" data-tex="\lvert E_{S}\rvert  \leq \frac{M(b-a)^5}{180n^4}" data-display="true"><code>\lvert E_{S}\rvert  \leq \frac{M(b-a)^5}{180n^4}</code></span>
其中 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 是 <span class="course-math" data-tex="\lvert f^{(4)}\rvert" data-display="false"><code>\lvert f^{(4)}\rvert</code></span> 的上界。
{% endraw %}
