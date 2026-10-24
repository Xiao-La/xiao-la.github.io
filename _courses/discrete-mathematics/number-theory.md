---
title: "Number Theory - 数论"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-10-12T15:33:52+08:00"
updated_at: "2026-10-24T17:42:31+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/discrete-mathematics/number-theory/"
course_page: true
doc_type: "note"
description: "离散数学 · Number Theory - 数论"
excerpt: "离散数学 · Number Theory - 数论"
---

{% raw %}

以下讨论整数；标准除法的除数、同余的模数取正整数。

**整除（Divisibility）。** 若 <span class="course-math" data-tex="a\neq 0" data-display="false"><code>a\neq 0</code></span> 且 <span class="course-math" data-tex="b=ak" data-display="false"><code>b=ak</code></span>，则称 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 整除 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span>，记作 <span class="course-math" data-tex="a\mid b" data-display="false"><code>a\mid b</code></span>。

<span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 到 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 中能被 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 整除的数一共有 <span class="course-math" data-tex="\lfloor n / d \rfloor" data-display="false"><code>\lfloor n / d \rfloor</code></span> 个。（<span class="course-math" data-tex="0&lt;kd\leq{}n" data-display="false"><code>0&lt;kd\leq{}n</code></span>）。

性质：
- <span class="course-math" data-tex="a\mid b,a\mid c\to{}a\mid (b+c)" data-display="false"><code>a\mid b,a\mid c\to{}a\mid (b+c)</code></span>
- <span class="course-math" data-tex="a\mid b\to a\mid bc" data-display="false"><code>a\mid b\to a\mid bc</code></span>
- <span class="course-math" data-tex="a\mid b,b\mid c\to{}a\mid c" data-display="false"><code>a\mid b,b\mid c\to{}a\mid c</code></span>
结合这些性质，推出：
<span class="course-math course-math-display" data-tex="a\mid b,a\mid c\to{}a\mid mb+nc" data-display="true"><code>a\mid b,a\mid c\to{}a\mid mb+nc</code></span>
（整除两个数，那么也整除它们的线性组合）

标准除法：对 <span class="course-math" data-tex="a,d" data-display="false"><code>a,d</code></span>，存在唯一的 <span class="course-math" data-tex="q,r" data-display="false"><code>q,r</code></span> 其中 <span class="course-math" data-tex="0\leq{}r&lt;d" data-display="false"><code>0\leq{}r&lt;d</code></span>，使得 <span class="course-math" data-tex="a=dq+r" data-display="false"><code>a=dq+r</code></span>。<span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 是除数（divisor），<span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 是商（quotient），<span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 是被除数（dividend），<span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 是余数（remainder）。
- 记 <span class="course-math" data-tex="q=a \,\mathrm{ div}\,d" data-display="false"><code>q=a \,\mathrm{ div}\,d</code></span>，<span class="course-math" data-tex="r=a\bmod d" data-display="false"><code>r=a\bmod d</code></span>

同余（Congruent）：若 <span class="course-math" data-tex="m \mid a-b" data-display="false"><code>m \mid a-b</code></span>，那么 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 与 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 模（modulo） <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 同余，记作
<span class="course-math course-math-display" data-tex="a\equiv{}b\pmod{m}" data-display="true"><code>a\equiv{}b\pmod{m}</code></span>
这里 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 叫做模数（modulus）。
由定义：
<span class="course-math course-math-display" data-tex="a\equiv{}b\pmod{m}\Leftrightarrow{} \exists k,a=b+km" data-display="true"><code>a\equiv{}b\pmod{m}\Leftrightarrow{} \exists k,a=b+km</code></span>
也可证：
<span class="course-math course-math-display" data-tex="a\equiv{}b\pmod{m}\Leftrightarrow{} a\bmod m=b\bmod m" data-display="true"><code>a\equiv{}b\pmod{m}\Leftrightarrow{} a\bmod m=b\bmod m</code></span>
若 <span class="course-math" data-tex="a\equiv{}b \pmod{m}" data-display="false"><code>a\equiv{}b \pmod{m}</code></span> 和 <span class="course-math" data-tex="c\equiv{}d \pmod{m}" data-display="false"><code>c\equiv{}d \pmod{m}</code></span>，那么有
<span class="course-math course-math-display" data-tex="a+c\equiv{}b+d \pmod{m}" data-display="true"><code>a+c\equiv{}b+d \pmod{m}</code></span>
<span class="course-math course-math-display" data-tex="ac\equiv{}bd\pmod{m}" data-display="true"><code>ac\equiv{}bd\pmod{m}</code></span>

推论：若 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 是一个正整数，则
<span class="course-math course-math-display" data-tex="(a+b)\bmod m=((a\bmod m)+(b\bmod m))\bmod m" data-display="true"><code>(a+b)\bmod m=((a\bmod m)+(b\bmod m))\bmod m</code></span>
<span class="course-math course-math-display" data-tex="ab\bmod m = ((a\bmod m)(b\bmod m))\bmod m" data-display="true"><code>ab\bmod m = ((a\bmod m)(b\bmod m))\bmod m</code></span>

## 群（Group）
{: #section-1 }


**群（Group）**：一个集合 <span class="course-math" data-tex="G" data-display="false"><code>G</code></span>，有 **一个** 二元运算 <span class="course-math" data-tex="*" data-display="false"><code>*</code></span>，符合以下四个条件：
- **封闭性（Closure）：** <span class="course-math" data-tex="a,b\in G\to a*b=c \in G" data-display="false"><code>a,b\in G\to a*b=c \in G</code></span>
- **结合律（Associativity）：** <span class="course-math" data-tex="(a*b)*c=a*(b*c)" data-display="false"><code>(a*b)*c=a*(b*c)</code></span>
- **单位元（Identity Element）：** 存在唯一的元素 <span class="course-math" data-tex="1_{e}" data-display="false"><code>1_{e}</code></span>，使得对任意 <span class="course-math" data-tex="a\in G" data-display="false"><code>a\in G</code></span>，有 <span class="course-math" data-tex="a*1_{e}=a" data-display="false"><code>a*1_{e}=a</code></span>
- **逆元（Inverse）：** 对任意 <span class="course-math" data-tex="a\in G" data-display="false"><code>a\in G</code></span>，都存在一个元素 <span class="course-math" data-tex="a^{-1}" data-display="false"><code>a^{-1}</code></span>，使得 <span class="course-math" data-tex="a*a^{-1}=1_{e}" data-display="false"><code>a*a^{-1}=1_{e}</code></span>
记作 <span class="course-math" data-tex="(G,*)" data-display="false"><code>(G,*)</code></span>。

例如，这些都是群：
- <span class="course-math" data-tex="(\mathbb{Z},+),(\mathbb{Q},+), (\mathbb{R},+),(\mathbb{M}_{n\times n},+),(\mathbb{Q}^{*},\times),(\mathbb{R}^{*},\times)" data-display="false"><code>(\mathbb{Z},+),(\mathbb{Q},+), (\mathbb{R},+),(\mathbb{M}_{n\times n},+),(\mathbb{Q}^{*},\times),(\mathbb{R}^{*},\times)</code></span>
- General Linear Group：所有可逆 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 阶矩阵的集合，在矩阵乘法上是群。

**阿贝尔群（Abelian Group）：** 若 <span class="course-math" data-tex="*" data-display="false"><code>*</code></span> 运算满足可交换性。


### 置换群（Permutation Group）
{: #section-2 }


令 <span class="course-math" data-tex="s_{n}= \langle 1,2, \dots,n \rangle" data-display="false"><code>s_{n}= \langle 1,2, \dots,n \rangle</code></span>，记 <span class="course-math" data-tex="P_{n}" data-display="false"><code>P_{n}</code></span> 为 <span class="course-math" data-tex="s_{n}" data-display="false"><code>s_{n}</code></span> 的所有排列组成的集合。
对 <span class="course-math" data-tex="\pi,\rho \in P_{n}" data-display="false"><code>\pi,\rho \in P_{n}</code></span>，定义一种运算 <span class="course-math" data-tex="\pi \circ \rho" data-display="false"><code>\pi \circ \rho</code></span>，就是用 <span class="course-math" data-tex="\pi" data-display="false"><code>\pi</code></span> 来重排 <span class="course-math" data-tex="\rho" data-display="false"><code>\rho</code></span>。
那么，<span class="course-math" data-tex="(P_{n},\circ)" data-display="false"><code>(P_{n},\circ)</code></span> 是一个群，我们称为置换群（Permutation Group）。
置换群不是阿贝尔群。

置换群与置换矩阵**一一对应**。所以这里的运算 <span class="course-math" data-tex="\circ" data-display="false"><code>\circ</code></span> 可以看成对应的置换矩阵的 **矩阵乘法**。


## 环（Ring）
{: #section-3 }


若 <span class="course-math" data-tex="(R,+)" data-display="false"><code>(R,+)</code></span> 是一个阿贝尔群，那么我们再定义一个运算 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span>，使得：
- **封闭性（Closure）：** <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 对 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 封闭。
- **结合律（Associativity）：** <span class="course-math" data-tex="(a\times b)\times c=a\times(b\times c)" data-display="false"><code>(a\times b)\times c=a\times(b\times c)</code></span>
- **分配律（Distributivity）：** <span class="course-math" data-tex="a\times(b+c)=a\times b+a\times c" data-display="false"><code>a\times(b+c)=a\times b+a\times c</code></span>，且 <span class="course-math" data-tex="(a+b)\times c=a\times c+b\times c" data-display="false"><code>(a+b)\times c=a\times c+b\times c</code></span>
那么我们说 <span class="course-math" data-tex="(R,+,\times)" data-display="false"><code>(R,+,\times)</code></span> 是一个环（Ring）。

**交换环（Commutative Ring）：** 若 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 运算满足可交换性。

**整环（Integral Domain）：** 若一个**交换环**符合两个性质：
- **乘法单位元（Identity Element）：** <span class="course-math" data-tex="a\times1=1\times a=a" data-display="false"><code>a\times1=1\times a=a</code></span>
- **非零积（Nonzero Product）：** 若 <span class="course-math" data-tex="a\times b=0" data-display="false"><code>a\times b=0</code></span>，那么 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 或 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 必有一个是 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。

例如 <span class="course-math" data-tex="(\mathbb{Z},+,\times)" data-display="false"><code>(\mathbb{Z},+,\times)</code></span> 就是整环。<span class="course-math" data-tex="(\mathbb{Z}_{m},+,\times)" data-display="false"><code>(\mathbb{Z}_{m},+,\times)</code></span> 是交换环；<span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 为素数时是整环，为合数时不是整环。


## 域（Field）
{: #section-4 }


若一个**整环**的乘法还满足任意非零元素**存在逆元**，那么说它是一个 **域（Field）**。

<span class="course-math" data-tex="(\mathbb{Q},+,\times),(\mathbb{R},+,\times)" data-display="false"><code>(\mathbb{Q},+,\times),(\mathbb{R},+,\times)</code></span> 是域，而且叫 **无限域（Infinite field）**。
<span class="course-math" data-tex="(\mathbb{Z}_{p},+_{p},\times _{p})" data-display="false"><code>(\mathbb{Z}_{p},+_{p},\times _{p})</code></span> 叫做素数域（Prime field）。
**有限域（Finite Field）** 的元素个数是素数幂 <span class="course-math" data-tex="p^{m}" data-display="false"><code>p^{m}</code></span>，通常记作 <span class="course-math" data-tex="\mathbb{F}_{p^{m}}" data-display="false"><code>\mathbb{F}_{p^{m}}</code></span>。


## 整数的表示
{: #section-5 }


常用这些进制：Decimal (base 10), Binary (base 2), Octal (base 8), Hexadecimal (base 16)。
令 <span class="course-math" data-tex="b&gt;1" data-display="false"><code>b&gt;1</code></span> 是一个整数。那么 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的 base-<span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 展开就是
<span class="course-math course-math-display" data-tex="n=\sum _{i=0}^{k} a_{i}b^{i}" data-display="true"><code>n=\sum _{i=0}^{k} a_{i}b^{i}</code></span>
这里整数 <span class="course-math" data-tex="0\leq a_{i}&lt;b" data-display="false"><code>0\leq a_{i}&lt;b</code></span>，那么可以写成
<span class="course-math course-math-display" data-tex="n=(a_{k}a_{k-1}\dots a_{0})_{b}" data-display="true"><code>n=(a_{k}a_{k-1}\dots a_{0})_{b}</code></span>
- 从其他进制转 <span class="course-math" data-tex="10" data-display="false"><code>10</code></span> 进制，只需根据定义计算即可。
- 在 <span class="course-math" data-tex="2,8,16" data-display="false"><code>2,8,16</code></span> 进制内互转，只需要 grouping：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-1.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-1" width="1110" height="234" loading="lazy" decoding="async">
由于：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;n&amp;=a_{k}b^{k}+a_{k-1}b^{k-1}+\dots+a_{2}b^{2}+a_{1}b+a_{0} \\&#10;&amp;=b(a_{k}b^{k-1}+a_{k-1}b^{k-2}+\dots+a_{2}b+a_{1})+a_{0} \\&#10;&amp;=b(b(a_{k}b^{k-2}+a_{k-1}b^{k-3}+\dots+a_{2})+a_{1})+a_{0} \\&#10;&amp;=\dots&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;n&amp;=a_{k}b^{k}+a_{k-1}b^{k-1}+\dots+a_{2}b^{2}+a_{1}b+a_{0} \\&#10;&amp;=b(a_{k}b^{k-1}+a_{k-1}b^{k-2}+\dots+a_{2}b+a_{1})+a_{0} \\&#10;&amp;=b(b(a_{k}b^{k-2}+a_{k-1}b^{k-3}+\dots+a_{2})+a_{1})+a_{0} \\&#10;&amp;=\dots&#10;\end{aligned}</code></span>
那么要从 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 构造它的 base-<span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 展开，就相当于不停去除以 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span>，取余数，就得到了 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 进制下的低位到高位。

二进制的加法，乘法运算：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-2.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-2" width="2226" height="1020" loading="lazy" decoding="async"><img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-3.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-3" width="2216" height="938" loading="lazy" decoding="async">这是因为：
<span class="course-math course-math-display" data-tex="ab=b_{0}(a\cdot2^{0})+b_{1}(a\cdot2^{1})+\dots+b_{n-1}(a\cdot2^{n-1})" data-display="true"><code>ab=b_{0}(a\cdot2^{0})+b_{1}(a\cdot2^{1})+\dots+b_{n-1}(a\cdot2^{n-1})</code></span>
那么只需要把 <span class="course-math" data-tex="b_{j}=1" data-display="false"><code>b_{j}=1</code></span> 的那些 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的移位加起来。

一个朴素的除法：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-4.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-4" width="501" height="323" loading="lazy" decoding="async">
补充：若 <span class="course-math" data-tex="a&lt;0" data-display="false"><code>a&lt;0</code></span> 且恰好整除（<span class="course-math" data-tex="r=0" data-display="false"><code>r=0</code></span>），图中还需令 <span class="course-math" data-tex="q=-q" data-display="false"><code>q=-q</code></span>。
可以通过分治来优化：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-5.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-5" width="392" height="332" loading="lazy" decoding="async">
这相当于把 <span class="course-math" data-tex="a=dq+r" data-display="false"><code>a=dq+r</code></span> 写成 <span class="course-math" data-tex="a / 2=d \cdot q / 2+r / 2" data-display="false"><code>a / 2=d \cdot q / 2+r / 2</code></span>，然后去处理奇偶性细节。每次缩小一半，所以这个是 <span class="course-math" data-tex="O(\log q \log a)=O(n^{2})" data-display="false"><code>O(\log q \log a)=O(n^{2})</code></span> 的。

模指数算法：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-6.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-6" width="2228" height="758" loading="lazy" decoding="async">
复杂度是 <span class="course-math" data-tex="O((\log m) ^{2}\log n)=O(n^{3})" data-display="false"><code>O((\log m) ^{2}\log n)=O(n^{3})</code></span>。
这是因为：
<span class="course-math course-math-display" data-tex="b^{n}=b^{a_{k-1}2^{k-1}}\cdot b^{a_{k-2}2^{k-2}}\cdot\dots \cdot b^{a_{1} 2^{1}} b^{a_{0}}" data-display="true"><code>b^{n}=b^{a_{k-1}2^{k-1}}\cdot b^{a_{k-2}2^{k-2}}\cdot\dots \cdot b^{a_{1} 2^{1}} b^{a_{0}}</code></span>
注意这里 <span class="course-math" data-tex="a_{i}\in \{ 0,1 \}" data-display="false"><code>a_{i}\in \{ 0,1 \}</code></span>，然后 <span class="course-math" data-tex="b^{2^{k-1}}=(b^{2^{k-2}})^{2}" data-display="false"><code>b^{2^{k-1}}=(b^{2^{k-2}})^{2}</code></span>。那么我们不断把 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 平方，然后在 <span class="course-math" data-tex="a_{i}=1" data-display="false"><code>a_{i}=1</code></span> 的时候就乘到答案里去。


## 素数与合数
{: #section-6 }


唯一分解定理 / 算术基本定理：每个大于 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的整数都可以用唯一的方式写成：一个素数，或按不减的顺序排列的至少两个素数的乘积。

若 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 是合数，则存在一个 <span class="course-math" data-tex="\leq \sqrt{n}" data-display="false"><code>\leq \sqrt{n}</code></span> 的素因子（prime divisor）。

<span class="course-math" data-tex="\gcd(a,b)" data-display="false"><code>\gcd(a,b)</code></span>：最大公因数。
<span class="course-math" data-tex="\operatorname{lcm}(a,b)" data-display="false"><code>\operatorname{lcm}(a,b)</code></span>：最小公倍数。
若把 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 用算术基本定理分解了，那么
<span class="course-math course-math-display" data-tex="\gcd(a,b)=p_{1}^{\min(a_{1},b_{1})}p_{2}^{\min(a_{2},b_{2})}\dots p_{n}^{\min(a_{n},b_{n})}" data-display="true"><code>\gcd(a,b)=p_{1}^{\min(a_{1},b_{1})}p_{2}^{\min(a_{2},b_{2})}\dots p_{n}^{\min(a_{n},b_{n})}</code></span>
<span class="course-math course-math-display" data-tex="\operatorname{lcm}(a,b)=p_{1}^{\max(a_{1},b_{1})}p_{2}^{\max(a_{2},b_{2})}\dots p_{n}^{\max(a_{n},b_{n})}" data-display="true"><code>\operatorname{lcm}(a,b)=p_{1}^{\max(a_{1},b_{1})}p_{2}^{\max(a_{2},b_{2})}\dots p_{n}^{\max(a_{n},b_{n})}</code></span>

### 欧几里得算法（辗转相除法, Euclidean Algorithm）
{: #section-7 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-7.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-7" width="366" height="220" loading="lazy" decoding="async">

设 <span class="course-math" data-tex="a&gt;b" data-display="false"><code>a&gt;b</code></span>，欧几里得算法中，while 循环执行的次数是 <span class="course-math" data-tex="O(\log b)" data-display="false"><code>O(\log b)</code></span>。若考虑除法操作的复杂度 <span class="course-math" data-tex="O(\log ^{2}a)" data-display="false"><code>O(\log ^{2}a)</code></span>，总的复杂度可以写成 <span class="course-math" data-tex="O(\log ^{3}a)" data-display="false"><code>O(\log ^{3}a)</code></span>。这是多项式时间的。

欧几里得算法的正确性依赖于这个引理：
<span class="course-math course-math-display" data-tex="a=bq+r\to\gcd(a,b)=\gcd(b,r)" data-display="true"><code>a=bq+r\to\gcd(a,b)=\gcd(b,r)</code></span>
证明：令 <span class="course-math" data-tex="D_{n}" data-display="false"><code>D_{n}</code></span> 表示 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的所有因子组成的集合，那么 <span class="course-math" data-tex="\gcd(a,b)=\max (D_{a}\cap D_{b})" data-display="false"><code>\gcd(a,b)=\max (D_{a}\cap D_{b})</code></span> 。只需证明
<span class="course-math course-math-display" data-tex="D_{a}\cap D_{b}=D_{b}\cap D_{r}" data-display="true"><code>D_{a}\cap D_{b}=D_{b}\cap D_{r}</code></span>
这很容易说明：
- 若 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 是 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 的因数，那它也是 <span class="course-math" data-tex="r=a-bq" data-display="false"><code>r=a-bq</code></span> 的因数，即 <span class="course-math" data-tex="\text{LHS}\subseteq\text{RHS}" data-display="false"><code>\text{LHS}\subseteq\text{RHS}</code></span>。
- 若 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 是 <span class="course-math" data-tex="b,r" data-display="false"><code>b,r</code></span> 的因数，那它也是 <span class="course-math" data-tex="a=bq+r" data-display="false"><code>a=bq+r</code></span> 的因数，即 <span class="course-math" data-tex="\text{RHS}\subseteq\text{LHS}" data-display="false"><code>\text{RHS}\subseteq\text{LHS}</code></span>。
- 那么 <span class="course-math" data-tex="\text{LHS}=\text{RHS}" data-display="false"><code>\text{LHS}=\text{RHS}</code></span>。


### 裴蜀定理（Bezout's Theorem）
{: #section-8 }


**裴蜀定理**：<span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 的最大公因数可以写成 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 的线性组合：
<span class="course-math course-math-display" data-tex="d=\gcd(a,b)=sa+tb" data-display="true"><code>d=\gcd(a,b)=sa+tb</code></span>

证明：考虑欧几里得算法的步骤：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-8.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-8" width="349" height="218" loading="lazy" decoding="async">

那么从最后一步开始往前代入：
<span class="course-math course-math-display" data-tex="\gcd(a,b)=r_{n}=r_{n-2}-r_{n-1}q_{n-1}=\dots=sa+tb" data-display="true"><code>\gcd(a,b)=r_{n}=r_{n-2}-r_{n-1}q_{n-1}=\dots=sa+tb</code></span>
这是一个构造性证明，我们找到了一组线性组合。然而，其实 <span class="course-math" data-tex="d=sa+tb" data-display="false"><code>d=sa+tb</code></span> 可以有不止一种线性组合，我们只要找 <span class="course-math" data-tex="s&#x27;a+t&#x27;b=0" data-display="false"><code>s&#x27;a+t&#x27;b=0</code></span> 的解，把它加到原来找到的 <span class="course-math" data-tex="sa+tb" data-display="false"><code>sa+tb</code></span> 上即可构造其他解。

可以用扩展欧几里得算法（Extended Euclidean algorithm）找到裴蜀恒等式。

**推论1：**
<span class="course-math course-math-display" data-tex="a\mid bc \land \gcd(a,b)=1\to a\mid c" data-display="true"><code>a\mid bc \land \gcd(a,b)=1\to a\mid c</code></span>
用裴蜀定理证明：存在 <span class="course-math" data-tex="s,t" data-display="false"><code>s,t</code></span> 使得
<span class="course-math course-math-display" data-tex="\gcd(a,b)=1=sa+tb" data-display="true"><code>\gcd(a,b)=1=sa+tb</code></span>
那么
<span class="course-math course-math-display" data-tex="c=sac+tbc" data-display="true"><code>c=sac+tbc</code></span>
由于 <span class="course-math" data-tex="a\mid bc" data-display="false"><code>a\mid bc</code></span>，那么 <span class="course-math" data-tex="a\mid (sac+tbc)=c" data-display="false"><code>a\mid (sac+tbc)=c</code></span>。

**推论 2：** 若素数 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 满足 <span class="course-math" data-tex="p\mid a_{1}a_{2}a_{3}\dots a_{n}" data-display="false"><code>p\mid a_{1}a_{2}a_{3}\dots a_{n}</code></span>，那么 存在 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 使得 <span class="course-math" data-tex="p\mid a_{i}" data-display="false"><code>p\mid a_{i}</code></span>.

用这个推论可以证明素数分解的唯一性。

**定理：** 若 <span class="course-math" data-tex="ac\equiv bc \pmod{m}" data-display="false"><code>ac\equiv bc \pmod{m}</code></span> 且 <span class="course-math" data-tex="\gcd(c,m)=1" data-display="false"><code>\gcd(c,m)=1</code></span>，那么 <span class="course-math" data-tex="a\equiv b\pmod{m}" data-display="false"><code>a\equiv b\pmod{m}</code></span>。


### 梅森素数（Mersenne Primes）
{: #section-9 }


梅森素数：可以写成 <span class="course-math" data-tex="2^{p}-1" data-display="false"><code>2^{p}-1</code></span> 形式的素数，其中 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 是素数。

目前最大的素数都是通过梅森素数的形式构造的。


### 素数相关的猜想
{: #section-10 }


**哥德巴赫猜想（Goldbach's Conjecture，1+1）：** 每个大于 <span class="course-math" data-tex="2" data-display="false"><code>2</code></span> 的偶数都能写成两个素数的和。
- 陈景润（1973, 1+2）：充分大的偶数可以写成（1 个素数）+（1 个素数或 2 个素数的积）。用筛法（Sieve Method）做的最好的成果。

**孪生素数猜想（Twin-prime Conjecture）：** 有无穷多组孪生素数（在无穷远处也有孪生素数）。
- 张益唐：无穷远处素数之间的距离是有界的。


## 线性同余式
{: #section-11 }


线性同余式（Linear Congruence）：
<span class="course-math course-math-display" data-tex="ax\equiv b\pmod{m}" data-display="true"><code>ax\equiv b\pmod{m}</code></span>
其中 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 是一个变量。一般我们考虑的是整数环 <span class="course-math" data-tex="\mathbb{Z}_{m}" data-display="false"><code>\mathbb{Z}_{m}</code></span> 中的解，这个解往上 <span class="course-math" data-tex="+km" data-display="false"><code>+km</code></span> 也是解。

**定义模逆（Modular Inverse）：** 若
<span class="course-math course-math-display" data-tex="\overline{a}a\equiv1\pmod{m}" data-display="true"><code>\overline{a}a\equiv1\pmod{m}</code></span>
那么称 <span class="course-math" data-tex="\overline{a}" data-display="false"><code>\overline{a}</code></span> 为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 模 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 的一个逆。

**定理：** 若 <span class="course-math" data-tex="a,m" data-display="false"><code>a,m</code></span> 互素，那么 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 模 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 的逆存在。反过来也成立。
<span class="course-math course-math-display" data-tex="\gcd(a,m)=1 \leftrightarrow \overline{a}\,\text{exists}" data-display="true"><code>\gcd(a,m)=1 \leftrightarrow \overline{a}\,\text{exists}</code></span>
进一步，若 <span class="course-math" data-tex="a,m" data-display="false"><code>a,m</code></span> 互素，那么这个存在的逆，模 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 是**唯一的**。
**证明：**
- 由裴蜀定理：
<span class="course-math course-math-display" data-tex="\gcd(a,m)=1=sa+tm\implies sa=1-tm=1\pmod{m}\implies \overline{a}=s" data-display="true"><code>\gcd(a,m)=1=sa+tm\implies sa=1-tm=1\pmod{m}\implies \overline{a}=s</code></span>
- 唯一性：假设不唯一，也就是说存在 <span class="course-math" data-tex="a_{1}\not\equiv a_{2}\pmod{m}" data-display="false"><code>a_{1}\not\equiv a_{2}\pmod{m}</code></span> 使得 <span class="course-math" data-tex="a_{1}a\equiv a_{2}a\equiv 1\pmod{m}" data-display="false"><code>a_{1}a\equiv a_{2}a\equiv 1\pmod{m}</code></span>。那么有 <span class="course-math" data-tex="m\mid(a_{1}-a_{2})a\implies m\mid a_{1}-a_{2}" data-display="false"><code>m\mid(a_{1}-a_{2})a\implies m\mid a_{1}-a_{2}</code></span>。那么就有 <span class="course-math" data-tex="a_{1}\equiv a_{2}\pmod{m}" data-display="false"><code>a_{1}\equiv a_{2}\pmod{m}</code></span>，矛盾。

当模逆存在时（<span class="course-math" data-tex="\gcd(a,m)=1" data-display="false"><code>\gcd(a,m)=1</code></span>），求解线性同余式，只需要找到 <span class="course-math" data-tex="\overline{a}=s" data-display="false"><code>\overline{a}=s</code></span>，其中 <span class="course-math" data-tex="1=sa+tm" data-display="false"><code>1=sa+tm</code></span>。

解的个数：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-9.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-9" width="443" height="296" loading="lazy" decoding="async">

### 中国剩余定理（The Chinese Remainder Theorem, CRT）
{: #section-12 }


若 <span class="course-math" data-tex="m_{1},m_{2},\dots,m_{n}" data-display="false"><code>m_{1},m_{2},\dots,m_{n}</code></span> **两两互素**，那么线性同余方程组
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;x\equiv a_{1}\pmod{m_{1}} \\&#10;x\equiv a_{2}\pmod{m_{2}} \\&#10;\vdots \\&#10;x\equiv a_{n}\pmod{m_{n}}&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;x\equiv a_{1}\pmod{m_{1}} \\&#10;x\equiv a_{2}\pmod{m_{2}} \\&#10;\vdots \\&#10;x\equiv a_{n}\pmod{m_{n}}&#10;\end{aligned}</code></span>
有模 <span class="course-math" data-tex="m=m_{1}m_{2}\dots m_{n}" data-display="false"><code>m=m_{1}m_{2}\dots m_{n}</code></span> 意义上的唯一解。
**证明。**
- 令 <span class="course-math" data-tex="M_{k}=m / m_{k}" data-display="false"><code>M_{k}=m / m_{k}</code></span>，那么有 <span class="course-math" data-tex="\gcd(M_{k},m_{k})=1" data-display="false"><code>\gcd(M_{k},m_{k})=1</code></span>。那么存在一个 <span class="course-math" data-tex="y_{k}" data-display="false"><code>y_{k}</code></span> 是 <span class="course-math" data-tex="M_{k}" data-display="false"><code>M_{k}</code></span> 模 <span class="course-math" data-tex="m_{k}" data-display="false"><code>m_{k}</code></span> 的逆，也就是
<span class="course-math course-math-display" data-tex="M_{k}y_{k}\equiv1\pmod{m_{k}}" data-display="true"><code>M_{k}y_{k}\equiv1\pmod{m_{k}}</code></span>
- 构造
<span class="course-math course-math-display" data-tex="x=\sum _{i=1}^{n}a_{i}M_{i}y_{i}" data-display="true"><code>x=\sum _{i=1}^{n}a_{i}M_{i}y_{i}</code></span>
- 那么 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 满足线性方程组，因为：
<span class="course-math course-math-display" data-tex="x\equiv a_{j}M_{j}y_{j}\equiv a_{j}\pmod{m_{j}}" data-display="true"><code>x\equiv a_{j}M_{j}y_{j}\equiv a_{j}\pmod{m_{j}}</code></span>
**唯一性。** 可以证明这个解是唯一的。


另一种求线性方程组的方式：Back Substitution / 回代。
- 例如，从 <span class="course-math" data-tex="x\equiv 2 \pmod{3}" data-display="false"><code>x\equiv 2 \pmod{3}</code></span> 得到 <span class="course-math" data-tex="x=3k+2" data-display="false"><code>x=3k+2</code></span>；从 <span class="course-math" data-tex="x\equiv3\pmod{5}" data-display="false"><code>x\equiv3\pmod{5}</code></span> ，代入得到 <span class="course-math" data-tex="3k+2\equiv3\pmod{5}" data-display="false"><code>3k+2\equiv3\pmod{5}</code></span>，进一步得到 <span class="course-math" data-tex="k\equiv2\pmod{5}" data-display="false"><code>k\equiv2\pmod{5}</code></span>，则 <span class="course-math" data-tex="k=5l+2" data-display="false"><code>k=5l+2</code></span>，再代入得 <span class="course-math" data-tex="x=15l+8" data-display="false"><code>x=15l+8</code></span>。以此类推。

若模数不互素：拆。例如方程组 <span class="course-math" data-tex="x\equiv8\pmod{15}, x\equiv2\pmod{21}" data-display="false"><code>x\equiv8\pmod{15}, x\equiv2\pmod{21}</code></span>，模数不互素，那么可以拆：
- 把 <span class="course-math" data-tex="x\equiv8 \pmod{15}" data-display="false"><code>x\equiv8 \pmod{15}</code></span> 写成 <span class="course-math" data-tex="x=15k+8" data-display="false"><code>x=15k+8</code></span>，那么可以拆 <span class="course-math" data-tex="x\equiv2 \pmod{3}" data-display="false"><code>x\equiv2 \pmod{3}</code></span>，<span class="course-math" data-tex="x\equiv3\pmod{5}" data-display="false"><code>x\equiv3\pmod{5}</code></span> 两个方程。
- 另一个方程也类似，

## 费马小定理
{: #section-13 }


**费马小定理（Fermat’s little theorem）**：若 <span class="course-math" data-tex="p\not\mid x" data-display="false"><code>p\not\mid x</code></span>，有
<span class="course-math course-math-display" data-tex="x^{p-1}\equiv1 \pmod{p}" data-display="true"><code>x^{p-1}\equiv1 \pmod{p}</code></span>
证明：只需证明：
<span class="course-math course-math-display" data-tex="\{ 1,2, \dots, p-1 \}=\{ x,2x, \dots , (p-1)x\quad\pmod{p} \}" data-display="true"><code>\{ 1,2, \dots, p-1 \}=\{ x,2x, \dots , (p-1)x\quad\pmod{p} \}</code></span>
那么就有：
<span class="course-math course-math-display" data-tex="1 \cdot2\cdot \dots \cdot (p-1)\equiv x \cdot 2x \cdot \dots \cdot (p-1)x \pmod{p}" data-display="true"><code>1 \cdot2\cdot \dots \cdot (p-1)\equiv x \cdot 2x \cdot \dots \cdot (p-1)x \pmod{p}</code></span>
那么由于 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 是素数， <span class="course-math" data-tex="2, 3, \dots, p-1" data-display="false"><code>2, 3, \dots, p-1</code></span> 都与 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 互素。于是可以除掉，就得到
<span class="course-math course-math-display" data-tex="x^{p-1}\equiv1 \pmod{p}" data-display="true"><code>x^{p-1}\equiv1 \pmod{p}</code></span>

### 欧拉定理
{: #section-14 }


欧拉函数（Euler's totient function）： <span class="course-math" data-tex="\phi(n)" data-display="false"><code>\phi(n)</code></span> ，表示 <span class="course-math" data-tex="\mathbb{Z}_{n}" data-display="false"><code>\mathbb{Z}_{n}</code></span> 中与 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 互素的数的个数：
<span class="course-math course-math-display" data-tex="\phi(n):= \# \{ x\in \mathbb{Z}_{n}\mid \gcd(x,n)=1 \}" data-display="true"><code>\phi(n):= \# \{ x\in \mathbb{Z}_{n}\mid \gcd(x,n)=1 \}</code></span>
- <span class="course-math" data-tex="\phi(p)=p-1" data-display="false"><code>\phi(p)=p-1</code></span>
- <span class="course-math" data-tex="\phi(pq)=(p-1)(q-1)" data-display="false"><code>\phi(pq)=(p-1)(q-1)</code></span>，其中 <span class="course-math" data-tex="p,q" data-display="false"><code>p,q</code></span> 为不同素数。（这是：<span class="course-math" data-tex="(pq-1) - (q-1)-(p-1)" data-display="false"><code>(pq-1) - (q-1)-(p-1)</code></span>）
- <span class="course-math" data-tex="\phi (p^{i})=p^{i}-p^{i-1}" data-display="false"><code>\phi (p^{i})=p^{i}-p^{i-1}</code></span>

**欧拉定理（Euler's Theorem）：** 若 <span class="course-math" data-tex="\gcd(x,n)=1" data-display="false"><code>\gcd(x,n)=1</code></span>，则
<span class="course-math course-math-display" data-tex="x^{\phi(n)}\equiv1 \pmod{n}" data-display="true"><code>x^{\phi(n)}\equiv1 \pmod{n}</code></span>


## 本原根 / 生成元（Primitive Root）
{: #section-15 }


模素数 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 的本原根是一个整数 <span class="course-math" data-tex="r\in \mathbb{Z}_{p}" data-display="false"><code>r\in \mathbb{Z}_{p}</code></span> 使得所有 <span class="course-math" data-tex="\mathbb{Z}_{p}" data-display="false"><code>\mathbb{Z}_{p}</code></span> 中的非零元素都是 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 的幂。
- 例如，<span class="course-math" data-tex="3" data-display="false"><code>3</code></span> 是 <span class="course-math" data-tex="\mathbb{Z}_{7}" data-display="false"><code>\mathbb{Z}_{7}</code></span> 的本原根。


## 汇总
{: #section-16 }



<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-10.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-10" width="1504" height="950" loading="lazy" decoding="async">
{% endraw %}
