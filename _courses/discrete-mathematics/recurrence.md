---
title: "Recurrence - 递归"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-11-11T20:08:35+08:00"
updated_at: "2026-11-13T14:14:44+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/discrete-mathematics/recurrence/"
course_page: true
doc_type: "note"
description: "离散数学 · Recurrence - 递归"
excerpt: "离散数学 · Recurrence - 递归"
---

{% raw %}

一个函数的 **递归式（Recurrence Equation / Recurrence）** 告诉我们如何从前 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 个函数值计算出 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 处的函数值：
<span class="course-math course-math-display" data-tex="f(n)=F(f(1),f(2), \dots,f(n-1))" data-display="true"><code>f(n)=F(f(1),f(2), \dots,f(n-1))</code></span>
例如解汉诺塔的递归算法。
- 正确性。用 implicit 的归纳法，说明能解 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 层的，并且能解 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 层的汉诺塔就能解 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 层的即可。(<span class="course-math" data-tex="[n,0,0]\to[1,n-1,0]\to[0,n-1,1]\to[0,0,n]" data-display="false"><code>[n,0,0]\to[1,n-1,0]\to[0,n-1,1]\to[0,0,n]</code></span>)。
- 复杂度。<span class="course-math" data-tex="M(n)=2M(n-1)+1,M(1)=1" data-display="false"><code>M(n)=2M(n-1)+1,M(1)=1</code></span>。 可以用 explicit 的归纳法证明 <span class="course-math" data-tex="M(n)=2^{n}-1" data-display="false"><code>M(n)=2^{n}-1</code></span>。

**一阶线性递归式（First-Order Linear Recurrence）：** <span class="course-math" data-tex="T(n)" data-display="false"><code>T(n)</code></span> 只和 <span class="course-math" data-tex="T(n-1)" data-display="false"><code>T(n-1)</code></span> 有关，且 <span class="course-math" data-tex="T(n-1)" data-display="false"><code>T(n-1)</code></span> 只有一次。可以写成：
<span class="course-math course-math-display" data-tex="T(n)=f(n) T(n-1) +g(n)" data-display="true"><code>T(n)=f(n) T(n-1) +g(n)</code></span>

**定理：** 对递归式
<span class="course-math course-math-display" data-tex="T(n)=rT(n-1)+g(n)" data-display="true"><code>T(n)=rT(n-1)+g(n)</code></span>
有
<span class="course-math course-math-display" data-tex="T(n)=r^{n}T(0)+ \sum _{i=1}^{n} r^{n-i}g(i)" data-display="true"><code>T(n)=r^{n}T(0)+ \sum _{i=1}^{n} r^{n-i}g(i)</code></span>
显然可以通过数学归纳法证明。

**主定理（The Master Theorem）。** 对递归式
<span class="course-math course-math-display" data-tex="T(n)= aT(n / b) + c n^{d}" data-display="true"><code>T(n)= aT(n / b) + c n^{d}</code></span>
其中 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 为正整数，<span class="course-math" data-tex="b&gt;1,c&gt;0,d\geq0" data-display="false"><code>b&gt;1,c&gt;0,d\geq0</code></span>，<span class="course-math" data-tex="T(1)\geq0" data-display="false"><code>T(1)\geq0</code></span>。那么：
- 若 <span class="course-math" data-tex="a&lt;b^{d}" data-display="false"><code>a&lt;b^{d}</code></span>，则 <span class="course-math" data-tex="T(n)=\Theta(n^{d})" data-display="false"><code>T(n)=\Theta(n^{d})</code></span>。
- 若 <span class="course-math" data-tex="a=b^{d}" data-display="false"><code>a=b^{d}</code></span>，则 <span class="course-math" data-tex="T(n) =\Theta(n^{d}\log n)" data-display="false"><code>T(n) =\Theta(n^{d}\log n)</code></span>
- 若 <span class="course-math" data-tex="a&gt;b^{d}" data-display="false"><code>a&gt;b^{d}</code></span>，则 <span class="course-math" data-tex="T(n)=\Theta(n^{\log _{b}a})" data-display="false"><code>T(n)=\Theta(n^{\log _{b}a})</code></span>


### 解线性齐次递归式
{: #section-1 }


常系数 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 阶线性齐次递归式（Linear homogeneous relation of degree <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> with constant coefficients）：
<span class="course-math course-math-display" data-tex="a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+c_{k}a_{n-k}" data-display="true"><code>a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+c_{k}a_{n-k}</code></span>
这里 <span class="course-math" data-tex="c_{1},c_{2}, \dots, c_{k}" data-display="false"><code>c_{1},c_{2}, \dots, c_{k}</code></span> 是常数，且 <span class="course-math" data-tex="c_{k}\neq0" data-display="false"><code>c_{k}\neq0</code></span>。
如果不限定初始条件，可能有很多解；如果有初始条件，解就唯一了。
注意到，如果 <span class="course-math" data-tex="a_{n}, a_{n}&#x27;" data-display="false"><code>a_{n}, a_{n}&#x27;</code></span> 是解，那么 <span class="course-math" data-tex="a_{n}+a_{n}&#x27;" data-display="false"><code>a_{n}+a_{n}&#x27;</code></span> 和 <span class="course-math" data-tex="\alpha a_{n}" data-display="false"><code>\alpha a_{n}</code></span> 仍然是解，也就是说，它们的线性组合也是解。因此，不妨先关注一个特定形式的解： <span class="course-math" data-tex="a_{n}=r^{n}" data-display="false"><code>a_{n}=r^{n}</code></span>。代入得到
<span class="course-math course-math-display" data-tex="r^{n}=c_{1}r^{n-1}+c_{2}r^{n-2}+\dots+c_{k}r^{n-k}" data-display="true"><code>r^{n}=c_{1}r^{n-1}+c_{2}r^{n-2}+\dots+c_{k}r^{n-k}</code></span>
<span class="course-math" data-tex="r=0" data-display="false"><code>r=0</code></span> 显然成立。如果 <span class="course-math" data-tex="r\neq0" data-display="false"><code>r\neq0</code></span>，两边同除 <span class="course-math" data-tex="r^{n-k}" data-display="false"><code>r^{n-k}</code></span>，这就相当于解方程
<span class="course-math course-math-display" data-tex="r^{k}-c_{1}r^{k-1}-\dots-c_{k-1}r-c_{k}=0" data-display="true"><code>r^{k}-c_{1}r^{k-1}-\dots-c_{k-1}r-c_{k}=0</code></span>
这个方程就叫这个序列的 **特征方程（Characteristic Equation, CE）**。

考虑 2 阶的形式 <span class="course-math" data-tex="a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}" data-display="false"><code>a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}</code></span>，它的特征方程是 <span class="course-math" data-tex="r^{2}-c_{1}r-c_{2}=0" data-display="false"><code>r^{2}-c_{1}r-c_{2}=0</code></span>。若它有两个不等的根 <span class="course-math" data-tex="r_{1}\neq r_{2}" data-display="false"><code>r_{1}\neq r_{2}</code></span>，那么 <span class="course-math" data-tex="\{ a_{n} \}" data-display="false"><code>\{ a_{n} \}</code></span> 是解，**当且仅当** 
<span class="course-math course-math-display" data-tex="a_{n}=\alpha _{1}r_{1}^{n}+\alpha _{2}r_{2}^{n}" data-display="true"><code>a_{n}=\alpha _{1}r_{1}^{n}+\alpha _{2}r_{2}^{n}</code></span>
证明：
- "当“：只需要代入递归式验证即可。
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;&amp;c_{1}a_{n-1}+c_{2}a_{n-2} \\&#10;= &amp;  c_{1}(\alpha_{1}r_{1}^{n-1}+\alpha _{2}r_{2}^{n-1})+c_{2}(\alpha_{1}r_{1}^{n-2}+\alpha _{2}r_{2}^{n-2}) \\&#10;= &amp; \alpha _{1} r_{1}^{n-2}(c_{1}r_{1}+c_{2})+ \alpha _{2}r_{2}^{n-2}(c_{1}r_{2}+c_{2}) \\&#10;=&amp; \alpha_{1}r_{1}^{n-2} \cdot r_{1}^{2} + \alpha_{2}r_{2}^{n-2}\cdot r_{2}^{2} \\&#10;=&amp; \alpha_{1} r_{1}^{n} + \alpha _{2} r_{2}^{n}=a_{n}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;&amp;c_{1}a_{n-1}+c_{2}a_{n-2} \\&#10;= &amp;  c_{1}(\alpha_{1}r_{1}^{n-1}+\alpha _{2}r_{2}^{n-1})+c_{2}(\alpha_{1}r_{1}^{n-2}+\alpha _{2}r_{2}^{n-2}) \\&#10;= &amp; \alpha _{1} r_{1}^{n-2}(c_{1}r_{1}+c_{2})+ \alpha _{2}r_{2}^{n-2}(c_{1}r_{2}+c_{2}) \\&#10;=&amp; \alpha_{1}r_{1}^{n-2} \cdot r_{1}^{2} + \alpha_{2}r_{2}^{n-2}\cdot r_{2}^{2} \\&#10;=&amp; \alpha_{1} r_{1}^{n} + \alpha _{2} r_{2}^{n}=a_{n}&#10;\end{aligned}</code></span>
- “仅当”：如果初始条件确定了，那么 <span class="course-math" data-tex="a_{n}" data-display="false"><code>a_{n}</code></span> 就会完全确定下来。而因为 <span class="course-math" data-tex="r_{1}\neq r_{2}" data-display="false"><code>r_{1}\neq r_{2}</code></span>，方程组 <span class="course-math" data-tex="\alpha_{1}+\alpha_{2}=a_{0},\ \alpha_{1}r_{1}+\alpha_{2}r_{2}=a_{1}" data-display="false"><code>\alpha_{1}+\alpha_{2}=a_{0},\ \alpha_{1}r_{1}+\alpha_{2}r_{2}=a_{1}</code></span> 总有解，也就是说对任意初始条件，都能找到这种形式的一个解。那么它就应该是唯一的解。

若这个二次的特征方程有重根 <span class="course-math" data-tex="r_{0}" data-display="false"><code>r_{0}</code></span>，那么
<span class="course-math course-math-display" data-tex="a_{n}=\alpha_{1}r_{0}^{n}+\alpha_{2}nr_{0}^{n}" data-display="true"><code>a_{n}=\alpha_{1}r_{0}^{n}+\alpha_{2}nr_{0}^{n}</code></span>
证明：
- 重根：令 <span class="course-math" data-tex="f(r)=r^{n}-c_{1} r^{n-1} - c_{2}r^{n-2}-\dots-c_{k}r^{n-k}" data-display="false"><code>f(r)=r^{n}-c_{1} r^{n-1} - c_{2}r^{n-2}-\dots-c_{k}r^{n-k}</code></span>，那么有 <span class="course-math" data-tex="f(r_{0})=f&#x27;(r_{0})=0" data-display="false"><code>f(r_{0})=f&#x27;(r_{0})=0</code></span>，从而可以推出 <span class="course-math" data-tex="nr_{0}^{n}" data-display="false"><code>nr_{0}^{n}</code></span> 也是解。

考虑 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 阶的情况，若特征方程 <span class="course-math" data-tex="r^{k}-\sum _{i=1}^{k} c_{i}r^{k-i} = 0" data-display="false"><code>r^{k}-\sum _{i=1}^{k} c_{i}r^{k-i} = 0</code></span> 有 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个不同的根，那么解的形式就是
<span class="course-math course-math-display" data-tex="a_{n}=\sum _{i=1}^{k}\alpha_{i}r_{i}^{n}" data-display="true"><code>a_{n}=\sum _{i=1}^{k}\alpha_{i}r_{i}^{n}</code></span>
证明与 2 阶类似。
有重根的情况：
<span class="course-math course-math-display" data-tex="a_{n}= \sum _{i=1}^{t} \left(\sum _{j=0}^{m_{i}-1}\alpha _{i,j}n^{j}\right) r_{i}^{n}" data-display="true"><code>a_{n}= \sum _{i=1}^{t} \left(\sum _{j=0}^{m_{i}-1}\alpha _{i,j}n^{j}\right) r_{i}^{n}</code></span>
其中 <span class="course-math" data-tex="r_{i}" data-display="false"><code>r_{i}</code></span> 的重数（Multiplicities）为 <span class="course-math" data-tex="m_{i}" data-display="false"><code>m_{i}</code></span>。


### 解线性非齐次递归式
{: #section-2 }


对于线性非齐次的递归式
<span class="course-math course-math-display" data-tex="a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+c_{k}a_{n-k} + F(n)" data-display="true"><code>a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+c_{k}a_{n-k} + F(n)</code></span>
其中 <span class="course-math" data-tex="F(n)" data-display="false"><code>F(n)</code></span> 让这个递归式不再齐次。那么，如果这个递归式有一个特解 <span class="course-math" data-tex="p(n)" data-display="false"><code>p(n)</code></span>，而齐次的部分
<span class="course-math course-math-display" data-tex="a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+c_{k}a_{n-k}" data-display="true"><code>a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+c_{k}a_{n-k}</code></span>
的解为 <span class="course-math" data-tex="h(n)" data-display="false"><code>h(n)</code></span>，那么通解的结构为
<span class="course-math course-math-display" data-tex="a_{n}=h(n)+p(n)" data-display="true"><code>a_{n}=h(n)+p(n)</code></span>
例如解汉诺塔递归式 <span class="course-math" data-tex="H(n)=2H(n-1)+1" data-display="false"><code>H(n)=2H(n-1)+1</code></span>，使用现在的通用方法：
- 齐次部分 <span class="course-math" data-tex="H(n)=2H(n-1)" data-display="false"><code>H(n)=2H(n-1)</code></span>，特征方程为 <span class="course-math" data-tex="r-2=0" data-display="false"><code>r-2=0</code></span>，解为 <span class="course-math" data-tex="h(n)=\alpha2^{n}" data-display="false"><code>h(n)=\alpha2^{n}</code></span>。
- 我们猜特解 <span class="course-math" data-tex="p(n)=c" data-display="false"><code>p(n)=c</code></span> 是一个常数。那么 <span class="course-math" data-tex="c=2c+1\implies c=-1" data-display="false"><code>c=2c+1\implies c=-1</code></span>，于是 <span class="course-math" data-tex="H(n)=\alpha2^{n}-1" data-display="false"><code>H(n)=\alpha2^{n}-1</code></span>。结合 <span class="course-math" data-tex="H(1)=1" data-display="false"><code>H(1)=1</code></span> 得到 <span class="course-math" data-tex="H(n)=2^{n}-1" data-display="false"><code>H(n)=2^{n}-1</code></span>。
{% endraw %}
