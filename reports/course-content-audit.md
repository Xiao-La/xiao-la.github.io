# 课程笔记内容审查与修正清单

日期：2026-10-08。Obsidian 源文件和 blog 导出文件均已修正并同步。下列验证结果为部署前的本地检查。

## 范围与处理方式

检查了 Obsidian Vault 中除 README 之外的全部 87 份 Markdown 笔记：17 门课程的 80 份笔记，以及 7 份补充推导。逐篇检查文字、公式、示例代码及笔记之间重复的结论。

共记录 391 项修正，涉及 74 份笔记、395 个替换位置。这是修改记录数，包含符号、术语、拼写和适用条件补充，也包含同一错误在复习笔记中的重复修正，不代表同样数量的独立概念错误。

概率基础的卡片、折叠证明、示范性内容重组已撤回，恢复原有标题、段落和列表。没有给其他笔记加入卡片，也没有重写笔记结构。此前已要求的全站文字排版与公式基线调整保留。

本轮重点是 Markdown 文字、公式和代码。相关的少量课件截图做了针对性核对，但没有对全部图片和 PDF 的每一页逐字核查；未修改课件图片和 PDF。课堂观点、个人感想和未能核实的历史解释没有作为事实错误强行改写。

## 最影响理解的修正

| 领域 | 原问题 | 修正 |
| --- | --- | --- |
| 概率 | 错排数乘了“至少一人归位”的概率；标准差缩放漏绝对值；连续期望漏 dx | 改为补事件概率、SD(aX+b)=\|a\|SD(X)、补齐积分微分 |
| 线性代数 | Householder 写成 HᵀH=0；Gram–Schmidt 用未归一化的 a₁；伪逆解漏 b | 改为 HᵀH=I，投影项用 q₁，最小范数解乘右端 b |
| 线性代数 | 认为 AᵀA 计算秩更稳定；把非负主元当作通用半正定判据 | 说明条件数平方的问题；使用所有主子式非负的判据 |
| 微积分 | 泰勒展开漏幂次；部分分式系数和极点下标错误；原函数公式缺积分符号 | 补齐幂次、下标、积分符号和积分常数 |
| 物理 | 玻尔兹曼常数指数写成 +23；阻尼解指数漏负号；并联电阻与功率公式错误 | 改为 −23、衰减指数、1/R 相加和 V²/R |
| 物理 | 横波写成反向、纵波写成同向；绝热过程一概熵不变 | 改为垂直/平行；熵不变限定为可逆绝热 |
| AI / Git | BFS 一概最优；朴素贝叶斯写成词语独立；Git 被写成只存哈希 | 补齐等步长代价条件、给定类别后的条件独立、对象内容的实际存储 |
| Java | 引用类型被称为“传引用”；静态导入缺 static；maximum 示例变量未声明 | 明确统一按值传参，修正导入和示例变量 |
| 生物 | 苔藓优势世代被标为 Sporophyte；内啡肽列为植物生物碱 | 改为 Gametophyte；换为咖啡因，并区分内啡肽 |
| 历史 | 伽利略受审写成 1632、教皇名错误、卡诺卒年错误、印加列入中美洲 | 改为 1633、约翰·保罗二世、1832、南美洲 |

这些问题在下文给出原文、修正和原因；有外部核对资料的记录附直接链接。数学中的符号和代数错误也依据原笔记上下文逐步核算。

## 验证结果

- Obsidian → blog 同步完成，并对修正记录逐项回放，确认实际源文件只包含已记录的修正与字符清理。
- Jekyll 生产构建通过；同步工具的 21 项测试通过。
- 87 个笔记页面的自动检查通过：6,274 个公式、163 张图片、2 个伪代码块、41 个表格；390px 手机宽度无整页溢出。检查也覆盖目录锚点、笔记导航和本地链接。
- 修正后的 Java 泛型 maximum 方法以整数和字符串输入编译运行通过；静态导入、ArrayList 和字符串调用片段也通过编译。
- 浏览器确认概率基础恢复原来的 6 个标题，无卡片。

## 未据此改写的内容

- Week2 中的期刊影响因子没有标明统计年份，不能视为当前数据。未找到原课堂统计来源，因此没有替换成另一年的数值。
- 文明史中对工业化农业、科学主义与文明的评价属于课程观点，保留原有记录。复活节岛“生态自毁”等被写成定论的部分则改成有争议的解释，附研究依据。
- 考试复习中的 Assignment 题目原文并未全部附在仓库，未凭空替换可能依赖题设的形式化答案。
- 考试复习目录原有“综合练习题”指向不存在的第 7 节；同步工具保留标签并避免生成死链接。未补造原笔记没有的章节。

## 覆盖情况

| 课程 / 分组 | 已检查笔记 | 有修正的笔记 | 修正记录 |
| --- | ---: | ---: | ---: |
| 大学英语 III | 1 | 0 | 0 |
| 大学化学 | 1 | 1 | 7 |
| 大学物理 | 16 | 16 | 54 |
| 旧石器艺术与符号 | 4 | 2 | 4 |
| 生命科学概论 | 3 | 3 | 10 |
| 科学与文明史概论 | 4 | 4 | 28 |
| 科学哲学 | 1 | 1 | 10 |
| 数理逻辑导论 | 6 | 4 | 18 |
| 概率与统计 | 3 | 3 | 29 |
| 离散数学 | 3 | 3 | 10 |
| 线性代数 | 10 | 9 | 84 |
| 高等数学 | 12 | 10 | 71 |
| 补充推导 | 7 | 3 | 6 |
| DSAA | 2 | 2 | 4 |
| Harvard CS50 - AI | 7 | 7 | 19 |
| MIT Missing Semester | 3 | 3 | 10 |
| Java | 1 | 1 | 24 |
| 数字逻辑 | 3 | 2 | 3 |

## 逐篇修正明细

### 大学英语 III

#### SE III Draft

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/SE III Draft.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/english-iii/se-iii-draft.md>) · [本地预览](http://127.0.0.1:4000/courses/english-iii/se-iii-draft/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

### 大学化学

#### 大化 Midterm Review

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大化 Midterm Review.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/chemistry/midterm-review.md>) · [本地预览](http://127.0.0.1:4000/courses/chemistry/midterm-review/)

**1. 硫酸盐例外中的汞(I)离子应为 Hg₂²⁺。**

原文：

```text
Hg_{2}+, Pb^2+
```

修正：

```text
Hg_{2}^2+, Pb^2+
```

**2. 氢氧化铯的化学式大小写错误。**

原文：

```text
CsOh
```

修正：

```text
CsOH
```

**3. 概率密度是波函数的模平方；一般波函数可以为复数。**

原文：

```text
**$\psi^2$ gives electron density**
```

修正：

```text
**$|\psi|^2=\psi^*\psi$ gives electron probability density**
```

**4. 主量子数的英文术语错误。**

原文：

```text
Principle quantum number
```

修正：

```text
Principal quantum number
```

**5. 电离能定义中 electron 误写为 election。**

原文：

```text
nth election
```

修正：

```text
nth electron
```

**6. 第一周期的 H、He 遵循二电子规则，不能归为八隅体规则。**

原文：

```text
Assign the electrons with the Octet Rule (only for period 1 and 2)
```

修正：

```text
Assign the electrons with the Octet Rule (especially for period 2); H and He follow the duet rule
```

**7. 明确正的平均键能应为断键能减成键能，并保留带符号焓变相加的约定。**

原文：

```text
$\Delta H_{\text{rxn}}=\sum \Delta H(\text{bonds broken}) +\sum \Delta H(\text{bonds formed})$
```

修正：

```text
$\Delta H_{\text{rxn}}\approx\sum D(\text{bonds broken})-\sum D(\text{bonds formed})$（$D$ 为正的平均键能；若使用带符号的断键/成键焓变，则将两项相加）
```

[核对资料](https://openstax.org/books/chemistry-atoms-first-2e/pages/9-4-strengths-of-ionic-and-covalent-bonds)

### 大学物理

#### Equilibrium and Elasticity - 平衡和弹性

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Equilibrium and Elasticity - 平衡和弹性.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/equilibrium-and-elasticity.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/equilibrium-and-elasticity/)

**8. 应力与力是不同物理量。**

原文：

```text
拉伸力（tensile stress）/ 剪切力（shearing stress）
```

修正：

```text
拉伸应力（tensile stress）/ 剪切应力（shearing stress）
```

**9. 压强增大时体积减小，体积弹性模量公式缺少负号。**

原文：

```text
$\frac{F}{A}=B \frac{\Delta V}{V}$
```

修正：

```text
$\Delta p=-B\frac{\Delta V}{V}$（$\Delta V$ 是带符号的体积变化）
```

[核对资料](https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus)

**10. 屈服强度术语有误，并且极限抗拉强度不等于断裂强度。**

原文：

```text
在应力达到 **抗屈强度（yield strength）** 后，发生塑性形变。在**极限强度（ultimate strength）**，发生破裂。
```

修正：

```text
在应力达到 **屈服强度（yield strength）** 后，发生塑性形变。**极限抗拉强度（ultimate tensile strength）** 是工程应力的最大值；断裂发生在**断裂强度（fracture strength）**处，二者不一定相同。
```

#### Gravitation - 引力

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Gravitation - 引力.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/gravitation.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/gravitation/)

**11. 引力势能积分下限应与所求位置 r 一致，并避免积分变量混用。**

原文：

```text
$U=-\int_{R}^\infty Fdr=-\frac{GMm}{r}$
```

修正：

```text
$U(r)=-\int_r^\infty \frac{GMm}{r^{\prime 2}}\,dr^{\prime}=-\frac{GMm}{r}$
```

#### Kinetic Theory of Gases - 气体动力学理论

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Kinetic Theory of Gases - 气体动力学理论.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/kinetic-theory-of-gases.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/kinetic-theory-of-gases/)

**12. 玻尔兹曼常数指数漏负号，原值相差 46 个数量级。**

原文：

```text
1.38\times {10}^{23}
```

修正：

```text
1.38\times {10}^{-23}
```

**13. 理想气体内能只依赖温度，但 nCᵥT 要求热容不随温度变化；通常应积分。**

原文：

```text
那么对于所有理想气体，定义
```

修正：

```text
在 $C_v$ 可视为常数、并选定内能零点时，可写为
```

**14. 振动模式在能量均分中贡献两份 kT/2，不能将振动模式数直接当能量自由度。**

原文：

```text
对于自由度为 $f$ 的气体分子：
```

修正：

```text
对于有 $f$ 个参与能量均分的二次型能量项的气体分子（每个振动模式包含动能、势能两项）：
```

**15. 3/5 的平动内能比例要求双原子气体的振动被冻结。**

原文：

```text
例如对于双原子分子，平动动能为
```

修正：

```text
例如对于转动已激发、振动仍冻结的双原子分子，平动动能为
```

**16. pV^γ 常数只适用于可逆绝热过程和恒定比热比。**

原文：

```text
绝热过程的过程方程为
```

修正：

```text
对于可逆绝热过程，且 $C_v,C_p$ 可视为常数时，过程方程为
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy)

**17. 绝热过程的常数由初态决定，不能一律等于 1。**

原文：

```text
pV^\gamma=1
```

修正：

```text
pV^\gamma=\text{constant}
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy)

**18. 绝热过程的常数由初态决定，不能一律等于 1。**

原文：

```text
TV^{\gamma-1}=1
```

修正：

```text
TV^{\gamma-1}=\text{constant}
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy)

**19. 自由膨胀内能变化为零，不是内能为零。**

原文：

```text
W=0,Q=0, E_{\text{int}}=0
```

修正：

```text
W=0,Q=0, \Delta E_{\text{int}}=0
```

#### Longitudinal Wave - 纵波

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Longitudinal Wave - 纵波.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/longitudinal-wave.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/longitudinal-wave/)

**20. 纵波振动方向在往返中会改变，定义应为平行，而非始终同向。**

原文：

```text
振动方向与波传播方向相同
```

修正：

```text
振动方向与波传播方向平行
```

[核对资料](https://openstax.org/books/university-physics-volume-1/pages/1-introduction)

#### Oscillations - 振动

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Oscillations - 振动.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/oscillations.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/oscillations/)

**21. 简谐运动英文术语错误。**

原文：

```text
Simple Harmonic Function
```

修正：

```text
Simple Harmonic Motion
```

[核对资料](https://openstax.org/books/university-physics-volume-1/pages/1-introduction)

**22. 角频率符号误写为普通字母 w。**

原文：

```text
$a=-w^2x$
```

修正：

```text
$a=-\omega^2x$
```

**23. 公式 I=I_com+mh² 描述一般物理摆；单摆是 I_com 可忽略的特例。**

原文：

```text
对单摆来说，
```

修正：

```text
对小角度的物理摆来说，
```

**24. 正阻尼应使振幅衰减，指数漏负号。**

原文：

```text
\implies x(t)=x_{m} e^{bt/2m}
```

修正：

```text
\implies x(t)=x_{m} e^{-bt/2m}
```

[核对资料](https://openstax.org/books/university-physics-volume-1/pages/15-5-damped-oscillations)

**25. 余弦振荡解要求欠阻尼条件。**

原文：

```text
其中 $$\omega'
```

修正：

```text
其中（欠阻尼，$b^2<4mk$） $$\omega'
```

[核对资料](https://openstax.org/books/university-physics-volume-1/pages/15-5-damped-oscillations)

**26. 有阻尼时位移振幅峰值不严格在固有频率；修正绝对化结论。**

原文：

```text
当受迫振动的频率达到本真频率 （Natural Angular Frequency）时，振动的振幅最大，这种现象叫做共振 （Resonance）。
```

修正：

```text
小阻尼时，驱动角频率接近固有角频率（Natural Angular Frequency）会出现共振（Resonance）。对 $m\ddot{x}+b\dot{x}+kx=F_0\cos\omega_dt$，位移振幅的峰值在 $\omega_d=\sqrt{k/m-b^2/(2m^2)}$（要求 $b^2<2mk$）；只有忽略阻尼时才趋于 $\sqrt{k/m}$。
```

#### Rolling and Precession - 滚动和进动

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Rolling and Precession - 滚动和进动.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/rolling-and-precession.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/rolling-and-precession/)

**27. 滚动计算的无量纲惯量比不能包含 I²；原式量纲错误。**

原文：

```text
$\gamma =\frac{I^2}{MR^2}$
```

修正：

```text
$\gamma =\frac{I_{com}}{MR^2}$
```

#### Rotation - 定轴转动

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Rotation - 定轴转动.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/rotation.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/rotation/)

**28. 角速度符号误写为普通字母 w。**

原文：

```text
\alpha r \hat{t}+w^2r
```

修正：

```text
\alpha r \hat{t}+\omega^2r
```

#### Thermodynamics - 热力学

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Thermodynamics - 热力学.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/thermodynamics.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/thermodynamics/)

**29. ΔL/L 是线膨胀，不是面积膨胀。**

原文：

```text
**二维情形：**
```

修正：

```text
**一维情形（线膨胀）：**
```

**30. 净辐射热功率环境温度的指数应为四次方。**

原文：

```text
T_{\text{env}}^2-T^4
```

修正：

```text
T_{\text{env}}^4-T^4
```

**31. 准静态是可逆的必要条件，并不是充分条件。**

原文：

```text
准静态过程（Quasi-static Process）是通过拉长过程的时间来近似可逆过程。
```

修正：

```text
准静态过程（Quasi-static Process）使系统经历一系列近似平衡态；还需要没有摩擦等耗散、没有有限温差传热，才是可逆过程。
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/4-1-reversible-and-irreversible-processes)

**32. 卡诺循环冷端功漏 ln，未注明一摩尔而漏 n，冷源温度符号不统一。**

原文：

```text
$W=RT_{H}\ln \frac{V_{2}}{V_{1}}-RT_{L} \frac{V_{3}}{V_{4}}=R(T_{H}-T_{C})\ln \frac{V_{2}}{V_{1}}$，$Q_{H}=RT_{H}\ln \frac{V_{2}}{V_{1}}$。
```

修正：

```text
$W=nRT_{H}\ln\frac{V_{2}}{V_{1}}-nRT_{L}\ln\frac{V_{3}}{V_{4}}=nR(T_{H}-T_{L})\ln\frac{V_{2}}{V_{1}}$，$Q_{H}=nRT_{H}\ln\frac{V_{2}}{V_{1}}$（$T_L=T_C$，表示冷源温度）。
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy)

**33. 一般绝热过程熵可能增加，只有可逆绝热才为零。**

原文：

```text
3. 绝热过程（Adiabatic Process）：$\Delta S=0$。
```

修正：

```text
3. 可逆绝热过程（Reversible Adiabatic Process）：$\Delta S=0$。
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy)

#### Transverse Wave - 横波

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/上/Transverse Wave - 横波.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/transverse-wave.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/transverse-wave/)

**34. 横波定义应为垂直，并非反向。**

原文：

```text
振动方向与波传播方向相反
```

修正：

```text
振动方向与波传播方向垂直
```

[核对资料](https://openstax.org/books/university-physics-volume-1/pages/1-introduction)

**35. Antinode 的中文为波腹，负点是错误术语。**

原文：

```text
负点（Antinodes）
```

修正：

```text
波腹（Antinodes）
```

**36. 同一术语在后续重复处同步修正。**

原文：

```text
软边界都在负点
```

修正：

```text
软边界都在波腹
```

**37. 半波损对应 π 相位改变，不是“半个相位”。**

原文：

```text
波会跳跃半个相位后反射回来
```

修正：

```text
反射波相位改变 $\pi$ 后返回
```

#### DC Circuits - 直流电路

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/DC Circuits - 直流电路.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/dc-circuits.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/dc-circuits/)

**38. 单位体积载流子数为 n；原推导 N 与结论 n 混用。**

原文：

```text
\frac{NALe}
```

修正：

```text
\frac{nALe}
```

**39. 电流密度应包含载流子带符号电荷；电子漂移方向与电流相反。**

原文：

```text
\vec{J}=\frac{i}{A}\hat{v_{d}}=ne \vec{v_{d}}
```

修正：

```text
\vec{J}=nq\vec{v_d}\quad(q=-e\text{ for electrons})
```

**40. 电阻并联式左侧漏倒数。**

原文：

```text
R=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\dots+\frac{1}{R_{n}}
```

修正：

```text
\frac{1}{R}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\dots+\frac{1}{R_{n}}
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law)

**41. 电功率公式电压漏平方。**

原文：

```text
P=I^{2}R=\frac{V}{R}
```

修正：

```text
P=I^{2}R=\frac{V^2}{R}
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law)

**42. 放电电流应使用初始电荷 Q₀，与上一行相同符号。**

原文：

```text
i=-\frac{Q}{RC}e^{-t/RC}=I_{0}e^{-t/RC}
```

修正：

```text
i=-\frac{Q_0}{RC}e^{-t/RC}=I_{0}e^{-t/RC}
```

#### Electrostatics - 静电学

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/Electrostatics - 静电学.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/electrostatics.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/electrostatics/)

**43. 秒的 SI 符号为小写 s；大写 S 是西门子。**

原文：

```text
1\text{C}=1\text{A}\cdot\text{S}
```

修正：

```text
1\text{C}=1\text{A}\cdot\text{s}
```

[核对资料](https://www.bipm.org/en/si-base-units/ampere)

**44. 圆环轴线上电场的分子分母必须使用同一轴向坐标 z。**

原文：

```text
(x^{2}+R^{2})^{3/2}
```

修正：

```text
(z^{2}+R^{2})^{3/2}
```

**45. 高斯定律的成立不依赖对称性；对称性只影响求解便利性。**

原文：

```text
高斯定律主要适用于对称/近似无穷大的情况。
```

修正：

```text
高斯定律普遍成立；具有充分对称性时，才方便直接用它求电场。
```

**46. 电容定义始终是 Q/V，不能再额外乘 κ。**

原文：

```text
有电介质的电容：$C=\kappa  \frac{Q}{V}$。
```

修正：

```text
有电介质的电容：$C=\frac{Q}{V}=\kappa C_0$（完全填充线性电介质）。
```

#### Magnetism and Induction - 磁学与电磁感应

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/Magnetism and Induction - 磁学与电磁感应.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/magnetism-and-induction.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/magnetism-and-induction/)

**47. 导线受力积分中漏微分符号。**

原文：

```text
i\left( \int \vec{l} \right)
```

修正：

```text
i\left( \int d\vec{l} \right)
```

**48. 叉积两侧必须是相应矢量，不能使用标量记号。**

原文：

```text
\tau=\mu \times B
```

修正：

```text
\vec{\tau}=\vec{\mu}\times\vec{B}
```

**49. 三维坐标重复写了 x，漏 z。**

原文：

```text
$x,y,x$ 三个分量
```

修正：

```text
$x,y,z$ 三个分量
```

**50. 安培定义已在 2019 年变更，保留旧定义的历史语境。**

原文：

```text
$1\text{A}$ 的大小是通过两个平行直导线之间磁场力的大小来定义的。
```

修正：

```text
$1\text{A}$ 曾由两根平行直导线间的磁力定义；2019 年起，SI 安培由固定元电荷 $e=1.602176634\times10^{-19}\text{C}$ 定义。
```

[核对资料](https://www.bipm.org/en/si-base-units/ampere)

**51. 电动势大小右侧也要取绝对值，且 Φ=BA 需要均匀垂直磁场。**

原文：

```text
\left| \varepsilon \right| = \frac{d\Phi}{dt}=B \frac{dA}{dt}+A \frac{dB}{dt}
```

修正：

```text
\left|\varepsilon\right|=\left|\frac{d\Phi_B}{dt}\right|=\left|B\frac{dA}{dt}+A\frac{dB}{dt}\right|\quad(\Phi_B=BA)
```

#### Optics - 光学

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/Optics - 光学.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/optics.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/optics/)

**381. 费马原理的通用表述为传播时间取驻值，不能一概说是全局最短路径。**

原文：

```text
光传播的路径是“耗时最短”的路径。
```

修正：

```text
光传播的实际路径使传播时间（或光程）取驻值；常见反射、折射问题中表现为局部最小。
```

[核对资料](https://ocw.mit.edu/courses/2-71-optics-spring-2009/5051303007648d4e7fb515c8d69193d0_8u0Mfs1m_r8.pdf)

**382. 光学干涉的英文是 Interference；Inference 是推理。**

原文：

```text
干涉 (Inference)
```

修正：

```text
干涉 (Interference)
```

#### Quantum Physics - 量子物理

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/Quantum Physics - 量子物理.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/quantum-physics.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/quantum-physics/)

**52. 光电方程中的动能为最大动能，不是所有逸出电子的动能。**

原文：

```text
hf=K+\Phi
```

修正：

```text
hf=K_{\max}+\Phi
```

**53. 康普顿散射的纵向动量守恒漏光子散射角 cosφ。**

原文：

```text
\frac{h}{\lambda}=\frac{h}{\lambda'}+\gamma mv\cos\theta
```

修正：

```text
\frac{h}{\lambda}=\frac{h}{\lambda'}\cos\phi+\gamma mv\cos\theta
```

[核对资料](https://openstax.org/books/university-physics-volume-3/pages/6-3-the-compton-effect)

**54. 相对论阈值取决于粒子质量和速度，不能统一按波长 1 nm 判定。**

原文：

```text
能量特别高的时候（波长<1 nm），要考虑相对论效应：
```

修正：

```text
当 $v$ 不再远小于 $c$（或动能不再远小于 $mc^2$）时，要考虑相对论效应：
```

**55. 以标准差定义的不确定性下界是 ħ/2，不是 ħ。**

原文：

```text
\Delta x\cdot \Delta p_{x}\geq \hbar
```

修正：

```text
\Delta x\cdot\Delta p_x\geq\frac{\hbar}{2}
```

#### Relativity - 相对论

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/Relativity - 相对论.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/relativity.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/relativity/)

**56. 狭义相对论公设限于惯性参考系，光速不变指真空光速。**

原文：

```text
“任何物理规律在不同的参考系下保持不变。”
“光速不变。”
```

修正：

```text
“物理规律在所有惯性参考系中具有相同形式。”
“真空光速在所有惯性参考系中相同。”
```

**57. 世界线定义的明显文字错误。**

原文：

```text
在思维时间中
```

修正：

```text
在四维时空中
```

#### Synthesis of Electromagnetism - 电磁学综合

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/大学物理/下/Synthesis of Electromagnetism - 电磁学综合.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/physics/synthesis-of-electromagnetism.md>) · [本地预览](http://127.0.0.1:4000/courses/physics/synthesis-of-electromagnetism/)

**58. 功率因数的分母为视在功率，不是含糊的“总功率”。**

原文：

```text
即有功功率和总功率的比值。
```

修正：

```text
即有功功率和视在功率的比值。
```

**59. 安培–麦克斯韦定律左侧应为闭合回路积分。**

原文：

```text
\int \vec{B}\cdot d\vec{l}=\mu_{0}(i+i_{D})
```

修正：

```text
\oint \vec{B}\cdot d\vec{l}=\mu_{0}(i+i_{D})
```

### 旧石器艺术与符号

#### Week1

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/旧石器艺术与符号/Week1.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/prehistoric-art/week1.md>) · [本地预览](http://127.0.0.1:4000/courses/prehistoric-art/week1/)

**330. 口头/非口头与有语言/非语言是不同分类；文字和手语也属于语言。**

原文：

```text
Verbal communication

```

修正：

```text
Vocal communication

```

[核对资料](https://www.nidcd.nih.gov/health/american-sign-language)

**331. 文字、摩尔斯码和手语不能统称为非语言交流。**

原文：

```text
Non-verbal communication

```

修正：

```text
Non-vocal communication

```

[核对资料](https://www.nidcd.nih.gov/health/american-sign-language)

**332. 手语和文字能表达过去、未来，不能把这一限制加在整个非口头交流类别上。**

原文：

```text
- Difficult - time, past/future
```

修正：

```text
- Body language alone: difficult to express time, past/future; writing and sign languages can express these.
```

[核对资料](https://www.nidcd.nih.gov/health/american-sign-language)

#### Week2

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/旧石器艺术与符号/Week2.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/prehistoric-art/week2.md>) · [本地预览](http://127.0.0.1:4000/courses/prehistoric-art/week2/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Week3

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/旧石器艺术与符号/Week3.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/prehistoric-art/week3.md>) · [本地预览](http://127.0.0.1:4000/courses/prehistoric-art/week3/)

**333. 猿类手势与符号学习是非口头交流，不能用 non-verbal 代替 non-vocal。**

原文：

```text
- Non-verbal ;
```

修正：

```text
- Non-vocal ;
```

#### Week4

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/旧石器艺术与符号/Week4.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/prehistoric-art/week4.md>) · [本地预览](http://127.0.0.1:4000/courses/prehistoric-art/week4/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

### 生命科学概论

#### Brain and Mind - 脑与心智

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/生命科学概论/Brain and Mind - 脑与心智.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/life-science/brain-and-mind.md>) · [本地预览](http://127.0.0.1:4000/courses/life-science/brain-and-mind/)

**334. circadian 特指约 24 小时的节律，生物节律的范围更大。**

原文：

```text
Circadian Rhythm（生物节律）
```

修正：

```text
Circadian Rhythm（昼夜节律）
```

[核对资料](https://openstax.org/books/biology-2e/pages/35-3-the-central-nervous-system)

**335. 交感神经并非全部使用儿茶酚胺；节前神经元和汗腺的节后神经元属于胆碱能。**

原文：

```text
- catecholamines（儿茶酚胺） - adrenergic（肾上腺素能）
```

修正：

```text
- 节前神经元：acetylcholine（乙酰胆碱），cholinergic（胆碱能）。
- 多数节后神经元：norepinephrine（去甲肾上腺素），adrenergic（肾上腺素能）；汗腺等例外使用乙酰胆碱。
```

[核对资料](https://openstax.org/books/anatomy-and-physiology-2e/pages/15-chapter-review)

#### Cell Biology - 细胞生物学

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/生命科学概论/Cell Biology - 细胞生物学.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/life-science/cell-biology.md>) · [本地预览](http://127.0.0.1:4000/courses/life-science/cell-biology/)

**336. 细胞大小不是固定的 100 微米；应区分典型真核与原核细胞范围。**

原文：

```text
- The size of a cell: $100 \mu m$
```

修正：

```text
- Typical cell sizes: eukaryotic cells $10\text{–}100\,\mu\mathrm{m}$; prokaryotic cells $0.1\text{–}5\,\mu\mathrm{m}$ (with exceptions).
```

[核对资料](https://openstax.org/books/biology/pages/4-2-prokaryotic-cells)

**337. 施莱登与施旺的细胞学说工作分属 1838 和 1839 年。**

原文：

```text
- The original Cell Theory (1838, Schwann & Schleiden)
```

修正：

```text
- The original Cell Theory: Schleiden (1838, plants) & Schwann (1839, animals)
```

[核对资料](https://openstax.org/books/microbiology/pages/3-2-foundations-of-modern-cell-theory)

**338. 细胞分裂的英文术语拼写错误。**

原文：

```text
Cell Devision
```

修正：

```text
Cell Division
```

**339. 胞饮以摄取液体和溶质为特征，不应把有无受体或摄取量作为绝对定义。**

原文：

```text
- Pinocytosis (胞饮作用): No receptor, small amount
```

修正：

```text
- Pinocytosis (胞饮作用): Uptake of extracellular fluid and dissolved solutes; often non-specific
```

[核对资料](https://openstax.org/books/biology-2e/pages/5-4-bulk-transport)

**340. Phagocytosis 是吞噬作用；胞吞/内吞是更广的类别。**

原文：

```text
Phagocytosis (胞吞作用)
```

修正：

```text
Phagocytosis (吞噬作用)
```

[核对资料](https://openstax.org/books/biology-2e/pages/5-4-bulk-transport)

#### Plants - 植物

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/生命科学概论/Plants - 植物.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/life-science/plants.md>) · [本地预览](http://127.0.0.1:4000/courses/life-science/plants/)

**341. 苔藓的优势世代是配子体；Sporophyte 是孢子体。**

原文：

```text
生活周期大部分处于Sporophyte 配子体世代
```

修正：

```text
生活周期大部分处于 Gametophyte 配子体世代
```

[核对资料](https://openstax.org/books/biology-2e/pages/25-3-bryophytes)

**342. 孢子先发育为配子体，配子由配子体产生；原记录漏掉了配子体阶段。**

原文：

```text
孢子体 Sporophyte ->减数分裂单倍体孢子 Haploid Spore ->有丝分裂卵细胞
```

修正：

```text
孢子体 Sporophyte ->减数分裂产生单倍体孢子 Haploid Spore ->有丝分裂形成配子体 Gametophyte ->有丝分裂产生配子（卵细胞或精子）
```

[核对资料](https://openstax.org/books/biology-2e/pages/25-1-early-plant-life)

**343. 内啡肽不是植物生物碱，不能与吗啡并列作为植物产物的例子。**

原文：

```text
Morphine Endorphin...（常见例子）
```

修正：

```text
Morphine（吗啡）, Caffeine（咖啡因）...（生物碱的常见例子；Endorphin 内啡肽是动物体内的肽类）
```

### 科学与文明史概论

#### History

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/科学与文明史概论/History.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/civilization-history/history.md>) · [本地预览](http://127.0.0.1:4000/courses/civilization-history/history/)

**344. 哥白尼著作标题中的“轮”为误字。**

原文：

```text
《天球运行轮》
```

修正：

```text
《天球运行论》
```

**345. 第谷生活于 1546–1601 年，不属于中世纪。**

原文：

```text
第谷（中世纪）
```

修正：

```text
第谷（文艺复兴时期）
```

[核对资料](https://mathshistory.st-andrews.ac.uk/Biographies/Brahe/)

**346. 476 年是西罗马帝国的传统结束年份；东罗马继续存在。**

原文：

```text
罗马帝国 476 年崩溃
```

修正：

```text
西罗马帝国 476 年灭亡
```

**347. 476 年的断代事件是皇帝被废黜，不能与此前罗马城被攻陷混为一谈。**

原文：

```text
476：西罗马帝国灭亡，被日耳曼人攻破
```

修正：

```text
476：西罗马帝国最后一位皇帝罗慕路斯·奥古斯都被奥多亚塞废黜
```

**348. 印加帝国位于南美洲安第斯地区。**

原文：

```text
中美洲（玛雅，阿兹特克，印加帝国）
```

修正：

```text
中美洲（玛雅，阿兹特克）；南美洲（印加帝国）
```

[核对资料](https://americanindian.si.edu/nk360/inka-water/geography/geography)

**349. 古腾堡圣经为拉丁文，不能与后来路德的德文译本混同。**

原文：

```text
印刷圣经（德文）引发宗教改革
```

修正：

```text
印刷圣经（古腾堡版为拉丁文；后来路德的德文译本借助印刷传播）推动宗教改革
```

[核对资料](https://loc.gov/exhibits/bibles/the-gutenberg-bible.html)

**350. 《关于两大世界体系的对话》不是在审判后的监禁中写成。**

原文：

```text
 - 监狱 （托勒密和哥白尼体系的对话）
```

修正：

```text
 - 1632 年出版，早于 1633 年审判（托勒密和哥白尼体系的对话）
```

[核对资料](https://catalogue.museogalileo.it/multimedia/GalileosTrialBis.html)

**351. 1992 年的教皇是约翰·保罗二世，伽利略受审在 1633 年。**

原文：

```text
教皇保罗二世为伽利略（1632 被审）平反
```

修正：

```text
教皇约翰·保罗二世承认对伽利略（1633 年被审）的处理错误
```

[核对资料](https://www.vatican.va/content/john-paul-ii/it/speeches/1992/october/documents/hf_jp-ii_spe_19921031_accademia-scienze.html)

**352. 萨迪·卡诺卒于 1832 年。**

原文：

```text
Carnot, 1796-1823
```

修正：

```text
Carnot, 1796-1832
```

[核对资料](https://mathshistory.st-andrews.ac.uk/Biographies/Carnot_Sadi/)

**353. Max Weber 为马克斯·韦伯，不能与 Karl Marx 的名字混写。**

原文：

```text
马克思韦伯
```

修正：

```text
马克斯韦伯
```

**354. 天主教也是基督教；“基督教”不能在此与新教等同。**

原文：

```text
天主教（旧教）和基督教（新教）的区别
```

修正：

```text
天主教（旧教）和新教的区别
```

**355. 一战相关限制来自 1899 年海牙宣言；禁止化学战的日内瓦议定书签订于 1925 年。**

原文：

```text
日内瓦条约：不能发射毒气弹。
```

修正：

```text
1899 年海牙宣言：禁止以散布窒息性或有害气体为唯一目的的投射物。
```

[核对资料](https://ihl-databases.icrc.org/en/ihl-treaties/hague-finact-1899/final-act)

**356. 此处描述化肥用途，“废料”为误字。**

原文：

```text
硝酸铵用作废料
```

修正：

```text
硝酸铵用作肥料
```

**357. 原文把人均量与总量混淆，年份也不符作者原论文；预测不能记为已发生的事实。**

原文：

```text
Richard Duncan：工业文明由廉价的石油产生的，石油产量的高峰为 1972 年。
```

修正：

```text
Richard Duncan 的奥杜威假说：以人均能源消费讨论工业文明的持续时间。其 2000 年论文将 1920–1999 年数据中的人均石油产量峰值记为 1979 年，区别于全球石油总产量；文明衰退的预测属于假说。
```

[核对资料](https://www.energycrisis.com/duncan/olduvai2000.htm)

**358. 绿色革命并非在 1968 年突然开始；布劳格获诺贝尔和平奖在 1970 年。**

原文：

```text
1968 绿色革命：工业化农业。诺曼布劳格“诺贝尔和平奖”
```

修正：

```text
绿色革命：工业化农业（“绿色革命”一词于 1968 年提出）。诺曼布劳格“1970 年诺贝尔和平奖”
```

[核对资料](https://www.nobelprize.org/prizes/peace/1970/borlaug/lecture/)

#### Insights

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/科学与文明史概论/Insights.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/civilization-history/insights.md>) · [本地预览](http://127.0.0.1:4000/courses/civilization-history/insights/)

**359. 把生态自毁与接触前人口崩溃当作定论不符合目前的研究证据。**

原文：

```text
复活节岛（石像，由于过度破坏环境而文明衰退）
```

修正：

```text
复活节岛（石像；课堂采用“生态自毁”解释，但欧洲接触前人口崩溃的说法有争议，近年研究不支持其为定论）
```

[核对资料](https://www.nature.com/articles/s41586-024-07881-4)

**360. 该文本讨论自然经济与平衡，不能直接归为现代生物演化论。**

原文：

```text
林奈《自然的经济体系》：演化论
```

修正：

```text
林奈《自然的经济体系》：自然界的相互依存、循环与平衡（早期生态学思想）
```

[核对资料](https://huntbot.org/linndiss/linndiss?page=1)

#### Review

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/科学与文明史概论/Review.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/civilization-history/review.md>) · [本地预览](http://127.0.0.1:4000/courses/civilization-history/review/)

**361. 复习笔记重复了复活节岛崩溃说，需与章节笔记同步限定。**

原文：

```text
反面案例是**复活节岛**（因石像建造过度破坏环境，导致文明崩溃）
```

修正：

```text
课堂案例是**复活节岛**（“生态自毁”解释存在争议；近年研究不支持欧洲接触前人口崩溃为定论）
```

[核对资料](https://www.nature.com/articles/s41586-024-07881-4)

**362. 476 年的断代事件是皇帝被废黜，非当年罗马城被攻陷。**

原文：

```text
476 年西罗马帝国被日耳曼人攻破崩溃
```

修正：

```text
476 年西罗马帝国最后一位皇帝被奥多亚塞废黜
```

**363. 复习笔记中印加帝国的地理位置同样需要修正。**

原文：

```text
中美洲（玛雅、阿兹特克、印加帝国）
```

修正：

```text
中美洲（玛雅、阿兹特克）、南美洲（印加帝国）
```

[核对资料](https://americanindian.si.edu/nk360/inka-water/geography/geography)

**364. 复习笔记重复了伽利略著作与审判的时间错误。**

原文：

```text
在监狱写出《关于两大世界体系的对话》
```

修正：

```text
1632 年出版《关于两大世界体系的对话》（早于 1633 年审判）
```

[核对资料](https://catalogue.museogalileo.it/multimedia/GalileosTrialBis.html)

**365. 复习笔记中的教皇姓名也需要修正。**

原文：

```text
1992 年教皇保罗二世为其平反
```

修正：

```text
1992 年教皇约翰·保罗二世承认对其处理错误
```

[核对资料](https://www.vatican.va/content/john-paul-ii/it/speeches/1992/october/documents/hf_jp-ii_spe_19921031_accademia-scienze.html)

**366. 复习笔记重复了卡诺的卒年错误。**

原文：

```text
Carnot, 1796-1823
```

修正：

```text
Carnot, 1796-1832
```

[核对资料](https://mathshistory.st-andrews.ac.uk/Biographies/Carnot_Sadi/)

**367. 复习笔记把一战时的海牙宣言误称为日内瓦条约。**

原文：

```text
《日内瓦条约》
```

修正：

```text
1899 年海牙宣言
```

[核对资料](https://ihl-databases.icrc.org/en/ihl-treaties/hague-finact-1899/final-act)

**368. 此处为肥料用途，非废料。**

原文：

```text
硝酸铵炸药变废料
```

修正：

```text
炸药原料硝酸铵转用于肥料
```

**369. 复习笔记需区分术语提出年份与诺贝尔奖年份。**

原文：

```text
**1968 绿色革命**：诺曼·布劳格推广工业化农业获诺贝尔和平奖
```

修正：

```text
**绿色革命**（1968 年提出这一名称）：诺曼·布劳格推广农业技术，获 1970 年诺贝尔和平奖
```

[核对资料](https://www.nobelprize.org/prizes/peace/1970/borlaug/lecture/)

**370. 复习笔记同样混淆了年份、人均量与总量以及预测与事实。**

原文：

```text
Richard Duncan 指出：工业文明由廉价石油产生，石油产量高峰为 1972 年。
```

修正：

```text
Richard Duncan 的奥杜威假说讨论人均能源消费与工业文明；其 2000 年论文中的人均石油产量峰值为 1979 年（1920–1999 年数据），不是全球石油总产量峰值。文明衰退预测属于假说。
```

[核对资料](https://www.energycrisis.com/duncan/olduvai2000.htm)

#### Special Lecture

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/科学与文明史概论/Special Lecture.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/civilization-history/special-lecture.md>) · [本地预览](http://127.0.0.1:4000/courses/civilization-history/special-lecture/)

**371. 地图标题误将“舆”写为“與”。**

原文：

```text
皇與全览图
```

修正：

```text
皇舆全览图
```

本笔记中 2 处重复位置同步修正。

[核对资料](https://www.loc.gov/item/74650033/)

### 科学哲学

#### Lecture

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/其他通识课/科学哲学/Lecture.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/philosophy-science/lecture.md>) · [本地预览](http://127.0.0.1:4000/courses/philosophy-science/lecture/)

**372. 现代人非洲起源不能简化为埃塞尔比亚单点；古 DNA 证明存在与古人类的混合。**

原文：

```text
- 人类共同祖先 - 智人 - 今埃塞尔比亚。（灭绝其他人种）
```

修正：

```text
- 智人起源于非洲，不能把所有人的共同祖先定位为今埃塞尔比亚的单一群体；现代人与尼安德特人、丹尼索瓦人曾发生基因交流。
```

[核对资料](https://www.nature.com/articles/nature21347)

**373. 语言优势并非古人类消失已证实的唯一原因。**

原文：

```text
- 智人打败尼安德特人/丹尼索瓦人 ：语言能力强。
```

修正：

```text
- 智人与尼安德特人/丹尼索瓦人的演化关系：语言能力差异是一种解释假说，不能记为已证实的唯一原因。
```

**374. 不能把埃及象形文字的关键破译成果仅归于托马斯·杨。**

原文：

```text
罗塞塔石碑（托马斯杨破译）
```

修正：

```text
罗塞塔石碑（托马斯·杨有重要贡献；商博良于 1822 年取得关键破译突破）
```

[核对资料](https://www.britishmuseum.org/blog/everything-you-ever-wanted-know-about-rosetta-stone)

**375. 天主教对玛利亚的尊崇不等于神性或对上帝的崇拜。**

原文：

```text
玛利亚有神性
```

修正：

```text
尊崇玛利亚为圣母，但不把她视为神
```

[核对资料](https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_three/article_9/paragraph_6_mary_-_mother_of_christ%2C_mother_of_the_church.html)

**376. Max Weber 的中文名误写为马克思韦伯。**

原文：

```text
马克思韦伯
```

修正：

```text
马克斯韦伯
```

**377. 拉斐尔画作的常用中文名称为《雅典学园》。**

原文：

```text
《雅典学院》
```

修正：

```text
《雅典学园》
```

**378. 伊壁鸠鲁承认诸神存在，主张其不干预人类事务。**

原文：

```text
伊壁鸠鲁：第一个无神论哲学家
```

修正：

```text
伊壁鸠鲁：认为诸神不干预人间事务，不能简单称为第一个无神论哲学家
```

[核对资料](https://plato.stanford.edu/archives/spr2023/entries/epicurus/)

**379. 政治制度分类中的“通知”应为“统治”。**

原文：

```text
一个人通知
```

修正：

```text
一个人统治
```

**380. 该列表把后来的充足理由原则与亚里士多德的逻辑混在一起。**

原文：

```text
四大规律：同一律，矛盾律，排中律，因果律
```

修正：

```text
传统逻辑常列同一律、不矛盾律、排中律；充足理由律主要与莱布尼茨相关，不能把“因果律”列为亚里士多德的第四条逻辑规律
```

[核对资料](https://plato.stanford.edu/archives/fall2024/entries/sufficient-reason/)

**390. 伊斯兰教称穆罕默德为最后一位先知，原文“圣人”混淆了宗教概念。**

原文：

```text
穆罕默德 - 最后一位圣人
```

修正：

```text
穆罕默德 - 最后一位先知（伊斯兰教信仰）
```

### 数理逻辑导论

#### Exam Review - 考试复习

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/数理逻辑导论/Exam Review - 考试复习.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/logic/exam-review.md>) · [本地预览](http://127.0.0.1:4000/courses/logic/exam-review/)

**196. 变量位于其他变量的量词作用域内仍可自由出现。**

原文：

```text
不在任何量词作用域内的变量
```

修正：

```text
该次出现不被任何对应变量的量词绑定
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**197. 约束出现需要对应同名变量的量词。**

原文：

```text
在某个量词作用域内的变量
```

修正：

```text
该次出现被对应变量的量词绑定
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**198. 自由变量由环境赋值，非阐释定义。**

原文：

```text
可在阐释中取合适的 $y$ 和 $P$ 满足
```

修正：

```text
可选择合适的阐释 $\mathcal I$ 和环境 $E$（赋值给 $y$）满足
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**387. 关系阐释是有序对的集合，属于或不属于其中的对象应是 (3,3) 等有序对，而非公式。**

原文：

```text
$x=3$ 时 $F(3,3) \notin F^{\mathcal{I}}$；$x=4$ 时 $F(4,4) \notin F^{\mathcal{I}}$
```

修正：

```text
$x=3$ 时 $(3,3) \notin F^{\mathcal{I}}$；$x=4$ 时 $(4,4) \notin F^{\mathcal{I}}$
```

#### FOL - 一阶逻辑

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/数理逻辑导论/FOL - 一阶逻辑.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/logic/fol.md>) · [本地预览](http://127.0.0.1:4000/courses/logic/fol/)

**60. 全称命题形式化公式漏右括号。**

原文：

```text
$\forall x(S(x)\to K(x,\text{Math})$
```

修正：

```text
$\forall x(S(x)\to K(x,\text{Math}))$
```

**61. 约束变元的英文术语为 bound，不是 bounded。**

原文：

```text
Bounded Variables
```

修正：

```text
Bound Variables
```

[核对资料](https://forallx.openlogicproject.org/html/Ch27.html)

**62. 开放公式给定赋值后同样具有真值，原表述错误。**

原文：

```text
因为没有自由变量才能决定真或假。
```

修正：

```text
闭公式的真值不依赖于变量赋值；开放公式在给定阐释和变量赋值后也可以决定真或假。
```

[核对资料](https://forallx.openlogicproject.org/html/Ch27.html)

**63. 分配性误写为可交换性。**

原文：

```text
可交换性（Distributivity）
```

修正：

```text
分配性（Distributivity）
```

**391. 项属于语法，对象属于论域；原文将表示对象的表达式与对象本身等同。**

原文：

```text
Terms（项）就是 Object。严格定义为：
```

修正：

```text
Terms（项）是表示对象的语法表达式，其值由阐释与变量赋值决定。严格定义为：
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

#### Overview - 概览

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/数理逻辑导论/Overview - 概览.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/logic/overview.md>) · [本地预览](http://127.0.0.1:4000/courses/logic/overview/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Prerequisite Knowledge - 预备知识

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/数理逻辑导论/Prerequisite Knowledge - 预备知识.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/logic/prerequisite-knowledge.md>) · [本地预览](http://127.0.0.1:4000/courses/logic/prerequisite-knowledge/)

**64. 归纳假设必须针对任意 k，而不能只重复基例。**

原文：

```text
假设 $P(k)$ 对 $k= n_{0}$ 成立。
```

修正：

```text
对任意 $k\geq n_0$，假设 $P(k)$ 成立。
```

#### Program Verification - 程序验证

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/数理逻辑导论/Program Verification - 程序验证.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/logic/program-verification.md>) · [本地预览](http://127.0.0.1:4000/courses/logic/program-verification/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Propositional Logic - 命题逻辑

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/数理逻辑导论/Propositional Logic - 命题逻辑.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/logic/propositional-logic.md>) · [本地预览](http://127.0.0.1:4000/courses/logic/propositional-logic/)

**188. 蕴含的后件英文应为 consequent。**

原文：

```text
后件（Consequence）
```

修正：

```text
后件（Consequent）
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**189. 解析约定与逻辑结合律不同，蕴含不满足结合律。**

原文：

```text
$\to$ 具有右结合性。
```

修正：

```text
$\to$ 按右结合约定解析（不满足结合律）。
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**190. 任意子公式替换不能保证永真式仍为永真式。**

原文：

```text
将一个式子里的某些部分替换为其他式子，且保持替换的一致性（相同的部分替换为相同的式子）
```

修正：

```text
将公式中的原子命题统一替换为其他公式，且保持替换的一致性（同一原子命题的所有出现均替换为同一公式）
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**191. 依赖额外前提的结论不一定是系统的定理。**

原文：

```text
这里我们称 $A_{n}$ 是 $\mathscr{H}$ 中的一个定理（Theorem）。
```

修正：

```text
当 $\Sigma=\varnothing$ 时，称 $A_n$ 是 $\mathscr H$ 中的定理（Theorem）；否则它是由前提 $\Sigma$ 导出的结论。
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**192. 并集的右侧应为单元素集合。**

原文：

```text
\Sigma \cup {\alpha}\vdash\alpha
```

修正：

```text
\Sigma \cup \{\alpha\}\vdash\alpha
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**193. 给出的证明只覆盖有限前提集。**

原文：

```text
要证明 ND 的完备性，设
```

修正：

```text
对有限前提集证明 ND 的完备性，设
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**194. 完备性证明的括号未闭合。**

原文：

```text
(a_{0}\to(a_{1}\to(\dots\to(a_{n}\to\beta)\dots))
```

修正：

```text
(a_{0}\to(a_{1}\to(\dots\to(a_{n}\to\beta)\dots)))
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

**195. 主范式英文术语写错。**

原文：

```text
Principle CNF/DNF
```

修正：

```text
Principal CNF/DNF
```

[核对资料](https://builds.openlogicproject.org/open-logic-complete.pdf)

### 概率与统计

#### Probability Basic - 概率基础

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/概率与统计/Probability Basic - 概率基础.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/probability-statistics/probability-basic.md>) · [本地预览](http://127.0.0.1:4000/courses/probability-statistics/probability-basic/)

**65. 交换律的英文术语错误。**

原文：

```text
Communicative Laws
```

修正：

```text
Commutative Laws
```

**66. 分配律的中文术语错误。**

原文：

```text
分配率
```

修正：

```text
分配律
```

**67. 一般概率测度并非定义在任意子集上，需要指定可测事件族。**

原文：

```text
是一个定义在样本空间 $\Omega$ 的子集上的实值函数，满足一下三个公理：
```

修正：

```text
是定义在样本空间 $\Omega$ 的事件集合 $\mathcal F$（一个 $\sigma$-代数）上的实值函数，满足以下三个公理：
```

**68. 概率非负性应针对可测事件。**

原文：

```text
对任意 $A\subset \Omega$
```

修正：

```text
对任意 $A\in\mathcal F$
```

**69. 概率规范性术语误写。**

原文：

```text
规范型（Normalization）
```

修正：

```text
规范性（Normalization）
```

**70. 概率空间第二项是事件 σ-代数，应与前面的定义对应。**

原文：

```text
$(\Omega, A, P)$
```

修正：

```text
$(\Omega,\mathcal F,P)$
```

**71. 有限可加公式缺少两两互斥条件。**

原文：

```text
有限可加性（Finite Additivity）：
```

修正：

```text
有限可加性（Finite Additivity）：当 $A_1,\dots,A_n$ 两两互斥时，
```

**72. 样本空间误混入了 w=。**

原文：

```text
\Omega=\{ w=\omega_{1},\omega_{2},\dots,\omega _{n} \}
```

修正：

```text
\Omega=\{\omega_{1},\omega_{2},\dots,\omega_n\}
```

**73. A 定义为至少一个位置正确，错排数应乘它的补事件概率。**

原文：

```text
$D_{n}=n!P(A)$
```

修正：

```text
$D_{n}=n!P(\overline A)$
```

**74. 条件概率定义的分母必须大于零。**

原文：

```text
在事件 $B$ 发生的情况下，事件 $A$ 的条件概率为：
```

修正：

```text
在 $P(B)>0$ 且事件 $B$ 发生的情况下，事件 $A$ 的条件概率为：
```

[核对资料](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_probability.pdf)

**75. 两个分支的条件概率需均有定义。**

原文：

```text
- 全概率公式：$P(A)=
```

修正：

```text
- 全概率公式（要求 $0<P(B)<1$）：$P(A)=
```

[核对资料](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_probability.pdf)

**76. 链式法则中的条件概率需要非零条件事件。**

原文：

```text
- 链式法则：$P(A_{1}
```

修正：

```text
- 链式法则（要求式中各条件事件的概率大于零）：$P(A_{1}
```

[核对资料](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_probability.pdf)

**77. 贝叶斯公式分母应对划分全部求和，不能与自由下标 i 混用。**

原文：

```text
\sum P(B_{i})P(A|B_{i})
```

修正：

```text
\sum_{j=1}^n P(B_j)P(A|B_j)
```

[核对资料](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_probability.pdf)

**78. 贝叶斯公式及所用条件概率需补齐非零概率条件。**

原文：

```text
其中 $B_{1}, \dots, B_{n}$ 是样本空间的一个划分（partition）。
```

修正：

```text
其中 $B_{1}, \dots, B_{n}$ 是样本空间的一个划分（partition），且 $P(A)>0$、各 $P(B_j)>0$。
```

[核对资料](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_probability.pdf)

**79. 相互独立定义中第 k 个下标的括号写错。**

原文：

```text
A_{i_{}k}
```

修正：

```text
A_{i_k}
```

**80. 条件独立应从相互独立定义改写，且需要 P(B)>0。**

原文：

```text
把上面的条件概率的定义改成
```

修正：

```text
在 $P(B)>0$ 时，把上面的相互独立定义改成
```

#### Probability Distributions - 概率分布

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/概率与统计/Probability Distributions - 概率分布.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/probability-statistics/probability-distributions.md>) · [本地预览](http://127.0.0.1:4000/courses/probability-statistics/probability-distributions/)

**81. 二项分布是离散分布，应称概率质量函数。**

原文：

```text
其概率密度函数为：
$$
P(X=x)=\binom{n}{x}
```

修正：

```text
其概率质量函数（PMF）为：
$$
P(X=x)=\binom{n}{x}
```

**82. 几何分布是离散分布，应称概率质量函数。**

原文：

```text
其概率密度函数为：
$$
P(X=x)=p(1-p)
```

修正：

```text
其概率质量函数（PMF）为：
$$
P(X=x)=p(1-p)
```

**83. 均匀分布 CDF 的分段漏掉 x=b。**

原文：

```text
1, & x>b,
```

修正：

```text
1, & x\geq b,
```

**84. 正态分布第二参数已约定为方差，标准化段误写成标准差。**

原文：

```text
$X\sim N(\mu,\sigma)$
```

修正：

```text
$X\sim N(\mu,\sigma^2)$
```

#### Random Variables - 随机变量

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/概率与统计/Random Variables - 随机变量.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/probability-statistics/random-variables.md>) · [本地预览](http://127.0.0.1:4000/courses/probability-statistics/random-variables/)

**85. 随机变量需要满足可测性。**

原文：

```text
定义在样本空间上的一个实值函数。
```

修正：

```text
定义在样本空间上的一个可测实值函数。
```

**86. 随机变量并非只有离散/连续二分，存在混合型等。**

原文：

```text
随机变量分为离散的（Discrete）和连续的（Continuous）。
```

修正：

```text
常见的随机变量类型有离散的（Discrete）和连续的（Continuous），也存在混合型等其他类型。
```

**87. 概率事件应使用随机变量 X，x 只是积分变量。**

原文：

```text
P(a\leq x\leq b)
```

修正：

```text
P(a\leq X\leq b)
```

**88. 点概率的随机变量符号应为 X。**

原文：

```text
$P(x=a)=P(a\leq x\leq a)
```

修正：

```text
$P(X=a)=P(a\leq X\leq a)
```

**89. 离散期望使用 PMF，而非 PDF。**

原文：

```text
概率密度函数为 $f(x)$ 的离散随机变量
```

修正：

```text
概率质量函数为 $p(x)$ 的离散随机变量
```

**90. 离散期望的 PMF 符号与定义统一。**

原文：

```text
\sum_{x\in{S}} xf(x)
```

修正：

```text
\sum_{x\in S}xp(x)
```

**91. 连续期望积分漏 dx。**

原文：

```text
\mathrm{E}(X)=\int_{-\infty}^{\infty}xf(x)
```

修正：

```text
\mathrm{E}(X)=\int_{-\infty}^{\infty}xf(x)\,dx
```

**92. 方差是平方后的期望，原括号将平方写到期望之外。**

原文：

```text
\mathrm{Var}(X)=\mathrm{E}(X-\mathrm{E}(X))^{2}
```

修正：

```text
\mathrm{Var}(X)=\mathrm{E}\left[(X-\mathrm{E}(X))^2\right]
```

**93. 标准差非负，缩放系数需取绝对值。**

原文：

```text
\mathrm{SD}(aX+b)=a\mathrm{SD}(X)
```

修正：

```text
\mathrm{SD}(aX+b)=|a|\mathrm{SD}(X)
```

### 离散数学

#### Algorithm - 算法

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/离散数学/Algorithm - 算法.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/discrete-mathematics/algorithm.md>) · [本地预览](http://127.0.0.1:4000/courses/discrete-mathematics/algorithm/)

**94. 大 O 定义中的上界常数须为正。**

原文：

```text
\exists c,n_{0}, \forall n>n_{0}
```

修正：

```text
\exists c>0,n_0,\ \forall n>n_0
```

#### Logic and Proofs - 逻辑与证明

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/离散数学/Logic and Proofs - 逻辑与证明.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/discrete-mathematics/logic-and-proofs.md>) · [本地预览](http://127.0.0.1:4000/courses/discrete-mathematics/logic-and-proofs/)

**95. 只加一个量词不能保证多个自由变量的公式成为命题。**

原文：

```text
或在它的前面加上一个 Quantifier
```

修正：

```text
或用量词约束全部自由变量
```

**96. 公理是理论的出发假设，不要求不证自明。**

原文：

```text
**Axiom（公理）：** 不证自明的命题。
```

修正：

```text
**Axiom（公理）：** 在一个理论中选定、不经证明而作为推理起点的命题。
```

#### Set and Function - 集合与函数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/离散数学/Set and Function - 集合与函数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/discrete-mathematics/set-and-function.md>) · [本地预览](http://127.0.0.1:4000/courses/discrete-mathematics/set-and-function/)

**97. 等势需要双射，单独满射不充分。**

原文：

```text
存在满射（one-to-one correspondence）
```

修正：

```text
存在双射（one-to-one correspondence）
```

**98. 纯字典序不一定能列尽有限字符串；必须先按长度枚举。**

原文：

```text
有限字母表 $A$ 上的有限字符串集 $S$ 是可数无穷的。用字典序去形成序列即可。
```

修正：

```text
非空有限字母表 $A$ 上的有限字符串集 $S$ 是可数无穷的。先按长度、再在同一长度内按字典序枚举即可。
```

**99. 双射定义循环误写为又是双射，应为又是单射。**

原文：

```text
如果既是满射又是双射。
```

修正：

```text
如果既是满射又是单射。
```

**100. progression 是数列，并非求和的级数。**

原文：

```text
算术级数（Arithmetic Progression）
```

修正：

```text
等差数列（Arithmetic Progression）
```

**101. progression 是数列，并非求和的级数。**

原文：

```text
几何级数（Geometric Progression）
```

修正：

```text
等比数列（Geometric Progression）
```

**102. k³-(k-1)³ 的望远镜和推导的是平方和，而非立方和。**

原文：

```text
（推导，以 $\sum k^{3}$ 为例，使用 Telescoping
```

修正：

```text
（推导，以 $\sum k^{2}$ 为例，使用 Telescoping
```

**103. 和式的下标为 i，被求和项也应是 i。**

原文：

```text
\left( \sum_{i=1}^n k\right)^{2}
```

修正：

```text
\left(\sum_{i=1}^n i\right)^2
```

### 线性代数

#### Complex Matrices - 复矩阵

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Complex Matrices - 复矩阵.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/complex-matrices.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/complex-matrices/)

**104. 复数内积需要共轭，得到特征值的模平方。**

原文：

```text
(\lambda x^H)(\lambda x)=\lambda^{2}x^Hx
```

修正：

```text
(\bar\lambda x^H)(\lambda x)=|\lambda|^{2}x^Hx
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**105. 余弦函数漏写角度。**

原文：

```text
\lambda=\cos\pm i\sin\theta
```

修正：

```text
\lambda=\cos\theta\pm i\sin\theta
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**106. 反对称矩阵的转置应等于负自身。**

原文：

```text
（$K^T=K$）
```

修正：

```text
（$K^T=-K$）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**107. 共轭转置不能丢掉矩阵的共轭。**

原文：

```text
(iK)^H=(\bar{i} \bar{K})^T=K^T(-i)^T=-iK^H=iK
```

修正：

```text
(iK)^H=\bar i K^H=-i(-K)=iK
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**108. 实向量长度应先平方。**

原文：

```text
$\lVert x \rVert=\sum x_{i}^{2}$
```

修正：

```text
$\lVert x \rVert^{2}=\sum x_{i}^{2}$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**109. 复数空间的正交条件使用共轭转置。**

原文：

```text
| Orthogonal：$x^Ty=0$                 | Orthogonal：$x^Ty=0$
```

修正：

```text
| Orthogonal：$x^Ty=0$                 | Orthogonal：$x^Hy=0$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**110. Schur 三角化定理的名称拼写错误。**

原文：

```text
Schor Lemma
```

修正：

```text
Schur Lemma
```

本笔记中 4 处重复位置同步修正。

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**111. 三角化证明中的基向量变量写错。**

原文：

```text
Ax_{2}=t_{12}x_{1}+t_{22}u_{2}
```

修正：

```text
Ax_{2}=t_{12}x_{1}+t_{22}x_{2}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**112. 二阶矩阵的特征向量是非零二维向量。**

原文：

```text
v_{1}\in \mathbb{C}$
```

修正：

```text
v_{1}\in \mathbb{C}^{2}\setminus\{0\}$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**113. Schur 递归证明使用三阶分块矩阵 U₂，并应作用于原矩阵 A。**

原文：

```text
T=U_{1}^{-1}U'^{-1}T'U'U_{1}$，也就是存在 $U=U'U_{1}
```

修正：

```text
T=U_{2}^{-1}U'^{-1}AU'U_{2}$，也就是存在 $U=U'U_{2}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**114. Normal matrix 的中文名称是正规矩阵。**

原文：

```text
一个正当矩阵
```

修正：

```text
一个正规矩阵
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**115. 约当块的零空间是一维空间，不能只给一个解。**

原文：

```text
\implies x=\begin{bmatrix}1 \\ 0 \\ \vdots \\ 0\end{bmatrix}
```

修正：

```text
\implies x=c\begin{bmatrix}1 \\ 0 \\ \vdots \\ 0\end{bmatrix},\quad c\in\mathbb C
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**116. 约当形并非一定不可对角化。**

原文：

```text
约当形的矩阵是最不可对角化的形式。
```

修正：

```text
约当形可对角化当且仅当所有约当块的大小均为 $1$。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Determinant - 行列式

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Determinant - 行列式.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/determinant.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/determinant/)

**117. 奇异矩阵的已有非零主元之积不等于行列式。**

原文：

```text
$\det(A)=\pm(\text{product of pivots})$。（用 $LU$ 分解证明）
```

修正：

```text
满秩时 $\det(A)=\pm(\text{product of all }n\text{ pivots})$；秩不足时 $\det(A)=0$。（用 $LU$ 分解证明）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**118. 置换的符号 ±1 与逆序数是不同概念。**

原文：

```text
也是该排列 $p$ 的 **逆序数（Inversion Number）**，即集合
```

修正：

```text
也是该排列的符号。该排列 $p$ 的 **逆序数（Inversion Number）** 是集合
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**119. 行列式展开漏乘对应矩阵元素。**

原文：

```text
\det(A)=\sum(-1)^{k-1} M_{1k}
```

修正：

```text
\det(A)=\sum_{k=1}^n(-1)^{k-1}a_{1k}M_{1k}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**120. M 已定义为余子式的数值，不能再取行列式。**

原文：

```text
C_{ij}=(-1)^{i+j}\det(M_{ij})
```

修正：

```text
C_{ij}=(-1)^{i+j}M_{ij}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**121. 克莱姆法则应按被替换的列展开。**

原文：

```text
然后将行列式按第 $i$ 行展开
```

修正：

```text
然后将行列式按第 $i$ 列展开
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**122. 主元比值公式需要非零顺序主子式，而非仅总行列式非零。**

原文：

```text
假设 $\det(A)\neq 0$。
```

修正：

```text
假设无需换行即可消元，且所有顺序主子式 $\det(A_k)\neq 0$，约定 $\det(A_0)=1$。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Eigenvalues and Eigenvectors - 特征值和特征向量

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Eigenvalues and Eigenvectors - 特征值和特征向量.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/eigenvalues-and-eigenvectors.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/eigenvalues-and-eigenvectors/)

**123. 可对角化需要完整的特征向量基。**

原文：

```text
可对角化的充要条件是特征向量相互独立。
```

修正：

```text
$n$ 阶矩阵可对角化的充要条件是存在 $n$ 个线性无关的特征向量。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**124. 多项式求和的幂次应随索引变化。**

原文：

```text
f(A)v=\sum a_{i}A^nv=\sum a_{i}\lambda^{n}v
```

修正：

```text
f(A)v=\sum_{i=0}^n a_{i}A^iv=\sum_{i=0}^n a_{i}\lambda^{i}v
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**125. 同时对角化需要共同的特征向量基，而非一个特征向量。**

原文：

```text
\text{ share the same eigenvector } S
```

修正：

```text
\text{ share a common eigenvector basis } S
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**126. 排除零向量不能作为特征向量的证明漏洞。**

原文：

```text
也就是说，$Av_{i}$ 是 $B$ 的特征向量
```

修正：

```text
若 $Av_i=0$，则 $v_i$ 已是 $A$ 的零特征值特征向量；否则 $Av_{i}$ 是 $B$ 的特征向量
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**127. AB 和 BA 的单位矩阵尺寸写反。**

原文：

```text
\lambda^n \lvert AB - \lambda I_{n} \rvert=\lambda ^m \lvert BA-\lambda I_{m} \rvert
```

修正：

```text
\lambda^n \lvert AB - \lambda I_{m} \rvert=\lambda ^m \lvert BA-\lambda I_{n} \rvert
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**128. 秩一的幂零矩阵也可能所有特征值均为零。**

原文：

```text
秩为 $1$ 的矩阵必然有 $n-1$ 个特征值为 $0$。
```

修正：

```text
秩为 $1$ 的 $n$ 阶矩阵至少有 $n-1$ 个特征值为 $0$（按代数重数计）。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**129. 斐波那契递推采用状态向量的第二个分量。**

原文：

```text
F_{n}&=u_{n 1}
```

修正：

```text
F_{n}&=u_{n 2}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**130. 递推式左右步数应一致。**

原文：

```text
u_{n}=A^k u_{0} =\lambda_{i}^k x_{i}
```

修正：

```text
u_{k}=A^k u_{0} =\lambda_{i}^k x_{i}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Final Review - 期末复习

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Final Review - 期末复习.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/final-review.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/final-review/)

**170. 非奇异性是矩阵性质，方程组的对应结论是解唯一。**

原文：

```text
$\forall \mathbf{b},\ A\mathbf{x}=\mathbf{b}$ 非奇异
```

修正：

```text
$\forall \mathbf{b},\ A\mathbf{x}=\mathbf{b}$ 有且仅有一组解
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**171. 置换矩阵的定义应包含零元素条件。**

原文：

```text
每行每列恰有一个 $1$，用于交换行
```

修正：

```text
每行每列恰有一个 $1$、其余元素为 $0$ 的方阵，用于交换行
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**172. 加行操作要求不同的行。**

原文：

```text
$(i,j)$ 替换为 $l$
```

修正：

```text
$(i,j)$（$i\ne j$）替换为 $l$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**173. 初等矩阵需要非零缩放因子。**

原文：

```text
$(i,i)$ 替换为 $k$
```

修正：

```text
$(i,i)$ 替换为 $k\ne 0$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**174. LU 两个三角系统的求解方向不同，置换也必须作用于右端。**

原文：

```text
两个都是三角方程组，直接回代。
```

修正：

```text
下三角方程组用前代，上三角方程组用回代；有行交换时先将右端改为 $P\mathbf b$。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**175. 唯一性条件缺少矩阵可逆。**

原文：

```text
**LU 分解唯一性：** 若
```

修正：

```text
**LU 分解唯一性：** 若 $A$ 可逆，且
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**176. 仅两种封闭性会错误地包含空集。**

原文：

```text
**子空间 $W \subseteq V$：**
```

修正：

```text
**子空间 $W \subseteq V$（$W$ 非空）：**
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**177. 行交换必须保留在左零空间的基变换中。**

原文：

```text
或 $L^{-1}$ 的最后 $m-r$ 行
```

修正：

```text
无换行的 $A=LU$ 中取 $L^{-1}$ 的最后 $m-r$ 行；若 $PA=LU$，则取 $L^{-1}P$ 的对应行
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**178. 投影公式的分母要求 a 非零。**

原文：

```text
**向量 $\mathbf{b}$ 在向量 $\mathbf{a}$ 上的投影：**
```

修正：

```text
**向量 $\mathbf{b}$ 在非零向量 $\mathbf{a}$ 上的投影：**
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**179. 逆矩阵投影公式需要列满秩。**

原文：

```text
**投影到 $C(A)$：**
```

修正：

```text
**投影到 $C(A)$（以下逆矩阵公式要求 $A$ 列满秩）：**
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**180. 加权最小二乘的权重对应 m 个样本。**

原文：

```text
\text{diag}(w_1,\dots,w_n)
```

修正：

```text
\text{diag}(w_1,\dots,w_m)
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**181. 相同向量导致反射公式的法向量为零。**

原文：

```text
法向量 $\mathbf{v} = \mathbf{e}_1 - \mathbf{u}$
```

修正：

```text
法向量 $\mathbf{v} = \mathbf{e}_1 - \mathbf{u}$；若 $\mathbf u=\mathbf e_1$，直接取 $A=I$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**182. 奇异矩阵不能只乘已有的非零主元。**

原文：

```text
$\det(A) = \pm (\text{主元之积})$（由 $LU$ 分解）
```

修正：

```text
满秩时 $\det(A) = \pm (\text{全部 }n\text{ 个主元之积})$，秩不足时 $\det(A)=0$（由 $LU$ 分解）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**183. 主元比值公式需要所有顺序主子式非零。**

原文：

```text
（假设 $\det(A) \neq 0$）
```

修正：

```text
（假设无需换行消元，所有顺序主子式非零，且 $\det(A_0)=1$）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**184. 单位矩阵尺寸与 AB、BA 写反。**

原文：

```text
\lambda^n|AB - \lambda I_n| = \lambda^m|BA - \lambda I_m|
```

修正：

```text
\lambda^n|AB - \lambda I_m| = \lambda^m|BA - \lambda I_n|
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**185. 秩一幂零矩阵可以有 n 个零特征值。**

原文：

```text
必有 $n-1$ 个特征值为 $0$
```

修正：

```text
至少有 $n-1$ 个特征值为 $0$（按代数重数计）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**186. 半正定判据不能直接用消元中的非负主元。**

原文：

```text
- 所有主元 $d_i \geq 0$
```

修正：

```text
- 所有主子式 $\det(A_I)\geq 0$（包括非顺序主子式）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**187. 负定条件不能包括零向量。**

原文：

```text
**负定：** $A < 0$ 若 $-A > 0$。等价于 $\mathbf{x}^T A \mathbf{x} < 0$。
```

修正：

```text
**负定：** $A < 0$ 若 $-A > 0$。等价于对所有非零 $\mathbf x$ 都有 $\mathbf{x}^T A \mathbf{x} < 0$。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Linear Transformation - 线性变换

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Linear Transformation - 线性变换.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/linear-transformation.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/linear-transformation/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Matrices and System of Linear Equations -  矩阵与线性方程组

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Matrices and System of Linear Equations -  矩阵与线性方程组.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/matrices-and-system-of-linear-equations.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/matrices-and-system-of-linear-equations/)

**131. 置换矩阵定义缺少其余元素为零。**

原文：

```text
每行每列都恰有一个 $1$ 的矩阵
```

修正：

```text
每行每列都恰有一个 $1$、其余元素均为 $0$ 的方阵
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**132. 加行初等矩阵要求不同的行。**

原文：

```text
中的 $(i,j)$ 位置替换为 $l$
```

修正：

```text
中的 $(i,j)$ 位置（$i\neq j$）替换为 $l$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**133. 初等缩放矩阵必须可逆，缩放因子非零。**

原文：

```text
替换为 $k$ 的到的矩阵
```

修正：

```text
替换为 $k\neq 0$ 得到的矩阵
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**134. 下三角方程组并非通常定义的行阶梯形。**

原文：

```text
这两个方程都是行阶梯形的，非常好解。
```

修正：

```text
这两个方程分别为下三角和上三角方程组，可以用前代与回代求解。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**135. LU 唯一性结论需要可逆性。**

原文：

```text
LU 分解的唯一性：若
```

修正：

```text
LU 分解的唯一性：若 $\mathbf A$ 可逆，且
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**136. 唯一性结论的上三角因子名称写错。**

原文：

```text
\mathbf{R}_{1}=\mathbf{R}_{2}
```

修正：

```text
\mathbf{U}_{1}=\mathbf{U}_{2}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Orthogonal - 正交

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Orthogonal - 正交.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/orthogonal.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/orthogonal/)

**137. 投影可能沿 a 的负方向，不能用非负长度作为系数。**

原文：

```text
$b$ 在 $a$ 上的投影（Projection）：$p= \lVert p \rVert \frac{a}{\lVert a \rVert}=
```

修正：

```text
$b$ 在非零向量 $a$ 上的投影（Projection）：$p=
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**138. 回归正规方程右端漏乘观测向量。**

原文：

```text
\begin{bmatrix}C \\ D\end{bmatrix}=A^T$
```

修正：

```text
\begin{bmatrix}C \\ D\end{bmatrix}=A^Tb$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**139. 中心化回归的截距需要减去自变量均值。**

原文：

```text
C=C_{1}-D_{1}t, D=D_{1}
```

修正：

```text
C=C_{1}-D_{1}\bar t, D=D_{1}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**140. 样本数采用 m，矩阵最后一行的索引应一致。**

原文：

```text
t_{n}-\bar{t}
```

修正：

```text
t_{m}-\bar{t}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**141. 正交两列求出的是中心化回归的 C₁、D₁。**

原文：

```text
\hat{C}=\frac{v_{1}^Tb}{v_{1}^Tv_{1}},\hat{D}=\frac{v_{2}^Tb}{v_{2}^Tv_{2}}
```

修正：

```text
\hat{C}_1=\frac{v_{1}^Tb}{v_{1}^Tv_{1}},\hat{D}_1=\frac{v_{2}^Tb}{v_{2}^Tv_{2}}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**142. 投影的逆矩阵公式需要列满秩条件。**

原文：

```text
考虑这个几何问题。
```

修正：

```text
考虑这个几何问题，选取 $C(A)$ 的一组基作为 $A$ 的列（列满秩）。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**143. 加权矩阵应为每个样本提供一个权重，非对角元素为零。**

原文：

```text
W=\begin{bmatrix}w_{1} & \dots & \dots & \dots \\ \dots  & w_{2} & \dots & \dots \\ \dots & \dots & \dots & \dots \\ \dots & \dots & \dots & w_{n} \end{bmatrix}
```

修正：

```text
W=\operatorname{diag}(w_1,\dots,w_m)
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**144. 加权正规方程的括号未闭合。**

原文：

```text
=(WA)^T(Wb$
```

修正：

```text
=(WA)^T(Wb)$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**145. 观测向量应为小写 b。**

原文：

```text
=A^T(W^TW)B
```

修正：

```text
=A^T(W^TW)b
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**146. 正交坐标应为内积 qᵢᵀb。**

原文：

```text
\sqrt{ \sum (q_{i}b)^{2} }
```

修正：

```text
\sqrt{ \sum (q_{i}^Tb)^{2} }
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**147. Householder 是正交矩阵，乘积为单位矩阵。**

原文：

```text
$H^TH=0$
```

修正：

```text
$H^TH=I$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**148. u=e₁ 时法向量为零，反射公式会除以零。**

原文：

```text
不妨令 $A$ 为一个 Householder 矩阵
```

修正：

```text
若 $u=e_1$，可取 $A=I$；否则令 $A$ 为一个 Householder 矩阵
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**149. Gram–Schmidt 减去的投影应乘已归一化的 q₁。**

原文：

```text
q_{2}=\frac{a_{2}-(q_{1}^Ta_{2})a_{1}}{\lVert a_{2}-(q_{1}^Ta_{2}) a_{1}\rVert }
```

修正：

```text
q_{2}=\frac{a_{2}-(q_{1}^Ta_{2})q_{1}}{\lVert a_{2}-(q_{1}^Ta_{2})q_{1}\rVert }
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**150. 函数拟合投影中应使用已定义的目标函数 v₁。**

原文：

```text
\left< a_{1}, v \right>
```

修正：

```text
\left< a_{1}, v_1 \right>
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**151. 函数拟合投影中应使用已定义的目标函数 v₁。**

原文：

```text
\left< a_{2},v \right>
```

修正：

```text
\left< a_{2},v_1 \right>
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Positive Definite Matrices - 正定矩阵

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Positive Definite Matrices - 正定矩阵.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/positive-definite-matrices.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/positive-definite-matrices/)

**152. 限制到 k 个变量的二次型应使用 k 阶主子矩阵。**

原文：

```text
f(x_{1}\dots x_{k})=\begin{bmatrix}x_{1}\dots x_{k}\end{bmatrix}A\begin{bmatrix}
```

修正：

```text
f(x_{1}\dots x_{k})=\begin{bmatrix}x_{1}\dots x_{k}\end{bmatrix}A_k\begin{bmatrix}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**153. 配方后 y 是向量，其分量不等于矩阵乘一个标量。**

原文：

```text
$y_{i}=L^Tx_{i}$
```

修正：

```text
$y=L^Tx$，$y_i$ 为 $y$ 的第 $i$ 个分量
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**154. 主子矩阵的英文术语写错。**

原文：

```text
主矩阵（Principle Matrices）
```

修正：

```text
主子矩阵（Principal Submatrices）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**155. 不能把正定矩阵的非零主元判据直接推广到含零主元的半正定情形。**

原文：

```text
- 主元 $d_{i}\geq 0$
```

修正：

```text
- 所有主子式 $\det(A_I)\geq 0$（包括非顺序主子式）
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**156. 半正定矩阵可能有零特征值。**

原文：

```text
特征值都大于零
```

修正：

```text
特征值都大于等于零
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**157. SVD 构造证明应使用 AᵀA。**

原文：

```text
S^{-1}Q_{2}^TQ^TAQ_{2}S^{-1}=I
```

修正：

```text
S^{-1}Q_{2}^TA^TAQ_{2}S^{-1}=I
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**158. Gram 矩阵会平方条件数，原文数值稳定性的判断相反。**

原文：

```text
用 $A^TA$ 来计算 $A$ 的秩，会更稳定（实际计算中数值可能有一些小的偏差，$A^TA$ 会把这些偏差平方，而缩小。）
```

修正：

```text
直接对 $A$ 做 SVD，并按照相对于最大奇异值的容差判断数值秩。形成 $A^TA$ 会平方条件数，使较小奇异值更难准确分辨。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**159. 降噪术语及截断对象表述有误。**

原文：

```text
图片降噪（Noice Reduction）：直接丢掉相对来说特别小的奇异值和奇异降噪。
```

修正：

```text
图片降噪（Noise Reduction）：丢弃较小的奇异值及其对应的奇异向量项。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**160. 伪逆的英文名称拼写错误。**

原文：

```text
Pseuodoinverse
```

修正：

```text
Pseudoinverse
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**161. 伪逆不能对零奇异值求倒数，矩形矩阵还要调整尺寸。**

原文：

```text
$\Sigma^{+}$ 就是把每一个 $\sigma$ 求倒数。
```

修正：

```text
$\Sigma^{+}$ 将非零奇异值求倒数、零奇异值保持为零，并转置矩阵的形状。
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**162. 最小范数解漏乘右端向量 b。**

原文：

```text
$x^+=V\Sigma^+U^T$
```

修正：

```text
$x^+=V\Sigma^+U^Tb$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### The Properties of Matrices - 矩阵的性质

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/The Properties of Matrices - 矩阵的性质.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/the-properties-of-matrices.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/the-properties-of-matrices/)

**163. 矩阵分块乘法中错误地令 AB=A。**

原文：

```text
\mathbf{A}\mathbf{B}=\mathbf{A}=\begin{bmatrix}
```

修正：

```text
\mathbf{A}\mathbf{B}=\begin{bmatrix}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**164. 矩阵分块乘法中多写等于 A。**

原文：

```text
=\mathbf{A}=\begin{bmatrix}\mathbf{a}_{1}\mathbf{B}
```

修正：

```text
=\begin{bmatrix}\mathbf{a}_{1}\mathbf{B}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**165. 秩–零度公式代入时符号颠倒。**

原文：

```text
=\text{rank}(B)-\text{rank(A)}+n
```

修正：

```text
=\text{rank}(B)+\text{rank}(A)-n
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

#### Vector Space - 向量空间

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/线性代数/Vector Space - 向量空间.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/linear-algebra/vector-space.md>) · [本地预览](http://127.0.0.1:4000/courses/linear-algebra/vector-space/)

**166. m×n 矩阵的系数向量应有 n 个分量。**

原文：

```text
\exists \mathbf{c}\in \mathbb{R}^m
```

修正：

```text
\exists \mathbf{c}\in \mathbb{R}^n
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**167. 核空间英文名称拼写错误。**

原文：

```text
Nullspace/Kernal
```

修正：

```text
Nullspace/Kernel
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**168. 多项式系数集合漏了常数项系数。**

原文：

```text
| a_{1},a_{2},\dots,a_{n}\in \mathbb{R}
```

修正：

```text
| a_{0},a_{1},a_{2},\dots,a_{n}\in \mathbb{R}
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

**169. 比较两组基的大小时第二组应记为 m 个向量。**

原文：

```text
\mathbf{w}_{1},\mathbf{w}_{2},\dots,\mathbf{w}_{n}$，则 $m=n$
```

修正：

```text
\mathbf{w}_{1},\mathbf{w}_{2},\dots,\mathbf{w}_{m}$，则 $m=n$
```

[核对资料](https://www.ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/resource-index/)

### 高等数学

#### Antiderivative and Integral - 积分

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/上/Antiderivative and Integral - 积分.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/antiderivative-and-integral.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/antiderivative-and-integral/)

**199. 比较判别法比较的是非负被积函数，而非直接比较两个积分。**

原文：

```text
若其恒小于一个收敛的反常积分，则该积分也收敛。
```

修正：

```text
对非负被积函数，若被积函数不大于一个反常积分收敛的非负函数，则该积分也收敛。
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**200. 发散比较判别法需要非负函数条件。**

原文：

```text
若其恒大于一个发散的反常积分，则该积分也发散。
```

修正：

```text
对非负被积函数，若被积函数不小于一个反常积分发散的非负函数，则该积分也发散。
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**201. 极限存在但为零或无穷大时，不能据此判定同敛散。**

原文：

```text
即其比值的极限存在
```

修正：

```text
即其比值趋于有限的正数（非负函数）
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**202. Pappus 体积定理需要轴不穿过区域内部。**

原文：

```text
即旋转面面积乘质心走的距离
```

修正：

```text
即平面区域面积乘质心走的距离（旋转轴在该平面内且不穿过区域内部）
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**203. 旋转半径应非负。**

原文：

```text
2\pi f(x)\sqrt{ 1+[f'(x)]^2 }
```

修正：

```text
2\pi |f(x)|\sqrt{ 1+[f'(x)]^2 }
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**204. Pappus 表面积公式需要相应的轴条件。**

原文：

```text
即弧长乘质心走的距离
```

修正：

```text
即弧长乘质心走的距离（旋转轴在曲线平面内且不穿过曲线）
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**205. 以截条中点作为质心要求密度不随高度变化。**

原文：

```text
若求两个函数包着的区域质心，即
```

修正：

```text
若密度仅依赖 $x$（均匀密度也适用），求两个函数包着的区域质心，其竖直截条高度为
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**206. 几何中心的第二个坐标漏写横线。**

原文：

```text
\bar{x}= \frac{\int \tilde{x}dA}{A}, y=
```

修正：

```text
\bar{x}= \frac{\int \tilde{x}dA}{A}, \bar y=
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**207. 梯形法误差上界需要二阶导数的绝对值。**

原文：

```text
$M$ 是 $f''$ 的上界
```

修正：

```text
$M$ 是 $|f''|$ 的上界
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**208. Simpson 法误差上界需要四阶导数的绝对值。**

原文：

```text
$M$ 是 $f^{(4)}$ 的上界
```

修正：

```text
$M$ 是 $|f^{(4)}|$ 的上界
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

#### Complex Number - 复数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/上/Complex Number - 复数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/complex-number.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/complex-number/)

**209. n=1 的单位根之和是1；求和式需使用本原单位根。**

原文：

```text
另外，所有 $n$ 次单位根的和为 $0$：
```

修正：

```text
另外，$n\ge2$ 时所有 $n$ 次单位根的和为 $0$（以下取 $z=e^{2\pi i/n}$）：
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

#### Differential Equation - 微分方程

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/上/Differential Equation - 微分方程.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/differential-equation.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/differential-equation/)

**210. 积分因子法对齐次方程 Q=0 也适用。**

原文：

```text
 , \ (Q(x)\neq 0)
```

修正：

```text

```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**211. 自治微分方程的英文术语不是自治函数。**

原文：

```text
Autonomous Function
```

修正：

```text
Autonomous Differential Equation
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**212. 稳定性看邻近点的符号，而非连续函数在平衡点为零的单侧极限。**

原文：

```text
$f(y_{0}^-)>0, f(y_{0}^+)<0$
```

修正：

```text
在 $y_0$ 的左侧邻域内 $f(y)>0$、右侧邻域内 $f(y)<0$
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**213. 不满足吸引型符号条件时还可能是半稳定点，不能一概判为排斥型。**

原文：

```text
反之，则有不稳定（Unstable）平衡点
```

修正：

```text
若左侧 $f(y)<0$、右侧 $f(y)>0$，则有不稳定（Unstable）平衡点
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

#### Integral Techniques - 积分技巧

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/上/Integral Techniques - 积分技巧.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/integral-techniques.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/integral-techniques/)

**214. 倒数换元恒等式应避免积分区间经过零。**

原文：

```text
类似的，$$
```

修正：

```text
类似的，当 $a>0$ 时，$$
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**215. 原函数公式漏了积分符号、微分及积分常数。**

原文：

```text
\frac{1}{\sqrt{ x^2\pm a^2}} = \ln|x+\sqrt{ x^2\pm a^2 }|
```

修正：

```text
\int\frac{dx}{\sqrt{ x^2\pm a^2}} = \ln|x+\sqrt{ x^2\pm a^2 }|+C
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**216. 正切微分公式漏了自变量。**

原文：

```text
\sec^2dx=d\tan x
```

修正：

```text
\sec^2 x\,dx=d\tan x
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**217. 部分分式的系数需要随幂次变化，极点也应为相应的 xᵢ。**

原文：

```text
\frac{t_{i}}{(x-x_{0})^k}
```

修正：

```text
\frac{t_{ik}}{(x-x_{i})^k}
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

#### Limit and Derivative - 极限与导数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/上/Limit and Derivative - 极限与导数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/limit-and-derivative.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/limit-and-derivative/)

**218. 大 O 只要求最终的绝对值界，不要求比值极限存在。**

原文：

```text
$f=O(g)$（“$f$ is big-oh of $g$”），当的阶小于或等于 $g$  的阶，即 $\lim\limits_{x\to\infty}\frac{f(x)}{g(x)}\le M$
```

修正：

```text
$f=O(g)$（“$f$ is big-oh of $g$”），当存在 $M>0,x_0$，使 $x\ge x_0$ 时 $|f(x)|\le M|g(x)|$
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**219. 构造出的新函数是 g，所指的导数应一致。**

原文：

```text
让 $f'(x)$ 在 $0$ 附近符号频繁变化。
```

修正：

```text
让 $g'(x)$ 在 $0$ 附近符号频繁变化。
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**220. 泰勒级数漏了每项的幂次。**

原文：

```text
\frac{f^{(i)}(a)(x-a)}{i!}
```

修正：

```text
\frac{f^{(i)}(a)(x-a)^i}{i!}
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**221. 函数定义域不等于泰勒级数的收敛域。**

原文：

```text
注意，上面这些公式在其定义域内都收敛。
```

修正：

```text
注意，$\sin x,\cos x,e^x$ 的上述级数对所有实数收敛；$\tan x$ 的级数要求 $|x|<\pi/2$，$\arctan x$ 的级数要求 $|x|\le1$。
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

**222. 余项估计需要控制中间点的导数，不能只控制目标点。**

原文：

```text
对每个 $n\geq 0$ 成立，则该级数收敛到 $f(x)$。
```

修正：

```text
在 $a$ 与所考察的 $x$ 之间对所有阶数 $n\ge0$ 都成立（使用同一个 $M$），则该级数收敛到 $f(x)$。
```

[核对资料](https://openstax.org/books/calculus-volume-2/pages/1-introduction)

#### Transcendental Function - 超越函数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/上/Transcendental Function - 超越函数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/transcendental-function.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/transcendental-function/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Multiple Integral - 多重积分

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/下/Multiple Integral - 多重积分.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/multiple-integral.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/multiple-integral/)

**223. 仅增加分块数不一定得到积分，还要让网格细化。**

原文：

```text
二重积分（Double Integral）用黎曼和定义：
```

修正：

```text
二重积分（Double Integral）用黎曼和定义（分割的最大小块直径趋于零）：
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**224. 负值函数的积分不能解释为普通非负体积。**

原文：

```text
它的几何意义是曲面 $z=f(x,y)$ 下方的体积。
```

修正：

```text
当 $f\ge0$ 时，它的几何意义是曲面 $z=f(x,y)$ 与 $xy$ 平面间的体积；一般情况下是带符号的体积。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**225. 换元映射的方向写反。**

原文：

```text
它由 $(x_{0},y_{0})$ 在经过变换 $x=g(u,v),y=h(u,v)$ 得到
```

修正：

```text
它经过变换 $x=g(u,v),y=h(u,v)$ 得到 $(x_0,y_0)$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**226. 面积缩放系数应取行列式绝对值。**

原文：

```text
乘上 $J(u,v)$。
```

修正：

```text
乘上 $|J(u,v)|$。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

#### Partial Derivatives -  偏导数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/下/Partial Derivatives -  偏导数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/partial-derivatives.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/partial-derivatives/)

**227. 因变量是函数输出。**

原文：

```text
因变量/输入变量
```

修正：

```text
因变量/输出变量
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**228. 自变量是函数输入。**

原文：

```text
自变量/输出变量
```

修正：

```text
自变量/输入变量
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**229. 内点需要存在一个被包含的邻域。**

原文：

```text
以这个点为原心的小圆只包含 $R$ 中的点
```

修正：

```text
存在以这个点为圆心的小圆盘完全包含在 $R$ 内
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**230. 边界点的条件应对任意邻域成立。**

原文：

```text
以这个点为原心的小圆中同时包含 $R$ 中和 $R$ 外的点
```

修正：

```text
任意以这个点为圆心的小圆盘都同时包含 $R$ 中和 $R$ 外的点
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**231. 任意集合都包含自己的所有内点，原来的开集定义无效。**

原文：

```text
包含了所有内点的区域定义为是开的（Open）。
```

修正：

```text
所有点都是内点的区域定义为是开的（Open）。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**232. 极限定义中的两个参数必须为正数。**

原文：

```text
$\forall\varepsilon, \exists \delta$
```

修正：

```text
$\forall\varepsilon>0, \exists \delta>0$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**233. 极坐标固定角度对应过原点的直线，漏乘 x。**

原文：

```text
直线路径 $y=\tan\theta$
```

修正：

```text
直线路径 $y=x\tan\theta$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**234. 方向导数等于梯度内积需要可微条件。**

原文：

```text
通过链式法则，由于
```

修正：

```text
若 $f$ 在 $P_0$ 可微，通过链式法则，由于
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**235. 两个向量之间应为点积。**

原文：

```text
\mathbf{j} \right) \left( u_{1}
```

修正：

```text
\mathbf{j} \right)\cdot\left( u_{1}
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**236. 方向导数为零不意味着沿该方向的函数恒定。**

原文：

```text
$\theta=\frac{\pi}{2}$ 时 $f$ 不改变
```

修正：

```text
$\theta=\frac{\pi}{2}$ 时方向导数为零（一阶变化为零）
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**237. 正规等值线的切线公式要求梯度非零。**

原文：

```text
所以可以写出等值线的切线：
```

修正：

```text
当该点 $\nabla f\ne0$ 时，可以写出等值线的切线：
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**238. 三维路径的第三个基向量应为 k。**

原文：

```text
+z(t)\mathbf{j}
```

修正：

```text
+z(t)\mathbf{k}
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**239. 隐式切平面的法向量不能为零。**

原文：

```text
故而定义等值面
```

修正：

```text
当 $(\nabla f)_{P_0}\ne0$ 时，故而定义等值面
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**240. 微分等式右侧漏了微分符号。**

原文：

```text
\cdot \mathbf{u})s
```

修正：

```text
\cdot \mathbf{u})\,ds
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**241. 二阶偏导在单点存在不能保证 Hessian 判别结论。**

原文：

```text
二阶导测试（Second Derivative Test）： 定义
```

修正：

```text
二阶导测试（Second Derivative Test，要求二阶偏导在该点附近连续）：定义
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**242. 多个约束的乘子法需要约束梯度独立。**

原文：

```text
如果有两个限制条件 $g_{1}=0,g_{2}=0$，那么要满足：
```

修正：

```text
如果有两个限制条件 $g_{1}=0,g_{2}=0$，且两约束的梯度在该点线性无关，那么要满足：
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**243. 泰勒系数需在展开点取值，算子中的 x、y 必须作为固定系数，不能参与反复求导。**

原文：

```text
f(x,y)=\left( \sum_{k=0}^{n} \frac{1}{k!}\left( x \frac{ \partial  }{ \partial x } +y \frac{ \partial  }{ \partial y }  \right)^{k}f   \right)+ \left( \frac{1}{(n+1)!}\left( x\frac{ \partial  }{ \partial x } +y\frac{ \partial  }{ \partial y }  \right)^{n+1} f\right)_{(cx, cy)}
```

修正：

```text
f(x,y)=\sum_{k=0}^{n}\frac{1}{k!}\left[\left(x\frac{\partial}{\partial u}+y\frac{\partial}{\partial v}\right)^k f(u,v)\right]_{(u,v)=(0,0)}+\frac{1}{(n+1)!}\left[\left(x\frac{\partial}{\partial u}+y\frac{\partial}{\partial v}\right)^{n+1}f(u,v)\right]_{(u,v)=(cx,cy)},\quad 0<c<1
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

#### Polar Coordinates - 极坐标

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/下/Polar Coordinates - 极坐标.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/polar-coordinates.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/polar-coordinates/)

**244. 平面方程第二项变量写错。**

原文：

```text
$Ax+Bx+Cz=D$
```

修正：

```text
$Ax+By+Cz=D$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**245. 曲率定义使用单位切向量，不是任意单位向量。**

原文：

```text
其中 $T$ 是曲线 $s$ 的一个单位向量。
```

修正：

```text
其中 $s$ 是弧长，$\mathbf T$ 是曲线的单位切向量。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**246. 主单位法向量的英文术语写错。**

原文：

```text
Principle Unit Normal Vector
```

修正：

```text
Principal Unit Normal Vector
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**247. 面积的线积分公式需要正向且简单的边界。**

原文：

```text
### 求闭合曲线面积
```

修正：

```text
### 求闭合曲线面积（简单闭曲线，沿逆时针方向）
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

#### Quadric Surfaces - 二次曲面

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/下/Quadric Surfaces - 二次曲面.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/quadric-surfaces.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/quadric-surfaces/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Sequence and Series - 数列与级数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/下/Sequence and Series - 数列与级数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/sequence-and-series.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/sequence-and-series/)

**248. 最小上界的英文不是下界。**

原文：

```text
Least Lower Bound
```

修正：

```text
Least Upper Bound
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**249. 零和负实数不满足该实数极限结论。**

原文：

```text
\lim_{ n \to \infty }x^{1/n}=1
```

修正：

```text
\lim_{ n \to \infty }x^{1/n}=1\quad(x>0)
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**250. 乘零后级数收敛，需排除零系数。**

原文：

```text
若级数 $\sum a_{n}$ 发散，则 $\sum ka_{n}$ 也发散。
```

修正：

```text
若级数 $\sum a_{n}$ 发散，且 $k\ne0$，则 $\sum ka_{n}$ 也发散。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**251. 极限比较判别法的同敛散结论要求有限正数。**

原文：

```text
=c>0$
```

修正：

```text
=c\in(0,\infty)$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**252. 交错余项估计需要交错级数判别法的条件。**

原文：

```text
若 $\sum a_{n}=\sum (-1)^{n+1}u_{n}=L$，则：
```

修正：

```text
若 $u_n>0$ 单调不增并趋于零，且 $\sum a_{n}=\sum (-1)^{n+1}u_{n}=L$，则：
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**253. 非严格单调的交错级数可能达到等号。**

原文：

```text
$|s_{n}-L| < u_{n+1}$
```

修正：

```text
$|s_{n}-L|\le u_{n+1}$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**254. 余项可能为零，不能一律断言符号等于下一项。**

原文：

```text
$\text{sgn}(L-s_{n})=\text{sgn}(a_{n+1})=(-1)^{n}$
```

修正：

```text
$0\le(-1)^n(L-s_n)\le u_{n+1}$（余项非零时与下一项同号）
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**255. 逐项积分的英文标题误写为逐项微分。**

原文：

```text
**逐项积分定理（The Term-by-term Differentiation Theorem）
```

修正：

```text
**逐项积分定理（The Term-by-term Integration Theorem）
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**256. 计算所得 2ln2−1 对应从 n=1 开始，需明确求和下界。**

原文：

```text
求 $\sum \frac{1}{(n+1)2^n}$
```

修正：

```text
求 $\sum_{n=1}^{\infty}\frac{1}{(n+1)2^n}$
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**383. 推论使用以 a 为中心的收敛区间，级数也必须写成以 a 为中心的形式。**

原文：

```text
推论：对幂级数 $\sum c_{n}x^n$，它必属于以下三种：
```

修正：

```text
推论：对幂级数 $\sum c_{n}(x-a)^n$，它必属于以下三种：
```

**384. 原文把幂级数误写成没有 x 的数项级数。**

原文：

```text
$\exists R>0, s.t. \sum a_{n}$ 在 $|x-a|<R$ 绝对收敛
```

修正：

```text
$\exists R>0$，该幂级数在 $|x-a|<R$ 绝对收敛
```

#### Vector Calculus - 向量微积分

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/数学/高等数学/下/Vector Calculus - 向量微积分.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/calculus/vector-calculus.md>) · [本地预览](http://127.0.0.1:4000/courses/calculus/vector-calculus/)

**257. 参数化对象是积分路径而非标量函数。**

原文：

```text
将 $f$ 参数化为 $\mathbf{r}(t)$。
```

修正：

```text
将曲线 $C$ 参数化为 $\mathbf{r}(t)$。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**258. 参数化后应在参数区间上积分。**

原文：

```text
\int_{C} \mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)dt
```

修正：

```text
\int_a^b\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)dt
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**259. 环流密度与通量概念不同。**

原文：

```text
流量密度（circulation density）
```

修正：

```text
环流密度（circulation density）
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**260. 无旋判据需要开区域和连续偏导条件。**

原文：

```text
若区域是**单连通的**，则这个条件是充要的。
```

修正：

```text
若区域是**单连通的开区域**，且场的分量有连续一阶偏导，则这个条件是充要的。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**261. 三维保守场判据需要连续偏导条件。**

原文：

```text
若单连通，同样有一个保守场充要条件：
```

修正：

```text
在单连通开区域内、场的分量具有连续一阶偏导时，同样有一个保守场充要条件：
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**262. Stokes 定理缺少相容定向和场在整个曲面上光滑的条件。**

原文：

```text
其中 $C$ 是一个闭合边界，$S$ 是以 $C$ 为边界的一个**分段光滑曲面**。
```

修正：

```text
其中 $S$ 是可定向的**分段光滑曲面**，$C$ 是它的正向边界（方向与法向量按右手定则相容）；$\mathbf F$ 在包含整个 $S$ 的开区域内具有连续一阶偏导。
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**263. 有向面积元漏了两个参数微分。**

原文：

```text
\lvert r_{u}\times r_{v} \rvert =r_{u}\times r_{v}
```

修正：

```text
\lvert r_{u}\times r_{v} \rvert\,du\,dv=(r_{u}\times r_{v})\,du\,dv
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**264. 旋度计算需要二阶导数及混合偏导交换条件。**

原文：

```text
**任何标量场的梯度场，其旋度必为零向量。**
```

修正：

```text
**具有连续二阶偏导的标量场，其梯度场的旋度为零向量。**
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**265. 保守场等价判据要求向量场连续可微。**

原文：

```text
开放区域 $D$** 中，TFAE：
```

修正：

```text
开放区域 $D$** 中，对具有连续一阶偏导的向量场，TFAE：
```

[核对资料](https://openstax.org/books/calculus-volume-3/pages/1-introduction)

**385. 对于显式曲面 z=f(x,y)，面积元应使用 x、y 参数。**

原文：

```text
d\sigma=\sqrt{ f_{x}^{2}+f_{y}^{2}+1 }dudv
```

修正：

```text
d\sigma=\sqrt{ f_{x}^{2}+f_{y}^{2}+1 }dxdy
```

**386. 参数化后应在参数平面上的区域 R 积分，不能仍把积分域写成空间曲面 S。**

原文：

```text
\iint _{S}\mathbf{F}\cdot \mathbf{n}d\sigma=\iint_{S}\mathbf{F}\cdot \frac{\mathbf{r}_{u}\times \mathbf{r}_{v}}{\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert }\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert dudv=\iint_{S}\mathbf{F}\cdot(\mathbf{r}_{u}\times \mathbf{r}_{v})dudv
```

修正：

```text
\iint _{S}\mathbf{F}\cdot \mathbf{n}d\sigma=\iint_{R}\mathbf{F}(\mathbf r(u,v))\cdot \frac{\mathbf{r}_{u}\times \mathbf{r}_{v}}{\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert }\lvert \mathbf{r}_{u}\times \mathbf{r}_{v} \rvert dudv=\iint_{R}\mathbf{F}(\mathbf r(u,v))\cdot(\mathbf{r}_{u}\times \mathbf{r}_{v})dudv
```

### 补充推导

#### Derivative-1

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Derivative-1.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/derivative-1.md>) · [本地预览](http://127.0.0.1:4000/courses/references/derivative-1/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Gas - 1

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Gas - 1.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/gas.md>) · [本地预览](http://127.0.0.1:4000/courses/references/gas/)

**266. 前两行算的是气体分子的受力，后续计算墙的受力需明确作用反作用。**

原文：

```text
所以有 
```

修正：

```text
取分子撞向该墙的方向为正，墙对分子的平均力为：
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas)

**389. 前式为分子受力，墙所受合力取反作用力的大小，需与压强计算的符号一致。**

原文：

```text
那么合力为
```

修正：

```text
墙受到方向相反的反作用力，其合力的大小为
```

[核对资料](https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas)

#### Integral-1

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Integral-1.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/integral-1.md>) · [本地预览](http://127.0.0.1:4000/courses/references/integral-1/)

**267. 余割积分的中间一步漏了 dx。**

原文：

```text
\frac{\csc^2x+\csc x\cot x}{\csc x+\cot x}=\int
```

修正：

```text
\frac{\csc^2x+\csc x\cot x}{\csc x+\cot x}\,dx=\int
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

#### Rolling-1

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Rolling-1.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/rolling-1.md>) · [本地预览](http://127.0.0.1:4000/courses/references/rolling-1/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Wave-1

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Wave-1.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/wave-1.md>) · [本地预览](http://127.0.0.1:4000/courses/references/wave-1/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Wave-2

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Wave-2.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/wave-2.md>) · [本地预览](http://127.0.0.1:4000/courses/references/wave-2/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Wave-3

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/笔记依赖/证明/Wave-3.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/references/wave-3.md>) · [本地预览](http://127.0.0.1:4000/courses/references/wave-3/)

**268. 体积弹性模量 B 应乘整个应变差。**

原文：

```text
\left( B (\frac{\Delta s}{\Delta x})_{2} - (\frac{\Delta s}{\Delta x})_{1} \right)A
```

修正：

```text
BA\left((\frac{\Delta s}{\Delta x})_{2}-(\frac{\Delta s}{\Delta x})_{1}\right)
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

**269. 连续介质极限应让空气柱长度趋零，而非位置趋零。**

原文：

```text
$x\to {0}$：
```

修正：

```text
$\Delta x\to0$：
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

**270. 波速是等相位面的速度，不是独立坐标 x 对 t 的偏导。**

原文：

```text
v= \frac{\partial x}{\partial t}=
```

修正：

```text
v=\frac{\omega}{k}=
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

### DSAA

#### Introduction

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/DSAA/Introduction.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/dsaa/introduction.md>) · [本地预览](http://127.0.0.1:4000/courses/dsaa/introduction/)

**271. 小 omega 是严格下界关系，原文误写为上界。**

原文：

```text
$\omega(g(n))$ 表示严格大于某个上界
```

修正：

```text
$\omega(g(n))$ 表示渐近严格大于 $g(n)$（对任意 $c>0$，最终有 $f(n)>cg(n)$）
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

#### Sorting

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/DSAA/Sorting.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/dsaa/sorting.md>) · [本地预览](http://127.0.0.1:4000/courses/dsaa/sorting/)

**272. 二叉堆的结构条件是完全二叉树。**

原文：

```text
大根堆：一个二叉树
```

修正：

```text
大根堆：一个完全二叉树
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

**273. 最小堆也要求完全二叉树。**

原文：

```text
小根堆，一个二叉树
```

修正：

```text
小根堆，一个完全二叉树
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

**274. 一般二叉树可能退化为链，原来的节点数下界只适用于完全二叉树。**

原文：

```text
因为 $h$ 层的二叉树至少有
```

修正：

```text
因为高度为 $h$ 的完全二叉树至少有
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

### Harvard CS50 - AI

#### 0 - Search

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/0 - Search.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/0.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/0/)

**275. 图搜索需要使用已探索集合排除重复，否则可能在环上无限搜索。**

原文：

```text
Expand the node (find all the new nodes that could be reached from this node), and add resulting nodes to the frontier.
```

修正：

```text
Add the current state to the explored set. Expand the node and add successor states that are neither explored nor already in the frontier.
```

[核对资料](https://cs50.harvard.edu/ai/notes/0/)

**276. 已探索集合用于记录状态，去重发生在扩展前。**

原文：

```text
* Add the current node to the explored set（已探索集合）.
```

修正：

```text
* The explored set（已探索集合）stores states.
```

[核对资料](https://cs50.harvard.edu/ai/notes/0/)

**277. BFS 不保证加权路径代价最小。**

原文：

```text
Guaranteed to find the optimal solution（保证找到最优解）.
```

修正：

```text
Guaranteed to find the shortest path in number of steps; optimal in path cost when every step has the same positive cost（每步代价相同时保证最优）.
```

[核对资料](https://cs50.harvard.edu/ai/notes/0/)

#### 1 - Knowledge

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/1 - Knowledge.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/1.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/1/)

**388. 模型检查器漏掉了前文列出的异或公式；补上真假不同即为真的求值分支。**

原文：

```text
      \ElsIf{\texttt{IsImplication(formula)}}
```

修正：

```text
      \ElsIf{\texttt{IsExclusiveOr(formula)}}
        \State \texttt{left} $\gets$ \texttt{Left(formula)}; \texttt{right} $\gets$ \texttt{Right(formula)}
        \State \Return \texttt{Evaluate(left, valuation)} $\ne$ \texttt{Evaluate(right, valuation)}
      \ElsIf{\texttt{IsImplication(formula)}}
```

#### 2 - Uncertainty

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/2 - Uncertainty.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/2.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/2/)

**278. 贝叶斯网络必须为有向无环图。**

原文：

```text
data structure(directed graphs)
```

修正：

```text
data structure (directed acyclic graphs, DAGs)
```

[核对资料](https://cs50.harvard.edu/ai/notes/2/)

**279. 容斥原理英文名称拼写错误。**

原文：

```text
Inclusion-Exclution
```

修正：

```text
Inclusion-Exclusion
```

[核对资料](https://cs50.harvard.edu/ai/notes/2/)

#### 3 - Optimization

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/3 - Optimization.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/3.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/3/)

**280. 局部束搜索维护多个状态，并从所有后继中选 k 个。**

原文：

```text
Local beam search - choose the k-highest-valued neighbor
```

修正：

```text
Local beam search - maintain k states, expand all their neighbors, and retain the k highest-valued successors
```

[核对资料](https://cs50.harvard.edu/ai/notes/3/)

**281. 模拟退火温度为零时不能继续做 ΔE/T。**

原文：

```text
- _T_ = Temperature (_t_)
```

修正：

```text
- _T_ = Temperature (_t_)
    - If _T_ = 0: Return _current_
```

[核对资料](https://cs50.harvard.edu/ai/notes/3/)

**282. 接受较差状态的概率分支只应在 ΔE≤0 时使用，避免概率大于1。**

原文：

```text
- With probability e^(_ΔE/T_) set _current_ = _neighbor_
```

修正：

```text
- Otherwise, with probability e^(_ΔE/T_) set _current_ = _neighbor_
```

[核对资料](https://cs50.harvard.edu/ai/notes/3/)

**283. MRV 选择候选值最少的变量，而不是最小的数值。**

原文：

```text
Minimum remaining values heuristic - select the smallest value
```

修正：

```text
Minimum remaining values heuristic - select the unassigned variable with the fewest remaining legal values
```

[核对资料](https://cs50.harvard.edu/ai/notes/3/)

#### 4 - Learning

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/4 - Learning.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/4.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/4/)

**284. 监督学习也包含连续值回归，目标函数不必离散。**

原文：

```text
Learning from a discrete function $f$ (actual data)
```

修正：

```text
Learning from labeled examples of a function $f$ (actual data)
```

[核对资料](https://cs50.harvard.edu/ai/notes/4/)

**285. 感知机的术语应为 perceptron。**

原文：

```text
**perception learning:**
```

修正：

```text
**perceptron learning:**
```

[核对资料](https://cs50.harvard.edu/ai/notes/4/)

#### 5 - Neural Networks

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/5 - Neural Networks.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/5.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/5/)

**286. 梯度是上升方向，梯度下降沿负梯度更新。**

原文：

```text
direction that will lead to decreasing loss.
```

修正：

```text
the gradient points toward increasing loss; update in the negative gradient direction.
```

[核对资料](https://cs50.harvard.edu/ai/notes/5/)

**287. 最大池化通常在局部窗口中进行。**

原文：

```text
choose the maximum value of a picture
```

修正：

```text
choose the maximum value within each local pooling window
```

[核对资料](https://cs50.harvard.edu/ai/notes/5/)

#### 6 - Language

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/Harvard CS50 - AI/6 - Language.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/cs50-ai/6.md>) · [本地预览](http://127.0.0.1:4000/courses/cs50-ai/6/)

**288. PP 是介词短语，不是命题短语。**

原文：

```text
Propositional Phrase
```

修正：

```text
Prepositional Phrase
```

[核对资料](https://cs50.harvard.edu/ai/notes/6/)

**289. 朴素贝叶斯假设的是给定类别后的条件独立。**

原文：

```text
**we naively assume all the words are independent.**
```

修正：

```text
**we assume the words are conditionally independent given the class.**
```

[核对资料](https://cs50.harvard.edu/ai/notes/6/)

**290. 类别名称拼写导致符号不一致。**

原文：

```text
P(w_{1}|\text{posivite})
```

修正：

```text
P(w_{1}|\text{positive})
```

[核对资料](https://cs50.harvard.edu/ai/notes/6/)

**291. 条件独立不意味着词语边际独立，后验归一化分母应为各类别的联合证据概率之和。**

原文：

```text
{P(w_{1})\dots P(w_{n})}
```

修正：

```text
{\sum_{c\in\{\text{positive},\text{negative}\}}P(c)\prod_{i=1}^n P(w_i|c)}
```

[核对资料](https://cs50.harvard.edu/ai/notes/6/)

**292. 此处产生上下文编码表示的流程描述的是编码器。**

原文：

```text
Decoder: for every word:
```

修正：

```text
Encoder: for every word:
```

[核对资料](https://cs50.harvard.edu/ai/notes/6/)

### MIT Missing Semester

#### Basic Cryptography - 基础密码学

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/MIT Missing Semester/Basic Cryptography - 基础密码学.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/missing-semester/basic-cryptography.md>) · [本地预览](http://127.0.0.1:4000/courses/missing-semester/basic-cryptography/)

**293. 对数情况数的熵公式只适用于均匀分布。**

原文：

```text
它的值被定义为 $\log_{2}(\text{所有可能的情况数})$。
```

修正：

```text
等可能选择时为 $\log_2(\text{所有可能的情况数})$；一般为 $H=-\sum_i p_i\log_2p_i$。
```

[核对资料](https://missing.csail.mit.edu/2020/security/)

**294. 普通哈希函数不一定具有密码学的抗攻击性质。**

原文：

```text
具有以下特性的函数叫做**散列函数（Hash Function）**：
```

修正：

```text
密码学散列函数（Cryptographic Hash Function）将任意长度输入映射到固定长度输出，要求具有以下特性：
```

[核对资料](https://missing.csail.mit.edu/2020/security/)

**295. KDF 与随机密钥生成不同，输出也不必与密码同长度。**

原文：

```text
**密钥生成函数：** 一个比较慢的函数，从较短的密码生成长度相同的，可以在其他加密算法中使用的密钥。
```

修正：

```text
**基于密码的密钥派生函数（Password-based KDF）：** 故意设计得较慢的函数，从密码和盐生成指定长度、可供其他加密算法使用的密钥。
```

[核对资料](https://missing.csail.mit.edu/2020/security/)

#### Git - 版本控制

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/MIT Missing Semester/Git - 版本控制.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/missing-semester/git.md>) · [本地预览](http://127.0.0.1:4000/courses/missing-semester/git/)

**296. Git 对象还包括带注释的 tag。**

原文：

```text
有 3 种数据类型
```

修正：

```text
有 4 种对象类型
```

[核对资料](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

**297. 补齐第四种 Git 对象。**

原文：

```text
`blob`，`tree` 和 `commit`。
```

修正：

```text
`blob`、`tree`、`commit` 和 `tag`。
```

[核对资料](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

**298. 初始提交没有父提交，合并提交可以有多个。**

原文：

```text
包含一个父辈，元数据和顶层树
```

修正：

```text
包含零个或多个父提交、元数据和顶层树
```

[核对资料](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

**299. Git 持久化对象内容，哈希是寻址标识，不能代替原内容。**

原文：

```text
所有的对象本身不会保存在硬盘上，实际上保存的是对象的**SHA-1 哈希**。
```

修正：

```text
对象内容会保存在 `.git/objects`（松散对象或 pack 文件）中；对象以内容的哈希值寻址，传统格式使用 SHA-1，也有 SHA-256 仓库格式。
```

[核对资料](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

**300. git status、log 等命令不会新增对象或引用。**

原文：

```text
所有的 `git` 命令都对应着增加对象，增加或删除引用等操作。
```

修正：

```text
修改历史的命令可能增加对象或更新引用，查询命令只读取状态。
```

[核对资料](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

**301. 普通 HEAD 与 detached HEAD 的指向方式不同。**

原文：

```text
HEAD 指向当前所在的 `commit`。
```

修正：

```text
HEAD 通常是指向当前分支的符号引用；分离 HEAD 时直接指向提交。
```

[核对资料](https://git-scm.com/book/en/v2/Git-Internals-Git-References)

#### Metaprogramming - 元编程

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/MIT Missing Semester/Metaprogramming - 元编程.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/missing-semester/metaprogramming.md>) · [本地预览](http://127.0.0.1:4000/courses/missing-semester/metaprogramming/)

**302. SemVer 的主版本零不承诺稳定 API，不能应用相同兼容性推断。**

原文：

```text
理论上，一个软件依赖的库版本号只需要 `MAJOR` 相同，`MINOR.PATCH` 大于或等于期望的版本，即可正常运行。 
```

修正：

```text
理论上，在依赖遵守语义化版本且主版本至少为 1 的前提下，主版本相同且版本不低于所需版本，公共 API 应保持兼容；0.y.z 处于初始开发阶段，不保证这一兼容性。
```

[核对资料](https://semver.org/)

### Java

#### SUSTech CS109 - Java

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/SUSTech CS109 - Java.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/java/sustech-cs109.md>) · [本地预览](http://127.0.0.1:4000/courses/java/sustech-cs109/)

**306. Java 并非 C++ 的扩展或实现。**

原文：

```text
Java 是一门基于 **C++** 的编程语言。
```

修正：

```text
Java 的语法受 **C/C++** 影响，但它是一门独立的编程语言。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-1.html)

**307. JVM 执行并不限于解释执行。**

原文：

```text
读取，识别，**解释**，运行字节码。
```

修正：

```text
加载字节码，通过解释执行或 JIT 编译等方式运行。
```

[核对资料](https://docs.oracle.com/javase/specs/jvms/se25/html/jvms-2.html)

**308. Java 标识符不限于英文，且单下划线已是保留关键字。**

原文：

```text
标识符只允许出现大小写英文字母和数字，$和_，不允许用数字开头。
```

修正：

```text
标识符支持 Unicode 字母等合法 Java 字符（也包括 `$` 和 `_`），后续可包含数字，不能以数字开头或使用保留关键字；Java 9 起不能单独使用 `_`。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.8)

**309. 块注释不是匹配到最后一个结束符的贪心匹配。**

原文：

```text
多行注释是贪心匹配的，不能嵌套。
```

修正：

```text
多行注释在遇到第一个 `*/` 时结束，不能嵌套。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-3.html#jls-3.7)

**310. Java boolean 的内存表示不是规范保证的一个比特。**

原文：

```text
boolean(1 bit)
```

修正：

```text
boolean(true/false，存储大小未由语言规范固定为 1 bit)
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.2.5)

**311. Java 的拓宽转换允许某些整数转换为浮点数时损失精度。**

原文：

```text
提升需要不丢精度，比如
```

修正：

```text
拓宽转换不一定保留精度（例如 `int/long` 转 `float` 或 `long` 转 `double`）；比如
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-5.html#jls-5.1.2)

**312. 类名大小写错误会导致示例无法编译。**

原文：

```text
new Arraylist<Integer>()
```

修正：

```text
new ArrayList<Integer>()
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html)

**313. 数组越界异常的类名写错。**

原文：

```text
ArrayIndexOutofBound
```

修正：

```text
ArrayIndexOutOfBoundsException
```

[核对资料](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/ArrayIndexOutOfBoundsException.html)

**314. 引用类型的参数也是值传递，不能在方法内替换调用者的引用变量。**

原文：

```text
基础类型是传值本身，引用类型是传引用。
```

修正：

```text
Java 一律按值传参：基础类型复制值，引用类型复制引用值（不是对调用者变量的引用）。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12.4.5)

**315. 方法签名不能忽略方法名。**

原文：

```text
Signature，就是参数类型列表
```

修正：

```text
Signature，包括方法名与参数类型等，不含返回类型
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.2)

**316. 合法 Java 示例漏写分号。**

原文：

```text
boolean r3 = "hello".startsWith("ell", 1) // true
```

修正：

```text
boolean r3 = "hello".startsWith("ell", 1); // true
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html)

**317. 合法 Java 示例漏写分号。**

原文：

```text
int index3 = s.indexOf('c', 3) // 4
```

修正：

```text
int index3 = s.indexOf('c', 3); // 4
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html)

**318. 导入静态成员必须带 static 关键字。**

原文：

```text
`import java.lang.Math.*`
```

修正：

```text
`import static java.lang.Math.*`
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-7.html#jls-7.5.4)

**319. 普通 final 类并不与 enum 的完整语义等价。**

原文：

```text
// 等效于下面这个
```

修正：

```text
// 下面仅类比枚举常量的实例；真正的 enum 还继承 Enum，并具有 values()/valueOf() 等机制
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.9)

**320. private 成员不被子类继承，不能误称为继承后隐藏。**

原文：

```text
子类会不会“继承“超类 `private` 成员具有争议。一个比较有共识的说法是，子类会继承超类的所有成员，但是会隐藏 `private` 成员。
```

修正：

```text
Java 语言规范明确：子类不继承超类的 `private` 成员；子类对象仍包含超类部分的状态，但这不等于成员继承。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.2)

**321. 强制转换应使用变量 animal，原来的 Animal 是类型名。**

原文：

```text
Fish fish = (Fish) Animal;
```

修正：

```text
Fish fish = (Fish) animal;
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html)

**322. static、private、final 三种限制不能一概归为按引用类型选择方法。**

原文：

```text
当方法被定义为 `static / final / private`，方法调用基于引用变量的类型。
```

修正：

```text
`static` 方法按编译时类型选择，不能动态重写；`private` 方法不被继承，`final` 方法不可重写。可重写的实例方法按运行时对象类型动态绑定。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-15.html#jls-15.12)

**323. final 引用不意味着对象不可变。**

原文：

```text
可以修饰变量，让它变成常量，不能再修改；
```

修正：

```text
可以修饰变量，使其赋值后不能重新赋值；引用变量指向的对象仍可能被修改；
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.12.4)

**324. 静态方法并非隐式 final。**

原文：

```text
（`private / static` 方法都隐式声明为 ` final `）
```

修正：

```text
（`private` 方法不能被重写；`static` 方法可被隐藏，并不隐式声明为 `final`）
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html#jls-8.4.3.3)

**325. 接口与类是 Java 中不同的类型声明。**

原文：

```text
接口是一种特殊的类，与公共的抽象类类似。
```

修正：

```text
接口是一种引用类型，与抽象类具有相似用途，但不是类。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html)

**326. 接口还支持私有方法，不能把所有未注明 abstract 的方法都视为抽象。**

原文：

```text
接口可以包含抽象方法（Abstract） / 默认方法 （Default） / 静态方法 （Static）。如果没有指定，隐式为抽象方法。
```

修正：

```text
接口可以包含抽象方法（Abstract）、默认方法（Default）、静态方法（Static），Java 9 起也可包含私有方法（Private）；普通无方法体的接口方法隐式为 public abstract。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html#jls-9.4)

**327. 泛型最大值示例使用了未声明的 x、y、z、max，且没有更新返回变量。**

原文：

```text
T m = x;
	if (y.compareTo(m) > 0)	max = y;
	if (z.compareTo(m) > 0) max = z;
```

修正：

```text
T m = a;
	if (b.compareTo(m) > 0) m = b;
	if (c.compareTo(m) > 0) m = c;
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-8.html)

**328. 泛型 extends 表示类型上界，不等同于类声明中的 implements。**

原文：

```text
注意这里的 `extends` 是实现的意思。
```

修正：

```text
这里的 `extends` 声明类型参数的上界：`T` 必须是 `Comparable<T>` 的子类型（类通过实现接口满足此条件）。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.4)

**329. 类型擦除并不意味着所有泛型信息都从字节码消失。**

原文：

```text
泛型只是语法糖，编译成字节码之后，泛型是不存在的，会自动进行类型转换（这个叫做擦除 Erasure）。
```

修正：

```text
编译时会进行类型擦除（Erasure），将类型参数替换为其上界并插入必要的类型转换；字节码仍可保留泛型签名元数据供反射读取。
```

[核对资料](https://docs.oracle.com/javase/specs/jls/se25/html/jls-4.html#jls-4.6)

### 数字逻辑

#### Boolean Algebra - 布尔代数

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/数字逻辑/Boolean Algebra - 布尔代数.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/digital-logic/boolean-algebra.md>) · [本地预览](http://127.0.0.1:4000/courses/digital-logic/boolean-algebra/)

**303. 最小项不是包含一个变量及其补在内的所有文字。**

原文：

```text
包含了所有的 Literals （包括补的形式）的 AND 项
```

修正：

```text
每个变量恰好出现一次（原变量或其补）的 AND 项
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

**304. 最大项也必须每个变量恰好出现一次。**

原文：

```text
包含了所有的 Literals （包括补的形式）的 OR 项
```

修正：

```text
每个变量恰好出现一次（原变量或其补）的 OR 项
```

[核对资料](https://cs50.harvard.edu/ai/notes/)

#### Combinational Logic - 组合逻辑

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/数字逻辑/Combinational Logic - 组合逻辑.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/digital-logic/combinational-logic.md>) · [本地预览](http://127.0.0.1:4000/courses/digital-logic/combinational-logic/)

已检查文字与公式，本轮未确认需要修正的实际内容错误。

#### Number Systems - 数字系统

源笔记：[Obsidian 文件](</Users/joy/Documents/Obsidian Vault/计算机/数字逻辑/Number Systems - 数字系统.md>) · 导出：[blog 文件](</Users/joy/Code/Blog/xiao-la.github.io/_courses/digital-logic/number-systems.md>) · [本地预览](http://127.0.0.1:4000/courses/digital-logic/number-systems/)

**305. 二进制 KiB 与十进制 kB 的规范单位不同。**

原文：

```text
KB 与 B 的转换，是以 1024 为基数：
```

修正：

```text
二进制容量单位 $1\,\mathrm{KiB}=1024\,\mathrm B$；十进制 $1\,\mathrm{kB}=1000\,\mathrm B$（下图的 KB 使用旧的二进制习惯记法）：
```

[核对资料](https://www.nist.gov/pml/owm/metric-si-prefixes)

## 字符清理

另移除了原笔记已有的不可见 BACKSPACE（U+0008）字符，以及本轮修正行末的单个空格；不计入上述内容修正记录。

- 其他通识课/大学物理/上/Transverse Wave - 横波.md：1 个不可见退格字符。
- 其他通识课/旧石器艺术与符号/Week1.md：1 个不可见退格字符。
- 数学/线性代数/Determinant - 行列式.md：1 个不可见退格字符。
- 数学/线性代数/Eigenvalues and Eigenvectors - 特征值和特征向量.md：2 个不可见退格字符。
- 数学/线性代数/The Properties of Matrices - 矩阵的性质.md：1 个不可见退格字符。
- 数学/高等数学/上/Limit and Derivative - 极限与导数.md：2 个不可见退格字符。
- 其他通识课/大化 Midterm Review.md：1 个修正行末空格。
- 计算机/Harvard CS50 - AI/3 - Optimization.md：1 个修正行末空格。
- 数学/线性代数/Orthogonal - 正交.md：1 个修正行末空格。
- 其他通识课/大学物理/上/Rotation - 定轴转动.md：1 个修正行末空格。
- 其他通识课/旧石器艺术与符号/Week3.md：1 个修正行末空格。

## 修改前备份

全部 87 份源笔记的修改前副本保存在本地 zip 中，概率基础使用撤回卡片示范后的原始 Obsidian 版本作为基准。

[修改前备份](</Users/joy/Code/Blog/xiao-la.github.io/.course-test-results/content-audit/before-notes.zip>)
