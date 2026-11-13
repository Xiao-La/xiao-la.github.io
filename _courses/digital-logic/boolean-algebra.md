---
title: "Boolean Algebra - 布尔代数"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-09-15T14:47:35+08:00"
updated_at: "2026-11-13T20:14:57+08:00"
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
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-6.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-6" width="479" height="293" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-7.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-7" width="483" height="349" loading="lazy" decoding="async">
逻辑门（AND, OR, NOT, NAND, NOR, XOR）。
0, 1; L, H; T, F。


## Boolean Algebra
{: #section-2 }


- 二进制变量组成的集合 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>
- 运算符集合：AND (<span class="course-math" data-tex="\cdot" data-display="false"><code>\cdot</code></span>), OR (+), NOT (')
- 一些公理和定理
公理和定理都保持对偶性（Duality）。
- 把 <span class="course-math" data-tex="\cdot" data-display="false"><code>\cdot</code></span> 替换为 <span class="course-math" data-tex="+" data-display="false"><code>+</code></span>，同时把 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 替换为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，等号仍然成立。

| #   | Theorem          | Dual form        | Name         |
| --- | ---------------- | ---------------- | ------------ |
| 1   | <span class="course-math" data-tex="x+0=x" data-display="false"><code>x+0=x</code></span>          | <span class="course-math" data-tex="x\cdot 1=x" data-display="false"><code>x\cdot 1=x</code></span>     | Identity     |
| 2   | <span class="course-math" data-tex="x+1=1" data-display="false"><code>x+1=1</code></span>          | <span class="course-math" data-tex="x\cdot 0=0" data-display="false"><code>x\cdot 0=0</code></span>     | Null Element |
| 3   | <span class="course-math" data-tex="x+x=x" data-display="false"><code>x+x=x</code></span>          | <span class="course-math" data-tex="x\cdot x=x" data-display="false"><code>x\cdot x=x</code></span>     | Idempotency  |
| 4   | <span class="course-math" data-tex="(x&#x27;)&#x27;=x" data-display="false"><code>(x&#x27;)&#x27;=x</code></span>        |                  | Involution   |
| 5   | <span class="course-math" data-tex="x+x&#x27;=1" data-display="false"><code>x+x&#x27;=1</code></span>         | <span class="course-math" data-tex="x\cdot x&#x27;=0" data-display="false"><code>x\cdot x&#x27;=0</code></span>    | Complements  |

运算优先级
- 括号>NOT>AND>OR

|  | Theorem | Dual form | Name |
| --- | --- | --- | --- |
| 6 | <span class="course-math" data-tex="xy = yx" data-display="false"><code>xy = yx</code></span> | <span class="course-math" data-tex="x + y = y + x" data-display="false"><code>x + y = y + x</code></span> | Commutativity |
| 7 | <span class="course-math" data-tex="(xy)z = x(yz)" data-display="false"><code>(xy)z = x(yz)</code></span> | <span class="course-math" data-tex="(x + y) + z = x + (y + z)" data-display="false"><code>(x + y) + z = x + (y + z)</code></span> | Associativity |
| 8 | <span class="course-math" data-tex="x(y + z) = xy + xz" data-display="false"><code>x(y + z) = xy + xz</code></span> | <span class="course-math" data-tex="x + yz = (x + y)(x + z)" data-display="false"><code>x + yz = (x + y)(x + z)</code></span> | Distributivity |
| 9 | <span class="course-math" data-tex="x + xy = x" data-display="false"><code>x + xy = x</code></span> | <span class="course-math" data-tex="x(x + y) = x" data-display="false"><code>x(x + y) = x</code></span> | Absorption |
| 10 | <span class="course-math" data-tex="xy + xy&#x27; = x" data-display="false"><code>xy + xy&#x27; = x</code></span> | <span class="course-math" data-tex="(x + y)(x + y&#x27;) = x" data-display="false"><code>(x + y)(x + y&#x27;) = x</code></span> | Combining |
| 11 | <span class="course-math" data-tex="(x + y&#x27;)y = xy" data-display="false"><code>(x + y&#x27;)y = xy</code></span> | <span class="course-math" data-tex="xy&#x27; + y = x + y" data-display="false"><code>xy&#x27; + y = x + y</code></span> | Simplification |
| 12 | <span class="course-math" data-tex="xy + x&#x27;z + yz" data-display="false"><code>xy + x&#x27;z + yz</code></span><br><span class="course-math" data-tex="= xy + x&#x27;z" data-display="false"><code>= xy + x&#x27;z</code></span> | <span class="course-math" data-tex="(x + y)(x&#x27; + z)(y + z)" data-display="false"><code>(x + y)(x&#x27; + z)(y + z)</code></span><br><span class="course-math" data-tex="= (x + y)(x&#x27; + z)" data-display="false"><code>= (x + y)(x&#x27; + z)</code></span> | Consensus |
| 13 | <span class="course-math" data-tex="(x + y)&#x27; = x&#x27;y&#x27;" data-display="false"><code>(x + y)&#x27; = x&#x27;y&#x27;</code></span> | <span class="course-math" data-tex="(xy)&#x27; = x&#x27; + y&#x27;" data-display="false"><code>(xy)&#x27; = x&#x27; + y&#x27;</code></span> | DeMorgan’s law |

Note: 8’s Dual differs from traditional algebra: OR (+) distributes over AND (•)

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

| <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> | <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> | <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> | Minterm Term | Minterm Designation | Maxterm Term | Maxterm Designation |
| --- | --- | --- | --- | --- | --- | --- |
| <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="x&#x27;y&#x27;z&#x27;" data-display="false"><code>x&#x27;y&#x27;z&#x27;</code></span> | <span class="course-math" data-tex="m_0" data-display="false"><code>m_0</code></span> | <span class="course-math" data-tex="x + y + z" data-display="false"><code>x + y + z</code></span> | <span class="course-math" data-tex="M_0" data-display="false"><code>M_0</code></span> |
| <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="x&#x27;y&#x27;z" data-display="false"><code>x&#x27;y&#x27;z</code></span> | <span class="course-math" data-tex="m_1" data-display="false"><code>m_1</code></span> | <span class="course-math" data-tex="x + y + z&#x27;" data-display="false"><code>x + y + z&#x27;</code></span> | <span class="course-math" data-tex="M_1" data-display="false"><code>M_1</code></span> |
| <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="x&#x27;yz&#x27;" data-display="false"><code>x&#x27;yz&#x27;</code></span> | <span class="course-math" data-tex="m_2" data-display="false"><code>m_2</code></span> | <span class="course-math" data-tex="x + y&#x27; + z" data-display="false"><code>x + y&#x27; + z</code></span> | <span class="course-math" data-tex="M_2" data-display="false"><code>M_2</code></span> |
| <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="x&#x27;yz" data-display="false"><code>x&#x27;yz</code></span> | <span class="course-math" data-tex="m_3" data-display="false"><code>m_3</code></span> | <span class="course-math" data-tex="x + y&#x27; + z&#x27;" data-display="false"><code>x + y&#x27; + z&#x27;</code></span> | <span class="course-math" data-tex="M_3" data-display="false"><code>M_3</code></span> |
| <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="xy&#x27;z&#x27;" data-display="false"><code>xy&#x27;z&#x27;</code></span> | <span class="course-math" data-tex="m_4" data-display="false"><code>m_4</code></span> | <span class="course-math" data-tex="x&#x27; + y + z" data-display="false"><code>x&#x27; + y + z</code></span> | <span class="course-math" data-tex="M_4" data-display="false"><code>M_4</code></span> |
| <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="xy&#x27;z" data-display="false"><code>xy&#x27;z</code></span> | <span class="course-math" data-tex="m_5" data-display="false"><code>m_5</code></span> | <span class="course-math" data-tex="x&#x27; + y + z&#x27;" data-display="false"><code>x&#x27; + y + z&#x27;</code></span> | <span class="course-math" data-tex="M_5" data-display="false"><code>M_5</code></span> |
| <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> | <span class="course-math" data-tex="xyz&#x27;" data-display="false"><code>xyz&#x27;</code></span> | <span class="course-math" data-tex="m_6" data-display="false"><code>m_6</code></span> | <span class="course-math" data-tex="x&#x27; + y&#x27; + z" data-display="false"><code>x&#x27; + y&#x27; + z</code></span> | <span class="course-math" data-tex="M_6" data-display="false"><code>M_6</code></span> |
| <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> | <span class="course-math" data-tex="xyz" data-display="false"><code>xyz</code></span> | <span class="course-math" data-tex="m_7" data-display="false"><code>m_7</code></span> | <span class="course-math" data-tex="x&#x27; + y&#x27; + z&#x27;" data-display="false"><code>x&#x27; + y&#x27; + z&#x27;</code></span> | <span class="course-math" data-tex="M_7" data-display="false"><code>M_7</code></span> |

Standard Form（不唯一）
- Sum of product (sop) 例如 <span class="course-math" data-tex="F=y&#x27;+xy+x&#x27;yz&#x27;" data-display="false"><code>F=y&#x27;+xy+x&#x27;yz&#x27;</code></span>
- Product of sum (pos) 例如 <span class="course-math" data-tex="F=x(y&#x27;+z)(x&#x27;+y+z&#x27;)" data-display="false"><code>F=x(y&#x27;+z)(x&#x27;+y+z&#x27;)</code></span>

那么一个真值表可以表达成 Canonical Form（唯一）：
- Sum-of-minterms (som)。
- Product-of-maxterms (pom)。

| <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> | <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> | <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> | <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

例如这个函数 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 可以写成：
- Som：<span class="course-math" data-tex="F=m_{1}+m_{3}+m_{6}+m_{7}=\sum(1,3,6,7)" data-display="false"><code>F=m_{1}+m_{3}+m_{6}+m_{7}=\sum(1,3,6,7)</code></span>
- Pom：<span class="course-math" data-tex="F=(x+y+z)(x+y&#x27;+z)(x&#x27;+y+z)(x&#x27;+y+z&#x27;)=M_{0}\cdot M_{2}\cdot M_{4}\cdot M_{5}=\prod(0,2,4,5)" data-display="false"><code>F=(x+y+z)(x+y&#x27;+z)(x&#x27;+y+z)(x&#x27;+y+z&#x27;)=M_{0}\cdot M_{2}\cdot M_{4}\cdot M_{5}=\prod(0,2,4,5)</code></span> 
把一个布尔函数写成 Canonical Form（Expand）：把每一项都变成含所有 variable 的形式
- 例： <span class="course-math" data-tex="F=A+B&#x27;C=A(B+B&#x27;)(C+C&#x27;)+(A+A&#x27;)B&#x27;C=\dots=\sum(1,4,5,6,7)" data-display="false"><code>F=A+B&#x27;C=A(B+B&#x27;)(C+C&#x27;)+(A+A&#x27;)B&#x27;C=\dots=\sum(1,4,5,6,7)</code></span>
- 例：<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-4.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-4" width="462" height="213" loading="lazy" decoding="async">

在所有 16 种二元布尔函数中，有 8 种是标准的逻辑门：

| 名称 | 函数 |
| --- | --- |
| complement (inverter) | <span class="course-math" data-tex="F_{12}=x&#x27;" data-display="false"><code>F_{12}=x&#x27;</code></span> |
| transfer (buffer) | <span class="course-math" data-tex="F_3=x" data-display="false"><code>F_3=x</code></span> |
| AND | <span class="course-math" data-tex="F_1=xy" data-display="false"><code>F_1=xy</code></span> |
| OR | <span class="course-math" data-tex="F_7=x+y" data-display="false"><code>F_7=x+y</code></span> |
| NAND | <span class="course-math" data-tex="F_{14}=(xy)&#x27;" data-display="false"><code>F_{14}=(xy)&#x27;</code></span> |
| NOR | <span class="course-math" data-tex="F_8=(x+y)&#x27;" data-display="false"><code>F_8=(x+y)&#x27;</code></span> |
| XOR | <span class="course-math" data-tex="F_6=x\oplus y" data-display="false"><code>F_6=x\oplus y</code></span> |
| equivalence (XNOR) | <span class="course-math" data-tex="F_9=(x\oplus y)&#x27;" data-display="false"><code>F_9=(x\oplus y)&#x27;</code></span> |



## 卡诺图（Karnaugh Map, K-map）
{: #section-3 }


把真值表转换为方格，便于化简成 **minimum** sum of products 以减少逻辑门的数量。
二元：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-8.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-8" width="168" height="169" loading="lazy" decoding="async">
那么重叠的部分可以直接合并，即上图表示 <span class="course-math" data-tex="A+B" data-display="false"><code>A+B</code></span>。

三元：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-9.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-9" width="298" height="215" loading="lazy" decoding="async">
注意这里 <span class="course-math" data-tex="BC" data-display="false"><code>BC</code></span> 按照 <span class="course-math" data-tex="00,01,11,10" data-display="false"><code>00,01,11,10</code></span> 的顺序（即格雷码），保证相邻的方格只变化一位。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-12.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-12" width="274" height="232" loading="lazy" decoding="async">
有几个圈就对应几个 term，因此我们想要圈的数量越少越好（圈越大越好），重叠也越少越好。（圈住的方格数都是二的幂次）

四元：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Boolean%20Algebra%20-%20%E5%B8%83%E5%B0%94%E4%BB%A3%E6%95%B0-13.webp' | relative_url }}{% raw %}" alt="Boolean Algebra - 布尔代数-13" width="206" height="208" loading="lazy" decoding="async">

Implicant（蕴含）：让 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的 product term。
Prime implicant（PI, 质蕴含）：极大的圈。
Essential prime implicant（EPI, 基本质蕴含）：当 Minterm 只被一个 PI 覆盖。
那么我们优先圈 EPI。

**Don't Care Condition：** 在电路中有些位不涉及到输入输出，它们是 0 是 1 无所谓，所以卡诺图里面可以把它们用 X 表示代替 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 或 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。
{% endraw %}
