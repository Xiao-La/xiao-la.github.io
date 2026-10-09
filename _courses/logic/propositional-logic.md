---
title: "Propositional Logic - 命题逻辑"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
created_at: "2026-03-11T10:39:43+08:00"
updated_at: "2026-10-09T16:13:40+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/logic/propositional-logic/"
course_page: true
doc_type: "note"
description: "数理逻辑导论 · Propositional Logic - 命题逻辑"
excerpt: "数理逻辑导论 · Propositional Logic - 命题逻辑"
---

{% raw %}
<span class="course-math course-math-display" data-tex="\mathscr{L}^p" data-display="true"><code>\mathscr{L}^p</code></span>

## 形式语言（Formal Language）
{: #section-1 }


语言（Language）：
- 字母表（Alphabet）
- 语法（Syntax）
- 语义（Semantics）


### 字母表
{: #section-2 }


命题（Proposition）
- 原子命题（Atomic Proposition, atom）：最小的不可分的命题。
- 复合命题（Compound Proposition）

逻辑连接词（Logic Connectives）
1. 否定（Not, Negation） (<span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span>)
2. 合取 （And, Conjunction）(<span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span>)
3. 析取 （Or, Disjunction）(<span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span>)
4. 异或 （Exclusive Or）(<span class="course-math" data-tex="\oplus" data-display="false"><code>\oplus</code></span>)
5. 蕴含 （Implication） (<span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span>)
6. 等价（If and only if, Equivalence）(<span class="course-math" data-tex="\leftrightarrow" data-display="false"><code>\leftrightarrow</code></span>)

标点符号（Punctuation）

### 语法
{: #section-3 }


表达式 (Expression)：有限的符号组合。
- 良构公式（Well-formed formulas, wff）

WFF 的形式归纳定义： <span class="course-math" data-tex="\text{Form}(\mathscr{L}^p)" data-display="false"><code>\text{Form}(\mathscr{L}^p)</code></span> 是满足以下条件的表达式的最小集合：
- <span class="course-math" data-tex="\text{Atom}(\mathscr{L}^p) \subseteq\text{Form}(\mathscr{L}^p)" data-display="false"><code>\text{Atom}(\mathscr{L}^p) \subseteq\text{Form}(\mathscr{L}^p)</code></span>
- 若 <span class="course-math" data-tex="\alpha \in\text{Form}(\mathscr{L}^p)" data-display="false"><code>\alpha \in\text{Form}(\mathscr{L}^p)</code></span>，则 <span class="course-math" data-tex="(\neg \alpha) \in\text{Form}(\mathscr{L}^p)" data-display="false"><code>(\neg \alpha) \in\text{Form}(\mathscr{L}^p)</code></span>
- 若 <span class="course-math" data-tex="\alpha,\beta \in\text{Form}(\mathscr{L}^p)" data-display="false"><code>\alpha,\beta \in\text{Form}(\mathscr{L}^p)</code></span>，则 <span class="course-math" data-tex="(\alpha \land \beta), (\alpha \lor \beta), (\alpha \to \beta), (\alpha \leftrightarrow \beta) \in\text{Form}(\mathscr{L}^p)" data-display="false"><code>(\alpha \land \beta), (\alpha \lor \beta), (\alpha \to \beta), (\alpha \leftrightarrow \beta) \in\text{Form}(\mathscr{L}^p)</code></span>

概念
- 空表达式（Empty expression）：长度为 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 的表达式，记作 <span class="course-math" data-tex="\lambda" data-display="false"><code>\lambda</code></span>。
- 连接（Concatenation）：<span class="course-math" data-tex="uv" data-display="false"><code>uv</code></span> 表示按顺序连接两个表达式 <span class="course-math" data-tex="u,v" data-display="false"><code>u,v</code></span> 得到的结果，<span class="course-math" data-tex="\lambda u = u\lambda = u" data-display="false"><code>\lambda u = u\lambda = u</code></span>。
- 段（Segment）：若存在表达式 <span class="course-math" data-tex="w_1,w_2" data-display="false"><code>w_1,w_2</code></span> 使得 <span class="course-math" data-tex="u = w_1 v w_2," data-display="false"><code>u = w_1 v w_2,</code></span> 则称 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的一个段。
- 真段（Proper segment）：若 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的段，且 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 非空并且 <span class="course-math" data-tex="v \ne u" data-display="false"><code>v \ne u</code></span>，则 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的真段。
- 初始段/前缀（Initial segment / Prefix）与终止段/后缀（Terminal segment / Suffix）：若 <span class="course-math" data-tex="u = vw" data-display="false"><code>u = vw</code></span> ，其中 <span class="course-math" data-tex="u,v,w" data-display="false"><code>u,v,w</code></span> 为表达式，则 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的初始段（前缀），<span class="course-math" data-tex="w" data-display="false"><code>w</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的终止段（后缀）。
- 真前缀（Proper prefix）与真后缀（Proper suffix）：若 <span class="course-math" data-tex="u = vw" data-display="false"><code>u = vw</code></span>，其中 <span class="course-math" data-tex="u,v,w" data-display="false"><code>u,v,w</code></span> 为表达式，且 <span class="course-math" data-tex="v,w" data-display="false"><code>v,w</code></span> 均非空，则 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的真前缀，<span class="course-math" data-tex="w" data-display="false"><code>w</code></span> 是 <span class="course-math" data-tex="u" data-display="false"><code>u</code></span> 的真后缀。

WFF 的性质：
- WFF 是非空的表达式。
- WFF 中的开闭括号数量相等。
- 良构公式 <span class="course-math" data-tex="\varphi \in \mathscr{L}^P" data-display="false"><code>\varphi \in \mathscr{L}^P</code></span> 的任意**真前缀** 中，左括号（opening brackets）的个数**严格多于**右括号（closing brackets）的个数。
- 类似地，<span class="course-math" data-tex="\varphi \in \mathscr{L}^P" data-display="false"><code>\varphi \in \mathscr{L}^P</code></span> 的任意**真后缀**中，右括号的个数**严格多于**左括号的个数。
- 因此，真前缀与真后缀都**不是** <span class="course-math" data-tex="\mathscr{L}^P" data-display="false"><code>\mathscr{L}^P</code></span> 中的良构公式。

可以使用这些性质来判定一个表达式不是一个 WFF，但要判定一个表达式是 WFF，需要使用定义中的构造规则。
也就是说，一个表达式是 WFF 当且仅当它有一个解析树（Parse Tree）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑" width="505" height="254" loading="lazy" decoding="async">
或简化形式：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-1.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-1" width="504" height="382" loading="lazy" decoding="async">

概念
- 子公式（subformula）：公式 <span class="course-math" data-tex="G" data-display="false"><code>G</code></span> 若在公式 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 内出现，则称 <span class="course-math" data-tex="G" data-display="false"><code>G</code></span> 是 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 的子公式。
- 真子公式（proper subformula）：若 <span class="course-math" data-tex="G" data-display="false"><code>G</code></span> 是 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 的子公式且 <span class="course-math" data-tex="G \neq F" data-display="false"><code>G \neq F</code></span>，则称 <span class="course-math" data-tex="G" data-display="false"><code>G</code></span> 是 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 的真子公式。
- 解析树节点（parse tree nodes）：<span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 的解析树的所有节点所对应的公式，构成 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 的子公式集合。
- 直接子公式（immediate subformulas）：某公式在其解析树中的**子节点**（children）所对应的公式。
- 主连接词（leading connective）：用于连接这些子节点的连接词。

唯一可读性定理（Unique Readability Theorem）：有唯一的一种方式来构造每个 WFF。（消除二义性（Ambiguity））
- 证明：考虑 <span class="course-math" data-tex="\varphi = (\neg\alpha)" data-display="false"><code>\varphi = (\neg\alpha)</code></span> 和 <span class="course-math" data-tex="\varphi = (\alpha * \beta)" data-display="false"><code>\varphi = (\alpha * \beta)</code></span>。

为了可读性，有*惯例：*
- 将 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 和 <span class="course-math" data-tex="(F)" data-display="false"><code>(F)</code></span> 视为相同的公式。
- 优先级（Precedence）：从高到低为 <span class="course-math" data-tex="(), \neg,\land,\lor,\to,\leftrightarrow" data-display="false"><code>(), \neg,\land,\lor,\to,\leftrightarrow</code></span>。
- 结合性（Associativity）：<span class="course-math" data-tex="\land, \lor, \leftrightarrow" data-display="false"><code>\land, \lor, \leftrightarrow</code></span> 具有结合性。<span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> 按右结合约定解析（不满足结合律）。


### 语义
{: #section-4 }


**常见逻辑连接词（Logical Connectives）真值表（Truth table）**
<span class="course-math" data-tex="\neg, \land" data-display="false"><code>\neg, \land</code></span> 的真值表显然。
<span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 注意是“Inclusive Or”。
<span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span>  的真值表：

| <span class="course-math" data-tex="P" data-display="false"><code>P</code></span>   | <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>   | <span class="course-math" data-tex="P\to Q" data-display="false"><code>P\to Q</code></span> |
| ----- | ----- | -------- |
| false | false | true     |
| false | true  | true     |
| true  | false | false    |
| true  | true  | true     |

这里 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是前件（Antecedent），<span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 是后件（Consequent），<span class="course-math" data-tex="P\to Q" data-display="false"><code>P\to Q</code></span> 相当于 <span class="course-math" data-tex="\neg P\lor Q" data-display="false"><code>\neg P\lor Q</code></span>。


<span class="course-math" data-tex="\leftrightarrow" data-display="false"><code>\leftrightarrow</code></span> 的真值表：

| <span class="course-math" data-tex="P" data-display="false"><code>P</code></span>   | <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>   | <span class="course-math" data-tex="P\leftrightarrow Q" data-display="false"><code>P\leftrightarrow Q</code></span> |
| ----- | ----- | -------------------- |
| false | false | true                 |
| false | true  | false                |
| true  | false | false                |
| true  | true  | true                 |

真值赋值（Truth Valuation）
- 函数 <span class="course-math" data-tex="v:\mathrm{Atom}(\mathscr{L}^P)\to\{0,1\}" data-display="false"><code>v:\mathrm{Atom}(\mathscr{L}^P)\to\{0,1\}</code></span>。
- 记号：若 <span class="course-math" data-tex="p\in \mathrm{Atom}(\mathscr{L}^P)" data-display="false"><code>p\in \mathrm{Atom}(\mathscr{L}^P)</code></span>，则用 <span class="course-math" data-tex="v(p)" data-display="false"><code>v(p)</code></span> 或 <span class="course-math" data-tex="p^v" data-display="false"><code>p^v</code></span> 表示 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 在赋值 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 下的真值，且 <span class="course-math" data-tex="p^v\in\{0,1\}" data-display="false"><code>p^v\in\{0,1\}</code></span>。

若 <span class="course-math" data-tex="A \in \mathscr{L}^p" data-display="false"><code>A \in \mathscr{L}^p</code></span>：
• 若 <span class="course-math" data-tex="\forall v" data-display="false"><code>\forall v</code></span>，有 <span class="course-math" data-tex="A^v=1" data-display="false"><code>A^v=1</code></span> 则称 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为永真式（tautology/重言式）
• 若 <span class="course-math" data-tex="\forall v" data-display="false"><code>\forall v</code></span>，有 <span class="course-math" data-tex="A^v=0" data-display="false"><code>A^v=0</code></span> 则称 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为永假式（contradiction/矛盾式)
• 若 <span class="course-math" data-tex="\exists v" data-display="false"><code>\exists v</code></span>，使得 <span class="course-math" data-tex="A^v=1" data-display="false"><code>A^v=1</code></span> 则称 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为可满足的（satisfiable）

要证明某个式子是永真式/永假式/可满足的，可以用：
- 赋值树（Valuation Tree）：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-2.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-2" width="487" height="239" loading="lazy" decoding="async">
- 反证法（Proof by Contradiction）
- 真值表

逻辑等价（Logical Equivalence）：在任意赋值下，两个式子都有相同的值，则称它们等价。也就是说，<span class="course-math" data-tex="A\leftrightarrow B" data-display="false"><code>A\leftrightarrow B</code></span> 是永真式。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-3.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-3" width="440" height="310" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-4.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-4" width="540" height="303" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-5.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-5" width="541" height="114" loading="lazy" decoding="async">

**代换实例（Substitution Instance）：** 将公式中的原子命题统一替换为其他公式，且保持替换的一致性（同一原子命题的所有出现均替换为同一公式）得到的式子。
- 一个永真式的代换实例仍然是永真式。
**代换定理：** 如果 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是一个 wff ，它有一个子式 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span>，且 <span class="course-math" data-tex="C \equiv D" data-display="false"><code>C \equiv D</code></span>，则将 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的某些 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 代换成 <span class="course-math" data-tex="D" data-display="false"><code>D</code></span> 得到的结果 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 有 <span class="course-math" data-tex="A\equiv B" data-display="false"><code>A\equiv B</code></span>。

逻辑等价（<span class="course-math" data-tex="\equiv" data-display="false"><code>\equiv</code></span>）意味着真值表相同，它是 <span class="course-math" data-tex="\text{Form}(\mathscr{L}^p)" data-display="false"><code>\text{Form}(\mathscr{L}^p)</code></span> 上的一个等价关系，也就是说满足自反性，对称性和传递性。

**一组式子的可满足性（Satisfiability）**：若 <span class="course-math" data-tex="\Sigma \subseteq\text{Form}(\mathscr{L}^p)" data-display="false"><code>\Sigma \subseteq\text{Form}(\mathscr{L}^p)</code></span>，则定义 <span class="course-math" data-tex="\Sigma^v=1" data-display="false"><code>\Sigma^v=1</code></span> 当且仅当 <span class="course-math" data-tex="\forall B\in \Sigma, B^v=1" data-display="false"><code>\forall B\in \Sigma, B^v=1</code></span>。若存在某种赋值 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 使得 <span class="course-math" data-tex="\Sigma^v=1" data-display="false"><code>\Sigma^v=1</code></span>, 则称 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 是可满足的（Satisfiable）；称 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 满足了 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span>.

**蕴含（Entailment）：** 假设 <span class="course-math" data-tex="\Sigma \subseteq\text{Form}(\mathscr{L}^p), \alpha\in\text{Form}(\mathscr{L}^p)" data-display="false"><code>\Sigma \subseteq\text{Form}(\mathscr{L}^p), \alpha\in\text{Form}(\mathscr{L}^p)</code></span>，称 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 蕴含 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>（记作 <span class="course-math" data-tex="\Sigma \vDash A" data-display="false"><code>\Sigma \vDash A</code></span> ），或 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 推出的结论，当且仅当 <span class="course-math" data-tex="\forall v, \Sigma^v =1\to A^v=1" data-display="false"><code>\forall v, \Sigma^v =1\to A^v=1</code></span>。
- <span class="course-math" data-tex="A\equiv B" data-display="false"><code>A\equiv B</code></span> 当且仅当 <span class="course-math" data-tex="A\vDash B" data-display="false"><code>A\vDash B</code></span> 且 <span class="course-math" data-tex="B\vDash A" data-display="false"><code>B\vDash A</code></span>。
- <span class="course-math" data-tex="\varnothing \vDash A" data-display="false"><code>\varnothing \vDash A</code></span> 说明 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是永真式（因为空集是空真的）。
- <span class="course-math" data-tex="A\vDash B" data-display="false"><code>A\vDash B</code></span> 当且仅当 <span class="course-math" data-tex="A\to B" data-display="false"><code>A\to B</code></span> 是永真式。

**证明蕴含关系：**
- 列真值表，说明 <span class="course-math" data-tex="\Sigma ^v=1" data-display="false"><code>\Sigma ^v=1</code></span> 的行中都有 <span class="course-math" data-tex="A^v=1" data-display="false"><code>A^v=1</code></span>。
- 反证法，假设存在 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 使得 <span class="course-math" data-tex="\Sigma^v=1" data-display="false"><code>\Sigma^v=1</code></span> 但是 <span class="course-math" data-tex="A^v=0" data-display="false"><code>A^v=0</code></span>，导出矛盾。
**证明不蕴含关系：**
- 找到一种赋值 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 使得 <span class="course-math" data-tex="\Sigma^v=1" data-display="false"><code>\Sigma^v=1</code></span> 但是 <span class="course-math" data-tex="A^{v}=0" data-display="false"><code>A^{v}=0</code></span>。

<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元布尔函数（N-ary Boolean Functions）：
<span class="course-math course-math-display" data-tex="f:\{ T,F \}^{n}\to \{ T, F \}" data-display="true"><code>f:\{ T,F \}^{n}\to \{ T, F \}</code></span>
共有 <span class="course-math" data-tex="2^{2^n}" data-display="false"><code>2^{2^n}</code></span> 种可能的 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元布尔函数。

一些有意义的二元布尔函数：
- 或非（Joint Denial）：<span class="course-math" data-tex="p \downarrow q \equiv \neg(p\lor q)" data-display="false"><code>p \downarrow q \equiv \neg(p\lor q)</code></span>
- 与非（Alternative Denial）： <span class="course-math" data-tex="p\uparrow q \equiv \neg(p\land q)" data-display="false"><code>p\uparrow q \equiv \neg(p\land q)</code></span>
- 异或（Exclusive or）：<span class="course-math" data-tex="p \otimes q\equiv \neg(p\leftrightarrow q)" data-display="false"><code>p \otimes q\equiv \neg(p\leftrightarrow q)</code></span>。

**完备集合（Adequate Set）：** 所有 wff 都能只用集合中的连接词表示。
**定理：** <span class="course-math" data-tex="\{ \neg, \land, \lor \},\{ \neg, \land \}, \{ \neg, \lor \}, \{ \neg, \to \}" data-display="false"><code>\{ \neg, \land, \lor \},\{ \neg, \land \}, \{ \neg, \lor \}, \{ \neg, \to \}</code></span>  都是完备集合。

要证明一个集合完备，只需证明其他逻辑连接词可以只用集合中的连接词表示（这里的全集是 <span class="course-math" data-tex="\{ \neg, \land, \lor , \to, \leftrightarrow \}" data-display="false"><code>\{ \neg, \land, \lor , \to, \leftrightarrow \}</code></span>）。
要证明一个集合不完备，可以考虑证明该集合构造出来的式子具有一些特性，然后说明用某个其他连接词构造的式子不具备这个特性，从而证明后者无法用前者表示。

定理：任意的 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元布尔函数都可以只用一个完备集合中的连接词定义。


### 形式推演系统
{: #section-5 }


形式证明系统（Formal Proof System）
- 语言 (符号，字母表，wff)
- 推理（公理，推理规则）

由前提 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 可以推出结论 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 记作：
<span class="course-math course-math-display" data-tex="\Sigma \vdash A" data-display="true"><code>\Sigma \vdash A</code></span>

#### Hilbert-style System
{: #section-6 }

<span class="course-math course-math-display" data-tex="\mathscr{H}" data-display="true"><code>\mathscr{H}</code></span>
线性。

**语言：**
- 字母表： <span class="course-math" data-tex="\Sigma=\{ (,),\neg, \to, p, q, r, \dots \}" data-display="false"><code>\Sigma=\{ (,),\neg, \to, p, q, r, \dots \}</code></span>
- 公式：与 wff 类似的定义。

**公理（Axioms）：**
- <span class="course-math" data-tex="A\to(B\to A)" data-display="false"><code>A\to(B\to A)</code></span>
- <span class="course-math" data-tex="(A\to(B\to C))\to((A\to B)\to(A\to C))" data-display="false"><code>(A\to(B\to C))\to((A\to B)\to(A\to C))</code></span>
- <span class="course-math" data-tex="(\neg A\to \neg B)\to(B\to A)" data-display="false"><code>(\neg A\to \neg B)\to(B\to A)</code></span>
*注意这里是语法和符号上的公理，和语义无关。*

**推理规则（Inference rule）：**
- 分离规则（Modus ponens, MP）：<span class="course-math" data-tex="\displaystyle \dfrac{(A \to B,\, A)}{B}" data-display="false"><code>\displaystyle \dfrac{(A \to B,\, A)}{B}</code></span>

**证明（Proof）**：
- 以 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 为前提（Premises）对 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的一个证明，是一个有限序列 <span class="course-math" data-tex="A_{1}, A_{2}, \dots, A_{n}" data-display="false"><code>A_{1}, A_{2}, \dots, A_{n}</code></span>。
- 对于任意 <span class="course-math" data-tex="i\leq n" data-display="false"><code>i\leq n</code></span>，<span class="course-math" data-tex="A_{i}" data-display="false"><code>A_{i}</code></span> 是以下三种情况之一：
    - 是  <span class="course-math" data-tex="\mathscr{H}" data-display="false"><code>\mathscr{H}</code></span> 中的一个公理，或一个 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 中的一个公式。
    - 是 <span class="course-math" data-tex="A_{j}(j&lt;i)" data-display="false"><code>A_{j}(j&lt;i)</code></span>。
    - 是通过 MP 从 <span class="course-math" data-tex="A_{j}, A_{k}(j, k&lt;i)" data-display="false"><code>A_{j}, A_{k}(j, k&lt;i)</code></span> 推导出来的。
- 当 <span class="course-math" data-tex="\Sigma=\varnothing" data-display="false"><code>\Sigma=\varnothing</code></span> 时，称 <span class="course-math" data-tex="A_n" data-display="false"><code>A_n</code></span> 是 <span class="course-math" data-tex="\mathscr{H}" data-display="false"><code>\mathscr{H}</code></span> 中的定理（Theorem）；否则它是由前提 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 导出的结论。
- <span class="course-math" data-tex="A_{n}" data-display="false"><code>A_{n}</code></span> 可被证明记作 <span class="course-math" data-tex="\Sigma\vdash A_{n}" data-display="false"><code>\Sigma\vdash A_{n}</code></span>。
- 若 <span class="course-math" data-tex="\Sigma=\varnothing" data-display="false"><code>\Sigma=\varnothing</code></span>，则简记为 <span class="course-math" data-tex="\vdash A_{n}" data-display="false"><code>\vdash A_{n}</code></span>。

例如 (Theorem H1) <span class="course-math" data-tex="A\to A" data-display="false"><code>A\to A</code></span> 的证明：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-6.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-6" width="496" height="96" loading="lazy" decoding="async">

**（可靠性定理/Soundness）若 <span class="course-math" data-tex="\vdash A" data-display="false"><code>\vdash A</code></span>，则 <span class="course-math" data-tex="\vDash A" data-display="false"><code>\vDash A</code></span> 。**
也就是说，任何 Hilbert 系统证明出来的结论都是永真式。
- 可以对证明序列的长度 <span class="course-math" data-tex="\mathscr{l}" data-display="false"><code>\mathscr{l}</code></span> 归纳来证明此类定理。
  - Base case：长度为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 的情况。
  - I.H.：假设对 <span class="course-math" data-tex="k&lt;n" data-display="false"><code>k&lt;n</code></span> 成立。
  - Inductive step：证明对 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 成立。

**（单调性定理/Monotonicity）** 若 <span class="course-math" data-tex="\Sigma\vdash A" data-display="false"><code>\Sigma\vdash A</code></span>，则 <span class="course-math" data-tex="\Sigma \cup \{ B \} \vdash A" data-display="false"><code>\Sigma \cup \{ B \} \vdash A</code></span>。

**导出规则（Derived rules）：** 从 MP 出发可以证明的一些推导规则，用于简化证明。
- Deduction Rule：<span class="course-math course-math-display" data-tex="\Sigma\cup \{ A \} \vdash B \text{ iff } \Sigma \vdash A\to B" data-display="true"><code>\Sigma\cup \{ A \} \vdash B \text{ iff } \Sigma \vdash A\to B</code></span>
例如 (Theorem H2) <span class="course-math" data-tex="(A\to B)\to((B\to C)\to(A\to C))" data-display="false"><code>(A\to B)\to((B\to C)\to(A\to C))</code></span> 的证明：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-8.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-8" width="516" height="183" loading="lazy" decoding="async">
- Contrapositive Rule:
<span class="course-math course-math-display" data-tex="\text{if } \Sigma\vdash \neg B\to \neg A, \text{then } \Sigma\vdash  A\to B" data-display="true"><code>\text{if } \Sigma\vdash \neg B\to \neg A, \text{then } \Sigma\vdash  A\to B</code></span>

(Theorem H3)
<span class="course-math course-math-display" data-tex="\vdash \neg \neg A\to A" data-display="true"><code>\vdash \neg \neg A\to A</code></span>
- Transitivity Rule (Proven by H2):
<span class="course-math course-math-display" data-tex="\frac{\Sigma\vdash A\to B \text{ and } \Sigma\vdash B\to C}{\Sigma\vdash  A\to C}" data-display="true"><code>\frac{\Sigma\vdash A\to B \text{ and } \Sigma\vdash B\to C}{\Sigma\vdash  A\to C}</code></span>
- Exchange of antecedent rule:
<span class="course-math course-math-display" data-tex="\frac{\Sigma\vdash  A\to(B\to C)}{\Sigma\vdash B\to(A\to C)}" data-display="true"><code>\frac{\Sigma\vdash  A\to(B\to C)}{\Sigma\vdash B\to(A\to C)}</code></span>
(Theorem H4) <span class="course-math" data-tex="\vdash A" data-display="false"><code>\vdash A</code></span> 和 <span class="course-math" data-tex="\vdash \neg A" data-display="false"><code>\vdash \neg A</code></span> 可以证明任何事。
<span class="course-math course-math-display" data-tex="\vdash \neg A\to(A\to B)" data-display="true"><code>\vdash \neg A\to(A\to B)</code></span>
<span class="course-math course-math-display" data-tex="\vdash A\to(\neg A\to B)" data-display="true"><code>\vdash A\to(\neg A\to B)</code></span>
- Double Negation Rule  (Proven by H3)
  <span class="course-math course-math-display" data-tex="\frac{\vdash \neg \neg A}{\vdash A}" data-display="true"><code>\frac{\vdash \neg \neg A}{\vdash A}</code></span>
<span class="course-math course-math-display" data-tex="\frac{\vdash A}{\vdash \neg \neg A}" data-display="true"><code>\frac{\vdash A}{\vdash \neg \neg A}</code></span>
为了证明中的方便，引入记号：（Theorem H5）
<span class="course-math course-math-display" data-tex="\vdash\text{true}" data-display="true"><code>\vdash\text{true}</code></span>
<span class="course-math course-math-display" data-tex="\vdash \neg \text{false}" data-display="true"><code>\vdash \neg \text{false}</code></span>
- Reductio ad absurdum (reduction to absurdity/proof by contradiction)
<span class="course-math course-math-display" data-tex="\frac{\vdash \neg A\to\text{false}}{\vdash A}" data-display="true"><code>\frac{\vdash \neg A\to\text{false}}{\vdash A}</code></span>
(Theorem H6)
<span class="course-math course-math-display" data-tex="\vdash (A\to \neg A)\to \neg A" data-display="true"><code>\vdash (A\to \neg A)\to \neg A</code></span>


#### Natural Deduction System
{: #section-7 }


语言：
- 字母表： <span class="course-math" data-tex="\Sigma =\{ (,),\neg,\land, \lor, \to,\leftrightarrow,p,q,r, \dots \}" data-display="false"><code>\Sigma =\{ (,),\neg,\land, \lor, \to,\leftrightarrow,p,q,r, \dots \}</code></span>
- 公式：与 wff 类似的定义。

推理规则（Inference Rules）：
- 自反（Reflexivity）：<span class="course-math" data-tex="\Sigma \cup \{\alpha\}\vdash\alpha" data-display="false"><code>\Sigma \cup \{\alpha\}\vdash\alpha</code></span> or <span class="course-math" data-tex="\Sigma,\alpha\vdash\alpha" data-display="false"><code>\Sigma,\alpha\vdash\alpha</code></span>
- 每条规则包括 introduction 和 elimination 两部分。
- <span class="course-math" data-tex="\land\text{i}" data-display="false"><code>\land\text{i}</code></span> ：<span class="course-math course-math-display" data-tex="\frac{\alpha \,\, \beta}{\alpha \land\beta}" data-display="true"><code>\frac{\alpha \,\, \beta}{\alpha \land\beta}</code></span>
- <span class="course-math" data-tex="\land \text{e}" data-display="false"><code>\land \text{e}</code></span>：
<span class="course-math course-math-display" data-tex="\frac{\alpha \land\beta}{\alpha}, \frac{\alpha \land\beta}{\beta}" data-display="true"><code>\frac{\alpha \land\beta}{\alpha}, \frac{\alpha \land\beta}{\beta}</code></span>
- <span class="course-math" data-tex="\to\text{e}" data-display="false"><code>\to\text{e}</code></span>：
<span class="course-math course-math-display" data-tex="\frac{(\alpha\to\beta) \,\, \alpha}{ \beta}" data-display="true"><code>\frac{(\alpha\to\beta) \,\, \alpha}{ \beta}</code></span>
- <span class="course-math" data-tex="\to\text{i}" data-display="false"><code>\to\text{i}</code></span>：
<span class="course-math course-math-display" data-tex="\frac{\boxed{\begin{aligned}&#10;\alpha \\&#10;\dots \\&#10;\beta&#10;\end{aligned}}}{\alpha\to\beta}" data-display="true"><code>\frac{\boxed{\begin{aligned}&#10;\alpha \\&#10;\dots \\&#10;\beta&#10;\end{aligned}}}{\alpha\to\beta}</code></span>
或： 若 <span class="course-math" data-tex="\Sigma,\alpha\vdash_{ND} \beta" data-display="false"><code>\Sigma,\alpha\vdash_{ND} \beta</code></span>，则 <span class="course-math" data-tex="\Sigma\vdash_{ND}(\alpha\to\beta)" data-display="false"><code>\Sigma\vdash_{ND}(\alpha\to\beta)</code></span>。这里被框起来的就是一个子证明（Subproof）。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-9.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-9" width="428" height="253" loading="lazy" decoding="async">
子证明里面可以用外部的行，外部不可以用子证明里面的行。
- <span class="course-math" data-tex="\lor\text{i}" data-display="false"><code>\lor\text{i}</code></span> ：
<span class="course-math course-math-display" data-tex="\frac{\alpha}{(\alpha \lor\beta)}, \frac{\alpha}{(\beta \lor\alpha)}" data-display="true"><code>\frac{\alpha}{(\alpha \lor\beta)}, \frac{\alpha}{(\beta \lor\alpha)}</code></span>
- <span class="course-math" data-tex="\lor\text{e}" data-display="false"><code>\lor\text{e}</code></span>（Proof by cases）：
<span class="course-math course-math-display" data-tex="\frac{(\alpha_{1}\lor\alpha_{2})\,\,\boxed{\begin{aligned}&#10;\alpha_{1} \\&#10;\dots \\&#10;\beta&#10;\end{aligned}}\,\,\boxed{\begin{aligned}&#10;\alpha_{2} \\&#10;\dots \\&#10;\beta&#10;\end{aligned}}}{\beta}" data-display="true"><code>\frac{(\alpha_{1}\lor\alpha_{2})\,\,\boxed{\begin{aligned}&#10;\alpha_{1} \\&#10;\dots \\&#10;\beta&#10;\end{aligned}}\,\,\boxed{\begin{aligned}&#10;\alpha_{2} \\&#10;\dots \\&#10;\beta&#10;\end{aligned}}}{\beta}</code></span>
- <span class="course-math" data-tex="\neg\text{i}" data-display="false"><code>\neg\text{i}</code></span>（用 <span class="course-math" data-tex="\perp" data-display="false"><code>\perp</code></span> 表示矛盾）：
<span class="course-math course-math-display" data-tex="\frac{\boxed {\begin{aligned}&#10;\alpha \\&#10;\dots \\&#10;\perp&#10;\end{aligned}}}{\neg\alpha}" data-display="true"><code>\frac{\boxed {\begin{aligned}&#10;\alpha \\&#10;\dots \\&#10;\perp&#10;\end{aligned}}}{\neg\alpha}</code></span>
- <span class="course-math" data-tex="\neg\text{e}" data-display="false"><code>\neg\text{e}</code></span> 或 <span class="course-math" data-tex="\perp\text{i}" data-display="false"><code>\perp\text{i}</code></span>：
<span class="course-math course-math-display" data-tex="\frac{\alpha\,\,\neg\alpha}{\perp}" data-display="true"><code>\frac{\alpha\,\,\neg\alpha}{\perp}</code></span>
- <span class="course-math" data-tex="\neg \neg\text{e}" data-display="false"><code>\neg \neg\text{e}</code></span>：
<span class="course-math course-math-display" data-tex="\frac{(\neg(\neg\alpha))}{\alpha}" data-display="true"><code>\frac{(\neg(\neg\alpha))}{\alpha}</code></span>
- <span class="course-math" data-tex="\perp\text{e}" data-display="false"><code>\perp\text{e}</code></span>:
<span class="course-math course-math-display" data-tex="\frac{\perp}{\alpha}" data-display="true"><code>\frac{\perp}{\alpha}</code></span>

导出规则（Derived Rules）若有 <span class="course-math" data-tex="\Sigma\vdash_{ND}\alpha" data-display="false"><code>\Sigma\vdash_{ND}\alpha</code></span>，则可视为有一个导出规则
<span class="course-math course-math-display" data-tex="\frac{\Sigma}{\alpha}" data-display="true"><code>\frac{\Sigma}{\alpha}</code></span>
- 否定后件（Modus tollens, MT）：
<span class="course-math course-math-display" data-tex="\{ (p\to q,\neg q) \}\vdash _{ND}(\neg p)" data-display="true"><code>\{ (p\to q,\neg q) \}\vdash _{ND}(\neg p)</code></span>
- <span class="course-math" data-tex="\neg \neg i" data-display="false"><code>\neg \neg i</code></span>：
<span class="course-math course-math-display" data-tex="\frac{\alpha }{(\neg(\neg\alpha))}" data-display="true"><code>\frac{\alpha }{(\neg(\neg\alpha))}</code></span>
- 反证法（Proof by contradiction, reductio ad absurdum）
<span class="course-math course-math-display" data-tex="\frac{\boxed{\begin{aligned}&#10;(\neg\alpha) \\&#10;\dots \\&#10;\perp&#10;\end{aligned}}}{\alpha}" data-display="true"><code>\frac{\boxed{\begin{aligned}&#10;(\neg\alpha) \\&#10;\dots \\&#10;\perp&#10;\end{aligned}}}{\alpha}</code></span>
- 排中律（Law of Excluded Middle, Tertiam non datur）
<span class="course-math course-math-display" data-tex="\frac{}{(\alpha \lor(\neg \alpha))}" data-display="true"><code>\frac{}{(\alpha \lor(\neg \alpha))}</code></span>

这些证明都是语法上的（Syntactic）。不用关心语义。



##### 可靠性和完备性
{: #section-8 }


可靠性（Soundness）：证明的结论（Conclusion）总是前提（Premises）的一个逻辑上的结果（Consequence）。也就是说，我们称证明系统可靠，当
<span class="course-math course-math-display" data-tex="\Sigma\vdash A\implies \Sigma\vDash A" data-display="true"><code>\Sigma\vdash A\implies \Sigma\vDash A</code></span>
完备性（Completeness）：任何逻辑上的结果可以被证明系统证明。也就是说，我们称证明系统完备，当
<span class="course-math course-math-display" data-tex="\Sigma\vDash A\implies \Sigma\vdash A" data-display="true"><code>\Sigma\vDash A\implies \Sigma\vdash A</code></span>

要证明 ND 的可靠性，可以通过对证明序列的长度来归纳得到。
- Base Case：<span class="course-math" data-tex="n=1" data-display="false"><code>n=1</code></span>，则 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 是一个前提，则 <span class="course-math" data-tex="\alpha \in \Sigma" data-display="false"><code>\alpha \in \Sigma</code></span>，根据定义，<span class="course-math" data-tex="\Sigma\vDash\alpha" data-display="false"><code>\Sigma\vDash\alpha</code></span>。
- I.H.： <span class="course-math" data-tex="\Sigma\vdash\alpha\implies \Sigma\vDash\alpha" data-display="false"><code>\Sigma\vdash\alpha\implies \Sigma\vDash\alpha</code></span> 对长度 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 的证明成立。
- Inductive Step：考虑第 <span class="course-math" data-tex="k+1" data-display="false"><code>k+1</code></span> 步推出 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 的各种情况。
  - 考虑有 Sub-proof 的情况，比如第 <span class="course-math" data-tex="k+1" data-display="false"><code>k+1</code></span> 行是一个 <span class="course-math" data-tex="\to\text{i}: \beta\to \gamma" data-display="false"><code>\to\text{i}: \beta\to \gamma</code></span>，I.H. 就不能直接用了，因为前 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 行不是完整的证明。但是可以令 <span class="course-math" data-tex="\Sigma&#x27;=\Sigma \cup \{ \beta \}" data-display="false"><code>\Sigma&#x27;=\Sigma \cup \{ \beta \}</code></span>，在新的 <span class="course-math" data-tex="\Sigma&#x27;" data-display="false"><code>\Sigma&#x27;</code></span> 下，前 <span class="course-math" data-tex="k" data-display="false"><code>k</code></span> 行就变成完整的证明了，由于 I.H. 对任意的 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 都成立，所以 <span class="course-math" data-tex="\Sigma&#x27;\vdash \gamma \implies \Sigma&#x27;\vDash\gamma" data-display="false"><code>\Sigma&#x27;\vdash \gamma \implies \Sigma&#x27;\vDash\gamma</code></span>，也就是 <span class="course-math" data-tex="\Sigma\cup \{ \beta \}\vDash \gamma" data-display="false"><code>\Sigma\cup \{ \beta \}\vDash \gamma</code></span>。从而可以通过反证法证明 <span class="course-math" data-tex="\Sigma\vDash \beta\to\gamma" data-display="false"><code>\Sigma\vDash \beta\to\gamma</code></span>。
有了可靠性，证明蕴含就可以用：真值表，定义，反证法，以及 **用 ND 证明**。

对有限前提集证明 ND 的完备性，设 <span class="course-math" data-tex="\Sigma=\{ a_{0},a_{1},\dots,a_{n} \}" data-display="false"><code>\Sigma=\{ a_{0},a_{1},\dots,a_{n} \}</code></span> ，可以分别证明三个引理：
- Lemma 1: 若 <span class="course-math" data-tex="\Sigma\vDash\beta" data-display="false"><code>\Sigma\vDash\beta</code></span>，则 <span class="course-math" data-tex="\varnothing \vDash(a_{0}\to(a_{1}\to(\dots\to(a_{n}\to\beta))))" data-display="false"><code>\varnothing \vDash(a_{0}\to(a_{1}\to(\dots\to(a_{n}\to\beta))))</code></span>。
- Lemma 2: 对任意 wff <span class="course-math" data-tex="\gamma" data-display="false"><code>\gamma</code></span>，若 <span class="course-math" data-tex="\varnothing\vDash \gamma" data-display="false"><code>\varnothing\vDash \gamma</code></span>, 则 <span class="course-math" data-tex="\varnothing\vdash_{ND}\gamma" data-display="false"><code>\varnothing\vdash_{ND}\gamma</code></span>。（永真式可以被证明）
- Lemma 3: 若 <span class="course-math" data-tex="\varnothing\vdash_{ND}(a_{0}\to(a_{1}\to(\dots\to(a_{n}\to\beta)\dots)))" data-display="false"><code>\varnothing\vdash_{ND}(a_{0}\to(a_{1}\to(\dots\to(a_{n}\to\beta)\dots)))</code></span>，则 <span class="course-math" data-tex="\{ a_{0},a_{1},\dots,a_{n} \}\vdash_{ND}\beta" data-display="false"><code>\{ a_{0},a_{1},\dots,a_{n} \}\vdash_{ND}\beta</code></span>。也就是说 <span class="course-math" data-tex="\Sigma\vdash_{ND}\beta" data-display="false"><code>\Sigma\vdash_{ND}\beta</code></span>。
Lemma 1 容易用反证法证明。Lemma 3 可以重复用 <span class="course-math" data-tex="\to\text{e}" data-display="false"><code>\to\text{e}</code></span> 消去最后得到 <span class="course-math" data-tex="\beta" data-display="false"><code>\beta</code></span> 证明。
Lemma 2：
- 例如有两个 Atom <span class="course-math" data-tex="p,q" data-display="false"><code>p,q</code></span>，就只需要证明 <span class="course-math" data-tex="p,q\vdash\gamma,\ p, \neg q\vdash\gamma,\ \neg p, q \vdash \gamma,\ \neg p, \neg q\vdash \gamma" data-display="false"><code>p,q\vdash\gamma,\ p, \neg q\vdash\gamma,\ \neg p, q \vdash \gamma,\ \neg p, \neg q\vdash \gamma</code></span> 四种情况。因为，我们可以用排中律构造一个这样的证明：<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-10.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-10" width="545" height="266" loading="lazy" decoding="async">
- 对于 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个 Atom <span class="course-math" data-tex="p_{1},p_{2},\dots,p_{n}" data-display="false"><code>p_{1},p_{2},\dots,p_{n}</code></span> 的一般情况，有子引理（Sublemma）：对任意由这些 Atom 组成的 wff <span class="course-math" data-tex="\gamma" data-display="false"><code>\gamma</code></span>，对任意赋值 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span>，有：
  - 若 <span class="course-math" data-tex="\gamma^v=1" data-display="false"><code>\gamma^v=1</code></span>，则 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\gamma" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\gamma</code></span>。
  - 若 <span class="course-math" data-tex="\gamma^v=0" data-display="false"><code>\gamma^v=0</code></span>，则 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\neg \gamma" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\neg \gamma</code></span>。
- 这里

  <span class="course-math course-math-display" data-tex="\hat{p_{i}}=\begin{cases}p_{i} &amp; p_{i}^v=1 \\ \neg p_{i} &amp; p_{i}^v=0\end{cases}" data-display="true"><code>\hat{p_{i}}=\begin{cases}p_{i} &amp; p_{i}^v=1 \\ \neg p_{i} &amp; p_{i}^v=0\end{cases}</code></span>

  。
- 如果证明了这个 Sublemma，那么其第一种情况（<span class="course-math" data-tex="\gamma^v=1" data-display="false"><code>\gamma^v=1</code></span>） 恰好对应了前面的构造，所以就能证明 Lemma 2。
Sublemma 的证明：
-  对 <span class="course-math" data-tex="\gamma" data-display="false"><code>\gamma</code></span> 的构造进行归纳证明。
- Base case:  <span class="course-math" data-tex="\gamma=p_{1}" data-display="false"><code>\gamma=p_{1}</code></span> （atom）
  - 若 <span class="course-math" data-tex="\gamma^v=p_{1}^v=1" data-display="false"><code>\gamma^v=p_{1}^v=1</code></span>，则 <span class="course-math" data-tex="\hat{p_{1}}=p_{1}\vdash p_{1}=\gamma" data-display="false"><code>\hat{p_{1}}=p_{1}\vdash p_{1}=\gamma</code></span>。
  - 若 <span class="course-math" data-tex="\gamma^v=p_{1}^v=0" data-display="false"><code>\gamma^v=p_{1}^v=0</code></span>，则 <span class="course-math" data-tex="\hat{p_{1}}=\neg p_{1}\vdash\neg p_{1}=\neg \gamma" data-display="false"><code>\hat{p_{1}}=\neg p_{1}\vdash\neg p_{1}=\neg \gamma</code></span>。
- Inductive Hypothesis: 用 <span class="course-math" data-tex="P(\gamma)" data-display="false"><code>P(\gamma)</code></span> 表示 <span class="course-math" data-tex="\gamma" data-display="false"><code>\gamma</code></span> 符合 Sublemma，假设 <span class="course-math" data-tex="P(\gamma_{1}), P(\gamma_{2})" data-display="false"><code>P(\gamma_{1}), P(\gamma_{2})</code></span> 成立。
- Inductive Step:
  - Case 1: <span class="course-math" data-tex="\gamma=\neg \gamma_{1}" data-display="false"><code>\gamma=\neg \gamma_{1}</code></span>。
    - 若 <span class="course-math" data-tex="\gamma^v=(\neg \gamma_{1})^v=1" data-display="false"><code>\gamma^v=(\neg \gamma_{1})^v=1</code></span>，则 <span class="course-math" data-tex="\gamma_{1}^v=0" data-display="false"><code>\gamma_{1}^v=0</code></span>。则有 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \} \vdash \neg \gamma_{1}=\gamma" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \} \vdash \neg \gamma_{1}=\gamma</code></span>。
    - 若 <span class="course-math" data-tex="\gamma^v=(\neg \gamma_{1})^v=0" data-display="false"><code>\gamma^v=(\neg \gamma_{1})^v=0</code></span>，则 <span class="course-math" data-tex="\gamma_{1}^v=1" data-display="false"><code>\gamma_{1}^v=1</code></span>。则有 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \} \vdash \gamma_{1}" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \} \vdash \gamma_{1}</code></span>。用 <span class="course-math" data-tex="\neg \neg\text{i}" data-display="false"><code>\neg \neg\text{i}</code></span> 规则，有 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash (\neg(\neg \gamma_{1}))=\neg \gamma" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash (\neg(\neg \gamma_{1}))=\neg \gamma</code></span>。
  - Case 2:  <span class="course-math" data-tex="\gamma=\gamma_{1}\to \gamma_{2}" data-display="false"><code>\gamma=\gamma_{1}\to \gamma_{2}</code></span>。
    - 若 <span class="course-math" data-tex="\gamma^v=0" data-display="false"><code>\gamma^v=0</code></span>，则 <span class="course-math" data-tex="\gamma_{1}^v=1, \gamma_{2}^v=0" data-display="false"><code>\gamma_{1}^v=1, \gamma_{2}^v=0</code></span>。假设 <span class="course-math" data-tex="\gamma_{1}" data-display="false"><code>\gamma_{1}</code></span> 包含 <span class="course-math" data-tex="\{ q_{1},\dots,q_{k} \}" data-display="false"><code>\{ q_{1},\dots,q_{k} \}</code></span> 这些 Atom，<span class="course-math" data-tex="\gamma_{2}" data-display="false"><code>\gamma_{2}</code></span> 包含 <span class="course-math" data-tex="\{ r_{1},r_{2},\dots,r_{w} \}" data-display="false"><code>\{ r_{1},r_{2},\dots,r_{w} \}</code></span> 这些 Atom，则 I.H. 给出 <span class="course-math" data-tex="\{ \hat{q_{1}},\dots,\hat{q_{k}} \}\vdash \gamma_{1}, \{ \hat{\mathbf{r}_{1}}, \dots, \hat{\mathbf{r}_{w}} \}\vdash \neg \gamma_{2}" data-display="false"><code>\{ \hat{q_{1}},\dots,\hat{q_{k}} \}\vdash \gamma_{1}, \{ \hat{\mathbf{r}_{1}}, \dots, \hat{\mathbf{r}_{w}} \}\vdash \neg \gamma_{2}</code></span>。由于这里的前提都是 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\gamma" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\gamma</code></span> 的子集，所以可以得到 <span class="course-math" data-tex="\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\gamma_{1}, \{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\neg\gamma_{2}" data-display="false"><code>\{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\gamma_{1}, \{ \hat{p_{1}}, \hat{p_{2}}, \dots, \hat{p_{n}} \}\vdash\neg\gamma_{2}</code></span>。只要构造一个从这两个命题出发对 <span class="course-math" data-tex="\neg(\gamma_{1}\to \gamma_{2})" data-display="false"><code>\neg(\gamma_{1}\to \gamma_{2})</code></span> 的证明即可。这用 PBC 是容易的。
    - 若 <span class="course-math" data-tex="\gamma^v=1" data-display="false"><code>\gamma^v=1</code></span>，类似的去讨论即可。
   - 其他二元连接符的 Cases 也类似。



#### Resolution
{: #section-9 }


定义单式/文字（Literal）：Atom 或 Atom 的否定。
定义子式/子句（Clause）：
- 析取子式（Disjunctive Clause）：用 <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 连接单式。
- 合取子式（Conjunctive Clause）：用 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> 连接单式。
定义合取范式（Conjunctive Normal Form, CNF）：用 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> 连接析取子式，形如
<span class="course-math course-math-display" data-tex="(l_{11} \lor\dots \lor l_{1n_{1}})\land\dots \land(l_{k1}\lor\dots \lor l_{kn_{k}})" data-display="true"><code>(l_{11} \lor\dots \lor l_{1n_{1}})\land\dots \land(l_{k1}\lor\dots \lor l_{kn_{k}})</code></span>
定义析取范式（Disjunctive Normal Form, DNF）：用 <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 连接合取子式，形如
<span class="course-math course-math-display" data-tex="(l_{11} \land\dots \land l_{1n_{1}})\lor\dots \lor(l_{k1}\land\dots \land l_{kn_{k}})" data-display="true"><code>(l_{11} \land\dots \land l_{1n_{1}})\lor\dots \lor(l_{k1}\land\dots \land l_{kn_{k}})</code></span>
Lemma: 若 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 是 CNF 形式， <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 是 DNF 形式，则 <span class="course-math" data-tex="\neg A" data-display="false"><code>\neg A</code></span> 与一个 DNF 形式的式子逻辑等价，<span class="course-math" data-tex="\neg B" data-display="false"><code>\neg B</code></span> 与一个 CNF 形式的式子逻辑等价。
Theorem: 任何式子 <span class="course-math" data-tex="A\in\text{Form}(\mathscr{L}^p)" data-display="false"><code>A\in\text{Form}(\mathscr{L}^p)</code></span> 都可以与  CNF 形式和 DNF 形式的式子等价。
- 证明：
  - Case 1： <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为永真式，则 <span class="course-math" data-tex="A\equiv p\lor \neg p" data-display="false"><code>A\equiv p\lor \neg p</code></span>（CNF/DNF）。
  - Case 2： <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 为矛盾，则 <span class="course-math" data-tex="A\equiv p\land \neg p" data-display="false"><code>A\equiv p\land \neg p</code></span> （CNF/DNF）。
  - Case 3： <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 可满足。不失一般性，假设真值表为：

| P   | Q   | A   |
| --- | --- | --- |
| 0   | 0   | 1   |
| 0   | 1   | 0   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

  - 则 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的真值表与（row 1 and row 3）相同，即 <span class="course-math" data-tex="A\equiv(\neg p\land \neg q)\lor(p\land \neg q)" data-display="false"><code>A\equiv(\neg p\land \neg q)\lor(p\land \neg q)</code></span> （DNF）。
  - 另外， <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的真值表与 （not row 2 and not row4）相同，即 <span class="course-math" data-tex="A\equiv \neg(\neg p\land q)\land \neg(p\land q)\equiv(p\lor \neg q)\land(\neg p\lor \neg q)" data-display="false"><code>A\equiv \neg(\neg p\land q)\land \neg(p\land q)\equiv(p\lor \neg q)\land(\neg p\lor \neg q)</code></span>（CNF）.

将任意式子转化为 DNF/CNF：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-11.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-11" width="555" height="248" loading="lazy" decoding="async">

定义 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 为 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的主合取/析取范式（Principal CNF/DNF）：
- <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 是 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 的 CNF/DNF。
- 每个 <span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 中的子句（clause）都包含 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的所有命题变量恰好一次，且没有两个相同的子句。
要写出主 CNF 和主 DNF，可以先写出真值表，DNF 就是所有值为 1 的 row 析取，CNF 就是所有值为 0 的 row 先否定再合取。

Resolution（归结/消解）也称为 Refutation System，用于（计算机辅助）证明矛盾。
只考虑 CNF。
归结推理规则（Resolution Inference）：
<span class="course-math course-math-display" data-tex="\dfrac{(\alpha \lor p) \ \ \  ((\neg p)\lor\beta)}{(\alpha \lor\beta)}" data-display="true"><code>\dfrac{(\alpha \lor p) \ \ \  ((\neg p)\lor\beta)}{(\alpha \lor\beta)}</code></span>
特例：
<span class="course-math course-math-display" data-tex="\dfrac{(\alpha \lor p)\ \ \ (\neg p)}\alpha{}" data-display="true"><code>\dfrac{(\alpha \lor p)\ \ \ (\neg p)}\alpha{}</code></span>
<span class="course-math course-math-display" data-tex="\dfrac{p\ \ \ (\neg p)}{\perp}" data-display="true"><code>\dfrac{p\ \ \ (\neg p)}{\perp}</code></span>
在 Resolution Proof 中，要证明 <span class="course-math" data-tex="\Sigma\vdash_{\mathrm{Res}}\varphi" data-display="false"><code>\Sigma\vdash_{\mathrm{Res}}\varphi</code></span>：
- 转换为证明 <span class="course-math" data-tex="\Sigma\cup \{ \neg \varphi \}\vdash_{\mathrm{Res}}\perp" data-display="false"><code>\Sigma\cup \{ \neg \varphi \}\vdash_{\mathrm{Res}}\perp</code></span>。
- 首先把 <span class="course-math" data-tex="\neg \varphi" data-display="false"><code>\neg \varphi</code></span> 和 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 转换为 CNF。
- 将 CNF 从 <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span> 分开，变成一堆析取子式（Disjunctive Clauses）。
- 再把析取子式从 <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span> 分开，把每个析取子式变成单式的集合。
- 在这些集合上不断使用 Resolution Inference，直到不再可以使用，或获得 <span class="course-math" data-tex="\perp" data-display="false"><code>\perp</code></span> 证明命题。
这里 <span class="course-math" data-tex="\perp" data-display="false"><code>\perp</code></span> 为空子句/空集。

例如，要证明 <span class="course-math" data-tex="\{ p,q \}\vdash_{\mathrm{Res}}(p\land q)" data-display="false"><code>\{ p,q \}\vdash_{\mathrm{Res}}(p\land q)</code></span>：
- 前提转换为 <span class="course-math" data-tex="\{ p,q,\neg(p\land q) \}" data-display="false"><code>\{ p,q,\neg(p\land q) \}</code></span>。
- 转换为 CNF <span class="course-math" data-tex="\{ p,q,\neg p\lor \neg q \}" data-display="false"><code>\{ p,q,\neg p\lor \neg q \}</code></span>。
- 变成集合记号 <span class="course-math" data-tex="\{ p \}, \{ q \}, \{ \neg p,\neg q \}" data-display="false"><code>\{ p \}, \{ q \}, \{ \neg p,\neg q \}</code></span>。
- 应用 Resolution Inference。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Propositional%20Logic%20-%20%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91-12.png' | relative_url }}{% raw %}" alt="Propositional Logic - 命题逻辑-12" width="1932" height="412" loading="lazy" decoding="async">

Resolution Proof System 是可靠且完备的。

Satisfiability（SAT）问题：一组命题逻辑公式是否可以同时满足。(例如，解决软件包依赖关系)
SAT Solver 可用 Resolution 实现。
{% endraw %}
