---
title: "DC Circuits - 直流电路"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-04-01T21:34:20+08:00"
updated_at: "2026-10-09T16:13:40+08:00"
reference: false
order: 11
layout: "course"
permalink: "/courses/physics/dc-circuits/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · DC Circuits - 直流电路"
excerpt: "大学物理（上）/（下） · DC Circuits - 直流电路"
---

{% raw %}


## 电流
{: #section-1 }


电流为电荷因电场作用在导体中定向移动产生的，定义为单位时间内通过一个截面的正电荷量。
<span class="course-math course-math-display" data-tex="i=\frac{\mathrm{d}q}{\mathrm{d}t}" data-display="true"><code>i=\frac{\mathrm{d}q}{\mathrm{d}t}</code></span>
电流为一个标量。
微观表示
  <span class="course-math course-math-display" data-tex="i=\frac{\Delta q}{\Delta t}=\frac{nALe}{\frac{L}{v_{d}}}=nAev_{d}" data-display="true"><code>i=\frac{\Delta q}{\Delta t}=\frac{nALe}{\frac{L}{v_{d}}}=nAev_{d}</code></span>
定义电流密度
<span class="course-math course-math-display" data-tex="\mathbf{J}=nq\mathbf{v}_d\quad(q=-e\text{ for electrons})" data-display="true"><code>\mathbf{J}=nq\mathbf{v}_d\quad(q=-e\text{ for electrons})</code></span>
那么有
<span class="course-math course-math-display" data-tex="\mathrm{d}i=\mathbf{J}\cdot \mathrm{d}\mathbf{A}" data-display="true"><code>\mathrm{d}i=\mathbf{J}\cdot \mathrm{d}\mathbf{A}</code></span>


## 电阻
{: #section-2 }


定义电阻率（Resistivity）为电场强度与电流密度的比值，它只与材料有关：
<span class="course-math course-math-display" data-tex="\rho=\frac{E}{J}" data-display="true"><code>\rho=\frac{E}{J}</code></span>
导电率（Conductivity）为：
<span class="course-math course-math-display" data-tex="\sigma=\frac{1}{\rho}=\frac{J}{E}" data-display="true"><code>\sigma=\frac{1}{\rho}=\frac{J}{E}</code></span>
定义电阻（金属材料）（Resistance）为：
<span class="course-math course-math-display" data-tex="R=\frac{V}{I}\text{(Ohm&#x27;s Law)}" data-display="true"><code>R=\frac{V}{I}\text{(Ohm&#x27;s Law)}</code></span>
若电阻率处处相等，截面面积不变，则可以推出电阻和电阻率的关系：
<span class="course-math course-math-display" data-tex="V=IR=EL=\rho JL=\frac{\rho IL}{A}" data-display="true"><code>V=IR=EL=\rho JL=\frac{\rho IL}{A}</code></span>
<span class="course-math course-math-display" data-tex="\implies R=\frac{\rho L}{A}" data-display="true"><code>\implies R=\frac{\rho L}{A}</code></span>
一般情况下 <span class="course-math" data-tex="R=\int \frac{\rho(x)}{A(x)}\,\mathrm{d}x" data-display="false"><code>R=\int \frac{\rho(x)}{A(x)}\,\mathrm{d}x</code></span>。

电阻率与温度之间的关系：
<span class="course-math course-math-display" data-tex="\rho (T)=\rho_{0}(1+\alpha (T-T_{0}))" data-display="true"><code>\rho (T)=\rho_{0}(1+\alpha (T-T_{0}))</code></span>
或
<span class="course-math course-math-display" data-tex="\alpha= \frac{1}{\rho_{0}} \frac{\Delta \rho}{\Delta T}" data-display="true"><code>\alpha= \frac{1}{\rho_{0}} \frac{\Delta \rho}{\Delta T}</code></span>
<span class="course-math" data-tex="\alpha&gt;0" data-display="false"><code>\alpha&gt;0</code></span>：温度越高，电阻率越高；<span class="course-math" data-tex="\alpha &lt;0" data-display="false"><code>\alpha &lt;0</code></span>：温度越高，电阻率越低。
超导材料：在 <span class="course-math" data-tex="T&lt;T_{0}" data-display="false"><code>T&lt;T_{0}</code></span> 下，电阻率变成了 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。
可以用测电阻来测温度。
金属中有
<span class="course-math course-math-display" data-tex="\rho=\frac{E}{J}=\frac{\frac{ma}{e}}{nev_{d}}= \frac{m}{e^{2}n\tau}" data-display="true"><code>\rho=\frac{E}{J}=\frac{\frac{ma}{e}}{nev_{d}}= \frac{m}{e^{2}n\tau}</code></span>
其中 <span class="course-math" data-tex="\tau" data-display="false"><code>\tau</code></span> 为两次碰撞之间的时间，与电场大小无关。
电阻的串联：
<span class="course-math course-math-display" data-tex="R=R_{1}+R_{2}+\dots +R_{n}" data-display="true"><code>R=R_{1}+R_{2}+\dots +R_{n}</code></span>
并联：
<span class="course-math course-math-display" data-tex="\frac{1}{R}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\dots+\frac{1}{R_{n}}" data-display="true"><code>\frac{1}{R}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\dots+\frac{1}{R_{n}}</code></span>

## 电功率
{: #section-3 }


<span class="course-math course-math-display" data-tex="U=qV\implies \mathrm{d}U=V\,\mathrm{d}q=VI\,\mathrm{d}t" data-display="true"><code>U=qV\implies \mathrm{d}U=V\,\mathrm{d}q=VI\,\mathrm{d}t</code></span>
<span class="course-math course-math-display" data-tex="\implies P=\frac{\mathrm{d}U}{\mathrm{d}t}=IV" data-display="true"><code>\implies P=\frac{\mathrm{d}U}{\mathrm{d}t}=IV</code></span>
在纯电阻的情况下, 应用欧姆定律有：
<span class="course-math course-math-display" data-tex="P=I^{2}R=\frac{V^2}{R}" data-display="true"><code>P=I^{2}R=\frac{V^2}{R}</code></span>

## 电路
{: #section-4 }


电动势（Electromotive Force, emf）<span class="course-math" data-tex="\varepsilon" data-display="false"><code>\varepsilon</code></span> 为将电流从低电势转换为高电势的影响。一个理想的 emf 可以保持恒定的电势差。
真实的电池会存在内阻 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>，那么对于整个回路有
<span class="course-math course-math-display" data-tex="\varepsilon=I(R+r)" data-display="true"><code>\varepsilon=I(R+r)</code></span>

基尔霍夫定律（Kirchhoff's Rules）：
- 基尔霍夫节点定则（Kirchhoff's Junction Rule）：对于电路中任意的节点，有 <span class="course-math" data-tex="\sum I=0" data-display="false"><code>\sum I=0</code></span>。
- 基尔霍夫回路定则（Kirchhoff's Loop Rule）：对于电路中任意的回路，从某一个点经过一圈回到原点，有 <span class="course-math" data-tex="\sum V=0" data-display="false"><code>\sum V=0</code></span>。（例如，沿着电流方向经过电阻，电势减小；从电池的负极穿到正极，电势上升）。
电流的方向可以随便假设，最后看算出来数值的正负来确定实际方向。


### RC 电路
{: #section-5 }


（电容器充电）存在一个电动势 <span class="course-math" data-tex="\varepsilon" data-display="false"><code>\varepsilon</code></span>，一个电阻 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>  和一个电容器 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的回路中，由基尔霍夫回路定则得：
<span class="course-math course-math-display" data-tex="\varepsilon-iR-\frac{q}{C}=0" data-display="true"><code>\varepsilon-iR-\frac{q}{C}=0</code></span>
这等价于关于 <span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 的一阶微分方程：
<span class="course-math course-math-display" data-tex="\frac{\mathrm{d}q}{\mathrm{d}t}=-\frac{q-C\varepsilon}{RC}" data-display="true"><code>\frac{\mathrm{d}q}{\mathrm{d}t}=-\frac{q-C\varepsilon}{RC}</code></span>
解得
<span class="course-math course-math-display" data-tex="q=C\varepsilon(1-e^{-t/RC})" data-display="true"><code>q=C\varepsilon(1-e^{-t/RC})</code></span>
以及
<span class="course-math course-math-display" data-tex="i=\frac{\mathrm{d}q}{\mathrm{d}t}=\frac{\varepsilon}{R} e^{-t/RC}" data-display="true"><code>i=\frac{\mathrm{d}q}{\mathrm{d}t}=\frac{\varepsilon}{R} e^{-t/RC}</code></span>
<span class="course-math course-math-display" data-tex="V=\frac{q}{C}=\varepsilon(1-e^{-t/RC})" data-display="true"><code>V=\frac{q}{C}=\varepsilon(1-e^{-t/RC})</code></span>
这里 <span class="course-math" data-tex="RC=\tau" data-display="false"><code>RC=\tau</code></span> 为**时间常数(Time Constant)**，单位为秒。
（电容器放电）在上面的情况下去掉电动势：
<span class="course-math course-math-display" data-tex="-iR-\frac{q}{C}=0" data-display="true"><code>-iR-\frac{q}{C}=0</code></span>
解得
<span class="course-math course-math-display" data-tex="q=Q_{0}e^{-t/RC}" data-display="true"><code>q=Q_{0}e^{-t/RC}</code></span>
<span class="course-math course-math-display" data-tex="i=-\frac{Q_0}{RC}e^{-t/RC}=I_{0}e^{-t/RC}" data-display="true"><code>i=-\frac{Q_0}{RC}e^{-t/RC}=I_{0}e^{-t/RC}</code></span>
{% endraw %}
