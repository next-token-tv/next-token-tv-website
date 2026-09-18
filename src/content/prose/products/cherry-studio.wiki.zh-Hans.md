---
entityType: product
entity: cherry-studio
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Cherry Studio：多模型开源 AI 桌面客户端｜Next Token Wiki'
seoDescription: 'Cherry Studio 的定位、支持的模型与本地知识库能力、MCP 配置入口、许可证与企业版，以及 Next Token 节目中的相关讨论。'
---

## Cherry Studio 是什么

Cherry Studio 是一个开源的 AI 桌面客户端，把多家模型服务商和本地模型放进同一个桌面应用。社区版基于 AGPL-3.0 许可证发布，另有面向企业的私有部署版本。代码在 [GitHub（CherryHQ/cherry-studio）](https://github.com/CherryHQ/cherry-studio)开放开发，官网是 [cherry-ai.com](https://www.cherry-ai.com/)，文档在 [docs.cherry-ai.com](https://docs.cherry-ai.com/)。

## 使用方式与边界

- 多模型接入：按官方 README，支持 OpenAI、Gemini、Anthropic 等主要云服务商、部分网页 AI 服务，以及通过 Ollama 和 LM Studio 接入本地模型；同一对话可以同时对比多个模型的回答。
- 助手与知识处理：内置 300 多个预配置助手，支持自定义助手，可处理文本、图片、Office 与 PDF 文档，并提供话题管理、WebDAV 备份、AI 翻译、Mermaid 图表与代码高亮。
- 工具扩展：支持 MCP（Model Context Protocol）服务器，配置方法见[官方文档](https://docs.cherry-ai.com/)。
- 平台：官方仓库提供 Windows、macOS 与 Linux 桌面版本；移动端（Android/iOS）在官方路线图中列为计划项，已发布版本以 [GitHub Releases](https://github.com/CherryHQ/cherry-studio/releases) 为准。

MCP 配置、模型接入与数据备份的具体步骤以官方文档为准。

## 节目中的讨论

在 Weekly #002"Agent API：还需要自己维护一套 Harness 吗"章节，歸藏谈到开发客户端类产品时需要在多个 Agent 框架之间做适配：各框架 API 格式不同，适配工作会产生大量冗余。[杨攀随即问到 Cherry Studio 是不是就做了这类工作](/weekly/002/transcript#quote-c13afae3d14869fd480e)，歸藏回答"很多都做了"，并以 T3 Code 等产品为例继续讨论这类"壳"产品的适配成本。这是节目参与者的开发经验讨论，不构成对 Cherry Studio 具体功能的逐项确认。

## 常见问题

### Cherry Studio 是什么？

一个开源 AI 桌面客户端，把多家模型服务商和本地模型放进同一个应用，提供助手、文档处理和 MCP 等能力。见[官网](https://www.cherry-ai.com/)与 [GitHub 仓库](https://github.com/CherryHQ/cherry-studio)。

### Cherry Studio 支持哪些模型？

按官方 README，支持 OpenAI、Gemini、Anthropic 等主要云服务商、部分网页 AI 服务，以及 Ollama、LM Studio 本地模型；同一对话可同时对比多个模型。可用服务商列表以官方文档为准。

### Cherry Studio 免费吗？

社区版按 AGPL-3.0 许可证开源，可以自由使用，商用需遵守许可证条款；官方另提供单独授权的企业私有部署版本。许可与商用细节见仓库说明。

### Cherry Studio 有手机版吗？

官方 README 将 Android/iOS 移动端列为路线图计划项；已发布的桌面版本覆盖 Windows、macOS 与 Linux，可用版本见 [GitHub Releases](https://github.com/CherryHQ/cherry-studio/releases)。

### Cherry Studio 的 MCP 怎么配置？

官方文档提供 MCP 配置说明，模型与 MCP 服务的接入方式都可能随版本变化，建议直接按 [docs.cherry-ai.com](https://docs.cherry-ai.com/) 的当前说明操作。

## 来源

- [Cherry Studio 官网](https://www.cherry-ai.com/)
- [GitHub: CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)
- [Cherry Studio 官方文档](https://docs.cherry-ai.com/)
