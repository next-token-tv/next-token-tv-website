---
entityType: product
entity: grok-bot
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Grok Bot：运行在持久云端电脑上的自主 Agent｜Next Token Wiki'
seoDescription: '了解 SpaceXAI 的 Grok Bot：持久云端电脑环境、消息式交互、支持的客户端平台、与 Cursor 的关系，以及 Weekly 节目中的相关讨论。'
---

## Grok Bot 是什么

Grok Bot 是 SpaceXAI 旗下 Grok 产品线的自主 Agent 产品。SpaceXAI 是 xAI 于 2026 年 2 月[宣布并入 SpaceX](https://x.ai/news/xai-joins-spacex)后的品牌。官方[文档](https://docs.x.ai/grok-bot/overview)将其描述为“有名字、有职责、上下文会随时间积累的 AI 队友”：你通过发消息布置任务，Bot 在云端完成跨应用、跨网站的多步工作，需要确认时再回来找你，[官方公告](https://x.ai/news/grok-bot-for-enterprise)称其可以全天候自主推进任务。

它属于"云端常驻环境"这一层级：[官方文档](https://docs.x.ai/grok-bot/overview)说明每个 Bot 运行在一台持久的云端电脑上，配有浏览器、文件系统和终端，这些电脑运行在 Cursor 的云中。这与自托管的 [OpenClaw](/wiki/products/openclaw)（跑在你自己设备上）、框架型的 [DeepSeek Harness](/wiki/products/deepseek-harness) 和桌面办公产品 [WorkBuddy](/wiki/products/workbuddy) 在形态上不同。

## 用途与使用边界

按官方文档，Grok Bot 的使用方式是对话式布置任务：给出任务、上下文和所需工具的访问权，Bot 在自己的云端电脑上打开浏览器、使用文件系统和终端完成工作；你名下的所有 Bot 共享同一台电脑，文件、浏览器会话和登录状态在各 Bot 之间共用，用户之间则严格隔离，且 Bot 默认没有任何访问权限，只能使用你明确登录过的账号。Bot 还能通过演示学习：走一遍流程后会把过程保存为可复用的技能，多个 Bot 之间可以互发消息、共享上下文。

客户端方面，官方文档提供 macOS、Windows、Linux 桌面端与 iOS、Android 移动端。访问方式：官方文档称 Grok Bot 包含在每个付费个人 Cursor 套餐与 Cursor Teams 套餐中，也可以关联个人 SuperGrok、SuperGrok Plus 或 SuperGrok Heavy 订阅，用量按周重置；文档未列出免费层。

## 节目中的讨论

Weekly #001 的[Grok Bot：为什么 Agent 需要一台永不下线的云电脑](/weekly/001/transcript#chapter-16)章节中，向阳乔木提到 Grok Bot 当天早上发布了安卓版本、此前只有 iOS 版；杨攀[称它在自己心中是未来的形态，认为 AI 需要 24 小时在线、云端必须持久化且数据不丢](/weekly/001/transcript#quote-b730e5f9ca546bc92abb)，这是他的个人判断。歸藏描述了它的渐进式授权体验：[需要读谷歌邮箱时，谷歌直接弹卡片、点一下就授权](/weekly/001/transcript#quote-0a522a497a56b1a8ffe9)；向阳乔木还讲了让它在云端电脑上用谷歌账号实测 Product Hunt 前十产品的经历。

Weekly #002 的[Grok Bot / Muse：为什么 Agent 需要云电脑](/weekly/002/transcript#chapter-13)章节中，杨攀[把它概括为"给你分配了一台云端的电脑"](/weekly/002/transcript#quote-af1872f1d5640ea3a393)，并建议所有人都去用一次有云端电脑的 Agent（[原话](/weekly/002/transcript#quote-403ec584da2686d9ad06)）；歸藏指出它没有免费额度，一起来就得起虚拟机、起虚拟机就是成本。在[临时环境与常驻电脑的区别](/weekly/002/transcript#chapter-24)章节中，[歸藏强调 Grok Bot 不关机，装的 Skill 和登录状态都在里面](/weekly/002/transcript#quote-73c44181529be6c784bc)，杨攀认为国内当时没有完全对标的产品。上述均为节目参与者的体验与观点，不是官方说明。

## 常见问题

### Grok Bot 是什么？

它是 SpaceXAI（Grok 产品线）推出的自主 Agent：通过消息交互的"AI 队友"，在一台持久云端电脑上用浏览器、文件系统和终端完成跨应用的多步任务。见[官方公告](https://x.ai/news/grok-bot-for-enterprise)与[文档](https://docs.x.ai/grok-bot/overview)。

### Grok Bot 怎么收费，有免费额度吗？

官方文档说明 Grok Bot 包含在每个付费个人 Cursor 套餐与 Cursor Teams 套餐中，或关联个人 SuperGrok、SuperGrok Plus、SuperGrok Heavy 订阅后使用，用量按周重置；文档未列出免费层。节目中歸藏也以用户视角说它"没有免费额度，一起来就得起虚拟机"。

### Grok Bot 和 Cursor 是什么关系？

官方文档写明 Bot 的云端电脑运行在 Cursor 的云上，且访问包含在 Cursor 付费套餐中，也可改用 SuperGrok 订阅关联。Weekly #001 中杨攀在讨论 Cursor 托管 Agent 时称两者"是一个家族，但是不同的产品线"，属于节目参与者的理解。

### Grok Bot 支持哪些平台？

官方文档列出 macOS（Apple 芯片与 Intel）、Windows、Linux 桌面客户端，以及 iOS 与 Android 移动端。Weekly #001 录制当周刚发布安卓版，当时移动端此前只有 iOS。

### Grok Bot 的云电脑会一直保留我的数据吗？

官方文档称每个 Bot 运行在持久云端电脑上，你名下所有 Bot 共享这台电脑、上下文随时间积累，用户之间严格隔离，且 Bot 默认无访问权限、只能用你明确登录的账号。节目中歸藏的体验是"不关机"，装的 Skill 和登录状态都在。数据保留与删除细节以官方文档为准。

### Grok Bot 能做什么？

官方定位是跨应用、跨网站的多步工作：在云端电脑里操作浏览器和文件、通过演示学会重复流程、多个 Bot 并行并互相协调、需要批准时回报用户。节目里出现过的实际用例（实测网站、读邮件）来自参与者个人体验，不代表官方场景清单。

## 来源

- [Grok Bot 官方公告（SpaceXAI）](https://x.ai/news/grok-bot-for-enterprise)
- [Grok Bot 官方文档概览](https://docs.x.ai/grok-bot/overview)
- [xAI 并入 SpaceX 公告](https://x.ai/news/xai-joins-spacex)
