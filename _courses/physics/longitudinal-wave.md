---
title: "Longitudinal Wave - 纵波"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-11-26T20:02:55+08:00"
updated_at: "2026-10-08T20:57:10+08:00"
reference: false
order: 7
layout: "course"
permalink: "/courses/physics/longitudinal-wave/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Longitudinal Wave - 纵波"
excerpt: "大学物理（上）/（下） · Longitudinal Wave - 纵波"
---

{% raw %}
前置： <a href="{% endraw %}{{ '/courses/physics/transverse-wave/' | relative_url }}{% raw %}">Transverse Wave - 横波</a>

**纵波（Longitudinal Wave）** 指质点振动方向与波传播方向平行的波。

**声波（Sound Waves）** 是一种常见的纵波。
声波的波速：
<span class="course-math course-math-display" data-tex="v=\sqrt{ \frac{B}{\rho} }" data-display="true"><code>v=\sqrt{ \frac{B}{\rho} }</code></span>
其中 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 是介质的体变模量（Bulk Modulus），<span class="course-math" data-tex="\rho" data-display="false"><code>\rho</code></span> 为介质的密度。
<span class="course-math course-math-display" data-tex="B=- \frac{\Delta p}{\Delta V/V}" data-display="true"><code>B=- \frac{\Delta p}{\Delta V/V}</code></span>
由于气体最容易被压缩（<span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 很小），液体次之，固体最难，故而声速：固体>液体>气体。
可以证明（<a href="{% endraw %}{{ '/courses/references/wave-3/' | relative_url }}{% raw %}">Wave-3</a>），声波的方程：
<span class="course-math course-math-display" data-tex="s(x,t)=s_{m}\cos(kx-\omega t)" data-display="true"><code>s(x,t)=s_{m}\cos(kx-\omega t)</code></span>
进而：
<span class="course-math course-math-display" data-tex="\Delta p(x,t)=-B \frac{\partial s}{\partial x}=Bks_{m}\sin(kx-\omega t)" data-display="true"><code>\Delta p(x,t)=-B \frac{\partial s}{\partial x}=Bks_{m}\sin(kx-\omega t)</code></span>
<span class="course-math course-math-display" data-tex="\implies p_{m}=Bks_{m}=v\rho\omega s_{m}" data-display="true"><code>\implies p_{m}=Bks_{m}=v\rho\omega s_{m}</code></span>
能量传递的平均功率：
<span class="course-math course-math-display" data-tex="P_{avg}=\frac{1}{2}ABk\omega s_{m}^2" data-display="true"><code>P_{avg}=\frac{1}{2}ABk\omega s_{m}^2</code></span>
定义声音的**强度（Intensity）** 为单位面积的功率：
<span class="course-math course-math-display" data-tex="I=\frac{P_{avg}}{A}=\frac{1}{2}\rho v\omega^2s_{m}^2" data-display="true"><code>I=\frac{P_{avg}}{A}=\frac{1}{2}\rho v\omega^2s_{m}^2</code></span>

在三维空间中，波面为球形：
<span class="course-math course-math-display" data-tex="I(r)=\frac{P_{s}}{4\pi r^2}" data-display="true"><code>I(r)=\frac{P_{s}}{4\pi r^2}</code></span>

进而定义**声级（Sound Level，单位为分贝 dB）：**
<span class="course-math course-math-display" data-tex="\beta=(10\text{dB})\log \frac{I}{I_{0}}" data-display="true"><code>\beta=(10\text{dB})\log \frac{I}{I_{0}}</code></span>
其中 <span class="course-math" data-tex="I_{0}=10^{-12}\text{W/m}^2" data-display="false"><code>I_{0}=10^{-12}\text{W/m}^2</code></span>，约为人能听到的最小声强。


## 声波的干涉
{: #section-1 }



### 路程差导致的相位差
{: #section-2 }

<span class="course-math course-math-display" data-tex="\begin{align}&#10;s(P,t)&amp;=s_{1}(x,t)+s_{2}(x,t) \\&#10;&amp;=s_{m}\cos(kx_{1}-\omega t)+s_{m}\cos(kx_{2}-\omega t) \\&#10;&amp;=2s_{m}\cos\left( \frac{k\Delta L}{2} \right)\cos(\omega t-\bar{\phi})&#10;\end{align}" data-display="true"><code>\begin{align}&#10;s(P,t)&amp;=s_{1}(x,t)+s_{2}(x,t) \\&#10;&amp;=s_{m}\cos(kx_{1}-\omega t)+s_{m}\cos(kx_{2}-\omega t) \\&#10;&amp;=2s_{m}\cos\left( \frac{k\Delta L}{2} \right)\cos(\omega t-\bar{\phi})&#10;\end{align}</code></span>
其中 <span class="course-math" data-tex="\Delta L=&#124;x_{2}-x_{1}&#124;, \bar{\phi}=\frac{k(x_{1}+x_{2})}{2}" data-display="false"><code>\Delta L=&#124;x_{2}-x_{1}&#124;, \bar{\phi}=\frac{k(x_{1}+x_{2})}{2}</code></span> 。
由于 <span class="course-math" data-tex="\frac{k\Delta L}{2}=\frac{\pi \Delta L}{\lambda}" data-display="false"><code>\frac{k\Delta L}{2}=\frac{\pi \Delta L}{\lambda}</code></span>，有：
1. 若 <span class="course-math" data-tex="\Delta L" data-display="false"><code>\Delta L</code></span> 为半波长的偶数倍，则为相长干涉。
2. 若 <span class="course-math" data-tex="\Delta L" data-display="false"><code>\Delta L</code></span> 为半波长的奇数倍，则为相消干涉。



### 节拍
{: #section-3 }


两列波 <span class="course-math" data-tex="s_{1}=s_{m}\cos \omega_{1}t, s_{2}=s_{m} \cos \omega_{2}t" data-display="false"><code>s_{1}=s_{m}\cos \omega_{1}t, s_{2}=s_{m} \cos \omega_{2}t</code></span>，那么它们的叠加 <span class="course-math" data-tex="s = 2s_{m} \cos (\frac{\omega_{1}-\omega_{2}}{2}t)  \cos (\frac{\omega_{1}+\omega_{2}}{2}t)" data-display="false"><code>s = 2s_{m} \cos (\frac{\omega_{1}-\omega_{2}}{2}t)  \cos (\frac{\omega_{1}+\omega_{2}}{2}t)</code></span>
叠加会形成这样的波形：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Wave-7.png' | relative_url }}{% raw %}" alt="Wave-7" width="984" height="176" loading="lazy" decoding="async">
<span class="course-math" data-tex="\omega_{\text{beat}}=&#124;\omega_{1}-\omega_{2}&#124;, f_{\text{beat}}=&#124;f_{1}-f_{2}&#124;" data-display="false"><code>\omega_{\text{beat}}=&#124;\omega_{1}-\omega_{2}&#124;, f_{\text{beat}}=&#124;f_{1}-f_{2}&#124;</code></span>


### 驻波
{: #section-4 }


同横波，注意考虑 Open End 和 Closed End。


## 多普勒效应
{: #section-5 }


波源（Source）的速度为 <span class="course-math" data-tex="v_{S}" data-display="false"><code>v_{S}</code></span> ，检测者（Detector）速度为 <span class="course-math" data-tex="v_{D}" data-display="false"><code>v_{D}</code></span> ，声音的速度为 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span>，则检测者感受到的声音频率为
<span class="course-math course-math-display" data-tex="f&#x27;=f \frac{v\pm v_{D}}{v\pm v_{S}}" data-display="true"><code>f&#x27;=f \frac{v\pm v_{D}}{v\pm v_{S}}</code></span>
两者接近，<span class="course-math" data-tex="f&#x27;&gt;f" data-display="false"><code>f&#x27;&gt;f</code></span>，两者远离，<span class="course-math" data-tex="f&#x27;&lt;f" data-display="false"><code>f&#x27;&lt;f</code></span>。
注意这个公式需要介质没有速度。如果介质有速度，应把介质选为参考系。

超音速（Supersonic）：<span class="course-math" data-tex="v_{S}&gt;v" data-display="false"><code>v_{S}&gt;v</code></span> 的情形，会引发激波（Shock Wave）.
马赫数（Mach Number）：<span class="course-math" data-tex="\frac{v_{S}}{v}" data-display="false"><code>\frac{v_{S}}{v}</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Wave-8.png' | relative_url }}{% raw %}" alt="Wave-8" width="260" height="209" loading="lazy" decoding="async">
<span class="course-math course-math-display" data-tex="\sin \theta= \frac{v}{v_{S}}" data-display="true"><code>\sin \theta= \frac{v}{v_{S}}</code></span>
{% endraw %}
