---
term: worktree
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

工作树（worktree）是 Git 中一个检出分支的工作目录。通过 git worktree 命令，同一个仓库可以在不同目录同时检出多个分支。

## 工作方式

每个工作树有自己的分支与文件，互不干扰，但共享同一份对象库与引用；`git worktree add <路径> <分支>` 即可新建，不用再克隆一份仓库。

## 使用场景

适合并行处理多个任务：同时在两个分支上改代码、保持一个目录长期跑构建，或给并行的 [Agent](/wiki/terms/agent) 分配互不干扰的工作目录。

## 易混概念

与 [Fork](/wiki/terms/fork) 的区别在于作用范围：fork 把仓库复制到另一个账号或项目之下，形成独立仓库；worktree 始终在同一个仓库内部，只是多开几个检出目录。
