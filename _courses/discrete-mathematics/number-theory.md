---
title: "Number Theory - 数论"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-10-12T15:33:52+08:00"
updated_at: "2026-10-14T21:52:12+08:00"
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


唯一分解定理 / 算术基本定理：每个大于 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的整数都可以唯一的写成一个素数，或不减的至少两个素数的乘积。

若 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 是合数，则存在一个 <span class="course-math" data-tex="\leq \sqrt{n}" data-display="false"><code>\leq \sqrt{n}</code></span> 的素因子（prime divisor）。

<span class="course-math" data-tex="\gcd(a,b)" data-display="false"><code>\gcd(a,b)</code></span>：最大公因数。
<span class="course-math" data-tex="\operatorname{lcm}(a,b)" data-display="false"><code>\operatorname{lcm}(a,b)</code></span>：最小公倍数。
若把 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 用算术基本定理分解了，那么
<span class="course-math course-math-display" data-tex="\gcd(a,b)=p_{1}^{\min(a_{1},b_{1})}p_{2}^{\min(a_{2},b_{2})}\dots p_{n}^{\min(a_{n},b_{n})}" data-display="true"><code>\gcd(a,b)=p_{1}^{\min(a_{1},b_{1})}p_{2}^{\min(a_{2},b_{2})}\dots p_{n}^{\min(a_{n},b_{n})}</code></span>
<span class="course-math course-math-display" data-tex="\operatorname{lcm}(a,b)=p_{1}^{\max(a_{1},b_{1})}p_{2}^{\max(a_{2},b_{2})}\dots p_{n}^{\max(a_{n},b_{n})}" data-display="true"><code>\operatorname{lcm}(a,b)=p_{1}^{\max(a_{1},b_{1})}p_{2}^{\max(a_{2},b_{2})}\dots p_{n}^{\max(a_{n},b_{n})}</code></span>

### 欧几里得算法（辗转相除法）
{: #section-7 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Theory%20-%20%E6%95%B0%E8%AE%BA-7.png' | relative_url }}{% raw %}" alt="Number Theory - 数论-7" width="366" height="220" loading="lazy" decoding="async">

欧几里得算法的时间复杂度是 <span class="course-math" data-tex="O(\log b)" data-display="false"><code>O(\log b)</code></span>。

欧几里得算法的正确性依赖于这个引理：
<span class="course-math course-math-display" data-tex="a=bq+r\to\gcd(a,b)=\gcd(b,r)" data-display="true"><code>a=bq+r\to\gcd(a,b)=\gcd(b,r)</code></span>
证明：令 <span class="course-math" data-tex="D_{n}" data-display="false"><code>D_{n}</code></span> 表示 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 的所有因子组成的集合，那么只需证明
<span class="course-math course-math-display" data-tex="D_{a}\cap D_{b}=D_{b}\cap D_{r}" data-display="true"><code>D_{a}\cap D_{b}=D_{b}\cap D_{r}</code></span>
这很容易说明：
- 若 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 是 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 的因数，那它也是 <span class="course-math" data-tex="r=a-bq" data-display="false"><code>r=a-bq</code></span> 的因数。
- 若 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 是 <span class="course-math" data-tex="b,r" data-display="false"><code>b,r</code></span> 的因数，那它也是 <span class="course-math" data-tex="a=bq+r" data-display="false"><code>a=bq+r</code></span> 的因数。
{% endraw %}
