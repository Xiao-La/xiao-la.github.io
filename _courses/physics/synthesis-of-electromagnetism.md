---
title: "Synthesis of Electromagnetism - 电磁学综合"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-04-28T15:01:35+08:00"
updated_at: "2026-06-05T20:45:40+08:00"
reference: false
order: 13
layout: "course"
permalink: "/courses/physics/synthesis-of-electromagnetism/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Synthesis of Electromagnetism - 电磁学综合"
excerpt: "大学物理（上）/（下） · Synthesis of Electromagnetism - 电磁学综合"
---

{% raw %}


### LC 振荡电路 （LC Oscillator）
{: #section-1 }

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88.png' | relative_url }}{% raw %}" alt="Electromagnetism - 电磁学综合" width="1754" height="474" loading="lazy" decoding="async">
能量守恒：
<span class="course-math course-math-display" data-tex="\frac{Q^{2}}{2C}+ \frac{1}{2}Li^{2}=U" data-display="true"><code>\frac{Q^{2}}{2C}+ \frac{1}{2}Li^{2}=U</code></span>
这是一个关于 <span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 的二阶微分方程（假定电流流进正极板，才有 <span class="course-math" data-tex="i=\frac{dQ}{dt}" data-display="false"><code>i=\frac{dQ}{dt}</code></span>），类似与弹簧振子。那么有
<span class="course-math course-math-display" data-tex="q=Q\cos(\omega t+\phi)" data-display="true"><code>q=Q\cos(\omega t+\phi)</code></span>
这里 <span class="course-math" data-tex="\omega= \frac{1}{\sqrt{ LC }}" data-display="false"><code>\omega= \frac{1}{\sqrt{ LC }}</code></span>。

有电阻的情况，就相当于阻尼振荡（Damped Oscillator）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88-1.png' | relative_url }}{% raw %}" alt="Electromagnetism - 电磁学综合-1" width="1794" height="568" loading="lazy" decoding="async">

有交流电源和电阻的情况，就相当于受迫振荡。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88-2.png' | relative_url }}{% raw %}" alt="Electromagnetism - 电磁学综合-2" width="1716" height="758" loading="lazy" decoding="async">
有如下关系，其中 <span class="course-math" data-tex="\omega" data-display="false"><code>\omega</code></span> 是电源频率：
<span class="course-math course-math-display" data-tex="\varepsilon=\varepsilon_{m}\sin \omega t" data-display="true"><code>\varepsilon=\varepsilon_{m}\sin \omega t</code></span>
<span class="course-math course-math-display" data-tex="i=I_{m}\sin(\omega t-\phi)" data-display="true"><code>i=I_{m}\sin(\omega t-\phi)</code></span>
<span class="course-math course-math-display" data-tex="\implies V_{R}=iR=I_{m}R\sin(\omega t-\phi)" data-display="true"><code>\implies V_{R}=iR=I_{m}R\sin(\omega t-\phi)</code></span>
<span class="course-math course-math-display" data-tex="V_{L}=L \frac{di}{dt}=L\omega I_{m}\sin\left( \omega t-\phi+\frac{\pi}{2} \right)" data-display="true"><code>V_{L}=L \frac{di}{dt}=L\omega I_{m}\sin\left( \omega t-\phi+\frac{\pi}{2} \right)</code></span>
<span class="course-math course-math-display" data-tex="V_{C} = \frac{\int idt}{C}= \frac{1}{\omega C} I_{m} \sin\left( \omega t-\phi-\frac{\pi}{2} \right)" data-display="true"><code>V_{C} = \frac{\int idt}{C}= \frac{1}{\omega C} I_{m} \sin\left( \omega t-\phi-\frac{\pi}{2} \right)</code></span>
**直观理解：电感是对抗电流的变化的，所以电压提前于电流；电容器是先有电流充电才有电压的，所以电压落后于电流。**
这里称 <span class="course-math" data-tex="X_{L}=\omega L" data-display="false"><code>X_{L}=\omega L</code></span> 为感抗（Inductive Reactance），<span class="course-math" data-tex="X_{C}=\frac{1}{\omega C}" data-display="false"><code>X_{C}=\frac{1}{\omega C}</code></span> 为容抗（Capacitive Reactance）。上方是相图（Phasor Diagram），因此电感的电势差相位领先电流 <span class="course-math" data-tex="\frac{\pi}{2}" data-display="false"><code>\frac{\pi}{2}</code></span>，电容的落后电流 <span class="course-math" data-tex="\frac{\pi}{2}" data-display="false"><code>\frac{\pi}{2}</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88-3.png' | relative_url }}{% raw %}" alt="Electromagnetism - 电磁学综合-3" width="2168" height="704" loading="lazy" decoding="async">
图中可以看到， <span class="course-math" data-tex="\varepsilon" data-display="false"><code>\varepsilon</code></span> 领先电流相位 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span>。
这里定义阻抗 (Impedance)
<span class="course-math course-math-display" data-tex="Z= \sqrt{ R^{2}+(X_{L}-X_{C})^{2} }" data-display="true"><code>Z= \sqrt{ R^{2}+(X_{L}-X_{C})^{2} }</code></span>
这里也有
<span class="course-math course-math-display" data-tex="\tan \phi= \frac{V_{L}-V_{C}}{V_{R}}= \frac{X_{L}-X_{C}}{R}(\text{相位常数, Phase Constant})" data-display="true"><code>\tan \phi= \frac{V_{L}-V_{C}}{V_{R}}= \frac{X_{L}-X_{C}}{R}(\text{相位常数, Phase Constant})</code></span>
因此，当 <span class="course-math" data-tex="X_{L}=X_{C}" data-display="false"><code>X_{L}=X_{C}</code></span> 时， <span class="course-math" data-tex="\phi=0" data-display="false"><code>\phi=0</code></span>，达到共振（Resonance），<span class="course-math" data-tex="I_{m}" data-display="false"><code>I_{m}</code></span>（振幅）达到最大：
<span class="course-math course-math-display" data-tex="\omega_{d}=\omega= \frac{1}{\sqrt{ LC }}" data-display="true"><code>\omega_{d}=\omega= \frac{1}{\sqrt{ LC }}</code></span>
在 <span class="course-math" data-tex="X_{L}&lt;X_{C}" data-display="false"><code>X_{L}&lt;X_{C}</code></span> 时，<span class="course-math" data-tex="\phi&lt;0" data-display="false"><code>\phi&lt;0</code></span>，<span class="course-math" data-tex="I_{m}" data-display="false"><code>I_{m}</code></span> 随 <span class="course-math" data-tex="\omega_{d}" data-display="false"><code>\omega_{d}</code></span> 增加而增加（称为容性/mainly capacitive，此时电压落后于电流）；在 <span class="course-math" data-tex="X_{L}&gt;X_{C}" data-display="false"><code>X_{L}&gt;X_{C}</code></span> 时， <span class="course-math" data-tex="\phi&gt;0" data-display="false"><code>\phi&gt;0</code></span>，<span class="course-math" data-tex="I_{m}" data-display="false"><code>I_{m}</code></span> 随 <span class="course-math" data-tex="\omega_{d}" data-display="false"><code>\omega_{d}</code></span> 增加而减小（称为感性/mainly inductive，此时电压提前于电流）。
**直观理解：<span class="course-math" data-tex="\omega_{d}" data-display="false"><code>\omega_{d}</code></span> 从 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 增加到 <span class="course-math" data-tex="\infty" data-display="false"><code>\infty</code></span> 时，感抗在从 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 增加到 <span class="course-math" data-tex="\infty" data-display="false"><code>\infty</code></span>，容抗在从 <span class="course-math" data-tex="\infty" data-display="false"><code>\infty</code></span> 减小到 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。总阻抗取决于它们差值的大小，当他们相等的时候阻抗最小，电流幅值最大。左边，容抗大，为电容性；右边，感抗大，为电感性。**

另外，定义 **功率因数（Power Factor）** 为 <span class="course-math" data-tex="\cos \phi=\frac{R}{Z}" data-display="false"><code>\cos \phi=\frac{R}{Z}</code></span>，即有功功率和总功率的比值。


### 交流电路（AC）中的功率
{: #section-2 }


<span class="course-math course-math-display" data-tex="I_{\text{rms}}=\frac{I}{\sqrt{ 2 }}, V_{\text{rms}}= \frac{V}{\sqrt{ 2 }}, \varepsilon_{\text{rms}} = \frac{\varepsilon _{m}}{\sqrt{ 2 }}" data-display="true"><code>I_{\text{rms}}=\frac{I}{\sqrt{ 2 }}, V_{\text{rms}}= \frac{V}{\sqrt{ 2 }}, \varepsilon_{\text{rms}} = \frac{\varepsilon _{m}}{\sqrt{ 2 }}</code></span>
<span class="course-math course-math-display" data-tex="P_{\text{avg}}=I^{2}_{\text{rms}}R" data-display="true"><code>P_{\text{avg}}=I^{2}_{\text{rms}}R</code></span>
在包含 <span class="course-math" data-tex="\varepsilon,C,L,R" data-display="false"><code>\varepsilon,C,L,R</code></span> 的电路中：

<span class="course-math course-math-display" data-tex="P_{\text{avg}}=I_{\text{rms}}^{2}R= \frac{\varepsilon_{\text{rms}}}{Z}I_{\text{rms}}R=\varepsilon_{\text{rms}}I_{\text{rms}}\cos \phi" data-display="true"><code>P_{\text{avg}}=I_{\text{rms}}^{2}R= \frac{\varepsilon_{\text{rms}}}{Z}I_{\text{rms}}R=\varepsilon_{\text{rms}}I_{\text{rms}}\cos \phi</code></span>

### 变压器（Transformer）
{: #section-3 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88-4.png' | relative_url }}{% raw %}" alt="Electromagnetism - 电磁学综合-4" width="294" height="288" loading="lazy" decoding="async">
电压关系：
<span class="course-math course-math-display" data-tex="\frac{V_{2}}{V_{1}}= \frac{N_{2}}{N_{1}}" data-display="true"><code>\frac{V_{2}}{V_{1}}= \frac{N_{2}}{N_{1}}</code></span>
能量守恒，有
<span class="course-math course-math-display" data-tex="V_{1}I_{1}=V_{2}I_{2}" data-display="true"><code>V_{1}I_{1}=V_{2}I_{2}</code></span>
因此在电源端的等效电阻为
<span class="course-math course-math-display" data-tex="\frac{V_{1}}{I_{1}}= \frac{R}{\left( \frac{N_{2}}{N_{1}} \right)^{2}}" data-display="true"><code>\frac{V_{1}}{I_{1}}= \frac{R}{\left( \frac{N_{2}}{N_{1}} \right)^{2}}</code></span>

### 位移电流
{: #section-4 }


位移电流（Displacement Current）为空间中的电场变化的等效电流，它会产生磁场：
<span class="course-math course-math-display" data-tex="i_{D}=\varepsilon_{0} \frac{d\Phi_{E}}{dt}=\varepsilon_{0} \frac{d}{dt}\int \vec{E}\cdot d\vec{A}" data-display="true"><code>i_{D}=\varepsilon_{0} \frac{d\Phi_{E}}{dt}=\varepsilon_{0} \frac{d}{dt}\int \vec{E}\cdot d\vec{A}</code></span>
电容器充放电中，就会产生位移电流。
根据麦克斯韦理论，为了保持闭合电路中“电流”的连续性，流入电容器极板的传导电流等于极板间的位移电流。
麦克斯韦修正后的安培定律：
<span class="course-math course-math-display" data-tex="\int \vec{B}\cdot d\vec{l}=\mu_{0}(i+i_{D})" data-display="true"><code>\int \vec{B}\cdot d\vec{l}=\mu_{0}(i+i_{D})</code></span>

## 麦克斯韦方程组
{: #section-5 }


电磁波是横波 (EM waves <span class="course-math" data-tex="\rightarrow" data-display="false"><code>\rightarrow</code></span> Transverse waves)。

电磁波的存在是基于麦克斯韦方程组推导出来的。一般形式的麦克斯韦方程组积分形式如下：

<span class="course-math course-math-display" data-tex="\begin{cases}&#10;\oint \mathbf{E} \cdot \mathrm{d}\mathbf{A} = \frac{q_{\text{enc}}}{\varepsilon_0} &amp; \text{(高斯定律)} \\&#10;\oint \mathbf{B} \cdot \mathrm{d}\mathbf{A} = 0 &amp; \text{(高斯磁定律)} \\&#10;\oint \mathbf{E} \cdot \mathrm{d}\mathbf{l} = -\frac{\mathrm{d}}{\mathrm{d}t} \int \mathbf{B} \cdot \mathrm{d}\mathbf{A} &amp; \text{(法拉第感应定律)} \\&#10;\oint \mathbf{B} \cdot \mathrm{d}\mathbf{l} = \mu_0 \left( \int \mathbf{J} \cdot \mathrm{d}\mathbf{A} + \varepsilon_0 \frac{\mathrm{d}}{\mathrm{d}t} \int \mathbf{E} \cdot \mathrm{d}\mathbf{A} \right) &amp; \text{(安培-麦克斯韦定律)}&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;\oint \mathbf{E} \cdot \mathrm{d}\mathbf{A} = \frac{q_{\text{enc}}}{\varepsilon_0} &amp; \text{(高斯定律)} \\&#10;\oint \mathbf{B} \cdot \mathrm{d}\mathbf{A} = 0 &amp; \text{(高斯磁定律)} \\&#10;\oint \mathbf{E} \cdot \mathrm{d}\mathbf{l} = -\frac{\mathrm{d}}{\mathrm{d}t} \int \mathbf{B} \cdot \mathrm{d}\mathbf{A} &amp; \text{(法拉第感应定律)} \\&#10;\oint \mathbf{B} \cdot \mathrm{d}\mathbf{l} = \mu_0 \left( \int \mathbf{J} \cdot \mathrm{d}\mathbf{A} + \varepsilon_0 \frac{\mathrm{d}}{\mathrm{d}t} \int \mathbf{E} \cdot \mathrm{d}\mathbf{A} \right) &amp; \text{(安培-麦克斯韦定律)}&#10;\end{cases}</code></span>

**自由空间条件产生自洽波动：**
在远离辐射源的自由空间中，没有自由电荷 (<span class="course-math" data-tex="q = 0" data-display="false"><code>q = 0</code></span>)，也没有传导电流 (<span class="course-math" data-tex="\mathbf{J} = 0" data-display="false"><code>\mathbf{J} = 0</code></span>)。将这两个条件代入上述方程，原本需要电荷和电流激发的项消失了，方程变得高度对称。这表明：**交变的电场可以自发产生磁场，交变的磁场也可以自发产生电场。** 它们交替激发，形成在空间中传播的电磁波。

在自由空间中，沿 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 轴正方向传播的最简单的电磁波形式是平面简谐波：
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;E = E_m \sin(kx - \omega t) \\&#10;B = B_m \sin(kx - \omega t)&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;E = E_m \sin(kx - \omega t) \\&#10;B = B_m \sin(kx - \omega t)&#10;\end{cases}</code></span>

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Synthesis%20of%20Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88.png' | relative_url }}{% raw %}" alt="Synthesis of Electromagnetism - 电磁学综合" width="468" height="429" loading="lazy" decoding="async">

电磁波具有以下六个重要特征：
1. 步调一致 (<span class="course-math" data-tex="E \text{ and } B" data-display="false"><code>E \text{ and } B</code></span> are in phase)：电场 <span class="course-math" data-tex="\mathbf{E}" data-display="false"><code>\mathbf{E}</code></span> 和磁场 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 是**同相**的。
2. 相互垂直 (<span class="course-math" data-tex="E \text{ and } B" data-display="false"><code>E \text{ and } B</code></span> are perpendicular)：电场分量和磁场分量不仅彼此相互垂直，而且它们都垂直于波的传播方向。因此电磁波是横波。
3. 定向传播 (<span class="course-math" data-tex="\hat{E} \times \hat{B} = \hat{c}" data-display="false"><code>\hat{E} \times \hat{B} = \hat{c}</code></span>)。
 4. 振幅比例固定 (<span class="course-math" data-tex="E_m = cB_m" data-display="false"><code>E_m = cB_m</code></span>)：在真空中，电场的峰值大小 <span class="course-math" data-tex="E_m" data-display="false"><code>E_m</code></span> 与磁场的峰值大小 <span class="course-math" data-tex="B_m" data-display="false"><code>B_m</code></span> 之间保持一个固定的比例关系，这个比例常数就是真空中光速 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span>。
 5. 波速由真空常数决定 (<span class="course-math" data-tex="c = 1/\sqrt{\mu_0\varepsilon_0}" data-display="false"><code>c = 1/\sqrt{\mu_0\varepsilon_0}</code></span>)：电磁波在真空中的传播速度（光速 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span>）仅仅取决于真空磁导率 <span class="course-math" data-tex="\mu_0" data-display="false"><code>\mu_0</code></span> 和真空电容率 <span class="course-math" data-tex="\varepsilon_0" data-display="false"><code>\varepsilon_0</code></span>。这一推导证明了光本质上也是一种电磁波。
 6. 能量均分 (<span class="course-math" data-tex="u_E = u_B" data-display="false"><code>u_E = u_B</code></span>)：电磁波在传播过程中携带着能量。在任何时刻、真空中的任何一点，电场贡献的能量密度 <span class="course-math" data-tex="u_E" data-display="false"><code>u_E</code></span> 和磁场贡献的能量密度 <span class="course-math" data-tex="u_B" data-display="false"><code>u_B</code></span> 是绝对相等的。


为了描述电磁波在某一时刻、某一点传输能量的方向和速率，物理学引入了**坡印廷矢量（Poynting vector） <span class="course-math" data-tex="\vec{S}" data-display="false"><code>\vec{S}</code></span>**。其定义式（矢量形式）为：
<span class="course-math course-math-display" data-tex="\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}" data-display="true"><code>\vec{S} = \frac{1}{\mu_0} \vec{E} \times \vec{B}</code></span>

*   **方向：** <span class="course-math" data-tex="\vec{S}" data-display="false"><code>\vec{S}</code></span> 的方向由 <span class="course-math" data-tex="\vec{E} \times \vec{B}" data-display="false"><code>\vec{E} \times \vec{B}</code></span> 决定，这意味着能量是沿着波的传播方向流动的。
*   **大小推导：** 因为 <span class="course-math" data-tex="\vec{E}" data-display="false"><code>\vec{E}</code></span> 和 <span class="course-math" data-tex="\vec{B}" data-display="false"><code>\vec{B}</code></span> 相互垂直，所以叉乘的大小直接等于乘积 <span class="course-math" data-tex="EB" data-display="false"><code>EB</code></span>。再利用真空中电场和磁场的幅值关系 <span class="course-math" data-tex="E = cB" data-display="false"><code>E = cB</code></span>，可以推导出 <span class="course-math" data-tex="\vec{S}" data-display="false"><code>\vec{S}</code></span> 大小的多种等效表达形式。光学中常用只含 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 的形式。
<span class="course-math course-math-display" data-tex="S = \frac{1}{\mu_0} EB = \frac{1}{c\mu_0} E^2 = \frac{c}{\mu_0} B^2" data-display="true"><code>S = \frac{1}{\mu_0} EB = \frac{1}{c\mu_0} E^2 = \frac{c}{\mu_0} B^2</code></span>
*   **物理意义：** 量纲为 **功率/面积 (<span class="course-math" data-tex="W/m^2" data-display="false"><code>W/m^2</code></span>)**。它表示单位时间内，垂直穿过单位面积的电磁能量。

由于电磁波的电场 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 和磁场 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 是极高频周期性变化的，坡印廷矢量 <span class="course-math" data-tex="\vec{S}" data-display="false"><code>\vec{S}</code></span> 也在快速振荡。考察一段时间内能量传输的**平均效果**，这个时间平均值就被称为电磁波的**强度 (Intensity)**，用字母 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 表示：
<span class="course-math course-math-display" data-tex="I = \langle S \rangle = \frac{1}{c\mu_0} \langle E^2 \rangle = \frac{1}{2c\mu_0} E_m^2 = \frac{1}{c\mu_0} E_{\text{rms}}^2" data-display="true"><code>I = \langle S \rangle = \frac{1}{c\mu_0} \langle E^2 \rangle = \frac{1}{2c\mu_0} E_m^2 = \frac{1}{c\mu_0} E_{\text{rms}}^2</code></span>

*   <span class="course-math" data-tex="\langle S \rangle" data-display="false"><code>\langle S \rangle</code></span> 表示对瞬时值 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 取时间平均。对于正弦波，周期内平方的平均值 <span class="course-math" data-tex="\langle E^2 \rangle = \frac{1}{2} E_m^2" data-display="false"><code>\langle E^2 \rangle = \frac{1}{2} E_m^2</code></span> （其中 <span class="course-math" data-tex="E_m" data-display="false"><code>E_m</code></span> 是电场的峰值/最大幅值）。<span class="course-math" data-tex="E_{\text{rms}}" data-display="false"><code>E_{\text{rms}}</code></span> 代表电场的**有效值** (均方根值, Root Mean Square)，<span class="course-math" data-tex="E_{\text{rms}} = E_m / \sqrt{2}" data-display="false"><code>E_{\text{rms}} = E_m / \sqrt{2}</code></span>。因此 <span class="course-math" data-tex="\frac{1}{2} E_m^2" data-display="false"><code>\frac{1}{2} E_m^2</code></span> 等于 <span class="course-math" data-tex="E_{\text{rms}}^2" data-display="false"><code>E_{\text{rms}}^2</code></span>。

强度的本质是：
<span class="course-math course-math-display" data-tex="\left( \frac{\text{power}}{\text{area}} \right)_{avg}" data-display="true"><code>\left( \frac{\text{power}}{\text{area}} \right)_{avg}</code></span>
即：**平均辐射功率除以受照面积**。

如果产生电磁波的是一个向四面八方均匀辐射的**点辐射源 (Point source)**，能量会在空间中以球面波的形式向外扩散。根据能量守恒定律，辐射源发出的总平均功率（average power）在距离源为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 时，会均匀分布在半径为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 的整个球面上：

<span class="course-math course-math-display" data-tex="I = \frac{\text{average power}}{4\pi r^2} \propto \frac{1}{r^2}" data-display="true"><code>I = \frac{\text{average power}}{4\pi r^2} \propto \frac{1}{r^2}</code></span>
因此来自点源的电磁波强度与距离的平方成反比（<span class="course-math" data-tex="I \propto 1/r^2" data-display="false"><code>I \propto 1/r^2</code></span>）。


### 光子动量与辐射压（Radiation Pressure）
{: #section-6 }


除了波动性，光（电磁波）也具有粒子性。光子（Photons）静止质量为零，但携带着能量和**动量**。

光子所携带的动量 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 与其能量 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 之间的关系为：

<span class="course-math course-math-display" data-tex="P = \frac{U}{c}" data-display="true"><code>P = \frac{U}{c}</code></span>
*(注：<span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 为真空中光速)*

当一束强度为 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 的电磁波在 <span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span> 时间内照射到面积为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的物体表面时，传递的总能量为 <span class="course-math" data-tex="U = I A \Delta t" data-display="false"><code>U = I A \Delta t</code></span>。根据表面性质的不同，物体获得的动量变化量 <span class="course-math" data-tex="\Delta P" data-display="false"><code>\Delta P</code></span> 有两种极端情况：
*   **完全吸收 (Totally absorbed)：** 
    物体吸收所有入射光子。
    <span class="course-math course-math-display" data-tex="\Delta P = \frac{U}{c} = \frac{IA\Delta t}{c}" data-display="true"><code>\Delta P = \frac{U}{c} = \frac{IA\Delta t}{c}</code></span>
*   **完全反射 (Totally reflected)：**
    入射光子被原路弹回，动量改变量翻倍。
    <span class="course-math course-math-display" data-tex="\Delta P = \frac{2U}{c} = \frac{2IA\Delta t}{c}" data-display="true"><code>\Delta P = \frac{2U}{c} = \frac{2IA\Delta t}{c}</code></span>

因为光传递了动量，所以电磁波会对物体施加力。

**1. 辐射力 (Force, <span class="course-math" data-tex="F" data-display="false"><code>F</code></span>)**
根据牛顿第二定律 (<span class="course-math" data-tex="F = \frac{\Delta P}{\Delta t}" data-display="false"><code>F = \frac{\Delta P}{\Delta t}</code></span>)，电磁波施加的力为：
*   完全吸收：<span class="course-math course-math-display" data-tex="F = \frac{IA}{c}" data-display="true"><code>F = \frac{IA}{c}</code></span>
*   完全反射：<span class="course-math course-math-display" data-tex="F = \frac{2IA}{c}" data-display="true"><code>F = \frac{2IA}{c}</code></span>

**2. 辐射压 (Pressure, <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>)**
压强定义为单位面积上的力 (<span class="course-math" data-tex="p = \frac{F}{A}" data-display="false"><code>p = \frac{F}{A}</code></span>)，即：
*   完全吸收：<span class="course-math course-math-display" data-tex="p = \frac{I}{c}" data-display="true"><code>p = \frac{I}{c}</code></span>
*   完全反射：<span class="course-math course-math-display" data-tex="p = \frac{2I}{c}" data-display="true"><code>p = \frac{2I}{c}</code></span>
通过单位（量纲）理解辐射压本质的直观对应关系：
<span class="course-math course-math-display" data-tex="\frac{I}{c} = \frac{S_{avg}}{c} = \frac{\text{energy}/(m^2 \cdot sec)}{c}" data-display="true"><code>\frac{I}{c} = \frac{S_{avg}}{c} = \frac{\text{energy}/(m^2 \cdot sec)}{c}</code></span>
由于 **<span class="course-math" data-tex="\text{energy} / c = \text{momentum}" data-display="false"><code>\text{energy} / c = \text{momentum}</code></span> (能量/光速 = 动量)**，上式可理解为：
**单位时间、单位面积上所传递的动量**。由动量定理可知，这正是**压强 (pressure)** 的物理定义。


### 偏振（Polarization）
{: #section-7 }


*   **偏振面定义：** 电磁波中**电场 <span class="course-math" data-tex="\vec{E}" data-display="false"><code>\vec{E}</code></span>** 振动所在的平面。
*   **线偏振光：** 电场 <span class="course-math" data-tex="\vec{E}" data-display="false"><code>\vec{E}</code></span> 只在单一固定方向上振动的光。
*   **非偏振光 (自然光)：** 电场 <span class="course-math" data-tex="\vec{E}" data-display="false"><code>\vec{E}</code></span> 在各个方向振动概率相等的随机光。可等效为**两个相互垂直、强度相等的线偏振光叠加**。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Synthesis%20of%20Electromagnetism%20-%20%E7%94%B5%E7%A3%81%E5%AD%A6%E7%BB%BC%E5%90%88-1.png' | relative_url }}{% raw %}" alt="Synthesis of Electromagnetism - 电磁学综合-1" width="326" height="169" loading="lazy" decoding="async">

**1. 起偏：非偏振光 <span class="course-math" data-tex="\rightarrow" data-display="false"><code>\rightarrow</code></span> 线偏振光**
*   **原理：** 当强度为 <span class="course-math" data-tex="I_0" data-display="false"><code>I_0</code></span> 的非偏振光穿过偏振片时，只有平行于偏振轴的电场分量通过。
*   **强度变化：** 透射光变为线偏振光，强度减半：
    <span class="course-math course-math-display" data-tex="I_1 = \frac{1}{2} I_0" data-display="true"><code>I_1 = \frac{1}{2} I_0</code></span>
**2. 检偏：马吕斯定律 (Malus's Law)**
*   **原理：** 当振幅为 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span>、强度为 <span class="course-math" data-tex="I_1" data-display="false"><code>I_1</code></span> 的线偏振光穿过偏振片时，设振动面与偏振片透光轴夹角为 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span>。透射光的电场变为 <span class="course-math" data-tex="E_{\parallel} = E \cos\phi" data-display="false"><code>E_{\parallel} = E \cos\phi</code></span>。
*   **光强公式：** 由于光强 <span class="course-math" data-tex="I \propto E^2" data-display="false"><code>I \propto E^2</code></span>，透射光强度 <span class="course-math" data-tex="I_2" data-display="false"><code>I_2</code></span> 满足**马吕斯定律**：
    <span class="course-math course-math-display" data-tex="I_2 = I_1 \cos^2\phi" data-display="true"><code>I_2 = I_1 \cos^2\phi</code></span>
    *(注：当夹角 <span class="course-math" data-tex="\phi = 0^\circ" data-display="false"><code>\phi = 0^\circ</code></span> 时透射极强；当 <span class="course-math" data-tex="\phi = 90^\circ" data-display="false"><code>\phi = 90^\circ</code></span> 时透射为零，即消光)*
{% endraw %}
