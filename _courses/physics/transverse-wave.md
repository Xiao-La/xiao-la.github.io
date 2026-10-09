---
title: "Transverse Wave - 横波"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-11-26T11:11:49+08:00"
updated_at: "2026-10-09T16:13:40+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/physics/transverse-wave/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Transverse Wave - 横波"
excerpt: "大学物理（上）/（下） · Transverse Wave - 横波"
---

{% raw %}
<a href="{% endraw %}{{ '/courses/physics/oscillations/' | relative_url }}{% raw %}">Oscillations - 振动</a>
**横波（Transverse Wave）** 指质点振动方向与波传播方向垂直的波。

向右传播的波可以写成 <span class="course-math" data-tex="y(x,t)=f(x - vt)" data-display="false"><code>y(x,t)=f(x - vt)</code></span> 的形式。

## 谐波
{: #section-1 }


**谐波（Harmonic/Sinusoidal Waves）** 指 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 是正弦函数的情况：

<span class="course-math course-math-display" data-tex="y(x,t)=y_{m}\sin(k(x\pm vt))" data-display="true"><code>y(x,t)=y_{m}\sin(k(x\pm vt))</code></span>

将 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 增加一个波长 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>，波的形状不变，可以推出 <span class="course-math" data-tex="k=\frac{2\pi}{\lambda}" data-display="false"><code>k=\frac{2\pi}{\lambda}</code></span>，<span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 叫做角波数 （Angular Wave Number），单位 <span class="course-math" data-tex="\text{rad/m}" data-display="false"><code>\text{rad/m}</code></span>。
将 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 增加一个周期 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span>，波的形状不变，可以推出 <span class="course-math" data-tex="kv=\frac{2\pi}{T}=\omega" data-display="false"><code>kv=\frac{2\pi}{T}=\omega</code></span>。
故谐波的**标准形式**：
<span class="course-math course-math-display" data-tex="y(x,t)=y_{m}\sin(kx\pm\omega t)" data-display="true"><code>y(x,t)=y_{m}\sin(kx\pm\omega t)</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Wave-1.png' | relative_url }}{% raw %}" alt="Wave-1" width="318" height="214" loading="lazy" decoding="async">

## 绷紧弦上的波
{: #section-2 }


绷紧弦（Stretched String）上的波速
<span class="course-math course-math-display" data-tex="v=\sqrt{ \frac{\tau}{\mu} }" data-display="true"><code>v=\sqrt{ \frac{\tau}{\mu} }</code></span>
其中 <span class="course-math" data-tex="\tau" data-display="false"><code>\tau</code></span> 是弦上的张力（Tension），<span class="course-math" data-tex="\mu=\frac{M}{L}" data-display="false"><code>\mu=\frac{M}{L}</code></span> 是弦的线密度（Linear Density）
证明： <a href="{% endraw %}{{ '/courses/references/wave-1/' | relative_url }}{% raw %}">Wave-1</a>
波能量传递的平均功率：
<span class="course-math course-math-display" data-tex="P_{\mathrm{avg}} = \frac{1}{2}\mu v\omega^2y_{m}^2" data-display="true"><code>P_{\mathrm{avg}} = \frac{1}{2}\mu v\omega^2y_{m}^2</code></span>
证明：<a href="{% endraw %}{{ '/courses/references/wave-2/' | relative_url }}{% raw %}">Wave-2</a>


##  谐波的叠加
{: #section-3 }


两列谐波的叠加（Superposition）只需简单相加：
<span class="course-math course-math-display" data-tex="y(x,t)=y_{1}(x,t)+y_{2}(x,t)" data-display="true"><code>y(x,t)=y_{1}(x,t)+y_{2}(x,t)</code></span>
稳定的叠加叫做干涉（Interference）。

#### 差某个相位的情况
{: #section-4 }


若两列波振幅，波长和频率相同，只差一个相位 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span>，那么它们的叠加：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;y(x,t)&amp;=y_{m}\sin(kx-\omega t)+y_{m}\sin(kx-\omega t+\phi) \\&#10;&amp;=2y_{m}\cos\left( \frac{\phi}{2} \right)\sin\left( kx-\omega t+\frac{\phi}{2} \right)&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;y(x,t)&amp;=y_{m}\sin(kx-\omega t)+y_{m}\sin(kx-\omega t+\phi) \\&#10;&amp;=2y_{m}\cos\left( \frac{\phi}{2} \right)\sin\left( kx-\omega t+\frac{\phi}{2} \right)&#10;\end{aligned}</code></span>
1. 若 <span class="course-math" data-tex="\cos\left( \frac{\phi}{2} \right)=0" data-display="false"><code>\cos\left( \frac{\phi}{2} \right)=0</code></span>，则两列波反相（Out of phase），称为相消干涉（Destructive Interference）。
2. 若 <span class="course-math" data-tex="\cos\left( \frac{\phi}{2} \right)=\pm 1" data-display="false"><code>\cos\left( \frac{\phi}{2} \right)=\pm 1</code></span>，则两列波同相（In phase），称为相长干涉（Constructive Interference）。

#### 传播方向相反的情况
{: #section-5 }


若两列波振幅，波长和频率相同，但传播方向相反，那么它们的叠加：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;y(x,t)&amp;=y_{m} \sin (kx-\omega t) + y_{m} \sin(kx+\omega t) \\&#10;&amp;=2y_{m} \sin kx&#10; \cos\omega t\end{aligned}" data-display="true"><code>\begin{aligned}&#10;y(x,t)&amp;=y_{m} \sin (kx-\omega t) + y_{m} \sin(kx+\omega t) \\&#10;&amp;=2y_{m} \sin kx&#10; \cos\omega t\end{aligned}</code></span>
是一个**驻波（Standing Wave）**。
1. 若 <span class="course-math" data-tex="\sin kx=0" data-display="false"><code>\sin kx=0</code></span>，即 <span class="course-math" data-tex="x=n \frac{\lambda}{2}" data-display="false"><code>x=n \frac{\lambda}{2}</code></span>，这些点永远不动，叫做节点（Nodes）。
2. 若 <span class="course-math" data-tex="\sin kx=\pm 1" data-display="false"><code>\sin kx=\pm 1</code></span>，即 <span class="course-math" data-tex="x=\left( n+\frac{1}{2} \right) \frac{\lambda}{2}" data-display="false"><code>x=\left( n+\frac{1}{2} \right) \frac{\lambda}{2}</code></span>，这些点振幅最大，叫做波腹（Antinodes）。

## 波的反射
{: #section-6 }


如果一个波撞到“硬边界”（Hard boundary），会发生半波损，反射波相位改变 <span class="course-math" data-tex="\pi" data-display="false"><code>\pi</code></span> 后返回。
如果一个波撞到“软边界”（Soft boundary），会直接反射回来。

如果一个波和其反射的波叠加形成了驻波，则这种现象称为共振（Resonance）。

**可以证明，产生共振的必要条件是硬边界都在节点，软边界都在波腹**。

两边都是硬边界的情况，需要 <span class="course-math" data-tex="L=n \frac{\lambda}{2}" data-display="false"><code>L=n \frac{\lambda}{2}</code></span> 形成共振：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Wave-3.png' | relative_url }}{% raw %}" alt="Wave-3" width="1217" height="1251" loading="lazy" decoding="async">
2. 一边是硬边界一边是软边界的情况，需要 <span class="course-math" data-tex="L=\frac{\lambda}{4} + \frac{\lambda}{2} n" data-display="false"><code>L=\frac{\lambda}{4} + \frac{\lambda}{2} n</code></span>，即 <span class="course-math" data-tex="\lambda=\frac{4L}{m}(m=1,3,5\dots)" data-display="false"><code>\lambda=\frac{4L}{m}(m=1,3,5\dots)</code></span> 的情况：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Wave-4.png' | relative_url }}{% raw %}" alt="Wave-4" width="534" height="352" loading="lazy" decoding="async">
3. 两边都是软边界的情况，需要 <span class="course-math" data-tex="L=n \frac{\lambda}{2}" data-display="false"><code>L=n \frac{\lambda}{2}</code></span>：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Wave-5.png' | relative_url }}{% raw %}" alt="Wave-5" width="522" height="572" loading="lazy" decoding="async">

注意，所谓 <span class="course-math" data-tex="\text{nth harmonic}" data-display="false"><code>\text{nth harmonic}</code></span> ，可以理解成谐波的频率 <span class="course-math" data-tex="f_{n}=nf_{1}" data-display="false"><code>f_{n}=nf_{1}</code></span>，其中 <span class="course-math" data-tex="f_{1}" data-display="false"><code>f_{1}</code></span> 为 <span class="course-math" data-tex="\text{Foundamental Frequency}" data-display="false"><code>\text{Foundamental Frequency}</code></span>；所谓 <span class="course-math" data-tex="\text{nth lowest harmonic}" data-display="false"><code>\text{nth lowest harmonic}</code></span>，对一边硬边界一边软边界的情况，则取第 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个可以形成谐波的频率。
{% endraw %}
