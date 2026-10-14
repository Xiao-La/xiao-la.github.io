---
title: "Sorting"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-09-29T16:21:34+08:00"
updated_at: "2026-10-13T18:10:26+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/dsaa/sorting/"
course_page: true
doc_type: "note"
description: "数据结构与算法分析 · Sorting"
excerpt: "数据结构与算法分析 · Sorting"
---

{% raw %}


## 堆排序（Heap Sort）
{: #section-1 }


用堆这种数据结构来加速选择排序的过程。
可以把数组对应到一个二叉树（Binary Tree）。
- 下标的对应关系： <span class="course-math" data-tex="\text{Parent}(i)= \lfloor i / 2 \rfloor,\text{Left}(i)=2i,\text{Right}(i)=2i+1" data-display="false"><code>\text{Parent}(i)= \lfloor i / 2 \rfloor,\text{Left}(i)=2i,\text{Right}(i)=2i+1</code></span>。

大根堆：一个完全二叉树，具有 Max-heap Property：
<span class="course-math course-math-display" data-tex="A[\text{Parent}(i)]\geq A[i]" data-display="true"><code>A[\text{Parent}(i)]\geq A[i]</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting.png' | relative_url }}{% raw %}" alt="Sorting" width="471" height="268" loading="lazy" decoding="async">
小根堆，一个完全二叉树，具有 Min-heap Property：
<span class="course-math course-math-display" data-tex="A[\text{Parent}(i)]\leq A[i]" data-display="true"><code>A[\text{Parent}(i)]\leq A[i]</code></span>
以大根堆为例，堆排序的步骤：
- 从一个无序的数组建立堆。（Build-Max-Heap）
- 不断拿出堆顶的最大元素放到数组的末尾，然后维护堆的性质（Max-Heapify）。这里用 <span class="course-math" data-tex="A.\text{heap-size}" data-display="false"><code>A.\text{heap-size}</code></span> 表示还没有放到末尾的元素个数。

<span class="course-math" data-tex="\text{Max-Heapify}(A,i)" data-display="false"><code>\text{Max-Heapify}(A,i)</code></span>：考虑以 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 为根的子树。假设 <span class="course-math" data-tex="\text{Left}(i),\text{Right}(i)" data-display="false"><code>\text{Left}(i),\text{Right}(i)</code></span> 都是大根堆，但 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 处可能破坏堆的性质。那么，可以通过不断向下调整（"float down"），把 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 与它的**较大的**子节点（如果比 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 大）交换，不断递归地重复即可。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-1.png' | relative_url }}{% raw %}" alt="Sorting-1" width="493" height="335" loading="lazy" decoding="async">
运行时间：我们说树中一个节点的高度（height）是它到叶子节点的最长简单路径的长度。那么若 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的高度为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span>，则运行时间是 <span class="course-math" data-tex="O(h)" data-display="false"><code>O(h)</code></span> 的。（不是 <span class="course-math" data-tex="\Omega (h)" data-display="false"><code>\Omega (h)</code></span>，因为可能提前停下）这里 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 最多是 <span class="course-math" data-tex="\log n" data-display="false"><code>\log n</code></span>，因为高度为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 的完全二叉树至少有 <span class="course-math" data-tex="1+2+4+\dots+2^{h-1}+1=2^{h}" data-display="false"><code>1+2+4+\dots+2^{h-1}+1=2^{h}</code></span> 个节点。
正确性：对高度进行归纳证明。Base case 就是叶子节点。假设对 <span class="course-math" data-tex="i-1" data-display="false"><code>i-1</code></span> 高度已经成立，那么对 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 高度，交换之后就化为了 <span class="course-math" data-tex="i-1" data-display="false"><code>i-1</code></span> 的情况，所以也成立。

<span class="course-math" data-tex="\text{Build-Max-Heap}(A,n)" data-display="false"><code>\text{Build-Max-Heap}(A,n)</code></span>：从叶子节点开始，从下至上不断执行 <span class="course-math" data-tex="\text{Max-Heapify}" data-display="false"><code>\text{Max-Heapify}</code></span>。这是因为 <span class="course-math" data-tex="\text{Max-Heapify}" data-display="false"><code>\text{Max-Heapify}</code></span> 假设了 <span class="course-math" data-tex="\text{Left}(i)" data-display="false"><code>\text{Left}(i)</code></span> 和 <span class="course-math" data-tex="\text{Right}(i)" data-display="false"><code>\text{Right}(i)</code></span> 都是大根堆。另外我们注意到 <span class="course-math" data-tex="A[( \lfloor n / 2 \rfloor + 1),\dots,n]" data-display="false"><code>A[( \lfloor n / 2 \rfloor + 1),\dots,n]</code></span> 都是叶子节点，所以不需要操作就自然形成大根堆。那么只需要从 <span class="course-math" data-tex="\lfloor n / 2 \rfloor" data-display="false"><code>\lfloor n / 2 \rfloor</code></span> 开始往前做即可。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-2.png' | relative_url }}{% raw %}" alt="Sorting-2" width="267" height="117" loading="lazy" decoding="async">
正确性：可以通过 Loop invariant “在迭代 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 开始时，<span class="course-math" data-tex="i+1,i+2,\dots,n" data-display="false"><code>i+1,i+2,\dots,n</code></span> 都是一个大根堆的根节点“ 证明。
运行时间：显然是 <span class="course-math" data-tex="O(n\log n)" data-display="false"><code>O(n\log n)</code></span> 的。一个更紧的界是 <span class="course-math" data-tex="\Theta(n)" data-display="false"><code>\Theta(n)</code></span>。
- 这是因为，大多数节点的高度都很小。实际上，高度为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 的节点最多只有 <span class="course-math" data-tex="\left\lceil  \frac{n}{2^{h+1}}  \right\rceil" data-display="false"><code>\left\lceil  \frac{n}{2^{h+1}}  \right\rceil</code></span> 个。
- 这个可以归纳证明，首先 <span class="course-math" data-tex="h=0" data-display="false"><code>h=0</code></span> 时就是叶子节点，确实最多是 <span class="course-math" data-tex="\lceil n / 2 \rceil" data-display="false"><code>\lceil n / 2 \rceil</code></span> 个；然后高度 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 的节点个数相当于我们删掉叶子节点之后的新的树（节点数是 <span class="course-math" data-tex="\lfloor n / 2 \rfloor" data-display="false"><code>\lfloor n / 2 \rfloor</code></span>）的高度 <span class="course-math" data-tex="h-1" data-display="false"><code>h-1</code></span> 的节点个数，这个最多就是 <span class="course-math" data-tex="\lceil \lfloor n / 2 \rfloor / 2^{h} \rceil\leq \lceil n / 2^{h+1} \rceil" data-display="false"><code>\lceil \lfloor n / 2 \rfloor / 2^{h} \rceil\leq \lceil n / 2^{h+1} \rceil</code></span>，证明完毕。
- 那么运行时间就是
<span class="course-math course-math-display" data-tex="T(n)=\sum_{h=1}^{\lfloor \log n \rfloor }\left\lceil  \frac{n}{2^{h+1}}  \right\rceil O(h)=O\left( n\sum_{h=1}^{\lfloor \log n \rfloor } \frac{h}{2^{h}} \right)=O\left( n\sum_{h=1}^{\infty} \frac{h}{2^{h}}\right)=O(n)" data-display="true"><code>T(n)=\sum_{h=1}^{\lfloor \log n \rfloor }\left\lceil  \frac{n}{2^{h+1}}  \right\rceil O(h)=O\left( n\sum_{h=1}^{\lfloor \log n \rfloor } \frac{h}{2^{h}} \right)=O\left( n\sum_{h=1}^{\infty} \frac{h}{2^{h}}\right)=O(n)</code></span>
- 还可以证明 <span class="course-math" data-tex="\Omega(n)" data-display="false"><code>\Omega(n)</code></span>（循环带来的）。
- 因此是 <span class="course-math" data-tex="\Theta(n)" data-display="false"><code>\Theta(n)</code></span> 的。

结合上面的两个函数，得到堆排序：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-3.png' | relative_url }}{% raw %}" alt="Sorting-3" width="484" height="173" loading="lazy" decoding="async">
运行时间是 <span class="course-math" data-tex="O(n)+(n-1)\cdot O(\log n)=O(n\log n)" data-display="false"><code>O(n)+(n-1)\cdot O(\log n)=O(n\log n)</code></span> 的。
可以通过循环不变量证明正确性。


## 快速排序（Quicksort）
{: #section-2 }


快速排序的最坏情况是 <span class="course-math" data-tex="\Theta (n^{2} )" data-display="false"><code>\Theta (n^{2} )</code></span> 的，而平均情况下是常数很小的 <span class="course-math" data-tex="\Theta(n\log n)" data-display="false"><code>\Theta(n\log n)</code></span> 的。
快速排序用到了分治。
- Divide：找到一个 pivot，把它放到正确的位置，也就是说，使得其左边的元素都比它更小，右边的元素都比它更大。
- Conquer：递归地去排左边和右边的子数组。
- Combine：不需要。

伪代码：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-4.png' | relative_url }}{% raw %}" alt="Sorting-4" width="434" height="160" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-5.png' | relative_url }}{% raw %}" alt="Sorting-5" width="438" height="252" loading="lazy" decoding="async">

Partition 的正确性可以用 loop invariant 证明。在每次迭代开始时：
- <span class="course-math" data-tex="A[k]\leq x" data-display="false"><code>A[k]\leq x</code></span> 对于 <span class="course-math" data-tex="p\leq k\leq i" data-display="false"><code>p\leq k\leq i</code></span>。
- <span class="course-math" data-tex="A[k]&gt;x" data-display="false"><code>A[k]&gt;x</code></span> 对于 <span class="course-math" data-tex="i+1\leq k\leq j-1" data-display="false"><code>i+1\leq k\leq j-1</code></span>。
- <span class="course-math" data-tex="A[k]=x" data-display="false"><code>A[k]=x</code></span> 对于 <span class="course-math" data-tex="k=r" data-display="false"><code>k=r</code></span>。
Initialization 显然成立。通过对每次迭代的 <span class="course-math" data-tex="A[j]" data-display="false"><code>A[j]</code></span> 与 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的大小关系分类，容易说明 Maintenance。当循环结束时，这个 loop invariant 就证明了这个循环把 <span class="course-math" data-tex="A[p\dots r]" data-display="false"><code>A[p\dots r]</code></span> 分成了三个部分：
- <span class="course-math" data-tex="A[p\dots i](\leq A[r])" data-display="false"><code>A[p\dots i](\leq A[r])</code></span>
- <span class="course-math" data-tex="A[i+1\dots r-1](&gt;A[r])" data-display="false"><code>A[i+1\dots r-1](&gt;A[r])</code></span>
- <span class="course-math" data-tex="A[r]" data-display="false"><code>A[r]</code></span>
再做一次交换，就可以把 <span class="course-math" data-tex="A[r]" data-display="false"><code>A[r]</code></span> 放到正确的位置上：<span class="course-math" data-tex="i+1" data-display="false"><code>i+1</code></span>。

Partition 的运行时间是 <span class="course-math" data-tex="\Theta(n)" data-display="false"><code>\Theta(n)</code></span>。


### 运行时间分析
{: #section-3 }



#### 最坏情况
{: #section-4 }


每次 partition 都把数组分成一个空的子数组和一个 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 个元素的子数组，造成不平衡的情况：
<span class="course-math course-math-display" data-tex="T(n)=T(n-1)+T(0)+\Theta(n)" data-display="true"><code>T(n)=T(n-1)+T(0)+\Theta(n)</code></span>
通过 substitution method 容易说明此时 <span class="course-math" data-tex="T(n)=\Theta(n^{2})" data-display="false"><code>T(n)=\Theta(n^{2})</code></span>。（直观上，可以理解为等差数列求和）
- **证明：** 考虑最坏情况的递归表达式：
<span class="course-math course-math-display" data-tex="T(n)=\max _{0\leq q\leq n-1}(T(q)+T(n-q-1))+\Theta(n)" data-display="true"><code>T(n)=\max _{0\leq q\leq n-1}(T(q)+T(n-q-1))+\Theta(n)</code></span>
- 猜测 <span class="course-math" data-tex="T(n)\leq cn^{2}" data-display="false"><code>T(n)\leq cn^{2}</code></span>，考虑通过 substitution method 证明：若对更小的 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 已经成立，那么
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;T(n)&amp;\leq \max _{0\leq q\leq n-1}(c q ^{2}+c(n-q-1) ^{2})+\Theta(n) \\&#10;&amp;\leq c (n-1)^{2}+\Theta(n) \\&#10;&amp;\leq cn^{2}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;T(n)&amp;\leq \max _{0\leq q\leq n-1}(c q ^{2}+c(n-q-1) ^{2})+\Theta(n) \\&#10;&amp;\leq c (n-1)^{2}+\Theta(n) \\&#10;&amp;\leq cn^{2}&#10;\end{aligned}</code></span>
- 这里这个 <span class="course-math" data-tex="\max" data-display="false"><code>\max</code></span> 的取等在 <span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 是端点的时候取到，也就是上面说的最坏情况。


#### 最好情况
{: #section-5 }


 每次 partition 分成一半一半：
<span class="course-math course-math-display" data-tex="T(n)=2T(n / 2)+\Theta(n)" data-display="true"><code>T(n)=2T(n / 2)+\Theta(n)</code></span>
通过 master theorem 可以说明 <span class="course-math" data-tex="T(n)=\Theta(n\log n)" data-display="false"><code>T(n)=\Theta(n\log n)</code></span>。


#### 平均情况
{: #section-6 }


**随机化。** 为了避免最坏情况，我们可以在 partition 前面让我们选的 pivot 是随机的：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-6.png' | relative_url }}{% raw %}" alt="Sorting-6" width="441" height="139" loading="lazy" decoding="async">

可以证明，随机化的 QuickSort 的**期望运行时间**是 <span class="course-math" data-tex="\Theta(n\log n)" data-display="false"><code>\Theta(n\log n)</code></span>。
- **直觉：** 一个好的 partition 是把数组分成它的某个常数比例，例如，分成 <span class="course-math" data-tex="3:1" data-display="false"><code>3:1</code></span>。一个不好的 partition 是把数组分成 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 和 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span>。如果好的和坏的等可能交替出现，那好的 partition 会主导，导致 <span class="course-math" data-tex="\Theta(n\log n)" data-display="false"><code>\Theta(n\log n)</code></span>。
- **证明 1：** 假设每种 split <span class="course-math" data-tex="q=1,2, \dots, n" data-display="false"><code>q=1,2, \dots, n</code></span> 是等可能的。那么平均的情况就是每种情况恰好发生一次：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;T(n)=&amp; \frac{1}{n} \cdot \sum _{q=1}^{n}(T(q-1)+T(n-q)+\Theta(n)) \\&#10;=&amp;  \frac{1}{n} \cdot \sum _{q=1}^{n}T(q-1)+ \frac{1}{n} \sum _{q=1}^{n}T(n-q)+\frac{1}{n} \sum _{q=1}^{n}\Theta(n) \\&#10;=&amp; \frac{1}{n} \cdot \sum _{k=0}^{n-1}2T(k)+\Theta(n) &#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;T(n)=&amp; \frac{1}{n} \cdot \sum _{q=1}^{n}(T(q-1)+T(n-q)+\Theta(n)) \\&#10;=&amp;  \frac{1}{n} \cdot \sum _{q=1}^{n}T(q-1)+ \frac{1}{n} \sum _{q=1}^{n}T(n-q)+\frac{1}{n} \sum _{q=1}^{n}\Theta(n) \\&#10;=&amp; \frac{1}{n} \cdot \sum _{k=0}^{n-1}2T(k)+\Theta(n) &#10;\end{aligned}</code></span>
- 通过归纳证明，可以证明上面的 <span class="course-math" data-tex="T(n)\leq cn\ln n" data-display="false"><code>T(n)\leq cn\ln n</code></span>，于是 <span class="course-math" data-tex="T(n)=O(n\log n)" data-display="false"><code>T(n)=O(n\log n)</code></span>。
- **证明 2：** 我们考虑在整个 QuickSort 中，Partition 的 Line 4 执行的总次数 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span>。可以看出，这个 <span class="course-math" data-tex="X" data-display="false"><code>X</code></span> 决定了整个算法的上界（其他行的执行次数都不会更大）。用 indicator random variable <span class="course-math" data-tex="X_{ij}" data-display="false"><code>X_{ij}</code></span> 表示 <span class="course-math" data-tex="z_{i}" data-display="false"><code>z_{i}</code></span> 和 <span class="course-math" data-tex="z_{j}" data-display="false"><code>z_{j}</code></span>  发生了一次比较（这里 <span class="course-math" data-tex="z_{1},z_{2},\dots,z_{n}" data-display="false"><code>z_{1},z_{2},\dots,z_{n}</code></span> 表示从小到大排列的元素）。那么
<span class="course-math course-math-display" data-tex="\mathrm{E}(X)=\sum _{i=1}^{n-1}\sum _{j=i+1}^{n}\mathrm{E}(X_{ij})=\sum _{i=1}^{n-1}\sum _{j=i+1}^{n}P(X_{ij}=1)" data-display="true"><code>\mathrm{E}(X)=\sum _{i=1}^{n-1}\sum _{j=i+1}^{n}\mathrm{E}(X_{ij})=\sum _{i=1}^{n-1}\sum _{j=i+1}^{n}P(X_{ij}=1)</code></span>
- 那么我们要考虑 <span class="course-math" data-tex="X_{ij}=1" data-display="false"><code>X_{ij}=1</code></span> 的概率，也就是 <span class="course-math" data-tex="z_{i}" data-display="false"><code>z_{i}</code></span> 与 <span class="course-math" data-tex="z_{j}" data-display="false"><code>z_{j}</code></span> 发生了一次比较的概率。观察到，比较发生且只发生在这种情况：在 <span class="course-math" data-tex="z_{i},z_{i+1},\dots,z_{j-1},z_{j}" data-display="false"><code>z_{i},z_{i+1},\dots,z_{j-1},z_{j}</code></span> 这些元素之间， <span class="course-math" data-tex="z_{i}" data-display="false"><code>z_{i}</code></span> 或 <span class="course-math" data-tex="z_{j}" data-display="false"><code>z_{j}</code></span> 被首先选为了 pivot，在其他元素还没被选到之前（否则，若这些元素中的其他元素先被选为了 pivot，数组就会从这个元素分成两半，两边的元素不可能再发生比较）。那么发生的概率就是：
<span class="course-math course-math-display" data-tex="P(X_{ij}=1)= \frac{2}{j-i+1}" data-display="true"><code>P(X_{ij}=1)= \frac{2}{j-i+1}</code></span>
- 于是 
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\mathrm{E}(X)&amp;=\sum _{i=1}^{n-1}\sum _{j=i+1}^{n} \frac{2}{j-i+1} \\&#10;&amp;= \sum _{i=1}^{n-1}\sum _{k=2}^{n-i+1} \frac{2}{k} \\&#10;&amp;&lt;\sum _{i=1}^{n-1}\sum _{k=1}^{n} \frac{2}{k} \\ &#10;&amp;=\sum _{i=1}^{n-1} O(\log n) \\&#10;&amp;=O(n\log n)&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\mathrm{E}(X)&amp;=\sum _{i=1}^{n-1}\sum _{j=i+1}^{n} \frac{2}{j-i+1} \\&#10;&amp;= \sum _{i=1}^{n-1}\sum _{k=2}^{n-i+1} \frac{2}{k} \\&#10;&amp;&lt;\sum _{i=1}^{n-1}\sum _{k=1}^{n} \frac{2}{k} \\ &#10;&amp;=\sum _{i=1}^{n-1} O(\log n) \\&#10;&amp;=O(n\log n)&#10;\end{aligned}</code></span>
- 于是 <span class="course-math" data-tex="T(n)=O(n\log n)" data-display="false"><code>T(n)=O(n\log n)</code></span>。
{% endraw %}
