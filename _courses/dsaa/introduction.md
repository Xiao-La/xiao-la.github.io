---
title: "Introduction"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-09-08T16:23:16+08:00"
updated_at: "2026-09-29T16:24:11+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/dsaa/introduction/"
course_page: true
doc_type: "note"
description: "数据结构与算法分析 · Introduction"
excerpt: "数据结构与算法分析 · Introduction"
---

{% raw %}

## 算法（Algorithms）
{: #section-1 }


定义：一个良定义的计算步骤，接受输入（input）并产生输出（output）
- 用于解决计算问题（Computational problem）
例如：排序问题 (Sorting Problems)
- 输入： 一个包含 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个数字的序列 
- 输出：一个输入序列的排列，使得这些数呈升序。
一个具体的输入叫做实例（instance）。
算法应能解决所有可能的实例。

我们用伪代码（Pseudocode）来描述算法。

正确性（Correctness）
- 能解决所有可能的实例。
- 可以证明。

衡量算法的时间：Random-access machine (RAM) model
定义初等操作：
- 算数：加减乘除取余
- 逻辑运算，移位，比较
- 数据的移动：变量赋值
- 控制：循环，子进程/方法的调用
假设所有的操作都消耗相同的时间。
算法的运行时间（Runtime）取决于初等操作的次数。


### 插入排序 
{: #section-2 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction.png' | relative_url }}{% raw %}" alt="Introduction" width="437" height="196" loading="lazy" decoding="async">


#### 证明正确性
{: #section-3 }


Proof by loop invariant （通过循环不变量证明）
- 循环不变量：在循环的过程中，一个永远正确的陈述，可以反映算法的进度。
- 类似与数学归纳法，我们先说明这个循环不变量在初始时是正确的（Initialisation），再说明 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 次迭代中正确可推第 <span class="course-math" data-tex="i+1" data-display="false"><code>i+1</code></span> 次迭代中正确（Maintenance），最后说明算法结束时这个循环不变量可以推出算法正确（Termination）
- 例如，对于插入排序，循环不变量可以是：
>  在每次迭代开始时，子数组 <span class="course-math" data-tex="A[1\dots j-1]" data-display="false"><code>A[1\dots j-1]</code></span> 包含了原数组 <span class="course-math" data-tex="A[1\dots j-1]" data-display="false"><code>A[1\dots j-1]</code></span> 的所有元素，且是排好序的。
- 通过说明 Initialisation, Maintenance, Termination 即可证明。


### 运行时间
{: #section-4 }


通过粗暴的对每一行计算运行的次数再求和，我们可以得到一个这样的式子：
<span class="course-math course-math-display" data-tex="T(n)=c_{1}n+c_{2}(n-1)+c_{4}(n-1)+c_{5}\sum_{j=2}^nt_{j}+(c_{6}+c_{7})\sum_{j=2}^n (t_{j}-1) +c_{8}(n-1)" data-display="true"><code>T(n)=c_{1}n+c_{2}(n-1)+c_{4}(n-1)+c_{5}\sum_{j=2}^nt_{j}+(c_{6}+c_{7})\sum_{j=2}^n (t_{j}-1) +c_{8}(n-1)</code></span>
最好的情况（Best case）下（数组已排序），<span class="course-math" data-tex="t_{j}=1" data-display="false"><code>t_{j}=1</code></span>：
<span class="course-math course-math-display" data-tex="T(n)=an+b" data-display="true"><code>T(n)=an+b</code></span>
最坏的情况下（Worst case）（完全逆序），<span class="course-math" data-tex="t_{j}=j" data-display="false"><code>t_{j}=j</code></span>：
<span class="course-math course-math-display" data-tex="T(n)=an^{2}+bn+c" data-display="true"><code>T(n)=an^{2}+bn+c</code></span>
平均情况（Average case）：例如对于排序，假设所有排列方式是等可能的，那么可以算出一个平均时间。但是对于很多问题，很难找到一个“Average”的定义方式。
因此，最坏的情况往往很重要，它保证了算法不会花的更久。很多情况下，平均时间就和最坏情况一样坏。



### 渐进记号（Asymptotic Notation）
{: #section-5 }


运行时间关于 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的增长速度只取决于最高阶的项。因此我们可以用渐进记号来表示运行时间的增长速度。例如：
<span class="course-math course-math-display" data-tex="2n^{2}+3n=\Theta (n^{2})" data-display="true"><code>2n^{2}+3n=\Theta (n^{2})</code></span>

形式化的，我们可以记 <span class="course-math" data-tex="f(n)=\Theta(g(n))" data-display="false"><code>f(n)=\Theta(g(n))</code></span>，若存在常数 <span class="course-math" data-tex="n_{0},0&lt;c_{1}\leq c_{2}" data-display="false"><code>n_{0},0&lt;c_{1}\leq c_{2}</code></span>，使得当 <span class="course-math" data-tex="n\geq n_{0}" data-display="false"><code>n\geq n_{0}</code></span> 时，有 <span class="course-math" data-tex="0\leq c_{1}g(n)\leq f(n)\leq c_{2}g(n)" data-display="false"><code>0\leq c_{1}g(n)\leq f(n)\leq c_{2}g(n)</code></span>。

数学上，<span class="course-math" data-tex="\Theta(g(n))" data-display="false"><code>\Theta(g(n))</code></span> 其实是满足上述定义的所有 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 的**集合**，因此严谨的记号是 <span class="course-math" data-tex="f(n)\in \Theta(g(n))" data-display="false"><code>f(n)\in \Theta(g(n))</code></span>。然而，按惯例，我们记作 <span class="course-math" data-tex="f(n)=\Theta(g(n))" data-display="false"><code>f(n)=\Theta(g(n))</code></span>。我们说，<span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span> 是 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 的渐近紧确界（asymptotically tight bound）。

这里 <span class="course-math" data-tex="\Theta(g(n))" data-display="false"><code>\Theta(g(n))</code></span> 同时表示了 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 的上界和下界。另外有 <span class="course-math" data-tex="O(g(n))" data-display="false"><code>O(g(n))</code></span>，只表示上界（Upper bound）；以及 <span class="course-math" data-tex="\Omega(g(n))" data-display="false"><code>\Omega(g(n))</code></span>，只表示下界（Lower bound）。形式化的定义方式与 <span class="course-math" data-tex="\Theta" data-display="false"><code>\Theta</code></span> 类似。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-1.png' | relative_url }}{% raw %}" alt="Introduction-1" width="576" height="188" loading="lazy" decoding="async">
<span class="course-math" data-tex="O" data-display="false"><code>O</code></span> 与 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 都弱于 <span class="course-math" data-tex="\Theta" data-display="false"><code>\Theta</code></span>。同时满足这两个可以得出 <span class="course-math" data-tex="\Theta" data-display="false"><code>\Theta</code></span>。
另外还有 <span class="course-math" data-tex="o(g(n))" data-display="false"><code>o(g(n))</code></span> 表示严格小于某个上界（对**任意**常数 <span class="course-math" data-tex="c" data-display="false"><code>c</code></span>，<span class="course-math" data-tex="f(n)&lt;cg(n)" data-display="false"><code>f(n)&lt;cg(n)</code></span>，也就是说 <span class="course-math" data-tex="\lim_{ n \to \infty }f(n)/g(n)=0" data-display="false"><code>\lim_{ n \to \infty }f(n)/g(n)=0</code></span>），<span class="course-math" data-tex="\omega(g(n))" data-display="false"><code>\omega(g(n))</code></span> 表示严格大于某个上界。若 <span class="course-math" data-tex="f(n)=o(g(n))" data-display="false"><code>f(n)=o(g(n))</code></span>，我们说 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 渐进小于（Asymptotically Smaller） <span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span>。类似的有渐进大于（Asymptotically larger）
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-2.png' | relative_url }}{% raw %}" alt="Introduction-2" width="583" height="173" loading="lazy" decoding="async">
常用的：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-3.png' | relative_url }}{% raw %}" alt="Introduction-3" width="314" height="180" loading="lazy" decoding="async">
其中，任何 <span class="course-math" data-tex="\log n" data-display="false"><code>\log n</code></span> 的多项式都比 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的多项式增长得慢；任何 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的多项式都比 <span class="course-math" data-tex="2^{n^{\varepsilon}}" data-display="false"><code>2^{n^{\varepsilon}}</code></span> 增长得慢。
渐进记号表示的是运行时间的增长速度和 <span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span> 之间的关系（一样快/至少/至多/大于/小于...）

要找到 <span class="course-math" data-tex="c_{1},c_{2},n_{0}" data-display="false"><code>c_{1},c_{2},n_{0}</code></span> 以证明渐进记号的正确性，通常在两边同时除以 <span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span> 以化简不等式。
一定要注意 <span class="course-math" data-tex="c_{1}&gt;0" data-display="false"><code>c_{1}&gt;0</code></span>，也要注意不等式应该对所有 <span class="course-math" data-tex="n\geq n_{0}" data-display="false"><code>n\geq n_{0}</code></span> 成立。

对于非负函数 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 和 <span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span>：
- <span class="course-math" data-tex="f(n)+g(n)=\Theta(\max(f(n), g(n)))" data-display="false"><code>f(n)+g(n)=\Theta(\max(f(n), g(n)))</code></span>
- <span class="course-math" data-tex="\Theta(f(n))\cdot\Theta(g(n))=\Theta(f(n)\cdot g(n))" data-display="false"><code>\Theta(f(n))\cdot\Theta(g(n))=\Theta(f(n)\cdot g(n))</code></span>

我们可以写 <span class="course-math" data-tex="O(n)=O(n^{2})" data-display="false"><code>O(n)=O(n^{2})</code></span>，这里指的是子集的关系，<span class="course-math" data-tex="O(n)\subset O(n^{2})" data-display="false"><code>O(n)\subset O(n^{2})</code></span>。但是不能写 <span class="course-math" data-tex="O(n^{2})\subset O(n)" data-display="false"><code>O(n^{2})\subset O(n)</code></span>。
这样的式子： <span class="course-math" data-tex="2n^{2}+\Theta(n)=\Theta(n^{2})" data-display="false"><code>2n^{2}+\Theta(n)=\Theta(n^{2})</code></span> 指的是，对于任意的左边的匿名函数（Anonymous Function） <span class="course-math" data-tex="f(n)\in \Theta(n)" data-display="false"><code>f(n)\in \Theta(n)</code></span>, 总存在一个右边的匿名函数 <span class="course-math" data-tex="g(n)\in \Theta(n^{2})" data-display="false"><code>g(n)\in \Theta(n^{2})</code></span>，使得等式成立。

并不是任意两个函数都是渐进可比的。


### 分治算法
{: #section-6 }


A design paradigms: Divide-and-conquer.
- Divide
- Conquer
- Combine

归并排序（MergeSort）
- 把数组对半分。
- 递归地排序两个更小的数组。
- 合并两个子数组。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-4.png' | relative_url }}{% raw %}" alt="Introduction-4" width="517" height="491" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-5.png' | relative_url }}{% raw %}" alt="Introduction-5" width="522" height="230" loading="lazy" decoding="async">

归并排序的正确性证明
- 对于函数 Merge()，我们可以用 Loop Invariant 证明。这里的 Invariant 可以选为：“在每次迭代开始时，<span class="course-math" data-tex="A[p\dots k-1]" data-display="false"><code>A[p\dots k-1]</code></span> 包含了 <span class="course-math" data-tex="L[p\dots q]" data-display="false"><code>L[p\dots q]</code></span> 和 <span class="course-math" data-tex="R[q+1\dots r]" data-display="false"><code>R[q+1\dots r]</code></span> 中最小的 <span class="course-math" data-tex="k-p" data-display="false"><code>k-p</code></span> 个元素且是排好序的；而且 <span class="course-math" data-tex="L[i]" data-display="false"><code>L[i]</code></span> 和 <span class="course-math" data-tex="R[j]" data-display="false"><code>R[j]</code></span> 分别是在 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 和 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 还没复制到 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的元素中最小的。”
- 对于函数 MergeSort ()，可以用归纳证明（Strong Induction）。对 <span class="course-math" data-tex="n=1" data-display="false"><code>n=1</code></span> 显然能正确排序。假设对大小为 <span class="course-math" data-tex="1\leq n\leq k" data-display="false"><code>1\leq n\leq k</code></span> 的数组成立，那么对 <span class="course-math" data-tex="n=k+1" data-display="false"><code>n=k+1</code></span>，由于两个子问题都在成立的范围内，容易证明也能成功排序，因而证明对于任意 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 都能正确排序。

运行时间的递归式（Recurrence Equation）：
<span class="course-math course-math-display" data-tex="T(n)=\begin{cases}&#10;2T(n/2)+\Theta(n) &amp; n&gt;1\\&#10;\Theta(1) &amp; n=1&#10;\end{cases}" data-display="true"><code>T(n)=\begin{cases}&#10;2T(n/2)+\Theta(n) &amp; n&gt;1\\&#10;\Theta(1) &amp; n=1&#10;\end{cases}</code></span>
归并排序需要 <span class="course-math" data-tex="\Omega (n)" data-display="false"><code>\Omega (n)</code></span> 的额外空间，而插入排序只需要 <span class="course-math" data-tex="O(1)" data-display="false"><code>O(1)</code></span>。
所以我们说插入排序是原地的（In place）。


### 解递归式
{: #section-7 }


有三种方式：
- Substitution Method：先猜测一个解，再结合定义，用归纳法证明。
- Recursion Tree：用于猜测解，以及若画的严格的时候也可以直接证明解。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-6.png' | relative_url }}{% raw %}" alt="Introduction-6" width="501" height="341" loading="lazy" decoding="async">
- Master Theorem：对于形式
<span class="course-math course-math-display" data-tex="T(n)=aT(n / b) + f(n)" data-display="true"><code>T(n)=aT(n / b) + f(n)</code></span>
其中 <span class="course-math" data-tex="a\geq 1, b&gt;1" data-display="false"><code>a\geq 1, b&gt;1</code></span>。
我们称 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 为 driving function（表示 divide 和 combine 的代价），而 <span class="course-math" data-tex="T(n)" data-display="false"><code>T(n)</code></span> 称为 master recurrence（表示我们分成 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 个子问题，每个需要 <span class="course-math" data-tex="T(n / b)" data-display="false"><code>T(n / b)</code></span> 的时间解决）。另外称 <span class="course-math" data-tex="n^{\log_{b}a}" data-display="false"><code>n^{\log_{b}a}</code></span> 为 watershed function。
那么 **The Master Theorem** 指出：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Introduction-7.png' | relative_url }}{% raw %}" alt="Introduction-7" width="476" height="149" loading="lazy" decoding="async">
三种情况分别为：
- <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 相比于 watershed 来说小一个多项式的量级（慢  <span class="course-math" data-tex="\Theta(n^{\varepsilon})" data-display="false"><code>\Theta(n^{\varepsilon})</code></span>）。
- <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 和 watershed 差不多量级（差的只是 <span class="course-math" data-tex="\log^kn" data-display="false"><code>\log^kn</code></span> 的量级）。
- <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 相比于 watershed 来说大一个多项式的量级（快 <span class="course-math" data-tex="\Theta(n^{\varepsilon})" data-display="false"><code>\Theta(n^{\varepsilon})</code></span>）且要满足 regularity condition （存在 <span class="course-math" data-tex="c&lt;1" data-display="false"><code>c&lt;1</code></span> 使得 <span class="course-math" data-tex="af(n / b) \leq cf(n)" data-display="false"><code>af(n / b) \leq cf(n)</code></span>）

应用到归并排序上：<span class="course-math" data-tex="a=2,b=2\implies\text{watershed=}n^{1}; f(n)=\Theta(n)" data-display="false"><code>a=2,b=2\implies\text{watershed=}n^{1}; f(n)=\Theta(n)</code></span>，那么是处于 Case 2，且 <span class="course-math" data-tex="k=0" data-display="false"><code>k=0</code></span>, 于是得到 <span class="course-math" data-tex="T(n)=\Theta(n\log n)" data-display="false"><code>T(n)=\Theta(n\log n)</code></span>。
{% endraw %}
