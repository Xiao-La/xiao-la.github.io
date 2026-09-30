---
title: "Rotation - 定轴转动"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-10-21T20:46:07+08:00"
updated_at: "2025-12-24T14:26:50+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/physics/rotation/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Rotation - 定轴转动"
excerpt: "大学物理（上）/（下） · Rotation - 定轴转动"
---

{% raw %}
 平动和转动有许多对应的地方，应该对比着学习。

| Translation         | Rotation                    |
| ------------------- | --------------------------- |
| <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>                 | <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span>                    |
| <span class="course-math" data-tex="v=\frac{dx}{dt}" data-display="false"><code>v=\frac{dx}{dt}</code></span>   | <span class="course-math" data-tex="\omega=\frac{d\theta}{dt}" data-display="false"><code>\omega=\frac{d\theta}{dt}</code></span> |
| <span class="course-math" data-tex="a=\frac{dv}{dt}" data-display="false"><code>a=\frac{dv}{dt}</code></span>   | <span class="course-math" data-tex="\alpha=\frac{d\omega}{dt}" data-display="false"><code>\alpha=\frac{d\omega}{dt}</code></span> |
| <span class="course-math" data-tex="m" data-display="false"><code>m</code></span>                 | <span class="course-math" data-tex="I" data-display="false"><code>I</code></span>                         |
| <span class="course-math" data-tex="F_{net}=ma" data-display="false"><code>F_{net}=ma</code></span>        | <span class="course-math" data-tex="\tau_{net} = I\alpha" data-display="false"><code>\tau_{net} = I\alpha</code></span>      |
| <span class="course-math" data-tex="W=\int F\ dx" data-display="false"><code>W=\int F\ dx</code></span>      | <span class="course-math" data-tex="W = \int \tau\ d\theta" data-display="false"><code>W = \int \tau\ d\theta</code></span>    |
| <span class="course-math" data-tex="K=\frac{1}{2}mv^2" data-display="false"><code>K=\frac{1}{2}mv^2</code></span> | <span class="course-math" data-tex="K=\frac{1}{2}I\omega^2" data-display="false"><code>K=\frac{1}{2}I\omega^2</code></span>    |
| <span class="course-math" data-tex="P=Fv" data-display="false"><code>P=Fv</code></span>              | <span class="course-math" data-tex="P=\tau\omega" data-display="false"><code>P=\tau\omega</code></span>              |
| <span class="course-math" data-tex="W=\Delta K" data-display="false"><code>W=\Delta K</code></span>        | <span class="course-math" data-tex="W = \Delta K" data-display="false"><code>W = \Delta K</code></span>              |

 在转动中，质量 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 与转动惯量 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 对应，力 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 与力矩 <span class="course-math" data-tex="\tau" data-display="false"><code>\tau</code></span> 对应。
 
 **差异**：转动中的加速度分为 **切向加速度** 和 **法向加速度**，对应公式 <span class="course-math course-math-display" data-tex="\vec{a}=\alpha r \hat{t}+w^2r\hat{r_{c}}" data-display="true"><code>\vec{a}=\alpha r \hat{t}+w^2r\hat{r_{c}}</code></span> 
 
质点的转动惯量为 <span class="course-math" data-tex="mr^2" data-display="false"><code>mr^2</code></span>，刚体的转动惯量 <span class="course-math" data-tex="I=\int r^2dm" data-display="false"><code>I=\int r^2dm</code></span>，一般不太好算，所以会给一些常见几何体的（转轴过质心情况下的）转动惯量表。
 然后可以用平行轴定理 <span class="course-math" data-tex="I=I_{com}+Mh^2" data-display="false"><code>I=I_{com}+Mh^2</code></span> 算出新转轴下的转动惯量。
 
**算轴力**：由于轴力对转动没有贡献，需要对质点进行运动学分析。
{% endraw %}
