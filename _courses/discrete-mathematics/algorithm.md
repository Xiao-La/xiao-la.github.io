---
title: "Algorithm - 算法"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-09-30T19:28:05+08:00"
updated_at: "2026-10-12T15:32:49+08:00"
reference: false
order: 3
layout: "course"
permalink: "/courses/discrete-mathematics/algorithm/"
course_page: true
doc_type: "note"
description: "离散数学 · Algorithm - 算法"
excerpt: "离散数学 · Algorithm - 算法"
---

{% raw %}

算法：解决问题或用于计算的，有限序列的精确指令。

>  Algorithm出自“Algoritmi”，这是花拉子米（al-Khwārizmī）的拉丁文译名。

我们关心随着 input size（记作 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>）变大，运行时间的渐进表现（Asymptotic behavior）。使用大 <span class="course-math" data-tex="O" data-display="false"><code>O</code></span> 记号表示上界：<span class="course-math" data-tex="f(n)=O(g(n))" data-display="false"><code>f(n)=O(g(n))</code></span> 若
<span class="course-math course-math-display" data-tex="\exists c&gt;0,n_0,\ \forall n&gt;n_0 , \lvert f(n) \rvert\leq c \lvert g(n) \rvert" data-display="true"><code>\exists c&gt;0,n_0,\ \forall n&gt;n_0 , \lvert f(n) \rvert\leq c \lvert g(n) \rvert</code></span>
结论：<span class="course-math" data-tex="f(x)=\sum_{i=0}^{n} a_{i}x^{i}=O(x^{n})" data-display="false"><code>f(x)=\sum_{i=0}^{n} a_{i}x^{i}=O(x^{n})</code></span>。（多项式的主项决定增长速度）
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Algorithm%20-%20%E7%AE%97%E6%B3%95.png' | relative_url }}{% raw %}" alt="Algorithm - 算法" width="332" height="264" loading="lazy" decoding="async">
- <span class="course-math" data-tex="n^{n}" data-display="false"><code>n^{n}</code></span> 并不是 <span class="course-math" data-tex="O(n!)" data-display="false"><code>O(n!)</code></span> 的。
- 但是，<span class="course-math" data-tex="n\log n=O(\log n!)" data-display="false"><code>n\log n=O(\log n!)</code></span>。
- 这是因为，<span class="course-math" data-tex="n^{n}\leq(n!)^{2}" data-display="false"><code>n^{n}\leq(n!)^{2}</code></span>。

定理：若 <span class="course-math" data-tex="f_{1}(x)=O(g_{1}(x)),f_{2}(x)=O(g_{2}(x))" data-display="false"><code>f_{1}(x)=O(g_{1}(x)),f_{2}(x)=O(g_{2}(x))</code></span>，则
-  <span class="course-math" data-tex="(f_{1}+f_{2})(x)=O(\max(\lvert g_{1}(x)\rvert ,\lvert g_{2}(x)\rvert ))" data-display="false"><code>(f_{1}+f_{2})(x)=O(\max(\lvert g_{1}(x)\rvert ,\lvert g_{2}(x)\rvert ))</code></span>
- <span class="course-math" data-tex="(f_{1}f_{2})(x)=O(g_{1}(x)g_{2}(x))" data-display="false"><code>(f_{1}f_{2})(x)=O(g_{1}(x)g_{2}(x))</code></span>

类似于大 <span class="course-math" data-tex="O" data-display="false"><code>O</code></span> 记号，还有表示下界的 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 记号，还有表示渐进同阶的 <span class="course-math" data-tex="\Theta" data-display="false"><code>\Theta</code></span> 记号。

计算问题（Computational Problem）：定义了输入和输出。
实例（Instance）：一个问题的实例是一组问题所需的所有输入。
正确的算法（Correct Algorithm）： 对所有的输入实例都能给出正确的解答。

时间复杂度（Time complexity）：基础的机器运算（Machine Operations） 的数量。
空间复杂度（Space complexity）：需要的内存量（Amount of memory）。
复杂度实际上是 input size 的函数。
**定义 input size：** 能够编码输入数据所需要的最少的比特数。
- 例如，输入数据是一个整数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>，则 input size 就是 <span class="course-math" data-tex="\log_{2}n" data-display="false"><code>\log_{2}n</code></span>。也就是说，朴素的判断合数的算法（试除法）的复杂度实际上是 <span class="course-math" data-tex="O(2^{\text{size}(n)})" data-display="false"><code>O(2^{\text{size}(n)})</code></span>。
- 例如，输入数据是一个数组 <span class="course-math" data-tex="a_{1},a_{2},\dots,a_{n}" data-display="false"><code>a_{1},a_{2},\dots,a_{n}</code></span>，则 input size 就是 <span class="course-math" data-tex="n\cdot \lceil \log _{2}( \max{\lvert a_{i} \rvert}+1)\rceil" data-display="false"><code>n\cdot \lceil \log _{2}( \max{\lvert a_{i} \rvert}+1)\rceil</code></span>。（由于这里 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 是个常数，那么表示复杂度的时候只会写成 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的函数）。
- 例如要计算 <span class="course-math" data-tex="a\times b" data-display="false"><code>a\times b</code></span>，可以定义 <span class="course-math" data-tex="t=\log_{2}\max(a,b)" data-display="false"><code>t=\log_{2}\max(a,b)</code></span>。（这和真正的最小比特数 <span class="course-math" data-tex="s=\lceil \log _{2}(a+1) \rceil+\lceil \log_2(b+1) \rceil" data-display="false"><code>s=\lceil \log _{2}(a+1) \rceil+\lceil \log_2(b+1) \rceil</code></span>是同阶的）

**定义** 正函数 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 和 <span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span> 是同类的（of the **same type**），若
<span class="course-math course-math-display" data-tex="c_{1}g(n^{a_{1}})^{b_{1}}\leq f(n)\leq c_{2}g(n^{a_{2}})^{b_{2}}" data-display="true"><code>c_{1}g(n^{a_{1}})^{b_{1}}\leq f(n)\leq c_{2}g(n^{a_{2}})^{b_{2}}</code></span>
对所有足够大的 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>。其中 <span class="course-math" data-tex="a_{1},a_{2},b_{1},b_{2},c_{1},c_{2}" data-display="false"><code>a_{1},a_{2},b_{1},b_{2},c_{1},c_{2}</code></span> 为正常数。



## P, NP, NPC
{: #section-1 }


对于 **判定性问题（Decision Problems）**，我们对于一个输入数据，最终输出 yes / no 两种结果。若问题为 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span>，输入为 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>，我们可以记 <span class="course-math" data-tex="x\in L" data-display="false"><code>x\in L</code></span> 表示结果为 yes，记 <span class="course-math" data-tex="x\notin L" data-display="false"><code>x\notin L</code></span> 表示结果为 no。
- 另外还有 **优化问题（Optimization problem）**，要找到一种最优的答案。一般来说，优化问题会有其对应的判定性问题。   

例如：背包问题及其判定性版本（Knapsack vs. DKnapsack）。 
- 这里的优化问题：找到最大的 <span class="course-math" data-tex="\sum _{i \in T}v_{i}" data-display="false"><code>\sum _{i \in T}v_{i}</code></span> 使得 <span class="course-math" data-tex="\sum _{i \in T}w_{i}\leq{}W" data-display="false"><code>\sum _{i \in T}w_{i}\leq{}W</code></span>。
- 这里的判定性问题：给定 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> ，是否存在一个背包中元素的子集 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span>，使得价值至少是 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span>？
- 我们只要解决了优化问题，就可以解决这里的判定性问题（比较 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 与优化的答案即可）。

一般来说，对于互相对应的问题，难度： **Decision Problem <span class="course-math" data-tex="\leq{}" data-display="false"><code>\leq{}</code></span> Optimization Problem**。也就是说，只要能解决优化问题，对应的判定性问题就显然可以解决。**如果我们知道判定性问题是难的，那我们就会知道对应的优化问题也难。** 因此，对判定性问题分类很有意义。

**定义** 一个算法是 **polynomial-time**，若其运行时间是 <span class="course-math" data-tex="O(n^{k})" data-display="false"><code>O(n^{k})</code></span> 的。这里 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 是与 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 无关的常数，而 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 是问题的 **input size**。
**定义** 一个算法是 **nonpolynomial-time**，若其运行时间不是 <span class="course-math" data-tex="O(n^{k})" data-display="false"><code>O(n^{k})</code></span> 的，对任意 <span class="course-math" data-tex="k\geq{}0" data-display="false"><code>k\geq{}0</code></span>。


### Class P
{: #section-2 }


**Class P** 包含了所有能在 polynomial time 解决的判定性问题。（也就是说，存在一个 polynomial-time 的算法能判定问题的 yes / no）

证明一个判定性问题在 Class P 里面，只需要找到一个 问题的 polynomial-time 算法。而证明不在这个 Class P 里面，就难得多。


### Class NP
{: #section-3 }


**定义** **证书（Certificate）**：一个对应 yes-input 的特定对象，可以用来证明这个 input 确实是 yes-input。

**Class NP** 包含了所有这样的判定性问题：对于每个 yes-input，都存在一个证书，使得我们可以在 polynomial time 里验证这个输入确实是一个 yes-input。

NP 是 nondeterministic polynomial-time。（另一种定义：能在 nondeterministic Turing machine 上多项式时间解决）。

我们有：
<span class="course-math course-math-display" data-tex="\text{P}\subseteq \text{NP}" data-display="true"><code>\text{P}\subseteq \text{NP}</code></span>
而 P 与 NP 是否相等还是悬而未决的。

例：判定合数。这个问题属于 NP。
- 这里的 yes-input 就是合数。
- 证书：一个整数 <span class="course-math" data-tex="a(1&lt;a&lt;n)" data-display="false"><code>a(1&lt;a&lt;n)</code></span>，使得 <span class="course-math" data-tex="a\mid n" data-display="false"><code>a\mid n</code></span>。
- 给定一个 yes-input，我们用这个证书（整数 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>）可以在 <span class="course-math" data-tex="O((\log _{2}n)^{2})" data-display="false"><code>O((\log _{2}n)^{2})</code></span> 内检查它确实是 yes-input。因此它是属于 NP 的。
DKnapsack 也属于 NP。验证一个子集，只需要求和即可。


### 归约（Reduction）
{: #section-4 }


 归约（reduction）是问题之间的关系。问题 Q 可以被归约为问题 Q'，若任意问题 Q 的实例都可以被重写为 Q' 的实例。

**例如，** Q：乘两个正数，Q'：加两个数，那么 Q 可以被归约为 Q'，通过一个对数变换：
<span class="course-math course-math-display" data-tex="xy=\exp(\log x+\log y)" data-display="true"><code>xy=\exp(\log x+\log y)</code></span>

**多项式时间归约（Polynomial-Time Reduction）**： 设有问题 <span class="course-math" data-tex="L_{1},L_{2}" data-display="false"><code>L_{1},L_{2}</code></span>，那么 <span class="course-math" data-tex="L_{1}" data-display="false"><code>L_{1}</code></span> 到 <span class="course-math" data-tex="L_{2}" data-display="false"><code>L_{2}</code></span> 的一个多项式时间归约，是一个可在多项式时间内计算的变换 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span>，使得 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 把 <span class="course-math" data-tex="L_{1}" data-display="false"><code>L_{1}</code></span> 的任一 yes-input 映射到 <span class="course-math" data-tex="L_{2}" data-display="false"><code>L_{2}</code></span> 的一个 yes-input，把 <span class="course-math" data-tex="L_{2}" data-display="false"><code>L_{2}</code></span> 的任一 no-input 映射到 <span class="course-math" data-tex="L_{2}" data-display="false"><code>L_{2}</code></span> 的一个 no-input，
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Algorithm%20-%20%E7%AE%97%E6%B3%95-1.png' | relative_url }}{% raw %}" alt="Algorithm - 算法-1" width="497" height="231" loading="lazy" decoding="async">
记作：
<span class="course-math course-math-display" data-tex="L_{1}\leq_{{P}}L_{2}" data-display="true"><code>L_{1}\leq_{{P}}L_{2}</code></span>
直观来说这代表 <span class="course-math" data-tex="L_{1}" data-display="false"><code>L_{1}</code></span> 不难于 <span class="course-math" data-tex="L_{2}" data-display="false"><code>L_{2}</code></span>。这是因为，有了 <span class="course-math" data-tex="L_{2}" data-display="false"><code>L_{2}</code></span> 的算法，就能得到 <span class="course-math" data-tex="L_{1}" data-display="false"><code>L_{1}</code></span> 的算法：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Algorithm%20-%20%E7%AE%97%E6%B3%95-2.png' | relative_url }}{% raw %}" alt="Algorithm - 算法-2" width="585" height="163" loading="lazy" decoding="async">
如果 <span class="course-math" data-tex="A_{2}" data-display="false"><code>A_{2}</code></span> 是多项式时间的，那么 <span class="course-math" data-tex="A_{1}" data-display="false"><code>A_{1}</code></span> 也是多项式时间的。这就推出了下面的定理：

**如果 <span class="course-math" data-tex="L_{1}\leq _{P}L_{2}" data-display="false"><code>L_{1}\leq _{P}L_{2}</code></span>，且 <span class="course-math" data-tex="L_{2}\in \mathrm{P}" data-display="false"><code>L_{2}\in \mathrm{P}</code></span>，那么 <span class="course-math" data-tex="L_{1}\in \mathrm{P}" data-display="false"><code>L_{1}\in \mathrm{P}</code></span>**。

归约有传递性：若<span class="course-math" data-tex="L_{1}\leq _{P} L_{2}" data-display="false"><code>L_{1}\leq _{P} L_{2}</code></span> 且 <span class="course-math" data-tex="L_{2}\leq_P L_{3}" data-display="false"><code>L_{2}\leq_P L_{3}</code></span>，那么 <span class="course-math" data-tex="L_{1} \leq_P L_{3}" data-display="false"><code>L_{1} \leq_P L_{3}</code></span>。（把两个归约的函数复合一下）


### Class NP-Complete(NPC)
{: #section-5 }


**Class NPC** 包含了所有符合下列条件的问题 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span>：
- <span class="course-math" data-tex="L\in \mathrm{NP}" data-display="false"><code>L\in \mathrm{NP}</code></span>
- <span class="course-math" data-tex="\forall L&#x27; \in \mathrm{NP}, L&#x27;\leq _{P}L" data-display="false"><code>\forall L&#x27; \in \mathrm{NP}, L&#x27;\leq _{P}L</code></span>
直观来说这代表 NPC 中包含了 NP 中最难的问题。

定理：对某个 <span class="course-math" data-tex="L\in\text{NPC}" data-display="false"><code>L\in\text{NPC}</code></span>：
- 若 <span class="course-math" data-tex="L \in \mathrm{P}" data-display="false"><code>L \in \mathrm{P}</code></span>，则 <span class="course-math" data-tex="\mathrm{NP}=\mathrm{P}" data-display="false"><code>\mathrm{NP}=\mathrm{P}</code></span>。
- 若 <span class="course-math" data-tex="L \notin \mathrm{P}" data-display="false"><code>L \notin \mathrm{P}</code></span>，则 <span class="course-math" data-tex="\mathrm{NP}\neq{}\mathrm{P}" data-display="false"><code>\mathrm{NP}\neq{}\mathrm{P}</code></span>。且所有 NPC 里的问题也都不属于 P。
那么，要么所有 NPC 问题都在多项式时间内可解，要么所有 NPC 问题都在多项式时间内不可解。

假如 <span class="course-math" data-tex="\mathrm{P}\neq{}\mathrm{NP}" data-display="false"><code>\mathrm{P}\neq{}\mathrm{NP}</code></span>，那么可以画这样一个集合关系图：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Algorithm%20-%20%E7%AE%97%E6%B3%95-3.png' | relative_url }}{% raw %}" alt="Algorithm - 算法-3" width="418" height="373" loading="lazy" decoding="async">
{% endraw %}
