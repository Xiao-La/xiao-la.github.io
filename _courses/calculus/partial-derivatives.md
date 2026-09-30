---
title: "Partial Derivatives -  偏导数"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "下"
status: "completed"
reference: false
layout: "course"
permalink: "/courses/calculus/partial-derivatives/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Partial Derivatives -  偏导数"
excerpt: "高等数学（上）/（下） · Partial Derivatives -  偏导数"
---

{% raw %}

## 定义与概念
{: #section-1 }

### 多元函数及其极限
{: #section-2 }

实值函数（Real-valued Function）<span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 将 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元组 <span class="course-math" data-tex="(x_{1},x_{2},\dots,x_{n})" data-display="false"><code>(x_{1},x_{2},\dots,x_{n})</code></span> 映射到一个实数 <span class="course-math" data-tex="w" data-display="false"><code>w</code></span>。称 <span class="course-math" data-tex="w" data-display="false"><code>w</code></span> 为因变量/输入变量（Dependent Variable/Output Variable），<span class="course-math" data-tex="x_{1},x_{2},\dots,x_{n}" data-display="false"><code>x_{1},x_{2},\dots,x_{n}</code></span> 为自变量/输出变量（Independent Variables/Input Variables）。

对于 <span class="course-math" data-tex="\mathbb{R}^{2}" data-display="false"><code>\mathbb{R}^{2}</code></span> 上的区域/集合 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>，定义它的内点（Interior Point）为使得以这个点为原心的小圆只包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 中的点；定义它的边界点（Boundary Point）为使得以这个点为原心的小圆中同时包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 中和 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 外的点。<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的内点构成的集合称为这个区域的内部（Interior）。边界点构成的集合称为这个区域的边界（Boundary）。包含了所有内点的区域定义为是开的（Open）。包含了所有边界点的区域定义为是闭的（Closed）。
（类似的，把小圆换成小球，就是 <span class="course-math" data-tex="\mathbb{R}^{3}" data-display="false"><code>\mathbb{R}^{3}</code></span> 中的情况）

定义区域有界（Bounded）若它落在一个有限半径的圆内，反之称为无界（Unbounded）。

定义函数 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 的等值线（Level Curve）为满足 <span class="course-math" data-tex="f(x,y)=c" data-display="false"><code>f(x,y)=c</code></span> 的点 <span class="course-math" data-tex="(x,y)" data-display="false"><code>(x,y)</code></span> 构成的集合。在 <span class="course-math" data-tex="\mathbb{R}^{3}" data-display="false"><code>\mathbb{R}^{3}</code></span> 中的点 <span class="course-math" data-tex="(x,y,f(x,y))" data-display="false"><code>(x,y,f(x,y))</code></span> 构成的集合为这个二元函数的图象（Graph），也就是曲面 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span>。

定义极限 
<span class="course-math course-math-display" data-tex="\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)=L" data-display="true"><code>\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)=L</code></span>
为 <span class="course-math" data-tex="\forall\varepsilon, \exists \delta" data-display="false"><code>\forall\varepsilon, \exists \delta</code></span> 使得
<span class="course-math course-math-display" data-tex="0&lt;\sqrt{ (x-x_{0})^{2}+(y-y_{0})^{2} }&lt;\delta \implies &#124;f(x,y)-L&#124;&lt;\varepsilon" data-display="true"><code>0&lt;\sqrt{ (x-x_{0})^{2}+(y-y_{0})^{2} }&lt;\delta \implies &#124;f(x,y)-L&#124;&lt;\varepsilon</code></span>
这个极限运算的性质也非常好，可以和加/减/乘/除/数乘/幂/开方军算交换位置。
定义二元函数 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 在 <span class="course-math" data-tex="(x_{0},y_{0})" data-display="false"><code>(x_{0},y_{0})</code></span> 处连续：
<span class="course-math course-math-display" data-tex="f(x_{0},y_{0})=\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)" data-display="true"><code>f(x_{0},y_{0})=\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)</code></span>
前提是左右两边都存在。

**两条路径测试（Two-Path Test）**：若对函数 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span>，有两条不同的 <span class="course-math" data-tex="(x,y)" data-display="false"><code>(x,y)</code></span> 趋向于 <span class="course-math" data-tex="(x_{0},y_{0})" data-display="false"><code>(x_{0},y_{0})</code></span> 的路径 <span class="course-math" data-tex="g(x,y)=0" data-display="false"><code>g(x,y)=0</code></span> 使得算出的极限不同，则极限 <span class="course-math" data-tex="\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)" data-display="false"><code>\lim_{ (x,y) \to (x_{0},y_{0}) }f(x,y)</code></span> 不存在。
- 从所有直线趋近某个点得到的极限相同，并不能说明极限存在。

极坐标代换：当出现 <span class="course-math" data-tex="x^{2}+y^{2}" data-display="false"><code>x^{2}+y^{2}</code></span>，或分子次数大于分母次数时，或想要证明极限为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 时，考虑令 <span class="course-math" data-tex="x=r\cos\theta,y=r\sin\theta" data-display="false"><code>x=r\cos\theta,y=r\sin\theta</code></span>，则 <span class="course-math" data-tex="\lim_{ (x,y) \to (0,0) }f(x,y)=\lim_{ r \to 0 }f(r,\theta)" data-display="false"><code>\lim_{ (x,y) \to (0,0) }f(x,y)=\lim_{ r \to 0 }f(r,\theta)</code></span>。
- 注意，这里不能简单地把 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 视为常数然后求 <span class="course-math" data-tex="r\to 0" data-display="false"><code>r\to 0</code></span> 处的极限，因为这样相当于只走直线路径 <span class="course-math" data-tex="y=\tan\theta" data-display="false"><code>y=\tan\theta</code></span>。可以先猜测极限为 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span>，然后再用 <span class="course-math" data-tex="\varepsilon-\delta" data-display="false"><code>\varepsilon-\delta</code></span> 语言严格证明 <span class="course-math" data-tex="\forall\varepsilon&gt;0, \exists \delta&gt;0,s.t." data-display="false"><code>\forall\varepsilon&gt;0, \exists \delta&gt;0,s.t.</code></span> <span class="course-math course-math-display" data-tex="&#124;r&#124;&lt;\delta \implies&#124;f(r,\theta)-L&#124;&lt;\varepsilon" data-display="true"><code>&#124;r&#124;&lt;\delta \implies&#124;f(r,\theta)-L&#124;&lt;\varepsilon</code></span>
### 求二元多项式之比的极限
{: #section-3 }

面对 <span class="course-math" data-tex="\lim_{(x,y)\to(0,0)} \frac{P(x,y)}{Q(x,y)}" data-display="false"><code>\lim_{(x,y)\to(0,0)} \frac{P(x,y)}{Q(x,y)}</code></span>：

例： <span class="course-math" data-tex="\frac{x^{2}y^{2}}{x^{2}+y^4}" data-display="false"><code>\frac{x^{2}y^{2}}{x^{2}+y^4}</code></span>。
针对多项式**次数不平衡**（比如 <span class="course-math" data-tex="x^2+y^4" data-display="false"><code>x^2+y^4</code></span>），我们不能简单地看绝对次数，而要**配平分母**：
1. **配平分配权重：** 分母为 <span class="course-math" data-tex="x^2 + y^4" data-display="false"><code>x^2 + y^4</code></span>，令 <span class="course-math" data-tex="x^2 \sim y^4" data-display="false"><code>x^2 \sim y^4</code></span>，即说明 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的地位相当于 <span class="course-math" data-tex="y^2" data-display="false"><code>y^2</code></span>。我们给变量分配权重：<span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的阶数取 <span class="course-math" data-tex="2" data-display="false"><code>2</code></span>，<span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 的阶数取 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。
2. **计算分母总阶数：** 此时分母 <span class="course-math" data-tex="x^2 + y^4" data-display="false"><code>x^2 + y^4</code></span> 的每一项阶数都是 <span class="course-math" data-tex="4" data-display="false"><code>4</code></span>。
3. **计算分子总阶数：** 分子逼近为 <span class="course-math" data-tex="x^2y^2" data-display="false"><code>x^2y^2</code></span>，其阶数为 <span class="course-math" data-tex="2 \times 2 + 1 \times 2 = 6" data-display="false"><code>2 \times 2 + 1 \times 2 = 6</code></span>。
4. **比较分子与分母的阶数判断结论：**
    *   **如果分子阶数 > 分母阶数（例如本题 <span class="course-math" data-tex="6 &gt; 4" data-display="false"><code>6 &gt; 4</code></span>）：** 极限**通常存在且为 0**（接下来用夹逼定理放缩证明）。
    *   **如果分子阶数 <span class="course-math" data-tex="\le" data-display="false"><code>\le</code></span> 分母阶数：** 极限**通常不存在**（接下来用两路径测试证明）。

> **分子阶数 <span class="course-math" data-tex="\leq" data-display="false"><code>\leq</code></span> 分母阶数的情况**
> 对于分子阶数 <span class="course-math" data-tex="\le" data-display="false"><code>\le</code></span> 分母阶数的情况，利用上面配平的思路。
> 例如，如果是求 <span class="course-math" data-tex="\lim \frac{xy^2}{x^2+y^4}" data-display="false"><code>\lim \frac{xy^2}{x^2+y^4}</code></span>，分子阶数是 <span class="course-math" data-tex="2+2=4" data-display="false"><code>2+2=4</code></span>，等于分母阶数 <span class="course-math" data-tex="4" data-display="false"><code>4</code></span>，预测极限不存在。取路径 <span class="course-math" data-tex="x = cy^2" data-display="false"><code>x = cy^2</code></span>，原式变为 <span class="course-math" data-tex="\frac{cy^4}{c^2y^4+y^4} = \frac{c}{c^2+1}" data-display="false"><code>\frac{cy^4}{c^2y^4+y^4} = \frac{c}{c^2+1}</code></span>，结果与 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 有关。

>  **分子阶数 > 分母阶数的情况**
1.  **拆分出有界项：** 凑出一个能在 <span class="course-math" data-tex="(0,0)" data-display="false"><code>(0,0)</code></span> 附近有界的项。
    *   技巧：局部 <span class="course-math" data-tex="\le" data-display="false"><code>\le</code></span> 整体。因为 <span class="course-math" data-tex="A^2, B^2 \ge 0" data-display="false"><code>A^2, B^2 \ge 0</code></span>，所以 <span class="course-math" data-tex="A^2 \le A^2 + B^2" data-display="false"><code>A^2 \le A^2 + B^2</code></span> 。
    *   推出基础不等式：<span class="course-math" data-tex="\frac{x^2}{x^2+y^4} \le 1" data-display="false"><code>\frac{x^2}{x^2+y^4} \le 1</code></span> 以及 <span class="course-math" data-tex="\frac{y^4}{x^2+y^4} \le 1" data-display="false"><code>\frac{y^4}{x^2+y^4} \le 1</code></span>。
2.  **均值不等式。

**特例：分母非正定**（分母为 0 不对应 <span class="course-math" data-tex="x=0,y=0" data-display="false"><code>x=0,y=0</code></span>，而对一整个曲线成立），那么极限大概率不存在，因为只要贴近这个曲线再加上一个高阶无穷小，就能使极限不存在。例如 <span class="course-math" data-tex="\frac{x^{3}+y^{3}}{x^{2}+y}" data-display="false"><code>\frac{x^{3}+y^{3}}{x^{2}+y}</code></span>，只要令 <span class="course-math" data-tex="y=-x^{2}+x^{3}" data-display="false"><code>y=-x^{2}+x^{3}</code></span>，则变成 <span class="course-math" data-tex="\frac{x^{3}+(-x^{2}+x^{3})^{3}}{x^{3}}\to 1" data-display="false"><code>\frac{x^{3}+(-x^{2}+x^{3})^{3}}{x^{3}}\to 1</code></span>, 令 <span class="course-math" data-tex="y=-x^2+x^4" data-display="false"><code>y=-x^2+x^4</code></span>  就趋于无穷。

### 连续与可微
{: #section-4 }

复合函数的连续性：若 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="(x_{0},y_{0})" data-display="false"><code>(x_{0},y_{0})</code></span> 处连续，<span class="course-math" data-tex="g" data-display="false"><code>g</code></span> 在 <span class="course-math" data-tex="f(x_{0},y_{0})" data-display="false"><code>f(x_{0},y_{0})</code></span> 处连续，则 <span class="course-math" data-tex="g\circ f" data-display="false"><code>g\circ f</code></span> 在 <span class="course-math" data-tex="(x_{0},y_{0})" data-display="false"><code>(x_{0},y_{0})</code></span> 处连续。
以上这些对于二元函数的定义对于多元函数也类似。

对于 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元函数 <span class="course-math" data-tex="f(x_{1},x_{2},\dots,x_{n})" data-display="false"><code>f(x_{1},x_{2},\dots,x_{n})</code></span> ，定义它在 <span class="course-math" data-tex="(t_{1},t_{2},\dots,t_{n})" data-display="false"><code>(t_{1},t_{2},\dots,t_{n})</code></span> 处对 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span> 的偏导数（Partial Derivatives w.r.t. <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span>）为
<span class="course-math course-math-display" data-tex="\left.\frac{ \partial f }{ \partial x_{i} }\right&#124;_{(t_{1},t_{2},\dots,t_{n})} =\lim_{ h \to 0 }  \frac{f(t_{1},t_{2},\dots,t_{i}+h, \dots, t_{n})-f(t_{1},t_{2},\dots, t_{i}, \dots,t_{n})}{h}" data-display="true"><code>\left.\frac{ \partial f }{ \partial x_{i} }\right&#124;_{(t_{1},t_{2},\dots,t_{n})} =\lim_{ h \to 0 }  \frac{f(t_{1},t_{2},\dots,t_{i}+h, \dots, t_{n})-f(t_{1},t_{2},\dots, t_{i}, \dots,t_{n})}{h}</code></span>

混合偏导定理（Mixed Derivative Theorem）：若 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 及其偏导数 <span class="course-math" data-tex="f_x, f_y, f_{xy}, f_{yx}" data-display="false"><code>f_x, f_y, f_{xy}, f_{yx}</code></span> 在包含点 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 的某个开区域内处处有定义，且它们在 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 处都连续，则混合偏导相等：<span class="course-math" data-tex="f_{xy}(a,b)=f_{yx}(a,b)." data-display="false"><code>f_{xy}(a,b)=f_{yx}(a,b).</code></span> 
- 也就是说，若偏导数都连续，求偏导的顺序可以交换。

定义可微（Differentiable）：函数 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span> 在 <span class="course-math" data-tex="(x_0,y_0)" data-display="false"><code>(x_0,y_0)</code></span> 处可微，当且仅当 <span class="course-math" data-tex="f_x(x_0,y_0)" data-display="false"><code>f_x(x_0,y_0)</code></span> 与 <span class="course-math" data-tex="f_y(x_0,y_0)" data-display="false"><code>f_y(x_0,y_0)</code></span> 存在，且增量 <span class="course-math" data-tex="\Delta z" data-display="false"><code>\Delta z</code></span> 满足 <span class="course-math" data-tex="\Delta z=f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y+\varepsilon_1\Delta x+\varepsilon_2\Delta y" data-display="false"><code>\Delta z=f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y+\varepsilon_1\Delta x+\varepsilon_2\Delta y</code></span> 其中当 <span class="course-math" data-tex="\Delta x,\Delta y\to 0" data-display="false"><code>\Delta x,\Delta y\to 0</code></span> 时，<span class="course-math" data-tex="\varepsilon_1,\varepsilon_2\to 0" data-display="false"><code>\varepsilon_1,\varepsilon_2\to 0</code></span>。（高阶无穷小量）
定义函数可微（Differentiable function）：若 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在其定义域内每一点都可微，则称 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 可微，并称其图形为光滑曲面（smooth surface）。

二元函数增量定理（Increment Theorem for Functions of Two Variables）推论：
-  若 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 的偏导 <span class="course-math" data-tex="f_x,f_y" data-display="false"><code>f_x,f_y</code></span> 在开区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 内处处连续，则 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的每一点都可微。

多元函数在某个点可微，可以推出它在这一点连续。
要证明不可微，可以通过证明不连续。

<span class="course-math course-math-display" data-tex="偏导数连续    \implies可微    \implies连续 且 偏导数存在。" data-display="true"><code>偏导数连续    \implies可微    \implies连续 且 偏导数存在。</code></span>

### 链式法则
{: #section-5 }

链式法则（Chain Rule）：
- 一元自变量 + 二个中间变量：若 <span class="course-math" data-tex="w=f(x,y)" data-display="false"><code>w=f(x,y)</code></span> 可微，且 <span class="course-math" data-tex="x=x(t),\ y=y(t)" data-display="false"><code>x=x(t),\ y=y(t)</code></span> 是关于 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 的可微函数，则复合函数 <span class="course-math" data-tex="w=f(x(t),y(t))" data-display="false"><code>w=f(x(t),y(t))</code></span> 关于 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 可微，且有 <span class="course-math course-math-display" data-tex="\frac{dw}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}." data-display="true"><code>\frac{dw}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}.</code></span>
- 一元自变量 + 多个中间变量也类似： <span class="course-math" data-tex="w=f(x_{1},x_{2} ,\dots,x_{n}),x_{1}=x_{1}(t),x_{2}=x_{2}(t)\dots,x_{n}=x_{n}(t)" data-display="false"><code>w=f(x_{1},x_{2} ,\dots,x_{n}),x_{1}=x_{1}(t),x_{2}=x_{2}(t)\dots,x_{n}=x_{n}(t)</code></span>
<span class="course-math course-math-display" data-tex="\implies \frac{dw}{dt}=\sum \frac{ \partial f }{ \partial x_{i} } \frac{dx_{i}}{dt}" data-display="true"><code>\implies \frac{dw}{dt}=\sum \frac{ \partial f }{ \partial x_{i} } \frac{dx_{i}}{dt}</code></span>
- 二个自变量 + 三个中间变量：设 <span class="course-math" data-tex="w=f(x,y,z)" data-display="false"><code>w=f(x,y,z)</code></span>，且 <span class="course-math" data-tex="x=g(r,s),\ y=h(r,s),\ z=k(r,s)" data-display="false"><code>x=g(r,s),\ y=h(r,s),\ z=k(r,s)</code></span>；若这四个函数均可微，则 <span class="course-math" data-tex="w" data-display="false"><code>w</code></span> 关于 <span class="course-math" data-tex="r,s" data-display="false"><code>r,s</code></span> 有偏导，并满足
<span class="course-math course-math-display" data-tex="\frac{\partial w}{\partial r}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial r}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial r}+\frac{\partial w}{\partial z}\frac{\partial z}{\partial r}," data-display="true"><code>\frac{\partial w}{\partial r}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial r}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial r}+\frac{\partial w}{\partial z}\frac{\partial z}{\partial r},</code></span> <span class="course-math course-math-display" data-tex="\frac{\partial w}{\partial s}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial s}+\frac{\partial w}{\partial z}\frac{\partial z}{\partial s}." data-display="true"><code>\frac{\partial w}{\partial s}=\frac{\partial w}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial w}{\partial y}\frac{\partial y}{\partial s}+\frac{\partial w}{\partial z}\frac{\partial z}{\partial s}.</code></span>
隐函数求导公式（Implicit Differentiation）：设 <span class="course-math" data-tex="F(x,y)" data-display="false"><code>F(x,y)</code></span> 可微，且方程 <span class="course-math" data-tex="F(x,y)=0" data-display="false"><code>F(x,y)=0</code></span> 将 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 定义为 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的可微函数；则在任意满足 <span class="course-math" data-tex="F_y\neq 0" data-display="false"><code>F_y\neq 0</code></span> 的点处，<span class="course-math course-math-display" data-tex="\frac{dy}{dx}=-\frac{F_x}{F_y}." data-display="true"><code>\frac{dy}{dx}=-\frac{F_x}{F_y}.</code></span>
这个可以从链式法则直接推导出来。

### 方向导数与梯度
{: #section-6 }

二元函数 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 在 <span class="course-math" data-tex="P_{0}(x_{0},y_{0})" data-display="false"><code>P_{0}(x_{0},y_{0})</code></span> 处，在单位向量 <span class="course-math" data-tex="\mathbf{u}=u_{1}\mathbf{i}+u_{2}\mathbf{j}" data-display="false"><code>\mathbf{u}=u_{1}\mathbf{i}+u_{2}\mathbf{j}</code></span> 的方向的导数定义为：
<span class="course-math course-math-display" data-tex="\left( \frac{df}{ds} \right)_{\mathbf{u},P_{0}}= \lim_{ s \to 0 } \frac{f(x_{0}+su_{1}, y_{0}+su_{2})-f(x_{0},y_{0})}{s}" data-display="true"><code>\left( \frac{df}{ds} \right)_{\mathbf{u},P_{0}}= \lim_{ s \to 0 } \frac{f(x_{0}+su_{1}, y_{0}+su_{2})-f(x_{0},y_{0})}{s}</code></span>
也记作 <span class="course-math" data-tex="(D_{\mathbf{u}}f)_{P_{0}}" data-display="false"><code>(D_{\mathbf{u}}f)_{P_{0}}</code></span>。
通过链式法则，由于 <span class="course-math" data-tex="x=x_{0}+su_{1}, y=y_{0}+su_{2}" data-display="false"><code>x=x_{0}+su_{1}, y=y_{0}+su_{2}</code></span> 我们可以把它拆成：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;(D_{\mathbf{u}}f)_{P_{0}}&amp;= \left( \frac{df}{ds} \right)_{\mathbf{u},P_{0}} \\&#10;&amp;= \left(\frac{ \partial f }{ \partial x }\right)_{P_{0}} \frac{dx}{ds}+\left(\frac{ \partial f }{ \partial y }\right)_{P_{0}} \frac{dy}{ds} \\&#10;&amp;= \left(\frac{ \partial f }{ \partial x }\right)_{P_{0}} u_{1}+\left(\frac{ \partial f }{ \partial y }\right)_{P_{0}}u_{2} \\&#10;&amp;=\left( \frac{ \partial f }{ \partial x } \mathbf{i}+\frac{ \partial f }{ \partial y } \mathbf{j} \right) \left( u_{1}\mathbf{i}+u_{2}\mathbf{j} \right) &#10;\end{align}" data-display="true"><code>\begin{align}&#10;(D_{\mathbf{u}}f)_{P_{0}}&amp;= \left( \frac{df}{ds} \right)_{\mathbf{u},P_{0}} \\&#10;&amp;= \left(\frac{ \partial f }{ \partial x }\right)_{P_{0}} \frac{dx}{ds}+\left(\frac{ \partial f }{ \partial y }\right)_{P_{0}} \frac{dy}{ds} \\&#10;&amp;= \left(\frac{ \partial f }{ \partial x }\right)_{P_{0}} u_{1}+\left(\frac{ \partial f }{ \partial y }\right)_{P_{0}}u_{2} \\&#10;&amp;=\left( \frac{ \partial f }{ \partial x } \mathbf{i}+\frac{ \partial f }{ \partial y } \mathbf{j} \right) \left( u_{1}\mathbf{i}+u_{2}\mathbf{j} \right) &#10;\end{align}</code></span>
这里定义 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 的梯度（Gradient） 为向量
<span class="course-math course-math-display" data-tex="\nabla f=\frac{ \partial f }{ \partial x } \mathbf{i}+\frac{ \partial f }{ \partial y } \mathbf{j}" data-display="true"><code>\nabla f=\frac{ \partial f }{ \partial x } \mathbf{i}+\frac{ \partial f }{ \partial y } \mathbf{j}</code></span>
（更高维度也可以类似定义）
那么有
<span class="course-math course-math-display" data-tex="D_{\mathbf{u}}f=\nabla f\cdot \mathbf{u}=\left&#124; \nabla f \right&#124; \cos\theta" data-display="true"><code>D_{\mathbf{u}}f=\nabla f\cdot \mathbf{u}=\left&#124; \nabla f \right&#124; \cos\theta</code></span>
所以，<span class="course-math" data-tex="\theta=0" data-display="false"><code>\theta=0</code></span> 时 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 增长最快，<span class="course-math" data-tex="\theta=\pi" data-display="false"><code>\theta=\pi</code></span> 时 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 衰减最快，<span class="course-math" data-tex="\theta=\frac{\pi}{2}" data-display="false"><code>\theta=\frac{\pi}{2}</code></span> 时 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 不改变。
向量 <span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span> 与曲线 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span> 的等值线（Level Curve）成法向（Normal）（与方向向量垂直）。所以可以写出等值线的切线：
<span class="course-math course-math-display" data-tex="f_{x}(x-x_{0})+f_{y}(y-y_{0})=0" data-display="true"><code>f_{x}(x-x_{0})+f_{y}(y-y_{0})=0</code></span>
并且，<span class="course-math" data-tex="\nabla" data-display="false"><code>\nabla</code></span> 算子的加/减/数乘/乘/除的规则都和求导算子 <span class="course-math" data-tex="\frac{d}{dx}" data-display="false"><code>\frac{d}{dx}</code></span> 类似。

路径导数的链式法则：若 <span class="course-math" data-tex="\mathbf{r}(t)=x(t)\mathbf{i}+y(t)\mathbf{j}+z(t)\mathbf{j}" data-display="false"><code>\mathbf{r}(t)=x(t)\mathbf{i}+y(t)\mathbf{j}+z(t)\mathbf{j}</code></span> 为一条平滑路径，<span class="course-math" data-tex="f(\mathbf{r}(t))" data-display="false"><code>f(\mathbf{r}(t))</code></span> 是路径上的一个函数，则有
<span class="course-math course-math-display" data-tex="\frac{d}{dt}f(\mathbf{r}(t))=\nabla f(\mathbf{r}(t))\cdot \mathbf{r}&#x27;(t)" data-display="true"><code>\frac{d}{dt}f(\mathbf{r}(t))=\nabla f(\mathbf{r}(t))\cdot \mathbf{r}&#x27;(t)</code></span>

切平面：从上面的链式法则，若左边为零，也就是说，<span class="course-math" data-tex="\mathbf{r}(t)" data-display="false"><code>\mathbf{r}(t)</code></span> 为等值面 <span class="course-math" data-tex="f(x,y,z)=c" data-display="false"><code>f(x,y,z)=c</code></span> 上的一个路径，则 <span class="course-math" data-tex="f(\mathbf{r}(t))" data-display="false"><code>f(\mathbf{r}(t))</code></span> 为常数，那么右边的两个向量 <span class="course-math" data-tex="\nabla f(\mathbf{r}(t))" data-display="false"><code>\nabla f(\mathbf{r}(t))</code></span> 与 <span class="course-math" data-tex="\mathbf{r}&#x27;(t)" data-display="false"><code>\mathbf{r}&#x27;(t)</code></span> 垂直。故而定义等值面 <span class="course-math" data-tex="f(x,y,z)=c" data-display="false"><code>f(x,y,z)=c</code></span>  在 <span class="course-math" data-tex="P_{0}(x_{0},y_{0},z_{0})" data-display="false"><code>P_{0}(x_{0},y_{0},z_{0})</code></span> 的切平面（Tangent Plane）为经过 <span class="course-math" data-tex="P_{0}" data-display="false"><code>P_{0}</code></span>，以 <span class="course-math" data-tex="(\nabla f)_{P_{0}}" data-display="false"><code>(\nabla f)_{P_{0}}</code></span>  为法向量的平面：
<span class="course-math course-math-display" data-tex="f_{x}(x-x_{0})+f_{y}(y-y_{0})+f_{z}(z-z_{0})=0" data-display="true"><code>f_{x}(x-x_{0})+f_{y}(y-y_{0})+f_{z}(z-z_{0})=0</code></span>
法线：经过 <span class="course-math" data-tex="P_{0}" data-display="false"><code>P_{0}</code></span> 且平行与 <span class="course-math" data-tex="(\nabla f)_{P_{0}}" data-display="false"><code>(\nabla f)_{P_{0}}</code></span> 的直线
<span class="course-math course-math-display" data-tex="x=x_{0}+f_{x}t, y= y_{0}+f_{y}t, z=z_{0}+f_{z}t" data-display="true"><code>x=x_{0}+f_{x}t, y= y_{0}+f_{y}t, z=z_{0}+f_{z}t</code></span>
要求曲面 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span> 的切面和法线，可以转化为 <span class="course-math" data-tex="F(x,y,z)=f(x,y)-z=0" data-display="false"><code>F(x,y,z)=f(x,y)-z=0</code></span> 然后用上面的公式。

### 多元函数的线性化
{: #section-7 }

可以估计多元函数在某个方向的增量：
<span class="course-math course-math-display" data-tex="df=(D_{\mathbf{u}}f)_{P_{0}} ds=((\nabla f)_{{P_{0}}} \cdot \mathbf{u})s" data-display="true"><code>df=(D_{\mathbf{u}}f)_{P_{0}} ds=((\nabla f)_{{P_{0}}} \cdot \mathbf{u})s</code></span>
从而有线性化 (Linearization)：
<span class="course-math course-math-display" data-tex="L(x,y)=f(x_{0},y_{0})+f_{x}(x-x_{0})+f_{y}(y-y_{0})" data-display="true"><code>L(x,y)=f(x_{0},y_{0})+f_{x}(x-x_{0})+f_{y}(y-y_{0})</code></span>
用 <span class="course-math" data-tex="L(x,y)" data-display="false"><code>L(x,y)</code></span> 来估计 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 称为标准线性估计（Standard Linear Approximation）
在一个矩形区域中，如果 <span class="course-math" data-tex="&#124;f_{x x}&#124;,&#124;f_{y y}&#124;, &#124;f_{xy}&#124;" data-display="false"><code>&#124;f_{x x}&#124;,&#124;f_{y y}&#124;, &#124;f_{xy}&#124;</code></span> 有上界 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span>，则误差 <span class="course-math" data-tex="E(x,y)=f(x,y)-L(x,y)" data-display="false"><code>E(x,y)=f(x,y)-L(x,y)</code></span> 满足
<span class="course-math course-math-display" data-tex="&#124;E(x,y)&#124;\leq \frac{1}{2}M(&#124;x-x_{0}&#124;+&#124;y-y_{0}&#124;)^{2}" data-display="true"><code>&#124;E(x,y)&#124;\leq \frac{1}{2}M(&#124;x-x_{0}&#124;+&#124;y-y_{0}&#124;)^{2}</code></span>
在线性化中，称全微分（Total Differential）为
<span class="course-math course-math-display" data-tex="df=f_{x}dx+f_{y}dy" data-display="true"><code>df=f_{x}dx+f_{y}dy</code></span>
更多元的情况也类似。

### 极值
{: #section-8 }

一阶导测试（First Derivative Test）：若二元函数 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 在某内点处存在极值，且该点偏导存在，则该点处 <span class="course-math" data-tex="f_{x}=0,f_{y}=0" data-display="false"><code>f_{x}=0,f_{y}=0</code></span>。

定义二元函数的关键点（Critical Point）为 <span class="course-math" data-tex="f_{x},f_{y}" data-display="false"><code>f_{x},f_{y}</code></span> 全为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 或至少有一个不存在的情况。

定义二元函数的鞍点（Saddle Point）为对任意以它为中心的圆盘中，都存在定义域内值更小的点和值更大的点。

二阶导测试（Second Derivative Test）： 定义 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的判别式（discriminant）或海森（Hessian）为海森矩阵的行列式：
<span class="course-math course-math-display" data-tex="D=f_{x x}f_{yy}-f_{x y}^{2}= \left&#124; \begin{matrix} f_{x x} &amp; f_{x y} \\&#10;f_{xy}  &amp; f_{yy} \end{matrix} \right&#124;" data-display="true"><code>D=f_{x x}f_{yy}-f_{x y}^{2}= \left&#124; \begin{matrix} f_{x x} &amp; f_{x y} \\&#10;f_{xy}  &amp; f_{yy} \end{matrix} \right&#124;</code></span>
那么，若已知某点处 <span class="course-math" data-tex="f_{x}=f_{y}=0" data-display="false"><code>f_{x}=f_{y}=0</code></span>：
- 若 <span class="course-math" data-tex="D&gt;0" data-display="false"><code>D&gt;0</code></span>：
  - 若 <span class="course-math" data-tex="f_{x x}&gt;0" data-display="false"><code>f_{x x}&gt;0</code></span>，则该点为极小值点。
  - 若 <span class="course-math" data-tex="f_{x x}&lt;0" data-display="false"><code>f_{x x}&lt;0</code></span>，则该点为极大值点。
- 若 <span class="course-math" data-tex="D&lt;0" data-display="false"><code>D&lt;0</code></span>：该点为鞍点。
- 若 <span class="course-math" data-tex="D=0" data-display="false"><code>D=0</code></span>：测试失效。

若要找全局的最值，则应列出所有关键点处的值以及边界上的极值，然后找出最小和最大的。

### 拉格朗日乘子
{: #section-9 }

拉格朗日乘子法（The Method of Lagrange Multipliers）：在条件 <span class="course-math" data-tex="g(x,y,z)=0" data-display="false"><code>g(x,y,z)=0</code></span> 的限制下求 <span class="course-math" data-tex="f(x,y,z)" data-display="false"><code>f(x,y,z)</code></span> 的极值，则在极值点处，有方程
<span class="course-math course-math-display" data-tex="\nabla f=\lambda \nabla g" data-display="true"><code>\nabla f=\lambda \nabla g</code></span>
对 <span class="course-math" data-tex="\lambda \in \mathbb{R}" data-display="false"><code>\lambda \in \mathbb{R}</code></span> 成立。这里 <span class="course-math" data-tex="\nabla g\neq 0" data-display="false"><code>\nabla g\neq 0</code></span>。 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 就是拉格朗日乘子。只要结合 <span class="course-math" data-tex="g(x,y,z)=0" data-display="false"><code>g(x,y,z)=0</code></span> 解方程即可。

几何解释：考察任意 <span class="course-math" data-tex="g=0" data-display="false"><code>g=0</code></span> 上的曲线 <span class="course-math" data-tex="C:\mathbf{r}(t)" data-display="false"><code>C:\mathbf{r}(t)</code></span>，若  <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在它上面某点取得极值，则有 <span class="course-math" data-tex="\nabla f\cdot \mathbf{r}&#x27;(t)=0" data-display="false"><code>\nabla f\cdot \mathbf{r}&#x27;(t)=0</code></span>，也就是，<span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span> 垂直于这一点处曲线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的切向量。另外，在这一点也有 <span class="course-math" data-tex="\nabla g" data-display="false"><code>\nabla g</code></span>  垂直于 <span class="course-math" data-tex="g=0" data-display="false"><code>g=0</code></span>。所以考察 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 在 <span class="course-math" data-tex="g=0" data-display="false"><code>g=0</code></span> 上的最值，有 <span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span> 与 <span class="course-math" data-tex="\nabla g" data-display="false"><code>\nabla g</code></span> 共线。这就说明了拉格朗日乘子法的有效性。

如果有两个限制条件 <span class="course-math" data-tex="g_{1}=0,g_{2}=0" data-display="false"><code>g_{1}=0,g_{2}=0</code></span>，那么要满足：
<span class="course-math course-math-display" data-tex="\nabla f=\lambda \nabla g_{1}+\mu \nabla g_{2}" data-display="true"><code>\nabla f=\lambda \nabla g_{1}+\mu \nabla g_{2}</code></span>
几何解释：在 <span class="course-math" data-tex="g_{1}=0" data-display="false"><code>g_{1}=0</code></span>，<span class="course-math" data-tex="g_{2}=0" data-display="false"><code>g_{2}=0</code></span> 的交线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 上， <span class="course-math" data-tex="\nabla g_{1}" data-display="false"><code>\nabla g_{1}</code></span> 与 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 垂直，<span class="course-math" data-tex="\nabla g_{2}" data-display="false"><code>\nabla g_{2}</code></span> 也与 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 垂直。于是 <span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span> 要处在它们构成的平面内，才能使 <span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span> 垂直于曲线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的切向量。


### 二元函数的泰勒公式
{: #section-10 }

在 <span class="course-math" data-tex="(a,b)" data-display="false"><code>(a,b)</code></span> 处的 <span class="course-math" data-tex="n+1" data-display="false"><code>n+1</code></span> 阶泰勒公式：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Partial%20Derivatives%20-%20%20%E5%81%8F%E5%AF%BC%E6%95%B0.png' | relative_url }}{% raw %}" alt="Partial Derivatives -  偏导数" loading="lazy">
把这里的 <span class="course-math" data-tex="h,k" data-display="false"><code>h,k</code></span> 换成 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span>，可以写出在原点处的 <span class="course-math" data-tex="n+1" data-display="false"><code>n+1</code></span> 阶泰勒公式：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Partial%20Derivatives%20-%20%20%E5%81%8F%E5%AF%BC%E6%95%B0-1.png' | relative_url }}{% raw %}" alt="Partial Derivatives -  偏导数-1" loading="lazy">
也就是说
<span class="course-math course-math-display" data-tex="f(x,y)=\left( \sum_{k=0}^{n} \frac{1}{k!}\left( x \frac{ \partial  }{ \partial x } +y \frac{ \partial  }{ \partial y }  \right)^{k}f   \right)+ \left( \frac{1}{(n+1)!}\left( x\frac{ \partial  }{ \partial x } +y\frac{ \partial  }{ \partial y }  \right)^{n+1} f\right)_{(cx, cy)}" data-display="true"><code>f(x,y)=\left( \sum_{k=0}^{n} \frac{1}{k!}\left( x \frac{ \partial  }{ \partial x } +y \frac{ \partial  }{ \partial y }  \right)^{k}f   \right)+ \left( \frac{1}{(n+1)!}\left( x\frac{ \partial  }{ \partial x } +y\frac{ \partial  }{ \partial y }  \right)^{n+1} f\right)_{(cx, cy)}</code></span>
{% endraw %}
