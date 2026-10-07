---
title: "Program Verification - 程序验证"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
created_at: "2026-05-27T11:32:43+08:00"
updated_at: "2026-06-03T11:45:38+08:00"
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
<span class="course-math course-math-display" data-tex="(\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)" data-display="true"><code>(\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)</code></span>
其中 <span class="course-math" data-tex="P,Q" data-display="false"><code>P,Q</code></span> 为前置/后置条件，<span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 为要检验的代码。

例如，“将 <span class="course-math" data-tex="y" data-display="false"><code>y</code></span> 设置为 <span class="course-math" data-tex="\max(x,y)" data-display="false"><code>\max(x,y)</code></span>” 的 requirement 可写成这样的 specification：
<span class="course-math course-math-display" data-tex="(\!&#124; x=a\land y=b &#124;\!) \; C \; (\!&#124; y=\max(a,b) &#124;\!)" data-display="true"><code>(\!&#124; x=a\land y=b &#124;\!) \; C \; (\!&#124; y=\max(a,b) &#124;\!)</code></span>
定义一个 Hoare Triple <span class="course-math" data-tex="(\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)" data-display="false"><code>(\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)</code></span> 在 Partial Correctness 下 Satisfied，当且仅当：
- 对**任意的**满足 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 的状态 <span class="course-math" data-tex="s_{1}" data-display="false"><code>s_{1}</code></span>，如果执行 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 后终止在状态 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span>，则 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span> 满足 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>。
记作 
<span class="course-math course-math-display" data-tex="\vDash _{par} (\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)" data-display="true"><code>\vDash _{par} (\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)</code></span>
如果永远不会 Terminate ，也说是 Satisfied。（这也满足定义，不过空真）
我们称一个程序是 Partially Correct，如果它**终止时**总是给出了正确答案。

定义一个 Hoare Triple <span class="course-math" data-tex="(\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)" data-display="false"><code>(\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)</code></span> 在 Total Correctness 下 Satisfied，当且仅当：
- 对**任意的**满足 <span class="course-math" data-tex="P" data-display="false"><code>P</code></span> 的状态 <span class="course-math" data-tex="s_{1}" data-display="false"><code>s_{1}</code></span>，执行 <span class="course-math" data-tex="C" data-display="false"><code>C</code></span> 后，会终止在状态 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span>，且 <span class="course-math" data-tex="s_{2}" data-display="false"><code>s_{2}</code></span> 满足 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span>。
记作
<span class="course-math course-math-display" data-tex="\vDash _{tot} (\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)" data-display="true"><code>\vDash _{tot} (\!&#124; P &#124;\!) \; C \; (\!&#124; Q &#124;\!)</code></span>
Total correctness = Partial correctness + Termination

Program Variables / Logic Variables：因为程序中的变量会变，在 Hoare Triple 中，我们用 Fresh variable 来表示某些条件，例如：
<span class="course-math course-math-display" data-tex="(\!&#124; x=x_{0} \land x \geq 0 &#124;\!) \; C \; (\!&#124; y=x_{0}! &#124;\!)" data-display="true"><code>(\!&#124; x=x_{0} \land x \geq 0 &#124;\!) \; C \; (\!&#124; y=x_{0}! &#124;\!)</code></span>

### Axioms and Rules
{: #section-2 }


要验证一个程序，需要构造一个证明序列：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Program%20Verification%20-%20%E7%A8%8B%E5%BA%8F%E9%AA%8C%E8%AF%81-1.png' | relative_url }}{% raw %}" alt="Program Verification - 程序验证-1" width="416" height="366" loading="lazy" decoding="async">
（Axiom）
- Assignment： <span class="course-math course-math-display" data-tex="\dfrac{}{(\!&#124;  Q[E/x] &#124;\!) \; x=E \; (\!&#124; Q(x) &#124;\!)}" data-display="true"><code>\dfrac{}{(\!&#124;  Q[E/x] &#124;\!) \; x=E \; (\!&#124; Q(x) &#124;\!)}</code></span>
也就是，若要再执行赋值 `x=E` 后 <span class="course-math" data-tex="Q(x)" data-display="false"><code>Q(x)</code></span> 成立，则原来把 <span class="course-math" data-tex="Q" data-display="false"><code>Q</code></span> 中的 <span class="course-math" data-tex="x" data-display="false"><code>x</code></span> 替换为 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span> 一定成立。
例如，在图中 <span class="course-math" data-tex="\phi" data-display="false"><code>\phi</code></span> 应该是 <span class="course-math" data-tex="x+1&gt;0\land y&gt;0" data-display="false"><code>x+1&gt;0\land y&gt;0</code></span>。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Program%20Verification%20-%20%E7%A8%8B%E5%BA%8F%E9%AA%8C%E8%AF%81-2.png' | relative_url }}{% raw %}" alt="Program Verification - 程序验证-2" width="844" height="88" loading="lazy" decoding="async">

（Implied Rule）
- Precondition Strengthening
<span class="course-math course-math-display" data-tex="\dfrac{P\to P&#x27;\;\;(\!&#124;  P&#x27; &#124;\!) \; C \; (\!&#124; Q &#124;\!)}{(\!&#124;  P &#124;\!) \; C \; (\!&#124; Q &#124;\!)}" data-display="true"><code>\dfrac{P\to P&#x27;\;\;(\!&#124;  P&#x27; &#124;\!) \; C \; (\!&#124; Q &#124;\!)}{(\!&#124;  P &#124;\!) \; C \; (\!&#124; Q &#124;\!)}</code></span>
也就是，可以把条件换成一个更强的条件。
- Postcondition Weakening
<span class="course-math course-math-display" data-tex="\dfrac{(\!&#124;  P &#124;\!) \; C \; (\!&#124; Q&#x27; &#124;\!) \;\; Q&#x27;\to Q}{(\!&#124;  P &#124;\!) \; C \; (\!&#124; Q &#124;\!)}" data-display="true"><code>\dfrac{(\!&#124;  P &#124;\!) \; C \; (\!&#124; Q&#x27; &#124;\!) \;\; Q&#x27;\to Q}{(\!&#124;  P &#124;\!) \; C \; (\!&#124; Q &#124;\!)}</code></span>
- Composition
<span class="course-math course-math-display" data-tex="\dfrac{(\!&#124;  P &#124;\!) \; C_{1} \; (\!&#124; Q &#124;\!) \;\; (\!&#124;  Q &#124;\!) \; C_{2} \; (\!&#124; R &#124;\!)}{(\!&#124;  P &#124;\!) \; C_{1},C_{2} \; (\!&#124; R &#124;\!)}" data-display="true"><code>\dfrac{(\!&#124;  P &#124;\!) \; C_{1} \; (\!&#124; Q &#124;\!) \;\; (\!&#124;  Q &#124;\!) \; C_{2} \; (\!&#124; R &#124;\!)}{(\!&#124;  P &#124;\!) \; C_{1},C_{2} \; (\!&#124; R &#124;\!)}</code></span>
- If statements
<span class="course-math course-math-display" data-tex="\frac{&#10;    (\!&#124; P \land B &#124;\!) \; C_1 \; (\!&#124; Q &#124;\!) \qquad (\!&#124; P \land \neg B &#124;\!) \; C_2 \; (\!&#124; Q &#124;\!)&#10;}{&#10;    (\!&#124; P &#124;\!) \text{ if } B \; \{C_1\} \text{ else } \{C_2\} \; (\!&#124; Q &#124;\!)&#10;}" data-display="true"><code>\frac{&#10;    (\!&#124; P \land B &#124;\!) \; C_1 \; (\!&#124; Q &#124;\!) \qquad (\!&#124; P \land \neg B &#124;\!) \; C_2 \; (\!&#124; Q &#124;\!)&#10;}{&#10;    (\!&#124; P &#124;\!) \text{ if } B \; \{C_1\} \text{ else } \{C_2\} \; (\!&#124; Q &#124;\!)&#10;}</code></span>
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Program%20Verification%20-%20%E7%A8%8B%E5%BA%8F%E9%AA%8C%E8%AF%81-3.png' | relative_url }}{% raw %}" alt="Program Verification - 程序验证-3" width="559" height="257" loading="lazy" decoding="async">

**Loop Invariant（循环不变式）**：在循环中始终成立。
- Partial-While：
<span class="course-math course-math-display" data-tex="\frac{&#10;    (\!&#124; I \land B &#124;\!) \; C \; (\!&#124; I &#124;\!)&#10;}{&#10;    (\!&#124; I &#124;\!) \text{ while } B \; \{C\} \; (\!&#124; I \land \neg B &#124;\!)&#10;}" data-display="true"><code>\frac{&#10;    (\!&#124; I \land B &#124;\!) \; C \; (\!&#124; I &#124;\!)&#10;}{&#10;    (\!&#124; I &#124;\!) \text{ while } B \; \{C\} \; (\!&#124; I \land \neg B &#124;\!)&#10;}</code></span>
这里 <span class="course-math" data-tex="I" data-display="false"><code>I</code></span> 就是一个 Loop Invariant。需要合适地选取一个循环不变式，用来完成我们的证明。
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/Program%20Verification%20-%20%E7%A8%8B%E5%BA%8F%E9%AA%8C%E8%AF%81-4.png' | relative_url }}{% raw %}" alt="Program Verification - 程序验证-4" width="487" height="409" loading="lazy" decoding="async">
{% endraw %}
