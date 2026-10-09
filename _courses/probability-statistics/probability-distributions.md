---
title: "Probability Distributions - 概率分布"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
created_at: "2026-07-25T14:57:40+08:00"
updated_at: "2026-10-09T16:58:39+08:00"
reference: false
order: 3
layout: "course"
permalink: "/courses/probability-statistics/probability-distributions/"
course_page: true
doc_type: "note"
description: "概率与统计 · Probability Distributions - 概率分布"
excerpt: "概率与统计 · Probability Distributions - 概率分布"
---

{% raw %}

## 离散概率分布
{: #section-1 }



### 伯努利分布（Bernoulli Distribution）
{: #section-2 }


伯努利试验（Bernoulli Trial）：只有成功和失败两种结果的试验。
若成功概率为 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>，定义随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>，满足 <span class="course-math" data-tex="P(X=1)=p, P(X=0)=1-p" data-display="false"><code>P(X=1)=p, P(X=0)=1-p</code></span>，那么说 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 服从伯努利分布： <span class="course-math" data-tex="X\sim\text{Bernoulli}(p)" data-display="false"><code>X\sim\text{Bernoulli}(p)</code></span>。
- <span class="course-math" data-tex="\mathrm{E}(X)=p" data-display="false"><code>\mathrm{E}(X)=p</code></span>
- <span class="course-math" data-tex="\operatorname{Var}(X)=p(1-p)" data-display="false"><code>\operatorname{Var}(X)=p(1-p)</code></span>


### 二项分布（Binomial Distribution）
{: #section-3 }


重复 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次相互独立的伯努利试验（n-fold bernoulli trial），每次成功概率为 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>，则成功的次数服从二项分布，记作 <span class="course-math" data-tex="X\sim B(n,p)" data-display="false"><code>X\sim B(n,p)</code></span>（或 <span class="course-math" data-tex="X\sim\text{Binomial}(n,p)" data-display="false"><code>X\sim\text{Binomial}(n,p)</code></span>），其概率质量函数（PMF）为：
<span class="course-math course-math-display" data-tex="P(X=x)=\binom{n}{x}p^x(1-p)^{n-x},\quad x=0,1,\dots,n" data-display="true"><code>P(X=x)=\binom{n}{x}p^x(1-p)^{n-x},\quad x=0,1,\dots,n</code></span>
且有：
- <span class="course-math" data-tex="\mathrm{E}(X)=np" data-display="false"><code>\mathrm{E}(X)=np</code></span>
- <span class="course-math" data-tex="\operatorname{Var}(X)=np(1-p)" data-display="false"><code>\operatorname{Var}(X)=np(1-p)</code></span>
- <span class="course-math" data-tex="\operatorname{SD}(X)=\sqrt{ np(1-p) }" data-display="false"><code>\operatorname{SD}(X)=\sqrt{ np(1-p) }</code></span>

### 几何分布（Geometric Distribution）
{: #section-4 }


重复相互独立的伯努利试验（成功概率 <span class="course-math" data-tex="0&lt;p\leq1" data-display="false"><code>0&lt;p\leq1</code></span>），直到成功，把试验的次数记为随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>，那么我们说 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 服从几何分布，记作 <span class="course-math" data-tex="X\sim\text{Geometric}(p)" data-display="false"><code>X\sim\text{Geometric}(p)</code></span>，其概率质量函数（PMF）为：
<span class="course-math course-math-display" data-tex="P(X=x)=p(1-p)^{x-1}, x=1,2,\dots" data-display="true"><code>P(X=x)=p(1-p)^{x-1}, x=1,2,\dots</code></span>
且有：
- <span class="course-math" data-tex="\mathrm{E}(X)=\frac{1}{p}" data-display="false"><code>\mathrm{E}(X)=\frac{1}{p}</code></span>
- <span class="course-math" data-tex="\operatorname{Var}(X)= \frac{1-p}{p^{2}}" data-display="false"><code>\operatorname{Var}(X)= \frac{1-p}{p^{2}}</code></span>
- 无记忆性（Memoryless property）： <span class="course-math" data-tex="P(X&gt;m+n\mid X&gt;m)=P(X&gt;n)" data-display="false"><code>P(X&gt;m+n\mid X&gt;m)=P(X&gt;n)</code></span>，其中 <span class="course-math" data-tex="m,n" data-display="false"><code>m,n</code></span> 为非负整数，且条件事件的概率非零。

### 泊松分布（Poisson Distribution）
{: #section-5 }


定义 <span class="course-math" data-tex="X\sim\text{Poisson}(\lambda)" data-display="false"><code>X\sim\text{Poisson}(\lambda)</code></span> 若它的 PMF 是：
<span class="course-math course-math-display" data-tex="P(X=x)= \frac{\lambda^{x}}{x!}e^{-\lambda}" data-display="true"><code>P(X=x)= \frac{\lambda^{x}}{x!}e^{-\lambda}</code></span>
其中常数 <span class="course-math" data-tex="\lambda&gt;0" data-display="false"><code>\lambda&gt;0</code></span>，<span class="course-math" data-tex="x=0,1,2,\dots" data-display="false"><code>x=0,1,2,\dots</code></span>。
泊松分布可以刻画这样的事件：
- 在一个特定的时空范围内。
- 事件的发生的频率是均匀的（发生的平均次数和时间区间长度成正比）。
- 事件发生之间是独立的。
例如，统计一百年内，每年在某个十字路口发生车祸的次数。
有：
- <span class="course-math" data-tex="\mathrm{E}(X)=\lambda" data-display="false"><code>\mathrm{E}(X)=\lambda</code></span>
- <span class="course-math" data-tex="\operatorname{Var}(X)=\lambda" data-display="false"><code>\operatorname{Var}(X)=\lambda</code></span>

泊松分布可以看成二项分布的极限情况：把时间区间 <span class="course-math" data-tex="[0,1]" data-display="false"><code>[0,1]</code></span> 分成 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 份，每份上发生的概率为 <span class="course-math" data-tex="\lambda / n" data-display="false"><code>\lambda / n</code></span>，那么事件发生的次数 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 实际上服从二项分布 <span class="course-math" data-tex="\text{Binomial}(n,\lambda / n)" data-display="false"><code>\text{Binomial}(n,\lambda / n)</code></span>。而当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span> 时：
<span class="course-math course-math-display" data-tex="P(X=x)=\lim_{ n \to \infty } \binom{n}{x}\left( \frac{\lambda}{n} \right)^{x}\left( 1-\frac{\lambda}{n} \right)^{n-x}= \frac{\lambda^{x}}{x!}e^{-\lambda}" data-display="true"><code>P(X=x)=\lim_{ n \to \infty } \binom{n}{x}\left( \frac{\lambda}{n} \right)^{x}\left( 1-\frac{\lambda}{n} \right)^{n-x}= \frac{\lambda^{x}}{x!}e^{-\lambda}</code></span>
（这个极限被称为泊松定理，The Poisson Theorem）
经验表明，当 <span class="course-math" data-tex="n&gt;100" data-display="false"><code>n&gt;100</code></span>，<span class="course-math" data-tex="p&lt;0.05" data-display="false"><code>p&lt;0.05</code></span> 时，可以用泊松分布来近似二项分布。

### 其他
{: #section-6 }


**超几何分布（Hypergeometric）：** <span class="course-math" data-tex="X\sim h(n,N,M)" data-display="false"><code>X\sim h(n,N,M)</code></span>。从含 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 个成功元素的 <span class="course-math" data-tex="N" data-display="false"><code>N</code></span> 个元素中，不放回抽取 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个，<span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 为抽到的成功元素数；<span class="course-math" data-tex="\max(0,n-(N-M))\leq k\leq\min(n,M)" data-display="false"><code>\max(0,n-(N-M))\leq k\leq\min(n,M)</code></span>。
<span class="course-math course-math-display" data-tex="P(X=k)= \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{M}{n}}" data-display="true"><code>P(X=k)= \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{M}{n}}</code></span>
**负二项分布（Negative binomial）** <span class="course-math" data-tex="X\sim\text{Nb}(r,p)" data-display="false"><code>X\sim\text{Nb}(r,p)</code></span>。这里 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 计数直到第 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 次成功所需的总试验次数，<span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 为正整数，<span class="course-math" data-tex="0&lt;p\leq1" data-display="false"><code>0&lt;p\leq1</code></span>，<span class="course-math" data-tex="k=r,r+1,\dots" data-display="false"><code>k=r,r+1,\dots</code></span>；若改为计数失败次数，公式和期望也要相应平移。
<span class="course-math course-math-display" data-tex="P(X=k)= \binom{k-1}{r-1} p^{r} \times (1-p)^{k-r}" data-display="true"><code>P(X=k)= \binom{k-1}{r-1} p^{r} \times (1-p)^{k-r}</code></span>

## 连续概率分布
{: #section-7 }



### 连续均匀分布（Continuous Uniform Distribution）
{: #section-8 }


设 <span class="course-math" data-tex="a&lt;b" data-display="false"><code>a&lt;b</code></span>。“选择一个 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 之间的随机数” 可翻译为 “从 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上的连续均匀分布观察到一个值”。
PDF：
<span class="course-math course-math-display" data-tex="f(x)=\begin{cases}&#10;\frac{1}{b-a}, &amp; a \leq x \leq b, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}" data-display="true"><code>f(x)=\begin{cases}&#10;\frac{1}{b-a}, &amp; a \leq x \leq b, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}</code></span>
随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上均匀分布： <span class="course-math" data-tex="X\sim U[a,b]" data-display="false"><code>X\sim U[a,b]</code></span> 。
CDF：
<span class="course-math course-math-display" data-tex="F(x)=\begin{cases}&#10;0, &amp; x\leq a, \\&#10;\frac{x-a}{b-a}, &amp; a&lt; x&lt; b, \\&#10;1, &amp; x\geq b,&#10;\end{cases}" data-display="true"><code>F(x)=\begin{cases}&#10;0, &amp; x\leq a, \\&#10;\frac{x-a}{b-a}, &amp; a&lt; x&lt; b, \\&#10;1, &amp; x\geq b,&#10;\end{cases}</code></span>
期望与方差：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)= \frac{a+b}{2}" data-display="true"><code>\mathrm{E}(X)= \frac{a+b}{2}</code></span>
<span class="course-math course-math-display" data-tex="\operatorname{Var}(X)= \frac{(b-a)^{2}}{12}" data-display="true"><code>\operatorname{Var}(X)= \frac{(b-a)^{2}}{12}</code></span>


### 指数分布（Exponential Distribution）
{: #section-9 }


设 <span class="course-math" data-tex="\lambda&gt;0" data-display="false"><code>\lambda&gt;0</code></span>。
PDF：
<span class="course-math course-math-display" data-tex="f(x)=\begin{cases}&#10;\lambda e^{-\lambda x}, &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}" data-display="true"><code>f(x)=\begin{cases}&#10;\lambda e^{-\lambda x}, &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}</code></span>
CDF：
<span class="course-math course-math-display" data-tex="F(x)=\begin{cases}&#10;1-e^{-\lambda x},  &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}" data-display="true"><code>F(x)=\begin{cases}&#10;1-e^{-\lambda x},  &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Distributions%20-%20%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83.png' | relative_url }}{% raw %}" alt="Probability Distributions - 概率分布" width="197" height="301" loading="lazy" decoding="async">
通常，指数分布用于描述到某个事件发生为止经过的时间。
- 指数分布可以描述齐次泊松过程中相邻事件之间的等待时间。
- 齐次泊松过程（Poisson Process）：计数过程 <span class="course-math" data-tex="N(t)" data-display="false"><code>N(t)</code></span> 满足 <span class="course-math" data-tex="N(0)=0" data-display="false"><code>N(0)=0</code></span>，不相交时间区间内的事件发生次数相互独立，且长度为 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 的区间内发生次数服从 <span class="course-math" data-tex="\text{Poisson}(\lambda t)" data-display="false"><code>\text{Poisson}(\lambda t)</code></span>。<span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 是恒定的平均发生速率，并不表示事件等时间间隔发生。
- 设 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 是泊松过程中，到事件发生为止经过的时间，则
<span class="course-math course-math-display" data-tex="P(X\leq t) =1-P(X&gt;t)=1-P(\text{no event occurred in } [0,t])=1- \frac{(\lambda t)^{0}}{0!}e^{-\lambda t}=1-e^{-\lambda t}" data-display="true"><code>P(X\leq t) =1-P(X&gt;t)=1-P(\text{no event occurred in } [0,t])=1- \frac{(\lambda t)^{0}}{0!}e^{-\lambda t}=1-e^{-\lambda t}</code></span>
- 也就是说 <span class="course-math" data-tex="X\sim\text{Exp}(\lambda)" data-display="false"><code>X\sim\text{Exp}(\lambda)</code></span>。这个 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 是泊松过程的速率；长度为 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 的区间对应的泊松分布参数为 <span class="course-math" data-tex="\lambda t" data-display="false"><code>\lambda t</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Distributions%20-%20%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83-1.png' | relative_url }}{% raw %}" alt="Probability Distributions - 概率分布-1" width="1802" height="242" loading="lazy" decoding="async">
期望与方差：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)= \frac{1}{\lambda}" data-display="true"><code>\mathrm{E}(X)= \frac{1}{\lambda}</code></span>
<span class="course-math course-math-display" data-tex="\operatorname{Var}(X)= \frac{1}{\lambda^{2}}" data-display="true"><code>\operatorname{Var}(X)= \frac{1}{\lambda^{2}}</code></span>
这个推导需要用到分部积分。可以从频率和周期的关系来理解（泊松分布的期望是 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>）。
指数分布具有无记忆性（Memoryless property）：
<span class="course-math course-math-display" data-tex="P(X&gt;s+t\mid X&gt;s)=P(X&gt;t)" data-display="true"><code>P(X&gt;s+t\mid X&gt;s)=P(X&gt;t)</code></span>
若 <span class="course-math" data-tex="X\sim \mathrm{Exp}(\lambda)" data-display="false"><code>X\sim \mathrm{Exp}(\lambda)</code></span>，那么 <span class="course-math" data-tex="T=\lceil X \rceil" data-display="false"><code>T=\lceil X \rceil</code></span> 服从参数 <span class="course-math" data-tex="p=1-e^{-\lambda}" data-display="false"><code>p=1-e^{-\lambda}</code></span> 的 **几何分布**（计数取值 <span class="course-math" data-tex="1,2,\dots" data-display="false"><code>1,2,\dots</code></span>）。这是因为：
<span class="course-math course-math-display" data-tex="P(T=k)=P(k-1&lt;X\leq k)=F(k)-F(k-1)=e^{-\lambda (k-1)}-e^{-\lambda k}=(1-e^{-\lambda}) (e^{-\lambda})^{k-1}" data-display="true"><code>P(T=k)=P(k-1&lt;X\leq k)=F(k)-F(k-1)=e^{-\lambda (k-1)}-e^{-\lambda k}=(1-e^{-\lambda}) (e^{-\lambda})^{k-1}</code></span>


### 正态分布（Normal Distribution）
{: #section-10 }


也称为高斯分布（Gaussian Distribution）。
<span class="course-math" data-tex="X\sim N(\mu,\sigma^{2})" data-display="false"><code>X\sim N(\mu,\sigma^{2})</code></span>，其中 <span class="course-math" data-tex="\sigma&gt;0" data-display="false"><code>\sigma&gt;0</code></span>。PDF：
<span class="course-math course-math-display" data-tex="f(x)= \frac{1}{\sqrt{ 2\pi }\sigma}e^{- \frac{(x-\mu)^{2}}{2\sigma^{2}}}" data-display="true"><code>f(x)= \frac{1}{\sqrt{ 2\pi }\sigma}e^{- \frac{(x-\mu)^{2}}{2\sigma^{2}}}</code></span>
若 <span class="course-math" data-tex="\mu=0,\sigma=1" data-display="false"><code>\mu=0,\sigma=1</code></span>，为标准正态分布 <span class="course-math" data-tex="X\sim N(0,1)" data-display="false"><code>X\sim N(0,1)</code></span>，其 PDF：
<span class="course-math course-math-display" data-tex="\phi(x)= \frac{1}{\sqrt{ 2\pi }} e^{- \frac{x^{2}}{2}}" data-display="true"><code>\phi(x)= \frac{1}{\sqrt{ 2\pi }} e^{- \frac{x^{2}}{2}}</code></span>
标准正态分布的 CDF 没有初等函数形式的表达式，但它很常用，所以我们记它的 CDF  为 <span class="course-math" data-tex="\Phi(x)" data-display="false"><code>\Phi(x)</code></span>：
<span class="course-math course-math-display" data-tex="\Phi(x)=P(X\leq x)=\int_{-\infty}^{x} \frac{1}{\sqrt{ 2\pi }} e^{-u^{2}/2}\,\mathrm{d}u" data-display="true"><code>\Phi(x)=P(X\leq x)=\int_{-\infty}^{x} \frac{1}{\sqrt{ 2\pi }} e^{-u^{2}/2}\,\mathrm{d}u</code></span>
其 PDF 是一个钟形曲线：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Distributions%20-%20%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83-2.png' | relative_url }}{% raw %}" alt="Probability Distributions - 概率分布-2" width="381" height="263" loading="lazy" decoding="async">
对 <span class="course-math" data-tex="X\sim N(\mu,\sigma^2)" data-display="false"><code>X\sim N(\mu,\sigma^2)</code></span>，可以做标准化：令 <span class="course-math" data-tex="Z= \frac{X-\mu}{\sigma}" data-display="false"><code>Z= \frac{X-\mu}{\sigma}</code></span>，则 <span class="course-math" data-tex="Z\sim N(0,1)" data-display="false"><code>Z\sim N(0,1)</code></span>。
期望与方差：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\mu" data-display="true"><code>\mathrm{E}(X)=\mu</code></span>
<span class="course-math course-math-display" data-tex="\operatorname{Var}(X)=\sigma^{2}" data-display="true"><code>\operatorname{Var}(X)=\sigma^{2}</code></span>
{% endraw %}
