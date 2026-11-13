---
title: "Data Structures"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-11-06T22:04:29+08:00"
updated_at: "2026-11-10T17:54:15+08:00"
reference: false
order: 3
layout: "course"
permalink: "/courses/dsaa/data-structures/"
course_page: true
doc_type: "note"
description: "数据结构与算法分析 · Data Structures"
excerpt: "数据结构与算法分析 · Data Structures"
---

{% raw %}

数据结构（Data Structures）是用来维护 **动态集合（Dynamic sets）** 的技术。集合中的每个元素包含：
- Key。用来唯一确定这个元素。
- Satellite data。不被数据结构维护的数据。
- Attributes。被数据结构维护的数据。
这里 Key 通常来自一个全序集（Totally Ordered Set），例如正整数集。
- 这样，就会有最小/最大的 key，每个 key 也会有前驱/后继。
常见的操作：
- **Search(S, k)**：返回 key 为 k 的元素的 pointer。
- **Insert(S, x)**：把 pointer <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 指向的元素加到 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 里 。
- **Delete(S, x)**：把 pointer <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 指向的 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中的元素从 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 中删掉。
- **Minimum(S), Maximum(S)** ：返回 key 最小/最大的元素的 pointer。
- **Successor(S, x), Predecessor(S, x)** ：返回比 pointer <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 指向的元素的 key  的下一个更大/更小的元素的 pointer。

## 基本数据结构
{: #section-1 }



### 栈（Stack）
{: #section-2 }


后进先出（last-in, first-out / LIFO）。可以用数组实现：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures.webp' | relative_url }}{% raw %}" alt="Data Structures" width="363" height="296" loading="lazy" decoding="async">


### 队列（Queue） 
{: #section-3 }


先进先出（first-in, first-out / FIFO）。也可以用数组实现：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-1.webp' | relative_url }}{% raw %}" alt="Data Structures-1" width="360" height="299" loading="lazy" decoding="async">

这些操作都是 <span class="course-math" data-tex="O(1)" data-display="false"><code>O(1)</code></span> 的。


### 优先队列（Priority Queues）
{: #section-4 }


用一个堆来实现。这里就是把出队操作变成弹出具有最大/最小的 key 的元素。另外，以最大堆实现的 max-priority queue为例，还可以支持增大一个元素的 key，只需要 float up 即可。
- **handle:** 把一个对象与它在一个数据结构（比如堆）中的位置映射起来。在操作中我们也要去维护每个对象的 handle。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-2.webp' | relative_url }}{% raw %}" alt="Data Structures-2" width="393" height="276" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-3.webp' | relative_url }}{% raw %}" alt="Data Structures-3" width="391" height="141" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-4.webp' | relative_url }}{% raw %}" alt="Data Structures-4" width="395" height="250" loading="lazy" decoding="async">

这些操作最多都是 <span class="course-math" data-tex="O(\log n)" data-display="false"><code>O(\log n)</code></span> 的。


### 链表（Linked List）：
{: #section-5 }


除了 key，还对每一个元素 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 存两个 attribute：<span class="course-math" data-tex="x.prev" data-display="false"><code>x.prev</code></span> 和 <span class="course-math" data-tex="x.next" data-display="false"><code>x.next</code></span>，分别指向 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的前驱和后继，这就是双向链表（doubly linked list）。若只存后继，那就是单向链表（singly linked list），把列表的头（head）和尾（tail）接起来，就会有循环链表（circular list）。
一个双向链表：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-8.png' | relative_url }}{% raw %}" alt="Data Structures-8" width="2046" height="254" loading="lazy" decoding="async">
一些支持的操作：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-5.png' | relative_url }}{% raw %}" alt="Data Structures-5" width="468" height="150" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-6.webp' | relative_url }}{% raw %}" alt="Data Structures-6" width="473" height="204" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-7.webp' | relative_url }}{% raw %}" alt="Data Structures-7" width="479" height="219" loading="lazy" decoding="async">
如果我们创建一个 dummy 的 sentinel 元素，记为 <span class="course-math" data-tex="L.nil" data-display="false"><code>L.nil</code></span>，令它的后继为 head，前驱为 tail，那么就得到一个双向的循环链表，这里上述的代码可以简化，因为一些边界情况不用考虑了。

这里插入和删除一个已知的元素都是 <span class="course-math" data-tex="O(1)" data-display="false"><code>O(1)</code></span> 的。搜索是 <span class="course-math" data-tex="O(n)" data-display="false"><code>O(n)</code></span> 的。


## 二叉树（Binary Tree）
{: #section-6 }


递归定义：二叉树（Binary Tree）是一个有限节点的集合，使得
- 树是空的
- 或：由根节点，左子树，右子树组成
一些术语：
- left/right child
- parent
- path
- leaf / internal node
- siblings, parents, ancestor, descendant
- depth：从根节点到这个节点的简单路径长度
- level：同一个深度的节点
- height：从这个节点到一个叶节点的（向下的）最长路径的长度
- height of a tree：根节点的 height
- full：每一个节点要么是叶节点，要么同时有左右孩子
- complete：full，而且 每一个叶节点在同一个 level
实现：
- 用一个类似链表的结构，每个节点有 attributes T.root, left child pointer, right child pointer, parent pointer，便于遍历。
- 也可以像之前的 heap 那样，用单个数组实现

### 归纳证明
{: #section-7 }


在树上证明一个命题，可以用归纳法：
Base case: 说明对“最小的树”成立（依据具体情况，可能是一个空的树，也可能是一个根节点）
Induction step:  更大的树由根节点，左子树，右子树（可能为空）组成。假设命题对左右子树成立，然后推出对整个树成立。

例如，要证明：一个高度至多为 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 的二叉树有不多于 <span class="course-math" data-tex="2^{h}" data-display="false"><code>2^{h}</code></span> 个叶节点。
- Base case：对于 <span class="course-math" data-tex="h=0" data-display="false"><code>h=0</code></span>，那要么是空集，要么是一个根节点，所以 <span class="course-math" data-tex="\#(\text{leaves})\leq1=2^{0}" data-display="false"><code>\#(\text{leaves})\leq1=2^{0}</code></span>。
- Inductive Step：假设对 <span class="course-math" data-tex="h-1" data-display="false"><code>h-1</code></span> 成立，那么对 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span>，左子树和右子树都满足归纳假设，于是对这个树有 <span class="course-math" data-tex="\#(\text{leaves})\leq2 \cdot 2^{h-1}=2^{h}" data-display="false"><code>\#(\text{leaves})\leq2 \cdot 2^{h-1}=2^{h}</code></span>。

### 二叉搜索树（Binary search tree）
{: #section-8 }


一个二叉树，每个节点 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 满足 binary search tree property：
- <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的左子树的任一节点 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 满足 <span class="course-math" data-tex="y.key\leq x.key" data-display="false"><code>y.key\leq x.key</code></span>。
- <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的右子树的任一节点 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 满足 <span class="course-math" data-tex="y.key\geq x.key" data-display="false"><code>y.key\geq x.key</code></span>。

二叉搜索树上的一些操作：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-9.webp' | relative_url }}{% raw %}" alt="Data Structures-9" width="286" height="278" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-10.webp' | relative_url }}{% raw %}" alt="Data Structures-10" width="287" height="337" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-11.webp' | relative_url }}{% raw %}" alt="Data Structures-11" width="461" height="169" loading="lazy" decoding="async">

这些的复杂度是 <span class="course-math" data-tex="O(h)" data-display="false"><code>O(h)</code></span>，其中 <span class="course-math" data-tex="h" data-display="false"><code>h</code></span> 为树的高度。这个树可以很不平衡，甚至退化成一条链，所以最坏是 <span class="course-math" data-tex="\Theta(n)" data-display="false"><code>\Theta(n)</code></span> 的。
这里找 successor：
- 如果 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 有右子树，那后继就是 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 右子树中的最小元素。
- 如果 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 没有右子树，就不断往上跳，一旦往右跳了一次，就跳到了后继。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-12.webp' | relative_url }}{% raw %}" alt="Data Structures-12" width="328" height="517" loading="lazy" decoding="async">
单点删除操作要复杂一些。分成三种情况：
- 是叶子节点，那就直接删掉。
- 只有一个孩子，那就用这个孩子代替这个节点。
- 有两个孩子，那么需要用它的后继（也就是右子树的最小元素）来代替它。这是可行的，因为后继不会有左孩子。具体实现这个“代替“还有不少细节，见下面。
具体实现：要先实现一个移植（Transplant）操作，能把 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 为根节点的子树换成 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 为根节点的子树：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-13.webp' | relative_url }}{% raw %}" alt="Data Structures-13" width="323" height="334" loading="lazy" decoding="async">
这个 操作并不更新 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 的左右孩子，需要手动更新。然后就可以实现删除：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-14.webp' | relative_url }}{% raw %}" alt="Data Structures-14" width="427" height="224" loading="lazy" decoding="async">
复杂度仍然是 <span class="course-math" data-tex="O(h)" data-display="false"><code>O(h)</code></span>。

遍历二叉树（tree walk），根据遍历根的时机分成三类：
- 前序（Preorder）：根，左，右。
- 中序（Inorder）：左，根，右。
- 后序（Postorder）：左，右，根。
{% endraw %}
