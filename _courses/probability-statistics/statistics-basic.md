---
title: "Statistics Basic - 统计基础"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
created_at: "2026-11-20T18:00:00+08:00"
updated_at: "2026-11-26T17:47:00+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/probability-statistics/statistics-basic/"
course_page: true
doc_type: "note"
description: "概率与统计 · Statistics Basic - 统计基础"
excerpt: "概率与统计 · Statistics Basic - 统计基础"
---

{% raw %}
概率和统计的关系：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Statistics%20Basic%20-%20%E7%BB%9F%E8%AE%A1%E5%9F%BA%E7%A1%80.webp' | relative_url }}{% raw %}" alt="Statistics Basic - 统计基础" width="540" height="184" loading="lazy" decoding="async">

## 抽样
{: #section-1 }


- **总体（Population）：** 所有感兴趣的个体组成的集合。
- **参数（Parameter）：** 总体的数值特征。
- **样本（Sample）：** 总体的子集，用于对整体进行推断。
如果我们知道总体的某个 **定量指标（Quantitative Index）** 服从某个特定的分布，但参数未知，那么可以通过样本推断出总体的参数，这个过程叫做**参数统计推断（Parametric Statistical Inference）**。
假设 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 服从某个 CDF / PDF，其中参数 <span class="course-math" data-tex="\boldsymbol{\theta}" data-display="false"><code>\boldsymbol{\theta}</code></span> 未知，记作：
<span class="course-math course-math-display" data-tex="X\sim F(x; \boldsymbol{\theta}) \text{ or } X\sim f(x;\boldsymbol{\theta})" data-display="true"><code>X\sim F(x; \boldsymbol{\theta}) \text{ or } X\sim f(x;\boldsymbol{\theta})</code></span>
**抽样（Sampling）：** 从总体中选择 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个个体，记录它们某个定量指标 <span class="course-math" data-tex="X_{1},X_{2}, \dots, X_{n}" data-display="false"><code>X_{1},X_{2}, \dots, X_{n}</code></span>，这就组成一个容量为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的样本（a sample of size <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>）。
- 注意这里样本用大写的随机变量来记，这是因为抽样之前我们并不知道会抽到什么值。这和抽样的结果（样本观测值）不同。

**简单随机抽样（simple random sampling）：** 用**完全随机**的方式选样本，使总体中**每个个体被选中的概率都相等**。也就是说，样本 <span class="course-math" data-tex="X_1,\dots,X_n" data-display="false"><code>X_1,\dots,X_n</code></span> 满足两点：
1. **相互独立**（independent）：抽到谁不影响下一个抽到谁；
2. **同分布**（identically distributed）：每个 <span class="course-math" data-tex="X_i" data-display="false"><code>X_i</code></span> 都和总体 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的分布一样。
合起来可以写成：
<span class="course-math course-math-display" data-tex="X_1,\dots,X_n \overset{\text{i.i.d.}}{\sim} X" data-display="true"><code>X_1,\dots,X_n \overset{\text{i.i.d.}}{\sim} X</code></span>

### 统计量
{: #section-2 }


**统计量（Statistic）** ：设 <span class="course-math" data-tex="X_1,\dots,X_n" data-display="false"><code>X_1,\dots,X_n</code></span> 是来自总体 <span class="course-math" data-tex="X\sim f(x;\boldsymbol\theta)" data-display="false"><code>X\sim f(x;\boldsymbol\theta)</code></span> 的样本，<span class="course-math" data-tex="g(x_1,\dots,x_n)" data-display="false"><code>g(x_1,\dots,x_n)</code></span> 是一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元函数。定义随机变量
<span class="course-math course-math-display" data-tex="T=g(X_1,\dots,X_n)," data-display="true"><code>T=g(X_1,\dots,X_n),</code></span>
若 <span class="course-math" data-tex="g" data-display="false"><code>g</code></span> **不含任何未知参数**，则称 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 为一个**统计量**。
统计量是随机变量，它有自己的分布，这些分布叫 **抽样分布 （sampling distribution）**。

常见的统计量：
- **样本均值（sample mean）：**
<span class="course-math course-math-display" data-tex="\overline{X}= \frac{1}{n} \sum _{i=1}^{n}X_{i}" data-display="true"><code>\overline{X}= \frac{1}{n} \sum _{i=1}^{n}X_{i}</code></span>
- **样本方差和标准差（sample variance / standard deviation）：**
<span class="course-math course-math-display" data-tex="S^{2}= \frac{1}{n-1}\sum _{i=1}^{n}(X_{i}-\overline{X})^{2}= \frac{1}{n-1} \left( \sum _{i=1}^{n} X_{i}^{2} - n\overline{X}^{2} \right), \quad S=\sqrt{S^{2}}" data-display="true"><code>S^{2}= \frac{1}{n-1}\sum _{i=1}^{n}(X_{i}-\overline{X})^{2}= \frac{1}{n-1} \left( \sum _{i=1}^{n} X_{i}^{2} - n\overline{X}^{2} \right), \quad S=\sqrt{S^{2}}</code></span>
- 这里除以 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span>，直观上是因为，偏差满足 <span class="course-math" data-tex="\sum _{i=1}^{n}(X_{i}-\overline{X})=0" data-display="false"><code>\sum _{i=1}^{n}(X_{i}-\overline{X})=0</code></span>，自由度只有 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span>。
- **顺序统计量（Order Statistics）：** 把样本**从小到大排序**，得到
<span class="course-math course-math-display" data-tex="X_{(1)}\le X_{(2)}\le\cdots\le X_{(n)}" data-display="true"><code>X_{(1)}\le X_{(2)}\le\cdots\le X_{(n)}</code></span>
- 统计量 <span class="course-math" data-tex="X_{(1)}=\min\{X_1,\dots,X_n\}" data-display="false"><code>X_{(1)}=\min\{X_1,\dots,X_n\}</code></span>，是最小值；
- 统计量 <span class="course-math" data-tex="X_{(n)}=\max\{X_1,\dots,X_n\}" data-display="false"><code>X_{(n)}=\max\{X_1,\dots,X_n\}</code></span>，是最大值。
- **样本 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 分位数（sample <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>-quantile）：** 一个数，样本中**至多 <span class="course-math" data-tex="100p\%" data-display="false"><code>100p\%</code></span> 的值比它小**，**至多 <span class="course-math" data-tex="100(1-p)\%" data-display="false"><code>100(1-p)\%</code></span> 的值比它大**。计算公式：
<span class="course-math course-math-display" data-tex="Q_p=\begin{cases}X_{(\lfloor np+1\rfloor)}, &amp; np\ \text{不是整数}\\[4pt] \dfrac{X_{(np)}+X_{(np+1)}}{2}, &amp; np\ \text{是整数}\end{cases}" data-display="true"><code>Q_p=\begin{cases}X_{(\lfloor np+1\rfloor)}, &amp; np\ \text{不是整数}\\[4pt] \dfrac{X_{(np)}+X_{(np+1)}}{2}, &amp; np\ \text{是整数}\end{cases}</code></span>
- **特殊的分位数**：

| 记号                   | 名称                   |
| -------------------- | -------------------- |
| <span class="course-math" data-tex="Q_{0.5}" data-display="false"><code>Q_{0.5}</code></span>            | 样本中位数（sample median） |
| <span class="course-math" data-tex="Q_{0.25}" data-display="false"><code>Q_{0.25}</code></span>，也记作 <span class="course-math" data-tex="Q_1" data-display="false"><code>Q_1</code></span> | 样本下四分位数 / 第一四分位数     |
| <span class="course-math" data-tex="Q_{0.75}" data-display="false"><code>Q_{0.75}</code></span>，也记作 <span class="course-math" data-tex="Q_3" data-display="false"><code>Q_3</code></span> | 样本上四分位数 / 第三四分位数     |
| <span class="course-math" data-tex="Q_3-Q_1" data-display="false"><code>Q_3-Q_1</code></span>            | 样本四分位距（sample IQR）   |

### 估计
{: #section-3 }


**点估计（Point Estimation）** ：设 <span class="course-math" data-tex="X_1,\dots,X_n" data-display="false"><code>X_1,\dots,X_n</code></span> 是来自总体 <span class="course-math" data-tex="X\sim f(x;\theta_1,\dots,\theta_k)" data-display="false"><code>X\sim f(x;\theta_1,\dots,\theta_k)</code></span> 的简单随机样本，<span class="course-math" data-tex="\theta_1,\dots,\theta_k" data-display="false"><code>\theta_1,\dots,\theta_k</code></span> 是未知参数。
- 若统计量 <span class="course-math" data-tex="\hat\theta_j(X_1,\dots,X_n)" data-display="false"><code>\hat\theta_j(X_1,\dots,X_n)</code></span> 用来估计 <span class="course-math" data-tex="\theta_j" data-display="false"><code>\theta_j</code></span>，称 <span class="course-math" data-tex="\hat\theta_j" data-display="false"><code>\hat\theta_j</code></span> 为 <span class="course-math" data-tex="\theta_j" data-display="false"><code>\theta_j</code></span> 的**估计量**（estimator）；
- 代入样本观测值，<span class="course-math" data-tex="\hat\theta_j(x_1,\dots,x_n)" data-display="false"><code>\hat\theta_j(x_1,\dots,x_n)</code></span> 称为 <span class="course-math" data-tex="\theta_j" data-display="false"><code>\theta_j</code></span> 的**估计值**（estimate / estimated value）；
- 两者都可以简写为 <span class="course-math" data-tex="\hat\theta_j" data-display="false"><code>\hat\theta_j</code></span>。

例如，我们假设总体 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 服从参数为未知的 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 的泊松分布，那么抽样得到 <span class="course-math" data-tex="X_{1},X_{2}, \dots, X_{n}" data-display="false"><code>X_{1},X_{2}, \dots, X_{n}</code></span>，由于泊松分布的期望和方差都是 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>，那么我们就想到用 <span class="course-math" data-tex="\overline{X}" data-display="false"><code>\overline{X}</code></span> 或 <span class="course-math" data-tex="S^{2}" data-display="false"><code>S^{2}</code></span> 来作为 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 的估计量。需要有一些方式来比较估计量的好坏。

定义 **无偏性（Unbiasedness）：**
设 <span class="course-math" data-tex="X_1,\dots,X_n" data-display="false"><code>X_1,\dots,X_n</code></span> 是来自总体 <span class="course-math" data-tex="X\sim f(x;\theta_1,\dots,\theta_k)" data-display="false"><code>X\sim f(x;\theta_1,\dots,\theta_k)</code></span> 的简单随机样本，<span class="course-math" data-tex="\hat\theta_j(X_1,\dots,X_n)" data-display="false"><code>\hat\theta_j(X_1,\dots,X_n)</code></span> 是 <span class="course-math" data-tex="\theta_j" data-display="false"><code>\theta_j</code></span> 的估计量。<span class="course-math" data-tex="\boldsymbol\Theta" data-display="false"><code>\boldsymbol\Theta</code></span> 是 <span class="course-math" data-tex="\boldsymbol\theta=(\theta_1,\dots,\theta_k)" data-display="false"><code>\boldsymbol\theta=(\theta_1,\dots,\theta_k)</code></span> 的**参数空间**（parameter space），即 <span class="course-math" data-tex="\boldsymbol\theta" data-display="false"><code>\boldsymbol\theta</code></span> 所有可能取值的集合。
若**对任意** <span class="course-math" data-tex="\boldsymbol\theta\in\boldsymbol\Theta" data-display="false"><code>\boldsymbol\theta\in\boldsymbol\Theta</code></span>，都有
<span class="course-math course-math-display" data-tex="E_{\boldsymbol\theta}\big(\hat\theta_j\big)=\theta_j," data-display="true"><code>E_{\boldsymbol\theta}\big(\hat\theta_j\big)=\theta_j,</code></span>
则称 <span class="course-math" data-tex="\hat\theta_j" data-display="false"><code>\hat\theta_j</code></span> 为 <span class="course-math" data-tex="\theta_j" data-display="false"><code>\theta_j</code></span> 的**无偏估计量**（unbiased estimator），否则称为**有偏估计量**（biased estimator）。
- <span class="course-math" data-tex="E_{\boldsymbol\theta}(\hat\theta_j)-\theta_j" data-display="false"><code>E_{\boldsymbol\theta}(\hat\theta_j)-\theta_j</code></span> 称为估计量的**偏差**（bias）；
<span class="course-math course-math-display" data-tex="\text{bias}(\hat\theta)=E(\hat\theta)-\theta\ \begin{cases}&gt;0 &amp; \text{平均高估}\\ =0 &amp; \text{无偏}\\ &lt;0 &amp; \text{平均低估}\end{cases}" data-display="true"><code>\text{bias}(\hat\theta)=E(\hat\theta)-\theta\ \begin{cases}&gt;0 &amp; \text{平均高估}\\ =0 &amp; \text{无偏}\\ &lt;0 &amp; \text{平均低估}\end{cases}</code></span>
- 若偏差不为 0，但当 <span class="course-math" data-tex="n\to\infty" data-display="false"><code>n\to\infty</code></span> 时收敛到 0，则称 <span class="course-math" data-tex="\hat\theta_j" data-display="false"><code>\hat\theta_j</code></span> 为 <span class="course-math" data-tex="\theta_j" data-display="false"><code>\theta_j</code></span> 的**渐近无偏估计量**（asymptotically unbiased estimator）。

定理：无论总体服从什么分布，只要总体均值 <span class="course-math" data-tex="\mu=E(X)" data-display="false"><code>\mu=E(X)</code></span> 和总体方差 <span class="course-math" data-tex="\sigma^2=\text{Var}(X)" data-display="false"><code>\sigma^2=\text{Var}(X)</code></span> 存在，
<span class="course-math course-math-display" data-tex="\hat\mu=\bar X,\qquad \hat\sigma^2=S^2" data-display="true"><code>\hat\mu=\bar X,\qquad \hat\sigma^2=S^2</code></span>
分别是 <span class="course-math" data-tex="\mu" data-display="false"><code>\mu</code></span> 和 <span class="course-math" data-tex="\sigma^2" data-display="false"><code>\sigma^2</code></span> 的**无偏估计量**。
证明：均值的部分容易证明：
<span class="course-math course-math-display" data-tex="\mathrm{E}(\overline{X})= \frac{1}{n} \sum _{i=1}^{n}\mathrm{E}(X_{i})= \frac{1}{n} \cdot n \mu = \mu" data-display="true"><code>\mathrm{E}(\overline{X})= \frac{1}{n} \sum _{i=1}^{n}\mathrm{E}(X_{i})= \frac{1}{n} \cdot n \mu = \mu</code></span>
另外有：
<span class="course-math course-math-display" data-tex="\operatorname{Var}(\overline{X})= \operatorname{Var}\left(  \frac{1}{n} \sum _{i=1}^{n}X_{i} \right)=\frac{1}{n^{2}} \sum _{i=1}^{n} \operatorname{Var}(X_{i})= \frac{1}{n^{2}} \cdot n \sigma ^{2} = \frac{\sigma ^{2}}{n}" data-display="true"><code>\operatorname{Var}(\overline{X})= \operatorname{Var}\left(  \frac{1}{n} \sum _{i=1}^{n}X_{i} \right)=\frac{1}{n^{2}} \sum _{i=1}^{n} \operatorname{Var}(X_{i})= \frac{1}{n^{2}} \cdot n \sigma ^{2} = \frac{\sigma ^{2}}{n}</code></span>
方差的部分：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;(n-1) S^{2} &amp;= \sum _{i=1}^{n} (X_{i}-\overline{X})^{2} \\&#10;&amp;=  \sum _{i=1}^{n}((X_{i}-\mu)+(\mu-\overline{X}))^{2} \\&#10;&amp;= \sum _{i=1}^{n} (X_{i}-\mu)^{2} + 2 \sum _{i=1}^{n}(X_{i}-\mu)(\mu-\overline{X}) + \sum _{i=1}^{n} (\mu-\overline{X})^{2} \\&#10;&amp;= \sum _{i=1}^{n} (X_{i}-\mu)^{2} - 2 n(\mu-\overline{X})^{2} + n(\mu-\overline{X})^{2} \\&#10;&amp;= \sum _{i=1}^{n} (X_{i}-\mu)^{2}-n(\mu-\overline{X})^{2}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;(n-1) S^{2} &amp;= \sum _{i=1}^{n} (X_{i}-\overline{X})^{2} \\&#10;&amp;=  \sum _{i=1}^{n}((X_{i}-\mu)+(\mu-\overline{X}))^{2} \\&#10;&amp;= \sum _{i=1}^{n} (X_{i}-\mu)^{2} + 2 \sum _{i=1}^{n}(X_{i}-\mu)(\mu-\overline{X}) + \sum _{i=1}^{n} (\mu-\overline{X})^{2} \\&#10;&amp;= \sum _{i=1}^{n} (X_{i}-\mu)^{2} - 2 n(\mu-\overline{X})^{2} + n(\mu-\overline{X})^{2} \\&#10;&amp;= \sum _{i=1}^{n} (X_{i}-\mu)^{2}-n(\mu-\overline{X})^{2}&#10;\end{aligned}</code></span>
两边取期望：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;(n-1)\mathrm{E}(S^{2}) =&amp; n\mathrm{E}(X_{i}-\mu)^{2} -n \mathrm{E}(\overline{X}-\mu)^{2} \\&#10;=&amp; n \operatorname{Var}(X_{i}) - n  \operatorname{Var}(\overline{X}) \\&#10;= &amp; n \cdot \sigma ^{2}-n \cdot \frac{\sigma ^{2}}{n} \\&#10;= &amp; (n-1) \sigma ^{2}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;(n-1)\mathrm{E}(S^{2}) =&amp; n\mathrm{E}(X_{i}-\mu)^{2} -n \mathrm{E}(\overline{X}-\mu)^{2} \\&#10;=&amp; n \operatorname{Var}(X_{i}) - n  \operatorname{Var}(\overline{X}) \\&#10;= &amp; n \cdot \sigma ^{2}-n \cdot \frac{\sigma ^{2}}{n} \\&#10;= &amp; (n-1) \sigma ^{2}&#10;\end{aligned}</code></span>
于是
<span class="course-math course-math-display" data-tex="\mathrm{E}(S^{2})=\sigma ^{2}" data-display="true"><code>\mathrm{E}(S^{2})=\sigma ^{2}</code></span>
{% endraw %}
