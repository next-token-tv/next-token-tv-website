---
entityType: product
entity: dots
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Dots：OpenAI 的常驻个人 AI Agent｜Next Token Wiki'
seoDescription: '了解 OpenAI Dots 的定位、云电脑与权限控制方式、与 ChatGPT 和 Codex 的关系，以及 Weekly 节目中的上手体验讨论。'
---

## Dots 是什么

Dots 是 [OpenAI](/wiki/brands/openai) 于 2026 年 9 月 29 日在 [DevDay](/wiki/products/openai-devday) 上发布的常驻个人 AI Agent（官方用复数的 "Dots" 指这类 Agent，单个称 "a dot"）。官方页面对它的描述是 "always-on agents built to handle everything"：用户交给它一个项目或职责，它自己规划下一步，并在对话之间持续推进，把需要处理的事项带回来供人审阅。Dots 运行在 [ChatGPT](/wiki/products/chatgpt) 内，官方说明由 GPT-6 Astra 模型驱动。

## 用途与使用边界

- **起点与分工**：官方说明每个 dot 从用户的 ChatGPT 记忆获得初始上下文；编码相关的任务交给 [Codex](/wiki/products/codex) 完成，官方举的例子是为工程师准备代码和测试。
- **云电脑**：Dots 在官方所称的 cloud computer 上执行任务，也可以连接用户自己的电脑。
- **权限与控制**：通过 Custom Rules 决定哪些动作直接允许、哪些需要批准、哪些禁止；官方说明敏感操作会经过 Auto-review，修改密码一类的事项仍由用户自己完成。
- **交互与入口**：可以在 ChatGPT 的网页、移动和桌面端给自己的 dot 发消息或通话；官方页面还列出 Slack 与 Microsoft Teams 集成，并预告了发短信的交互方式。创建 dot 的入口在 ChatGPT 桌面应用。
- **推出范围**：Dots 随 ChatGPT 套餐提供，具体可用的套餐与市场以官方入口页面 [chatgpt.com/features/dots](https://chatgpt.com/features/dots/) 为准。

## 节目中的讨论

Weekly #005 的“Dots：记忆、云电脑与上手体验”章节从发布背景聊到上手问题。杨攀[说 OpenAI 的 DevDay 发布了 Dots](/weekly/005/transcript#quote-56f1643d9659f1887678)；歸藏[说 Dots 被放进了 Codex 的侧边栏，很多人分不清 Codex、ChatGPT 和 Dots 的区别](/weekly/005/transcript#quote-e9ddc3dde2d66ccb6c70)，并列举了自己遇到的问题：[刚发布时读不了 Codex 聊天线程，后来才修复](/weekly/005/transcript#quote-ba558bb208f1d088ca38)、[语音通话响两声才接](/weekly/005/transcript#quote-47dc710f04b42966888e)、[云电脑开放度低，无法 SSH 连入、装不了东西](/weekly/005/transcript#quote-3ae52366e525c64e26aa)、[虚拟电脑会频繁重启](/weekly/005/transcript#quote-767666df8bf7ec66a6d0)。

在“邮件和微信：国内外的信息流差异”章节，杨攀[说自己把 Google 的资源权限交给了 Dots](/weekly/005/transcript#quote-3376c105562013f6957d)，[女儿学校的开学提醒邮件由 Dots 主动告知](/weekly/005/transcript#quote-5b174fe023fe797472ca)。

在“云电脑、自己的电脑与服务器管理”章节，杨攀[说自己的 Dots 登记了两台电脑：云端的 Computer 和他的 Mac Studio](/weekly/005/transcript#quote-20a0234f52000406e1ec)，[用笔记本下任务时，实际操作的是 Mac Studio 那台电脑](/weekly/005/transcript#quote-f290cf049e4d55a185f7)；歸藏[把常用 CLI 工具克隆进虚拟机](/weekly/005/transcript#quote-71344e8a7b8efef923b5)，并[配合自己写的 Skill，在外出时一句话完成图文内容创作](/weekly/005/transcript#quote-299a7690b400e6a48176)；橘子[转述 Dots 团队参加 Lenny 的播客，谈到未来要管理一家公司或一家子的电脑集群](/weekly/005/transcript#quote-183c33529c971ee3ac88)。

在“DGX 涨价与硬件需求”章节，橘子[把 Muse、Instinct 和 Dots 放在一起，认为这类 Personal Agent 基本免费，是回到互联网免费逻辑的趋势](/weekly/005/transcript#quote-a9714d4c4710ac0ed7c5)。这些属于节目参与者的使用体验和判断，不是对产品能力的独立测评或官方定价信息。

## 常见问题

### Dots 是什么？

OpenAI 推出的常驻个人 AI Agent，运行在 ChatGPT 内，由 GPT-6 Astra 模型驱动，在自己的云电脑上执行任务，入口为 [chatgpt.com/features/dots](https://chatgpt.com/features/dots/)。

### Dots 和 ChatGPT、Codex 有什么区别？

ChatGPT 是对话助手，Codex 偏向编码工作流；Dots 是被交代职责后在对话之间持续工作的常驻 Agent：它从 ChatGPT 记忆获得上下文，编码任务交给 Codex。三者都在 OpenAI 生态内，[Dots 被放进 Codex 侧边栏后](/weekly/005/transcript#quote-e9ddc3dde2d66ccb6c70)更容易混淆。

### Dots 在哪些套餐可用？

截至 2026 年 10 月，官方页面写明 Dots 正面向 Pro、Business Premium 与 Enterprise 套餐在符合条件的市场推出，Enterprise 需要工作区管理员开启；最新范围见[官方页面](https://chatgpt.com/features/dots/)。

### Dots 的云电脑可以连自己的电脑吗？

官方说明可以：Dots 有自己的 cloud computer，也支持连接用户自己的电脑。第 005 期节目里，杨攀的 Dots 就同时登记了云端电脑和一台 Mac Studio；歸藏则反馈云电脑开放度低，[无法 SSH 连入、装不了东西](/weekly/005/transcript#quote-3ae52366e525c64e26aa)。

### Dots 要单独付费吗？

官方页面没有列出 Dots 的独立价格，它随 ChatGPT 套餐提供；套餐与价格见[官方定价页](https://chatgpt.com/pricing/)。

## 来源

- [Dots 官方页面](https://chatgpt.com/features/dots/)
- [OpenAI DevDay 2026 官方会后总结](https://openai.com/index/devday-2026-recap/)
