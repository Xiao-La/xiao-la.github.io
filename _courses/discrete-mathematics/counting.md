---
title: "Counting - 计数"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-11-09T14:04:06+08:00"
updated_at: "2026-11-16T17:32:42+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/discrete-mathematics/counting/"
course_page: true
doc_type: "note"
description: "离散数学 · Counting - 计数"
excerpt: "离散数学 · Counting - 计数"
---

{% raw %}


## 计数原理
{: #section-1 }


- 乘法法则（the Product Rule）：分解成**相互依赖的**一系列计数，乘起来
- 加法法则（the Sum Rule）：分解成**独立的**一系列计数，加起来

穷举
- 树状图（Tree Diagrams）：用分支表示不同选择，数叶子节点的个数。

鸽巢原理（Pigeonhole Principle）
- 物品的个数大于箱子的个数，把物品放到箱子里，那么至少有一个箱子有至少两个物品。（反证法）
- 扩展版本：<span class="course-math" data-tex="N" data-display="false"><code>N</code></span> 个物品，<span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个箱子，至少有一个箱子有至少 <span class="course-math" data-tex="\lceil N / k \rceil" data-display="false"><code>\lceil N / k \rceil</code></span> 个物品。（反证法）


### 双射原理
{: #section-2 }


一个集合到自己的双射（bijection）叫做置换（permutation）。
对有限集合来说，存在双射的两个集合，元素个数一定相等。这也是一种计数原理：双射原理（the Bijection Principle）。
- 例如求和 <span class="course-math" data-tex="\sum _{i=1}^{n}\sum _{j=i+1}^{n}\sum _{k=j+1}^{n} 1" data-display="false"><code>\sum _{i=1}^{n}\sum _{j=i+1}^{n}\sum _{k=j+1}^{n} 1</code></span> ，相当于数三元组 <span class="course-math" data-tex="(i,j,k)" data-display="false"><code>(i,j,k)</code></span> 的个数，其中 <span class="course-math" data-tex="1\leq i&lt;j&lt;k\leq n" data-display="false"><code>1\leq i&lt;j&lt;k\leq n</code></span>（increasing triples）。
- 这相当于数 集合 <span class="course-math" data-tex="\{ 1,2, \dots,n \}" data-display="false"><code>\{ 1,2, \dots,n \}</code></span> 的 3 元素的子集的个数，也就是 <span class="course-math" data-tex="\binom{n}{3}" data-display="false"><code>\binom{n}{3}</code></span>.
- 证明：令递增三元组构成的集合为 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>，令三元素子集构成的集合为 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span>，令
<span class="course-math course-math-display" data-tex="f:X\to Y,\quad (i,j,k)\mapsto \{ i,j,k \}" data-display="true"><code>f:X\to Y,\quad (i,j,k)\mapsto \{ i,j,k \}</code></span>
- <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是单射：<span class="course-math" data-tex="(i,j,k)\neq(i&#x27;,j&#x27;,k&#x27;)\to f((i,j,k))\neq f((i&#x27;,j&#x27;,k&#x27;))" data-display="false"><code>(i,j,k)\neq(i&#x27;,j&#x27;,k&#x27;)\to f((i,j,k))\neq f((i&#x27;,j&#x27;,k&#x27;))</code></span>。
- <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是满射：任何 <span class="course-math" data-tex="Y" data-display="false"><code>Y</code></span> 中的元素 <span class="course-math" data-tex="\gamma" data-display="false"><code>\gamma</code></span>，都可以把元素按顺序排列，得到它的原像。
- 因此 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是双射。


### 容斥原理
{: #section-3 }


**容斥原理（Inclusion-Exclusion Principle）：** 修正重复的计数。两个集合的版本：
<span class="course-math course-math-display" data-tex="\lvert A\cup B \rvert = \lvert A \rvert+ \lvert B \rvert-\lvert A\cap B \rvert" data-display="true"><code>\lvert A\cup B \rvert = \lvert A \rvert+ \lvert B \rvert-\lvert A\cap B \rvert</code></span>
三个集合的版本：
<span class="course-math course-math-display" data-tex="\lvert A\cup B\cup C \rvert= \lvert A \rvert+\lvert B \rvert+\lvert C \rvert -\lvert A\cap B \rvert-\lvert A\cap C \rvert-\lvert B\cap C \rvert+ \lvert A\cap B\cap C \rvert" data-display="true"><code>\lvert A\cup B\cup C \rvert= \lvert A \rvert+\lvert B \rvert+\lvert C \rvert -\lvert A\cap B \rvert-\lvert A\cap C \rvert-\lvert B\cap C \rvert+ \lvert A\cap B\cap C \rvert</code></span>
<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个集合的版本：
<span class="course-math course-math-display" data-tex="\left\lvert  \bigcup _{i=1}^{n}E_{i}  \right\rvert = \sum _{k=1}^{n} (-1)^{k+1}  \sum _{1\leq i_{1}&lt;i_{2}&lt; \dots &lt;i_{k}\leq n} \left\lvert  \bigcap _{m=1}^{k} E_{i_{m}}  \right\rvert" data-display="true"><code>\left\lvert  \bigcup _{i=1}^{n}E_{i}  \right\rvert = \sum _{k=1}^{n} (-1)^{k+1}  \sum _{1\leq i_{1}&lt;i_{2}&lt; \dots &lt;i_{k}\leq n} \left\lvert  \bigcap _{m=1}^{k} E_{i_{m}}  \right\rvert</code></span>

可以据此计数所有 **满射** 函数 <span class="course-math" data-tex="f:A\to B" data-display="false"><code>f:A\to B</code></span> 的个数。这里 <span class="course-math" data-tex="\lvert A \rvert=m,\lvert B \rvert=n" data-display="false"><code>\lvert A \rvert=m,\lvert B \rvert=n</code></span>。
- 令 (a) 表示满射函数的个数，(b) 表示不是满射的函数个数。那么
<span class="course-math course-math-display" data-tex="\#(a)+\#(b)=n^{m}" data-display="true"><code>\#(a)+\#(b)=n^{m}</code></span>
- 设 <span class="course-math" data-tex="E_{i}" data-display="false"><code>E_{i}</code></span> 为所有使得 <span class="course-math" data-tex="i \in B" data-display="false"><code>i \in B</code></span> 没有原像的函数的集合。于是
<span class="course-math course-math-display" data-tex="\#(b)= \left\lvert   \bigcup _{i=1}^{n} E_{i} \right\rvert = \sum _{k=1}^{n} (-1)^{k+1} \binom{n}{k} (n-k)^{m}" data-display="true"><code>\#(b)= \left\lvert   \bigcup _{i=1}^{n} E_{i} \right\rvert = \sum _{k=1}^{n} (-1)^{k+1} \binom{n}{k} (n-k)^{m}</code></span>
这里是因为，容斥原理中，<span class="course-math" data-tex="\lvert E_{i_{1}} \cap E_{i_{2}}\cap \dots \cap E_{i_k}\rvert" data-display="false"><code>\lvert E_{i_{1}} \cap E_{i_{2}}\cap \dots \cap E_{i_k}\rvert</code></span> 交集的个数，相当于这个函数只能映射到除了 <span class="course-math" data-tex="i_{1},i_{2}, \dots , i_{k}" data-display="false"><code>i_{1},i_{2}, \dots , i_{k}</code></span> 以外的那 <span class="course-math" data-tex="n-k" data-display="false"><code>n-k</code></span> 个元素，所以有 <span class="course-math" data-tex="(n-k)^{m}" data-display="false"><code>(n-k)^{m}</code></span> 个；而选出这 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个下标的方式有 <span class="course-math" data-tex="\binom{n}{k}" data-display="false"><code>\binom{n}{k}</code></span> 种。
**证明（对 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 归纳）**
**Base case（<span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span>）：** <span class="course-math" data-tex="&#124;E\cup F&#124;=&#124;E&#124;+&#124;F&#124;-&#124;E\cap F&#124;" data-display="false"><code>&#124;E\cup F&#124;=&#124;E&#124;+&#124;F&#124;-&#124;E\cap F&#124;</code></span>。
**Inductive hypothesis：** 公式对任意 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 个集合成立。
**Inductive step：** 取 <span class="course-math" data-tex="E=E_1\cup\cdots\cup E_{n-1}" data-display="false"><code>E=E_1\cup\cdots\cup E_{n-1}</code></span>，<span class="course-math" data-tex="F=E_n" data-display="false"><code>F=E_n</code></span>，由两集合情形得
<span class="course-math course-math-display" data-tex="\left&#124;\bigcup_{i=1}^{n}E_i\right&#124;&#10;=\left&#124;\bigcup_{i=1}^{n-1}E_i\right&#124;+&#124;E_n&#124;-\left&#124;\left(\bigcup_{i=1}^{n-1}E_i\right)\cap E_n\right&#124;." data-display="true"><code>\left&#124;\bigcup_{i=1}^{n}E_i\right&#124;&#10;=\left&#124;\bigcup_{i=1}^{n-1}E_i\right&#124;+&#124;E_n&#124;-\left&#124;\left(\bigcup_{i=1}^{n-1}E_i\right)\cap E_n\right&#124;.</code></span>
第一项由归纳假设展开。对第三项用分配律：
<span class="course-math course-math-display" data-tex="\left(\bigcup_{i=1}^{n-1}E_i\right)\cap E_n=\bigcup_{i=1}^{n-1}G_i,\qquad G_i=E_i\cap E_n." data-display="true"><code>\left(\bigcup_{i=1}^{n-1}E_i\right)\cap E_n=\bigcup_{i=1}^{n-1}G_i,\qquad G_i=E_i\cap E_n.</code></span>
于是
<span class="course-math course-math-display" data-tex="\left&#124;\bigcup_{i=1}^{n}E_i\right&#124;&#10;=\left&#124;\bigcup_{i=1}^{n-1}E_i\right&#124;+&#124;E_n&#124;-\left&#124;\bigcup_{i=1}^{n-1}G_i\right&#124;." data-display="true"><code>\left&#124;\bigcup_{i=1}^{n}E_i\right&#124;&#10;=\left&#124;\bigcup_{i=1}^{n-1}E_i\right&#124;+&#124;E_n&#124;-\left&#124;\bigcup_{i=1}^{n-1}G_i\right&#124;.</code></span>
对 <span class="course-math" data-tex="G_1,\dots,G_{n-1}" data-display="false"><code>G_1,\dots,G_{n-1}</code></span> 也用归纳假设。因为 <span class="course-math" data-tex="G_{i_1}\cap\cdots\cap G_{i_k}=E_{i_1}\cap\cdots\cap E_{i_k}\cap E_n" data-display="false"><code>G_{i_1}\cap\cdots\cap G_{i_k}=E_{i_1}\cap\cdots\cap E_{i_k}\cap E_n</code></span>，所以
<span class="course-math course-math-display" data-tex="-(-1)^{k+1}&#124;G_{i_1}\cap\cdots\cap G_{i_k}&#124;&#10;=(-1)^{k+2}&#124;E_{i_1}\cap\cdots\cap E_{i_k}\cap E_n&#124;." data-display="true"><code>-(-1)^{k+1}&#124;G_{i_1}\cap\cdots\cap G_{i_k}&#124;&#10;=(-1)^{k+2}&#124;E_{i_1}\cap\cdots\cap E_{i_k}\cap E_n&#124;.</code></span>
这正是 <span class="course-math" data-tex="k+1" data-display="false"><code>k+1</code></span> 个集合相交、且下标含 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的项，符号也正确。
最后合并：
- 第一项的展开式：对所有**不含 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>** 的下标列 <span class="course-math" data-tex="i_1&lt;\cdots&lt;i_k" data-display="false"><code>i_1&lt;\cdots&lt;i_k</code></span> 求和 <span class="course-math" data-tex="(-1)^{k+1}&#124;E_{i_1}\cap\cdots\cap E_{i_k}&#124;" data-display="false"><code>(-1)^{k+1}&#124;E_{i_1}\cap\cdots\cap E_{i_k}&#124;</code></span>。
- <span class="course-math" data-tex="&#124;E_n&#124;" data-display="false"><code>&#124;E_n&#124;</code></span> 与第三项的展开式：对所有**含 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>** 的下标列求和同样的式子。
两部分恰好覆盖所有下标列，即得 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个集合的公式。


## 排列数和组合数
{: #section-4 }


**<span class="course-math" data-tex="k" data-display="false"><code>k</code></span>-element permutations(排列) with <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> distinct elements.**  从一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元集合中，选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个不同的元素排成一列的个数：
<span class="course-math course-math-display" data-tex="P(n,k)=n(n-1)(n-2) \dots (n-k+1) = \frac{n!}{(n-k)!}" data-display="true"><code>P(n,k)=n(n-1)(n-2) \dots (n-k+1) = \frac{n!}{(n-k)!}</code></span>
**<span class="course-math" data-tex="k" data-display="false"><code>k</code></span>-combinations of a set with <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> elements.** 从一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元集合中，选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 元子集的个数：
<span class="course-math course-math-display" data-tex="\binom{n}{k}=C(n,k)=  \frac{P(n,k)}{k!}= \frac{n!}{k!(n-k)!}" data-display="true"><code>\binom{n}{k}=C(n,k)=  \frac{P(n,k)}{k!}= \frac{n!}{k!(n-k)!}</code></span>
这个组合数也是 **二项式系数（Binomial Coefficient）**：
<span class="course-math course-math-display" data-tex="(x+y)^{n}= \sum _{i=0}^{n} \binom{n}{i} x^{n-i}y^{i}" data-display="true"><code>(x+y)^{n}= \sum _{i=0}^{n} \binom{n}{i} x^{n-i}y^{i}</code></span>
这个可以通过数学归纳法证明。
性质：
- <span class="course-math" data-tex="\binom{n}{0}=\binom{n}{n}=1" data-display="false"><code>\binom{n}{0}=\binom{n}{n}=1</code></span>。
- <span class="course-math" data-tex="\binom{n}{k}=\binom{n}{n-k}" data-display="false"><code>\binom{n}{k}=\binom{n}{n-k}</code></span>。从代数角度很好理解（algebraic proof）。另一方面，从组合的角度看（combinatorial proof），利用双射原理，左边是 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span>-subsets 的个数，右边是<span class="course-math" data-tex="(n-k)" data-display="false"><code>(n-k)</code></span>-subsets 的个数。那么把左边的 subset，映射到它的补集（这就是右边的 subset），这是个双射，因此个数相等。
- <span class="course-math" data-tex="\sum _{i=0}^{n}\binom{n}{i}=2^{n}" data-display="false"><code>\sum _{i=0}^{n}\binom{n}{i}=2^{n}</code></span>。组合角度，左边是大小为 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的子集求和，也就是大小为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的集合的所有子集个数。这和长度为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的比特串一一对应，比特串的个数就是 <span class="course-math" data-tex="2^{n}" data-display="false"><code>2^{n}</code></span>。（也可以在二项式展开式令 <span class="course-math" data-tex="x=y=1" data-display="false"><code>x=y=1</code></span> 证明）
**帕斯卡三角（Pascal's Triangle）/杨辉三角。**
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Counting%20-%20%E8%AE%A1%E6%95%B0.webp' | relative_url }}{% raw %}" alt="Counting - 计数" width="345" height="256" loading="lazy" decoding="async">
**帕斯卡恒等式（Pascal's Identity）：**
<span class="course-math course-math-display" data-tex="\binom{n}{k}= \binom{n-1}{k-1}+\binom{n-1}{k}" data-display="true"><code>\binom{n}{k}= \binom{n-1}{k-1}+\binom{n-1}{k}</code></span>
- 组合角度证明：<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素集合，选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span>-subsets，相当于考虑两种情况：某个特定元素选/不选。选的情况数就是 <span class="course-math" data-tex="\binom{n-1}{k-1}" data-display="false"><code>\binom{n-1}{k-1}</code></span>，不选的情况数就是 <span class="course-math" data-tex="\binom{n-1}{k}" data-display="false"><code>\binom{n-1}{k}</code></span>。
三项式系数（Trinomial Coefficients）：有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个物品，3 种颜色，每种分别染色  <span class="course-math" data-tex="k_{1},k_{2},k_{3}" data-display="false"><code>k_{1},k_{2},k_{3}</code></span> 个物品，这里 <span class="course-math" data-tex="k_{1}+k_{2}+k_{3}=n" data-display="false"><code>k_{1}+k_{2}+k_{3}=n</code></span>。那么，总共的方法数就是
<span class="course-math course-math-display" data-tex="\binom{n}{k_{1}}\binom{n-k_{1}}{k_{2}}\binom{n-k_{1}-k_{2}}{k_{3}} = \frac{n!}{k_{1}!k_{2}!k_{3}!}" data-display="true"><code>\binom{n}{k_{1}}\binom{n-k_{1}}{k_{2}}\binom{n-k_{1}-k_{2}}{k_{3}} = \frac{n!}{k_{1}!k_{2}!k_{3}!}</code></span>
这就是三项式系数。可以记作
<span class="course-math course-math-display" data-tex="\binom{n}{k_{1}\,k_{2}\,k_{3}}" data-display="true"><code>\binom{n}{k_{1}\,k_{2}\,k_{3}}</code></span>
那么 <span class="course-math" data-tex="(x+y+z)^{n}" data-display="false"><code>(x+y+z)^{n}</code></span> 中， <span class="course-math" data-tex="x^{k_{1}}y^{k_{2}}z^{k_{3}}" data-display="false"><code>x^{k_{1}}y^{k_{2}}z^{k_{3}}</code></span> 的系数就是对应的三项式系数。


## 生日悖论（Birthday Paradox）
{: #section-5 }


设 <span class="course-math" data-tex="A_{n}" data-display="false"><code>A_{n}</code></span> 表示，一间教室里面 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个学生，至少两个学生的生日相同。
设 <span class="course-math" data-tex="B_{n}" data-display="false"><code>B_{n}</code></span> 表示，一间教室里面 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个学生，没有学生的生日相同。
样本空间：<span class="course-math" data-tex="\lvert S \rvert=365^{n}" data-display="false"><code>\lvert S \rvert=365^{n}</code></span>。
这里 <span class="course-math" data-tex="B_{n}" data-display="false"><code>B_{n}</code></span> 相当于计数所有 one-to-one function <span class="course-math" data-tex="f:S\to D" data-display="false"><code>f:S\to D</code></span>，其中 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 为学生的集合，<span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 为日期的集合。因此 <span class="course-math" data-tex="\#B_{n}=365\times364\times\dots \times(365-n+1)" data-display="false"><code>\#B_{n}=365\times364\times\dots \times(365-n+1)</code></span>。另外 <span class="course-math" data-tex="\#A_{n}+\#B_{n}=\lvert S \rvert" data-display="false"><code>\#A_{n}+\#B_{n}=\lvert S \rvert</code></span>，就可以算出 <span class="course-math" data-tex="A_{n}" data-display="false"><code>A_{n}</code></span> 的概率。计算得到，若至少有 <span class="course-math" data-tex="23" data-display="false"><code>23</code></span> 个学生，那 至少两个学生生日相同的概率就超过 <span class="course-math" data-tex="1 / 2" data-display="false"><code>1 / 2</code></span>。

"Birthday" Attack：对于 <span class="course-math" data-tex="H" data-display="false"><code>H</code></span> 个值，分配给 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个人（哈希），那么至少两个人有相同的值的概率
<span class="course-math course-math-display" data-tex="p(n;H):= 1- \prod _{i=1}^{n-1} \left( 1- \frac{i}{H} \right)" data-display="true"><code>p(n;H):= 1- \prod _{i=1}^{n-1} \left( 1- \frac{i}{H} \right)</code></span>
考虑近似 <span class="course-math" data-tex="e^{x} \approx 1+x" data-display="false"><code>e^{x} \approx 1+x</code></span>，那么 
<span class="course-math course-math-display" data-tex="p(n;H)\approx 1- e^{-n(n-1) / 2H}\approx 1-e^{-n^{2} / 2H}" data-display="true"><code>p(n;H)\approx 1- e^{-n(n-1) / 2H}\approx 1-e^{-n^{2} / 2H}</code></span>
求解反函数：
<span class="course-math course-math-display" data-tex="n(p;H)\approx \sqrt{2H\ln \frac{1}{1-p}} \sim \sqrt{H}" data-display="true"><code>n(p;H)\approx \sqrt{2H\ln \frac{1}{1-p}} \sim \sqrt{H}</code></span>
那么，要让找到碰撞（Collision, 也就是两个人有相同的值）的概率至少为 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> ，所需要的人数只有 <span class="course-math" data-tex="\sqrt{H}" data-display="false"><code>\sqrt{H}</code></span>。从这个也可以看出生日悖论。


## 生成函数（Generating Function）
{: #section-6 }


一个序列 <span class="course-math" data-tex="a_{0},a_{1}, \dots, a_{k}, \dots" data-display="false"><code>a_{0},a_{1}, \dots, a_{k}, \dots</code></span> 对应的生成函数为
<span class="course-math course-math-display" data-tex="G(x)= \sum _{k=0}^{\infty} a_{k} x^{k}" data-display="true"><code>G(x)= \sum _{k=0}^{\infty} a_{k} x^{k}</code></span>
这个函数包含了序列的所有信息（下标与对应的值）。通过生成函数，计数等 **离散** 的问题，可以变成 **连续** 函数的 **分析** 问题。
这里如果序列 <span class="course-math" data-tex="a_{0},a_{1}, \dots, a_{n}" data-display="false"><code>a_{0},a_{1}, \dots, a_{n}</code></span> 有限，可以让 <span class="course-math" data-tex="a_{n+1}=a_{n+2}= \dots = 0" data-display="false"><code>a_{n+1}=a_{n+2}= \dots = 0</code></span>，继续沿用上面的定义，因此生成函数是一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 阶的多项式
<span class="course-math course-math-display" data-tex="G(x)=\sum _{k=0}^{n} a_{k}x^{k}" data-display="true"><code>G(x)=\sum _{k=0}^{n} a_{k}x^{k}</code></span>

例如：
- <span class="course-math" data-tex="G(x)= \frac{1}{1-x}=1+x+x^{2}+ \dots" data-display="false"><code>G(x)= \frac{1}{1-x}=1+x+x^{2}+ \dots</code></span> 对应的序列为 <span class="course-math" data-tex="1,1,1, \dots" data-display="false"><code>1,1,1, \dots</code></span>。
- <span class="course-math" data-tex="G(x)= \frac{1}{(1-x)^{2}}=1+2x+3x^{2}+\dots" data-display="false"><code>G(x)= \frac{1}{(1-x)^{2}}=1+2x+3x^{2}+\dots</code></span> 对应的序列为 <span class="course-math" data-tex="1,2,3, \dots" data-display="false"><code>1,2,3, \dots</code></span>。

生成函数的运算：若 <span class="course-math" data-tex="f(x)=\sum _{k=0}^{\infty}a_{k}x^{k}" data-display="false"><code>f(x)=\sum _{k=0}^{\infty}a_{k}x^{k}</code></span>，且 <span class="course-math" data-tex="g(x)= \sum _{k=0}^{\infty}b_{k}x^{k}" data-display="false"><code>g(x)= \sum _{k=0}^{\infty}b_{k}x^{k}</code></span>，那么加法：
<span class="course-math course-math-display" data-tex="f(x)+g(x)= \sum _{k=0}^{\infty}(a_{k}+b_{k})x^{k}" data-display="true"><code>f(x)+g(x)= \sum _{k=0}^{\infty}(a_{k}+b_{k})x^{k}</code></span>
乘法：
<span class="course-math course-math-display" data-tex="f(x)g(x)= \sum _{k=0}^{\infty} \left(\sum _{j=0}^{k} a_{j}b_{k-j} \right)x^{k}" data-display="true"><code>f(x)g(x)= \sum _{k=0}^{\infty} \left(\sum _{j=0}^{k} a_{j}b_{k-j} \right)x^{k}</code></span>
例如，按照这个乘法运算：
<span class="course-math course-math-display" data-tex="G(x)= \frac{1}{(1-x)^{2}} = \sum _{k=0}^{\infty} \left( \sum _{j=0}^{k} 1\cdot1 \right)x^{k}=\sum _{k=0}^{\infty}(k+1)x^{k}" data-display="true"><code>G(x)= \frac{1}{(1-x)^{2}} = \sum _{k=0}^{\infty} \left( \sum _{j=0}^{k} 1\cdot1 \right)x^{k}=\sum _{k=0}^{\infty}(k+1)x^{k}</code></span>
<span class="course-math course-math-display" data-tex="G(x)= \frac{1}{(1-ax)^{2}} = \sum _{k=0}^{\infty}\left( \sum _{j=0}^{k} a^{j}a^{k-j} \right)x^{k}=\sum _{k=0}^\infty (k+1)a^{k} x^{k}" data-display="true"><code>G(x)= \frac{1}{(1-ax)^{2}} = \sum _{k=0}^{\infty}\left( \sum _{j=0}^{k} a^{j}a^{k-j} \right)x^{k}=\sum _{k=0}^\infty (k+1)a^{k} x^{k}</code></span>
**卷积规则（Convolution Rule）：**
- 集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中选取物品，选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个的选法数为 <span class="course-math" data-tex="a_{k}" data-display="false"><code>a_{k}</code></span>，对应的生成函数为 <span class="course-math" data-tex="A(x)" data-display="false"><code>A(x)</code></span>；
- 集合 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 中选取物品，选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个的选法数为 <span class="course-math" data-tex="b_{k}" data-display="false"><code>b_{k}</code></span>，对应的生成函数为 <span class="course-math" data-tex="B(x)" data-display="false"><code>B(x)</code></span>；
- 集合 <span class="course-math" data-tex="A,B" data-display="false"><code>A,B</code></span> 无交。
- 那么，从并集 <span class="course-math" data-tex="A\cup B" data-display="false"><code>A\cup B</code></span> 中选取物品的选法数对应生成函数 <span class="course-math" data-tex="A(x) \cdot B(x)" data-display="false"><code>A(x) \cdot B(x)</code></span>。

例题1：有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个颜色的球，选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个球，有多少种选择方案？
- 设 <span class="course-math" data-tex="A_{1}, A_{2}, \dots, A_{n}" data-display="false"><code>A_{1}, A_{2}, \dots, A_{n}</code></span> 表示这 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 种颜色的球对应的纯色球的集合，那么对应的生成函数 <span class="course-math" data-tex="A_{i}(x)=\frac{1}{1-x}" data-display="false"><code>A_{i}(x)=\frac{1}{1-x}</code></span>（从只有一种颜色的集合中选，那么只有一种选法，序列为全 1）。
- 那么总的选法就对应生成函数 <span class="course-math" data-tex="G(x)=\frac{1}{(1-x)^{n}}" data-display="false"><code>G(x)=\frac{1}{(1-x)^{n}}</code></span>，问题变成展开这个式子。结果是，选法数
<span class="course-math course-math-display" data-tex="d_{k}= [x^{k}] (1 / (1-x)^{n}) = \binom{n+k-1}{k}" data-display="true"><code>d_{k}= [x^{k}] (1 / (1-x)^{n}) = \binom{n+k-1}{k}</code></span>
- 怎么展开？一种方式是使用 **麦克劳林公式（Maclaurin's Theorem）**：
<span class="course-math course-math-display" data-tex="f(x)= f(0)+ f&#x27;(0)x + \frac{f&#x27;&#x27;(0)}{2!}x^{2}+ \dots + \frac{f^{(n)}(0)}{n!}x^{n}+ \dots" data-display="true"><code>f(x)= f(0)+ f&#x27;(0)x + \frac{f&#x27;&#x27;(0)}{2!}x^{2}+ \dots + \frac{f^{(n)}(0)}{n!}x^{n}+ \dots</code></span>
- 这里
<span class="course-math course-math-display" data-tex="G^{(k)}(x)= n(n+1)(n+2) \dots (n+k-1)(1-x)^{-(n+k)}" data-display="true"><code>G^{(k)}(x)= n(n+1)(n+2) \dots (n+k-1)(1-x)^{-(n+k)}</code></span>
- 那么
<span class="course-math course-math-display" data-tex="[x^{k}] (1 / (1-x)^{n}) =  \frac{G^{(k)}(0)}{k!}= \frac{(n+k-1)(n+k-2)\dots (n+1)n}{k!}= \binom{n+k-1}{k}" data-display="true"><code>[x^{k}] (1 / (1-x)^{n}) =  \frac{G^{(k)}(0)}{k!}= \frac{(n+k-1)(n+k-2)\dots (n+1)n}{k!}= \binom{n+k-1}{k}</code></span>
- 另一种展开方法，使用**扩展二项式定理（Extended Binomial Theorem）：**
<span class="course-math course-math-display" data-tex="\binom{-n}{k}= \frac{(-n)(-n-1)\dots (-n-k+1)}{k!} =(-1)^{k}  \binom{n+k-1}{k}" data-display="true"><code>\binom{-n}{k}= \frac{(-n)(-n-1)\dots (-n-k+1)}{k!} =(-1)^{k}  \binom{n+k-1}{k}</code></span>
- 从而得到 <span class="course-math" data-tex="G(x)=(1-x)^{-n}=\sum _{k=0}^{\infty} \binom{n+k-1}{k}x^{k}" data-display="false"><code>G(x)=(1-x)^{-n}=\sum _{k=0}^{\infty} \binom{n+k-1}{k}x^{k}</code></span>。

例题2：这个方程的解的个数为？
<span class="course-math course-math-display" data-tex="x_{1}+x_{2}+x_{3}=17" data-display="true"><code>x_{1}+x_{2}+x_{3}=17</code></span>
这里 <span class="course-math" data-tex="2\leq x_{1}\leq5, 3\leq x_{2}\leq6, 4\leq x_{3}\leq7" data-display="false"><code>2\leq x_{1}\leq5, 3\leq x_{2}\leq6, 4\leq x_{3}\leq7</code></span>，且 <span class="course-math" data-tex="x_{1},x_{2},x_{3}" data-display="false"><code>x_{1},x_{2},x_{3}</code></span> 为整数。
- <span class="course-math" data-tex="x_{1}" data-display="false"><code>x_{1}</code></span> 对应生成函数 <span class="course-math" data-tex="G_{1}(x)=x^{2}+x^{3}+x^{4}+x^{5}" data-display="false"><code>G_{1}(x)=x^{2}+x^{3}+x^{4}+x^{5}</code></span>；
- <span class="course-math" data-tex="x_{2}" data-display="false"><code>x_{2}</code></span> 对应生成函数 <span class="course-math" data-tex="G_{2}(x)=x^{3}+x^{4}+x^{5}+x^{6}" data-display="false"><code>G_{2}(x)=x^{3}+x^{4}+x^{5}+x^{6}</code></span>；
- <span class="course-math" data-tex="x_{3}" data-display="false"><code>x_{3}</code></span> 对应生成函数 <span class="course-math" data-tex="G_{3}(x)=x^{4}+x^{5}+x^{6}+x^{7}" data-display="false"><code>G_{3}(x)=x^{4}+x^{5}+x^{6}+x^{7}</code></span>；
- 那么解的个数就是 <span class="course-math" data-tex="G_{1}(x)G_{2}(x)G_{3}(x)" data-display="false"><code>G_{1}(x)G_{2}(x)G_{3}(x)</code></span> 中 <span class="course-math" data-tex="x^{17}" data-display="false"><code>x^{17}</code></span> 的系数。

例题3：
<span class="course-math course-math-display" data-tex="x_{1}+x_{2}+ \dots+ x_{n}=k" data-display="true"><code>x_{1}+x_{2}+ \dots+ x_{n}=k</code></span>
这里 <span class="course-math" data-tex="x_{1},x_{2}, \dots, x_{n}" data-display="false"><code>x_{1},x_{2}, \dots, x_{n}</code></span> 为非负整数。
这等价于 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素的集合里选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个元素，**允许重复**的个数（<span class="course-math" data-tex="k" data-display="false"><code>k</code></span>-combinations from a set with <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> elements when **repetition is allowed**）（从 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素中选取 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个元素的重集计数），我们在例题 1 中通过生成函数得到答案了：
<span class="course-math course-math-display" data-tex="\binom{n+k-1}{k}" data-display="true"><code>\binom{n+k-1}{k}</code></span>
- 组合意义上，这就相当于在 <span class="course-math" data-tex="n+k-1" data-display="false"><code>n+k-1</code></span> 个格子里，选 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 个作为挡板，这样就会把剩下的 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个元素分成 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个部分，一种选法就对应一个解。

例题 4：用生成函数解释二项式定理。<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素里选 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个的组合数 <span class="course-math" data-tex="\binom{n}{k}" data-display="false"><code>\binom{n}{k}</code></span>；每种元素选或不选，对应生成函数 <span class="course-math" data-tex="(1+x)" data-display="false"><code>(1+x)</code></span>，那么根据卷积规则，选法数对应的生成函数为 <span class="course-math" data-tex="(1+x)^{n}" data-display="false"><code>(1+x)^{n}</code></span>，因此
<span class="course-math course-math-display" data-tex="[x^{k}](1+x)^{n }= \binom{n}{k}" data-display="true"><code>[x^{k}](1+x)^{n }= \binom{n}{k}</code></span>
{% endraw %}
