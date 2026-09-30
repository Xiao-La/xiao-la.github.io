---
title: "Prerequisite Knowledge - 预备知识"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
reference: false
layout: "course"
permalink: "/courses/logic/prerequisite-knowledge/"
course_page: true
doc_type: "note"
description: "数理逻辑导论 · Prerequisite Knowledge - 预备知识"
excerpt: "数理逻辑导论 · Prerequisite Knowledge - 预备知识"
---

{% raw %}
## 集合（Set）
{: #section-1 }

集合的基数（Cardinality）为其元素（Element）的个数。
可以用集合的外延（Extension）和内涵（Intension）定义一个集合。
 - 外延：列出所有元素。
 - 内涵：用某种共性：<span class="course-math" data-tex="\{x&#124;\varphi(x)\}" data-display="false"><code>\{x&#124;\varphi(x)\}</code></span>。
子集（Subset）和真子集（Proper Subset）的定义与以往相同。

幂集（Power Set）：
>  若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个集合，则 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的幂集 <span class="course-math" data-tex="P(A):= \{X&#124;X \subseteq A\}" data-display="false"><code>P(A):= \{X&#124;X \subseteq A\}</code></span>。

集合运算（Set Operations）：
- 并集（Union）
- 交集（Intersection）
- 差集（Difference）
## 关系（Relation）
{: #section-2 }

有序 n 元组（n-tuples）：
>  <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素的有序列表，记作 <span class="course-math" data-tex="\langle a_{1},a_{2},a_{3},\dots ,a_{n} \rangle" data-display="false"><code>\langle a_{1},a_{2},a_{3},\dots ,a_{n} \rangle</code></span>
>  和集合的区别：元素可重复，有序，元素个数有限。

### 二元关系（Binary Relation）
{: #section-3 }

笛卡尔积（Cartesian product）<span class="course-math" data-tex="A\times B" data-display="false"><code>A\times B</code></span>：
<span class="course-math course-math-display" data-tex="A\times B=\{ \langle x,y \rangle &#124; x \in A , y \in B \}" data-display="true"><code>A\times B=\{ \langle x,y \rangle &#124; x \in A , y \in B \}</code></span>
集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的一个二元关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是它们笛卡尔积的子集。
<span class="course-math course-math-display" data-tex="R \subseteq A\times B" data-display="true"><code>R \subseteq A\times B</code></span>
<span class="course-math" data-tex="\langle x,y \rangle \in R" data-display="false"><code>\langle x,y \rangle \in R</code></span> 记作 <span class="course-math" data-tex="R(x,y)" data-display="false"><code>R(x,y)</code></span> 或 <span class="course-math" data-tex="xRy" data-display="false"><code>xRy</code></span>，读作 "x is R-related to y"。

若 <span class="course-math" data-tex="R \subseteq A^2" data-display="false"><code>R \subseteq A^2</code></span> ，则称 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的二元关系。
- <span class="course-math" data-tex="&lt;" data-display="false"><code>&lt;</code></span> 是 <span class="course-math" data-tex="\mathbb{N, Z,R}" data-display="false"><code>\mathbb{N, Z,R}</code></span> 上的二元关系。
### N 元关系（N-ary relation）
{: #section-4 }

若 <span class="course-math" data-tex="R \subseteq A^n" data-display="false"><code>R \subseteq A^n</code></span>，则称 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的 n 元关系。
- 一元关系（Unary Relation）
- 二元关系（Binary Relation）
- 三元关系（Ternary Relation）
- ...
### 等价关系（Equivalence Relation）
{: #section-5 }

若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的二元关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 满足条件：
- 自反（Reflexive）：<span class="course-math" data-tex="\forall x \in A, xRx" data-display="false"><code>\forall x \in A, xRx</code></span>。
- 对称（Symmetric）： <span class="course-math" data-tex="\forall x,y \in A, xRy\implies yRx" data-display="false"><code>\forall x,y \in A, xRy\implies yRx</code></span>。
- 传递（Transitive）：<span class="course-math" data-tex="\forall x,y,z \in A, xRy, yRz \implies xRz" data-display="false"><code>\forall x,y,z \in A, xRy, yRz \implies xRz</code></span>。
则称 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的一个等价关系。

### 等价类（Equivalence Class）
{: #section-6 }

若 <span class="course-math" data-tex="x \in A" data-display="false"><code>x \in A</code></span> 且 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上有一个等价关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>，则 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的等价类：
<span class="course-math course-math-display" data-tex="[x]_{R}:= \{ y \in A&#124;xRy \}" data-display="true"><code>[x]_{R}:= \{ y \in A&#124;xRy \}</code></span>
等价类的性质：
- 每个元素只属于一个等价类。
- 不同的等价类是不相容的。
- 所有等价类的并集是原集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>。

### 偏序关系（Partial Order Relation）
{: #section-7 }

反对称（Antisymmetric）：<span class="course-math" data-tex="\forall x,y \in A, xRy, yRx\implies x=y" data-display="false"><code>\forall x,y \in A, xRy, yRx\implies x=y</code></span>（不可能有两个不同的元素有双向关系）。
若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的二元关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 满足自反，反对称，传递，则称其为一个偏序关系。
若不存在 <span class="course-math" data-tex="y\in A(y \neq x)" data-display="false"><code>y\in A(y \neq x)</code></span> 使得 <span class="course-math" data-tex="yRx" data-display="false"><code>yRx</code></span>，则 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 为该偏序的极小元（Minimal element）。
若不存在 <span class="course-math" data-tex="y \in A(y \neq x)" data-display="false"><code>y \in A(y \neq x)</code></span> 使得 <span class="course-math" data-tex="xRy" data-display="false"><code>xRy</code></span>，则 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 为该偏序的极大元（Maximal element）。
- <span class="course-math" data-tex="\leq" data-display="false"><code>\leq</code></span> 是 <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span> 上的一个偏序。极小元是 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，无极大元。
- "<span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 可被 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 整除"是 <span class="course-math" data-tex="\mathbb{N}^+" data-display="false"><code>\mathbb{N}^+</code></span> 上的一个偏序。无极小元，极大元为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。

### 全序关系（Total Order/Linear Order Relation）
{: #section-8 }

一个偏序关系如果满足：
	若 <span class="course-math" data-tex="x,y \in A" data-display="false"><code>x,y \in A</code></span>，则 <span class="course-math" data-tex="xRy" data-display="false"><code>xRy</code></span> 或 <span class="course-math" data-tex="yRx" data-display="false"><code>yRx</code></span> 总有一个成立。
则称其为一个全序关系。
对全序关系，把元素之间的指向关系画成图，则该图会是一条链。

## 函数（Functions）
{: #section-9 }

一元函数可以定义为一个二元关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>：
- <span class="course-math" data-tex="\forall x \in X, \exists y \in Y, s.t. xRy" data-display="false"><code>\forall x \in X, \exists y \in Y, s.t. xRy</code></span>。
- <span class="course-math" data-tex="y,z \in Y , xRy, xRz \implies y=z" data-display="false"><code>y,z \in Y , xRy, xRz \implies y=z</code></span>
记号：
<span class="course-math course-math-display" data-tex="f: A\to B" data-display="true"><code>f: A\to B</code></span>
- 定义域（Domain）为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>。
- 陪域/上域（Codomain）为 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> ，是所有可能的取值。
- 值域（Range）为实际取到的值，是 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的子集。
若 <span class="course-math" data-tex="\langle x,y \rangle \in f" data-display="false"><code>\langle x,y \rangle \in f</code></span>，通常记 <span class="course-math" data-tex="f(x)=y" data-display="false"><code>f(x)=y</code></span>。
自然也有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元函数（n-ary function）：
<span class="course-math course-math-display" data-tex="f:A_{1}\times A_{2}\times\dots \times A_{n}\to B" data-display="true"><code>f:A_{1}\times A_{2}\times\dots \times A_{n}\to B</code></span>
对于 <span class="course-math" data-tex="f:X\to Y" data-display="false"><code>f:X\to Y</code></span>：
- 单射（Injective, one-to-one）：<span class="course-math" data-tex="\forall x_{1},x_{2} \in X, f(x_{1})=f(x_{2})\implies x_{1}=x_{2}" data-display="false"><code>\forall x_{1},x_{2} \in X, f(x_{1})=f(x_{2})\implies x_{1}=x_{2}</code></span>。
- 满射（Surjective, onto）：<span class="course-math" data-tex="\forall y \in Y, \exists x \in X s.t. f(x)=y" data-display="false"><code>\forall y \in Y, \exists x \in X s.t. f(x)=y</code></span>
- 双射（Bijective, one-to-one correspondence）：既满足单射也满足满射。


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Prerequisite%20Knowledge%20-%20%E9%A2%84%E5%A4%87%E7%9F%A5%E8%AF%86.png' | relative_url }}{% raw %}" alt="Prerequisite Knowledge - 预备知识" loading="lazy">

## 数学定义与证明（Mathematical Definitions and Proof）
{: #section-10 }

- 归纳定义（Inductive Definiton）。例如定义 <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span>：<span class="course-math" data-tex="0\in \mathbb{N}" data-display="false"><code>0\in \mathbb{N}</code></span>，且 <span class="course-math" data-tex="n \in \mathbb{N}\implies n+1 \in \mathbb{N}" data-display="false"><code>n \in \mathbb{N}\implies n+1 \in \mathbb{N}</code></span>，且只有前两个规则产生的元素才属于 <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span>。
- 归纳证明（Proof by Induction）。若要证明 <span class="course-math" data-tex="P(x) \forall x" data-display="false"><code>P(x) \forall x</code></span>：
  - 先证明 <span class="course-math" data-tex="P(n_{0})" data-display="false"><code>P(n_{0})</code></span> 成立（Base case）。
  - 归纳假设：假设 <span class="course-math" data-tex="P(k)" data-display="false"><code>P(k)</code></span> 对 <span class="course-math" data-tex="k= n_{0}" data-display="false"><code>k= n_{0}</code></span> 成立。
  - 归纳：证明 <span class="course-math" data-tex="P(k+1)" data-display="false"><code>P(k+1)</code></span> 成立。
- 递归定义（Recursive Definition）：
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;f(0)=g(0) \\&#10;f(n&#x27;)=h(f(n))&#10;\end{cases}" data-display="true"><code>\begin{cases}&#10;f(0)=g(0) \\&#10;f(n&#x27;)=h(f(n))&#10;\end{cases}</code></span>
{% endraw %}
