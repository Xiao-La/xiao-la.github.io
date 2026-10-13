---
title: "Joint Probability - 联合概率"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
created_at: "2026-10-10T16:52:41+08:00"
updated_at: "2026-10-10T18:10:16+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/probability-statistics/joint-probability/"
course_page: true
doc_type: "note"
description: "概率与统计 · Joint Probability - 联合概率"
excerpt: "概率与统计 · Joint Probability - 联合概率"
---

{% raw %}

随机向量（Random Vector）：<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元随机向量 <span class="course-math" data-tex="(X_{1},X_{2},\dots{},X_n)" data-display="false"><code>(X_{1},X_{2},\dots{},X_n)</code></span>，就是一个函数
<span class="course-math course-math-display" data-tex="\Omega \to{}\mathbb{R}^{n}" data-display="true"><code>\Omega \to{}\mathbb{R}^{n}</code></span>
<span class="course-math course-math-display" data-tex="\omega \in \Omega \mapsto{}(X_{1}(\omega ),X_{2}(\omega ),\dots{},X_n(\omega ))" data-display="true"><code>\omega \in \Omega \mapsto{}(X_{1}(\omega ),X_{2}(\omega ),\dots{},X_n(\omega ))</code></span>
对于随机向量，它有：
- Joint CDF / PMF / PDF;
- Marginal CDF / PMF / PDF;
- Conditional PMF / PDF


## Joint CDF / PMF / PDF
{: #section-1 }


**Joint CDF:**  二元随机向量 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span> 的 CDF 定义为
<span class="course-math course-math-display" data-tex="F(x,y)=P(X\leq{}x,Y\leq{}y )" data-display="true"><code>F(x,y)=P(X\leq{}x,Y\leq{}y )</code></span>
这就叫 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 和 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span> 的 joint CDF。这里可以用它来计算一个区域内的概率：
<span class="course-math course-math-display" data-tex="P\{ x_{1}&lt;X\leq{}x_{2},y_{1}&lt;Y\leq{}y_{2} \}=F(x_{2},y_{2})-F(x_{1},y_{2})-F(x_{2},y_{1})+F(x_{1},y_{1})" data-display="true"><code>P\{ x_{1}&lt;X\leq{}x_{2},y_{1}&lt;Y\leq{}y_{2} \}=F(x_{2},y_{2})-F(x_{1},y_{2})-F(x_{2},y_{1})+F(x_{1},y_{1})</code></span>

**Marginal CDF:** 若 <span class="course-math" data-tex="F(x,y)" data-display="false"><code>F(x,y)</code></span> 是 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span> 的 joint CDF，我们说 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 的 marginal CDF 是
<span class="course-math course-math-display" data-tex="F_{X}(x)=F(x,\infty ), F_Y(y)=F(\infty ,y)" data-display="true"><code>F_{X}(x)=F(x,\infty ), F_Y(y)=F(\infty ,y)</code></span>

对于离散随机向量，**joint PMF**：
<span class="course-math course-math-display" data-tex="p(x_{i},y_{i})=P(X=x_{i},Y=y_{i})=p_{ij} \triangleq{}p_{ij}" data-display="true"><code>p(x_{i},y_{i})=P(X=x_{i},Y=y_{i})=p_{ij} \triangleq{}p_{ij}</code></span>
<span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 的 **marginal PMF**：
<span class="course-math course-math-display" data-tex="p_{X}(x_{i})=P(X=x_{i})=\sum _{j=1}^{\infty }p_{ij}\triangleq p_{i\cdot }" data-display="true"><code>p_{X}(x_{i})=P(X=x_{i})=\sum _{j=1}^{\infty }p_{ij}\triangleq p_{i\cdot }</code></span>
<span class="course-math course-math-display" data-tex="p_{Y}(x_{i})=P(Y=y_{i})=\sum _{i=1}^{\infty }p_{ij}\triangleq p_{\cdot j}" data-display="true"><code>p_{Y}(x_{i})=P(Y=y_{i})=\sum _{i=1}^{\infty }p_{ij}\triangleq p_{\cdot j}</code></span>
这些画一个表格来看就很清楚了。

**Joint PDF:** 对连续随机向量 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span>，对任意 <span class="course-math" data-tex="D\subseteq \mathbb{R} ^{2}" data-display="false"><code>D\subseteq \mathbb{R} ^{2}</code></span>：
<span class="course-math course-math-display" data-tex="P((X,Y)\in D)=\iint_{(x,y)\in D} f(x,y)\,\mathrm{d}x\mathrm{d}y" data-display="true"><code>P((X,Y)\in D)=\iint_{(x,y)\in D} f(x,y)\,\mathrm{d}x\mathrm{d}y</code></span>
则 <span class="course-math" data-tex="f(x,y)" data-display="false"><code>f(x,y)</code></span> 称为 joint PDF。特别的，它与 joint CDF 的关系为：
<span class="course-math course-math-display" data-tex="F(x,y)=\int _{-\infty }^{y}\int _{-\infty }^{x} f(u,v)\,\mathrm{d}u\,\mathrm{d}v" data-display="true"><code>F(x,y)=\int _{-\infty }^{y}\int _{-\infty }^{x} f(u,v)\,\mathrm{d}u\,\mathrm{d}v</code></span>
可以用曲面图（Surface plot）或等高线图（Contour plot）来表示 joint PDF。

**Marginal PDF：** 对连续随机向量 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span>，<span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 的 marginal PDF：
<span class="course-math course-math-display" data-tex="f_{X}(x)=\int_{-\infty}^{\infty} f(x,y)\,\mathrm{d}y" data-display="true"><code>f_{X}(x)=\int_{-\infty}^{\infty} f(x,y)\,\mathrm{d}y</code></span>
<span class="course-math course-math-display" data-tex="f_{Y}(y)=\int_{-\infty}^{\infty} f(x,y)\,\mathrm{d}x" data-display="true"><code>f_{Y}(y)=\int_{-\infty}^{\infty} f(x,y)\,\mathrm{d}x</code></span>
这里，joint PDF 可以定义 marginal PDF（通过 CDF 的求导），而反过来不行。


## Conditional PMF / PDF
{: #section-2 }


对离散随机向量 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span> 在 <span class="course-math" data-tex="Y=y" data-display="false"><code>Y=y</code></span> 的条件下，其 joint PMF 为 <span class="course-math" data-tex="p(x,y)" data-display="false"><code>p(x,y)</code></span>，那么 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的 **conditional PMF** 定义为
<span class="course-math course-math-display" data-tex="p_{X\mid Y}(x\mid y)\triangleq{}P(X=x\mid Y=y)= \frac{p(x,y)}{p_{Y}(y)}" data-display="true"><code>p_{X\mid Y}(x\mid y)\triangleq{}P(X=x\mid Y=y)= \frac{p(x,y)}{p_{Y}(y)}</code></span>
这里要求 <span class="course-math" data-tex="p_{Y}(y)&gt;0" data-display="false"><code>p_{Y}(y)&gt;0</code></span>。

类似的对连续随机变量，我们有 conditional PDF：
<span class="course-math course-math-display" data-tex="f_{X\mid Y}(x\mid y)\triangleq{}\frac{f(x,y)}{f_{Y}(y)}" data-display="true"><code>f_{X\mid Y}(x\mid y)\triangleq{}\frac{f(x,y)}{f_{Y}(y)}</code></span>
这里要求 <span class="course-math" data-tex="f_{Y}(y)&gt;0" data-display="false"><code>f_{Y}(y)&gt;0</code></span>。
{% endraw %}
