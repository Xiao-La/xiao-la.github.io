---
title: "Graph Theorem - 图论"
course_id: "discrete-mathematics"
course_title: "离散数学"
section: ""
status: "updating"
created_at: "2026-11-25T20:35:00+08:00"
updated_at: "2026-11-26T17:46:44+08:00"
reference: false
order: 7
layout: "course"
permalink: "/courses/discrete-mathematics/graph-theorem/"
course_page: true
doc_type: "note"
description: "离散数学 · Graph Theorem - 图论"
excerpt: "离散数学 · Graph Theorem - 图论"
---

{% raw %}

图包括顶点（Vertices）的集合 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span>，边（Edges）的集合 <span class="course-math" data-tex="E" data-display="false"><code>E</code></span>。每个边关联了 1 或 2 个端点（Endpoints），记作 <span class="course-math" data-tex="G=(V,E)" data-display="false"><code>G=(V,E)</code></span>。区分这两个概念：
- 点和边相连的关系，叫做关联（Incident）。（An edge is incident to / connects its endpoints）
- 点与点之间的关系，叫做相邻（Adjacent）。

有重边叫做重图（Multigraph），有环边叫做伪图（Pseudograph）。都没有叫做简单图（Simple graph）。
完全图：每两个点之间都有边。

无向图（Undirected Graph）：两个节点叫做相邻/邻居（Adjacent/Neighbors），如果有一条边关联它们。

图 <span class="course-math" data-tex="G=(V,E)" data-display="false"><code>G=(V,E)</code></span> 中，顶点 <span class="course-math" data-tex="v" data-display="false"><code>v</code></span> 的所有邻居的集合记作 <span class="course-math" data-tex="N(v)" data-display="false"><code>N(v)</code></span>（neighborhood of <span class="course-math" data-tex="v" data-display="false"><code>v</code></span>）。对于 <span class="course-math" data-tex="V" data-display="false"><code>V</code></span> 的子集 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span>，记 <span class="course-math" data-tex="N(A)" data-display="false"><code>N(A)</code></span> 为所有至少与 <span class="course-math" data-tex="A" data-display="false"><code>A</code></span> 中的一个顶点相邻的顶点的集合。

定义无向图中一个顶点的 **度（Degree）：** 与这个顶点关联的边的数量（环边贡献两个），记作 <span class="course-math" data-tex="\mathrm{deg}(v)" data-display="false"><code>\mathrm{deg}(v)</code></span>。
{% endraw %}
