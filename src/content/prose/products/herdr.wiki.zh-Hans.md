---
entityType: product
entity: herdr
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Herdr：编程 Agent 的常驻终端运行时，安装与 Agent 托管｜Next Token Wiki'
seoDescription: '了解 Herdr 是什么：承载多个编程 Agent 会话的后台运行时、状态监测与 Agent 互调 API、安装方式，以及 Weekly 节目中极客式用法的讨论。'
---

## Herdr 是什么

Herdr 是一个面向编程 Agent 的终端运行时，官方的定位表述是"the runtime coding agents run on"（编程 Agent 赖以运行的运行时）。它由 Herdr, Inc. 开发，以 Apache 2.0 许可证开源，代码在 GitHub（herdrdev/herdr）。与"打开一个应用"不同，[官方介绍](https://herdr.dev/)强调它是一个在后台常驻的服务器，终端会话活在它里面：合上电脑盖子或断网，Agent 继续工作。

## 能力与使用方式

按官方资料，Herdr 把 Claude Code、Codex、Cursor、opencode 等多个 Agent CLI 会话托管在同一个持久服务中，官方列出一开始就支持 22 种 Agent CLI；它会读取每个窗格，把每个 Agent 标记为 working、blocked 或 idle，免去挨个排查卡住的会话。它还提供面向 Agent 的 CLI 与 socket API——Agent 可以拆分窗格、启动别的 Agent、互相发提示；通过 SSH 管理多台机器也有对应命令。Herdr Cloud（免 SSH 连接机器）在官方页面上标注为即将推出，尚非常态功能。

安装上，macOS 与 Linux 可用一条脚本命令安装（见[官方文档](https://herdr.dev/docs/)），Windows 有 PowerShell 安装脚本，另有 Homebrew、Nix 等方式；插件生态通过插件页分发。它不封装、不替代各个 Agent CLI，只接管它们的终端。

## 节目中的讨论

Weekly #001 的"Harness 评测：完成率、Token 成本与"斩杀线""一章末尾，歸藏提议用 Herdr 来做这类多 Agent 的玩法，觉得[这种用法很有意思、很好玩](/weekly/001/transcript#quote-3a2ed4b1d2652e5ee560)，并[解释了它的用法：先在终端里启动 Herdr，再在它里面启动各个 CLI，它们能相互沟通，可以把任务派接给 DeepSeek Harness](/weekly/001/transcript#quote-23b5fd89af3826486e6d)。向阳乔木接话说[这太极客了，很多极客会喜欢——要先启动它，然后再调各种东西](/weekly/001/transcript#quote-0448d269678329000e34)。这段讨论描述的是 2026 年 9 月前后参与者眼中的 Herdr 定位与用法，与官方"Agent 可以互相启动、互相派活"的设计一致，但具体体验因人而异。

## 常见问题

### Herdr 是什么？

它是一个承载编程 Agent 会话的后台终端运行时：Agent 的终端活在 Herdr 的常驻服务里，断网或合盖后 Agent 继续运行，并按 working / blocked / idle 标记每个会话，见[官方介绍](https://herdr.dev/)。

### Herdr 和 tmux 有什么区别？

tmux 是通用的终端复用工具；Herdr 专为 Agent 会话设计——除了常驻和会话存活，它还识别每个 Agent 的工作状态，并给 Agent 提供 CLI 和 socket API，让 Agent 能启动别的 Agent、互相发提示。两者定位不同，是否叠加使用取决于个人工作流。

### Herdr 怎么安装？

macOS 与 Linux 用官方安装脚本（`curl -fsSL https://herdr.dev/install.sh | sh`），Windows 用官方 PowerShell 脚本，另有 Homebrew、Nix 和手动安装方式，见[官方文档](https://herdr.dev/docs/)。

### Herdr 支持哪些编程 Agent？

官方列出一开始就支持 22 种 Agent CLI，包括 Claude Code、Codex、Cursor、opencode 等；它不替换这些 CLI，只托管它们的终端。当前支持列表见[官方页面](https://herdr.dev/)。

## 来源

- [Herdr 官网](https://herdr.dev/)
- [Herdr 文档](https://herdr.dev/docs/)
- [Herdr GitHub 仓库](https://github.com/herdrdev/herdr)
