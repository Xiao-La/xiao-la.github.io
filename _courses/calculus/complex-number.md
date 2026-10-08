---
title: "Complex Number - 复数"
course_id: "calculus"
course_title: "高等数学（上）/（下）"
section: "上"
status: "completed"
created_at: "2025-11-18T17:40:33+08:00"
updated_at: "2026-10-08T21:09:39+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/calculus/complex-number/"
course_page: true
doc_type: "note"
description: "高等数学（上）/（下） · Complex Number - 复数"
excerpt: "高等数学（上）/（下） · Complex Number - 复数"
---

{% raw %}

## 复数的不同表达形式
{: #section-1 }


<span class="course-math course-math-display" data-tex="z=a+bi=re^{i\theta}=r(\cos  \theta+i\sin\theta)" data-display="true"><code>z=a+bi=re^{i\theta}=r(\cos  \theta+i\sin\theta)</code></span>

## 单位根
{: #section-2 }


方程 <span class="course-math course-math-display" data-tex="z^n=1" data-display="true"><code>z^n=1</code></span>
的根被称为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根 (The <span class="course-math" data-tex="n\text{th}" data-display="false"><code>n\text{th}</code></span> roots of unity)。
<span class="course-math course-math-display" data-tex="z=1^{1/n}=(e^{2k\pi i})^{1/n}" data-display="true"><code>z=1^{1/n}=(e^{2k\pi i})^{1/n}</code></span>
<span class="course-math course-math-display" data-tex="\implies z_{k}=e^{2\pi ki/n}, k=0, 1, 2,\dots n-1" data-display="true"><code>\implies z_{k}=e^{2\pi ki/n}, k=0, 1, 2,\dots n-1</code></span>
<span class="course-math" data-tex="k=1" data-display="false"><code>k=1</code></span> 给出主单位根（Principal <span class="course-math" data-tex="n\text{th}" data-display="false"><code>n\text{th}</code></span> root of unity）。
单位根有许多有用的性质，例如，若 <span class="course-math" data-tex="z,w" data-display="false"><code>z,w</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根，则：
- <span class="course-math" data-tex="zw" data-display="false"><code>zw</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根。
- <span class="course-math" data-tex="\frac{1}{z}" data-display="false"><code>\frac{1}{z}</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根。
- <span class="course-math" data-tex="\frac{z}{w}" data-display="false"><code>\frac{z}{w}</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根。
- <span class="course-math" data-tex="z^k" data-display="false"><code>z^k</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根。
另外，<span class="course-math" data-tex="n\ge2" data-display="false"><code>n\ge2</code></span> 时所有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根的和为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>（以下取 <span class="course-math" data-tex="z=e^{2\pi i/n}" data-display="false"><code>z=e^{2\pi i/n}</code></span>）：
<span class="course-math course-math-display" data-tex="1+z+z^2+\dots+z^{n-1}=\frac{1-z^n}{1-z}=0" data-display="true"><code>1+z+z^2+\dots+z^{n-1}=\frac{1-z^n}{1-z}=0</code></span>
所有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 次单位根的积：
<span class="course-math course-math-display" data-tex="1\times z^1 \times z^{2}\times\dots\times z^{n-1}=\begin{cases} (z^{n})^{(n-1)/2}=1, &amp; \text{when n is odd} \\ (z^{n/2})^{n-1}=-1, &amp;  \text{when n is even} \end{cases}" data-display="true"><code>1\times z^1 \times z^{2}\times\dots\times z^{n-1}=\begin{cases} (z^{n})^{(n-1)/2}=1, &amp; \text{when n is odd} \\ (z^{n/2})^{n-1}=-1, &amp;  \text{when n is even} \end{cases}</code></span>

## 代数基本定理
{: #section-3 }


代数基本定理（Fundamental Theorem of Algebra）：
- 每个次数为 <span class="course-math" data-tex="n\ge 1" data-display="false"><code>n\ge 1</code></span> 的复系数多项式可以完全分解为 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个一次因子：
   <span class="course-math course-math-display" data-tex="p(z)=a_n z^n+a_{n-1} z^{n-1}+\cdots+a_1 z+a_0,\quad a_n\neq 0,\ n\ge 1" data-display="true"><code>p(z)=a_n z^n+a_{n-1} z^{n-1}+\cdots+a_1 z+a_0,\quad a_n\neq 0,\ n\ge 1</code></span>
  <span class="course-math course-math-display" data-tex="\implies p(z)=a_n\prod_{k=1}^n (z-\lambda_k),\quad \lambda_k\in\mathbb{C}." data-display="true"><code>\implies p(z)=a_n\prod_{k=1}^n (z-\lambda_k),\quad \lambda_k\in\mathbb{C}.</code></span>
- 若系数为实数，则根要么为实数，要么成共轭复数成对出现；并且总根数（按重数计）恰为次数 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span>。

这里，若系数为实数，那么共轭复数成对出现，是因为 <span class="course-math" data-tex="p(z)=0\implies\overline{p(z)}= p(\bar{z})=0" data-display="false"><code>p(z)=0\implies\overline{p(z)}= p(\bar{z})=0</code></span>。

## 棣莫弗定理
{: #section-4 }


棣莫弗定理（De Moivre's Theorem）：

<span class="course-math course-math-display" data-tex="[\cos \phi +i \sin \phi]^{n}=\cos(n\phi)+i\sin(n\phi)" data-display="true"><code>[\cos \phi +i \sin \phi]^{n}=\cos(n\phi)+i\sin(n\phi)</code></span>
可以用来算出 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 倍角公式。
把上式中的 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span> 换成 <span class="course-math" data-tex="-\phi" data-display="false"><code>-\phi</code></span>，可以推出：
<span class="course-math course-math-display" data-tex="[\cos \phi-i\sin \phi]^{n}=\cos(n\phi)-i\sin(n\phi)" data-display="true"><code>[\cos \phi-i\sin \phi]^{n}=\cos(n\phi)-i\sin(n\phi)</code></span>
{% endraw %}
