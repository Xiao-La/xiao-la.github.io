---
title: "Program Verification - 程序验证"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
created_at: "2026-05-27T11:32:43+08:00"
updated_at: "2026-11-13T19:45:00+08:00"
reference: false
order: 4
layout: "course"
permalink: "/courses/logic/program-verification/"
course_page: true
doc_type: "note"
description: "数理逻辑导论 · Program Verification - 程序验证"
excerpt: "数理逻辑导论 · Program Verification - 程序验证"
---

{% raw %}

## Hoare Logic
{: #section-1 }


运行命令式程序（imperative program）可以描述为状态（state）的改变。

**Requirements** for a program (程序需求)：自然语言的描述。
**Specification** for a program (程序规范)：形式化的描述。
- Precondition（前置条件）：程序运行前的状态。
- Postcondtion （后置条件）：程序运行后的状态。

这些 Specification 是在 FOL 下，用 Hoare Triples（霍尔三元组）描述的。
Hoare Triple 形如：
<span class="course-math course-math-display" data-tex="(\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)" data-display="true"><code>(\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)</code></span>
其中 <span class="course-math" data-tex="P,Q" data-display="false"><code>P,Q</code></span> 为前置/后置条件，<span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 为要检验的代码。

例如，“将 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 设置为 <span class="course-math" data-tex="\max(x,y)" data-display="false"><code>\max(x,y)</code></span>” 的 requirement 可写成这样的 specification：
<span class="course-math course-math-display" data-tex="(\!\lvert  x=a\land y=b \rvert \!) \; C \; (\!\lvert  y=\max(a,b) \rvert \!)" data-display="true"><code>(\!\lvert  x=a\land y=b \rvert \!) \; C \; (\!\lvert  y=\max(a,b) \rvert \!)</code></span>
定义一个 Hoare Triple <span class="course-math" data-tex="(\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)" data-display="false"><code>(\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)</code></span> 在 Partial Correctness 下 Satisfied，当且仅当：
- 对**任意的**满足 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 的状态 <span class="course-math" data-tex="s_{1}" data-display="false"><code>s_{1}</code></span>，如果执行 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 后终止在状态 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span>，则 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span> 满足 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>。
记作
<span class="course-math course-math-display" data-tex="\vDash _{par} (\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)" data-display="true"><code>\vDash _{par} (\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)</code></span>
如果永远不会 Terminate ，也说是 Satisfied。（这也满足定义，不过空真）
我们称一个程序是 Partially Correct，如果它**终止时**总是给出了正确答案。

定义一个 Hoare Triple <span class="course-math" data-tex="(\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)" data-display="false"><code>(\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)</code></span> 在 Total Correctness 下 Satisfied，当且仅当：
- 对**任意的**满足 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 的状态 <span class="course-math" data-tex="s_{1}" data-display="false"><code>s_{1}</code></span>，执行 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 后，会终止在状态 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span>，且 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span> 满足 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>。
记作
<span class="course-math course-math-display" data-tex="\vDash _{\mathrm{tot}} (\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)" data-display="true"><code>\vDash _{\mathrm{tot}} (\!\lvert  P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)</code></span>
Total correctness = Partial correctness + Termination

Program Variables / Logic Variables：因为程序中的变量会变，在 Hoare Triple 中，我们用 Fresh variable 来表示某些条件，例如：
<span class="course-math course-math-display" data-tex="(\!\lvert  x=x_{0} \land x \geq 0 \rvert \!) \; C \; (\!\lvert  y=x_{0}! \rvert \!)" data-display="true"><code>(\!\lvert  x=x_{0} \land x \geq 0 \rvert \!) \; C \; (\!\lvert  y=x_{0}! \rvert \!)</code></span>

### Axioms and Rules
{: #section-2 }


要验证一个程序，需要构造一个证明序列：
<span class="course-math course-math-display" data-tex="\begin{array}{ll}&#10;(\!\lvert \phi_0\rvert\!) &amp;  \\&#10;C_1; &amp;  \\&#10;\quad (\!\lvert \phi_1\rvert\!) &amp; \texttt{justification} \\&#10;C_2; &amp;  \\&#10;\quad\vdots &amp;  \\&#10;\quad (\!\lvert \phi_{n-1}\rvert\!) &amp; \texttt{justification} \\&#10;C_n; &amp;  \\&#10;\quad (\!\lvert \phi_n\rvert\!) &amp; \texttt{justification}&#10;\end{array}" data-display="true"><code>\begin{array}{ll}&#10;(\!\lvert \phi_0\rvert\!) &amp;  \\&#10;C_1; &amp;  \\&#10;\quad (\!\lvert \phi_1\rvert\!) &amp; \texttt{justification} \\&#10;C_2; &amp;  \\&#10;\quad\vdots &amp;  \\&#10;\quad (\!\lvert \phi_{n-1}\rvert\!) &amp; \texttt{justification} \\&#10;C_n; &amp;  \\&#10;\quad (\!\lvert \phi_n\rvert\!) &amp; \texttt{justification}&#10;\end{array}</code></span>
（Axiom）
- Assignment： <span class="course-math course-math-display" data-tex="\dfrac{}{(\!\lvert   Q[E/x] \rvert \!) \; x=E \; (\!\lvert  Q(x) \rvert \!)}" data-display="true"><code>\dfrac{}{(\!\lvert   Q[E/x] \rvert \!) \; x=E \; (\!\lvert  Q(x) \rvert \!)}</code></span>
也就是，若要再执行赋值 `x=E` 后 <span class="course-math" data-tex="Q(x)" data-display="false"><code>Q(x)</code></span> 成立，则原来把 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 替换为 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 一定成立。
例如，在图中 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span> 应该是 <span class="course-math" data-tex="x+1&gt;0\land y&gt;0" data-display="false"><code>x+1&gt;0\land y&gt;0</code></span>。
<span class="course-math course-math-display" data-tex="(\!\lvert \phi\rvert\!)\ x=x+1\ (\!\lvert x&gt;0\land y&gt;0\rvert\!)" data-display="true"><code>(\!\lvert \phi\rvert\!)\ x=x+1\ (\!\lvert x&gt;0\land y&gt;0\rvert\!)</code></span>

（Implied Rule）
- Precondition Strengthening
<span class="course-math course-math-display" data-tex="\dfrac{P\to P&#x27;\;\;(\!\lvert   P&#x27; \rvert \!) \; C \; (\!\lvert  Q \rvert \!)}{(\!\lvert   P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)}" data-display="true"><code>\dfrac{P\to P&#x27;\;\;(\!\lvert   P&#x27; \rvert \!) \; C \; (\!\lvert  Q \rvert \!)}{(\!\lvert   P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)}</code></span>
也就是，可以把条件换成一个更强的条件。
- Postcondition Weakening
<span class="course-math course-math-display" data-tex="\dfrac{(\!\lvert   P \rvert \!) \; C \; (\!\lvert  Q&#x27; \rvert \!) \;\; Q&#x27;\to Q}{(\!\lvert   P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)}" data-display="true"><code>\dfrac{(\!\lvert   P \rvert \!) \; C \; (\!\lvert  Q&#x27; \rvert \!) \;\; Q&#x27;\to Q}{(\!\lvert   P \rvert \!) \; C \; (\!\lvert  Q \rvert \!)}</code></span>
- Composition
<span class="course-math course-math-display" data-tex="\dfrac{(\!\lvert   P \rvert \!) \; C_{1} \; (\!\lvert  Q \rvert \!) \;\; (\!\lvert   Q \rvert \!) \; C_{2} \; (\!\lvert  R \rvert \!)}{(\!\lvert   P \rvert \!) \; C_{1},C_{2} \; (\!\lvert  R \rvert \!)}" data-display="true"><code>\dfrac{(\!\lvert   P \rvert \!) \; C_{1} \; (\!\lvert  Q \rvert \!) \;\; (\!\lvert   Q \rvert \!) \; C_{2} \; (\!\lvert  R \rvert \!)}{(\!\lvert   P \rvert \!) \; C_{1},C_{2} \; (\!\lvert  R \rvert \!)}</code></span>
- If statements
<span class="course-math course-math-display" data-tex="\frac{&#10;    (\!\lvert  P \land B \rvert \!) \; C_1 \; (\!\lvert  Q \rvert \!) \qquad (\!\lvert  P \land \neg B \rvert \!) \; C_2 \; (\!\lvert  Q \rvert \!)&#10;}{&#10;    (\!\lvert  P \rvert \!) \text{ if } B \; \{C_1\} \text{ else } \{C_2\} \; (\!\lvert  Q \rvert \!)&#10;}" data-display="true"><code>\frac{&#10;    (\!\lvert  P \land B \rvert \!) \; C_1 \; (\!\lvert  Q \rvert \!) \qquad (\!\lvert  P \land \neg B \rvert \!) \; C_2 \; (\!\lvert  Q \rvert \!)&#10;}{&#10;    (\!\lvert  P \rvert \!) \text{ if } B \; \{C_1\} \text{ else } \{C_2\} \; (\!\lvert  Q \rvert \!)&#10;}</code></span>
<span class="course-math course-math-display" data-tex="\begin{array}{ll}&#10;(\!\lvert P\rvert\!) &amp;  \\&#10;\texttt{if ( }B\texttt{ ) \{} &amp;  \\&#10;\quad (\!\lvert (P\land B)\rvert\!) &amp; \text{if-then-else} \\&#10;\quad C_1 &amp;  \\&#10;\quad (\!\lvert Q\rvert\!) &amp; \textit{(justify depending on }C_1\textit{—a “subproof”)} \\&#10;\texttt{\} else \{} &amp;  \\&#10;\quad (\!\lvert (P\land(\neg B))\rvert\!) &amp; \text{if-then-else} \\&#10;\quad C_2 &amp;  \\&#10;\quad (\!\lvert Q\rvert\!) &amp; \textit{(justify depending on }C_2\textit{—a “subproof”)} \\&#10;\texttt{\}} &amp;  \\&#10;(\!\lvert Q\rvert\!) &amp; \text{if-then-else }\textit{[justifies this }Q\textit{, given previous two]}&#10;\end{array}" data-display="true"><code>\begin{array}{ll}&#10;(\!\lvert P\rvert\!) &amp;  \\&#10;\texttt{if ( }B\texttt{ ) \{} &amp;  \\&#10;\quad (\!\lvert (P\land B)\rvert\!) &amp; \text{if-then-else} \\&#10;\quad C_1 &amp;  \\&#10;\quad (\!\lvert Q\rvert\!) &amp; \textit{(justify depending on }C_1\textit{—a “subproof”)} \\&#10;\texttt{\} else \{} &amp;  \\&#10;\quad (\!\lvert (P\land(\neg B))\rvert\!) &amp; \text{if-then-else} \\&#10;\quad C_2 &amp;  \\&#10;\quad (\!\lvert Q\rvert\!) &amp; \textit{(justify depending on }C_2\textit{—a “subproof”)} \\&#10;\texttt{\}} &amp;  \\&#10;(\!\lvert Q\rvert\!) &amp; \text{if-then-else }\textit{[justifies this }Q\textit{, given previous two]}&#10;\end{array}</code></span>

**Loop Invariant（循环不变式）**：在循环中始终成立。
- Partial-While：
<span class="course-math course-math-display" data-tex="\frac{&#10;    (\!\lvert  I \land B \rvert \!) \; C \; (\!\lvert  I \rvert \!)&#10;}{&#10;    (\!\lvert  I \rvert \!) \text{ while } B \; \{C\} \; (\!\lvert  I \land \neg B \rvert \!)&#10;}" data-display="true"><code>\frac{&#10;    (\!\lvert  I \land B \rvert \!) \; C \; (\!\lvert  I \rvert \!)&#10;}{&#10;    (\!\lvert  I \rvert \!) \text{ while } B \; \{C\} \; (\!\lvert  I \land \neg B \rvert \!)&#10;}</code></span>
这里 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 就是一个 Loop Invariant。需要合适地选取一个循环不变式，用来完成我们的证明。
<span class="course-math course-math-display" data-tex="\begin{array}{ll}&#10;(\!\lvert x\ge 0\rvert\!) &amp;  \\&#10;(\!\lvert 1=0!\rvert\!) &amp; \text{implied (a)} \\&#10;\texttt{y = 1 ;} &amp;  \\&#10;(\!\lvert y=0!\rvert\!) &amp; \text{assignment} \\&#10;\texttt{z = 0 ;} &amp;  \\&#10;(\!\lvert y=z!\rvert\!) &amp; \text{assignment} \\&#10;\texttt{while (z != x) \{} &amp;  \\&#10;\quad (\!\lvert (y=z!)\land\neg(z=x)\rvert\!) &amp; \text{partial-while} \\&#10;\quad (\!\lvert y(z+1)=(z+1)!\rvert\!) &amp; \text{implied (b)} \\&#10;\quad \texttt{z = z + 1 ;} &amp;  \\&#10;\quad (\!\lvert yz=z!\rvert\!) &amp; \text{assignment} \\&#10;\quad \texttt{y = y * z ;} &amp;  \\&#10;\quad (\!\lvert y=z!\rvert\!) &amp; \text{assignment} \\&#10;\texttt{\}} &amp;  \\&#10;(\!\lvert y=z!\land(z=x)\rvert\!) &amp; \text{partial-while} \\&#10;(\!\lvert y=x!\rvert\!) &amp; \text{implied (c)}&#10;\end{array}" data-display="true"><code>\begin{array}{ll}&#10;(\!\lvert x\ge 0\rvert\!) &amp;  \\&#10;(\!\lvert 1=0!\rvert\!) &amp; \text{implied (a)} \\&#10;\texttt{y = 1 ;} &amp;  \\&#10;(\!\lvert y=0!\rvert\!) &amp; \text{assignment} \\&#10;\texttt{z = 0 ;} &amp;  \\&#10;(\!\lvert y=z!\rvert\!) &amp; \text{assignment} \\&#10;\texttt{while (z != x) \{} &amp;  \\&#10;\quad (\!\lvert (y=z!)\land\neg(z=x)\rvert\!) &amp; \text{partial-while} \\&#10;\quad (\!\lvert y(z+1)=(z+1)!\rvert\!) &amp; \text{implied (b)} \\&#10;\quad \texttt{z = z + 1 ;} &amp;  \\&#10;\quad (\!\lvert yz=z!\rvert\!) &amp; \text{assignment} \\&#10;\quad \texttt{y = y * z ;} &amp;  \\&#10;\quad (\!\lvert y=z!\rvert\!) &amp; \text{assignment} \\&#10;\texttt{\}} &amp;  \\&#10;(\!\lvert y=z!\land(z=x)\rvert\!) &amp; \text{partial-while} \\&#10;(\!\lvert y=x!\rvert\!) &amp; \text{implied (c)}&#10;\end{array}</code></span>
{% endraw %}
