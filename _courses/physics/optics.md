---
title: "Optics - 光学"
course_id: "physics"
course_title: "大学物理（上）/（下）"
section: "下"
status: "completed"
created_at: "2026-05-09T15:54:47+08:00"
updated_at: "2026-10-08T21:23:24+08:00"
reference: false
order: 14
layout: "course"
permalink: "/courses/physics/optics/"
course_page: true
doc_type: "note"
description: "大学物理（上）/（下） · Optics - 光学"
excerpt: "大学物理（上）/（下） · Optics - 光学"
---

{% raw %}

## 几何光学（Geometrical Optics）
{: #section-1 }


 **光在介质中的传播**
*   **折射率：** <span class="course-math" data-tex="n = \frac{c}{v}" data-display="false"><code>n = \frac{c}{v}</code></span> (光在介质中变慢，<span class="course-math" data-tex="n \ge 1" data-display="false"><code>n \ge 1</code></span>)
*   **波长变化：** 进入介质后频率 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 不变，波长变短：<span class="course-math" data-tex="\lambda = \frac{\lambda_{air}}{n}" data-display="false"><code>\lambda = \frac{\lambda_{air}}{n}</code></span>

**反射与折射基本定律**
*   **反射定律：** 入射角 <span class="course-math" data-tex="=" data-display="false"><code>=</code></span> 反射角 (<span class="course-math" data-tex="\theta_i = \theta_r" data-display="false"><code>\theta_i = \theta_r</code></span>)
*   **斯涅尔定律 (折射定律)：** 
    <span class="course-math course-math-display" data-tex="n_1 \sin\theta_1 = n_2 \sin\theta_2" data-display="true"><code>n_1 \sin\theta_1 = n_2 \sin\theta_2</code></span>
    *(注：角度均为光线与法线的夹角)*
*   **费马原理：** 光传播的实际路径使传播时间（或光程）取驻值；常见反射、折射问题中表现为局部最小。

**全反射 (Total Internal Reflection)**
*   **条件：** 光由**光密射向光疏**介质 (<span class="course-math" data-tex="n_1 &gt; n_2" data-display="false"><code>n_1 &gt; n_2</code></span>)。
*   **临界角(Critical Angle)：** 当折射角为 <span class="course-math" data-tex="90^\circ" data-display="false"><code>90^\circ</code></span> 时的入射角。
    <span class="course-math course-math-display" data-tex="\theta_c = \sin^{-1}(\frac{n_2}{n_1})" data-display="true"><code>\theta_c = \sin^{-1}(\frac{n_2}{n_1})</code></span>

**反射偏振与布儒斯特角 (Brewster's angle)**
*   **现象：** 非偏振光在界面反射时，反射光通常为部分偏振。
*   **布儒斯特角 <span class="course-math" data-tex="\theta_B" data-display="false"><code>\theta_B</code></span>：** 特定的入射角，使得**反射光变为完全的线偏振光** (纯 S 偏振，垂直于入射面)。
*   **几何特征：** 此时反射光线与折射光线相互垂直，即 <span class="course-math" data-tex="\theta_B + \theta_r = 90^\circ" data-display="false"><code>\theta_B + \theta_r = 90^\circ</code></span>。
*   **布儒斯特公式：**
    <span class="course-math course-math-display" data-tex="\theta_B = \tan^{-1}(\frac{n_b}{n_a})" data-display="true"><code>\theta_B = \tan^{-1}(\frac{n_b}{n_a})</code></span>
    *(其中 <span class="course-math" data-tex="n_a" data-display="false"><code>n_a</code></span> 为入射介质，<span class="course-math" data-tex="n_b" data-display="false"><code>n_b</code></span> 为折射介质)*


### 干涉 (Interference)
{: #section-2 }


1.  **相干波条件：** 相同频率 (<span class="course-math" data-tex="\omega" data-display="false"><code>\omega</code></span>)、相同振动方向、恒定相位差。
2.  **光程 (Optical Path)：**
    <span class="course-math course-math-display" data-tex="\text{光程} = n \cdot L" data-display="true"><code>\text{光程} = n \cdot L</code></span>
    *(折射率 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 几何路程，等效于光在真空中传播的距离)*
3.  **相位差 (<span class="course-math" data-tex="\Delta\phi" data-display="false"><code>\Delta\phi</code></span>) 与光程差 (<span class="course-math" data-tex="\delta" data-display="false"><code>\delta</code></span>) 的转换关系：**
    <span class="course-math course-math-display" data-tex="\Delta\phi = \frac{2\pi}{\lambda} \cdot (n_1 L_1 - n_2 L_2) = \frac{2\pi}{\lambda} \cdot \delta" data-display="true"><code>\Delta\phi = \frac{2\pi}{\lambda} \cdot (n_1 L_1 - n_2 L_2) = \frac{2\pi}{\lambda} \cdot \delta</code></span>
    *(注：<span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 始终代指光在真空中的波长)*

>  推导：将电磁波写成 <span class="course-math" data-tex="E_{p}=E_{1}+E_{2}" data-display="false"><code>E_{p}=E_{1}+E_{2}</code></span> （矢量），<span class="course-math" data-tex="E=\cos(kL-\omega t+\phi)" data-display="false"><code>E=\cos(kL-\omega t+\phi)</code></span>：<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6.png' | relative_url }}{% raw %}" alt="Optics - 光学" width="1634" height="228" loading="lazy" decoding="async">
>  这里 <span class="course-math" data-tex="\Delta \phi=k_{1}L_{1}-k_{2}L_{2}=\frac{2\pi}{\lambda_{1}}L_{1}-\frac{2\pi}{\lambda_{2}}L_{2}=\frac{2\pi}{\lambda}(n_{1}L_{1}-n_{2}L_{2})" data-display="false"><code>\Delta \phi=k_{1}L_{1}-k_{2}L_{2}=\frac{2\pi}{\lambda_{1}}L_{1}-\frac{2\pi}{\lambda_{2}}L_{2}=\frac{2\pi}{\lambda}(n_{1}L_{1}-n_{2}L_{2})</code></span>，其中 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为真空中的波长。
>  那么从上面的图可以得到 <span class="course-math" data-tex="E_{p}=2E_{0}\cos \frac{\Delta \phi}{2}" data-display="false"><code>E_{p}=2E_{0}\cos \frac{\Delta \phi}{2}</code></span>，进而 <span class="course-math" data-tex="I_{P}=4I_{0}\cos ^{2} \frac{\Delta \phi}{2}" data-display="false"><code>I_{P}=4I_{0}\cos ^{2} \frac{\Delta \phi}{2}</code></span>

判定某点是亮条纹还是暗条纹，直接计算两束光到达该点的**光程差** <span class="course-math" data-tex="(n_1 L_1 - n_2 L_2)" data-display="false"><code>(n_1 L_1 - n_2 L_2)</code></span>：

*   **相长干涉 (Constructive, 亮纹)：**
    <span class="course-math course-math-display" data-tex="n_1 L_1 - n_2 L_2 = m\lambda \quad (m = 0, 1, 2, ...)" data-display="true"><code>n_1 L_1 - n_2 L_2 = m\lambda \quad (m = 0, 1, 2, ...)</code></span>
    *相位差对应为：<span class="course-math" data-tex="\Delta\phi = m \times 2\pi" data-display="false"><code>\Delta\phi = m \times 2\pi</code></span>*

*   **相消干涉 (Destructive, 暗纹)：**
    <span class="course-math course-math-display" data-tex="n_1 L_1 - n_2 L_2 = (m + \frac{1}{2})\lambda \quad (m = 0, 1, 2, ...)" data-display="true"><code>n_1 L_1 - n_2 L_2 = (m + \frac{1}{2})\lambda \quad (m = 0, 1, 2, ...)</code></span>
    *相位差对应为：<span class="course-math" data-tex="\Delta\phi = (m + \frac{1}{2}) \times 2\pi" data-display="false"><code>\Delta\phi = (m + \frac{1}{2}) \times 2\pi</code></span>*

如果杨氏双缝等实验整个装置都在空气（近似认为 <span class="course-math" data-tex="n_1 = n_2 = 1" data-display="false"><code>n_1 = n_2 = 1</code></span>）中进行，
则**光程差就等于几何路程差**：
<span class="course-math course-math-display" data-tex="\delta = L_1 - L_2 = \Delta L" data-display="true"><code>\delta = L_1 - L_2 = \Delta L</code></span>
此时发生干涉的条件直接由几何路径差决定。

**光程和光程差**
*   **物理本质：** 介质折射率大 <span class="course-math" data-tex="\rightarrow" data-display="false"><code>\rightarrow</code></span> 光速变慢 <span class="course-math" data-tex="\rightarrow" data-display="false"><code>\rightarrow</code></span> 波长变短 <span class="course-math" data-tex="\rightarrow" data-display="false"><code>\rightarrow</code></span> 在相同厚度 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 内包含的“波长个数”变多。
*   **波数公式：** 距离 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 内包含的波的个数 <span class="course-math" data-tex="N = \frac{L \cdot n}{\lambda_{vac}}" data-display="false"><code>N = \frac{L \cdot n}{\lambda_{vac}}</code></span> （分子 <span class="course-math" data-tex="L \cdot n" data-display="false"><code>L \cdot n</code></span> 即为光程）。
*   相位差 <span class="course-math" data-tex="\Delta\phi" data-display="false"><code>\Delta\phi</code></span> 的计算：取决于两束光包含的波数之差。
    *   公式：<span class="course-math" data-tex="\frac{\Delta\phi}{2\pi} = \Delta N = \frac{L(n_2 - n_1)}{\lambda_{vac}}" data-display="false"><code>\frac{\Delta\phi}{2\pi} = \Delta N = \frac{L(n_2 - n_1)}{\lambda_{vac}}</code></span>
    *   **实用技巧：** 干涉结果只取决于波数差的**小数部分**（例如相差 3.6 个波，只看 0.6）。

**杨氏双缝干涉实验 (Young's Double-Slit)**
*   **目的：** 获得两束相干光，观察光的干涉现象。
*   **实现相干的方法：** **分波前法**。用一个单缝 <span class="course-math" data-tex="S_0" data-display="false"><code>S_0</code></span> 照射两个距离很近的狭缝 <span class="course-math" data-tex="S_1, S_2" data-display="false"><code>S_1, S_2</code></span>，使得 <span class="course-math" data-tex="S_1, S_2" data-display="false"><code>S_1, S_2</code></span> 成为频率相同、初相位相同的两个相干次波源。
*   **屏幕干涉图样：** 形成平行的明暗相间条纹。
    *   **亮条纹 (Constructive)：** 波前同相到达，相互加强。条件是光程差 <span class="course-math" data-tex="\delta = m\lambda" data-display="false"><code>\delta = m\lambda</code></span>。
    *   **暗条纹 (Destructive)：** 波前反相到达，相互抵消。条件是光程差 <span class="course-math" data-tex="\delta = (m + \frac{1}{2})\lambda" data-display="false"><code>\delta = (m + \frac{1}{2})\lambda</code></span>。
*   **关键尺寸量级考点：** 缝宽及波长通常在微米 (<span class="course-math" data-tex="\mu\text{m}" data-display="false"><code>\mu\text{m}</code></span>) 级，缝间距数十到上百微米，而屏幕距离通常在米 (<span class="course-math" data-tex="\text{m}" data-display="false"><code>\text{m}</code></span>) 级。（满足远场近似条件）。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-1.png' | relative_url }}{% raw %}" alt="Optics - 光学-1" width="1644" height="790" loading="lazy" decoding="async">

**路径差公式的几何推导 (关键前提: <span class="course-math" data-tex="D \gg d" data-display="false"><code>D \gg d</code></span>)**
当屏幕很远时，两束光线近似平行。
由缝距 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 与出射角 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 构成的直角三角形得出几何路径差：
<span class="course-math course-math-display" data-tex="\Delta L = d \sin\theta" data-display="true"><code>\Delta L = d \sin\theta</code></span>

*   **第 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 级明纹 (Bright):** 
    <span class="course-math course-math-display" data-tex="d \sin\theta = m\lambda \quad (m = 0, 1, 2, \dots)" data-display="true"><code>d \sin\theta = m\lambda \quad (m = 0, 1, 2, \dots)</code></span>
    *(求角度: <span class="course-math" data-tex="\theta = \arcsin(\frac{m\lambda}{d})" data-display="false"><code>\theta = \arcsin(\frac{m\lambda}{d})</code></span>) *
*   **第 <span class="course-math" data-tex="m" data-display="false"><code>m</code></span> 级暗纹 (Dark):** 
    <span class="course-math course-math-display" data-tex="d \sin\theta = (m + \frac{1}{2})\lambda \quad (m = 0, 1, 2, \dots)" data-display="true"><code>d \sin\theta = (m + \frac{1}{2})\lambda \quad (m = 0, 1, 2, \dots)</code></span>
    *(注意：<span class="course-math" data-tex="m=1" data-display="false"><code>m=1</code></span> 是第二暗纹，因为它从 <span class="course-math" data-tex="m=0" data-display="false"><code>m=0</code></span> 的第一暗纹开始算)*

小角度近似：<span class="course-math" data-tex="\sin\theta =\tan\theta=\frac{y}{D}" data-display="false"><code>\sin\theta =\tan\theta=\frac{y}{D}</code></span>

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-2.png' | relative_url }}{% raw %}" alt="Optics - 光学-2" width="333" height="383" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-3.png' | relative_url }}{% raw %}" alt="Optics - 光学-3" width="357" height="260" loading="lazy" decoding="async">
利用相量法 (两个同幅矢量夹角为 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span>) 推导合成光强。
*   **合电场振幅：** <span class="course-math" data-tex="E = 2E_0 \cos(\frac{\phi}{2})" data-display="false"><code>E = 2E_0 \cos(\frac{\phi}{2})</code></span>
*   **总光强公式：** 
    <span class="course-math course-math-display" data-tex="I = 4I_0 \cos^2\left(\frac{\phi}{2}\right)" data-display="true"><code>I = 4I_0 \cos^2\left(\frac{\phi}{2}\right)</code></span>
    *(其中 <span class="course-math" data-tex="I_0" data-display="false"><code>I_0</code></span> 是单缝的光强，最大光强为 <span class="course-math" data-tex="4I_0" data-display="false"><code>4I_0</code></span>)*
*   **从屏幕几何角度 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 计算相位差 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span>：**
    <span class="course-math course-math-display" data-tex="\phi = \frac{2\pi}{\lambda} (d \sin\theta)" data-display="true"><code>\phi = \frac{2\pi}{\lambda} (d \sin\theta)</code></span>


### 薄膜干涉
{: #section-3 }


**半波损失 (Phase Shift on Reflection)**
判定反射光是否发生相位突变，只看一点：光是否在“更密”的介质表面“碰壁”反弹。
*   **<span class="course-math" data-tex="n_{入射} &lt; n_{反射面}" data-display="false"><code>n_{入射} &lt; n_{反射面}</code></span> (光疏射向光密)：** 反射光有半波损失（相位突变 <span class="course-math" data-tex="\pi" data-display="false"><code>\pi</code></span>，等效光程 <span class="course-math" data-tex="\pm \frac{\lambda}{2}" data-display="false"><code>\pm \frac{\lambda}{2}</code></span>）。
*   **<span class="course-math" data-tex="n_{入射} &gt; n_{反射面}" data-display="false"><code>n_{入射} &gt; n_{反射面}</code></span> (光密射向光疏)：** 反射光**无**半波损失（相位不变）。

**垂直入射时的总光程差公式**
垂直入射（或小角度入射）时，薄膜内部折返的几何距离近似为厚度的两倍：<span class="course-math" data-tex="2L" data-display="false"><code>2L</code></span>。
<span class="course-math course-math-display" data-tex="\text{总光程差} \Delta L = 2L n_{薄膜} \pm \Delta_{附加}" data-display="true"><code>\text{总光程差} \Delta L = 2L n_{薄膜} \pm \Delta_{附加}</code></span>
*(需分别判断上下表面是否发生半波损失来确定 <span class="course-math" data-tex="\Delta_{附加}" data-display="false"><code>\Delta_{附加}</code></span> 是否为 <span class="course-math" data-tex="\frac{\lambda}{2}" data-display="false"><code>\frac{\lambda}{2}</code></span>)*

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-4.png' | relative_url }}{% raw %}" alt="Optics - 光学-4" width="291" height="250" loading="lazy" decoding="async">

**特定条件下的薄膜极值公式** 
**适用条件：** <span class="course-math" data-tex="n_1 &gt; n_2 &lt; n_3" data-display="false"><code>n_1 &gt; n_2 &lt; n_3</code></span> 或 <span class="course-math" data-tex="n_1 &lt; n_2 &gt; n_3" data-display="false"><code>n_1 &lt; n_2 &gt; n_3</code></span> (即**有且仅有一侧**发生半波损失)。
因为有一侧的波反相了，所以导致干涉条件的明暗公式和常规情况**颠倒**：

1.  **相长干涉 (Constructive / 亮纹) :**
    <span class="course-math course-math-display" data-tex="2L \cdot n_2 = \left(m + \frac{1}{2}\right)\lambda \Rightarrow 2L = \left(m + \frac{1}{2}\right)\frac{\lambda}{n_2} \quad (m=0,1,2...)" data-display="true"><code>2L \cdot n_2 = \left(m + \frac{1}{2}\right)\lambda \Rightarrow 2L = \left(m + \frac{1}{2}\right)\frac{\lambda}{n_2} \quad (m=0,1,2...)</code></span>
2.  **相消干涉 (Destructive / 暗纹) :**
    <span class="course-math course-math-display" data-tex="2L \cdot n_2 = m\lambda \Rightarrow 2L = m\frac{\lambda}{n_2} \quad (m=0,1,2...)" data-display="true"><code>2L \cdot n_2 = m\lambda \Rightarrow 2L = m\frac{\lambda}{n_2} \quad (m=0,1,2...)</code></span>
 **超薄膜极限 (<span class="course-math" data-tex="L \ll \lambda" data-display="false"><code>L \ll \lambda</code></span>)**
*   **条件：** 厚度 <span class="course-math" data-tex="L" data-display="false"><code>L</code></span> 极小，路径光程差 <span class="course-math" data-tex="2L n_2 \rightarrow 0" data-display="false"><code>2L n_2 \rightarrow 0</code></span>。
*   **现象：** 如果符合上文“单侧半波损失”的条件，总光程差仅剩 <span class="course-math" data-tex="\frac{\lambda}{2}" data-display="false"><code>\frac{\lambda}{2}</code></span>。此时两波必定反相叠加。
*   **结论：** 极薄膜在此条件下必定发生**相消干涉**（看起来是暗/黑的）。

注意：上述的干涉为反射光的，若考虑透射光，那么由于能量守恒定律，反射光最弱相当于透射光最强，所以结论是相反的。

## 衍射
{: #section-4 }



### 单缝衍射
{: #section-5 }


不同于双缝干涉，单缝衍射考虑的是**一个宽度为 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 的狭缝内无数次波的相互叠加**。
*   **狭缝宽度：** <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>
*   **上下边缘光束的光程差：** <span class="course-math" data-tex="\Delta L = a \sin\theta" data-display="false"><code>\Delta L = a \sin\theta</code></span>
*   **上下边缘光束的相位差：** <span class="course-math" data-tex="\beta = \frac{2\pi}{\lambda} a \sin\theta" data-display="false"><code>\beta = \frac{2\pi}{\lambda} a \sin\theta</code></span>
*   **常用无量纲参数：** <span class="course-math" data-tex="\alpha = \frac{\beta}{2} = \frac{\pi a \sin\theta}{\lambda}" data-display="false"><code>\alpha = \frac{\beta}{2} = \frac{\pi a \sin\theta}{\lambda}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-6.png' | relative_url }}{% raw %}" alt="Optics - 光学-6" width="448" height="326" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-5.png' | relative_url }}{% raw %}" alt="Optics - 光学-5" width="2040" height="1320" loading="lazy" decoding="async">

**易错：** 单缝衍射的 <span class="course-math" data-tex="a \sin\theta = m\lambda" data-display="false"><code>a \sin\theta = m\lambda</code></span> 算出的是**暗纹**！（双缝干涉中 <span class="course-math" data-tex="d \sin\theta = m\lambda" data-display="false"><code>d \sin\theta = m\lambda</code></span> 算出的是亮纹）。
*   **公式：** <span class="course-math course-math-display" data-tex="\sin\theta = \frac{m\lambda}{a}" data-display="true"><code>\sin\theta = \frac{m\lambda}{a}</code></span>
*   **取值要求：** <span class="course-math" data-tex="m = \pm 1, \pm 2, \pm 3, \dots" data-display="false"><code>m = \pm 1, \pm 2, \pm 3, \dots</code></span> **(绝对没有 <span class="course-math" data-tex="m=0" data-display="false"><code>m=0</code></span>)**。
*   **中央明纹特点：** 位于由 <span class="course-math" data-tex="m=-1" data-display="false"><code>m=-1</code></span> 和 <span class="course-math" data-tex="m=+1" data-display="false"><code>m=+1</code></span> 两个暗纹夹住的区域内，比其他任何旁瓣都要宽一倍，且亮度极高。
* 小角度近似（<span class="course-math" data-tex="\theta=\sin\theta" data-display="false"><code>\theta=\sin\theta</code></span>）

基于相量链条卷曲成圆弧的几何关系推导出整体的光强分布函数 <span class="course-math" data-tex="\text{sinc}^2(\alpha)" data-display="false"><code>\text{sinc}^2(\alpha)</code></span>：
<span class="course-math course-math-display" data-tex="I = I_0 \left[ \frac{\sin(\beta/2)}{\beta/2} \right]^2 = I_0 \left[ \frac{\sin\alpha}{\alpha} \right]^2" data-display="true"><code>I = I_0 \left[ \frac{\sin(\beta/2)}{\beta/2} \right]^2 = I_0 \left[ \frac{\sin\alpha}{\alpha} \right]^2</code></span>
*（注：当 <span class="course-math" data-tex="\theta \to 0" data-display="false"><code>\theta \to 0</code></span> 时，<span class="course-math" data-tex="\alpha \to 0" data-display="false"><code>\alpha \to 0</code></span>。根据数学极限 <span class="course-math" data-tex="\lim_{\alpha \to 0}\frac{\sin\alpha}{\alpha} = 1" data-display="false"><code>\lim_{\alpha \to 0}\frac{\sin\alpha}{\alpha} = 1</code></span>，算出中央最大光强即为 <span class="course-math" data-tex="I_0" data-display="false"><code>I_0</code></span>）*

狭缝越窄，衍射现象越明显（光散得越开）。
1.  **极宽极限 (<span class="course-math" data-tex="a \gg \lambda" data-display="false"><code>a \gg \lambda</code></span>)：** 衍射角极小，不发生明显的衍射散布，光斑与狭缝形状一致，退化为**几何光学**直线传播。
2.  **极窄极限 (<span class="course-math" data-tex="a \approx \lambda" data-display="false"><code>a \approx \lambda</code></span>)：** 第一暗纹在 <span class="course-math" data-tex="90^{\circ}" data-display="false"><code>90^{\circ}</code></span>，中央明纹无限宽敞，充满背后的整个空间。



### 双缝干涉+衍射
{: #section-6 }


理想双缝假设缝很窄；真实的双缝具有宽度 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span>，会引发单缝衍射的调制。

*   **核心图像概念：** 真实的双缝图案本质上是 **“干涉纹被包在衍射轮廓之中”**。
*   **总光强组合公式：**
    <span class="course-math course-math-display" data-tex="I(\theta) = I_m \cdot \underbrace{(\cos^2 \beta)}_{\text{理想双缝干涉}} \cdot \underbrace{\left(\frac{\sin\alpha}{\alpha}\right)^2}_{\text{单缝衍射 (包络线)}}" data-display="true"><code>I(\theta) = I_m \cdot \underbrace{(\cos^2 \beta)}_{\text{理想双缝干涉}} \cdot \underbrace{\left(\frac{\sin\alpha}{\alpha}\right)^2}_{\text{单缝衍射 (包络线)}}</code></span>
    *   <span class="course-math" data-tex="\beta = \frac{\pi d \sin\theta}{\lambda}" data-display="false"><code>\beta = \frac{\pi d \sin\theta}{\lambda}</code></span> （其中 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 为双缝间距）
    *   <span class="course-math" data-tex="\alpha = \frac{\pi a \sin\theta}{\lambda}" data-display="false"><code>\alpha = \frac{\pi a \sin\theta}{\lambda}</code></span> （其中 <span class="course-math" data-tex="a" data-display="false"><code>a</code></span> 为单缝宽度）
*   缺级现象分析
    当本该出现**干涉极大值**的地方，碰巧是**单缝衍射的极小值（暗纹=光强归零）** 时，该级干涉明纹将消失不显示。
    *   干涉明纹条件：<span class="course-math" data-tex="d \sin\theta = m_i \lambda" data-display="false"><code>d \sin\theta = m_i \lambda</code></span>
    *   衍射暗纹条件：<span class="course-math" data-tex="a \sin\theta = m_d \lambda" data-display="false"><code>a \sin\theta = m_d \lambda</code></span>
    *   **缺级条件公式：** 联立二者消去 <span class="course-math" data-tex="\sin\theta/\lambda" data-display="false"><code>\sin\theta/\lambda</code></span>，得到关系式：
        <span class="course-math course-math-display" data-tex="m_i = \frac{d}{a} m_d  \quad (m_d = 1, 2, 3 \dots)" data-display="true"><code>m_i = \frac{d}{a} m_d  \quad (m_d = 1, 2, 3 \dots)</code></span>
        *例如：若缝距是缝宽的 4 倍（<span class="course-math" data-tex="d=4a" data-display="false"><code>d=4a</code></span>），则代入 <span class="course-math" data-tex="m_d = 1, 2, 3" data-display="false"><code>m_d = 1, 2, 3</code></span> 后可得，<span class="course-math" data-tex="m_i = 4, 8, 12 \dots" data-display="false"><code>m_i = 4, 8, 12 \dots</code></span> 级的明纹会消失。*
    <img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Optics%20-%20%E5%85%89%E5%AD%A6-7.png' | relative_url }}{% raw %}" alt="Optics - 光学-7" width="290" height="462" loading="lazy" decoding="async">

### 圆孔衍射
{: #section-7 }


**圆孔衍射（Circular Aperture Diffraction）与分辨本领（Resolvability）**。

与矩形单缝不同，光波通过圆形孔径时，会在屏幕上形成中心高亮、周围环绕极弱同心亮环的衍射图样。
*   **爱里斑 (Airy Disk):** 衍射图样中央最亮、最大的圆斑。
*   **第一级暗环的位置公式:**
    <span class="course-math course-math-display" data-tex="\sin\theta = 1.22 \frac{\lambda}{d}" data-display="true"><code>\sin\theta = 1.22 \frac{\lambda}{d}</code></span>
    *(其中，<span class="course-math" data-tex="d" data-display="false"><code>d</code></span> 为圆孔的直径，<span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 为光波长，<span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 为圆孔中心到第一暗环的夹角)*
    **注意：** 因为 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> 通常极小（如望远镜看星星），根据小角度近似，公式常写作：
    <span class="course-math course-math-display" data-tex="\theta \approx 1.22 \frac{\lambda}{d} \quad \text{(单位：弧度 rad)}" data-display="true"><code>\theta \approx 1.22 \frac{\lambda}{d} \quad \text{(单位：弧度 rad)}</code></span>

由于圆孔衍射（爱里斑）的存在，任何光学仪器（人眼、显微镜、望远镜）都无法将空间靠得极近的两个物点完美清晰地分开。

*   **瑞利判据 (临界条件):**
    当且仅当光源 S1 的**中央主极大**，与光源 S2 的**第一级衍射极小（暗环）** 完全重合时，这两个物体被认为是**恰能被分辨的 (just resolved)**。

*   **最小分辨角 (Minimum Resolvable Angle) 公式:**
    <span class="course-math course-math-display" data-tex="\theta_{min} = 1.22 \frac{\lambda}{d}" data-display="true"><code>\theta_{min} = 1.22 \frac{\lambda}{d}</code></span>
    这是仪器能够分辨的两个物点对镜心所张的最小角距离。

假设两个实际点光源之间对圆孔的夹角（角距离）为 <span class="course-math" data-tex="\theta_{actual}" data-display="false"><code>\theta_{actual}</code></span>：
1.  **<span class="course-math" data-tex="\theta_{actual} &gt; \theta_{min}" data-display="false"><code>\theta_{actual} &gt; \theta_{min}</code></span>** <span class="course-math" data-tex="\longrightarrow" data-display="false"><code>\longrightarrow</code></span> **能分辨 (Resolved)**
2.  **<span class="course-math" data-tex="\theta_{actual} = \theta_{min}" data-display="false"><code>\theta_{actual} = \theta_{min}</code></span>** <span class="course-math" data-tex="\longrightarrow" data-display="false"><code>\longrightarrow</code></span> **恰能分辨 (Just resolved)** *(符合瑞利判据)*
3.  **<span class="course-math" data-tex="\theta_{actual} &lt; \theta_{min}" data-display="false"><code>\theta_{actual} &lt; \theta_{min}</code></span>** <span class="course-math" data-tex="\longrightarrow" data-display="false"><code>\longrightarrow</code></span> **不能分辨 (Unresolved)** *(爱里斑严重重叠)*

要想看清极其微小的细节，必须让最小分辨角 <span class="course-math" data-tex="\theta_{min}" data-display="false"><code>\theta_{min}</code></span> 尽可能地**小**：
1.  **增大直径 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span>：** 为什么天文台要把望远镜口径做得越来越大？（不仅为了聚光，更是为了减小衍射角，提高分辨率）。第一张 PPT 底部的图证明了：Large aperture（大孔径）的衍射图变得非常小而清晰。
2.  **减小波长 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>：** 光学显微镜放大倍数有极限（受可见光波长 <span class="course-math" data-tex="400-700\text{nm}" data-display="false"><code>400-700\text{nm}</code></span> 限制）。要想看清病毒或原子，必须使用电子显微镜（电子束具有极短的物质波波长，极其微小，分辨率极高）。
{% endraw %}
