---
title: "Rolling and Precession - 滚动和进动"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-10-23T11:02:29+08:00"
updated_at: "2025-11-01T15:56:09+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/physics/rolling-and-precession/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Rolling and Precession - 滚动和进动"
excerpt: "大学物理（上）/（下） · Rolling and Precession - 滚动和进动"
---

{% raw %}
前置： <a href="{% endraw %}{{ '/courses/physics/rotation/' | relative_url }}{% raw %}">Rotation - 定轴转动</a>

## 滚动
{: #section-1 }


纯滚动 (Smooth Rolling) = 纯平动 + 纯转动。
其中平动和转动的关系满足 <span class="course-math" data-tex="v_{com}=\omega R" data-display="false"><code>v_{com}=\omega R</code></span>，这可以用位移求导得出。
在每一个瞬间，也可以看作绕着点 P 的纯转动。
证明： <a href="{% endraw %}{{ '/courses/references/rolling-1/' | relative_url }}{% raw %}">Rolling-1</a>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Rolling-1.png' | relative_url }}{% raw %}" alt="Rolling-1" loading="lazy">

纯滚动的动能 <span class="course-math" data-tex="K=K_{translation}+K_{rotation}=\frac{1}{2}mv_{com}^2 + \frac{1}{2} I_{com} \omega^2" data-display="false"><code>K=K_{translation}+K_{rotation}=\frac{1}{2}mv_{com}^2 + \frac{1}{2} I_{com} \omega^2</code></span>。
力矩 <span class="course-math" data-tex="\tau_{net}=I_{com}\alpha" data-display="false"><code>\tau_{net}=I_{com}\alpha</code></span>。
动能定理 <span class="course-math" data-tex="W_{net}=\int \vec{F_ {{net}} } d\vec{r_{com}}+\int \tau_{net}d\theta=\Delta K=\Delta K_{translation}+\Delta K_{rotation}" data-display="false"><code>W_{net}=\int \vec{F_ {{net}} } d\vec{r_{com}}+\int \tau_{net}d\theta=\Delta K=\Delta K_{translation}+\Delta K_{rotation}</code></span>。

质点的角动量 <span class="course-math" data-tex="\vec{\mathscr{l}}=\vec{r}\times \vec{p}" data-display="false"><code>\vec{\mathscr{l}}=\vec{r}\times \vec{p}</code></span>。
刚体的角动量在 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> 轴的分量 <span class="course-math" data-tex="\vec{L_{z}}=I\vec{\omega}" data-display="false"><code>\vec{L_{z}}=I\vec{\omega}</code></span>。
容易推出 <span class="course-math" data-tex="\tau=\frac{d\mathscr{\vec{l}}}{dt}" data-display="false"><code>\tau=\frac{d\mathscr{\vec{l}}}{dt}</code></span>。进一步的，若 <span class="course-math" data-tex="\tau" data-display="false"><code>\tau</code></span> 为 0，则 <span class="course-math" data-tex="\mathscr{l}" data-display="false"><code>\mathscr{l}</code></span> 不变。
质心系：<span class="course-math" data-tex="L_{tot}=\vec{R}\times M\vec{v}+L_{com}" data-display="false"><code>L_{tot}=\vec{R}\times M\vec{v}+L_{com}</code></span>。

计算中常用 <span class="course-math" data-tex="\gamma =\frac{I^2}{MR^2}" data-display="false"><code>\gamma =\frac{I^2}{MR^2}</code></span> 简化表达式。

## 进动
{: #section-2 }


**进动（Precession）** 是指自转刚体受外力作用时自转轴绕某一中心旋转的现象。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Precesssion-1.png' | relative_url }}{% raw %}" alt="Precesssion-1" loading="lazy">
<div class="course-image-layout">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Precession-2.png' | relative_url }}{% raw %}" alt="Precession-2" loading="lazy">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Precession-3.png' | relative_url }}{% raw %}" alt="Precession-3" loading="lazy">
</div>

过程中，进动角速度 <span class="course-math" data-tex="\Omega=\frac{d\phi}{dt}=\frac{\frac{dL}{L}}{dt}=\frac{\tau}{L}= \frac{Mgr}{I\omega}" data-display="false"><code>\Omega=\frac{d\phi}{dt}=\frac{\frac{dL}{L}}{dt}=\frac{\tau}{L}= \frac{Mgr}{I\omega}</code></span>。
进动角速度的方向和 <span class="course-math" data-tex="\omega" data-display="false"><code>\omega</code></span> 的方向有关。
{% endraw %}
