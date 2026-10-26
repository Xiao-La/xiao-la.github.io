---
title: "Joint Probability - 联合概率"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
created_at: "2026-10-10T16:52:41+08:00"
updated_at: "2026-10-25T22:34:16+08:00"
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

记号：我们说 <span class="course-math" data-tex="X_{1},X_{2}, \dots , X_{n} \overset{\text{i.i.d.}}{\sim} D" data-display="false"><code>X_{1},X_{2}, \dots , X_{n} \overset{\text{i.i.d.}}{\sim} D</code></span>，若 <span class="course-math" data-tex="X_{1},X_{2}, \dots,X_{n}" data-display="false"><code>X_{1},X_{2}, \dots,X_{n}</code></span> 是相互独立的且服从相同的分布 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span>（Independent and identically distributed, i.i.d）。

高斯积分：
<span class="course-math course-math-display" data-tex="\int_{-\infty}^{\infty} e^{-\frac{(x-\mu)^{2}}{2\sigma ^{2}}} \,\mathrm{d}x=\sqrt{2\pi} \sigma" data-display="true"><code>\int_{-\infty}^{\infty} e^{-\frac{(x-\mu)^{2}}{2\sigma ^{2}}} \,\mathrm{d}x=\sqrt{2\pi} \sigma</code></span>


## Joint CDF / PMF / PDF
{: #section-1 }


**Joint CDF:**  二元随机向量 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span> 的 CDF 定义为
<span class="course-math course-math-display" data-tex="F(x,y)=P(X\leq{}x,Y\leq{}y )" data-display="true"><code>F(x,y)=P(X\leq{}x,Y\leq{}y )</code></span>
这就叫 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 和 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span> 的 joint CDF。这里可以用它来计算一个区域内的概率：
<span class="course-math course-math-display" data-tex="P\{ x_{1}&lt;X\leq{}x_{2},y_{1}&lt;Y\leq{}y_{2} \}=F(x_{2},y_{2})-F(x_{1},y_{2})-F(x_{2},y_{1})+F(x_{1},y_{1})" data-display="true"><code>P\{ x_{1}&lt;X\leq{}x_{2},y_{1}&lt;Y\leq{}y_{2} \}=F(x_{2},y_{2})-F(x_{1},y_{2})-F(x_{2},y_{1})+F(x_{1},y_{1})</code></span>

**Marginal CDF:** 若 <span class="course-math" data-tex="F(x,y)" data-display="false"><code>F(x,y)</code></span> 是 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span> 的 joint CDF，我们说 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 的 marginal CDF 是
<span class="course-math course-math-display" data-tex="F_{X}(x)=F(x,\infty ), F_Y(y)=F(\infty ,y)" data-display="true"><code>F_{X}(x)=F(x,\infty ), F_Y(y)=F(\infty ,y)</code></span>

对于离散随机向量，**joint PMF**：
<span class="course-math course-math-display" data-tex="p_{ij}\triangleq{}p(x_{i},y_{j})=P(X=x_{i},Y=y_{j})" data-display="true"><code>p_{ij}\triangleq{}p(x_{i},y_{j})=P(X=x_{i},Y=y_{j})</code></span>
<span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 的 **marginal PMF**：
<span class="course-math course-math-display" data-tex="p_{X}(x_{i})=P(X=x_{i})=\sum _{j=1}^{\infty }p_{ij}\triangleq p_{i\cdot }" data-display="true"><code>p_{X}(x_{i})=P(X=x_{i})=\sum _{j=1}^{\infty }p_{ij}\triangleq p_{i\cdot }</code></span>
<span class="course-math course-math-display" data-tex="p_{Y}(y_{j})=P(Y=y_{j})=\sum _{i=1}^{\infty }p_{ij}\triangleq p_{\cdot j}" data-display="true"><code>p_{Y}(y_{j})=P(Y=y_{j})=\sum _{i=1}^{\infty }p_{ij}\triangleq p_{\cdot j}</code></span>
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

利用这个定义，我们有 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的 marginal PDF 的一种求法：
<span class="course-math course-math-display" data-tex="f_{X}(x)= \int _{-\infty}^{\infty}f(x,y)\,\mathrm{d}y=\int_{-\infty}^{\infty} f_{X\mid Y}(x\mid y)f_{Y}(y)\,\mathrm{d}y" data-display="true"><code>f_{X}(x)= \int _{-\infty}^{\infty}f(x,y)\,\mathrm{d}y=\int_{-\infty}^{\infty} f_{X\mid Y}(x\mid y)f_{Y}(y)\,\mathrm{d}y</code></span>
这也就是连续情况下的全概率公式。回忆离散情况：
<span class="course-math course-math-display" data-tex="p_{X}(x)=\sum _{j=1}^{\infty }p(x,y_{j})= \sum _{j=1}^{\infty} p_{X\mid Y}(x\mid y_{j})p_{Y}(y_{j})" data-display="true"><code>p_{X}(x)=\sum _{j=1}^{\infty }p(x,y_{j})= \sum _{j=1}^{\infty} p_{X\mid Y}(x\mid y_{j})p_{Y}(y_{j})</code></span>

## 独立性与协方差
{: #section-3 }


**利用 Joint CDF 重新定义独立性。** 若 <span class="course-math" data-tex="(X_{1},X_{2},\dots,X_{n})" data-display="false"><code>(X_{1},X_{2},\dots,X_{n})</code></span> 有 joint CDF <span class="course-math" data-tex="F" data-display="false"><code>F</code></span>，那么我们说 <span class="course-math" data-tex="X_{1},X_{2},\dots,X_{n}" data-display="false"><code>X_{1},X_{2},\dots,X_{n}</code></span> 相互独立，当
<span class="course-math course-math-display" data-tex="F(x_{1},x_{2},\dots,x_{n})=F_{X_{1}}(x_{1})F_{X_{2}}(x_{2})\dots F_{X_{n}}(x_{n})" data-display="true"><code>F(x_{1},x_{2},\dots,x_{n})=F_{X_{1}}(x_{1})F_{X_{2}}(x_{2})\dots F_{X_{n}}(x_{n})</code></span>
推论：若离散随机变量 <span class="course-math" data-tex="X_{1},X_{2},\dots,X_{n}" data-display="false"><code>X_{1},X_{2},\dots,X_{n}</code></span> 相互独立，那么
<span class="course-math course-math-display" data-tex="p(x_{1},x_{2},\dots,x_{n})=p_{X_{1}}(x_{1})p_{X_{2}}(x_{2})\dots p_{X_{n}}(x_{n})" data-display="true"><code>p(x_{1},x_{2},\dots,x_{n})=p_{X_{1}}(x_{1})p_{X_{2}}(x_{2})\dots p_{X_{n}}(x_{n})</code></span>
若连续随机变量 <span class="course-math" data-tex="X_{1},X_{2},\dots,X_{n}" data-display="false"><code>X_{1},X_{2},\dots,X_{n}</code></span> 相互独立，那么下式几乎处处成立（反之也成立）：
<span class="course-math course-math-display" data-tex="f(x_{1},x_{2},\dots,x_{n})=f_{X_{1}}(x_{1})f_{X_{2}}(x_{2})\dots f_{X_{n}}(x_{n})" data-display="true"><code>f(x_{1},x_{2},\dots,x_{n})=f_{X_{1}}(x_{1})f_{X_{2}}(x_{2})\dots f_{X_{n}}(x_{n})</code></span>
几乎处处（a.e.）：除一个零测集之外成立（二维时就是面积为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的集合）。PDF 在零测集上的取值不影响概率。

要说明 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 不独立，单点不满足乘积分解一般不够；证明 <span class="course-math" data-tex="f(x,y)\neq f_{X}(x)f_{Y}(y)" data-display="false"><code>f(x,y)\neq f_{X}(x)f_{Y}(y)</code></span> 在一个面积非零的集合上成立即可，不一定要算积分。也可以找一个区域 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span>，使得
<span class="course-math course-math-display" data-tex="\iint_{D} f(x,y)\,\mathrm{d}x\mathrm{d}y\neq\iint_{D} f_{X}(x)f_{Y}(y)\,\mathrm{d}x\mathrm{d}y" data-display="true"><code>\iint_{D} f(x,y)\,\mathrm{d}x\mathrm{d}y\neq\iint_{D} f_{X}(x)f_{Y}(y)\,\mathrm{d}x\mathrm{d}y</code></span>
若两边的密度在该点附近连续，单点不等就能推出一个邻域内不等，因此也可以判断不独立。

若 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 是相互独立的，那么对任意函数 <span class="course-math" data-tex="g" data-display="false"><code>g</code></span> 和 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span>，有
<span class="course-math course-math-display" data-tex="\mathrm{E}(g(X)h(Y))=\mathrm{E}(g(X))\mathrm{E}(h(Y))" data-display="true"><code>\mathrm{E}(g(X)h(Y))=\mathrm{E}(g(X))\mathrm{E}(h(Y))</code></span>
<span class="course-math course-math-display" data-tex="\operatorname{Var}(g(X)\pm h(Y))=\operatorname{Var}(g(X))+\operatorname{Var}(h(Y))" data-display="true"><code>\operatorname{Var}(g(X)\pm h(Y))=\operatorname{Var}(g(X))+\operatorname{Var}(h(Y))</code></span>
特例：对独立的 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span>，有 <span class="course-math" data-tex="\mathrm{E}(XY)=\mathrm{E}(X)\mathrm{E}(Y), \operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)" data-display="false"><code>\mathrm{E}(XY)=\mathrm{E}(X)\mathrm{E}(Y), \operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)</code></span>。
注意到对一般的随机变量 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span>，
<span class="course-math course-math-display" data-tex="\operatorname{Var}(X+Y)-\operatorname{Var}(X)-\operatorname{Var}(Y)=2\mathrm{E}((X-\mathrm{E}(X))(Y-\mathrm{E}(Y)))" data-display="true"><code>\operatorname{Var}(X+Y)-\operatorname{Var}(X)-\operatorname{Var}(Y)=2\mathrm{E}((X-\mathrm{E}(X))(Y-\mathrm{E}(Y)))</code></span>
我们定义随机变量 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 与 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span> **协方差（Covariance）** 为
<span class="course-math course-math-display" data-tex="\operatorname{Cov}(X, Y)\triangleq \mathrm{E}((X-\mathrm{E}(X))(Y-\mathrm{E}(Y)))=\mathrm{E}(XY)-\mathrm{E}(X)\mathrm{E}(Y)" data-display="true"><code>\operatorname{Cov}(X, Y)\triangleq \mathrm{E}((X-\mathrm{E}(X))(Y-\mathrm{E}(Y)))=\mathrm{E}(XY)-\mathrm{E}(X)\mathrm{E}(Y)</code></span>
这刻画了 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 的**线性相关性**。
- 若 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 独立，那么 <span class="course-math" data-tex="\operatorname{Cov}(X, Y)=0" data-display="false"><code>\operatorname{Cov}(X, Y)=0</code></span>。
- 若 <span class="course-math" data-tex="\operatorname{Cov}(X, Y)=0" data-display="false"><code>\operatorname{Cov}(X, Y)=0</code></span>，那么 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 不一定独立。我们说它们 **不相关（Uncorrelated）**。
- 这是因为，不相关的随机变量仍可能存在非线性关系，因此不一定独立。
- 若 <span class="course-math" data-tex="\operatorname{Cov}(X, Y)&gt;0" data-display="false"><code>\operatorname{Cov}(X, Y)&gt;0</code></span>，我们说 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 正相关。
- 若 <span class="course-math" data-tex="\operatorname{Cov}(X, Y)&lt;0" data-display="false"><code>\operatorname{Cov}(X, Y)&lt;0</code></span>，我们说 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 负相关。

有如下的性质：
- <span class="course-math" data-tex="\operatorname{Cov}(X, X)=\operatorname{Var}(X)" data-display="false"><code>\operatorname{Cov}(X, X)=\operatorname{Var}(X)</code></span>
- <span class="course-math" data-tex="\operatorname{Var}(X\pm Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)\pm 2\operatorname{Cov}(X, Y)" data-display="false"><code>\operatorname{Var}(X\pm Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)\pm 2\operatorname{Cov}(X, Y)</code></span>
- <span class="course-math" data-tex="\operatorname{Cov}(X, Y)=\operatorname{Cov}(Y, X)" data-display="false"><code>\operatorname{Cov}(X, Y)=\operatorname{Cov}(Y, X)</code></span>
- <span class="course-math" data-tex="\operatorname{Cov}(X, c)=0" data-display="false"><code>\operatorname{Cov}(X, c)=0</code></span>，其中 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 为常数
- <span class="course-math" data-tex="\operatorname{Cov}(aX, bY)=ab\operatorname{Cov}(X, Y)" data-display="false"><code>\operatorname{Cov}(aX, bY)=ab\operatorname{Cov}(X, Y)</code></span>
- <span class="course-math" data-tex="\operatorname{Cov}(X_{1}+X_{2}, Y)=\operatorname{Cov}(X_{1}, Y)+\operatorname{Cov}(X_{2}, Y)" data-display="false"><code>\operatorname{Cov}(X_{1}+X_{2}, Y)=\operatorname{Cov}(X_{1}, Y)+\operatorname{Cov}(X_{2}, Y)</code></span>
Bilinear Property:
<span class="course-math course-math-display" data-tex="\operatorname{Cov}\left( \sum_i a_{i}X_{i},  \sum_j b_{j}Y_{j}\right)=\sum_i \sum_j a_{i} b_{j}\operatorname{Cov}(X_{i},Y_{j} )" data-display="true"><code>\operatorname{Cov}\left( \sum_i a_{i}X_{i},  \sum_j b_{j}Y_{j}\right)=\sum_i \sum_j a_{i} b_{j}\operatorname{Cov}(X_{i},Y_{j} )</code></span>

### 相关系数
{: #section-4 }


由此定义相关系数（Correlation Coefficient）：
<span class="course-math course-math-display" data-tex="\rho _{XY}=\operatorname{Cor}(X, Y)\triangleq \mathrm{E}\left(  \frac{X-\mathrm{E}(X)}{\operatorname{SD}(X)}\cdot  \frac{Y-\mathrm{E}(Y)}{\operatorname{SD}(Y)} \right) = \frac{\operatorname{Cov}(X, Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}" data-display="true"><code>\rho _{XY}=\operatorname{Cor}(X, Y)\triangleq \mathrm{E}\left(  \frac{X-\mathrm{E}(X)}{\operatorname{SD}(X)}\cdot  \frac{Y-\mathrm{E}(Y)}{\operatorname{SD}(Y)} \right) = \frac{\operatorname{Cov}(X, Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}</code></span>
这衡量了 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span> 与 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 之间线性相关性的强度。<span class="course-math" data-tex="0\leq\lvert \rho \rvert\leq1" data-display="false"><code>0\leq\lvert \rho \rvert\leq1</code></span>，且 <span class="course-math" data-tex="\lvert \rho \rvert" data-display="false"><code>\lvert \rho \rvert</code></span> 越大，线性相关性就越强；<span class="course-math" data-tex="\rho" data-display="false"><code>\rho</code></span> 为正的时候是正相关，为负的时候是负相关。
- 考虑 <span class="course-math" data-tex="\hat{Y}=aX+b" data-display="false"><code>\hat{Y}=aX+b</code></span>，那么可以推导出 <span class="course-math" data-tex="\min _{a,b}\text{MSE}=\operatorname{Var}(Y)(1-\rho _{XY}^{2})" data-display="false"><code>\min _{a,b}\text{MSE}=\operatorname{Var}(Y)(1-\rho _{XY}^{2})</code></span>，其中 <span class="course-math" data-tex="\text{MSE}" data-display="false"><code>\text{MSE}</code></span> 表示均方误差。于是 <span class="course-math" data-tex="\lvert \rho \rvert" data-display="false"><code>\lvert \rho \rvert</code></span> 越大表示均方误差的最小值越小，也就是线性预测的准确度越高。
- 这个推导也可以证明 <span class="course-math" data-tex="\rho" data-display="false"><code>\rho</code></span> 的范围。


### 条件期望
{: #section-5 }


对于离散随机向量 <span class="course-math" data-tex="(X,Y)" data-display="false"><code>(X,Y)</code></span>，定义
<span class="course-math course-math-display" data-tex="\mathrm{E}(X\mid Y=y)\triangleq \sum _{k=1}^{\infty}x_{k}\cdot P(X=x_{k}\mid Y=y)" data-display="true"><code>\mathrm{E}(X\mid Y=y)\triangleq \sum _{k=1}^{\infty}x_{k}\cdot P(X=x_{k}\mid Y=y)</code></span>
类似的，对于连续的情况：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X\mid Y=y)\triangleq\int_{-\infty}^{\infty} xf_{X\mid Y}(x\mid y)\,\mathrm{d}x" data-display="true"><code>\mathrm{E}(X\mid Y=y)\triangleq\int_{-\infty}^{\infty} xf_{X\mid Y}(x\mid y)\,\mathrm{d}x</code></span>
这里会发现，给定 <span class="course-math" data-tex="Y=y" data-display="false"><code>Y=y</code></span> 下 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 的期望 <span class="course-math" data-tex="\mathrm{E}(X\mid Y=y)" data-display="false"><code>\mathrm{E}(X\mid Y=y)</code></span>是一个 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 的函数。那么有如下记号：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X\mid Y)= g(Y)" data-display="true"><code>\mathrm{E}(X\mid Y)= g(Y)</code></span>
这是一个随机变量。
当 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 相互独立的时候，有
<span class="course-math course-math-display" data-tex="\mathrm{E}(X\mid Y)=\mathrm{E}(X)" data-display="true"><code>\mathrm{E}(X\mid Y)=\mathrm{E}(X)</code></span>
不依赖于 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span>。

全期望公式（Law of Total Expectation）：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\mathrm{E}(\mathrm{E}(X\mid Y))" data-display="true"><code>\mathrm{E}(X)=\mathrm{E}(\mathrm{E}(X\mid Y))</code></span>
这是因为，以离散情况为例：
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\sum _{j} \mathrm{E}(X\mid Y=y_{j})P(Y=y_{j})" data-display="true"><code>\mathrm{E}(X)=\sum _{j} \mathrm{E}(X\mid Y=y_{j})P(Y=y_{j})</code></span>

## 多随机变量的变换
{: #section-6 }


若连续随机变量  <span class="course-math" data-tex="Z=g(X,Y)" data-display="false"><code>Z=g(X,Y)</code></span>，则 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> 的 CDF 可以这样去求：
<span class="course-math course-math-display" data-tex="F_{Z}(z)=P(g(X,Y)\leq z)= \int _{g(x,y)\leq z} f(x,y)\,\mathrm{d}x \mathrm{d}y" data-display="true"><code>F_{Z}(z)=P(g(X,Y)\leq z)= \int _{g(x,y)\leq z} f(x,y)\,\mathrm{d}x \mathrm{d}y</code></span>

若 <span class="course-math" data-tex="Z=X+Y" data-display="false"><code>Z=X+Y</code></span>，有如下结论，可以直接算出 PDF：
<span class="course-math course-math-display" data-tex="f_{Z}(z)= \int_{-\infty}^{\infty} f(x,z-x)\,\mathrm{d}x" data-display="true"><code>f_{Z}(z)= \int_{-\infty}^{\infty} f(x,z-x)\,\mathrm{d}x</code></span>
特别的，若 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 相互独立：
<span class="course-math course-math-display" data-tex="f_{Z}(z)=f_{X}*f_{Y}=\int_{-\infty}^{\infty} f_{X}(x)f_{Y}(z-x)\,\mathrm{d}x=\int_{-\infty}^{\infty} f_{X}(z-y)f_{Y}(y)\,\mathrm{d}y" data-display="true"><code>f_{Z}(z)=f_{X}*f_{Y}=\int_{-\infty}^{\infty} f_{X}(x)f_{Y}(z-x)\,\mathrm{d}x=\int_{-\infty}^{\infty} f_{X}(z-y)f_{Y}(y)\,\mathrm{d}y</code></span>
这里 <span class="course-math" data-tex="f_{X}*f_{Y}" data-display="false"><code>f_{X}*f_{Y}</code></span> 称为 <span class="course-math" data-tex="f_{X}" data-display="false"><code>f_{X}</code></span> 与 <span class="course-math" data-tex="f_{Y}" data-display="false"><code>f_{Y}</code></span> 的卷积（Convolution）。
离散的情况也类似。若 <span class="course-math" data-tex="X,Y" data-display="false"><code>X,Y</code></span> 相互独立且取非负整数值，可以用离散卷积：
<span class="course-math course-math-display" data-tex="p_{Z}(k)= \sum _{i=0}^{k}P(X=i)P(Y=k-i)=\sum _{j=0}^{k}P(X=k-j)P(Y=j)" data-display="true"><code>p_{Z}(k)= \sum _{i=0}^{k}P(X=i)P(Y=k-i)=\sum _{j=0}^{k}P(X=k-j)P(Y=j)</code></span>

例如，若 <span class="course-math" data-tex="T_{1},T_{2},\dots,T_{r}\overset{\text{i.i.d.}}{\sim}\mathrm{Exp}(\lambda)" data-display="false"><code>T_{1},T_{2},\dots,T_{r}\overset{\text{i.i.d.}}{\sim}\mathrm{Exp}(\lambda)</code></span>，那么通过上述的卷积公式可以算出 <span class="course-math" data-tex="Z=T_{1}+T_{2}+\dots+T_{r}" data-display="false"><code>Z=T_{1}+T_{2}+\dots+T_{r}</code></span> 的 PDF 为
<span class="course-math course-math-display" data-tex="f_{Z}(z)= \begin{cases}&#10;\frac{\lambda ^{r}}{(r-1)!}z^{r-1}e^{-\lambda z} &amp; z&gt;0 \\&#10;0 &amp; \text{otherwise} &#10;\end{cases}" data-display="true"><code>f_{Z}(z)= \begin{cases}&#10;\frac{\lambda ^{r}}{(r-1)!}z^{r-1}e^{-\lambda z} &amp; z&gt;0 \\&#10;0 &amp; \text{otherwise} &#10;\end{cases}</code></span>
这个分布就叫伽马分布（Gamma distribution），记作 <span class="course-math" data-tex="\mathrm{Gamma}(r,\lambda)" data-display="false"><code>\mathrm{Gamma}(r,\lambda)</code></span>.

再比如，若 <span class="course-math" data-tex="X_{1},X_{2}, \dots, X_{n}" data-display="false"><code>X_{1},X_{2}, \dots, X_{n}</code></span> 满足 <span class="course-math" data-tex="X_{i}\sim N(\mu _{i}, \sigma _{i}^{2})" data-display="false"><code>X_{i}\sim N(\mu _{i}, \sigma _{i}^{2})</code></span>，那么
<span class="course-math course-math-display" data-tex="\sum _{i=1}^{n}a_{i}X_{i}\sim N\left( \sum _{i=1} ^{n}a_{i}\mu _{i}, \sum _{i=1}^{n} a_{i}^{2} \sigma _{i}^{2}\right)" data-display="true"><code>\sum _{i=1}^{n}a_{i}X_{i}\sim N\left( \sum _{i=1} ^{n}a_{i}\mu _{i}, \sum _{i=1}^{n} a_{i}^{2} \sigma _{i}^{2}\right)</code></span>
也就是说，独立的正态分布随机变量的线性组合也服从正态分布。

再比如，独立的泊松分布随机变量的和也是泊松分布，且 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为这些随机变量的 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 之和。


## 中心极限定理（Central Limit Theorem, CLT）
{: #section-7 }


若 <span class="course-math" data-tex="X_{1},X_{2}, \dots" data-display="false"><code>X_{1},X_{2}, \dots</code></span> 是一系列 i.i.d 随机变量，令 <span class="course-math" data-tex="\mu \triangleq \mathrm{E}(X_{i}), \sigma ^{2}\triangleq \operatorname{Var}(X_{i})" data-display="false"><code>\mu \triangleq \mathrm{E}(X_{i}), \sigma ^{2}\triangleq \operatorname{Var}(X_{i})</code></span>。令 <span class="course-math" data-tex="S_{n}=X_{1}+X_{2}+\dots+X_{n}" data-display="false"><code>S_{n}=X_{1}+X_{2}+\dots+X_{n}</code></span>，以及 <span class="course-math" data-tex="\overline{X}_{n}=S_{n} / n" data-display="false"><code>\overline{X}_{n}=S_{n} / n</code></span>，考虑 <span class="course-math" data-tex="S_{n}" data-display="false"><code>S_{n}</code></span> 的标准化的版本：
<span class="course-math course-math-display" data-tex="Z_{n}= \frac{S_{n}-\mathrm{E}(S_{n})}{\sqrt{\operatorname{Var}(S_{n})}}= \frac{S_{n}-n\mu}{\sqrt{n\sigma ^{2}}}= \frac{\sqrt{n}(\overline{X}_{n}-\mu)}{\sigma}" data-display="true"><code>Z_{n}= \frac{S_{n}-\mathrm{E}(S_{n})}{\sqrt{\operatorname{Var}(S_{n})}}= \frac{S_{n}-n\mu}{\sqrt{n\sigma ^{2}}}= \frac{\sqrt{n}(\overline{X}_{n}-\mu)}{\sigma}</code></span>
那么 中心极限定理（CLT） 告诉我们，当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span>，有 <span class="course-math" data-tex="Z_{n}" data-display="false"><code>Z_{n}</code></span> 依分布收敛（Converges in distribution）到一个标准正态随机变量：
<span class="course-math course-math-display" data-tex="F_{Z_{n}}(z)=P(Z_{n}\leq z) \overset{n\to \infty}{\to} \Phi (z) \forall z" data-display="true"><code>F_{Z_{n}}(z)=P(Z_{n}\leq z) \overset{n\to \infty}{\to} \Phi (z) \forall z</code></span>
这里若 <span class="course-math" data-tex="X_{1},X_{2}, \dots" data-display="false"><code>X_{1},X_{2}, \dots</code></span> 就是服从正态分布的，那么不用 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span> 就会得到一个标准正态随机变量。

经验法则：当 <span class="course-math" data-tex="n\geq30" data-display="false"><code>n\geq30</code></span> 时可以考虑用标准正态分布来近似。

从中心极限定理就可以推出，<span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span> 时，二项分布近似于正态分布。具体来说，若 <span class="course-math" data-tex="S_{n}=X_{1}+\dots+X_{n}" data-display="false"><code>S_{n}=X_{1}+\dots+X_{n}</code></span>，其中 <span class="course-math" data-tex="X_{1},X_{2},\dots,X_{n}\overset{\text{i.i.d.}}{\sim}\mathrm{Bernoulli}(p)" data-display="false"><code>X_{1},X_{2},\dots,X_{n}\overset{\text{i.i.d.}}{\sim}\mathrm{Bernoulli}(p)</code></span>：
<span class="course-math course-math-display" data-tex="\frac{S_{n}-np}{\sqrt{np(1-p)}} \overset{\text{approx.}}{\sim}N(0,1)" data-display="true"><code>\frac{S_{n}-np}{\sqrt{np(1-p)}} \overset{\text{approx.}}{\sim}N(0,1)</code></span>
那么
<span class="course-math course-math-display" data-tex="S_{n} \overset{\text{approx.}}{\sim} N(np,np(1-p))" data-display="true"><code>S_{n} \overset{\text{approx.}}{\sim} N(np,np(1-p))</code></span>
之前我们还了解到，二项分布也可以用泊松分布估计。这里的经验：
- 若 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 大且 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 很小的时候，比如 <span class="course-math" data-tex="n&gt;100,p&lt;0.05" data-display="false"><code>n&gt;100,p&lt;0.05</code></span>，考虑用泊松分布 <span class="course-math" data-tex="\mathrm{Poisson}(np)" data-display="false"><code>\mathrm{Poisson}(np)</code></span> 近似。
- 若 <span class="course-math" data-tex="np\geq 5,n(1-p)\geq5" data-display="false"><code>np\geq 5,n(1-p)\geq5</code></span>，考虑用正态分布 <span class="course-math" data-tex="N(np,np(1-p))" data-display="false"><code>N(np,np(1-p))</code></span> 近似。

**连续性修正。**
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Joint%20Probability%20-%20%E8%81%94%E5%90%88%E6%A6%82%E7%8E%87.png' | relative_url }}{% raw %}" alt="Joint Probability - 联合概率" width="559" height="135" loading="lazy" decoding="async">
对整数值随机变量应用中心极限定理的时候（例如估计二项分布），若要算一个区间上的概率，先写成整数端点的闭区间，再把区间左右各扩大 <span class="course-math" data-tex="0.5" data-display="false"><code>0.5</code></span> 会算得更准确。极端情况： <span class="course-math" data-tex="P(X=x)" data-display="false"><code>P(X=x)</code></span> 转而计算 <span class="course-math" data-tex="P(x-0.5\leq X\leq x+0.5)" data-display="false"><code>P(x-0.5\leq X\leq x+0.5)</code></span>。
{% endraw %}
