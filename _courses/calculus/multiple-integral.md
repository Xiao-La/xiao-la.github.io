---
title: "Multiple Integral - 多重积分"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "下"
status: "completed"
reference: false
layout: "course"
permalink: "/courses/calculus/multiple-integral/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Multiple Integral - 多重积分"
excerpt: "高等数学（上）/（下） · Multiple Integral - 多重积分"
---

{% raw %}

二重积分（Double Integral）用黎曼和定义：
<span class="course-math course-math-display" data-tex="\lim_{ n \to \infty } \sum_{i=1}^n f(x_{i},y_{i})\Delta A_{i}:=\iint _{R}f(x,y)dxdy" data-display="true"><code>\lim_{ n \to \infty } \sum_{i=1}^n f(x_{i},y_{i})\Delta A_{i}:=\iint _{R}f(x,y)dxdy</code></span>
有时 <span class="course-math" data-tex="dxdy" data-display="false"><code>dxdy</code></span> 写成 <span class="course-math" data-tex="dA" data-display="false"><code>dA</code></span>。**它的几何意义是曲面 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span> 下方的体积。**
要计算二重积分，我们把它转化为累次积分（Iterated integral/Repeated integral），也就是切成横条或竖条计算面积，再把面积积分成体积。这种方法就是富比尼定理（Fubini's Theorem）：
- 若 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 在区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 内连续，若区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 用 <span class="course-math" data-tex="a\leq x\leq b, g_{1}(x)\leq y\leq g_{2}(x)" data-display="false"><code>a\leq x\leq b, g_{1}(x)\leq y\leq g_{2}(x)</code></span> 定义，且 <span class="course-math" data-tex="g_{1},g_{2}" data-display="false"><code>g_{1},g_{2}</code></span> 在 <span class="course-math" data-tex="\left[ a,b \right]" data-display="false"><code>\left[ a,b \right]</code></span> 上连续，则有
<span class="course-math course-math-display" data-tex="\iint_{R}f(x,y)dA=\int _{a}^b\int_{g_{1}(x)}^{g_{2}(x)}f(x,y)dydx" data-display="true"><code>\iint_{R}f(x,y)dA=\int _{a}^b\int_{g_{1}(x)}^{g_{2}(x)}f(x,y)dydx</code></span>
- 上面这种方法相当于竖切，横切也类似，就是先对 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 积分再对 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 积分。
二重积分对数乘/加减是可交换顺序的；若一个函数在区域内恒大于另一个函数，则对它们做二重积分仍然更大；若把区域拆成两个不相交的区域，则积分可以拆成两个区域的积分相加。

在极坐标中：
<span class="course-math course-math-display" data-tex="dA=dxdy=r d\theta dr, y=r\sin\theta, x=r\cos\theta" data-display="true"><code>dA=dxdy=r d\theta dr, y=r\sin\theta, x=r\cos\theta</code></span>
在极坐标中往往是先积 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 再积 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 的。每个 <span class="course-math" data-tex="dA" data-display="false"><code>dA</code></span> 看成小弧长 <span class="course-math" data-tex="r d\theta" data-display="false"><code>r d\theta</code></span> 和长度 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 变化量的乘积。
若积分区域与圆有关，或被积函数中有 <span class="course-math" data-tex="x^{2}+y^{2} ,\arctan\left( \frac{y}{x} \right)" data-display="false"><code>x^{2}+y^{2} ,\arctan\left( \frac{y}{x} \right)</code></span> 之类的东西，考虑用极坐标来做。有时，也可以将极坐标转回直角坐标。

由于是定积分，有如下技巧：
- 若积分区域关于 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 轴对称，又有 <span class="course-math" data-tex="f(x,y)=-f(x,-y)" data-display="false"><code>f(x,y)=-f(x,-y)</code></span>（关于 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 是奇函数），则积分值为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。关于 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 轴对称也类似。
- 若积分区域关于 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 轮换对称，那么可以尝试将积分中的变量 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 互换，积分值不变。再与原来的积分进行加减或许可以化简积分。

三重积分（Triple Integral）：
<span class="course-math course-math-display" data-tex="\iiint_{D} f(x,y,z)dxdydz" data-display="true"><code>\iiint_{D} f(x,y,z)dxdydz</code></span>
有时 <span class="course-math" data-tex="dxdydz" data-display="false"><code>dxdydz</code></span> 写作 <span class="course-math" data-tex="dV" data-display="false"><code>dV</code></span>。几何意义可以解释为，密度函数为 <span class="course-math" data-tex="f(x,y,z)" data-display="false"><code>f(x,y,z)</code></span> 在某个区域内的质量。
计算方式还是写成累次积分。这里累次积分的上下限，例如先积 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span>，找到它的上下顶，观察积分区域在 <span class="course-math" data-tex="xOy" data-display="false"><code>xOy</code></span> 平面的投影，这个二维的区域就转化成了二重积分做过的情况，可以找到 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 的积分上下限。

计算三重积分，可以先观察一下 <span class="course-math" data-tex="dV" data-display="false"><code>dV</code></span> 和 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是否可以只用一个变量表示，这样转化为一个一元变量定积分：区域如果能在三维坐标系中精确画出来，就很可能可以切成一个个薄片来算。

柱坐标（Cylindrical Coordinates）<span class="course-math" data-tex="(r,\theta,z)" data-display="false"><code>(r,\theta,z)</code></span>：和极坐标相同，对于固定的 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span>，可以替换 <span class="course-math" data-tex="x=r\cos\theta,y=r\sin\theta,dxdydz=r d r d \theta dz" data-display="false"><code>x=r\cos\theta,y=r\sin\theta,dxdydz=r d r d \theta dz</code></span>。

球坐标(Spherical Coordinates) <span class="course-math" data-tex="(\rho,\theta,\phi)" data-display="false"><code>(\rho,\theta,\phi)</code></span>：
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;x=\rho\sin \phi \cos\theta \\&#10;y=\rho\sin \phi \sin\theta \\&#10;z=\rho\cos \phi&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;x=\rho\sin \phi \cos\theta \\&#10;y=\rho\sin \phi \sin\theta \\&#10;z=\rho\cos \phi&#10;\end{cases}</code></span>
积分区域与球面有关时，考虑用球坐标。
<span class="course-math course-math-display" data-tex="dxdydz=\rho^{2}\sin \phi d \rho d\theta d\phi" data-display="true"><code>dxdydz=\rho^{2}\sin \phi d \rho d\theta d\phi</code></span>
往往是先积 <span class="course-math" data-tex="\rho" data-display="false"><code>\rho</code></span> ，再积 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span> ，最后积 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span>。

对于一般的换元
<span class="course-math course-math-display" data-tex="x=g(u,v),y=h(u,v)" data-display="true"><code>x=g(u,v),y=h(u,v)</code></span>
定义雅各比行列式（Jacobian determinant）为
<span class="course-math course-math-display" data-tex="J(u,v)=\left&#124; \begin{matrix} \frac{ \partial x }{ \partial u }  &amp; \frac{ \partial x  }{ \partial v } \\&#10;\frac{ \partial y }{ \partial u }  &amp; \frac{ \partial y }{ \partial v }   \end{matrix} \right&#124; =\frac{ \partial x }{ \partial u } \frac{ \partial y }{ \partial v } -\frac{ \partial x }{ \partial v } \frac{ \partial y }{ \partial u }" data-display="true"><code>J(u,v)=\left&#124; \begin{matrix} \frac{ \partial x }{ \partial u }  &amp; \frac{ \partial x  }{ \partial v } \\&#10;\frac{ \partial y }{ \partial u }  &amp; \frac{ \partial y }{ \partial v }   \end{matrix} \right&#124; =\frac{ \partial x }{ \partial u } \frac{ \partial y }{ \partial v } -\frac{ \partial x }{ \partial v } \frac{ \partial y }{ \partial u }</code></span>
记作
<span class="course-math course-math-display" data-tex="J(u,v)= \frac{\partial(x,y)}{\partial(u,v)}" data-display="true"><code>J(u,v)= \frac{\partial(x,y)}{\partial(u,v)}</code></span>
那么有
<span class="course-math course-math-display" data-tex="dxdy=&#124;J(u,v)&#124;dudv" data-display="true"><code>dxdy=&#124;J(u,v)&#124;dudv</code></span>
（理解：对于新坐标系下的某一点 <span class="course-math" data-tex="(u_{0},v_{0})" data-display="false"><code>(u_{0},v_{0})</code></span>，它由 <span class="course-math" data-tex="(x_{0},y_{0})" data-display="false"><code>(x_{0},y_{0})</code></span> 在经过变换 <span class="course-math" data-tex="x=g(u,v),y=h(u,v)" data-display="false"><code>x=g(u,v),y=h(u,v)</code></span> 得到，它附近的一个极小的平行四边形可以看作由原坐标系下的一个单位正方形做 **线性变换** 得到，而这个变换导致的面积变化也就是乘上 <span class="course-math" data-tex="J(u,v)" data-display="false"><code>J(u,v)</code></span>。考虑 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 是 <span class="course-math" data-tex="u,v" data-display="false"><code>u,v</code></span> 的线性组合的情况，就容易理解了。）
更高维的情况也类似。

应用：三维空间中的质量和一阶矩（First moment）
<span class="course-math course-math-display" data-tex="M=\iiint_{D}\delta dV" data-display="true"><code>M=\iiint_{D}\delta dV</code></span>
以及关于 <span class="course-math" data-tex="yz" data-display="false"><code>yz</code></span> 平面的一阶矩
<span class="course-math course-math-display" data-tex="M_{yz}=\iiint_{D}x\delta dV" data-display="true"><code>M_{yz}=\iiint_{D}x\delta dV</code></span>
那么质心的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 坐标为
<span class="course-math course-math-display" data-tex="\bar{x}= \frac{M_{yz}}{M}" data-display="true"><code>\bar{x}= \frac{M_{yz}}{M}</code></span>

三维空间中的转动惯量/质量惯性矩/二阶矩（Moments of inertia/Second Moment）（关于某个直线 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span>）
<span class="course-math course-math-display" data-tex="I=\iiint_{D}r^{2}dm=\iiint _{D}r^{2}\delta dV" data-display="true"><code>I=\iiint_{D}r^{2}dm=\iiint _{D}r^{2}\delta dV</code></span>
其中 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 为点 <span class="course-math" data-tex="(x,y,z)" data-display="false"><code>(x,y,z)</code></span> 到 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 的距离。用 <span class="course-math" data-tex="I_{x},I_{y},I_{z}" data-display="false"><code>I_{x},I_{y},I_{z}</code></span> 表示关于 <span class="course-math" data-tex="x,y,z" data-display="false"><code>x,y,z</code></span> 轴的转动惯量。
{% endraw %}
