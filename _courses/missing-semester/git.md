---
title: "Git - 版本控制"
course_id: "missing-semester"
course_title: "MIT Missing Semester"
section: ""
status: "completed"
created_at: "2025-10-21T21:37:22+08:00"
updated_at: "2026-10-08T21:14:49+08:00"
reference: false
order: 1
layout: "course"
permalink: "/courses/missing-semester/git/"
course_page: true
doc_type: "note"
description: "MIT Missing Semester · Git - 版本控制"
excerpt: "MIT Missing Semester · Git - 版本控制"
---

{% raw %}

## Git 模型
{: #section-1 }


 Git  模型中有 4 种对象类型：`blob`、`tree`、`commit` 和 `tag`。
`blob`：数据对象，对应文件。
`tree`：树对象，对应目录。
`commit`：提交对象。
其中 `commit` 对象包含零个或多个父提交、元数据和顶层树。许多 `commit` 会构成类似这样的有向无环图：
```
o <-- o <-- o <-- o <----  o 
            ^            /
             \          v
              --- o <-- o
```

其中每个点都指向它的父辈，最左边的点是最旧的节点，最右边的点是最新的节点，可以看到上面的图中在第三次提交后分叉成了两个独立的分支，又最后合并起来。

### 对象的储存和引用
{: #section-2 }


对象内容会保存在 `.git/objects`（松散对象或 pack 文件）中；对象以内容的哈希值寻址，传统格式使用 SHA-1，也有 SHA-256 仓库格式。
为了让人类可以方便的使用这些对象，我们又用引用（References）作为指向 `commit` 的指针，来给这些哈希值取名。
例如，引用 `master` 指向的是当前分支的最新提交。

## Git 命令
{: #section-3 }


事实上，在硬盘上，Git 只储存对象和引用。修改历史的命令可能增加对象或更新引用，查询命令只读取状态。
Git 有一个**暂存区**的概念，只有加入到暂存区的改动才会包含在 `commit` 中。
HEAD 通常是指向当前分支的符号引用；分离 HEAD 时直接指向提交。

### 基础
{: #section-4 }


- `git help <command>`: 获取 git 命令的帮助信息
- `git init`: 创建一个新的 git 仓库，其数据会存放在一个名为 `.git` 的目录下
- `git status`: 显示当前的仓库状态
- `git add <filename>`: 添加文件到暂存区
- `git commit`: 创建一个新的提交
- `git log`: 显示历史日志
- `git log --all --graph --decorate`: 可视化历史记录（有向无环图）
- `git diff <filename>`: 显示与暂存区文件的差异
- `git diff <revision> <filename>`: 显示某个文件两个版本之间的差异
- `git checkout <revision>`: 更新 HEAD（如果是 `checkout` 分支则同时更新当前分支）


### 分支和合并
{: #section-5 }


- `git branch`: 显示分支
- `git branch <name>`: 创建分支
- `git checkout -b <name>`: 创建分支并切换到该分支
    - 相当于 `git branch <name>; git checkout <name>`
- `git merge <revision>`: 合并到当前分支
- `git mergetool`: 使用工具来处理合并冲突


### 远端操作
{: #section-6 }


- `git remote`: 列出远端
- `git remote add <name> <url>`: 添加一个远端
- `git push <remote> <local branch>:<remote branch>`: 将对象传送至远端并更新远端引用
- `git branch --set-upstream-to=<remote>/<remote branch>`: 创建本地和远端分支的关联关系
- `git fetch`: 从远端获取对象/索引
- `git pull`: 相当于 `git fetch; git merge`
- `git clone`: 从远端下载仓库

### Git 高级操作
{: #section-7 }


- `git config`: Git 是一个 [高度可定制的](https://git-scm.com/docs/git-config) 工具
- `git clone --depth=1`: 浅克隆（shallow clone），不包括完整的版本历史信息
- `git add -p`: 交互式暂存
- `git blame`: 查看最后修改某行的人
- `git stash`: 暂时移除工作目录下的修改内容
- `git bisect`: 通过二分查找搜索历史记录
- `.gitignore`: 指定故意不追踪的文件
{% endraw %}
