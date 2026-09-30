---
title: "Integral Techniques - 积分技巧"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-11-07T10:47:03+08:00"
updated_at: "2026-01-30T15:30:16+08:00"
reference: false
order: 3
layout: "course"
permalink: "/courses/calculus/integral-techniques/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Integral Techniques - 积分技巧"
excerpt: "高等数学（上）/（下） · Integral Techniques - 积分技巧"
---

{% raw %}
前置： <a href="{% endraw %}{{ '/courses/calculus/antiderivative-and-integral/' | relative_url }}{% raw %}">Antiderivative and Integral - 积分</a>

### 杂类
{: #section-1 }



#### 定积分
{: #section-2 }

- 注意是否区间关于 0 对称而且被积函数是奇函数。
- 区间再现： <span class="course-math course-math-display" data-tex="\int^{\pi/2}_{0}f(\sin x) dx=\int^{\pi/2}_{0}f(\cos x)dx" data-display="true"><code>\int^{\pi/2}_{0}f(\sin x) dx=\int^{\pi/2}_{0}f(\cos x)dx</code></span> 
-  更一般的，<span class="course-math course-math-display" data-tex="\int^{a}_{0}f(x)dx=\frac{1}{2}  \int^{a}_{0} \left[f(x)+f(a-x)\right]dx" data-display="true"><code>\int^{a}_{0}f(x)dx=\frac{1}{2}  \int^{a}_{0} \left[f(x)+f(a-x)\right]dx</code></span>
- 类似的，<span class="course-math course-math-display" data-tex="\int^{a}_{\frac{1}{a}} f(x)dx=\frac{1}{2} \int^{a}_{\frac{1}{a}} \left[f(x)+\frac{1}{x^2}f\left( \frac{1}{x} \right)\right]dx" data-display="true"><code>\int^{a}_{\frac{1}{a}} f(x)dx=\frac{1}{2} \int^{a}_{\frac{1}{a}} \left[f(x)+\frac{1}{x^2}f\left( \frac{1}{x} \right)\right]dx</code></span>

#### 不定积分
{: #section-3 }

- <span class="course-math" data-tex="\frac{1}{a^2+x^2}, \frac{1}{\sqrt{1-ax^2}}, \frac{1}{&#124;ax&#124;\sqrt{a^2x^2-1}}\dots" data-display="false"><code>\frac{1}{a^2+x^2}, \frac{1}{\sqrt{1-ax^2}}, \frac{1}{&#124;ax&#124;\sqrt{a^2x^2-1}}\dots</code></span> 考虑反三角函数
- 三角函数积分公式表：<a href="{% endraw %}{{ '/courses/references/integral-1/' | relative_url }}{% raw %}">Integral-1</a>
- Wallis 公式：
<span class="course-math course-math-display" data-tex="\int^{\pi/2}_{0}\sin^nxdx=\int^{\pi/2}_{0}\cos^nxdx=\begin{cases}&#10;\frac{n-1}{n} \cdot  \frac{n-3}{n-2}\dots \frac{2}{3}\cdot 1 &amp; (\text{n为奇数})\\&#10;\frac{n-1}{n}\cdot \frac{n-3}{n-2} \dots \frac{1}{2} \cdot \frac{\pi}{2} &amp; (\text{n为偶数})&#10;\end{cases}" data-display="true"><code>\int^{\pi/2}_{0}\sin^nxdx=\int^{\pi/2}_{0}\cos^nxdx=\begin{cases}&#10;\frac{n-1}{n} \cdot  \frac{n-3}{n-2}\dots \frac{2}{3}\cdot 1 &amp; (\text{n为奇数})\\&#10;\frac{n-1}{n}\cdot \frac{n-3}{n-2} \dots \frac{1}{2} \cdot \frac{\pi}{2} &amp; (\text{n为偶数})&#10;\end{cases}</code></span>
- 对分子为多项式，分母为二次式的平方根的形式，有如下的恒等式：<span class="course-math course-math-display" data-tex="\int \frac{P_{n}(x)}{\sqrt{ ax^2+bx+c }} dx=Q_{n-1}(x)\sqrt{ ax^2+bx+c }  + \int \frac{K}{\sqrt{ ax^2+bx+c } } dx" data-display="true"><code>\int \frac{P_{n}(x)}{\sqrt{ ax^2+bx+c }} dx=Q_{n-1}(x)\sqrt{ ax^2+bx+c }  + \int \frac{K}{\sqrt{ ax^2+bx+c } } dx</code></span> 其中 <span class="course-math" data-tex="P_{n}" data-display="false"><code>P_{n}</code></span> 为一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次多项式，<span class="course-math" data-tex="Q_{n-1}" data-display="false"><code>Q_{n-1}</code></span> 为一个 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 次多项式，可以通过待定系数法确定。这个恒等式可以通过求导证明。
- 对于这个形式，使用倒数代换 <span class="course-math" data-tex="u=\frac{1}{ax+b}" data-display="false"><code>u=\frac{1}{ax+b}</code></span> 往往能消掉一次项：
  <span class="course-math course-math-display" data-tex="\int \frac{1}{(ax+b)\sqrt{ cx^2+dx+e }} dx" data-display="true"><code>\int \frac{1}{(ax+b)\sqrt{ cx^2+dx+e }} dx</code></span>
- 以下公式最好直接背，因为三角换元容易造成难以处理的绝对值：
  <span class="course-math course-math-display" data-tex="\frac{1}{\sqrt{ x^2\pm a^2}} = \ln&#124;x+\sqrt{ x^2\pm a^2 }&#124;" data-display="true"><code>\frac{1}{\sqrt{ x^2\pm a^2}} = \ln&#124;x+\sqrt{ x^2\pm a^2 }&#124;</code></span>

### 换元（Substitution）
{: #section-4 }



#### 第一类（凑微分）
{: #section-5 }

<span class="course-math course-math-display" data-tex="\int g(f(x))\times f&#x27;(x)dx \xlongequal{u=f(x)} \int g(u)du" data-display="true"><code>\int g(f(x))\times f&#x27;(x)dx \xlongequal{u=f(x)} \int g(u)du</code></span>
关于三角函数的经验凑微分技巧：
1. 若将 <span class="course-math" data-tex="\sin x" data-display="false"><code>\sin x</code></span> 换成 <span class="course-math" data-tex="-\sin x" data-display="false"><code>-\sin x</code></span> 后，原式变为其相反数，则凑 <span class="course-math" data-tex="\sin x dx=-d\cos x" data-display="false"><code>\sin x dx=-d\cos x</code></span>。
2. 若将 <span class="course-math" data-tex="\cos x" data-display="false"><code>\cos x</code></span> 换成 <span class="course-math" data-tex="-\cos x" data-display="false"><code>-\cos x</code></span> 后，原式变为其相反数，则凑 <span class="course-math" data-tex="\cos xdx=d\sin x" data-display="false"><code>\cos xdx=d\sin x</code></span>。
3. 若将 <span class="course-math" data-tex="\sin x" data-display="false"><code>\sin x</code></span> 和 <span class="course-math" data-tex="\cos x" data-display="false"><code>\cos x</code></span> 换成 <span class="course-math" data-tex="-\sin x" data-display="false"><code>-\sin x</code></span> 和 <span class="course-math" data-tex="-\cos x" data-display="false"><code>-\cos x</code></span> 后，原式不变，则凑 <span class="course-math" data-tex="\sec^2dx=d\tan x" data-display="false"><code>\sec^2dx=d\tan x</code></span>。
4. 也可考虑万能公式。

#### 第二类（去根号）
{: #section-6 }


<span class="course-math course-math-display" data-tex="\int f(x) dx \xlongequal{x=g(t)} \int f(g(t)) g&#x27;(t) dt" data-display="true"><code>\int f(x) dx \xlongequal{x=g(t)} \int f(g(t)) g&#x27;(t) dt</code></span>
1. 积分式中有 <span class="course-math" data-tex="\sqrt{ ax+b }" data-display="false"><code>\sqrt{ ax+b }</code></span> 时，换元 <span class="course-math" data-tex="x=\frac{t^2-b}{a}" data-display="false"><code>x=\frac{t^2-b}{a}</code></span>，则 <span class="course-math" data-tex="dx=\frac{2t}{a}dt" data-display="false"><code>dx=\frac{2t}{a}dt</code></span>。
2. <span class="course-math" data-tex="\sqrt{ a^2-x^2 }" data-display="false"><code>\sqrt{ a^2-x^2 }</code></span> 考虑三角换元 <span class="course-math" data-tex="x=a\sin\theta" data-display="false"><code>x=a\sin\theta</code></span>。
3. <span class="course-math" data-tex="\sqrt{ a^2+x^2 }" data-display="false"><code>\sqrt{ a^2+x^2 }</code></span> 考虑三角换元 <span class="course-math" data-tex="x=a\tan\theta" data-display="false"><code>x=a\tan\theta</code></span>。
4. <span class="course-math" data-tex="\sqrt{ x^2-a^2 }" data-display="false"><code>\sqrt{ x^2-a^2 }</code></span> 考虑三角换元 <span class="course-math" data-tex="x=a\sec \theta" data-display="false"><code>x=a\sec \theta</code></span>。
5. 上面这些三角换元不必死记硬背公式，画一个含 <span class="course-math" data-tex="\theta, a, x" data-display="false"><code>\theta, a, x</code></span> 的直角三角形即可直观看出关系。

### 分部积分（Integration by Parts）
{: #section-7 }


<span class="course-math course-math-display" data-tex="\int udv=uv-\int vdu" data-display="true"><code>\int udv=uv-\int vdu</code></span>
或
<span class="course-math course-math-display" data-tex="\int uv&#x27;dx =uv-\int vu&#x27;dx" data-display="true"><code>\int uv&#x27;dx =uv-\int vu&#x27;dx</code></span>
用在函数可分解成两个乘积，其中一个容易求导，另一个容易求原函数时尝试。
经验顺序：**反对幂三指**，排在后面的选为 <span class="course-math" data-tex="v&#x27;" data-display="false"><code>v&#x27;</code></span>。

特别的，
<span class="course-math course-math-display" data-tex="\int f(x)dx=xf(x)-\int xdf(x)" data-display="true"><code>\int f(x)dx=xf(x)-\int xdf(x)</code></span>
也就是说如果一个函数的反函数容易积分，则分部积分法可用。
表格法：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Integral-1.png' | relative_url }}{% raw %}" alt="Integral-1" loading="lazy">

### 部分分式（Integration Using Partial Fractions）
{: #section-8 }


当 <span class="course-math" data-tex="F(x)" data-display="false"><code>F(x)</code></span> 的次数小于 <span class="course-math" data-tex="G(x)" data-display="false"><code>G(x)</code></span> 时，可以将这个有理分式拆开：

<span class="course-math course-math-display" data-tex="\frac{F(x)}{G(x)=\prod_{i} (x-x_{i})^{a_{i}}}=\sum_{i} \sum _{1\leq k\leq a_{i}} \frac{t_{i}}{(x-x_{0})^k}" data-display="true"><code>\frac{F(x)}{G(x)=\prod_{i} (x-x_{i})^{a_{i}}}=\sum_{i} \sum _{1\leq k\leq a_{i}} \frac{t_{i}}{(x-x_{0})^k}</code></span>
注意如果分母包含不可约的二次因式如 <span class="course-math" data-tex="x^2+x+1" data-display="false"><code>x^2+x+1</code></span>，那么对它拆的时候分子待定系数为 <span class="course-math" data-tex="Ax+B" data-display="false"><code>Ax+B</code></span>，而不是简单的常数。
任何实系数多项式都可以分解成若干一次因式和二次因式的乘积，例如
<span class="course-math course-math-display" data-tex="\frac{1}{x^4+1}=\frac{1}{(x^2+1-\sqrt{ 2 }x)(x^2+1+\sqrt{ 2 }x)}" data-display="true"><code>\frac{1}{x^4+1}=\frac{1}{(x^2+1-\sqrt{ 2 }x)(x^2+1+\sqrt{ 2 }x)}</code></span>
然后可以用部分分式来积分。
{% endraw %}
