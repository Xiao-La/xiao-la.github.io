---
title: "Logic and Proofs - 逻辑与证明"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-09-07T15:27:48+08:00"
updated_at: "2026-10-08T20:59:37+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/discrete-mathematics/logic-and-proofs/"
course_page: true
doc_type: "note"
description: "离散数学 · Logic and Proofs - 逻辑与证明"
excerpt: "离散数学 · Logic and Proofs - 逻辑与证明"
---

{% raw %}

## Propositional Logic
{: #section-1 }


命题（Proposition）的定义：
- 陈述性（Declarative）
- 真值（Either true or false）

逻辑连接符（Logic Connectives）：
- Negation <span class="course-math" data-tex="\neg" data-display="false"><code>\neg</code></span>
- Conjunction/and <span class="course-math" data-tex="\land" data-display="false"><code>\land</code></span>
- Disjunction/or <span class="course-math" data-tex="\lor" data-display="false"><code>\lor</code></span>
- Exclusive or <span class="course-math" data-tex="\oplus" data-display="false"><code>\oplus</code></span>
- Implication <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span>
- Biconditional <span class="course-math" data-tex="\leftrightarrow" data-display="false"><code>\leftrightarrow</code></span>

真值表（Truth table）：表示不同的命题之间，所有真值（T/F）之间的关系。
- 行数：若涉及 <span class="course-math" data-tex="n" data-display="false"><code>n</code></span> 个命题，则有 <span class="course-math" data-tex="2^{n}" data-display="false"><code>2^{n}</code></span> 行。
例如异或的真值表：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Logic%20-%20%E9%80%BB%E8%BE%91.png' | relative_url }}{% raw %}" alt="Logic - 逻辑" width="233" height="179" loading="lazy" decoding="async">
- <span class="course-math" data-tex="p\oplus q\equiv \neg(p\leftrightarrow q)" data-display="false"><code>p\oplus q\equiv \neg(p\leftrightarrow q)</code></span>
- <span class="course-math" data-tex="p\to q \equiv \neg p\lor q" data-display="false"><code>p\to q \equiv \neg p\lor q</code></span> (Useful Law)

关于 Implication，有一些对应的概念：
- Converse of <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span> ： <span class="course-math" data-tex="q\to p" data-display="false"><code>q\to p</code></span>（反/逆命题）
- Contrapositive of <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span>： <span class="course-math" data-tex="\neg q\to \neg p" data-display="false"><code>\neg q\to \neg p</code></span>（逆否命题）
- Inverse of <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span> ：<span class="course-math" data-tex="\neg p\to \neg q" data-display="false"><code>\neg p\to \neg q</code></span>（否命题）

从 truth table 得到逻辑表达式：把那些 True 的行用 disjunction 连接，例如异或可以写成 <span class="course-math" data-tex="(p\land \neg q)\lor(\neg p\land q)" data-display="false"><code>(p\land \neg q)\lor(\neg p\land q)</code></span>。

一个 bit 就可以表示 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 和 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。
计算机中布尔变量（Boolean Variable）表示 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 和 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span>。
Bit string 就是一些 bit 组成的序列。
按位操作（bitwise operation）：把 <span class="course-math" data-tex="T" data-display="false"><code>T</code></span> 和 <span class="course-math" data-tex="F" data-display="false"><code>F</code></span> 替换为 <span class="course-math" data-tex="1" data-display="false"><code>1</code></span> 和 <span class="course-math" data-tex="0" data-display="false"><code>0</code></span> 进行运算。

George Boole：布尔代数（Boolean algebra）的发明者。

Tautology：永真式。（逻辑等价于 T）
Contradiction：永假式。(逻辑等价于 F）
Contingency：可真可假。

逻辑等价（Logical Equivalent）：
- 一种定义：<span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 与 <span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 具有相同的真值表。
- 另一种定义：<span class="course-math" data-tex="p\leftrightarrow q" data-display="false"><code>p\leftrightarrow q</code></span> 是永真式。
- 记作 <span class="course-math" data-tex="p\equiv q" data-display="false"><code>p\equiv q</code></span> 或 <span class="course-math" data-tex="p \iff q" data-display="false"><code>p \iff q</code></span>。


De Morgan's Law：
- <span class="course-math" data-tex="\neg(p\lor q)\equiv \neg p\land \neg q" data-display="false"><code>\neg(p\lor q)\equiv \neg p\land \neg q</code></span>
- <span class="course-math" data-tex="\neg(p\land q)\equiv \neg p\lor \neg q" data-display="false"><code>\neg(p\land q)\equiv \neg p\lor \neg q</code></span>

Identity Law：
- <span class="course-math" data-tex="p\land T\equiv p" data-display="false"><code>p\land T\equiv p</code></span>
- <span class="course-math" data-tex="p\lor F\equiv p" data-display="false"><code>p\lor F\equiv p</code></span>

Domination Law：
- <span class="course-math" data-tex="p\lor T\equiv T" data-display="false"><code>p\lor T\equiv T</code></span>
- <span class="course-math" data-tex="p\land F\equiv F" data-display="false"><code>p\land F\equiv F</code></span> 

Idempotent Law：
- <span class="course-math" data-tex="p\lor p\equiv p" data-display="false"><code>p\lor p\equiv p</code></span>
- <span class="course-math" data-tex="p\land p\equiv p" data-display="false"><code>p\land p\equiv p</code></span>

Double negation Laws:
- <span class="course-math" data-tex="\neg(\neg p)\equiv p" data-display="false"><code>\neg(\neg p)\equiv p</code></span>

Commutative Laws:
- <span class="course-math" data-tex="p\lor q\equiv q\lor p" data-display="false"><code>p\lor q\equiv q\lor p</code></span>
- <span class="course-math" data-tex="p\land q\equiv q\land p" data-display="false"><code>p\land q\equiv q\land p</code></span>

Associative Laws:
- <span class="course-math" data-tex="(p\lor q)\lor r\equiv p\lor(q\lor r)" data-display="false"><code>(p\lor q)\lor r\equiv p\lor(q\lor r)</code></span>
- <span class="course-math" data-tex="(p\land q)\land r\equiv p\land(q\land r)" data-display="false"><code>(p\land q)\land r\equiv p\land(q\land r)</code></span>

Distributive Laws:
- <span class="course-math" data-tex="p\lor(q\land r)\equiv(p\lor q)\land(p\lor r)" data-display="false"><code>p\lor(q\land r)\equiv(p\lor q)\land(p\lor r)</code></span>
- <span class="course-math" data-tex="p\land(q\lor r)\equiv(p\land q)\lor(p\land r)" data-display="false"><code>p\land(q\lor r)\equiv(p\land q)\lor(p\land r)</code></span>

Absorption Laws
- <span class="course-math" data-tex="p\lor(p\land q)\equiv p" data-display="false"><code>p\lor(p\land q)\equiv p</code></span>
- <span class="course-math" data-tex="p\land(p\lor q)\equiv p" data-display="false"><code>p\land(p\lor q)\equiv p</code></span>

Negation Laws
- <span class="course-math" data-tex="p\lor \neg p\equiv T" data-display="false"><code>p\lor \neg p\equiv T</code></span>
- <span class="course-math" data-tex="p\land \neg p\equiv F" data-display="false"><code>p\land \neg p\equiv F</code></span>

证明逻辑等价的方法：
- Truth table
- Logical Equivalence inference
- By discussion

## Predicate Logic / First Order Logic
{: #section-2 }


有量词的逻辑。
- Existential Quantifier：<span class="course-math" data-tex="\exists" data-display="false"><code>\exists</code></span>
- Universal Quantifier：<span class="course-math" data-tex="\forall" data-display="false"><code>\forall</code></span> 

谓词逻辑包含
- Constant
- Variable
- Predicate：<span class="course-math" data-tex="P(x)" data-display="false"><code>P(x)</code></span> 给每个 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 赋一个 T / F 值。

Predicate <span class="course-math" data-tex="P(x_{1},\dots,x_{n})" data-display="false"><code>P(x_{1},\dots,x_{n})</code></span> 只能称为**Statement**；只有当每个 <span class="course-math" data-tex="x_{i}" data-display="false"><code>x_{i}</code></span> 换成具体的值，或用量词约束全部自由变量，它才成为一个 **proposition**（具有真值）。
- Universe/Domain：所有可能取值 <span class="course-math" data-tex="(x_{1},x_{2}\dots x_{n})" data-display="false"><code>(x_{1},x_{2}\dots x_{n})</code></span> 的集合。
- Truth set：让 <span class="course-math" data-tex="P(x_{1},\dots ,x_{n})" data-display="false"><code>P(x_{1},\dots ,x_{n})</code></span> 成立的取值 <span class="course-math" data-tex="(x_{1},x_{2}\dots x_{n})" data-display="false"><code>(x_{1},x_{2}\dots x_{n})</code></span> 的集合。

<span class="course-math" data-tex="\forall" data-display="false"><code>\forall</code></span> 和 <span class="course-math" data-tex="\exists" data-display="false"><code>\exists</code></span> 的优先级比其他逻辑运算符更高。

通常 <span class="course-math" data-tex="\forall, \to" data-display="false"><code>\forall, \to</code></span> 搭配，<span class="course-math" data-tex="\exists, \land" data-display="false"><code>\exists, \land</code></span> 搭配。
-  <span class="course-math" data-tex="\neg \exists x P(x)\equiv \forall x\neg P(x)" data-display="false"><code>\neg \exists x P(x)\equiv \forall x\neg P(x)</code></span> (De Morgan Law) 否定之后改变量词类型，把否定放到谓词上。这对嵌套也成立：  <span class="course-math" data-tex="\neg(\forall x\exists yP(x,y))\equiv \exists x\forall y\neg P(x,y)" data-display="false"><code>\neg(\forall x\exists yP(x,y))\equiv \exists x\forall y\neg P(x,y)</code></span>。
- <span class="course-math" data-tex="\neg \forall x(P(x)\to Q(x))\equiv \exists x(P(x)\land \neg Q(x))" data-display="false"><code>\neg \forall x(P(x)\to Q(x))\equiv \exists x(P(x)\land \neg Q(x))</code></span>

嵌套的量词若种类不同不可交换。

翻译：There is **EXACTLY** one person whom everybody loves.
<span class="course-math course-math-display" data-tex="\exists y(\forall xL(x,y) \land \forall z(\forall xL(x,z)\to z=y))" data-display="true"><code>\exists y(\forall xL(x,y) \land \forall z(\forall xL(x,z)\to z=y))</code></span>



## Inference
{: #section-3 }


对于命题逻辑有如下的 **Inference Rules:**
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Logic%20-%20%E9%80%BB%E8%BE%91-1.png' | relative_url }}{% raw %}" alt="Logic - 逻辑-1" width="433" height="108" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Logic%20-%20%E9%80%BB%E8%BE%91-2.png' | relative_url }}{% raw %}" alt="Logic - 逻辑-2" width="432" height="260" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Logic%20-%20%E9%80%BB%E8%BE%91-3.png' | relative_url }}{% raw %}" alt="Logic - 逻辑-3" width="434" height="356" loading="lazy" decoding="async">
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Logic%20-%20%E9%80%BB%E8%BE%91-4.png' | relative_url }}{% raw %}" alt="Logic - 逻辑-4" width="436" height="259" loading="lazy" decoding="async">

对于一阶逻辑：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Logic%20-%20%E9%80%BB%E8%BE%91-5.png' | relative_url }}{% raw %}" alt="Logic - 逻辑-5" width="437" height="395" loading="lazy" decoding="async">


## 数学证明（Mathematical Proof）
{: #section-4 }

**Axiom（公理）：** 在一个理论中选定、不经证明而作为推理起点的命题。
**Theorem（定理）：** 可以证明的命题。
**Lemma（引理）：** 可以证明的命题，用于证明其他命题。
**Corollary（推论）：** 从定理可以推出来的结论。

**Formal Proof：** 每一步都遵循逻辑，从前提/公理/引理/定理中获得。  
**Informal Proof：** 更常用，使用自然语言。

证明定理（形如 <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span>）的基本方法（可以通过 <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span> 的真值表理解）：
- Direct proof
- Proof by contrapositive （逆否命题）
- Proof by contradiction（说明 <span class="course-math" data-tex="p\land \neg q" data-display="false"><code>p\land \neg q</code></span> 不可能发生以说明 <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span>）
- Proof by cases （<span class="course-math" data-tex="(p_{1}\lor\dots \lor p_{n})\to q \equiv(p_{1}\to q)\land(p_{2}\to q)\land\dots \land(p_{n}\to q)" data-display="false"><code>(p_{1}\lor\dots \lor p_{n})\to q \equiv(p_{1}\to q)\land(p_{2}\to q)\land\dots \land(p_{n}\to q)</code></span>）
- Proof of equivalence （<span class="course-math" data-tex="p\leftrightarrow q\equiv(p\to q)\land(q\to p)" data-display="false"><code>p\leftrightarrow q\equiv(p\to q)\land(q\to p)</code></span>）
Vacuous Proof：证明 <span class="course-math" data-tex="p" data-display="false"><code>p</code></span> 永远是假的，那么 <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span> 就是真的。
Trivial Proof：证明 <span class="course-math" data-tex="q" data-display="false"><code>q</code></span> 永远是真的，那么 <span class="course-math" data-tex="p\to q" data-display="false"><code>p\to q</code></span> 就是真的。
证明含量词的命题
- Proof by cases
- Counterexample
- Constructive proof
- Non constructive - proof by contradiction
{% endraw %}
