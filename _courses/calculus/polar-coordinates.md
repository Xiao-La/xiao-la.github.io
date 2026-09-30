---
title: "Polar Coordinates - 极坐标"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "下"
status: "completed"
reference: false
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
三维坐标系中平面的方程：设法向量为 <span class="course-math" data-tex="\mathbf{n}=(A,B,C)" data-display="false"><code>\mathbf{n}=(A,B,C)</code></span>，且 <span class="course-math" data-tex="P_{0}(x_{0},y_{0},z_{0})" data-display="false"><code>P_{0}(x_{0},y_{0},z_{0})</code></span> 在平面内，则它们确定的平面为 <span class="course-math" data-tex="\mathbf{n}\cdot \vec{P_{0}P}=0" data-display="false"><code>\mathbf{n}\cdot \vec{P_{0}P}=0</code></span>，也就是 <span class="course-math" data-tex="A(x-x_{0})+B(y-y_{0})+C(z-z_{0})=0" data-display="false"><code>A(x-x_{0})+B(y-y_{0})+C(z-z_{0})=0</code></span>。
一般来说平面的方程可以写成 <span class="course-math" data-tex="Ax+Bx+Cz=D" data-display="false"><code>Ax+Bx+Cz=D</code></span>，它的一个法向量就是 <span class="course-math" data-tex="(A,B,C)" data-display="false"><code>(A,B,C)</code></span>，它过的一个点满足 <span class="course-math" data-tex="D=Ax_{0}+By_{0}+Cz_{0}" data-display="false"><code>D=Ax_{0}+By_{0}+Cz_{0}</code></span>。

【不考】
平面光滑曲线的曲率（Curvature）定义为
<span class="course-math course-math-display" data-tex="\kappa=&#124; \frac{d\mathbf{T}}{ds}&#124;" data-display="true"><code>\kappa=&#124; \frac{d\mathbf{T}}{ds}&#124;</code></span>
其中 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 是曲线 <span class="course-math" data-tex="s" data-display="false"><code>s</code></span> 的一个单位向量。
计算公式：若 <span class="course-math" data-tex="\mathbf{r}(t)" data-display="false"><code>\mathbf{r}(t)</code></span> 是一个光滑曲线，则：
<span class="course-math course-math-display" data-tex="\kappa=\frac{1}{&#124;\mathbf{v}&#124;} &#124; \frac{d\mathbf{T}}{dt}&#124;" data-display="true"><code>\kappa=\frac{1}{&#124;\mathbf{v}&#124;} &#124; \frac{d\mathbf{T}}{dt}&#124;</code></span>
其中 <span class="course-math" data-tex="\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \frac{\mathbf{v}}{&#124;\mathbf{v}&#124;}" data-display="false"><code>\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \frac{\mathbf{v}}{&#124;\mathbf{v}&#124;}</code></span> 是一个 <span class="course-math" data-tex="s" data-display="false"><code>s</code></span> 的单位向量。
定义对一个光滑曲线的  **主单位法向量（Principle Unit Normal Vector）** ：
<span class="course-math course-math-display" data-tex="\mathbf{N}=\frac{1}{\kappa} \frac{d\mathbf{T}}{ds}" data-display="true"><code>\mathbf{N}=\frac{1}{\kappa} \frac{d\mathbf{T}}{ds}</code></span>
这里 <span class="course-math" data-tex="\frac{d\mathbf{T}}{ds}" data-display="false"><code>\frac{d\mathbf{T}}{ds}</code></span> 指向了 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 转向的方向，因此垂直于切向量。再用 <span class="course-math" data-tex="\kappa" data-display="false"><code>\kappa</code></span> 归一化。
对于参数方程 <span class="course-math" data-tex="\mathbf{r}(t)" data-display="false"><code>\mathbf{r}(t)</code></span>，这个量可以这样计算：
<span class="course-math course-math-display" data-tex="\mathbf{N}=\frac{d\mathbf{T} / dt}{\lvert d\mathbf{T} / dt \rvert }" data-display="true"><code>\mathbf{N}=\frac{d\mathbf{T} / dt}{\lvert d\mathbf{T} / dt \rvert }</code></span>

其中 <span class="course-math" data-tex="\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \mathbf{v} / \lvert \mathbf{v} \rvert" data-display="false"><code>\mathbf{v}=\mathbf{r}&#x27;(t), \mathbf{T}= \mathbf{v} / \lvert \mathbf{v} \rvert</code></span>。
定义曲率半径（The radius of curvature）：
<span class="course-math course-math-display" data-tex="\rho=\frac{1}{\kappa}" data-display="true"><code>\rho=\frac{1}{\kappa}</code></span>
对于 <span class="course-math" data-tex="y=f(x)" data-display="false"><code>y=f(x)</code></span> ：
- 令 <span class="course-math" data-tex="\mathbf{r}(t)=t \mathbf{i}+f(t)\mathbf{j}" data-display="false"><code>\mathbf{r}(t)=t \mathbf{i}+f(t)\mathbf{j}</code></span>。
- 那么 <span class="course-math" data-tex="\mathbf{v}=\mathbf{i}+f&#x27;(t)\mathbf{j}" data-display="false"><code>\mathbf{v}=\mathbf{i}+f&#x27;(t)\mathbf{j}</code></span>。
- 那么 <span class="course-math" data-tex="\lvert \mathbf{v} \rvert=\sqrt{ 1+[f&#x27;(t)]^{2} }" data-display="false"><code>\lvert \mathbf{v} \rvert=\sqrt{ 1+[f&#x27;(t)]^{2} }</code></span>，且有 <span class="course-math" data-tex="\mathbf{T}=\mathbf{v} / \lvert  \mathbf{v} \rvert" data-display="false"><code>\mathbf{T}=\mathbf{v} / \lvert  \mathbf{v} \rvert</code></span>。
- 最终可以推出  <span class="course-math course-math-display" data-tex="\kappa=\frac{1}{\lvert \mathbf{v} \rvert} &#124; \frac{d\mathbf{T}}{dt}&#124;= \frac{\lvert y&#x27;&#x27; \rvert}{(1+(y&#x27;)^{2})^{3/2}}" data-display="true"><code>\kappa=\frac{1}{\lvert \mathbf{v} \rvert} &#124; \frac{d\mathbf{T}}{dt}&#124;= \frac{\lvert y&#x27;&#x27; \rvert}{(1+(y&#x27;)^{2})^{3/2}}</code></span>
### 求闭合曲线面积
{: #section-2 }

<span class="course-math course-math-display" data-tex="A=\frac{1}{2}\oint(xdy-ydx)&#10;=\frac{1}{2}\oint\left( x \frac{dy}{dt} -y \frac{dx}{dt}\right)dt" data-display="true"><code>A=\frac{1}{2}\oint(xdy-ydx)&#10;=\frac{1}{2}\oint\left( x \frac{dy}{dt} -y \frac{dx}{dt}\right)dt</code></span>

## 极坐标
{: #section-3 }
笛卡尔坐标（Cartesian Coordinates）用笛卡尔平面的 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 坐标记作 <span class="course-math" data-tex="(x,y)" data-display="false"><code>(x,y)</code></span>。
极坐标（Polar Coordinates）用到原点的距离 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 和极角 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 记作 <span class="course-math" data-tex="(r,\theta)" data-display="false"><code>(r,\theta)</code></span>。
有如下关系：
<span class="course-math course-math-display" data-tex="r^2=x^2+y^2" data-display="true"><code>r^2=x^2+y^2</code></span>
<span class="course-math course-math-display" data-tex="\tan\theta=\frac{y}{x}" data-display="true"><code>\tan\theta=\frac{y}{x}</code></span>
或，等价的
<span class="course-math course-math-display" data-tex="y=r\sin\theta" data-display="true"><code>y=r\sin\theta</code></span>
<span class="course-math course-math-display" data-tex="x=r\cos\theta" data-display="true"><code>x=r\cos\theta</code></span>

### 求切线斜率
{: #section-4 }

<span class="course-math course-math-display" data-tex="\frac{dy}{dx}= \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}}=\frac{r&#x27;(\theta)\sin\theta+r(\theta)\cos\theta}{r&#x27;(\theta)\cos\theta-r(\theta)\sin\theta}" data-display="true"><code>\frac{dy}{dx}= \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}}=\frac{r&#x27;(\theta)\sin\theta+r(\theta)\cos\theta}{r&#x27;(\theta)\cos\theta-r(\theta)\sin\theta}</code></span>
### 求面积
{: #section-5 }

<span class="course-math course-math-display" data-tex="A=\frac{1}{2}\int_{\theta_{1}}^{\theta_{2}} r^2d\theta" data-display="true"><code>A=\frac{1}{2}\int_{\theta_{1}}^{\theta_{2}} r^2d\theta</code></span>
### 求弧长
{: #section-6 }

<span class="course-math course-math-display" data-tex="L= \int_{\theta_{1}}^{\theta_{2}} \sqrt{ r^{2}+\left( \frac{dr}{d\theta} \right)^{2} } d\theta" data-display="true"><code>L= \int_{\theta_{1}}^{\theta_{2}} \sqrt{ r^{2}+\left( \frac{dr}{d\theta} \right)^{2} } d\theta</code></span>
{% endraw %}
