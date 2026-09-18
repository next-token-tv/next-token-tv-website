---
entityType: product
entity: codepilot
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'CodePilot：把 Claude Code 与 Codex 装进同一个桌面工作区｜Next Token Wiki'
seoDescription: '了解歸藏开发的桌面 AI 工作区 CodePilot 的定位、支持的 Agent 与模型供应商、许可与下载方式，以及 Weekly 节目中关于其底层框架的讨论。'
---

## CodePilot 是什么

CodePilot 是歸藏（Guizang，GitHub 用户 op7418）开发的桌面 AI Agent 工作区，官方网站为 [codepilot.sh](https://www.codepilot.sh/)，源代码以 BSL 1.1 许可发布在 GitHub 仓库 [op7418/CodePilot](https://github.com/op7418/CodePilot)。它把 Claude Code、Codex 等命令行编码 Agent 与内置的 CodePilot Agent 放进同一个桌面工作区，用于项目开发和日常任务；名字与 GitHub Copilot 相近但两者无关。仓库描述显示它基于 Electron 和 Next.js 构建（见 [Electron](/wiki/products/electron)）。

## 用途与使用边界

官方站点列出的能力包括：多个会话各自保留独立上下文；权限控制与操作审批；可视化的项目工作区，可查看文件与改动；带偏好和记忆的个人助手；以及 Skills、MCP 和 CLI 工具扩展，会话在重启后保留。模型接入由使用者自行提供：支持 Anthropic、OpenRouter、DeepSeek、GLM、Kimi、OpenAI 兼容 API 和本地 Ollama；使用 Claude Code 与 Codex 需要先安装对应 CLI 并登录，且同一会话中不能中途切换 Agent。平台覆盖 macOS（Apple Silicon 与 Intel）、Windows 和 Linux。许可方面，BSL 1.1 允许个人、教育、非营利与评估用途免费使用，商业使用（用于付费产品或超过 100 人的公司）需要另行获取授权；版本更新见官方发布渠道。

## 节目中的讨论

Weekly #002 的"Agent API：还需要自己维护一套 Harness 吗"一章里，向阳乔木向歸藏提问：[你之前不是开发 CodePilot 嘛，最早版本是怎么搭底层框架的](/weekly/002/transcript#quote-02143b2e529a69172809)？歸藏回答，早期大家只做"壳"——核心的 Agent 循环和模型适配交给上游，自己只适配 Claude Code；但随着各家 Agent 与模型绑定加深，产品不得不做一个 runtime 路由器，把用户输入路由到不同的 CLI 和 Agent 框架，适配成本越来越高。这段对话以 CodePilot 为样本，讨论了小团队自建 Agent 工作区的路线与代价。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-14)。

## 常见问题

### CodePilot 是什么，谁开发的？

一个桌面 AI Agent 工作区，把 Claude Code、Codex 等编码 Agent 和内置 Agent 集中到一个界面里，由产品设计师歸藏（GitHub 用户 op7418）开发，官网是 [codepilot.sh](https://www.codepilot.sh/)。

### CodePilot 和 GitHub Copilot 有什么关系？

没有关系，只是名字相近。GitHub Copilot 是微软 GitHub 的编程助手；本页的 CodePilot 是一个独立的开源桌面工作区，搜索时建议加上"codepilot.sh"或"歸藏"等词避免混淆。

### CodePilot 支持哪些 Agent 和模型？

支持 Claude Code 与 Codex（需自行安装对应 CLI 并登录）以及内置 Agent；模型供应商可接 Anthropic、OpenRouter、DeepSeek、GLM、Kimi、OpenAI 兼容 API 和本地 Ollama。以[官方网站](https://www.codepilot.sh/)的最新说明为准。

### CodePilot 收费吗？

软件本体按 BSL 1.1 许可对个人、教育、非营利与评估用途免费；商业使用（付费产品或 100 人以上公司）需要商业授权。模型用量费用由所接的供应商收取。

### CodePilot 在哪里下载？

从[官方网站](https://www.codepilot.sh/)或其 [GitHub 仓库](https://github.com/op7418/CodePilot)获取 macOS、Windows 与 Linux 安装包；版本与更新说明见官方发布渠道。

## 来源

- [CodePilot 官方网站](https://www.codepilot.sh/)
- [CodePilot GitHub 仓库（op7418/CodePilot）](https://github.com/op7418/CodePilot)
