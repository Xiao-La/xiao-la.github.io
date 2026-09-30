---
title: "Gravitation - 引力"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-11-10T23:17:07+08:00"
updated_at: "2025-12-24T14:37:52+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/physics/gravitation/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Gravitation - 引力"
excerpt: "大学物理（上）/（下） · Gravitation - 引力"
---

{% raw %}
 牛顿引力定律（Newton's Law of Gravitation）：
<span class="course-math course-math-display" data-tex="F=G \frac{m_{1}m_{2}}{r^2}" data-display="true"><code>F=G \frac{m_{1}m_{2}}{r^2}</code></span>
或
<span class="course-math course-math-display" data-tex="\vec{F}=-G \frac{m_{1}m_{2}}{r^2} \hat{r}=-G \frac{m_{1}m_{2}}{r^3} \vec{r}" data-display="true"><code>\vec{F}=-G \frac{m_{1}m_{2}}{r^2} \hat{r}=-G \frac{m_{1}m_{2}}{r^3} \vec{r}</code></span>
其中 <span class="course-math" data-tex="G=6.67\times 10^{-11} \text{N} \cdot \text{m}^2 \text{/ kg}^2" data-display="false"><code>G=6.67\times 10^{-11} \text{N} \cdot \text{m}^2 \text{/ kg}^2</code></span>。



### 叠加原理 （The Principle of Superposition）
{: #section-1 }


<span class="course-math course-math-display" data-tex="\vec{F_{1, net}} = \sum^{n}_{i=2}\vec{F_{1i}}" data-display="true"><code>\vec{F_{1, net}} = \sum^{n}_{i=2}\vec{F_{1i}}</code></span>


### 球壳定理（The Shell Theorem）
{: #section-2 }


1. **均匀球壳**对壳外的质点的引力等于把球壳的全部质量集中到球心后产生的引力。
2. **均匀球壳**对壳内的质点不产生净引力。

推论：**实心均匀球体**内部在距中心为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 的点处的引力，只来自半径为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 的球体内的质量，壳外质量不产生贡献。


### 重力与引力的关系
{: #section-3 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Gravitation-1.png' | relative_url }}{% raw %}" alt="Gravitation-1" loading="lazy">
实际上，支持力 <span class="course-math" data-tex="\vec{N}" data-display="false"><code>\vec{N}</code></span> 和 <span class="course-math" data-tex="\vec{F_{g}}" data-display="false"><code>\vec{F_{g}}</code></span> 一起提供自转的向心力，而 <span class="course-math" data-tex="\vec{N}" data-display="false"><code>\vec{N}</code></span> 和 <span class="course-math" data-tex="m\vec{g}" data-display="false"><code>m\vec{g}</code></span> 相等。故有 <span class="course-math" data-tex="\vec{F_{g}}=m \vec{a_{c}} + m \vec{g}" data-display="false"><code>\vec{F_{g}}=m \vec{a_{c}} + m \vec{g}</code></span>。


### 引力势能
{: #section-4 }


万有引力是保守力，将无穷远点设为零势能点，即可推出引力势能的表达式。
双粒子系统： <span class="course-math" data-tex="U=-\int_{R}^\infty Fdr=-\frac{GMm}{r}" data-display="false"><code>U=-\int_{R}^\infty Fdr=-\frac{GMm}{r}</code></span>。
三粒子系统：<span class="course-math" data-tex="U=-\frac{Gm_{1}m_{2}}{r_{12}}-\frac{Gm_{1}m_{3}}{r_{13}}-\frac{Gm_{2}m_{3}}{r_{23}}" data-display="false"><code>U=-\frac{Gm_{1}m_{2}}{r_{12}}-\frac{Gm_{1}m_{3}}{r_{13}}-\frac{Gm_{2}m_{3}}{r_{23}}</code></span>。
逃逸速度 （Escape Speed）指脱离引力场需要的速度：
<span class="course-math course-math-display" data-tex="E=K+U=\frac{1}{2}mv^2 - \frac{Gm_{1}m_{2}}{r}=0 \implies v=\sqrt{ \frac{2GM}{r} }" data-display="true"><code>E=K+U=\frac{1}{2}mv^2 - \frac{Gm_{1}m_{2}}{r}=0 \implies v=\sqrt{ \frac{2GM}{r} }</code></span>


### 开普勒三大定律
{: #section-5 }


假设太阳不动，那么开普勒三大定律指出：
1. 轨道定律：所有行星走椭圆轨道 <span class="course-math" data-tex="r=\frac{p}{1+e\cos\theta}" data-display="false"><code>r=\frac{p}{1+e\cos\theta}</code></span>。
2. 面积定律：太阳和行星连线扫过的面积随时间均匀变化：<span class="course-math course-math-display" data-tex="\frac{dA}{dt}=\frac{1}{2}r^2 \frac{d\theta}{dt}=\frac{1}{2}\omega r^2=\frac{L}{2m}=\text{constant}" data-display="true"><code>\frac{dA}{dt}=\frac{1}{2}r^2 \frac{d\theta}{dt}=\frac{1}{2}\omega r^2=\frac{L}{2m}=\text{constant}</code></span>
3. 周期定律：行星运动满足 <span class="course-math" data-tex="\frac{T^2}{a^3}=\text{constant}\left( = \frac{4\pi^2}{GM} \right)" data-display="false"><code>\frac{T^2}{a^3}=\text{constant}\left( = \frac{4\pi^2}{GM} \right)</code></span>，其中 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 是椭圆半长轴长度，<span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 为行星运动的周期。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Gravitation-2.png' | relative_url }}{% raw %}" alt="Gravitation-2" loading="lazy">
{% endraw %}
