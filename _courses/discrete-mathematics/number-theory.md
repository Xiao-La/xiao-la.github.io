---
title: "Number Theory - 数论"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-10-12T15:33:52+08:00"
updated_at: "2026-10-13T11:25:11+08:00"
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

 **整除（Divisibility）。** 对整数 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span>，其中 <span class="course-math" data-tex="a\neq 0" data-display="false"><code>a\neq 0</code></span>，若存在整数 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 使得 <span class="course-math" data-tex="b=ak" data-display="false"><code>b=ak</code></span>，则称 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 整除 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span>，记作 <span class="course-math" data-tex="a\mid b" data-display="false"><code>a\mid b</code></span>。

<span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 到 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 中能被 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 整除的数一共有 <span class="course-math" data-tex="\lfloor n / d \rfloor" data-display="false"><code>\lfloor n / d \rfloor</code></span> 个。（<span class="course-math" data-tex="0&lt;kd\leq{}n" data-display="false"><code>0&lt;kd\leq{}n</code></span>）。

以下 <span class="course-math" data-tex="a,b,c" data-display="false"><code>a,b,c</code></span> 均为整数。性质：
- <span class="course-math" data-tex="a\mid b,a\mid c\to{}a\mid (b+c)" data-display="false"><code>a\mid b,a\mid c\to{}a\mid (b+c)</code></span>
- <span class="course-math" data-tex="a\mid b\to a\mid bc" data-display="false"><code>a\mid b\to a\mid bc</code></span>
- <span class="course-math" data-tex="a\mid b,b\mid c\to{}a\mid c" data-display="false"><code>a\mid b,b\mid c\to{}a\mid c</code></span>
结合这些性质，推出：
<span class="course-math course-math-display" data-tex="a\mid b,a\mid c\to{}a\mid mb+nc" data-display="true"><code>a\mid b,a\mid c\to{}a\mid mb+nc</code></span>
（其中 <span class="course-math" data-tex="m,n" data-display="false"><code>m,n</code></span> 为整数：整除两个数，那么也整除它们的整数线性组合）

标准除法：对整数 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 和正整数 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span>，存在唯一的整数 <span class="course-math" data-tex="q,r" data-display="false"><code>q,r</code></span> 其中 <span class="course-math" data-tex="0\leq{}r&lt;d" data-display="false"><code>0\leq{}r&lt;d</code></span>，使得 <span class="course-math" data-tex="a=dq+r" data-display="false"><code>a=dq+r</code></span>。<span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 是除数（divisor），<span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 是商（quotient），<span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 是被除数（dividend），<span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 是余数（remainder）。
- 记 <span class="course-math" data-tex="q=a \,\mathrm{ div}\,d" data-display="false"><code>q=a \,\mathrm{ div}\,d</code></span>，<span class="course-math" data-tex="r=a\bmod d" data-display="false"><code>r=a\bmod d</code></span>

同余（Congruent）：设 <span class="course-math" data-tex="a,b" data-display="false"><code>a,b</code></span> 为整数，<span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 为正整数。若 <span class="course-math" data-tex="m \mid a-b" data-display="false"><code>m \mid a-b</code></span>，那么 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 与 <span class="course-math" data-tex="b" data-display="false"><code>b</code></span> 模（modulo） <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 同余，记作
<span class="course-math course-math-display" data-tex="a\equiv{}b\pmod{m}" data-display="true"><code>a\equiv{}b\pmod{m}</code></span>
这里 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 叫做模数（modulus）。
由定义：
<span class="course-math course-math-display" data-tex="a\equiv{}b\pmod{m}\Leftrightarrow{} \exists k\in\mathbb{Z},a=b+km" data-display="true"><code>a\equiv{}b\pmod{m}\Leftrightarrow{} \exists k\in\mathbb{Z},a=b+km</code></span>
也可证：
<span class="course-math course-math-display" data-tex="a\equiv{}b\pmod{m}\Leftrightarrow{} a\bmod m=b\bmod m" data-display="true"><code>a\equiv{}b\pmod{m}\Leftrightarrow{} a\bmod m=b\bmod m</code></span>
若 <span class="course-math" data-tex="a\equiv{}b \pmod{m}" data-display="false"><code>a\equiv{}b \pmod{m}</code></span> 和 <span class="course-math" data-tex="c\equiv{}d \pmod{m}" data-display="false"><code>c\equiv{}d \pmod{m}</code></span>，那么有
<span class="course-math course-math-display" data-tex="a+c\equiv{}b+d \pmod{m}" data-display="true"><code>a+c\equiv{}b+d \pmod{m}</code></span>
<span class="course-math course-math-display" data-tex="ac\equiv{}bd\pmod{m}" data-display="true"><code>ac\equiv{}bd\pmod{m}</code></span>
{% endraw %}
