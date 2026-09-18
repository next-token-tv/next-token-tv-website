---
entityType: product
entity: opencode
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'OpenCode：开源 AI 编码 Agent 与模型接入｜Next Token Wiki'
seoDescription: '了解 OpenCode 的开源定位、终端与桌面使用方式、模型接入入口，以及 Next Token 节目中关于中立编码 Agent 的讨论。'
---

## OpenCode 是什么

OpenCode 是一个开源的 AI 编码 Agent，官方对其的定位是"帮助你在终端、IDE 或桌面编写代码的开源 Agent"。项目由 Anomaly 维护，源码以 MIT 协议发布在 [GitHub 仓库](https://github.com/anomalyco/opencode)。与绑定单一厂商模型的编码工具不同，OpenCode 自身不生产模型，重点在 Agent 层。

## 使用方式与模型接入

OpenCode 提供三种使用形态：终端 CLI、桌面应用（官方标注 beta，支持 macOS、Windows 与 Linux）和编辑器扩展。安装入口是[官网](https://opencode.ai/)提供的安装脚本，也支持 npm、bun、brew、paru 等方式。

模型接入是它的主要特点：可以接入 Claude、GPT、Gemini 等厂商的模型，也可以通过 GitHub Copilot 或 ChatGPT Plus/Pro 账号登录复用已有订阅，还能使用官方精选的 Zen 模型组。官方还说明代码与上下文数据不由 OpenCode 侧存储。具体可用模型与登录方式以[官方文档](https://opencode.ai/)当前内容为准。

## 节目中的讨论

Weekly #002 的"Agent API：还需要自己维护一套 Harness 吗"章节中，杨攀在讨论厂商 Agent 与自家模型绑定越来越紧的趋势时提到：[OpenCode 属于那种中立、完全双向中立的玩家，他认为会是一个独立的小赛道](/weekly/002/transcript#quote-27d8be325d660d54cd9d)。这是节目参与者对市场格局的判断，不是对产品功能的评测。

Weekly #001 的"当所有模型都差不多，用户该如何选择"章节中，[乔木在对话中提到有人一直使用 OpenCode](/weekly/001/transcript#quote-472e5afec5b9fd11f24c)，未展开细节。关于同类编码 Agent 的使用体验，可对照 [Claude Code](/wiki/products/claude-code) 与 [Codex](/wiki/products/codex) 条目。

## 常见问题

### OpenCode 是什么？

一个开源 AI 编码 Agent，由 Anomaly 维护，MIT 协议，在终端、IDE 和桌面中使用，模型可以自由更换。见[官网](https://opencode.ai/)与 [GitHub 仓库](https://github.com/anomalyco/opencode)。

### OpenCode 怎么安装？

官网提供一键安装脚本（`curl -fsSL https://opencode.ai/install | bash`），另有 npm、bun、brew、paru 等安装方式；桌面应用可在官网下载页获取 beta 版。

### OpenCode 免费吗？用什么模型？

OpenCode 软件本身开源免费，官网说明包含免费模型；接入付费模型则取决于对应厂商的账号或订阅。模型接入方式见[官网说明](https://opencode.ai/)。

### OpenCode 和 Claude Code 有什么区别？

两者都是编码 Agent。OpenCode 是开源项目，官方宣传点是模型中立、可接任意厂商；Claude Code 是 Anthropic 的编码 Agent（见 [Claude Code 条目](/wiki/products/claude-code)）。官方页面没有发布二者对比结论，选择时建议按开源许可、模型接入方式和界面形态自行核对官方文档。

## 来源

- [OpenCode 官网](https://opencode.ai/)
- [OpenCode GitHub 仓库](https://github.com/anomalyco/opencode)
