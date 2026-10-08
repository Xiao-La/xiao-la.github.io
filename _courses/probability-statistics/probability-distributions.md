---
title: "Probability Distributions - 概率分布"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
created_at: "2026-07-25T14:57:40+08:00"
updated_at: "2026-10-08T20:59:37+08:00"
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
- <span class="course-math" data-tex="\mathrm{Var}(X)=p(1-p)" data-display="false"><code>\mathrm{Var}(X)=p(1-p)</code></span>


### 二项分布（Binomial Distribution）
{: #section-3 }


重复 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次相互独立的伯努利试验（n-fold bernoulli trial），每次成功概率为 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>，则成功的次数服从二项分布，记作 <span class="course-math" data-tex="X\sim B(n,p)" data-display="false"><code>X\sim B(n,p)</code></span>（或 <span class="course-math" data-tex="X\sim\text{Binomial}(n,p)" data-display="false"><code>X\sim\text{Binomial}(n,p)</code></span>），其概率质量函数（PMF）为：
<span class="course-math course-math-display" data-tex="P(X=x)=\binom{n}{x}p^x(1-p)^{n-x}" data-display="true"><code>P(X=x)=\binom{n}{x}p^x(1-p)^{n-x}</code></span>
且有：
- <span class="course-math" data-tex="\mathrm{E}(X)=np" data-display="false"><code>\mathrm{E}(X)=np</code></span>
- <span class="course-math" data-tex="\mathrm{Var}(X)=np(1-p)" data-display="false"><code>\mathrm{Var}(X)=np(1-p)</code></span>
- <span class="course-math" data-tex="\mathrm{SD}(X)=\sqrt{ np(1-p) }" data-display="false"><code>\mathrm{SD}(X)=\sqrt{ np(1-p) }</code></span>

### 几何分布（Geometric Distribution）
{: #section-4 }


重复相互独立的伯努利试验（概率为 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>），直到成功，把试验的次数记为随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>，那么我们说 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 服从几何分布，记作 <span class="course-math" data-tex="X\sim\text{Geometric}(p)" data-display="false"><code>X\sim\text{Geometric}(p)</code></span>，其概率质量函数（PMF）为：
<span class="course-math course-math-display" data-tex="P(X=x)=p(1-p)^{x-1}, x=1,2,\dots" data-display="true"><code>P(X=x)=p(1-p)^{x-1}, x=1,2,\dots</code></span>
且有：
- <span class="course-math" data-tex="\mathrm{E}(X)=\frac{1}{p}" data-display="false"><code>\mathrm{E}(X)=\frac{1}{p}</code></span>
- <span class="course-math" data-tex="\mathrm{Var}(X)= \frac{1-p}{p^{2}}" data-display="false"><code>\mathrm{Var}(X)= \frac{1-p}{p^{2}}</code></span>
- 无记忆性（Memoryless property）： <span class="course-math" data-tex="P(X&gt;m+n&#124;X&gt;m)=P(X&gt;n)" data-display="false"><code>P(X&gt;m+n&#124;X&gt;m)=P(X&gt;n)</code></span>。

### 泊松分布（Poisson Distribution）
{: #section-5 }


定义 <span class="course-math" data-tex="X\sim\text{Poisson}(\lambda)" data-display="false"><code>X\sim\text{Poisson}(\lambda)</code></span> 若它的 PMF 是：
<span class="course-math course-math-display" data-tex="P(X=x)= \frac{\lambda^{x}}{x!}e^{-\lambda}" data-display="true"><code>P(X=x)= \frac{\lambda^{x}}{x!}e^{-\lambda}</code></span>
其中常数 <span class="course-math" data-tex="\lambda&gt;0" data-display="false"><code>\lambda&gt;0</code></span>。
泊松分布可以刻画这样的事件：
- 在一个特定的时空范围内。
- 事件的发生的频率是均匀的（发生的平均次数和时间区间长度成正比）。
- 事件发生之间是独立的。
例如，统计一百年内，每年在某个十字路口发生车祸的次数。
有：
- <span class="course-math" data-tex="\mathrm{E}(X)=\lambda" data-display="false"><code>\mathrm{E}(X)=\lambda</code></span>
- <span class="course-math" data-tex="\mathrm{Var}(X)=\lambda" data-display="false"><code>\mathrm{Var}(X)=\lambda</code></span>

泊松分布可以看成二项分布的极限情况：把时间区间 <span class="course-math" data-tex="[0,1]" data-display="false"><code>[0,1]</code></span> 分成 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 份，每份上发生的概率为 <span class="course-math" data-tex="\lambda / n" data-display="false"><code>\lambda / n</code></span>，那么事件发生的次数 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 实际上服从二项分布 <span class="course-math" data-tex="\text{Binomial}(n,\lambda / n)" data-display="false"><code>\text{Binomial}(n,\lambda / n)</code></span>。而当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span> 时：
<span class="course-math course-math-display" data-tex="P(X=x)=\lim_{ n \to \infty } \binom{n}{x}\left( \frac{\lambda}{n} \right)^{x}\left( 1-\frac{\lambda}{n} \right)^{n-x}= \frac{\lambda^{x}}{x!}e^{-\lambda}" data-display="true"><code>P(X=x)=\lim_{ n \to \infty } \binom{n}{x}\left( \frac{\lambda}{n} \right)^{x}\left( 1-\frac{\lambda}{n} \right)^{n-x}= \frac{\lambda^{x}}{x!}e^{-\lambda}</code></span>
（这个极限被称为泊松定理，The Poisson Theorem）
经验表明，当 <span class="course-math" data-tex="n&gt;100" data-display="false"><code>n&gt;100</code></span>，<span class="course-math" data-tex="p&lt;0.05" data-display="false"><code>p&lt;0.05</code></span> 时，可以用泊松分布来近似二项分布。

### 其他
{: #section-6 }


**超几何分布（Hypergeometric）：** <span class="course-math" data-tex="X\sim h(n,N,M)" data-display="false"><code>X\sim h(n,N,M)</code></span> 
<span class="course-math course-math-display" data-tex="P(X=k)= \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{M}{n}}" data-display="true"><code>P(X=k)= \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{M}{n}}</code></span> 
**负二项分布（Negative binomial）** <span class="course-math" data-tex="X\sim\text{Nb}(r,p)" data-display="false"><code>X\sim\text{Nb}(r,p)</code></span> 
<span class="course-math course-math-display" data-tex="P(X=k)= \binom{k-1}{r-1} p^{r} \times (1-p)^{k-r}" data-display="true"><code>P(X=k)= \binom{k-1}{r-1} p^{r} \times (1-p)^{k-r}</code></span>

## 连续概率分布
{: #section-7 }



### 连续均匀分布（Continuous Uniform Distribution）
{: #section-8 }


“选择一个 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 之间的随机数” 可翻译为 “从 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上的连续均匀分布观察到一个值”。
PDF：
<span class="course-math course-math-display" data-tex="f(x)=\begin{cases}&#10;\frac{1}{b-a}, &amp; a \leq x \leq b, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}" data-display="true"><code>f(x)=\begin{cases}&#10;\frac{1}{b-a}, &amp; a \leq x \leq b, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}</code></span>
随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 在 <span class="course-math" data-tex="[a,b]" data-display="false"><code>[a,b]</code></span> 上均匀分布： <span class="course-math" data-tex="X\sim U[a,b]" data-display="false"><code>X\sim U[a,b]</code></span> 。
CDF：
<span class="course-math course-math-display" data-tex="F(x)=\begin{cases}&#10;0, &amp; x\leq a, \\&#10;\frac{x-a}{b-a}, &amp; a&lt; x&lt; b, \\&#10;1, &amp; x\geq b,&#10;\end{cases}" data-display="true"><code>F(x)=\begin{cases}&#10;0, &amp; x\leq a, \\&#10;\frac{x-a}{b-a}, &amp; a&lt; x&lt; b, \\&#10;1, &amp; x\geq b,&#10;\end{cases}</code></span>
期望与方差：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)= \frac{a+b}{2}" data-display="true"><code>\mathrm{E}(X)= \frac{a+b}{2}</code></span>
<span class="course-math course-math-display" data-tex="\mathrm{Var}(X)= \frac{(b-a)^{2}}{12}" data-display="true"><code>\mathrm{Var}(X)= \frac{(b-a)^{2}}{12}</code></span>


### 指数分布（Exponential Distribution）
{: #section-9 }


PDF：
<span class="course-math course-math-display" data-tex="f(x)=\begin{cases}&#10;\lambda e^{-\lambda x}, &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}" data-display="true"><code>f(x)=\begin{cases}&#10;\lambda e^{-\lambda x}, &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}</code></span>
CDF：
<span class="course-math course-math-display" data-tex="F(x)=\begin{cases}&#10;1-e^{-\lambda x},  &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}" data-display="true"><code>F(x)=\begin{cases}&#10;1-e^{-\lambda x},  &amp; x\geq 0, \\&#10;0, &amp; \text{otherwise}&#10;\end{cases}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Distributions%20-%20%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83.png' | relative_url }}{% raw %}" alt="Probability Distributions - 概率分布" width="197" height="301" loading="lazy" decoding="async">
通常，指数分布用于描述到某个事件发生为止经过的时间。
- 指数分布可以描述泊松过程中，时间区间的分布。
- 定义泊松过程（Poisson Process）：一系列独立的随机事件，以匀速发生（这和泊松分布中描述的一致）。也就是说，对于泊松过程，若单位时间内发生次数服从 <span class="course-math" data-tex="\text{Poisson}(\lambda)" data-display="false"><code>\text{Poisson}(\lambda)</code></span>，则 <span class="course-math" data-tex="[0,t]" data-display="false"><code>[0,t]</code></span> 上发生次数服从 <span class="course-math" data-tex="\text{Poisson}(\lambda t)" data-display="false"><code>\text{Poisson}(\lambda t)</code></span>。
- 设 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 是泊松过程中，到事件发生为止经过的时间，则
<span class="course-math course-math-display" data-tex="P(X\leq t) =1-P(X&gt;t)=1-P(\text{no event occured in} [0,t])=1- \frac{(\lambda t)^{0}}{0!}e^{-\lambda t}=1-e^{-\lambda t}" data-display="true"><code>P(X\leq t) =1-P(X&gt;t)=1-P(\text{no event occured in} [0,t])=1- \frac{(\lambda t)^{0}}{0!}e^{-\lambda t}=1-e^{-\lambda t}</code></span>
- 也就是说 <span class="course-math" data-tex="X\sim\text{Exp}(\lambda)" data-display="false"><code>X\sim\text{Exp}(\lambda)</code></span>。这个参数 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 就是泊松分布中的 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Distributions%20-%20%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83-1.png' | relative_url }}{% raw %}" alt="Probability Distributions - 概率分布-1" width="1802" height="242" loading="lazy" decoding="async">
期望与方差：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)= \frac{1}{\lambda}" data-display="true"><code>\mathrm{E}(X)= \frac{1}{\lambda}</code></span>
<span class="course-math course-math-display" data-tex="\mathrm{Var}(X)= \frac{1}{\lambda^{2}}" data-display="true"><code>\mathrm{Var}(X)= \frac{1}{\lambda^{2}}</code></span>
这个推导需要用到分部积分。可以从频率和周期的关系来理解（泊松分布的期望是 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>）。
指数分布具有无记忆性（Memoryless property）：
<span class="course-math course-math-display" data-tex="P(X&gt;s+t&#124;X&gt;s)=P(X&gt;t)" data-display="true"><code>P(X&gt;s+t&#124;X&gt;s)=P(X&gt;t)</code></span>
若 <span class="course-math" data-tex="X\sim \mathrm{Exp}(\lambda)" data-display="false"><code>X\sim \mathrm{Exp}(\lambda)</code></span>，那么 <span class="course-math" data-tex="T=\lceil X \rceil" data-display="false"><code>T=\lceil X \rceil</code></span> 服从 **几何分布**。这是因为：
<span class="course-math course-math-display" data-tex="P(T=k)=P(k-1&lt;X\leq k)=F(k)-F(k-1)=e^{-\lambda (k-1)}-e^{-\lambda k}=(1-e^{-\lambda}) (e^{-\lambda})^{k-1}" data-display="true"><code>P(T=k)=P(k-1&lt;X\leq k)=F(k)-F(k-1)=e^{-\lambda (k-1)}-e^{-\lambda k}=(1-e^{-\lambda}) (e^{-\lambda})^{k-1}</code></span>


### 正态分布（Normal Distribution）
{: #section-10 }


也称为高斯分布（Gaussian Distribution）。
<span class="course-math" data-tex="X\sim N(\mu,\sigma^{2})" data-display="false"><code>X\sim N(\mu,\sigma^{2})</code></span> PDF：
<span class="course-math course-math-display" data-tex="f(x)= \frac{1}{\sqrt{ 2\pi }\sigma}e^{- \frac{(x-\mu)^{2}}{2\sigma^{2}}}" data-display="true"><code>f(x)= \frac{1}{\sqrt{ 2\pi }\sigma}e^{- \frac{(x-\mu)^{2}}{2\sigma^{2}}}</code></span>
若 <span class="course-math" data-tex="\mu=0,\sigma=1" data-display="false"><code>\mu=0,\sigma=1</code></span>，为标准正态分布 <span class="course-math" data-tex="X\sim N(0,1)" data-display="false"><code>X\sim N(0,1)</code></span>，其 PDF：
<span class="course-math course-math-display" data-tex="\phi(x)= \frac{1}{\sqrt{ 2\pi }} e^{- \frac{x^{2}}{2}}" data-display="true"><code>\phi(x)= \frac{1}{\sqrt{ 2\pi }} e^{- \frac{x^{2}}{2}}</code></span>
标准正态分布的 CDF 没有显式表达式，但它很常用，所以我们记它的 CDF  为 <span class="course-math" data-tex="\Phi(x)" data-display="false"><code>\Phi(x)</code></span>：
<span class="course-math course-math-display" data-tex="\Phi(x)=P(X\leq x)=\int_{-\infty}^{x} \frac{1}{\sqrt{ 2\pi }} e^{-u^{2}/2}du" data-display="true"><code>\Phi(x)=P(X\leq x)=\int_{-\infty}^{x} \frac{1}{\sqrt{ 2\pi }} e^{-u^{2}/2}du</code></span>
其 PDF 是一个钟形曲线：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Distributions%20-%20%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83-2.png' | relative_url }}{% raw %}" alt="Probability Distributions - 概率分布-2" width="381" height="263" loading="lazy" decoding="async">
对 <span class="course-math" data-tex="X\sim N(\mu,\sigma^2)" data-display="false"><code>X\sim N(\mu,\sigma^2)</code></span>，可以做标准化：令 <span class="course-math" data-tex="Z= \frac{X-\mu}{\sigma}" data-display="false"><code>Z= \frac{X-\mu}{\sigma}</code></span>，则 <span class="course-math" data-tex="Z\sim N(0,1)" data-display="false"><code>Z\sim N(0,1)</code></span>。
期望与方差：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\mu" data-display="true"><code>\mathrm{E}(X)=\mu</code></span>
<span class="course-math course-math-display" data-tex="\mathrm{Var}(X)=\sigma^{2}" data-display="true"><code>\mathrm{Var}(X)=\sigma^{2}</code></span>
{% endraw %}
