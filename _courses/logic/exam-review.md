---
title: "Exam Review - 考试复习"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
created_at: "2026-06-08T20:15:52+08:00"
updated_at: "2026-10-09T17:01:15+08:00"
reference: false
order: 6
layout: "course"
permalink: "/courses/logic/exam-review/"
course_page: true
doc_type: "note"
description: "数理逻辑导论 · Exam Review - 考试复习"
excerpt: "数理逻辑导论 · Exam Review - 考试复习"
---

{% raw %}


> **考试范围**：命题逻辑 (PL) + 一阶逻辑 (FOL) 的语法、语义、形式化证明系统。
> **不考**：预备知识、可靠性与完备性的*证明*、霍尔逻辑。

---


## 目录
{: #section-1 }


1. [命题逻辑 — 语法](#section-2)
2. [命题逻辑 — 语义](#section-7)
3. [命题逻辑 — 形式证明系统](#section-14)
   - 3.1 Hilbert-style System
   - 3.2 Natural Deduction (ND)
   - 3.3 Resolution
4. [一阶逻辑 — 语法](#section-23)
5. [一阶逻辑 — 语义](#section-31)
6. [一阶逻辑 — ND 证明](#section-38)

---


## 1. 命题逻辑 — 语法
{: #section-2 }



### 核心概念
{: #section-3 }


| 概念 | 说明 |
|------|------|
| **字母表 (Alphabet)** | 原子命题 <span class="course-math" data-tex="p,q,r,\dots" data-display="false"><code>p,q,r,\dots</code></span>；连接词 <span class="course-math" data-tex="\neg,\land,\lor,\to,\leftrightarrow" data-display="false"><code>\neg,\land,\lor,\to,\leftrightarrow</code></span>；标点 <span class="course-math" data-tex="(,)" data-display="false"><code>(,)</code></span> |
| **良构公式 (wff)** | 归纳定义：atom 是 wff；若 <span class="course-math" data-tex="\alpha,\beta" data-display="false"><code>\alpha,\beta</code></span> 是 wff，则 <span class="course-math" data-tex="(\neg\alpha), (\alpha\land\beta), (\alpha\lor\beta), (\alpha\to\beta), (\alpha\leftrightarrow\beta)" data-display="false"><code>(\neg\alpha), (\alpha\land\beta), (\alpha\lor\beta), (\alpha\to\beta), (\alpha\leftrightarrow\beta)</code></span> 也是 wff |
| **解析树 (Parse Tree)** | 展示公式构造过程的树，叶节点 = atom，内部节点 = 主连接词 |
| **主连接词 (Leading Connective)** | 解析树根节点的连接词 |
| **子公式 (Subformula)** | 解析树中任意节点对应的公式 |


### WFF 的性质
{: #section-4 }


- **括号性质**：WFF 的任意**真前缀**中，左括号严格多于右括号；任意**真后缀**中，右括号严格多于左括号
- 因此，真前缀和真后缀都**不是** WFF
- **唯一可读性定理 (Unique Readability)**：每个 WFF 有唯一的构造方式

> 判定是 WFF → 用构造规则（解析树）；判定不是 WFF → 可用括号性质。


### 惯例 (Convention)
{: #section-5 }


- 优先级从高到低：<span class="course-math" data-tex="(), \neg, \land, \lor, \to, \leftrightarrow" data-display="false"><code>(), \neg, \land, \lor, \to, \leftrightarrow</code></span>
- 结合性：<span class="course-math" data-tex="\land, \lor, \leftrightarrow" data-display="false"><code>\land, \lor, \leftrightarrow</code></span> 左结合；<span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> **右结合**
- <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 和 <span class="course-math" data-tex="(F)" data-display="false"><code>(F)</code></span> 视为相同

---


### 例题：Assignment 2
{: #section-6 }


**A2.1** 判断哪些是 wff（按形式定义，不考虑惯例）。

答案：**2, 3, 5, 9, 10**

| # | 表达式 | 判定 | 理由 |
|---|--------|------|------|
| 1 | <span class="course-math" data-tex="\lor pq" data-display="false"><code>\lor pq</code></span> | ❌ | 连接词位置错误（前缀记法不是 wff） |
| 2 | <span class="course-math" data-tex="(p \leftrightarrow (\neg q))" data-display="false"><code>(p \leftrightarrow (\neg q))</code></span> | ✅ | 按构造规则合法 |
| 3 | <span class="course-math" data-tex="(\neg(p \to (q \land p)))" data-display="false"><code>(\neg(p \to (q \land p)))</code></span> | ✅ | 按构造规则合法 |
| 4 | <span class="course-math" data-tex="(p \lor q \land r)" data-display="false"><code>(p \lor q \land r)</code></span> | ❌ | 缺少括号（按形式定义 <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 和 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> 不能并列） |
| 5 | <span class="course-math" data-tex="((p \land (\neg q)) \lor (q \to r))" data-display="false"><code>((p \land (\neg q)) \lor (q \to r))</code></span> | ✅ | 按构造规则合法 |
| 6 | <span class="course-math" data-tex="p \neg r" data-display="false"><code>p \neg r</code></span> | ❌ | <span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span> 不能放在 atom 后面 |
| 7 | <span class="course-math" data-tex="()" data-display="false"><code>()</code></span> | ❌ | 空括号不是公式 |
| 8 | <span class="course-math" data-tex="(p)" data-display="false"><code>(p)</code></span> | ❌ | atom 外不能单独加括号（括号只在连接词引入时出现） |
| 9 | <span class="course-math" data-tex="q" data-display="false"><code>q</code></span> | ✅ | atom 是 wff |
| 10 | <span class="course-math" data-tex="(\neg(\neg p))" data-display="false"><code>(\neg(\neg p))</code></span> | ✅ | 按构造规则合法 |

**A2.2** 为以下公式构建简化解析树（标出主连接词）：

- <span class="course-math" data-tex="\neg p \land q \to r" data-display="false"><code>\neg p \land q \to r</code></span> → 主连接词 <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span>，左子树主连接词 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span>（<span class="course-math" data-tex="\neg p \land q" data-display="false"><code>\neg p \land q</code></span>）
- <span class="course-math" data-tex="p \lor q \to \neg p \land r" data-display="false"><code>p \lor q \to \neg p \land r</code></span> → 主连接词 <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span>
- <span class="course-math" data-tex="(p \to q) \land \neg(r \lor p \to q)" data-display="false"><code>(p \to q) \land \neg(r \lor p \to q)</code></span> → 主连接词 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span>
- <span class="course-math" data-tex="(\neg((\neg(p \land q)) \lor (\neg r)))" data-display="false"><code>(\neg((\neg(p \land q)) \lor (\neg r)))</code></span> → 主连接词 <span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span>（最外层）

**A2.3** 归纳证明 <span class="course-math" data-tex="s = c + 1" data-display="false"><code>s = c + 1</code></span>（<span class="course-math" data-tex="s" data-display="false"><code>s</code></span> = atom 出现次数，<span class="course-math" data-tex="c" data-display="false"><code>c</code></span> = 二元连接词出现次数）。

- **Base**: <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 为 atom，<span class="course-math" data-tex="c=0, s=1" data-display="false"><code>c=0, s=1</code></span>，<span class="course-math" data-tex="1 = 0+1" data-display="false"><code>1 = 0+1</code></span> ✓
- **I.H.**: 对 <span class="course-math" data-tex="\alpha, \beta" data-display="false"><code>\alpha, \beta</code></span> 成立，即 <span class="course-math" data-tex="s_\alpha = c_\alpha+1" data-display="false"><code>s_\alpha = c_\alpha+1</code></span>, <span class="course-math" data-tex="s_\beta = c_\beta+1" data-display="false"><code>s_\beta = c_\beta+1</code></span>
- **Inductive Step**:
  - <span class="course-math" data-tex="\neg\alpha" data-display="false"><code>\neg\alpha</code></span>: <span class="course-math" data-tex="s&#x27; = s_\alpha" data-display="false"><code>s&#x27; = s_\alpha</code></span>, <span class="course-math" data-tex="c&#x27; = c_\alpha" data-display="false"><code>c&#x27; = c_\alpha</code></span>，故 <span class="course-math" data-tex="s&#x27; = c&#x27;+1" data-display="false"><code>s&#x27; = c&#x27;+1</code></span> ✓
  - <span class="course-math" data-tex="\alpha * \beta" data-display="false"><code>\alpha * \beta</code></span>（<span class="course-math" data-tex="*" data-display="false"><code>*</code></span> 为二元连接词）: <span class="course-math" data-tex="s&#x27; = s_\alpha + s_\beta" data-display="false"><code>s&#x27; = s_\alpha + s_\beta</code></span>, <span class="course-math" data-tex="c&#x27; = c_\alpha + c_\beta + 1" data-display="false"><code>c&#x27; = c_\alpha + c_\beta + 1</code></span>
    - <span class="course-math" data-tex="s&#x27; = (c_\alpha+1)+(c_\beta+1) = (c_\alpha+c_\beta+1)+1 = c&#x27;+1" data-display="false"><code>s&#x27; = (c_\alpha+1)+(c_\beta+1) = (c_\alpha+c_\beta+1)+1 = c&#x27;+1</code></span> ✓

**A2.4** 自然语言 → PL 形式化：

| 自然语言 | 关键点 | 公式 |
|----------|--------|------|
| I will eat a fruit **if** it is an apple | "if" = 前置条件 | <span class="course-math" data-tex="A \to E" data-display="false"><code>A \to E</code></span> |
| I will eat a fruit **only if** it is an apple | "only if" = 必要条件 | <span class="course-math" data-tex="E \to A" data-display="false"><code>E \to A</code></span> |
| I will eat an apple or an orange **but not both** | XOR | <span class="course-math" data-tex="(A \lor O) \land \neg(A \land O)" data-display="false"><code>(A \lor O) \land \neg(A \land O)</code></span> |
| **If** I ace CS, I will apply; **otherwise** I will take another course | if-else 分支 | <span class="course-math" data-tex="(A \to R) \land (\neg A \to C)" data-display="false"><code>(A \to R) \land (\neg A \to C)</code></span> |
| I will carry an umbrella **unless** it is sunny | unless = XOR（按题目要求） | <span class="course-math" data-tex="(U \lor S) \land \neg(U \land S)" data-display="false"><code>(U \lor S) \land \neg(U \land S)</code></span> |

**A2.5** MU 谜题（归纳定义的字符串集合 P）：
- 证明 <span class="course-math" data-tex="MUUIU \in P" data-display="false"><code>MUUIU \in P</code></span>：给出构造序列即可（从 MI 出发，反复应用 P1-P4）
- 证明 <span class="course-math" data-tex="MU \notin P" data-display="false"><code>MU \notin P</code></span>：找到 P 中字符串的**不变性质**——设 <span class="course-math" data-tex="c_s" data-display="false"><code>c_s</code></span> 为 I 的数量，则 <span class="course-math" data-tex="c_s \bmod 3 \neq 0" data-display="false"><code>c_s \bmod 3 \neq 0</code></span>。M 和 U 不贡献 I，故对 <span class="course-math" data-tex="MU" data-display="false"><code>MU</code></span>，<span class="course-math" data-tex="c_s = 0" data-display="false"><code>c_s = 0</code></span>，<span class="course-math" data-tex="0 \bmod 3 = 0" data-display="false"><code>0 \bmod 3 = 0</code></span>，不在 P 中。证明该性质对所有 P 中字符串成立需要对构造规则归纳。

---


## 2. 命题逻辑 — 语义
{: #section-7 }



### 核心概念
{: #section-8 }


**真值赋值 (Truth Valuation)**：<span class="course-math" data-tex="v: \text{Atom}(\mathscr{L}^P) \to \{0,1\}" data-display="false"><code>v: \text{Atom}(\mathscr{L}^P) \to \{0,1\}</code></span>

| 分类 | 定义 | 简记 |
|------|------|------|
| **永真式 (Tautology)** | <span class="course-math" data-tex="\forall v, A^v = 1" data-display="false"><code>\forall v, A^v = 1</code></span> | <span class="course-math" data-tex="\vDash A" data-display="false"><code>\vDash A</code></span> |
| **永假式 (Contradiction)** | <span class="course-math" data-tex="\forall v, A^v = 0" data-display="false"><code>\forall v, A^v = 0</code></span> | — |
| **可满足的 (Satisfiable)** | <span class="course-math" data-tex="\exists v, A^v = 1" data-display="false"><code>\exists v, A^v = 1</code></span> | — |

**逻辑等价**：<span class="course-math" data-tex="A \equiv B" data-display="false"><code>A \equiv B</code></span> 当且仅当 <span class="course-math" data-tex="A \leftrightarrow B" data-display="false"><code>A \leftrightarrow B</code></span> 是永真式。

**语义蕴含 (Entailment)**：<span class="course-math" data-tex="\Sigma \vDash \alpha" data-display="false"><code>\Sigma \vDash \alpha</code></span> 当且仅当 <span class="course-math" data-tex="\forall v" data-display="false"><code>\forall v</code></span>，若 <span class="course-math" data-tex="\Sigma^v = 1" data-display="false"><code>\Sigma^v = 1</code></span> 则 <span class="course-math" data-tex="\alpha^v = 1" data-display="false"><code>\alpha^v = 1</code></span>。
- <span class="course-math" data-tex="\varnothing \vDash A" data-display="false"><code>\varnothing \vDash A</code></span> ⟺ <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是永真式
- <span class="course-math" data-tex="A \vDash B" data-display="false"><code>A \vDash B</code></span> ⟺ <span class="course-math" data-tex="A \to B" data-display="false"><code>A \to B</code></span> 是永真式


### 判定方法
{: #section-9 }


| 方法 | 适用场景 |
|------|----------|
| 真值表 (Truth Table) | 通用，<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个 atom 需要 <span class="course-math" data-tex="2^n" data-display="false"><code>2^n</code></span> 行 |
| 赋值树 (Valuation Tree) | 比真值表更紧凑，逐步分支 |
| 反证法 | 假设存在 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 使 <span class="course-math" data-tex="\Sigma^v=1" data-display="false"><code>\Sigma^v=1</code></span> 且 <span class="course-math" data-tex="\alpha^v=0" data-display="false"><code>\alpha^v=0</code></span>，导出矛盾 |

- **证明蕴含**：真值表中 <span class="course-math" data-tex="\Sigma^v=1" data-display="false"><code>\Sigma^v=1</code></span> 的每一行都有 <span class="course-math" data-tex="\alpha^v=1" data-display="false"><code>\alpha^v=1</code></span>；或反证法
- **证明不蕴含**：找到一个反例赋值即可


### 完备集 (Adequate Set)
{: #section-10 }


- <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元布尔函数共有 <span class="course-math" data-tex="2^{2^n}" data-display="false"><code>2^{2^n}</code></span> 种
- **完备集**：所有 wff 都能只用该集合中的连接词等价表示
- 已知完备集：<span class="course-math" data-tex="\{\neg, \land\}, \{\neg, \lor\}, \{\neg, \to\}, \{\downarrow\}, \{\uparrow\}" data-display="false"><code>\{\neg, \land\}, \{\neg, \lor\}, \{\neg, \to\}, \{\downarrow\}, \{\uparrow\}</code></span>

**证明完备**：从标准全集 <span class="course-math" data-tex="\{\neg, \land, \lor, \to, \leftrightarrow\}" data-display="false"><code>\{\neg, \land, \lor, \to, \leftrightarrow\}</code></span> 出发，说明每个连接词都能用目标集合表示。

**证明不完备**：找到目标集合构造出的所有公式共享某个"不变性质"（如 parity），而某个连接词（如 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span>）不具备。


### CNF / DNF
{: #section-11 }


| | CNF (合取范式) | DNF (析取范式) |
|---|---|---|
| 形式 | <span class="course-math" data-tex="\bigwedge_i (\bigvee_j l_{ij})" data-display="false"><code>\bigwedge_i (\bigvee_j l_{ij})</code></span> | <span class="course-math" data-tex="\bigvee_i (\bigwedge_j l_{ij})" data-display="false"><code>\bigvee_i (\bigwedge_j l_{ij})</code></span> |
| 从真值表构造 | 取值为 **0** 的行，每行否定后合取 | 取值为 **1** 的行，每行析取 |
| 主范式 (Principal) | 每个子句包含所有命题变量恰好一次 | 同左 |

> 定理：任意公式都等价于某个 CNF 和某个 DNF。


### 代换
{: #section-12 }


- **代换实例**：保持一致性替换公式中的 atom。永真式的代换实例仍是永真式。
- **代换定理**：若 <span class="course-math" data-tex="C \equiv D" data-display="false"><code>C \equiv D</code></span>，则将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 换为 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 得到的 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 满足 <span class="course-math" data-tex="A \equiv B" data-display="false"><code>A \equiv B</code></span>。

---


### 例题：Assignment 3
{: #section-13 }


**A3.1** 判定公式类型（tautology / contradiction / neither）：

| # | 公式 | 答案 |
|---|------|------|
| 1 | <span class="course-math" data-tex="(\neg r \lor s) \to (r \to (\neg r \lor s))" data-display="false"><code>(\neg r \lor s) \to (r \to (\neg r \lor s))</code></span> | Tautology |
| 2 | <span class="course-math" data-tex="(p \to q) \leftrightarrow (q \to p)" data-display="false"><code>(p \to q) \leftrightarrow (q \to p)</code></span> | Neither |
| 3 | <span class="course-math" data-tex="((p \to r) \land (q \to r)) \leftrightarrow (p \lor q \to r)" data-display="false"><code>((p \to r) \land (q \to r)) \leftrightarrow (p \lor q \to r)</code></span> | Tautology |
| 4 | <span class="course-math" data-tex="(p \to q) \land (p \land \neg q)" data-display="false"><code>(p \to q) \land (p \land \neg q)</code></span> | Contradiction |
| 5 | <span class="course-math" data-tex="(\neg(p \leftrightarrow q)) \leftrightarrow (q \lor p)" data-display="false"><code>(\neg(p \leftrightarrow q)) \leftrightarrow (q \lor p)</code></span> | Neither |

**A3.2** 逻辑等价判定：

1. <span class="course-math" data-tex="p \to (q \land \neg q)" data-display="false"><code>p \to (q \land \neg q)</code></span> 与 <span class="course-math" data-tex="\neg p" data-display="false"><code>\neg p</code></span> → **等价**：
   <span class="course-math course-math-display" data-tex="p \to F \equiv \neg p \lor F \equiv \neg p" data-display="true"><code>p \to F \equiv \neg p \lor F \equiv \neg p</code></span>

2. <span class="course-math" data-tex="(\neg p \lor q) \to q \land (q \to r) \land \neg r" data-display="false"><code>(\neg p \lor q) \to q \land (q \to r) \land \neg r</code></span> 与 <span class="course-math" data-tex="(q \land \neg r) \land (\neg r \to \neg q) \lor (p \land \neg q)" data-display="false"><code>(q \land \neg r) \land (\neg r \to \neg q) \lor (p \land \neg q)</code></span> → **等价**：两者均可化简为 <span class="course-math" data-tex="p \land \neg q" data-display="false"><code>p \land \neg q</code></span>。

**A3.3** 语义蕴含判定：

1. <span class="course-math" data-tex="A \to (B \to C) \vDash B \leftrightarrow B \land (A \leftrightarrow A \land C)" data-display="false"><code>A \to (B \to C) \vDash B \leftrightarrow B \land (A \leftrightarrow A \land C)</code></span> → **成立**。分情况：
   - 若 <span class="course-math" data-tex="A^v = 0" data-display="false"><code>A^v = 0</code></span>：则 <span class="course-math" data-tex="(A \leftrightarrow A \land C)^v = 1" data-display="false"><code>(A \leftrightarrow A \land C)^v = 1</code></span>（因为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 和 <span class="course-math" data-tex="A \land C" data-display="false"><code>A \land C</code></span> 均为 0），故结论化简为 <span class="course-math" data-tex="B \leftrightarrow B \land T \equiv B \leftrightarrow B" data-display="false"><code>B \leftrightarrow B \land T \equiv B \leftrightarrow B</code></span>（永真）
   - 若 <span class="course-math" data-tex="(B \to C)^v = 1" data-display="false"><code>(B \to C)^v = 1</code></span>：再分 <span class="course-math" data-tex="B^v = 0" data-display="false"><code>B^v = 0</code></span>（结论化简为 <span class="course-math" data-tex="F \leftrightarrow F" data-display="false"><code>F \leftrightarrow F</code></span>，永真）和 <span class="course-math" data-tex="C^v = 1" data-display="false"><code>C^v = 1</code></span>（结论化简为 <span class="course-math" data-tex="B \leftrightarrow B" data-display="false"><code>B \leftrightarrow B</code></span>，永真）

2. <span class="course-math" data-tex="(A \to C) \lor (B \to C) \vDash (A \lor B) \to C" data-display="false"><code>(A \to C) \lor (B \to C) \vDash (A \lor B) \to C</code></span> → **不成立**。反例：<span class="course-math" data-tex="A=1, B=0, C=0" data-display="false"><code>A=1, B=0, C=0</code></span>：
   <span class="course-math course-math-display" data-tex="(1 \to 0) \lor (0 \to 0) = 0 \lor 1 = 1, \quad (1 \lor 0) \to 0 = 1 \to 0 = 0" data-display="true"><code>(1 \to 0) \lor (0 \to 0) = 0 \lor 1 = 1, \quad (1 \lor 0) \to 0 = 1 \to 0 = 0</code></span>

**A3.4** 给定 <span class="course-math" data-tex="(A_i \to B_i)^v = 1\;(1 \le i \le n)" data-display="false"><code>(A_i \to B_i)^v = 1\;(1 \le i \le n)</code></span>，<span class="course-math" data-tex="(A_1 \lor \dots \lor A_n)^v = 1" data-display="false"><code>(A_1 \lor \dots \lor A_n)^v = 1</code></span>，<span class="course-math" data-tex="(B_i \land B_j)^v = 0\;(i \neq j)" data-display="false"><code>(B_i \land B_j)^v = 0\;(i \neq j)</code></span>，证明 <span class="course-math" data-tex="(B_i \to A_i)^v = 1" data-display="false"><code>(B_i \to A_i)^v = 1</code></span>。

**证明**（反证法）：假设存在 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 使 <span class="course-math" data-tex="(B_t \to A_t)^v = 0" data-display="false"><code>(B_t \to A_t)^v = 0</code></span>，则 <span class="course-math" data-tex="B_t^v = 1, A_t^v = 0" data-display="false"><code>B_t^v = 1, A_t^v = 0</code></span>。由于 <span class="course-math" data-tex="\bigvee_i A_i" data-display="false"><code>\bigvee_i A_i</code></span> 为真，存在 <span class="course-math" data-tex="p \neq t" data-display="false"><code>p \neq t</code></span> 使 <span class="course-math" data-tex="A_p^v = 1" data-display="false"><code>A_p^v = 1</code></span>。由 <span class="course-math" data-tex="A_p \to B_p" data-display="false"><code>A_p \to B_p</code></span> 为真得 <span class="course-math" data-tex="B_p^v = 1" data-display="false"><code>B_p^v = 1</code></span>。于是 <span class="course-math" data-tex="B_t^v = B_p^v = 1" data-display="false"><code>B_t^v = B_p^v = 1</code></span> 且 <span class="course-math" data-tex="p \neq t" data-display="false"><code>p \neq t</code></span>，与 <span class="course-math" data-tex="(B_t \land B_p)^v = 0" data-display="false"><code>(B_t \land B_p)^v = 0</code></span> 矛盾。

**A3.5** 证明每个 positive wff（不含 <span class="course-math" data-tex="\neg, \to, \leftrightarrow" data-display="false"><code>\neg, \to, \leftrightarrow</code></span>）都是可满足的。

**证明**：取赋值 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 将所有 atom 都赋为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。对 positive wff 的结构归纳：
- Base: atom 显然满足（<span class="course-math" data-tex="p^v = 1" data-display="false"><code>p^v = 1</code></span>）
- I.H.: 假设 <span class="course-math" data-tex="\alpha^v = \beta^v = 1" data-display="false"><code>\alpha^v = \beta^v = 1</code></span>
- Inductive Step: <span class="course-math" data-tex="(\alpha \land \beta)^v = 1 \land 1 = 1" data-display="false"><code>(\alpha \land \beta)^v = 1 \land 1 = 1</code></span>；<span class="course-math" data-tex="(\alpha \lor \beta)^v = 1 \lor 1 = 1" data-display="false"><code>(\alpha \lor \beta)^v = 1 \lor 1 = 1</code></span> ✓

**A3.6** 三门问题：

- 设 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span>: 红门后是自由；<span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>: 蓝门后是自由；<span class="course-math" data-tex="R" data-display="false"><code>R</code></span>: 绿门后是自由
- 门上铭文：红门 = <span class="course-math" data-tex="P" data-display="false"><code>P</code></span>，蓝门 = <span class="course-math" data-tex="\neg Q" data-display="false"><code>\neg Q</code></span>，绿门 = <span class="course-math" data-tex="\neg Q" data-display="false"><code>\neg Q</code></span>
- 已知条件：
  - 至少一真：<span class="course-math" data-tex="P \lor \neg Q \lor \neg Q \equiv P \lor \neg Q" data-display="false"><code>P \lor \neg Q \lor \neg Q \equiv P \lor \neg Q</code></span>
  - 至少一假：<span class="course-math" data-tex="\neg(P \land \neg Q \land \neg Q) \equiv \neg P \lor Q" data-display="false"><code>\neg(P \land \neg Q \land \neg Q) \equiv \neg P \lor Q</code></span>
  - 恰好一扇门通向自由：<span class="course-math" data-tex="(P \land \neg Q \land \neg R) \lor (\neg P \land Q \land \neg R) \lor (\neg P \land \neg Q \land R)" data-display="false"><code>(P \land \neg Q \land \neg R) \lor (\neg P \land Q \land \neg R) \lor (\neg P \land \neg Q \land R)</code></span>

真值表验证：唯一满足所有条件的赋值是 <span class="course-math" data-tex="P=0, Q=0, R=1" data-display="false"><code>P=0, Q=0, R=1</code></span> → 绿门通向自由。

**A3.7** <span class="course-math" data-tex="\{\leftrightarrow, \neg\}" data-display="false"><code>\{\leftrightarrow, \neg\}</code></span> 是否完备？→ **不完备**。

**核心思路**：先证明只需考虑 2-变量公式（多余变量可以代换为 tautology），再证明任何只含 <span class="course-math" data-tex="\{\leftrightarrow, \neg\}" data-display="false"><code>\{\leftrightarrow, \neg\}</code></span> 的 2-变量公式 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 满足 <span class="course-math" data-tex="f(\alpha)" data-display="false"><code>f(\alpha)</code></span> 为偶数（<span class="course-math" data-tex="f(\alpha)" data-display="false"><code>f(\alpha)</code></span> = 真值表中使 <span class="course-math" data-tex="\alpha=1" data-display="false"><code>\alpha=1</code></span> 的行数）。

归纳证明 <span class="course-math" data-tex="f(\alpha)" data-display="false"><code>f(\alpha)</code></span> 恒为偶数：
- Base: <span class="course-math" data-tex="f(p) = f(q) = 2" data-display="false"><code>f(p) = f(q) = 2</code></span>（偶数）
- I.H.: <span class="course-math" data-tex="f(\alpha) = 2k_1" data-display="false"><code>f(\alpha) = 2k_1</code></span>, <span class="course-math" data-tex="f(\beta) = 2k_2" data-display="false"><code>f(\beta) = 2k_2</code></span>
- <span class="course-math" data-tex="\neg\alpha" data-display="false"><code>\neg\alpha</code></span>: <span class="course-math" data-tex="f(\neg\alpha) = 4 - f(\alpha) = 4 - 2k_1 = 2(2-k_1)" data-display="false"><code>f(\neg\alpha) = 4 - f(\alpha) = 4 - 2k_1 = 2(2-k_1)</code></span>（偶数）
- <span class="course-math" data-tex="\alpha \leftrightarrow \beta" data-display="false"><code>\alpha \leftrightarrow \beta</code></span>: 设 <span class="course-math" data-tex="t_1" data-display="false"><code>t_1</code></span> 为 <span class="course-math" data-tex="\alpha=1,\beta=1" data-display="false"><code>\alpha=1,\beta=1</code></span> 的行数，<span class="course-math" data-tex="t_4" data-display="false"><code>t_4</code></span> 为 <span class="course-math" data-tex="\alpha=0,\beta=0" data-display="false"><code>\alpha=0,\beta=0</code></span> 的行数，则 <span class="course-math" data-tex="f(\alpha \leftrightarrow \beta) = t_1 + t_4 = 4 - (2k_1 + 2k_2 - 2t_1) = 2(2 - k_1 - k_2 + t_1)" data-display="false"><code>f(\alpha \leftrightarrow \beta) = t_1 + t_4 = 4 - (2k_1 + 2k_2 - 2t_1) = 2(2 - k_1 - k_2 + t_1)</code></span>（偶数）

但 <span class="course-math" data-tex="f(p \land q) = 1" data-display="false"><code>f(p \land q) = 1</code></span>（奇数），故 <span class="course-math" data-tex="p \land q" data-display="false"><code>p \land q</code></span> 不能用 <span class="course-math" data-tex="\{\leftrightarrow, \neg\}" data-display="false"><code>\{\leftrightarrow, \neg\}</code></span> 表示。因此 <span class="course-math" data-tex="\{\leftrightarrow, \neg\}" data-display="false"><code>\{\leftrightarrow, \neg\}</code></span> 不完备。

---


## 3. 命题逻辑 — 形式证明系统
{: #section-14 }



### 3.1 Hilbert-style System (<span class="course-math" data-tex="\mathscr{H}" data-display="false"><code>\mathscr{H}</code></span>)
{: #section-15 }


**语言**：仅用 <span class="course-math" data-tex="\neg, \to" data-display="false"><code>\neg, \to</code></span>。

**公理**：
1. <span class="course-math" data-tex="A \to (B \to A)" data-display="false"><code>A \to (B \to A)</code></span>
2. <span class="course-math" data-tex="(A \to (B \to C)) \to ((A \to B) \to (A \to C))" data-display="false"><code>(A \to (B \to C)) \to ((A \to B) \to (A \to C))</code></span>
3. <span class="course-math" data-tex="(\neg A \to \neg B) \to (B \to A)" data-display="false"><code>(\neg A \to \neg B) \to (B \to A)</code></span>

**推理规则**：Modus Ponens (MP): <span class="course-math" data-tex="\dfrac{A \to B \quad A}{B}" data-display="false"><code>\dfrac{A \to B \quad A}{B}</code></span>

**重要定理与导出规则**（课堂上已证明，考试可直接引用）：

| 名称 | 内容 |
|------|------|
| H1 | <span class="course-math" data-tex="\vdash A \to A" data-display="false"><code>\vdash A \to A</code></span> |
| Deduction Rule | <span class="course-math" data-tex="\Sigma \cup \{A\} \vdash B" data-display="false"><code>\Sigma \cup \{A\} \vdash B</code></span> iff <span class="course-math" data-tex="\Sigma \vdash A \to B" data-display="false"><code>\Sigma \vdash A \to B</code></span> |
| H2 (Transitivity) | <span class="course-math" data-tex="\vdash (A \to B) \to ((B \to C) \to (A \to C))" data-display="false"><code>\vdash (A \to B) \to ((B \to C) \to (A \to C))</code></span> |
| Contrapositive | 若 <span class="course-math" data-tex="\Sigma \vdash \neg B \to \neg A" data-display="false"><code>\Sigma \vdash \neg B \to \neg A</code></span>，则 <span class="course-math" data-tex="\Sigma \vdash A \to B" data-display="false"><code>\Sigma \vdash A \to B</code></span> |
| H3 | <span class="course-math" data-tex="\vdash \neg \neg A \to A" data-display="false"><code>\vdash \neg \neg A \to A</code></span> |
| H4 | <span class="course-math" data-tex="\vdash \neg A \to (A \to B)" data-display="false"><code>\vdash \neg A \to (A \to B)</code></span> 和 <span class="course-math" data-tex="\vdash A \to (\neg A \to B)" data-display="false"><code>\vdash A \to (\neg A \to B)</code></span> |
| H5 | <span class="course-math" data-tex="\vdash \text{true}" data-display="false"><code>\vdash \text{true}</code></span>（即 <span class="course-math" data-tex="B \to B" data-display="false"><code>B \to B</code></span>），<span class="course-math" data-tex="\vdash \neg \text{false}" data-display="false"><code>\vdash \neg \text{false}</code></span> |
| H6 | <span class="course-math" data-tex="\vdash (A \to \neg A) \to \neg A" data-display="false"><code>\vdash (A \to \neg A) \to \neg A</code></span> |
| Reductio ad absurdum | <span class="course-math" data-tex="\dfrac{\vdash \neg A \to \text{false}}{\vdash A}" data-display="false"><code>\dfrac{\vdash \neg A \to \text{false}}{\vdash A}</code></span> |
| Exchange | <span class="course-math" data-tex="\dfrac{\Sigma \vdash A \to (B \to C)}{\Sigma \vdash B \to (A \to C)}" data-display="false"><code>\dfrac{\Sigma \vdash A \to (B \to C)}{\Sigma \vdash B \to (A \to C)}</code></span> |

---


### 例题：Assignment 4.1 (Hilbert)
{: #section-16 }


**A4.1.1** <span class="course-math" data-tex="\vdash (\neg A \to A) \to A" data-display="false"><code>\vdash (\neg A \to A) \to A</code></span>

```
1. {¬A→A} ⊢ ¬A→A                    [Assumption]
2. {¬A→A} ⊢ ¬A→(A→false)            [Theorem H4]
3. {¬A→A} ⊢ (¬A→(A→false))→((¬A→A)→(¬A→false))
                                     [Axiom 2]
4. {¬A→A} ⊢ (¬A→A)→(¬A→false)       [MP 2,3]
5. {¬A→A} ⊢ ¬A→false                [MP 1,4]
6. {¬A→A} ⊢ A                       [Reductio ad absurdum 5]
7. ⊢ (¬A→A)→A                       [Deduction 6]
```

**A4.1.2** <span class="course-math" data-tex="\vdash (\neg A \to \text{false}) \to A" data-display="false"><code>\vdash (\neg A \to \text{false}) \to A</code></span>

```
1. {¬A→false} ⊢ ¬A→false            [Assumption]
2. {¬A→false} ⊢ ¬false               [Theorem H5]
3. {¬A→false} ⊢ ¬¬¬false→¬false       [Theorem H3]
4. {¬A→false} ⊢ false→¬¬false         [Contrapositive 3]
5. {¬A→false} ⊢ ¬A→¬¬false            [Transitivity 1,4]
6. {¬A→false} ⊢ ¬false→A              [Contrapositive 5]
7. {¬A→false} ⊢ A                     [MP 2,6]
8. ⊢ (¬A→false)→A                    [Deduction 7]
```

**A4.1.3** <span class="course-math" data-tex="\vdash ((A \to B) \to A) \to A" data-display="false"><code>\vdash ((A \to B) \to A) \to A</code></span>

```
1. {(A→B)→A} ⊢ (A→B)→A              [Assumption]
2. {(A→B)→A} ⊢ ¬A→(A→B)             [Theorem H4]
3. {(A→B)→A} ⊢ ¬A→A                 [Transitivity 2,1]
4. {(A→B)→A} ⊢ (¬A→A)→A             [Question 1]
5. {(A→B)→A} ⊢ A                    [MP 3,4]
6. ⊢ ((A→B)→A)→A                    [Deduction 5]
```

**A4.1.4** <span class="course-math" data-tex="\vdash (\neg B \to \neg A) \to ((\neg B \to A) \to B)" data-display="false"><code>\vdash (\neg B \to \neg A) \to ((\neg B \to A) \to B)</code></span>

```
1. {¬B→¬A, ¬B→A} ⊢ ¬B→¬A            [Assumption]
2. {¬B→¬A, ¬B→A} ⊢ ¬B→A             [Assumption]
3. {¬B→¬A, ¬B→A} ⊢ A→B              [Contrapositive 1]
4. {¬B→¬A, ¬B→A} ⊢ ¬B→B             [Transitivity 2,3]
5. {¬B→¬A, ¬B→A} ⊢ (¬B→B)→B         [Question 1]
6. {¬B→¬A, ¬B→A} ⊢ B                [MP 4,5]
7. {¬B→¬A} ⊢ (¬B→A)→B               [Deduction 6]
8. ⊢ (¬B→¬A)→((¬B→A)→B)             [Deduction 7]
```

> **技巧总结**：Hilbert 证明的核心策略是 **(1) 用 Deduction Rule 把目标变成假设前提推出结论**，**(2) 用 Transitivity 和 Contrapositive 操作蕴含**，**(3) 把之前证过的定理当作引理直接引用**。

---


### 3.2 Natural Deduction (ND)
{: #section-17 }


**语言**：全部连接词 <span class="course-math" data-tex="\neg, \land, \lor, \to, \leftrightarrow" data-display="false"><code>\neg, \land, \lor, \to, \leftrightarrow</code></span>。

**推理规则一览**：

| 连接词 | Introduction | Elimination |
|--------|-------------|-------------|
| <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> | <span class="course-math" data-tex="\dfrac{\alpha \quad \beta}{\alpha \land \beta}" data-display="false"><code>\dfrac{\alpha \quad \beta}{\alpha \land \beta}</code></span> | <span class="course-math" data-tex="\dfrac{\alpha \land \beta}{\alpha}" data-display="false"><code>\dfrac{\alpha \land \beta}{\alpha}</code></span>, <span class="course-math" data-tex="\dfrac{\alpha \land \beta}{\beta}" data-display="false"><code>\dfrac{\alpha \land \beta}{\beta}</code></span> |
| <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> | <span class="course-math" data-tex="\dfrac{\alpha}{\alpha \lor \beta}" data-display="false"><code>\dfrac{\alpha}{\alpha \lor \beta}</code></span> 或 <span class="course-math" data-tex="\dfrac{\alpha}{\beta \lor \alpha}" data-display="false"><code>\dfrac{\alpha}{\beta \lor \alpha}</code></span> | <span class="course-math" data-tex="\dfrac{\alpha_1\!\lor\!\alpha_2 \quad \boxed{\alpha_1\!\cdots\!\beta} \quad \boxed{\alpha_2\!\cdots\!\beta}}{\beta}" data-display="false"><code>\dfrac{\alpha_1\!\lor\!\alpha_2 \quad \boxed{\alpha_1\!\cdots\!\beta} \quad \boxed{\alpha_2\!\cdots\!\beta}}{\beta}</code></span> |
| <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> | <span class="course-math" data-tex="\dfrac{\boxed{\alpha \cdots \beta}}{\alpha \to \beta}" data-display="false"><code>\dfrac{\boxed{\alpha \cdots \beta}}{\alpha \to \beta}</code></span> | <span class="course-math" data-tex="\dfrac{\alpha \to \beta \quad \alpha}{\beta}" data-display="false"><code>\dfrac{\alpha \to \beta \quad \alpha}{\beta}</code></span> |
| <span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span> | <span class="course-math" data-tex="\dfrac{\boxed{\alpha \cdots \perp}}{\neg \alpha}" data-display="false"><code>\dfrac{\boxed{\alpha \cdots \perp}}{\neg \alpha}</code></span> | — |
| <span class="course-math" data-tex="\perp" data-display="false"><code>\perp</code></span> | <span class="course-math" data-tex="\dfrac{\alpha \quad \neg \alpha}{\perp}" data-display="false"><code>\dfrac{\alpha \quad \neg \alpha}{\perp}</code></span> | <span class="course-math" data-tex="\dfrac{\perp}{\alpha}" data-display="false"><code>\dfrac{\perp}{\alpha}</code></span> |
| <span class="course-math" data-tex="\neg\neg" data-display="false"><code>\neg\neg</code></span> | <span class="course-math" data-tex="\dfrac{\alpha}{\neg\neg\alpha}" data-display="false"><code>\dfrac{\alpha}{\neg\neg\alpha}</code></span>（导出） | <span class="course-math" data-tex="\dfrac{\neg\neg\alpha}{\alpha}" data-display="false"><code>\dfrac{\neg\neg\alpha}{\alpha}</code></span> |

**导出规则**（可直接引用）：

| 规则 | 内容 |
|------|------|
| Modus Tollens (MT) | <span class="course-math" data-tex="\{p \to q, \neg q\} \vdash \neg p" data-display="false"><code>\{p \to q, \neg q\} \vdash \neg p</code></span> |
| PBC (反证法) | <span class="course-math" data-tex="\dfrac{\boxed{\neg\alpha \cdots \perp}}{\alpha}" data-display="false"><code>\dfrac{\boxed{\neg\alpha \cdots \perp}}{\alpha}</code></span> |
| LEM (排中律) | <span class="course-math" data-tex="\vdash \alpha \lor \neg\alpha" data-display="false"><code>\vdash \alpha \lor \neg\alpha</code></span> |

> 子证明 (Subproof) 内可以用**外部**的行；外部**不能**用子证明内部的行。

**可靠性与完备性**（考试只需了解概念）：
- **Soundness**：<span class="course-math" data-tex="\Sigma \vdash A \implies \Sigma \vDash A" data-display="false"><code>\Sigma \vdash A \implies \Sigma \vDash A</code></span>
- **Completeness**：<span class="course-math" data-tex="\Sigma \vDash A \implies \Sigma \vdash A" data-display="false"><code>\Sigma \vDash A \implies \Sigma \vdash A</code></span>

---


### 例题：Assignment 4.2 (ND)
{: #section-18 }


**A4.2.1** <span class="course-math" data-tex="\neg(\neg p \lor q) \vdash p" data-display="false"><code>\neg(\neg p \lor q) \vdash p</code></span>

```
1. ¬(¬p ∨ q)              [Premise]
   ┌ 2. ¬p                [Assume]
   │ 3. ¬p ∨ q            [∨i 2]
   │ 4. ⊥                 [⊥i 1,3]
   └ 5. ¬¬p               [¬i 2-4]
6. p                      [¬¬e 5]
```

**A4.2.2** <span class="course-math" data-tex="p \land q \to r \vdash p \to (q \to r)" data-display="false"><code>p \land q \to r \vdash p \to (q \to r)</code></span>

```
1. p ∧ q → r              [Premise]
   ┌ 2. p                 [Assume]
   │   ┌ 3. q             [Assume]
   │   │ 4. p ∧ q         [∧i 2,3]
   │   │ 5. r             [→e 1,4]
   │   └ 6. q → r         [→i 3-5]
   └ 7. p → (q → r)       [→i 2-6]
```

**A4.2.3** <span class="course-math" data-tex="(p \lor q) \lor r \vdash p \lor (q \lor r)" data-display="false"><code>(p \lor q) \lor r \vdash p \lor (q \lor r)</code></span>（<span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 结合律）

```
1. (p ∨ q) ∨ r                [Premise]
   ┌ 2. p ∨ q                 [Assume]
   │   ┌ 3. p                 [Assume]
   │   │ 4. p ∨ (q ∨ r)       [∨i 3]
   │   └
   │   ┌ 5. q                 [Assume]
   │   │ 6. q ∨ r             [∨i 5]
   │   │ 7. p ∨ (q ∨ r)       [∨i 6]
   │   └
   │ 8. p ∨ (q ∨ r)           [∨e 2, 3-4, 5-7]
   └
   ┌ 9. r                     [Assume]
   │ 10. q ∨ r                [∨i 9]
   │ 11. p ∨ (q ∨ r)          [∨i 10]
   └
12. p ∨ (q ∨ r)               [∨e 1, 2-8, 9-11]
```

**A4.2.4** <span class="course-math" data-tex="p \land (q \lor r) \vdash (p \land q) \lor (p \land r)" data-display="false"><code>p \land (q \lor r) \vdash (p \land q) \lor (p \land r)</code></span>（分配律）

```
1. p ∧ (q ∨ r)                [Premise]
2. p                          [∧e 1]
3. q ∨ r                      [∧e 1]
   ┌ 4. q                     [Assume]
   │ 5. p ∧ q                 [∧i 2,4]
   │ 6. (p ∧ q) ∨ (p ∧ r)     [∨i 5]
   └
   ┌ 7. r                     [Assume]
   │ 8. p ∧ r                 [∧i 2,7]
   │ 9. (p ∧ q) ∨ (p ∧ r)     [∨i 8]
   └
10. (p ∧ q) ∨ (p ∧ r)         [∨e 3, 4-6, 7-9]
```

**A4.2.5** <span class="course-math" data-tex="\neg(p \lor q) \vdash \neg p \land \neg q" data-display="false"><code>\neg(p \lor q) \vdash \neg p \land \neg q</code></span>（De Morgan）

```
1. ¬(p ∨ q)                   [Premise]
   ┌ 2. p                     [Assume]
   │ 3. p ∨ q                 [∨i 2]
   │ 4. ⊥                     [⊥i 1,3]
   └ 5. ¬p                    [¬i 2-4]
   ┌ 6. q                     [Assume]
   │ 7. p ∨ q                 [∨i 6]
   │ 8. ⊥                     [⊥i 1,7]
   └ 9. ¬q                    [¬i 6-8]
10. ¬p ∧ ¬q                   [∧i 5,9]
```

---


### 例题：Assignment 4.3 (Soundness — <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span>e case)
{: #section-19 }


**题目**：完成 ND 可靠性证明中 <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span>e 情形的归纳步骤。

假设第 <span class="course-math" data-tex="k+1" data-display="false"><code>k+1</code></span> 行用 <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span>e 推出 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>，证明结构为：

```
...
c.  p ∨ q                   [...]
    ┌ c+1. p                [Assume]
    │  ...
    │ j.   α                [...]
    └
    ┌ j+1. q                [Assume]
    │  ...
    │ k.   α                [...]
    └
k+1. α                      [∨e c, c+1-j, j+1-k]
```

令 <span class="course-math" data-tex="\Sigma_1 = \Sigma \cup \{p\}" data-display="false"><code>\Sigma_1 = \Sigma \cup \{p\}</code></span>, <span class="course-math" data-tex="\Sigma_2 = \Sigma \cup \{q\}" data-display="false"><code>\Sigma_2 = \Sigma \cup \{q\}</code></span>。由 I.H.（对 <span class="course-math" data-tex="\le k" data-display="false"><code>\le k</code></span> 行的证明成立）：
- <span class="course-math" data-tex="\Sigma \vDash p \lor q" data-display="false"><code>\Sigma \vDash p \lor q</code></span>（因为 <span class="course-math" data-tex="p \lor q" data-display="false"><code>p \lor q</code></span> 在 <span class="course-math" data-tex="\le k" data-display="false"><code>\le k</code></span> 行被证明）
- <span class="course-math" data-tex="\Sigma_1 \vDash \alpha" data-display="false"><code>\Sigma_1 \vDash \alpha</code></span>（子证明 c+1 到 j 在 <span class="course-math" data-tex="\Sigma_1" data-display="false"><code>\Sigma_1</code></span> 下是完备证明）
- <span class="course-math" data-tex="\Sigma_2 \vDash \alpha" data-display="false"><code>\Sigma_2 \vDash \alpha</code></span>（子证明 j+1 到 k 在 <span class="course-math" data-tex="\Sigma_2" data-display="false"><code>\Sigma_2</code></span> 下是完备证明）

**反证法证 <span class="course-math" data-tex="\Sigma \vDash \alpha" data-display="false"><code>\Sigma \vDash \alpha</code></span>**：假设存在 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 使 <span class="course-math" data-tex="\Sigma^v = 1" data-display="false"><code>\Sigma^v = 1</code></span> 且 <span class="course-math" data-tex="\alpha^v = 0" data-display="false"><code>\alpha^v = 0</code></span>。
- 由 <span class="course-math" data-tex="\Sigma \vDash p \lor q" data-display="false"><code>\Sigma \vDash p \lor q</code></span> 且 <span class="course-math" data-tex="\Sigma^v = 1" data-display="false"><code>\Sigma^v = 1</code></span>，得 <span class="course-math" data-tex="(p \lor q)^v = 1" data-display="false"><code>(p \lor q)^v = 1</code></span>
- 由 <span class="course-math" data-tex="\Sigma_1 \vDash \alpha" data-display="false"><code>\Sigma_1 \vDash \alpha</code></span> 且 <span class="course-math" data-tex="\alpha^v = 0" data-display="false"><code>\alpha^v = 0</code></span>，得 <span class="course-math" data-tex="\Sigma_1^v = 0" data-display="false"><code>\Sigma_1^v = 0</code></span>。而 <span class="course-math" data-tex="\Sigma^v = 1" data-display="false"><code>\Sigma^v = 1</code></span>，故 <span class="course-math" data-tex="p^v = 0" data-display="false"><code>p^v = 0</code></span>
- 同理，由 <span class="course-math" data-tex="\Sigma_2 \vDash \alpha" data-display="false"><code>\Sigma_2 \vDash \alpha</code></span> 得 <span class="course-math" data-tex="q^v = 0" data-display="false"><code>q^v = 0</code></span>
- 于是 <span class="course-math" data-tex="(p \lor q)^v = 0" data-display="false"><code>(p \lor q)^v = 0</code></span>，与 <span class="course-math" data-tex="(p \lor q)^v = 1" data-display="false"><code>(p \lor q)^v = 1</code></span> 矛盾

故 <span class="course-math" data-tex="\Sigma \vDash \alpha" data-display="false"><code>\Sigma \vDash \alpha</code></span> 成立。

---


### 例题：Assignment 5.1 (用 Soundness 做语义论证)
{: #section-20 }


**A5.1** 若 <span class="course-math" data-tex="\{\alpha, \beta\} \vdash_{ND} \gamma" data-display="false"><code>\{\alpha, \beta\} \vdash_{ND} \gamma</code></span>，则 <span class="course-math" data-tex="\varnothing \vDash (\alpha \land \beta) \to \gamma" data-display="false"><code>\varnothing \vDash (\alpha \land \beta) \to \gamma</code></span>。

**证明**：由 ND 的 Soundness，<span class="course-math" data-tex="\{\alpha, \beta\} \vdash \gamma \implies \{\alpha, \beta\} \vDash \gamma" data-display="false"><code>\{\alpha, \beta\} \vdash \gamma \implies \{\alpha, \beta\} \vDash \gamma</code></span>。

反证法：假设 <span class="course-math" data-tex="\varnothing \not\vDash (\alpha \land \beta) \to \gamma" data-display="false"><code>\varnothing \not\vDash (\alpha \land \beta) \to \gamma</code></span>，则存在 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 使 <span class="course-math" data-tex="(\alpha \land \beta)^v = 1" data-display="false"><code>(\alpha \land \beta)^v = 1</code></span> 且 <span class="course-math" data-tex="\gamma^v = 0" data-display="false"><code>\gamma^v = 0</code></span>。于是 <span class="course-math" data-tex="\alpha^v = 1, \beta^v = 1, \gamma^v = 0" data-display="false"><code>\alpha^v = 1, \beta^v = 1, \gamma^v = 0</code></span>，与 <span class="course-math" data-tex="\{\alpha, \beta\} \vDash \gamma" data-display="false"><code>\{\alpha, \beta\} \vDash \gamma</code></span> 矛盾。故 <span class="course-math" data-tex="\varnothing \vDash (\alpha \land \beta) \to \gamma" data-display="false"><code>\varnothing \vDash (\alpha \land \beta) \to \gamma</code></span>。

---


### 3.3 Resolution (归结)
{: #section-21 }


**核心思路**：要证 <span class="course-math" data-tex="\Sigma \vdash_{\mathrm{Res}} \varphi" data-display="false"><code>\Sigma \vdash_{\mathrm{Res}} \varphi</code></span>，转为证 <span class="course-math" data-tex="\Sigma \cup \{\neg \varphi\} \vdash_{\mathrm{Res}} \perp" data-display="false"><code>\Sigma \cup \{\neg \varphi\} \vdash_{\mathrm{Res}} \perp</code></span>。

**步骤**：
1. 将 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 和 <span class="course-math" data-tex="\neg \varphi" data-display="false"><code>\neg \varphi</code></span> 化为 CNF
2. 拆开 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> → 析取子句的集合
3. 每个子句视为 literal 的集合
4. 反复使用归结规则直到推出 <span class="course-math" data-tex="\perp" data-display="false"><code>\perp</code></span>（空子句）

**归结规则**：
<span class="course-math course-math-display" data-tex="\dfrac{(\alpha \lor p) \quad ((\neg p) \lor \beta)}{(\alpha \lor \beta)} \qquad \dfrac{p \quad \neg p}{\perp}" data-display="true"><code>\dfrac{(\alpha \lor p) \quad ((\neg p) \lor \beta)}{(\alpha \lor \beta)} \qquad \dfrac{p \quad \neg p}{\perp}</code></span>

---


### 例题：Assignment 5.2 (Resolution)
{: #section-22 }


**A5.2** <span class="course-math" data-tex="p \to (q \land r) \vdash_{\mathrm{Res}} (\neg q \lor \neg r) \to \neg p" data-display="false"><code>p \to (q \land r) \vdash_{\mathrm{Res}} (\neg q \lor \neg r) \to \neg p</code></span>

第一步：转换前提和否定结论为 CNF，再转为子句集合。

- 前提：<span class="course-math" data-tex="p \to (q \land r) \equiv \neg p \lor (q \land r) \equiv (\neg p \lor q) \land (\neg p \lor r)" data-display="false"><code>p \to (q \land r) \equiv \neg p \lor (q \land r) \equiv (\neg p \lor q) \land (\neg p \lor r)</code></span>
- 否定结论：<span class="course-math" data-tex="\neg((\neg q \lor \neg r) \to \neg p) \equiv \neg(\neg(\neg q \lor \neg r) \lor \neg p) \equiv \neg((q \land r) \lor \neg p) \equiv \neg(q \land r) \land p \equiv (\neg q \lor \neg r) \land p" data-display="false"><code>\neg((\neg q \lor \neg r) \to \neg p) \equiv \neg(\neg(\neg q \lor \neg r) \lor \neg p) \equiv \neg((q \land r) \lor \neg p) \equiv \neg(q \land r) \land p \equiv (\neg q \lor \neg r) \land p</code></span>

得到子句集合：<span class="course-math" data-tex="\{\neg p, q\},\; \{\neg p, r\},\; \{\neg q, \neg r\},\; \{p\}" data-display="false"><code>\{\neg p, q\},\; \{\neg p, r\},\; \{\neg q, \neg r\},\; \{p\}</code></span>

归结过程：
```
1. {¬p, q}          [Premise]
2. {¬p, r}          [Premise]
3. {¬q, ¬r}         [Premise]
4. {p}              [Premise]
5. {q}              [Res 1,4]
6. {r}              [Res 2,4]
7. {¬r}             [Res 3,5]
8. ⊥                [Res 6,7]
```

---


## 4. 一阶逻辑 — 语法
{: #section-23 }



### 字母表
{: #section-24 }


| 类别 | 符号 |
|------|------|
| **逻辑符号** | 量词 <span class="course-math" data-tex="\forall, \exists" data-display="false"><code>\forall, \exists</code></span>；变量 <span class="course-math" data-tex="x,y,z,\dots" data-display="false"><code>x,y,z,\dots</code></span>；连接词 <span class="course-math" data-tex="\neg,\land,\lor,\to,\leftrightarrow" data-display="false"><code>\neg,\land,\lor,\to,\leftrightarrow</code></span>；标点 <span class="course-math" data-tex="(,),," data-display="false"><code>(,),,</code></span>；等号 <span class="course-math" data-tex="=" data-display="false"><code>=</code></span> |
| **非逻辑符号** | 常量 <span class="course-math" data-tex="c_1,c_2,\dots" data-display="false"><code>c_1,c_2,\dots</code></span>；谓词 <span class="course-math" data-tex="P,Q,R,\dots" data-display="false"><code>P,Q,R,\dots</code></span>（带 arity）；函数 <span class="course-math" data-tex="f,g,h,\dots" data-display="false"><code>f,g,h,\dots</code></span>（带 arity） |


### 项的归纳定义
{: #section-25 }

1. 常量和变量都是项
2. 若 <span class="course-math" data-tex="f^n" data-display="false"><code>f^n</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元函数，<span class="course-math" data-tex="t_1,\dots,t_n" data-display="false"><code>t_1,\dots,t_n</code></span> 是项，则 <span class="course-math" data-tex="f^n(t_1,\dots,t_n)" data-display="false"><code>f^n(t_1,\dots,t_n)</code></span> 是项
3. 只有以上生成的才是项


### 原子公式 (Atom)
{: #section-26 }

- <span class="course-math" data-tex="P(t_1,\dots,t_n)" data-display="false"><code>P(t_1,\dots,t_n)</code></span>，其中 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元谓词，<span class="course-math" data-tex="t_i" data-display="false"><code>t_i</code></span> 是项
- <span class="course-math" data-tex="t_1 = t_2" data-display="false"><code>t_1 = t_2</code></span>（等号是一种特殊的二元谓词）


### 公式的归纳定义
{: #section-27 }

1. <span class="course-math" data-tex="\text{Atom}(\mathscr{L}) \subseteq \text{Form}(\mathscr{L})" data-display="false"><code>\text{Atom}(\mathscr{L}) \subseteq \text{Form}(\mathscr{L})</code></span>
2. 若 <span class="course-math" data-tex="\alpha \in \text{Form}" data-display="false"><code>\alpha \in \text{Form}</code></span>，则 <span class="course-math" data-tex="(\neg\alpha) \in \text{Form}" data-display="false"><code>(\neg\alpha) \in \text{Form}</code></span>
3. 若 <span class="course-math" data-tex="\alpha,\beta \in \text{Form}" data-display="false"><code>\alpha,\beta \in \text{Form}</code></span>，则 <span class="course-math" data-tex="(\alpha * \beta) \in \text{Form}" data-display="false"><code>(\alpha * \beta) \in \text{Form}</code></span>（<span class="course-math" data-tex="* \in \{\land,\lor,\to,\leftrightarrow\}" data-display="false"><code>* \in \{\land,\lor,\to,\leftrightarrow\}</code></span>）
4. 若 <span class="course-math" data-tex="\alpha \in \text{Form}" data-display="false"><code>\alpha \in \text{Form}</code></span> 且 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 是变量，则 <span class="course-math" data-tex="(\forall x\,\alpha), (\exists x\,\alpha) \in \text{Form}" data-display="false"><code>(\forall x\,\alpha), (\exists x\,\alpha) \in \text{Form}</code></span>


### 优先级
{: #section-28 }

1. 括号优先
2. <span class="course-math" data-tex="\forall x, \exists x" data-display="false"><code>\forall x, \exists x</code></span> 与 <span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span> 同级，高于所有二元连接词
3. <span class="course-math" data-tex="\forall, \exists, \neg" data-display="false"><code>\forall, \exists, \neg</code></span> 之间是**右结合**


### 形式化关键对照
{: #section-29 }


| 自然语言 | FOL 模式 |
|----------|----------|
| "Every A is B" | <span class="course-math" data-tex="\forall x (A(x) \to B(x))" data-display="false"><code>\forall x (A(x) \to B(x))</code></span> |
| "Some A is B" | <span class="course-math" data-tex="\exists x (A(x) \land B(x))" data-display="false"><code>\exists x (A(x) \land B(x))</code></span> |
| "Only A are B" | <span class="course-math" data-tex="\forall x (B(x) \to A(x))" data-display="false"><code>\forall x (B(x) \to A(x))</code></span> |
| "No A is B" | <span class="course-math" data-tex="\forall x (A(x) \to \neg B(x))" data-display="false"><code>\forall x (A(x) \to \neg B(x))</code></span> 或 <span class="course-math" data-tex="\neg\exists x(A(x) \land B(x))" data-display="false"><code>\neg\exists x(A(x) \land B(x))</code></span> |
| "All things that are both A and B are C" | <span class="course-math" data-tex="\forall x(A(x) \land B(x) \to C(x))" data-display="false"><code>\forall x(A(x) \land B(x) \to C(x))</code></span> |
| 量词顺序 | <span class="course-math" data-tex="\forall x \exists y" data-display="false"><code>\forall x \exists y</code></span> ≠ <span class="course-math" data-tex="\exists y \forall x" data-display="false"><code>\exists y \forall x</code></span>（见 A5.5(d)(e) 的区别） |

---


### 例题：Assignment 5.3-5.5
{: #section-30 }


**A5.3** 判断是否是良构 FOL 公式。答案：**1, 3, 6, 8, 9**

| # | 表达式 | 判定 | 理由 |
|---|--------|------|------|
| 1 | <span class="course-math" data-tex="P(g(a,b))" data-display="false"><code>P(g(a,b))</code></span> | ✅ | atom — 谓词作用于项 |
| 2 | <span class="course-math" data-tex="Q(x, P(a), b)" data-display="false"><code>Q(x, P(a), b)</code></span> | ❌ | <span class="course-math" data-tex="P(a)" data-display="false"><code>P(a)</code></span> 是公式不是项 |
| 3 | <span class="course-math" data-tex="P(g(f(a), g(x, f(x))))" data-display="false"><code>P(g(f(a), g(x, f(x))))</code></span> | ✅ | atom — 函数嵌套合法 |
| 4 | <span class="course-math" data-tex="R(a, R(a, a))" data-display="false"><code>R(a, R(a, a))</code></span> | ❌ | <span class="course-math" data-tex="R(a,a)" data-display="false"><code>R(a,a)</code></span> 是公式不是项 |
| 5 | <span class="course-math" data-tex="g(a, g(x, y))" data-display="false"><code>g(a, g(x, y))</code></span> | ❌ | 这是项 (term)，不是公式 |
| 6 | <span class="course-math" data-tex="\forall x(\neg P(x))" data-display="false"><code>\forall x(\neg P(x))</code></span> | ✅ | wff |
| 7 | <span class="course-math" data-tex="\exists R(f(a), x)" data-display="false"><code>\exists R(f(a), x)</code></span> | ❌ | <span class="course-math" data-tex="R" data-display="false"><code>R</code></span> 是谓词不能被量化 |
| 8 | <span class="course-math" data-tex="\exists x Q(x, f(x), b) \to \forall x R(a, x)" data-display="false"><code>\exists x Q(x, f(x), b) \to \forall x R(a, x)</code></span> | ✅ | wff |
| 9 | <span class="course-math" data-tex="\exists x \forall y R(x, y)" data-display="false"><code>\exists x \forall y R(x, y)</code></span> | ✅ | wff |

**A5.4** 用给定谓词翻译（<span class="course-math" data-tex="A(x,y)" data-display="false"><code>A(x,y)</code></span>: x admires y; <span class="course-math" data-tex="B(x,y)" data-display="false"><code>B(x,y)</code></span>: x attended y; <span class="course-math" data-tex="P(x)" data-display="false"><code>P(x)</code></span>: professor; <span class="course-math" data-tex="S(x)" data-display="false"><code>S(x)</code></span>: student; <span class="course-math" data-tex="L(x)" data-display="false"><code>L(x)</code></span>: lecture; <span class="course-math" data-tex="m" data-display="false"><code>m</code></span>: Mary）

| 句子 | FOL | 易错点 |
|------|-----|--------|
| (a) Mary admires every professor | <span class="course-math" data-tex="\forall x (P(x) \to A(m, x))" data-display="false"><code>\forall x (P(x) \to A(m, x))</code></span> | 不能写成 <span class="course-math" data-tex="\forall x A(m, P(x))" data-display="false"><code>\forall x A(m, P(x))</code></span>（<span class="course-math" data-tex="P(x)" data-display="false"><code>P(x)</code></span> 是公式，不是项） |
| (b) Some professor admires Mary | <span class="course-math" data-tex="\exists x (P(x) \land A(x, m))" data-display="false"><code>\exists x (P(x) \land A(x, m))</code></span> | 存在用 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> |
| (c) No student attended every lecture | <span class="course-math" data-tex="\neg\exists x (S(x) \land \forall y (L(y) \to B(x, y)))" data-display="false"><code>\neg\exists x (S(x) \land \forall y (L(y) \to B(x, y)))</code></span> | "no" = 不存在 |
| (d) No lecture was attended by every student | <span class="course-math" data-tex="\neg\exists x (L(x) \land \forall y (S(y) \to B(y, x)))" data-display="false"><code>\neg\exists x (L(x) \land \forall y (S(y) \to B(y, x)))</code></span> | 语态转换，量词位置变了 |
| (e) No lecture was attended by any student | <span class="course-math" data-tex="\forall x (L(x) \to \forall y (S(y) \to \neg B(y, x)))" data-display="false"><code>\forall x (L(x) \to \forall y (S(y) \to \neg B(y, x)))</code></span> | "any" 在 "no" 的语境中 = 全称 |

**A5.5** 自由形式化（自己定义谓词）：

| 句子 | FOL |
|------|-----|
| (a) All red things are in the box | <span class="course-math" data-tex="\forall x (R(x) \to B(x))" data-display="false"><code>\forall x (R(x) \to B(x))</code></span> |
| (b) **Only** red things are in the box | <span class="course-math" data-tex="\forall x (B(x) \to R(x))" data-display="false"><code>\forall x (B(x) \to R(x))</code></span> |
| (c) No animal is both a cat and a dog | <span class="course-math" data-tex="\forall x (A(x) \to \neg(C(x) \land D(x)))" data-display="false"><code>\forall x (A(x) \to \neg(C(x) \land D(x)))</code></span> |
| (d) Every prize was won by a boy | <span class="course-math" data-tex="\forall x (P(x) \to \exists y (O(y) \land W(y, x)))" data-display="false"><code>\forall x (P(x) \to \exists y (O(y) \land W(y, x)))</code></span> |
| (e) A boy won every prize | <span class="course-math" data-tex="\exists x (O(x) \land \forall y (P(y) \to W(x, y)))" data-display="false"><code>\exists x (O(x) \land \forall y (P(y) \to W(x, y)))</code></span> |

> **(d) vs (e)**：量词顺序是核心区别。(d) 每个 prize 各有自己的 boy（可能不同）；(e) 存在**同一个** boy 赢了所有 prize。

---


## 5. 一阶逻辑 — 语义
{: #section-31 }



### 核心概念
{: #section-32 }


| 概念 | 定义 |
|------|------|
| **自由变元 (Free Variable)** | 该次出现不被任何对应变量的量词绑定 |
| **约束变元 (Bound Variable)** | 该次出现被对应变量的量词绑定 |
| **句子 (Sentence)** | 无自由变元的公式（也称闭公式） |
| **阐释 (Interpretation) <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span>** | Domain + 常量/函数/谓词的具体含义 |
| **环境 (Environment) <span class="course-math" data-tex="E" data-display="false"><code>E</code></span>** | 给自由变元赋值 |


### 语义定义
{: #section-33 }


- <span class="course-math" data-tex="t^{(\mathcal{I}, E)}" data-display="false"><code>t^{(\mathcal{I}, E)}</code></span>：项 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 在 <span class="course-math" data-tex="(\mathcal{I}, E)" data-display="false"><code>(\mathcal{I}, E)</code></span> 下的值（对常量查 <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span>，对变量查 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span>，对函数递归计算）
- <span class="course-math" data-tex="E[x \mapsto d]" data-display="false"><code>E[x \mapsto d]</code></span>：将 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 中 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的值改为 <span class="course-math" data-tex="d" data-display="false"><code>d</code></span>

量词语义：
- <span class="course-math" data-tex="(\forall x\,\alpha)^{(\mathcal{I},E)} = 1" data-display="false"><code>(\forall x\,\alpha)^{(\mathcal{I},E)} = 1</code></span> ⟺ 对**所有** <span class="course-math" data-tex="d \in" data-display="false"><code>d \in</code></span> Domain，<span class="course-math" data-tex="\alpha^{(\mathcal{I}, E[x\mapsto d])} = 1" data-display="false"><code>\alpha^{(\mathcal{I}, E[x\mapsto d])} = 1</code></span>
- <span class="course-math" data-tex="(\exists x\,\alpha)^{(\mathcal{I},E)} = 1" data-display="false"><code>(\exists x\,\alpha)^{(\mathcal{I},E)} = 1</code></span> ⟺ **存在** <span class="course-math" data-tex="d \in" data-display="false"><code>d \in</code></span> Domain，使 <span class="course-math" data-tex="\alpha^{(\mathcal{I}, E[x\mapsto d])} = 1" data-display="false"><code>\alpha^{(\mathcal{I}, E[x\mapsto d])} = 1</code></span>


### 公式分类
{: #section-34 }


| | 定义 |
|---|------|
| **Valid (永真)** | 对所有 <span class="course-math" data-tex="\mathcal{I}, E" data-display="false"><code>\mathcal{I}, E</code></span> 都为真（记 <span class="course-math" data-tex="\vDash \alpha" data-display="false"><code>\vDash \alpha</code></span>） |
| **Satisfiable (可满足)** | 存在 <span class="course-math" data-tex="\mathcal{I}, E" data-display="false"><code>\mathcal{I}, E</code></span> 使其为真 |
| **Unsatisfiable (不可满足)** | 对所有 <span class="course-math" data-tex="\mathcal{I}, E" data-display="false"><code>\mathcal{I}, E</code></span> 都为假 |

> **FOL 的不可判定性**：不存在通用算法判定任意 FOL 公式是否为 valid。（PL 可用真值表判定）


### 语义蕴含
{: #section-35 }


<span class="course-math" data-tex="\Sigma \vDash \alpha" data-display="false"><code>\Sigma \vDash \alpha</code></span> ⟺ 对所有 <span class="course-math" data-tex="\mathcal{I}, E" data-display="false"><code>\mathcal{I}, E</code></span>，若 <span class="course-math" data-tex="\mathcal{I} \vDash_E \Sigma" data-display="false"><code>\mathcal{I} \vDash_E \Sigma</code></span> 则 <span class="course-math" data-tex="\mathcal{I} \vDash_E \alpha" data-display="false"><code>\mathcal{I} \vDash_E \alpha</code></span>


### 重要等价
{: #section-36 }


| 等价关系 |
|----------|
| <span class="course-math" data-tex="\neg\forall x P(x) \equiv \exists x \neg P(x)" data-display="false"><code>\neg\forall x P(x) \equiv \exists x \neg P(x)</code></span> |
| <span class="course-math" data-tex="\neg\exists x P(x) \equiv \forall x \neg P(x)" data-display="false"><code>\neg\exists x P(x) \equiv \forall x \neg P(x)</code></span> |
| <span class="course-math" data-tex="\forall x \forall y P(x,y) \equiv \forall y \forall x P(x,y)" data-display="false"><code>\forall x \forall y P(x,y) \equiv \forall y \forall x P(x,y)</code></span> |
| <span class="course-math" data-tex="\exists x \exists y P(x,y) \equiv \exists y \exists x P(x,y)" data-display="false"><code>\exists x \exists y P(x,y) \equiv \exists y \exists x P(x,y)</code></span> |
| <span class="course-math" data-tex="\forall x(P(x) \land Q(x)) \equiv (\forall x P(x)) \land (\forall x Q(x))" data-display="false"><code>\forall x(P(x) \land Q(x)) \equiv (\forall x P(x)) \land (\forall x Q(x))</code></span> |
| <span class="course-math" data-tex="\exists x(P(x) \lor Q(x)) \equiv (\exists x P(x)) \lor (\exists x Q(x))" data-display="false"><code>\exists x(P(x) \lor Q(x)) \equiv (\exists x P(x)) \lor (\exists x Q(x))</code></span> |

---


### 例题：Assignment 6.1-6.4
{: #section-37 }


**A6.1** 对 <span class="course-math" data-tex="\alpha = \exists x(P(y, z) \land (\forall y(\neg Q(y, x) \lor P(y, z))))" data-display="false"><code>\alpha = \exists x(P(y, z) \land (\forall y(\neg Q(y, x) \lor P(y, z))))</code></span>，画解析树并标自由/约束：

- <span class="course-math" data-tex="P(y,z)" data-display="false"><code>P(y,z)</code></span> 中的 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> → **自由**（在 <span class="course-math" data-tex="\forall y" data-display="false"><code>\forall y</code></span> 作用域外）
- <span class="course-math" data-tex="P(y,z)" data-display="false"><code>P(y,z)</code></span> 中的 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> → **自由**
- <span class="course-math" data-tex="Q(y,x)" data-display="false"><code>Q(y,x)</code></span> 中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> → **约束**（被 <span class="course-math" data-tex="\exists x" data-display="false"><code>\exists x</code></span> 绑定）
- <span class="course-math" data-tex="Q(y,x)" data-display="false"><code>Q(y,x)</code></span> 和 <span class="course-math" data-tex="P(y,z)" data-display="false"><code>P(y,z)</code></span>（第二个）中的 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> → **约束**（被 <span class="course-math" data-tex="\forall y" data-display="false"><code>\forall y</code></span> 绑定）
- 第二个 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> → 与第一个相同，**自由**

**A6.2** Domain <span class="course-math" data-tex="\{3,4\}" data-display="false"><code>\{3,4\}</code></span>, <span class="course-math" data-tex="f^{\mathcal{I}}(3)=4, f^{\mathcal{I}}(4)=3" data-display="false"><code>f^{\mathcal{I}}(3)=4, f^{\mathcal{I}}(4)=3</code></span>, <span class="course-math" data-tex="F^{\mathcal{I}} = \{\langle3,4\rangle, \langle4,3\rangle\}" data-display="false"><code>F^{\mathcal{I}} = \{\langle3,4\rangle, \langle4,3\rangle\}</code></span>

| 公式 | 值 | 理由 |
|------|-----|------|
| <span class="course-math" data-tex="\forall x \exists y F(x,y)" data-display="false"><code>\forall x \exists y F(x,y)</code></span> | **True** | <span class="course-math" data-tex="x=3" data-display="false"><code>x=3</code></span> 有 <span class="course-math" data-tex="y=4" data-display="false"><code>y=4</code></span>；<span class="course-math" data-tex="x=4" data-display="false"><code>x=4</code></span> 有 <span class="course-math" data-tex="y=3" data-display="false"><code>y=3</code></span>。全满足 |
| <span class="course-math" data-tex="\exists x \forall y F(x,y)" data-display="false"><code>\exists x \forall y F(x,y)</code></span> | **False** | <span class="course-math" data-tex="x=3" data-display="false"><code>x=3</code></span> 时 <span class="course-math" data-tex="(3,3) \notin F^{\mathcal{I}}" data-display="false"><code>(3,3) \notin F^{\mathcal{I}}</code></span>；<span class="course-math" data-tex="x=4" data-display="false"><code>x=4</code></span> 时 <span class="course-math" data-tex="(4,4) \notin F^{\mathcal{I}}" data-display="false"><code>(4,4) \notin F^{\mathcal{I}}</code></span>。不存在这样的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> |
| <span class="course-math" data-tex="\forall x \forall y (F(x,y) \to F(f(x), f(y)))" data-display="false"><code>\forall x \forall y (F(x,y) \to F(f(x), f(y)))</code></span> | **True** | 枚举 4 对 <span class="course-math" data-tex="(x,y)" data-display="false"><code>(x,y)</code></span>：<span class="course-math" data-tex="(3,3)" data-display="false"><code>(3,3)</code></span> 前提假→整体真；<span class="course-math" data-tex="(3,4)" data-display="false"><code>(3,4)</code></span>: <span class="course-math" data-tex="F(3,4)=1, F(f(3),f(4))=F(4,3)=1" data-display="false"><code>F(3,4)=1, F(f(3),f(4))=F(4,3)=1</code></span>；<span class="course-math" data-tex="(4,3)" data-display="false"><code>(4,3)</code></span>: 同理；<span class="course-math" data-tex="(4,4)" data-display="false"><code>(4,4)</code></span> 前提假→整体真 |

**A6.3** Domain <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span>, <span class="course-math" data-tex="a^{\mathcal{I}}=2" data-display="false"><code>a^{\mathcal{I}}=2</code></span>, <span class="course-math" data-tex="f^{\mathcal{I}}(x,y)=x+y" data-display="false"><code>f^{\mathcal{I}}(x,y)=x+y</code></span>, <span class="course-math" data-tex="g^{\mathcal{I}}(x,y)=x\times y" data-display="false"><code>g^{\mathcal{I}}(x,y)=x\times y</code></span>, <span class="course-math" data-tex="P^{\mathcal{I}}(x,y): x=y" data-display="false"><code>P^{\mathcal{I}}(x,y): x=y</code></span>, <span class="course-math" data-tex="E(x)=0, E(y)=1, E(z)=2" data-display="false"><code>E(x)=0, E(y)=1, E(z)=2</code></span>

| 公式 | 自然语言含义 | 真值 |
|------|-------------|------|
| <span class="course-math" data-tex="\forall x P(g(x,a), y)" data-display="false"><code>\forall x P(g(x,a), y)</code></span> | "对所有自然数 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>, <span class="course-math" data-tex="x \times 2 = 1" data-display="false"><code>x \times 2 = 1</code></span>" | **False**（<span class="course-math" data-tex="x=0" data-display="false"><code>x=0</code></span> 时 <span class="course-math" data-tex="0\neq 1" data-display="false"><code>0\neq 1</code></span>） |
| <span class="course-math" data-tex="\forall x(P(f(x,a), y) \to \forall y P(f(y,a), x))" data-display="false"><code>\forall x(P(f(x,a), y) \to \forall y P(f(y,a), x))</code></span> | "对所有 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span>，若 <span class="course-math" data-tex="x+2=1" data-display="false"><code>x+2=1</code></span>，则对所有 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span>, <span class="course-math" data-tex="y+2=x" data-display="false"><code>y+2=x</code></span>" | **True**（前提 <span class="course-math" data-tex="x+2=1" data-display="false"><code>x+2=1</code></span> 在 <span class="course-math" data-tex="\mathbb{N}" data-display="false"><code>\mathbb{N}</code></span> 上恒假） |
| <span class="course-math" data-tex="\forall x \forall y \exists z P(f(x,y), z)" data-display="false"><code>\forall x \forall y \exists z P(f(x,y), z)</code></span> | "对所有 <span class="course-math" data-tex="x,y" data-display="false"><code>x,y</code></span>，存在 <span class="course-math" data-tex="z" data-display="false"><code>z</code></span> 使 <span class="course-math" data-tex="x+y=z" data-display="false"><code>x+y=z</code></span>" | **True** |
| <span class="course-math" data-tex="\exists x P(f(x,y), g(x,z))" data-display="false"><code>\exists x P(f(x,y), g(x,z))</code></span> | "存在 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 使 <span class="course-math" data-tex="x+1 = x \times 2" data-display="false"><code>x+1 = x \times 2</code></span>" | **True**（<span class="course-math" data-tex="x=1" data-display="false"><code>x=1</code></span>: <span class="course-math" data-tex="1+1=2, 1\times2=2" data-display="false"><code>1+1=2, 1\times2=2</code></span>） |

**A6.4** 判定 valid / satisfiable / unsatisfiable：

| 公式 | 答案 | 理由 |
|------|------|------|
| <span class="course-math" data-tex="P(x,y) \to (Q(x,y) \to P(x,y))" data-display="false"><code>P(x,y) \to (Q(x,y) \to P(x,y))</code></span> | **Valid** | PL tautology 的代换实例（<span class="course-math" data-tex="A \to (B \to A)" data-display="false"><code>A \to (B \to A)</code></span>） |
| <span class="course-math" data-tex="\forall x(P(x) \to P(x)) \to \exists y(Q(y) \land \neg Q(y))" data-display="false"><code>\forall x(P(x) \to P(x)) \to \exists y(Q(y) \land \neg Q(y))</code></span> | **Unsatisfiable** | 前件永真，后件永假；<span class="course-math" data-tex="1 \to 0 = 0" data-display="false"><code>1 \to 0 = 0</code></span> |
| <span class="course-math" data-tex="\forall x \forall y (P(x,y) \to P(y,x))" data-display="false"><code>\forall x \forall y (P(x,y) \to P(y,x))</code></span> | **Satisfiable** | 取 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 为 <span class="course-math" data-tex="=" data-display="false"><code>=</code></span> → True；取 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 为 <span class="course-math" data-tex="&lt;" data-display="false"><code>&lt;</code></span> → False。故不是 valid 也不是 unsatisfiable |
| <span class="course-math" data-tex="\neg(\forall x P(x) \to \exists y Q(y)) \land \exists y Q(y)" data-display="false"><code>\neg(\forall x P(x) \to \exists y Q(y)) \land \exists y Q(y)</code></span> | **Unsatisfiable** | 设公式为真：前半要求 <span class="course-math" data-tex="\forall x P(x)=1" data-display="false"><code>\forall x P(x)=1</code></span> 且 <span class="course-math" data-tex="\exists y Q(y)=0" data-display="false"><code>\exists y Q(y)=0</code></span>；后半要求 <span class="course-math" data-tex="\exists y Q(y)=1" data-display="false"><code>\exists y Q(y)=1</code></span>。矛盾 |
| <span class="course-math" data-tex="\exists x P(x,y)" data-display="false"><code>\exists x P(x,y)</code></span> | **Satisfiable** | <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 自由，可选择合适的阐释 <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span> 和环境 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span>（赋值给 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span>）满足；也可取不满足的阐释。故 satisfiable |

---


## 6. 一阶逻辑 — ND 证明
{: #section-38 }



### 替换 (Substitution)
{: #section-39 }


<span class="course-math" data-tex="\alpha[t/x]" data-display="false"><code>\alpha[t/x]</code></span> 表示将 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 中所有**自由出现**的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 替换为 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span>。

> 避免 **capture**：若 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 含变量 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span>，而替换处 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 在 <span class="course-math" data-tex="\forall y" data-display="false"><code>\forall y</code></span> / <span class="course-math" data-tex="\exists y" data-display="false"><code>\exists y</code></span> 的作用域内，需先 rename bound variable。


### 量词推理规则
{: #section-40 }


| 规则 | 形式 | 条件 |
|------|------|------|
| <span class="course-math" data-tex="\forall e" data-display="false"><code>\forall e</code></span> | <span class="course-math" data-tex="\dfrac{\forall x\,\alpha}{\alpha[t/x]}" data-display="false"><code>\dfrac{\forall x\,\alpha}{\alpha[t/x]}</code></span> | <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 对 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 可代入（无 capture） |
| <span class="course-math" data-tex="\forall i" data-display="false"><code>\forall i</code></span> | <span class="course-math" data-tex="\dfrac{\boxed{y \text{ fresh} \;\vdots\; \alpha[y/x]}}{\forall x\,\alpha}" data-display="false"><code>\dfrac{\boxed{y \text{ fresh} \;\vdots\; \alpha[y/x]}}{\forall x\,\alpha}</code></span> | <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 不出现在 subproof 之外的任何地方 |
| <span class="course-math" data-tex="\exists i" data-display="false"><code>\exists i</code></span> | <span class="course-math" data-tex="\dfrac{\alpha[t/x]}{\exists x\,\alpha}" data-display="false"><code>\dfrac{\alpha[t/x]}{\exists x\,\alpha}</code></span> | <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 对 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 可代入 |
| <span class="course-math" data-tex="\exists e" data-display="false"><code>\exists e</code></span> | <span class="course-math" data-tex="\dfrac{\exists x\,\alpha \quad \boxed{\alpha[u/x], u \text{ fresh} \;\vdots\; \beta}}{\beta}" data-display="false"><code>\dfrac{\exists x\,\alpha \quad \boxed{\alpha[u/x], u \text{ fresh} \;\vdots\; \beta}}{\beta}</code></span> | <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 不出现在 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 或 subproof 外或未释放的假设中 |

> **PL 所有规则在 FOL 中仍然可用。**

---


### 例题：Assignment 6.5 (FOL ND)
{: #section-41 }


**A6.5.1** <span class="course-math" data-tex="\exists x P(x) \lor \exists x Q(x) \vdash \exists x (P(x) \lor Q(x))" data-display="false"><code>\exists x P(x) \lor \exists x Q(x) \vdash \exists x (P(x) \lor Q(x))</code></span>

```
1. ∃xP(x) ∨ ∃xQ(x)               [Premise]
   ┌ 2. ∃xP(x)                   [Assume]
   │   ┌ 3. P(u), u fresh        [Assume]
   │   │ 4. P(u) ∨ Q(u)          [∨i 3]
   │   │ 5. ∃x(P(x) ∨ Q(x))      [∃i 4]
   │   └
   │ 6. ∃x(P(x) ∨ Q(x))          [∃e 2, 3-5]
   └
   ┌ 7. ∃xQ(x)                   [Assume]
   │   ┌ 8. Q(u), u fresh        [Assume]
   │   │ 9. P(u) ∨ Q(u)          [∨i 8]
   │   │ 10. ∃x(P(x) ∨ Q(x))     [∃i 9]
   │   └
   │ 11. ∃x(P(x) ∨ Q(x))         [∃e 7, 8-10]
   └
12. ∃x(P(x) ∨ Q(x))              [∨e 1, 2-6, 7-11]
```

**A6.5.2** <span class="course-math" data-tex="\neg\forall x \neg P(x) \vdash \exists x P(x)" data-display="false"><code>\neg\forall x \neg P(x) \vdash \exists x P(x)</code></span>

```
1. ¬∀x¬P(x)                       [Premise]
   ┌ 2. ¬∃xP(x)                   [Assume]
   │   ┌ 3. u fresh
   │   │   ┌ 4. P(u)              [Assume]
   │   │   │ 5. ∃xP(x)            [∃i 4]
   │   │   │ 6. ⊥                 [⊥i 2,5]
   │   │   └
   │   │ 7. ¬P(u)                 [¬i 4-6]
   │   └
   │ 8. ∀x¬P(x)                   [∀i 3-7]
   │ 9. ⊥                         [⊥i 1,8]
   └
10. ∃xP(x)                        [PBC 2-9]
```

**A6.5.3** <span class="course-math" data-tex="\{\forall x(Q(x) \to R(x)),\; \exists x(P(x) \land Q(x))\} \vdash \exists x(P(x) \land R(x))" data-display="false"><code>\{\forall x(Q(x) \to R(x)),\; \exists x(P(x) \land Q(x))\} \vdash \exists x(P(x) \land R(x))</code></span>

```
1. ∀x(Q(x)→R(x))                  [Premise]
2. ∃x(P(x)∧Q(x))                  [Premise]
   ┌ 3. P(u)∧Q(u), u fresh       [Assume]
   │ 4. P(u)                      [∧e 3]
   │ 5. Q(u)                      [∧e 3]
   │ 6. Q(u)→R(u)                 [∀e 1]
   │ 7. R(u)                      [→e 5,6]
   │ 8. P(u)∧R(u)                 [∧i 4,7]
   │ 9. ∃x(P(x)∧R(x))            [∃i 8]
   └
10. ∃x(P(x)∧R(x))                [∃e 2, 3-9]
```

**A6.5.4** <span class="course-math" data-tex="\{\forall x P(a, x, x),\; \forall x \forall y \forall z(P(x, y, z) \to P(f(x), y, f(z)))\} \vdash P(f(a), a, f(a))" data-display="false"><code>\{\forall x P(a, x, x),\; \forall x \forall y \forall z(P(x, y, z) \to P(f(x), y, f(z)))\} \vdash P(f(a), a, f(a))</code></span>

```
1. ∀x P(a, x, x)                                [Premise]
2. ∀x∀y∀z(P(x,y,z)→P(f(x),y,f(z)))             [Premise]
3. P(a, a, a)                                   [∀e 1]
4. ∀y∀z(P(a,y,z)→P(f(a),y,f(z)))               [∀e 2]
5. ∀z(P(a,a,z)→P(f(a),a,f(z)))                  [∀e 4]
6. P(a,a,a)→P(f(a),a,f(a))                      [∀e 5]
7. P(f(a),a,f(a))                               [→e 3,6]
```

> 这个证明只需反复用 <span class="course-math" data-tex="\forall e" data-display="false"><code>\forall e</code></span> 实例化到合适的项，最后 MP。注意选对每次 <span class="course-math" data-tex="\forall e" data-display="false"><code>\forall e</code></span> 的替换项。
{% endraw %}
