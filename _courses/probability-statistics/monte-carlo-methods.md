---
title: "Monte Carlo Methods - 蒙特卡洛方法"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
created_at: "2026-11-11T16:20:45+08:00"
updated_at: "2026-11-21T13:27:50+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/probability-statistics/monte-carlo-methods/"
course_page: true
doc_type: "note"
description: "概率与统计 · Monte Carlo Methods - 蒙特卡洛方法"
excerpt: "概率与统计 · Monte Carlo Methods - 蒙特卡洛方法"
---

{% raw %}
- 来源：Monte Carlo Casino（Monaco）

蒙特卡洛算法，是通过大量重复随机抽样来求解数值近似解的方法。


## 理论基础
{: #section-1 }


**大数定律（the law of large numbers）：** 令 <span class="course-math" data-tex="X_{1},X_{2}, \dots" data-display="false"><code>X_{1},X_{2}, \dots</code></span> 是 i.i.d. 的随机变量，而 <span class="course-math" data-tex="\mu=\mathrm{E}(X_{i})&lt;\infty" data-display="false"><code>\mu=\mathrm{E}(X_{i})&lt;\infty</code></span>，且 <span class="course-math" data-tex="\overline{X}_{n}= (X_{1} + X_{2} + \dots + X_{n}) / n" data-display="false"><code>\overline{X}_{n}= (X_{1} + X_{2} + \dots + X_{n}) / n</code></span>。那么当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span>， <span class="course-math" data-tex="\overline{X}_{n}" data-display="false"><code>\overline{X}_{n}</code></span> 依概率收敛（converges in probability）到 <span class="course-math" data-tex="\mu" data-display="false"><code>\mu</code></span>：
<span class="course-math course-math-display" data-tex="\overline{X}_{n} \xrightarrow[]{P} \mu, \quad  n\to \infty" data-display="true"><code>\overline{X}_{n} \xrightarrow[]{P} \mu, \quad  n\to \infty</code></span>
这是较弱的版本，较强的版本是说“几乎处处收敛”。
不同的“收敛”：
- 几乎处处收敛（a.s.）：<span class="course-math course-math-display" data-tex="P\Big(\big\{\omega:\ \lim_{n\to\infty} X_n(\omega) = X(\omega)\big\}\Big) = 1,\qquad \text{记作 } X_n \xrightarrow{a.s.} X" data-display="true"><code>P\Big(\big\{\omega:\ \lim_{n\to\infty} X_n(\omega) = X(\omega)\big\}\Big) = 1,\qquad \text{记作 } X_n \xrightarrow{a.s.} X</code></span>
- <span class="course-math" data-tex="L^{p}" data-display="false"><code>L^{p}</code></span> 收敛：
<span class="course-math course-math-display" data-tex="\lim_{n\to\infty} E\big[&#124;X_n - X&#124;^p\big] = 0," data-display="true"><code>\lim_{n\to\infty} E\big[&#124;X_n - X&#124;^p\big] = 0,</code></span>
- 依概率收敛：
<span class="course-math course-math-display" data-tex="\lim_{n\to\infty} P\big(&#124;\bar X_n - \mu&#124; &gt; \varepsilon\big) = 0,\qquad \text{记作 } \bar X_n \xrightarrow{P} \mu" data-display="true"><code>\lim_{n\to\infty} P\big(&#124;\bar X_n - \mu&#124; &gt; \varepsilon\big) = 0,\qquad \text{记作 } \bar X_n \xrightarrow{P} \mu</code></span>
- 依分布收敛：<span class="course-math" data-tex="F_{X_n}(x)\to F_X(x)" data-display="false"><code>F_{X_n}(x)\to F_X(x)</code></span>，对 <span class="course-math" data-tex="F_X" data-display="false"><code>F_X</code></span> 的**所有连续点** <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 成立，记作 <span class="course-math" data-tex="X_n \xrightarrow{d} X" data-display="false"><code>X_n \xrightarrow{d} X</code></span>。
这里的强弱关系：
```
        a.s. ──┐
               ├──▶  依概率 P  ──▶  依分布 d
  L^q ─▶ L^p ──┘
 (q>p≥1)
```
可以通过 CLT 来理解一下大数定律，根据 CLT，可以得到，当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span>，有
<span class="course-math course-math-display" data-tex="\overline{X}_{n} \overset{\text{approx.}}{\sim} N\left( \mu, \frac{\sigma ^{2}}{n} \right)" data-display="true"><code>\overline{X}_{n} \overset{\text{approx.}}{\sim} N\left( \mu, \frac{\sigma ^{2}}{n} \right)</code></span>
当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span>，这个正态分布的方差就接近 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，于是 <span class="course-math" data-tex="\overline{X}_{n}" data-display="false"><code>\overline{X}_{n}</code></span> 就会集中在 <span class="course-math" data-tex="\mu" data-display="false"><code>\mu</code></span>。

## 随机数生成
{: #section-2 }


在蒙特卡洛方法中，很重要的一个事就是从一个分布中去抽样。这就需要用伪随机数生成器（pseudo-random number generator）来实现。
通常一个伪随机数生成器会支持生成一个序列 <span class="course-math" data-tex="u_{1},u_{2}, \dots u_{n}" data-display="false"><code>u_{1},u_{2}, \dots u_{n}</code></span>，每个数独立且服从 <span class="course-math" data-tex="U[0,1]" data-display="false"><code>U[0,1]</code></span> 。
从 <span class="course-math" data-tex="U\sim U[0,1]" data-display="false"><code>U\sim U[0,1]</code></span> 可以得到 序列 <span class="course-math" data-tex="u_{1}, u_{2}, \dots, u_{n}" data-display="false"><code>u_{1}, u_{2}, \dots, u_{n}</code></span>，那么：
- <span class="course-math" data-tex="\mathrm{Bernoulli}(p)" data-display="false"><code>\mathrm{Bernoulli}(p)</code></span>：
<span class="course-math course-math-display" data-tex="x_{i}=\begin{cases}&#10;1 &amp; 0&lt;u_{i}&lt;p \\&#10;0 &amp; p\leq u_{i}&lt;1&#10;\end{cases}" data-display="true"><code>x_{i}=\begin{cases}&#10;1 &amp; 0&lt;u_{i}&lt;p \\&#10;0 &amp; p\leq u_{i}&lt;1&#10;\end{cases}</code></span>
- <span class="course-math" data-tex="\mathrm{Poisson}(\lambda)" data-display="false"><code>\mathrm{Poisson}(\lambda)</code></span>：<span class="course-math" data-tex="p_{k}=P(X=k)= \frac{\lambda ^{k}}{k!}e^{-\lambda}" data-display="false"><code>p_{k}=P(X=k)= \frac{\lambda ^{k}}{k!}e^{-\lambda}</code></span>，那么我们划分不同的区间 <span class="course-math" data-tex="I_{0}=(0,p_{0}),I_{1}=[p_{0},p_{0}+p_{1}),I_{2}=[p_{0}+p_{1},p_{0}+p_{1}+p_{2}),\dots" data-display="false"><code>I_{0}=(0,p_{0}),I_{1}=[p_{0},p_{0}+p_{1}),I_{2}=[p_{0}+p_{1},p_{0}+p_{1}+p_{2}),\dots</code></span>，那么每个区间的长度就是对应的概率，只需要令 <span class="course-math" data-tex="x_{i}=k" data-display="false"><code>x_{i}=k</code></span>，若 <span class="course-math" data-tex="u_{i}\in I_{k}" data-display="false"><code>u_{i}\in I_{k}</code></span> 即可。
所以对于离散分布，通用的做法是去切分区间 <span class="course-math" data-tex="(0,1)" data-display="false"><code>(0,1)</code></span>，使得一个取值对应的长度等于它的概率。

对于连续分布，就需要使用 **逆变换采样**：
- 若需要采样的分布 CDF 为 <span class="course-math" data-tex="F(x)" data-display="false"><code>F(x)</code></span>，且 <span class="course-math" data-tex="F(x)" data-display="false"><code>F(x)</code></span> 有反函数 <span class="course-math" data-tex="F^{-1}(x)" data-display="false"><code>F^{-1}(x)</code></span>，令 <span class="course-math" data-tex="U\sim U[0,1]" data-display="false"><code>U\sim U[0,1]</code></span>，那么 <span class="course-math" data-tex="X=F^{-1}(U)\sim F(x)" data-display="false"><code>X=F^{-1}(U)\sim F(x)</code></span>。
- 这是因为 <span class="course-math" data-tex="F_{X}(x)=P(X\leq x)=P(F^{-1}(U)\leq x)=P(U\leq F(x))=F(x)" data-display="false"><code>F_{X}(x)=P(X\leq x)=P(F^{-1}(U)\leq x)=P(U\leq F(x))=F(x)</code></span>。
例如从序列 <span class="course-math" data-tex="u_{1}, u_{2}, \dots, u_{n}" data-display="false"><code>u_{1}, u_{2}, \dots, u_{n}</code></span> 中得到：
- <span class="course-math" data-tex="\mathrm{Exp}(\lambda)" data-display="false"><code>\mathrm{Exp}(\lambda)</code></span>：<span class="course-math" data-tex="F(x)=1-e^{-\lambda x}\implies F^{-1}(u)=-\frac{\ln(1-u)}{\lambda}" data-display="false"><code>F(x)=1-e^{-\lambda x}\implies F^{-1}(u)=-\frac{\ln(1-u)}{\lambda}</code></span>，于是从序列 <span class="course-math" data-tex="u_{1},u_{2}, \dots, u_{n}" data-display="false"><code>u_{1},u_{2}, \dots, u_{n}</code></span> 中得到 <span class="course-math" data-tex="x_{i}=F^{-1}(u_{i})" data-display="false"><code>x_{i}=F^{-1}(u_{i})</code></span>。
- <span class="course-math" data-tex="\mathrm{Gamma}(r,\lambda)" data-display="false"><code>\mathrm{Gamma}(r,\lambda)</code></span>：没有闭式的 CDF。但当 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 为正整数时，可以根据定义，拆成生成 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个 <span class="course-math" data-tex="\mathrm{Exp}(\lambda)" data-display="false"><code>\mathrm{Exp}(\lambda)</code></span> 的序列，把对应位置相加即可得到服从伽马分布的序列。
- <span class="course-math" data-tex="N(\mu,\sigma ^{2})" data-display="false"><code>N(\mu,\sigma ^{2})</code></span>：没有闭式的 CDF。有一种巧妙的方法：取两个相互独立的 <span class="course-math" data-tex="U_{1}\sim U[0,1]" data-display="false"><code>U_{1}\sim U[0,1]</code></span> 和 <span class="course-math" data-tex="U_{2}\sim U[0,1]" data-display="false"><code>U_{2}\sim U[0,1]</code></span>，那么
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;Z_{1} = \sqrt{-2\ln(U_{1})}\cos(2\pi U_{2}) \\&#10;Z_{2} = \sqrt{-2\ln (U_{1})} \sin(2\pi U_{2})&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;Z_{1} = \sqrt{-2\ln(U_{1})}\cos(2\pi U_{2}) \\&#10;Z_{2} = \sqrt{-2\ln (U_{1})} \sin(2\pi U_{2})&#10;\end{cases}</code></span>
- 可以证明，这里 <span class="course-math" data-tex="Z_{1},Z_{2}" data-display="false"><code>Z_{1},Z_{2}</code></span> 就是一对独立的标准正态分布变量。于是只需生成两个 <span class="course-math" data-tex="U[0,1]" data-display="false"><code>U[0,1]</code></span> 上的随机数序列 <span class="course-math" data-tex="u_{11},u_{12},u_{21},u_{22}, \dots ,u_{n 1}, u_{n 2}" data-display="false"><code>u_{11},u_{12},u_{21},u_{22}, \dots ,u_{n 1}, u_{n 2}</code></span>，令
<span class="course-math course-math-display" data-tex="z_{2i-1}=\sqrt{-2\ln(u_{i 1})}\cos(2\pi u_{i 2}),\quad z_{2i}=\sqrt{-2\ln(u_{i 1})}\sin(2\pi u_{i 2})" data-display="true"><code>z_{2i-1}=\sqrt{-2\ln(u_{i 1})}\cos(2\pi u_{i 2}),\quad z_{2i}=\sqrt{-2\ln(u_{i 1})}\sin(2\pi u_{i 2})</code></span>
- 最后令 <span class="course-math" data-tex="x_{i}=\mu+\sigma z_{i}" data-display="false"><code>x_{i}=\mu+\sigma z_{i}</code></span>，就得到服从 <span class="course-math" data-tex="N(\mu,\sigma ^{2})" data-display="false"><code>N(\mu,\sigma ^{2})</code></span> 的序列。
- 怎么证明？一种方法：若 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span> 的 joint PDF 为 <span class="course-math" data-tex="f_{XY}(x,y)" data-display="false"><code>f_{XY}(x,y)</code></span>，做变量替换 <span class="course-math" data-tex="U=g_{1}(X,Y),V=g_{2}(X,Y)" data-display="false"><code>U=g_{1}(X,Y),V=g_{2}(X,Y)</code></span>，那么有
<span class="course-math course-math-display" data-tex="f_{UV}(u,v)=f_{XY}(x(u,v),y(u,v)) \times \lvert J \rvert" data-display="true"><code>f_{UV}(u,v)=f_{XY}(x(u,v),y(u,v)) \times \lvert J \rvert</code></span>
- 这里
<span class="course-math course-math-display" data-tex="\lvert J \rvert= \left\lvert \frac{\partial (x,y)}{\partial (u,v)}\right\rvert=\begin{vmatrix} \frac{\partial x}{\partial u} &amp; \frac{\partial y}{\partial u} \\  \frac{\partial x}{\partial v} &amp; \frac{\partial y}{\partial v}\end{vmatrix}" data-display="true"><code>\lvert J \rvert= \left\lvert \frac{\partial (x,y)}{\partial (u,v)}\right\rvert=\begin{vmatrix} \frac{\partial x}{\partial u} &amp; \frac{\partial y}{\partial u} \\  \frac{\partial x}{\partial v} &amp; \frac{\partial y}{\partial v}\end{vmatrix}</code></span>
- 利用这个公式去计算即可。
- 另一种方法：试通过二重积分证明 <span class="course-math" data-tex="P(Z_{1}\leq a,Z_{2}\leq b)=\Phi(a)\Phi (b)" data-display="false"><code>P(Z_{1}\leq a,Z_{2}\leq b)=\Phi(a)\Phi (b)</code></span>。这里积分过程中，需要计算的雅可比行列式为
<span class="course-math course-math-display" data-tex="\lvert J \rvert= \left\lvert  \frac{\partial (z_{1},z_{2})}{\partial (u_{1},u_{2})}  \right\rvert" data-display="true"><code>\lvert J \rvert= \left\lvert  \frac{\partial (z_{1},z_{2})}{\partial (u_{1},u_{2})}  \right\rvert</code></span>

对于更复杂的一些概率分布，有 **拒绝采样（Rejection Sampling）：** 对于一个目标分布 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span>，我们选取一个参考分布（Proposal Distribution）<span class="course-math" data-tex="g(x)" data-display="false"><code>g(x)</code></span>，使得：
- <span class="course-math" data-tex="g(x)" data-display="false"><code>g(x)</code></span> 与 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 的支撑集相同。
- 存在常数 <span class="course-math" data-tex="c&gt;1" data-display="false"><code>c&gt;1</code></span>，使得 <span class="course-math" data-tex="f(x)\leq c g(x)" data-display="false"><code>f(x)\leq c g(x)</code></span> 对于任意的 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 的支撑集中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>。
- <span class="course-math" data-tex="g(x)" data-display="false"><code>g(x)</code></span> 比较容易采样。
那么，从 <span class="course-math" data-tex="g(x)" data-display="false"><code>g(x)</code></span> 中生成 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span>，从 <span class="course-math" data-tex="U[0,1]" data-display="false"><code>U[0,1]</code></span> 中生成 <span class="course-math" data-tex="u_{i}" data-display="false"><code>u_{i}</code></span>，那么，
- 若 <span class="course-math" data-tex="u_{i} \cdot cg(x_{i})&gt;f(x_{i})" data-display="false"><code>u_{i} \cdot cg(x_{i})&gt;f(x_{i})</code></span>，则拒绝 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span>。（这也相当于从 <span class="course-math" data-tex="U[0,cg(x_{i})]" data-display="false"><code>U[0,cg(x_{i})]</code></span> 上生成一个值，与 <span class="course-math" data-tex="f(x_{i})" data-display="false"><code>f(x_{i})</code></span> 比较）
- 否则，接受 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span>。接受的 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span> 就视作从 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 中抽样的值。
理论依据：
- 接受的概率为
<span class="course-math course-math-display" data-tex="P\left( U\leq \frac{f(X)}{cg(X)} \right)= \int_{-\infty}^{\infty} P\left( U\leq \frac{f(X)}{cg(X)}\mid X=x \right)g(x)\,\mathrm{d}x =\int_{-\infty}^{\infty}  \frac{f(x)}{cg(x)}g(x)\,\mathrm{d}x= \frac{1}{c}" data-display="true"><code>P\left( U\leq \frac{f(X)}{cg(X)} \right)= \int_{-\infty}^{\infty} P\left( U\leq \frac{f(X)}{cg(X)}\mid X=x \right)g(x)\,\mathrm{d}x =\int_{-\infty}^{\infty}  \frac{f(x)}{cg(x)}g(x)\,\mathrm{d}x= \frac{1}{c}</code></span>
- 因此我们要在 <span class="course-math" data-tex="f(x)\leq cg(x)" data-display="false"><code>f(x)\leq cg(x)</code></span> 的条件下，让 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 尽量小，这样的话，接受的概率就会高一点，丢掉的采样就少一些，算法就更加高效。最好的情况就是 <span class="course-math" data-tex="c= \sup\frac{f(x)}{g(x)}" data-display="false"><code>c= \sup\frac{f(x)}{g(x)}</code></span>（上确界）。
- 接受的值服从目标分布 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span>。这是因为，考虑接受的值的 CDF：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;&amp;P(X\leq t\mid X\text{ is accepted}) \\&#10;&amp;\, = \frac{P(X\leq t,X\text{ is accepted})}{P(X \text{ is accepted})} \\&#10;&amp;\, = cP(X\leq t,X\text{ is accepted}) \\&#10;&amp;\, = c \int_{-\infty}^{\infty}  P(X\leq t, X\text{ is accepted} \mid X=x)g(x)\,\mathrm{d}x \\&#10;&amp;\, = c \int_{-\infty}^{\infty} I(x\leq t) P\left( U\leq \frac{f(x)}{cg(x)} \right)g(x)\,\mathrm{d}x \\&#10;&amp;\, = c \int_{-\infty}^{\infty} I(x\leq t) \frac{f(x)}{cg(x)}g(x)\,\mathrm{d}x \\&#10;&amp;\, = \int_{-\infty}^{t} f(x)\,\mathrm{d}x=F(t)&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;&amp;P(X\leq t\mid X\text{ is accepted}) \\&#10;&amp;\, = \frac{P(X\leq t,X\text{ is accepted})}{P(X \text{ is accepted})} \\&#10;&amp;\, = cP(X\leq t,X\text{ is accepted}) \\&#10;&amp;\, = c \int_{-\infty}^{\infty}  P(X\leq t, X\text{ is accepted} \mid X=x)g(x)\,\mathrm{d}x \\&#10;&amp;\, = c \int_{-\infty}^{\infty} I(x\leq t) P\left( U\leq \frac{f(x)}{cg(x)} \right)g(x)\,\mathrm{d}x \\&#10;&amp;\, = c \int_{-\infty}^{\infty} I(x\leq t) \frac{f(x)}{cg(x)}g(x)\,\mathrm{d}x \\&#10;&amp;\, = \int_{-\infty}^{t} f(x)\,\mathrm{d}x=F(t)&#10;\end{aligned}</code></span>
其中 <span class="course-math" data-tex="I(x\leq t)=\begin{cases}1, &amp; x\leq t  \\0,  &amp; x&gt;t \end{cases}" data-display="false"><code>I(x\leq t)=\begin{cases}1, &amp; x\leq t  \\0,  &amp; x&gt;t \end{cases}</code></span> 为 indicator function。
另外，如果我们只知道 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 和 <span class="course-math" data-tex="g(x)" data-display="false"><code>g(x)</code></span> 的某个常数倍数，比如如果有 <span class="course-math" data-tex="f(x)=c_{1}f^{*}(x),g(x)=c_{2}g ^{*}(x)" data-display="false"><code>f(x)=c_{1}f^{*}(x),g(x)=c_{2}g ^{*}(x)</code></span>，那么我们对 <span class="course-math" data-tex="f^{*}(x)" data-display="false"><code>f^{*}(x)</code></span> 与 <span class="course-math" data-tex="g ^{*}(x)" data-display="false"><code>g ^{*}(x)</code></span> 应用拒绝采样的流程，也是可以正确采样的！这里只需要满足 <span class="course-math" data-tex="f^{*}(x)\leq cg ^{*}(x)" data-display="false"><code>f^{*}(x)\leq cg ^{*}(x)</code></span>，而不要求它们是 PDF。从 <span class="course-math" data-tex="g(x)" data-display="false"><code>g(x)</code></span> 采样 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span>，从 <span class="course-math" data-tex="U[0,1]" data-display="false"><code>U[0,1]</code></span> 采样 <span class="course-math" data-tex="u_{i}" data-display="false"><code>u_{i}</code></span>，把拒绝的条件变成 <span class="course-math" data-tex="u_{i} \cdot cg ^{*}(x_{i})&gt;f^{*}(x_{i})" data-display="false"><code>u_{i} \cdot cg ^{*}(x_{i})&gt;f^{*}(x_{i})</code></span>。
{% endraw %}
