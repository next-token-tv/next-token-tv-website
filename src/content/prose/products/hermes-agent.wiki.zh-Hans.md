---
entityType: product
entity: hermes-agent
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Hermes Agent：Nous Research 开源 Agent 的安装、能力与 OpenClaw 迁移｜Next Token Wiki'
seoDescription: '了解 Nous Research 的开源 Agent Hermes：自进化能力、运行后端、消息网关、安装方式与 Windows 支持，以及 Weekly 节目中的使用体验讨论。'
---

## Hermes Agent 是什么

Hermes Agent 是 [Nous Research](https://www.nousresearch.com/) 开发的开源 AI Agent，官方将其描述为"open-source, self-improving AI agent"（开源、可自我改进的 Agent），代码以 MIT 许可证发布。它运行在终端、消息平台和 IDE 工作流中，定位是可以长期陪伴使用者、从使用中积累经验的个人 Agent。产品官网是 [hermes-agent.ai](https://hermes-agent.ai/)，代码仓库在 GitHub（NousResearch 组织下）。

## 能力与运行方式

根据官方 README 与文档，Hermes 的主要能力包括：持久记忆、可复用技能（skills）、工具调用、定时任务（cron）、浏览器自动化、代码执行和多 Agent 委派；它会在使用中创建并改进技能，把经验沉淀下来。模型方面它是模型无关的，可以通过 `hermes model` 切换任意模型端点（官方列出 Nous Portal、OpenRouter、OpenAI 或自定义端点等）。

运行形态上有几种入口：一个网关进程可以同时接入 Telegram、Discord、Slack、WhatsApp、Signal 和命令行；执行后端支持本地、Docker、SSH、Daytona、Singularity 和 Modal 六种，既可以在一台便宜的 VPS 上常驻，也可以用无服务器后端按需唤醒。系统支持为 Linux、macOS、WSL2 和通过 Termux 的 Android；原生 Windows 不受支持，需要 WSL2。安装方式见[官方 How-to 文档](https://hermes-agent.ai/how-to)，文档站点为 hermes-agent.nousresearch.com。

## 节目中的讨论

Weekly #001 的"OpenClaw 和 Coding Agent 正在双向融合"一章把 Hermes 放在个人 Agent 产品的比较里讨论：向阳乔木认为 [OpenClaw](/wiki/products/openclaw) 的体验[甚至一直不如 Hermes](/weekly/001/transcript#quote-2c157f56d0d44685bbd5)，歸藏说[Hermes 最起码还是一个做产品的](/weekly/001/transcript#quote-ef96ad2caa39a9c3c681)。杨攀补充了相反方向的体验：他上个月从 [OpenClaw](/wiki/products/openclaw) 换到 Hermes，[认为两者体验差距极大——连续多条消息交代任务时，Hermes 经常中途停下，不如 OpenClaw 顺畅](/weekly/001/transcript#quote-bf6243fb3300e77ecd47)。这些是个体使用感受，同一个产品在不同用法下结论可能不同。

在"产品迭代速度，正在成为新的组织能力"一章中，歸藏把 Hermes 团队当作迭代速度的参照，[认为团队效率跟不上 Hermes 这类产品更快的迭代节奏就跟不上竞争](/weekly/001/transcript#quote-2c9c980d4a92d113a2e7)。这是节目参与者对团队节奏的观点，不是官方信息。

## 常见问题

### Hermes Agent 是什么？

它是 [Nous Research](https://www.nousresearch.com/) 开发的开源个人 AI Agent，以 MIT 许可证发布，可以从终端、消息平台和 IDE 中使用，具备持久记忆、技能积累、定时任务、浏览器自动化和多 Agent 委派等能力，见[官方 README](https://github.com/NousResearch/hermes-agent)。

### Hermes Agent 怎么安装？支持 Windows 吗？

官方提供一条脚本安装命令（见 [How-to 文档](https://hermes-agent.ai/how-to)），支持 Linux、macOS、WSL2 和 Termux 上的 Android；原生 Windows 不受支持，Windows 用户需要先安装 WSL2。

### Hermes Agent 和 OpenClaw 什么关系？

两者是同类个人 Agent 产品。Hermes 官方提供从 OpenClaw 迁移的命令 `hermes claw migrate`，可以导入原有配置、记忆与技能。Weekly #001 中杨攀、向阳乔木和歸藏分别谈到了两个产品各自的使用体验，结论并不一致。

### Hermes Agent 用什么模型？

它是模型无关的：用 `hermes model` 命令即可切换 Nous Portal、OpenRouter 上的模型或自定义端点，官方称切换不需要改代码。具体可接模型以[官方文档](https://hermes-agent.ai/)为准。

## 来源

- [Hermes Agent 官网](https://hermes-agent.ai/)
- [Hermes Agent GitHub 仓库（NousResearch）](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent How-to 文档](https://hermes-agent.ai/how-to)
