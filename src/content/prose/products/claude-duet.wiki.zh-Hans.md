---
entityType: product
entity: claude-duet
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Claude Duet：主动式 Agent 应用、工作方式与入口｜Next Token Wiki'
seoDescription: '了解 Anthropic 的主动式 Agent 应用 Claude Duet：官方公告中的工作方式、连接与安全边界、获取入口，以及与 Claude、Claude Code、Claude Cowork 的分工。'
---

## 定义

Claude Duet 是 Anthropic 推出的主动式（proactive）Agent 应用：官方公告描述它可以主动带着需要关注的事项来找用户、完成用户交代的任务，并在用户离开后继续工作。Anthropic 于 2026 年 10 月 21 日以研究预览（research preview）形式发布该产品，详情见[官方公告](https://claude.com/resources/articles/claude-duet)。

## 工作方式

官方公告称 Duet 围绕 Claude Opus 5.5 构建，每天早上发送一份汇总各连接应用最重要事项的简报；它运行在带有独立浏览器的虚拟机上，用户设备关机也继续执行，任务完成或需要审阅时通知用户。用户通过文字或语音在一个持续线程里与它交流；它沿用 Claude 账号的记忆、技能与连接应用，可连接 6000 多个 marketplace 插件。发送消息、付款、删除等敏感操作需要用户批准，凭据采用 Managed Agents 设计，应用不直接接触用户密码。

## 使用场景

官方公告面向需要持续处理工作事项的专业人士和小企业主，示例包括日程安排、制作仪表盘、预测和搭建网页应用等。2026 年 10 月 21 日的公告称，研究预览先面向美国的 Pro 与 Max 用户开放，提供 iOS 与 Android 独立应用及 claude.ai 入口，可通过 [claude.com/product/claude-duet](https://claude.com/product/claude-duet) 加入等候名单。可用范围与计划要求以官方页面实时说明为准。

## 易混概念

Duet 与同属 Anthropic 的 [Claude](/wiki/products/claude)、[Claude Code](/wiki/products/claude-code)、[Claude Cowork](/wiki/products/claude-cowork) 分工不同：Claude 是模型与助手家族，Claude Code 面向软件工程，Cowork 面向文件夹与文件处理类办公任务（2026 年 9 月起并入 Claude），而 Duet 的差异点在于"主动"——跨连接应用主动提醒、代做任务并在用户离开后继续工作。

## 节目中的讨论

在 Weekly #007 的"Duet 与模型公司的产品选择"章节，歸藏提到"Anthropic 出了自己的 Personal Agent"，杨攀接话"Duet，Duet"（[第 007 期逐字稿](/weekly/007/transcript#quote-0dd01c58621b16cec70f)）；歸藏随后评价[它的界面"很明显是一个 Demo"，并判断模型公司对这类应用"出一个慢慢优化"](/weekly/007/transcript#quote-4e6da5b941156af5dd04)。这是节目参与者对产品形态的观察与猜测，不代表 Anthropic 的官方说明（[对应章节](/weekly/007/transcript#chapter-15)）。

## 常见问题

### Claude Duet 怎么获取？

按 2026 年 10 月 21 日公告，研究预览先面向美国的 Pro 与 Max 用户开放；可在 [claude.com/product/claude-duet](https://claude.com/product/claude-duet) 加入等候名单，之后各地区的可用状态以官方页面为准。

### Duet 包含在什么计划里？

官方公告称研究预览包含在 Pro 与 Max 计划中，与普通 Claude 用量共用额度；计划与额度变化以[官方公告](https://claude.com/resources/articles/claude-duet)和计划页为准。（编辑补充：本问答依据官方公告整理。）

### Duet 与 Claude 聊天窗口有什么不同？

聊天窗口等待用户发问；Duet 按官方描述主动汇总需要关注的事项、代做任务，并在用户离开后于云端虚拟机中继续工作（见[官方公告](https://claude.com/resources/articles/claude-duet)）。

## 来源

- [Claude Duet 官方公告](https://claude.com/resources/articles/claude-duet)
- [Claude Duet 产品页](https://claude.com/product/claude-duet)
