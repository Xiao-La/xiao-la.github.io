---
title: "Number Systems - 数字系统"
course_id: "digital-logic"
course_title: "数字逻辑"
section: ""
status: "updating"
created_at: "2026-09-08T13:58:29+08:00"
updated_at: "2026-10-09T16:13:40+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/digital-logic/number-systems/"
course_page: true
doc_type: "note"
description: "数字逻辑 · Number Systems - 数字系统"
excerpt: "数字逻辑 · Number Systems - 数字系统"
---

{% raw %}

## 导论
{: #section-1 }


信号（Signal）：可表示和用于传递信息。
- 模拟信号（Analog signals）：有各种幅值和频率，连续的
- 数字信号（Digital signals）：二进制的，离散的
比特（Bit）：二进制位，电路中由电压的高低决定。
- 1：HIGH (TRUE)
- 0: LOW (FALSE)
编码（Codes）：比特的组合。
数字系统（Digital Systems）：处理数字信号或数据的系统。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems.png' | relative_url }}{% raw %}" alt="Number Systems" width="428" height="226" loading="lazy" decoding="async">
Physical Layer -> transistor -> logic gate -> mircroarchitecture -> system


## 数字系统
{: #section-2 }


十进制（Decimal）/ 二进制（Binary） / 八进制（Octal） / 十六进制（Hexadecimal）
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统" width="347" height="282" loading="lazy" decoding="async">


## 进制转换
{: #section-3 }



### 向十进制转换
{: #section-4 }


若基数（Radix / Base） 为 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>，则 <span class="course-math" data-tex="n+m" data-display="false"><code>n+m</code></span> 位数字
<span class="course-math course-math-display" data-tex="D=d_{n-1}d_{n-2}\dots d_{0}.d_{-1}d_{-2}\dots d_{-m}" data-display="true"><code>D=d_{n-1}d_{n-2}\dots d_{0}.d_{-1}d_{-2}\dots d_{-m}</code></span>
的十进制值为
<span class="course-math course-math-display" data-tex="D=\sum_{i=-m}^{n-1} d_{i}r^i" data-display="true"><code>D=\sum_{i=-m}^{n-1} d_{i}r^i</code></span>


### 从十进制转换
{: #section-5 }


整数部分：不断去除以 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> ，考察每次的余数。
小数部分：不断去乘以 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>，考察每次的整数部分。
MSD (Most-significant Digit)：权重最高的位。
LSD（Least-significant Digit）：权重最低的位。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-3.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-3" width="383" height="245" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-4.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-4" width="386" height="249" loading="lazy" decoding="async">


### 其他进制之间转换
{: #section-6 }


二进制转换为八进制或十六进制：直接分组看，八进制就是三位一组，十六进制就是四位一组。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-5.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-5" width="439" height="176" loading="lazy" decoding="async">
八个位（bit）就是一个字节（byte）。

十六进制表示（Hexadecimal representation）：两个十六进制位表示一个字节。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-6.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-6" width="219" height="110" loading="lazy" decoding="async">
二进制容量单位 <span class="course-math" data-tex="1\,\mathrm{KiB}=1024\,\mathrm{B}" data-display="false"><code>1\,\mathrm{KiB}=1024\,\mathrm{B}</code></span>；十进制 <span class="course-math" data-tex="1\,\mathrm{kB}=1000\,\mathrm{B}" data-display="false"><code>1\,\mathrm{kB}=1000\,\mathrm{B}</code></span>（下图的 KB 使用旧的二进制习惯记法）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-7.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-7" width="282" height="284" loading="lazy" decoding="async">



## BCD 码
{: #section-7 }


用四个比特来表示一个十进制数位，例如用 0011 1001 0110 表示 396。
用 BCD 码表示的数，加法应该使用十进制的办法来加。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-8.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-8" width="453" height="216" loading="lazy" decoding="async">
做减法可以转换为做 10's complement 再加。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-12.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-12" width="1852" height="704" loading="lazy" decoding="async">

## 格雷码
{: #section-8 }


最小改变的编码方式：变化到相邻的数，格雷码只变化一位。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-9.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-9" width="214" height="291" loading="lazy" decoding="async">

格雷码转二进制：
- 把格雷码的最高位作为二进制的最高位。
- 二进制的次高位：由**二进制的最高位和格雷码的次高位**异或得到。
- 以此类推。
- <span class="course-math" data-tex="B_{n}=G_{n}, B_ {{i-1}} =B_{i}\oplus G_{i-1}" data-display="false"><code>B_{n}=G_{n}, B_ {{i-1}} =B_{i}\oplus G_{i-1}</code></span>
二进制转格雷码：
- 把二进制的最高位作为格雷码的最高位
- 格雷码的次高位：由**二进制的最高位和二进制的次高位**异或得到。
- 以此类推。
- <span class="course-math" data-tex="G_{n}=B_{n},G_{i-1}=B_{i}\oplus B_{i-1}" data-display="false"><code>G_{n}=B_{n},G_{i-1}=B_{i}\oplus B_{i-1}</code></span>


## ASCII 码
{: #section-9 }


American Standard Code for Information Interchange ：编码字符。


## 校验码
{: #section-10 }


Error-Detecting Code：
- 奇偶校验码：提前规定好奇校验/偶校验，放在信息的某一位，代表我 1 的数量是奇数还是偶数，这样可以检验出 1 比特的错误。




## 原码，反码与补码
{: #section-11 }



## 2 进制
{: #section-12 }


为了表示 <span class="course-math" data-tex="0110_{2}" data-display="false"><code>0110_{2}</code></span> （<span class="course-math" data-tex="6_{10}" data-display="false"><code>6_{10}</code></span>）的相反数：
原码（Signed Magnitude）：符号位+符值： <span class="course-math" data-tex="1&#124;110" data-display="false"><code>1&#124;110</code></span>，第一位表示符号为负，剩下不变。
反码（1's complement / Diminished radix complement）：<span class="course-math" data-tex="1001" data-display="false"><code>1001</code></span>  按位取反。
补码（2's complement / Radix Complement）： <span class="course-math" data-tex="1010" data-display="false"><code>1010</code></span>，按位取反再加一。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Number%20Systems%20-%20%E6%95%B0%E5%AD%97%E7%B3%BB%E7%BB%9F-11.png' | relative_url }}{% raw %}" alt="Number Systems - 数字系统-11" width="376" height="306" loading="lazy" decoding="async">
一般地，<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 位补码可以表示的范围为 <span class="course-math" data-tex="-2^{n-1}\sim 2^{n-1}-1" data-display="false"><code>-2^{n-1}\sim 2^{n-1}-1</code></span>。
使用补码可以统一表示所有带符号数的加减法，本质上 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 位补码相当于统一在模 <span class="course-math" data-tex="2^n" data-display="false"><code>2^n</code></span> 的整数环上做加减法，模运算保持加减法正确。例如，在上表中 <span class="course-math" data-tex="-2_{10}\equiv 14_{10}\equiv 1110_{2} \pmod{16}" data-display="false"><code>-2_{10}\equiv 14_{10}\equiv 1110_{2} \pmod{16}</code></span>。
而十进制中的求对 <span class="course-math" data-tex="2^n" data-display="false"><code>2^n</code></span> 的余数，又相当于按位取反再加一（假设 <span class="course-math" data-tex="a&#x27;" data-display="false"><code>a&#x27;</code></span> 为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的反码，<span class="course-math" data-tex="-a" data-display="false"><code>-a</code></span> 为补码）：
<span class="course-math course-math-display" data-tex="a+(-a)-1\equiv 2^{n}-1\equiv a+a&#x27;\implies -a=a&#x27;+1" data-display="true"><code>a+(-a)-1\equiv 2^{n}-1\equiv a+a&#x27;\implies -a=a&#x27;+1</code></span>


## <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 进制
{: #section-13 }


同样可以定义：
反码（<span class="course-math" data-tex="(r-1)" data-display="false"><code>(r-1)</code></span> 's complement）： <span class="course-math" data-tex="(r^n-1)-x" data-display="false"><code>(r^n-1)-x</code></span>
补码（<span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 's complement）： <span class="course-math" data-tex="r^{n}-x" data-display="false"><code>r^{n}-x</code></span>
计算上，反码相当于每一位都用 <span class="course-math" data-tex="r-1" data-display="false"><code>r-1</code></span> 去减掉（按位取反），补码就等于反码加一。
例如，在 <span class="course-math" data-tex="r=10" data-display="false"><code>r=10</code></span> 下利用 <span class="course-math" data-tex="10" data-display="false"><code>10</code></span> 's complement 算减法：
<span class="course-math course-math-display" data-tex="3250-72532" data-display="true"><code>3250-72532</code></span>
那么 <span class="course-math" data-tex="-72532" data-display="false"><code>-72532</code></span> 的补码表示为 <span class="course-math" data-tex="27468" data-display="false"><code>27468</code></span>，再加上 <span class="course-math" data-tex="03250" data-display="false"><code>03250</code></span> 得到 <span class="course-math" data-tex="30718" data-display="false"><code>30718</code></span>。这是答案的补码表示形式。那么正常的表示方式为再取一次补码，得到 <span class="course-math" data-tex="-69282" data-display="false"><code>-69282</code></span>。
{% endraw %}
