---
title: "Coordinate Systems and Vectors - 坐标系与向量"
course_id: "differential-geometry"
course_title: "微分几何"
section: ""
status: "updating"
created_at: "2026-11-03T10:28:31+08:00"
updated_at: "2026-11-08T17:53:05+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/differential-geometry/coordinate-systems-and-vectors/"
course_page: true
doc_type: "note"
description: "微分几何 · Coordinate Systems and Vectors - 坐标系与向量"
excerpt: "微分几何 · Coordinate Systems and Vectors - 坐标系与向量"
---

{% raw %}

## 坐标系
{: #section-1 }


**Index notation（指标记号）:** 在笛卡尔坐标系中，把 <span class="course-math" data-tex="(x,y,z)" data-display="false"><code>(x,y,z)</code></span> 换成 <span class="course-math" data-tex="x^{1},x^{2},x^{3}" data-display="false"><code>x^{1},x^{2},x^{3}</code></span>；以此类推。

常用的坐标系：
- 笛卡尔坐标。
- 极坐标。
- 柱坐标。
- 球坐标。
另外还有：
- 椭圆柱坐标。
- 抛物柱坐标。
- 抛物坐标。
其中，笛卡尔坐标可以唯一地表示空间中的每一点；而极坐标，柱坐标等却在原点处有“缺陷”。以极坐标为例，<span class="course-math" data-tex="x^{1}=\rho \cos \varphi, x^{2}=\rho \sin \varphi" data-display="false"><code>x^{1}=\rho \cos \varphi, x^{2}=\rho \sin \varphi</code></span>，那么 <span class="course-math" data-tex="\rho=0" data-display="false"><code>\rho=0</code></span>，<span class="course-math" data-tex="\varphi" data-display="false"><code>\varphi</code></span> 可以取任何值，都会指向原点。要避免的话，只能去平移坐标系。

**Line element / metric（线元 / 度量）：** <span class="course-math" data-tex="dl" data-display="false"><code>dl</code></span>，有时也指 <span class="course-math" data-tex="dl^{2}" data-display="false"><code>dl^{2}</code></span>，按一般的求和记号可以写成
<span class="course-math course-math-display" data-tex="dl^{2}=\sum _{i=1}^{N} (dx^{i})^{2}" data-display="true"><code>dl^{2}=\sum _{i=1}^{N} (dx^{i})^{2}</code></span>
这可以等效为用 **Einstein summation convention（爱因斯坦求和记号）：**
<span class="course-math course-math-display" data-tex="dl^{2}=dx^{i}dx^{i}" data-display="true"><code>dl^{2}=dx^{i}dx^{i}</code></span>
省略了求和记号。当我们在每一项中看到**恰好两个**相同的 index，就知道需要求和。


## 向量
{: #section-2 }


按照 index notation，三维向量可以写成
<span class="course-math course-math-display" data-tex="\mathbf{V}=V^{1}\hat{\mathbf{e}}_{1}+V^{2} \hat{\mathbf{e}}_{2}+V^{3}\hat{\mathbf{e}}_{3}" data-display="true"><code>\mathbf{V}=V^{1}\hat{\mathbf{e}}_{1}+V^{2} \hat{\mathbf{e}}_{2}+V^{3}\hat{\mathbf{e}}_{3}</code></span>
按照 Einstein summation convention，一般的向量可以写成
<span class="course-math course-math-display" data-tex="\mathbf{V}=V^{i}\hat{\mathbf{e}}_{i}" data-display="true"><code>\mathbf{V}=V^{i}\hat{\mathbf{e}}_{i}</code></span>
向量加法可以写成
<span class="course-math course-math-display" data-tex="\mathbf{V}+\mathbf{U}=V^{i}\hat{\mathbf{e}}_{i}+U^{j}\hat{\mathbf{e}}_{j}=(V^{i}+U^{i})\hat{\mathbf{e}}_{i}" data-display="true"><code>\mathbf{V}+\mathbf{U}=V^{i}\hat{\mathbf{e}}_{i}+U^{j}\hat{\mathbf{e}}_{j}=(V^{i}+U^{i})\hat{\mathbf{e}}_{i}</code></span>
点乘可以写成
<span class="course-math course-math-display" data-tex="\mathbf{V}\cdot \mathbf{U}=(V^{i} \hat{\mathbf{e}}_{i})\cdot (U^{j} \hat{\mathbf{e}}_{j})" data-display="true"><code>\mathbf{V}\cdot \mathbf{U}=(V^{i} \hat{\mathbf{e}}_{i})\cdot (U^{j} \hat{\mathbf{e}}_{j})</code></span>
这里定义 **Kronecker delta**：
<span class="course-math course-math-display" data-tex="\delta _{ij}=\hat{\mathbf{e}}_{i} \cdot \hat{\mathbf{e}}_{j}= \begin{cases}&#10;1 &amp; i=j \\&#10;0 &amp; i\neq j &#10;\end{cases}" data-display="true"><code>\delta _{ij}=\hat{\mathbf{e}}_{i} \cdot \hat{\mathbf{e}}_{j}= \begin{cases}&#10;1 &amp; i=j \\&#10;0 &amp; i\neq j &#10;\end{cases}</code></span>
那么点乘可以进一步写成
<span class="course-math course-math-display" data-tex="\mathbf{V}\cdot \mathbf{U}= V^{i}U^{j} \delta _{ij}" data-display="true"><code>\mathbf{V}\cdot \mathbf{U}= V^{i}U^{j} \delta _{ij}</code></span>

### 上标与下标
{: #section-3 }


对这些 **dummy indices**（恰好出现两次的 index），有 **lowering / raising：**
<span class="course-math course-math-display" data-tex="U^{j}\delta _{ij}=U_{i},\quad V^{i}\delta _{ij}=V_{j}" data-display="true"><code>U^{j}\delta _{ij}=U_{i},\quad V^{i}\delta _{ij}=V_{j}</code></span>
<span class="course-math course-math-display" data-tex="U_{j}\delta ^{ij}=U^{i},\quad V_{i}\delta ^{ij}=V^{j}" data-display="true"><code>U_{j}\delta ^{ij}=U^{i},\quad V_{i}\delta ^{ij}=V^{j}</code></span>
定义 **hybrid Kronecker delta：**
<span class="course-math course-math-display" data-tex="\delta _{j}^{i}=\delta ^{ik} \delta _{kj}" data-display="true"><code>\delta _{j}^{i}=\delta ^{ik} \delta _{kj}</code></span>
那么可以得到
<span class="course-math course-math-display" data-tex="U^{j} \delta _{j}^{i}=U^{i}" data-display="true"><code>U^{j} \delta _{j}^{i}=U^{i}</code></span>
上式中，<span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 这种 **每项恰好出现一次，且每项里名字相同** 的指标叫做 **free index。**

有时我们会称分量带上标的为 **contravariant vector / vector**；称带下标的为 **covariant vector / dual vector**。对笛卡尔坐标来说，这两种没区别，也就是说 <span class="course-math" data-tex="U_{i}=U^{i}" data-display="false"><code>U_{i}=U^{i}</code></span>；后面就会介绍到一般情况下的区别。总结一下，向量点积有这些等价写法：
<span class="course-math course-math-display" data-tex="\mathbf{V}\cdot \mathbf{U}=V^{i}U^{j}\delta _{ij}=V_{i}U_{j}\delta ^{ij}=V^{i}U_{j} \delta ^{j}_{i}=V^{i}U_{i}=V_{i}U^{i}" data-display="true"><code>\mathbf{V}\cdot \mathbf{U}=V^{i}U^{j}\delta _{ij}=V_{i}U_{j}\delta ^{ij}=V^{i}U_{j} \delta ^{j}_{i}=V^{i}U_{i}=V_{i}U^{i}</code></span>
一种用矩阵的直观理解方式：把上标看成列向量的成分，把下标看成行向量的成分，例如：
<span class="course-math course-math-display" data-tex="V_{i}U^{i}\leftrightarrow \begin{pmatrix}&#10;V_{x} &amp; V_{y} &amp; V_{z} &#10;\end{pmatrix} \begin{pmatrix}&#10;U_{x} \\&#10;U_{y} \\&#10;U_{z}&#10;\end{pmatrix}" data-display="true"><code>V_{i}U^{i}\leftrightarrow \begin{pmatrix}&#10;V_{x} &amp; V_{y} &amp; V_{z} &#10;\end{pmatrix} \begin{pmatrix}&#10;U_{x} \\&#10;U_{y} \\&#10;U_{z}&#10;\end{pmatrix}</code></span>
而 Kronecker delta 可以看成表示单位矩阵的分量：
<span class="course-math course-math-display" data-tex="[\delta]= \begin{pmatrix}&#10;1 &amp; 0 &amp; 0 \\&#10;0 &amp; 1 &amp; 0 \\&#10;0 &amp; 0 &amp; 1&#10;\end{pmatrix}" data-display="true"><code>[\delta]= \begin{pmatrix}&#10;1 &amp; 0 &amp; 0 \\&#10;0 &amp; 1 &amp; 0 \\&#10;0 &amp; 0 &amp; 1&#10;\end{pmatrix}</code></span>
这里有
<span class="course-math course-math-display" data-tex="\delta ^{ij}\delta _{ij}=\delta ^{i}_{i}=3" data-display="true"><code>\delta ^{ij}\delta _{ij}=\delta ^{i}_{i}=3</code></span>
进一步，对任意矩阵，它的 trace 可以由它的分量用 Kronecker delta 缩并（contract）下标得到
<span class="course-math course-math-display" data-tex="\delta ^{ij}A_{ij}=\delta _{ij}A^{ij}=A^{i}_{i}=\operatorname{tr}(A)" data-display="true"><code>\delta ^{ij}A_{ij}=\delta _{ij}A^{ij}=A^{i}_{i}=\operatorname{tr}(A)</code></span>

Remark：free indices 的数量，决定了 结果是什么类型。例如：
- 向量点积中数量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，那么结果就是标量。
- 在 lowering 的式子中，数量为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，那么结果是向量。
- <span class="course-math" data-tex="\delta _{ij}" data-display="false"><code>\delta _{ij}</code></span> 这个 term，数量为 <span class="course-math" data-tex="2" data-display="false"><code>2</code></span>，那么结果是矩阵。

Remark： 缩并应该一上一下配对，例如不能写 <span class="course-math" data-tex="V^{i}U^{i}" data-display="false"><code>V^{i}U^{i}</code></span>，而写 <span class="course-math" data-tex="V^{i}U_{i}" data-display="false"><code>V^{i}U_{i}</code></span> 就是对的。


## 微分
{: #section-4 }


常用 **nabla / del** 算子 <span class="course-math" data-tex="\nabla" data-display="false"><code>\nabla</code></span> 来对坐标求导，**在笛卡尔坐标系下**，它用 index notation 可以写成：
<span class="course-math course-math-display" data-tex="\vec{\nabla}= \hat{\mathbf{e}}_{i} \partial ^{i}= \delta ^{ij} \hat{\mathbf{e}}_{i}  \partial _{j}" data-display="true"><code>\vec{\nabla}= \hat{\mathbf{e}}_{i} \partial ^{i}= \delta ^{ij} \hat{\mathbf{e}}_{i}  \partial _{j}</code></span>
这里我们定义
<span class="course-math course-math-display" data-tex="\partial _{i}= \frac{\partial}{\partial x^{i}}" data-display="true"><code>\partial _{i}= \frac{\partial}{\partial x^{i}}</code></span>
散度（Divergence）用 index notation 可以写成
<span class="course-math course-math-display" data-tex="\vec{\nabla}  \cdot \mathbf{V}= \frac{\partial V^{i}}{\partial x^{i}}= \partial _{i}V^{i}" data-display="true"><code>\vec{\nabla}  \cdot \mathbf{V}= \frac{\partial V^{i}}{\partial x^{i}}= \partial _{i}V^{i}</code></span>
而 函数 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的梯度（gradient）可以写成
<span class="course-math course-math-display" data-tex="\vec{\nabla} f = \delta ^{ij} \hat{\mathbf{e}}_{i} (\partial _{j}f) = \hat{\mathbf{e}}_{i} (\partial ^{i}f)" data-display="true"><code>\vec{\nabla} f = \delta ^{ij} \hat{\mathbf{e}}_{i} (\partial _{j}f) = \hat{\mathbf{e}}_{i} (\partial ^{i}f)</code></span>
Remark: 这里顺序很重要，因为 <span class="course-math" data-tex="\partial _{i}" data-display="false"><code>\partial _{i}</code></span> 算子右边放的是我们想要求导的东西，所以不应该写 <span class="course-math" data-tex="\partial _{i}\delta ^{ij}" data-display="false"><code>\partial _{i}\delta ^{ij}</code></span> 这样的东西。
定义方向微分（directional derivative）为
<span class="course-math course-math-display" data-tex="df=d\boldsymbol{r} \cdot  \vec{\nabla}f = dx^{i} (\partial _{i}f)" data-display="true"><code>df=d\boldsymbol{r} \cdot  \vec{\nabla}f = dx^{i} (\partial _{i}f)</code></span>
另外还可以定义 Laplacian 算子 <span class="course-math" data-tex="\nabla ^{2}" data-display="false"><code>\nabla ^{2}</code></span>：
<span class="course-math course-math-display" data-tex="\nabla ^{2}= \vec{\nabla}\cdot \vec{\nabla}=  \delta ^{ij}\partial _{i}\partial _{j}= \partial ^{i}\partial _{i}=\partial _{i} \partial ^{i}" data-display="true"><code>\nabla ^{2}= \vec{\nabla}\cdot \vec{\nabla}=  \delta ^{ij}\partial _{i}\partial _{j}= \partial ^{i}\partial _{i}=\partial _{i} \partial ^{i}</code></span>
{% endraw %}
