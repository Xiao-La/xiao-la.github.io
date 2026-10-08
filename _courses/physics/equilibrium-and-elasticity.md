---
title: "Equilibrium and Elasticity - 平衡和弹性"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-11-01T15:58:57+08:00"
updated_at: "2026-10-08T20:57:10+08:00"
reference: false
order: 3
layout: "course"
permalink: "/courses/physics/equilibrium-and-elasticity/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Equilibrium and Elasticity - 平衡和弹性"
excerpt: "大学物理（上）/（下） · Equilibrium and Elasticity - 平衡和弹性"
---

{% raw %}

## 平衡 
{: #section-1 }


**平衡（equilibrium）** 状态需要运动状态不变，故而它的条件：
1. 线动量为常数：<span class="course-math" data-tex="F_{net}=\frac{dp}{dt}=0" data-display="false"><code>F_{net}=\frac{dp}{dt}=0</code></span>。
2. 角动量为常数：<span class="course-math" data-tex="\tau_{net}=\frac{d\mathscr{l}}{dt}=0" data-display="false"><code>\tau_{net}=\frac{d\mathscr{l}}{dt}=0</code></span>（需对任意参考点都成立）。
进一步的，静态平衡（Static Equilibrium）需要 <span class="course-math" data-tex="p=0, \mathscr{l}=0" data-display="false"><code>p=0, \mathscr{l}=0</code></span>。

*对于合力矩为 0，理论上根据参考点的不同，可列无数个方程；但最多有多少个方程相互独立，取决于系统的自由度。*

**重心（center of gravity, cog）** 指的是重力作用的等效点。
**质心（center of mass, com）** 指的是质量分布的平均位置。
当物体受到的重力加速度处处相等时，它存在重心，而且和质心重合。


## 弹性
{: #section-2 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Elasticity-1.png' | relative_url }}{% raw %}" alt="Elasticity-1" width="655" height="255" loading="lazy" decoding="async">
上图展示了三种**应力（stress）**：拉伸应力（tensile stress）/ 剪切应力（shearing stress）/ 静水压力（液应力，hydraulic stress）

 <span class="course-math course-math-display" data-tex="\text{应力（stress） = 模量（modulus）}\times \text{应变（strain）}" data-display="true"><code>\text{应力（stress） = 模量（modulus）}\times \text{应变（strain）}</code></span>

特别的，对应拉伸力，上面的式子变成：
<span class="course-math course-math-display" data-tex="\frac{F}{A}=E\frac{\Delta L}{L}" data-display="true"><code>\frac{F}{A}=E\frac{\Delta L}{L}</code></span>
这里的 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 被称作**杨氏模量（Young's modulus）**。
类似的，对剪切力，有**剪切模量（shear modulus）** -  <span class="course-math" data-tex="G" data-display="false"><code>G</code></span>，以及 <span class="course-math" data-tex="\frac{F}{A}=G \frac{\Delta x}{L}" data-display="false"><code>\frac{F}{A}=G \frac{\Delta x}{L}</code></span>。
对静水压力，有**体变模量（bulk modulus）** - <span class="course-math" data-tex="B" data-display="false"><code>B</code></span>，以及 <span class="course-math" data-tex="\Delta p=-B\frac{\Delta V}{V}" data-display="false"><code>\Delta p=-B\frac{\Delta V}{V}</code></span>（<span class="course-math" data-tex="\Delta V" data-display="false"><code>\Delta V</code></span> 是带符号的体积变化）。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Elasticity-2.png' | relative_url }}{% raw %}" alt="Elasticity-2" width="435" height="394" loading="lazy" decoding="async">
在应力达到 **屈服强度（yield strength）** 后，发生塑性形变。**极限抗拉强度（ultimate tensile strength）** 是工程应力的最大值；断裂发生在**断裂强度（fracture strength）**处，二者不一定相同。

**扭转（twisting）** 物体会产生响应的力矩来阻止这个扭转，满足公式：
<span class="course-math course-math-display" data-tex="\tau = -\kappa \theta" data-display="true"><code>\tau = -\kappa \theta</code></span>
其中 <span class="course-math" data-tex="\kappa" data-display="false"><code>\kappa</code></span> 是**扭转常数（torsion constant）**。

*对于刚体，modulus 可认为是无穷大，因为它们不能变形。*
{% endraw %}
