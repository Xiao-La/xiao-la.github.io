---
title: "Sorting"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-09-29T16:21:34+08:00"
updated_at: "2026-09-29T18:09:15+08:00"
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

大根堆：一个二叉树，具有 Max-heap Property：
<span class="course-math course-math-display" data-tex="A[\text{Parent}(i)]\geq A[i]" data-display="true"><code>A[\text{Parent}(i)]\geq A[i]</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting.png' | relative_url }}{% raw %}" alt="Sorting" width="471" loading="lazy">
小根堆，一个二叉树，具有 Min-heap Property：
<span class="course-math course-math-display" data-tex="A[\text{Parent}(i)]\leq A[i]" data-display="true"><code>A[\text{Parent}(i)]\leq A[i]</code></span>
以大根堆为例，堆排序的步骤：
- 从一个无序的数组建立堆。（Build-Max-Heap）
- 不断拿出堆顶的最大元素放到数组的末尾，然后维护堆的性质（Max-Heapify）。这里用 <span class="course-math" data-tex="A.\text{heap-size}" data-display="false"><code>A.\text{heap-size}</code></span> 表示还没有放到末尾的元素个数。

<span class="course-math" data-tex="\text{Max-Heapify}(A,i)" data-display="false"><code>\text{Max-Heapify}(A,i)</code></span>：假设 <span class="course-math" data-tex="\text{Left}(i),\text{Right}(i)" data-display="false"><code>\text{Left}(i),\text{Right}(i)</code></span> 都是大根堆，但 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 处可能破坏堆的性质。那么，可以通过不断向下调整（"float down"），把 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 与它的**较大的**子节点（如果比 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 大）交换，不断递归地重复即可。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-1.png' | relative_url }}{% raw %}" alt="Sorting-1" width="493" loading="lazy">
运行时间：我们说树中一个节点的高度（height）是它到叶子节点的最长简单路径的长度。那么若 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 的高度为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span>，则运行时间是 <span class="course-math" data-tex="O(h)" data-display="false"><code>O(h)</code></span> 的。（不是 <span class="course-math" data-tex="\Omega (h)" data-display="false"><code>\Omega (h)</code></span>，因为可能提前停下）这里 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 最多是 <span class="course-math" data-tex="\log n" data-display="false"><code>\log n</code></span>，因为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 层的二叉树至少有 <span class="course-math" data-tex="1+2+4+\dots+2^{h-1}+1=2^{h}" data-display="false"><code>1+2+4+\dots+2^{h-1}+1=2^{h}</code></span> 个节点。
正确性：对高度进行归纳证明。Base case 就是叶子节点。假设对 <span class="course-math" data-tex="i-1" data-display="false"><code>i-1</code></span> 高度已经成立，那么对 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 高度，交换之后就化为了 <span class="course-math" data-tex="i-1" data-display="false"><code>i-1</code></span> 的情况，所以也成立。

<span class="course-math" data-tex="\text{Build-Max-Heap}(A,n)" data-display="false"><code>\text{Build-Max-Heap}(A,n)</code></span>：从叶子节点开始，从下至上不断执行 <span class="course-math" data-tex="\text{Max-Heapify}" data-display="false"><code>\text{Max-Heapify}</code></span>。这是因为 <span class="course-math" data-tex="\text{Max-Heapify}" data-display="false"><code>\text{Max-Heapify}</code></span> 假设了 <span class="course-math" data-tex="\text{Left}(i)" data-display="false"><code>\text{Left}(i)</code></span> 和 <span class="course-math" data-tex="\text{Right}(i)" data-display="false"><code>\text{Right}(i)</code></span> 都是大根堆。另外我们注意到 <span class="course-math" data-tex="A[( \lfloor n / 2 \rfloor + 1),\dots,n]" data-display="false"><code>A[( \lfloor n / 2 \rfloor + 1),\dots,n]</code></span> 都是叶子节点，所以不需要操作就自然形成大根堆。那么只需要从 <span class="course-math" data-tex="\lfloor n / 2 \rfloor" data-display="false"><code>\lfloor n / 2 \rfloor</code></span> 开始往前做即可。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-2.png' | relative_url }}{% raw %}" alt="Sorting-2" width="267" loading="lazy">
正确性：可以通过 Loop invariant “在迭代 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 开始时，<span class="course-math" data-tex="i+1,i+2,\dots,n" data-display="false"><code>i+1,i+2,\dots,n</code></span> 都是一个大根堆的根节点“ 证明。
运行时间：显然是 <span class="course-math" data-tex="O(n\log n)" data-display="false"><code>O(n\log n)</code></span> 的。一个更紧的界是 <span class="course-math" data-tex="\Theta(n)" data-display="false"><code>\Theta(n)</code></span>。
- 这是因为，大多数节点的高度都很小。实际上，高度为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 的节点最多只有 <span class="course-math" data-tex="\left\lceil  \frac{n}{2^{h+1}}  \right\rceil" data-display="false"><code>\left\lceil  \frac{n}{2^{h+1}}  \right\rceil</code></span> 个。
- 这个可以归纳证明，首先 <span class="course-math" data-tex="h=0" data-display="false"><code>h=0</code></span> 时就是叶子节点，确实最多是 <span class="course-math" data-tex="\lceil n / 2 \rceil" data-display="false"><code>\lceil n / 2 \rceil</code></span> 个；然后高度 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 的节点个数相当于我们删掉叶子节点之后的新的树（节点数是 <span class="course-math" data-tex="\lfloor n / 2 \rfloor" data-display="false"><code>\lfloor n / 2 \rfloor</code></span>）的高度 <span class="course-math" data-tex="h-1" data-display="false"><code>h-1</code></span> 的节点个数，这个最多就是 <span class="course-math" data-tex="\lceil \lfloor n / 2 \rfloor / 2^{h} \rceil\leq \lceil n / 2^{h+1} \rceil" data-display="false"><code>\lceil \lfloor n / 2 \rfloor / 2^{h} \rceil\leq \lceil n / 2^{h+1} \rceil</code></span>，证明完毕。
- 那么运行时间就是
<span class="course-math course-math-display" data-tex="T(n)=\sum_{h=1}^{\lfloor \log n \rfloor }\left\lceil  \frac{n}{2^{h+1}}  \right\rceil O(h)=O\left( n\sum_{h=1}^{\lfloor \log n \rfloor } \frac{h}{2^{h}} \right)=O\left( n\sum_{h=1}^{\infty} \frac{h}{2^{h}}\right)=O(n)" data-display="true"><code>T(n)=\sum_{h=1}^{\lfloor \log n \rfloor }\left\lceil  \frac{n}{2^{h+1}}  \right\rceil O(h)=O\left( n\sum_{h=1}^{\lfloor \log n \rfloor } \frac{h}{2^{h}} \right)=O\left( n\sum_{h=1}^{\infty} \frac{h}{2^{h}}\right)=O(n)</code></span>
- 还可以证明 <span class="course-math" data-tex="\Omega(n)" data-display="false"><code>\Omega(n)</code></span>（循环带来的）。
- 因此是 <span class="course-math" data-tex="\Theta(n)" data-display="false"><code>\Theta(n)</code></span> 的。

结合上面的两个函数，得到堆排序：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sorting-3.png' | relative_url }}{% raw %}" alt="Sorting-3" width="484" loading="lazy">
运行时间是 <span class="course-math" data-tex="O(n)+(n-1)\cdot O(\log n)=O(n\log n)" data-display="false"><code>O(n)+(n-1)\cdot O(\log n)=O(n\log n)</code></span> 的。
可以通过循环不变量证明正确性。
{% endraw %}
