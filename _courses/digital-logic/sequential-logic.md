---
title: "Sequential Logic - 时序逻辑"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-10-20T15:28:58+08:00"
updated_at: "2026-11-03T15:38:23+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/digital-logic/sequential-logic/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Sequential Logic - 时序逻辑"
excerpt: "数字逻辑 · Sequential Logic - 时序逻辑"
---

{% raw %}

时序逻辑相比于组合逻辑，就是：输出不仅取决于输入，还取决于电路当前的状态。那么就必须要有一个寄存的单元，把电路的当前状态存下来。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑" width="473" height="137" loading="lazy" decoding="async">
分为：
- 同步时序电路：依赖于离散的时间。
- 异步时序电路：依赖于每一个瞬间的状态。

同步时序电路需要一个时钟模块，输出只被时钟的脉冲影响。


## 锁存器（Latch）
{: #section-1 }



### SR Latch
{: #section-2 }


Set / Reset Latch 可以存 1 bit 的信号。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-1.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-1" width="468" height="144" loading="lazy" decoding="async">

两种可用的状态：
- Set：<span class="course-math" data-tex="Q=1,Q&#x27;=0" data-display="false"><code>Q=1,Q&#x27;=0</code></span>
- Reset: <span class="course-math" data-tex="Q=0,Q&#x27;=1" data-display="false"><code>Q=0,Q&#x27;=1</code></span>

分析：
- 若 <span class="course-math" data-tex="R=1,S=0" data-display="false"><code>R=1,S=0</code></span>，由于 NOR Gate 的性质，容易发现，会形成稳定状态 <span class="course-math" data-tex="Q=0,Q&#x27;=1" data-display="false"><code>Q=0,Q&#x27;=1</code></span>。
- 若 <span class="course-math" data-tex="R=0,S=1" data-display="false"><code>R=0,S=1</code></span>，由于 NOR Gate 的性质，容易发现，会形成稳定状态 <span class="course-math" data-tex="Q=1,Q&#x27;=0" data-display="false"><code>Q=1,Q&#x27;=0</code></span>。
- 若 <span class="course-math" data-tex="R=0,S=0" data-display="false"><code>R=0,S=0</code></span>。假设此时 <span class="course-math" data-tex="Q=0,Q&#x27;=1" data-display="false"><code>Q=0,Q&#x27;=1</code></span>，那么会发现电路状态不改变；假设此时 <span class="course-math" data-tex="Q=1,Q&#x27;=0" data-display="false"><code>Q=1,Q&#x27;=0</code></span>，那么会发现电路状态也不会改变。（会保持原来的状态）。
- 若 <span class="course-math" data-tex="R=1,S=1" data-display="false"><code>R=1,S=1</code></span>。发现此时 <span class="course-math" data-tex="Q=0,Q&#x27;=0" data-display="false"><code>Q=0,Q&#x27;=0</code></span>，我们**禁止**这种情况。

因此 SR Latch 的 function table 就是：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-2.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-2" width="393" height="222" loading="lazy" decoding="async">

时序图：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-3.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-3" width="396" height="170" loading="lazy" decoding="async">



### S'R' Latch
{: #section-3 }


这是一个 Low Active 的 Latch。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-4.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-4" width="429" height="195" loading="lazy" decoding="async">

进行分析可知，它的 function table 就是：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-5.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-5" width="475" height="366" loading="lazy" decoding="async">

这也就是把 SR Latch 的输入信号改成低电平有效。


### Clocked SR Latch
{: #section-4 }


用 Clock / En 信号来启用/禁用 一个 SR Latch。

电路图：只需要在一个 SR Latch 的基础上，把 S, R 信号 AND 上这个 使能信号 即可。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-6.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-6" width="411" height="108" loading="lazy" decoding="async">

Function Table:

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-7.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-7" width="399" height="222" loading="lazy" decoding="async">


### D Latch / Transparent Latch
{: #section-5 }


只保留一个输入信号 D，来保障送入 SR Latch 中的 S, R 是反向的；再用 Clock 信号来做 no change 的情况。最后的效果就是，C=0 则 Q 不变，C=1 则 Q 与 D 相同。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-8.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-8" width="587" height="175" loading="lazy" decoding="async">

简化图为：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-9.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-9" width="315" height="298" loading="lazy" decoding="async">


## Flip-Flop
{: #section-6 }


Latch 是对电平（Level）敏感的；而使用 flip-flop 就可以只对上升沿/下降沿（Edge）敏感。
想要延迟信号，用多个 Latch 串联是不行的；用多个 Flip-flop 串联就可以。

### D Flip-Flop（DFF）
{: #section-7 }


用两个 D Latch 来设计出一个 flip-flop：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-10.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-10" width="1438" height="432" loading="lazy" decoding="async">

这里 M 是 Master D Latch，对低电平敏感；S 是 Slave D Latch，对高电平敏感。

这就保证了：当 CLK=0 时，D 会透传到 P，但是 S 传不过去；当 CLK=1 时，D 传不到 P，而之前存的 P 会透传到 Q。因此，只在**上升沿**的瞬间，D 才会透传到 Q。其他情况 Q 都保持不变。
因此，Function Table 就是：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-11.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-11" width="369" height="211" loading="lazy" decoding="async">

Symbol：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-12.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-12" width="367" height="163" loading="lazy" decoding="async">

多个 FF 串联，就可以实现把一个信号延迟几个时间周期传播的效果：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-13.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-13" width="470" height="471" loading="lazy" decoding="async">
这里 X 的值就在第三个时间周期才被 Q3 得到。

也可以使用 3 个 SR Latch 实现 DFF ：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-14.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-14" width="487" height="409" loading="lazy" decoding="async">

用这个可以实现 **异步 Reset 的 DFF：**

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-15.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-15" width="2468" height="1326" loading="lazy" decoding="async">

也就是说，reset 信号会立即导致 reset。
而 **同步 Reset**，就只会在 clock 上升沿时检查 reset 信号是否被触发。


### 特性表（Characteristic Table）
{: #section-8 }


对于 FF，我们知道 Clock 信号不变的时候，输出的值是不变的；我们只关心上升沿的瞬间。因此，可以把 Function Table 进行简化，只看上升沿时 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 和 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span>，这里 D 是在第 t 个时间周期， Q 是在第 t+1 个时间周期 的关系：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-16.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-16" width="2140" height="518" loading="lazy" decoding="async">
这里就有 Characteristic Equation（特性方程 ）：
<span class="course-math course-math-display" data-tex="Q_{t+1}=D&#x27; \cdot 0+ D \cdot 1=D" data-display="true"><code>Q_{t+1}=D&#x27; \cdot 0+ D \cdot 1=D</code></span>

### J-K Flip-Flop
{: #section-9 }


Function Table:

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-17.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-17" width="338" height="231" loading="lazy" decoding="async">

写成特性表就是：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-18.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-18" width="518" height="300" loading="lazy" decoding="async">

从而，特性方程：
<span class="course-math course-math-display" data-tex="Q_{t+1}=J&#x27;K&#x27;Q_{t}+J&#x27;K\cdot0+JK&#x27;\cdot1+JKQ&#x27;_{t}=\dots=JQ_{t}&#x27;+K&#x27;Q_{t}" data-display="true"><code>Q_{t+1}=J&#x27;K&#x27;Q_{t}+J&#x27;K\cdot0+JK&#x27;\cdot1+JKQ&#x27;_{t}=\dots=JQ_{t}&#x27;+K&#x27;Q_{t}</code></span>

Symbol：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-19.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-19" width="347" height="296" loading="lazy" decoding="async">

JKFF 可以通过 DFF 实现。
这是因为，从特性方程上看：
<span class="course-math course-math-display" data-tex="Q_{t+1}=D=JQ_{t}&#x27;+K&#x27;Q_{t}" data-display="true"><code>Q_{t+1}=D=JQ_{t}&#x27;+K&#x27;Q_{t}</code></span>
那只需要把 <span class="course-math" data-tex="JQ_{t}&#x27;+K&#x27;Q_{t}" data-display="false"><code>JQ_{t}&#x27;+K&#x27;Q_{t}</code></span> 接到 DFF 的 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 上即可。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-20.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-20" width="1576" height="704" loading="lazy" decoding="async">


### T Flip-Flop
{: #section-10 }


T: Toggle. 功能就是，当 <span class="course-math" data-tex="T=0" data-display="false"><code>T=0</code></span> 时，上升沿处输出保持不变；当 <span class="course-math" data-tex="T=1" data-display="false"><code>T=1</code></span> 时，上升沿处输出取反。也就是说：
<span class="course-math course-math-display" data-tex="Q_{t+1}=T&#x27;Q_{t}+TQ&#x27;_{t}=T \oplus Q_{t}" data-display="true"><code>Q_{t+1}=T&#x27;Q_{t}+TQ&#x27;_{t}=T \oplus Q_{t}</code></span>
这可以用 DFF 实现，也可以用 JKFF 实现。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-21.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-21" width="2448" height="638" loading="lazy" decoding="async">

## 分析同步时序电路
{: #section-11 }


用 Flip-Flop 实现的同步时序电路：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-22.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-22" width="1226" height="376" loading="lazy" decoding="async">

一个 Flip-Flop 可以存 1 bit 的状态。

分析步骤：
- 推导 FF 的 input equation
- 推导 state & output equations
- 生成 state & output tables
- 生成 state diagram

例如这个电路：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-23.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-23" width="368" height="342" loading="lazy" decoding="async">
- FF 的 input equation：
<span class="course-math course-math-display" data-tex="D_{A}=Q_{A}x+Q_{B}x,\quad D_{B}=Q_{A}&#x27;x" data-display="true"><code>D_{A}=Q_{A}x+Q_{B}x,\quad D_{B}=Q_{A}&#x27;x</code></span>
- State equation：
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;&amp;Q_{A}(t+1)=D_{A}(t)=Q_{A}(t)x(t)+Q_{B}(t)x(t) \\&#10;&amp;Q_{B}(t+1)=D_{B}(t)=Q_{A}&#x27;(t)x(t)&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;&amp;Q_{A}(t+1)=D_{A}(t)=Q_{A}(t)x(t)+Q_{B}(t)x(t) \\&#10;&amp;Q_{B}(t+1)=D_{B}(t)=Q_{A}&#x27;(t)x(t)&#10;\end{aligned}</code></span>
- Output equation：
<span class="course-math course-math-display" data-tex="y(t)=(Q_{A}(t)+Q_{B}(t))x&#x27;(t)\leftrightarrow y=(Q_{A}+Q_{B})x&#x27;" data-display="true"><code>y(t)=(Q_{A}(t)+Q_{B}(t))x&#x27;(t)\leftrightarrow y=(Q_{A}+Q_{B})x&#x27;</code></span>
- 从而得到 state table：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-24.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-24" width="570" height="223" loading="lazy" decoding="async">
- 进一步可以画出 state diagram：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-25.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-25" width="399" height="305" loading="lazy" decoding="async">
这里每一个节点表示 <span class="course-math" data-tex="Q_{A},Q_{B}" data-display="false"><code>Q_{A},Q_{B}</code></span> 的值（也就是一个状态），一条边表示从一个状态到下一个状态，边上写这个状态转移发生时的 input / output。

其他例子：
- 用 JKFF 实现的电路：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-26.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-26" width="455" height="265" loading="lazy" decoding="async">

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-27.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-27" width="512" height="228" loading="lazy" decoding="async">
- 用 TFF 实现的电路
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-28.png' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-28" width="478" height="430" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-29.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-29" width="469" height="257" loading="lazy" decoding="async">


## 有限状态机（Finite State Machine）
{: #section-12 }


有两种模型：
- Moore FSM（输出只和当前状态有关）
- Mealy FSM（输出和当前状态以及输入有关）

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-30.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-30" width="490" height="312" loading="lazy" decoding="async">

可以从 state diagram 去理解：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-31.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-31" width="449" height="201" loading="lazy" decoding="async">


### 化简
{: #section-13 }


若有些状态在 state table 中对应的 next state 和 output 都一模一样，那么可以只保留其中一个，把表中用到 **去掉的状态** 的地方直接换成保留的那个就行。输出会是等效的，例如：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-32.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-32" width="1602" height="1114" loading="lazy" decoding="async">


### 赋值（Assignment）
{: #section-14 }


在上面的表里面，化简后有五种状态 <span class="course-math" data-tex="a,b,c,d,e" data-display="false"><code>a,b,c,d,e</code></span>，它们可以根据实际的用途进行具体的赋值。例如这样的三种：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Sequential%20Logic%20-%20%E6%97%B6%E5%BA%8F%E9%80%BB%E8%BE%91-33.webp' | relative_url }}{% raw %}" alt="Sequential Logic - 时序逻辑-33" width="459" height="336" loading="lazy" decoding="async">


## 设计时序电路
{: #section-15 }


也就是把分析步骤反过来。
1. Specification: design description or timing diagram
2. Formulation: develop state diagram
3. Generate state and output tables
4. Minimize States if necessary
5. Assign binary values to the state (encoding)
6. Derive state and output equations
7. Choose memory elements (DFFs, JKFFs, TFFs)
8. Derive simplified input equations and output equations
9. Draw logic schematic
{% endraw %}
