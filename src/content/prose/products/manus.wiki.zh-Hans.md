---
entityType: product
entity: manus
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Manus：通用 AI Agent、入口与使用边界｜Next Token Wiki'
seoDescription: '了解 Manus 通用 Agent 的任务能力、网页与客户端入口、API，以及节目对它最早给用户云端电脑的讨论。'
---

## Manus 是什么

Manus 是一款面向通用任务的 AI Agent：用户交给它一个目标，它规划步骤、调用工具并在自己的执行环境中完成任务。产品由 Butterfly Effect（蝴蝶效应）团队开发，名称取自拉丁语的“手”；2025 年 3 月 6 日以邀请制内测形式上线，演示视频在上线后短时间内获得了大量传播。产品页脚署名 Manus AI。

与聊天助手不同，Manus 的重点是执行：官方网站列出的典型用途包括制作幻灯片、搭建网站、设计和制作游戏，并提供 Wide Research 等批量研究能力。它与 Grok Bot、WorkBuddy 这类带云端电脑的 Agent 属于同一代产品，可以在 Next Token Wiki 上对照了解 [Grok Bot](/wiki/products/grok-bot)。

## 入口与使用边界

Manus 的主要入口是[官方网站](https://manus.im/)上的网页应用，另提供移动与桌面客户端下载。开发者可以通过官方 API 接入其能力，文档位于 open.manus.ai；产品还提供 Slack 集成和通过邮件交代任务的方式，团队计划支持单点登录。资费结构以[官方价格页](https://manus.im/pricing)为准。

使用边界方面，Manus 在云端执行任务：需要登录外部服务或访问数据时，按平台的方式逐步授权即可，用户应避免把不必要的凭证交给 Agent 长期持有。生成结果中的事实、代码和交付物仍需要使用者验收，这一点与其他通用 Agent 相同。

## 节目中的讨论

Weekly #001 的“Grok Bot：为什么 Agent 需要一台永不下线的云电脑”章节里，杨攀说[“Manus 虚拟机，但 Manus 虚拟机不关机”](/weekly/001/transcript#quote-94a9375e604a44d6dd04)，向阳乔木由此感慨 Manus 较早预判了“给 Agent 一台电脑”的方向；橘子则补充认为 Manus [“没有做到永久，也没有做到持久化，它是每个任务对应一台电脑”](/weekly/001/transcript#quote-f0308fdda12103798f7e)。

Weekly #002 的“Grok Bot / Muse：为什么 Agent 需要云电脑”章节中，杨攀把 Manus 放在 Agent 形态演进里：从只能对话，到能运行代码，再到拥有一台自己的电脑，他认为[Manus 是最早给用户云端电脑的产品之一](/weekly/002/transcript#quote-3b3451d81eb6c3b4a4d3)。同一期“垂直应用的价值”章节里，橘子质疑“通用 Agent”的边界，反问[让 Manus 去做一个短剧它能做吗](/weekly/002/transcript#quote-708a34485356b1799ebd)；在“设计 Agent 为什么也需要执行环境”章节，歸藏提到[Manus 的虚拟机是按次拉起的临时环境，上下文没有持久化](/weekly/002/transcript#quote-266d77cca6f1d6c4f3ee)。以上均为参与者的使用体验与判断；相关讨论可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-16)与[第 002 期对应章节](/weekly/002/transcript#chapter-13)。

## 常见问题

### Manus 是什么？

Manus 是一款通用 AI Agent，接受自然语言任务后自主规划并执行，覆盖调研、幻灯片、网站、设计和游戏等场景，由 Butterfly Effect 团队开发，2025 年 3 月 6 日上线。

### Manus 怎么用，入口在哪里？

网页入口是 [manus.im](https://manus.im/)，登录后直接在网页应用中交代任务；也有移动和桌面客户端。开发者可使用[官方 API](https://open.manus.ai/docs)。

### Manus 还需要邀请码吗？

上线初期 Manus 采用邀请制，邀请码一度被高价转卖。目前的获取方式以官网为准：网页应用、客户端下载与团队计划的注册入口都直接挂在[官方网站](https://manus.im/)上。

### Manus 怎么收费？

Manus 提供个人订阅与团队计划，团队计划包含单点登录；当前套餐和额度见[官方价格页](https://manus.im/pricing)，本页不复制具体价格。

### Manus 和其他云端 Agent 有什么区别？

同类产品（如 Grok Bot、WorkBuddy）都强调给 Agent 一台云端电脑，差异在于持久化程度、授权方式、界面复杂度和生态。节目中参与者提到 Manus 每个任务对应一台虚拟机、上下文不持久，这是他们当时的使用观察；选择时应按自己的任务比较实际表现。

## 来源

- [Manus 官方网站](https://manus.im/)
- [Manus 价格页](https://manus.im/pricing)
- [Manus API 文档](https://open.manus.ai/docs)
- [Manus (AI agent) — Wikipedia](https://en.wikipedia.org/wiki/Manus_(AI_agent))
