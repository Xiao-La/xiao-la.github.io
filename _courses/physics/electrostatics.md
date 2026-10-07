---
title: "Electrostatics - 静电学"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-02-27T16:45:43+08:00"
updated_at: "2026-04-13T20:17:01+08:00"
reference: false
order: 10
layout: "course"
permalink: "/courses/physics/electrostatics/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Electrostatics - 静电学"
excerpt: "大学物理（上）/（下） · Electrostatics - 静电学"
---

{% raw %}

## 库仑定律（Coulomb's Law）
{: #section-1 }


元电荷 <span class="course-math" data-tex="e=1.60 \times 10^{-19}\,\text{C}" data-display="false"><code>e=1.60 \times 10^{-19}\,\text{C}</code></span>，宏观的电荷 <span class="course-math" data-tex="q=ne" data-display="false"><code>q=ne</code></span>，其中 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 为整数。

电子的移动能使物体带电，且通过感应可以充电（Charging by induction）。

材料可以分为导体（Conductors），绝缘体（Insulators），半导体（Semiconductors）。

**库仑定律**：
<span class="course-math course-math-display" data-tex="F=k \frac{&#124;q_{1}q_{2}&#124;}{r^{2}}" data-display="true"><code>F=k \frac{&#124;q_{1}q_{2}&#124;}{r^{2}}</code></span>
其中电荷的单位为库伦（Coulomb, <span class="course-math" data-tex="1\text{C}=1\text{A}\cdot\text{S}" data-display="false"><code>1\text{C}=1\text{A}\cdot\text{S}</code></span>）。
并有 <span class="course-math" data-tex="k=\frac{1}{4\pi \varepsilon_{0}}(=8.99\times 10^9\, \text{N}\times\text{m}^2\text{/C}^2)" data-display="false"><code>k=\frac{1}{4\pi \varepsilon_{0}}(=8.99\times 10^9\, \text{N}\times\text{m}^2\text{/C}^2)</code></span>，其中 <span class="course-math" data-tex="\varepsilon_{0}" data-display="false"><code>\varepsilon_{0}</code></span> 为真空介电常数。
矢量形式：
<span class="course-math course-math-display" data-tex="\vec{F}\text{(on 2)}=k \frac{q_{1}q_{2}}{&#124;\vec{r_{2}}-\vec{r_{1}}&#124;^3} (\vec{r_{2}}-\vec{r_{1}})" data-display="true"><code>\vec{F}\text{(on 2)}=k \frac{q_{1}q_{2}}{&#124;\vec{r_{2}}-\vec{r_{1}}&#124;^3} (\vec{r_{2}}-\vec{r_{1}})</code></span>

## 电场 （Electric Field）
{: #section-2 }


场（Field）是一种具有能量，质量和动量的客观存在的物质。
用场线（Field Lines）可以描述场的方向，也可用线的疏密，定性描述场的强度。
电荷之间的相互作用并非超距作用，而是**电场**的作用。
定义**电场强度**：
<span class="course-math course-math-display" data-tex="\vec{E}=\frac{\vec{F}}{q_{0}}" data-display="true"><code>\vec{E}=\frac{\vec{F}}{q_{0}}</code></span>
其中 <span class="course-math" data-tex="q_{0}" data-display="false"><code>q_{0}</code></span> 为一个正的试探电荷，<span class="course-math" data-tex="\vec{F}" data-display="false"><code>\vec{F}</code></span> 为它受到的电场力的作用。

求解一般带电物体产生的电场，可以定义电荷的线密度 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> /面密度 <span class="course-math" data-tex="\sigma" data-display="false"><code>\sigma</code></span> /体密度 <span class="course-math" data-tex="\rho" data-display="false"><code>\rho</code></span>，将 <span class="course-math" data-tex="dQ" data-display="false"><code>dQ</code></span> 写成与坐标有关的形式，然后写出各方向上电场的分量，就会变成一个积分问题。
复杂积分考试时通常会给公式。

常见公式：
<span class="course-math course-math-display" data-tex="E= \frac{\sigma}{2\varepsilon_{0}}\left( 1- \frac{z}{\sqrt{ z^{2}+R^{2} }} \right)\text{(charged disk)}" data-display="true"><code>E= \frac{\sigma}{2\varepsilon_{0}}\left( 1- \frac{z}{\sqrt{ z^{2}+R^{2} }} \right)\text{(charged disk)}</code></span>
<span class="course-math course-math-display" data-tex="E=\frac{qz}{4\pi \varepsilon_{0}(x^{2}+R^{2})^{3/2}}\text{(charged ring)}" data-display="true"><code>E=\frac{qz}{4\pi \varepsilon_{0}(x^{2}+R^{2})^{3/2}}\text{(charged ring)}</code></span>


电场也满足球壳定理。

孤立导体的性质：
- 导体的内部电场为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。
- 导体的电荷都分布在表面。
- 导体四周的电场与导体表面垂直。

### 电偶极子（Electric Dipole）
{: #section-3 }


电偶极子指一对大小相等，方向相反，距离为 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 的电荷体系。
定义电偶极矩（Electric Dipole Moment）<span class="course-math" data-tex="&#124;\vec{p}&#124;=qd" data-display="false"><code>&#124;\vec{p}&#124;=qd</code></span>，方向由负电荷指向正电荷。
当距离电偶极子很远的时候：
<span class="course-math course-math-display" data-tex="E=\frac{1}{2\pi \varepsilon_{0}} \frac{p}{z^{3}}\text{(electric dipole)}" data-display="true"><code>E=\frac{1}{2\pi \varepsilon_{0}} \frac{p}{z^{3}}\text{(electric dipole)}</code></span>

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electrostatics%20-%20%E9%9D%99%E7%94%B5%E5%AD%A6.png' | relative_url }}{% raw %}" alt="Electrostatics - 静电学" width="298" height="308" loading="lazy" decoding="async">
则可以推出：
- 当 <span class="course-math" data-tex="y\gg d" data-display="false"><code>y\gg d</code></span> 时， <span class="course-math" data-tex="E(y)= \frac{\vec{p}}{2\pi \varepsilon_{0}y^3}" data-display="false"><code>E(y)= \frac{\vec{p}}{2\pi \varepsilon_{0}y^3}</code></span>。
- 当 <span class="course-math" data-tex="x\gg d" data-display="false"><code>x\gg d</code></span> 时，<span class="course-math" data-tex="E(x)=- \frac{\vec{p}}{4\pi \varepsilon_{0}x^3}" data-display="false"><code>E(x)=- \frac{\vec{p}}{4\pi \varepsilon_{0}x^3}</code></span>。 
并且有 <span class="course-math" data-tex="\vec{\tau}=\vec{p}\times \vec{E}" data-display="false"><code>\vec{\tau}=\vec{p}\times \vec{E}</code></span>，<span class="course-math" data-tex="U=-W=-\int \tau d\theta=-\vec{p}\cdot \vec{E}" data-display="false"><code>U=-W=-\int \tau d\theta=-\vec{p}\cdot \vec{E}</code></span>。
微波炉的原理就是水分子作为电偶极子会在电场中旋转产生动能。


### 电通量（Electric Flux）
{: #section-4 }


对于一个面，可以定义它的**面积矢量（Surface Area）**，矢量的大小为面积的大小，方向为法线的方向之一。我们规定：
- 若面是有向的线围成的，则使用右手定则确定矢量方向。
- 若面围成了一块体积，则矢量的方向由体的内部指向外部。

从而可以定义电通量
<span class="course-math course-math-display" data-tex="\Phi = \vec{E} \cdot \vec{A}=&#124;\vec{E}&#124;&#124;\vec{A}&#124;\cos \theta" data-display="true"><code>\Phi = \vec{E} \cdot \vec{A}=&#124;\vec{E}&#124;&#124;\vec{A}&#124;\cos \theta</code></span>
对于一个闭合曲面（高斯曲面，Gaussian Surface），里面放一个正电荷，则总电通量必然为正；放一个负电荷，则总电通量必然为负。
<span class="course-math course-math-display" data-tex="\Phi = \oint \vec{E} \cdot d\vec{A}" data-display="true"><code>\Phi = \oint \vec{E} \cdot d\vec{A}</code></span>
对于一个球：
<span class="course-math course-math-display" data-tex="\Phi=\oint \frac{1}{4\pi\varepsilon_{0}} \frac{q}{r^{2}}dA=\frac{1}{4\pi \varepsilon_{0}} \frac{q}{r^{2}}4\pi r^{2}=\frac{q}{\varepsilon_{0}}" data-display="true"><code>\Phi=\oint \frac{1}{4\pi\varepsilon_{0}} \frac{q}{r^{2}}dA=\frac{1}{4\pi \varepsilon_{0}} \frac{q}{r^{2}}4\pi r^{2}=\frac{q}{\varepsilon_{0}}</code></span>
进一步推广，得到 **高斯定律（Gauss's Law）**：对于高斯曲面，它内部所包的电荷为 <span class="course-math" data-tex="q_{\text{enc}}" data-display="false"><code>q_{\text{enc}}</code></span>。则
<span class="course-math course-math-display" data-tex="\Phi= \frac{q_{\text{enc}}}{\varepsilon_{0}}" data-display="true"><code>\Phi= \frac{q_{\text{enc}}}{\varepsilon_{0}}</code></span>
或
<span class="course-math course-math-display" data-tex="\varepsilon_{0} \oint \vec{E}\cdot d\vec{A}=q_{\text{enc}}" data-display="true"><code>\varepsilon_{0} \oint \vec{E}\cdot d\vec{A}=q_{\text{enc}}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electrostatics%20-%20%E9%9D%99%E7%94%B5%E5%AD%A6-1.png' | relative_url }}{% raw %}" alt="Electrostatics - 静电学-1" width="364" height="207" loading="lazy" decoding="async">
例如无穷大均匀带电面的电场，满足 <span class="course-math" data-tex="q_{\text{enc}}=\sigma A=\varepsilon_{0} \oint EdA=\varepsilon_{0} E (2A)\implies E=\frac{\sigma}{2\varepsilon_{0}}" data-display="false"><code>q_{\text{enc}}=\sigma A=\varepsilon_{0} \oint EdA=\varepsilon_{0} E (2A)\implies E=\frac{\sigma}{2\varepsilon_{0}}</code></span>。
从而平行板电容器的电场 <span class="course-math" data-tex="E=\frac{\sigma}{\varepsilon_{0}}" data-display="false"><code>E=\frac{\sigma}{\varepsilon_{0}}</code></span>。 
导体表面的电场也为 <span class="course-math" data-tex="E=\frac{\sigma}{\varepsilon_{0}}" data-display="false"><code>E=\frac{\sigma}{\varepsilon_{0}}</code></span> 。
高斯定律主要适用于对称/近似无穷大的情况。

对称：球对称，柱对称，平移对称，面对称。对不同的面选不一样的高斯曲面，一般是一个球或者圆柱。

注意导体内部的电场恒为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，也就是说，任取一个导体内的高斯曲面，它所包的电荷量都为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。


### 电势（Electric Potential）
{: #section-5 }


电势能 <span class="course-math" data-tex="\Delta U=-W=-q_{0}\int_{i}^f \vec{E}\cdot d\vec{s}" data-display="false"><code>\Delta U=-W=-q_{0}\int_{i}^f \vec{E}\cdot d\vec{s}</code></span>。
定义电势 <span class="course-math" data-tex="V=\frac{U}{q_{0}}" data-display="false"><code>V=\frac{U}{q_{0}}</code></span>，故有 <span class="course-math" data-tex="\Delta V=-\int_{i}^f \vec{E}\cdot d\vec{s}" data-display="false"><code>\Delta V=-\int_{i}^f \vec{E}\cdot d\vec{s}</code></span>。电势的单位为伏特（Volt）。
定义无穷远处的电势为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，且大地的电势为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，则：
<span class="course-math course-math-display" data-tex="V=-\int_{\infty}^f  \vec{E} \cdot d\vec{s}" data-display="true"><code>V=-\int_{\infty}^f  \vec{E} \cdot d\vec{s}</code></span>
从这个式子可以得到：
<span class="course-math course-math-display" data-tex="\vec{E_{s}}=-\frac{\partial V}{\partial s}" data-display="true"><code>\vec{E_{s}}=-\frac{\partial V}{\partial s}</code></span>
也就是说，电场方向与电势降低的方向相同。在三维空间中：
<span class="course-math course-math-display" data-tex="\vec{E}=-\left( \frac{\partial}{\partial x} \hat{i}+ \frac{\partial}{\partial y}\hat{j}+\frac{\partial}{\partial z}\hat{k}\right)V&#10;=- \vec{\nabla} V" data-display="true"><code>\vec{E}=-\left( \frac{\partial}{\partial x} \hat{i}+ \frac{\partial}{\partial y}\hat{j}+\frac{\partial}{\partial z}\hat{k}\right)V&#10;=- \vec{\nabla} V</code></span>
点电荷的电势：
<span class="course-math course-math-display" data-tex="V=\frac{1}{4\pi \varepsilon_{0} } \frac{q}{r}" data-display="true"><code>V=\frac{1}{4\pi \varepsilon_{0} } \frac{q}{r}</code></span>
那么求电势的两种方法：
- 若电场不好求，用叠加原理： <span class="course-math course-math-display" data-tex="V=\int dV=\frac{1}{4\pi\varepsilon_{0}} \int \frac{dq}{r}" data-display="true"><code>V=\int dV=\frac{1}{4\pi\varepsilon_{0}} \int \frac{dq}{r}</code></span>
- 若电场好求，用定义：<span class="course-math course-math-display" data-tex="V=-\int_{\infty}^f  \vec{E} \cdot d\vec{s}" data-display="true"><code>V=-\int_{\infty}^f  \vec{E} \cdot d\vec{s}</code></span>
电势相等的点组成**等势面（Equipotential surface）**，等势面与电场线垂直。
由于金属内部电场为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，金属都是**等势体**。

假设某导体由一个小球（<span class="course-math" data-tex="Q_{1},R_{1}" data-display="false"><code>Q_{1},R_{1}</code></span>）和一个大球（<span class="course-math" data-tex="Q_{2},R_{2}" data-display="false"><code>Q_{2},R_{2}</code></span>）组成，则有
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;\frac{kQ_{1}}{R_{1}}=\frac{kQ_{2}}{R_{2}} (\text{电势相等}) \\&#10;4\pi R_{1}^2 E_{1}=\frac{Q_{1}}{\varepsilon_{0}}(\text{对小球列高斯定理}) \\&#10;4\pi R_{2}^{2}E_{2}=\frac{Q_{2}}{\varepsilon_{0}}(\text{对大球列高斯定理})&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;\frac{kQ_{1}}{R_{1}}=\frac{kQ_{2}}{R_{2}} (\text{电势相等}) \\&#10;4\pi R_{1}^2 E_{1}=\frac{Q_{1}}{\varepsilon_{0}}(\text{对小球列高斯定理}) \\&#10;4\pi R_{2}^{2}E_{2}=\frac{Q_{2}}{\varepsilon_{0}}(\text{对大球列高斯定理})&#10;\end{cases}</code></span>
则可以推出 <span class="course-math" data-tex="E_{1}R_{1}=E_{2}R_{2}" data-display="false"><code>E_{1}R_{1}=E_{2}R_{2}</code></span>，且 <span class="course-math" data-tex="\sigma_{1}R_{1}=\sigma_{2}R_{2}" data-display="false"><code>\sigma_{1}R_{1}=\sigma_{2}R_{2}</code></span>。可以理解为，导体中，表面曲率半径小的地方，所带的电荷更多，电场也更大。


#### 电偶极子的电势
{: #section-6 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electrostatics%20-%20%E9%9D%99%E7%94%B5%E5%AD%A6-2.png' | relative_url }}{% raw %}" alt="Electrostatics - 静电学-2" width="204" height="271" loading="lazy" decoding="async">
<span class="course-math course-math-display" data-tex="\begin{align}&#10;V&amp;=V_{(+)}+V_{(-)}=k\left( \frac{q}{r_{(+)}}-\frac{q}{r_{(-)}} \right) \\&#10;&amp;=kq \frac{r_{(-)}-r_{(+)}}{r_{(+)}r_{{(-)}}}\\&#10;&amp;\xlongequal{r\gg d} kq \frac{d\cos\theta}{r^{2}}\\&#10;&amp;= \frac{1}{4\pi\varepsilon_{0}} \frac{p\cos\theta}{r^{2}}&#10;\end{align}" data-display="true"><code>\begin{align}&#10;V&amp;=V_{(+)}+V_{(-)}=k\left( \frac{q}{r_{(+)}}-\frac{q}{r_{(-)}} \right) \\&#10;&amp;=kq \frac{r_{(-)}-r_{(+)}}{r_{(+)}r_{{(-)}}}\\&#10;&amp;\xlongequal{r\gg d} kq \frac{d\cos\theta}{r^{2}}\\&#10;&amp;= \frac{1}{4\pi\varepsilon_{0}} \frac{p\cos\theta}{r^{2}}&#10;\end{align}</code></span>

## 电容器（Capacitor）
{: #section-7 }


电容（Capacitance）<span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的单位为法拉（Farad, F）。定义式：
<span class="course-math course-math-display" data-tex="C=\frac{q}{V}" data-display="true"><code>C=\frac{q}{V}</code></span>
可以推导出平行板电容器的电容 <span class="course-math" data-tex="C=\frac{\varepsilon_{0}A}{d}" data-display="false"><code>C=\frac{\varepsilon_{0}A}{d}</code></span>，圆柱形电容器的电容 <span class="course-math" data-tex="C=2\pi\varepsilon_{0} \frac{L}{\ln(b / a)}" data-display="false"><code>C=2\pi\varepsilon_{0} \frac{L}{\ln(b / a)}</code></span>，球形电容器的电容 <span class="course-math" data-tex="C=4\pi\varepsilon_{0} \frac{ab}{b-a}" data-display="false"><code>C=4\pi\varepsilon_{0} \frac{ab}{b-a}</code></span>。当球形电容器 <span class="course-math" data-tex="b\to \infty" data-display="false"><code>b\to \infty</code></span>，相当于一个孤立的球体，那么 <span class="course-math" data-tex="C=4\pi\varepsilon_{0} a" data-display="false"><code>C=4\pi\varepsilon_{0} a</code></span>。
电容器的串联：

<span class="course-math course-math-display" data-tex="\begin{align}&#10;&amp;V_{\text{1}}+V_{\text{2}}=V\\&#10;&amp;Q_{1}= Q_{2}=Q \\&#10;\implies &amp; \frac{1}{C_{1}}+\frac{1}{C_{2}}=\frac{1}{C}&#10;\end{align}" data-display="true"><code>\begin{align}&#10;&amp;V_{\text{1}}+V_{\text{2}}=V\\&#10;&amp;Q_{1}= Q_{2}=Q \\&#10;\implies &amp; \frac{1}{C_{1}}+\frac{1}{C_{2}}=\frac{1}{C}&#10;\end{align}</code></span>
多个电容的串联：<span class="course-math" data-tex="\frac{1}{C}=\sum \frac{1}{C_{i}}" data-display="false"><code>\frac{1}{C}=\sum \frac{1}{C_{i}}</code></span>。
并联：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;&amp;V_{1}=V_{2}=V \\&#10;&amp;Q_{1}+Q_{2}=Q \\&#10;\implies &amp;C_{1}+C_{2}=C&#10;\end{align}" data-display="true"><code>\begin{align}&#10;&amp;V_{1}=V_{2}=V \\&#10;&amp;Q_{1}+Q_{2}=Q \\&#10;\implies &amp;C_{1}+C_{2}=C&#10;\end{align}</code></span>
多个电容的并联：<span class="course-math" data-tex="C=\sum C_{i}" data-display="false"><code>C=\sum C_{i}</code></span>。
电容器储存的电势能：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;&amp;W=\int vdq=\frac{1}{C}\int qdq=\frac{Q^{2}}{2C}\\&#10;\implies&amp; U=\frac{Q^{2}}{2C}=\frac{1}{2}CV^{2}=\frac{1}{2}QV&#10;\end{align}" data-display="true"><code>\begin{align}&#10;&amp;W=\int vdq=\frac{1}{C}\int qdq=\frac{Q^{2}}{2C}\\&#10;\implies&amp; U=\frac{Q^{2}}{2C}=\frac{1}{2}CV^{2}=\frac{1}{2}QV&#10;\end{align}</code></span>
能量密度 
<span class="course-math course-math-display" data-tex="u=\frac{U}{Ad}=\frac{\frac{1}{2}CV^{2}}{Ad}=\frac{1}{2}\varepsilon_{0}E^{2}" data-display="true"><code>u=\frac{U}{Ad}=\frac{\frac{1}{2}CV^{2}}{Ad}=\frac{1}{2}\varepsilon_{0}E^{2}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electrostatics%20-%20%E9%9D%99%E7%94%B5%E5%AD%A6-3.png' | relative_url }}{% raw %}" alt="Electrostatics - 静电学-3" width="403" height="549" loading="lazy" decoding="async">
若存在电介质（dielectric）：
<span class="course-math course-math-display" data-tex="E= \frac{\sigma-\sigma_{i}}{\varepsilon_{0}}=\frac{E_{0}}{\frac{\sigma}{\sigma-\sigma_{i}}}=\frac{E_{0}}{\kappa}" data-display="true"><code>E= \frac{\sigma-\sigma_{i}}{\varepsilon_{0}}=\frac{E_{0}}{\frac{\sigma}{\sigma-\sigma_{i}}}=\frac{E_{0}}{\kappa}</code></span>
其中 <span class="course-math" data-tex="\kappa=\frac{\sigma}{\sigma-\sigma _{i}}&gt;1" data-display="false"><code>\kappa=\frac{\sigma}{\sigma-\sigma _{i}}&gt;1</code></span> 为介电常数（dielectric constant）。 
将原来公式中的 <span class="course-math" data-tex="\varepsilon_{0}" data-display="false"><code>\varepsilon_{0}</code></span> 替换为 <span class="course-math" data-tex="\kappa\varepsilon_{0}" data-display="false"><code>\kappa\varepsilon_{0}</code></span> 即为有电介质的情况。
例如，有电介质的情况下的高斯定理：
<span class="course-math course-math-display" data-tex="\varepsilon_{0} \oint \kappa \vec{E}\cdot d\vec{A}=q(\text{free charge})" data-display="true"><code>\varepsilon_{0} \oint \kappa \vec{E}\cdot d\vec{A}=q(\text{free charge})</code></span>
有电介质的电容：<span class="course-math" data-tex="C=\kappa  \frac{Q}{V}" data-display="false"><code>C=\kappa  \frac{Q}{V}</code></span>。
注意是 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 不变还是 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 不变。
- 若 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 不变，<span class="course-math" data-tex="C=\kappa C_{0}" data-display="false"><code>C=\kappa C_{0}</code></span>，<span class="course-math" data-tex="Q=CV" data-display="false"><code>Q=CV</code></span> 变大。
- 若 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 不变，<span class="course-math" data-tex="C=\kappa C_{0}" data-display="false"><code>C=\kappa C_{0}</code></span>，<span class="course-math" data-tex="V=\frac{Q}{C}" data-display="false"><code>V=\frac{Q}{C}</code></span> 变小。
{% endraw %}
