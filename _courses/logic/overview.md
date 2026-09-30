---
title: "Overview - 概览"
course_id: "logic"
course_title: "数理逻辑导论"
section: ""
status: "completed"
created_at: "2026-06-03T11:50:52+08:00"
updated_at: "2026-06-08T17:04:12+08:00"
reference: false
order: 5
layout: "course"
permalink: "/courses/logic/overview/"
course_page: true
doc_type: "note"
description: "数理逻辑导论 · Overview - 概览"
excerpt: "数理逻辑导论 · Overview - 概览"
---

{% raw %}

考试范围：

|                                              | PL (命题逻辑)                                                                                                 | FOL (一阶逻辑)                                                                                                                            |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **Syntax**<br>(语法)                           | Alphabet (<span class="course-math" data-tex="\land, \lor, \to \dots" data-display="false"><code>\land, \lor, \to \dots</code></span>)<br>w.f.f. (properties)<br>parse tree<br>precedence, convention        | Alphabet (<span class="course-math" data-tex="\forall, \exists \dots" data-display="false"><code>\forall, \exists \dots</code></span>)<br>const, predicate, function<br>terms, atom, w.f.f.<br>parse tree, convention                    |
| **Semantics**<br>(语义)                        | Truth table<br>Tautology, contradiction<br>Satisfiable                                                    | free / bound var<br>Interpretation / environment <span class="course-math" data-tex="(\mathcal{I}, \xi)" data-display="false"><code>(\mathcal{I}, \xi)</code></span><br><span class="course-math" data-tex="\mathcal{I} \models_\xi \alpha \quad \Sigma \models \alpha" data-display="false"><code>\mathcal{I} \models_\xi \alpha \quad \Sigma \models \alpha</code></span> |
|                                              | <span class="course-math" data-tex="\Sigma \models \alpha \quad \Sigma \not\models \alpha" data-display="false"><code>\Sigma \models \alpha \quad \Sigma \not\models \alpha</code></span><br>adequate set<br><span class="course-math" data-tex="\equiv" data-display="false"><code>\equiv</code></span> CNF / DNF (principal) | valid, satisfiable<br>unsatisfiable                                                                                                   |
| **Formal proof<br>system**<br>(形式化证明系统)      | Hilbert, ND, resolution                                                                                   | ND                                                                                                                                    |
| **Soundness &<br>Completeness**<br>(可靠性与完备性) | Both（不考证明）                                                                                                | Both                                                                                                                                  |
| **Formalization**<br>(形式化)                   | NL <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> PL                                                                                               | NL <span class="course-math" data-tex="\to" data-display="false"><code>\to</code></span> FOL                                                                                                                          |

预备知识/证明系统的可靠性与完备性证明/霍尔逻辑不考。
{% endraw %}
