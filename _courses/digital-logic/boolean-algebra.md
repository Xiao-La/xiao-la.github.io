---
title: "Boolean Algebra - 布尔代数"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-09-15T14:47:35+08:00"
updated_at: "2026-10-08T21:14:49+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/digital-logic/boolean-algebra/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Boolean Algebra - 布尔代数"
excerpt: "数字逻辑 · Boolean Algebra - 布尔代数"
---

{% raw %}

## Binary Logic
{: #section-1 }


逻辑门的真值表/符号/画图：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-6.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-6" width="479" height="307" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-7.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-7" width="483" height="365" loading="lazy" decoding="async">
逻辑门（AND, OR, NOT, NAND, NOR, XOR）。
0, 1; L, H; T, F。


## Boolean Algebra
{: #section-2 }


- 二进制变量组成的集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>
- 运算符集合：AND (<span class="course-math" data-tex="\cdot" data-display="false"><code>\cdot</code></span>), OR (+), NOT (')
- 一些公理和定理
公理和定理都保持对偶性（Duality）。
- 把 <span class="course-math" data-tex="\cdot" data-display="false"><code>\cdot</code></span> 替换为 <span class="course-math" data-tex="+" data-display="false"><code>+</code></span>，同时把 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 替换为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，等号仍然成立。
 <img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数" width="474" height="162" loading="lazy" decoding="async">
运算优先级
- 括号>NOT>AND>OR

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-1.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-1" width="473" height="258" loading="lazy" decoding="async">

这些定理可以用真值表或代数方法证明。

布尔函数（Boolean Functions）：一个布尔代数的表达式，可以用一个逻辑门组成的逻辑图表示。
- Literal：一个变量或它的补。
- Product Term：把 Literals 用 <span class="course-math" data-tex="\cdot" data-display="false"><code>\cdot</code></span> 连接。
- Sum Term：把 Literals 用 <span class="course-math" data-tex="+" data-display="false"><code>+</code></span> 连接。
每个布尔函数都有且只有一种真值表的表达方式，但有很多种代数表达方式，也就是多种逻辑门的实现方式。例如：
- <span class="course-math" data-tex="F_{1}=x&#x27;y&#x27;z+x&#x27;yz+xy&#x27;, F_{2}=xy&#x27;+x&#x27;z" data-display="false"><code>F_{1}=x&#x27;y&#x27;z+x&#x27;yz+xy&#x27;, F_{2}=xy&#x27;+x&#x27;z</code></span>，这两个函数是等价的，具有相同的真值表。
- <span class="course-math" data-tex="F_{2}" data-display="false"><code>F_{2}</code></span> 的 Literals 和 Terms 都更少，所以采用 <span class="course-math" data-tex="F_{2}" data-display="false"><code>F_{2}</code></span> 的电路更简洁更经济。

布尔函数 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 的补（Complement）<span class="course-math" data-tex="F&#x27;" data-display="false"><code>F&#x27;</code></span> ：
- 先取对偶式（Dual）：把 <span class="course-math" data-tex="\cdot" data-display="false"><code>\cdot</code></span> 与 <span class="course-math" data-tex="+" data-display="false"><code>+</code></span> 相互替换，把 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 和 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 相互替换；
- 再把每个 Literal 取反。
- 例如， <span class="course-math" data-tex="F=x&#x27;y&#x27;z+x&#x27;yz+xy&#x27;" data-display="false"><code>F=x&#x27;y&#x27;z+x&#x27;yz+xy&#x27;</code></span>，那么 <span class="course-math" data-tex="F&#x27;=(x+y+z&#x27;)(x+y&#x27;+z&#x27;)(x&#x27;+y)" data-display="false"><code>F&#x27;=(x+y+z&#x27;)(x+y&#x27;+z&#x27;)(x&#x27;+y)</code></span>。

- 最小项（Minterm）：每个变量恰好出现一次（原变量或其补）的 AND 项。
  - 例如，对两个变量 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> ，最小项： <span class="course-math" data-tex="x&#x27;y&#x27;,x&#x27;y,xy&#x27;,xy(m_{0}\sim m_{3})" data-display="false"><code>x&#x27;y&#x27;,x&#x27;y,xy&#x27;,xy(m_{0}\sim m_{3})</code></span>。 
- 最大项（Maxterm）：每个变量恰好出现一次（原变量或其补）的 OR 项。
  - 例如，对两个变量 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> ，最大项： <span class="course-math" data-tex="x+y,x+y&#x27;,x&#x27;+y,x&#x27;+y&#x27;(M_{0}\sim M_{3})" data-display="false"><code>x+y,x+y&#x27;,x&#x27;+y,x&#x27;+y&#x27;(M_{0}\sim M_{3})</code></span>。 
这个编号就是对应变量的十进制值。另外有 <span class="course-math" data-tex="M_{i}=m_{i}&#x27;" data-display="false"><code>M_{i}=m_{i}&#x27;</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-2.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-2" width="521" height="231" loading="lazy" decoding="async">
Standard Form（不唯一）
- Sum of product (sop) 例如 <span class="course-math" data-tex="F=y&#x27;+xy+x&#x27;yz&#x27;" data-display="false"><code>F=y&#x27;+xy+x&#x27;yz&#x27;</code></span>
- Product of sum (pos) 例如 <span class="course-math" data-tex="F=x(y&#x27;+z)(x&#x27;+y+z&#x27;)" data-display="false"><code>F=x(y&#x27;+z)(x&#x27;+y+z&#x27;)</code></span>

那么一个真值表可以表达成 Canonical Form（唯一）：
- Sum-of-minterms (som)。
- Product-of-maxterms (pom)。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-3.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-3" width="69" height="141" loading="lazy" decoding="async">
例如这个函数 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 可以写成：
- Som：<span class="course-math" data-tex="F=m_{1}+m_{3}+m_{6}+m_{7}=\sum(1,3,6,7)" data-display="false"><code>F=m_{1}+m_{3}+m_{6}+m_{7}=\sum(1,3,6,7)</code></span>
- Pom：<span class="course-math" data-tex="F=(x+y+z)(x+y&#x27;+z)(x&#x27;+y+z)(x&#x27;+y+z&#x27;)=M_{0}\cdot M_{2}\cdot M_{4}\cdot M_{5}=\prod(0,2,4,5)" data-display="false"><code>F=(x+y+z)(x+y&#x27;+z)(x&#x27;+y+z)(x&#x27;+y+z&#x27;)=M_{0}\cdot M_{2}\cdot M_{4}\cdot M_{5}=\prod(0,2,4,5)</code></span> 
把一个布尔函数写成 Canonical Form（Expand）：把每一项都变成含所有 variable 的形式
- 例： <span class="course-math" data-tex="F=A+B&#x27;C=A(B+B&#x27;)(C+C&#x27;)+(A+A&#x27;)B&#x27;C=\dots=\sum(1,4,5,6,7)" data-display="false"><code>F=A+B&#x27;C=A(B+B&#x27;)(C+C&#x27;)+(A+A&#x27;)B&#x27;C=\dots=\sum(1,4,5,6,7)</code></span>
- 例：<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-4.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-4" width="499" height="213" loading="lazy" decoding="async">

在所有 16 种二元布尔函数中，有 8 种是标准的逻辑门：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-5.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-5" width="345" height="216" loading="lazy" decoding="async">


## 卡诺图（Karnaugh Map, K-map）
{: #section-3 }


把真值表转换为方格，便于化简成 **minimum** sum of products 以减少逻辑门的数量。
二元：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-8.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-8" width="204" height="203" loading="lazy" decoding="async">
那么重叠的部分可以直接合并，即上图表示 <span class="course-math" data-tex="A+B" data-display="false"><code>A+B</code></span>。

三元：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-9.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-9" width="385" height="255" loading="lazy" decoding="async">
注意这里 <span class="course-math" data-tex="BC" data-display="false"><code>BC</code></span> 按照 <span class="course-math" data-tex="00,01,11,10" data-display="false"><code>00,01,11,10</code></span> 的顺序（即格雷码），保证相邻的方格只变化一位。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-12.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-12" width="302" height="233" loading="lazy" decoding="async">
有几个圈就对应几个 term，因此我们想要圈的数量越少越好（圈越大越好），重叠也越少越好。（圈住的方格数都是二的幂次）

四元：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-13.png' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-13" width="269" height="258" loading="lazy" decoding="async">

Implicant（蕴含）：让 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的 product term。
Prime implicant（PI, 质蕴含）：极大的圈。
Essential prime implicant（EPI, 基本质蕴含）：当 Minterm 只被一个 PI 覆盖。
那么我们优先圈 EPI。

**Don't Care Condition：** 在电路中有些位不涉及到输入输出，它们是 0 是 1 无所谓，所以卡诺图里面可以把它们用 X 表示代替 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 或 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。
{% endraw %}
