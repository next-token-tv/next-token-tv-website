---
entityType: product
entity: ego-lite
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'ego (lite)：人和 AI Agent 共用的浏览器｜Next Token Wiki'
seoDescription: '了解 ego (lite) 浏览器的定位、Spaces 隔离工作区与 ego-browser 技能的接入方式、平台支持情况，以及 Weekly 节目中的相关取舍讨论。'
---

## ego (lite) 是什么

ego (lite) 是 GitHub 上 citrolabs 组织维护的浏览器项目（仓库 [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)），官方 README 的定位是"你与你的 AI Agent 并行工作的浏览器"：Agent 在浏览器内部的隔离工作区 Spaces 里运行自己的网页任务，人继续用自己的标签页，官方称之为"没有哪个 Agent 会把浏览器从你手里抢走"。文档站点为 lite.ego.app。

README 同时把 ego (lite) 与 browser-use、agent-browser 这类方案做了区分：官方说法是后者是"通往浏览器的桥，而不是浏览器本身"，需要另开一个浏览器去驱动，用户数据难以完整带入，人与 Agent 互相争夺控制权。这属于官方的竞争性表述。

## 用途与接入方式

Agent 通过 `ego-browser` 技能连接 ego (lite)：官方 README 说明安装 ego lite 时会把它加进本机各 Agent 的技能目录，也可以用 `npx skills add citrolabs/ego-lite` 单独安装，并点名支持 Claude Code、Codex、Cursor 或自定义 Agent CLI。技能把浏览器暴露为 snapshot、fill、click、wait、navigate、capture 等页面内 JavaScript 工具，Agent 写一段 JavaScript 一次性执行；页面以 Snapshot（结构化文本）的形式供纯文本模型"阅读"，官方称凭借对浏览器引擎的定制，深层嵌套 iframe 等复杂页面也能稳定处理。README 还声称其代码直调的方式比常见的 CLI 循环更快、更省 Token——这些属于官方自述口径。

首次启动时可以选择迁移 Chrome 数据，官方说明 Agent 会继承既有的登录、Cookie、扩展和书签。平台方面，README 写明 ego lite 当前提供 macOS 版（Apple Silicon 与 Intel 的 DMG），Windows 封闭测试"即将推出"，Linux 在路线图中。仓库内容以 MIT 许可发布，浏览器本体是单独的免费下载。

## 节目中的讨论

Weekly #003 的"语音输入产品与实时反馈"章节后半段，在聊到 [Codex](/wiki/products/codex) 内置浏览器支持 Chrome 插件、Cookie 和历史记录都能带进来时，[向阳乔木说自己上次还在考虑要不要找 ego (lite) 或 Tabbit 这类第三方浏览器，现在想想好像没必要了](/weekly/003/transcript#quote-929a931e475be5e2bc48)。这是参与者在"Agent 已有内置浏览器"这个前提下的取舍，不是对 ego (lite) 本身的评测。

## 常见问题

### ego (lite) 是什么？

一个让人与 AI Agent 共用同一个浏览器的浏览器项目：Agent 在隔离的 Spaces 中运行网页任务，人保持自己的标签页；代码仓库为 GitHub 上的 [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)。

### AI Agent 怎么连接 ego (lite)？

安装 ego lite 会自动添加 `ego-browser` 技能，也可以运行 `npx skills add citrolabs/ego-lite` 单独安装；技能提供 snapshot、click、fill、navigate 等 JavaScript 工具，官方点名支持 Claude Code、Codex、Cursor 等 Agent CLI。

### ego (lite) 支持 Windows 吗？

官方 README 写明当前提供 macOS 版（Apple Silicon 与 Intel），Windows 封闭测试"即将推出"，Linux 在路线图中；截至 2026 年 9 月的平台状态以[官方仓库](https://github.com/citrolabs/ego-lite)为准。

### ego (lite) 免费吗？

仓库内容以 MIT 许可发布，浏览器本体是单独的免费下载。

### ego (lite) 和 Chrome 是什么关系？

首次启动时可以迁移 Chrome 的登录、Cookie、扩展和书签（官方 README 说明），使 Agent 能直接使用既有账号状态。

## 来源

- [GitHub 仓库：citrolabs/ego-lite（README）](https://github.com/citrolabs/ego-lite)
- [ego lite 文档](https://lite.ego.app/document/)
