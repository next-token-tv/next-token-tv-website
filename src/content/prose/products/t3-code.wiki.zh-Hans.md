---
entityType: product
entity: t3-code
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'T3 Code：编程 Agent 的开源控制面｜Next Token Wiki'
seoDescription: '了解 T3 Code 的定位：编排 Claude Code、Codex 等编程智能体的开源控制面、自带订阅的使用方式、安装方法，以及节目中的相关讨论。'
---

## T3 Code 是什么

T3 Code 是一个开源的编程 Agent 控制面（官方称"the open-source control plane for coding agents"），把多个编程智能体会话的管理放到同一个图形界面里。它由 T3 Tools Inc. 开发，代码托管在 GitHub 的 pingdotgg 组织下（[pingdotgg/t3code](https://github.com/pingdotgg/t3code/)，2026 年 2 月创建，MIT 许可证），官网为 [t3.codes](https://t3.codes/)。名称中的 T3 与该团队的 Theo（theo）相关联；它与另一类同名技术词汇（如 T3 Stack）指的不是同一样东西。

## 用途与使用边界

按官方说明，T3 Code 可以从同一个界面编排 Claude Code、Codex、Antigravity、OpenCode、Cursor 和 Grok 等编程 Agent，提供桌面应用（macOS、Windows、Linux）与移动端（iOS、Android）以及网页访问。它采用"bring your own subscription"模式：不转售 token、不设配额，使用的是用户在各个 Agent 处自己的订阅；前提是机器上至少安装并登录了一个受支持的 Agent。安装方式包括官方安装脚本、Homebrew、winget 或 `npx t3@latest`，详见官方仓库 README。

需要注意的是，T3 Code 是会话编排与控制层，不是模型，也不替代 Claude Code、Codex 本身；每个 Agent 的能力边界仍由各自的提供商决定。官方 README 亦明示项目仍处于早期阶段。

## 节目中的讨论

在 Weekly #002 的"Agent API：还需要自己维护一套 Harness 吗"章节中，歸藏在讨论为多个编程 Agent 做适配的"壳"类产品时，[提到 T3 Code 很火，并评价其开发者"嘴比较臭"，但用户量很大](/weekly/002/transcript#quote-fbd594a31a1f660943e8)。他同时解释了这类产品的处境：各家 Agent 框架绑定自己的模型和 API 格式，适配成本会越做越高。这是节目参与者当时的观察与评价，不代表官方说明。

## 常见问题

### T3 Code 是什么？

一个用于编排多个编程 Agent 的开源控制面/图形界面，官方描述见 [t3.codes](https://t3.codes/)；它管理的是 Claude Code、Codex 等会话，本身不是模型。

### T3 Code 支持哪些编程 Agent？

官方列出 Claude Code、Codex、Antigravity、OpenCode、Cursor 和 Grok；要求至少一个 Agent 已在机器上安装并登录。支持列表以[官方仓库 README](https://github.com/pingdotgg/t3code/) 为准。

### T3 Code 收费吗？

T3 Code 本身 MIT 开源、不收费；它不转售 token，模型用量走用户在各个 Agent 处自己的订阅（bring your own subscription）。

### T3 Code 怎么安装？

官方提供安装脚本（见 [t3.codes](https://t3.codes/)）、Homebrew cask（`t3-code`）、winget（`T3Tools.T3Code`）等桌面安装方式，移动端有 iOS 和 Android 应用；也可用 `npx t3@latest` 直接运行。

## 来源

- [T3 Code 官方网站](https://t3.codes/)
- [GitHub：pingdotgg/t3code](https://github.com/pingdotgg/t3code/)
