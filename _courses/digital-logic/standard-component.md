---
title: "Standard Component - 标准组件"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-10-13T15:24:29+08:00"
updated_at: "2026-11-13T20:14:57+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/digital-logic/standard-component/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Standard Component - 标准组件"
excerpt: "数字逻辑 · Standard Component - 标准组件"
---

{% raw %}


## 译码器（Decoder）
{: #section-1 }



**One-hot Representation.** 用 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个 bit 的比特串表示 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个元素，每串都只有一个 bit 为 1，其他 bit 为 0（或是反过来）。

例如： **3-to-8-Line Decoder.**

| <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> | <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> | <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> | <span class="course-math" data-tex="D_0" data-display="false"><code>D_0</code></span> | <span class="course-math" data-tex="D_1" data-display="false"><code>D_1</code></span> | <span class="course-math" data-tex="D_2" data-display="false"><code>D_2</code></span> | <span class="course-math" data-tex="D_3" data-display="false"><code>D_3</code></span> | <span class="course-math" data-tex="D_4" data-display="false"><code>D_4</code></span> | <span class="course-math" data-tex="D_5" data-display="false"><code>D_5</code></span> | <span class="course-math" data-tex="D_6" data-display="false"><code>D_6</code></span> | <span class="course-math" data-tex="D_7" data-display="false"><code>D_7</code></span> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

可以用框图来省略 decoder 内部的内容。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-1.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-1" width="621" height="370" loading="lazy" decoding="async">
这种 decoder 实际上生成了所有的 minterm。把它们连出来可以造出 SOM 形式的输出。

其他 decoder 的例子：
- BCD 码翻译到数码管的七段信号。
- 地址译码。

例：一个 decoder 可以得到 minterm 的取反，那对 <span class="course-math" data-tex="F=\sum(0,1,2,5,6)" data-display="false"><code>F=\sum(0,1,2,5,6)</code></span>，我们可以：
- <span class="course-math" data-tex="F=(F&#x27;)&#x27;=((m_{0}+m_{1}+m_{2}+m_{5}+m_{6})&#x27;)&#x27;=(m_{0}&#x27;\cdot m_{1}&#x27;\cdot m_{2}&#x27;\cdot m_{5}&#x27;\cdot m_{6}&#x27;)&#x27;" data-display="false"><code>F=(F&#x27;)&#x27;=((m_{0}+m_{1}+m_{2}+m_{5}+m_{6})&#x27;)&#x27;=(m_{0}&#x27;\cdot m_{1}&#x27;\cdot m_{2}&#x27;\cdot m_{5}&#x27;\cdot m_{6}&#x27;)&#x27;</code></span>，那么只需要接对应的信号出来，做一个 NAND gate 即可。
- <span class="course-math" data-tex="F=\prod (3,4,7)=m_{3}&#x27;\cdot m_{4}&#x27;\cdot m_{7}&#x27;" data-display="false"><code>F=\prod (3,4,7)=m_{3}&#x27;\cdot m_{4}&#x27;\cdot m_{7}&#x27;</code></span> ，选出对应的信号，做一个 AND gate 即可。

使能信号 Decoder (Enable)：有一个 Enable 信号，控制电路是否生效。
反向的 Enable（Active Low）

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-2.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-2" width="675" height="147" loading="lazy" decoding="async">

两个 3x8 decoder（带 enable 信号）可以拼成一个 4x16 decoder：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-3.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-3" width="685" height="407" loading="lazy" decoding="async">
这里通过 <span class="course-math" data-tex="w" data-display="false"><code>w</code></span> 控制使能信号：<span class="course-math" data-tex="w=0" data-display="false"><code>w=0</code></span> 时上面的 decoder 使能，<span class="course-math" data-tex="w=1" data-display="false"><code>w=1</code></span> 时下面的 decoder 使能。

其他：BCD-to-7-Segment Display Decoder


## 多路选择器（Multiplexers, MUX)
{: #section-2 }


MUX 从许多的（通常是 <span class="course-math" data-tex="2^{n}" data-display="false"><code>2^{n}</code></span>）输入信号中，根据 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 位的选择信号 S 来选择其中的 1 个，送到一个单个的输出信号。
例如一个 2:1 MUX：

Function table

| S   | Y     |
| --- | ----- |
| 0   | <span class="course-math" data-tex="I_0" data-display="false"><code>I_0</code></span> |
| 1   | <span class="course-math" data-tex="I_1" data-display="false"><code>I_1</code></span> |

Logic equation
<span class="course-math" data-tex="Y = S&#x27;I_0 + SI_1" data-display="false"><code>Y = S&#x27;I_0 + SI_1</code></span>

例如一个 4:1 MUX：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-5.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-5" width="140" height="378" loading="lazy" decoding="async">
具体实现上，生成选择信号的就是 Decoder。所以可以看成：
- MUX = Decoder + OR gate

MUX 可以用来实现某个真值表。例如要实现 AND gate：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-6.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-6" width="400" height="210" loading="lazy" decoding="async">

只需要把输入信号当成选择信号，然后把 MUX 的输入变成常量，表示真值表的对应行。
一种更简单的实现方法，只需要用 2:1 MUX：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-7.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-7" width="423" height="136" loading="lazy" decoding="async">
类似的，一个 3 输入的真值表，也可以从 8:1 MUX 化简成 4:1 MUX 来实现。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-8.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-8" width="426" height="200" loading="lazy" decoding="async">
如果再化简呢？用 2:1 MUX，也可以实现：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-9.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-9" width="391" height="184" loading="lazy" decoding="async">

另一方面，也可以用小的 MUX 去直接实现更宽的 MUX。例如下图中用 3 个 2:1 MUX 实现了一个 4:1 MUX。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6-10.webp' | relative_url }}{% raw %}" alt="Standard Component - 标准组件-10" width="457" height="208" loading="lazy" decoding="async">


## 编码器（Encoder）
{: #section-3 }


把 one-hot representation 转换为二进制。然而这里的问题就是，如果输入不合法，也就是说，不止一个信号为 1，该如何处理？我们使用 Priority Encoder：

| <span class="course-math" data-tex="D_0" data-display="false"><code>D_0</code></span> | <span class="course-math" data-tex="D_1" data-display="false"><code>D_1</code></span> | <span class="course-math" data-tex="D_2" data-display="false"><code>D_2</code></span> | <span class="course-math" data-tex="D_3" data-display="false"><code>D_3</code></span> | <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> | <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> | <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | X | X | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| X | 1 | 0 | 0 | 0 | 1 | 1 |
| X | X | 1 | 0 | 1 | 0 | 1 |
| X | X | X | 1 | 1 | 1 | 1 |

<span class="course-math" data-tex="V = D_0 + D_1 + D_2 + D_3" data-display="false"><code>V = D_0 + D_1 + D_2 + D_3</code></span>

令 <span class="course-math" data-tex="D_{3}" data-display="false"><code>D_{3}</code></span> 具有最高的 priority，也就是说，只要 <span class="course-math" data-tex="D_{3}" data-display="false"><code>D_{3}</code></span> 为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，输出就是 <span class="course-math" data-tex="3" data-display="false"><code>3</code></span>。<span class="course-math" data-tex="D_{3}" data-display="false"><code>D_{3}</code></span> 为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 且 <span class="course-math" data-tex="D_{2}" data-display="false"><code>D_{2}</code></span> 为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 时，输出就是 <span class="course-math" data-tex="2" data-display="false"><code>2</code></span>，以此类推。
写出这样的真值表之后，可以用卡诺图来找到对应的 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span> 的表达式。
{% endraw %}
