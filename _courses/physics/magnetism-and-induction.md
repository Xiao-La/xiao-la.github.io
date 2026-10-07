---
title: "Magnetism and Induction - 磁学与电磁感应"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-04-11T12:05:26+08:00"
updated_at: "2026-05-08T14:02:01+08:00"
reference: false
order: 12
layout: "course"
permalink: "/courses/physics/magnetism-and-induction/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Magnetism and Induction - 磁学与电磁感应"
excerpt: "大学物理（上）/（下） · Magnetism and Induction - 磁学与电磁感应"
---

{% raw %}
地磁场与经线之间存在一个磁偏角（Magnetic Declination）。与地面还存在一个磁倾角（Magnetic Inclination）。
目前没有发现磁单极子，任何磁体都有两极。磁场线是闭合的圈，在外部从 N 极走到 S 极，内部从 S 极回到 N 极。

## 磁场力（Magnetic Force）
{: #section-1 }



### 对于粒子
{: #section-2 }


通过移动电荷在磁场中受到的磁场力来定义磁感应强度（Magnetic Flux Density）<span class="course-math" data-tex="B" data-display="false"><code>B</code></span>，国际单位为特斯拉（<span class="course-math" data-tex="\text{T}" data-display="false"><code>\text{T}</code></span>），也有单位高斯（<span class="course-math" data-tex="\text{G}" data-display="false"><code>\text{G}</code></span>），这里 <span class="course-math" data-tex="1\text{T}=10000\text{G}" data-display="false"><code>1\text{T}=10000\text{G}</code></span>。
<span class="course-math course-math-display" data-tex="\vec{F}=q\vec{v}\times \vec{B}" data-display="true"><code>\vec{F}=q\vec{v}\times \vec{B}</code></span>
洛伦兹力（Lorentz Force）：
<span class="course-math course-math-display" data-tex="\vec{F}=q(\vec{E}+\vec{v}\times \vec{B})" data-display="true"><code>\vec{F}=q(\vec{E}+\vec{v}\times \vec{B})</code></span>
霍尔效应（The Hall Effect）：
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;qE=qv_{d}B \\&#10;v_{d}=\frac{J}{ne}=\frac{i}{neA} \\&#10;V=Ed \\&#10;A=dl&#10;\end{cases}&#10;\implies n=\frac{Bi}{Vle}" data-display="true"><code>\begin{cases}&#10;qE=qv_{d}B \\&#10;v_{d}=\frac{J}{ne}=\frac{i}{neA} \\&#10;V=Ed \\&#10;A=dl&#10;\end{cases}&#10;\implies n=\frac{Bi}{Vle}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20-%20%E7%A3%81%E5%AD%A6.png' | relative_url }}{% raw %}" alt="Magnetism - 磁学" width="464" height="233" loading="lazy" decoding="async">
这里 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 是单位体积内载流子的数量。载流子为正电或者负电，其受力方向是一致的，但导致的电势高低是不一样的。

显然带电粒子垂直于磁场入射，所受的磁场力会使其做匀速圆周运动。
如果在平行于磁场方向有速度，就会做一个螺旋状运动。

回旋加速器（Cyclotron）：由于  <span class="course-math" data-tex="T=\frac{2\pi m}{qB},r=\frac{mv}{qB}" data-display="false"><code>T=\frac{2\pi m}{qB},r=\frac{mv}{qB}</code></span>，通过周期性改变电场的方向即可做到一直加速。
质谱仪（Mass Spectrometer）：测量粒子的质量。


### 对于导线
{: #section-3 }


对于直导线：
<span class="course-math course-math-display" data-tex="\begin{cases}&#10;q=it \\&#10;l=v_{d}t \\&#10;F=qv_{d}B\sin \phi&#10;\end{cases}&#10;\implies \vec{F}=i\vec{l}\times \vec{B}" data-display="true"><code>\begin{cases}&#10;q=it \\&#10;l=v_{d}t \\&#10;F=qv_{d}B\sin \phi&#10;\end{cases}&#10;\implies \vec{F}=i\vec{l}\times \vec{B}</code></span>
对于任意导线，若磁场恒定：
<span class="course-math course-math-display" data-tex="\vec{F}=\int id\vec{l}\times \vec{B}=i\left( \int \vec{l} \right)\times \vec{B}=i\vec{L}\times \vec{B}" data-display="true"><code>\vec{F}=\int id\vec{l}\times \vec{B}=i\left( \int \vec{l} \right)\times \vec{B}=i\vec{L}\times \vec{B}</code></span>
这里 <span class="course-math" data-tex="\vec{L}" data-display="false"><code>\vec{L}</code></span> 为导线首尾相接得到的矢量。


### 磁偶极矩/磁矩（Magnetic Dipole）
{: #section-4 }


<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20-%20%E7%A3%81%E5%AD%A6-1.png' | relative_url }}{% raw %}" alt="Magnetism - 磁学-1" width="538" height="198" loading="lazy" decoding="async">

<span class="course-math course-math-display" data-tex="F_{\text{side}}=aIB" data-display="true"><code>F_{\text{side}}=aIB</code></span>
<span class="course-math course-math-display" data-tex="\tau=2\times\frac{1}{2}baIB\sin\theta=baIB\sin\theta" data-display="true"><code>\tau=2\times\frac{1}{2}baIB\sin\theta=baIB\sin\theta</code></span>
定义磁偶极矩 <span class="course-math" data-tex="\vec{\mu}=I\vec{A}" data-display="false"><code>\vec{\mu}=I\vec{A}</code></span>，其方向为右手握电流，大拇指指向的方向，垂直于线圈。 
则有
<span class="course-math course-math-display" data-tex="\tau=\mu \times B" data-display="true"><code>\tau=\mu \times B</code></span>
若有 <span class="course-math" data-tex="N" data-display="false"><code>N</code></span> 匝（Loops）的线圈，则 <span class="course-math" data-tex="\vec{\mu}=Ni\vec{A}" data-display="false"><code>\vec{\mu}=Ni\vec{A}</code></span>。
和电偶极矩类似，磁矩也会带势能：
<span class="course-math course-math-display" data-tex="U=-\vec{\mu}\cdot \vec{B}" data-display="true"><code>U=-\vec{\mu}\cdot \vec{B}</code></span>
这里势能零点就是 <span class="course-math" data-tex="\vec{\mu} \perp \vec{B}" data-display="false"><code>\vec{\mu} \perp \vec{B}</code></span> 的情况。


## 电流产生的磁场
{: #section-5 }


电流产生磁场的方向可以用右手定则判断（右手握电流，大拇指指向电流方向，四指即为磁场方向）。


### 毕奥-萨伐尔定律（Biot-Savart Law）
{: #section-6 }


<span class="course-math course-math-display" data-tex="d\vec{B}=\frac{\mu_{0}}{4\pi}  \frac{id\vec{s}\times \hat{r}}{r^{2}}" data-display="true"><code>d\vec{B}=\frac{\mu_{0}}{4\pi}  \frac{id\vec{s}\times \hat{r}}{r^{2}}</code></span>
这里 <span class="course-math" data-tex="d\vec{s}" data-display="false"><code>d\vec{s}</code></span> 为沿着电流方向的一小段长度。<span class="course-math" data-tex="\mu_{0}=4\pi \times 10^{-7}" data-display="false"><code>\mu_{0}=4\pi \times 10^{-7}</code></span> 为磁导率（Permeability）。
对一个无穷长的直导线，积分得到
<span class="course-math course-math-display" data-tex="B=\int_{-\infty}^{\infty} \frac{\mu_{0}}{4\pi} \frac{i dz}{z^{2}+R^{2}} \frac{R}{\sqrt{ z^{2}+R^{2} }}=\frac{\mu_{0}i}{2\pi R}" data-display="true"><code>B=\int_{-\infty}^{\infty} \frac{\mu_{0}}{4\pi} \frac{i dz}{z^{2}+R^{2}} \frac{R}{\sqrt{ z^{2}+R^{2} }}=\frac{\mu_{0}i}{2\pi R}</code></span>
其中 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 为某点到导线的垂直距离。
若导线不是直的，则可以分解为 <span class="course-math" data-tex="x,y,x" data-display="false"><code>x,y,x</code></span> 三个分量分别积分。
<span class="course-math" data-tex="1\text{A}" data-display="false"><code>1\text{A}</code></span> 的大小是通过两个平行直导线之间磁场力的大小来定义的。
一个角度为 <span class="course-math" data-tex="\varphi" data-display="false"><code>\varphi</code></span>  圆弧形导线：
<span class="course-math course-math-display" data-tex="B=\int \frac{\mu_{0}}{4\pi} \frac{ird\theta}{r^{2}}=\frac{\mu_{0}i\varphi}{4\pi r}" data-display="true"><code>B=\int \frac{\mu_{0}}{4\pi} \frac{ird\theta}{r^{2}}=\frac{\mu_{0}i\varphi}{4\pi r}</code></span>




### 安培定律（Ampere's Law）
{: #section-7 }


磁场的高斯定律（Gauss）：对于一个高斯面，有 
<span class="course-math course-math-display" data-tex="\oint \vec{B}\cdot d\vec{A}=0" data-display="true"><code>\oint \vec{B}\cdot d\vec{A}=0</code></span>
这对计算磁场没有什么帮助。
有安培定律：
<span class="course-math course-math-display" data-tex="\oint \vec{B}\cdot d\vec{l}=\mu_{0}I_{\text{enc}}" data-display="true"><code>\oint \vec{B}\cdot d\vec{l}=\mu_{0}I_{\text{enc}}</code></span>
这里选择一个回路的方向，则定义满足回路方向右手定则的电流为正，反之为负。
定律使用的条件：电流稳定，没有磁性材料，且没有随时间变化的电场。
*或者，定义磁场强度（The Intensity of a magnetic field）为 <span class="course-math" data-tex="H" data-display="false"><code>H</code></span>，有 <span class="course-math" data-tex="\oint \vec{H}\cdot d\vec{l}=I_{\text{enc}}" data-display="false"><code>\oint \vec{H}\cdot d\vec{l}=I_{\text{enc}}</code></span>.

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20-%20%E7%A3%81%E5%AD%A6-2.png' | relative_url }}{% raw %}" alt="Magnetism - 磁学-2" width="438" height="307" loading="lazy" decoding="async">
理想的螺线管 (Solenoid)：
<span class="course-math course-math-display" data-tex="\oint \vec{B}\cdot d\vec{l}=BL=\mu_{0} nLI\implies B=\mu_{0}nI" data-display="true"><code>\oint \vec{B}\cdot d\vec{l}=BL=\mu_{0} nLI\implies B=\mu_{0}nI</code></span>
其中 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 为匝数的线密度（<span class="course-math" data-tex="\text{/m}" data-display="false"><code>\text{/m}</code></span>）。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20-%20%E7%A3%81%E5%AD%A6-3.png' | relative_url }}{% raw %}" alt="Magnetism - 磁学-3" width="530" height="232" loading="lazy" decoding="async">
环形螺线管（Toroid / Toroidal Solenoid），在螺线管内部：
<span class="course-math course-math-display" data-tex="\oint \vec{B}\cdot d\vec{l}=2\pi rB=\mu_{0}NI\implies B=\frac{\mu_{0}NI}{2\pi r}" data-display="true"><code>\oint \vec{B}\cdot d\vec{l}=2\pi rB=\mu_{0}NI\implies B=\frac{\mu_{0}NI}{2\pi r}</code></span>
其中 <span class="course-math" data-tex="N" data-display="false"><code>N</code></span> 为总匝数。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20-%20%E7%A3%81%E5%AD%A6-4.png' | relative_url }}{% raw %}" alt="Magnetism - 磁学-4" width="510" height="320" loading="lazy" decoding="async">
电流平板（Current Sheet）：假设电流线密度均匀且为 <span class="course-math" data-tex="J_{S}" data-display="false"><code>J_{S}</code></span>，有
<span class="course-math course-math-display" data-tex="\oint \vec{B}\cdot d\vec{r}=2BL=\mu_{0} (J_{S}L)\implies B=\frac{1}{2}\mu_{0}J_{S}" data-display="true"><code>\oint \vec{B}\cdot d\vec{r}=2BL=\mu_{0} (J_{S}L)\implies B=\frac{1}{2}\mu_{0}J_{S}</code></span>

### 电磁感应
{: #section-8 }


楞次定律（Lenz's law）：电磁感应产生的电动势和感应电流的方向为抗拒磁通量改变的方向。
法拉第定律（Faraday's law）：电动势和磁通量的变化率成正比。
<span class="course-math course-math-display" data-tex="\varepsilon \propto  \frac{d\Phi_{B}}{dt}" data-display="true"><code>\varepsilon \propto  \frac{d\Phi_{B}}{dt}</code></span>
这里 <span class="course-math" data-tex="\Phi_{B}=\int \vec{B}\cdot d\vec{A}" data-display="false"><code>\Phi_{B}=\int \vec{B}\cdot d\vec{A}</code></span>。
结合这两个定律，可以证明：
<span class="course-math course-math-display" data-tex="\varepsilon=- \frac{d\Phi_{B}}{dt}=-\frac{d}{dt} \int \vec{B}\cdot d\vec{A}" data-display="true"><code>\varepsilon=- \frac{d\Phi_{B}}{dt}=-\frac{d}{dt} \int \vec{B}\cdot d\vec{A}</code></span>
这里的正方向是右手定则确定的。
另外有
<span class="course-math course-math-display" data-tex="\left&#124; \varepsilon \right&#124; = \frac{d\Phi}{dt}=B \frac{dA}{dt}+A \frac{dB}{dt}" data-display="true"><code>\left&#124; \varepsilon \right&#124; = \frac{d\Phi}{dt}=B \frac{dA}{dt}+A \frac{dB}{dt}</code></span>
注意多圈的线圈要乘上 <span class="course-math" data-tex="N" data-display="false"><code>N</code></span>。
考虑激发的电场，一个回路中有关系：
<span class="course-math course-math-display" data-tex="\varepsilon=\oint \vec{E}\cdot d\vec{l}" data-display="true"><code>\varepsilon=\oint \vec{E}\cdot d\vec{l}</code></span>
所以这里的电场和静电场不同，没有起点和终点，不是保守场。（基尔霍夫定律不直接适用，要考虑感应电动势）
故有
<span class="course-math course-math-display" data-tex="\oint \mathbf{E}d\mathbf{l}=-\frac{d}{dt}\int \mathbf{B}d\mathbf{A}" data-display="true"><code>\oint \mathbf{E}d\mathbf{l}=-\frac{d}{dt}\int \mathbf{B}d\mathbf{A}</code></span>


### 电感
{: #section-9 }


变化的电流会产生变化的磁场，从而产生感应电动势，来抵抗电流的变化，这就叫自感电动势 （Self-Induced emf）。
定义自感的电感（Self-Inductance）：
<span class="course-math course-math-display" data-tex="L= \frac{N\Phi_{B}}{i}" data-display="true"><code>L= \frac{N\Phi_{B}}{i}</code></span>
电感是元器件自己的属性，单位为亨利（Henry）。
那么自感电动势为（相当于沿着电流方向从负极穿到正极，大小为 <span class="course-math" data-tex="\varepsilon_{L}" data-display="false"><code>\varepsilon_{L}</code></span> 的一个电池）
<span class="course-math course-math-display" data-tex="\varepsilon_{L}=-L \frac{di}{dt}" data-display="true"><code>\varepsilon_{L}=-L \frac{di}{dt}</code></span>
螺线管的电感：
<span class="course-math course-math-display" data-tex="L= \frac{N\Phi_{B}}{i}=\frac{(nl)(\mu_{0}in)A}{i}=\mu_{0}n^{2}lA" data-display="true"><code>L= \frac{N\Phi_{B}}{i}=\frac{(nl)(\mu_{0}in)A}{i}=\mu_{0}n^{2}lA</code></span>
RL 电路：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20and%20Induction%20-%20%E7%A3%81%E5%AD%A6%E4%B8%8E%E7%94%B5%E7%A3%81%E6%84%9F%E5%BA%94.png' | relative_url }}{% raw %}" alt="Magnetism and Induction - 磁学与电磁感应" width="2210" height="624" loading="lazy" decoding="async">
令时间常数 <span class="course-math" data-tex="\tau=\frac{L}{R}" data-display="false"><code>\tau=\frac{L}{R}</code></span>，时间常数大，电流就变化得慢。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Magnetism%20and%20Induction%20-%20%E7%A3%81%E5%AD%A6%E4%B8%8E%E7%94%B5%E7%A3%81%E6%84%9F%E5%BA%94-1.png' | relative_url }}{% raw %}" alt="Magnetism and Induction - 磁学与电磁感应-1" width="2212" height="728" loading="lazy" decoding="async">

电感器件的磁场中可以存储能量：
<span class="course-math course-math-display" data-tex="\frac{dU_{B}}{dt}=iL \frac{di}{dt}" data-display="true"><code>\frac{dU_{B}}{dt}=iL \frac{di}{dt}</code></span>
<span class="course-math course-math-display" data-tex="\implies U_{B}= \frac{1}{2}Li^{2}" data-display="true"><code>\implies U_{B}= \frac{1}{2}Li^{2}</code></span>
直螺线管中，能量密度
<span class="course-math course-math-display" data-tex="u_{B}= \frac{U_{B}}{Al}= \frac{Li^{2}}{2Al}= \frac{B^{2}}{2\mu_{0}}" data-display="true"><code>u_{B}= \frac{U_{B}}{Al}= \frac{Li^{2}}{2Al}= \frac{B^{2}}{2\mu_{0}}</code></span>

互感（Mutual Induction）：一个螺线管中电流变化，会引发磁场变化，引发另一个螺线管中产生感应电动势。
线圈 2 关于线圈 1 的互感强度(Mutual Inductance)：
<span class="course-math course-math-display" data-tex="M_{21}= \frac{N_{2}\Phi_{21}}{i_{1}}" data-display="true"><code>M_{21}= \frac{N_{2}\Phi_{21}}{i_{1}}</code></span>
从而有 <span class="course-math" data-tex="\varepsilon_{2}=-M_{21} \frac{di_{1}}{dt}" data-display="false"><code>\varepsilon_{2}=-M_{21} \frac{di_{1}}{dt}</code></span>。
类似的，<span class="course-math" data-tex="\varepsilon_{1}=-M_{12} \frac{di_{2}}{dt}" data-display="false"><code>\varepsilon_{1}=-M_{12} \frac{di_{2}}{dt}</code></span>。
这里 <span class="course-math" data-tex="M_{21}=M_{12}=\frac{N_{2}\Phi_{21}}{i_{1}}=\frac{N_{1}\Phi_{12}}{i_{2}}" data-display="false"><code>M_{21}=M_{12}=\frac{N_{2}\Phi_{21}}{i_{1}}=\frac{N_{1}\Phi_{12}}{i_{2}}</code></span>。
{% endraw %}
