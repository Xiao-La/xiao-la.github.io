---
title: "Polar Coordinates - 极坐标"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-02-21T11:22:04+08:00"
updated_at: "2026-10-09T16:58:39+08:00"
reference: false
order: 7
layout: "course"
permalink: "/courses/calculus/polar-coordinates/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Polar Coordinates - 极坐标"
excerpt: "高等数学（上）/（下） · Polar Coordinates - 极坐标"
---

{% raw %}

## 参数方程（Parametrized Coordinates）
{: #section-1 }


<span class="course-math" data-tex="x=f(t), y=g(t)" data-display="false"><code>x=f(t), y=g(t)</code></span>

三维坐标系中直线的向量方程：<span class="course-math" data-tex="\mathbf{r}(t)=\mathbf{r}_{0}+t\mathbf{v}" data-display="false"><code>\mathbf{r}(t)=\mathbf{r}_{0}+t\mathbf{v}</code></span>，对应的参数方程：<span class="course-math" data-tex="x=x_{0}+tv_{1},y=y_{0}+tv_{2},z=z_{0}+tv_{3}" data-display="false"><code>x=x_{0}+tv_{1},y=y_{0}+tv_{2},z=z_{0}+tv_{3}</code></span>。
三维坐标系中平面的方程：设法向量为 <span class="course-math" data-tex="\mathbf{n}=(A,B,C)" data-display="false"><code>\mathbf{n}=(A,B,C)</code></span>，且 <span class="course-math" data-tex="P_{0}(x_{0},y_{0},z_{0})" data-display="false"><code>P_{0}(x_{0},y_{0},z_{0})</code></span> 在平面内，则它们确定的平面为 <span class="course-math" data-tex="\mathbf{n}\cdot \overrightarrow{P_0P}=0" data-display="false"><code>\mathbf{n}\cdot \overrightarrow{P_0P}=0</code></span>，也就是 <span class="course-math" data-tex="A(x-x_{0})+B(y-y_{0})+C(z-z_{0})=0" data-display="false"><code>A(x-x_{0})+B(y-y_{0})+C(z-z_{0})=0</code></span>。
一般来说平面的方程可以写成 <span class="course-math" data-tex="Ax+By+Cz=D" data-display="false"><code>Ax+By+Cz=D</code></span>，它的一个法向量就是 <span class="course-math" data-tex="(A,B,C)" data-display="false"><code>(A,B,C)</code></span>，它过的一个点满足 <span class="course-math" data-tex="D=Ax_{0}+By_{0}+Cz_{0}" data-display="false"><code>D=Ax_{0}+By_{0}+Cz_{0}</code></span>。

【不考】
平面光滑曲线的曲率（Curvature）定义为
<span class="course-math course-math-display" data-tex="\kappa=\lVert \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}s}\rVert" data-display="true"><code>\kappa=\lVert \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}s}\rVert</code></span>
其中 <span class="course-math" data-tex="s" data-display="false"><code>s</code></span> 是弧长，<span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 是曲线的单位切向量。
计算公式：若 <span class="course-math" data-tex="\mathbf{r}(t)" data-display="false"><code>\mathbf{r}(t)</code></span> 是一个光滑曲线，则：
<span class="course-math course-math-display" data-tex="\kappa=\frac{1}{\lVert \mathbf{v}\rVert } \lVert \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}t}\rVert" data-display="true"><code>\kappa=\frac{1}{\lVert \mathbf{v}\rVert } \lVert \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}t}\rVert</code></span>
其中 <span class="course-math" data-tex="\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \frac{\mathbf{v}}{\lVert \mathbf{v}\rVert }" data-display="false"><code>\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \frac{\mathbf{v}}{\lVert \mathbf{v}\rVert }</code></span> 是曲线的单位切向量。
在 <span class="course-math" data-tex="\kappa&gt;0" data-display="false"><code>\kappa&gt;0</code></span> 的点，定义光滑曲线的 **主单位法向量（Principal Unit Normal Vector）**：
<span class="course-math course-math-display" data-tex="\mathbf{N}=\frac{1}{\kappa} \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}s}" data-display="true"><code>\mathbf{N}=\frac{1}{\kappa} \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}s}</code></span>
这里 <span class="course-math" data-tex="\frac{\mathrm{d}\mathbf{T}}{\mathrm{d}s}" data-display="false"><code>\frac{\mathrm{d}\mathbf{T}}{\mathrm{d}s}</code></span> 指向了 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 转向的方向，因此垂直于切向量。再用 <span class="course-math" data-tex="\kappa" data-display="false"><code>\kappa</code></span> 归一化。
对于参数方程 <span class="course-math" data-tex="\mathbf{r}(t)" data-display="false"><code>\mathbf{r}(t)</code></span>，这个量可以这样计算：
<span class="course-math course-math-display" data-tex="\mathbf{N}=\frac{\mathrm{d}\mathbf{T} / \mathrm{d}t}{\lVert \mathrm{d}\mathbf{T} / \mathrm{d}t \rVert }" data-display="true"><code>\mathbf{N}=\frac{\mathrm{d}\mathbf{T} / \mathrm{d}t}{\lVert \mathrm{d}\mathbf{T} / \mathrm{d}t \rVert }</code></span>

其中 <span class="course-math" data-tex="\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \mathbf{v} / \lVert \mathbf{v} \rVert" data-display="false"><code>\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \mathbf{v} / \lVert \mathbf{v} \rVert</code></span>。
定义曲率半径（The radius of curvature）：
<span class="course-math course-math-display" data-tex="\rho=\frac{1}{\kappa}" data-display="true"><code>\rho=\frac{1}{\kappa}</code></span>
对于 <span class="course-math" data-tex="y=f(x)" data-display="false"><code>y=f(x)</code></span> ：
- 令 <span class="course-math" data-tex="\mathbf{r}(t)=t \mathbf{i}+f(t)\mathbf{j}" data-display="false"><code>\mathbf{r}(t)=t \mathbf{i}+f(t)\mathbf{j}</code></span>。
- 那么 <span class="course-math" data-tex="\mathbf{v}=\mathbf{i}+f&#x27;(t)\mathbf{j}" data-display="false"><code>\mathbf{v}=\mathbf{i}+f&#x27;(t)\mathbf{j}</code></span>。
- 那么 <span class="course-math" data-tex="\lVert \mathbf{v} \rVert=\sqrt{ 1+[f&#x27;(t)]^{2} }" data-display="false"><code>\lVert \mathbf{v} \rVert=\sqrt{ 1+[f&#x27;(t)]^{2} }</code></span>，且有 <span class="course-math" data-tex="\mathbf{T}=\mathbf{v} / \lVert \mathbf{v} \rVert" data-display="false"><code>\mathbf{T}=\mathbf{v} / \lVert \mathbf{v} \rVert</code></span>。
- 最终可以推出  <span class="course-math course-math-display" data-tex="\kappa=\frac{1}{\lVert \mathbf{v} \rVert} \lVert \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}t}\rVert = \frac{\lvert y&#x27;&#x27; \rvert}{(1+(y&#x27;)^{2})^{3/2}}" data-display="true"><code>\kappa=\frac{1}{\lVert \mathbf{v} \rVert} \lVert \frac{\mathrm{d}\mathbf{T}}{\mathrm{d}t}\rVert = \frac{\lvert y&#x27;&#x27; \rvert}{(1+(y&#x27;)^{2})^{3/2}}</code></span>

### 求闭合曲线面积（简单闭曲线，沿逆时针方向）
{: #section-2 }


<span class="course-math course-math-display" data-tex="A=\frac{1}{2}\oint(x\,\mathrm{d}y-y\,\mathrm{d}x)&#10;=\frac{1}{2}\oint\left( x \frac{\mathrm{d}y}{\mathrm{d}t} -y \frac{\mathrm{d}x}{\mathrm{d}t}\right)\,\mathrm{d}t" data-display="true"><code>A=\frac{1}{2}\oint(x\,\mathrm{d}y-y\,\mathrm{d}x)&#10;=\frac{1}{2}\oint\left( x \frac{\mathrm{d}y}{\mathrm{d}t} -y \frac{\mathrm{d}x}{\mathrm{d}t}\right)\,\mathrm{d}t</code></span>


## 极坐标
{: #section-3 }

笛卡尔坐标（Cartesian Coordinates）用笛卡尔平面的 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 坐标记作 <span class="course-math" data-tex="(x,y)" data-display="false"><code>(x,y)</code></span>。
极坐标（Polar Coordinates）用到原点的距离 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 和极角 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 记作 <span class="course-math" data-tex="(r,\theta)" data-display="false"><code>(r,\theta)</code></span>。
有如下关系：
<span class="course-math course-math-display" data-tex="r^2=x^2+y^2" data-display="true"><code>r^2=x^2+y^2</code></span>
<span class="course-math course-math-display" data-tex="\tan\theta=\frac{y}{x}" data-display="true"><code>\tan\theta=\frac{y}{x}</code></span>
上面的正切关系要求 <span class="course-math" data-tex="x\neq0" data-display="false"><code>x\neq0</code></span>，且不能单独确定极角所在象限。完整的坐标转换关系为
<span class="course-math course-math-display" data-tex="y=r\sin\theta" data-display="true"><code>y=r\sin\theta</code></span>
<span class="course-math course-math-display" data-tex="x=r\cos\theta" data-display="true"><code>x=r\cos\theta</code></span>


### 求切线斜率
{: #section-4 }


<span class="course-math course-math-display" data-tex="\frac{\mathrm{d}y}{\mathrm{d}x}= \frac{\frac{\mathrm{d}y}{\mathrm{d}\theta}}{\frac{\mathrm{d}x}{\mathrm{d}\theta}}=\frac{r&#x27;(\theta)\sin\theta+r(\theta)\cos\theta}{r&#x27;(\theta)\cos\theta-r(\theta)\sin\theta}" data-display="true"><code>\frac{\mathrm{d}y}{\mathrm{d}x}= \frac{\frac{\mathrm{d}y}{\mathrm{d}\theta}}{\frac{\mathrm{d}x}{\mathrm{d}\theta}}=\frac{r&#x27;(\theta)\sin\theta+r(\theta)\cos\theta}{r&#x27;(\theta)\cos\theta-r(\theta)\sin\theta}</code></span>

### 求面积
{: #section-5 }


<span class="course-math course-math-display" data-tex="A=\frac{1}{2}\int_{\theta_{1}}^{\theta_{2}} r^2\,\mathrm{d}\theta" data-display="true"><code>A=\frac{1}{2}\int_{\theta_{1}}^{\theta_{2}} r^2\,\mathrm{d}\theta</code></span>

### 求弧长
{: #section-6 }


<span class="course-math course-math-display" data-tex="L= \int_{\theta_{1}}^{\theta_{2}} \sqrt{ r^{2}+\left( \frac{\mathrm{d}r}{\mathrm{d}\theta} \right)^{2} }\,\mathrm{d}\theta" data-display="true"><code>L= \int_{\theta_{1}}^{\theta_{2}} \sqrt{ r^{2}+\left( \frac{\mathrm{d}r}{\mathrm{d}\theta} \right)^{2} }\,\mathrm{d}\theta</code></span>
{% endraw %}
