---
title: "Set and Function - 集合与函数"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-09-03T17:09:42+08:00"
updated_at: "2026-09-30T19:27:56+08:00"
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

重要的集合：
<span class="course-math course-math-display" data-tex="\mathbb{N},\mathbb{Z},\mathbb{Z}^{+},\mathbb{Q},\mathbb{R},\mathbb{C}" data-display="true"><code>\mathbb{N},\mathbb{Z},\mathbb{Z}^{+},\mathbb{Q},\mathbb{R},\mathbb{C}</code></span>

子集：<span class="course-math" data-tex="A\subseteq B" data-display="false"><code>A\subseteq B</code></span> 
真子集（Proper subset）：<span class="course-math" data-tex="A\subset B" data-display="false"><code>A\subset B</code></span>

定义集合的势（Cardinality）<span class="course-math" data-tex="&#124;S&#124;" data-display="false"><code>&#124;S&#124;</code></span>：
- 对于有限集，就是元素的个数。
- 对于任意集合：我们说 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 等势（have the same cardinality），若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 之间存在满射（one-to-one correspondence）。
- 我们说 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的势小于 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的势或与 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的势相同，若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 到 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 存在一个单射（one-to-one function），记作 <span class="course-math" data-tex="\lvert A \rvert\leq \lvert B \rvert" data-display="false"><code>\lvert A \rvert\leq \lvert B \rvert</code></span>（注意，这里并不是说数值上的小于或等于）。
- 若 <span class="course-math" data-tex="\lvert A \rvert\leq \lvert B \rvert" data-display="false"><code>\lvert A \rvert\leq \lvert B \rvert</code></span> 且 <span class="course-math" data-tex="A,B" data-display="false"><code>A,B</code></span> 不等势，那么记 <span class="course-math" data-tex="\lvert A \rvert&lt;\lvert B \rvert" data-display="false"><code>\lvert A \rvert&lt;\lvert B \rvert</code></span>。


定义可数集（Countable Set）：有限集，或与 <span class="course-math" data-tex="\mathbb{Z}^{+}" data-display="false"><code>\mathbb{Z}^{+}</code></span> 等势。否则是不可数（Uncountable）。
- 要证明可数，只需说明用一个序列可以把这个集合列尽。
- <span class="course-math" data-tex="\mathbb{Z}" data-display="false"><code>\mathbb{Z}</code></span> 可数。可以列一个序列 <span class="course-math" data-tex="0,1,-1,2,-2,\dots" data-display="false"><code>0,1,-1,2,-2,\dots</code></span>
- <span class="course-math" data-tex="\mathbb{Q}^{+}" data-display="false"><code>\mathbb{Q}^{+}</code></span> 可数。可以按这个来列举（依次去列 <span class="course-math" data-tex="p+q=2" data-display="false"><code>p+q=2</code></span> ，<span class="course-math" data-tex="p+q=3" data-display="false"><code>p+q=3</code></span> ... 的 <span class="course-math" data-tex="p / q" data-display="false"><code>p / q</code></span>，再加一个 filter 要求 <span class="course-math" data-tex="p,q" data-display="false"><code>p,q</code></span> 不可约）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20and%20Function%20-%20%E9%9B%86%E5%90%88%E4%B8%8E%E5%87%BD%E6%95%B0.png' | relative_url }}{% raw %}" alt="Set and Function - 集合与函数" width="190" height="182" loading="lazy" decoding="async">
- 若 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 可数，则 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的任意子集都可数。（加一个 filter 去掉不在子集里的，形成新的序列）
- 有限字母表 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 上的有限字符串集 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 是可数无穷的。用字典序去形成序列即可。
- 从上面这条，可以推出，所有 Java 程序组成的集合是可数的。（加一个 filter: Java Compiler）。

不可数集
-  <span class="course-math" data-tex="\mathbb{R}" data-display="false"><code>\mathbb{R}</code></span> 不可数。假设 <span class="course-math" data-tex="\mathbb{R}" data-display="false"><code>\mathbb{R}</code></span> 可数，那么它的子集 <span class="course-math" data-tex="[0,1]" data-display="false"><code>[0,1]</code></span> 也是可数的。那么其中的所有数可以列为 
<span class="course-math course-math-display" data-tex="\begin{align}&#10;r_{1}=0.d_{11}d_{12}d_{13}\dots \\&#10;r_{2}=0.d_{21}d_{22}d_{23}\dots \\&#10;r_{3}=0.d_{31}d_{32}d_{33}\dots \\&#10;\dots\dots&#10;\end{align}" data-display="true"><code>\begin{align}&#10;r_{1}=0.d_{11}d_{12}d_{13}\dots \\&#10;r_{2}=0.d_{21}d_{22}d_{23}\dots \\&#10;r_{3}=0.d_{31}d_{32}d_{33}\dots \\&#10;\dots\dots&#10;\end{align}</code></span>
- 那么可以构造这样一个小数 <span class="course-math" data-tex="r=0.d_{1}d_{2}d_{3}\dots" data-display="false"><code>r=0.d_{1}d_{2}d_{3}\dots</code></span>，令 <span class="course-math" data-tex="d_{i}=2" data-display="false"><code>d_{i}=2</code></span> 若 <span class="course-math" data-tex="d_{ii}\neq{2}" data-display="false"><code>d_{ii}\neq{2}</code></span>，令 <span class="course-math" data-tex="d_{i}=3" data-display="false"><code>d_{i}=3</code></span> 若 <span class="course-math" data-tex="d_{ii}=2" data-display="false"><code>d_{ii}=2</code></span>。那么 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 与上面列的任何一个小数都至少有一位不同，所以它没有被列在这个表里。这就造成了矛盾。因此 <span class="course-math" data-tex="\mathbb{R}" data-display="false"><code>\mathbb{R}</code></span> 不可数。这就是 Cantor Diagonalization Argument.
- <span class="course-math" data-tex="\mathcal{P}(\mathbb{N})" data-display="false"><code>\mathcal{P}(\mathbb{N})</code></span> 不可数。假设它可数，由于 <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span> 的每个子集可以用一串唯一的比特串（bit string）表示（若 <span class="course-math" data-tex="j\in S" data-display="false"><code>j\in S</code></span> 则 <span class="course-math" data-tex="b_{j}=1" data-display="false"><code>b_{j}=1</code></span>）。那么可以用 Cantor Diagonalization Argument 构造出一个尚未列出的比特串（也就是尚未列出的子集）。

**Schroder-Bernstein Theorem**：
<span class="course-math course-math-display" data-tex="(\lvert A \rvert \leq \lvert B \rvert\land\lvert B \rvert \leq \lvert A \rvert )\to \lvert A \rvert =\lvert B \rvert" data-display="true"><code>(\lvert A \rvert \leq \lvert B \rvert\land\lvert B \rvert \leq \lvert A \rvert )\to \lvert A \rvert =\lvert B \rvert</code></span>
这可以让证明等势从找双射，变成找两个单射就好了。

**Disjoint Union（<span class="course-math" data-tex="\sqcup" data-display="false"><code>\sqcup</code></span>）**：先标记两个集合，再做并集。例如，<span class="course-math" data-tex="A=\{ 1,2 \},B=\{ 2,3 \}" data-display="false"><code>A=\{ 1,2 \},B=\{ 2,3 \}</code></span>，那么 <span class="course-math" data-tex="A\sqcup B=A^*\cup B^*=\{ (1,1),(2,1) \}\cup \{ (2,2),(3,2) \}= \{ (1,1),(2,1),(2,2),(3,2) \}" data-display="false"><code>A\sqcup B=A^*\cup B^*=\{ (1,1),(2,1) \}\cup \{ (2,2),(3,2) \}= \{ (1,1),(2,1),(2,2),(3,2) \}</code></span>。

定义幂集（Power set）<span class="course-math" data-tex="\mathcal{P}(S)" data-display="false"><code>\mathcal{P}(S)</code></span>：所有 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的子集组成的集合。
- <span class="course-math" data-tex="\mathcal{P}(\varnothing)=\{ \varnothing \}" data-display="false"><code>\mathcal{P}(\varnothing)=\{ \varnothing \}</code></span>
- <span class="course-math" data-tex="\mathcal{P}(\{ 1,2 \})=\{ \varnothing, \{ 1 \},\{ 2 \},\{ 1,2 \} \}" data-display="false"><code>\mathcal{P}(\{ 1,2 \})=\{ \varnothing, \{ 1 \},\{ 2 \},\{ 1,2 \} \}</code></span>
对于有限集 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>，有 <span class="course-math" data-tex="\lvert \mathcal{P}(S) \rvert=2^{\lvert S \rvert}" data-display="false"><code>\lvert \mathcal{P}(S) \rvert=2^{\lvert S \rvert}</code></span>。

定义元组（tuple）：一些有序的对象放在一起。
定义笛卡尔积（Cartesian Product）：
<span class="course-math course-math-display" data-tex="A_{1}\times A_{2}\times\dots \times A_{n}=\{ (a_{1},a_{2},\dots,a_{n}):a_{i}\in A_{i} \}" data-display="true"><code>A_{1}\times A_{2}\times\dots \times A_{n}=\{ (a_{1},a_{2},\dots,a_{n}):a_{i}\in A_{i} \}</code></span>
<span class="course-math" data-tex="A\times B\neq B\times A, \lvert A\times B \rvert=\lvert A \rvert\times \lvert B \rvert" data-display="false"><code>A\times B\neq B\times A, \lvert A\times B \rvert=\lvert A \rvert\times \lvert B \rvert</code></span>
定义 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 之间的关系（Relation）：一个 <span class="course-math" data-tex="A\times B" data-display="false"><code>A\times B</code></span> 的子集。

定义 **Disjoint**：两个集合无交。
集合恒等式：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA.png' | relative_url }}{% raw %}" alt="Set Theory - 集合论" width="298" height="362" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA-1.png' | relative_url }}{% raw %}" alt="Set Theory - 集合论-1" width="299" height="272" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA-2.png' | relative_url }}{% raw %}" alt="Set Theory - 集合论-2" width="302" height="226" loading="lazy" decoding="async">
要证明这些恒等式：
- 与真值表相对的，使用成员表（其中 0 表示不在集合中，1 表示在集合中）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA-3.png' | relative_url }}{% raw %}" alt="Set Theory - 集合论-3" width="383" height="162" loading="lazy" decoding="async">
- 也可以通过证明对应的逻辑表达式 <span class="course-math" data-tex="\forall x (x\in LHS\leftrightarrow x\in RHS)" data-display="false"><code>\forall x (x\in LHS\leftrightarrow x\in RHS)</code></span>
- 也可以结合 Set builder 和逻辑等价律。
计算机中若全集确定且有限，可以通过一个比特串表示集合。

罗素悖论（第三次数学危机）：
<span class="course-math course-math-display" data-tex="S=\{ x&#124;x\not\in x \}" data-display="true"><code>S=\{ x&#124;x\not\in x \}</code></span>
- 若 <span class="course-math" data-tex="S\in S" data-display="false"><code>S\in S</code></span>，可以推出 <span class="course-math" data-tex="S\not\in S" data-display="false"><code>S\not\in S</code></span>。
- 若 <span class="course-math" data-tex="S\not\in S" data-display="false"><code>S\not\in S</code></span>，可以推出 <span class="course-math" data-tex="S\in S" data-display="false"><code>S\in S</code></span>。
需要一个公理化的集合论。

康托定理（Cantor Theorem）：
<span class="course-math course-math-display" data-tex="\lvert S \rvert &lt;\lvert \mathcal{P}(S) \rvert" data-display="true"><code>\lvert S \rvert &lt;\lvert \mathcal{P}(S) \rvert</code></span>

证明：
- 首先证明 <span class="course-math" data-tex="\lvert S \rvert \leq \lvert \mathcal{P}(S) \rvert" data-display="false"><code>\lvert S \rvert \leq \lvert \mathcal{P}(S) \rvert</code></span>。只需要令 <span class="course-math" data-tex="f: S\to \mathcal{P}(S)," data-display="false"><code>f: S\to \mathcal{P}(S),</code></span> 使得 <span class="course-math" data-tex="\forall s\in S, f(s)=\{ s \}\in\mathcal{P}(S)" data-display="false"><code>\forall s\in S, f(s)=\{ s \}\in\mathcal{P}(S)</code></span>。容易证明 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是 one-to-one 的，即这个 <span class="course-math" data-tex="\leq" data-display="false"><code>\leq</code></span> 成立。
- 再证明 <span class="course-math" data-tex="\lvert S \rvert\neq \lvert \mathcal{P}(S) \rvert" data-display="false"><code>\lvert S \rvert\neq \lvert \mathcal{P}(S) \rvert</code></span>。只需要考虑 <span class="course-math" data-tex="S\neq \emptyset" data-display="false"><code>S\neq \emptyset</code></span> 的情况。反证法：假设 <span class="course-math" data-tex="\lvert S \rvert=\lvert \mathcal{P}(S) \rvert" data-display="false"><code>\lvert S \rvert=\lvert \mathcal{P}(S) \rvert</code></span>  ，那么就存在一个从 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 到 <span class="course-math" data-tex="\mathcal{P}(S)" data-display="false"><code>\mathcal{P}(S)</code></span> 的双射 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span>。考虑集合 <span class="course-math" data-tex="T:=\{ s\in S&#124;s\not\in f(s) \}" data-display="false"><code>T:=\{ s\in S&#124;s\not\in f(s) \}</code></span>。这里 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 不是空集，因为若 <span class="course-math" data-tex="f(s&#x27;)=\emptyset" data-display="false"><code>f(s&#x27;)=\emptyset</code></span>，那么 <span class="course-math" data-tex="s&#x27;\in T" data-display="false"><code>s&#x27;\in T</code></span>。同时，<span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 必然是 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 的子集，由双射，必然存在 <span class="course-math" data-tex="s_{0}\in S" data-display="false"><code>s_{0}\in S</code></span> 使得 <span class="course-math" data-tex="f(s_{0})=T" data-display="false"><code>f(s_{0})=T</code></span>。
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
- 双射（Bijective / one-to-one correspondence）：如果既是满射又是双射。

可以证明，对于**等势**的两个**有限**集合，单射和满射是等价的。（然而对于无限集合这是不对的）

可以定义反函数（Inverse Function） <span class="course-math" data-tex="f^{-1}(b)=a" data-display="false"><code>f^{-1}(b)=a</code></span> ，当且仅当 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 是双射。
定义复合函数 <span class="course-math" data-tex="(f\circ g)(x)=f(g(x))" data-display="false"><code>(f\circ g)(x)=f(g(x))</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA-5.png' | relative_url }}{% raw %}" alt="Set Theory - 集合论-5" width="609" height="292" loading="lazy" decoding="async">
若 <span class="course-math" data-tex="f:A\to B" data-display="false"><code>f:A\to B</code></span> 是双射，那么可以记集合 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的恒等函数（Identity Function）：<span class="course-math" data-tex="I_{A}=f^{-1}\circ f" data-display="false"><code>I_{A}=f^{-1}\circ f</code></span>。

定义一个函数是可计算的（Computable）：存在一个计算机程序可以找到函数的值。
- 不是所有函数都是可计算的。这是因为，计算机程序的集合是可数无穷的；而函数的集合是不可数无穷的。


### 一些重要函数
{: #section-2 }


上/下取整函数 <span class="course-math" data-tex="\lceil x \rceil,\lfloor x \rfloor" data-display="false"><code>\lceil x \rceil,\lfloor x \rfloor</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Set%20Theory%20-%20%E9%9B%86%E5%90%88%E8%AE%BA-4.png' | relative_url }}{% raw %}" alt="Set Theory - 集合论-4" width="353" height="293" loading="lazy" decoding="async">
证明取整函数相关的式子考虑拆 <span class="course-math" data-tex="x=\widetilde{x}+a" data-display="false"><code>x=\widetilde{x}+a</code></span> 其中 <span class="course-math" data-tex="\widetilde{x}" data-display="false"><code>\widetilde{x}</code></span> 为整数部分。


## 序列 (Sequence)
{: #section-3 }


序列（Sequence）的定义：一个函数，把整数的子集（通常是  <span class="course-math" data-tex="\{ 0,1,2,\dots \}" data-display="false"><code>\{ 0,1,2,\dots \}</code></span> 或 <span class="course-math" data-tex="\{ 1,2,3,\dots \}" data-display="false"><code>\{ 1,2,3,\dots \}</code></span>）映射到集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>。用 <span class="course-math" data-tex="a_{n}" data-display="false"><code>a_{n}</code></span> 来表示整数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的像。用 <span class="course-math" data-tex="\{ a_{n} \}" data-display="false"><code>\{ a_{n} \}</code></span>  表示有序列表 <span class="course-math" data-tex="a_{1},a_{2},\dots" data-display="false"><code>a_{1},a_{2},\dots</code></span>。

算术级数（Arithmetic Progression）：形为 <span class="course-math" data-tex="a,a+d,a+2d, \dots,a+nd" data-display="false"><code>a,a+d,a+2d, \dots,a+nd</code></span> 的序列。首项为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>，公差（Common Difference）为 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span>。
几何级数（Geometric Progression）：形为 <span class="course-math" data-tex="a,ar,a r^{2}, \dots, ar^{n}" data-display="false"><code>a,ar,a r^{2}, \dots, ar^{n}</code></span> 的序列。首项为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>，公比（Common Ratio）为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>。

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
（推导，以 <span class="course-math" data-tex="\sum k^{3}" data-display="false"><code>\sum k^{3}</code></span> 为例，使用 Telescoping 方法/“邻差法”：考察这个式子
<span class="course-math course-math-display" data-tex="\sum(k^{3}-(k-1)^{3})" data-display="true"><code>\sum(k^{3}-(k-1)^{3})</code></span>
一方面抵消之后就只剩下 <span class="course-math" data-tex="n^{3}" data-display="false"><code>n^{3}</code></span>，另一方面展开后它又等于 <span class="course-math" data-tex="3\sum k^{2}-3\sum k+n" data-display="false"><code>3\sum k^{2}-3\sum k+n</code></span>，代入即可。）
（另外我们发现 <span class="course-math" data-tex="\sum k^{3}=\left( \sum k \right)^{2}" data-display="false"><code>\sum k^{3}=\left( \sum k \right)^{2}</code></span>。它的证明：
<span class="course-math course-math-display" data-tex="\begin{align}&#10;\left( \sum_{i=1}^n k\right)^{2}&amp;=\sum_{i=1}^{n}i\sum_{j=1}^{n}j \\&#10;&amp;= \sum_{i=1}^{n}i \left( \sum_{j=1}^{i}j+\sum_{j=i}^{n}j-i \right) \\&#10;&amp;=\sum_{1\leq j\leq i\leq n}ij+\sum_{1\leq i\leq j\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2 \sum_{1\leq j\leq i\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i\sum_{j=1}^{i}j-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i \cdot \frac{i(i+1)}{2} - \sum_{i=1}^{n}i^{2} \\&#10;&amp;=\sum_{i=1}^{n} i^{3}&#10;\end{align}" data-display="true"><code>\begin{align}&#10;\left( \sum_{i=1}^n k\right)^{2}&amp;=\sum_{i=1}^{n}i\sum_{j=1}^{n}j \\&#10;&amp;= \sum_{i=1}^{n}i \left( \sum_{j=1}^{i}j+\sum_{j=i}^{n}j-i \right) \\&#10;&amp;=\sum_{1\leq j\leq i\leq n}ij+\sum_{1\leq i\leq j\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2 \sum_{1\leq j\leq i\leq n}ij-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i\sum_{j=1}^{i}j-\sum_{i=1}^{n}i^{2} \\&#10;&amp;=2\sum_{i=1}^{n}i \cdot \frac{i(i+1)}{2} - \sum_{i=1}^{n}i^{2} \\&#10;&amp;=\sum_{i=1}^{n} i^{3}&#10;\end{align}</code></span>
）
（无穷序列）
- 对 <span class="course-math" data-tex="\lvert x \rvert&lt;1" data-display="false"><code>\lvert x \rvert&lt;1</code></span>，有 
<span class="course-math course-math-display" data-tex="\sum_{k=0}^{\infty}x^{k}=\lim_{ n \to \infty } \sum_{k=0}^{n} x^{k}= \frac{1}{1-x}" data-display="true"><code>\sum_{k=0}^{\infty}x^{k}=\lim_{ n \to \infty } \sum_{k=0}^{n} x^{k}= \frac{1}{1-x}</code></span>
<span class="course-math course-math-display" data-tex="\sum_{k=0}^{\infty}kx^{k-1}= \frac{1}{(1-x)^{2}}" data-display="true"><code>\sum_{k=0}^{\infty}kx^{k-1}= \frac{1}{(1-x)^{2}}</code></span>
（第二个式子可以用求导或**错位相减**的方法求得）
{% endraw %}
