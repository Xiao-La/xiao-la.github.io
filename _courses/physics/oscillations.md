---
title: "Oscillations - 振动"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
reference: false
layout: "course"
permalink: "/courses/physics/oscillations/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Oscillations - 振动"
excerpt: "大学物理（上）/（下） · Oscillations - 振动"
---

{% raw %}
前置：<a href="{% endraw %}{{ '/courses/physics/rotation/' | relative_url }}{% raw %}">Rotation - 定轴转动</a>

振动（Oscillation）指的是在两个位置或状态之间的来回运动。
振动一个循环所需要的时间为**周期（Period）： <span class="course-math" data-tex="T" data-display="false"><code>T</code></span>**。
频率 （Frequency）<span class="course-math" data-tex="f=\frac{1}{T}=\frac{\omega}{2\pi}" data-display="false"><code>f=\frac{1}{T}=\frac{\omega}{2\pi}</code></span> 。

### 简谐运动
{: #section-1 }

振动位置是时间的正弦函数的运动，称为**简谐运动（Simple Harmonic Function, SHM）**。
<span class="course-math course-math-display" data-tex="x(t)=x_{m}\cos(\omega t+\phi)" data-display="true"><code>x(t)=x_{m}\cos(\omega t+\phi)</code></span>
其中 <span class="course-math" data-tex="x_{m}" data-display="false"><code>x_{m}</code></span> 是**振幅（Amplitude）**，<span class="course-math" data-tex="\omega t+\phi" data-display="false"><code>\omega t+\phi</code></span> 是**相位（Phase）**，<span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span> 是**相位角（Phase Angle）**， <span class="course-math" data-tex="\omega" data-display="false"><code>\omega</code></span> 是**角频率（Angular Frequency）**，而且有：
<span class="course-math course-math-display" data-tex="\omega =\frac{2\pi}{T}=2\pi f" data-display="true"><code>\omega =\frac{2\pi}{T}=2\pi f</code></span>
通过求导可以得到：
<span class="course-math course-math-display" data-tex="v(t)=\frac{dx(t)}{dt}=-\omega x_{m} \sin(\omega t+\phi)" data-display="true"><code>v(t)=\frac{dx(t)}{dt}=-\omega x_{m} \sin(\omega t+\phi)</code></span>
<span class="course-math course-math-display" data-tex="a(t)=\frac{dv(t)}{dt}=-\omega^2&#10;x_{m}\cos(\omega t+\phi)" data-display="true"><code>a(t)=\frac{dv(t)}{dt}=-\omega^2&#10;x_{m}\cos(\omega t+\phi)</code></span>
 不难看出 <span class="course-math" data-tex="a=-w^2x" data-display="false"><code>a=-w^2x</code></span>，故而 <span class="course-math" data-tex="F=ma=-m\omega^2x" data-display="false"><code>F=ma=-m\omega^2x</code></span>，这里的力就叫**回复力（Restoring Force）**。
反过来通过 <span class="course-math" data-tex="F=-kx" data-display="false"><code>F=-kx</code></span> 可以求得 <span class="course-math" data-tex="\omega=\sqrt{ \frac{k}{m} }, T=2\pi \sqrt{ \frac{m}{k} }" data-display="false"><code>\omega=\sqrt{ \frac{k}{m} }, T=2\pi \sqrt{ \frac{m}{k} }</code></span>。

能量角度，势能 <span class="course-math" data-tex="U=\frac{1}{2}kx^2=\frac{1}{2}kx_{m}^2\cos^2(\omega t+\phi)" data-display="false"><code>U=\frac{1}{2}kx^2=\frac{1}{2}kx_{m}^2\cos^2(\omega t+\phi)</code></span>，动能 <span class="course-math" data-tex="K=\frac{1}{2}mv^2=\frac{1}{2}kx_{m}^2\sin^2(\omega t+\phi)" data-display="false"><code>K=\frac{1}{2}mv^2=\frac{1}{2}kx_{m}^2\sin^2(\omega t+\phi)</code></span>，它们之和即为机械能，故系统机械能守恒：
<span class="course-math course-math-display" data-tex="E=\frac{1}{2}kx_{m}^2=\frac{1}{2}mv_{m}^2" data-display="true"><code>E=\frac{1}{2}kx_{m}^2=\frac{1}{2}mv_{m}^2</code></span>
### 角简谐振动
{: #section-2 }

角简谐运动（Angular SHM）是扭摆（Torsion pendulum）的原理。
<span class="course-math course-math-display" data-tex="\tau = -\kappa \theta= I \frac{d^2\theta}{dt^2}" data-display="true"><code>\tau = -\kappa \theta= I \frac{d^2\theta}{dt^2}</code></span>
<span class="course-math course-math-display" data-tex="\implies \theta(t)= \theta_{m} \cos(\omega t + \phi)" data-display="true"><code>\implies \theta(t)= \theta_{m} \cos(\omega t + \phi)</code></span>
其中 <span class="course-math" data-tex="\omega = \sqrt{ \frac{\kappa}{I} }" data-display="false"><code>\omega = \sqrt{ \frac{\kappa}{I} }</code></span>。
对单摆来说， <span class="course-math" data-tex="\tau=\vec{h} \times m\vec{g} = -hmg\sin\theta\sim -hmg\theta" data-display="false"><code>\tau=\vec{h} \times m\vec{g} = -hmg\sin\theta\sim -hmg\theta</code></span>，故 <span class="course-math" data-tex="\kappa=hmg" data-display="false"><code>\kappa=hmg</code></span>，<span class="course-math" data-tex="I=I_{com}+mh^2" data-display="false"><code>I=I_{com}+mh^2</code></span>。
<span class="course-math course-math-display" data-tex="\implies \omega=\sqrt{ \frac{mgh}{I_{com}+mh^2} }\sim \sqrt{ \frac{g}{h} }" data-display="true"><code>\implies \omega=\sqrt{ \frac{mgh}{I_{com}+mh^2} }\sim \sqrt{ \frac{g}{h} }</code></span>
这里的 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 是转轴到质心的距离。
能量角度，势能 <span class="course-math" data-tex="U=mgh(1-\cos\theta)\sim \frac{1}{2}mgh\theta^2" data-display="false"><code>U=mgh(1-\cos\theta)\sim \frac{1}{2}mgh\theta^2</code></span>，动能 <span class="course-math" data-tex="K=\frac{1}{2} I \Omega^2" data-display="false"><code>K=\frac{1}{2} I \Omega^2</code></span>，它们之和即为机械能，系统机械能守恒：
<span class="course-math course-math-display" data-tex="E=\frac{1}{2}I\Omega_{m}^2 = \frac{1}{2} mgh\theta_{m}^2" data-display="true"><code>E=\frac{1}{2}I\Omega_{m}^2 = \frac{1}{2} mgh\theta_{m}^2</code></span>
####  阻尼简谐振动
{: #section-3 }

阻尼简谐振动（Damped SHM）是受到一个正比于 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 的阻力的简谐振动：
<span class="course-math course-math-display" data-tex="F_{net}=-bv-kx=ma" data-display="true"><code>F_{net}=-bv-kx=ma</code></span>
<span class="course-math course-math-display" data-tex="\implies m \frac{d^2x}{dt^2} + b \frac{dx}{dt} +kx = 0" data-display="true"><code>\implies m \frac{d^2x}{dt^2} + b \frac{dx}{dt} +kx = 0</code></span>
<span class="course-math course-math-display" data-tex="\implies x(t)=x_{m} e^{bt/2m} \cos(\omega&#x27; t + \phi)" data-display="true"><code>\implies x(t)=x_{m} e^{bt/2m} \cos(\omega&#x27; t + \phi)</code></span>
 其中 <span class="course-math course-math-display" data-tex="\omega&#x27; = \sqrt{ \frac{k}{m} -\frac{b^2}{4m^2}}, E(t)\simeq \frac{1}{2}kx_{m}^2 e^{-\frac{bt}{m}}" data-display="true"><code>\omega&#x27; = \sqrt{ \frac{k}{m} -\frac{b^2}{4m^2}}, E(t)\simeq \frac{1}{2}kx_{m}^2 e^{-\frac{bt}{m}}</code></span>
### 共振
{: #section-4 }

受迫振动（Forced Oscillation）的频率始终和周期性的驱动力（Driving Force）的频率相同。
当受迫振动的频率达到本真频率 （Natural Angular Frequency）时，振动的振幅最大，这种现象叫做共振 （Resonance）。

### 等效劲度系数
{: #section-5 }

弹簧的串联：
<span class="course-math course-math-display" data-tex="\frac{1}{k_{eff}}=\sum_{i} \frac{1}{k_{i}}" data-display="true"><code>\frac{1}{k_{eff}}=\sum_{i} \frac{1}{k_{i}}</code></span>
弹簧的并联：
<span class="course-math course-math-display" data-tex="k_{eff}=\sum_{i} k_{i}" data-display="true"><code>k_{eff}=\sum_{i} k_{i}</code></span>
{% endraw %}
