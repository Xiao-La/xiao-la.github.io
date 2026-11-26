---
title: "Standard Component 2 - 标准组件（时序电路）"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-11-17T14:28:13+08:00"
updated_at: "2026-11-26T17:46:44+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/digital-logic/standard-component-2/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Standard Component 2 - 标准组件（时序电路）"
excerpt: "数字逻辑 · Standard Component 2 - 标准组件（时序电路）"
---

{% raw %}


## 寄存器（Register）
{: #section-1 }


种类：
- SISO（Serial-in to Serial-out）
- SIPO（Serial-in to Parallel-out）
- PISO（Parallel-in to Serial-out）
- PIPO（Parallel-in to Parallel-out）
方向：
- 左移位（Left shift）
- 右移位（Right shift）
- 旋转（Rotate left/right）
- 双向（Bidirectional）
也有通用寄存器（Universal shift register）
可以用 FF 来实现，所有的 FF 都由同一个时钟信号驱动。

4-bit SISO Register：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）" width="623" height="168" loading="lazy" decoding="async">数据会在每一个时钟周期往右传递一位。

4-bit PISO Register：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-1.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-1" width="574" height="235" loading="lazy" decoding="async">
4-bit PIPO Register：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-2.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-2" width="527" height="187" loading="lazy" decoding="async">但是这种实现方法，会让输出在时钟上升沿始终与输入同步。为了实现 load 的功能，可以使用多路选择器，把 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 再接回 FF 的输入端口，实现用一个 load 信号来控制是透传还是维持：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-3.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-3" width="515" height="315" loading="lazy" decoding="async">
Universal shift register：可以双方向移位，以及并行 load/out。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-4.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-4" width="502" height="201" loading="lazy" decoding="async">具体实现：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-5.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-5" width="423" height="312" loading="lazy" decoding="async">
Serial to Parallel Converter：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-6.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-6" width="498" height="260" loading="lazy" decoding="async">这里 SIPO 的时钟要更快。


## 序列发生器（Sequence Generator）
{: #section-2 }


<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个 FF 可以生成一个长度 <span class="course-math" data-tex="N\leq2 ^{n}" data-display="false"><code>N\leq2 ^{n}</code></span> 的序列。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-7.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-7" width="538" height="178" loading="lazy" decoding="async">要不停生成某个序列，就需要去设计上图中的组合电路。这就需要我们列出真值表。
例如，要生成序列 10011，需要 3 个 FF，因为 <span class="course-math" data-tex="5\leq2^{3}" data-display="false"><code>5\leq2^{3}</code></span>。于是可以列出 input Z 与 <span class="course-math" data-tex="Q_{0},Q_{1},Q_{2}" data-display="false"><code>Q_{0},Q_{1},Q_{2}</code></span> 的真值表，从而得到表达式 <span class="course-math" data-tex="Z=(Q_{1}Q_{2})&#x27;" data-display="false"><code>Z=(Q_{1}Q_{2})&#x27;</code></span>，最后完成整个序列生成器。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-8.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-8" width="890" height="330" loading="lazy" decoding="async">再比如，要生成 110101，按同样的方法画真值表，会发现有同样的两个状态，对应不同的次态。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-9.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-9" width="291" height="241" loading="lazy" decoding="async">因此，三个 FF 是不够的，需要四个。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-10.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-10" width="761" height="403" loading="lazy" decoding="async">可以用来做分频器，比如 11000 的信号对应“五分频”，用于把时钟周期变成原来的五倍，占空比为 <span class="course-math" data-tex="2 / 5=40\%" data-display="false"><code>2 / 5=40\%</code></span>。


## 计数器（Counter）
{: #section-3 }



### 异步计数器（Asynchronous Counters）
{: #section-4 }


也可以叫 串行/涟漪（Serial/Ripple） 计数器。低位的进位去触发高位的变化，所以变化从低位传递到高位时，会有逐级累积的延迟。

4-bit Binary Ripple Counter：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-11.png' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-11" width="194" height="528" loading="lazy" decoding="async"><img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-12.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-12" width="506" height="222" loading="lazy" decoding="async">

这个东西的原理：最低位每个时间周期反转一次；当最低位 <span class="course-math" data-tex="A_{0}" data-display="false"><code>A_{0}</code></span> 从 1 变化到 0 的时候，<span class="course-math" data-tex="A_{1}" data-display="false"><code>A_{1}</code></span> 就需要发生反转（见真值表，这也就是发生了进位），因此把 <span class="course-math" data-tex="A_{0}" data-display="false"><code>A_{0}</code></span> 作为 <span class="course-math" data-tex="A_{1}" data-display="false"><code>A_{1}</code></span> 的 DFF 的时钟输入即可，在 <span class="course-math" data-tex="A_{0}" data-display="false"><code>A_{0}</code></span> 的下降沿触发 <span class="course-math" data-tex="A_{1}" data-display="false"><code>A_{1}</code></span> 的 DFF，以此类推。
类似的可以用 JKFF 实现 BCD Counter。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-13.png' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-13" width="564" height="370" loading="lazy" decoding="async"><img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-14.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-14" width="604" height="190" loading="lazy" decoding="async">

### 同步计数器（Synchronous Binary Counters）
{: #section-5 }


4-bit Synchronous Binary Counter：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-15.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-15" width="340" height="602" loading="lazy" decoding="async">
也可以做 Count Up / Count Down:<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-16.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-16" width="449" height="276" loading="lazy" decoding="async">其他：
- Ring Counter：循环的 Shift Register。这个可以代替我们用 2 bit counter + decoder （先按二进制计数，再 decode 成独热码）的效果
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-17.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-17" width="597" height="231" loading="lazy" decoding="async">
- Johnson Counter：把上面的 Ring Counter 改成：把最右边的取反接到最左边，循环向右移位。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-18.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-18" width="559" height="300" loading="lazy" decoding="async">这样我们就用 4 个 FF 产生了八种可以区分的状态。我们可以通过一些 AND GATE 把它转化为独热码的形式：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Standard%20Component%202%20-%20%E6%A0%87%E5%87%86%E7%BB%84%E4%BB%B6%EF%BC%88%E6%97%B6%E5%BA%8F%E7%94%B5%E8%B7%AF%EF%BC%89-19.webp' | relative_url }}{% raw %}" alt="Standard Component 2 - 标准组件（时序电路）-19" width="482" height="301" loading="lazy" decoding="async">

### 设计同步计数器
{: #section-6 }


和设计时序电路的方法是一样的：
1. Specification: design description or timing diagram
2. Formulation: develop state diagram
3. Generate next-state table in form of count sequence
4. Choose type of Flip-Flop
5. Derive simplified excitation equations of FFs
6. Draw logic diagram

当状态的个数不恰好是 2 的幂的时候，会有一些 unused state。理论上这些可以当做 X 来处理，照常画卡诺图，做出最简的电路。但是有时候这样会导致，如果不小心信号错误，进入了 unused state，就会一直卡在 unused state，永远出不来，这就是 lock out problem。（也可能自然就不会发生，这就是 self-correcting 的电路）解决办法就是，发生这种问题的时候，强迫 unused state 的次态变成一个 used state。
{% endraw %}
