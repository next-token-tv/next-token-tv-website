---
entityType: product
entity: devin
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Devin：Cognition 的软件工程智能体、入口与使用边界｜Next Token Wiki'
seoDescription: '了解 Devin 的定位、独立计算环境里的工作方式、接入入口与计费结构，它与 Manus、编码 CLI 的区别，以及 Weekly 节目中的讨论。'
---

## Devin 是什么

Devin 是 [Cognition](/wiki/brands/cognition) 推出的软件工程智能体（AI 软件工程师）。Cognition 于 2024 年 3 月 12 日在博客文章《Introducing Devin》中首次介绍它，称其为"第一位 AI 软件工程师"：接受自然语言任务后自行规划并执行，在沙箱环境中使用 shell、代码编辑器和浏览器等工程师工具，并实时汇报进展、接受反馈。产品目前由 devin.ai 提供，面向个人开发者和工程团队。

## 用途与使用边界

官方站点列出的典型用途覆盖日常工程工作：代码迁移与重构（如遗留系统迁移）、issue 分诊与修复、PR 审查与可视化 QA、生成文档、按计划执行的例行维护，以及并行运行多个 Devin 处理跨数周的大任务。接入方式包括网页应用（app.devin.ai）、Slack 与 Teams 中直接 @Devin、GitHub/Linear 等工具集成、命令行工具和 API；文档中的会话 Workspace 提供可观察和介入的 Shell、编辑器与浏览器。计费采用额度制：提供免费层和多个付费订阅档位，超额部分按 API 费率计费，具体档位与额度见[官方价格页](https://devin.ai/pricing)。

使用边界方面：Devin 在自己的云端环境执行任务，产出仍需人工验收；它能连接的仓库、工单和消息系统取决于用户的集成授权。与 [Claude Code](/wiki/products/claude-code)、[Codex](/wiki/products/codex) 等主要在本地终端工作的编码 Agent 相比，Devin 的差异点在于独立云端环境和团队协作集成；与 [Manus](/wiki/products/manus) 等通用 Agent 相比，它专注于软件工程场景。

## 节目中的讨论

Weekly #002 的"Grok Bot / Muse：为什么 Agent 需要云电脑"一章里，橘子提到[Devin 刚完成新一轮融资、估值大涨，并预期它会走向云端电脑方向](/weekly/002/transcript#quote-19300ab15820236763c2)；向阳乔木接着问 Devin 是不是第一个带云端助手的，由此引出 Devin 与 [Manus](/wiki/products/manus) 谁更早的现场讨论。这一章把 Devin 归入"给 Agent 一台电脑"的产品代际。融资细节来自节目参与者的转述，本站未独立核验，以公司公告为准。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-13)。

## 常见问题

### Devin 是什么，谁开发的？

Devin 是 Cognition 开发的软件工程智能体，2024 年 3 月 12 日首次亮相，能够在独立环境中规划并完成代码迁移、修 bug、PR 审查等工程任务。

### Devin 怎么用，入口在哪里？

主要入口是网页应用 [app.devin.ai](https://app.devin.ai/)，也可以在 Slack/Teams 里 @Devin、通过 GitHub/Linear 等集成派任务，或使用官方 CLI 和 API；使用说明见[官方文档](https://docs.devin.ai/)。

### Devin 怎么收费？

提供免费层和多个付费订阅档位，按额度计算用量，超额按 API 费率付费；当前档位与价格见[官方价格页](https://devin.ai/pricing)。

### Devin 和 Manus、Claude Code 有什么区别？

Devin 是面向软件工程团队的云端 Agent，有自己的执行环境和团队集成；[Manus](/wiki/products/manus) 是面向通用任务的 Agent；[Claude Code](/wiki/products/claude-code) 与 [Codex](/wiki/products/codex) 以本地终端和编辑器工作流为主。按任务类型和执行环境需求选择。

### Devin 融资和估值情况如何？

截至 2026 年 9 月，本页掌握的可靠公司公告不含最新融资细节；Weekly #002 中橘子提到 Devin 刚融了新一轮、估值大涨，属节目参与者转述。准确信息以 Cognition 官方公告为准。

## 来源

- [Devin 官方网站](https://devin.ai/)
- [Devin 价格页](https://devin.ai/pricing)
- [Devin 文档](https://docs.devin.ai/)
- [Cognition 博客：Introducing Devin（2024-03-12）](https://cognition.com/blog/introducing-devin)
- [Devin AI — Wikipedia](https://en.wikipedia.org/wiki/Devin_AI)
