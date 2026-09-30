---
title: "Probability Basic - 概率基础"
course_id: "probability-statistics"
course_title: "概率与统计"
section: ""
status: "updating"
reference: false
layout: "course"
permalink: "/courses/probability-statistics/probability-basic/"
course_page: true
doc_type: "note"
description: "概率与统计 · Probability Basic - 概率基础"
excerpt: "概率与统计 · Probability Basic - 概率基础"
---

{% raw %}
## 随机事件
{: #section-1 }

 随机试验（Random Experiment / Experiment）：
 - 可重复
 - 所有结果确定可知
 - 一次只出现一个结果，且结果不可预测

样本点（Sample Point）：每个可能的基本结果（fundamental outcome）。记作 <span class="course-math" data-tex="\omega" data-display="false"><code>\omega</code></span>。
样本空间（Sample Space）：包含一个实验的所有样本点的集合。记作 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span>。
随机事件（Random Event / Event）：样本空间的一个子集。记作一个大写字母，如 <span class="course-math" data-tex="A,B,C" data-display="false"><code>A,B,C</code></span>。

事件之间的关系和集合论中的一样：
- 包含（Inclusion）：<span class="course-math" data-tex="A\subset B" data-display="false"><code>A\subset B</code></span>
- 和/并（Sum/Union）：<span class="course-math" data-tex="A\cup B(A+B)" data-display="false"><code>A\cup B(A+B)</code></span>
- 积/交（Product/Intersection）：<span class="course-math" data-tex="A\cap B(AB)" data-display="false"><code>A\cap B(AB)</code></span>
- 差（Difference）：<span class="course-math" data-tex="A-B(A\backslash B)" data-display="false"><code>A-B(A\backslash B)</code></span>
- 互斥（Mutually exclusive/disjoint）：<span class="course-math" data-tex="A\cap B=\varnothing" data-display="false"><code>A\cap B=\varnothing</code></span>
- 对立/互补（Complement）：<span class="course-math" data-tex="A\cap B=\varnothing \&amp;A\cup B=\Omega" data-display="false"><code>A\cap B=\varnothing \&amp;A\cup B=\Omega</code></span>

且事件之间的运算满足：
- 交换律（Communicative Laws）：<span class="course-math" data-tex="A \cap B=B\cap A" data-display="false"><code>A \cap B=B\cap A</code></span>
- 结合律（Associative laws）：<span class="course-math" data-tex="A\cap (B\cap C)=(A\cap B)\cap C" data-display="false"><code>A\cap (B\cap C)=(A\cap B)\cap C</code></span>
- 分配率（Distributive Law）：<span class="course-math" data-tex="A\cup(B\cap C)=(A\cup B)\cap(A\cup C)" data-display="false"><code>A\cup(B\cap C)=(A\cup B)\cap(A\cup C)</code></span>
- 德摩根律（De Morgan's Laws）：<span class="course-math" data-tex="\overline{\bigcup_{i=1}^{\infty} A_i} = \bigcap_{i=1}^{\infty} \overline{A_i}, \qquad \overline{\bigcap_{i=1}^{\infty} A_i} = \bigcup_{i=1}^{\infty} \overline{A_i}" data-display="false"><code>\overline{\bigcup_{i=1}^{\infty} A_i} = \bigcap_{i=1}^{\infty} \overline{A_i}, \qquad \overline{\bigcap_{i=1}^{\infty} A_i} = \bigcup_{i=1}^{\infty} \overline{A_i}</code></span>

## 概率
{: #section-2 }

概率测度（Probability Measure），简称概率（Probability），是一个定义在样本空间 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 的子集上的实值函数，满足一下三个公理：
- 非负性（Non-negativity）：对任意 <span class="course-math" data-tex="A\subset \Omega" data-display="false"><code>A\subset \Omega</code></span>，<span class="course-math" data-tex="P(A)\geq 0" data-display="false"><code>P(A)\geq 0</code></span>。
- 规范型（Normalization）：<span class="course-math" data-tex="P(\Omega)=1" data-display="false"><code>P(\Omega)=1</code></span>。
- 可加性（Additivity）：对于任何互斥事件 <span class="course-math" data-tex="A_{1},A_{2},\dots" data-display="false"><code>A_{1},A_{2},\dots</code></span>，有
<span class="course-math course-math-display" data-tex="P\left( \bigcup_{i=1}^\infty A_{i}\right)=\sum_{i=1}^{\infty}P(A_{i})" data-display="true"><code>P\left( \bigcup_{i=1}^\infty A_{i}\right)=\sum_{i=1}^{\infty}P(A_{i})</code></span>
概率空间（Probability Space）：<span class="course-math" data-tex="(\Omega, A, P)" data-display="false"><code>(\Omega, A, P)</code></span>

由公理可以推出概率的一些性质：
- <span class="course-math" data-tex="P(\varnothing)=0" data-display="false"><code>P(\varnothing)=0</code></span>。
- 有限可加性（Finite Additivity）：
<span class="course-math course-math-display" data-tex="P\left( \bigcup_{i=1}^n A_{i}\right)=\sum_{i=1}^{n}P(A_{i})" data-display="true"><code>P\left( \bigcup_{i=1}^n A_{i}\right)=\sum_{i=1}^{n}P(A_{i})</code></span>
- <span class="course-math" data-tex="P(\overline{A})=1-P(A)" data-display="false"><code>P(\overline{A})=1-P(A)</code></span>。
- <span class="course-math" data-tex="0\leq P(A)\leq 1" data-display="false"><code>0\leq P(A)\leq 1</code></span>
- 单调性（Monotonicity）：若 <span class="course-math" data-tex="A\subset B" data-display="false"><code>A\subset B</code></span>，则 <span class="course-math" data-tex="P(A)\leq P(B)" data-display="false"><code>P(A)\leq P(B)</code></span> 且 <span class="course-math" data-tex="P(B-A)=P(B)-P(A)" data-display="false"><code>P(B-A)=P(B)-P(A)</code></span>。
- 加法定律（The addition law）：<span class="course-math" data-tex="P(A\cup B)=P(A)+P(B)-P(AB)" data-display="false"><code>P(A\cup B)=P(A)+P(B)-P(AB)</code></span>。
- 容斥原理（The inclusion-exclusion principle）：（<span class="course-math" data-tex="A_{1},A_{2},\dots,A_{n}" data-display="false"><code>A_{1},A_{2},\dots,A_{n}</code></span> 不必互斥）：
<span class="course-math course-math-display" data-tex="P\left(\bigcup_{i=1}^{n} A_i\right)&#10;=&#10;\sum_{i=1}^{n}P(A_i)&#10;-\sum_{1\le i&lt;j\le n}P(A_i\cap A_j)&#10;+\sum_{1\le i&lt;j&lt;k\le n}P(A_i\cap A_j\cap A_k)&#10;-\cdots&#10;+(-1)^{n+1}P(A_1\cap\cdots\cap A_n)" data-display="true"><code>P\left(\bigcup_{i=1}^{n} A_i\right)&#10;=&#10;\sum_{i=1}^{n}P(A_i)&#10;-\sum_{1\le i&lt;j\le n}P(A_i\cap A_j)&#10;+\sum_{1\le i&lt;j&lt;k\le n}P(A_i\cap A_j\cap A_k)&#10;-\cdots&#10;+(-1)^{n+1}P(A_1\cap\cdots\cap A_n)</code></span>
结合加法定律，利用数学归纳法即可证明容斥原理。
## 计算概率
{: #section-3 }

### 古典概型 （Classical Model of Probability）
{: #section-4 }

一个随机试验满足：
- 样本空间 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 中只有有限个样本点： <span class="course-math" data-tex="\Omega=\{ w=\omega_{1},\omega_{2},\dots,\omega _{n} \}" data-display="false"><code>\Omega=\{ w=\omega_{1},\omega_{2},\dots,\omega _{n} \}</code></span>。
- 每个样本点是等可能的：<span class="course-math" data-tex="P(\{ \omega_{1} \})=\dots=P(\{ \omega_{n} \})=\frac{1}{n}" data-display="false"><code>P(\{ \omega_{1} \})=\dots=P(\{ \omega_{n} \})=\frac{1}{n}</code></span>
那么计算概率只需要数样本点：
<span class="course-math course-math-display" data-tex="P(A)= \frac{k}{n}" data-display="true"><code>P(A)= \frac{k}{n}</code></span>
其中 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 是事件 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 包含的样本点个数。

>  Simpson's Paradox：即使第一行的两个盒子中，红球比例都比第二行的两个盒子高，合起来时反而是下面的盒子红球比例更高。
>  <img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Probability%20Basic%20-%20%E6%A6%82%E7%8E%87%E5%9F%BA%E7%A1%80.png' | relative_url }}{% raw %}" alt="Probability Basic - 概率基础" width="415" loading="lazy">

计算概率
- 加法原理（Addition principle）：分类
- 乘法原理（Multiplication principle）：分步
- 排列数（Permutation）：无重复随机抽取，有序 <span class="course-math" data-tex="A_{n}^k= \frac{n!}{(n-k)!}" data-display="false"><code>A_{n}^k= \frac{n!}{(n-k)!}</code></span> 
- 组合数（Combination）：无重复随机抽取，无序 <span class="course-math" data-tex="C_{n}^k=\binom{n}{k}= \frac{n!}{k!(n-k)!}" data-display="false"><code>C_{n}^k=\binom{n}{k}= \frac{n!}{k!(n-k)!}</code></span>

例：<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个人， <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个纸条，纸条中有 <span class="course-math" data-tex="m(&lt;n)" data-display="false"><code>m(&lt;n)</code></span> 个中奖，每个人按顺序抽签得到纸条。则每个人中奖概率如何计算？
-  样本空间：等价于一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 位的二进制数，其中有 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 位为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。故样本点个数为 <span class="course-math" data-tex="\binom{n}{m}" data-display="false"><code>\binom{n}{m}</code></span>。
-  中奖这个事件的样本点个数为 <span class="course-math" data-tex="\binom{n-1}{m-1}" data-display="false"><code>\binom{n-1}{m-1}</code></span>，相当于固定你的顺序那一位为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的排列方法数。
- 那么中奖概率为 <span class="course-math" data-tex="\frac{\binom{n-1}{m-1}}{\binom{n}{m}}= \frac{m}{n}" data-display="false"><code>\frac{\binom{n-1}{m-1}}{\binom{n}{m}}= \frac{m}{n}</code></span>。
例：<span class="course-math" data-tex="n(&lt;365)" data-display="false"><code>n(&lt;365)</code></span> 个人的生日存在重复的概率为？
- 样本空间：把所有人的生日排成一列，共有 <span class="course-math" data-tex="365^n" data-display="false"><code>365^n</code></span> 种。
- “<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个人的生日不存在重复“的样本点个数：<span class="course-math" data-tex="A_{365}^n" data-display="false"><code>A_{365}^n</code></span> 种。
- 故原事件的概率为 <span class="course-math" data-tex="1- A_{365}^n/365^n" data-display="false"><code>1- A_{365}^n/365^n</code></span>。
例：错位排列的概率。
- 考虑补事件 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>：至少有一个人到了它应该在的位置。
- 设 <span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 为：编号为 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的人到了它应该在的位置。
- 那么容斥原理： <span class="course-math" data-tex="P(A)=P(A_{1}\cup A_{2}\cup\dots\cup A_{n})=\sum P(A_{i})-\sum P(A_{i}A_{j})+\sum P(A_{i}A_{j}A_{k})\dots" data-display="false"><code>P(A)=P(A_{1}\cup A_{2}\cup\dots\cup A_{n})=\sum P(A_{i})-\sum P(A_{i}A_{j})+\sum P(A_{i}A_{j}A_{k})\dots</code></span> 
- 其中 <span class="course-math" data-tex="P(A_{i})= \frac{(n-1)!}{n!}, P(A_{i}A_{j})= \frac{(n-2)!}{n!}" data-display="false"><code>P(A_{i})= \frac{(n-1)!}{n!}, P(A_{i}A_{j})= \frac{(n-2)!}{n!}</code></span>，以此类推。
- 最终可以算出 <span class="course-math" data-tex="P(A)=1-\frac{1}{2!}+\frac{1}{3!}+\dots+(-1)^{n-1} \frac{1}{n!}" data-display="false"><code>P(A)=1-\frac{1}{2!}+\frac{1}{3!}+\dots+(-1)^{n-1} \frac{1}{n!}</code></span>。
- 当 <span class="course-math" data-tex="n\to \infty" data-display="false"><code>n\to \infty</code></span>，<span class="course-math" data-tex="P(A)\to 1-\frac{1}{e}" data-display="false"><code>P(A)\to 1-\frac{1}{e}</code></span>。
- 错位排列的概率 <span class="course-math" data-tex="P(\overline{A})\to \frac{1}{e}" data-display="false"><code>P(\overline{A})\to \frac{1}{e}</code></span>。
- 错排数 <span class="course-math" data-tex="D_{n}=n!P(A)" data-display="false"><code>D_{n}=n!P(A)</code></span>。
### 几何概型（Geometric Model of Probability）
{: #section-5 }

几何概型适用于：随机事件可表示成在一个有界区域 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 上投点，每一个点是等可能的。
<span class="course-math course-math-display" data-tex="P(A)= \frac{\text{The length / area / volume of }A}{\text{Total length / area / volume of }\Omega}" data-display="true"><code>P(A)= \frac{\text{The length / area / volume of }A}{\text{Total length / area / volume of }\Omega}</code></span>
贝特朗悖论：考虑一个半径为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的圆，一个随机的弦的长度大于内接等边三角形的边长的概率为？
- 用不同的视角，会存在不同的答案，都是自洽的。
- 例如，在一条半径上考虑弦中点的位置；考虑固定一点，另一点的位置；在整个圆中考虑弦中点的位置。
- 关键在于如何定义“随机”，也就是如何定义样本空间。

## 条件概率（Conditional Probability）
{: #section-6 }

在事件 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 发生的情况下，事件 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的条件概率为：
<span class="course-math course-math-display" data-tex="P(A&#124;B)= \frac{P(AB)}{P(B)}" data-display="true"><code>P(A&#124;B)= \frac{P(AB)}{P(B)}</code></span>
也就是说，样本空间从 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 变成了 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span>。
- 乘法定律：<span class="course-math" data-tex="P(AB)=P(A&#124;B)P(B)" data-display="false"><code>P(AB)=P(A&#124;B)P(B)</code></span>
- 全概率公式：<span class="course-math" data-tex="P(A)=P(A \overline{B})+P(AB)=P(A&#124;\overline{B})P(\overline{B})+P(A&#124;B)P(B)" data-display="false"><code>P(A)=P(A \overline{B})+P(AB)=P(A&#124;\overline{B})P(\overline{B})+P(A&#124;B)P(B)</code></span>
- 链式法则：<span class="course-math" data-tex="P(A_{1}A_{2}\dots A_{n})=P(A_{n}&#124;A_{1}A_{2}\dots A_{n-1})P(A_{n-1}&#124;A_{1}A_{2}\dots A_{n-2})\dots P(A_{2}&#124;A_{1})P(A_{1})" data-display="false"><code>P(A_{1}A_{2}\dots A_{n})=P(A_{n}&#124;A_{1}A_{2}\dots A_{n-1})P(A_{n-1}&#124;A_{1}A_{2}\dots A_{n-2})\dots P(A_{2}&#124;A_{1})P(A_{1})</code></span>

贝叶斯定理（Bayes' Theorem）
<span class="course-math course-math-display" data-tex="P(B_{i}&#124;A)= \frac{P(B_{i})P(A&#124;B_{i})}{\sum P(B_{i})P(A&#124;B_{i})}" data-display="true"><code>P(B_{i}&#124;A)= \frac{P(B_{i})P(A&#124;B_{i})}{\sum P(B_{i})P(A&#124;B_{i})}</code></span>
其中 <span class="course-math" data-tex="B_{1}, \dots, B_{n}" data-display="false"><code>B_{1}, \dots, B_{n}</code></span> 是样本空间的一个划分（partition）。
这里 <span class="course-math" data-tex="P(B_{i}&#124;A)" data-display="false"><code>P(B_{i}&#124;A)</code></span> 称为 <span class="course-math" data-tex="B_{i}" data-display="false"><code>B_{i}</code></span> 的后验概率（Posterior probability）； <span class="course-math" data-tex="P(B_{i})" data-display="false"><code>P(B_{i})</code></span> 叫做 <span class="course-math" data-tex="B_{i}" data-display="false"><code>B_{i}</code></span> 的先验概率（Prior probability）。

独立性（Independence）：
- 从条件概率来看，就是事件 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的发生不影响 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的概率，反之亦然。
- 两个事件相互独立就是 <span class="course-math" data-tex="P(AB)=P(A)P(B)" data-display="false"><code>P(AB)=P(A)P(B)</code></span>。
- 三个事件相互独立就是 <span class="course-math" data-tex="P(AB)=P(A)P(B), P(AC)=P(A)P(C), P(BC)=P(B)P(C), P(ABC)=P(A)P(B)P(C)" data-display="false"><code>P(AB)=P(A)P(B), P(AC)=P(A)P(C), P(BC)=P(B)P(C), P(ABC)=P(A)P(B)P(C)</code></span>。
- <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个事件 <span class="course-math" data-tex="A_{1}\dots A_{n}" data-display="false"><code>A_{1}\dots A_{n}</code></span> 相互独立：对任意这些事件的子集 <span class="course-math" data-tex="A_{i_{1}}, A_{i_{2}}\dots A_{i_{}k}" data-display="false"><code>A_{i_{1}}, A_{i_{2}}\dots A_{i_{}k}</code></span>，都有 <span class="course-math" data-tex="P(A_{i_{1}}\dots A_{i_{k}})=P(A_{i_{1}})\dots P(A_{i_{k}})" data-display="false"><code>P(A_{i_{1}}\dots A_{i_{k}})=P(A_{i_{1}})\dots P(A_{i_{k}})</code></span>。
 
条件独立性（Conditional Independence）
- 把上面的条件概率的定义改成 <span class="course-math" data-tex="P(A_{i_{1}}\dots A_{i_{k}}&#124;B)=P(A_{i_{1}}&#124;B)\dots P(A_{i_{k}}&#124;B)" data-display="false"><code>P(A_{i_{1}}\dots A_{i_{k}}&#124;B)=P(A_{i_{1}}&#124;B)\dots P(A_{i_{k}}&#124;B)</code></span>。

条件独立性和独立性是互相不能推出的。
{% endraw %}
