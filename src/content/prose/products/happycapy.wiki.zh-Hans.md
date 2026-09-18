---
entityType: product
entity: happycapy
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Happycapy：浏览器里的云端 Agent 电脑｜Next Token Wiki'
seoDescription: '了解 Happycapy 的云端沙箱运行方式、Skill Store 与自动化学，以及 Next Token 节目中关于虚拟机与常驻电脑的讨论。'
---

## Happycapy 是什么

Happycapy 是一个"Agent 原生电脑"（agent-native computer）：官方文档的定义是"一个在你浏览器中运行的 Agent 原生电脑，无需安装、无需终端配置、无需 API Key"。用户在网页里给 Agent 派任务，Agent 在云端沙箱中执行，可以浏览网页、处理文件并运行代码。官方文档还说明其由 Claude Code 驱动，并按场景把任务路由到内置的合适模型。产品入口见[官网](https://happycapy.ai/)与[官方文档](https://docs.happycapy.ai/en)。

## 使用方式与边界

按官方文档，Happycapy 的几个核心机制是：

- 云端沙箱：工作在云端运行，本地文件保持隔离；
- Skill Store：为生成、编码、分析、翻译等场景提供现成技能；
- Automations（beta）：把周期性、长时间运行的任务留在云端持续执行；
- 计费采用积分（credits）方式，官网提供免费开始的入口。

Agent 能访问什么取决于任务授权；与本地电脑的关系是"云端运行、本地隔离"，这一点与需要本地执行环境的工具不同。对需要常驻工作环境、保留登录状态与安装技能的场景，可以对照 [Grok Bot](/wiki/products/grok-bot) 条目。

## 节目中的讨论

Weekly #002 的"临时环境与常驻电脑的区别"章节中，歸藏认为国内的临时虚拟机方案"都很难用"、缺少 Grok Bot 那样的常驻环境；乔木随即提到：[Happycapy 是不是？Happycapy 他给虚拟机不知道是不是，我印象中好像是](/weekly/002/transcript#quote-e59a1df53d4fdf5be2c5)。这是参与者不确定的回忆，官方文档描述的形态是云端沙箱而非完整虚拟机，本条目不把节目猜测当作产品事实。

## 常见问题

### Happycapy 是什么？

一个在浏览器中运行的云端 Agent 电脑，由官方文档描述为"agent-native computer"，无需安装和 API Key，Agent 在云端沙箱中浏览网页、处理文件并运行代码。见[官方文档](https://docs.happycapy.ai/en)。

### Happycapy 免费吗，怎么收费？

官网提供免费开始的入口，使用按积分（credits）计量；积分规则与模型用量见官方文档的 Credits & Usage 页面。

### Happycapy 需要下载安装吗？

按官方文档不需要：没有安装和终端配置，打开网页即可使用；官网页脚另列有 iOS 应用。

### Happycapy 和 Claude Code 是什么关系？

官方文档写明 Happycapy "powered by Claude Code"，即底层采用 Claude Code 驱动 Agent，并按场景路由到内置模型；它不是 Claude Code 的官方产品页，具体关系以官方文档表述为准。

## 来源

- [Happycapy 官网](https://happycapy.ai/)
- [Happycapy 官方文档](https://docs.happycapy.ai/en)
