---
entityType: product
entity: pi
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Pi：终端里的极简编程 Agent｜Next Token Wiki'
seoDescription: '了解 Pi 终端编程 Agent 的定位、扩展机制、安装方式，以及 Next Token 节目中对 Pi 的讨论。'
---

## Pi 定位

Pi 是一个运行在终端的极简编程 Agent（agent harness），由 Earendil Inc. 与贡献者开发，采用 MIT 许可证，官网是 [pi.dev](https://pi.dev/)，文档在 [pi.dev/docs/latest](https://pi.dev/docs/latest)。官方标语为 "There are many agent harnesses but this one is yours"，设计目标是核心尽量小，让使用者通过扩展把 Pi 适配到自己的工作流，而不是反过来。注意区分同名事物：本条目指 pi.dev 的终端编程 Agent，不是树莓派（Raspberry Pi）或其他名为 Pi 的产品。

## 用途与使用边界

- 扩展机制：TypeScript 扩展（自定义工具、命令、事件与界面）、Skills（可复用的按需能力）、提示词模板（斜杠命令触发）、主题，以及打包分享扩展、skills、模板与主题的 pi packages。
- 模型与供应商：官方称支持 15 家以上供应商、数百个模型，可用 `/model` 在会话中切换，也可通过 llama.cpp 使用本地模型。
- 会话与上下文：会话以树结构保存，支持分支与分享；支持 AGENTS.md、SYSTEM.md、上下文压缩与 skills 等上下文工程手段。
- 集成方式：交互、print/JSON、RPC 与 SDK 四种使用形态，可通过 SDK 嵌入 Node.js 应用。
- 设计取舍：官方口径为 "Primitives, not features"——核心刻意不内置 MCP、子代理、计划模式、权限弹窗等能力，需要时以扩展或包的形式添加。
- 安装：官方提供 curl 安装脚本，也可通过 npm 安装 `@earendil-works/pi-coding-agent`。

## 节目中的讨论

- Weekly #001 第 6 章“Harness 评测：完成率、Token 成本与'斩杀线'”讨论各家 Agent Harness 的效率：向阳乔木说[不少研发喜欢 Pi 的 Harness](/weekly/001/transcript#quote-07a0f0977ece93cefb08)；杨攀转述当天看到的第三方评测（Runta 的 Harness Eval）称[Pi 处在"斩杀线"里面、被 DeepSeek Harness 盖住](/weekly/001/transcript#quote-2208a16d6d07cfce6493)；橘子评价[Pi 自己比较轻量，但扩展性弱很多、MCP 什么的支持都不好](/weekly/001/transcript#quote-9f35641f5154b777458c)。注意：评测数字来自节目转述，不是 Pi 官方数据；而"不内置 MCP"在官方口径中是刻意的设计取舍，两者的评价角度不同。
- Weekly #002 第 14 章“Agent API：还需要自己维护一套 Harness 吗”讨论 Harness 复杂度时，向阳乔木说[Pi 据说已经算很简洁，但也加了很多东西](/weekly/002/transcript#quote-4b64d0f0dd8c42c340c3)。

## 常见问题

### Pi 是什么？

Pi 是 pi.dev 提供的终端编程 Agent：核心极简、通过 TypeScript 扩展、skills、提示词模板和主题定制工作流，MIT 许可开源，也可通过 SDK 嵌入应用。与树莓派等同名产品无关。

### Pi 怎么安装？

官方提供一键安装脚本（`curl -fsSL https://pi.dev/install.sh | sh`），也可以用 npm 安装 `@earendil-works/pi-coding-agent`；安装后运行 `pi` 并用 `/login` 或 API Key 完成认证。见[官方文档](https://pi.dev/docs/latest)。

### Pi 支持 MCP 吗？

核心刻意不内置 MCP、子代理、计划模式等能力，官方口径是"Primitives, not features"；需要 MCP 时以扩展或社区包的形式添加。

### Pi 和 Claude Code、OpenCode 这类终端 Agent 有什么区别？

按官方定位，Pi 的差异点在于极简核心加自定义扩展：系统提示词很小、核心能力刻意收敛，其余工作流由使用者通过扩展实现。具体能力对比随版本变化，建议以[官方文档](https://pi.dev/docs/latest)为准并自行试用。

## 来源

- [Pi 官网](https://pi.dev/)
- [Pi 官方文档](https://pi.dev/docs/latest)
