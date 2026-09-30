---
title: "Vector Calculus - 向量微积分"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "下"
status: "completed"
reference: false
layout: "course"
permalink: "/courses/calculus/vector-calculus/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Vector Calculus - 向量微积分"
excerpt: "高等数学（上）/（下） · Vector Calculus - 向量微积分"
---

{% raw %}


## 线积分与向量场
{: #section-1 }

线积分（Line Integral）：沿着某条曲线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 做函数 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的积分：
<span class="course-math course-math-display" data-tex="\int_{C}fds" data-display="true"><code>\int_{C}fds</code></span>
计算方法：
- 将 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 参数化为 <span class="course-math" data-tex="\mathbf{r}(t)" data-display="false"><code>\mathbf{r}(t)</code></span>。
- 则 <span class="course-math" data-tex="ds=&#124;\mathbf{v}(t)&#124;dt" data-display="false"><code>ds=&#124;\mathbf{v}(t)&#124;dt</code></span>，其中 <span class="course-math" data-tex="\mathbf{v}(t)=\mathbf{r}&#x27;(t)" data-display="false"><code>\mathbf{v}(t)=\mathbf{r}&#x27;(t)</code></span>。
- 最后变成计算一元积分 <span class="course-math" data-tex="\int f(\mathbf{r}(t))&#124;\mathbf{v}(t)&#124;dt" data-display="false"><code>\int f(\mathbf{r}(t))&#124;\mathbf{v}(t)&#124;dt</code></span>。
用线积分可以计算线质量，转动惯量等。

向量场（Vector Field）：一个函数，给空间一定区域内，每一点赋予一个矢量。
梯度场（Gradient Field）：<span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span>。
于是可以求类似于做功的积分，也叫流量积分（Flow Integral）：
<span class="course-math course-math-display" data-tex="\int_{C} \mathbf{F}\cdot d\mathbf{r}" data-display="true"><code>\int_{C} \mathbf{F}\cdot d\mathbf{r}</code></span>
这里为向量的点乘。计算方法同样是参数化，转化为：
<span class="course-math course-math-display" data-tex="\int_{C} \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}&#x27;(t)dt" data-display="true"><code>\int_{C} \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}&#x27;(t)dt</code></span>
若 <span class="course-math" data-tex="\mathbf{F}=\left&lt; M,N \right&gt;" data-display="false"><code>\mathbf{F}=\left&lt; M,N \right&gt;</code></span> 也可以进一步写成点乘 <span class="course-math" data-tex="\mathbf{F}\cdot \left&lt; dx,dy \right&gt;" data-display="false"><code>\mathbf{F}\cdot \left&lt; dx,dy \right&gt;</code></span> 的形式
<span class="course-math course-math-display" data-tex="\int_{C}(Mdx+Ndy)" data-display="true"><code>\int_{C}(Mdx+Ndy)</code></span>
若 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 为闭合曲线，则也把这个流量积分叫做环流量（Circulation）。
另外若 <span class="course-math" data-tex="\mathbf{F}=\left&lt; M,N \right&gt;" data-display="false"><code>\mathbf{F}=\left&lt; M,N \right&gt;</code></span> 则某一闭合曲线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 中的通量（Flux）：
<span class="course-math course-math-display" data-tex="\oint_{C} \mathbf{F}\cdot \mathbf{n}ds=\oint_{C}(Mdy-Ndx)" data-display="true"><code>\oint_{C} \mathbf{F}\cdot \mathbf{n}ds=\oint_{C}(Mdy-Ndx)</code></span>
可以写成点乘 <span class="course-math" data-tex="\mathbf{F}\cdot \left&lt; dy,-dx \right&gt;" data-display="false"><code>\mathbf{F}\cdot \left&lt; dy,-dx \right&gt;</code></span>。 计算方式同样可以参数化。

保守场 （Conservative Field）：在保守场 <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span> 中，沿着一条路径的积分之和起点和终点有关，也就是说，存在一个标量的势函数（Potential Function） <span class="course-math" data-tex="f" data-display="false"><code>f</code></span>，使得
<span class="course-math course-math-display" data-tex="\mathbf{F}=\nabla f" data-display="true"><code>\mathbf{F}=\nabla f</code></span>
**（保守场是梯度场）**
那么有线积分基本定理（Fundamental Theorem of Line Integrals）：任意路径 <span class="course-math" data-tex="C:A\to B" data-display="false"><code>C:A\to B</code></span>，有
<span class="course-math course-math-display" data-tex="\int_{C}\mathbf{F}d\mathbf{r}=f(B)-f(A)" data-display="true"><code>\int_{C}\mathbf{F}d\mathbf{r}=f(B)-f(A)</code></span>

定义连通区域（Connected Domain）：完整的一块，可以从任意一点沿着光滑曲线走到另一点。
定义单连通区域（Simply Connected Domain）：连通且没有洞，也就是说可以缩点：**在区域里随便画一个闭合的圈 (loop)，这个圈一定能像橡皮筋一样一直缩小到一个点，且在缩小的过程中**绝对不会碰到区域的外部。

判定保守场的一个必要条件：对于向量场 <span class="course-math" data-tex="\mathbf{F}=\left&lt; P,Q \right&gt;" data-display="false"><code>\mathbf{F}=\left&lt; P,Q \right&gt;</code></span>，若它是保守场，则必有
<span class="course-math course-math-display" data-tex="\frac{ \partial {P} }{ \partial y } =\frac{ \partial Q }{ \partial x }" data-display="true"><code>\frac{ \partial {P} }{ \partial y } =\frac{ \partial Q }{ \partial x }</code></span>
进一步的，若区域是**单连通的**，则这个条件是充要的。
定义：一个式子 <span class="course-math" data-tex="Mdx+Ndy+Pdz" data-display="false"><code>Mdx+Ndy+Pdz</code></span> 为恰当（Exact）微分形式，若存在 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 使得：
<span class="course-math course-math-display" data-tex="df=Mdx+Ndy+Pdz=\frac{ \partial f }{ \partial x } dx+\frac{ \partial f }{ \partial y } dy+\frac{ \partial f }{ \partial z } dz" data-display="true"><code>df=Mdx+Ndy+Pdz=\frac{ \partial f }{ \partial x } dx+\frac{ \partial f }{ \partial y } dy+\frac{ \partial f }{ \partial z } dz</code></span>
这里 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 就是势函数。
对恰当微分形式进行线积分，由线积分基本定理，只需终点处的势函数值减去起点处的势函数值。
若单连通，同样有一个保守场充要条件：
<span class="course-math course-math-display" data-tex="\frac{ \partial M }{ \partial y } =\frac{ \partial N }{ \partial x } ,\frac{ \partial M }{ \partial z } =\frac{ \partial P }{ \partial x } ,\frac{ \partial N }{ \partial z } =\frac{ \partial P }{ \partial y }" data-display="true"><code>\frac{ \partial M }{ \partial y } =\frac{ \partial N }{ \partial x } ,\frac{ \partial M }{ \partial z } =\frac{ \partial P }{ \partial x } ,\frac{ \partial N }{ \partial z } =\frac{ \partial P }{ \partial y }</code></span>
保守场的一个充要条件：对任意回路积分为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。

定义场 <span class="course-math" data-tex="\mathbf{F}=\left&lt; M,N \right&gt;" data-display="false"><code>\mathbf{F}=\left&lt; M,N \right&gt;</code></span> 的流量密度（circulation density）：
<span class="course-math course-math-display" data-tex="\frac{ \partial N }{ \partial x } -\frac{ \partial M }{ \partial y } = (\nabla \times\mathbf{F}) \cdot \mathbf{k}" data-display="true"><code>\frac{ \partial N }{ \partial x } -\frac{ \partial M }{ \partial y } = (\nabla \times\mathbf{F}) \cdot \mathbf{k}</code></span>
也被称为**旋度的 k 分量** the k-component of the curl，记作 <span class="course-math" data-tex="(\text{curl } \mathbf{F})\cdot \mathbf{k}" data-display="false"><code>(\text{curl } \mathbf{F})\cdot \mathbf{k}</code></span>
定义散度（Divergence）：
<span class="course-math course-math-display" data-tex="\frac{ \partial M }{ \partial x } +\frac{ \partial N }{ \partial y } =\nabla \cdot \mathbf{F}" data-display="true"><code>\frac{ \partial M }{ \partial x } +\frac{ \partial N }{ \partial y } =\nabla \cdot \mathbf{F}</code></span>


格林公式（Green's Theorem）：在满足以下条件时：
- <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 必须是一条 **分段光滑（Piecewise smooth）** 的 **简单闭曲线（Simple closed curve）**。
- <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 所包围的区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 必须是一个有界的闭区域，且其内部不能包含任何向量场无定义的奇点。
- 向量场 <span class="course-math" data-tex="\mathbf{F} = \langle M, N \rangle" data-display="false"><code>\mathbf{F} = \langle M, N \rangle</code></span> 的分量函数 <span class="course-math" data-tex="M(x, y)" data-display="false"><code>M(x, y)</code></span> 和 <span class="course-math" data-tex="N(x, y)" data-display="false"><code>N(x, y)</code></span>，以及它们的一阶偏导数 <span class="course-math" data-tex="\frac{\partial M}{\partial x}, \frac{\partial M}{\partial y}, \frac{\partial N}{\partial x}, \frac{\partial N}{\partial y}" data-display="false"><code>\frac{\partial M}{\partial x}, \frac{\partial M}{\partial y}, \frac{\partial N}{\partial x}, \frac{\partial N}{\partial y}</code></span>，在包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的某个**开区域**上必须是处处连续（Continuous）的。
- 曲线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的方向必须是**正向（逆时针方向）**。判别法：当你沿着曲线 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的前进方向行走时，被包围的区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 必须始终位于你的左手边。如果题目给出的是顺时针方向，积分结果必须乘以 <span class="course-math" data-tex="-1" data-display="false"><code>-1</code></span>。
那么有环流量-旋度（Circulation-Curl）形式（右边是旋度的 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 分量）：
<span class="course-math course-math-display" data-tex="\oint_{C}\mathbf{F}\cdot \mathbf{T}ds=\oint_C M \, dx + N \, dy = \iint_R \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) dA" data-display="true"><code>\oint_{C}\mathbf{F}\cdot \mathbf{T}ds=\oint_C M \, dx + N \, dy = \iint_R \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) dA</code></span>
这个旋度可以写成
<span class="course-math course-math-display" data-tex="(\nabla \times \mathbf{F})\cdot \mathbf{k}=\left&#124; \begin{matrix} \frac{ \partial  }{ \partial x }  &amp; \frac{ \partial  }{ \partial y }  \\&#10;M &amp; N \end{matrix} \right&#124;" data-display="true"><code>(\nabla \times \mathbf{F})\cdot \mathbf{k}=\left&#124; \begin{matrix} \frac{ \partial  }{ \partial x }  &amp; \frac{ \partial  }{ \partial y }  \\&#10;M &amp; N \end{matrix} \right&#124;</code></span>
或通量-散度（Flux-Divergence）形式：
<span class="course-math course-math-display" data-tex="\oint_{C}\mathbf{F}\cdot \mathbf{n}ds=\oint_C M \, dy - N \, dx = \iint_R \left( \frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} \right) dA" data-display="true"><code>\oint_{C}\mathbf{F}\cdot \mathbf{n}ds=\oint_C M \, dy - N \, dx = \iint_R \left( \frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} \right) dA</code></span>
这个散度可以写成
<span class="course-math course-math-display" data-tex="\nabla \cdot \mathbf{F}" data-display="true"><code>\nabla \cdot \mathbf{F}</code></span>

我们令 <span class="course-math" data-tex="M=\frac{1}{2}x,N=\frac{1}{2}y" data-display="false"><code>M=\frac{1}{2}x,N=\frac{1}{2}y</code></span>，那么某个区域的面积有这样的计算公式
<span class="course-math course-math-display" data-tex="A=\iint_{R} dA=\frac{1}{2}\oint_{C}xdy-ydx" data-display="true"><code>A=\iint_{R} dA=\frac{1}{2}\oint_{C}xdy-ydx</code></span>

## 面积分
{: #section-2 }


沿着某个曲面做积分，由于曲面有两个自由度，其参数化需要两个变元，曲面的参数方程可以写成：
<span class="course-math course-math-display" data-tex="\mathbf{r}(u,v)=x(u,v)\mathbf{i}+y(u,v)\mathbf{j}+z(u,v)\mathbf{k}" data-display="true"><code>\mathbf{r}(u,v)=x(u,v)\mathbf{i}+y(u,v)\mathbf{j}+z(u,v)\mathbf{k}</code></span>
曲面平滑（Smooth）的定义：
1. 偏导向量 <span class="course-math" data-tex="\mathbf{r}_u = \frac{\partial \mathbf{r}}{\partial u}" data-display="false"><code>\mathbf{r}_u = \frac{\partial \mathbf{r}}{\partial u}</code></span> 和 <span class="course-math" data-tex="\mathbf{r}_v = \frac{\partial \mathbf{r}}{\partial v}" data-display="false"><code>\mathbf{r}_v = \frac{\partial \mathbf{r}}{\partial v}</code></span> 必须处处**连续 (Continuous)** 。 
2. 它们的叉乘（向量积）**<span class="course-math" data-tex="\mathbf{r}_u \times \mathbf{r}_v" data-display="false"><code>\mathbf{r}_u \times \mathbf{r}_v</code></span> 在区域内部绝不能为零向量 <span class="course-math" data-tex="\mathbf{0}" data-display="false"><code>\mathbf{0}</code></span>** 。
在线积分中，弧长与参数的微小量的换算为 <span class="course-math" data-tex="ds=\lvert \mathbf{r}&#x27;(t) \rvert dt" data-display="false"><code>ds=\lvert \mathbf{r}&#x27;(t) \rvert dt</code></span>。在面积分中，考虑在两个参量上走一小步，形成的微小平行四边形面积为两个切向量的叉乘，故而面积与参数的微小量的换算为：
<span class="course-math course-math-display" data-tex="d\sigma=\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert  du dv" data-display="true"><code>d\sigma=\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert  du dv</code></span>
其中  <span class="course-math" data-tex="\mathbf{r}_{u},\mathbf{r}_{v}" data-display="false"><code>\mathbf{r}_{u},\mathbf{r}_{v}</code></span> 为 <span class="course-math" data-tex="\mathbf{r}" data-display="false"><code>\mathbf{r}</code></span> 对 <span class="course-math" data-tex="u,v" data-display="false"><code>u,v</code></span> 求偏导的结果。

注意：做这样的换算，都要把积分的区域也做投影！

这里若 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span>，则有 <span class="course-math" data-tex="\mathbf{r}=\left&lt; u,v,f(u,v) \right&gt;" data-display="false"><code>\mathbf{r}=\left&lt; u,v,f(u,v) \right&gt;</code></span>，<span class="course-math" data-tex="\mathbf{r}_{u}=\left&lt; 1,0,f_{x} \right&gt;,\mathbf{r}_{v}=\left&lt; 0,1,f_{y} \right&gt;" data-display="false"><code>\mathbf{r}_{u}=\left&lt; 1,0,f_{x} \right&gt;,\mathbf{r}_{v}=\left&lt; 0,1,f_{y} \right&gt;</code></span>，故而 <span class="course-math" data-tex="\mathbf{r}_{u}\times r_{v}=\left&lt; -f_{x},-f_{y},1 \right&gt;" data-display="false"><code>\mathbf{r}_{u}\times r_{v}=\left&lt; -f_{x},-f_{y},1 \right&gt;</code></span>（这里指向上面），有结论：
<span class="course-math course-math-display" data-tex="d\sigma=\sqrt{ f_{x}^{2}+f_{y}^{2}+1 }dudv" data-display="true"><code>d\sigma=\sqrt{ f_{x}^{2}+f_{y}^{2}+1 }dudv</code></span>
所以 
<span class="course-math course-math-display" data-tex="A=\iint_{R} d\sigma=\iint_{R&#x27;} \sqrt{ f_{x}^{2}+f_{y}^{2}+1 }dxdy" data-display="true"><code>A=\iint_{R} d\sigma=\iint_{R&#x27;} \sqrt{ f_{x}^{2}+f_{y}^{2}+1 }dxdy</code></span>
其中 <span class="course-math" data-tex="R&#x27;" data-display="false"><code>R&#x27;</code></span> 为 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 向 <span class="course-math" data-tex="xOy" data-display="false"><code>xOy</code></span> 平面投影得到。
另外，若 <span class="course-math" data-tex="F(x,y,z)=c" data-display="false"><code>F(x,y,z)=c</code></span>，可以推导出：
<span class="course-math course-math-display" data-tex="A = \iint_R \frac{&#124;\nabla F&#124;}{&#124;\nabla F \cdot \mathbf{p}&#124;} \, dA" data-display="true"><code>A = \iint_R \frac{&#124;\nabla F&#124;}{&#124;\nabla F \cdot \mathbf{p}&#124;} \, dA</code></span>
其中 <span class="course-math" data-tex="\mathbf{p}=\mathbf{i},\mathbf{j}\text{ or }\mathbf{k}" data-display="false"><code>\mathbf{p}=\mathbf{i},\mathbf{j}\text{ or }\mathbf{k}</code></span>，区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是一个垂直于 <span class="course-math" data-tex="\mathbf{p}" data-display="false"><code>\mathbf{p}</code></span> 的平面（原来区域对这个平面做投影得到）。
这相当于投影到某个平面去求，代数推导是，比如假设 <span class="course-math" data-tex="z=h(x,y)" data-display="false"><code>z=h(x,y)</code></span>，则 <span class="course-math" data-tex="h_{x}= - \frac{F_{x}}{F_{z}},h_{y}=- \frac{F_{y}}{F_{z}}" data-display="false"><code>h_{x}= - \frac{F_{x}}{F_{z}},h_{y}=- \frac{F_{y}}{F_{z}}</code></span>，再代入：
<span class="course-math course-math-display" data-tex="d\sigma=\sqrt{ \left( - \frac{F_{x}}{F_{z}} \right)^{2}+ \left( -\frac{F_{y}}{F_{z}} \right)^{2}+1 }dxdy= \frac{\lvert \nabla F \rvert }{\lvert F_{z} \rvert }dA" data-display="true"><code>d\sigma=\sqrt{ \left( - \frac{F_{x}}{F_{z}} \right)^{2}+ \left( -\frac{F_{y}}{F_{z}} \right)^{2}+1 }dxdy= \frac{\lvert \nabla F \rvert }{\lvert F_{z} \rvert }dA</code></span>

总结来说，对于标量曲面积分：
- **形式 A：参数化曲面 <span class="course-math" data-tex="\mathbf{r}(u,v)" data-display="false"><code>\mathbf{r}(u,v)</code></span> 下**（最通用）
    <span class="course-math course-math-display" data-tex="\iint_S f(x,y,z) \, d\sigma = \iint_R f(\mathbf{r}(u,v)) \, &#124;\mathbf{r}_u \times \mathbf{r}_v&#124; \, du \, dv" data-display="true"><code>\iint_S f(x,y,z) \, d\sigma = \iint_R f(\mathbf{r}(u,v)) \, &#124;\mathbf{r}_u \times \mathbf{r}_v&#124; \, du \, dv</code></span>
    
- **形式 B：显式曲面 <span class="course-math" data-tex="z = g(x,y)" data-display="false"><code>z = g(x,y)</code></span> 下**（最常见）
    
    <span class="course-math course-math-display" data-tex="\iint_S f(x,y,z) \, d\sigma = \iint_R f(x,y,g(x,y)) \, \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dx \, dy" data-display="true"><code>\iint_S f(x,y,z) \, d\sigma = \iint_R f(x,y,g(x,y)) \, \sqrt{\left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2 + 1} \, dx \, dy</code></span>
    
- **形式 C：隐式曲面 <span class="course-math" data-tex="F(x,y,z) = c" data-display="false"><code>F(x,y,z) = c</code></span> 下**（投影法）
    
    <span class="course-math course-math-display" data-tex="\iint_S f(x,y,z) \, d\sigma = \iint_R f(x,y,z) \, \frac{&#124;\nabla F&#124;}{&#124;\nabla F \cdot \mathbf{p}&#124;} \, dA" data-display="true"><code>\iint_S f(x,y,z) \, d\sigma = \iint_R f(x,y,z) \, \frac{&#124;\nabla F&#124;}{&#124;\nabla F \cdot \mathbf{p}&#124;} \, dA</code></span>
    
    _(其中 <span class="course-math" data-tex="\mathbf{p}" data-display="false"><code>\mathbf{p}</code></span> 是垂直于投影平面的单位法向量，通常是 <span class="course-math" data-tex="\mathbf{k}" data-display="false"><code>\mathbf{k}</code></span>)_


如果我们在曲面 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 上可以选定一个**处处连续变化**的单位法向量场 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span>，使得当你沿着曲面上的任何闭合回路绕一圈回来时，法向量**不会突然反转**，那么这个曲面就叫做**可定向曲面 (Orientable Surface)**。
**非定向曲面 (Non-orientable Surface)** 的代表——莫比乌斯带。

另外：对曲面求通量，比如有一个场 <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span>，则 Surface Integral of F over S： 
<span class="course-math course-math-display" data-tex="\iint _{S}\mathbf{F}\cdot \mathbf{n}d\sigma=\iint_{S}\mathbf{F}\cdot \frac{\mathbf{r}_{u}\times \mathbf{r}_{v}}{\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert }\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert dudv=\iint_{S}\mathbf{F}\cdot(\mathbf{r}_{u}\times \mathbf{r}_{v})dudv" data-display="true"><code>\iint _{S}\mathbf{F}\cdot \mathbf{n}d\sigma=\iint_{S}\mathbf{F}\cdot \frac{\mathbf{r}_{u}\times \mathbf{r}_{v}}{\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert }\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert dudv=\iint_{S}\mathbf{F}\cdot(\mathbf{r}_{u}\times \mathbf{r}_{v})dudv</code></span>
这里的 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 的方向需要确定：
- **封闭曲面 (Closed Surfaces)** 
    封闭曲面默认只有两种定向：
    1. **向外定向 (Outward Orientation)**：法向量 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 处处指向几何体的**外部**（微积分和物理学默认的**正方向**）。
    2. **向内定向 (Inward Orientation)**：法向量 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 处处指向几何体的**内部**。
- **开放曲面 (Open Surfaces)** —— 如一个雷达锅盖、一个平坦圆盘。
    开放曲面没有绝对的内外之分，课本通过分量来定义：
    1. **向上定向 (Upward Orientation)**：法向量 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 的 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> 轴分量（即 <span class="course-math" data-tex="\mathbf{k}" data-display="false"><code>\mathbf{k}</code></span> 分量）必须是**正数**。
    2. **向下定向 (Downward Orientation)**：法向量 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 的 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> 轴分量必须是**负数**。

类似于之前的多重积分，还可以求曲面的质量（<span class="course-math" data-tex="\iint \delta d\sigma" data-display="false"><code>\iint \delta d\sigma</code></span>）和质心/转动惯量等。

### 斯托克斯定理
{: #section-3 }

**斯托克斯定理（Stokes Theorem）：** 流量 - 旋度。
- 定义在一个场 <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span> 中某点的旋度（Curl）为
<span class="course-math course-math-display" data-tex="\nabla \times \mathbf{F}" data-display="true"><code>\nabla \times \mathbf{F}</code></span>
- 其中 <span class="course-math" data-tex="\nabla=\left&lt; \frac{ \partial  }{ \partial x },\frac{ \partial  }{ \partial y },\frac{ \partial  }{ \partial z } \right&gt;" data-display="false"><code>\nabla=\left&lt; \frac{ \partial  }{ \partial x },\frac{ \partial  }{ \partial y },\frac{ \partial  }{ \partial z } \right&gt;</code></span> 为倒三角算符（Del Operator）。
- 那么斯托克斯定理指出：
<span class="course-math course-math-display" data-tex="\oint_{C}\mathbf{F}\cdot d\mathbf{r}=\iint_{S}(\nabla \times \mathbf{F})\cdot \mathbf{n}d\sigma" data-display="true"><code>\oint_{C}\mathbf{F}\cdot d\mathbf{r}=\iint_{S}(\nabla \times \mathbf{F})\cdot \mathbf{n}d\sigma</code></span>
- 其中 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 是一个闭合边界，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是以 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 为边界的一个**分段光滑曲面**。
- 也就是说，以 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 为边界的曲面的旋度场的通量，等于这个边界上的环流量。
- 那么对于一个复杂的曲面积分，可以改成算一个线积分，也可以换成一个简单的（有相同边界的）曲面的积分；对于一个复杂的环流量线积分，也可以换成一个简单曲面的旋度通量积分。

这里要注意，作为一个通量积分，仍然有：
<span class="course-math course-math-display" data-tex="d\mathbf{S}=\mathbf{n}d\sigma= \frac{r_{u}\times r_{v}}{\lvert r_{u}\times r_{v} \rvert }\lvert r_{u}\times r_{v} \rvert =r_{u}\times r_{v}" data-display="true"><code>d\mathbf{S}=\mathbf{n}d\sigma= \frac{r_{u}\times r_{v}}{\lvert r_{u}\times r_{v} \rvert }\lvert r_{u}\times r_{v} \rvert =r_{u}\times r_{v}</code></span>
那么对于 <span class="course-math" data-tex="z=f(x,y)" data-display="false"><code>z=f(x,y)</code></span>，仍然有 <span class="course-math" data-tex="r_{u}\times r_{v}=(-f_{x},-f_{y},1)" data-display="false"><code>r_{u}\times r_{v}=(-f_{x},-f_{y},1)</code></span>。

如果曲面有洞：公式里的边界 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 会变成**一组曲线的集合**：

<span class="course-math course-math-display" data-tex="\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, d\sigma = \oint_{C_{\text{outer}}} \mathbf{F} \cdot d\mathbf{r} + \oint_{C_{\text{inner}}} \mathbf{F} \cdot d\mathbf{r}" data-display="true"><code>\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, d\sigma = \oint_{C_{\text{outer}}} \mathbf{F} \cdot d\mathbf{r} + \oint_{C_{\text{inner}}} \mathbf{F} \cdot d\mathbf{r}</code></span>

根据右手螺旋定则，当曲面的法向量 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 向上时：
- **外边界（Outer boundary）**：必须是**逆时针（Counterclockwise）**方向。
- **内边界（Hole boundary）**：必须是**顺时针（Clockwise）**方向。
（保持曲面在左手边）

定理：**任何标量场的梯度场，其旋度必为零向量。**
<span class="course-math course-math-display" data-tex="\text{curl}(\text{grad } f) = \mathbf{0} \quad \text{或} \quad \nabla \times \nabla f = \mathbf{0} \quad \text{}" data-display="true"><code>\text{curl}(\text{grad } f) = \mathbf{0} \quad \text{或} \quad \nabla \times \nabla f = \mathbf{0} \quad \text{}</code></span>
在**连通且单连通（Connected & Simply Connected）的开放区域 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span>** 中，TFAE：
1. <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span> 是保守场（<span class="course-math" data-tex="\mathbf{F} = \nabla f" data-display="false"><code>\mathbf{F} = \nabla f</code></span> 存在势函数）。
2. 沿着区域内任何闭合回路的线积分永远为 0（<span class="course-math" data-tex="\oint_C \mathbf{F} \cdot d\mathbf{r} = 0" data-display="false"><code>\oint_C \mathbf{F} \cdot d\mathbf{r} = 0</code></span>）。
3. 向量场线积分严格路径无关（Path Independence）。
4. **区域内处处无旋：<span class="course-math" data-tex="\nabla \times \mathbf{F} = \mathbf{0}" data-display="false"><code>\nabla \times \mathbf{F} = \mathbf{0}</code></span>**。


### 散度定理
{: #section-4 }

> 1. 曲面 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 必须是一个**分段平滑 (Piecewise smooth)** 的**闭合曲面 (Closed Surface)**（比如完整的球面、立方体表面、圆柱体含上下底面）。它包围着一个三维立体区域 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span>。
> 2. 法向量 <span class="course-math" data-tex="\mathbf{n}" data-display="false"><code>\mathbf{n}</code></span> 必须是**向外定向的单位法向量 (Outward unit normal vector)**。
> 3. 向量场 <span class="course-math" data-tex="\mathbf{F} = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}" data-display="false"><code>\mathbf{F} = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}</code></span> 的三个分量在区域 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 及其边界 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 上必须有**连续的一阶偏导数**。

**【三维散度定义】**：在三维空间某一点上，流体向外膨胀的微观速率为：
<span class="course-math course-math-display" data-tex="\text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} + \frac{\partial P}{\partial z}" data-display="true"><code>\text{div } \mathbf{F} = \nabla \cdot \mathbf{F} = \frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} + \frac{\partial P}{\partial z}</code></span>
**散度定理**（Divergence Theorem）：

<span class="course-math course-math-display" data-tex="\iint_S \mathbf{F} \cdot \mathbf{n} \, d\sigma = \iiint_D \nabla \cdot \mathbf{F} \, dV" data-display="true"><code>\iint_S \mathbf{F} \cdot \mathbf{n} \, d\sigma = \iiint_D \nabla \cdot \mathbf{F} \, dV</code></span>
左边是一个面 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的通量，右边是内部体积 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 中的散度。
推论：如果一个向量场 <span class="course-math" data-tex="\mathbf{G}" data-display="false"><code>\mathbf{G}</code></span> 是另一个场的旋度（即 <span class="course-math" data-tex="\mathbf{G} = \text{curl } \mathbf{F}" data-display="false"><code>\mathbf{G} = \text{curl } \mathbf{F}</code></span>），那么 <span class="course-math" data-tex="\mathbf{G}" data-display="false"><code>\mathbf{G}</code></span> 穿过任何“**闭合曲面** <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>”的向外总通量必定为零。
<span class="course-math course-math-display" data-tex="\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, d\sigma = 0" data-display="true"><code>\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, d\sigma = 0</code></span>
如果向量场 <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span> 具有连续的二阶偏导数，那么它的旋度的散度必定为零，即 <span class="course-math" data-tex="\text{div}(\text{curl } \mathbf{F}) = \nabla \cdot (\nabla \times \mathbf{F}) = 0" data-display="false"><code>\text{div}(\text{curl } \mathbf{F}) = \nabla \cdot (\nabla \times \mathbf{F}) = 0</code></span>。

总结：
“保守场 <span class="course-math" data-tex="\nabla f" data-display="false"><code>\nabla f</code></span> 必定无旋（<span class="course-math" data-tex="\nabla \times \nabla f = 0" data-display="false"><code>\nabla \times \nabla f = 0</code></span>）”
“旋度场 <span class="course-math" data-tex="\nabla \times \mathbf{F}" data-display="false"><code>\nabla \times \mathbf{F}</code></span> 必定无源（<span class="course-math" data-tex="\nabla \cdot (\nabla \times \mathbf{F}) = 0" data-display="false"><code>\nabla \cdot (\nabla \times \mathbf{F}) = 0</code></span>）”

（考点：对于一个场 <span class="course-math" data-tex="\mathbf{G}" data-display="false"><code>\mathbf{G}</code></span>，是否存在某个向量场 <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span>，使得 <span class="course-math" data-tex="\mathbf{G} = \nabla \times\mathbf{F}" data-display="false"><code>\mathbf{G} = \nabla \times\mathbf{F}</code></span>？只需要去算算 <span class="course-math" data-tex="\nabla \cdot \mathbf{G}" data-display="false"><code>\nabla \cdot \mathbf{G}</code></span>，只要它不为零，就不可能存在 <span class="course-math" data-tex="\mathbf{F}" data-display="false"><code>\mathbf{F}</code></span>）。
### 总结
{: #section-5 }


| **定理名称**                                                  | **维度与几何体**                               | **内部积分 (区域上的“导数”累积)**                                                                                                      | **=**   | **边界积分 (边界上的“原函数”表现)**                                                                                         |
| --------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| **微积分基本定理** (Fundamental Theorem)                         | **1 维**<br><br>  <br><br>线段区间 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span>    | <span class="course-math" data-tex="\displaystyle\int_a^b \color{red}{f&#x27;(x)} \, dx" data-display="false"><code>\displaystyle\int_a^b \color{red}{f&#x27;(x)} \, dx</code></span><br><br>  <br><br>_(内部导数的线积分)_                                             | **<span class="course-math" data-tex="=" data-display="false"><code>=</code></span>** | <span class="course-math" data-tex="\displaystyle \color{blue}{f(b) - f(a)}" data-display="false"><code>\displaystyle \color{blue}{f(b) - f(a)}</code></span><br><br>  <br><br>_(两端点的值相减)_                                         |
| **格林定理 (环流-旋度)**<br><br>  <br><br>(Green's - Circulation) | **2 维**<br><br>  <br><br>平坦闭区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>       | <span class="course-math" data-tex="\displaystyle\iint_R \color{red}{(\nabla \times \mathbf{F}) \cdot \mathbf{k}} \, dA" data-display="false"><code>\displaystyle\iint_R \color{red}{(\nabla \times \mathbf{F}) \cdot \mathbf{k}} \, dA</code></span><br><br>  <br><br>_(内部微观旋度的面积分)_      | **<span class="course-math" data-tex="=" data-display="false"><code>=</code></span>** | <span class="course-math" data-tex="\displaystyle\oint_C \color{blue}{\mathbf{F} \cdot d\mathbf{r}}" data-display="false"><code>\displaystyle\oint_C \color{blue}{\mathbf{F} \cdot d\mathbf{r}}</code></span><br><br>  <br><br>_(边界曲线上的总环流做功)_             |
| **格林定理 (通量-散度)**<br><br>  <br><br>(Green's - Flux)        | **2 维**<br><br>  <br><br>平坦闭区域 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>       | <span class="course-math" data-tex="\displaystyle\iint_R \color{red}{(\nabla \cdot \mathbf{F})} \, dA" data-display="false"><code>\displaystyle\iint_R \color{red}{(\nabla \cdot \mathbf{F})} \, dA</code></span><br><br>  <br><br>_(内部微观散度的面积分)_                        | **<span class="course-math" data-tex="=" data-display="false"><code>=</code></span>** | <span class="course-math" data-tex="\displaystyle\oint_C \color{blue}{\mathbf{F} \cdot \mathbf{n}} \, ds" data-display="false"><code>\displaystyle\oint_C \color{blue}{\mathbf{F} \cdot \mathbf{n}} \, ds</code></span><br><br>  <br><br>_(穿过边界曲线的总外通量)_        |
| **斯托克斯定理**<br><br>  <br><br>(Stokes' Theorem)             | **3 维 (曲面)**<br><br>  <br><br>空间弯曲曲面 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> | <span class="course-math" data-tex="\displaystyle\iint_S \color{red}{(\nabla \times \mathbf{F}) \cdot \mathbf{n}} \, d\sigma" data-display="false"><code>\displaystyle\iint_S \color{red}{(\nabla \times \mathbf{F}) \cdot \mathbf{n}} \, d\sigma</code></span><br><br>  <br><br>_(曲面微观旋度的面积分)_ | **<span class="course-math" data-tex="=" data-display="false"><code>=</code></span>** | <span class="course-math" data-tex="\displaystyle\oint_C \color{blue}{\mathbf{F} \cdot d\mathbf{r}}" data-display="false"><code>\displaystyle\oint_C \color{blue}{\mathbf{F} \cdot d\mathbf{r}}</code></span><br><br>  <br><br>_(边界铁丝圈上的总环流做功)_            |
| **散度定理 (高斯公式)**<br><br>  <br><br>(Divergence Theorem)     | **3 维 (实体)**<br><br>  <br><br>实心立体空间 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> | <span class="course-math" data-tex="\displaystyle\iiint_D \color{red}{(\nabla \cdot \mathbf{F})} \, dV" data-display="false"><code>\displaystyle\iiint_D \color{red}{(\nabla \cdot \mathbf{F})} \, dV</code></span><br><br>  <br><br>_(立体微观散度的体积分)_                       | **<span class="course-math" data-tex="=" data-display="false"><code>=</code></span>** | <span class="course-math" data-tex="\displaystyle\iint_S \color{blue}{\mathbf{F} \cdot \mathbf{n}} \, d\sigma" data-display="false"><code>\displaystyle\iint_S \color{blue}{\mathbf{F} \cdot \mathbf{n}} \, d\sigma</code></span><br><br>  <br><br>_(穿过边界闭合曲面的总外通量)_ |
{% endraw %}
