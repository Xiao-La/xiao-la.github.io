---
title: "Differential Equation - 微分方程"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-12-02T10:12:03+08:00"
updated_at: "2026-10-09T16:13:40+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/calculus/differential-equation/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Differential Equation - 微分方程"
excerpt: "高等数学（上）/（下） · Differential Equation - 微分方程"
---

{% raw %}
前置：<a href="{% endraw %}{{ '/courses/calculus/antiderivative-and-integral/' | relative_url }}{% raw %}">Antiderivative and Integral - 积分</a>
常微分方程（Ordinary Differential Equation）指含 <span class="course-math" data-tex="\frac{d^ny}{\mathrm{d}x^n}" data-display="false"><code>\frac{d^ny}{\mathrm{d}x^n}</code></span> 的关于函数 <span class="course-math" data-tex="y=f(x)" data-display="false"><code>y=f(x)</code></span> 的方程。


### 解析解
{: #section-1 }


对一阶常微分方程（First-Order ODEs），有一些特定的技巧。

#### 分离变量后积分
{: #section-2 }

<span class="course-math course-math-display" data-tex="A(y) \frac{\mathrm{d}y}{\mathrm{d}x}=B(x)\implies \int A(y)\,\mathrm{d}y=\int B(x)\,\mathrm{d}x" data-display="true"><code>A(y) \frac{\mathrm{d}y}{\mathrm{d}x}=B(x)\implies \int A(y)\,\mathrm{d}y=\int B(x)\,\mathrm{d}x</code></span>

#### 构造乘积
{: #section-3 }

对形如
<span class="course-math course-math-display" data-tex="\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=Q(x)" data-display="true"><code>\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=Q(x)</code></span>
的一阶常微分方程，可以构造一个 <span class="course-math" data-tex="v(x)" data-display="false"><code>v(x)</code></span> ，使得等式两边同乘 <span class="course-math" data-tex="v(x)" data-display="false"><code>v(x)</code></span> 后，左边为乘积的微分公式：
<span class="course-math course-math-display" data-tex="v(x) \left( \frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y \right)=\frac{\mathrm{d}}{\mathrm{d}x}(v(x)y)" data-display="true"><code>v(x) \left( \frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y \right)=\frac{\mathrm{d}}{\mathrm{d}x}(v(x)y)</code></span>
那么可以解得
<span class="course-math course-math-display" data-tex="v(x)y=\int v(x)Q(x)\,\mathrm{d}x" data-display="true"><code>v(x)y=\int v(x)Q(x)\,\mathrm{d}x</code></span>
这里选取的 <span class="course-math" data-tex="v(x)" data-display="false"><code>v(x)</code></span> 只需满足 <span class="course-math" data-tex="v&#x27;(x)=v(x)P(x)" data-display="false"><code>v&#x27;(x)=v(x)P(x)</code></span>，即
<span class="course-math course-math-display" data-tex="v(x)=e^{\int P(x)\,\mathrm{d}x}" data-display="true"><code>v(x)=e^{\int P(x)\,\mathrm{d}x}</code></span>

### 数值解
{: #section-4 }


**欧拉方法（Euler's Method）：**
用已知的 <span class="course-math" data-tex="y=f(x)" data-display="false"><code>y=f(x)</code></span> 上的一个点，带入一阶常微分方程来估计附近的其他点： <span class="course-math" data-tex="\Delta y=\frac{\mathrm{d}y}{\mathrm{d}x}\Delta x" data-display="false"><code>\Delta y=\frac{\mathrm{d}y}{\mathrm{d}x}\Delta x</code></span>，其中 <span class="course-math" data-tex="\Delta x" data-display="false"><code>\Delta x</code></span> 叫做估计的步长 (Step Size)。


### 杂类
{: #section-5 }


自治微分方程 （Autonomous Differential Equation），指  <span class="course-math" data-tex="\frac{\mathrm{d}y}{\mathrm{d}x}=f(y)" data-display="false"><code>\frac{\mathrm{d}y}{\mathrm{d}x}=f(y)</code></span>。
使得这里的 <span class="course-math" data-tex="f(y)=0" data-display="false"><code>f(y)=0</code></span> 的根叫做平衡点（Equilibrium Points）。
若平衡点 <span class="course-math" data-tex="y_{0}" data-display="false"><code>y_{0}</code></span> 满足 在 <span class="course-math" data-tex="y_0" data-display="false"><code>y_0</code></span> 的左侧邻域内 <span class="course-math" data-tex="f(y)&gt;0" data-display="false"><code>f(y)&gt;0</code></span>、右侧邻域内 <span class="course-math" data-tex="f(y)&lt;0" data-display="false"><code>f(y)&lt;0</code></span>，则 <span class="course-math" data-tex="y_{0}" data-display="false"><code>y_{0}</code></span> 被称为稳定（Stable）平衡点，因为稍微偏离 <span class="course-math" data-tex="y_{0}" data-display="false"><code>y_{0}</code></span> 的 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 都会回到 <span class="course-math" data-tex="y_{0}" data-display="false"><code>y_{0}</code></span> 。
若左侧 <span class="course-math" data-tex="f(y)&lt;0" data-display="false"><code>f(y)&lt;0</code></span>、右侧 <span class="course-math" data-tex="f(y)&gt;0" data-display="false"><code>f(y)&gt;0</code></span>，则有不稳定（Unstable）平衡点，稍微偏离 <span class="course-math" data-tex="y_{0}" data-display="false"><code>y_{0}</code></span> 的 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 都会越跑越远。
{% endraw %}
