---
title: "Thermodynamics - 热力学"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-12-11T10:26:58+08:00"
updated_at: "2025-12-26T10:52:03+08:00"
reference: false
order: 8
layout: "course"
permalink: "/courses/physics/thermodynamics/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Thermodynamics - 热力学"
excerpt: "大学物理（上）/（下） · Thermodynamics - 热力学"
---

{% raw %}


### 热力学系统
{: #section-1 }


热力学系统（Thermodynamic System）由状态参量（State Quantities）描述。
状态参量分为广延量（Extensive Quantity）和强度量（Intensive Quantity）。

**简单体系（Simple System）：** 只用考虑 <span class="course-math" data-tex="p, V" data-display="false"><code>p, V</code></span> 两个参量的体系。

按系统（System）与环境（Surroundings）的关系分类：
1. 孤立系统（Isolated System）：能量与物质都不交换。
2. 封闭系统（Closed System）：只交换能量，不交换物质。
3. 开放系统（Open System）：物质和能量都交换。

按物相（Phase）分类：
1. 单相系统（Homogeneous System）
2. 多相系统（Heterogeneous System）

按组分（Component）分类：
1. 单组分系统（Single Component System）
2. 多组分系统（Multi-Component System）



### 热平衡
{: #section-2 }


平衡态（Equilibrium State）的定义：
1. 宏观物理量不随时间变化。
2. 不存在稳定的能流或物质流。


### 热力学第零定律
{: #section-3 }


**热力学第零定律（Zeroth law of thermodynamics and temperature）：**
1. 热平衡是可以传递的。
2. 处于热平衡的物体拥有相同的温度（Temperature）。

经验温标：如摄氏度/华氏度等，由生活中的某事物的冷热程度标定。
绝对温标：开氏温标（Kelvin Scale），与摄氏温标的换算为 <span class="course-math" data-tex="0 \degree \text{C}=273.15 \text{K}" data-display="false"><code>0 \degree \text{C}=273.15 \text{K}</code></span>。
开氏温标下，水的三相点的温度：<span class="course-math" data-tex="273.16 \text{K}" data-display="false"><code>273.16 \text{K}</code></span>。

用压强测温度：依赖于 <span class="course-math" data-tex="T=Cp" data-display="false"><code>T=Cp</code></span>（理想气体），则 <span class="course-math" data-tex="T=T_{3} \frac{p}{p_{3}}" data-display="false"><code>T=T_{3} \frac{p}{p_{3}}</code></span>，其中 <span class="course-math" data-tex="T_{3}, p_{3}" data-display="false"><code>T_{3}, p_{3}</code></span> 为水的三相点的温度与压强。


### 热膨胀
{: #section-4 }


**二维情形：**

<span class="course-math course-math-display" data-tex="\frac{\Delta L}{L} = \alpha \Delta T" data-display="true"><code>\frac{\Delta L}{L} = \alpha \Delta T</code></span>
其中 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 为线膨胀系数，<span class="course-math" data-tex="\alpha&gt;0" data-display="false"><code>\alpha&gt;0</code></span> 为热胀冷缩，<span class="course-math" data-tex="\alpha&lt;0" data-display="false"><code>\alpha&lt;0</code></span> 为热缩冷胀。

**三维情形：**
<span class="course-math course-math-display" data-tex="\frac{\Delta V}{V}=\beta \Delta T" data-display="true"><code>\frac{\Delta V}{V}=\beta \Delta T</code></span>
其中 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 为体膨胀系数，这里有关系 <span class="course-math" data-tex="\beta=3\alpha" data-display="false"><code>\beta=3\alpha</code></span>。


### 物态方程
{: #section-5 }


物态方程（The Equation of State）
<span class="course-math course-math-display" data-tex="f(p,V,T)=0" data-display="true"><code>f(p,V,T)=0</code></span>
对于理想气体（Ideal Gas）：
<span class="course-math course-math-display" data-tex="pV-nRT=0" data-display="true"><code>pV-nRT=0</code></span>


### 热传递
{: #section-6 }


热（Heat）是由于温度差异自发传递的能量。

热传递（Heat Transfer）的方法：

#### 热传导
{: #section-7 }


热传导速率（Thermal Conduction Rate）：
<span class="course-math course-math-display" data-tex="P_{\text{cond}}=\frac{Q}{t}=kA \frac{T_{H}-T_{C}}{L} = \frac{\Delta T}{R}" data-display="true"><code>P_{\text{cond}}=\frac{Q}{t}=kA \frac{T_{H}-T_{C}}{L} = \frac{\Delta T}{R}</code></span>
其中 <span class="course-math" data-tex="R=L / kA" data-display="false"><code>R=L / kA</code></span> 为热阻（Thermal Resistance），<span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 为导热系数（Thermal Conductivity）。
热阻和电阻的串并联计算是一样的。

**稳态**：两个热源之间的热流（<span class="course-math" data-tex="P_{\text{cond}}" data-display="false"><code>P_{\text{cond}}</code></span>）不变且处处一致。注意热源是温度保持不变的热库。


#### 对流 
{: #section-8 }


流体热胀冷缩导致其流动，从而传递热量。

#### 辐射 
{: #section-9 }


物体向外辐射的热功率：
<span class="course-math course-math-display" data-tex="P_{\text{rad}}=\sigma \varepsilon A T^4" data-display="true"><code>P_{\text{rad}}=\sigma \varepsilon A T^4</code></span>
物体吸收环境的热功率（基尔霍夫定律）：
<span class="course-math course-math-display" data-tex="P_{\text{abs}}=\sigma \varepsilon A T^4_{\text{env}}" data-display="true"><code>P_{\text{abs}}=\sigma \varepsilon A T^4_{\text{env}}</code></span>
净吸收功率：
<span class="course-math course-math-display" data-tex="P_{\text{net}}=P_{\text{abs}}-P_{\text{rad}}=\sigma \varepsilon A (T_{\text{env}}^2-T^4)" data-display="true"><code>P_{\text{net}}=P_{\text{abs}}-P_{\text{rad}}=\sigma \varepsilon A (T_{\text{env}}^2-T^4)</code></span>
其中 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为物体表面积，<span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 为物体温度，<span class="course-math" data-tex="\sigma" data-display="false"><code>\sigma</code></span> 为斯忒藩-玻尔兹曼常数（Stefan-Boltzmann Constant），<span class="course-math" data-tex="\varepsilon" data-display="false"><code>\varepsilon</code></span> 为与物体材料有关的介于 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 和 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 之间的量。
对黑体（Blackbody）来说，<span class="course-math" data-tex="\varepsilon=1" data-display="false"><code>\varepsilon=1</code></span>，即物体吸收和发射辐射能力都最强。


#### 热传递导致温度变化
{: #section-10 }


<span class="course-math course-math-display" data-tex="Q=C\Delta T=cm\Delta T" data-display="true"><code>Q=C\Delta T=cm\Delta T</code></span>
其中 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 为热容量（Heat Capacity），<span class="course-math" data-tex="c=\frac{C}{m}" data-display="false"><code>c=\frac{C}{m}</code></span> 为比热容（Specific Heat）。


#### 热传递导致相变
{: #section-11 }


<span class="course-math course-math-display" data-tex="Q=Lm" data-display="true"><code>Q=Lm</code></span>
其中 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 为相变潜热（Latent Heat）。



### 热力学第一定律
{: #section-12 }


#### 热力学过程
{: #section-13 }


<span class="course-math course-math-display" data-tex="(p_{i}, V_{i}, T_{i})\to (p_{f}, V_{f}, T_{f})" data-display="true"><code>(p_{i}, V_{i}, T_{i})\to (p_{f}, V_{f}, T_{f})</code></span>
过程分为不可逆过程（Irreversible Process）和可逆过程（Reversible Process）。
可逆过程只存在于理想中，它意味着初态到末态中的所有状态都是静态状态。
准静态过程（Quasi-static Process）是通过拉长过程的时间来近似可逆过程。

绝热过程（Adiabatic Process）：<span class="course-math" data-tex="Q=0" data-display="false"><code>Q=0</code></span>。
恒容过程（Isochoric / Constant-volume Process）：<span class="course-math" data-tex="W=0" data-display="false"><code>W=0</code></span>。
循环过程(Cyclical / Loop Process)：<span class="course-math" data-tex="\Delta E_{\text{int}}=0" data-display="false"><code>\Delta E_{\text{int}}=0</code></span>。

#### 热力学过程中的功
{: #section-14 }


将系统对外界做的功（Work done by the system）定义为正：
<span class="course-math course-math-display" data-tex="W_{\text{by}}=\int_{V_{i}}^{V_{f}} pdV" data-display="true"><code>W_{\text{by}}=\int_{V_{i}}^{V_{f}} pdV</code></span>

#### 热力学过程中的热
{: #section-15 }


将系统从外界吸收的热定义为正：

<span class="course-math course-math-display" data-tex="Q=C_{\text{process}} \Delta T" data-display="true"><code>Q=C_{\text{process}} \Delta T</code></span>
其中 <span class="course-math" data-tex="C_{\text{process}}" data-display="false"><code>C_{\text{process}}</code></span> 和过程强相关。


#### 内能
{: #section-16 }


热力学第一定律指出，能量是守恒的，那么热力学过程中剩下的能量会跑到系统内部，这被称为系统的内能（Internal Energy）：

<span class="course-math course-math-display" data-tex="\Delta E_{\text{int}}=Q-W_{\text{by}}" data-display="true"><code>\Delta E_{\text{int}}=Q-W_{\text{by}}</code></span>
也就是说，不存在第一类永动机。
自由膨胀（Free Expansion）中，<span class="course-math" data-tex="Q=W=0" data-display="false"><code>Q=W=0</code></span>。


### 热机
{: #section-17 }


利用循环过程做功，这需要过程的 <span class="course-math" data-tex="\text{p-V}" data-display="false"><code>\text{p-V}</code></span> 图线是顺时针方向的闭合曲线。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Thermodynamics-1.png' | relative_url }}{% raw %}" alt="Thermodynamics-1" loading="lazy">

热机效率 <span class="course-math" data-tex="\varepsilon= \frac{&#124;W&#124;}{&#124;Q_{H}&#124;}=1-\frac{&#124;Q_{L}&#124;}{&#124;Q_{H}&#124;}" data-display="false"><code>\varepsilon= \frac{&#124;W&#124;}{&#124;Q_{H}&#124;}=1-\frac{&#124;Q_{L}&#124;}{&#124;Q_{H}&#124;}</code></span>。
对于理想卡诺热机：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Thermodynamics-2.png' | relative_url }}{% raw %}" alt="Thermodynamics-2" loading="lazy">
对整个过程，<span class="course-math" data-tex="&#124;Q&#124;=&#124;W&#124;=Q_{\text{in}}-Q_{\text{out}}" data-display="false"><code>&#124;Q&#124;=&#124;W&#124;=Q_{\text{in}}-Q_{\text{out}}</code></span>。而且通过绝热过程的方程可推 <span class="course-math" data-tex="\frac{V_{2}}{V_{1}}=\frac{V_{3}}{V_{4}}" data-display="false"><code>\frac{V_{2}}{V_{1}}=\frac{V_{3}}{V_{4}}</code></span>。
有 <span class="course-math" data-tex="W=RT_{H}\ln \frac{V_{2}}{V_{1}}-RT_{L} \frac{V_{3}}{V_{4}}=R(T_{H}-T_{C})\ln \frac{V_{2}}{V_{1}}" data-display="false"><code>W=RT_{H}\ln \frac{V_{2}}{V_{1}}-RT_{L} \frac{V_{3}}{V_{4}}=R(T_{H}-T_{C})\ln \frac{V_{2}}{V_{1}}</code></span>，<span class="course-math" data-tex="Q_{H}=RT_{H}\ln \frac{V_{2}}{V_{1}}" data-display="false"><code>Q_{H}=RT_{H}\ln \frac{V_{2}}{V_{1}}</code></span>。
那么 <span class="course-math" data-tex="0\leq \varepsilon = 1- \frac{T_{C}}{T_{H}}&lt;1" data-display="false"><code>0\leq \varepsilon = 1- \frac{T_{C}}{T_{H}}&lt;1</code></span> 。

卡诺指出，不同的热机在冷源和热源温度一致时，卡诺热机的效率是最高的。

### 制冷机
{: #section-18 }

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Thermodynamics-3.png' | relative_url }}{% raw %}" alt="Thermodynamics-3" loading="lazy">
<span class="course-math" data-tex="K= \frac{&#124;Q_{L}&#124;}{&#124;W&#124;}=\frac{&#124;Q_{L}&#124;}{&#124;Q_{H}&#124;-&#124;Q_{L}&#124;}= \frac{T_{L}}{T_{H}-T_{L}}" data-display="false"><code>K= \frac{&#124;Q_{L}&#124;}{&#124;W&#124;}=\frac{&#124;Q_{L}&#124;}{&#124;Q_{H}&#124;-&#124;Q_{L}&#124;}= \frac{T_{L}}{T_{H}-T_{L}}</code></span>。



### 热力学第二定律
{: #section-19 }


克劳修斯表述：热量不能自发地从低温物体传递到高温物体。

开尔文表示：不可能从单一热源吸取热量并将其完全转化为有用的功而不产生其他影响。

实质：自发发生的热现象有方向性，一切与热现象的实际过程都是不可逆的。


#### 熵
{: #section-20 }


定义熵变（Entropy Change）：

<span class="course-math course-math-display" data-tex="dS=\frac{dQ_{\text{rev}}}{T}" data-display="true"><code>dS=\frac{dQ_{\text{rev}}}{T}</code></span>
那么理想气体可逆过程的熵变：
<span class="course-math course-math-display" data-tex="\Delta S= \int \frac{dE+dW}{T}= \int \frac{nC_{v}}{T}dT + \int \frac{nR}{V}dV=nC_{v} \ln \frac{T_{2}}{T_{1}} + nR \ln \frac{V_{2}}{V_{1}}" data-display="true"><code>\Delta S= \int \frac{dE+dW}{T}= \int \frac{nC_{v}}{T}dT + \int \frac{nR}{V}dV=nC_{v} \ln \frac{T_{2}}{T_{1}} + nR \ln \frac{V_{2}}{V_{1}}</code></span>
一些特例：
1. 等压过程（Isobaric Process）：<span class="course-math" data-tex="\Delta S=nC_{p} \ln \frac{T_{2}}{T_{1}}" data-display="false"><code>\Delta S=nC_{p} \ln \frac{T_{2}}{T_{1}}</code></span>。
2. 等温过程（Isothermal Process）：<span class="course-math" data-tex="\Delta S= nR\ln \frac{V_{2}}{V_{1}}" data-display="false"><code>\Delta S= nR\ln \frac{V_{2}}{V_{1}}</code></span> 。
3. 绝热过程（Adiabatic Process）：<span class="course-math" data-tex="\Delta S=0" data-display="false"><code>\Delta S=0</code></span>。
4. 等容过程（Isochoric Process）：<span class="course-math" data-tex="\Delta S = nC_{v} \ln \frac{T_{2}}{T_{1}}=nC_{v} \ln \frac{p_{2}}{p_{1}}" data-display="false"><code>\Delta S = nC_{v} \ln \frac{T_{2}}{T_{1}}=nC_{v} \ln \frac{p_{2}}{p_{1}}</code></span>。
5. 相变（Phase Change）：<span class="course-math" data-tex="\Delta S=\frac{\Delta Q}{T}=\frac{Lm}{T}" data-display="false"><code>\Delta S=\frac{\Delta Q}{T}=\frac{Lm}{T}</code></span>。
6. 同相变温（Same Phase, Change in Temperature）：<span class="course-math" data-tex="\Delta S= \int \frac{dQ}{T}=\int \frac{cm}{T}dT=cm\ln \frac{T_{2}}{T_{1}}" data-display="false"><code>\Delta S= \int \frac{dQ}{T}=\int \frac{cm}{T}dT=cm\ln \frac{T_{2}}{T_{1}}</code></span>
**熵增定律（热力学第二定律）：** 绝热过程中 <span class="course-math" data-tex="S_{f}-S_{i}\geq 0" data-display="false"><code>S_{f}-S_{i}\geq 0</code></span>，当且仅当过程可逆时取等。
推论：孤立系统的熵永远不减，达到平衡态时熵达到最大值。

熵的统计解释：
<span class="course-math course-math-display" data-tex="S=k\ln W" data-display="true"><code>S=k\ln W</code></span>
其中 <span class="course-math" data-tex="W" data-display="false"><code>W</code></span> 为微观状态数（Microstates）。
实际计算使用斯特林近似：<span class="course-math" data-tex="\ln N!\sim N(\ln N)-N" data-display="false"><code>\ln N!\sim N(\ln N)-N</code></span>
{% endraw %}
