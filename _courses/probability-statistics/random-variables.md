---
title: "Random Variables - 随机变量"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
reference: false
layout: "course"
permalink: "/courses/probability-statistics/random-variables/"
course_page: true
doc_type: "note"
description: "概率与统计 · Random Variables - 随机变量"
excerpt: "概率与统计 · Random Variables - 随机变量"
---

{% raw %}
随机变量的定义：定义在样本空间上的一个实值函数。<span class="course-math" data-tex="X:\Omega\to \mathbb{R}" data-display="false"><code>X:\Omega\to \mathbb{R}</code></span>。

随机变量分为离散的（Discrete）和连续的（Continuous）。

概率质量函数（Probability Mass Function, pmf）：对在集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> （称为支撑集 Support）上离散随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>，定义它的概率质量函数：
<span class="course-math course-math-display" data-tex="p(x)=&#10;P(X=x) (x\in S）" data-display="true"><code>p(x)=&#10;P(X=x) (x\in S）</code></span>

概率密度函数（Probability Density Function, pdf）：对在集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 上连续随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>，它落在区间 <span class="course-math" data-tex="\left[ a,b \right]" data-display="false"><code>\left[ a,b \right]</code></span> 中的概率由概率密度函数 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 在 <span class="course-math" data-tex="\left[ a,b \right]" data-display="false"><code>\left[ a,b \right]</code></span> 上对 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 积分给出：
<span class="course-math course-math-display" data-tex="P(a\leq x\leq b)=\int_{a}^b f(x)dx" data-display="true"><code>P(a\leq x\leq b)=\int_{a}^b f(x)dx</code></span>（这也是连续随机变量的定义）
这里，<span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 需要满足 <span class="course-math" data-tex="\forall x \in S, f(x)\geq 0" data-display="false"><code>\forall x \in S, f(x)\geq 0</code></span> 且 <span class="course-math" data-tex="\int_{S}f(x)dx=1" data-display="false"><code>\int_{S}f(x)dx=1</code></span>。
注意，对连续随机变量，<span class="course-math" data-tex="P(x=a)=P(a\leq x\leq a)=\int_{a}^af(x)dx=0" data-display="false"><code>P(x=a)=P(a\leq x\leq a)=\int_{a}^af(x)dx=0</code></span>。另外，不同于 pmf， pdf 的值可以大于 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。


随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的累计分布函数（Cumulative distribution function, cdf)：

<span class="course-math course-math-display" data-tex="F(x)=P(X\leq x)" data-display="true"><code>F(x)=P(X\leq x)</code></span>
对于连续随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> ，若其概率密度函数（pdf）为 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span>，则 cdf 为
<span class="course-math course-math-display" data-tex="F(x)=P(X\leq x)=\int_{-\infty}^x f(t)dt" data-display="true"><code>F(x)=P(X\leq x)=\int_{-\infty}^x f(t)dt</code></span>
那么用 cdf 可以计算概率：
<span class="course-math course-math-display" data-tex="P(a\leq X\leq b)=F(b)-F(a)" data-display="true"><code>P(a\leq X\leq b)=F(b)-F(a)</code></span>
且有
<span class="course-math course-math-display" data-tex="f(x)=F&#x27;(x)" data-display="true"><code>f(x)=F&#x27;(x)</code></span>
CDF 是不降的而且是右连续的。



两个离散随机变量 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 相互独立定义为，对任意取值 <span class="course-math" data-tex="X=x, Y=y" data-display="false"><code>X=x, Y=y</code></span>，有
<span class="course-math course-math-display" data-tex="P(X=x,Y=y)=P(X=x)\cdot P(Y=y)" data-display="true"><code>P(X=x,Y=y)=P(X=x)\cdot P(Y=y)</code></span>
## 期望（Expectation）
{: #section-1 }

集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 上，概率密度函数为 <span class="course-math" data-tex="f(x)" data-display="false"><code>f(x)</code></span> 的离散随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的期望（Expectation/Expected Value/Mean）定义为
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\sum_{x\in{S}} xf(x)" data-display="true"><code>\mathrm{E}(X)=\sum_{x\in{S}} xf(x)</code></span>
性质：
- 常量的期望就是它本身： <span class="course-math" data-tex="\mathrm{E}(a)=a" data-display="false"><code>\mathrm{E}(a)=a</code></span>
- <span class="course-math" data-tex="\mathrm{E}(aX)=a\mathrm{E}(X)" data-display="false"><code>\mathrm{E}(aX)=a\mathrm{E}(X)</code></span>
- <span class="course-math" data-tex="\mathrm{E}(aX+b)=a\mathrm{E}(X)+b" data-display="false"><code>\mathrm{E}(aX+b)=a\mathrm{E}(X)+b</code></span>
- <span class="course-math" data-tex="\mathrm{E}(X+Y)=\mathrm{E}(X)+\mathrm{E}(Y)" data-display="false"><code>\mathrm{E}(X+Y)=\mathrm{E}(X)+\mathrm{E}(Y)</code></span>
- <span class="course-math" data-tex="\mathrm{E}(g_{1}(X)+g_{2}(X))=\mathrm{E}(g_{1}(X))+\mathrm{E}(g_{2}(X))" data-display="false"><code>\mathrm{E}(g_{1}(X)+g_{2}(X))=\mathrm{E}(g_{1}(X))+\mathrm{E}(g_{2}(X))</code></span>
随机变量的 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 阶原点矩（<span class="course-math" data-tex="k" data-display="false"><code>k</code></span> -th Raw Moment）：<span class="course-math" data-tex="\mathrm{E}(X^k)" data-display="false"><code>\mathrm{E}(X^k)</code></span>
如果是连续随机变量，就定义为积分：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\int_{-\infty}^{\infty}xf(x)" data-display="true"><code>\mathrm{E}(X)=\int_{-\infty}^{\infty}xf(x)</code></span>

## 方差（Variance）
{: #section-2 }

随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 方差定义为
<span class="course-math course-math-display" data-tex="\mathrm{Var}(X)=\mathrm{E}(X-\mathrm{E}(X))^{2}" data-display="true"><code>\mathrm{Var}(X)=\mathrm{E}(X-\mathrm{E}(X))^{2}</code></span>
可以推导出计算公式：
<span class="course-math course-math-display" data-tex="\mathrm{Var}(X)=\mathrm{E}(X^{2})-\mathrm{E}(X)^{2}" data-display="true"><code>\mathrm{Var}(X)=\mathrm{E}(X^{2})-\mathrm{E}(X)^{2}</code></span>
对于离散随机变量就是 <span class="course-math" data-tex="\sum(x_{i}-\mathrm{E}(X))^{2}p_{i}" data-display="false"><code>\sum(x_{i}-\mathrm{E}(X))^{2}p_{i}</code></span>，对于连续随机变量就是类似的积分。
另外可以定义标准差（Standard Deviation）：
<span class="course-math course-math-display" data-tex="\mathrm{SD}(X)=\sqrt{ \mathrm{Var}(X) }" data-display="true"><code>\mathrm{SD}(X)=\sqrt{ \mathrm{Var}(X) }</code></span>
性质：
<span class="course-math course-math-display" data-tex="\mathrm{Var}(aX+b)=a^{2}\mathrm{Var}(X), \mathrm{SD}(aX+b)=a\mathrm{SD}(X)" data-display="true"><code>\mathrm{Var}(aX+b)=a^{2}\mathrm{Var}(X), \mathrm{SD}(aX+b)=a\mathrm{SD}(X)</code></span>
{% endraw %}
