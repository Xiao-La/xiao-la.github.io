---
title: "Data Structures"
course_id: "dsaa"
course_title: "数据结构与算法分析"
section: ""
status: "updating"
created_at: "2026-11-06T22:04:29+08:00"
updated_at: "2026-11-06T22:04:29+08:00"
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

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures.png' | relative_url }}{% raw %}" alt="Data Structures" width="363" height="296" loading="lazy" decoding="async">


### 队列（Queue） 
{: #section-3 }


先进先出（first-in, first-out / FIFO）。也可以用数组实现：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-1.png' | relative_url }}{% raw %}" alt="Data Structures-1" width="360" height="299" loading="lazy" decoding="async">

这些操作都是 <span class="course-math" data-tex="O(1)" data-display="false"><code>O(1)</code></span> 的。


### 优先队列（Priority Queues）
{: #section-4 }


用一个堆来实现。这里就是把出队操作变成弹出具有最大/最小的 key 的元素。另外，以最大堆实现的 max-priority queue为例，还可以支持增大一个元素的 key，只需要 float up 即可。
- **handle:** 把一个对象与它在一个数据结构（比如堆）中的位置映射起来。在操作中我们也要去维护每个对象的 handle。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-2.png' | relative_url }}{% raw %}" alt="Data Structures-2" width="393" height="276" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-3.png' | relative_url }}{% raw %}" alt="Data Structures-3" width="391" height="141" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-4.png' | relative_url }}{% raw %}" alt="Data Structures-4" width="395" height="250" loading="lazy" decoding="async">

这些操作最多都是 <span class="course-math" data-tex="O(\log n)" data-display="false"><code>O(\log n)</code></span> 的。


### 链表（Linked List）：
{: #section-5 }


除了 key，还对每一个元素 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 存两个 attribute：<span class="course-math" data-tex="x.prev" data-display="false"><code>x.prev</code></span> 和 <span class="course-math" data-tex="x.next" data-display="false"><code>x.next</code></span>，分别指向 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的前驱和后继，这就是双向链表（doubly linked list）。若只存后继，那就是单向链表（singly linked list），把列表的头（head）和尾（tail）接起来，就会有循环链表（circular list）。
一个双向链表：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-8.png' | relative_url }}{% raw %}" alt="Data Structures-8" width="2046" height="254" loading="lazy" decoding="async">
一些支持的操作：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-5.png' | relative_url }}{% raw %}" alt="Data Structures-5" width="468" height="150" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-6.png' | relative_url }}{% raw %}" alt="Data Structures-6" width="473" height="204" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Data%20Structures-7.png' | relative_url }}{% raw %}" alt="Data Structures-7" width="479" height="219" loading="lazy" decoding="async">
如果我们创建一个 dummy 的 sentinel 元素，记为 <span class="course-math" data-tex="L.nil" data-display="false"><code>L.nil</code></span>，令它的后继为 head，前驱为 tail，那么就得到一个双向的循环链表，这里上述的代码可以简化，因为一些边界情况不用考虑了。

这里插入和删除一个已知的元素都是 <span class="course-math" data-tex="O(1)" data-display="false"><code>O(1)</code></span> 的。搜索是 <span class="course-math" data-tex="O(n)" data-display="false"><code>O(n)</code></span> 的。
{% endraw %}
