---
title: "Metaprogramming - 元编程"
course_id: "missing-semester"
course_title: "MIT Missing Semester"
section: ""
status: "completed"
created_at: "2025-10-22T20:05:39+08:00"
updated_at: "2026-10-08T21:33:39+08:00"
reference: false
order: 2
layout: "course"
permalink: "/courses/missing-semester/metaprogramming/"
course_page: true
doc_type: "note"
description: "MIT Missing Semester · Metaprogramming - 元编程"
excerpt: "MIT Missing Semester · Metaprogramming - 元编程"
---

{% raw %}
这里用元编程指代软件开发的流程，而不是具体的代码编写。

## 构建系统
{: #section-1 }


`make` 是最常用的**构建系统**，还有许多**构建系统**工具，它们可以管理依赖，从而自动化的、花销小地构建目标。
例如，C 项目常用  `CMake`，Java 项目常用 `Maven`。

## 依赖管理
{: #section-2 }


广泛使用的一个版本规则：语义化版本（Semantic Versioning），规则为 `MAJOR.MINOR.PATCH`：
1. MAJOR version：不兼容的 API 修改。
2. MINOR version：向下兼容的功能性新增。
3. PATCH version：向下兼容的问题修正。
理论上，在依赖遵守语义化版本且主版本至少为 1 的前提下，主版本相同且版本不低于所需版本，公共 API 应保持兼容；0.y.z 处于初始开发阶段，不保证这一兼容性。

## 持续集成系统
{: #section-3 }


持续集成（Continuous integration，CI），比如 Github Actions，可以在代码发生变化后，自动运行一些动作。比如 Github Pages 就是在代码更新后执行 `jekyll`  构建网站，并对接到一个域名上。

## 测试
{: #section-4 }


一些术语：
- 测试套件（Test suite）：所有测试的统称。
- 单元测试（Unit test）：对某个封装的特性进行测试。
- 集成测试（Integration test）：对系统的某一大部分进行，测试其不同的特性或组件是否能协同工作。
- 回归测试（Regression test）：用于保证之前引起问题的 bug 不会再次出现。
- 模拟（Mocking）：使用一个假的实现来替换函数、模块或类型，屏蔽那些和测试不相关的内容。例如“模拟网络连接” 或 “模拟硬盘”。
{% endraw %}
