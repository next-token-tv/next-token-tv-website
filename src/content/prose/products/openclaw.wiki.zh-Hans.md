---
entityType: product
entity: openclaw
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-17'
seoTitle: 'OpenClaw：自托管开源个人 AI 助手与使用边界｜Next Token Wiki'
seoDescription: '了解 OpenClaw 的自托管 Gateway 架构、支持的聊天渠道、技能插件与模型接入方式，以及 Weekly 节目对它与其他 Agent 融合的讨论。'
---

## OpenClaw 是什么

OpenClaw 是由[独立非营利组织 OpenClaw Foundation](https://openclaw.ai/) 维护的开源个人 AI 助手，采用 MIT 协议，由 Peter Steinberger 和社区创建，基金会雇佣核心团队并为发布签名。它的运行方式是自己托管：你在自己的电脑或服务器上跑一个 Gateway 进程，作为消息渠道、模型和工具之间的桥接；状态、记忆和凭据都保存在你自己的硬件上，官方称默认只有每日版本检查一项对外请求。

它属于"自托管个人助手"这一层级，与厂商托管的云端 Agent 不同：[DeepSeek Harness](/wiki/products/deepseek-harness) 是搭编码 Agent 用的开源框架，[Grok Bot](/wiki/products/grok-bot) 把厂商提供的常驻云端电脑作为产品，[WorkBuddy](/wiki/products/workbuddy) 是腾讯的桌面办公 Agent 产品，而 OpenClaw 的定位是把助手装在你自己的设备和你已有的聊天软件里。

## 用途与使用边界

OpenClaw 的[官方文档](https://docs.openclaw.ai/)把 Gateway 描述为会话、路由与渠道连接的唯一控制面。安装后运行 `openclaw onboard` 完成初始化，再用 `openclaw gateway install` 安装后台服务；也有 macOS、iOS、Android、Windows、Linux 客户端和浏览器 Control UI。需要 Node 24.16+ 或 26.1+。

- **聊天渠道**：官方渠道列表包括 Discord、Google Chat、iMessage、Matrix、Microsoft Teams、Signal、Slack、Telegram、WhatsApp、Zalo、WebChat、Nostr、Twitch 等，并通过渠道插件扩展更多；一个 Gateway 可同时服务多个渠道。微信不在官方渠道列表中。
- **技能与插件**：技能（Skills）让助手按需加载可重复执行的流程，插件扩展渠道、模型提供商和工具，社区市场是 ClawHub。
- **模型接入**：模型提供商是可替换的，官方文档覆盖 Claude、Codex 与本地模型等接入方式，调用费用取决于你所选提供商的计费。

使用边界：它需要你自己承担运维——机器要在线、配置要自己管。Weekly 节目中多位参与者提到改配置和频繁更新是最容易出问题的环节（见下节），这与产品"一切靠自己托管"的形态一致。

## 节目中的讨论

Weekly #001 的[WorkBuddy、Qoder、OpenClaw 与 DeepSeek Harness](/weekly/001/transcript#chapter-14)章节中，[杨攀提到 OpenClaw 2.0 在那一周发布、声量已经很小且仍有人吐槽](/weekly/001/transcript#quote-2a6de0adc8a7bfe6095e)，橘子则[回忆 OpenClaw 当时每次更新后大家都得修](/weekly/001/transcript#quote-9fc5c848dee6a2f8ce52)——这些是节目参与者对当时社区状态的转述。

在[OpenClaw 和 Coding Agent 正在双向融合](/weekly/001/transcript#chapter-15)章节中，杨攀观察到 OpenClaw 把飞书等能力做了进去，同时 Codex、ZCode 等编码 Agent 也在吸收 OpenClaw 的功能，双向融合；[他自己的体会则是用了半年从未崩过，并详细对比了换用 Hermes 后多消息交代任务时体验的差距](/weekly/001/transcript#quote-625d7960654bcfcabcea)。歸藏和向阳乔木对更新与稳定性的看法更悲观。这些均为个人体验与观点。Weekly #002 的[平台内 AI 助手：入口简单，体验才完整](/weekly/002/transcript#chapter-17)章节中，橘子转述 The One 开发者的反馈，称微信提供的 OpenClaw 二维码约 10% 情况下收不到消息，属于第三方接入场景的个案转述。

## 常见问题

### OpenClaw 怎么安装？

官方给出三条入口：macOS/Linux/WSL2 执行 `curl -fsSL https://openclaw.ai/install.sh | bash`，Windows 用 PowerShell 安装脚本，自管 Node 环境时用 `npm install -g openclaw@latest`。安装后运行 `openclaw onboard` 初始化，详见[官方文档](https://docs.openclaw.ai/)。

### OpenClaw 支持哪些聊天渠道？

官方文档列出 Discord、Google Chat、iMessage、Matrix、Microsoft Teams、Signal、Slack、Telegram、WhatsApp、Zalo、WebChat、Nostr、Twitch 等，并可经渠道插件扩展。微信不在官方渠道列表中；节目中提到的微信接入案例属于第三方实践，稳定性自负。

### OpenClaw 用什么模型？

模型提供商是可替换的：官方文档覆盖 Claude、Codex 及本地模型等接入方式。你自行配置所选提供商的凭据，费用按该提供商的计费规则产生。

### OpenClaw 免费吗？

软件本身开源（MIT）、无付费层，可以从 [GitHub 仓库](https://github.com/openclaw/openclaw)自行获取；成本来自你自己的硬件与所接模型的 API 用量。

### OpenClaw 和 Hermes Agent、Claude Code 有什么区别？

OpenClaw 是自托管的个人助手框架，跑在你自己的设备上并接入聊天渠道；Hermes Agent 是 Nous Research 推出的开源 Agent，可本地或云端运行；Claude Code 是 Anthropic 的编码 Agent 产品，不承担个人助手的渠道接入。Weekly #001 的融合讨论章节中有节目参与者对 OpenClaw 与 Hermes 体验差异的个人对比，属观点而非评测结论。

### OpenClaw 的数据存在哪里？

按官方说明，状态、记忆和凭据保存在你自己运行的 Gateway 所在硬件上，默认遥测只有每日版本检查。这也意味着备份、安全和可用性由你自己负责。

## 来源

- [OpenClaw 官方网站](https://openclaw.ai/)
- [OpenClaw 官方文档](https://docs.openclaw.ai/)
- [OpenClaw GitHub 仓库](https://github.com/openclaw/openclaw)
