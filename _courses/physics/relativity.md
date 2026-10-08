---
title: "Relativity - 相对论"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-05-29T17:22:15+08:00"
updated_at: "2026-10-08T20:57:27+08:00"
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

“物理规律在所有惯性参考系中具有相同形式。”
“真空光速在所有惯性参考系中相同。”

【狭义相对论的核心背景】
时空间隔（Space-Time Interval）：与参考系无关的距离。
世界点：四维时空中的一个点 <span class="course-math" data-tex="(t,x,y,z)" data-display="false"><code>(t,x,y,z)</code></span>。
世界线：物体在四维时空中运动画出的线。
那么时空间隔
<span class="course-math course-math-display" data-tex="s^{2}=[c(t_{2}-t_{1})]^{2}-[(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}+(z_{2}-z_{1})^{2}] = (c\Delta t)^{2}- l^{2}" data-display="true"><code>s^{2}=[c(t_{2}-t_{1})]^{2}-[(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}+(z_{2}-z_{1})^{2}] = (c\Delta t)^{2}- l^{2}</code></span>
是一个和参考系无关的量。

从这个就可以推导出所有狭义相对论。

## 洛伦兹变换
{: #section-1 }



### 一、坐标变换公式对比
{: #section-2 }

设系统 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 为静止参考系，系统 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 以速度 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 沿 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 轴正方向相对于 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 运动。

1.  **经典力学 - 伽利略变换 (低速适用, <span class="course-math" data-tex="v \ll c" data-display="false"><code>v \ll c</code></span>):**
    *   空间：<span class="course-math" data-tex="x = x&#x27; + vt&#x27;" data-display="false"><code>x = x&#x27; + vt&#x27;</code></span>  (或由于绝对时间 <span class="course-math" data-tex="x = x&#x27; + vt" data-display="false"><code>x = x&#x27; + vt</code></span>)
    *   时间绝对：**<span class="course-math" data-tex="t = t&#x27;" data-display="false"><code>t = t&#x27;</code></span>**

2.  **狭义相对论 - 洛伦兹变换 (全速度适用):**
    引入洛伦兹因子 <span class="course-math" data-tex="\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}" data-display="false"><code>\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}</code></span>
    *(注意，正变换和逆变换其实是对称的，只需改变参照物视角，即把速度 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 换成 <span class="course-math" data-tex="-v" data-display="false"><code>-v</code></span> 即可)*

    *   **正变换 (<span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 系数据已知，求 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 系里的观测值):**
        <span class="course-math course-math-display" data-tex="\Delta x = \gamma(\Delta x&#x27; + v\Delta t&#x27;)" data-display="true"><code>\Delta x = \gamma(\Delta x&#x27; + v\Delta t&#x27;)</code></span>
        <span class="course-math course-math-display" data-tex="\Delta t = \gamma\left(\Delta t&#x27; + \frac{v\Delta x&#x27;}{c^2}\right)" data-display="true"><code>\Delta t = \gamma\left(\Delta t&#x27; + \frac{v\Delta x&#x27;}{c^2}\right)</code></span>
    *   **逆变换 (<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 系数据已知，求 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 系里的观测值):**
        <span class="course-math course-math-display" data-tex="\Delta x&#x27; = \gamma(\Delta x - v\Delta t)" data-display="true"><code>\Delta x&#x27; = \gamma(\Delta x - v\Delta t)</code></span>
        <span class="course-math course-math-display" data-tex="\Delta t&#x27; = \gamma\left(\Delta t - \frac{v\Delta x}{c^2}\right)" data-display="true"><code>\Delta t&#x27; = \gamma\left(\Delta t - \frac{v\Delta x}{c^2}\right)</code></span>


### 二、相对论速度加法公式 (Velocity Addition)
{: #section-3 }

当物体在运动系统 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中也有自己的速度 <span class="course-math" data-tex="u&#x27;" data-display="false"><code>u&#x27;</code></span> 时，在静止系统 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中观察到的它的实际速度 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 不再是简单的 <span class="course-math" data-tex="u = u&#x27;+v" data-display="false"><code>u = u&#x27;+v</code></span>，而是：
<span class="course-math course-math-display" data-tex="u = \frac{u&#x27; + v}{1 + \frac{vu&#x27;}{c^2}}" data-display="true"><code>u = \frac{u&#x27; + v}{1 + \frac{vu&#x27;}{c^2}}</code></span>
*(推论：无论 <span class="course-math" data-tex="u&#x27;" data-display="false"><code>u&#x27;</code></span> 或 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 有多接近光速，算出来的叠加速度 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 永远不会超过光速 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span>。这是一座越不过去的速度墙)*
速度变换公式（原参考系中观察到速度为 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span>，新参考系的速度为 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span>，新参考系中的速度为 <span class="course-math" data-tex="u&#x27;" data-display="false"><code>u&#x27;</code></span>）：
<span class="course-math course-math-display" data-tex="u&#x27;= \frac{u-v}{1-uv / c^{2}}" data-display="true"><code>u&#x27;= \frac{u-v}{1-uv / c^{2}}</code></span>



### 三、基于洛伦兹变换的三大时空推论（万能解题法）
{: #section-4 }

做大题时，找出事件 1 和事件 2，列出它们在两种坐标系里的位置差 (<span class="course-math" data-tex="\Delta x, \Delta x&#x27;" data-display="false"><code>\Delta x, \Delta x&#x27;</code></span>) 和时间差 (<span class="course-math" data-tex="\Delta t, \Delta t&#x27;" data-display="false"><code>\Delta t, \Delta t&#x27;</code></span>)，套用公式直接秒杀。

1.  **同时性的相对性 (Simultaneity):**
    *   条件：在 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中**同时异地**发生（ <span class="course-math" data-tex="\Delta t&#x27; = 0, \Delta x&#x27; \neq 0" data-display="false"><code>\Delta t&#x27; = 0, \Delta x&#x27; \neq 0</code></span> ）
    *   结论：代入公式得 <span class="course-math" data-tex="\Delta t = \gamma \frac{v\Delta x&#x27;}{c^2} \neq 0" data-display="false"><code>\Delta t = \gamma \frac{v\Delta x&#x27;}{c^2} \neq 0</code></span>。即在 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 系中观察**不同时**。
2.  **时间膨胀 (Time Dilation):**
    *   条件：在 <span class="course-math" data-tex="S&#x27;" data-display="false"><code>S&#x27;</code></span> 中**同地不同时**发生（ <span class="course-math" data-tex="\Delta x&#x27; = 0, \Delta t&#x27; \neq 0" data-display="false"><code>\Delta x&#x27; = 0, \Delta t&#x27; \neq 0</code></span> ，也就是原时条件）
    *   结论：代入公式得 **<span class="course-math" data-tex="\Delta t = \gamma \Delta t&#x27;" data-display="false"><code>\Delta t = \gamma \Delta t&#x27;</code></span>**。
3.  **长度收缩 (Length Contraction):**
    *   条件：在静止系 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中测量运动物体的长度，必须**同时**记录两端位置（ <span class="course-math" data-tex="\Delta t = 0" data-display="false"><code>\Delta t = 0</code></span>, 此时测得的 <span class="course-math" data-tex="\Delta x = L" data-display="false"><code>\Delta x = L</code></span>）
    *   结论：代入逆变换公式 <span class="course-math" data-tex="\Delta x&#x27; = \gamma(\Delta x - 0)" data-display="false"><code>\Delta x&#x27; = \gamma(\Delta x - 0)</code></span>，由于 <span class="course-math" data-tex="\Delta x&#x27; = L_0" data-display="false"><code>\Delta x&#x27; = L_0</code></span> (原长)，得到 <span class="course-math" data-tex="L_0 = \gamma L" data-display="false"><code>L_0 = \gamma L</code></span>，即 **<span class="course-math" data-tex="L = \frac{L_0}{\gamma}" data-display="false"><code>L = \frac{L_0}{\gamma}</code></span>**。


## 时间膨胀
{: #section-5 }



### 一、 “光钟”思想实验与时间膨胀 (Time Dilation)
{: #section-6 }

*   **现象：** 相对于观察者运动的时钟，其走时会变慢。这就是时间膨胀效应。简言之：“动钟变慢”。
*   **推导基础：** 真空光速 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 对所有惯性参考系都是恒定的，不随光源或观察者的运动而改变。


### 二、核心公式：时间膨胀公式
{: #section-7 }

通过光走斜线的几何推导，我们得出两个参考系之间时间间隔的关系式：

<span class="course-math course-math-display" data-tex="\Delta t = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}}" data-display="true"><code>\Delta t = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}}</code></span>

*通常为了书写简便，引入洛伦兹因子 <span class="course-math" data-tex="\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}" data-display="false"><code>\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}</code></span>，公式写作 <span class="course-math" data-tex="\Delta t = \gamma \Delta t_0" data-display="false"><code>\Delta t = \gamma \Delta t_0</code></span>。因为 <span class="course-math" data-tex="v &lt; c" data-display="false"><code>v &lt; c</code></span>，所以 <span class="course-math" data-tex="\gamma &gt; 1" data-display="false"><code>\gamma &gt; 1</code></span>，得出 <span class="course-math" data-tex="\Delta t &gt; \Delta t_0" data-display="false"><code>\Delta t &gt; \Delta t_0</code></span>。*

*   <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> : 两个参考系之间的相对运动速度。
*   <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> : 光速 (<span class="course-math" data-tex="3 \times 10^8 \text{ m/s}" data-display="false"><code>3 \times 10^8 \text{ m/s}</code></span>)。
*   **<span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span> (Proper time, 固有时间/原时)**: **(易错考点！做题最核心的一步就是找准谁是原时)**
*   **<span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span> (Dilated time, 膨胀时间)**: 在其他相对于该事件发生地运动的参考系中测量到的时间。


### 三、必考概念：什么是原时 (Proper Time)?
{: #section-8 }

*(PPT 底部黑体字部分，相对论做题的灵魂所在)*

1.  **物理定义：** 如果两个事件（比如灯亮和灯灭）在某一个惯性参考系中发生在**相同的空间位置 (same location)**，那么在这个参考系中测量到的时间间隔被称为**固有时间 (Proper time)**，用 <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span> 表示。
2.  **做题技巧（“谁拿着钟”法则）：**
    *   在飞船上的人，觉得心跳、吃一顿饭是在飞船的**同一个位置**发生的，此时只用**一只钟**就能测出时间。他测出来的就是**原时 <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span>**。
    *   地面上的人看飞船，飞船上的人开始吃饭和吃完饭是在太空两个**不同位置**发生的（飞船飞走了），需要用地面上的**两只钟**同步才能测量。他测出来的是**膨胀时间 <span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span>**。
3.  **结论：** 测量在同一个参考系下同一事件的时间间隔，**原时 <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span> 永远是所有观察者测量出的可能值中最小的一个**。（所有其他相对运动的参考系测出的 <span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span> 都会大于 <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span>）。




## 长度收缩 (Length Contraction)
{: #section-9 }



### 一、现象与本质
{: #section-10 }

*   **现象描述：** 当一个物体（或空间区间）相对于观察者运动时，观察者测量到它在**运动方向上**的长度，会比它处于静止状态时的长度要短。即：**“动尺变短”**。
*   **推导本质：** 长度收缩是时间膨胀效应的必然空间等价物。由 <span class="course-math" data-tex="距离 = 相对速度 \times 时间" data-display="false"><code>距离 = 相对速度 \times 时间</code></span>，既然各参考系对时间 (<span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span> vs <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span>) 的测量不同，导致对空间距离的测量也必然不同。


### 二、核心公式
{: #section-11 }

观察者测量到的运动物体的长度 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span> 为：
<span class="course-math course-math-display" data-tex="l = l_0 \sqrt{1 - \frac{v^2}{c^2}} = \frac{l_0}{\gamma}" data-display="true"><code>l = l_0 \sqrt{1 - \frac{v^2}{c^2}} = \frac{l_0}{\gamma}</code></span>

*因为 <span class="course-math" data-tex="\sqrt{1 - v^2/c^2} &lt; 1" data-display="false"><code>\sqrt{1 - v^2/c^2} &lt; 1</code></span> (即 <span class="course-math" data-tex="\gamma &gt; 1" data-display="false"><code>\gamma &gt; 1</code></span>)，所以 <span class="course-math" data-tex="l &lt; l_0" data-display="false"><code>l &lt; l_0</code></span>，无论往哪个方向飞，长度总是变短的。*

*   <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> : 物体或区间的相对运动速度。
*   <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> : 光速。
*   **<span class="course-math" data-tex="l_0" data-display="false"><code>l_0</code></span> (Proper length, 固有长度/原长)**: 在测量对象**处于静止**的参考系中测量出的长度。
*   **<span class="course-math" data-tex="l" data-display="false"><code>l</code></span> (Contracted length, 收缩长度)**: 在测量对象处于运动状态的参考系中测量出的长度。


### 三、必考概念辨析与防坑指南 
{: #section-12 }


1.  **如何找准“原长” (Proper Length)?**
    *   谁觉得这根尺子/这段距离是**不动**的，谁量出来的就是**原长 <span class="course-math" data-tex="l_0" data-display="false"><code>l_0</code></span>**。
    *   测量相对静止或共同运动的两个点之间的距离，得到的结果永远是最大的，这就是原长。

2.  **方向限制（极易错概念题）：**
    *   长度收缩**仅仅**发生于与相对运动**平行的方向**上！
    *   垂直于运动方向的长度**不发生任何收缩**。*(例如：飞船向右飞，飞船的长度在这个方向变短了，但飞船的高度和宽度在地球人看来是不变的。)*

3.  **原长 <span class="course-math" data-tex="l_0" data-display="false"><code>l_0</code></span> 和原时 <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span> 往往不在同一个参考系（最难理清的做题逻辑）：**
    以此 PPT 中的星际旅行为例：
    *   **地球人**：认为星星不动，测出距离是 **原长 <span class="course-math" data-tex="l_0" data-display="false"><code>l_0</code></span>**；但觉得飞船在两地穿梭，测出的飞行时间是 **膨胀时间 <span class="course-math" data-tex="\Delta t" data-display="false"><code>\Delta t</code></span>**。
    *   **飞行员**：认为事情都发生在窗外同一点，测出的历时是 **原时 <span class="course-math" data-tex="\Delta t_0" data-display="false"><code>\Delta t_0</code></span>**；但觉得外面宇宙在后退，测出的星际距离是 **收缩长度 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span>**。
    *(做大题时，牢记这个交叉对应的关系，就不会代错公式！)*


多普勒效应：套公式。红移：波长变大，频率变小（蓝移反之）
{% endraw %}
