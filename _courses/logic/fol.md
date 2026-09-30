---
title: "FOL - 一阶逻辑"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
reference: false
layout: "course"
permalink: "/courses/logic/fol/"
course_page: true
doc_type: "note"
description: "数理逻辑导论 · FOL - 一阶逻辑"
excerpt: "数理逻辑导论 · FOL - 一阶逻辑"
---

{% raw %}
<span class="course-math course-math-display" data-tex="\mathscr{L}" data-display="true"><code>\mathscr{L}</code></span>
## 语法（Syntax）
{: #section-1 }

### 概念
{: #section-2 }

Domain （论域）：一个非空的对象（Objects）的集合。
Constant（常量）：论域中确定的（Concrete）对象。
Variable（变量）：确定的值的“占位符（Place Holders）”。
Predicate （谓词）：论域单个对象的一种属性，或多个对象之间的一种关系。
- 例如：用 <span class="course-math" data-tex="S(\text{andy})" data-display="false"><code>S(\text{andy})</code></span> 表示 Andy 是一个学生，这是一个一元谓词（Unary Predicate）。两个参数的谓词就是二元谓词（Binary Predicate），以此类推。
Quantifiers（量词）：描述有多少对象使命题成立。
- The universal quantifier <span class="course-math" data-tex="\forall" data-display="false"><code>\forall</code></span>（全称量词）。"for all", "every"
- The existential quantifier <span class="course-math" data-tex="\exists" data-display="false"><code>\exists</code></span>（存在量词）。"there exists", "for some"
Universal Proposition（全称命题）：<span class="course-math" data-tex="\forall x P(x)" data-display="false"><code>\forall x P(x)</code></span>。
Existential Proposition（存在命题）：<span class="course-math" data-tex="\exists xP(x)" data-display="false"><code>\exists xP(x)</code></span>。
这里 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是某种属性。
Function（函数）：<span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元到一元的映射，记作 <span class="course-math" data-tex="f^{(n)}" data-display="false"><code>f^{(n)}</code></span>。
- 例如：<span class="course-math" data-tex="m(y)" data-display="false"><code>m(y)</code></span> 表示 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 的母亲，是一个一元函数 （Unary Function）。

### 字母表
{: #section-3 }

Non-logical symbols（非逻辑符号）：
- Constant symbols（个体常元）：<span class="course-math" data-tex="c_{1},c_{2},c_{3},\dots" data-display="false"><code>c_{1},c_{2},c_{3},\dots</code></span>
- Predicates（谓词/关系符号）：<span class="course-math" data-tex="P,Q,P_{1},P_{2},\dots,Q_{1}^1,Q_{1}^2" data-display="false"><code>P,Q,P_{1},P_{2},\dots,Q_{1}^1,Q_{1}^2</code></span>（这里上标表示参数个数）
- Function Symbols（函词）：<span class="course-math" data-tex="f,g,h,f_{1},f_{2}^2,..,g_{1}^2,\dots" data-display="false"><code>f,g,h,f_{1},f_{2}^2,..,g_{1}^2,\dots</code></span>（这里上标表示参数个数）
Logical symbols（逻辑符号）：
- Quantifiers（量词）：<span class="course-math" data-tex="\forall, \exists" data-display="false"><code>\forall, \exists</code></span>
- Variables（个体变元）：<span class="course-math" data-tex="x,y,z,x_{1},x_{2},\dots,y_{1},y_{2},\dots" data-display="false"><code>x,y,z,x_{1},x_{2},\dots,y_{1},y_{2},\dots</code></span>
- Connectives（连词）：<span class="course-math" data-tex="\neg,\land,\lor, \to,\leftrightarrow" data-display="false"><code>\neg,\land,\lor, \to,\leftrightarrow</code></span>
- Punctuation（标点）：<span class="course-math" data-tex="(" data-display="false"><code>(</code></span> 和 <span class="course-math" data-tex=")" data-display="false"><code>)</code></span> 和 <span class="course-math" data-tex="," data-display="false"><code>,</code></span>
- Equality（等号）：<span class="course-math" data-tex="=" data-display="false"><code>=</code></span>（一种特别的二元关系）

### 项
{: #section-4 }

Terms（项）就是 Object。严格定义为：
- Constant symbols 和 Variables 都是 Term。
- 若 <span class="course-math" data-tex="f^n" data-display="false"><code>f^n</code></span> 是一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元函数且 <span class="course-math" data-tex="t_{1},t_{2},\dots,t_{n}" data-display="false"><code>t_{1},t_{2},\dots,t_{n}</code></span> 为 Term，则 <span class="course-math" data-tex="f^n(t_{1},t_{2},\dots,t_{n})" data-display="false"><code>f^n(t_{1},t_{2},\dots,t_{n})</code></span> 也是 Term。
- 只有上述递归定义的结果才是 Term。
<span class="course-math" data-tex="\text{Term}(\mathscr{L})" data-display="false"><code>\text{Term}(\mathscr{L})</code></span>
### 原子公式
{: #section-5 }

Atomic Formula/Atom（原子公式）为施加在项上的 **Predicate**。严格定义为，它为以下两种形式之一：
- <span class="course-math" data-tex="P(t_{1},\dots,t_{n})" data-display="false"><code>P(t_{1},\dots,t_{n})</code></span>，其中 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 是一个 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 元 Predicate，而 <span class="course-math" data-tex="t_{i}\in\text{Term}(\mathscr{L})" data-display="false"><code>t_{i}\in\text{Term}(\mathscr{L})</code></span>.
- <span class="course-math" data-tex="=(t_{1},t_{2})" data-display="false"><code>=(t_{1},t_{2})</code></span> （有时写作 <span class="course-math" data-tex="t_{1}=t_{2}" data-display="false"><code>t_{1}=t_{2}</code></span>），<span class="course-math" data-tex="t_{1},t_{2}\in\text{Term}(\mathscr{L})" data-display="false"><code>t_{1},t_{2}\in\text{Term}(\mathscr{L})</code></span>。
<span class="course-math" data-tex="\text{Atom}(\mathscr{L})" data-display="false"><code>\text{Atom}(\mathscr{L})</code></span>

### 公式
{: #section-6 }

Formula（公式）的定义为， <span class="course-math" data-tex="\alpha \in Form(\mathscr L)" data-display="false"><code>\alpha \in Form(\mathscr L)</code></span> 当且仅当它能由以下规则（有限次使用）生成：
- <span class="course-math" data-tex="Atom(\mathscr L)\subseteq Form(\mathscr L)" data-display="false"><code>Atom(\mathscr L)\subseteq Form(\mathscr L)</code></span>。
- 若 <span class="course-math" data-tex="\alpha\in Form(\mathscr L)" data-display="false"><code>\alpha\in Form(\mathscr L)</code></span>，则 <span class="course-math" data-tex="(\neg\alpha)\in Form(\mathscr L)" data-display="false"><code>(\neg\alpha)\in Form(\mathscr L)</code></span>。
- 若 <span class="course-math" data-tex="\alpha,\beta\in Form(\mathscr L)" data-display="false"><code>\alpha,\beta\in Form(\mathscr L)</code></span>，则 <span class="course-math" data-tex="(\alpha * \beta)\in Form(\mathscr L)" data-display="false"><code>(\alpha * \beta)\in Form(\mathscr L)</code></span>，其中 <span class="course-math" data-tex="*\in\{\land,\lor,\to,\leftrightarrow\}" data-display="false"><code>*\in\{\land,\lor,\to,\leftrightarrow\}</code></span>。
- 若 <span class="course-math" data-tex="\alpha\in Form(\mathscr L)" data-display="false"><code>\alpha\in Form(\mathscr L)</code></span> 且 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 是变量，则 <span class="course-math" data-tex="(\forall x\,\alpha)\in Form(\mathscr L)" data-display="false"><code>(\forall x\,\alpha)\in Form(\mathscr L)</code></span> 且 <span class="course-math" data-tex="(\exists x\,\alpha)\in Form(\mathscr L)" data-display="false"><code>(\exists x\,\alpha)\in Form(\mathscr L)</code></span>。

惯例：
- 可像命题逻辑中一样省略部分括号。
- 量词周围的括号可省略。

优先级（Precedence）：
- 有括号优先
- <span class="course-math" data-tex="\forall x,\exists x" data-display="false"><code>\forall x,\exists x</code></span> 的优先级和 <span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span> 相同，高于所有二元连接符
- 在 <span class="course-math" data-tex="\neg,\exists,\forall" data-display="false"><code>\neg,\exists,\forall</code></span> 之间是右结合的

解析树（Parse Tree）例如 <span class="course-math" data-tex="\forall x((P(x)\to Q(x))\land S(x,y))" data-display="false"><code>\forall x((P(x)\to Q(x))\land S(x,y))</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/FOL%20-%20%E4%B8%80%E9%98%B6%E9%80%BB%E8%BE%91.png' | relative_url }}{% raw %}" alt="FOL - 一阶逻辑" width="283" loading="lazy">

### 形式化表达（Formalization）
{: #section-7 }

Every student knows math.
<span class="course-math" data-tex="\forall x(S(x)\to K(x,\text{Math})" data-display="false"><code>\forall x(S(x)\to K(x,\text{Math})</code></span>
Some student knows math.
<span class="course-math" data-tex="\exists x(S(x)\land K(x,\text{Math}))" data-display="false"><code>\exists x(S(x)\land K(x,\text{Math}))</code></span>

Every student is younger than some instructor.
<span class="course-math" data-tex="\forall x(S(x)\to(\exists y(I(y)\land Y(x,y))))" data-display="false"><code>\forall x(S(x)\to(\exists y(I(y)\land Y(x,y))))</code></span>

Every Son of my father is my brother.
用 Predicate： <span class="course-math" data-tex="\forall x\forall y(F(x,m)\land S(y,x)\to B(y,m))" data-display="false"><code>\forall x\forall y(F(x,m)\land S(y,x)\to B(y,m))</code></span>
用 Function：<span class="course-math" data-tex="\forall x(S(x,f(m))\to B(x,m))" data-display="false"><code>\forall x(S(x,f(m))\to B(x,m))</code></span>

## 语义（Semantics）
{: #section-8 }

Scope（作用域）：在公式 <span class="course-math" data-tex="\forall x\alpha" data-display="false"><code>\forall x\alpha</code></span> 或 <span class="course-math" data-tex="\exists x\alpha" data-display="false"><code>\exists x\alpha</code></span> 中，<span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 是量化变量（Quantified Variable），它的 Scope 就是 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>。例如，<span class="course-math" data-tex="\forall xP(x)\land Q(x)" data-display="false"><code>\forall xP(x)\land Q(x)</code></span> 中，<span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的 Scope 是 <span class="course-math" data-tex="P(x)" data-display="false"><code>P(x)</code></span>。

定义 
- Free Variables（自由变元）：不在量化变量 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 的 scope 中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 就是自由变元。
- Bounded Variables（约束变元）：其他情况。
另一种定义方式：解析树中，如果一个叶子节点 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 到根节点的路径中不存在 <span class="course-math" data-tex="\forall x" data-display="false"><code>\forall x</code></span> 或 <span class="course-math" data-tex="\exists x" data-display="false"><code>\exists x</code></span>，则它是一个自由变元。否则，为约束变元。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/FOL%20-%20%E4%B8%80%E9%98%B6%E9%80%BB%E8%BE%91-1.png' | relative_url }}{% raw %}" alt="FOL - 一阶逻辑-1" width="323" loading="lazy">
定义：没有自由变量的公式叫做 **Closed Formula / Sentence**（闭公式/句子）。因为没有自由变量才能决定真或假。
对闭公式赋予意义需要对其中非逻辑符号（常量，谓词和函数）做阐释（Interpretation）（对应到定定义域上）。例如：<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/FOL%20-%20%E4%B8%80%E9%98%B6%E9%80%BB%E8%BE%91-2.png' | relative_url }}{% raw %}" alt="FOL - 一阶逻辑-2" loading="lazy">
对变量也赋予一个值，就是环境（Environment）。例如：<span class="course-math" data-tex="E(x)=1" data-display="false"><code>E(x)=1</code></span> 就是说在环境 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 中， <span class="course-math" data-tex="x=1" data-display="false"><code>x=1</code></span>。
定义：在 <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span> 和 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 中，项 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span> 的值记为 <span class="course-math" data-tex="t^{(\mathcal{I},E)}" data-display="false"><code>t^{(\mathcal{I},E)}</code></span>。若它是常量，则为 <span class="course-math" data-tex="c^{\mathcal{I}}" data-display="false"><code>c^{\mathcal{I}}</code></span>。若它为变量，则为 <span class="course-math" data-tex="x^E" data-display="false"><code>x^E</code></span>。若为函数，则为迭代的产物。
有了阐释和环境，原子公式（Atom Formula）的值也就可以确定了：<span class="course-math" data-tex="P(t_{1},\dots,t_{n})^{(\mathcal{I},E)}" data-display="false"><code>P(t_{1},\dots,t_{n})^{(\mathcal{I},E)}</code></span>。进一步，可迭代定义出任何 wff 的值。
为了形式化定义含有量词的公式的值，我们定义一个新的记号 <span class="course-math" data-tex="E\left[ x\mapsto d \right]" data-display="false"><code>E\left[ x\mapsto d \right]</code></span>：
<span class="course-math course-math-display" data-tex="E\left[ x \mapsto d \right](y):=\begin{cases}&#10;d &amp; \text{if } y=x \\&#10;E(y) &amp; \text{if } y\neq x &#10;\end{cases}" data-display="true"><code>E\left[ x \mapsto d \right](y):=\begin{cases}&#10;d &amp; \text{if } y=x \\&#10;E(y) &amp; \text{if } y\neq x &#10;\end{cases}</code></span>
那么定义
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/FOL%20-%20%E4%B8%80%E9%98%B6%E9%80%BB%E8%BE%91-3.png' | relative_url }}{% raw %}" alt="FOL - 一阶逻辑-3" loading="lazy">

**逻辑等价：**
对偶性 （Duality）：
<span class="course-math course-math-display" data-tex="\neg \forall xP(x)\equiv \exists x\neg P(x)" data-display="true"><code>\neg \forall xP(x)\equiv \exists x\neg P(x)</code></span>
<span class="course-math course-math-display" data-tex="\neg \exists xP(x)\equiv \forall x\neg P(x)" data-display="true"><code>\neg \exists xP(x)\equiv \forall x\neg P(x)</code></span>
因而 <span class="course-math" data-tex="\exists \sim \neg \forall \neg, \forall\sim \neg \exists \neg" data-display="false"><code>\exists \sim \neg \forall \neg, \forall\sim \neg \exists \neg</code></span>。
且命题逻辑中的逻辑等价在一阶逻辑中仍然成立。
量词的可交换性（Commutativity）：
<span class="course-math course-math-display" data-tex="\forall x\forall yP(x,y)\equiv \forall y\forall xP(x,y)" data-display="true"><code>\forall x\forall yP(x,y)\equiv \forall y\forall xP(x,y)</code></span>
<span class="course-math course-math-display" data-tex="\exists x\exists yP(x,y)\equiv \exists y\exists xP(x,y)" data-display="true"><code>\exists x\exists yP(x,y)\equiv \exists y\exists xP(x,y)</code></span>
这里需要是相同种类的量词。
可交换性（Distributivity）：
<span class="course-math course-math-display" data-tex="\forall x(P(x)\land Q(x))\equiv (\forall xP(x))\land(\forall xQ(x))" data-display="true"><code>\forall x(P(x)\land Q(x))\equiv (\forall xP(x))\land(\forall xQ(x))</code></span>

<span class="course-math course-math-display" data-tex="\exists x(P(x)\lor Q(x))\equiv(\exists xP(x))\lor(\exists xQ(x))" data-display="true"><code>\exists x(P(x)\lor Q(x))\equiv(\exists xP(x))\lor(\exists xQ(x))</code></span>
若定义域有穷，则可以通过枚举把量词拆成合取或析取式。

**可满足性（Satisfiability）：** 与命题逻辑类似。一个阐释 <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span> 和环境 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 满足 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>，记作 <span class="course-math" data-tex="\mathcal{I}\vDash_{E}\alpha" data-display="false"><code>\mathcal{I}\vDash_{E}\alpha</code></span>，当且仅当 <span class="course-math" data-tex="\alpha^{(\mathcal{I},E)}=1" data-display="false"><code>\alpha^{(\mathcal{I},E)}=1</code></span>。否则为不满足，记作 <span class="course-math" data-tex="\mathcal{I}\not\vDash_{E}\alpha" data-display="false"><code>\mathcal{I}\not\vDash_{E}\alpha</code></span>。
若对任何 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 都有 <span class="course-math" data-tex="\mathcal{I}\vDash_{E}\alpha" data-display="false"><code>\mathcal{I}\vDash_{E}\alpha</code></span>，则称 <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span> 满足 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>，记作 <span class="course-math" data-tex="\mathcal{I}\vDash\alpha" data-display="false"><code>\mathcal{I}\vDash\alpha</code></span>。
拓展到一组公式：<span class="course-math" data-tex="\mathcal{I}\vDash_{E}\Sigma" data-display="false"><code>\mathcal{I}\vDash_{E}\Sigma</code></span>。这里记号 <span class="course-math" data-tex="\vDash" data-display="false"><code>\vDash</code></span> 代表满足。

语义蕴含（Semantic Entailment）的定义：对于 FOL 中的公式组 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 和公式 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>，有 <span class="course-math" data-tex="\Sigma\vDash\alpha" data-display="false"><code>\Sigma\vDash\alpha</code></span> 当且仅当：
- 对任意诠释 <span class="course-math" data-tex="\mathcal{I}" data-display="false"><code>\mathcal{I}</code></span> 和环境 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span>，若 <span class="course-math" data-tex="\mathcal{I}\vDash_{E}\Sigma" data-display="false"><code>\mathcal{I}\vDash_{E}\Sigma</code></span> 则 <span class="course-math" data-tex="\mathcal{I}\vDash_{E}\alpha" data-display="false"><code>\mathcal{I}\vDash_{E}\alpha</code></span>。
这里记号 <span class="course-math" data-tex="\vDash" data-display="false"><code>\vDash</code></span> 表示蕴含。

在 FOL 中，一个公式 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 是：
- 永真的（Valid）：<span class="course-math" data-tex="\mathcal{I}_{E}\vDash\alpha" data-display="false"><code>\mathcal{I}_{E}\vDash\alpha</code></span> 对任意 <span class="course-math" data-tex="\mathcal{I},E" data-display="false"><code>\mathcal{I},E</code></span>。类似与 PL 中的永真式（Tautology）
- 可满足的（Satisfiable）：存在一组诠释和环境满足 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>。
- 不可满足的（Unsatisfiable）：不存在诠释和环境满足 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span>。
<span class="course-math" data-tex="\emptyset\vDash\alpha" data-display="false"><code>\emptyset\vDash\alpha</code></span> 表示 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 是正当的/永真式。
例如：
<span class="course-math course-math-display" data-tex="\exists y\forall x R(x,y)\to \forall x\exists yR(x,y)" data-display="true"><code>\exists y\forall x R(x,y)\to \forall x\exists yR(x,y)</code></span>
<span class="course-math course-math-display" data-tex="\exists x(P(x)\to \forall xP(x))" data-display="true"><code>\exists x(P(x)\to \forall xP(x))</code></span>
**FOL 的不可判定性（Undecidability）**：给定一个公式，不可能用某个程序判断它是否是永真式。（可以表示为停机问题）
而 PL 可以决定，因为可以用真值表判定。

### ND 证明
{: #section-9 }

替换（Substitution）：
<span class="course-math course-math-display" data-tex="\alpha[t/x]" data-display="true"><code>\alpha[t/x]</code></span>
表示将公式 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 中的**自由变元** <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 替换为 <span class="course-math" data-tex="t" data-display="false"><code>t</code></span>。
为了避免语义的改变（Capture），需要替换为新的变量（Fresh Variable），也就是在 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 中没有出现过的变量。

推理规则：
- <span class="course-math" data-tex="\forall e" data-display="false"><code>\forall e</code></span>：
<span class="course-math course-math-display" data-tex="\dfrac{\forall x\,\alpha}{\alpha[t/x]}" data-display="true"><code>\dfrac{\forall x\,\alpha}{\alpha[t/x]}</code></span>
- <span class="course-math" data-tex="\exists i" data-display="false"><code>\exists i</code></span>：
<span class="course-math course-math-display" data-tex="\dfrac{\alpha[t/x]}{\exists x\,\alpha}" data-display="true"><code>\dfrac{\alpha[t/x]}{\exists x\,\alpha}</code></span>
- <span class="course-math" data-tex="\forall i" data-display="false"><code>\forall i</code></span>：
<span class="course-math course-math-display" data-tex="\dfrac{&#10;\boxed{&#10;\begin{aligned}&#10;y\text{ fresh} \\&#10;\vdots \\&#10;\alpha [y/x]&#10;\end{aligned}}&#10;}{\forall x \, \alpha}" data-display="true"><code>\dfrac{&#10;\boxed{&#10;\begin{aligned}&#10;y\text{ fresh} \\&#10;\vdots \\&#10;\alpha [y/x]&#10;\end{aligned}}&#10;}{\forall x \, \alpha}</code></span>
这里 fresh variable 不可以出现在 subproof 之外。最好不要出现在任何的 <span class="course-math" data-tex="\alpha" data-display="false"><code>\alpha</code></span> 和 <span class="course-math" data-tex="\Sigma" data-display="false"><code>\Sigma</code></span> 中。
例如：<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/FOL%20-%20%E4%B8%80%E9%98%B6%E9%80%BB%E8%BE%91-4.png' | relative_url }}{% raw %}" alt="FOL - 一阶逻辑-4" loading="lazy">
- <span class="course-math" data-tex="\exists e" data-display="false"><code>\exists e</code></span>：
<span class="course-math course-math-display" data-tex="\dfrac{(\exists x\,\alpha)_\,\boxed{\begin{align}&#10;\alpha[u / x], u\text{ fresh} \\&#10;\vdots \\&#10;\beta&#10;\end{align}} }{\beta}" data-display="true"><code>\dfrac{(\exists x\,\alpha)_\,\boxed{\begin{align}&#10;\alpha[u / x], u\text{ fresh} \\&#10;\vdots \\&#10;\beta&#10;\end{align}} }{\beta}</code></span>
ND for FOL 是完备的（Complete）和可靠的（Sound）。

任何 FOL 中的公式可以写成前束范式（Prenex Normal Form）：
<span class="course-math course-math-display" data-tex="Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}B" data-display="true"><code>Q_{1}x_{1}Q_{2}x_{2}\dots Q_{k}x_{k}B</code></span>
其中 <span class="course-math" data-tex="Q_{i}" data-display="false"><code>Q_{i}</code></span> 为量词，<span class="course-math" data-tex="B" data-display="false"><code>B</code></span> 为无量词的公式。

*其他逻辑系统：*
- Higher-Order Logic(HOL, 可描述 Property of a property / function 等)
- Temporal Logic（描述时间线上的逻辑）
- Modal Logic（描述必要性/可能性）
- Hoare Logic（可证明计算机程序的正确性）
{% endraw %}
