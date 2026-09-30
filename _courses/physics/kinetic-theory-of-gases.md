---
title: "Kinetic Theory of Gases - 气体动力学理论"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-12-20T17:42:17+08:00"
updated_at: "2025-12-24T19:38:16+08:00"
reference: false
order: 9
layout: "course"
permalink: "/courses/physics/kinetic-theory-of-gases/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Kinetic Theory of Gases - 气体动力学理论"
excerpt: "大学物理（上）/（下） · Kinetic Theory of Gases - 气体动力学理论"
---

{% raw %}
前置： <a href="{% endraw %}{{ '/courses/physics/thermodynamics/' | relative_url }}{% raw %}">Thermodynamics - 热力学</a>

阿伏伽德罗常数 <span class="course-math" data-tex="N_{A}=6.02\times 10^{23} \text{mol}^{-1}" data-display="false"><code>N_{A}=6.02\times 10^{23} \text{mol}^{-1}</code></span> 且有这些关系：
<span class="course-math course-math-display" data-tex="n=\frac{N}{N_{A}}=\frac{M_{Sam}}{M}" data-display="true"><code>n=\frac{N}{N_{A}}=\frac{M_{Sam}}{M}</code></span>
<span class="course-math course-math-display" data-tex="M=mN_{A}" data-display="true"><code>M=mN_{A}</code></span>

理想气体（Ideal Gas）：忽略气体分子间的相互作用。
理想气体物态方程：
<span class="course-math course-math-display" data-tex="pV=nRT=NkT" data-display="true"><code>pV=nRT=NkT</code></span>
其中 <span class="course-math" data-tex="k=1.38\times {10}^{23} \text{J/K}" data-display="false"><code>k=1.38\times {10}^{23} \text{J/K}</code></span> 为玻尔兹曼常数，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 为气体常数，它们之间满足 <span class="course-math" data-tex="kN_{A}=R" data-display="false"><code>kN_{A}=R</code></span>。
<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 在数值上等于 <span class="course-math" data-tex="8.31" data-display="false"><code>8.31</code></span>。

### 理想气体的分子速率分布
{: #section-1 }


理想气体的均方根（Root mean square）速度：
<span class="course-math course-math-display" data-tex="v_{\text{rms}}= \sqrt{ \frac{3RT}{M} }" data-display="true"><code>v_{\text{rms}}= \sqrt{ \frac{3RT}{M} }</code></span>
平均平动动能：
<span class="course-math course-math-display" data-tex="K_{\text{avg}}=\frac{3}{2}kT" data-display="true"><code>K_{\text{avg}}=\frac{3}{2}kT</code></span>
推导： <a href="{% endraw %}{{ '/courses/references/gas/' | relative_url }}{% raw %}">Gas - 1</a>

麦克斯韦速率分布函数：
<span class="course-math course-math-display" data-tex="P(v)=4\pi \left( \frac{M}{2\pi RT} \right)^{3/2} v^2 e^{-Mv^2 / 2RT}" data-display="true"><code>P(v)=4\pi \left( \frac{M}{2\pi RT} \right)^{3/2} v^2 e^{-Mv^2 / 2RT}</code></span>
从而可以推出三种不同的特殊速率：
1. 平均速率（Average Speed）<span class="course-math" data-tex="v_{\text{avg}}=\sqrt{ \frac{8RT}{\pi M} }" data-display="false"><code>v_{\text{avg}}=\sqrt{ \frac{8RT}{\pi M} }</code></span>
2. 均方根速率（Root-Mean-Square Speed） <span class="course-math" data-tex="v_{\text{rms}}=\sqrt{ \frac{3RT}{M} }" data-display="false"><code>v_{\text{rms}}=\sqrt{ \frac{3RT}{M} }</code></span>
3. 最可几速率 (Most Probable Speed) <span class="course-math" data-tex="v_{P}=\sqrt{ \frac{2RT}{M} }" data-display="false"><code>v_{P}=\sqrt{ \frac{2RT}{M} }</code></span>


### 理想气体之间的碰撞
{: #section-2 }


<span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span> 时间内一个气体分子会走过 <span class="course-math" data-tex="L=v_{\text{avg}}\Delta t" data-display="false"><code>L=v_{\text{avg}}\Delta t</code></span>，会发生的碰撞次数为 <span class="course-math" data-tex="N_{\text{col}}=(N / V) (\pi d^2 )v_{\text{rel}} \Delta t" data-display="false"><code>N_{\text{col}}=(N / V) (\pi d^2 )v_{\text{rel}} \Delta t</code></span>。
可以证明 <span class="course-math" data-tex="v_{\text{rel}}=\sqrt{ 2 } v_{\text{avg}}" data-display="false"><code>v_{\text{rel}}=\sqrt{ 2 } v_{\text{avg}}</code></span>。

平均自由程（Mean Free Path）定义为每两次碰撞之间气体运动的平均距离：
<span class="course-math course-math-display" data-tex="\lambda= \frac{L}{N_{\text{col}}} = \frac{v_{\text{avg}}\Delta t}{v_{\text{rel}}\Delta t\pi d^2N / V}=\frac{1}{\sqrt{ 2 }\pi d^2N / V}" data-display="true"><code>\lambda= \frac{L}{N_{\text{col}}} = \frac{v_{\text{avg}}\Delta t}{v_{\text{rel}}\Delta t\pi d^2N / V}=\frac{1}{\sqrt{ 2 }\pi d^2N / V}</code></span>
那么每两次碰撞之间的平均时间间隔（Average Time Between Collisions）：
<span class="course-math course-math-display" data-tex="t=\frac{\lambda}{v_{\text{avg}}}" data-display="true"><code>t=\frac{\lambda}{v_{\text{avg}}}</code></span>
碰撞频率（Collision Rate） <span class="course-math" data-tex="f=\frac{1}{t}=\frac{v_{\text{avg}}}{\lambda}" data-display="false"><code>f=\frac{1}{t}=\frac{v_{\text{avg}}}{\lambda}</code></span>


### 摩尔热容
{: #section-3 }


摩尔热容（Molar Specific Heats） 指的是每摩尔气体分子的热容量。
摩尔热容是路径依赖的。对于恒容过程有恒容摩尔热容 <span class="course-math" data-tex="C_{v}" data-display="false"><code>C_{v}</code></span>，对于恒压过程有恒压摩尔热容 <span class="course-math" data-tex="C_{P}" data-display="false"><code>C_{P}</code></span>。
那么有：

#### 恒容 
{: #section-4 }

  <span class="course-math course-math-display" data-tex="Q=nC_{v} \Delta T" data-display="true"><code>Q=nC_{v} \Delta T</code></span>
由于 <span class="course-math" data-tex="W=0" data-display="false"><code>W=0</code></span>，有

<span class="course-math course-math-display" data-tex="\Delta E_{\text{int}}=Q+W=Q=nC_{v}\Delta T" data-display="true"><code>\Delta E_{\text{int}}=Q+W=Q=nC_{v}\Delta T</code></span>
那么对于所有理想气体，定义
<span class="course-math course-math-display" data-tex="E_{\text{int}}=nC_{v}T" data-display="true"><code>E_{\text{int}}=nC_{v}T</code></span>
可以看出，理想气体的内能只与温度有关，是一个状态函数而不是路径函数。
对于**单原子分子的理想气体**，内能只考虑平动动能，那么
<span class="course-math course-math-display" data-tex="E_{\text{int}}=NK_{\text{avg}}=N \frac{3}{2}kT=\frac{3}{2}nRT" data-display="true"><code>E_{\text{int}}=NK_{\text{avg}}=N \frac{3}{2}kT=\frac{3}{2}nRT</code></span>
对比得 <span class="course-math" data-tex="C_{v}=\frac{3}{2}R" data-display="false"><code>C_{v}=\frac{3}{2}R</code></span>。


#### 恒压
{: #section-5 }


<span class="course-math course-math-display" data-tex="Q=nC_{p}\Delta T" data-display="true"><code>Q=nC_{p}\Delta T</code></span>
考虑到 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 为常数，有
<span class="course-math course-math-display" data-tex="W=\int pdV=p\Delta V=nR \Delta T" data-display="true"><code>W=\int pdV=p\Delta V=nR \Delta T</code></span>
那么有 
<span class="course-math course-math-display" data-tex="\Delta E_{\text{int}}=Q-W=nC_{P}\Delta T-nR\Delta T" data-display="true"><code>\Delta E_{\text{int}}=Q-W=nC_{P}\Delta T-nR\Delta T</code></span>
又因为
<span class="course-math course-math-display" data-tex="\Delta E_{\text{int}}=nC_{v} \Delta T" data-display="true"><code>\Delta E_{\text{int}}=nC_{v} \Delta T</code></span>
那么可以导出理想气体的一个重要属性：
<span class="course-math course-math-display" data-tex="C_{P}=C_{v}+R" data-display="true"><code>C_{P}=C_{v}+R</code></span>

#### 多原子分子的情况
{: #section-6 }

既要考虑平动动能，又要考虑振动动能和转动动能。

<span class="course-math" data-tex="N" data-display="false"><code>N</code></span> 原子气体分子：
1. 总自由度：<span class="course-math" data-tex="3 N" data-display="false"><code>3 N</code></span>。
2. 平动自由度：3。
3. 转动自由度：3（非线性）或 2（线性）。
4. 振动自由度：<span class="course-math" data-tex="3N-6" data-display="false"><code>3N-6</code></span>（非线性）或 <span class="course-math" data-tex="3N-5" data-display="false"><code>3N-5</code></span> （线性）。

对于自由度为 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的气体分子：

<span class="course-math course-math-display" data-tex="E_{\text{int}}=\frac{1}{2} kT \times N\times f =n \frac{f}{2} RT" data-display="true"><code>E_{\text{int}}=\frac{1}{2} kT \times N\times f =n \frac{f}{2} RT</code></span>
对比 <span class="course-math" data-tex="E_{\text{int}}=nC_{v}T" data-display="false"><code>E_{\text{int}}=nC_{v}T</code></span> 可得
<span class="course-math course-math-display" data-tex="C_{v}=\frac{f}{2}R, C_{p}=\left( \frac{f}{2}+1 \right)R" data-display="true"><code>C_{v}=\frac{f}{2}R, C_{p}=\left( \frac{f}{2}+1 \right)R</code></span>
实际上，气体分子的自由度还和温度有关。在低温状态下，转动和振动自由度会被冻结。温度升高之后，转动自由度会先解冻，然后是振动自由度。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Gas-Kinetics-1.png' | relative_url }}{% raw %}" alt="Gas-Kinetics-1" loading="lazy">
基于**能量均分定理**，可通过自由度的比例算出动能大小，例如对于双原子分子，平动动能为 <span class="course-math" data-tex="\frac{3}{5}E_{\text{int}}" data-display="false"><code>\frac{3}{5}E_{\text{int}}</code></span>。


### 热力学过程计算
{: #section-7 }



#### 恒温 (Isothermic)
{: #section-8 }


<span class="course-math course-math-display" data-tex="W=\int_{V_{1}}^{V_{2}} pdV=\int_{V_{1}}^{V_{2}} \frac{nRT}{V}dV=nRT\ln \frac{V_{2}}{V_{1}}" data-display="true"><code>W=\int_{V_{1}}^{V_{2}} pdV=\int_{V_{1}}^{V_{2}} \frac{nRT}{V}dV=nRT\ln \frac{V_{2}}{V_{1}}</code></span>
由于过程等温，<span class="course-math" data-tex="\Delta E_{\text{int}}=0" data-display="false"><code>\Delta E_{\text{int}}=0</code></span>，从而可以推出 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 的值。


#### 恒容（Isochoric）
{: #section-9 }


<span class="course-math course-math-display" data-tex="W=0" data-display="true"><code>W=0</code></span>
<span class="course-math course-math-display" data-tex="Q=nC_{v}\Delta T = \left( \frac{C_{v}}{R} \right)V \Delta p" data-display="true"><code>Q=nC_{v}\Delta T = \left( \frac{C_{v}}{R} \right)V \Delta p</code></span>
也就是说 <span class="course-math" data-tex="\Delta E_{\text{int}}= (C_{v} / R) V\Delta p" data-display="false"><code>\Delta E_{\text{int}}= (C_{v} / R) V\Delta p</code></span>。


#### 恒压（Isobaric）
{: #section-10 }


<span class="course-math course-math-display" data-tex="W=\int p dV = p \int dV=p\Delta V=nR\Delta T" data-display="true"><code>W=\int p dV = p \int dV=p\Delta V=nR\Delta T</code></span>
<span class="course-math course-math-display" data-tex="Q=nC_{p}\Delta T= (\frac{C_{p}}{R}) p\Delta V" data-display="true"><code>Q=nC_{p}\Delta T= (\frac{C_{p}}{R}) p\Delta V</code></span>
从而有
<span class="course-math course-math-display" data-tex="\Delta E_{\text{int}}=Q-W=\left( \frac{C_{v}}{R} \right)p\Delta V=nC_{v}\Delta T" data-display="true"><code>\Delta E_{\text{int}}=Q-W=\left( \frac{C_{v}}{R} \right)p\Delta V=nC_{v}\Delta T</code></span> 

#### 绝热（Adiabatic）
{: #section-11 }

<span class="course-math course-math-display" data-tex="Q=0" data-display="true"><code>Q=0</code></span>
<span class="course-math course-math-display" data-tex="W=-\Delta E_{\text{int}}=-nC_{v}\Delta T=\frac{C_{v}}{R}(p_{i}V_{i}-p_{f}V_{f})" data-display="true"><code>W=-\Delta E_{\text{int}}=-nC_{v}\Delta T=\frac{C_{v}}{R}(p_{i}V_{i}-p_{f}V_{f})</code></span>
绝热过程的过程方程为
<span class="course-math course-math-display" data-tex="pV^\gamma=1" data-display="true"><code>pV^\gamma=1</code></span>
或 
<span class="course-math course-math-display" data-tex="TV^{\gamma-1}=1" data-display="true"><code>TV^{\gamma-1}=1</code></span>
其中 <span class="course-math" data-tex="\gamma=\frac{C_{p}}{C_{v}}&gt;1" data-display="false"><code>\gamma=\frac{C_{p}}{C_{v}}&gt;1</code></span> ，那么绝热过程的曲线比等温过程的曲线更陡峭。


#### 自由膨胀（Free Expansion）
{: #section-12 }

<span class="course-math course-math-display" data-tex="W=0,Q=0, E_{\text{int}}=0" data-display="true"><code>W=0,Q=0, E_{\text{int}}=0</code></span>
那么 <span class="course-math" data-tex="\Delta T=0, \Delta(pV)=0" data-display="false"><code>\Delta T=0, \Delta(pV)=0</code></span>。
{% endraw %}
