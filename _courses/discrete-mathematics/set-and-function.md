---
title: "Set and Function - 集合与函数"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-09-03T17:09:42+08:00"
updated_at: "2026-11-26T17:48:19+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/discrete-mathematics/set-and-function/"
course_page: true
doc_type: "note"
description: "离散数学 · Set and Function - 集合与函数"
excerpt: "离散数学 · Set and Function - 集合与函数"
---

{% raw %}

定义集合（set）：一些无序的对象放在一起。

表示方式：列举；省略的列举；描述（Set builder）。

定义全集（Universal set）<span class="course-math" data-tex="U" data-display="false"><code>U</code></span>：当前讨论的所有对象组成的集合。

重要的集合：
<span class="course-math course-math-display" data-tex="\mathbb{N},\mathbb{Z},\mathbb{Z}^{+},\mathbb{Q},\mathbb{R},\mathbb{C}" data-display="true"><code>\mathbb{N},\mathbb{Z},\mathbb{Z}^{+},\mathbb{Q},\mathbb{R},\mathbb{C}</code></span>

子集：<span class="course-math" data-tex="A\subseteq B" data-display="false"><code>A\subseteq B</code></span>（允许相等）
真子集（Proper subset）：<span class="course-math" data-tex="A\subset B" data-display="false"><code>A\subset B</code></span>（不相等）

定义集合的势（Cardinality）<span class="course-math" data-tex="\lvert S\rvert" data-display="false"><code>\lvert S\rvert</code></span>：
- 对于有限集，就是元素的个数。
- 对于任意集合：我们说 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 等势（have the same cardinality），若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 之间存在双射（one-to-one correspondence）。
- 我们说 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的势小于 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的势或与 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的势相同，若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 到 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 存在一个单射（one-to-one function），记作 <span class="course-math" data-tex="\lvert A \rvert\leq \lvert B \rvert" data-display="false"><code>\lvert A \rvert\leq \lvert B \rvert</code></span>（注意，这里并不是说数值上的小于或等于）。
- 若 <span class="course-math" data-tex="\lvert A \rvert\leq \lvert B \rvert" data-display="false"><code>\lvert A \rvert\leq \lvert B \rvert</code></span> 且 <span class="course-math" data-tex="A,B" data-display="false"><code>A,B</code></span> 不等势，那么记 <span class="course-math" data-tex="\lvert A \rvert&lt;\lvert B \rvert" data-display="false"><code>\lvert A \rvert&lt;\lvert B \rvert</code></span>。


定义可数集（Countable Set）：有限集，或与 <span class="course-math" data-tex="\mathbb{Z}^{+}" data-display="false"><code>\mathbb{Z}^{+}</code></span> 等势。否则是不可数（Uncountable）。
- 要证明可数，只需说明用一个序列可以把这个集合列尽。
- <span class="course-math" data-tex="\mathbb{Z}" data-display="false"><code>\mathbb{Z}</code></span> 可数。可以列一个序列 <span class="course-math" data-tex="0,1,-1,2,-2,\dots" data-display="false"><code>0,1,-1,2,-2,\dots</code></span>
- <span class="course-math" data-tex="\mathbb{Q}^{+}" data-display="false"><code>\mathbb{Q}^{+}</code></span> 可数。可以按这个来列举（依次去列 <span class="course-math" data-tex="p+q=2" data-display="false"><code>p+q=2</code></span> ，<span class="course-math" data-tex="p+q=3" data-display="false"><code>p+q=3</code></span> ... 的 <span class="course-math" data-tex="p / q" data-display="false"><code>p / q</code></span>，再加一个 filter 要求 <span class="course-math" data-tex="p,q" data-display="false"><code>p,q</code></span> 不可约）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20and%20Function%20-%20%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0.webp' | relative_url }}{% raw %}" alt="Set and Function - 集合与函数" width="173" height="168" loading="lazy" decoding="async">
- 若 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 可数，则 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的任意子集都可数。（加一个 filter 去掉不在子集里的，形成新的序列）
- 非空有限字母表 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的有限字符串集 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是可数无穷的。先按长度、再在同一长度内按字典序枚举即可。
- 从上面这条，可以推出，所有 Java 程序组成的集合是可数的。（加一个 filter: Java Compiler）。

不可数集
-  <span class="course-math" data-tex="\mathbb{R}" data-display="false"><code>\mathbb{R}</code></span> 不可数。假设 <span class="course-math" data-tex="\mathbb{R}" data-display="false"><code>\mathbb{R}</code></span> 可数，那么它的子集 <span class="course-math" data-tex="[0,1]" data-display="false"><code>[0,1]</code></span> 也是可数的。那么其中的所有数可以列为
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;r_{1}=0.d_{11}d_{12}d_{13}\dots \\&#10;r_{2}=0.d_{21}d_{22}d_{23}\dots \\&#10;r_{3}=0.d_{31}d_{32}d_{33}\dots \\&#10;\dots\dots&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;r_{1}=0.d_{11}d_{12}d_{13}\dots \\&#10;r_{2}=0.d_{21}d_{22}d_{23}\dots \\&#10;r_{3}=0.d_{31}d_{32}d_{33}\dots \\&#10;\dots\dots&#10;\end{aligned}</code></span>
- 那么可以构造这样一个小数 <span class="course-math" data-tex="r=0.d_{1}d_{2}d_{3}\dots" data-display="false"><code>r=0.d_{1}d_{2}d_{3}\dots</code></span>，令 <span class="course-math" data-tex="d_{i}=2" data-display="false"><code>d_{i}=2</code></span> 若 <span class="course-math" data-tex="d_{ii}\neq{2}" data-display="false"><code>d_{ii}\neq{2}</code></span>，令 <span class="course-math" data-tex="d_{i}=3" data-display="false"><code>d_{i}=3</code></span> 若 <span class="course-math" data-tex="d_{ii}=2" data-display="false"><code>d_{ii}=2</code></span>。那么 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 与上面列的任何一个小数都至少有一位不同，所以它没有被列在这个表里。这就造成了矛盾。因此 <span class="course-math" data-tex="\mathbb{R}" data-display="false"><code>\mathbb{R}</code></span> 不可数。这就是 Cantor Diagonalization Argument.
- <span class="course-math" data-tex="\mathcal{P}(\mathbb{N})" data-display="false"><code>\mathcal{P}(\mathbb{N})</code></span> 不可数。假设它可数，由于 <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span> 的每个子集可以用一串唯一的比特串（bit string）表示（若 <span class="course-math" data-tex="j\in S" data-display="false"><code>j\in S</code></span> 则 <span class="course-math" data-tex="b_{j}=1" data-display="false"><code>b_{j}=1</code></span>）。那么可以用 Cantor Diagonalization Argument 构造出一个尚未列出的比特串（也就是尚未列出的子集）。

**Schroder-Bernstein Theorem**：
<span class="course-math course-math-display" data-tex="(\lvert A \rvert \leq \lvert B \rvert\land\lvert B \rvert \leq \lvert A \rvert )\to \lvert A \rvert =\lvert B \rvert" data-display="true"><code>(\lvert A \rvert \leq \lvert B \rvert\land\lvert B \rvert \leq \lvert A \rvert )\to \lvert A \rvert =\lvert B \rvert</code></span>
这可以让证明等势从找双射，变成找两个单射就好了。

定义幂集（Power set）<span class="course-math" data-tex="\mathcal{P}(S)" data-display="false"><code>\mathcal{P}(S)</code></span>：所有 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的子集组成的集合。
- <span class="course-math" data-tex="\mathcal{P}(\varnothing)=\{ \varnothing \}" data-display="false"><code>\mathcal{P}(\varnothing)=\{ \varnothing \}</code></span>
- <span class="course-math" data-tex="\mathcal{P}(\{ 1,2 \})=\{ \varnothing, \{ 1 \},\{ 2 \},\{ 1,2 \} \}" data-display="false"><code>\mathcal{P}(\{ 1,2 \})=\{ \varnothing, \{ 1 \},\{ 2 \},\{ 1,2 \} \}</code></span>
对于有限集 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>，有 <span class="course-math" data-tex="\lvert \mathcal{P}(S) \rvert=2^{\lvert S \rvert}" data-display="false"><code>\lvert \mathcal{P}(S) \rvert=2^{\lvert S \rvert}</code></span>。

定义元组（tuple）：一些有序的对象放在一起。
定义笛卡尔积（Cartesian Product）：
<span class="course-math course-math-display" data-tex="A_{1}\times A_{2}\times\dots \times A_{n}=\{ (a_{1},a_{2},\dots,a_{n}):a_{i}\in A_{i} \}" data-display="true"><code>A_{1}\times A_{2}\times\dots \times A_{n}=\{ (a_{1},a_{2},\dots,a_{n}):a_{i}\in A_{i} \}</code></span>
<span class="course-math" data-tex="A\times B\neq B\times A, \lvert A\times B \rvert=\lvert A \rvert\times \lvert B \rvert" data-display="false"><code>A\times B\neq B\times A, \lvert A\times B \rvert=\lvert A \rvert\times \lvert B \rvert</code></span>
定义 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 之间的关系（Relation）：一个 <span class="course-math" data-tex="A\times B" data-display="false"><code>A\times B</code></span> 的子集。

定义补集（Complement）<span class="course-math" data-tex="\bar{A}" data-display="false"><code>\bar{A}</code></span>：全集 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 中不属于 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的元素组成的集合。
<span class="course-math course-math-display" data-tex="\bar{A}=U-A=\{x\in U\mid x\notin A\}" data-display="true"><code>\bar{A}=U-A=\{x\in U\mid x\notin A\}</code></span>

定义 **Disjoint**：两个集合无交。
集合恒等式：

| 名称 | 恒等式 |
| --- | --- |
| Identity laws | <span class="course-math" data-tex="A\cup\emptyset=A" data-display="false"><code>A\cup\emptyset=A</code></span><br><span class="course-math" data-tex="A\cap U=A" data-display="false"><code>A\cap U=A</code></span> |
| Domination laws | <span class="course-math" data-tex="A\cup U=U" data-display="false"><code>A\cup U=U</code></span><br><span class="course-math" data-tex="A\cap\emptyset=\emptyset" data-display="false"><code>A\cap\emptyset=\emptyset</code></span> |
| Idempotent laws | <span class="course-math" data-tex="A\cup A=A" data-display="false"><code>A\cup A=A</code></span><br><span class="course-math" data-tex="A\cap A=A" data-display="false"><code>A\cap A=A</code></span> |
| Complementation laws | <span class="course-math" data-tex="\overline{\overline{A}}=A" data-display="false"><code>\overline{\overline{A}}=A</code></span> |
| Commutative laws | <span class="course-math" data-tex="A\cup B=B\cup A" data-display="false"><code>A\cup B=B\cup A</code></span><br><span class="course-math" data-tex="A\cap B=B\cap A" data-display="false"><code>A\cap B=B\cap A</code></span> |
| Associative laws | <span class="course-math" data-tex="A\cup(B\cup C)=(A\cup B)\cup C" data-display="false"><code>A\cup(B\cup C)=(A\cup B)\cup C</code></span><br><span class="course-math" data-tex="A\cap(B\cap C)=(A\cap B)\cap C" data-display="false"><code>A\cap(B\cap C)=(A\cap B)\cap C</code></span> |
| Distributive laws | <span class="course-math" data-tex="A\cup(B\cap C)=(A\cup B)\cap(A\cup C)" data-display="false"><code>A\cup(B\cap C)=(A\cup B)\cap(A\cup C)</code></span><br><span class="course-math" data-tex="A\cap(B\cup C)=(A\cap B)\cup(A\cap C)" data-display="false"><code>A\cap(B\cup C)=(A\cap B)\cup(A\cap C)</code></span> |
| De Morgan's laws | <span class="course-math" data-tex="\overline{A\cap B}=\overline{A}\cup\overline{B}" data-display="false"><code>\overline{A\cap B}=\overline{A}\cup\overline{B}</code></span><br><span class="course-math" data-tex="\overline{A\cup B}=\overline{A}\cap\overline{B}" data-display="false"><code>\overline{A\cup B}=\overline{A}\cap\overline{B}</code></span> |
| Absorption laws | <span class="course-math" data-tex="A\cup(A\cap B)=A" data-display="false"><code>A\cup(A\cap B)=A</code></span><br><span class="course-math" data-tex="A\cap(A\cup B)=A" data-display="false"><code>A\cap(A\cup B)=A</code></span> |
| Complement laws | <span class="course-math" data-tex="A\cup\overline{A}=U" data-display="false"><code>A\cup\overline{A}=U</code></span><br><span class="course-math" data-tex="A\cap\overline{A}=\emptyset" data-display="false"><code>A\cap\overline{A}=\emptyset</code></span> |

要证明这些恒等式：
- 与真值表相对的，使用成员表（其中 0 表示不在集合中，1 表示在集合中）：

| <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> | <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> | <span class="course-math" data-tex="\overline{A}" data-display="false"><code>\overline{A}</code></span> | <span class="course-math" data-tex="\overline{B}" data-display="false"><code>\overline{B}</code></span> | <span class="course-math" data-tex="\overline{A \cap B}" data-display="false"><code>\overline{A \cap B}</code></span> | <span class="course-math" data-tex="\overline{A} \cup \overline{B}" data-display="false"><code>\overline{A} \cup \overline{B}</code></span> |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 1 |

- 也可以通过证明对应的逻辑表达式 <span class="course-math" data-tex="\forall x (x\in \text{LHS}\leftrightarrow x\in \text{RHS})" data-display="false"><code>\forall x (x\in \text{LHS}\leftrightarrow x\in \text{RHS})</code></span>
- 也可以结合 Set builder 和逻辑等价律。
计算机中若全集确定且有限，可以通过一个比特串表示集合。

罗素悖论（第三次数学危机）：
<span class="course-math course-math-display" data-tex="S=\{ x\mid x\not\in x \}" data-display="true"><code>S=\{ x\mid x\not\in x \}</code></span>
- 若 <span class="course-math" data-tex="S\in S" data-display="false"><code>S\in S</code></span>，可以推出 <span class="course-math" data-tex="S\not\in S" data-display="false"><code>S\not\in S</code></span>。
- 若 <span class="course-math" data-tex="S\not\in S" data-display="false"><code>S\not\in S</code></span>，可以推出 <span class="course-math" data-tex="S\in S" data-display="false"><code>S\in S</code></span>。
需要一个公理化的集合论。

康托定理（Cantor Theorem）：
<span class="course-math course-math-display" data-tex="\lvert S \rvert &lt;\lvert \mathcal{P}(S) \rvert" data-display="true"><code>\lvert S \rvert &lt;\lvert \mathcal{P}(S) \rvert</code></span>

证明：
- 首先证明 <span class="course-math" data-tex="\lvert S \rvert \leq \lvert \mathcal{P}(S) \rvert" data-display="false"><code>\lvert S \rvert \leq \lvert \mathcal{P}(S) \rvert</code></span>。只需要令 <span class="course-math" data-tex="f: S\to \mathcal{P}(S)," data-display="false"><code>f: S\to \mathcal{P}(S),</code></span> 使得 <span class="course-math" data-tex="\forall s\in S, f(s)=\{ s \}\in\mathcal{P}(S)" data-display="false"><code>\forall s\in S, f(s)=\{ s \}\in\mathcal{P}(S)</code></span>。容易证明 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是 one-to-one 的，即这个 <span class="course-math" data-tex="\leq" data-display="false"><code>\leq</code></span> 成立。
- 再证明 <span class="course-math" data-tex="\lvert S \rvert\neq \lvert \mathcal{P}(S) \rvert" data-display="false"><code>\lvert S \rvert\neq \lvert \mathcal{P}(S) \rvert</code></span>。只需要考虑 <span class="course-math" data-tex="S\neq \varnothing" data-display="false"><code>S\neq \varnothing</code></span> 的情况。反证法：假设 <span class="course-math" data-tex="\lvert S \rvert=\lvert \mathcal{P}(S) \rvert" data-display="false"><code>\lvert S \rvert=\lvert \mathcal{P}(S) \rvert</code></span>  ，那么就存在一个从 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 到 <span class="course-math" data-tex="\mathcal{P}(S)" data-display="false"><code>\mathcal{P}(S)</code></span> 的双射 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span>。考虑集合 <span class="course-math" data-tex="T:=\{ s\in S\mid s\not\in f(s) \}" data-display="false"><code>T:=\{ s\in S\mid s\not\in f(s) \}</code></span>。这里 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 不是空集，因为若 <span class="course-math" data-tex="f(s&#x27;)=\varnothing" data-display="false"><code>f(s&#x27;)=\varnothing</code></span>，那么 <span class="course-math" data-tex="s&#x27;\in T" data-display="false"><code>s&#x27;\in T</code></span>。同时，<span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 必然是 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的子集，由双射，必然存在 <span class="course-math" data-tex="s_{0}\in S" data-display="false"><code>s_{0}\in S</code></span> 使得 <span class="course-math" data-tex="f(s_{0})=T" data-display="false"><code>f(s_{0})=T</code></span>。
- 那么，若 <span class="course-math" data-tex="s_{0}\in T" data-display="false"><code>s_{0}\in T</code></span>，则根据 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 的定义，<span class="course-math" data-tex="s_{0}\not\in f(s_{0})=T" data-display="false"><code>s_{0}\not\in f(s_{0})=T</code></span>。若 <span class="course-math" data-tex="s_{0}\not\in T" data-display="false"><code>s_{0}\not\in T</code></span>，则 <span class="course-math" data-tex="s_{0}\not\in T=f(s_{0})" data-display="false"><code>s_{0}\not\in T=f(s_{0})</code></span>，那么根据 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 的定义， <span class="course-math" data-tex="s_{0}\in T" data-display="false"><code>s_{0}\in T</code></span>。所以就产生了矛盾。（理发师悖论：<span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 包含了所有不在自己的像里的元素。那么， <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 的原像在不在 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 里？）



## 函数
{: #section-1 }


定义函数（function）：两个集合 <span class="course-math" data-tex="A,B" data-display="false"><code>A,B</code></span> ，则 <span class="course-math" data-tex="f:A\to B" data-display="false"><code>f:A\to B</code></span> 表示把 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的每个元素对应到 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 中的恰好一个元素。
- 设 <span class="course-math" data-tex="f: A\to B" data-display="false"><code>f: A\to B</code></span> 是一个函数，则 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 称为 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的定义域（Domain），<span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 称为 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的陪域（Codomain），也称 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 映射到 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span>。
- 若 <span class="course-math" data-tex="f(a)=b" data-display="false"><code>f(a)=b</code></span>，则 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 是 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的像（Image），<span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 是 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 的一个原像（Preimage）。
-  <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中所有元素的像组成的集合称为 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 的值域（Range），记为 <span class="course-math" data-tex="f(A)" data-display="false"><code>f(A)</code></span>。
- （子集的像）对于任意子集 <span class="course-math" data-tex="S\subseteq A" data-display="false"><code>S\subseteq A</code></span>，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的像是由 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中各元素的像组成的 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的子集，记为 <span class="course-math" data-tex="f(S)=\{f(s)\mid s\in S\}" data-display="false"><code>f(S)=\{f(s)\mid s\in S\}</code></span>。

对 <span class="course-math" data-tex="f:A\to B" data-display="false"><code>f:A\to B</code></span> 分类：
- 单射（Injective / one-to-one）：<span class="course-math" data-tex="f(x)=f(y)\to x=y" data-display="false"><code>f(x)=f(y)\to x=y</code></span>（等价地，<span class="course-math" data-tex="x\neq y\to f(x)\neq f(y)" data-display="false"><code>x\neq y\to f(x)\neq f(y)</code></span>）。
- 满射 （Surjective / onto）：<span class="course-math" data-tex="f(A)=B" data-display="false"><code>f(A)=B</code></span> （值域就是陪域）。
- 双射（Bijective / one-to-one correspondence）：如果既是满射又是单射。

可以证明，对于**等势**的两个**有限**集合，单射和满射是等价的。（然而对于无限集合这是不对的）

可以定义反函数（Inverse Function） <span class="course-math" data-tex="f^{-1}(b)=a" data-display="false"><code>f^{-1}(b)=a</code></span> ，当且仅当 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是双射。
定义复合函数 <span class="course-math" data-tex="(f\circ g)(x)=f(g(x))" data-display="false"><code>(f\circ g)(x)=f(g(x))</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA-5.webp' | relative_url }}{% raw %}" alt="Set Theory - 集合论-5" width="609" height="280" loading="lazy" decoding="async">
若 <span class="course-math" data-tex="f:A\to B" data-display="false"><code>f:A\to B</code></span> 是双射，那么可以记集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的恒等函数（Identity Function）：<span class="course-math" data-tex="I_{A}=f^{-1}\circ f" data-display="false"><code>I_{A}=f^{-1}\circ f</code></span>。

定义一个函数是可计算的（Computable）：存在一个计算机程序可以找到函数的值。
- 不是所有函数都是可计算的。这是因为，计算机程序的集合是可数无穷的；而函数的集合是不可数无穷的。


### 一些重要函数
{: #section-2 }


上/下取整函数 <span class="course-math" data-tex="\lceil x \rceil,\lfloor x \rfloor" data-display="false"><code>\lceil x \rceil,\lfloor x \rfloor</code></span>

**TABLE 1** Useful Properties of the Floor and Ceiling Functions. (<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> is an integer, <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> is a real number)

| | Property |
| --- | --- |
| (1a) | <span class="course-math" data-tex="\lfloor x\rfloor=n \text{ if and only if } n\le x&lt;n+1" data-display="false"><code>\lfloor x\rfloor=n \text{ if and only if } n\le x&lt;n+1</code></span> |
| (1b) | <span class="course-math" data-tex="\lceil x\rceil=n \text{ if and only if } n-1&lt;x\le n" data-display="false"><code>\lceil x\rceil=n \text{ if and only if } n-1&lt;x\le n</code></span> |
| (1c) | <span class="course-math" data-tex="\lfloor x\rfloor=n \text{ if and only if } x-1&lt;n\le x" data-display="false"><code>\lfloor x\rfloor=n \text{ if and only if } x-1&lt;n\le x</code></span> |
| (1d) | <span class="course-math" data-tex="\lceil x\rceil=n \text{ if and only if } x\le n&lt;x+1" data-display="false"><code>\lceil x\rceil=n \text{ if and only if } x\le n&lt;x+1</code></span> |
| (2) | <span class="course-math" data-tex="x-1&lt;\lfloor x\rfloor\le x\le\lceil x\rceil&lt;x+1" data-display="false"><code>x-1&lt;\lfloor x\rfloor\le x\le\lceil x\rceil&lt;x+1</code></span> |
| (3a) | <span class="course-math" data-tex="\lfloor -x\rfloor=-\lceil x\rceil" data-display="false"><code>\lfloor -x\rfloor=-\lceil x\rceil</code></span> |
| (3b) | <span class="course-math" data-tex="\lceil -x\rceil=-\lfloor x\rfloor" data-display="false"><code>\lceil -x\rceil=-\lfloor x\rfloor</code></span> |
| (4a) | <span class="course-math" data-tex="\lfloor x+n\rfloor=\lfloor x\rfloor+n" data-display="false"><code>\lfloor x+n\rfloor=\lfloor x\rfloor+n</code></span> |
| (4b) | <span class="course-math" data-tex="\lceil x+n\rceil=\lceil x\rceil+n" data-display="false"><code>\lceil x+n\rceil=\lceil x\rceil+n</code></span> |

证明取整函数相关的式子考虑拆 <span class="course-math" data-tex="x=\widetilde{x}+a" data-display="false"><code>x=\widetilde{x}+a</code></span> 其中 <span class="course-math" data-tex="\widetilde{x}" data-display="false"><code>\widetilde{x}</code></span> 为整数部分。


## 序列 (Sequence)
{: #section-3 }


序列（Sequence）的定义：一个函数，把整数的子集（通常是  <span class="course-math" data-tex="\{ 0,1,2,\dots \}" data-display="false"><code>\{ 0,1,2,\dots \}</code></span> 或 <span class="course-math" data-tex="\{ 1,2,3,\dots \}" data-display="false"><code>\{ 1,2,3,\dots \}</code></span>）映射到集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>。用 <span class="course-math" data-tex="a_{n}" data-display="false"><code>a_{n}</code></span> 来表示整数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的像。用 <span class="course-math" data-tex="\{ a_{n} \}" data-display="false"><code>\{ a_{n} \}</code></span>  表示有序列表 <span class="course-math" data-tex="a_{1},a_{2},\dots" data-display="false"><code>a_{1},a_{2},\dots</code></span>。

等差数列（Arithmetic Progression）：形为 <span class="course-math" data-tex="a,a+d,a+2d, \dots,a+nd" data-display="false"><code>a,a+d,a+2d, \dots,a+nd</code></span> 的序列。首项为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>，公差（Common Difference）为 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span>。
等比数列（Geometric Progression）：形为 <span class="course-math" data-tex="a,ar,a r^{2}, \dots, ar^{n}" data-display="false"><code>a,ar,a r^{2}, \dots, ar^{n}</code></span> 的序列。首项为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>，公比（Common Ratio）为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>。

序列也可以用递归（Recursion）定义，例如 <span class="course-math" data-tex="f_{n}=f_{n-1}+f_{n-2}" data-display="false"><code>f_{n}=f_{n-1}+f_{n-2}</code></span> (Fibonacci Sequence)。


### 和式（Summations）
{: #section-4 }


<span class="course-math" data-tex="\sum_{j=m}^n a_{j}=a_{m}+a_{m+1}+\dots+a_{n}" data-display="false"><code>\sum_{j=m}^n a_{j}=a_{m}+a_{m+1}+\dots+a_{n}</code></span>. 其中 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 是 Lower Limit，<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 是 Upper Limit。
- 和式具有线性性（Linearity）：
<span class="course-math course-math-display" data-tex="\sum_{j}(ax_{j}+by_{j})=a\sum_{j}x_{j}+b\sum_{j} y_{j}" data-display="true"><code>\sum_{j}(ax_{j}+by_{j})=a\sum_{j}x_{j}+b\sum_{j} y_{j}</code></span>
<span class="course-math course-math-display" data-tex="\sum _{i} \sum_{j}a_{i}b_{j}=\sum_{i}a_{i}\sum_{j}b_{j}" data-display="true"><code>\sum _{i} \sum_{j}a_{i}b_{j}=\sum_{i}a_{i}\sum_{j}b_{j}</code></span>
一些有用的和式：
- 等比级数的和
<span class="course-math course-math-display" data-tex="\sum_{j=0}^{n}ar^{j}= a \frac{r^{n+1}-1}{r-1}" data-display="true"><code>\sum_{j=0}^{n}ar^{j}= a \frac{r^{n+1}-1}{r-1}</code></span>
对 <span class="course-math" data-tex="k^{1/2/3}" data-display="false"><code>k^{1/2/3}</code></span> 求和：
 <span class="course-math course-math-display" data-tex="\sum_{k=1}^{n}k= \frac{n(n+1)}{2}" data-display="true"><code>\sum_{k=1}^{n}k= \frac{n(n+1)}{2}</code></span>
<span class="course-math course-math-display" data-tex="\sum_{k=1}^{n}k^{2}= \frac{n(n+1)(2n+1)}{6}" data-display="true"><code>\sum_{k=1}^{n}k^{2}= \frac{n(n+1)(2n+1)}{6}</code></span>
<span class="course-math course-math-display" data-tex="\sum_{k=1}^{n} k^{3}= \frac{n^{2}(n+1)^{2}}{4}" data-display="true"><code>\sum_{k=1}^{n} k^{3}= \frac{n^{2}(n+1)^{2}}{4}</code></span>
（推导，以 <span class="course-math" data-tex="\sum k^{2}" data-display="false"><code>\sum k^{2}</code></span> 为例，使用 Telescoping 方法/“邻差法”：考察这个式子
<span class="course-math course-math-display" data-tex="\sum(k^{3}-(k-1)^{3})" data-display="true"><code>\sum(k^{3}-(k-1)^{3})</code></span>
一方面抵消之后就只剩下 <span class="course-math" data-tex="n^{3}" data-display="false"><code>n^{3}</code></span>，另一方面展开后它又等于 <span class="course-math" data-tex="3\sum k^{2}-3\sum k+n" data-display="false"><code>3\sum k^{2}-3\sum k+n</code></span>，代入即可。）
（另外我们发现 <span class="course-math" data-tex="\sum k^{3}=\left( \sum k \right)^{2}" data-display="false"><code>\sum k^{3}=\left( \sum k \right)^{2}</code></span>。它的证明：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\left(\sum_{i=1}^n i\right)^2&amp;=\sum_{i=1}^{n}i\sum_{j=1}^{n}j \\&#10;&amp;= \sum_{i=1}^{n}i \left( \sum_{j=1}^{i}j+\sum_{j=i}^{n}j-i \right) \\&#10;&amp;=\sum_{1\leq j\leq i\leq n}ij+\sum_{1\leq i\leq j\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2 \sum_{1\leq j\leq i\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i\sum_{j=1}^{i}j-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i \cdot \frac{i(i+1)}{2} - \sum_{i=1}^{n}i^{2} \\&#10;&amp;=\sum_{i=1}^{n} i^{3}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\left(\sum_{i=1}^n i\right)^2&amp;=\sum_{i=1}^{n}i\sum_{j=1}^{n}j \\&#10;&amp;= \sum_{i=1}^{n}i \left( \sum_{j=1}^{i}j+\sum_{j=i}^{n}j-i \right) \\&#10;&amp;=\sum_{1\leq j\leq i\leq n}ij+\sum_{1\leq i\leq j\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2 \sum_{1\leq j\leq i\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i\sum_{j=1}^{i}j-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i \cdot \frac{i(i+1)}{2} - \sum_{i=1}^{n}i^{2} \\&#10;&amp;=\sum_{i=1}^{n} i^{3}&#10;\end{aligned}</code></span>
）
（无穷序列）
- 对 <span class="course-math" data-tex="\lvert x \rvert&lt;1" data-display="false"><code>\lvert x \rvert&lt;1</code></span>，有
<span class="course-math course-math-display" data-tex="\sum_{k=0}^{\infty}x^{k}=\lim_{ n \to \infty } \sum_{k=0}^{n} x^{k}= \frac{1}{1-x}" data-display="true"><code>\sum_{k=0}^{\infty}x^{k}=\lim_{ n \to \infty } \sum_{k=0}^{n} x^{k}= \frac{1}{1-x}</code></span>
<span class="course-math course-math-display" data-tex="\sum_{k=0}^{\infty}kx^{k-1}= \frac{1}{(1-x)^{2}}" data-display="true"><code>\sum_{k=0}^{\infty}kx^{k-1}= \frac{1}{(1-x)^{2}}</code></span>
（第二个式子可以用求导或**错位相减**的方法求得）


## 关系（Relation）
{: #section-5 }


二元关系（Binary Relation）：从集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 到 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的一个二元关系，是它们笛卡尔积 <span class="course-math" data-tex="A\times B" data-display="false"><code>A\times B</code></span> 的一个子集 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>。用记号 <span class="course-math" data-tex="aRb" data-display="false"><code>aRb</code></span> 表示 <span class="course-math" data-tex="(a,b)\in R" data-display="false"><code>(a,b)\in R</code></span>，用记号 <span class="course-math" data-tex="a\not R b" data-display="false"><code>a\not R b</code></span> 表示 <span class="course-math" data-tex="(a,b)\notin R" data-display="false"><code>(a,b)\notin R</code></span>。

要表示一个关系：可以枚举出 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 里面的所有有序对；也可以用图（箭头）来表示有序对，从而表示关系；也可以用表格/矩阵来表示（对应的分量为 1/0 表示这个有序对是否在关系中）。

关系可以是一对多的。因此，函数都是关系；而关系不总是函数。

定义集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的关系（relation on a set <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>）为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 到 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个二元关系。若 <span class="course-math" data-tex="\lvert A \rvert=n" data-display="false"><code>\lvert A \rvert=n</code></span>，那么集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的关系有 <span class="course-math" data-tex="2^{n^{2}}" data-display="false"><code>2^{n^{2}}</code></span> 种。

对于一个集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>，它可能具有一些特别的性质：
- **自反性（Reflexive）：** <span class="course-math" data-tex="(a,a)\in R \,\forall a\in A" data-display="false"><code>(a,a)\in R \,\forall a\in A</code></span>。用矩阵表示，就是对角线上全 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。个数为 <span class="course-math" data-tex="2^{n^{2}-n}" data-display="false"><code>2^{n^{2}-n}</code></span> 种。
- **反自反性（Irreflexive）：** <span class="course-math" data-tex="(a,a)\notin R\, \forall a\in A" data-display="false"><code>(a,a)\notin R\, \forall a\in A</code></span>。用矩阵表示，就是对角线上全 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。个数为 <span class="course-math" data-tex="2^{n^{2}-n}" data-display="false"><code>2^{n^{2}-n}</code></span> 种。
- **对称性（Symmetric）：** <span class="course-math" data-tex="(a,b)\in R\to(b,a)\in R\, \forall a,b\in A" data-display="false"><code>(a,b)\in R\to(b,a)\in R\, \forall a,b\in A</code></span>。用矩阵表示，就是对称矩阵。个数为 <span class="course-math" data-tex="2^{\frac{n^{2}+n}{2}}" data-display="false"><code>2^{\frac{n^{2}+n}{2}}</code></span>。
- **反对称性（Antisymmetric）：** <span class="course-math" data-tex="(a,b)\in R \land(b,a)\in R\to a=b \, \forall a,b\in A" data-display="false"><code>(a,b)\in R \land(b,a)\in R\to a=b \, \forall a,b\in A</code></span>。用矩阵表示，就是对于 <span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>，<span class="course-math" data-tex="m_{ij}=1\to m_{ji}=0" data-display="false"><code>m_{ij}=1\to m_{ji}=0</code></span>。计数，主对角线上自由，所以是 <span class="course-math" data-tex="2^{n}" data-display="false"><code>2^{n}</code></span>；其他，每组对称的位置一共有三种选法：<span class="course-math" data-tex="(1,0),(0,1),(0,0)" data-display="false"><code>(1,0),(0,1),(0,0)</code></span>，一共有 <span class="course-math" data-tex="\frac{n^{2}-n}{2}" data-display="false"><code>\frac{n^{2}-n}{2}</code></span> 组，因此总的个数为 <span class="course-math" data-tex="2^{n}\cdot3^{\frac{n^{2}-n}{2}}" data-display="false"><code>2^{n}\cdot3^{\frac{n^{2}-n}{2}}</code></span>。
- **传递性（Transitive）：** <span class="course-math" data-tex="(a,b)\in R\land(b,c)\in R\to(a,c)\in R \,\forall a,b,c\in A" data-display="false"><code>(a,b)\in R\land(b,c)\in R\to(a,c)\in R \,\forall a,b,c\in A</code></span>。

### 等价关系
{: #section-6 }


具有 自反性+对称性+传递性 的关系就是 **等价关系（Equivalence Relation）。**
例如，模 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 同余就是等价关系。

若 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的等价关系，所有与 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 有关系的元素组成的集合叫做 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的等价类（Equivalence Class），记作 <span class="course-math" data-tex="[a]_{R}" data-display="false"><code>[a]_{R}</code></span>。如果只考虑一个关系，可以直接记作 <span class="course-math" data-tex="[a]" data-display="false"><code>[a]</code></span>。
<span class="course-math course-math-display" data-tex="[a]_{R}=\{ b:(a,b)\in R \}" data-display="true"><code>[a]_{R}=\{ b:(a,b)\in R \}</code></span>
所有等价类的 disjoint union 就是原集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>。

定理：若 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的等价关系，那么以下是等价的：
1. <span class="course-math" data-tex="aRb" data-display="false"><code>aRb</code></span>
2. <span class="course-math" data-tex="[a]=[b]" data-display="false"><code>[a]=[b]</code></span>
3. <span class="course-math" data-tex="[a]\cap[b]\neq \varnothing" data-display="false"><code>[a]\cap[b]\neq \varnothing</code></span>。
证明：
- <span class="course-math" data-tex="1\implies2" data-display="false"><code>1\implies2</code></span>：若 <span class="course-math" data-tex="x\in[a]" data-display="false"><code>x\in[a]</code></span>，那么 <span class="course-math" data-tex="(a,x)\in R" data-display="false"><code>(a,x)\in R</code></span>，于是 <span class="course-math" data-tex="(x,a)\in R" data-display="false"><code>(x,a)\in R</code></span>，由于 <span class="course-math" data-tex="(a,b)\in R" data-display="false"><code>(a,b)\in R</code></span>，那么有 <span class="course-math" data-tex="(x,b)\in R" data-display="false"><code>(x,b)\in R</code></span>，于是 <span class="course-math" data-tex="(b,x)\in R" data-display="false"><code>(b,x)\in R</code></span>，也就是说 <span class="course-math" data-tex="x\in[b]" data-display="false"><code>x\in[b]</code></span>，所以 <span class="course-math" data-tex="[a]\subseteq [b]" data-display="false"><code>[a]\subseteq [b]</code></span>。由对称性，<span class="course-math" data-tex="[b]\subseteq[a]" data-display="false"><code>[b]\subseteq[a]</code></span>。于是 <span class="course-math" data-tex="[a]=[b]" data-display="false"><code>[a]=[b]</code></span>。
- <span class="course-math" data-tex="2\implies3" data-display="false"><code>2\implies3</code></span>：由 2，得到 <span class="course-math" data-tex="[a] \cap[b]=[a]=[b]" data-display="false"><code>[a] \cap[b]=[a]=[b]</code></span>。由自反性，<span class="course-math" data-tex="(a,a)\in R" data-display="false"><code>(a,a)\in R</code></span>，于是 <span class="course-math" data-tex="a\in [a]" data-display="false"><code>a\in [a]</code></span>。那么 <span class="course-math" data-tex="[a]\cap[b]\neq \varnothing" data-display="false"><code>[a]\cap[b]\neq \varnothing</code></span>。
- <span class="course-math" data-tex="3\implies1" data-display="false"><code>3\implies1</code></span>。不失一般性，设 <span class="course-math" data-tex="c\in[a]\cap[b]" data-display="false"><code>c\in[a]\cap[b]</code></span>，那么有 <span class="course-math" data-tex="(a,c),(b,c)\in R" data-display="false"><code>(a,c),(b,c)\in R</code></span>，于是 <span class="course-math" data-tex="(c,b)\in R" data-display="false"><code>(c,b)\in R</code></span>，从而 <span class="course-math" data-tex="(a,b)\in R" data-display="false"><code>(a,b)\in R</code></span>，也就是说 <span class="course-math" data-tex="aRb" data-display="false"><code>aRb</code></span>。

定义 **划分（partition）：** 集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 一些非空子集 <span class="course-math" data-tex="A_{1},A_{2}, \dots, A_{k}" data-display="false"><code>A_{1},A_{2}, \dots, A_{k}</code></span> 是 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的一个划分，若：
<span class="course-math course-math-display" data-tex="A_{i}\cap A_{j}=\varnothing,i\neq j,\quad \bigcup _{i=1}^{k}A_{i}=S" data-display="true"><code>A_{i}\cap A_{j}=\varnothing,i\neq j,\quad \bigcup _{i=1}^{k}A_{i}=S</code></span>
定理：若 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的等价关系，那么 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的所有等价类是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个划分。
- 并起来是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>：这个显然，因为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 里的每个元素都在它自己的等价类里。
- 由上面的定理，如果两个元素的等价类有交集，那么它们就是同一个等价类。


###  偏序
{: #section-7 }


具有 自反性+反对称性+传递性 的关系就是 **偏序（Partial Ordering）。**
一个带有偏序 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 叫做偏序集（Partially Ordered Set / poset），记作 <span class="course-math" data-tex="(S,R)" data-display="false"><code>(S,R)</code></span>。
例如 <span class="course-math" data-tex="(\mathbb{R}, \geq)" data-display="false"><code>(\mathbb{R}, \geq)</code></span> 是一个偏序集。正整数上的整除关系也是偏序。

**可比性（Comparability）：** 在一个偏序集 <span class="course-math" data-tex="(S,\preceq)" data-display="false"><code>(S,\preceq)</code></span> 中的两个元素 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 是可比的（Comparable），若 <span class="course-math" data-tex="a\preceq b" data-display="false"><code>a\preceq b</code></span> 或 <span class="course-math" data-tex="b\preceq a" data-display="false"><code>b\preceq a</code></span> 至少有一个成立。

**全序（Total Ordering）：** 在一个偏序集 <span class="course-math" data-tex="(S,\preceq)" data-display="false"><code>(S,\preceq)</code></span> 中的任意两个元素 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 都是可比的。那么说 <span class="course-math" data-tex="\preceq" data-display="false"><code>\preceq</code></span> 是全序，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是全序集（Totally Ordered Set / Linearly Ordered Set），也叫链（Chain）。

**字典序（Lexicographic Ordering）：** 有两个偏序集 <span class="course-math" data-tex="(A_{1},\preceq _{1})" data-display="false"><code>(A_{1},\preceq _{1})</code></span> 和 <span class="course-math" data-tex="(A_{2},\preceq _{2})" data-display="false"><code>(A_{2},\preceq _{2})</code></span>，那么称 <span class="course-math" data-tex="A_{1}\times A_{2}" data-display="false"><code>A_{1}\times A_{2}</code></span> 上的字典序 <span class="course-math" data-tex="(a_{1},a_{2})\preceq (b_{1},b_{2})" data-display="false"><code>(a_{1},a_{2})\preceq (b_{1},b_{2})</code></span>，定义为要么 <span class="course-math" data-tex="a_{1} \prec _{1}b_{1}" data-display="false"><code>a_{1} \prec _{1}b_{1}</code></span>，要么 <span class="course-math" data-tex="a_{1}=b_{1}" data-display="false"><code>a_{1}=b_{1}</code></span> 且 <span class="course-math" data-tex="a_{2}\preceq _{2} b_{2}" data-display="false"><code>a_{2}\preceq _{2} b_{2}</code></span>。

**Hasse Diagram：** 去掉偏序的有向图表示中：
- 去掉由自反性得到的边，也就是自环。
- 去掉由传递性得到的边，也就是去掉 <span class="course-math" data-tex="(x,y)" data-display="false"><code>(x,y)</code></span> 若存在 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> 使得有边 <span class="course-math" data-tex="(x,z)" data-display="false"><code>(x,z)</code></span> 和 <span class="course-math" data-tex="(z,y)" data-display="false"><code>(z,y)</code></span>。
- 去掉箭头，把箭头起始的点放在指向的点的 **下方** 来表示序。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20and%20Function%20-%20%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0-3.webp' | relative_url }}{% raw %}" alt="Set and Function - 集合与函数-3" width="277" height="194" loading="lazy" decoding="async">
定义 <span class="course-math" data-tex="(S,\preceq)" data-display="false"><code>(S,\preceq)</code></span> 的 **极大/极小元（Maximal / Minimal Element） <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>：**  不存在 <span class="course-math" data-tex="b\in S" data-display="false"><code>b\in S</code></span> 使得 <span class="course-math" data-tex="a\prec b" data-display="false"><code>a\prec b</code></span> / <span class="course-math" data-tex="b\prec a" data-display="false"><code>b\prec a</code></span>。
定义 <span class="course-math" data-tex="(S,\preceq)" data-display="false"><code>(S,\preceq)</code></span> 的  **最大/最小元（Greatest / Least Element）<span class="course-math" data-tex="a" data-display="false"><code>a</code></span>：** 任意 <span class="course-math" data-tex="b\in S" data-display="false"><code>b\in S</code></span> 都有 <span class="course-math" data-tex="b\preceq a" data-display="false"><code>b\preceq a</code></span> / <span class="course-math" data-tex="a \preceq b" data-display="false"><code>a \preceq b</code></span>。
可以用 Hasse Diagram 来找这些。

定义 **上界/下界（Upper Bound / Lower Bound）：** 考虑 <span class="course-math" data-tex="(S,\preceq)" data-display="false"><code>(S,\preceq)</code></span> 的子集 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，那么我们说 <span class="course-math" data-tex="u\in S" data-display="false"><code>u\in S</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个上界，如果 <span class="course-math" data-tex="a\preceq u" data-display="false"><code>a\preceq u</code></span> 对任意 <span class="course-math" data-tex="a\in A" data-display="false"><code>a\in A</code></span>。（下界类似）
进一步可以定义 **最小上界/最大下界（Least upper bound / greatest lower bound）**。

定义 **良序集（Well-Ordered Set）：** <span class="course-math" data-tex="(S,\preceq)" data-display="false"><code>(S,\preceq)</code></span> 的每个非空子集都有**最小元**。

良序集上可以用归纳法（The principle of well-ordered induction）：
- Inductive Step：对任意 <span class="course-math" data-tex="y\in S" data-display="false"><code>y\in S</code></span>，若 <span class="course-math" data-tex="P(x)" data-display="false"><code>P(x)</code></span> 对任意 <span class="course-math" data-tex="x\in S,x\prec y" data-display="false"><code>x\in S,x\prec y</code></span> 成立，则 <span class="course-math" data-tex="P(y)" data-display="false"><code>P(y)</code></span> 成立。
（证明：考虑所有反例组成的集合，一定会有一个最小元，根据 I.S. 这个最小元将会成立）
（不需要 Base Case，因为 I.S. 可以直接推出最小元成立）

定义 **格（Lattice）：** 一个偏序集，其中每一对元素都有最小上界和最大下界。这里第一幅图就是格，第二幅图不是格。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20and%20Function%20-%20%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0-4.webp' | relative_url }}{% raw %}" alt="Set and Function - 集合与函数-4" width="380" height="256" loading="lazy" decoding="async">
有限偏序集上的 **拓扑排序（Topological Sorting）：** 不断取出某个极小元素。这就得到了一个全序。

### 关系运算
{: #section-8 }


关系之间的运算：既然关系实际上是一个集合，那么集合之间的运算（并，交，差）可以作用到关系上。

**复合关系（Composite of Relations）：** <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 从 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 到 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span>；<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 从 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 到 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span>，那么它们的复合 <span class="course-math" data-tex="S \circ R" data-display="false"><code>S \circ R</code></span> 定义为
<span class="course-math course-math-display" data-tex="(a,b)\in R \land (b,c)\in S\to(a,c)\in S\circ R" data-display="true"><code>(a,b)\in R \land (b,c)\in S\to(a,c)\in S\circ R</code></span>
- 从 01 矩阵的表示方法看，这相当于矩阵乘法 <span class="course-math" data-tex="M_{R}M_{S}" data-display="false"><code>M_{R}M_{S}</code></span>（这里结果大于 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的设置为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 即可）

定义**关系的幂（power relation）**：
<span class="course-math course-math-display" data-tex="R^{1}=R,\quad R^{n+1}=R^{n} \circ R" data-display="true"><code>R^{1}=R,\quad R^{n+1}=R^{n} \circ R</code></span>
关于传递性，有**定理**：<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 具有传递性，当且仅当 <span class="course-math" data-tex="R^{n}\subseteq R\, \forall n=1,2,3, \dots" data-display="false"><code>R^{n}\subseteq R\, \forall n=1,2,3, \dots</code></span>。
证明：
- “当”：令 <span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span>，那么有 <span class="course-math" data-tex="R^{2}\subseteq R" data-display="false"><code>R^{2}\subseteq R</code></span>，按照定义，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 具有传递性。
- “仅当”：数学归纳法。
  - Base Case： <span class="course-math" data-tex="n=1" data-display="false"><code>n=1</code></span> 时， <span class="course-math" data-tex="R^{1}\subseteq R" data-display="false"><code>R^{1}\subseteq R</code></span> 显然成立。
  - I.H.：<span class="course-math" data-tex="R^{n}\subseteq R" data-display="false"><code>R^{n}\subseteq R</code></span>。
  - I.S.：<span class="course-math" data-tex="R^{n+1}=R^{n}\circ R" data-display="false"><code>R^{n+1}=R^{n}\circ R</code></span>。由定义，对于任意 <span class="course-math" data-tex="(a,b)\in R^{n+1}" data-display="false"><code>(a,b)\in R^{n+1}</code></span>，存在 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 使得 <span class="course-math" data-tex="(a,x)\in R" data-display="false"><code>(a,x)\in R</code></span>，以及 <span class="course-math" data-tex="(x,b)\in R^{n}\subseteq R" data-display="false"><code>(x,b)\in R^{n}\subseteq R</code></span>。那么由 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的传递性，<span class="course-math" data-tex="(a,b)\in R" data-display="false"><code>(a,b)\in R</code></span>。于是 <span class="course-math" data-tex="R^{n+1}\subseteq R" data-display="false"><code>R^{n+1}\subseteq R</code></span>。


### 表示关系
{: #section-9 }


表示 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元关系的方式：
- 用显式的列表/表格存它的元组。这就是一个关系数据库（Relational Database）。
- 用一个从定义域到 <span class="course-math" data-tex="\{ T,F \}" data-display="false"><code>\{ T,F \}</code></span> 上的函数表示。
表示二元关系的方式：
- 零一矩阵。
- 有向图。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20and%20Function%20-%20%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0-1.webp' | relative_url }}{% raw %}" alt="Set and Function - 集合与函数-1" width="504" height="149" loading="lazy" decoding="async">

### 闭包（Closures of Relations）
{: #section-10 }


**定义。** <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的**自反闭包**（Reflexive Closure of <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>），当：
- <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>。
- <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是自反的。
- <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是最小的（对所有包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的自反关系 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>，有 <span class="course-math" data-tex="S\subseteq Q" data-display="false"><code>S\subseteq Q</code></span>）。

对于其他性质，也可以类似地定义：
- **对称闭包**（Symmetric Closure）
- **传递闭包**（Transitive Closure）

反自反和反对称不可以定义闭包，因为不能通过添加元素让性质满足。
一般的，可以定义关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 关于性质 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 的闭包：最小的包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 且满足性质 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 的集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>。

自反闭包和对称闭包是容易找的，添加主对角线/对称位置缺失的部分即可。
而传递闭包没那么直观，可以看有向图：找传递闭包，就相当于在有向图中，把所有连通的 pair 加进去。

定义有向图中的路径（Path）是一系列边 <span class="course-math" data-tex="(x_{0},x_{1}),(x_{1},x_{2}), \dots, (x_{n-1},x_{n})" data-display="false"><code>(x_{0},x_{1}),(x_{1},x_{2}), \dots, (x_{n-1},x_{n})</code></span>，其中 <span class="course-math" data-tex="n\geq0" data-display="false"><code>n\geq0</code></span>。若<span class="course-math" data-tex="x_{0}=x_{n}" data-display="false"><code>x_{0}=x_{n}</code></span>，那么说这个路径是一个回路（Circuit / Cycle）。
**定理：** <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的一个关系，那么存在一个从 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 到 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 的长度为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的路径，当且仅当 <span class="course-math" data-tex="(a,b)\in R^{n}" data-display="false"><code>(a,b)\in R^{n}</code></span>。证明：
- 数学归纳法。Base Case： <span class="course-math" data-tex="n=1" data-display="false"><code>n=1</code></span>，根据定义，<span class="course-math" data-tex="(a,b)\in R" data-display="false"><code>(a,b)\in R</code></span>，当且仅当有路径 <span class="course-math" data-tex="a\to b" data-display="false"><code>a\to b</code></span>。
- I.H.：<span class="course-math" data-tex="(a,b)\in R^{n}" data-display="false"><code>(a,b)\in R^{n}</code></span> 当且仅当有路径 <span class="course-math" data-tex="\overbrace{a\to\dots\to b}^{n}" data-display="false"><code>\overbrace{a\to\dots\to b}^{n}</code></span>。
- I.S.：<span class="course-math" data-tex="(a,b)\in R^{n+1}=R^{n}\circ R" data-display="false"><code>(a,b)\in R^{n+1}=R^{n}\circ R</code></span> 当且仅当存在 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 使得 <span class="course-math" data-tex="(a,x)\in R,(x,b)\in R^{n}" data-display="false"><code>(a,x)\in R,(x,b)\in R^{n}</code></span>，那么根据归纳假设，这等价于存在路径 <span class="course-math" data-tex="\underbrace{a\to \overbrace{x\to\dots\to b}^{n}}_{n+1}" data-display="false"><code>\underbrace{a\to \overbrace{x\to\dots\to b}^{n}}_{n+1}</code></span>。

定义 关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的 **连通关系（Connectivity Relation）：**
<span class="course-math course-math-display" data-tex="R^{*}= \bigcup _{k=1}^{\infty}R^{k}" data-display="true"><code>R^{*}= \bigcup _{k=1}^{\infty}R^{k}</code></span>
这也就是 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 所有长度的所有路径的起终点组成的关系。

**引理：** 若 <span class="course-math" data-tex="\lvert A \rvert=n" data-display="false"><code>\lvert A \rvert=n</code></span>，那么，若存在一个 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 到 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> （<span class="course-math" data-tex="a\neq b" data-display="false"><code>a\neq b</code></span>）的路径，就会有一个长度 <span class="course-math" data-tex="\leq n-1" data-display="false"><code>\leq n-1</code></span> 的路径。
- 证明：把路径上的所有回路删掉，那么每个顶点最多被访问一次，只有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个顶点，最长路径就只有 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span>。
于是连通关系可以写成：
<span class="course-math course-math-display" data-tex="R^{*}= \bigcup _{k=1}^{n} R^{k}" data-display="true"><code>R^{*}= \bigcup _{k=1}^{n} R^{k}</code></span>
**定理：** <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的传递闭包（Transitive Closure）就是它的连通关系（Connectivity Relation） <span class="course-math" data-tex="R^{*}" data-display="false"><code>R^{*}</code></span>。
证明：需要分别考虑传递闭包的三条定义。
- <span class="course-math" data-tex="R^{*}" data-display="false"><code>R^{*}</code></span> 显然包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>。
- <span class="course-math" data-tex="R^{*}" data-display="false"><code>R^{*}</code></span> 是传递的。
  - 证明：对任意 <span class="course-math" data-tex="(a,b),(b,c)\in R^{*}" data-display="false"><code>(a,b),(b,c)\in R^{*}</code></span>，我们知道 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 到 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 有一个路径，<span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 到 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 有一个路径，把路径连起来，就得到有一个 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 到 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span> 的路径，于是 <span class="course-math" data-tex="(a,c)\in R^{*}" data-display="false"><code>(a,c)\in R^{*}</code></span>。
- <span class="course-math" data-tex="R^{*}\subseteq S" data-display="false"><code>R^{*}\subseteq S</code></span> 对任意包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的传递的关系 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>。
  - 证明：假设 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是一个包含 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的传递的关系。由上面的定理，<span class="course-math" data-tex="S^{n}\subseteq S" data-display="false"><code>S^{n}\subseteq S</code></span> 对任意 <span class="course-math" data-tex="n\geq 1" data-display="false"><code>n\geq 1</code></span> 成立，于是 <span class="course-math" data-tex="S^{*}\subseteq S" data-display="false"><code>S^{*}\subseteq S</code></span>。
  - 又因为 <span class="course-math" data-tex="R\subseteq S" data-display="false"><code>R\subseteq S</code></span>，所以 <span class="course-math" data-tex="R^{n}\subseteq S^{n}" data-display="false"><code>R^{n}\subseteq S^{n}</code></span>，从而 <span class="course-math" data-tex="R^{*}\subseteq S^{*}\subseteq S" data-display="false"><code>R^{*}\subseteq S^{*}\subseteq S</code></span>。

找传递闭包的算法：
- 考虑零一矩阵 <span class="course-math" data-tex="\boldsymbol{M}_{R}" data-display="false"><code>\boldsymbol{M}_{R}</code></span>。
- 那么传递闭包对应矩阵就是 <span class="course-math" data-tex="\boldsymbol{M}_{R^{*}}= \boldsymbol{M}_{R}\lor\boldsymbol{M}_{R}^{[2]}\lor \dots \lor\boldsymbol{M}_{R}^{[n]}" data-display="false"><code>\boldsymbol{M}_{R^{*}}= \boldsymbol{M}_{R}\lor\boldsymbol{M}_{R}^{[2]}\lor \dots \lor\boldsymbol{M}_{R}^{[n]}</code></span>（<span class="course-math" data-tex="\boldsymbol{M}_{R}^{[k]}" data-display="false"><code>\boldsymbol{M}_{R}^{[k]}</code></span> 是布尔矩阵乘积的 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 次幂，<span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 是逐项取或）。
- 硬算是 <span class="course-math" data-tex="\Theta(n^{4})" data-display="false"><code>\Theta(n^{4})</code></span> 的，若矩阵乘法视为 <span class="course-math" data-tex="\Theta(n^{3})" data-display="false"><code>\Theta(n^{3})</code></span>。
- 改进的算法：Roy-Warshall（<span class="course-math" data-tex="\Theta(n^{3})" data-display="false"><code>\Theta(n^{3})</code></span>），类似于 Floyd，不断引入第 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个节点（<span class="course-math" data-tex="k=1,2, \dots n" data-display="false"><code>k=1,2, \dots n</code></span>），看能不能改善连通性（让更多的边连通），这样迭代到 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 的时候就求出了中间只经过编号 <span class="course-math" data-tex="\leq k" data-display="false"><code>\leq k</code></span> 的节点的连通性。
<pre class="course-pseudocode">\begin{algorithm}
\begin{algorithmic}
  \Procedure{Roy-Warshall}{$\boldsymbol{M}_R$}
    \State $W = \boldsymbol{M}_R$
    \For{$k=1$ \To $n$}
      \For{$i=1$ \To $n$}
        \For{$j=1$ \To $n$}
          \State $w_{\mathit{ij}}=w_{\mathit{ij}}\lor(w_{\mathit{ik}}\land w_{\mathit{kj}})$
        \EndFor
      \EndFor
    \EndFor
    \Return $W$
  \EndProcedure
\end{algorithmic}
\end{algorithm}
</pre>


### <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元关系与数据库
{: #section-11 }


<span class="course-math" data-tex="R:A_{1},A_{2}, \dots, A_{n}" data-display="false"><code>R:A_{1},A_{2}, \dots, A_{n}</code></span>，定义为 <span class="course-math" data-tex="R\subseteq A_{1}\times A_{2}\times\dots \times A_{n}" data-display="false"><code>R\subseteq A_{1}\times A_{2}\times\dots \times A_{n}</code></span>。
- <span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 叫 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的定义域（Domains）
- <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的度（degree）为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>。
- 若对于定义域 <span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 中的任意元素 <span class="course-math" data-tex="a_{i}" data-display="false"><code>a_{i}</code></span>，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 包含至多一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元组 <span class="course-math" data-tex="(\dots,a_{i},\dots)" data-display="false"><code>(\dots,a_{i},\dots)</code></span>，那么称 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 在定义域 <span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 上是功能性的（Functional）。

**主键（Primary Key）：** 若 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 在 定义域 <span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 上是功能性的，就说 <span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 是主键。
类似的，有**复合键（Composite Key）**： 把上面主键的定义，换成对一个定义域的集合 <span class="course-math" data-tex="\{ A_{i},A_{j}, \dots \}" data-display="false"><code>\{ A_{i},A_{j}, \dots \}</code></span>，<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 包含至多一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元组 <span class="course-math" data-tex="(\dots, a_{i}, \dots, a_{j}, \dots)" data-display="false"><code>(\dots, a_{i}, \dots, a_{j}, \dots)</code></span>。

可以用 E-R 图表示关系数据库（Entity-Relationship）<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20and%20Function%20-%20%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0-2.webp' | relative_url }}{% raw %}" alt="Set and Function - 集合与函数-2" width="502" height="450" loading="lazy" decoding="async">若 <span class="course-math" data-tex="A=A_{1}\times A_{2}\times \dots \times A_{n}" data-display="false"><code>A=A_{1}\times A_{2}\times \dots \times A_{n}</code></span> 上有一个关系 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>，那么有一些运算符：
- 选择（Selection Operator）：定义一个条件 <span class="course-math" data-tex="C:A\to \{ T,F \}" data-display="false"><code>C:A\to \{ T,F \}</code></span>。那么选择就是选出关系中满足这个条件的一些行：
<span class="course-math course-math-display" data-tex="s_{C}(R)=\{ a\in R \mid C(a)=T \}" data-display="true"><code>s_{C}(R)=\{ a\in R \mid C(a)=T \}</code></span>
- 投影（Projection Operator）：令一系列 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 到 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 之间的下标 <span class="course-math" data-tex="\{ i_{k} \}=(i_{1},i_{2}, \dots, i_{m})" data-display="false"><code>\{ i_{k} \}=(i_{1},i_{2}, \dots, i_{m})</code></span>，那么投影就是保留这些下标对应的一些列：
<span class="course-math course-math-display" data-tex="P_{\{ i_{k} \}}: A\to A_{i_{1}}\times A_{i_{2}}\times \dots \times A_{i_{m}}" data-display="true"><code>P_{\{ i_{k} \}}: A\to A_{i_{1}}\times A_{i_{2}}\times \dots \times A_{i_{m}}</code></span>
<span class="course-math course-math-display" data-tex="P_{\{ i_{k} \}}(a_{1},a_{2}, \dots, a_{n}) = (a_{i_{1}},a_{i_{2}},\dots,a_{i_{m}})" data-display="true"><code>P_{\{ i_{k} \}}(a_{1},a_{2}, \dots, a_{n}) = (a_{i_{1}},a_{i_{2}},\dots,a_{i_{m}})</code></span>
- 合并（Join Operator）：若 <span class="course-math" data-tex="R_{1}" data-display="false"><code>R_{1}</code></span> 中有 <span class="course-math" data-tex="(A,B)" data-display="false"><code>(A,B)</code></span>，<span class="course-math" data-tex="R_{2}" data-display="false"><code>R_{2}</code></span> 中有 <span class="course-math" data-tex="(B,C)" data-display="false"><code>(B,C)</code></span>，那么合并的关系 <span class="course-math" data-tex="J(R_{1},R_{2})" data-display="false"><code>J(R_{1},R_{2})</code></span> 中就有 <span class="course-math" data-tex="(A,B,C)" data-display="false"><code>(A,B,C)</code></span>。
{% endraw %}
