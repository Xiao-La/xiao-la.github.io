---
title: "Final Review - 期末复习"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-06-12T01:12:17+08:00"
updated_at: "2026-10-09T17:01:15+08:00"
reference: false
order: 10
layout: "course"
permalink: "/courses/linear-algebra/final-review/"
course_page: true
doc_type: "note"
description: "线性代数 · Final Review - 期末复习"
excerpt: "线性代数 · Final Review - 期末复习"
---

{% raw %}
> **不考章节：** 1.7 (Special Matrices), 2.5 (Graphs and Networks), 3.5 (FFT), 5.4 (Differential Equations), 6.4 (Minimum Principles), 6.5 (Finite Element Method)

做题中出现的结论：

对于任意 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 阶实方阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为反对称矩阵的充要条件是：对于任意实向量 <span class="course-math" data-tex="\mathbf{x} \in \mathbb{R}^n" data-display="false"><code>\mathbf{x} \in \mathbb{R}^n</code></span>，都有二次型 <span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A} \mathbf{x} = 0" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A} \mathbf{x} = 0</code></span>。

要证明正定性相关的结论，很经常使用 <span class="course-math" data-tex="\mathbf{A}=\mathbf{R}^{\top}\mathbf{R}" data-display="false"><code>\mathbf{A}=\mathbf{R}^{\top}\mathbf{R}</code></span> 做替换，然后多去因式分解拆一拆探路。

迹的循环性质：<span class="course-math" data-tex="\operatorname{tr}(\mathbf{A}\mathbf{B})=\operatorname{tr}(\mathbf{B}\mathbf{A})" data-display="false"><code>\operatorname{tr}(\mathbf{A}\mathbf{B})=\operatorname{tr}(\mathbf{B}\mathbf{A})</code></span>（可以从非零特征值来理解）。

<span class="course-math" data-tex="\det(\mathbf{I}+\mathbf{u}\mathbf{v}^{\top})  = 1+\mathbf{v}^{\top}\mathbf{u}" data-display="false"><code>\det(\mathbf{I}+\mathbf{u}\mathbf{v}^{\top})  = 1+\mathbf{v}^{\top}\mathbf{u}</code></span>

## 1 Matrices and Gaussian Elimination
{: #section-1 }



### 1.1 Introduction
{: #section-2 }


（略）


### 1.2 The Geometry of Linear Equations
{: #section-3 }


- **矩阵形式：** <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{b}</code></span>，<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为系数矩阵
- **增广矩阵：** <span class="course-math" data-tex="[\mathbf{A} \mid \mathbf{b}]" data-display="false"><code>[\mathbf{A} \mid \mathbf{b}]</code></span>
- **相容（Consistent）：** 至少有一组解
- **不相容（Inconsistent）：** 无解

**两种几何观点：**
- **行观点（Row Picture）：** 每个方程表示一个平面。相容 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> 所有平面有非空交
- **列观点（Column Picture）：** <span class="course-math" data-tex="\mathbf{b}" data-display="false"><code>\mathbf{b}</code></span> 必须落在 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列向量张成的空间中

**奇异性（Singularity）：**
- 奇异（Singular）：无解或无穷多解
- 非奇异（Nonsingular）：有且仅有一组解
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 非奇异 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\forall \mathbf{b},\ \mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\forall \mathbf{b},\ \mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 有且仅有一组解


### 1.3 An Example of Gaussian Elimination
{: #section-4 }


**初等行变换（Elementary Row Operations）——保持解不变：**
1. <span class="course-math" data-tex="\mathbf{E}_i \leftrightarrow \mathbf{E}_j" data-display="false"><code>\mathbf{E}_i \leftrightarrow \mathbf{E}_j</code></span>（交换两行）
2. <span class="course-math" data-tex="\mathbf{E}_i \gets k\mathbf{E}_i" data-display="false"><code>\mathbf{E}_i \gets k\mathbf{E}_i</code></span>（<span class="course-math" data-tex="k \neq 0" data-display="false"><code>k \neq 0</code></span>，一行乘非零常数）
3. <span class="course-math" data-tex="\mathbf{E}_i \gets \mathbf{E}_i + k\mathbf{E}_j" data-display="false"><code>\mathbf{E}_i \gets \mathbf{E}_i + k\mathbf{E}_j</code></span>（一行倍数加到另一行）

**高斯消元步骤：**
1. 对增广矩阵进行初等行变换化为行阶梯形（Row Echelon Form）
2. 回代（Back Substitution）

> 每一行第一个非零元素称为**主元（Pivot）**


### 1.4 Matrix Notation and Matrix Multiplication
{: #section-5 }


矩阵 <span class="course-math" data-tex="\mathbf{A} = [a_{ij}]_{m\times n}" data-display="false"><code>\mathbf{A} = [a_{ij}]_{m\times n}</code></span>。线性运算（加减、数乘）逐分量进行。<span class="course-math" data-tex="\mathbf{I}_n" data-display="false"><code>\mathbf{I}_n</code></span> 为单位矩阵。

**矩阵乘法：** <span class="course-math" data-tex="\mathbf{A}_{n\times m} \cdot \mathbf{B}_{m\times p} = \mathbf{C}_{n\times p}" data-display="false"><code>\mathbf{A}_{n\times m} \cdot \mathbf{B}_{m\times p} = \mathbf{C}_{n\times p}</code></span>，<span class="course-math" data-tex="c_{ij} = \sum_k a_{ik} b_{kj}" data-display="false"><code>c_{ij} = \sum_k a_{ik} b_{kj}</code></span>

**四种视角理解乘法：**
1. **行列点乘：** <span class="course-math" data-tex="\mathbf{C}" data-display="false"><code>\mathbf{C}</code></span> 的 <span class="course-math" data-tex="(i,j)" data-display="false"><code>(i,j)</code></span> 元 = <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行与 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列的内积
2. **列组合：** <span class="course-math" data-tex="\mathbf{C}" data-display="false"><code>\mathbf{C}</code></span> 的列 = <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列的线性组合，系数来自 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 对应列
3. **行组合：** <span class="course-math" data-tex="\mathbf{C}" data-display="false"><code>\mathbf{C}</code></span> 的行 = <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 的行的线性组合，系数来自 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 对应行
4. **外积求和：** <span class="course-math" data-tex="\mathbf{C} = \sum_k (\text{col}_k \mathbf{A})(\text{row}_k \mathbf{B})" data-display="false"><code>\mathbf{C} = \sum_k (\text{col}_k \mathbf{A})(\text{row}_k \mathbf{B})</code></span>（列 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 行，得秩一矩阵再求和）

**运算律：**
- 结合律：<span class="course-math" data-tex="(\mathbf{A}\mathbf{B})\mathbf{C} = \mathbf{A}(\mathbf{B}\mathbf{C})" data-display="false"><code>(\mathbf{A}\mathbf{B})\mathbf{C} = \mathbf{A}(\mathbf{B}\mathbf{C})</code></span>
- 分配律：<span class="course-math" data-tex="(\mathbf{A}+\mathbf{B})\mathbf{C} = \mathbf{A}\mathbf{C} + \mathbf{B}\mathbf{C}" data-display="false"><code>(\mathbf{A}+\mathbf{B})\mathbf{C} = \mathbf{A}\mathbf{C} + \mathbf{B}\mathbf{C}</code></span>
- **不满足交换律**：一般 <span class="course-math" data-tex="\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}" data-display="false"><code>\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}</code></span>
- <span class="course-math" data-tex="\mathbf{A}\mathbf{I} = \mathbf{A}" data-display="false"><code>\mathbf{A}\mathbf{I} = \mathbf{A}</code></span>，<span class="course-math" data-tex="\mathbf{A}0 = 0" data-display="false"><code>\mathbf{A}0 = 0</code></span>
- 方幂：<span class="course-math" data-tex="\mathbf{A}^0 = \mathbf{I}_n,\ \mathbf{A}^k = \mathbf{A}^{k-1}\mathbf{A}" data-display="false"><code>\mathbf{A}^0 = \mathbf{I}_n,\ \mathbf{A}^k = \mathbf{A}^{k-1}\mathbf{A}</code></span>

**特殊变换矩阵（左乘）：**
- **置换矩阵（Permutation Matrix）：** 每行每列恰有一个 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>、其余元素为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的方阵，用于交换行
- **初等矩阵（Elementary Matrices）：**
  - 交换两行的置换矩阵
  - 将 <span class="course-math" data-tex="\mathbf{I}_n" data-display="false"><code>\mathbf{I}_n</code></span> 的 <span class="course-math" data-tex="(i,j)" data-display="false"><code>(i,j)</code></span>（<span class="course-math" data-tex="i\ne j" data-display="false"><code>i\ne j</code></span>）替换为 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span>：把第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行乘 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span> 加到第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行
  - 将 <span class="course-math" data-tex="\mathbf{I}_n" data-display="false"><code>\mathbf{I}_n</code></span> 的 <span class="course-math" data-tex="(i,i)" data-display="false"><code>(i,i)</code></span> 替换为 <span class="course-math" data-tex="k\ne 0" data-display="false"><code>k\ne 0</code></span>：把第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行乘 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span>

> **【左行右列】**：左乘 → 行变换，右乘 → 列变换


### 1.5 Triangular Factors and Row Exchanges
{: #section-6 }


**LU 分解：** 若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 消元后（无需行交换）得 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span>，则
<span class="course-math course-math-display" data-tex="\mathbf{A} = \mathbf{L}\mathbf{U}" data-display="true"><code>\mathbf{A} = \mathbf{L}\mathbf{U}</code></span>

- <span class="course-math" data-tex="\mathbf{L}" data-display="false"><code>\mathbf{L}</code></span>：下三角矩阵，对角元为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。<span class="course-math" data-tex="l_{ij}" data-display="false"><code>l_{ij}</code></span> 记录消元乘子（<span class="course-math" data-tex="\mathbf{E}_i \leftarrow \mathbf{E}_i - l_{ij}\mathbf{E}_j" data-display="false"><code>\mathbf{E}_i \leftarrow \mathbf{E}_i - l_{ij}\mathbf{E}_j</code></span>）
- <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span>：上三角矩阵，对角元为主元

**需要行交换时：**
<span class="course-math course-math-display" data-tex="\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}" data-display="true"><code>\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}</code></span>

其中 <span class="course-math" data-tex="\mathbf{P}" data-display="false"><code>\mathbf{P}</code></span> 为置换矩阵。

**利用 LU 解方程 <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{b}</code></span>：**
<span class="course-math course-math-display" data-tex="\begin{cases} \mathbf{L}\mathbf{c} = \mathbf{b} \\ \mathbf{U}\mathbf{x} = \mathbf{c} \end{cases}" data-display="true"><code>\begin{cases} \mathbf{L}\mathbf{c} = \mathbf{b} \\ \mathbf{U}\mathbf{x} = \mathbf{c} \end{cases}</code></span>

下三角方程组用前代，上三角方程组用回代；有行交换时先将右端改为 <span class="course-math" data-tex="\mathbf{P}\mathbf{b}" data-display="false"><code>\mathbf{P}\mathbf{b}</code></span>。

> **LU 分解唯一性：** 若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可逆，且 <span class="course-math" data-tex="\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2" data-display="false"><code>\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2</code></span>，且 <span class="course-math" data-tex="\mathbf{L}_1, \mathbf{L}_2" data-display="false"><code>\mathbf{L}_1, \mathbf{L}_2</code></span> 对角元均为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，则 <span class="course-math" data-tex="\mathbf{L}_1 = \mathbf{L}_2,\ \mathbf{U}_1 = \mathbf{U}_2" data-display="false"><code>\mathbf{L}_1 = \mathbf{L}_2,\ \mathbf{U}_1 = \mathbf{U}_2</code></span>。

**LDU 分解：** 提取主元到对角矩阵 <span class="course-math" data-tex="\mathbf{D}" data-display="false"><code>\mathbf{D}</code></span>，使 <span class="course-math" data-tex="\mathbf{L}, \mathbf{U}" data-display="false"><code>\mathbf{L}, \mathbf{U}</code></span> 对角元都为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>：<span class="course-math" data-tex="\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U}" data-display="false"><code>\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U}</code></span>


### 1.6 Inverses and Transposes
{: #section-7 }


**矩阵的逆：** 方阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的逆 <span class="course-math" data-tex="\mathbf{A}^{-1}" data-display="false"><code>\mathbf{A}^{-1}</code></span> 满足 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}</code></span>

**性质：**
- 逆若存在则唯一：若 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}_1 = \mathbf{B}_1\mathbf{A} = \mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{B}_1 = \mathbf{B}_1\mathbf{A} = \mathbf{I}</code></span> 且 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}_2 = \mathbf{B}_2\mathbf{A} = \mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{B}_2 = \mathbf{B}_2\mathbf{A} = \mathbf{I}</code></span>，则 <span class="course-math" data-tex="\mathbf{B}_1 = \mathbf{B}_1(\mathbf{A}\mathbf{B}_2) = (\mathbf{B}_1\mathbf{A})\mathbf{B}_2 = \mathbf{B}_2" data-display="false"><code>\mathbf{B}_1 = \mathbf{B}_1(\mathbf{A}\mathbf{B}_2) = (\mathbf{B}_1\mathbf{A})\mathbf{B}_2 = \mathbf{B}_2</code></span>
- <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}_1 \cdots \mathbf{A}_n)^{-1} = \mathbf{A}_n^{-1} \cdots \mathbf{A}_1^{-1}" data-display="false"><code>(\mathbf{A}_1 \cdots \mathbf{A}_n)^{-1} = \mathbf{A}_n^{-1} \cdots \mathbf{A}_1^{-1}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}^{-1})^{\top} = (\mathbf{A}^{\top})^{-1}" data-display="false"><code>(\mathbf{A}^{-1})^{\top} = (\mathbf{A}^{\top})^{-1}</code></span>

**转置：** <span class="course-math" data-tex="\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}^{\top}</code></span> 满足 <span class="course-math" data-tex="(\mathbf{A}^{\top})_{ij} = A_{ji}" data-display="false"><code>(\mathbf{A}^{\top})_{ij} = A_{ji}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}^{\top})^{\top} = \mathbf{A},\quad (k\mathbf{A})^{\top} = k\mathbf{A}^{\top}" data-display="false"><code>(\mathbf{A}^{\top})^{\top} = \mathbf{A},\quad (k\mathbf{A})^{\top} = k\mathbf{A}^{\top}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}+\mathbf{B})^{\top} = \mathbf{A}^{\top} + \mathbf{B}^{\top}" data-display="false"><code>(\mathbf{A}+\mathbf{B})^{\top} = \mathbf{A}^{\top} + \mathbf{B}^{\top}</code></span>
- <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{\top} = \mathbf{B}^{\top} \mathbf{A}^{\top}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{\top} = \mathbf{B}^{\top} \mathbf{A}^{\top}</code></span>

**对称矩阵：** <span class="course-math" data-tex="\mathbf{A}^{\top} = \mathbf{A}" data-display="false"><code>\mathbf{A}^{\top} = \mathbf{A}</code></span>
- 对称矩阵的逆仍对称
- <span class="course-math" data-tex="\mathbf{R}\mathbf{R}^{\top}" data-display="false"><code>\mathbf{R}\mathbf{R}^{\top}</code></span> 是对称矩阵
- 若 <span class="course-math" data-tex="\mathbf{A}^{\top} = \mathbf{A}" data-display="false"><code>\mathbf{A}^{\top} = \mathbf{A}</code></span> 可无行交换分解为 <span class="course-math" data-tex="\mathbf{L}\mathbf{D}\mathbf{U}" data-display="false"><code>\mathbf{L}\mathbf{D}\mathbf{U}</code></span>，则 <span class="course-math" data-tex="\mathbf{L}^{\top} = \mathbf{U}" data-display="false"><code>\mathbf{L}^{\top} = \mathbf{U}</code></span>，即 <span class="course-math" data-tex="\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{L}^{\top}" data-display="false"><code>\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{L}^{\top}</code></span>

**左/右逆（对 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵）：**
- 右逆存在 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r = m" data-display="false"><code>r = m</code></span>（行满秩，<span class="course-math" data-tex="C(\mathbf{A}) = \mathbb{R}^m" data-display="false"><code>C(\mathbf{A}) = \mathbb{R}^m</code></span>）
- 左逆存在 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r = n" data-display="false"><code>r = n</code></span>（列满秩，<span class="course-math" data-tex="C(\mathbf{A}^{\top}) = \mathbb{R}^n" data-display="false"><code>C(\mathbf{A}^{\top}) = \mathbb{R}^n</code></span>）
- 可逆 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r = m = n" data-display="false"><code>r = m = n</code></span>
- 最佳左逆：<span class="course-math" data-tex="(\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}" data-display="false"><code>(\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}</code></span>；最佳右逆：<span class="course-math" data-tex="\mathbf{A}^{\top}(\mathbf{A}\mathbf{A}^{\top})^{-1}" data-display="false"><code>\mathbf{A}^{\top}(\mathbf{A}\mathbf{A}^{\top})^{-1}</code></span>

**高斯-约旦法求逆：**
<span class="course-math course-math-display" data-tex="[\mathbf{A} \mid \mathbf{I}] \xrightarrow{\text{行变换}} [\mathbf{I} \mid \mathbf{A}^{-1}]" data-display="true"><code>[\mathbf{A} \mid \mathbf{I}] \xrightarrow{\text{行变换}} [\mathbf{I} \mid \mathbf{A}^{-1}]</code></span>

> 解释：一系列行变换的复合 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 使 <span class="course-math" data-tex="\mathbf{T}\mathbf{A} = \mathbf{I}" data-display="false"><code>\mathbf{T}\mathbf{A} = \mathbf{I}</code></span>，则 <span class="course-math" data-tex="\mathbf{T}\mathbf{I} = \mathbf{T} = \mathbf{A}^{-1}" data-display="false"><code>\mathbf{T}\mathbf{I} = \mathbf{T} = \mathbf{A}^{-1}</code></span>

**可逆的等价条件（TFAE）：**
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可逆
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有完整的主元集（<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个非零主元）
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 非奇异
- <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{0}</code></span> 仅有零解
- <span class="course-math" data-tex="\operatorname{rank}(\mathbf{A}) = n" data-display="false"><code>\operatorname{rank}(\mathbf{A}) = n</code></span>
- <span class="course-math" data-tex="N(\mathbf{A}) = \{0\}" data-display="false"><code>N(\mathbf{A}) = \{0\}</code></span>
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列/行线性无关
- <span class="course-math" data-tex="\det(\mathbf{A}) \neq 0" data-display="false"><code>\det(\mathbf{A}) \neq 0</code></span>

**二阶矩阵求逆：**
<span class="course-math course-math-display" data-tex="\mathbf{A}^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d &amp; -b \\ -c &amp; a \end{bmatrix}" data-display="true"><code>\mathbf{A}^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d &amp; -b \\ -c &amp; a \end{bmatrix}</code></span>

**分块矩阵乘法：**
-   <span class="course-math course-math-display" data-tex="\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_n \end{bmatrix}" data-display="true"><code>\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 \\ \vdots \\ \mathbf{a}_n \end{bmatrix}</code></span>

  （按行分块），<span class="course-math" data-tex="\mathbf{B} = [\mathbf{b}_1 \cdots \mathbf{b}_n]" data-display="false"><code>\mathbf{B} = [\mathbf{b}_1 \cdots \mathbf{b}_n]</code></span>（按列分块）
-   <span class="course-math course-math-display" data-tex="\mathbf{A}\mathbf{B} = [\mathbf{A}\mathbf{b}_1 \cdots \mathbf{A}\mathbf{b}_n] = \begin{bmatrix} \mathbf{a}_1 \mathbf{B} \\ \vdots \\ \mathbf{a}_n \mathbf{B} \end{bmatrix}" data-display="true"><code>\mathbf{A}\mathbf{B} = [\mathbf{A}\mathbf{b}_1 \cdots \mathbf{A}\mathbf{b}_n] = \begin{bmatrix} \mathbf{a}_1 \mathbf{B} \\ \vdots \\ \mathbf{a}_n \mathbf{B} \end{bmatrix}</code></span>
- **注意分块尺寸必须可乘**


### 1.7 Special Matrices and Applications（不考）
{: #section-8 }


---


## 2 Vector Spaces
{: #section-9 }



### 2.1 Vector Spaces and Subspaces
{: #section-10 }


向量空间 <span class="course-math" data-tex="(V, +, \cdot)" data-display="false"><code>(V, +, \cdot)</code></span> 满足 8 条性质（加法交换/结合/零元/负元 + 数乘结合/分配/单位元）。向量不限于 <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> 的数字列向量——矩阵、函数等只要能做线性组合即可。

**向量空间的性质：**
- <span class="course-math" data-tex="0\cdot \mathbf{x} = \mathbf{0}" data-display="false"><code>0\cdot \mathbf{x} = \mathbf{0}</code></span>
- <span class="course-math" data-tex="(-1)\cdot \mathbf{x} = -\mathbf{x}" data-display="false"><code>(-1)\cdot \mathbf{x} = -\mathbf{x}</code></span>
- <span class="course-math" data-tex="\mathbf{x}+\mathbf{y} = \mathbf{x}+\mathbf{z} \implies \mathbf{y}=\mathbf{z}" data-display="false"><code>\mathbf{x}+\mathbf{y} = \mathbf{x}+\mathbf{z} \implies \mathbf{y}=\mathbf{z}</code></span>
- <span class="course-math" data-tex="\beta \cdot \mathbf{0} = \mathbf{0}" data-display="false"><code>\beta \cdot \mathbf{0} = \mathbf{0}</code></span>
- <span class="course-math" data-tex="\alpha \cdot \mathbf{x} = \mathbf{0} \implies \alpha=0" data-display="false"><code>\alpha \cdot \mathbf{x} = \mathbf{0} \implies \alpha=0</code></span> 或 <span class="course-math" data-tex="\mathbf{x}=\mathbf{0}" data-display="false"><code>\mathbf{x}=\mathbf{0}</code></span>

**子空间 <span class="course-math" data-tex="W \subseteq V" data-display="false"><code>W \subseteq V</code></span>（<span class="course-math" data-tex="W" data-display="false"><code>W</code></span> 非空）：**
1. 加法封闭：<span class="course-math" data-tex="\mathbf{x}, \mathbf{y} \in W \implies \mathbf{x}+\mathbf{y} \in W" data-display="false"><code>\mathbf{x}, \mathbf{y} \in W \implies \mathbf{x}+\mathbf{y} \in W</code></span>
2. 数乘封闭：<span class="course-math" data-tex="\mathbf{x} \in W,\ c\in\mathbb{R} \implies c\mathbf{x} \in W" data-display="false"><code>\mathbf{x} \in W,\ c\in\mathbb{R} \implies c\mathbf{x} \in W</code></span>

> <span class="course-math" data-tex="\mathbb{R}^3" data-display="false"><code>\mathbb{R}^3</code></span> 的子空间只有：<span class="course-math" data-tex="\{\mathbf{0}\}" data-display="false"><code>\{\mathbf{0}\}</code></span>、过原点的直线、过原点的平面、<span class="course-math" data-tex="\mathbb{R}^3" data-display="false"><code>\mathbb{R}^3</code></span> 本身


### 2.2 Solving <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{0}</code></span> and <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{b}</code></span>
{: #section-11 }


**齐次方程 <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{0}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{0}</code></span>：**
- 化为行最简形（Reduced Row Echelon Form）<span class="course-math" data-tex="\mathbf{R}\mathbf{x} = \mathbf{0}" data-display="false"><code>\mathbf{R}\mathbf{x} = \mathbf{0}</code></span>：主元为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，主元列其余为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>
- 分主元变量和自由变量（共 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个）
- 依次令一个自由变量为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>、其余为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，得 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解
- 全部解 = 这些特解的线性组合 = <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span>（零空间）

**非齐次方程 <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{b}</code></span>（<span class="course-math" data-tex="\mathbf{b} \neq \mathbf{0}" data-display="false"><code>\mathbf{b} \neq \mathbf{0}</code></span>）：**
- <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b} \to \mathbf{U}\mathbf{x}=\mathbf{c} \to \mathbf{R}\mathbf{x}=\mathbf{d}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b} \to \mathbf{U}\mathbf{x}=\mathbf{c} \to \mathbf{R}\mathbf{x}=\mathbf{d}</code></span>
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的秩 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> = 主元个数。<span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 和 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行全为零
- **有解条件：** <span class="course-math" data-tex="\mathbf{d}" data-display="false"><code>\mathbf{d}</code></span>（和 <span class="course-math" data-tex="\mathbf{c}" data-display="false"><code>\mathbf{c}</code></span>）的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个分量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>（共 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个条件）
- **通解：** <span class="course-math" data-tex="\mathbf{x} = \mathbf{x}_p + \mathbf{x}_n" data-display="false"><code>\mathbf{x} = \mathbf{x}_p + \mathbf{x}_n</code></span>
  - <span class="course-math" data-tex="\mathbf{x}_p" data-display="false"><code>\mathbf{x}_p</code></span>：令所有自由变量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的特解
  - <span class="course-math" data-tex="\mathbf{x}_n \in N(\mathbf{A})" data-display="false"><code>\mathbf{x}_n \in N(\mathbf{A})</code></span>：解 <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=0" data-display="false"><code>\mathbf{A}\mathbf{x}=0</code></span> 将自由变量依次置 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 得到的 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解的线性组合


### 2.3 Linear Independence, Basis, and Dimension
{: #section-12 }


**线性无关（Linearly Independent）：**
<span class="course-math course-math-display" data-tex="c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n = \mathbf{0} \iff c_1 = \cdots = c_n = 0" data-display="true"><code>c_1\mathbf{v}_1 + \cdots + c_n\mathbf{v}_n = \mathbf{0} \iff c_1 = \cdots = c_n = 0</code></span>

- 线性相关 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> 存在某个向量可表示为其余向量的线性组合
- 零向量与任何向量线性相关
- 行阶梯矩阵的非零行之间线性无关
- <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> 中任意 <span class="course-math" data-tex="n &gt; m" data-display="false"><code>n &gt; m</code></span> 个向量必线性相关

**判断方法：** <span class="course-math" data-tex="[\mathbf{v}_1 \cdots \mathbf{v}_n]\mathbf{x} = \mathbf{0}" data-display="false"><code>[\mathbf{v}_1 \cdots \mathbf{v}_n]\mathbf{x} = \mathbf{0}</code></span> 是否仅有零解。<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的列线性无关 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="N(\mathbf{A}) = \{\mathbf{0}\}" data-display="false"><code>N(\mathbf{A}) = \{\mathbf{0}\}</code></span>。

**秩（Rank）：**
- <span class="course-math" data-tex="r = \operatorname{rank}(\mathbf{A})" data-display="false"><code>r = \operatorname{rank}(\mathbf{A})</code></span> = 主元个数 = 极大线性无关行数/列数
- <span class="course-math" data-tex="r \leq \min(m, n)" data-display="false"><code>r \leq \min(m, n)</code></span>
- <span class="course-math" data-tex="r(\mathbf{A}\mathbf{B}) \leq \min(r(\mathbf{A}), r(\mathbf{B}))" data-display="false"><code>r(\mathbf{A}\mathbf{B}) \leq \min(r(\mathbf{A}), r(\mathbf{B}))</code></span>
- 若 <span class="course-math" data-tex="\mathbf{P}" data-display="false"><code>\mathbf{P}</code></span> 可逆，则 <span class="course-math" data-tex="r(\mathbf{P}\mathbf{A}) = r(\mathbf{A}\mathbf{P}) = r(\mathbf{A})" data-display="false"><code>r(\mathbf{P}\mathbf{A}) = r(\mathbf{A}\mathbf{P}) = r(\mathbf{A})</code></span>

**秩一矩阵（Rank 1 Matrix）：** <span class="course-math" data-tex="\dim C(\mathbf{A}) = 1" data-display="false"><code>\dim C(\mathbf{A}) = 1</code></span>，可分解为列向量 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 行向量

**秩不等式：**
- <span class="course-math" data-tex="r(\mathbf{A}) + r(\mathbf{B}) - n \leq r(\mathbf{A}\mathbf{B}) \leq \min(r(\mathbf{A}), r(\mathbf{B}))" data-display="false"><code>r(\mathbf{A}) + r(\mathbf{B}) - n \leq r(\mathbf{A}\mathbf{B}) \leq \min(r(\mathbf{A}), r(\mathbf{B}))</code></span>
- 若 <span class="course-math" data-tex="\mathbf{A}\mathbf{B} = O" data-display="false"><code>\mathbf{A}\mathbf{B} = O</code></span>，则 <span class="course-math" data-tex="C(\mathbf{B}) \subseteq N(\mathbf{A})" data-display="false"><code>C(\mathbf{B}) \subseteq N(\mathbf{A})</code></span>，故 <span class="course-math" data-tex="r(\mathbf{A}) + r(\mathbf{B}) \leq n" data-display="false"><code>r(\mathbf{A}) + r(\mathbf{B}) \leq n</code></span>
- <span class="course-math" data-tex="r(\mathbf{A}^{\top}\mathbf{A}) = r(\mathbf{A})" data-display="false"><code>r(\mathbf{A}^{\top}\mathbf{A}) = r(\mathbf{A})</code></span>
- <span class="course-math" data-tex="r(\mathbf{A}+\mathbf{B}) \leq r(\mathbf{A}) + r(\mathbf{B})" data-display="false"><code>r(\mathbf{A}+\mathbf{B}) \leq r(\mathbf{A}) + r(\mathbf{B})</code></span>
- <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 有解 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r(\mathbf{A}) = r([\mathbf{A} \mid \mathbf{b}])" data-display="false"><code>r(\mathbf{A}) = r([\mathbf{A} \mid \mathbf{b}])</code></span>

**基（Basis）与维数（Dimension）：**
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组基 <span class="course-math" data-tex="=" data-display="false"><code>=</code></span> 一组线性无关且张成 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的向量
- <span class="course-math" data-tex="\dim V = n" data-display="false"><code>\dim V = n</code></span>（所有基大小相同）
- **定理：** <span class="course-math" data-tex="\mathbf{v}_1,\dots,\mathbf{v}_n \in \mathbb{R}^n" data-display="false"><code>\mathbf{v}_1,\dots,\mathbf{v}_n \in \mathbb{R}^n</code></span> 是 <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> 的基 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="[\mathbf{v}_1 \cdots \mathbf{v}_n]" data-display="false"><code>[\mathbf{v}_1 \cdots \mathbf{v}_n]</code></span> 可逆
- 多项式空间 <span class="course-math" data-tex="\mathbb{R}[x]_{\leq n}" data-display="false"><code>\mathbb{R}[x]_{\leq n}</code></span> 的一组基：<span class="course-math" data-tex="1, x, x^2, \dots, x^n" data-display="false"><code>1, x, x^2, \dots, x^n</code></span>


### 2.4 The Four Fundamental Subspaces
{: #section-13 }


对 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>：

| 子空间 | 记号 | 所在空间 | 维数 |
|--------|------|----------|------|
| 列空间（Column Space） | <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span> | <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |
| 零空间/核（Nullspace/Kernel） | <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> | <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> | <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> |
| 行空间（Row Space） | <span class="course-math" data-tex="C(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A}^{\top})</code></span> | <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |
| 左零空间（Left Nullspace） | <span class="course-math" data-tex="N(\mathbf{A}^{\top})" data-display="false"><code>N(\mathbf{A}^{\top})</code></span> | <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> | <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> |

**秩-零化度定理：** <span class="course-math" data-tex="\operatorname{rank}(\mathbf{A}) + \dim N(\mathbf{A}) = n" data-display="false"><code>\operatorname{rank}(\mathbf{A}) + \dim N(\mathbf{A}) = n</code></span>

**正交关系：**
<span class="course-math course-math-display" data-tex="C(\mathbf{A}) \perp N(\mathbf{A}^{\top}), \quad C(\mathbf{A}^{\top}) \perp N(\mathbf{A})" data-display="true"><code>C(\mathbf{A}) \perp N(\mathbf{A}^{\top}), \quad C(\mathbf{A}^{\top}) \perp N(\mathbf{A})</code></span>

**高斯-约旦消元法求四大子空间：** <span class="course-math" data-tex="[\mathbf{A} \mid \mathbf{I}] \to [\mathbf{R} \mid \mathbf{E}]" data-display="false"><code>[\mathbf{A} \mid \mathbf{I}] \to [\mathbf{R} \mid \mathbf{E}]</code></span>

| 子空间 | 维数 | 提取方法 |
|--------|------|----------|
| 行空间 <span class="course-math" data-tex="C(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A}^{\top})</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> | 取 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 的 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个非零行 |
| 列空间 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> | 找 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 的主元列，取**原矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>** 中对应的列 |
| 零空间 <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> | <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> | 解 <span class="course-math" data-tex="\mathbf{R}\mathbf{x} = \mathbf{0}" data-display="false"><code>\mathbf{R}\mathbf{x} = \mathbf{0}</code></span>，令自由变量依次为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 得基础解系 |
| 左零空间 <span class="course-math" data-tex="N(\mathbf{A}^{\top})" data-display="false"><code>N(\mathbf{A}^{\top})</code></span> | <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> | 取 <span class="course-math" data-tex="\mathbf{E}" data-display="false"><code>\mathbf{E}</code></span> 中 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 全零行对应位置的行（无换行的 <span class="course-math" data-tex="\mathbf{A}=\mathbf{L}\mathbf{U}" data-display="false"><code>\mathbf{A}=\mathbf{L}\mathbf{U}</code></span> 中取 <span class="course-math" data-tex="\mathbf{L}^{-1}" data-display="false"><code>\mathbf{L}^{-1}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行；若 <span class="course-math" data-tex="\mathbf{P}\mathbf{A}=\mathbf{L}\mathbf{U}" data-display="false"><code>\mathbf{P}\mathbf{A}=\mathbf{L}\mathbf{U}</code></span>，则取 <span class="course-math" data-tex="\mathbf{L}^{-1}\mathbf{P}" data-display="false"><code>\mathbf{L}^{-1}\mathbf{P}</code></span> 的对应行） |

> 行变换**不改变**行空间（<span class="course-math" data-tex="C(\mathbf{A}^{\top}) = C(\mathbf{U}^{\top})" data-display="false"><code>C(\mathbf{A}^{\top}) = C(\mathbf{U}^{\top})</code></span>），但**改变**列空间。主元列的**列标**不变，但列向量本身变了。


### 2.5 Graphs and Networks（不考）
{: #section-14 }



### 2.6 Linear Transformations
{: #section-15 }


**定义：** <span class="course-math" data-tex="T: V \to W" data-display="false"><code>T: V \to W</code></span> 是线性变换，若满足：
<span class="course-math course-math-display" data-tex="T(\mathbf{a}+\mathbf{b}) = T(\mathbf{a}) + T(\mathbf{b}), \quad T(k\mathbf{a}) = kT(\mathbf{a})" data-display="true"><code>T(\mathbf{a}+\mathbf{b}) = T(\mathbf{a}) + T(\mathbf{b}), \quad T(k\mathbf{a}) = kT(\mathbf{a})</code></span>

**矩阵表示：** 选 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的基 <span class="course-math" data-tex="\{\alpha_1,\dots,\alpha_n\}" data-display="false"><code>\{\alpha_1,\dots,\alpha_n\}</code></span> 和 <span class="course-math" data-tex="W" data-display="false"><code>W</code></span> 的基 <span class="course-math" data-tex="\{\beta_1,\dots,\beta_m\}" data-display="false"><code>\{\beta_1,\dots,\beta_m\}</code></span>：
<span class="course-math course-math-display" data-tex="T(\alpha_j) = \sum_{i=1}^m a_{ij} \beta_i" data-display="true"><code>T(\alpha_j) = \sum_{i=1}^m a_{ij} \beta_i</code></span>

矩阵 <span class="course-math" data-tex="\mathbf{A} = [a_{ij}]_{m\times n}" data-display="false"><code>\mathbf{A} = [a_{ij}]_{m\times n}</code></span> 就是 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 在选定的基下的矩阵表示（第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列 = <span class="course-math" data-tex="T(\alpha_j)" data-display="false"><code>T(\alpha_j)</code></span> 在 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 基下的坐标）：
<span class="course-math course-math-display" data-tex="T(\alpha_1,\dots,\alpha_n) = (\beta_1,\dots,\beta_m) \mathbf{A}" data-display="true"><code>T(\alpha_1,\dots,\alpha_n) = (\beta_1,\dots,\beta_m) \mathbf{A}</code></span>

**坐标映射：** 若 <span class="course-math" data-tex="\mathbf{v}" data-display="false"><code>\mathbf{v}</code></span> 在 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 基下坐标为 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span>，则 <span class="course-math" data-tex="T(\mathbf{v})" data-display="false"><code>T(\mathbf{v})</code></span> 在 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 基下的坐标为 <span class="course-math" data-tex="\mathbf{y} = \mathbf{A}\mathbf{x}" data-display="false"><code>\mathbf{y} = \mathbf{A}\mathbf{x}</code></span>

**常见 <span class="course-math" data-tex="\mathbb{R}^2" data-display="false"><code>\mathbb{R}^2</code></span> 上的线性变换：**

| 变换 | 矩阵 |
|------|------|
| 逆时针旋转 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> | <span class="course-math" data-tex="\begin{bmatrix} \cos\theta &amp; -\sin\theta \\ \sin\theta &amp; \cos\theta \end{bmatrix}" data-display="false"><code>\begin{bmatrix} \cos\theta &amp; -\sin\theta \\ \sin\theta &amp; \cos\theta \end{bmatrix}</code></span> |
| 投影到 <span class="course-math" data-tex="\mathbf{v}=(\cos\theta,\sin\theta)" data-display="false"><code>\mathbf{v}=(\cos\theta,\sin\theta)</code></span> | <span class="course-math" data-tex="\begin{bmatrix} \cos^2\theta &amp; \cos\theta\sin\theta \\ \cos\theta\sin\theta &amp; \sin^2\theta \end{bmatrix}" data-display="false"><code>\begin{bmatrix} \cos^2\theta &amp; \cos\theta\sin\theta \\ \cos\theta\sin\theta &amp; \sin^2\theta \end{bmatrix}</code></span> |
| 关于 <span class="course-math" data-tex="\mathbf{v}=(\cos\theta,\sin\theta)" data-display="false"><code>\mathbf{v}=(\cos\theta,\sin\theta)</code></span> 反射 | <span class="course-math" data-tex="\begin{bmatrix} \cos 2\theta &amp; \sin 2\theta \\ \sin 2\theta &amp; -\cos 2\theta \end{bmatrix}" data-display="false"><code>\begin{bmatrix} \cos 2\theta &amp; \sin 2\theta \\ \sin 2\theta &amp; -\cos 2\theta \end{bmatrix}</code></span> |

> 反射矩阵 = <span class="course-math" data-tex="2 \times" data-display="false"><code>2 \times</code></span> 投影矩阵 <span class="course-math" data-tex="- \mathbf{I}" data-display="false"><code>- \mathbf{I}</code></span>（因为 <span class="course-math" data-tex="\mathbf{R}(\mathbf{v}) + \mathbf{v} = 2\mathbf{P}(\mathbf{v})" data-display="false"><code>\mathbf{R}(\mathbf{v}) + \mathbf{v} = 2\mathbf{P}(\mathbf{v})</code></span>）

**基变换（Change of Basis）：** <span class="course-math" data-tex="T: V \to V" data-display="false"><code>T: V \to V</code></span> 在基 <span class="course-math" data-tex="\{\mathbf{v}_i\}" data-display="false"><code>\{\mathbf{v}_i\}</code></span> 下矩阵为 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，在基 <span class="course-math" data-tex="\{\mathbf{w}_i\}" data-display="false"><code>\{\mathbf{w}_i\}</code></span> 下矩阵为 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span>，且
<span class="course-math course-math-display" data-tex="[\mathbf{w}_1 \cdots \mathbf{w}_n] = [\mathbf{v}_1 \cdots \mathbf{v}_n] \mathbf{S}" data-display="true"><code>[\mathbf{w}_1 \cdots \mathbf{w}_n] = [\mathbf{v}_1 \cdots \mathbf{v}_n] \mathbf{S}</code></span>

则：
<span class="course-math course-math-display" data-tex="\mathbf{B} = \mathbf{S}^{-1} \mathbf{A} \mathbf{S}" data-display="true"><code>\mathbf{B} = \mathbf{S}^{-1} \mathbf{A} \mathbf{S}</code></span>

**理解：** <span class="course-math" data-tex="\mathbf{w}" data-display="false"><code>\mathbf{w}</code></span> 基下的坐标 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span> 对应 <span class="course-math" data-tex="\mathbf{v}" data-display="false"><code>\mathbf{v}</code></span> 基下的坐标 <span class="course-math" data-tex="\mathbf{S}\mathbf{x}" data-display="false"><code>\mathbf{S}\mathbf{x}</code></span>。在 <span class="course-math" data-tex="\mathbf{w}" data-display="false"><code>\mathbf{w}</code></span> 基下：<span class="course-math" data-tex="\mathbf{y} = \mathbf{B}\mathbf{x}" data-display="false"><code>\mathbf{y} = \mathbf{B}\mathbf{x}</code></span>；翻译到 <span class="course-math" data-tex="\mathbf{v}" data-display="false"><code>\mathbf{v}</code></span> 基：<span class="course-math" data-tex="\mathbf{S}\mathbf{y} = \mathbf{A}(\mathbf{S}\mathbf{x})" data-display="false"><code>\mathbf{S}\mathbf{y} = \mathbf{A}(\mathbf{S}\mathbf{x})</code></span>。对比即得 <span class="course-math" data-tex="\mathbf{B} = \mathbf{S}^{-1}\mathbf{A}\mathbf{S}" data-display="false"><code>\mathbf{B} = \mathbf{S}^{-1}\mathbf{A}\mathbf{S}</code></span>。

---


## 3 Orthogonality
{: #section-16 }



### 3.1 Orthogonal Vectors and Subspaces
{: #section-17 }


- **内积/点乘：** <span class="course-math" data-tex="\mathbf{u}^{\top}\mathbf{v} = \sum u_i v_i" data-display="false"><code>\mathbf{u}^{\top}\mathbf{v} = \sum u_i v_i</code></span>
- **正交：** <span class="course-math" data-tex="\mathbf{u}^{\top}\mathbf{v} = 0" data-display="false"><code>\mathbf{u}^{\top}\mathbf{v} = 0</code></span>
- **长度（范数）：** <span class="course-math" data-tex="\lVert \mathbf{x}\rVert  = \sqrt{\mathbf{x}^{\top}\mathbf{x}}" data-display="false"><code>\lVert \mathbf{x}\rVert  = \sqrt{\mathbf{x}^{\top}\mathbf{x}}</code></span>
- **夹角：** <span class="course-math" data-tex="\cos\theta = \frac{\mathbf{x}^{\top}\mathbf{y}}{\lVert \mathbf{x}\rVert \lVert \mathbf{y}\rVert }" data-display="false"><code>\cos\theta = \frac{\mathbf{x}^{\top}\mathbf{y}}{\lVert \mathbf{x}\rVert \lVert \mathbf{y}\rVert }</code></span>

**柯西-施瓦茨不等式（Cauchy-Schwarz）：**
<span class="course-math course-math-display" data-tex="\lvert \mathbf{x}\cdot\mathbf{y}\rvert ^2 \leq \lVert \mathbf{x}\rVert ^2 \lVert \mathbf{y}\rVert ^2" data-display="true"><code>\lvert \mathbf{x}\cdot\mathbf{y}\rvert ^2 \leq \lVert \mathbf{x}\rVert ^2 \lVert \mathbf{y}\rVert ^2</code></span>

（与 <span class="course-math" data-tex="\cos\theta" data-display="false"><code>\cos\theta</code></span> 定义统一，因 <span class="course-math" data-tex="\lvert \cos\theta\rvert  \leq 1" data-display="false"><code>\lvert \cos\theta\rvert  \leq 1</code></span>）

**定理：** 相互正交的非零向量组必线性无关。

**子空间的正交：** <span class="course-math" data-tex="V \perp W" data-display="false"><code>V \perp W</code></span> 若 <span class="course-math" data-tex="\forall \mathbf{v}\in V, \mathbf{w}\in W,\ \mathbf{v}^{\top} \mathbf{w} = 0" data-display="false"><code>\forall \mathbf{v}\in V, \mathbf{w}\in W,\ \mathbf{v}^{\top} \mathbf{w} = 0</code></span>

**正交补（Orthogonal Complement）：** <span class="course-math" data-tex="V^\perp = \{\mathbf{v} \mid \mathbf{v} \perp V\}" data-display="false"><code>V^\perp = \{\mathbf{v} \mid \mathbf{v} \perp V\}</code></span>，且 <span class="course-math" data-tex="\dim V + \dim V^\perp = n" data-display="false"><code>\dim V + \dim V^\perp = n</code></span>

**基本正交关系：**
<span class="course-math course-math-display" data-tex="C(\mathbf{A}) \perp N(\mathbf{A}^{\top}), \quad C(\mathbf{A}^{\top}) \perp N(\mathbf{A})" data-display="true"><code>C(\mathbf{A}) \perp N(\mathbf{A}^{\top}), \quad C(\mathbf{A}^{\top}) \perp N(\mathbf{A})</code></span>
<span class="course-math course-math-display" data-tex="C(\mathbf{A})^\perp = N(\mathbf{A}^{\top}), \quad C(\mathbf{A}^{\top})^\perp = N(\mathbf{A})" data-display="true"><code>C(\mathbf{A})^\perp = N(\mathbf{A}^{\top}), \quad C(\mathbf{A}^{\top})^\perp = N(\mathbf{A})</code></span>

- 证明 <span class="course-math" data-tex="C(\mathbf{A}) \perp N(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A}) \perp N(\mathbf{A}^{\top})</code></span>：<span class="course-math" data-tex="\mathbf{b} \in C(\mathbf{A}) \implies \exists \mathbf{x}, \mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{b} \in C(\mathbf{A}) \implies \exists \mathbf{x}, \mathbf{A}\mathbf{x}=\mathbf{b}</code></span>；<span class="course-math" data-tex="\mathbf{y} \in N(\mathbf{A}^{\top}) \implies \mathbf{y}^{\top} \mathbf{A} = 0" data-display="false"><code>\mathbf{y} \in N(\mathbf{A}^{\top}) \implies \mathbf{y}^{\top} \mathbf{A} = 0</code></span>。则 <span class="course-math" data-tex="\mathbf{y}^{\top} \mathbf{b} = \mathbf{y}^{\top}(\mathbf{A}\mathbf{x}) = (\mathbf{y}^{\top} \mathbf{A})\mathbf{x} = 0" data-display="false"><code>\mathbf{y}^{\top} \mathbf{b} = \mathbf{y}^{\top}(\mathbf{A}\mathbf{x}) = (\mathbf{y}^{\top} \mathbf{A})\mathbf{x} = 0</code></span>
- 推论：<span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{b}</code></span> 相容的等价条件：<span class="course-math" data-tex="\mathbf{y}^{\top}\mathbf{b} = 0,\ \forall \mathbf{y} \in N(\mathbf{A}^{\top})" data-display="false"><code>\mathbf{y}^{\top}\mathbf{b} = 0,\ \forall \mathbf{y} \in N(\mathbf{A}^{\top})</code></span>

**几何意义：** <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 将行空间 <span class="course-math" data-tex="C(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A}^{\top})</code></span> 一一映射到列空间 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span>，将零空间 <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> 映射到 <span class="course-math" data-tex="\mathbf{0}" data-display="false"><code>\mathbf{0}</code></span>。任意 <span class="course-math" data-tex="\mathbf{x} = \mathbf{x}_r + \mathbf{x}_n" data-display="false"><code>\mathbf{x} = \mathbf{x}_r + \mathbf{x}_n</code></span>（<span class="course-math" data-tex="\mathbf{x}_r \in C(\mathbf{A}^{\top}), \mathbf{x}_n \in N(\mathbf{A})" data-display="false"><code>\mathbf{x}_r \in C(\mathbf{A}^{\top}), \mathbf{x}_n \in N(\mathbf{A})</code></span>），<span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \mathbf{A}\mathbf{x}_r" data-display="false"><code>\mathbf{A}\mathbf{x} = \mathbf{A}\mathbf{x}_r</code></span>。


### 3.2 Cosines and Projections onto Lines
{: #section-18 }


**向量 <span class="course-math" data-tex="\mathbf{b}" data-display="false"><code>\mathbf{b}</code></span> 在非零向量 <span class="course-math" data-tex="\mathbf{a}" data-display="false"><code>\mathbf{a}</code></span> 上的投影：**
<span class="course-math course-math-display" data-tex="\mathbf{p} = \lVert \mathbf{b}\rVert \cos\theta \cdot \frac{\mathbf{a}}{\lVert \mathbf{a}\rVert } = \frac{\mathbf{a}^{\top}\mathbf{b}}{\mathbf{a}^{\top}\mathbf{a}} \mathbf{a}" data-display="true"><code>\mathbf{p} = \lVert \mathbf{b}\rVert \cos\theta \cdot \frac{\mathbf{a}}{\lVert \mathbf{a}\rVert } = \frac{\mathbf{a}^{\top}\mathbf{b}}{\mathbf{a}^{\top}\mathbf{a}} \mathbf{a}</code></span>

**投影矩阵：**
<span class="course-math course-math-display" data-tex="\mathbf{P} = \frac{\mathbf{a}\mathbf{a}^{\top}}{\mathbf{a}^{\top}\mathbf{a}}" data-display="true"><code>\mathbf{P} = \frac{\mathbf{a}\mathbf{a}^{\top}}{\mathbf{a}^{\top}\mathbf{a}}</code></span>

- <span class="course-math" data-tex="\mathbf{P}" data-display="false"><code>\mathbf{P}</code></span> 是对称的秩一矩阵
- <span class="course-math" data-tex="\mathbf{P}^2 = \mathbf{P}" data-display="false"><code>\mathbf{P}^2 = \mathbf{P}</code></span>（投影两次等于投影一次）


### 3.3 Projections and Least Squares
{: #section-19 }


**最小二乘问题：** 求 <span class="course-math" data-tex="\min \lVert \mathbf{A}\mathbf{x} - \mathbf{b}\rVert ^2" data-display="false"><code>\min \lVert \mathbf{A}\mathbf{x} - \mathbf{b}\rVert ^2</code></span>

即最小化 <span class="course-math" data-tex="\sum_{i=1}^m (a_{i1}x_1 + \cdots + a_{in}x_n - b_i)^2" data-display="false"><code>\sum_{i=1}^m (a_{i1}x_1 + \cdots + a_{in}x_n - b_i)^2</code></span>

**几何推导：** <span class="course-math" data-tex="\mathbf{A}\mathbf{x}" data-display="false"><code>\mathbf{A}\mathbf{x}</code></span> 落在 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span> 中。要使 <span class="course-math" data-tex="\lVert \mathbf{A}\mathbf{x} - \mathbf{b}\rVert" data-display="false"><code>\lVert \mathbf{A}\mathbf{x} - \mathbf{b}\rVert</code></span> 最小，需 <span class="course-math" data-tex="\mathbf{b} - \mathbf{A}\hat{\mathbf{x}} \perp C(\mathbf{A})" data-display="false"><code>\mathbf{b} - \mathbf{A}\hat{\mathbf{x}} \perp C(\mathbf{A})</code></span>，即 <span class="course-math" data-tex="\mathbf{b} - \mathbf{A}\hat{\mathbf{x}} \in C(\mathbf{A})^\perp = N(\mathbf{A}^{\top})" data-display="false"><code>\mathbf{b} - \mathbf{A}\hat{\mathbf{x}} \in C(\mathbf{A})^\perp = N(\mathbf{A}^{\top})</code></span>。

<span class="course-math course-math-display" data-tex="\mathbf{A}^{\top}(\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}) = \mathbf{0} \implies \mathbf{A}^{\top}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}\mathbf{b}" data-display="true"><code>\mathbf{A}^{\top}(\mathbf{b} - \mathbf{A}\hat{\mathbf{x}}) = \mathbf{0} \implies \mathbf{A}^{\top}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}\mathbf{b}</code></span>

**法方程（Normal Equation）：** <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}\mathbf{b}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}\mathbf{b}</code></span>

- 法方程始终有解（几何直观保证 + 可证 <span class="course-math" data-tex="r(\mathbf{A}^{\top}\mathbf{A}) = r([\mathbf{A}^{\top}\mathbf{A} \mid \mathbf{A}^{\top}\mathbf{b}])" data-display="false"><code>r(\mathbf{A}^{\top}\mathbf{A}) = r([\mathbf{A}^{\top}\mathbf{A} \mid \mathbf{A}^{\top}\mathbf{b}])</code></span>）
- 若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 列满秩（<span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 可逆）：<span class="course-math" data-tex="\hat{\mathbf{x}} = (\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}\mathbf{b}" data-display="false"><code>\hat{\mathbf{x}} = (\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}\mathbf{b}</code></span>
- 若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可逆：<span class="course-math" data-tex="\hat{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{b}" data-display="false"><code>\hat{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{b}</code></span>

**投影到 <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span>（以下逆矩阵公式要求 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 列满秩）：**
<span class="course-math course-math-display" data-tex="\mathbf{p} = \mathbf{A}\hat{\mathbf{x}} = \mathbf{A}(\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}\mathbf{b}" data-display="true"><code>\mathbf{p} = \mathbf{A}\hat{\mathbf{x}} = \mathbf{A}(\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}\mathbf{b}</code></span>

**投影矩阵（Projection Matrix）：**
<span class="course-math course-math-display" data-tex="\mathbf{P} = \mathbf{A}(\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}" data-display="true"><code>\mathbf{P} = \mathbf{A}(\mathbf{A}^{\top}\mathbf{A})^{-1}\mathbf{A}^{\top}</code></span>

- <span class="course-math" data-tex="\mathbf{P}^2 = \mathbf{P}" data-display="false"><code>\mathbf{P}^2 = \mathbf{P}</code></span>（两次投影等于一次）
- <span class="course-math" data-tex="\mathbf{P}^{\top} = \mathbf{P}" data-display="false"><code>\mathbf{P}^{\top} = \mathbf{P}</code></span>（对称）
- 任何满足 <span class="course-math" data-tex="\mathbf{P}^2 = \mathbf{P}" data-display="false"><code>\mathbf{P}^2 = \mathbf{P}</code></span> 且 <span class="course-math" data-tex="\mathbf{P}^{\top} = \mathbf{P}" data-display="false"><code>\mathbf{P}^{\top} = \mathbf{P}</code></span> 的矩阵都是投影到 <span class="course-math" data-tex="C(\mathbf{P})" data-display="false"><code>C(\mathbf{P})</code></span> 的投影矩阵
- <span class="course-math" data-tex="\mathbf{I} - \mathbf{P}" data-display="false"><code>\mathbf{I} - \mathbf{P}</code></span> 也是投影矩阵，投影到 <span class="course-math" data-tex="C(\mathbf{A})^\perp = N(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A})^\perp = N(\mathbf{A}^{\top})</code></span>

**应用——线性回归（<span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span>）：** 求直线 <span class="course-math" data-tex="b = C + Dt" data-display="false"><code>b = C + Dt</code></span> 最小化 <span class="course-math" data-tex="\sum (C + Dt_i - b_i)^2" data-display="false"><code>\sum (C + Dt_i - b_i)^2</code></span>

-   <span class="course-math course-math-display" data-tex="\mathbf{A} = \begin{bmatrix}1 &amp; t_1 \\ \vdots &amp; \vdots \\ 1 &amp; t_m\end{bmatrix},\ \mathbf{b} = \begin{bmatrix}b_1 \\ \vdots \\ b_m\end{bmatrix}" data-display="true"><code>\mathbf{A} = \begin{bmatrix}1 &amp; t_1 \\ \vdots &amp; \vdots \\ 1 &amp; t_m\end{bmatrix},\ \mathbf{b} = \begin{bmatrix}b_1 \\ \vdots \\ b_m\end{bmatrix}</code></span>

  ，解

  <span class="course-math course-math-display" data-tex="\mathbf{A}^{\top}\mathbf{A}\begin{bmatrix}C \\ D\end{bmatrix} = \mathbf{A}^{\top}\mathbf{b}" data-display="true"><code>\mathbf{A}^{\top}\mathbf{A}\begin{bmatrix}C \\ D\end{bmatrix} = \mathbf{A}^{\top}\mathbf{b}</code></span>
- 技巧：先中心化 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span>——令 <span class="course-math" data-tex="b = C_1 + D_1(t - \bar{t})" data-display="false"><code>b = C_1 + D_1(t - \bar{t})</code></span>，则 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的两列正交
- 此时 <span class="course-math" data-tex="\hat{C}_1 = \frac{\mathbf{v}_1^{\top}\mathbf{b}}{\mathbf{v}_1^{\top}\mathbf{v}_1},\ \hat{D}_1 = \frac{\mathbf{v}_2^{\top}\mathbf{b}}{\mathbf{v}_2^{\top}\mathbf{v}_2}" data-display="false"><code>\hat{C}_1 = \frac{\mathbf{v}_1^{\top}\mathbf{b}}{\mathbf{v}_1^{\top}\mathbf{v}_1},\ \hat{D}_1 = \frac{\mathbf{v}_2^{\top}\mathbf{b}}{\mathbf{v}_2^{\top}\mathbf{v}_2}</code></span>，原参数 <span class="course-math" data-tex="C = C_1 - D_1\bar{t},\ D = D_1" data-display="false"><code>C = C_1 - D_1\bar{t},\ D = D_1</code></span>

**加权最小二乘（Weighted Least Squares）：** <span class="course-math" data-tex="\min \sum w_i^2(a_{i1}x_1 + \cdots - b_i)^2" data-display="false"><code>\min \sum w_i^2(a_{i1}x_1 + \cdots - b_i)^2</code></span>

- 构造对角权矩阵 <span class="course-math" data-tex="\mathbf{W} = \operatorname{diag}(w_1,\dots,w_m)" data-display="false"><code>\mathbf{W} = \operatorname{diag}(w_1,\dots,w_m)</code></span>，化为 <span class="course-math" data-tex="\min \lVert \mathbf{W}\mathbf{A}\hat{\mathbf{x}} - \mathbf{W}\mathbf{b}\rVert ^2" data-display="false"><code>\min \lVert \mathbf{W}\mathbf{A}\hat{\mathbf{x}} - \mathbf{W}\mathbf{b}\rVert ^2</code></span>
- 法方程：<span class="course-math" data-tex="\mathbf{A}^{\top}(\mathbf{W}^{\top}\mathbf{W})\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}(\mathbf{W}^{\top}\mathbf{W})\mathbf{b}" data-display="false"><code>\mathbf{A}^{\top}(\mathbf{W}^{\top}\mathbf{W})\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}(\mathbf{W}^{\top}\mathbf{W})\mathbf{b}</code></span>


### 3.4 Orthogonal Bases and Gram-Schmidt
{: #section-20 }


**规范正交基（Orthonormal Basis）：**
<span class="course-math course-math-display" data-tex="\mathbf{q}_i^{\top} \mathbf{q}_j = \begin{cases} 1 &amp; i=j \\ 0 &amp; i\neq j \end{cases}" data-display="true"><code>\mathbf{q}_i^{\top} \mathbf{q}_j = \begin{cases} 1 &amp; i=j \\ 0 &amp; i\neq j \end{cases}</code></span>

**正交矩阵（方阵）：** <span class="course-math" data-tex="\mathbf{Q}^{\top} \mathbf{Q} = \mathbf{I}" data-display="false"><code>\mathbf{Q}^{\top} \mathbf{Q} = \mathbf{I}</code></span>
- <span class="course-math" data-tex="\mathbf{Q}^{-1} = \mathbf{Q}^{\top}" data-display="false"><code>\mathbf{Q}^{-1} = \mathbf{Q}^{\top}</code></span>（逆极易求）
- <span class="course-math" data-tex="\lVert \mathbf{Q}\mathbf{x}\rVert  = \lVert \mathbf{x}\rVert" data-display="false"><code>\lVert \mathbf{Q}\mathbf{x}\rVert  = \lVert \mathbf{x}\rVert</code></span>（保长度）
- <span class="course-math" data-tex="(\mathbf{Q}\mathbf{x})^{\top}(\mathbf{Q}\mathbf{y}) = \mathbf{x}^{\top}\mathbf{y}" data-display="false"><code>(\mathbf{Q}\mathbf{x})^{\top}(\mathbf{Q}\mathbf{y}) = \mathbf{x}^{\top}\mathbf{y}</code></span>（保内积/保角）
- <span class="course-math" data-tex="\mathbf{Q}^{\top}" data-display="false"><code>\mathbf{Q}^{\top}</code></span> 也是正交矩阵（行也正交）

**正交基/正交矩阵的好处：**
- 坐标易求：<span class="course-math" data-tex="\mathbf{b} = \sum x_i \mathbf{q}_i \implies x_i = \mathbf{q}_i^{\top}\mathbf{b}" data-display="false"><code>\mathbf{b} = \sum x_i \mathbf{q}_i \implies x_i = \mathbf{q}_i^{\top}\mathbf{b}</code></span>
- 方程易解：<span class="course-math" data-tex="\mathbf{Q}\mathbf{x} = \mathbf{b} \implies \mathbf{x} = \mathbf{Q}^{\top}\mathbf{b}" data-display="false"><code>\mathbf{Q}\mathbf{x} = \mathbf{b} \implies \mathbf{x} = \mathbf{Q}^{\top}\mathbf{b}</code></span>
- 向量分解即投影：<span class="course-math" data-tex="\mathbf{b} = \sum (\mathbf{q}_i^{\top}\mathbf{b}) \mathbf{q}_i" data-display="false"><code>\mathbf{b} = \sum (\mathbf{q}_i^{\top}\mathbf{b}) \mathbf{q}_i</code></span>
- 长度好求：<span class="course-math" data-tex="\lVert \mathbf{b}\rVert  = \sqrt{\sum (\mathbf{q}_i^{\top}\mathbf{b})^2}" data-display="false"><code>\lVert \mathbf{b}\rVert  = \sqrt{\sum (\mathbf{q}_i^{\top}\mathbf{b})^2}</code></span>

**半正交矩阵（列规范正交但不一定是方阵）：**
- 投影到 <span class="course-math" data-tex="C(\mathbf{Q})" data-display="false"><code>C(\mathbf{Q})</code></span>：<span class="course-math" data-tex="\mathbf{P} = \mathbf{Q}(\mathbf{Q}^{\top}\mathbf{Q})^{-1}\mathbf{Q}^{\top} = \mathbf{Q}\mathbf{Q}^{\top} = \sum \mathbf{q}_i \mathbf{q}_i^{\top}" data-display="false"><code>\mathbf{P} = \mathbf{Q}(\mathbf{Q}^{\top}\mathbf{Q})^{-1}\mathbf{Q}^{\top} = \mathbf{Q}\mathbf{Q}^{\top} = \sum \mathbf{q}_i \mathbf{q}_i^{\top}</code></span>
- 最小二乘解 <span class="course-math" data-tex="\mathbf{Q}\mathbf{x} = \mathbf{b}" data-display="false"><code>\mathbf{Q}\mathbf{x} = \mathbf{b}</code></span>：<span class="course-math" data-tex="\hat{\mathbf{x}} = \mathbf{Q}^{\top}\mathbf{b}" data-display="false"><code>\hat{\mathbf{x}} = \mathbf{Q}^{\top}\mathbf{b}</code></span>

**Householder 变换（反射变换）：** 将向量关于法向量 <span class="course-math" data-tex="\mathbf{v}" data-display="false"><code>\mathbf{v}</code></span> 的超平面作反射
<span class="course-math course-math-display" data-tex="\mathbf{H} = \mathbf{I} - 2\frac{\mathbf{v}\mathbf{v}^{\top}}{\mathbf{v}^{\top}\mathbf{v}}" data-display="true"><code>\mathbf{H} = \mathbf{I} - 2\frac{\mathbf{v}\mathbf{v}^{\top}}{\mathbf{v}^{\top}\mathbf{v}}</code></span>

- <span class="course-math" data-tex="\mathbf{H}^2 = \mathbf{I}" data-display="false"><code>\mathbf{H}^2 = \mathbf{I}</code></span>（对合），<span class="course-math" data-tex="\mathbf{H}^{\top} = \mathbf{H}" data-display="false"><code>\mathbf{H}^{\top} = \mathbf{H}</code></span>（对称），<span class="course-math" data-tex="\mathbf{H}^{\top} \mathbf{H} = \mathbf{I}" data-display="false"><code>\mathbf{H}^{\top} \mathbf{H} = \mathbf{I}</code></span>（正交）
- 用途：将向量某些分量置零而保持长度不变
- 例：找 <span class="course-math" data-tex="\mathbf{A}^2 = \mathbf{I}" data-display="false"><code>\mathbf{A}^2 = \mathbf{I}</code></span> 且第一列为单位向量 <span class="course-math" data-tex="\mathbf{u}" data-display="false"><code>\mathbf{u}</code></span> 的对称矩阵——取 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为 Householder 矩阵，法向量 <span class="course-math" data-tex="\mathbf{v} = \mathbf{e}_1 - \mathbf{u}" data-display="false"><code>\mathbf{v} = \mathbf{e}_1 - \mathbf{u}</code></span>；若 <span class="course-math" data-tex="\mathbf{u}=\mathbf{e}_1" data-display="false"><code>\mathbf{u}=\mathbf{e}_1</code></span>，直接取 <span class="course-math" data-tex="\mathbf{A}=\mathbf{I}" data-display="false"><code>\mathbf{A}=\mathbf{I}</code></span>

**Gram-Schmidt 正交化：** 从基 <span class="course-math" data-tex="\{\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_n\}" data-display="false"><code>\{\mathbf{a}_1, \mathbf{a}_2, \dots, \mathbf{a}_n\}</code></span> 构造规范正交基 <span class="course-math" data-tex="\{\mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_n\}" data-display="false"><code>\{\mathbf{q}_1, \mathbf{q}_2, \dots, \mathbf{q}_n\}</code></span>

<span class="course-math course-math-display" data-tex="\mathbf{q}_1 = \frac{\mathbf{a}_1}{\lVert \mathbf{a}_1\rVert }" data-display="true"><code>\mathbf{q}_1 = \frac{\mathbf{a}_1}{\lVert \mathbf{a}_1\rVert }</code></span>
<span class="course-math course-math-display" data-tex="\mathbf{u}_{j+1} = \mathbf{a}_{j+1} - \sum_{i=1}^{j} (\mathbf{q}_i^{\top} \mathbf{a}_{j+1}) \mathbf{q}_i" data-display="true"><code>\mathbf{u}_{j+1} = \mathbf{a}_{j+1} - \sum_{i=1}^{j} (\mathbf{q}_i^{\top} \mathbf{a}_{j+1}) \mathbf{q}_i</code></span>
<span class="course-math course-math-display" data-tex="\mathbf{q}_{j+1} = \frac{\mathbf{u}_{j+1}}{\lVert \mathbf{u}_{j+1}\rVert }" data-display="true"><code>\mathbf{q}_{j+1} = \frac{\mathbf{u}_{j+1}}{\lVert \mathbf{u}_{j+1}\rVert }</code></span>

> 也可以先不单位化到最后再做，计算更简单。

**QR 分解：**
<span class="course-math course-math-display" data-tex="\mathbf{A} = \mathbf{Q}\mathbf{R}" data-display="true"><code>\mathbf{A} = \mathbf{Q}\mathbf{R}</code></span>

- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>：列线性无关的 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵
- <span class="course-math" data-tex="\mathbf{Q}" data-display="false"><code>\mathbf{Q}</code></span>：<span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，列规范正交
- <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span>：<span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 可逆上三角矩阵，<span class="course-math" data-tex="R_{ij} = \mathbf{q}_i^{\top} \mathbf{a}_j" data-display="false"><code>R_{ij} = \mathbf{q}_i^{\top} \mathbf{a}_j</code></span>（<span class="course-math" data-tex="i \leq j" data-display="false"><code>i \leq j</code></span>）

**构造方式：**
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\mathbf{a}_1 &amp;= (\mathbf{q}_1^{\top} \mathbf{a}_1) \mathbf{q}_1 \\&#10;\mathbf{a}_2 &amp;= (\mathbf{q}_1^{\top} \mathbf{a}_2) \mathbf{q}_1 + (\mathbf{q}_2^{\top} \mathbf{a}_2) \mathbf{q}_2 \\&#10;&amp;\vdots \\&#10;\mathbf{a}_n &amp;= \sum_{i=1}^n (\mathbf{q}_i^{\top} \mathbf{a}_n) \mathbf{q}_i&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\mathbf{a}_1 &amp;= (\mathbf{q}_1^{\top} \mathbf{a}_1) \mathbf{q}_1 \\&#10;\mathbf{a}_2 &amp;= (\mathbf{q}_1^{\top} \mathbf{a}_2) \mathbf{q}_1 + (\mathbf{q}_2^{\top} \mathbf{a}_2) \mathbf{q}_2 \\&#10;&amp;\vdots \\&#10;\mathbf{a}_n &amp;= \sum_{i=1}^n (\mathbf{q}_i^{\top} \mathbf{a}_n) \mathbf{q}_i&#10;\end{aligned}</code></span>
<span class="course-math course-math-display" data-tex="\mathbf{R} = \begin{bmatrix}&#10;\mathbf{q}_1^{\top} \mathbf{a}_1 &amp; \mathbf{q}_1^{\top} \mathbf{a}_2 &amp; \dots &amp; \mathbf{q}_1^{\top} \mathbf{a}_n \\&#10;0 &amp; \mathbf{q}_2^{\top} \mathbf{a}_2 &amp; \dots &amp; \mathbf{q}_2^{\top} \mathbf{a}_n \\&#10;\vdots &amp; \vdots &amp; \ddots &amp; \vdots \\&#10;0 &amp; 0 &amp; \dots &amp; \mathbf{q}_n^{\top} \mathbf{a}_n&#10;\end{bmatrix} = \mathbf{Q}^{\top} \mathbf{A}" data-display="true"><code>\mathbf{R} = \begin{bmatrix}&#10;\mathbf{q}_1^{\top} \mathbf{a}_1 &amp; \mathbf{q}_1^{\top} \mathbf{a}_2 &amp; \dots &amp; \mathbf{q}_1^{\top} \mathbf{a}_n \\&#10;0 &amp; \mathbf{q}_2^{\top} \mathbf{a}_2 &amp; \dots &amp; \mathbf{q}_2^{\top} \mathbf{a}_n \\&#10;\vdots &amp; \vdots &amp; \ddots &amp; \vdots \\&#10;0 &amp; 0 &amp; \dots &amp; \mathbf{q}_n^{\top} \mathbf{a}_n&#10;\end{bmatrix} = \mathbf{Q}^{\top} \mathbf{A}</code></span>

> 若 <span class="course-math" data-tex="m=n" data-display="false"><code>m=n</code></span>（<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可逆）：任何可逆矩阵可分解为正交矩阵 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 上三角矩阵。

**利用 QR 解最小二乘：**
<span class="course-math course-math-display" data-tex="\mathbf{A}^{\top}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}\mathbf{b} \implies \mathbf{R}^{\top}\mathbf{R}\hat{\mathbf{x}} = \mathbf{R}^{\top}\mathbf{Q}^{\top}\mathbf{b} \implies \mathbf{R}\hat{\mathbf{x}} = \mathbf{Q}^{\top}\mathbf{b}" data-display="true"><code>\mathbf{A}^{\top}\mathbf{A}\hat{\mathbf{x}} = \mathbf{A}^{\top}\mathbf{b} \implies \mathbf{R}^{\top}\mathbf{R}\hat{\mathbf{x}} = \mathbf{R}^{\top}\mathbf{Q}^{\top}\mathbf{b} \implies \mathbf{R}\hat{\mathbf{x}} = \mathbf{Q}^{\top}\mathbf{b}</code></span>

直接回代，无需解法方程。

**抽象内积空间：** 内积 <span class="course-math" data-tex="\langle\cdot,\cdot\rangle: V\times V\to\mathbb{R}" data-display="false"><code>\langle\cdot,\cdot\rangle: V\times V\to\mathbb{R}</code></span> 需满足：
1. 对称性：<span class="course-math" data-tex="\langle \mathbf{v},\mathbf{w}\rangle = \langle \mathbf{w},\mathbf{v}\rangle" data-display="false"><code>\langle \mathbf{v},\mathbf{w}\rangle = \langle \mathbf{w},\mathbf{v}\rangle</code></span>
2. 双线性
3. 正定性：<span class="course-math" data-tex="\langle \mathbf{v},\mathbf{v}\rangle \geq 0" data-display="false"><code>\langle \mathbf{v},\mathbf{v}\rangle \geq 0</code></span>，且 <span class="course-math" data-tex="\mathbf{v}=0 \iff \langle \mathbf{v},\mathbf{v}\rangle = 0" data-display="false"><code>\mathbf{v}=0 \iff \langle \mathbf{v},\mathbf{v}\rangle = 0</code></span>

例——函数拟合：定义 <span class="course-math" data-tex="\langle f,g\rangle = \int_0^1 f(t)g(t)\,\mathrm{d}t" data-display="false"><code>\langle f,g\rangle = \int_0^1 f(t)g(t)\,\mathrm{d}t</code></span>，用 Gram-Schmidt 找 <span class="course-math" data-tex="\{1, t\}" data-display="false"><code>\{1, t\}</code></span> 的正交基 <span class="course-math" data-tex="\{1, t-\frac{1}{2}\}" data-display="false"><code>\{1, t-\frac{1}{2}\}</code></span>，则可直接投影。


### 3.5 The Fast Fourier Transform（不考）
{: #section-21 }


---


## 4 Determinants
{: #section-22 }



### 4.1 Introduction
{: #section-23 }


（二维、三维上，行列式是有向面积/体积。高维行列式从性质出发定义。）


### 4.2 Properties of the Determinant
{: #section-24 }


**定义性质：**
1. <span class="course-math" data-tex="\det(\mathbf{I}) = 1" data-display="false"><code>\det(\mathbf{I}) = 1</code></span>
2. 若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有两行相同，则 <span class="course-math" data-tex="\det(\mathbf{A}) = 0" data-display="false"><code>\det(\mathbf{A}) = 0</code></span>
3. <span class="course-math" data-tex="\det(\mathbf{A})" data-display="false"><code>\det(\mathbf{A})</code></span> 线性依赖于每一行

**推导性质：**
- 交换两行 → 行列式变号：<span class="course-math" data-tex="\det(P_{ij}\mathbf{A}) = -\det(\mathbf{A})" data-display="false"><code>\det(P_{ij}\mathbf{A}) = -\det(\mathbf{A})</code></span>
- 初等行变换（一行的倍数加到另一行）→ 行列式不变
- 三角矩阵的行列式 = 对角元之积：<span class="course-math" data-tex="\det(\mathbf{A}) = \prod a_{ii}" data-display="false"><code>\det(\mathbf{A}) = \prod a_{ii}</code></span>
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 奇异 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\det(\mathbf{A}) = 0" data-display="false"><code>\det(\mathbf{A}) = 0</code></span>；<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可逆 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\det(\mathbf{A}) \neq 0" data-display="false"><code>\det(\mathbf{A}) \neq 0</code></span>
- **乘积公式：** <span class="course-math" data-tex="\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})" data-display="false"><code>\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})</code></span>
  - 证明：若 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 奇异，<span class="course-math" data-tex="\mathbf{A}\mathbf{B}" data-display="false"><code>\mathbf{A}\mathbf{B}</code></span> 也奇异，均为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。若 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 可逆，验证 <span class="course-math" data-tex="d(\mathbf{A}) = \frac{\det(\mathbf{A}\mathbf{B})}{\det(\mathbf{B})}" data-display="false"><code>d(\mathbf{A}) = \frac{\det(\mathbf{A}\mathbf{B})}{\det(\mathbf{B})}</code></span> 满足三条定义性质，故 <span class="course-math" data-tex="d(\mathbf{A}) = \det(\mathbf{A})" data-display="false"><code>d(\mathbf{A}) = \det(\mathbf{A})</code></span>。
- **转置不变：** <span class="course-math" data-tex="\det(\mathbf{A}) = \det(\mathbf{A}^{\top})" data-display="false"><code>\det(\mathbf{A}) = \det(\mathbf{A}^{\top})</code></span>
  - 证明：利用 <span class="course-math" data-tex="\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}" data-display="false"><code>\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}</code></span>，转置后 <span class="course-math" data-tex="\det(\mathbf{P}) = \det(\mathbf{P}^{\top})" data-display="false"><code>\det(\mathbf{P}) = \det(\mathbf{P}^{\top})</code></span>，三角矩阵转置行列式不变。
- 满秩时 <span class="course-math" data-tex="\det(\mathbf{A}) = \pm (\text{全部 }n\text{ 个主元之积})" data-display="false"><code>\det(\mathbf{A}) = \pm (\text{全部 }n\text{ 个主元之积})</code></span>，秩不足时 <span class="course-math" data-tex="\det(\mathbf{A})=0" data-display="false"><code>\det(\mathbf{A})=0</code></span>（由 <span class="course-math" data-tex="\mathbf{L}\mathbf{U}" data-display="false"><code>\mathbf{L}\mathbf{U}</code></span> 分解）

> 注意：一般 <span class="course-math" data-tex="\det(\mathbf{A}+\mathbf{B}) \neq \det(\mathbf{A})+\det(\mathbf{B})" data-display="false"><code>\det(\mathbf{A}+\mathbf{B}) \neq \det(\mathbf{A})+\det(\mathbf{B})</code></span>；<span class="course-math" data-tex="\det(c\mathbf{A}) = c^n\det(\mathbf{A})" data-display="false"><code>\det(c\mathbf{A}) = c^n\det(\mathbf{A})</code></span>

**几何意义（<span class="course-math" data-tex="\mathbf{A} = \mathbf{Q}\mathbf{R}" data-display="false"><code>\mathbf{A} = \mathbf{Q}\mathbf{R}</code></span>）：** <span class="course-math" data-tex="\det(\mathbf{A}) = \det(\mathbf{Q})\det(\mathbf{R}) = \pm \prod \mathbf{q}_i^{\top} a_i" data-display="false"><code>\det(\mathbf{A}) = \det(\mathbf{Q})\det(\mathbf{R}) = \pm \prod \mathbf{q}_i^{\top} a_i</code></span>，相当于"底 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 高 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 高 <span class="course-math" data-tex="\times \cdots" data-display="false"><code>\times \cdots</code></span>"，即高维体积。


### 4.3 Formulas for the Determinant
{: #section-25 }


**大公式（Big Formula）：**
<span class="course-math course-math-display" data-tex="\det(\mathbf{A}) = \sum_{(\alpha_1,\dots,\alpha_n)} a_{1\alpha_1}a_{2\alpha_2}\cdots a_{n\alpha_n} \cdot (-1)^{\text{inv}(\alpha)}" data-display="true"><code>\det(\mathbf{A}) = \sum_{(\alpha_1,\dots,\alpha_n)} a_{1\alpha_1}a_{2\alpha_2}\cdots a_{n\alpha_n} \cdot (-1)^{\text{inv}(\alpha)}</code></span>

遍历 <span class="course-math" data-tex="(1,2,\dots,n)" data-display="false"><code>(1,2,\dots,n)</code></span> 的所有排列 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>。<span class="course-math" data-tex="\text{inv}(\alpha)" data-display="false"><code>\text{inv}(\alpha)</code></span> = 排列的逆序数（<span class="course-math" data-tex="i&lt;j" data-display="false"><code>i&lt;j</code></span> 但 <span class="course-math" data-tex="\alpha_i&gt;\alpha_j" data-display="false"><code>\alpha_i&gt;\alpha_j</code></span> 的对数）。

> 计算量 <span class="course-math" data-tex="O(n!)" data-display="false"><code>O(n!)</code></span>，实际用 <span class="course-math" data-tex="\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}" data-display="false"><code>\mathbf{P}\mathbf{A} = \mathbf{L}\mathbf{U}</code></span>。

**代数余子式（Cofactor）：**
- 余子式 <span class="course-math" data-tex="M_{ij}" data-display="false"><code>M_{ij}</code></span>：删去第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列后的 <span class="course-math" data-tex="(n-1)\times(n-1)" data-display="false"><code>(n-1)\times(n-1)</code></span> 行列式
- 代数余子式 <span class="course-math" data-tex="C_{ij} = (-1)^{i+j} M_{ij}" data-display="false"><code>C_{ij} = (-1)^{i+j} M_{ij}</code></span>

**拉普拉斯展开（第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行）：**
<span class="course-math course-math-display" data-tex="\det(\mathbf{A}) = \sum_{j=1}^n a_{ij} C_{ij}" data-display="true"><code>\det(\mathbf{A}) = \sum_{j=1}^n a_{ij} C_{ij}</code></span>

同理可对第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列展开：<span class="course-math" data-tex="\det(\mathbf{A}) = \sum_{i=1}^n a_{ij} C_{ij}" data-display="false"><code>\det(\mathbf{A}) = \sum_{i=1}^n a_{ij} C_{ij}</code></span>

（由大公式固定展开行/列即得）


### 4.4 Applications of Determinants
{: #section-26 }


**用行列式求逆：**
<span class="course-math course-math-display" data-tex="\mathbf{A}^{-1} = \frac{\mathbf{C}^{\top}}{\det(\mathbf{A})}" data-display="true"><code>\mathbf{A}^{-1} = \frac{\mathbf{C}^{\top}}{\det(\mathbf{A})}</code></span>

其中 <span class="course-math" data-tex="\mathbf{C}" data-display="false"><code>\mathbf{C}</code></span> 是代数余子式矩阵（<span class="course-math" data-tex="C_{ij} = (-1)^{i+j}M_{ij}" data-display="false"><code>C_{ij} = (-1)^{i+j}M_{ij}</code></span>）。

**证明：** 需证 <span class="course-math" data-tex="\mathbf{A}\mathbf{C}^{\top} = \det(\mathbf{A})\mathbf{I}" data-display="false"><code>\mathbf{A}\mathbf{C}^{\top} = \det(\mathbf{A})\mathbf{I}</code></span>：
- <span class="course-math" data-tex="(\mathbf{A}\mathbf{C}^{\top})_{ii} = \sum a_{ik}C_{ik} = \det(\mathbf{A})" data-display="false"><code>(\mathbf{A}\mathbf{C}^{\top})_{ii} = \sum a_{ik}C_{ik} = \det(\mathbf{A})</code></span>（第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行展开）
- <span class="course-math" data-tex="(\mathbf{A}\mathbf{C}^{\top})_{ij} = \sum a_{ik}C_{jk} = 0" data-display="false"><code>(\mathbf{A}\mathbf{C}^{\top})_{ij} = \sum a_{ik}C_{jk} = 0</code></span>（<span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>，相当于将第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行"替换"为第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行的矩阵的行列式，该矩阵有两行相同，故为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>）

**克莱姆法则（Cramer's Rule）：** <span class="course-math" data-tex="\mathbf{A}\mathbf{x}=\mathbf{b}" data-display="false"><code>\mathbf{A}\mathbf{x}=\mathbf{b}</code></span> 的解
<span class="course-math course-math-display" data-tex="x_j = \frac{\det(\mathbf{B}_j)}{\det(\mathbf{A})}" data-display="true"><code>x_j = \frac{\det(\mathbf{B}_j)}{\det(\mathbf{A})}</code></span>

其中 <span class="course-math" data-tex="\mathbf{B}_j" data-display="false"><code>\mathbf{B}_j</code></span> 是将 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 的第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列替换为 <span class="course-math" data-tex="\mathbf{b}" data-display="false"><code>\mathbf{b}</code></span> 得到的矩阵。

**推导：** <span class="course-math" data-tex="\mathbf{x} = \mathbf{A}^{-1}\mathbf{b} = \frac{\mathbf{C}^{\top}}{\det(\mathbf{A})}\mathbf{b}" data-display="false"><code>\mathbf{x} = \mathbf{A}^{-1}\mathbf{b} = \frac{\mathbf{C}^{\top}}{\det(\mathbf{A})}\mathbf{b}</code></span>，<span class="course-math" data-tex="(\mathbf{C}^{\top}\mathbf{b})_j = \sum_i C_{ij}b_i = \det(\mathbf{B}_j)" data-display="false"><code>(\mathbf{C}^{\top}\mathbf{b})_j = \sum_i C_{ij}b_i = \det(\mathbf{B}_j)</code></span>（按第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列展开）。

**用行列式求主元：**
<span class="course-math course-math-display" data-tex="d_k = \frac{\det(\mathbf{A}_k)}{\det(\mathbf{A}_{k-1})}" data-display="true"><code>d_k = \frac{\det(\mathbf{A}_k)}{\det(\mathbf{A}_{k-1})}</code></span>

其中 <span class="course-math" data-tex="\mathbf{A}_k" data-display="false"><code>\mathbf{A}_k</code></span> 是 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 左上角 <span class="course-math" data-tex="k\times k" data-display="false"><code>k\times k</code></span> 子矩阵（假设无需换行消元，所有顺序主子式非零，且 <span class="course-math" data-tex="\det(\mathbf{A}_0)=1" data-display="false"><code>\det(\mathbf{A}_0)=1</code></span>）。

**证明：** <span class="course-math" data-tex="\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U}" data-display="false"><code>\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U}</code></span>，则 <span class="course-math" data-tex="\mathbf{A}_k = \mathbf{L}_k \mathbf{D}_k \mathbf{U}_k" data-display="false"><code>\mathbf{A}_k = \mathbf{L}_k \mathbf{D}_k \mathbf{U}_k</code></span>，故 <span class="course-math" data-tex="\det(\mathbf{A}_k) = d_1 d_2 \cdots d_k" data-display="false"><code>\det(\mathbf{A}_k) = d_1 d_2 \cdots d_k</code></span>，相除即得。

---


## 5 Eigenvalues and Eigenvectors
{: #section-27 }



### 5.1 Introduction
{: #section-28 }


**定义：** <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \lambda \mathbf{x}" data-display="false"><code>\mathbf{A}\mathbf{x} = \lambda \mathbf{x}</code></span>（<span class="course-math" data-tex="\mathbf{x} \neq \mathbf{0}" data-display="false"><code>\mathbf{x} \neq \mathbf{0}</code></span>）
- <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>：特征值（Eigenvalue）
- <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span>：<span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 对应的特征向量（Eigenvector）
- 特征空间（Eigenspace）：<span class="course-math" data-tex="N(\mathbf{A} - \lambda \mathbf{I})" data-display="false"><code>N(\mathbf{A} - \lambda \mathbf{I})</code></span>

**求法：**
1. 解特征方程 <span class="course-math" data-tex="\det(\mathbf{A} - \lambda \mathbf{I}) = 0" data-display="false"><code>\det(\mathbf{A} - \lambda \mathbf{I}) = 0</code></span> 得 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>
2. 对每个 <span class="course-math" data-tex="\lambda_i" data-display="false"><code>\lambda_i</code></span>，解 <span class="course-math" data-tex="(\mathbf{A} - \lambda_i \mathbf{I})\mathbf{x} = \mathbf{0}" data-display="false"><code>(\mathbf{A} - \lambda_i \mathbf{I})\mathbf{x} = \mathbf{0}</code></span> 得特征向量

**几何意义：** 经过 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 代表的线性变换后，与原向量共线的向量。

**迹与行列式：** 由韦达定理考察 <span class="course-math" data-tex="\lambda^{n-1}" data-display="false"><code>\lambda^{n-1}</code></span> 和 <span class="course-math" data-tex="\lambda^0" data-display="false"><code>\lambda^0</code></span> 系数：
<span class="course-math course-math-display" data-tex="\sum_{i=1}^n \lambda_i = \operatorname{tr}(\mathbf{A}) = \sum a_{ii}" data-display="true"><code>\sum_{i=1}^n \lambda_i = \operatorname{tr}(\mathbf{A}) = \sum a_{ii}</code></span>
<span class="course-math course-math-display" data-tex="\prod_{i=1}^n \lambda_i = \det(\mathbf{A})" data-display="true"><code>\prod_{i=1}^n \lambda_i = \det(\mathbf{A})</code></span>


### 5.2 Diagonalization of a Matrix
{: #section-29 }


若 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个线性无关的特征向量 <span class="course-math" data-tex="\mathbf{v}_1, \dots, \mathbf{v}_n" data-display="false"><code>\mathbf{v}_1, \dots, \mathbf{v}_n</code></span>：
<span class="course-math course-math-display" data-tex="\mathbf{A} = \mathbf{S}\boldsymbol{\Lambda} \mathbf{S}^{-1}" data-display="true"><code>\mathbf{A} = \mathbf{S}\boldsymbol{\Lambda} \mathbf{S}^{-1}</code></span>

- <span class="course-math" data-tex="\mathbf{S} = [\mathbf{v}_1 \cdots \mathbf{v}_n]" data-display="false"><code>\mathbf{S} = [\mathbf{v}_1 \cdots \mathbf{v}_n]</code></span>（特征向量矩阵）
- <span class="course-math" data-tex="\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)" data-display="false"><code>\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)</code></span>（特征值矩阵）

**几何意义：** <span class="course-math" data-tex="\mathbf{S}" data-display="false"><code>\mathbf{S}</code></span> 相当于基变换矩阵。在以特征向量为基的坐标系中，线性变换只是沿各坐标轴按相应特征值伸缩。

**可对角化条件：**
- <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可对角化 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个线性无关的特征向量
- <span class="course-math" data-tex="\impliedby" data-display="false"><code>\impliedby</code></span> <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个互异的特征值（充分非必要）

**定理：若特征向量对应的特征值互异，则这些特征向量线性无关。**
- 归纳法：假设 <span class="course-math" data-tex="\sum c_i \mathbf{x}_i = \mathbf{0}" data-display="false"><code>\sum c_i \mathbf{x}_i = \mathbf{0}</code></span>，左乘 <span class="course-math" data-tex="(\mathbf{A} - \lambda_j \mathbf{I})" data-display="false"><code>(\mathbf{A} - \lambda_j \mathbf{I})</code></span> 消去第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 项，化归为 <span class="course-math" data-tex="k-1" data-display="false"><code>k-1</code></span> 个向量的情况。
- 或利用多项式：令 <span class="course-math" data-tex="f(x) = \prod_{i\neq j} (x - \lambda_i)" data-display="false"><code>f(x) = \prod_{i\neq j} (x - \lambda_i)</code></span>，左乘 <span class="course-math" data-tex="f(\mathbf{A})" data-display="false"><code>f(\mathbf{A})</code></span> 得 <span class="course-math" data-tex="c_j = 0" data-display="false"><code>c_j = 0</code></span>。

**幂的计算：** <span class="course-math" data-tex="\mathbf{A}^k = \mathbf{S}\boldsymbol{\Lambda}^k \mathbf{S}^{-1}" data-display="false"><code>\mathbf{A}^k = \mathbf{S}\boldsymbol{\Lambda}^k \mathbf{S}^{-1}</code></span>（<span class="course-math" data-tex="\boldsymbol{\Lambda}^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)" data-display="false"><code>\boldsymbol{\Lambda}^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)</code></span>）

**多项式定理：** 若 <span class="course-math" data-tex="f(x) = a_n x^n + \cdots + a_0" data-display="false"><code>f(x) = a_n x^n + \cdots + a_0</code></span>，且 <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \lambda\mathbf{x}" data-display="false"><code>\mathbf{A}\mathbf{x} = \lambda\mathbf{x}</code></span>，则
<span class="course-math course-math-display" data-tex="f(\mathbf{A})\mathbf{x} = f(\lambda)\mathbf{x}" data-display="true"><code>f(\mathbf{A})\mathbf{x} = f(\lambda)\mathbf{x}</code></span>

即 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span> 也是 <span class="course-math" data-tex="f(\mathbf{A})" data-display="false"><code>f(\mathbf{A})</code></span> 的特征向量，对应特征值 <span class="course-math" data-tex="f(\lambda)" data-display="false"><code>f(\lambda)</code></span>。

**同时对角化定理：** 若 <span class="course-math" data-tex="\mathbf{A}, \mathbf{B}" data-display="false"><code>\mathbf{A}, \mathbf{B}</code></span> 均可对角化，则
<span class="course-math course-math-display" data-tex="\mathbf{A}\mathbf{B} = \mathbf{B}\mathbf{A} \iff \mathbf{A}, \mathbf{B} \text{ 共享特征向量矩阵 } \mathbf{S}" data-display="true"><code>\mathbf{A}\mathbf{B} = \mathbf{B}\mathbf{A} \iff \mathbf{A}, \mathbf{B} \text{ 共享特征向量矩阵 } \mathbf{S}</code></span>

此时 <span class="course-math" data-tex="\mathbf{A}\mathbf{B}" data-display="false"><code>\mathbf{A}\mathbf{B}</code></span> 的特征向量同 <span class="course-math" data-tex="\mathbf{S}" data-display="false"><code>\mathbf{S}</code></span>，特征值 = <span class="course-math" data-tex="\lambda_i^A \lambda_i^B" data-display="false"><code>\lambda_i^A \lambda_i^B</code></span>。

**<span class="course-math" data-tex="\mathbf{A}\mathbf{B}" data-display="false"><code>\mathbf{A}\mathbf{B}</code></span> 与 <span class="course-math" data-tex="\mathbf{B}\mathbf{A}" data-display="false"><code>\mathbf{B}\mathbf{A}</code></span> 的特征值关系：** 非零特征值始终相同。若均为 <span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span>，特征多项式相同：
<span class="course-math course-math-display" data-tex="\lambda^n\det(\mathbf{A}\mathbf{B} - \lambda \mathbf{I}_m)  = \lambda^m\det(\mathbf{B}\mathbf{A} - \lambda \mathbf{I}_n)" data-display="true"><code>\lambda^n\det(\mathbf{A}\mathbf{B} - \lambda \mathbf{I}_m)  = \lambda^m\det(\mathbf{B}\mathbf{A} - \lambda \mathbf{I}_n)</code></span>

（<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span>，<span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 为 <span class="course-math" data-tex="n\times m" data-display="false"><code>n\times m</code></span>）

**秩一矩阵的特征值：** 至少有 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 个特征值为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>（按代数重数计）（<span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> 有 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 维）。


### 5.3 Difference Equations and Powers <span class="course-math" data-tex="\mathbf{A}^k" data-display="false"><code>\mathbf{A}^k</code></span>
{: #section-30 }


**递推数列 <span class="course-math" data-tex="\mathbf{u}_{k+1} = \mathbf{A} \mathbf{u}_k" data-display="false"><code>\mathbf{u}_{k+1} = \mathbf{A} \mathbf{u}_k</code></span> 解法：**

若 <span class="course-math" data-tex="\mathbf{u}_0 = c_1\mathbf{x}_1 + \cdots + c_n\mathbf{x}_n" data-display="false"><code>\mathbf{u}_0 = c_1\mathbf{x}_1 + \cdots + c_n\mathbf{x}_n</code></span>（<span class="course-math" data-tex="\mathbf{x}_i" data-display="false"><code>\mathbf{x}_i</code></span> 为特征向量，特征值 <span class="course-math" data-tex="\lambda_i" data-display="false"><code>\lambda_i</code></span>），则：
<span class="course-math course-math-display" data-tex="\mathbf{u}_k = \mathbf{A}^k \mathbf{u}_0 = \sum c_i \lambda_i^k \mathbf{x}_i" data-display="true"><code>\mathbf{u}_k = \mathbf{A}^k \mathbf{u}_0 = \sum c_i \lambda_i^k \mathbf{x}_i</code></span>

**步骤：** 将 <span class="course-math" data-tex="\mathbf{u}_0" data-display="false"><code>\mathbf{u}_0</code></span> 用特征向量为基展开，矩阵的幂次直接变成特征值的幂次。

**斐波那契数列：** <span class="course-math" data-tex="F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n" data-display="false"><code>F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n</code></span>

<span class="course-math course-math-display" data-tex="\begin{bmatrix} F_{n+1} \\ F_n \end{bmatrix} = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}^n \begin{bmatrix} 1 \\ 0 \end{bmatrix}" data-display="true"><code>\begin{bmatrix} F_{n+1} \\ F_n \end{bmatrix} = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}^n \begin{bmatrix} 1 \\ 0 \end{bmatrix}</code></span>

对角化

<span class="course-math course-math-display" data-tex="\mathbf{A} = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}" data-display="true"><code>\mathbf{A} = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}</code></span>

，特征值 <span class="course-math" data-tex="\lambda_{1,2} = \frac{1\pm\sqrt{5}}{2}" data-display="false"><code>\lambda_{1,2} = \frac{1\pm\sqrt{5}}{2}</code></span>，得：
<span class="course-math course-math-display" data-tex="F_n = \frac{1}{\sqrt{5}}\left( \left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n \right)" data-display="true"><code>F_n = \frac{1}{\sqrt{5}}\left( \left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n \right)</code></span>

**一般差分方程通用解法：** 构造 <span class="course-math" data-tex="\mathbf{u}_{k+1} = \mathbf{A} \mathbf{u}_k" data-display="false"><code>\mathbf{u}_{k+1} = \mathbf{A} \mathbf{u}_k</code></span>，对角化 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，展开 <span class="course-math" data-tex="\mathbf{u}_0" data-display="false"><code>\mathbf{u}_0</code></span>，即可得通项。

**Markov 矩阵：**
- 定义：<span class="course-math" data-tex="a_{ij} \geq 0" data-display="false"><code>a_{ij} \geq 0</code></span>，且每列之和为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>
- 性质：
  - 必有特征值 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>（因为 <span class="course-math" data-tex="\mathbf{1}^{\top} \mathbf{A} = \mathbf{1}^{\top}" data-display="false"><code>\mathbf{1}^{\top} \mathbf{A} = \mathbf{1}^{\top}</code></span>，故 <span class="course-math" data-tex="\mathbf{1}" data-display="false"><code>\mathbf{1}</code></span> 是 <span class="course-math" data-tex="\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}^{\top}</code></span> 的特征向量，<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 与 <span class="course-math" data-tex="\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}^{\top}</code></span> 特征方程相同）
  - 存在特征值 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 对应的特征向量各分量均非负
  - 其余特征值 <span class="course-math" data-tex="\lvert \lambda_i\rvert  \leq 1" data-display="false"><code>\lvert \lambda_i\rvert  \leq 1</code></span>
  - 若所有 <span class="course-math" data-tex="a_{ij} &gt; 0" data-display="false"><code>a_{ij} &gt; 0</code></span>，则其余 <span class="course-math" data-tex="\lvert \lambda_i\rvert  &lt; 1" data-display="false"><code>\lvert \lambda_i\rvert  &lt; 1</code></span>


### 5.4 Differential Equations and <span class="course-math" data-tex="e^{At}" data-display="false"><code>e^{At}</code></span>（不考）
{: #section-31 }



### 5.5 Complex Matrices
{: #section-32 }


**复向量空间 <span class="course-math" data-tex="\mathbb{C}^n" data-display="false"><code>\mathbb{C}^n</code></span>：** 分量 <span class="course-math" data-tex="x_i \in \mathbb{C}" data-display="false"><code>x_i \in \mathbb{C}</code></span>，共轭 <span class="course-math" data-tex="\bar{\mathbf{x}}" data-display="false"><code>\bar{\mathbf{x}}</code></span>。内积定义为：
<span class="course-math course-math-display" data-tex="\langle \mathbf{x}, \mathbf{y} \rangle = \bar{\mathbf{x}}^{\top} \mathbf{y} = \overline{x_1}y_1 + \cdots + \overline{x_n}y_n" data-display="true"><code>\langle \mathbf{x}, \mathbf{y} \rangle = \bar{\mathbf{x}}^{\top} \mathbf{y} = \overline{x_1}y_1 + \cdots + \overline{x_n}y_n</code></span>

长度：<span class="course-math" data-tex="\lVert \mathbf{x}\rVert ^2 = \bar{\mathbf{x}}^{\top}\mathbf{x} = \sum \lvert x_i\rvert ^2" data-display="false"><code>\lVert \mathbf{x}\rVert ^2 = \bar{\mathbf{x}}^{\top}\mathbf{x} = \sum \lvert x_i\rvert ^2</code></span>

**共轭转置（Conjugate Transpose / Hermitian Transpose）：**
<span class="course-math course-math-display" data-tex="\mathbf{A}^{\mathrm{H}} = \bar{\mathbf{A}}^{\top} = \overline{\mathbf{A}^{\top}}" data-display="true"><code>\mathbf{A}^{\mathrm{H}} = \bar{\mathbf{A}}^{\top} = \overline{\mathbf{A}^{\top}}</code></span>
性质：<span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{\mathrm{H}} = \mathbf{B}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{\mathrm{H}} = \mathbf{B}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}}</code></span>

---

**埃尔米特矩阵（Hermitian）：** <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} = \mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} = \mathbf{A}</code></span>
- 方阵，对角元为实数（<span class="course-math" data-tex="\bar{a}_{ii} = a_{ii}" data-display="false"><code>\bar{a}_{ii} = a_{ii}</code></span>）
- 实对称矩阵是 Hermitian 的特例
- **特征值全为实数**
  - 证明：<span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \lambda\mathbf{x} \implies \mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x} = \lambda \lVert \mathbf{x}\rVert ^2" data-display="false"><code>\mathbf{A}\mathbf{x} = \lambda\mathbf{x} \implies \mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x} = \lambda \lVert \mathbf{x}\rVert ^2</code></span>，又 <span class="course-math" data-tex="(\mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x})^{\mathrm{H}} = \mathbf{x}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}} \mathbf{x} = \mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x}" data-display="false"><code>(\mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x})^{\mathrm{H}} = \mathbf{x}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}} \mathbf{x} = \mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x}</code></span>，故 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x} \in \mathbb{R}" data-display="false"><code>\mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{x} \in \mathbb{R}</code></span>，故 <span class="course-math" data-tex="\lambda \in \mathbb{R}" data-display="false"><code>\lambda \in \mathbb{R}</code></span>
- **不同特征值的特征向量正交**
  - 证明：<span class="course-math" data-tex="(\mathbf{A}\mathbf{x})^{\mathrm{H}} \mathbf{y} = \lambda (\mathbf{x}^{\mathrm{H}} \mathbf{y}) = \mathbf{x}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}} \mathbf{y} = \mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{y} = \mu(\mathbf{x}^{\mathrm{H}} \mathbf{y})" data-display="false"><code>(\mathbf{A}\mathbf{x})^{\mathrm{H}} \mathbf{y} = \lambda (\mathbf{x}^{\mathrm{H}} \mathbf{y}) = \mathbf{x}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}} \mathbf{y} = \mathbf{x}^{\mathrm{H}} \mathbf{A}\mathbf{y} = \mu(\mathbf{x}^{\mathrm{H}} \mathbf{y})</code></span>，若 <span class="course-math" data-tex="\lambda \neq \mu" data-display="false"><code>\lambda \neq \mu</code></span> 则 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}} \mathbf{y} = 0" data-display="false"><code>\mathbf{x}^{\mathrm{H}} \mathbf{y} = 0</code></span>

**酉矩阵（Unitary）：** <span class="course-math" data-tex="\mathbf{U}^{\mathrm{H}} \mathbf{U} = \mathbf{I}" data-display="false"><code>\mathbf{U}^{\mathrm{H}} \mathbf{U} = \mathbf{I}</code></span>
- 保内积：<span class="course-math" data-tex="(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{y}) = \mathbf{x}^{\mathrm{H}} \mathbf{y}" data-display="false"><code>(\mathbf{U}\mathbf{x})^{\mathrm{H}}(\mathbf{U}\mathbf{y}) = \mathbf{x}^{\mathrm{H}} \mathbf{y}</code></span>
- **特征值满足 <span class="course-math" data-tex="\lvert \lambda\rvert  = 1" data-display="false"><code>\lvert \lambda\rvert  = 1</code></span>**
  - 证明：<span class="course-math" data-tex="\lVert \mathbf{U}\mathbf{x}\rVert ^2 = \mathbf{x}^{\mathrm{H}} \mathbf{U}^{\mathrm{H}} \mathbf{U}\mathbf{x} = \mathbf{x}^{\mathrm{H}} \mathbf{x} = \lVert \mathbf{x}\rVert ^2" data-display="false"><code>\lVert \mathbf{U}\mathbf{x}\rVert ^2 = \mathbf{x}^{\mathrm{H}} \mathbf{U}^{\mathrm{H}} \mathbf{U}\mathbf{x} = \mathbf{x}^{\mathrm{H}} \mathbf{x} = \lVert \mathbf{x}\rVert ^2</code></span>，又 <span class="course-math" data-tex="= \lvert \lambda\rvert ^2 \lVert \mathbf{x}\rVert ^2 \implies \lvert \lambda\rvert  = 1" data-display="false"><code>= \lvert \lambda\rvert ^2 \lVert \mathbf{x}\rVert ^2 \implies \lvert \lambda\rvert  = 1</code></span>
- **不同特征值的特征向量正交**

**斜埃尔米特矩阵（Skew-Hermitian）：** <span class="course-math" data-tex="\mathbf{K}^{\mathrm{H}} = -\mathbf{K}" data-display="false"><code>\mathbf{K}^{\mathrm{H}} = -\mathbf{K}</code></span>
- 对角元为纯虚数（<span class="course-math" data-tex="a-bi = -(a+bi) \implies a=0" data-display="false"><code>a-bi = -(a+bi) \implies a=0</code></span>）
- **特征值全为纯虚数**
  - 证明：<span class="course-math" data-tex="i\mathbf{K}" data-display="false"><code>i\mathbf{K}</code></span> 是 Hermitian 矩阵，<span class="course-math" data-tex="(i\mathbf{K})\mathbf{x} = \lambda\mathbf{x},\ \lambda\in\mathbb{R} \implies \mathbf{K}\mathbf{x} = -i\lambda\mathbf{x}" data-display="false"><code>(i\mathbf{K})\mathbf{x} = \lambda\mathbf{x},\ \lambda\in\mathbb{R} \implies \mathbf{K}\mathbf{x} = -i\lambda\mathbf{x}</code></span>
- **不同特征值的特征向量正交**
- 若 <span class="course-math" data-tex="\mathbf{K}" data-display="false"><code>\mathbf{K}</code></span> 为实矩阵，则为反对称矩阵（Skew-Symmetric）：<span class="course-math" data-tex="\mathbf{K}^{\top} = -\mathbf{K}" data-display="false"><code>\mathbf{K}^{\top} = -\mathbf{K}</code></span>，对角元为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>

---

| 实矩阵 | 复矩阵 |
|--------|--------|
| <span class="course-math" data-tex="\lVert \mathbf{x}\rVert ^2 = \sum x_i^2" data-display="false"><code>\lVert \mathbf{x}\rVert ^2 = \sum x_i^2</code></span> | <span class="course-math" data-tex="\lVert \mathbf{x}\rVert ^2 = \sum \lvert x_i\rvert^2" data-display="false"><code>\lVert \mathbf{x}\rVert ^2 = \sum \lvert x_i\rvert^2</code></span> |
| 内积 <span class="course-math" data-tex="\mathbf{x}^{\top}\mathbf{y}" data-display="false"><code>\mathbf{x}^{\top}\mathbf{y}</code></span> | 内积 <span class="course-math" data-tex="\mathbf{x}^{\mathrm{H}}\mathbf{y}" data-display="false"><code>\mathbf{x}^{\mathrm{H}}\mathbf{y}</code></span> |
| 转置 <span class="course-math" data-tex="\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}^{\top}</code></span> | 共轭转置 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}}" data-display="false"><code>\mathbf{A}^{\mathrm{H}}</code></span> |
| <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{\top} = \mathbf{B}^{\top} \mathbf{A}^{\top}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{\top} = \mathbf{B}^{\top} \mathbf{A}^{\top}</code></span> | <span class="course-math" data-tex="(\mathbf{A}\mathbf{B})^{\mathrm{H}} = \mathbf{B}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}}" data-display="false"><code>(\mathbf{A}\mathbf{B})^{\mathrm{H}} = \mathbf{B}^{\mathrm{H}} \mathbf{A}^{\mathrm{H}}</code></span> |
| 对称 <span class="course-math" data-tex="\mathbf{A} = \mathbf{A}^{\top}" data-display="false"><code>\mathbf{A} = \mathbf{A}^{\top}</code></span> | Hermitian <span class="course-math" data-tex="\mathbf{A} = \mathbf{A}^{\mathrm{H}}" data-display="false"><code>\mathbf{A} = \mathbf{A}^{\mathrm{H}}</code></span> |
| 对称对角化 <span class="course-math" data-tex="\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}" data-display="false"><code>\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}</code></span> | Hermitian 对角化 <span class="course-math" data-tex="\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}" data-display="false"><code>\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}</code></span> |
| 正交 <span class="course-math" data-tex="\mathbf{Q}^{\top} \mathbf{Q} = \mathbf{I}" data-display="false"><code>\mathbf{Q}^{\top} \mathbf{Q} = \mathbf{I}</code></span> | 酉 <span class="course-math" data-tex="\mathbf{U}^{\mathrm{H}} \mathbf{U} = \mathbf{I}" data-display="false"><code>\mathbf{U}^{\mathrm{H}} \mathbf{U} = \mathbf{I}</code></span> |
| 斜对称 <span class="course-math" data-tex="\mathbf{A}^{\top} = -\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top} = -\mathbf{A}</code></span> | 斜 Hermitian <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} = -\mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} = -\mathbf{A}</code></span> |


### 5.6 Similarity Transformations
{: #section-33 }


**相似矩阵：** <span class="course-math" data-tex="\mathbf{A} \sim \mathbf{B}" data-display="false"><code>\mathbf{A} \sim \mathbf{B}</code></span> 若 <span class="course-math" data-tex="\exists" data-display="false"><code>\exists</code></span> 可逆 <span class="course-math" data-tex="\mathbf{M}" data-display="false"><code>\mathbf{M}</code></span> 使得 <span class="course-math" data-tex="\mathbf{B} = \mathbf{M}^{-1}\mathbf{A}\mathbf{M}" data-display="false"><code>\mathbf{B} = \mathbf{M}^{-1}\mathbf{A}\mathbf{M}</code></span>

- 相似矩阵有相同的特征值：<span class="course-math" data-tex="\det(\mathbf{B} - \lambda \mathbf{I}) = \det(\mathbf{M}^{-1}(\mathbf{A}-\lambda \mathbf{I})\mathbf{M}) = \det(\mathbf{A}-\lambda \mathbf{I})" data-display="false"><code>\det(\mathbf{B} - \lambda \mathbf{I}) = \det(\mathbf{M}^{-1}(\mathbf{A}-\lambda \mathbf{I})\mathbf{M}) = \det(\mathbf{A}-\lambda \mathbf{I})</code></span>
- <span class="course-math" data-tex="\mathbf{A}\mathbf{x} = \lambda\mathbf{x} \implies \mathbf{B}(\mathbf{M}^{-1}\mathbf{x}) = \lambda(\mathbf{M}^{-1}\mathbf{x})" data-display="false"><code>\mathbf{A}\mathbf{x} = \lambda\mathbf{x} \implies \mathbf{B}(\mathbf{M}^{-1}\mathbf{x}) = \lambda(\mathbf{M}^{-1}\mathbf{x})</code></span>（特征向量通过 <span class="course-math" data-tex="\mathbf{M}^{-1}" data-display="false"><code>\mathbf{M}^{-1}</code></span> 变换）
- 几何意义：<span class="course-math" data-tex="\mathbf{A} \sim \mathbf{B}" data-display="false"><code>\mathbf{A} \sim \mathbf{B}</code></span> 表示同一线性变换在不同基下的矩阵表示。若 <span class="course-math" data-tex="\mathbf{W} = \mathbf{V} \mathbf{M}" data-display="false"><code>\mathbf{W} = \mathbf{V} \mathbf{M}</code></span>（<span class="course-math" data-tex="\mathbf{V}, \mathbf{W}" data-display="false"><code>\mathbf{V}, \mathbf{W}</code></span> 为两组基），则 <span class="course-math" data-tex="\mathbf{B} = \mathbf{M}^{-1} \mathbf{A} \mathbf{M}" data-display="false"><code>\mathbf{B} = \mathbf{M}^{-1} \mathbf{A} \mathbf{M}</code></span>

**Schur 引理：** 对任意复矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span>，存在酉矩阵 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 使得 <span class="course-math" data-tex="\mathbf{T} = \mathbf{U}^{-1}\mathbf{A}\mathbf{U}" data-display="false"><code>\mathbf{T} = \mathbf{U}^{-1}\mathbf{A}\mathbf{U}</code></span> 为上三角矩阵。

**谱定理（Spectral Theorem）——实对称矩阵：**
<span class="course-math course-math-display" data-tex="\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}" data-display="true"><code>\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top}</code></span>

- <span class="course-math" data-tex="\mathbf{Q}" data-display="false"><code>\mathbf{Q}</code></span>：正交矩阵（列为规范正交的特征向量）
- <span class="course-math" data-tex="\boldsymbol{\Lambda}" data-display="false"><code>\boldsymbol{\Lambda}</code></span>：实对角矩阵（特征值全为实数）

**谱分解：**
<span class="course-math course-math-display" data-tex="\mathbf{A} = \sum_{i=1}^n \lambda_i \mathbf{q}_i \mathbf{q}_i^{\top}" data-display="true"><code>\mathbf{A} = \sum_{i=1}^n \lambda_i \mathbf{q}_i \mathbf{q}_i^{\top}</code></span>

将 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 写成一维投影矩阵的线性组合。

**谱定理——Hermitian 推广：** <span class="course-math" data-tex="\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}" data-display="false"><code>\mathbf{A} = \mathbf{U}\boldsymbol{\Lambda} \mathbf{U}^{\mathrm{H}}</code></span>（<span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 为酉矩阵，<span class="course-math" data-tex="\boldsymbol{\Lambda}" data-display="false"><code>\boldsymbol{\Lambda}</code></span> 实对角）

**谱定理的证明思路：** Schur 引理给出 <span class="course-math" data-tex="\mathbf{A} = \mathbf{U} \mathbf{T} \mathbf{U}^{\mathrm{H}}" data-display="false"><code>\mathbf{A} = \mathbf{U} \mathbf{T} \mathbf{U}^{\mathrm{H}}</code></span>（<span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 上三角），由 <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} = \mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} = \mathbf{A}</code></span> 得 <span class="course-math" data-tex="\mathbf{T}^{\mathrm{H}} = \mathbf{T}" data-display="false"><code>\mathbf{T}^{\mathrm{H}} = \mathbf{T}</code></span>，故 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 为对角矩阵。

**谱分解定理（推广版）：** Hermitian 矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个互异特征值 <span class="course-math" data-tex="\lambda_1,\dots,\lambda_k" data-display="false"><code>\lambda_1,\dots,\lambda_k</code></span>，对应特征空间 <span class="course-math" data-tex="V_i" data-display="false"><code>V_i</code></span>：
<span class="course-math course-math-display" data-tex="\mathbf{A} = \sum_{i=1}^k \lambda_i \mathbf{P}_i" data-display="true"><code>\mathbf{A} = \sum_{i=1}^k \lambda_i \mathbf{P}_i</code></span>
其中 <span class="course-math" data-tex="\mathbf{P}_i" data-display="false"><code>\mathbf{P}_i</code></span> 是向 <span class="course-math" data-tex="V_i" data-display="false"><code>V_i</code></span> 的投影矩阵。

**正规矩阵（Normal Matrices）：** <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} \mathbf{A} = \mathbf{A} \mathbf{A}^{\mathrm{H}}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} \mathbf{A} = \mathbf{A} \mathbf{A}^{\mathrm{H}}</code></span>
- Hermitian、Skew-Hermitian、Unitary 都是正规矩阵
- **正规矩阵的谱定理：** <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可被酉矩阵对角化 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 是正规矩阵
  - 证明思路：<span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> 方向显然。<span class="course-math" data-tex="\impliedby" data-display="false"><code>\impliedby</code></span> 方向用 Schur 引理得 <span class="course-math" data-tex="\mathbf{T} = \mathbf{U}^{\mathrm{H}} \mathbf{A} \mathbf{U}" data-display="false"><code>\mathbf{T} = \mathbf{U}^{\mathrm{H}} \mathbf{A} \mathbf{U}</code></span> 上三角，由 <span class="course-math" data-tex="\mathbf{T}\mathbf{T}^{\mathrm{H}} = \mathbf{T}^{\mathrm{H}} \mathbf{T}" data-display="false"><code>\mathbf{T}\mathbf{T}^{\mathrm{H}} = \mathbf{T}^{\mathrm{H}} \mathbf{T}</code></span> 推出 <span class="course-math" data-tex="\mathbf{T}" data-display="false"><code>\mathbf{T}</code></span> 必为对角矩阵。
- 特征值特征总结：
  - Hermitian <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} = \mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} = \mathbf{A}</code></span> <span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> <span class="course-math" data-tex="\lambda = \bar{\lambda}" data-display="false"><code>\lambda = \bar{\lambda}</code></span>（实数）
  - Skew-Hermitian <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} = -\mathbf{A}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} = -\mathbf{A}</code></span> <span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> <span class="course-math" data-tex="\lambda = -\bar{\lambda}" data-display="false"><code>\lambda = -\bar{\lambda}</code></span>（纯虚数）
  - Unitary <span class="course-math" data-tex="\mathbf{A}^{\mathrm{H}} \mathbf{A} = \mathbf{I}" data-display="false"><code>\mathbf{A}^{\mathrm{H}} \mathbf{A} = \mathbf{I}</code></span> <span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> <span class="course-math" data-tex="\bar{\lambda}\lambda = \lvert \lambda\rvert ^2 = 1" data-display="false"><code>\bar{\lambda}\lambda = \lvert \lambda\rvert ^2 = 1</code></span>

---


## 6 Positive Definite Matrices
{: #section-34 }



### 6.1 Minima, Maxima, and Saddle Points
{: #section-35 }


**二元二次型 <span class="course-math" data-tex="f(x,y) = ax^2 + 2bxy + cy^2" data-display="false"><code>f(x,y) = ax^2 + 2bxy + cy^2</code></span>** 在原点处都是驻点。

矩阵表示：
<span class="course-math course-math-display" data-tex="\mathbf{x}^{\top} \mathbf{A} \mathbf{x} = \begin{bmatrix} x &amp; y \end{bmatrix} \begin{bmatrix} a &amp; b \\ b &amp; c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}" data-display="true"><code>\mathbf{x}^{\top} \mathbf{A} \mathbf{x} = \begin{bmatrix} x &amp; y \end{bmatrix} \begin{bmatrix} a &amp; b \\ b &amp; c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}</code></span>

| 条件 | 类型 | 图形 |
|------|------|------|
| <span class="course-math" data-tex="a&gt;0,\ ac&gt;b^2" data-display="false"><code>a&gt;0,\ ac&gt;b^2</code></span> | 正定（Positive Definite） | 开口向上的碗形 |
| <span class="course-math" data-tex="a&lt;0,\ ac&gt;b^2" data-display="false"><code>a&lt;0,\ ac&gt;b^2</code></span> | 负定（Negative Definite） | 开口向下的碗形 |
| <span class="course-math" data-tex="a\geq0,\ c\geq0,\ ac\geq b^2" data-display="false"><code>a\geq0,\ c\geq0,\ ac\geq b^2</code></span> | 半正定（Positive Semidefinite，包含正定） | 碗形；奇异且非零时为山谷；零二次型为平面 |
| <span class="course-math" data-tex="a\leq0,\ c\leq0,\ ac\geq b^2" data-display="false"><code>a\leq0,\ c\leq0,\ ac\geq b^2</code></span> | 半负定（Negative Semidefinite，包含负定） | 倒碗形；奇异且非零时为倒山谷；零二次型为平面 |
| <span class="course-math" data-tex="ac&lt;b^2" data-display="false"><code>ac&lt;b^2</code></span> | 不定（Indefinite） | 马鞍面，原点为鞍点 |

**<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元二次型：**
<span class="course-math course-math-display" data-tex="f(x_1,\dots,x_n) = \mathbf{x}^{\top} \mathbf{A} \mathbf{x} = \sum_i \sum_j a_{ij} x_i x_j" data-display="true"><code>f(x_1,\dots,x_n) = \mathbf{x}^{\top} \mathbf{A} \mathbf{x} = \sum_i \sum_j a_{ij} x_i x_j</code></span>

其中 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 为实对称矩阵（二次型矩阵）。交叉项 <span class="course-math" data-tex="x_i x_j" data-display="false"><code>x_i x_j</code></span>（<span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>）的系数除以 <span class="course-math" data-tex="2" data-display="false"><code>2</code></span> 才是 <span class="course-math" data-tex="a_{ij} = a_{ji}" data-display="false"><code>a_{ij} = a_{ji}</code></span>。


### 6.2 Tests for Positive Definiteness
{: #section-36 }


**定义：** 对称矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 正定（<span class="course-math" data-tex="\mathbf{A} &gt; 0" data-display="false"><code>\mathbf{A} &gt; 0</code></span>）<span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\forall \mathbf{x} \neq \mathbf{0},\ \mathbf{x}^{\top} \mathbf{A} \mathbf{x} &gt; 0" data-display="false"><code>\forall \mathbf{x} \neq \mathbf{0},\ \mathbf{x}^{\top} \mathbf{A} \mathbf{x} &gt; 0</code></span>

**正定的等价条件（TFAE）：**
1. <span class="course-math" data-tex="\forall \mathbf{x} \neq \mathbf{0},\ \mathbf{x}^{\top} \mathbf{A} \mathbf{x} &gt; 0" data-display="false"><code>\forall \mathbf{x} \neq \mathbf{0},\ \mathbf{x}^{\top} \mathbf{A} \mathbf{x} &gt; 0</code></span>
2. 所有特征值 <span class="course-math" data-tex="\lambda_i &gt; 0" data-display="false"><code>\lambda_i &gt; 0</code></span>
3. 所有左上主子式 <span class="course-math" data-tex="\det(\mathbf{A}_k) &gt; 0" data-display="false"><code>\det(\mathbf{A}_k) &gt; 0</code></span>
4. 所有主元 <span class="course-math" data-tex="d_k &gt; 0" data-display="false"><code>d_k &gt; 0</code></span>
5. 存在可逆矩阵 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 使得 <span class="course-math" data-tex="\mathbf{A} = \mathbf{R}^{\top} \mathbf{R}" data-display="false"><code>\mathbf{A} = \mathbf{R}^{\top} \mathbf{R}</code></span>

**证明脉络：**
- **<span class="course-math" data-tex="1 \implies 2" data-display="false"><code>1 \implies 2</code></span>：** 将特征向量 <span class="course-math" data-tex="\mathbf{x}_i" data-display="false"><code>\mathbf{x}_i</code></span> 代入得 <span class="course-math" data-tex="\lambda_i \lVert \mathbf{x}_i\rVert ^2 &gt; 0 \implies \lambda_i &gt; 0" data-display="false"><code>\lambda_i \lVert \mathbf{x}_i\rVert ^2 &gt; 0 \implies \lambda_i &gt; 0</code></span>
- **<span class="course-math" data-tex="2 \implies 1" data-display="false"><code>2 \implies 1</code></span>：** 谱定理展开 <span class="course-math" data-tex="\mathbf{x} = \sum c_i \mathbf{x}_i" data-display="false"><code>\mathbf{x} = \sum c_i \mathbf{x}_i</code></span>，<span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \sum \lambda_i c_i^2 &gt; 0" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \sum \lambda_i c_i^2 &gt; 0</code></span>
- **<span class="course-math" data-tex="2 \implies 3" data-display="false"><code>2 \implies 3</code></span>：** <span class="course-math" data-tex="\det(\mathbf{A}) = \prod \lambda_i &gt; 0" data-display="false"><code>\det(\mathbf{A}) = \prod \lambda_i &gt; 0</code></span>。前 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 维子空间限制也为正定，故 <span class="course-math" data-tex="\det(\mathbf{A}_k) &gt; 0" data-display="false"><code>\det(\mathbf{A}_k) &gt; 0</code></span>
- **<span class="course-math" data-tex="3 \implies 4" data-display="false"><code>3 \implies 4</code></span>：** <span class="course-math" data-tex="d_k = \det(\mathbf{A}_k) / \det(\mathbf{A}_{k-1}) &gt; 0" data-display="false"><code>d_k = \det(\mathbf{A}_k) / \det(\mathbf{A}_{k-1}) &gt; 0</code></span>
- **<span class="course-math" data-tex="4 \implies 1" data-display="false"><code>4 \implies 1</code></span>：** <span class="course-math" data-tex="\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U} = \mathbf{L}\mathbf{D}\mathbf{L}^{\top}" data-display="false"><code>\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U} = \mathbf{L}\mathbf{D}\mathbf{L}^{\top}</code></span>（对称性 <span class="course-math" data-tex="\implies \mathbf{U} = \mathbf{L}^{\top}" data-display="false"><code>\implies \mathbf{U} = \mathbf{L}^{\top}</code></span>），令 <span class="course-math" data-tex="\mathbf{y} = \mathbf{L}^{\top}\mathbf{x} \neq \mathbf{0}" data-display="false"><code>\mathbf{y} = \mathbf{L}^{\top}\mathbf{x} \neq \mathbf{0}</code></span>，则 <span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \mathbf{y}^{\top} \mathbf{D}\mathbf{y} = \sum d_i y_i^2 &gt; 0" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \mathbf{y}^{\top} \mathbf{D}\mathbf{y} = \sum d_i y_i^2 &gt; 0</code></span>
- **<span class="course-math" data-tex="5 \implies 1" data-display="false"><code>5 \implies 1</code></span>：** <span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \lVert \mathbf{R}\mathbf{x}\rVert ^2 &gt; 0" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \lVert \mathbf{R}\mathbf{x}\rVert ^2 &gt; 0</code></span>（<span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 可逆 <span class="course-math" data-tex="\implies \mathbf{R}\mathbf{x} \neq \mathbf{0}" data-display="false"><code>\implies \mathbf{R}\mathbf{x} \neq \mathbf{0}</code></span>）
- **<span class="course-math" data-tex="1 \implies 5" data-display="false"><code>1 \implies 5</code></span>（三种构造方式）：**
  - Cholesky：<span class="course-math" data-tex="\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{L}^{\top} = (\mathbf{L}\sqrt{\mathbf{D}})(\sqrt{\mathbf{D}}\mathbf{L}^{\top}) = \mathbf{R}^{\top} \mathbf{R}" data-display="false"><code>\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{L}^{\top} = (\mathbf{L}\sqrt{\mathbf{D}})(\sqrt{\mathbf{D}}\mathbf{L}^{\top}) = \mathbf{R}^{\top} \mathbf{R}</code></span>，取 <span class="course-math" data-tex="\mathbf{R} = \sqrt{\mathbf{D}}\mathbf{L}^{\top}" data-display="false"><code>\mathbf{R} = \sqrt{\mathbf{D}}\mathbf{L}^{\top}</code></span>
  - 特征分解：<span class="course-math" data-tex="\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top} = (\mathbf{Q}\sqrt{\boldsymbol{\Lambda}})(\sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top}) = \mathbf{R}^{\top} \mathbf{R}" data-display="false"><code>\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top} = (\mathbf{Q}\sqrt{\boldsymbol{\Lambda}})(\sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top}) = \mathbf{R}^{\top} \mathbf{R}</code></span>，取 <span class="course-math" data-tex="\mathbf{R} = \sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top}" data-display="false"><code>\mathbf{R} = \sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top}</code></span>
  - 对称平方根：<span class="course-math" data-tex="\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top} = (\mathbf{Q}\sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top})^2" data-display="false"><code>\mathbf{A} = \mathbf{Q}\boldsymbol{\Lambda} \mathbf{Q}^{\top} = (\mathbf{Q}\sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top})^2</code></span>，取 <span class="course-math" data-tex="\mathbf{R} = \sqrt{\mathbf{A}} = \mathbf{Q}\sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top} &gt; 0" data-display="false"><code>\mathbf{R} = \sqrt{\mathbf{A}} = \mathbf{Q}\sqrt{\boldsymbol{\Lambda}}\mathbf{Q}^{\top} &gt; 0</code></span>

> <span class="course-math" data-tex="\mathbf{R}^{\top} \mathbf{R}" data-display="false"><code>\mathbf{R}^{\top} \mathbf{R}</code></span> 分解不唯一：若 <span class="course-math" data-tex="\mathbf{A} = \mathbf{R}^{\top} \mathbf{R}" data-display="false"><code>\mathbf{A} = \mathbf{R}^{\top} \mathbf{R}</code></span>，则 <span class="course-math" data-tex="\forall" data-display="false"><code>\forall</code></span> 正交 <span class="course-math" data-tex="\mathbf{Q}" data-display="false"><code>\mathbf{Q}</code></span>，<span class="course-math" data-tex="(\mathbf{Q}\mathbf{R})^{\top}(\mathbf{Q}\mathbf{R}) = \mathbf{R}^{\top} \mathbf{R} = \mathbf{A}" data-display="false"><code>(\mathbf{Q}\mathbf{R})^{\top}(\mathbf{Q}\mathbf{R}) = \mathbf{R}^{\top} \mathbf{R} = \mathbf{A}</code></span>

**配方与高斯消元的对应：** <span class="course-math" data-tex="\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U}" data-display="false"><code>\mathbf{A} = \mathbf{L}\mathbf{D}\mathbf{U}</code></span> 时，<span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \sum d_i y_i^2" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = \sum d_i y_i^2</code></span>（<span class="course-math" data-tex="\mathbf{y} = \mathbf{L}^{\top}\mathbf{x}" data-display="false"><code>\mathbf{y} = \mathbf{L}^{\top}\mathbf{x}</code></span>），<span class="course-math" data-tex="d_i" data-display="false"><code>d_i</code></span> 即第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 个主元，这恰好是配方过程。

**半正定（Positive Semidefinite, <span class="course-math" data-tex="\mathbf{A} \geq 0" data-display="false"><code>\mathbf{A} \geq 0</code></span>）：** <span class="course-math" data-tex="\forall \mathbf{x},\ \mathbf{x}^{\top} \mathbf{A}\mathbf{x} \geq 0" data-display="false"><code>\forall \mathbf{x},\ \mathbf{x}^{\top} \mathbf{A}\mathbf{x} \geq 0</code></span>

**等价条件（TFAE）：**
- <span class="course-math" data-tex="\mathbf{A} \geq 0" data-display="false"><code>\mathbf{A} \geq 0</code></span>
- 所有特征值 <span class="course-math" data-tex="\lambda_i \geq 0" data-display="false"><code>\lambda_i \geq 0</code></span>
- 所有主矩阵（Principal Matrices）无负特征值
- 所有主子式 <span class="course-math" data-tex="\det(\mathbf{A}_I)\geq 0" data-display="false"><code>\det(\mathbf{A}_I)\geq 0</code></span>（包括非顺序主子式）
- 存在矩阵 <span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 使得 <span class="course-math" data-tex="\mathbf{A} = \mathbf{R}^{\top} \mathbf{R}" data-display="false"><code>\mathbf{A} = \mathbf{R}^{\top} \mathbf{R}</code></span>（<span class="course-math" data-tex="\mathbf{R}" data-display="false"><code>\mathbf{R}</code></span> 未必可逆）

> 技巧：<span class="course-math" data-tex="\mathbf{A} \geq 0 \iff \mathbf{A} + \varepsilon \mathbf{I} &gt; 0,\ \forall \varepsilon &gt; 0" data-display="false"><code>\mathbf{A} \geq 0 \iff \mathbf{A} + \varepsilon \mathbf{I} &gt; 0,\ \forall \varepsilon &gt; 0</code></span>（充分小），取极限即得半正定性质。

**负定：** <span class="course-math" data-tex="\mathbf{A} &lt; 0" data-display="false"><code>\mathbf{A} &lt; 0</code></span> 若 <span class="course-math" data-tex="-\mathbf{A} &gt; 0" data-display="false"><code>-\mathbf{A} &gt; 0</code></span>。等价于对所有非零 <span class="course-math" data-tex="\mathbf{x}" data-display="false"><code>\mathbf{x}</code></span> 都有 <span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A} \mathbf{x} &lt; 0" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A} \mathbf{x} &lt; 0</code></span>。


### 6.3 Singular Value Decomposition
{: #section-37 }


**定理：** 任意 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 可分解为
<span class="course-math course-math-display" data-tex="\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma} \mathbf{V}^{\top}" data-display="true"><code>\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma} \mathbf{V}^{\top}</code></span>

- <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span>：<span class="course-math" data-tex="m\times m" data-display="false"><code>m\times m</code></span> 正交矩阵（<span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\top}</code></span> 的特征向量）
- <span class="course-math" data-tex="\mathbf{V}" data-display="false"><code>\mathbf{V}</code></span>：<span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 正交矩阵（<span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 的特征向量）
- <span class="course-math" data-tex="\boldsymbol{\Sigma}" data-display="false"><code>\boldsymbol{\Sigma}</code></span>：<span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 对角矩阵

  <span class="course-math course-math-display" data-tex="\begin{bmatrix} \boldsymbol{\Sigma}_1 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}" data-display="true"><code>\begin{bmatrix} \boldsymbol{\Sigma}_1 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}</code></span>

  ，其中 <span class="course-math" data-tex="\boldsymbol{\Sigma}_1 = \operatorname{diag}(\sigma_1,\dots,\sigma_r)" data-display="false"><code>\boldsymbol{\Sigma}_1 = \operatorname{diag}(\sigma_1,\dots,\sigma_r)</code></span>
- <span class="course-math" data-tex="\sigma_i" data-display="false"><code>\sigma_i</code></span>：**奇异值（Singular Values）**，<span class="course-math" data-tex="\sigma_i = \sqrt{\lambda_i}" data-display="false"><code>\sigma_i = \sqrt{\lambda_i}</code></span>，<span class="course-math" data-tex="\lambda_i" data-display="false"><code>\lambda_i</code></span> 为 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span>（或 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\top}</code></span>）的非零特征值（<span class="course-math" data-tex="i=1,\dots,r=\operatorname{rank}(\mathbf{A})" data-display="false"><code>i=1,\dots,r=\operatorname{rank}(\mathbf{A})</code></span>）

> <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\top}</code></span> 和 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 都是半正定矩阵，非零特征值相同。

**验证 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 的非零特征值即 <span class="course-math" data-tex="\sigma_i^2" data-display="false"><code>\sigma_i^2</code></span>：**
<span class="course-math course-math-display" data-tex="\mathbf{A}^{\top}\mathbf{A} = \mathbf{V}\boldsymbol{\Sigma}^{\top} \mathbf{U}^{\top} \mathbf{U}\boldsymbol{\Sigma} \mathbf{V}^{\top} = \mathbf{V}(\boldsymbol{\Sigma}^{\top}\boldsymbol{\Sigma})\mathbf{V}^{\top} = \mathbf{V}\begin{bmatrix} \boldsymbol{\Sigma}_1^2 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}\mathbf{V}^{\top}" data-display="true"><code>\mathbf{A}^{\top}\mathbf{A} = \mathbf{V}\boldsymbol{\Sigma}^{\top} \mathbf{U}^{\top} \mathbf{U}\boldsymbol{\Sigma} \mathbf{V}^{\top} = \mathbf{V}(\boldsymbol{\Sigma}^{\top}\boldsymbol{\Sigma})\mathbf{V}^{\top} = \mathbf{V}\begin{bmatrix} \boldsymbol{\Sigma}_1^2 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}\mathbf{V}^{\top}</code></span>

**核心关系：** <span class="course-math" data-tex="\mathbf{A}\mathbf{v}_j = \sigma_j \mathbf{u}_j" data-display="false"><code>\mathbf{A}\mathbf{v}_j = \sigma_j \mathbf{u}_j</code></span>（<span class="course-math" data-tex="j=1,\dots,r" data-display="false"><code>j=1,\dots,r</code></span>）

**子空间对应：**
- <span class="course-math" data-tex="\mathbf{V}" data-display="false"><code>\mathbf{V}</code></span> 的前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 列 = <span class="course-math" data-tex="C(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A}^{\top})</code></span> 的标准正交基（行空间）
- <span class="course-math" data-tex="\mathbf{V}" data-display="false"><code>\mathbf{V}</code></span> 的后 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 列 = <span class="course-math" data-tex="N(\mathbf{A})" data-display="false"><code>N(\mathbf{A})</code></span> 的标准正交基（零空间）
- <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 的前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 列 = <span class="course-math" data-tex="C(\mathbf{A})" data-display="false"><code>C(\mathbf{A})</code></span> 的标准正交基（列空间）
- <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 的后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 列 = <span class="course-math" data-tex="N(\mathbf{A}^{\top})" data-display="false"><code>N(\mathbf{A}^{\top})</code></span> 的标准正交基（左零空间）

**SVD 的构造方法：**
1. 求 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 的特征值 <span class="course-math" data-tex="\lambda_1 \geq \cdots \geq \lambda_r &gt; 0" data-display="false"><code>\lambda_1 \geq \cdots \geq \lambda_r &gt; 0</code></span> 和 <span class="course-math" data-tex="\lambda_{r+1} = \cdots = \lambda_n = 0" data-display="false"><code>\lambda_{r+1} = \cdots = \lambda_n = 0</code></span>
2. <span class="course-math" data-tex="\sigma_i = \sqrt{\lambda_i}" data-display="false"><code>\sigma_i = \sqrt{\lambda_i}</code></span>
3. <span class="course-math" data-tex="\mathbf{V}" data-display="false"><code>\mathbf{V}</code></span> 由 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 的规范正交特征向量构成
4. 对 <span class="course-math" data-tex="j=1,\dots,r" data-display="false"><code>j=1,\dots,r</code></span>：<span class="course-math" data-tex="\mathbf{u}_j = \mathbf{A}\mathbf{v}_j / \sigma_j" data-display="false"><code>\mathbf{u}_j = \mathbf{A}\mathbf{v}_j / \sigma_j</code></span>（自动为 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\top}</code></span> 的单位特征向量）
5. 补全 <span class="course-math" data-tex="\mathbf{U}" data-display="false"><code>\mathbf{U}</code></span> 的剩余 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 列：求 <span class="course-math" data-tex="N(\mathbf{A}^{\top})" data-display="false"><code>N(\mathbf{A}^{\top})</code></span> 的标准正交基（即 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\top}</code></span> 零特征值的特征向量）

> 存在性证明：<span class="course-math" data-tex="\mathbf{v}_j" data-display="false"><code>\mathbf{v}_j</code></span> 为 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 的单位特征向量，则 <span class="course-math" data-tex="\lVert \mathbf{A}\mathbf{v}_j\rVert ^2 = \mathbf{v}_j^{\top} \mathbf{A}^{\top} \mathbf{A} \mathbf{v}_j = \sigma_j^2" data-display="false"><code>\lVert \mathbf{A}\mathbf{v}_j\rVert ^2 = \mathbf{v}_j^{\top} \mathbf{A}^{\top} \mathbf{A} \mathbf{v}_j = \sigma_j^2</code></span>，故 <span class="course-math" data-tex="\mathbf{A}\mathbf{v}_j / \sigma_j" data-display="false"><code>\mathbf{A}\mathbf{v}_j / \sigma_j</code></span> 是 <span class="course-math" data-tex="\mathbf{A}\mathbf{A}^{\top}" data-display="false"><code>\mathbf{A}\mathbf{A}^{\top}</code></span> 的单位特征向量。

**SVD 的应用：**

**极分解（Polar Decomposition）：** 任意实方阵 <span class="course-math" data-tex="\mathbf{A} = \mathbf{Q}\mathbf{S}" data-display="false"><code>\mathbf{A} = \mathbf{Q}\mathbf{S}</code></span>
<span class="course-math course-math-display" data-tex="\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma} \mathbf{V}^{\top} = (\mathbf{U}\mathbf{V}^{\top})(\mathbf{V}\boldsymbol{\Sigma} \mathbf{V}^{\top}) = \mathbf{Q}\mathbf{S}" data-display="true"><code>\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma} \mathbf{V}^{\top} = (\mathbf{U}\mathbf{V}^{\top})(\mathbf{V}\boldsymbol{\Sigma} \mathbf{V}^{\top}) = \mathbf{Q}\mathbf{S}</code></span>
- <span class="course-math" data-tex="\mathbf{Q} = \mathbf{U}\mathbf{V}^{\top}" data-display="false"><code>\mathbf{Q} = \mathbf{U}\mathbf{V}^{\top}</code></span>：正交矩阵
- <span class="course-math" data-tex="\mathbf{S} = \mathbf{V}\boldsymbol{\Sigma} \mathbf{V}^{\top}" data-display="false"><code>\mathbf{S} = \mathbf{V}\boldsymbol{\Sigma} \mathbf{V}^{\top}</code></span>：对称半正定矩阵
- 类比：<span class="course-math" data-tex="z = re^{i\theta}" data-display="false"><code>z = re^{i\theta}</code></span>，<span class="course-math" data-tex="\mathbf{S}" data-display="false"><code>\mathbf{S}</code></span> 类似于模长 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>，<span class="course-math" data-tex="\mathbf{Q}" data-display="false"><code>\mathbf{Q}</code></span> 类似于 <span class="course-math" data-tex="e^{i\theta}" data-display="false"><code>e^{i\theta}</code></span>

**可逆方阵分解：** <span class="course-math" data-tex="\mathbf{A} = \mathbf{Q}_1 \mathbf{S} \mathbf{Q}_2^{-1}" data-display="false"><code>\mathbf{A} = \mathbf{Q}_1 \mathbf{S} \mathbf{Q}_2^{-1}</code></span>（<span class="course-math" data-tex="\mathbf{Q}_1, \mathbf{Q}_2" data-display="false"><code>\mathbf{Q}_1, \mathbf{Q}_2</code></span> 正交，<span class="course-math" data-tex="\mathbf{S}" data-display="false"><code>\mathbf{S}</code></span> 正定对角），可由 SVD 或直接构造 <span class="course-math" data-tex="\mathbf{A}^{\top}\mathbf{A}" data-display="false"><code>\mathbf{A}^{\top}\mathbf{A}</code></span> 的特征分解得。

**伪逆（Pseudoinverse / Moore-Penrose Inverse）：**
<span class="course-math course-math-display" data-tex="\mathbf{A}^+ = \mathbf{V}\boldsymbol{\Sigma}^+ \mathbf{U}^{\top}" data-display="true"><code>\mathbf{A}^+ = \mathbf{V}\boldsymbol{\Sigma}^+ \mathbf{U}^{\top}</code></span>

其中

<span class="course-math course-math-display" data-tex="\boldsymbol{\Sigma}^+ = \begin{bmatrix} \boldsymbol{\Sigma}_1^{-1} &amp; 0 \\ 0 &amp; 0 \end{bmatrix}" data-display="true"><code>\boldsymbol{\Sigma}^+ = \begin{bmatrix} \boldsymbol{\Sigma}_1^{-1} &amp; 0 \\ 0 &amp; 0 \end{bmatrix}</code></span>

，即把每个 <span class="course-math" data-tex="\sigma_i" data-display="false"><code>\sigma_i</code></span> 替换为 <span class="course-math" data-tex="1/\sigma_i" data-display="false"><code>1/\sigma_i</code></span>。

**最小二乘的最优解（<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 非列满秩时）：** 长度最小的最小二乘解
<span class="course-math course-math-display" data-tex="\mathbf{x}^+ = \mathbf{A}^+\mathbf{b} = \mathbf{V}\boldsymbol{\Sigma}^+ \mathbf{U}^{\top} \mathbf{b}" data-display="true"><code>\mathbf{x}^+ = \mathbf{A}^+\mathbf{b} = \mathbf{V}\boldsymbol{\Sigma}^+ \mathbf{U}^{\top} \mathbf{b}</code></span>

最优解落在 <span class="course-math" data-tex="C(\mathbf{A}^{\top})" data-display="false"><code>C(\mathbf{A}^{\top})</code></span>（行空间）中：<span class="course-math" data-tex="\hat{\mathbf{x}} = \mathbf{x}_r + \mathbf{x}_n" data-display="false"><code>\hat{\mathbf{x}} = \mathbf{x}_r + \mathbf{x}_n</code></span>，零空间分量与行空间分量正交，令 <span class="course-math" data-tex="\mathbf{x}_n = \mathbf{0}" data-display="false"><code>\mathbf{x}_n = \mathbf{0}</code></span> 即最小化长度。

**图片压缩（Image Compression）：** 取前 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个最大奇异值近似 <span class="course-math" data-tex="\mathbf{A} \approx \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^{\top}" data-display="false"><code>\mathbf{A} \approx \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^{\top}</code></span>，存储量 <span class="course-math" data-tex="k(m+n+1)" data-display="false"><code>k(m+n+1)</code></span>，压缩比 <span class="course-math" data-tex="\frac{mn}{k(m+n+1)}" data-display="false"><code>\frac{mn}{k(m+n+1)}</code></span>

**图片降噪（Noise Reduction）：** 丢弃相对很小的奇异值及其分量。


### 6.4 Minimum Principles（不考）
{: #section-38 }


### 6.5 The Finite Element Method（不考）
{: #section-39 }


---


## 补充：合同矩阵与二次超曲面
{: #section-40 }



### 合同（Congruence）
{: #section-41 }


<span class="course-math" data-tex="\mathbf{B} = \mathbf{C}^{\top} \mathbf{A} \mathbf{C}" data-display="false"><code>\mathbf{B} = \mathbf{C}^{\top} \mathbf{A} \mathbf{C}</code></span>（<span class="course-math" data-tex="\mathbf{C}" data-display="false"><code>\mathbf{C}</code></span> 可逆），称 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 与 <span class="course-math" data-tex="\mathbf{B}" data-display="false"><code>\mathbf{B}</code></span> 合同。
- 对称矩阵的合同矩阵仍对称
- <span class="course-math" data-tex="\mathbf{I}" data-display="false"><code>\mathbf{I}</code></span> 的合同矩阵 <span class="course-math" data-tex="\mathbf{C}^{\top} \mathbf{C}" data-display="false"><code>\mathbf{C}^{\top} \mathbf{C}</code></span> 必为正定

**塞维斯特惯性定律（Sylvester's Law of Inertia）：**
- 合同矩阵与 <span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 有相同数量的正特征值、负特征值和零特征值
- <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>：正惯性指数（正特征值个数）；<span class="course-math" data-tex="q" data-display="false"><code>q</code></span>：负惯性指数（负特征值个数）
- <span class="course-math" data-tex="r = p+q = \operatorname{rank}(\mathbf{A})" data-display="false"><code>r = p+q = \operatorname{rank}(\mathbf{A})</code></span>；<span class="course-math" data-tex="p-q" data-display="false"><code>p-q</code></span> = 符号差（Signature）

**规范型定理：** 存在变量替换 <span class="course-math" data-tex="\mathbf{x} = \mathbf{C}\mathbf{y}" data-display="false"><code>\mathbf{x} = \mathbf{C}\mathbf{y}</code></span>，使 <span class="course-math" data-tex="f(\mathbf{x}) = \mathbf{x}^{\top} \mathbf{A}\mathbf{x}" data-display="false"><code>f(\mathbf{x}) = \mathbf{x}^{\top} \mathbf{A}\mathbf{x}</code></span> 化为：
<span class="course-math course-math-display" data-tex="f = y_1^2 + \cdots + y_p^2 - y_{p+1}^2 - \cdots - y_r^2" data-display="true"><code>f = y_1^2 + \cdots + y_p^2 - y_{p+1}^2 - \cdots - y_r^2</code></span>

该规范型由 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 唯一决定。

**拉格朗日配方法：**
- 有平方项 <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> 直接配方，迭代
- 无平方项但有交叉项（如 <span class="course-math" data-tex="x_1 x_2" data-display="false"><code>x_1 x_2</code></span>）<span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> 令 <span class="course-math" data-tex="x_1 = y_1+y_2,\ x_2 = y_1-y_2" data-display="false"><code>x_1 = y_1+y_2,\ x_2 = y_1-y_2</code></span>，创造平方差


### 二次超曲面（Quadric Surface）
{: #section-42 }


方程：<span class="course-math" data-tex="\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = 1" data-display="false"><code>\mathbf{x}^{\top} \mathbf{A}\mathbf{x} = 1</code></span>（<span class="course-math" data-tex="\mathbf{A}" data-display="false"><code>\mathbf{A}</code></span> 对称）

作正交变换 <span class="course-math" data-tex="\mathbf{x} = \mathbf{Q}\mathbf{y}" data-display="false"><code>\mathbf{x} = \mathbf{Q}\mathbf{y}</code></span>，由谱定理 <span class="course-math" data-tex="\mathbf{Q}^{\top} \mathbf{A} \mathbf{Q} = \boldsymbol{\Lambda}" data-display="false"><code>\mathbf{Q}^{\top} \mathbf{A} \mathbf{Q} = \boldsymbol{\Lambda}</code></span>：
<span class="course-math course-math-display" data-tex="\sum \lambda_i y_i^2 = 1" data-display="true"><code>\sum \lambda_i y_i^2 = 1</code></span>

**<span class="course-math" data-tex="n=3" data-display="false"><code>n=3</code></span> 分类：**

| 特征值正负 | 曲面类型 |
|-----------|----------|
| <span class="course-math" data-tex="(+,+,+)" data-display="false"><code>(+,+,+)</code></span> | 椭球面（Ellipsoid） |
| <span class="course-math" data-tex="(+,+,-)" data-display="false"><code>(+,+,-)</code></span> | 单叶双曲面（Hyperboloid of One Sheet） |
| <span class="course-math" data-tex="(+,-,-)" data-display="false"><code>(+,-,-)</code></span> | 双叶双曲面（Hyperboloid of Two Sheets） |
| <span class="course-math" data-tex="(-,-,-)" data-display="false"><code>(-,-,-)</code></span> | 空集 |
| <span class="course-math" data-tex="(+,+,0)" data-display="false"><code>(+,+,0)</code></span> | 椭圆柱面（Elliptic Cylinder） |
| <span class="course-math" data-tex="(+,-,0)" data-display="false"><code>(+,-,0)</code></span> | 双曲柱面（Hyperbolic Cylinder） |
| <span class="course-math" data-tex="(-,-,0)" data-display="false"><code>(-,-,0)</code></span> | 空集 |
| <span class="course-math" data-tex="(+,0,0)" data-display="false"><code>(+,0,0)</code></span> | 两个平行平面（Two Parallel Planes） |
| <span class="course-math" data-tex="(-,0,0)" data-display="false"><code>(-,0,0)</code></span> | 空集 |
| <span class="course-math" data-tex="(0,0,0)" data-display="false"><code>(0,0,0)</code></span> | 空集 |

> 判断二次曲面类型：先求特征值或利用韦达定理判正负，或配方找惯性指数。
{% endraw %}
