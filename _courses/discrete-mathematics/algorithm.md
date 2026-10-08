---
title: "Algorithm - 算法"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-09-30T19:28:05+08:00"
updated_at: "2026-10-08T20:59:37+08:00"
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
-  <span class="course-math" data-tex="(f_{1}+f_{2})(x)=O(\max(&#124;g_{1}(x)&#124;,&#124;g_{2}(x)&#124;))" data-display="false"><code>(f_{1}+f_{2})(x)=O(\max(&#124;g_{1}(x)&#124;,&#124;g_{2}(x)&#124;))</code></span>
- <span class="course-math" data-tex="(f_{1}f_{2})(x)=O(g_{1}(x)g_{2}(x))" data-display="false"><code>(f_{1}f_{2})(x)=O(g_{1}(x)g_{2}(x))</code></span>

类似于大 <span class="course-math" data-tex="O" data-display="false"><code>O</code></span> 记号，还有表示下界的 <span class="course-math" data-tex="\Omega" data-display="false"><code>\Omega</code></span> 记号，还有表示渐进同阶的 <span class="course-math" data-tex="\Theta" data-display="false"><code>\Theta</code></span> 记号。

计算问题（Computational Problem）：定义了输入和输出。
实例（Instance）：一个问题的实例是一组问题所需的所有输入。
正确的算法（Correct Algorithm）： 对所有的输入实例都能给出正确的解答。

时间复杂度（Time complexity）：基础的机器运算（Machine Operations） 的数量。
空间复杂度（Space complexity）：需要的内存量（Amount of memory）。
复杂度实际上是 input size 的函数。
**定义 input size：** 能够编码输入数据所需要的最少的比特数。
- 例如，输入数据是一个整数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>，则 input size 就是 <span class="course-math" data-tex="\log_{2}n" data-display="false"><code>\log_{2}n</code></span>。也就是说，朴素的判断合数的算法（试除法）的复杂度实际上是 <span class="course-math" data-tex="O(2^{\text{size}(n)})" data-display="false"><code>O(2^{\text{size}(n)})</code></span>
- 例如，输入数据是一个数组 <span class="course-math" data-tex="a_{1},a_{2},\dots,a_{n}" data-display="false"><code>a_{1},a_{2},\dots,a_{n}</code></span>，则 input size 就是 <span class="course-math" data-tex="n\cdot \log_{2}a" data-display="false"><code>n\cdot \log_{2}a</code></span>，其中 <span class="course-math" data-tex="a=\max{a_{i}}" data-display="false"><code>a=\max{a_{i}}</code></span>。（由于这里 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 是个常数，那么表示复杂度的时候只会写成 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的函数）
- 例如要计算 <span class="course-math" data-tex="a\times b" data-display="false"><code>a\times b</code></span>，可以定义 <span class="course-math" data-tex="t=\log_{2}\max(a,b)" data-display="false"><code>t=\log_{2}\max(a,b)</code></span>

**定义** 正函数 <span class="course-math" data-tex="f(n)" data-display="false"><code>f(n)</code></span> 和 <span class="course-math" data-tex="g(n)" data-display="false"><code>g(n)</code></span> 是同类的（of the **same type**），若
<span class="course-math course-math-display" data-tex="c_{1}g(n^{a_{1}})^{b_{1}}\leq f(n)\leq c_{2}g(n^{a_{2}})^{b_{2}}" data-display="true"><code>c_{1}g(n^{a_{1}})^{b_{1}}\leq f(n)\leq c_{2}g(n^{a_{2}})^{b_{2}}</code></span>
对所有足够大的 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>。其中 <span class="course-math" data-tex="a_{1},a_{2},b_{1},b_{2},c_{1},c_{2}" data-display="false"><code>a_{1},a_{2},b_{1},b_{2},c_{1},c_{2}</code></span> 为正常数。



## P, NP
{: #section-1 }


对于判定性问题（Decision Problems），我们对于一个输入数据，最终输出 yes / no 两种结果。
{% endraw %}
