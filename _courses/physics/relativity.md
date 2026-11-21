---
title: "Relativity - 相对论"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-05-29T17:22:15+08:00"
updated_at: "2026-11-18T17:43:16+08:00"
reference: false
order: 15
layout: "course"
permalink: "/courses/physics/relativity/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Relativity - 相对论"
excerpt: "大学物理（上）/（下） · Relativity - 相对论"
---

{% raw %}
狭义相对论的两个基本假设（Postulates）：
- 物理规律在所有惯性参考系（Inertial Reference Frame）中具有相同形式，没有哪个参考系是特殊的。
- 真空光速在所有惯性参考系、所有方向上都是 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span>，与光源的运动无关。

世界点（事件，Event）：四维时空中的一个点 <span class="course-math" data-tex="(t,x,y,z)" data-display="false"><code>(t,x,y,z)</code></span>。
世界线：物体在四维时空中运动画出的线。
两个世界点之间的时空间隔（Space-Time Interval）
<span class="course-math course-math-display" data-tex="s^{2}=[c(t_{2}-t_{1})]^{2}-[(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}+(z_{2}-z_{1})^{2}] = (c\Delta t)^{2}- l^{2}" data-display="true"><code>s^{2}=[c(t_{2}-t_{1})]^{2}-[(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}+(z_{2}-z_{1})^{2}] = (c\Delta t)^{2}- l^{2}</code></span>
是一个和参考系无关的量。从这个就可以推导出所有狭义相对论。


## 洛伦兹变换（Lorentz Transformation）
{: #section-1 }


设 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 系以速度 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 沿 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 轴正方向相对于 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 系运动。定义速度参数（Speed Parameter）<span class="course-math" data-tex="\beta=v/c" data-display="false"><code>\beta=v/c</code></span> 和洛伦兹因子（Lorentz Factor）
<span class="course-math course-math-display" data-tex="\gamma= \frac{1}{\sqrt{ 1-\beta^{2} }}\geq 1" data-display="true"><code>\gamma= \frac{1}{\sqrt{ 1-\beta^{2} }}\geq 1</code></span>
低速（<span class="course-math" data-tex="v\ll c" data-display="false"><code>v\ll c</code></span>）时用的是伽利略变换（Galilean Transformation），时间是绝对的：
<span class="course-math course-math-display" data-tex="x=x&#x27;+vt&#x27;,\quad t=t&#x27;" data-display="true"><code>x=x&#x27;+vt&#x27;,\quad t=t&#x27;</code></span>
洛伦兹变换（写成两个事件之差的形式）：
<span class="course-math course-math-display" data-tex="\Delta x=\gamma(\Delta x&#x27;+v\Delta t&#x27;),\quad \Delta t=\gamma\left( \Delta t&#x27;+ \frac{v\Delta x&#x27;}{c^{2}} \right)" data-display="true"><code>\Delta x=\gamma(\Delta x&#x27;+v\Delta t&#x27;),\quad \Delta t=\gamma\left( \Delta t&#x27;+ \frac{v\Delta x&#x27;}{c^{2}} \right)</code></span>
垂直于运动的方向不变：<span class="course-math" data-tex="\Delta y=\Delta y&#x27;,\Delta z=\Delta z&#x27;" data-display="false"><code>\Delta y=\Delta y&#x27;,\Delta z=\Delta z&#x27;</code></span>。
逆变换只要把 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 换成 <span class="course-math" data-tex="-v" data-display="false"><code>-v</code></span>：
<span class="course-math course-math-display" data-tex="\Delta x&#x27;=\gamma(\Delta x-v\Delta t),\quad \Delta t&#x27;=\gamma\left( \Delta t- \frac{v\Delta x}{c^{2}} \right)" data-display="true"><code>\Delta x&#x27;=\gamma(\Delta x-v\Delta t),\quad \Delta t&#x27;=\gamma\left( \Delta t- \frac{v\Delta x}{c^{2}} \right)</code></span>

速度变换：物体在 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中沿 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 方向的速度为 <span class="course-math" data-tex="u&#x27;" data-display="false"><code>u&#x27;</code></span>，那么在 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中的速度为
<span class="course-math course-math-display" data-tex="u= \frac{u&#x27;+v}{1+u&#x27;v / c^{2}}" data-display="true"><code>u= \frac{u&#x27;+v}{1+u&#x27;v / c^{2}}</code></span>
反过来，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中速度为 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span>，则 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中速度为
<span class="course-math course-math-display" data-tex="u&#x27;= \frac{u-v}{1-uv / c^{2}}" data-display="true"><code>u&#x27;= \frac{u-v}{1-uv / c^{2}}</code></span>
<span class="course-math" data-tex="v\ll c" data-display="false"><code>v\ll c</code></span> 时就退化为 <span class="course-math" data-tex="u=u&#x27;+v" data-display="false"><code>u=u&#x27;+v</code></span>。无论 <span class="course-math" data-tex="u&#x27;" data-display="false"><code>u&#x27;</code></span> 和 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 多接近光速，<span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 都不会超过 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span>；若 <span class="course-math" data-tex="u&#x27;=c" data-display="false"><code>u&#x27;=c</code></span>，则 <span class="course-math" data-tex="u=c" data-display="false"><code>u=c</code></span>，这正是光速不变。


## 同时性的相对性（Simultaneity）
{: #section-2 }


两个事件在 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中同时、不同地发生：<span class="course-math" data-tex="\Delta t&#x27;=0,\Delta x&#x27;\neq 0" data-display="false"><code>\Delta t&#x27;=0,\Delta x&#x27;\neq 0</code></span>。代入洛伦兹变换
<span class="course-math course-math-display" data-tex="\Delta t=\gamma \frac{v\Delta x&#x27;}{c^{2}}\neq 0" data-display="true"><code>\Delta t=\gamma \frac{v\Delta x&#x27;}{c^{2}}\neq 0</code></span>
所以在 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中看，它们不是同时发生的。


## 时间膨胀（Time Dilation）
{: #section-3 }


光钟：<span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中光在相距 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 的两面镜子之间往返一次，用时 <span class="course-math" data-tex="\Delta t_{0}=2d / c" data-display="false"><code>\Delta t_{0}=2d / c</code></span>。在 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中看，镜子在横向运动，光走的是斜线：
<span class="course-math course-math-display" data-tex="\Delta t= \frac{2}{c}\sqrt{ d^{2}+\left( \frac{v\Delta t}{2} \right)^{2} }" data-display="true"><code>\Delta t= \frac{2}{c}\sqrt{ d^{2}+\left( \frac{v\Delta t}{2} \right)^{2} }</code></span>
两式联立得到
<span class="course-math course-math-display" data-tex="\Delta t= \frac{\Delta t_{0}}{\sqrt{ 1-\beta^{2} }}=\gamma \Delta t_{0}" data-display="true"><code>\Delta t= \frac{\Delta t_{0}}{\sqrt{ 1-\beta^{2} }}=\gamma \Delta t_{0}</code></span>
也可以直接用洛伦兹变换：<span class="course-math" data-tex="\Delta x&#x27;=0" data-display="false"><code>\Delta x&#x27;=0</code></span> 时 <span class="course-math" data-tex="\Delta t=\gamma \Delta t&#x27;" data-display="false"><code>\Delta t=\gamma \Delta t&#x27;</code></span>。

固有时间/原时（Proper Time）<span class="course-math" data-tex="\Delta t_{0}" data-display="false"><code>\Delta t_{0}</code></span>：两个事件在某个惯性系中发生在**同一地点**，在这个参考系中测得的时间间隔。在其他任何惯性系中测同一对事件，时间间隔都更长，也就是“动钟变慢”。
- 例如飞船上的人吃一顿饭，开始和结束都在飞船上的同一位置，飞船上一只钟就能测出来，测得的是原时 <span class="course-math" data-tex="\Delta t_{0}" data-display="false"><code>\Delta t_{0}</code></span>。
- 地面上看，这两件事发生在不同的位置，要用两只同步好的钟来测，测得的是 <span class="course-math" data-tex="\gamma \Delta t_{0}" data-display="false"><code>\gamma \Delta t_{0}</code></span>。


## 长度收缩（Length Contraction）
{: #section-4 }


固有长度/原长（Proper Length）<span class="course-math" data-tex="l_{0}" data-display="false"><code>l_{0}</code></span>：在物体静止的参考系中测得的长度。
设一根杆静止在 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中，沿 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 轴放置，那么 <span class="course-math" data-tex="\Delta x&#x27;=l_{0}" data-display="false"><code>\Delta x&#x27;=l_{0}</code></span>。在 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中杆在运动，测它的长度必须**同时**记录两端的位置，即 <span class="course-math" data-tex="\Delta t=0" data-display="false"><code>\Delta t=0</code></span>，此时 <span class="course-math" data-tex="\Delta x=l" data-display="false"><code>\Delta x=l</code></span>。代入逆变换 <span class="course-math" data-tex="\Delta x&#x27;=\gamma(\Delta x-v\Delta t)" data-display="false"><code>\Delta x&#x27;=\gamma(\Delta x-v\Delta t)</code></span> 得到 <span class="course-math" data-tex="l_{0}=\gamma l" data-display="false"><code>l_{0}=\gamma l</code></span>，即
<span class="course-math course-math-display" data-tex="l= \frac{l_{0}}{\gamma}=l_{0}\sqrt{ 1-\beta^{2} }" data-display="true"><code>l= \frac{l_{0}}{\gamma}=l_{0}\sqrt{ 1-\beta^{2} }</code></span>
也就是“动尺变短”。只有平行于运动方向的长度会收缩，垂直方向不变。

原长和原时往往不在同一个参考系。以飞船从地球飞到海王星为例：
- 地球上看，地球和海王星不动，它们的距离是原长 <span class="course-math" data-tex="l_{0}" data-display="false"><code>l_{0}</code></span>；出发和到达发生在不同地点，飞行时间 <span class="course-math" data-tex="\Delta t=l_{0} / v" data-display="false"><code>\Delta t=l_{0} / v</code></span> 不是原时。
- 飞船上看，出发和到达都发生在飞船所在的位置，飞行时间是原时 <span class="course-math" data-tex="\Delta t_{0}=\Delta t / \gamma" data-display="false"><code>\Delta t_{0}=\Delta t / \gamma</code></span>；而地球和海王星以 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 运动，它们的距离收缩为 <span class="course-math" data-tex="l=l_{0} / \gamma=v\Delta t_{0}" data-display="false"><code>l=l_{0} / \gamma=v\Delta t_{0}</code></span>。


## 多普勒效应（Doppler Effect）
{: #section-5 }


光源和观察者的相对速度为 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span>，<span class="course-math" data-tex="\beta=v/c" data-display="false"><code>\beta=v/c</code></span>，光源静止系中测得的频率为固有频率（Proper Frequency）<span class="course-math" data-tex="f_{0}" data-display="false"><code>f_{0}</code></span>。光的传播不需要介质，所以结果只和相对速度有关。
相互远离时：
<span class="course-math course-math-display" data-tex="f=f_{0}\sqrt{ \frac{1-\beta}{1+\beta} }" data-display="true"><code>f=f_{0}\sqrt{ \frac{1-\beta}{1+\beta} }</code></span>
相互靠近时，把 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 换成 <span class="course-math" data-tex="-\beta" data-display="false"><code>-\beta</code></span> 即可。
远离时频率变小、波长变大，就是红移（Red Shift）；靠近时反之，是蓝移（Blue Shift）。

横向多普勒效应（Transverse Doppler Effect）：光源的运动方向垂直于观察方向时，只剩下时间膨胀的效果：
<span class="course-math course-math-display" data-tex="f=f_{0}\sqrt{ 1-\beta^{2} }" data-display="true"><code>f=f_{0}\sqrt{ 1-\beta^{2} }</code></span>
{% endraw %}
