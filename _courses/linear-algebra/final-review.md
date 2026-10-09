---
title: "Final Review - 期末复习"
course_id: "linear-algebra"
course_title: "线性代数"
section: ""
status: "completed"
created_at: "2026-06-12T01:12:17+08:00"
updated_at: "2026-10-09T17:19:46+08:00"
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

对于任意 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 阶实方阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为反对称矩阵的充要条件是：对于任意实向量 <span class="course-math" data-tex="\boldsymbol{x} \in \mathbb{R}^n" data-display="false"><code>\boldsymbol{x} \in \mathbb{R}^n</code></span>，都有二次型 <span class="course-math" data-tex="\boldsymbol{x}^{\top} A \boldsymbol{x} = 0" data-display="false"><code>\boldsymbol{x}^{\top} A \boldsymbol{x} = 0</code></span>。

要证明正定性相关的结论，很经常使用 <span class="course-math" data-tex="A=R^{\top}R" data-display="false"><code>A=R^{\top}R</code></span> 做替换，然后多去因式分解拆一拆探路。

迹的循环性质：<span class="course-math" data-tex="\operatorname{tr}(AB)=\operatorname{tr}(BA)" data-display="false"><code>\operatorname{tr}(AB)=\operatorname{tr}(BA)</code></span>（可以从非零特征值来理解）。

<span class="course-math" data-tex="\det(I+\boldsymbol{u}\boldsymbol{v}^{\top})  = 1+\boldsymbol{v}^{\top}\boldsymbol{u}" data-display="false"><code>\det(I+\boldsymbol{u}\boldsymbol{v}^{\top})  = 1+\boldsymbol{v}^{\top}\boldsymbol{u}</code></span>

## 1 Matrices and Gaussian Elimination
{: #section-1 }



### 1.1 Introduction
{: #section-2 }


（略）


### 1.2 The Geometry of Linear Equations
{: #section-3 }


- **矩阵形式：** <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{b}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{b}</code></span>，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为系数矩阵
- **增广矩阵：** <span class="course-math" data-tex="[A \mid \boldsymbol{b}]" data-display="false"><code>[A \mid \boldsymbol{b}]</code></span>
- **相容（Consistent）：** 至少有一组解
- **不相容（Inconsistent）：** 无解

**两种几何观点：**
- **行观点（Row Picture）：** 每个方程表示一个平面。相容 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> 所有平面有非空交
- **列观点（Column Picture）：** <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 必须落在 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列向量张成的空间中

**奇异性（Singularity）：**
- 奇异（Singular）：无解或无穷多解
- 非奇异（Nonsingular）：有且仅有一组解
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 非奇异 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\forall \boldsymbol{b},\ A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>\forall \boldsymbol{b},\ A\boldsymbol{x}=\boldsymbol{b}</code></span> 有且仅有一组解


### 1.3 An Example of Gaussian Elimination
{: #section-4 }


**初等行变换（Elementary Row Operations）——保持解不变：**
1. <span class="course-math" data-tex="E_i \leftrightarrow E_j" data-display="false"><code>E_i \leftrightarrow E_j</code></span>（交换两行）
2. <span class="course-math" data-tex="E_i \gets kE_i" data-display="false"><code>E_i \gets kE_i</code></span>（<span class="course-math" data-tex="k \neq 0" data-display="false"><code>k \neq 0</code></span>，一行乘非零常数）
3. <span class="course-math" data-tex="E_i \gets E_i + kE_j" data-display="false"><code>E_i \gets E_i + kE_j</code></span>（一行倍数加到另一行）

**高斯消元步骤：**
1. 对增广矩阵进行初等行变换化为行阶梯形（Row Echelon Form）
2. 回代（Back Substitution）

> 每一行第一个非零元素称为**主元（Pivot）**


### 1.4 Matrix Notation and Matrix Multiplication
{: #section-5 }


矩阵 <span class="course-math" data-tex="A = [a_{ij}]_{m\times n}" data-display="false"><code>A = [a_{ij}]_{m\times n}</code></span>。线性运算（加减、数乘）逐分量进行。<span class="course-math" data-tex="I_n" data-display="false"><code>I_n</code></span> 为单位矩阵。

**矩阵乘法：** <span class="course-math" data-tex="A_{n\times m} \cdot B_{m\times p} = C_{n\times p}" data-display="false"><code>A_{n\times m} \cdot B_{m\times p} = C_{n\times p}</code></span>，<span class="course-math" data-tex="c_{ij} = \sum_k a_{ik} b_{kj}" data-display="false"><code>c_{ij} = \sum_k a_{ik} b_{kj}</code></span>

**四种视角理解乘法：**
1. **行列点乘：** <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的 <span class="course-math" data-tex="(i,j)" data-display="false"><code>(i,j)</code></span> 元 = <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行与 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列的内积
2. **列组合：** <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的列 = <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列的线性组合，系数来自 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 对应列
3. **行组合：** <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 的行 = <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 的行的线性组合，系数来自 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 对应行
4. **外积求和：** <span class="course-math" data-tex="C = \sum_k (\text{col}_k A)(\text{row}_k B)" data-display="false"><code>C = \sum_k (\text{col}_k A)(\text{row}_k B)</code></span>（列 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 行，得秩一矩阵再求和）

**运算律：**
- 结合律：<span class="course-math" data-tex="(AB)C = A(BC)" data-display="false"><code>(AB)C = A(BC)</code></span>
- 分配律：<span class="course-math" data-tex="(A+B)C = AC + BC" data-display="false"><code>(A+B)C = AC + BC</code></span>
- **不满足交换律**：一般 <span class="course-math" data-tex="AB \neq BA" data-display="false"><code>AB \neq BA</code></span>
- <span class="course-math" data-tex="AI = A" data-display="false"><code>AI = A</code></span>，<span class="course-math" data-tex="A0 = 0" data-display="false"><code>A0 = 0</code></span>
- 方幂：<span class="course-math" data-tex="A^0 = I_n,\ A^k = A^{k-1}A" data-display="false"><code>A^0 = I_n,\ A^k = A^{k-1}A</code></span>

**特殊变换矩阵（左乘）：**
- **置换矩阵（Permutation Matrix）：** 每行每列恰有一个 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>、其余元素为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的方阵，用于交换行
- **初等矩阵（Elementary Matrices）：**
  - 交换两行的置换矩阵
  - 将 <span class="course-math" data-tex="I_n" data-display="false"><code>I_n</code></span> 的 <span class="course-math" data-tex="(i,j)" data-display="false"><code>(i,j)</code></span>（<span class="course-math" data-tex="i\ne j" data-display="false"><code>i\ne j</code></span>）替换为 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span>：把第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行乘 <span class="course-math" data-tex="l" data-display="false"><code>l</code></span> 加到第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行
  - 将 <span class="course-math" data-tex="I_n" data-display="false"><code>I_n</code></span> 的 <span class="course-math" data-tex="(i,i)" data-display="false"><code>(i,i)</code></span> 替换为 <span class="course-math" data-tex="k\ne 0" data-display="false"><code>k\ne 0</code></span>：把第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行乘 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span>

> **【左行右列】**：左乘 → 行变换，右乘 → 列变换


### 1.5 Triangular Factors and Row Exchanges
{: #section-6 }


**LU 分解：** 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 消元后（无需行交换）得 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span>，则
<span class="course-math course-math-display" data-tex="A = LU" data-display="true"><code>A = LU</code></span>

- <span class="course-math" data-tex="L" data-display="false"><code>L</code></span>：下三角矩阵，对角元为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。<span class="course-math" data-tex="l_{ij}" data-display="false"><code>l_{ij}</code></span> 记录消元乘子（<span class="course-math" data-tex="E_i \leftarrow E_i - l_{ij}E_j" data-display="false"><code>E_i \leftarrow E_i - l_{ij}E_j</code></span>）
- <span class="course-math" data-tex="U" data-display="false"><code>U</code></span>：上三角矩阵，对角元为主元

**需要行交换时：**
<span class="course-math course-math-display" data-tex="PA = LU" data-display="true"><code>PA = LU</code></span>

其中 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 为置换矩阵。

**利用 LU 解方程 <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{b}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{b}</code></span>：**
<span class="course-math course-math-display" data-tex="\begin{cases} L\boldsymbol{c} = \boldsymbol{b} \\ U\boldsymbol{x} = \boldsymbol{c} \end{cases}" data-display="true"><code>\begin{cases} L\boldsymbol{c} = \boldsymbol{b} \\ U\boldsymbol{x} = \boldsymbol{c} \end{cases}</code></span>

下三角方程组用前代，上三角方程组用回代；有行交换时先将右端改为 <span class="course-math" data-tex="P\boldsymbol{b}" data-display="false"><code>P\boldsymbol{b}</code></span>。

> **LU 分解唯一性：** 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆，且 <span class="course-math" data-tex="A = L_1U_1 = L_2U_2" data-display="false"><code>A = L_1U_1 = L_2U_2</code></span>，且 <span class="course-math" data-tex="L_1, L_2" data-display="false"><code>L_1, L_2</code></span> 对角元均为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，则 <span class="course-math" data-tex="L_1 = L_2,\ U_1 = U_2" data-display="false"><code>L_1 = L_2,\ U_1 = U_2</code></span>。

**LDU 分解：** 提取主元到对角矩阵 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span>，使 <span class="course-math" data-tex="L, U" data-display="false"><code>L, U</code></span> 对角元都为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>：<span class="course-math" data-tex="A = LDU" data-display="false"><code>A = LDU</code></span>


### 1.6 Inverses and Transposes
{: #section-7 }


**矩阵的逆：** 方阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的逆 <span class="course-math" data-tex="A^{-1}" data-display="false"><code>A^{-1}</code></span> 满足 <span class="course-math" data-tex="AA^{-1} = A^{-1}A = I" data-display="false"><code>AA^{-1} = A^{-1}A = I</code></span>

**性质：**
- 逆若存在则唯一：若 <span class="course-math" data-tex="AB_1 = B_1A = I" data-display="false"><code>AB_1 = B_1A = I</code></span> 且 <span class="course-math" data-tex="AB_2 = B_2A = I" data-display="false"><code>AB_2 = B_2A = I</code></span>，则 <span class="course-math" data-tex="B_1 = B_1(AB_2) = (B_1A)B_2 = B_2" data-display="false"><code>B_1 = B_1(AB_2) = (B_1A)B_2 = B_2</code></span>
- <span class="course-math" data-tex="(AB)^{-1} = B^{-1}A^{-1}" data-display="false"><code>(AB)^{-1} = B^{-1}A^{-1}</code></span>
- <span class="course-math" data-tex="(A_1 \cdots A_n)^{-1} = A_n^{-1} \cdots A_1^{-1}" data-display="false"><code>(A_1 \cdots A_n)^{-1} = A_n^{-1} \cdots A_1^{-1}</code></span>
- <span class="course-math" data-tex="(A^{-1})^{\top} = (A^{\top})^{-1}" data-display="false"><code>(A^{-1})^{\top} = (A^{\top})^{-1}</code></span>

**转置：** <span class="course-math" data-tex="A^{\top}" data-display="false"><code>A^{\top}</code></span> 满足 <span class="course-math" data-tex="(A^{\top})_{ij} = A_{ji}" data-display="false"><code>(A^{\top})_{ij} = A_{ji}</code></span>
- <span class="course-math" data-tex="(A^{\top})^{\top} = A,\quad (kA)^{\top} = kA^{\top}" data-display="false"><code>(A^{\top})^{\top} = A,\quad (kA)^{\top} = kA^{\top}</code></span>
- <span class="course-math" data-tex="(A+B)^{\top} = A^{\top} + B^{\top}" data-display="false"><code>(A+B)^{\top} = A^{\top} + B^{\top}</code></span>
- <span class="course-math" data-tex="(AB)^{\top} = B^{\top} A^{\top}" data-display="false"><code>(AB)^{\top} = B^{\top} A^{\top}</code></span>

**对称矩阵：** <span class="course-math" data-tex="A^{\top} = A" data-display="false"><code>A^{\top} = A</code></span>
- 对称矩阵的逆仍对称
- <span class="course-math" data-tex="RR^{\top}" data-display="false"><code>RR^{\top}</code></span> 是对称矩阵
- 若 <span class="course-math" data-tex="A^{\top} = A" data-display="false"><code>A^{\top} = A</code></span> 可无行交换分解为 <span class="course-math" data-tex="LDU" data-display="false"><code>LDU</code></span>，则 <span class="course-math" data-tex="L^{\top} = U" data-display="false"><code>L^{\top} = U</code></span>，即 <span class="course-math" data-tex="A = LDL^{\top}" data-display="false"><code>A = LDL^{\top}</code></span>

**左/右逆（对 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵）：**
- 右逆存在 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r = m" data-display="false"><code>r = m</code></span>（行满秩，<span class="course-math" data-tex="C(A) = \mathbb{R}^m" data-display="false"><code>C(A) = \mathbb{R}^m</code></span>）
- 左逆存在 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r = n" data-display="false"><code>r = n</code></span>（列满秩，<span class="course-math" data-tex="C(A^{\top}) = \mathbb{R}^n" data-display="false"><code>C(A^{\top}) = \mathbb{R}^n</code></span>）
- 可逆 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r = m = n" data-display="false"><code>r = m = n</code></span>
- 最佳左逆：<span class="course-math" data-tex="(A^{\top}A)^{-1}A^{\top}" data-display="false"><code>(A^{\top}A)^{-1}A^{\top}</code></span>；最佳右逆：<span class="course-math" data-tex="A^{\top}(AA^{\top})^{-1}" data-display="false"><code>A^{\top}(AA^{\top})^{-1}</code></span>

**高斯-约旦法求逆：**
<span class="course-math course-math-display" data-tex="[A \mid I] \xrightarrow{\text{行变换}} [I \mid A^{-1}]" data-display="true"><code>[A \mid I] \xrightarrow{\text{行变换}} [I \mid A^{-1}]</code></span>

> 解释：一系列行变换的复合 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 使 <span class="course-math" data-tex="TA = I" data-display="false"><code>TA = I</code></span>，则 <span class="course-math" data-tex="TI = T = A^{-1}" data-display="false"><code>TI = T = A^{-1}</code></span>

**可逆的等价条件（TFAE）：**
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有完整的主元集（<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个非零主元）
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 非奇异
- <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{0}</code></span> 仅有零解
- <span class="course-math" data-tex="\operatorname{rank}(A) = n" data-display="false"><code>\operatorname{rank}(A) = n</code></span>
- <span class="course-math" data-tex="N(A) = \{0\}" data-display="false"><code>N(A) = \{0\}</code></span>
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列/行线性无关
- <span class="course-math" data-tex="\det(A) \neq 0" data-display="false"><code>\det(A) \neq 0</code></span>

**二阶矩阵求逆：**
<span class="course-math course-math-display" data-tex="A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d &amp; -b \\ -c &amp; a \end{bmatrix}" data-display="true"><code>A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d &amp; -b \\ -c &amp; a \end{bmatrix}</code></span>

**分块矩阵乘法：**
-   <span class="course-math course-math-display" data-tex="A = \begin{bmatrix} \boldsymbol{a}_1 \\ \vdots \\ \boldsymbol{a}_n \end{bmatrix}" data-display="true"><code>A = \begin{bmatrix} \boldsymbol{a}_1 \\ \vdots \\ \boldsymbol{a}_n \end{bmatrix}</code></span>

  （按行分块），<span class="course-math" data-tex="B = [\boldsymbol{b}_1 \cdots \boldsymbol{b}_n]" data-display="false"><code>B = [\boldsymbol{b}_1 \cdots \boldsymbol{b}_n]</code></span>（按列分块）
-   <span class="course-math course-math-display" data-tex="AB = [A\boldsymbol{b}_1 \cdots A\boldsymbol{b}_n] = \begin{bmatrix} \boldsymbol{a}_1 B \\ \vdots \\ \boldsymbol{a}_n B \end{bmatrix}" data-display="true"><code>AB = [A\boldsymbol{b}_1 \cdots A\boldsymbol{b}_n] = \begin{bmatrix} \boldsymbol{a}_1 B \\ \vdots \\ \boldsymbol{a}_n B \end{bmatrix}</code></span>
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
- <span class="course-math" data-tex="0\cdot \boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>0\cdot \boldsymbol{x} = \boldsymbol{0}</code></span>
- <span class="course-math" data-tex="(-1)\cdot \boldsymbol{x} = -\boldsymbol{x}" data-display="false"><code>(-1)\cdot \boldsymbol{x} = -\boldsymbol{x}</code></span>
- <span class="course-math" data-tex="\boldsymbol{x}+\boldsymbol{y} = \boldsymbol{x}+\boldsymbol{z} \implies \boldsymbol{y}=\boldsymbol{z}" data-display="false"><code>\boldsymbol{x}+\boldsymbol{y} = \boldsymbol{x}+\boldsymbol{z} \implies \boldsymbol{y}=\boldsymbol{z}</code></span>
- <span class="course-math" data-tex="\beta \cdot \boldsymbol{0} = \boldsymbol{0}" data-display="false"><code>\beta \cdot \boldsymbol{0} = \boldsymbol{0}</code></span>
- <span class="course-math" data-tex="\alpha \cdot \boldsymbol{x} = \boldsymbol{0} \implies \alpha=0" data-display="false"><code>\alpha \cdot \boldsymbol{x} = \boldsymbol{0} \implies \alpha=0</code></span> 或 <span class="course-math" data-tex="\boldsymbol{x}=\boldsymbol{0}" data-display="false"><code>\boldsymbol{x}=\boldsymbol{0}</code></span>

**子空间 <span class="course-math" data-tex="W \subseteq V" data-display="false"><code>W \subseteq V</code></span>（<span class="course-math" data-tex="W" data-display="false"><code>W</code></span> 非空）：**
1. 加法封闭：<span class="course-math" data-tex="\boldsymbol{x}, \boldsymbol{y} \in W \implies \boldsymbol{x}+\boldsymbol{y} \in W" data-display="false"><code>\boldsymbol{x}, \boldsymbol{y} \in W \implies \boldsymbol{x}+\boldsymbol{y} \in W</code></span>
2. 数乘封闭：<span class="course-math" data-tex="\boldsymbol{x} \in W,\ c\in\mathbb{R} \implies c\boldsymbol{x} \in W" data-display="false"><code>\boldsymbol{x} \in W,\ c\in\mathbb{R} \implies c\boldsymbol{x} \in W</code></span>

> <span class="course-math" data-tex="\mathbb{R}^3" data-display="false"><code>\mathbb{R}^3</code></span> 的子空间只有：<span class="course-math" data-tex="\{\boldsymbol{0}\}" data-display="false"><code>\{\boldsymbol{0}\}</code></span>、过原点的直线、过原点的平面、<span class="course-math" data-tex="\mathbb{R}^3" data-display="false"><code>\mathbb{R}^3</code></span> 本身


### 2.2 Solving <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{0}</code></span> and <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{b}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{b}</code></span>
{: #section-11 }


**齐次方程 <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{0}</code></span>：**
- 化为行最简形（Reduced Row Echelon Form）<span class="course-math" data-tex="R\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>R\boldsymbol{x} = \boldsymbol{0}</code></span>：主元为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>，主元列其余为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>
- 分主元变量和自由变量（共 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个）
- 依次令一个自由变量为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>、其余为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>，得 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解
- 全部解 = 这些特解的线性组合 = <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span>（零空间）

**非齐次方程 <span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{b}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{b}</code></span>（<span class="course-math" data-tex="\boldsymbol{b} \neq \boldsymbol{0}" data-display="false"><code>\boldsymbol{b} \neq \boldsymbol{0}</code></span>）：**
- <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b} \to U\boldsymbol{x}=\boldsymbol{c} \to R\boldsymbol{x}=\boldsymbol{d}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b} \to U\boldsymbol{x}=\boldsymbol{c} \to R\boldsymbol{x}=\boldsymbol{d}</code></span>
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的秩 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> = 主元个数。<span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 和 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行全为零
- **有解条件：** <span class="course-math" data-tex="\boldsymbol{d}" data-display="false"><code>\boldsymbol{d}</code></span>（和 <span class="course-math" data-tex="\boldsymbol{c}" data-display="false"><code>\boldsymbol{c}</code></span>）的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个分量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>（共 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 个条件）
- **通解：** <span class="course-math" data-tex="\boldsymbol{x} = \boldsymbol{x}_p + \boldsymbol{x}_n" data-display="false"><code>\boldsymbol{x} = \boldsymbol{x}_p + \boldsymbol{x}_n</code></span>
  - <span class="course-math" data-tex="\boldsymbol{x}_p" data-display="false"><code>\boldsymbol{x}_p</code></span>：令所有自由变量为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的特解
  - <span class="course-math" data-tex="\boldsymbol{x}_n \in N(A)" data-display="false"><code>\boldsymbol{x}_n \in N(A)</code></span>：解 <span class="course-math" data-tex="A\boldsymbol{x}=0" data-display="false"><code>A\boldsymbol{x}=0</code></span> 将自由变量依次置 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 得到的 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 个特解的线性组合


### 2.3 Linear Independence, Basis, and Dimension
{: #section-12 }


**线性无关（Linearly Independent）：**
<span class="course-math course-math-display" data-tex="c_1\boldsymbol{v}_1 + \cdots + c_n\boldsymbol{v}_n = \boldsymbol{0} \iff c_1 = \cdots = c_n = 0" data-display="true"><code>c_1\boldsymbol{v}_1 + \cdots + c_n\boldsymbol{v}_n = \boldsymbol{0} \iff c_1 = \cdots = c_n = 0</code></span>

- 线性相关 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> 存在某个向量可表示为其余向量的线性组合
- 零向量与任何向量线性相关
- 行阶梯矩阵的非零行之间线性无关
- <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> 中任意 <span class="course-math" data-tex="n &gt; m" data-display="false"><code>n &gt; m</code></span> 个向量必线性相关

**判断方法：** <span class="course-math" data-tex="[\boldsymbol{v}_1 \cdots \boldsymbol{v}_n]\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>[\boldsymbol{v}_1 \cdots \boldsymbol{v}_n]\boldsymbol{x} = \boldsymbol{0}</code></span> 是否仅有零解。<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的列线性无关 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="N(A) = \{\boldsymbol{0}\}" data-display="false"><code>N(A) = \{\boldsymbol{0}\}</code></span>。

**秩（Rank）：**
- <span class="course-math" data-tex="r = \operatorname{rank}(A)" data-display="false"><code>r = \operatorname{rank}(A)</code></span> = 主元个数 = 极大线性无关行数/列数
- <span class="course-math" data-tex="r \leq \min(m, n)" data-display="false"><code>r \leq \min(m, n)</code></span>
- <span class="course-math" data-tex="r(AB) \leq \min(r(A), r(B))" data-display="false"><code>r(AB) \leq \min(r(A), r(B))</code></span>
- 若 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 可逆，则 <span class="course-math" data-tex="r(PA) = r(AP) = r(A)" data-display="false"><code>r(PA) = r(AP) = r(A)</code></span>

**秩一矩阵（Rank 1 Matrix）：** <span class="course-math" data-tex="\dim C(A) = 1" data-display="false"><code>\dim C(A) = 1</code></span>，可分解为列向量 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 行向量

**秩不等式：**
- <span class="course-math" data-tex="r(A) + r(B) - n \leq r(AB) \leq \min(r(A), r(B))" data-display="false"><code>r(A) + r(B) - n \leq r(AB) \leq \min(r(A), r(B))</code></span>
- 若 <span class="course-math" data-tex="AB = O" data-display="false"><code>AB = O</code></span>，则 <span class="course-math" data-tex="C(B) \subseteq N(A)" data-display="false"><code>C(B) \subseteq N(A)</code></span>，故 <span class="course-math" data-tex="r(A) + r(B) \leq n" data-display="false"><code>r(A) + r(B) \leq n</code></span>
- <span class="course-math" data-tex="r(A^{\top}A) = r(A)" data-display="false"><code>r(A^{\top}A) = r(A)</code></span>
- <span class="course-math" data-tex="r(A+B) \leq r(A) + r(B)" data-display="false"><code>r(A+B) \leq r(A) + r(B)</code></span>
- <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 有解 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="r(A) = r([A \mid \boldsymbol{b}])" data-display="false"><code>r(A) = r([A \mid \boldsymbol{b}])</code></span>

**基（Basis）与维数（Dimension）：**
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的一组基 <span class="course-math" data-tex="=" data-display="false"><code>=</code></span> 一组线性无关且张成 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的向量
- <span class="course-math" data-tex="\dim V = n" data-display="false"><code>\dim V = n</code></span>（所有基大小相同）
- **定理：** <span class="course-math" data-tex="\boldsymbol{v}_1,\dots,\boldsymbol{v}_n \in \mathbb{R}^n" data-display="false"><code>\boldsymbol{v}_1,\dots,\boldsymbol{v}_n \in \mathbb{R}^n</code></span> 是 <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> 的基 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="[\boldsymbol{v}_1 \cdots \boldsymbol{v}_n]" data-display="false"><code>[\boldsymbol{v}_1 \cdots \boldsymbol{v}_n]</code></span> 可逆
- 多项式空间 <span class="course-math" data-tex="\mathbb{R}[x]_{\leq n}" data-display="false"><code>\mathbb{R}[x]_{\leq n}</code></span> 的一组基：<span class="course-math" data-tex="1, x, x^2, \dots, x^n" data-display="false"><code>1, x, x^2, \dots, x^n</code></span>


### 2.4 The Four Fundamental Subspaces
{: #section-13 }


对 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>：

| 子空间 | 记号 | 所在空间 | 维数 |
|--------|------|----------|------|
| 列空间（Column Space） | <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> | <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |
| 零空间/核（Nullspace/Kernel） | <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> | <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> | <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> |
| 行空间（Row Space） | <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span> | <span class="course-math" data-tex="\mathbb{R}^n" data-display="false"><code>\mathbb{R}^n</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> |
| 左零空间（Left Nullspace） | <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span> | <span class="course-math" data-tex="\mathbb{R}^m" data-display="false"><code>\mathbb{R}^m</code></span> | <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> |

**秩-零化度定理：** <span class="course-math" data-tex="\operatorname{rank}(A) + \dim N(A) = n" data-display="false"><code>\operatorname{rank}(A) + \dim N(A) = n</code></span>

**正交关系：**
<span class="course-math course-math-display" data-tex="C(A) \perp N(A^{\top}), \quad C(A^{\top}) \perp N(A)" data-display="true"><code>C(A) \perp N(A^{\top}), \quad C(A^{\top}) \perp N(A)</code></span>

**高斯-约旦消元法求四大子空间：** <span class="course-math" data-tex="[A \mid I] \to [R \mid E]" data-display="false"><code>[A \mid I] \to [R \mid E]</code></span>

| 子空间 | 维数 | 提取方法 |
|--------|------|----------|
| 行空间 <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> | 取 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 个非零行 |
| 列空间 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> | <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> | 找 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 的主元列，取**原矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>** 中对应的列 |
| 零空间 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> | <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> | 解 <span class="course-math" data-tex="R\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>R\boldsymbol{x} = \boldsymbol{0}</code></span>，令自由变量依次为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 得基础解系 |
| 左零空间 <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span> | <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> | 取 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 中 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 全零行对应位置的行（无换行的 <span class="course-math" data-tex="A=LU" data-display="false"><code>A=LU</code></span> 中取 <span class="course-math" data-tex="L^{-1}" data-display="false"><code>L^{-1}</code></span> 的最后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 行；若 <span class="course-math" data-tex="PA=LU" data-display="false"><code>PA=LU</code></span>，则取 <span class="course-math" data-tex="L^{-1}P" data-display="false"><code>L^{-1}P</code></span> 的对应行） |

> 行变换**不改变**行空间（<span class="course-math" data-tex="C(A^{\top}) = C(U^{\top})" data-display="false"><code>C(A^{\top}) = C(U^{\top})</code></span>），但**改变**列空间。主元列的**列标**不变，但列向量本身变了。


### 2.5 Graphs and Networks（不考）
{: #section-14 }



### 2.6 Linear Transformations
{: #section-15 }


**定义：** <span class="course-math" data-tex="T: V \to W" data-display="false"><code>T: V \to W</code></span> 是线性变换，若满足：
<span class="course-math course-math-display" data-tex="T(\boldsymbol{a}+\boldsymbol{b}) = T(\boldsymbol{a}) + T(\boldsymbol{b}), \quad T(k\boldsymbol{a}) = kT(\boldsymbol{a})" data-display="true"><code>T(\boldsymbol{a}+\boldsymbol{b}) = T(\boldsymbol{a}) + T(\boldsymbol{b}), \quad T(k\boldsymbol{a}) = kT(\boldsymbol{a})</code></span>

**矩阵表示：** 选 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的基 <span class="course-math" data-tex="\{\boldsymbol{\alpha}_1,\dots,\boldsymbol{\alpha}_n\}" data-display="false"><code>\{\boldsymbol{\alpha}_1,\dots,\boldsymbol{\alpha}_n\}</code></span> 和 <span class="course-math" data-tex="W" data-display="false"><code>W</code></span> 的基 <span class="course-math" data-tex="\{\boldsymbol{\beta}_1,\dots,\boldsymbol{\beta}_m\}" data-display="false"><code>\{\boldsymbol{\beta}_1,\dots,\boldsymbol{\beta}_m\}</code></span>：
<span class="course-math course-math-display" data-tex="T(\boldsymbol{\alpha}_j) = \sum_{i=1}^m a_{ij} \boldsymbol{\beta}_i" data-display="true"><code>T(\boldsymbol{\alpha}_j) = \sum_{i=1}^m a_{ij} \boldsymbol{\beta}_i</code></span>

矩阵 <span class="course-math" data-tex="A = [a_{ij}]_{m\times n}" data-display="false"><code>A = [a_{ij}]_{m\times n}</code></span> 就是 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 在选定的基下的矩阵表示（第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列 = <span class="course-math" data-tex="T(\boldsymbol{\alpha}_j)" data-display="false"><code>T(\boldsymbol{\alpha}_j)</code></span> 在 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 基下的坐标）：
<span class="course-math course-math-display" data-tex="T(\boldsymbol{\alpha}_1,\dots,\boldsymbol{\alpha}_n) = (\boldsymbol{\beta}_1,\dots,\boldsymbol{\beta}_m) A" data-display="true"><code>T(\boldsymbol{\alpha}_1,\dots,\boldsymbol{\alpha}_n) = (\boldsymbol{\beta}_1,\dots,\boldsymbol{\beta}_m) A</code></span>

**坐标映射：** 若 <span class="course-math" data-tex="\boldsymbol{v}" data-display="false"><code>\boldsymbol{v}</code></span> 在 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 基下坐标为 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span>，则 <span class="course-math" data-tex="T(\boldsymbol{v})" data-display="false"><code>T(\boldsymbol{v})</code></span> 在 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 基下的坐标为 <span class="course-math" data-tex="\boldsymbol{y} = A\boldsymbol{x}" data-display="false"><code>\boldsymbol{y} = A\boldsymbol{x}</code></span>

**常见 <span class="course-math" data-tex="\mathbb{R}^2" data-display="false"><code>\mathbb{R}^2</code></span> 上的线性变换：**

| 变换 | 矩阵 |
|------|------|
| 逆时针旋转 <span class="course-math" data-tex="\theta" data-display="false"><code>\theta</code></span> | <span class="course-math" data-tex="\begin{bmatrix} \cos\theta &amp; -\sin\theta \\ \sin\theta &amp; \cos\theta \end{bmatrix}" data-display="false"><code>\begin{bmatrix} \cos\theta &amp; -\sin\theta \\ \sin\theta &amp; \cos\theta \end{bmatrix}</code></span> |
| 投影到 <span class="course-math" data-tex="\boldsymbol{v}=(\cos\theta,\sin\theta)" data-display="false"><code>\boldsymbol{v}=(\cos\theta,\sin\theta)</code></span> | <span class="course-math" data-tex="\begin{bmatrix} \cos^2\theta &amp; \cos\theta\sin\theta \\ \cos\theta\sin\theta &amp; \sin^2\theta \end{bmatrix}" data-display="false"><code>\begin{bmatrix} \cos^2\theta &amp; \cos\theta\sin\theta \\ \cos\theta\sin\theta &amp; \sin^2\theta \end{bmatrix}</code></span> |
| 关于 <span class="course-math" data-tex="\boldsymbol{v}=(\cos\theta,\sin\theta)" data-display="false"><code>\boldsymbol{v}=(\cos\theta,\sin\theta)</code></span> 反射 | <span class="course-math" data-tex="\begin{bmatrix} \cos 2\theta &amp; \sin 2\theta \\ \sin 2\theta &amp; -\cos 2\theta \end{bmatrix}" data-display="false"><code>\begin{bmatrix} \cos 2\theta &amp; \sin 2\theta \\ \sin 2\theta &amp; -\cos 2\theta \end{bmatrix}</code></span> |

> 反射矩阵 = <span class="course-math" data-tex="2 \times" data-display="false"><code>2 \times</code></span> 投影矩阵 <span class="course-math" data-tex="- I" data-display="false"><code>- I</code></span>（因为 <span class="course-math" data-tex="R(\boldsymbol{v}) + \boldsymbol{v} = 2P(\boldsymbol{v})" data-display="false"><code>R(\boldsymbol{v}) + \boldsymbol{v} = 2P(\boldsymbol{v})</code></span>）

**基变换（Change of Basis）：** <span class="course-math" data-tex="T: V \to V" data-display="false"><code>T: V \to V</code></span> 在基 <span class="course-math" data-tex="\{\boldsymbol{v}_i\}" data-display="false"><code>\{\boldsymbol{v}_i\}</code></span> 下矩阵为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，在基 <span class="course-math" data-tex="\{\boldsymbol{w}_i\}" data-display="false"><code>\{\boldsymbol{w}_i\}</code></span> 下矩阵为 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span>，且
<span class="course-math course-math-display" data-tex="[\boldsymbol{w}_1 \cdots \boldsymbol{w}_n] = [\boldsymbol{v}_1 \cdots \boldsymbol{v}_n] S" data-display="true"><code>[\boldsymbol{w}_1 \cdots \boldsymbol{w}_n] = [\boldsymbol{v}_1 \cdots \boldsymbol{v}_n] S</code></span>

则：
<span class="course-math course-math-display" data-tex="B = S^{-1} A S" data-display="true"><code>B = S^{-1} A S</code></span>

**理解：** <span class="course-math" data-tex="\boldsymbol{w}" data-display="false"><code>\boldsymbol{w}</code></span> 基下的坐标 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span> 对应 <span class="course-math" data-tex="\boldsymbol{v}" data-display="false"><code>\boldsymbol{v}</code></span> 基下的坐标 <span class="course-math" data-tex="S\boldsymbol{x}" data-display="false"><code>S\boldsymbol{x}</code></span>。在 <span class="course-math" data-tex="\boldsymbol{w}" data-display="false"><code>\boldsymbol{w}</code></span> 基下：<span class="course-math" data-tex="\boldsymbol{y} = B\boldsymbol{x}" data-display="false"><code>\boldsymbol{y} = B\boldsymbol{x}</code></span>；翻译到 <span class="course-math" data-tex="\boldsymbol{v}" data-display="false"><code>\boldsymbol{v}</code></span> 基：<span class="course-math" data-tex="S\boldsymbol{y} = A(S\boldsymbol{x})" data-display="false"><code>S\boldsymbol{y} = A(S\boldsymbol{x})</code></span>。对比即得 <span class="course-math" data-tex="B = S^{-1}AS" data-display="false"><code>B = S^{-1}AS</code></span>。

---


## 3 Orthogonality
{: #section-16 }



### 3.1 Orthogonal Vectors and Subspaces
{: #section-17 }


- **内积/点乘：** <span class="course-math" data-tex="\boldsymbol{u}^{\top}\boldsymbol{v} = \sum u_i v_i" data-display="false"><code>\boldsymbol{u}^{\top}\boldsymbol{v} = \sum u_i v_i</code></span>
- **正交：** <span class="course-math" data-tex="\boldsymbol{u}^{\top}\boldsymbol{v} = 0" data-display="false"><code>\boldsymbol{u}^{\top}\boldsymbol{v} = 0</code></span>
- **长度（范数）：** <span class="course-math" data-tex="\lVert \boldsymbol{x}\rVert  = \sqrt{\boldsymbol{x}^{\top}\boldsymbol{x}}" data-display="false"><code>\lVert \boldsymbol{x}\rVert  = \sqrt{\boldsymbol{x}^{\top}\boldsymbol{x}}</code></span>
- **夹角：** <span class="course-math" data-tex="\cos\theta = \frac{\boldsymbol{x}^{\top}\boldsymbol{y}}{\lVert \boldsymbol{x}\rVert \lVert \boldsymbol{y}\rVert }" data-display="false"><code>\cos\theta = \frac{\boldsymbol{x}^{\top}\boldsymbol{y}}{\lVert \boldsymbol{x}\rVert \lVert \boldsymbol{y}\rVert }</code></span>

**柯西-施瓦茨不等式（Cauchy-Schwarz）：**
<span class="course-math course-math-display" data-tex="\lvert \boldsymbol{x}\cdot\boldsymbol{y}\rvert ^2 \leq \lVert \boldsymbol{x}\rVert ^2 \lVert \boldsymbol{y}\rVert ^2" data-display="true"><code>\lvert \boldsymbol{x}\cdot\boldsymbol{y}\rvert ^2 \leq \lVert \boldsymbol{x}\rVert ^2 \lVert \boldsymbol{y}\rVert ^2</code></span>

（与 <span class="course-math" data-tex="\cos\theta" data-display="false"><code>\cos\theta</code></span> 定义统一，因 <span class="course-math" data-tex="\lvert \cos\theta\rvert  \leq 1" data-display="false"><code>\lvert \cos\theta\rvert  \leq 1</code></span>）

**定理：** 相互正交的非零向量组必线性无关。

**子空间的正交：** <span class="course-math" data-tex="V \perp W" data-display="false"><code>V \perp W</code></span> 若 <span class="course-math" data-tex="\forall \boldsymbol{v}\in V, \boldsymbol{w}\in W,\ \boldsymbol{v}^{\top} \boldsymbol{w} = 0" data-display="false"><code>\forall \boldsymbol{v}\in V, \boldsymbol{w}\in W,\ \boldsymbol{v}^{\top} \boldsymbol{w} = 0</code></span>

**正交补（Orthogonal Complement）：** <span class="course-math" data-tex="V^\perp = \{\boldsymbol{v} \mid \boldsymbol{v} \perp V\}" data-display="false"><code>V^\perp = \{\boldsymbol{v} \mid \boldsymbol{v} \perp V\}</code></span>，且 <span class="course-math" data-tex="\dim V + \dim V^\perp = n" data-display="false"><code>\dim V + \dim V^\perp = n</code></span>

**基本正交关系：**
<span class="course-math course-math-display" data-tex="C(A) \perp N(A^{\top}), \quad C(A^{\top}) \perp N(A)" data-display="true"><code>C(A) \perp N(A^{\top}), \quad C(A^{\top}) \perp N(A)</code></span>
<span class="course-math course-math-display" data-tex="C(A)^\perp = N(A^{\top}), \quad C(A^{\top})^\perp = N(A)" data-display="true"><code>C(A)^\perp = N(A^{\top}), \quad C(A^{\top})^\perp = N(A)</code></span>

- 证明 <span class="course-math" data-tex="C(A) \perp N(A^{\top})" data-display="false"><code>C(A) \perp N(A^{\top})</code></span>：<span class="course-math" data-tex="\boldsymbol{b} \in C(A) \implies \exists \boldsymbol{x}, A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>\boldsymbol{b} \in C(A) \implies \exists \boldsymbol{x}, A\boldsymbol{x}=\boldsymbol{b}</code></span>；<span class="course-math" data-tex="\boldsymbol{y} \in N(A^{\top}) \implies \boldsymbol{y}^{\top} A = 0" data-display="false"><code>\boldsymbol{y} \in N(A^{\top}) \implies \boldsymbol{y}^{\top} A = 0</code></span>。则 <span class="course-math" data-tex="\boldsymbol{y}^{\top} \boldsymbol{b} = \boldsymbol{y}^{\top}(A\boldsymbol{x}) = (\boldsymbol{y}^{\top} A)\boldsymbol{x} = 0" data-display="false"><code>\boldsymbol{y}^{\top} \boldsymbol{b} = \boldsymbol{y}^{\top}(A\boldsymbol{x}) = (\boldsymbol{y}^{\top} A)\boldsymbol{x} = 0</code></span>
- 推论：<span class="course-math" data-tex="A\boldsymbol{x} = \boldsymbol{b}" data-display="false"><code>A\boldsymbol{x} = \boldsymbol{b}</code></span> 相容的等价条件：<span class="course-math" data-tex="\boldsymbol{y}^{\top}\boldsymbol{b} = 0,\ \forall \boldsymbol{y} \in N(A^{\top})" data-display="false"><code>\boldsymbol{y}^{\top}\boldsymbol{b} = 0,\ \forall \boldsymbol{y} \in N(A^{\top})</code></span>

**几何意义：** <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 将行空间 <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span> 一一映射到列空间 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span>，将零空间 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 映射到 <span class="course-math" data-tex="\boldsymbol{0}" data-display="false"><code>\boldsymbol{0}</code></span>。任意 <span class="course-math" data-tex="\boldsymbol{x} = \boldsymbol{x}_r + \boldsymbol{x}_n" data-display="false"><code>\boldsymbol{x} = \boldsymbol{x}_r + \boldsymbol{x}_n</code></span>（<span class="course-math" data-tex="\boldsymbol{x}_r \in C(A^{\top}), \boldsymbol{x}_n \in N(A)" data-display="false"><code>\boldsymbol{x}_r \in C(A^{\top}), \boldsymbol{x}_n \in N(A)</code></span>），<span class="course-math" data-tex="A\boldsymbol{x} = A\boldsymbol{x}_r" data-display="false"><code>A\boldsymbol{x} = A\boldsymbol{x}_r</code></span>。


### 3.2 Cosines and Projections onto Lines
{: #section-18 }


**向量 <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 在非零向量 <span class="course-math" data-tex="\boldsymbol{a}" data-display="false"><code>\boldsymbol{a}</code></span> 上的投影：**
<span class="course-math course-math-display" data-tex="\boldsymbol{p} = \lVert \boldsymbol{b}\rVert \cos\theta \cdot \frac{\boldsymbol{a}}{\lVert \boldsymbol{a}\rVert } = \frac{\boldsymbol{a}^{\top}\boldsymbol{b}}{\boldsymbol{a}^{\top}\boldsymbol{a}} \boldsymbol{a}" data-display="true"><code>\boldsymbol{p} = \lVert \boldsymbol{b}\rVert \cos\theta \cdot \frac{\boldsymbol{a}}{\lVert \boldsymbol{a}\rVert } = \frac{\boldsymbol{a}^{\top}\boldsymbol{b}}{\boldsymbol{a}^{\top}\boldsymbol{a}} \boldsymbol{a}</code></span>

**投影矩阵：**
<span class="course-math course-math-display" data-tex="P = \frac{\boldsymbol{a}\boldsymbol{a}^{\top}}{\boldsymbol{a}^{\top}\boldsymbol{a}}" data-display="true"><code>P = \frac{\boldsymbol{a}\boldsymbol{a}^{\top}}{\boldsymbol{a}^{\top}\boldsymbol{a}}</code></span>

- <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是对称的秩一矩阵
- <span class="course-math" data-tex="P^2 = P" data-display="false"><code>P^2 = P</code></span>（投影两次等于投影一次）


### 3.3 Projections and Least Squares
{: #section-19 }


**最小二乘问题：** 求 <span class="course-math" data-tex="\min \lVert A\boldsymbol{x} - \boldsymbol{b}\rVert ^2" data-display="false"><code>\min \lVert A\boldsymbol{x} - \boldsymbol{b}\rVert ^2</code></span>

即最小化 <span class="course-math" data-tex="\sum_{i=1}^m (a_{i1}x_1 + \cdots + a_{in}x_n - b_i)^2" data-display="false"><code>\sum_{i=1}^m (a_{i1}x_1 + \cdots + a_{in}x_n - b_i)^2</code></span>

**几何推导：** <span class="course-math" data-tex="A\boldsymbol{x}" data-display="false"><code>A\boldsymbol{x}</code></span> 落在 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 中。要使 <span class="course-math" data-tex="\lVert A\boldsymbol{x} - \boldsymbol{b}\rVert" data-display="false"><code>\lVert A\boldsymbol{x} - \boldsymbol{b}\rVert</code></span> 最小，需 <span class="course-math" data-tex="\boldsymbol{b} - A\hat{\boldsymbol{x}} \perp C(A)" data-display="false"><code>\boldsymbol{b} - A\hat{\boldsymbol{x}} \perp C(A)</code></span>，即 <span class="course-math" data-tex="\boldsymbol{b} - A\hat{\boldsymbol{x}} \in C(A)^\perp = N(A^{\top})" data-display="false"><code>\boldsymbol{b} - A\hat{\boldsymbol{x}} \in C(A)^\perp = N(A^{\top})</code></span>。

<span class="course-math course-math-display" data-tex="A^{\top}(\boldsymbol{b} - A\hat{\boldsymbol{x}}) = \boldsymbol{0} \implies A^{\top}A\hat{\boldsymbol{x}} = A^{\top}\boldsymbol{b}" data-display="true"><code>A^{\top}(\boldsymbol{b} - A\hat{\boldsymbol{x}}) = \boldsymbol{0} \implies A^{\top}A\hat{\boldsymbol{x}} = A^{\top}\boldsymbol{b}</code></span>

**法方程（Normal Equation）：** <span class="course-math" data-tex="A^{\top}A\hat{\boldsymbol{x}} = A^{\top}\boldsymbol{b}" data-display="false"><code>A^{\top}A\hat{\boldsymbol{x}} = A^{\top}\boldsymbol{b}</code></span>

- 法方程始终有解（几何直观保证 + 可证 <span class="course-math" data-tex="r(A^{\top}A) = r([A^{\top}A \mid A^{\top}\boldsymbol{b}])" data-display="false"><code>r(A^{\top}A) = r([A^{\top}A \mid A^{\top}\boldsymbol{b}])</code></span>）
- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 列满秩（<span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 可逆）：<span class="course-math" data-tex="\hat{\boldsymbol{x}} = (A^{\top}A)^{-1}A^{\top}\boldsymbol{b}" data-display="false"><code>\hat{\boldsymbol{x}} = (A^{\top}A)^{-1}A^{\top}\boldsymbol{b}</code></span>
- 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆：<span class="course-math" data-tex="\hat{\boldsymbol{x}} = A^{-1}\boldsymbol{b}" data-display="false"><code>\hat{\boldsymbol{x}} = A^{-1}\boldsymbol{b}</code></span>

**投影到 <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span>（以下逆矩阵公式要求 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 列满秩）：**
<span class="course-math course-math-display" data-tex="\boldsymbol{p} = A\hat{\boldsymbol{x}} = A(A^{\top}A)^{-1}A^{\top}\boldsymbol{b}" data-display="true"><code>\boldsymbol{p} = A\hat{\boldsymbol{x}} = A(A^{\top}A)^{-1}A^{\top}\boldsymbol{b}</code></span>

**投影矩阵（Projection Matrix）：**
<span class="course-math course-math-display" data-tex="P = A(A^{\top}A)^{-1}A^{\top}" data-display="true"><code>P = A(A^{\top}A)^{-1}A^{\top}</code></span>

- <span class="course-math" data-tex="P^2 = P" data-display="false"><code>P^2 = P</code></span>（两次投影等于一次）
- <span class="course-math" data-tex="P^{\top} = P" data-display="false"><code>P^{\top} = P</code></span>（对称）
- 任何满足 <span class="course-math" data-tex="P^2 = P" data-display="false"><code>P^2 = P</code></span> 且 <span class="course-math" data-tex="P^{\top} = P" data-display="false"><code>P^{\top} = P</code></span> 的矩阵都是投影到 <span class="course-math" data-tex="C(P)" data-display="false"><code>C(P)</code></span> 的投影矩阵
- <span class="course-math" data-tex="I - P" data-display="false"><code>I - P</code></span> 也是投影矩阵，投影到 <span class="course-math" data-tex="C(A)^\perp = N(A^{\top})" data-display="false"><code>C(A)^\perp = N(A^{\top})</code></span>

**应用——线性回归（<span class="course-math" data-tex="n=2" data-display="false"><code>n=2</code></span>）：** 求直线 <span class="course-math" data-tex="b = C + Dt" data-display="false"><code>b = C + Dt</code></span> 最小化 <span class="course-math" data-tex="\sum (C + Dt_i - b_i)^2" data-display="false"><code>\sum (C + Dt_i - b_i)^2</code></span>

-   <span class="course-math course-math-display" data-tex="A = \begin{bmatrix}1 &amp; t_1 \\ \vdots &amp; \vdots \\ 1 &amp; t_m\end{bmatrix},\ \boldsymbol{b} = \begin{bmatrix}b_1 \\ \vdots \\ b_m\end{bmatrix}" data-display="true"><code>A = \begin{bmatrix}1 &amp; t_1 \\ \vdots &amp; \vdots \\ 1 &amp; t_m\end{bmatrix},\ \boldsymbol{b} = \begin{bmatrix}b_1 \\ \vdots \\ b_m\end{bmatrix}</code></span>

  ，解

  <span class="course-math course-math-display" data-tex="A^{\top}A\begin{bmatrix}C \\ D\end{bmatrix} = A^{\top}\boldsymbol{b}" data-display="true"><code>A^{\top}A\begin{bmatrix}C \\ D\end{bmatrix} = A^{\top}\boldsymbol{b}</code></span>
- 技巧：先中心化 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span>——令 <span class="course-math" data-tex="b = C_1 + D_1(t - \bar{t})" data-display="false"><code>b = C_1 + D_1(t - \bar{t})</code></span>，则 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的两列正交
- 此时 <span class="course-math" data-tex="\hat{C}_1 = \frac{\boldsymbol{v}_1^{\top}\boldsymbol{b}}{\boldsymbol{v}_1^{\top}\boldsymbol{v}_1},\ \hat{D}_1 = \frac{\boldsymbol{v}_2^{\top}\boldsymbol{b}}{\boldsymbol{v}_2^{\top}\boldsymbol{v}_2}" data-display="false"><code>\hat{C}_1 = \frac{\boldsymbol{v}_1^{\top}\boldsymbol{b}}{\boldsymbol{v}_1^{\top}\boldsymbol{v}_1},\ \hat{D}_1 = \frac{\boldsymbol{v}_2^{\top}\boldsymbol{b}}{\boldsymbol{v}_2^{\top}\boldsymbol{v}_2}</code></span>，原参数 <span class="course-math" data-tex="C = C_1 - D_1\bar{t},\ D = D_1" data-display="false"><code>C = C_1 - D_1\bar{t},\ D = D_1</code></span>

**加权最小二乘（Weighted Least Squares）：** <span class="course-math" data-tex="\min \sum w_i^2(a_{i1}x_1 + \cdots - b_i)^2" data-display="false"><code>\min \sum w_i^2(a_{i1}x_1 + \cdots - b_i)^2</code></span>

- 构造对角权矩阵 <span class="course-math" data-tex="W = \operatorname{diag}(w_1,\dots,w_m)" data-display="false"><code>W = \operatorname{diag}(w_1,\dots,w_m)</code></span>，化为 <span class="course-math" data-tex="\min \lVert WA\hat{\boldsymbol{x}} - W\boldsymbol{b}\rVert ^2" data-display="false"><code>\min \lVert WA\hat{\boldsymbol{x}} - W\boldsymbol{b}\rVert ^2</code></span>
- 法方程：<span class="course-math" data-tex="A^{\top}(W^{\top}W)A\hat{\boldsymbol{x}} = A^{\top}(W^{\top}W)\boldsymbol{b}" data-display="false"><code>A^{\top}(W^{\top}W)A\hat{\boldsymbol{x}} = A^{\top}(W^{\top}W)\boldsymbol{b}</code></span>


### 3.4 Orthogonal Bases and Gram-Schmidt
{: #section-20 }


**规范正交基（Orthonormal Basis）：**
<span class="course-math course-math-display" data-tex="\boldsymbol{q}_i^{\top} \boldsymbol{q}_j = \begin{cases} 1 &amp; i=j \\ 0 &amp; i\neq j \end{cases}" data-display="true"><code>\boldsymbol{q}_i^{\top} \boldsymbol{q}_j = \begin{cases} 1 &amp; i=j \\ 0 &amp; i\neq j \end{cases}</code></span>

**正交矩阵（方阵）：** <span class="course-math" data-tex="Q^{\top} Q = I" data-display="false"><code>Q^{\top} Q = I</code></span>
- <span class="course-math" data-tex="Q^{-1} = Q^{\top}" data-display="false"><code>Q^{-1} = Q^{\top}</code></span>（逆极易求）
- <span class="course-math" data-tex="\lVert Q\boldsymbol{x}\rVert  = \lVert \boldsymbol{x}\rVert" data-display="false"><code>\lVert Q\boldsymbol{x}\rVert  = \lVert \boldsymbol{x}\rVert</code></span>（保长度）
- <span class="course-math" data-tex="(Q\boldsymbol{x})^{\top}(Q\boldsymbol{y}) = \boldsymbol{x}^{\top}\boldsymbol{y}" data-display="false"><code>(Q\boldsymbol{x})^{\top}(Q\boldsymbol{y}) = \boldsymbol{x}^{\top}\boldsymbol{y}</code></span>（保内积/保角）
- <span class="course-math" data-tex="Q^{\top}" data-display="false"><code>Q^{\top}</code></span> 也是正交矩阵（行也正交）

**正交基/正交矩阵的好处：**
- 坐标易求：<span class="course-math" data-tex="\boldsymbol{b} = \sum x_i \boldsymbol{q}_i \implies x_i = \boldsymbol{q}_i^{\top}\boldsymbol{b}" data-display="false"><code>\boldsymbol{b} = \sum x_i \boldsymbol{q}_i \implies x_i = \boldsymbol{q}_i^{\top}\boldsymbol{b}</code></span>
- 方程易解：<span class="course-math" data-tex="Q\boldsymbol{x} = \boldsymbol{b} \implies \boldsymbol{x} = Q^{\top}\boldsymbol{b}" data-display="false"><code>Q\boldsymbol{x} = \boldsymbol{b} \implies \boldsymbol{x} = Q^{\top}\boldsymbol{b}</code></span>
- 向量分解即投影：<span class="course-math" data-tex="\boldsymbol{b} = \sum (\boldsymbol{q}_i^{\top}\boldsymbol{b}) \boldsymbol{q}_i" data-display="false"><code>\boldsymbol{b} = \sum (\boldsymbol{q}_i^{\top}\boldsymbol{b}) \boldsymbol{q}_i</code></span>
- 长度好求：<span class="course-math" data-tex="\lVert \boldsymbol{b}\rVert  = \sqrt{\sum (\boldsymbol{q}_i^{\top}\boldsymbol{b})^2}" data-display="false"><code>\lVert \boldsymbol{b}\rVert  = \sqrt{\sum (\boldsymbol{q}_i^{\top}\boldsymbol{b})^2}</code></span>

**半正交矩阵（列规范正交但不一定是方阵）：**
- 投影到 <span class="course-math" data-tex="C(Q)" data-display="false"><code>C(Q)</code></span>：<span class="course-math" data-tex="P = Q(Q^{\top}Q)^{-1}Q^{\top} = QQ^{\top} = \sum \boldsymbol{q}_i \boldsymbol{q}_i^{\top}" data-display="false"><code>P = Q(Q^{\top}Q)^{-1}Q^{\top} = QQ^{\top} = \sum \boldsymbol{q}_i \boldsymbol{q}_i^{\top}</code></span>
- 最小二乘解 <span class="course-math" data-tex="Q\boldsymbol{x} = \boldsymbol{b}" data-display="false"><code>Q\boldsymbol{x} = \boldsymbol{b}</code></span>：<span class="course-math" data-tex="\hat{\boldsymbol{x}} = Q^{\top}\boldsymbol{b}" data-display="false"><code>\hat{\boldsymbol{x}} = Q^{\top}\boldsymbol{b}</code></span>

**Householder 变换（反射变换）：** 将向量关于法向量 <span class="course-math" data-tex="\boldsymbol{v}" data-display="false"><code>\boldsymbol{v}</code></span> 的超平面作反射
<span class="course-math course-math-display" data-tex="H = I - 2\frac{\boldsymbol{v}\boldsymbol{v}^{\top}}{\boldsymbol{v}^{\top}\boldsymbol{v}}" data-display="true"><code>H = I - 2\frac{\boldsymbol{v}\boldsymbol{v}^{\top}}{\boldsymbol{v}^{\top}\boldsymbol{v}}</code></span>

- <span class="course-math" data-tex="H^2 = I" data-display="false"><code>H^2 = I</code></span>（对合），<span class="course-math" data-tex="H^{\top} = H" data-display="false"><code>H^{\top} = H</code></span>（对称），<span class="course-math" data-tex="H^{\top} H = I" data-display="false"><code>H^{\top} H = I</code></span>（正交）
- 用途：将向量某些分量置零而保持长度不变
- 例：找 <span class="course-math" data-tex="A^2 = I" data-display="false"><code>A^2 = I</code></span> 且第一列为单位向量 <span class="course-math" data-tex="\boldsymbol{u}" data-display="false"><code>\boldsymbol{u}</code></span> 的对称矩阵——取 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为 Householder 矩阵，法向量 <span class="course-math" data-tex="\boldsymbol{v} = \boldsymbol{e}_1 - \boldsymbol{u}" data-display="false"><code>\boldsymbol{v} = \boldsymbol{e}_1 - \boldsymbol{u}</code></span>；若 <span class="course-math" data-tex="\boldsymbol{u}=\boldsymbol{e}_1" data-display="false"><code>\boldsymbol{u}=\boldsymbol{e}_1</code></span>，直接取 <span class="course-math" data-tex="A=I" data-display="false"><code>A=I</code></span>

**Gram-Schmidt 正交化：** 从基 <span class="course-math" data-tex="\{\boldsymbol{a}_1, \boldsymbol{a}_2, \dots, \boldsymbol{a}_n\}" data-display="false"><code>\{\boldsymbol{a}_1, \boldsymbol{a}_2, \dots, \boldsymbol{a}_n\}</code></span> 构造规范正交基 <span class="course-math" data-tex="\{\boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n\}" data-display="false"><code>\{\boldsymbol{q}_1, \boldsymbol{q}_2, \dots, \boldsymbol{q}_n\}</code></span>

<span class="course-math course-math-display" data-tex="\boldsymbol{q}_1 = \frac{\boldsymbol{a}_1}{\lVert \boldsymbol{a}_1\rVert }" data-display="true"><code>\boldsymbol{q}_1 = \frac{\boldsymbol{a}_1}{\lVert \boldsymbol{a}_1\rVert }</code></span>
<span class="course-math course-math-display" data-tex="\boldsymbol{u}_{j+1} = \boldsymbol{a}_{j+1} - \sum_{i=1}^{j} (\boldsymbol{q}_i^{\top} \boldsymbol{a}_{j+1}) \boldsymbol{q}_i" data-display="true"><code>\boldsymbol{u}_{j+1} = \boldsymbol{a}_{j+1} - \sum_{i=1}^{j} (\boldsymbol{q}_i^{\top} \boldsymbol{a}_{j+1}) \boldsymbol{q}_i</code></span>
<span class="course-math course-math-display" data-tex="\boldsymbol{q}_{j+1} = \frac{\boldsymbol{u}_{j+1}}{\lVert \boldsymbol{u}_{j+1}\rVert }" data-display="true"><code>\boldsymbol{q}_{j+1} = \frac{\boldsymbol{u}_{j+1}}{\lVert \boldsymbol{u}_{j+1}\rVert }</code></span>

> 也可以先不单位化到最后再做，计算更简单。

**QR 分解：**
<span class="course-math course-math-display" data-tex="A = QR" data-display="true"><code>A = QR</code></span>

- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>：列线性无关的 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵
- <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>：<span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵，列规范正交
- <span class="course-math" data-tex="R" data-display="false"><code>R</code></span>：<span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 可逆上三角矩阵，<span class="course-math" data-tex="R_{ij} = \boldsymbol{q}_i^{\top} \boldsymbol{a}_j" data-display="false"><code>R_{ij} = \boldsymbol{q}_i^{\top} \boldsymbol{a}_j</code></span>（<span class="course-math" data-tex="i \leq j" data-display="false"><code>i \leq j</code></span>）

**构造方式：**
<span class="course-math course-math-display" data-tex="\begin{aligned}&#10;\boldsymbol{a}_1 &amp;= (\boldsymbol{q}_1^{\top} \boldsymbol{a}_1) \boldsymbol{q}_1 \\&#10;\boldsymbol{a}_2 &amp;= (\boldsymbol{q}_1^{\top} \boldsymbol{a}_2) \boldsymbol{q}_1 + (\boldsymbol{q}_2^{\top} \boldsymbol{a}_2) \boldsymbol{q}_2 \\&#10;&amp;\vdots \\&#10;\boldsymbol{a}_n &amp;= \sum_{i=1}^n (\boldsymbol{q}_i^{\top} \boldsymbol{a}_n) \boldsymbol{q}_i&#10;\end{aligned}" data-display="true"><code>\begin{aligned}&#10;\boldsymbol{a}_1 &amp;= (\boldsymbol{q}_1^{\top} \boldsymbol{a}_1) \boldsymbol{q}_1 \\&#10;\boldsymbol{a}_2 &amp;= (\boldsymbol{q}_1^{\top} \boldsymbol{a}_2) \boldsymbol{q}_1 + (\boldsymbol{q}_2^{\top} \boldsymbol{a}_2) \boldsymbol{q}_2 \\&#10;&amp;\vdots \\&#10;\boldsymbol{a}_n &amp;= \sum_{i=1}^n (\boldsymbol{q}_i^{\top} \boldsymbol{a}_n) \boldsymbol{q}_i&#10;\end{aligned}</code></span>
<span class="course-math course-math-display" data-tex="R = \begin{bmatrix}&#10;\boldsymbol{q}_1^{\top} \boldsymbol{a}_1 &amp; \boldsymbol{q}_1^{\top} \boldsymbol{a}_2 &amp; \dots &amp; \boldsymbol{q}_1^{\top} \boldsymbol{a}_n \\&#10;0 &amp; \boldsymbol{q}_2^{\top} \boldsymbol{a}_2 &amp; \dots &amp; \boldsymbol{q}_2^{\top} \boldsymbol{a}_n \\&#10;\vdots &amp; \vdots &amp; \ddots &amp; \vdots \\&#10;0 &amp; 0 &amp; \dots &amp; \boldsymbol{q}_n^{\top} \boldsymbol{a}_n&#10;\end{bmatrix} = Q^{\top} A" data-display="true"><code>R = \begin{bmatrix}&#10;\boldsymbol{q}_1^{\top} \boldsymbol{a}_1 &amp; \boldsymbol{q}_1^{\top} \boldsymbol{a}_2 &amp; \dots &amp; \boldsymbol{q}_1^{\top} \boldsymbol{a}_n \\&#10;0 &amp; \boldsymbol{q}_2^{\top} \boldsymbol{a}_2 &amp; \dots &amp; \boldsymbol{q}_2^{\top} \boldsymbol{a}_n \\&#10;\vdots &amp; \vdots &amp; \ddots &amp; \vdots \\&#10;0 &amp; 0 &amp; \dots &amp; \boldsymbol{q}_n^{\top} \boldsymbol{a}_n&#10;\end{bmatrix} = Q^{\top} A</code></span>

> 若 <span class="course-math" data-tex="m=n" data-display="false"><code>m=n</code></span>（<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆）：任何可逆矩阵可分解为正交矩阵 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 上三角矩阵。

**利用 QR 解最小二乘：**
<span class="course-math course-math-display" data-tex="A^{\top}A\hat{\boldsymbol{x}} = A^{\top}\boldsymbol{b} \implies R^{\top}R\hat{\boldsymbol{x}} = R^{\top}Q^{\top}\boldsymbol{b} \implies R\hat{\boldsymbol{x}} = Q^{\top}\boldsymbol{b}" data-display="true"><code>A^{\top}A\hat{\boldsymbol{x}} = A^{\top}\boldsymbol{b} \implies R^{\top}R\hat{\boldsymbol{x}} = R^{\top}Q^{\top}\boldsymbol{b} \implies R\hat{\boldsymbol{x}} = Q^{\top}\boldsymbol{b}</code></span>

直接回代，无需解法方程。

**抽象内积空间：** 内积 <span class="course-math" data-tex="\langle\cdot,\cdot\rangle: V\times V\to\mathbb{R}" data-display="false"><code>\langle\cdot,\cdot\rangle: V\times V\to\mathbb{R}</code></span> 需满足：
1. 对称性：<span class="course-math" data-tex="\langle \boldsymbol{v},\boldsymbol{w}\rangle = \langle \boldsymbol{w},\boldsymbol{v}\rangle" data-display="false"><code>\langle \boldsymbol{v},\boldsymbol{w}\rangle = \langle \boldsymbol{w},\boldsymbol{v}\rangle</code></span>
2. 双线性
3. 正定性：<span class="course-math" data-tex="\langle \boldsymbol{v},\boldsymbol{v}\rangle \geq 0" data-display="false"><code>\langle \boldsymbol{v},\boldsymbol{v}\rangle \geq 0</code></span>，且 <span class="course-math" data-tex="\boldsymbol{v}=0 \iff \langle \boldsymbol{v},\boldsymbol{v}\rangle = 0" data-display="false"><code>\boldsymbol{v}=0 \iff \langle \boldsymbol{v},\boldsymbol{v}\rangle = 0</code></span>

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
1. <span class="course-math" data-tex="\det(I) = 1" data-display="false"><code>\det(I) = 1</code></span>
2. 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有两行相同，则 <span class="course-math" data-tex="\det(A) = 0" data-display="false"><code>\det(A) = 0</code></span>
3. <span class="course-math" data-tex="\det(A)" data-display="false"><code>\det(A)</code></span> 线性依赖于每一行

**推导性质：**
- 交换两行 → 行列式变号：<span class="course-math" data-tex="\det(P_{ij}A) = -\det(A)" data-display="false"><code>\det(P_{ij}A) = -\det(A)</code></span>
- 初等行变换（一行的倍数加到另一行）→ 行列式不变
- 三角矩阵的行列式 = 对角元之积：<span class="course-math" data-tex="\det(A) = \prod a_{ii}" data-display="false"><code>\det(A) = \prod a_{ii}</code></span>
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 奇异 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\det(A) = 0" data-display="false"><code>\det(A) = 0</code></span>；<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可逆 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\det(A) \neq 0" data-display="false"><code>\det(A) \neq 0</code></span>
- **乘积公式：** <span class="course-math" data-tex="\det(AB) = \det(A)\det(B)" data-display="false"><code>\det(AB) = \det(A)\det(B)</code></span>
  - 证明：若 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 奇异，<span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 也奇异，均为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>。若 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 可逆，验证 <span class="course-math" data-tex="d(A) = \frac{\det(AB)}{\det(B)}" data-display="false"><code>d(A) = \frac{\det(AB)}{\det(B)}</code></span> 满足三条定义性质，故 <span class="course-math" data-tex="d(A) = \det(A)" data-display="false"><code>d(A) = \det(A)</code></span>。
- **转置不变：** <span class="course-math" data-tex="\det(A) = \det(A^{\top})" data-display="false"><code>\det(A) = \det(A^{\top})</code></span>
  - 证明：利用 <span class="course-math" data-tex="PA = LU" data-display="false"><code>PA = LU</code></span>，转置后 <span class="course-math" data-tex="\det(P) = \det(P^{\top})" data-display="false"><code>\det(P) = \det(P^{\top})</code></span>，三角矩阵转置行列式不变。
- 满秩时 <span class="course-math" data-tex="\det(A) = \pm (\text{全部 }n\text{ 个主元之积})" data-display="false"><code>\det(A) = \pm (\text{全部 }n\text{ 个主元之积})</code></span>，秩不足时 <span class="course-math" data-tex="\det(A)=0" data-display="false"><code>\det(A)=0</code></span>（由 <span class="course-math" data-tex="LU" data-display="false"><code>LU</code></span> 分解）

> 注意：一般 <span class="course-math" data-tex="\det(A+B) \neq \det(A)+\det(B)" data-display="false"><code>\det(A+B) \neq \det(A)+\det(B)</code></span>；<span class="course-math" data-tex="\det(cA) = c^n\det(A)" data-display="false"><code>\det(cA) = c^n\det(A)</code></span>

**几何意义（<span class="course-math" data-tex="A = QR" data-display="false"><code>A = QR</code></span>）：** <span class="course-math" data-tex="\det(A) = \det(Q)\det(R) = \pm \prod \boldsymbol{q}_i^{\top} a_i" data-display="false"><code>\det(A) = \det(Q)\det(R) = \pm \prod \boldsymbol{q}_i^{\top} a_i</code></span>，相当于"底 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 高 <span class="course-math" data-tex="\times" data-display="false"><code>\times</code></span> 高 <span class="course-math" data-tex="\times \cdots" data-display="false"><code>\times \cdots</code></span>"，即高维体积。


### 4.3 Formulas for the Determinant
{: #section-25 }


**大公式（Big Formula）：**
<span class="course-math course-math-display" data-tex="\det(A) = \sum_{(\alpha_1,\dots,\alpha_n)} a_{1\alpha_1}a_{2\alpha_2}\cdots a_{n\alpha_n} \cdot (-1)^{\text{inv}(\alpha)}" data-display="true"><code>\det(A) = \sum_{(\alpha_1,\dots,\alpha_n)} a_{1\alpha_1}a_{2\alpha_2}\cdots a_{n\alpha_n} \cdot (-1)^{\text{inv}(\alpha)}</code></span>

遍历 <span class="course-math" data-tex="(1,2,\dots,n)" data-display="false"><code>(1,2,\dots,n)</code></span> 的所有排列 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>。<span class="course-math" data-tex="\text{inv}(\alpha)" data-display="false"><code>\text{inv}(\alpha)</code></span> = 排列的逆序数（<span class="course-math" data-tex="i&lt;j" data-display="false"><code>i&lt;j</code></span> 但 <span class="course-math" data-tex="\alpha_i&gt;\alpha_j" data-display="false"><code>\alpha_i&gt;\alpha_j</code></span> 的对数）。

> 计算量 <span class="course-math" data-tex="O(n!)" data-display="false"><code>O(n!)</code></span>，实际用 <span class="course-math" data-tex="PA = LU" data-display="false"><code>PA = LU</code></span>。

**代数余子式（Cofactor）：**
- 余子式 <span class="course-math" data-tex="M_{ij}" data-display="false"><code>M_{ij}</code></span>：删去第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列后的 <span class="course-math" data-tex="(n-1)\times(n-1)" data-display="false"><code>(n-1)\times(n-1)</code></span> 行列式
- 代数余子式 <span class="course-math" data-tex="C_{ij} = (-1)^{i+j} M_{ij}" data-display="false"><code>C_{ij} = (-1)^{i+j} M_{ij}</code></span>

**拉普拉斯展开（第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行）：**
<span class="course-math course-math-display" data-tex="\det(A) = \sum_{j=1}^n a_{ij} C_{ij}" data-display="true"><code>\det(A) = \sum_{j=1}^n a_{ij} C_{ij}</code></span>

同理可对第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列展开：<span class="course-math" data-tex="\det(A) = \sum_{i=1}^n a_{ij} C_{ij}" data-display="false"><code>\det(A) = \sum_{i=1}^n a_{ij} C_{ij}</code></span>

（由大公式固定展开行/列即得）


### 4.4 Applications of Determinants
{: #section-26 }


**用行列式求逆：**
<span class="course-math course-math-display" data-tex="A^{-1} = \frac{C^{\top}}{\det(A)}" data-display="true"><code>A^{-1} = \frac{C^{\top}}{\det(A)}</code></span>

其中 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 是代数余子式矩阵（<span class="course-math" data-tex="C_{ij} = (-1)^{i+j}M_{ij}" data-display="false"><code>C_{ij} = (-1)^{i+j}M_{ij}</code></span>）。

**证明：** 需证 <span class="course-math" data-tex="AC^{\top} = \det(A)I" data-display="false"><code>AC^{\top} = \det(A)I</code></span>：
- <span class="course-math" data-tex="(AC^{\top})_{ii} = \sum a_{ik}C_{ik} = \det(A)" data-display="false"><code>(AC^{\top})_{ii} = \sum a_{ik}C_{ik} = \det(A)</code></span>（第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行展开）
- <span class="course-math" data-tex="(AC^{\top})_{ij} = \sum a_{ik}C_{jk} = 0" data-display="false"><code>(AC^{\top})_{ij} = \sum a_{ik}C_{jk} = 0</code></span>（<span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>，相当于将第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 行"替换"为第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 行的矩阵的行列式，该矩阵有两行相同，故为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>）

**克莱姆法则（Cramer's Rule）：** <span class="course-math" data-tex="A\boldsymbol{x}=\boldsymbol{b}" data-display="false"><code>A\boldsymbol{x}=\boldsymbol{b}</code></span> 的解
<span class="course-math course-math-display" data-tex="x_j = \frac{\det(B_j)}{\det(A)}" data-display="true"><code>x_j = \frac{\det(B_j)}{\det(A)}</code></span>

其中 <span class="course-math" data-tex="B_j" data-display="false"><code>B_j</code></span> 是将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列替换为 <span class="course-math" data-tex="\boldsymbol{b}" data-display="false"><code>\boldsymbol{b}</code></span> 得到的矩阵。

**推导：** <span class="course-math" data-tex="\boldsymbol{x} = A^{-1}\boldsymbol{b} = \frac{C^{\top}}{\det(A)}\boldsymbol{b}" data-display="false"><code>\boldsymbol{x} = A^{-1}\boldsymbol{b} = \frac{C^{\top}}{\det(A)}\boldsymbol{b}</code></span>，<span class="course-math" data-tex="(C^{\top}\boldsymbol{b})_j = \sum_i C_{ij}b_i = \det(B_j)" data-display="false"><code>(C^{\top}\boldsymbol{b})_j = \sum_i C_{ij}b_i = \det(B_j)</code></span>（按第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 列展开）。

**用行列式求主元：**
<span class="course-math course-math-display" data-tex="d_k = \frac{\det(A_k)}{\det(A_{k-1})}" data-display="true"><code>d_k = \frac{\det(A_k)}{\det(A_{k-1})}</code></span>

其中 <span class="course-math" data-tex="A_k" data-display="false"><code>A_k</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 左上角 <span class="course-math" data-tex="k\times k" data-display="false"><code>k\times k</code></span> 子矩阵（假设无需换行消元，所有顺序主子式非零，且 <span class="course-math" data-tex="\det(A_0)=1" data-display="false"><code>\det(A_0)=1</code></span>）。

**证明：** <span class="course-math" data-tex="A = LDU" data-display="false"><code>A = LDU</code></span>，则 <span class="course-math" data-tex="A_k = L_k D_k U_k" data-display="false"><code>A_k = L_k D_k U_k</code></span>，故 <span class="course-math" data-tex="\det(A_k) = d_1 d_2 \cdots d_k" data-display="false"><code>\det(A_k) = d_1 d_2 \cdots d_k</code></span>，相除即得。

---


## 5 Eigenvalues and Eigenvectors
{: #section-27 }



### 5.1 Introduction
{: #section-28 }


**定义：** <span class="course-math" data-tex="A\boldsymbol{x} = \lambda \boldsymbol{x}" data-display="false"><code>A\boldsymbol{x} = \lambda \boldsymbol{x}</code></span>（<span class="course-math" data-tex="\boldsymbol{x} \neq \boldsymbol{0}" data-display="false"><code>\boldsymbol{x} \neq \boldsymbol{0}</code></span>）
- <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>：特征值（Eigenvalue）
- <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span>：<span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span> 对应的特征向量（Eigenvector）
- 特征空间（Eigenspace）：<span class="course-math" data-tex="N(A - \lambda I)" data-display="false"><code>N(A - \lambda I)</code></span>

**求法：**
1. 解特征方程 <span class="course-math" data-tex="\det(A - \lambda I) = 0" data-display="false"><code>\det(A - \lambda I) = 0</code></span> 得 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>
2. 对每个 <span class="course-math" data-tex="\lambda_i" data-display="false"><code>\lambda_i</code></span>，解 <span class="course-math" data-tex="(A - \lambda_i I)\boldsymbol{x} = \boldsymbol{0}" data-display="false"><code>(A - \lambda_i I)\boldsymbol{x} = \boldsymbol{0}</code></span> 得特征向量

**几何意义：** 经过 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 代表的线性变换后，与原向量共线的向量。

**迹与行列式：** 由韦达定理考察 <span class="course-math" data-tex="\lambda^{n-1}" data-display="false"><code>\lambda^{n-1}</code></span> 和 <span class="course-math" data-tex="\lambda^0" data-display="false"><code>\lambda^0</code></span> 系数：
<span class="course-math course-math-display" data-tex="\sum_{i=1}^n \lambda_i = \operatorname{tr}(A) = \sum a_{ii}" data-display="true"><code>\sum_{i=1}^n \lambda_i = \operatorname{tr}(A) = \sum a_{ii}</code></span>
<span class="course-math course-math-display" data-tex="\prod_{i=1}^n \lambda_i = \det(A)" data-display="true"><code>\prod_{i=1}^n \lambda_i = \det(A)</code></span>


### 5.2 Diagonalization of a Matrix
{: #section-29 }


若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个线性无关的特征向量 <span class="course-math" data-tex="\boldsymbol{v}_1, \dots, \boldsymbol{v}_n" data-display="false"><code>\boldsymbol{v}_1, \dots, \boldsymbol{v}_n</code></span>：
<span class="course-math course-math-display" data-tex="A = S\Lambda S^{-1}" data-display="true"><code>A = S\Lambda S^{-1}</code></span>

- <span class="course-math" data-tex="S = [\boldsymbol{v}_1 \cdots \boldsymbol{v}_n]" data-display="false"><code>S = [\boldsymbol{v}_1 \cdots \boldsymbol{v}_n]</code></span>（特征向量矩阵）
- <span class="course-math" data-tex="\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)" data-display="false"><code>\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)</code></span>（特征值矩阵）

**几何意义：** <span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 相当于基变换矩阵。在以特征向量为基的坐标系中，线性变换只是沿各坐标轴按相应特征值伸缩。

**可对角化条件：**
- <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可对角化 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个线性无关的特征向量
- <span class="course-math" data-tex="\impliedby" data-display="false"><code>\impliedby</code></span> <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个互异的特征值（充分非必要）

**定理：若特征向量对应的特征值互异，则这些特征向量线性无关。**
- 归纳法：假设 <span class="course-math" data-tex="\sum c_i \boldsymbol{x}_i = \boldsymbol{0}" data-display="false"><code>\sum c_i \boldsymbol{x}_i = \boldsymbol{0}</code></span>，左乘 <span class="course-math" data-tex="(A - \lambda_j I)" data-display="false"><code>(A - \lambda_j I)</code></span> 消去第 <span class="course-math" data-tex="j" data-display="false"><code>j</code></span> 项，化归为 <span class="course-math" data-tex="k-1" data-display="false"><code>k-1</code></span> 个向量的情况。
- 或利用多项式：令 <span class="course-math" data-tex="f(x) = \prod_{i\neq j} (x - \lambda_i)" data-display="false"><code>f(x) = \prod_{i\neq j} (x - \lambda_i)</code></span>，左乘 <span class="course-math" data-tex="f(A)" data-display="false"><code>f(A)</code></span> 得 <span class="course-math" data-tex="c_j = 0" data-display="false"><code>c_j = 0</code></span>。

**幂的计算：** <span class="course-math" data-tex="A^k = S\Lambda^k S^{-1}" data-display="false"><code>A^k = S\Lambda^k S^{-1}</code></span>（<span class="course-math" data-tex="\Lambda^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)" data-display="false"><code>\Lambda^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)</code></span>）

**多项式定理：** 若 <span class="course-math" data-tex="f(x) = a_n x^n + \cdots + a_0" data-display="false"><code>f(x) = a_n x^n + \cdots + a_0</code></span>，且 <span class="course-math" data-tex="A\boldsymbol{x} = \lambda\boldsymbol{x}" data-display="false"><code>A\boldsymbol{x} = \lambda\boldsymbol{x}</code></span>，则
<span class="course-math course-math-display" data-tex="f(A)\boldsymbol{x} = f(\lambda)\boldsymbol{x}" data-display="true"><code>f(A)\boldsymbol{x} = f(\lambda)\boldsymbol{x}</code></span>

即 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span> 也是 <span class="course-math" data-tex="f(A)" data-display="false"><code>f(A)</code></span> 的特征向量，对应特征值 <span class="course-math" data-tex="f(\lambda)" data-display="false"><code>f(\lambda)</code></span>。

**同时对角化定理：** 若 <span class="course-math" data-tex="A, B" data-display="false"><code>A, B</code></span> 均可对角化，则
<span class="course-math course-math-display" data-tex="AB = BA \iff A, B \text{ 共享特征向量矩阵 } S" data-display="true"><code>AB = BA \iff A, B \text{ 共享特征向量矩阵 } S</code></span>

此时 <span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 的特征向量同 <span class="course-math" data-tex="S" data-display="false"><code>S</code></span>，特征值 = <span class="course-math" data-tex="\lambda_i^A \lambda_i^B" data-display="false"><code>\lambda_i^A \lambda_i^B</code></span>。

**<span class="course-math" data-tex="AB" data-display="false"><code>AB</code></span> 与 <span class="course-math" data-tex="BA" data-display="false"><code>BA</code></span> 的特征值关系：** 非零特征值始终相同。若均为 <span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span>，特征多项式相同：
<span class="course-math course-math-display" data-tex="\lambda^n\det(AB - \lambda I_m)  = \lambda^m\det(BA - \lambda I_n)" data-display="true"><code>\lambda^n\det(AB - \lambda I_m)  = \lambda^m\det(BA - \lambda I_n)</code></span>

（<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span>，<span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 为 <span class="course-math" data-tex="n\times m" data-display="false"><code>n\times m</code></span>）

**秩一矩阵的特征值：** 至少有 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 个特征值为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>（按代数重数计）（<span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 有 <span class="course-math" data-tex="n-1" data-display="false"><code>n-1</code></span> 维）。


### 5.3 Difference Equations and Powers <span class="course-math" data-tex="A^k" data-display="false"><code>A^k</code></span>
{: #section-30 }


**递推数列 <span class="course-math" data-tex="\boldsymbol{u}_{k+1} = A \boldsymbol{u}_k" data-display="false"><code>\boldsymbol{u}_{k+1} = A \boldsymbol{u}_k</code></span> 解法：**

若 <span class="course-math" data-tex="\boldsymbol{u}_0 = c_1\boldsymbol{x}_1 + \cdots + c_n\boldsymbol{x}_n" data-display="false"><code>\boldsymbol{u}_0 = c_1\boldsymbol{x}_1 + \cdots + c_n\boldsymbol{x}_n</code></span>（<span class="course-math" data-tex="\boldsymbol{x}_i" data-display="false"><code>\boldsymbol{x}_i</code></span> 为特征向量，特征值 <span class="course-math" data-tex="\lambda_i" data-display="false"><code>\lambda_i</code></span>），则：
<span class="course-math course-math-display" data-tex="\boldsymbol{u}_k = A^k \boldsymbol{u}_0 = \sum c_i \lambda_i^k \boldsymbol{x}_i" data-display="true"><code>\boldsymbol{u}_k = A^k \boldsymbol{u}_0 = \sum c_i \lambda_i^k \boldsymbol{x}_i</code></span>

**步骤：** 将 <span class="course-math" data-tex="\boldsymbol{u}_0" data-display="false"><code>\boldsymbol{u}_0</code></span> 用特征向量为基展开，矩阵的幂次直接变成特征值的幂次。

**斐波那契数列：** <span class="course-math" data-tex="F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n" data-display="false"><code>F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n</code></span>

<span class="course-math course-math-display" data-tex="\begin{bmatrix} F_{n+1} \\ F_n \end{bmatrix} = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}^n \begin{bmatrix} 1 \\ 0 \end{bmatrix}" data-display="true"><code>\begin{bmatrix} F_{n+1} \\ F_n \end{bmatrix} = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}^n \begin{bmatrix} 1 \\ 0 \end{bmatrix}</code></span>

对角化

<span class="course-math course-math-display" data-tex="A = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}" data-display="true"><code>A = \begin{bmatrix} 1 &amp; 1 \\ 1 &amp; 0 \end{bmatrix}</code></span>

，特征值 <span class="course-math" data-tex="\lambda_{1,2} = \frac{1\pm\sqrt{5}}{2}" data-display="false"><code>\lambda_{1,2} = \frac{1\pm\sqrt{5}}{2}</code></span>，得：
<span class="course-math course-math-display" data-tex="F_n = \frac{1}{\sqrt{5}}\left( \left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n \right)" data-display="true"><code>F_n = \frac{1}{\sqrt{5}}\left( \left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n \right)</code></span>

**一般差分方程通用解法：** 构造 <span class="course-math" data-tex="\boldsymbol{u}_{k+1} = A \boldsymbol{u}_k" data-display="false"><code>\boldsymbol{u}_{k+1} = A \boldsymbol{u}_k</code></span>，对角化 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，展开 <span class="course-math" data-tex="\boldsymbol{u}_0" data-display="false"><code>\boldsymbol{u}_0</code></span>，即可得通项。

**Markov 矩阵：**
- 定义：<span class="course-math" data-tex="a_{ij} \geq 0" data-display="false"><code>a_{ij} \geq 0</code></span>，且每列之和为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>
- 性质：
  - 必有特征值 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>（因为 <span class="course-math" data-tex="\boldsymbol{1}^{\top} A = \boldsymbol{1}^{\top}" data-display="false"><code>\boldsymbol{1}^{\top} A = \boldsymbol{1}^{\top}</code></span>，故 <span class="course-math" data-tex="\boldsymbol{1}" data-display="false"><code>\boldsymbol{1}</code></span> 是 <span class="course-math" data-tex="A^{\top}" data-display="false"><code>A^{\top}</code></span> 的特征向量，<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 与 <span class="course-math" data-tex="A^{\top}" data-display="false"><code>A^{\top}</code></span> 特征方程相同）
  - 存在特征值 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 对应的特征向量各分量均非负
  - 其余特征值 <span class="course-math" data-tex="\lvert \lambda_i\rvert  \leq 1" data-display="false"><code>\lvert \lambda_i\rvert  \leq 1</code></span>
  - 若所有 <span class="course-math" data-tex="a_{ij} &gt; 0" data-display="false"><code>a_{ij} &gt; 0</code></span>，则其余 <span class="course-math" data-tex="\lvert \lambda_i\rvert  &lt; 1" data-display="false"><code>\lvert \lambda_i\rvert  &lt; 1</code></span>


### 5.4 Differential Equations and <span class="course-math" data-tex="e^{At}" data-display="false"><code>e^{At}</code></span>（不考）
{: #section-31 }



### 5.5 Complex Matrices
{: #section-32 }


**复向量空间 <span class="course-math" data-tex="\mathbb{C}^n" data-display="false"><code>\mathbb{C}^n</code></span>：** 分量 <span class="course-math" data-tex="x_i \in \mathbb{C}" data-display="false"><code>x_i \in \mathbb{C}</code></span>，共轭 <span class="course-math" data-tex="\bar{\boldsymbol{x}}" data-display="false"><code>\bar{\boldsymbol{x}}</code></span>。内积定义为：
<span class="course-math course-math-display" data-tex="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \bar{\boldsymbol{x}}^{\top} \boldsymbol{y} = \overline{x_1}y_1 + \cdots + \overline{x_n}y_n" data-display="true"><code>\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \bar{\boldsymbol{x}}^{\top} \boldsymbol{y} = \overline{x_1}y_1 + \cdots + \overline{x_n}y_n</code></span>

长度：<span class="course-math" data-tex="\lVert \boldsymbol{x}\rVert ^2 = \bar{\boldsymbol{x}}^{\top}\boldsymbol{x} = \sum \lvert x_i\rvert ^2" data-display="false"><code>\lVert \boldsymbol{x}\rVert ^2 = \bar{\boldsymbol{x}}^{\top}\boldsymbol{x} = \sum \lvert x_i\rvert ^2</code></span>

**共轭转置（Conjugate Transpose / Hermitian Transpose）：**
<span class="course-math course-math-display" data-tex="A^{\mathrm{H}} = \bar{A}^{\top} = \overline{A^{\top}}" data-display="true"><code>A^{\mathrm{H}} = \bar{A}^{\top} = \overline{A^{\top}}</code></span>
性质：<span class="course-math" data-tex="(AB)^{\mathrm{H}} = B^{\mathrm{H}} A^{\mathrm{H}}" data-display="false"><code>(AB)^{\mathrm{H}} = B^{\mathrm{H}} A^{\mathrm{H}}</code></span>

---

**埃尔米特矩阵（Hermitian）：** <span class="course-math" data-tex="A^{\mathrm{H}} = A" data-display="false"><code>A^{\mathrm{H}} = A</code></span>
- 方阵，对角元为实数（<span class="course-math" data-tex="\bar{a}_{ii} = a_{ii}" data-display="false"><code>\bar{a}_{ii} = a_{ii}</code></span>）
- 实对称矩阵是 Hermitian 的特例
- **特征值全为实数**
  - 证明：<span class="course-math" data-tex="A\boldsymbol{x} = \lambda\boldsymbol{x} \implies \boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x} = \lambda \lVert \boldsymbol{x}\rVert ^2" data-display="false"><code>A\boldsymbol{x} = \lambda\boldsymbol{x} \implies \boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x} = \lambda \lVert \boldsymbol{x}\rVert ^2</code></span>，又 <span class="course-math" data-tex="(\boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x})^{\mathrm{H}} = \boldsymbol{x}^{\mathrm{H}} A^{\mathrm{H}} \boldsymbol{x} = \boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x}" data-display="false"><code>(\boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x})^{\mathrm{H}} = \boldsymbol{x}^{\mathrm{H}} A^{\mathrm{H}} \boldsymbol{x} = \boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x}</code></span>，故 <span class="course-math" data-tex="\boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x} \in \mathbb{R}" data-display="false"><code>\boldsymbol{x}^{\mathrm{H}} A\boldsymbol{x} \in \mathbb{R}</code></span>，故 <span class="course-math" data-tex="\lambda \in \mathbb{R}" data-display="false"><code>\lambda \in \mathbb{R}</code></span>
- **不同特征值的特征向量正交**
  - 证明：<span class="course-math" data-tex="(A\boldsymbol{x})^{\mathrm{H}} \boldsymbol{y} = \lambda (\boldsymbol{x}^{\mathrm{H}} \boldsymbol{y}) = \boldsymbol{x}^{\mathrm{H}} A^{\mathrm{H}} \boldsymbol{y} = \boldsymbol{x}^{\mathrm{H}} A\boldsymbol{y} = \mu(\boldsymbol{x}^{\mathrm{H}} \boldsymbol{y})" data-display="false"><code>(A\boldsymbol{x})^{\mathrm{H}} \boldsymbol{y} = \lambda (\boldsymbol{x}^{\mathrm{H}} \boldsymbol{y}) = \boldsymbol{x}^{\mathrm{H}} A^{\mathrm{H}} \boldsymbol{y} = \boldsymbol{x}^{\mathrm{H}} A\boldsymbol{y} = \mu(\boldsymbol{x}^{\mathrm{H}} \boldsymbol{y})</code></span>，若 <span class="course-math" data-tex="\lambda \neq \mu" data-display="false"><code>\lambda \neq \mu</code></span> 则 <span class="course-math" data-tex="\boldsymbol{x}^{\mathrm{H}} \boldsymbol{y} = 0" data-display="false"><code>\boldsymbol{x}^{\mathrm{H}} \boldsymbol{y} = 0</code></span>

**酉矩阵（Unitary）：** <span class="course-math" data-tex="U^{\mathrm{H}} U = I" data-display="false"><code>U^{\mathrm{H}} U = I</code></span>
- 保内积：<span class="course-math" data-tex="(U\boldsymbol{x})^{\mathrm{H}}(U\boldsymbol{y}) = \boldsymbol{x}^{\mathrm{H}} \boldsymbol{y}" data-display="false"><code>(U\boldsymbol{x})^{\mathrm{H}}(U\boldsymbol{y}) = \boldsymbol{x}^{\mathrm{H}} \boldsymbol{y}</code></span>
- **特征值满足 <span class="course-math" data-tex="\lvert \lambda\rvert  = 1" data-display="false"><code>\lvert \lambda\rvert  = 1</code></span>**
  - 证明：<span class="course-math" data-tex="\lVert U\boldsymbol{x}\rVert ^2 = \boldsymbol{x}^{\mathrm{H}} U^{\mathrm{H}} U\boldsymbol{x} = \boldsymbol{x}^{\mathrm{H}} \boldsymbol{x} = \lVert \boldsymbol{x}\rVert ^2" data-display="false"><code>\lVert U\boldsymbol{x}\rVert ^2 = \boldsymbol{x}^{\mathrm{H}} U^{\mathrm{H}} U\boldsymbol{x} = \boldsymbol{x}^{\mathrm{H}} \boldsymbol{x} = \lVert \boldsymbol{x}\rVert ^2</code></span>，又 <span class="course-math" data-tex="= \lvert \lambda\rvert ^2 \lVert \boldsymbol{x}\rVert ^2 \implies \lvert \lambda\rvert  = 1" data-display="false"><code>= \lvert \lambda\rvert ^2 \lVert \boldsymbol{x}\rVert ^2 \implies \lvert \lambda\rvert  = 1</code></span>
- **不同特征值的特征向量正交**

**斜埃尔米特矩阵（Skew-Hermitian）：** <span class="course-math" data-tex="K^{\mathrm{H}} = -K" data-display="false"><code>K^{\mathrm{H}} = -K</code></span>
- 对角元为纯虚数（<span class="course-math" data-tex="a-bi = -(a+bi) \implies a=0" data-display="false"><code>a-bi = -(a+bi) \implies a=0</code></span>）
- **特征值全为纯虚数**
  - 证明：<span class="course-math" data-tex="iK" data-display="false"><code>iK</code></span> 是 Hermitian 矩阵，<span class="course-math" data-tex="(iK)\boldsymbol{x} = \lambda\boldsymbol{x},\ \lambda\in\mathbb{R} \implies K\boldsymbol{x} = -i\lambda\boldsymbol{x}" data-display="false"><code>(iK)\boldsymbol{x} = \lambda\boldsymbol{x},\ \lambda\in\mathbb{R} \implies K\boldsymbol{x} = -i\lambda\boldsymbol{x}</code></span>
- **不同特征值的特征向量正交**
- 若 <span class="course-math" data-tex="K" data-display="false"><code>K</code></span> 为实矩阵，则为反对称矩阵（Skew-Symmetric）：<span class="course-math" data-tex="K^{\top} = -K" data-display="false"><code>K^{\top} = -K</code></span>，对角元为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span>

---

| 实矩阵 | 复矩阵 |
|--------|--------|
| <span class="course-math" data-tex="\lVert \boldsymbol{x}\rVert ^2 = \sum x_i^2" data-display="false"><code>\lVert \boldsymbol{x}\rVert ^2 = \sum x_i^2</code></span> | <span class="course-math" data-tex="\lVert \boldsymbol{x}\rVert ^2 = \sum \lvert x_i\rvert^2" data-display="false"><code>\lVert \boldsymbol{x}\rVert ^2 = \sum \lvert x_i\rvert^2</code></span> |
| 内积 <span class="course-math" data-tex="\boldsymbol{x}^{\top}\boldsymbol{y}" data-display="false"><code>\boldsymbol{x}^{\top}\boldsymbol{y}</code></span> | 内积 <span class="course-math" data-tex="\boldsymbol{x}^{\mathrm{H}}\boldsymbol{y}" data-display="false"><code>\boldsymbol{x}^{\mathrm{H}}\boldsymbol{y}</code></span> |
| 转置 <span class="course-math" data-tex="A^{\top}" data-display="false"><code>A^{\top}</code></span> | 共轭转置 <span class="course-math" data-tex="A^{\mathrm{H}}" data-display="false"><code>A^{\mathrm{H}}</code></span> |
| <span class="course-math" data-tex="(AB)^{\top} = B^{\top} A^{\top}" data-display="false"><code>(AB)^{\top} = B^{\top} A^{\top}</code></span> | <span class="course-math" data-tex="(AB)^{\mathrm{H}} = B^{\mathrm{H}} A^{\mathrm{H}}" data-display="false"><code>(AB)^{\mathrm{H}} = B^{\mathrm{H}} A^{\mathrm{H}}</code></span> |
| 对称 <span class="course-math" data-tex="A = A^{\top}" data-display="false"><code>A = A^{\top}</code></span> | Hermitian <span class="course-math" data-tex="A = A^{\mathrm{H}}" data-display="false"><code>A = A^{\mathrm{H}}</code></span> |
| 对称对角化 <span class="course-math" data-tex="A = Q\Lambda Q^{\top}" data-display="false"><code>A = Q\Lambda Q^{\top}</code></span> | Hermitian 对角化 <span class="course-math" data-tex="A = U\Lambda U^{\mathrm{H}}" data-display="false"><code>A = U\Lambda U^{\mathrm{H}}</code></span> |
| 正交 <span class="course-math" data-tex="Q^{\top} Q = I" data-display="false"><code>Q^{\top} Q = I</code></span> | 酉 <span class="course-math" data-tex="U^{\mathrm{H}} U = I" data-display="false"><code>U^{\mathrm{H}} U = I</code></span> |
| 斜对称 <span class="course-math" data-tex="A^{\top} = -A" data-display="false"><code>A^{\top} = -A</code></span> | 斜 Hermitian <span class="course-math" data-tex="A^{\mathrm{H}} = -A" data-display="false"><code>A^{\mathrm{H}} = -A</code></span> |


### 5.6 Similarity Transformations
{: #section-33 }


**相似矩阵：** <span class="course-math" data-tex="A \sim B" data-display="false"><code>A \sim B</code></span> 若 <span class="course-math" data-tex="\exists" data-display="false"><code>\exists</code></span> 可逆 <span class="course-math" data-tex="M" data-display="false"><code>M</code></span> 使得 <span class="course-math" data-tex="B = M^{-1}AM" data-display="false"><code>B = M^{-1}AM</code></span>

- 相似矩阵有相同的特征值：<span class="course-math" data-tex="\det(B - \lambda I) = \det(M^{-1}(A-\lambda I)M) = \det(A-\lambda I)" data-display="false"><code>\det(B - \lambda I) = \det(M^{-1}(A-\lambda I)M) = \det(A-\lambda I)</code></span>
- <span class="course-math" data-tex="A\boldsymbol{x} = \lambda\boldsymbol{x} \implies B(M^{-1}\boldsymbol{x}) = \lambda(M^{-1}\boldsymbol{x})" data-display="false"><code>A\boldsymbol{x} = \lambda\boldsymbol{x} \implies B(M^{-1}\boldsymbol{x}) = \lambda(M^{-1}\boldsymbol{x})</code></span>（特征向量通过 <span class="course-math" data-tex="M^{-1}" data-display="false"><code>M^{-1}</code></span> 变换）
- 几何意义：<span class="course-math" data-tex="A \sim B" data-display="false"><code>A \sim B</code></span> 表示同一线性变换在不同基下的矩阵表示。若 <span class="course-math" data-tex="W = V M" data-display="false"><code>W = V M</code></span>（<span class="course-math" data-tex="V, W" data-display="false"><code>V, W</code></span> 为两组基），则 <span class="course-math" data-tex="B = M^{-1} A M" data-display="false"><code>B = M^{-1} A M</code></span>

**Schur 引理：** 对任意复矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，存在酉矩阵 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 使得 <span class="course-math" data-tex="T = U^{-1}AU" data-display="false"><code>T = U^{-1}AU</code></span> 为上三角矩阵。

**谱定理（Spectral Theorem）——实对称矩阵：**
<span class="course-math course-math-display" data-tex="A = Q\Lambda Q^{\top}" data-display="true"><code>A = Q\Lambda Q^{\top}</code></span>

- <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>：正交矩阵（列为规范正交的特征向量）
- <span class="course-math" data-tex="\Lambda" data-display="false"><code>\Lambda</code></span>：实对角矩阵（特征值全为实数）

**谱分解：**
<span class="course-math course-math-display" data-tex="A = \sum_{i=1}^n \lambda_i \boldsymbol{q}_i \boldsymbol{q}_i^{\top}" data-display="true"><code>A = \sum_{i=1}^n \lambda_i \boldsymbol{q}_i \boldsymbol{q}_i^{\top}</code></span>

将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 写成一维投影矩阵的线性组合。

**谱定理——Hermitian 推广：** <span class="course-math" data-tex="A = U\Lambda U^{\mathrm{H}}" data-display="false"><code>A = U\Lambda U^{\mathrm{H}}</code></span>（<span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 为酉矩阵，<span class="course-math" data-tex="\Lambda" data-display="false"><code>\Lambda</code></span> 实对角）

**谱定理的证明思路：** Schur 引理给出 <span class="course-math" data-tex="A = U T U^{\mathrm{H}}" data-display="false"><code>A = U T U^{\mathrm{H}}</code></span>（<span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 上三角），由 <span class="course-math" data-tex="A^{\mathrm{H}} = A" data-display="false"><code>A^{\mathrm{H}} = A</code></span> 得 <span class="course-math" data-tex="T^{\mathrm{H}} = T" data-display="false"><code>T^{\mathrm{H}} = T</code></span>，故 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 为对角矩阵。

**谱分解定理（推广版）：** Hermitian 矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个互异特征值 <span class="course-math" data-tex="\lambda_1,\dots,\lambda_k" data-display="false"><code>\lambda_1,\dots,\lambda_k</code></span>，对应特征空间 <span class="course-math" data-tex="V_i" data-display="false"><code>V_i</code></span>：
<span class="course-math course-math-display" data-tex="A = \sum_{i=1}^k \lambda_i P_i" data-display="true"><code>A = \sum_{i=1}^k \lambda_i P_i</code></span>
其中 <span class="course-math" data-tex="P_i" data-display="false"><code>P_i</code></span> 是向 <span class="course-math" data-tex="V_i" data-display="false"><code>V_i</code></span> 的投影矩阵。

**正规矩阵（Normal Matrices）：** <span class="course-math" data-tex="A^{\mathrm{H}} A = A A^{\mathrm{H}}" data-display="false"><code>A^{\mathrm{H}} A = A A^{\mathrm{H}}</code></span>
- Hermitian、Skew-Hermitian、Unitary 都是正规矩阵
- **正规矩阵的谱定理：** <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可被酉矩阵对角化 <span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是正规矩阵
  - 证明思路：<span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> 方向显然。<span class="course-math" data-tex="\impliedby" data-display="false"><code>\impliedby</code></span> 方向用 Schur 引理得 <span class="course-math" data-tex="T = U^{\mathrm{H}} A U" data-display="false"><code>T = U^{\mathrm{H}} A U</code></span> 上三角，由 <span class="course-math" data-tex="TT^{\mathrm{H}} = T^{\mathrm{H}} T" data-display="false"><code>TT^{\mathrm{H}} = T^{\mathrm{H}} T</code></span> 推出 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 必为对角矩阵。
- 特征值特征总结：
  - Hermitian <span class="course-math" data-tex="A^{\mathrm{H}} = A" data-display="false"><code>A^{\mathrm{H}} = A</code></span> <span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> <span class="course-math" data-tex="\lambda = \bar{\lambda}" data-display="false"><code>\lambda = \bar{\lambda}</code></span>（实数）
  - Skew-Hermitian <span class="course-math" data-tex="A^{\mathrm{H}} = -A" data-display="false"><code>A^{\mathrm{H}} = -A</code></span> <span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> <span class="course-math" data-tex="\lambda = -\bar{\lambda}" data-display="false"><code>\lambda = -\bar{\lambda}</code></span>（纯虚数）
  - Unitary <span class="course-math" data-tex="A^{\mathrm{H}} A = I" data-display="false"><code>A^{\mathrm{H}} A = I</code></span> <span class="course-math" data-tex="\implies" data-display="false"><code>\implies</code></span> <span class="course-math" data-tex="\bar{\lambda}\lambda = \lvert \lambda\rvert ^2 = 1" data-display="false"><code>\bar{\lambda}\lambda = \lvert \lambda\rvert ^2 = 1</code></span>

---


## 6 Positive Definite Matrices
{: #section-34 }



### 6.1 Minima, Maxima, and Saddle Points
{: #section-35 }


**二元二次型 <span class="course-math" data-tex="f(x,y) = ax^2 + 2bxy + cy^2" data-display="false"><code>f(x,y) = ax^2 + 2bxy + cy^2</code></span>** 在原点处都是驻点。

矩阵表示：
<span class="course-math course-math-display" data-tex="\boldsymbol{x}^{\top} A \boldsymbol{x} = \begin{bmatrix} x &amp; y \end{bmatrix} \begin{bmatrix} a &amp; b \\ b &amp; c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}" data-display="true"><code>\boldsymbol{x}^{\top} A \boldsymbol{x} = \begin{bmatrix} x &amp; y \end{bmatrix} \begin{bmatrix} a &amp; b \\ b &amp; c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}</code></span>

| 条件 | 类型 | 图形 |
|------|------|------|
| <span class="course-math" data-tex="a&gt;0,\ ac&gt;b^2" data-display="false"><code>a&gt;0,\ ac&gt;b^2</code></span> | 正定（Positive Definite） | 开口向上的碗形 |
| <span class="course-math" data-tex="a&lt;0,\ ac&gt;b^2" data-display="false"><code>a&lt;0,\ ac&gt;b^2</code></span> | 负定（Negative Definite） | 开口向下的碗形 |
| <span class="course-math" data-tex="a\geq0,\ c\geq0,\ ac\geq b^2" data-display="false"><code>a\geq0,\ c\geq0,\ ac\geq b^2</code></span> | 半正定（Positive Semidefinite，包含正定） | 碗形；奇异且非零时为山谷；零二次型为平面 |
| <span class="course-math" data-tex="a\leq0,\ c\leq0,\ ac\geq b^2" data-display="false"><code>a\leq0,\ c\leq0,\ ac\geq b^2</code></span> | 半负定（Negative Semidefinite，包含负定） | 倒碗形；奇异且非零时为倒山谷；零二次型为平面 |
| <span class="course-math" data-tex="ac&lt;b^2" data-display="false"><code>ac&lt;b^2</code></span> | 不定（Indefinite） | 马鞍面，原点为鞍点 |

**<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元二次型：**
<span class="course-math course-math-display" data-tex="f(x_1,\dots,x_n) = \boldsymbol{x}^{\top} A \boldsymbol{x} = \sum_i \sum_j a_{ij} x_i x_j" data-display="true"><code>f(x_1,\dots,x_n) = \boldsymbol{x}^{\top} A \boldsymbol{x} = \sum_i \sum_j a_{ij} x_i x_j</code></span>

其中 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为实对称矩阵（二次型矩阵）。交叉项 <span class="course-math" data-tex="x_i x_j" data-display="false"><code>x_i x_j</code></span>（<span class="course-math" data-tex="i\neq j" data-display="false"><code>i\neq j</code></span>）的系数除以 <span class="course-math" data-tex="2" data-display="false"><code>2</code></span> 才是 <span class="course-math" data-tex="a_{ij} = a_{ji}" data-display="false"><code>a_{ij} = a_{ji}</code></span>。


### 6.2 Tests for Positive Definiteness
{: #section-36 }


**定义：** 对称矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 正定（<span class="course-math" data-tex="A &gt; 0" data-display="false"><code>A &gt; 0</code></span>）<span class="course-math" data-tex="\iff" data-display="false"><code>\iff</code></span> <span class="course-math" data-tex="\forall \boldsymbol{x} \neq \boldsymbol{0},\ \boldsymbol{x}^{\top} A \boldsymbol{x} &gt; 0" data-display="false"><code>\forall \boldsymbol{x} \neq \boldsymbol{0},\ \boldsymbol{x}^{\top} A \boldsymbol{x} &gt; 0</code></span>

**正定的等价条件（TFAE）：**
1. <span class="course-math" data-tex="\forall \boldsymbol{x} \neq \boldsymbol{0},\ \boldsymbol{x}^{\top} A \boldsymbol{x} &gt; 0" data-display="false"><code>\forall \boldsymbol{x} \neq \boldsymbol{0},\ \boldsymbol{x}^{\top} A \boldsymbol{x} &gt; 0</code></span>
2. 所有特征值 <span class="course-math" data-tex="\lambda_i &gt; 0" data-display="false"><code>\lambda_i &gt; 0</code></span>
3. 所有左上主子式 <span class="course-math" data-tex="\det(A_k) &gt; 0" data-display="false"><code>\det(A_k) &gt; 0</code></span>
4. 所有主元 <span class="course-math" data-tex="d_k &gt; 0" data-display="false"><code>d_k &gt; 0</code></span>
5. 存在可逆矩阵 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 使得 <span class="course-math" data-tex="A = R^{\top} R" data-display="false"><code>A = R^{\top} R</code></span>

**证明脉络：**
- **<span class="course-math" data-tex="1 \implies 2" data-display="false"><code>1 \implies 2</code></span>：** 将特征向量 <span class="course-math" data-tex="\boldsymbol{x}_i" data-display="false"><code>\boldsymbol{x}_i</code></span> 代入得 <span class="course-math" data-tex="\lambda_i \lVert \boldsymbol{x}_i\rVert ^2 &gt; 0 \implies \lambda_i &gt; 0" data-display="false"><code>\lambda_i \lVert \boldsymbol{x}_i\rVert ^2 &gt; 0 \implies \lambda_i &gt; 0</code></span>
- **<span class="course-math" data-tex="2 \implies 1" data-display="false"><code>2 \implies 1</code></span>：** 谱定理展开 <span class="course-math" data-tex="\boldsymbol{x} = \sum c_i \boldsymbol{x}_i" data-display="false"><code>\boldsymbol{x} = \sum c_i \boldsymbol{x}_i</code></span>，<span class="course-math" data-tex="\boldsymbol{x}^{\top} A\boldsymbol{x} = \sum \lambda_i c_i^2 &gt; 0" data-display="false"><code>\boldsymbol{x}^{\top} A\boldsymbol{x} = \sum \lambda_i c_i^2 &gt; 0</code></span>
- **<span class="course-math" data-tex="2 \implies 3" data-display="false"><code>2 \implies 3</code></span>：** <span class="course-math" data-tex="\det(A) = \prod \lambda_i &gt; 0" data-display="false"><code>\det(A) = \prod \lambda_i &gt; 0</code></span>。前 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 维子空间限制也为正定，故 <span class="course-math" data-tex="\det(A_k) &gt; 0" data-display="false"><code>\det(A_k) &gt; 0</code></span>
- **<span class="course-math" data-tex="3 \implies 4" data-display="false"><code>3 \implies 4</code></span>：** <span class="course-math" data-tex="d_k = \det(A_k) / \det(A_{k-1}) &gt; 0" data-display="false"><code>d_k = \det(A_k) / \det(A_{k-1}) &gt; 0</code></span>
- **<span class="course-math" data-tex="4 \implies 1" data-display="false"><code>4 \implies 1</code></span>：** <span class="course-math" data-tex="A = LDU = LDL^{\top}" data-display="false"><code>A = LDU = LDL^{\top}</code></span>（对称性 <span class="course-math" data-tex="\implies U = L^{\top}" data-display="false"><code>\implies U = L^{\top}</code></span>），令 <span class="course-math" data-tex="\boldsymbol{y} = L^{\top}\boldsymbol{x} \neq \boldsymbol{0}" data-display="false"><code>\boldsymbol{y} = L^{\top}\boldsymbol{x} \neq \boldsymbol{0}</code></span>，则 <span class="course-math" data-tex="\boldsymbol{x}^{\top} A\boldsymbol{x} = \boldsymbol{y}^{\top} D\boldsymbol{y} = \sum d_i y_i^2 &gt; 0" data-display="false"><code>\boldsymbol{x}^{\top} A\boldsymbol{x} = \boldsymbol{y}^{\top} D\boldsymbol{y} = \sum d_i y_i^2 &gt; 0</code></span>
- **<span class="course-math" data-tex="5 \implies 1" data-display="false"><code>5 \implies 1</code></span>：** <span class="course-math" data-tex="\boldsymbol{x}^{\top} A\boldsymbol{x} = \lVert R\boldsymbol{x}\rVert ^2 &gt; 0" data-display="false"><code>\boldsymbol{x}^{\top} A\boldsymbol{x} = \lVert R\boldsymbol{x}\rVert ^2 &gt; 0</code></span>（<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 可逆 <span class="course-math" data-tex="\implies R\boldsymbol{x} \neq \boldsymbol{0}" data-display="false"><code>\implies R\boldsymbol{x} \neq \boldsymbol{0}</code></span>）
- **<span class="course-math" data-tex="1 \implies 5" data-display="false"><code>1 \implies 5</code></span>（三种构造方式）：**
  - Cholesky：<span class="course-math" data-tex="A = LDL^{\top} = (L\sqrt{D})(\sqrt{D}L^{\top}) = R^{\top} R" data-display="false"><code>A = LDL^{\top} = (L\sqrt{D})(\sqrt{D}L^{\top}) = R^{\top} R</code></span>，取 <span class="course-math" data-tex="R = \sqrt{D}L^{\top}" data-display="false"><code>R = \sqrt{D}L^{\top}</code></span>
  - 特征分解：<span class="course-math" data-tex="A = Q\Lambda Q^{\top} = (Q\sqrt{\Lambda})(\sqrt{\Lambda}Q^{\top}) = R^{\top} R" data-display="false"><code>A = Q\Lambda Q^{\top} = (Q\sqrt{\Lambda})(\sqrt{\Lambda}Q^{\top}) = R^{\top} R</code></span>，取 <span class="course-math" data-tex="R = \sqrt{\Lambda}Q^{\top}" data-display="false"><code>R = \sqrt{\Lambda}Q^{\top}</code></span>
  - 对称平方根：<span class="course-math" data-tex="A = Q\Lambda Q^{\top} = (Q\sqrt{\Lambda}Q^{\top})^2" data-display="false"><code>A = Q\Lambda Q^{\top} = (Q\sqrt{\Lambda}Q^{\top})^2</code></span>，取 <span class="course-math" data-tex="R = \sqrt{A} = Q\sqrt{\Lambda}Q^{\top} &gt; 0" data-display="false"><code>R = \sqrt{A} = Q\sqrt{\Lambda}Q^{\top} &gt; 0</code></span>

> <span class="course-math" data-tex="R^{\top} R" data-display="false"><code>R^{\top} R</code></span> 分解不唯一：若 <span class="course-math" data-tex="A = R^{\top} R" data-display="false"><code>A = R^{\top} R</code></span>，则 <span class="course-math" data-tex="\forall" data-display="false"><code>\forall</code></span> 正交 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>，<span class="course-math" data-tex="(QR)^{\top}(QR) = R^{\top} R = A" data-display="false"><code>(QR)^{\top}(QR) = R^{\top} R = A</code></span>

**配方与高斯消元的对应：** <span class="course-math" data-tex="A = LDU" data-display="false"><code>A = LDU</code></span> 时，<span class="course-math" data-tex="\boldsymbol{x}^{\top} A\boldsymbol{x} = \sum d_i y_i^2" data-display="false"><code>\boldsymbol{x}^{\top} A\boldsymbol{x} = \sum d_i y_i^2</code></span>（<span class="course-math" data-tex="\boldsymbol{y} = L^{\top}\boldsymbol{x}" data-display="false"><code>\boldsymbol{y} = L^{\top}\boldsymbol{x}</code></span>），<span class="course-math" data-tex="d_i" data-display="false"><code>d_i</code></span> 即第 <span class="course-math" data-tex="i" data-display="false"><code>i</code></span> 个主元，这恰好是配方过程。

**半正定（Positive Semidefinite, <span class="course-math" data-tex="A \geq 0" data-display="false"><code>A \geq 0</code></span>）：** <span class="course-math" data-tex="\forall \boldsymbol{x},\ \boldsymbol{x}^{\top} A\boldsymbol{x} \geq 0" data-display="false"><code>\forall \boldsymbol{x},\ \boldsymbol{x}^{\top} A\boldsymbol{x} \geq 0</code></span>

**等价条件（TFAE）：**
- <span class="course-math" data-tex="A \geq 0" data-display="false"><code>A \geq 0</code></span>
- 所有特征值 <span class="course-math" data-tex="\lambda_i \geq 0" data-display="false"><code>\lambda_i \geq 0</code></span>
- 所有主矩阵（Principal Matrices）无负特征值
- 所有主子式 <span class="course-math" data-tex="\det(A_I)\geq 0" data-display="false"><code>\det(A_I)\geq 0</code></span>（包括非顺序主子式）
- 存在矩阵 <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 使得 <span class="course-math" data-tex="A = R^{\top} R" data-display="false"><code>A = R^{\top} R</code></span>（<span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 未必可逆）

> 技巧：<span class="course-math" data-tex="A \geq 0 \iff A + \varepsilon I &gt; 0,\ \forall \varepsilon &gt; 0" data-display="false"><code>A \geq 0 \iff A + \varepsilon I &gt; 0,\ \forall \varepsilon &gt; 0</code></span>（充分小），取极限即得半正定性质。

**负定：** <span class="course-math" data-tex="A &lt; 0" data-display="false"><code>A &lt; 0</code></span> 若 <span class="course-math" data-tex="-A &gt; 0" data-display="false"><code>-A &gt; 0</code></span>。等价于对所有非零 <span class="course-math" data-tex="\boldsymbol{x}" data-display="false"><code>\boldsymbol{x}</code></span> 都有 <span class="course-math" data-tex="\boldsymbol{x}^{\top} A \boldsymbol{x} &lt; 0" data-display="false"><code>\boldsymbol{x}^{\top} A \boldsymbol{x} &lt; 0</code></span>。


### 6.3 Singular Value Decomposition
{: #section-37 }


**定理：** 任意 <span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 矩阵 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可分解为
<span class="course-math course-math-display" data-tex="A = U\Sigma V^{\top}" data-display="true"><code>A = U\Sigma V^{\top}</code></span>

- <span class="course-math" data-tex="U" data-display="false"><code>U</code></span>：<span class="course-math" data-tex="m\times m" data-display="false"><code>m\times m</code></span> 正交矩阵（<span class="course-math" data-tex="AA^{\top}" data-display="false"><code>AA^{\top}</code></span> 的特征向量）
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>：<span class="course-math" data-tex="n\times n" data-display="false"><code>n\times n</code></span> 正交矩阵（<span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 的特征向量）
- <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span>：<span class="course-math" data-tex="m\times n" data-display="false"><code>m\times n</code></span> 对角矩阵

  <span class="course-math course-math-display" data-tex="\begin{bmatrix} \Sigma_1 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}" data-display="true"><code>\begin{bmatrix} \Sigma_1 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}</code></span>

  ，其中 <span class="course-math" data-tex="\Sigma_1 = \operatorname{diag}(\sigma_1,\dots,\sigma_r)" data-display="false"><code>\Sigma_1 = \operatorname{diag}(\sigma_1,\dots,\sigma_r)</code></span>
- <span class="course-math" data-tex="\sigma_i" data-display="false"><code>\sigma_i</code></span>：**奇异值（Singular Values）**，<span class="course-math" data-tex="\sigma_i = \sqrt{\lambda_i}" data-display="false"><code>\sigma_i = \sqrt{\lambda_i}</code></span>，<span class="course-math" data-tex="\lambda_i" data-display="false"><code>\lambda_i</code></span> 为 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span>（或 <span class="course-math" data-tex="AA^{\top}" data-display="false"><code>AA^{\top}</code></span>）的非零特征值（<span class="course-math" data-tex="i=1,\dots,r=\operatorname{rank}(A)" data-display="false"><code>i=1,\dots,r=\operatorname{rank}(A)</code></span>）

> <span class="course-math" data-tex="AA^{\top}" data-display="false"><code>AA^{\top}</code></span> 和 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 都是半正定矩阵，非零特征值相同。

**验证 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 的非零特征值即 <span class="course-math" data-tex="\sigma_i^2" data-display="false"><code>\sigma_i^2</code></span>：**
<span class="course-math course-math-display" data-tex="A^{\top}A = V\Sigma^{\top} U^{\top} U\Sigma V^{\top} = V(\Sigma^{\top}\Sigma)V^{\top} = V\begin{bmatrix} \Sigma_1^2 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}V^{\top}" data-display="true"><code>A^{\top}A = V\Sigma^{\top} U^{\top} U\Sigma V^{\top} = V(\Sigma^{\top}\Sigma)V^{\top} = V\begin{bmatrix} \Sigma_1^2 &amp; 0 \\ 0 &amp; 0 \end{bmatrix}V^{\top}</code></span>

**核心关系：** <span class="course-math" data-tex="A\boldsymbol{v}_j = \sigma_j \boldsymbol{u}_j" data-display="false"><code>A\boldsymbol{v}_j = \sigma_j \boldsymbol{u}_j</code></span>（<span class="course-math" data-tex="j=1,\dots,r" data-display="false"><code>j=1,\dots,r</code></span>）

**子空间对应：**
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 列 = <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span> 的标准正交基（行空间）
- <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的后 <span class="course-math" data-tex="n-r" data-display="false"><code>n-r</code></span> 列 = <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 的标准正交基（零空间）
- <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 的前 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span> 列 = <span class="course-math" data-tex="C(A)" data-display="false"><code>C(A)</code></span> 的标准正交基（列空间）
- <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 的后 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 列 = <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span> 的标准正交基（左零空间）

**SVD 的构造方法：**
1. 求 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 的特征值 <span class="course-math" data-tex="\lambda_1 \geq \cdots \geq \lambda_r &gt; 0" data-display="false"><code>\lambda_1 \geq \cdots \geq \lambda_r &gt; 0</code></span> 和 <span class="course-math" data-tex="\lambda_{r+1} = \cdots = \lambda_n = 0" data-display="false"><code>\lambda_{r+1} = \cdots = \lambda_n = 0</code></span>
2. <span class="course-math" data-tex="\sigma_i = \sqrt{\lambda_i}" data-display="false"><code>\sigma_i = \sqrt{\lambda_i}</code></span>
3. <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 由 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 的规范正交特征向量构成
4. 对 <span class="course-math" data-tex="j=1,\dots,r" data-display="false"><code>j=1,\dots,r</code></span>：<span class="course-math" data-tex="\boldsymbol{u}_j = A\boldsymbol{v}_j / \sigma_j" data-display="false"><code>\boldsymbol{u}_j = A\boldsymbol{v}_j / \sigma_j</code></span>（自动为 <span class="course-math" data-tex="AA^{\top}" data-display="false"><code>AA^{\top}</code></span> 的单位特征向量）
5. 补全 <span class="course-math" data-tex="U" data-display="false"><code>U</code></span> 的剩余 <span class="course-math" data-tex="m-r" data-display="false"><code>m-r</code></span> 列：求 <span class="course-math" data-tex="N(A^{\top})" data-display="false"><code>N(A^{\top})</code></span> 的标准正交基（即 <span class="course-math" data-tex="AA^{\top}" data-display="false"><code>AA^{\top}</code></span> 零特征值的特征向量）

> 存在性证明：<span class="course-math" data-tex="\boldsymbol{v}_j" data-display="false"><code>\boldsymbol{v}_j</code></span> 为 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 的单位特征向量，则 <span class="course-math" data-tex="\lVert A\boldsymbol{v}_j\rVert ^2 = \boldsymbol{v}_j^{\top} A^{\top} A \boldsymbol{v}_j = \sigma_j^2" data-display="false"><code>\lVert A\boldsymbol{v}_j\rVert ^2 = \boldsymbol{v}_j^{\top} A^{\top} A \boldsymbol{v}_j = \sigma_j^2</code></span>，故 <span class="course-math" data-tex="A\boldsymbol{v}_j / \sigma_j" data-display="false"><code>A\boldsymbol{v}_j / \sigma_j</code></span> 是 <span class="course-math" data-tex="AA^{\top}" data-display="false"><code>AA^{\top}</code></span> 的单位特征向量。

**SVD 的应用：**

**极分解（Polar Decomposition）：** 任意实方阵 <span class="course-math" data-tex="A = QS" data-display="false"><code>A = QS</code></span>
<span class="course-math course-math-display" data-tex="A = U\Sigma V^{\top} = (UV^{\top})(V\Sigma V^{\top}) = QS" data-display="true"><code>A = U\Sigma V^{\top} = (UV^{\top})(V\Sigma V^{\top}) = QS</code></span>
- <span class="course-math" data-tex="Q = UV^{\top}" data-display="false"><code>Q = UV^{\top}</code></span>：正交矩阵
- <span class="course-math" data-tex="S = V\Sigma V^{\top}" data-display="false"><code>S = V\Sigma V^{\top}</code></span>：对称半正定矩阵
- 类比：<span class="course-math" data-tex="z = re^{i\theta}" data-display="false"><code>z = re^{i\theta}</code></span>，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 类似于模长 <span class="course-math" data-tex="r" data-display="false"><code>r</code></span>，<span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 类似于 <span class="course-math" data-tex="e^{i\theta}" data-display="false"><code>e^{i\theta}</code></span>

**可逆方阵分解：** <span class="course-math" data-tex="A = Q_1 S Q_2^{-1}" data-display="false"><code>A = Q_1 S Q_2^{-1}</code></span>（<span class="course-math" data-tex="Q_1, Q_2" data-display="false"><code>Q_1, Q_2</code></span> 正交，<span class="course-math" data-tex="S" data-display="false"><code>S</code></span> 正定对角），可由 SVD 或直接构造 <span class="course-math" data-tex="A^{\top}A" data-display="false"><code>A^{\top}A</code></span> 的特征分解得。

**伪逆（Pseudoinverse / Moore-Penrose Inverse）：**
<span class="course-math course-math-display" data-tex="A^+ = V\Sigma^+ U^{\top}" data-display="true"><code>A^+ = V\Sigma^+ U^{\top}</code></span>

其中

<span class="course-math course-math-display" data-tex="\Sigma^+ = \begin{bmatrix} \Sigma_1^{-1} &amp; 0 \\ 0 &amp; 0 \end{bmatrix}" data-display="true"><code>\Sigma^+ = \begin{bmatrix} \Sigma_1^{-1} &amp; 0 \\ 0 &amp; 0 \end{bmatrix}</code></span>

，即把每个 <span class="course-math" data-tex="\sigma_i" data-display="false"><code>\sigma_i</code></span> 替换为 <span class="course-math" data-tex="1/\sigma_i" data-display="false"><code>1/\sigma_i</code></span>。

**最小二乘的最优解（<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 非列满秩时）：** 长度最小的最小二乘解
<span class="course-math course-math-display" data-tex="\boldsymbol{x}^+ = A^+\boldsymbol{b} = V\Sigma^+ U^{\top} \boldsymbol{b}" data-display="true"><code>\boldsymbol{x}^+ = A^+\boldsymbol{b} = V\Sigma^+ U^{\top} \boldsymbol{b}</code></span>

最优解落在 <span class="course-math" data-tex="C(A^{\top})" data-display="false"><code>C(A^{\top})</code></span>（行空间）中：<span class="course-math" data-tex="\hat{\boldsymbol{x}} = \boldsymbol{x}_r + \boldsymbol{x}_n" data-display="false"><code>\hat{\boldsymbol{x}} = \boldsymbol{x}_r + \boldsymbol{x}_n</code></span>，零空间分量与行空间分量正交，令 <span class="course-math" data-tex="\boldsymbol{x}_n = \boldsymbol{0}" data-display="false"><code>\boldsymbol{x}_n = \boldsymbol{0}</code></span> 即最小化长度。

**图片压缩（Image Compression）：** 取前 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 个最大奇异值近似 <span class="course-math" data-tex="A \approx \sum_{i=1}^{k} \sigma_i \boldsymbol{u}_i \boldsymbol{v}_i^{\top}" data-display="false"><code>A \approx \sum_{i=1}^{k} \sigma_i \boldsymbol{u}_i \boldsymbol{v}_i^{\top}</code></span>，存储量 <span class="course-math" data-tex="k(m+n+1)" data-display="false"><code>k(m+n+1)</code></span>，压缩比 <span class="course-math" data-tex="\frac{mn}{k(m+n+1)}" data-display="false"><code>\frac{mn}{k(m+n+1)}</code></span>

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


<span class="course-math" data-tex="B = C^{\top} A C" data-display="false"><code>B = C^{\top} A C</code></span>（<span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 可逆），称 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 与 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 合同。
- 对称矩阵的合同矩阵仍对称
- <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 的合同矩阵 <span class="course-math" data-tex="C^{\top} C" data-display="false"><code>C^{\top} C</code></span> 必为正定

**塞维斯特惯性定律（Sylvester's Law of Inertia）：**
- 合同矩阵与 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 有相同数量的正特征值、负特征值和零特征值
- <span class="course-math" data-tex="p" data-display="false"><code>p</code></span>：正惯性指数（正特征值个数）；<span class="course-math" data-tex="q" data-display="false"><code>q</code></span>：负惯性指数（负特征值个数）
- <span class="course-math" data-tex="r = p+q = \operatorname{rank}(A)" data-display="false"><code>r = p+q = \operatorname{rank}(A)</code></span>；<span class="course-math" data-tex="p-q" data-display="false"><code>p-q</code></span> = 符号差（Signature）

**规范型定理：** 存在变量替换 <span class="course-math" data-tex="\boldsymbol{x} = C\boldsymbol{y}" data-display="false"><code>\boldsymbol{x} = C\boldsymbol{y}</code></span>，使 <span class="course-math" data-tex="f(\boldsymbol{x}) = \boldsymbol{x}^{\top} A\boldsymbol{x}" data-display="false"><code>f(\boldsymbol{x}) = \boldsymbol{x}^{\top} A\boldsymbol{x}</code></span> 化为：
<span class="course-math course-math-display" data-tex="f = y_1^2 + \cdots + y_p^2 - y_{p+1}^2 - \cdots - y_r^2" data-display="true"><code>f = y_1^2 + \cdots + y_p^2 - y_{p+1}^2 - \cdots - y_r^2</code></span>

该规范型由 <span class="course-math" data-tex="f" data-display="false"><code>f</code></span> 唯一决定。

**拉格朗日配方法：**
- 有平方项 <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> 直接配方，迭代
- 无平方项但有交叉项（如 <span class="course-math" data-tex="x_1 x_2" data-display="false"><code>x_1 x_2</code></span>）<span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> 令 <span class="course-math" data-tex="x_1 = y_1+y_2,\ x_2 = y_1-y_2" data-display="false"><code>x_1 = y_1+y_2,\ x_2 = y_1-y_2</code></span>，创造平方差


### 二次超曲面（Quadric Surface）
{: #section-42 }


方程：<span class="course-math" data-tex="\boldsymbol{x}^{\top} A\boldsymbol{x} = 1" data-display="false"><code>\boldsymbol{x}^{\top} A\boldsymbol{x} = 1</code></span>（<span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 对称）

作正交变换 <span class="course-math" data-tex="\boldsymbol{x} = Q\boldsymbol{y}" data-display="false"><code>\boldsymbol{x} = Q\boldsymbol{y}</code></span>，由谱定理 <span class="course-math" data-tex="Q^{\top} A Q = \Lambda" data-display="false"><code>Q^{\top} A Q = \Lambda</code></span>：
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
