---
entityType: product
entity: zcode
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ZCode：智谱的编码 Agent、GLM 搭配与安装入口｜Next Token Wiki'
seoDescription: '了解智谱 ZCode 编码 Agent 的定位、与 GLM 模型的配合、桌面安装入口和 GLM Coding Plan 计费方式。'
---

## ZCode 是什么

ZCode 是智谱（Z.ai）提供的 Agent 开发环境，官方称其为 GLM-5.3 的“Official Harness”。它面向规划、编码、调试与多 Agent 协作的开发工作流，并针对 GLM 模型做了联合调优：官方页面写明 “GLM is tuned for ZCode”，同时内置 GLM-5.3-Flash 处理截图理解、图像分析等多模态任务。

ZCode 与 Anthropic 的 Claude Code、OpenAI 的 Codex 同属编码 Agent（Harness）范畴，但由不同公司提供：ZCode 背后是智谱及其 GLM 模型家族，模型与工具的配合方式也不相同。

## 入口与使用边界

ZCode 提供桌面应用：macOS（Apple Silicon 与 Intel）、Windows（x64 与 ARM64）和 Linux（Beta，提供 .deb、.rpm、.AppImage 格式），安装包统一在[官方页面](https://zcode.z.ai/en)下载。官方还提供通过微信、飞书或 Telegram 远程启动和操控 ZCode 的方式，让长任务在离开电脑后继续推进。

工作方式上，官方用 Goals 管理复杂任务：持续规划、执行并验证结果，页面示例中 Agent 会自己写代码、运行检查并汇总改动。计费走智谱的 GLM Coding Plan，分 Lite、Pro、Max 等档位，官方页面称这些套餐支持 20 多种 Agent 工具（包括 ZCode 与 Claude Code）；当前资费以[官方套餐页](https://z.ai)为准。

与所有编码 Agent 一样，ZCode 生成的代码、依赖变更和命令执行结果需要开发者审阅。节目中参与者也提到，多模态任务消耗的 Token 明显更高，使用套餐额度时需要留意。

## 节目中的讨论

Weekly #001 多次谈到 ZCode。在“Computer Use 正在怎样改变 Vibe Coding 的验收”章节，杨攀说智谱 ZCode [“完全就是 Codex Alternative”，从 Codex 切换过来几乎无缝](/weekly/001/transcript#quote-400de0647fad0667ff00)，向阳乔木也提到[很多人推荐国产 Harness 时都会推荐 ZCode](/weekly/001/transcript#quote-85224455276d8af6f798)。在“原生模型加原生 Agent，会不会成为默认组合”章节，杨攀说[ZCode 迭代很快，已经快成为自己的主力](/weekly/001/transcript#quote-5e34ac6d6b04cf3299d9)；歸藏则提到[多模态任务在 ZCode 里 Token 消耗较高、套餐额度不够用](/weekly/001/transcript#quote-10a029bbadfcaf889bc2)。

在“Omarchy：一个 Agent 优先的 Linux 是什么体验”章节，向阳乔木说装完 [Omarchy](/wiki/products/omarchy) 后连网络都没配好，[是装了 ZCode 帮他把系统全部配置好，而且国内连接非常顺畅](/weekly/001/transcript#quote-996a84fc2d1e3ab6e38f)。在“OpenClaw 和 Coding Agent 正在双向融合”章节，杨攀观察到 Codex、ZCode 这类编码 Agent [正在吸收 OpenClaw 的一些能力](/weekly/001/transcript#quote-6da3490b335d2ae6828d)。以上均为参与者的使用体验；可阅读[第 001 期“Computer Use 正在怎样改变 Vibe Coding 的验收”章节](/weekly/001/transcript#chapter-04)。

## 常见问题

### ZCode 是什么？

ZCode 是智谱（Z.ai）的 Agent 开发环境，定位为 GLM-5.3 的官方 Harness，支持规划、编码、调试与多 Agent 协作，桌面应用覆盖 macOS、Windows 和 Linux。

### ZCode 在哪里下载安装？

在[官方页面](https://zcode.z.ai/en)下载对应平台的安装包：macOS 提供 Apple Silicon 与 Intel 两个版本，Windows 提供 x64 与 ARM64，Linux 为 Beta 版并支持 .deb、.rpm、.AppImage 格式。

### ZCode 用什么模型？

官方将 ZCode 与 GLM 模型联合调优，页面写明内置 GLM-5.3-Flash 处理截图理解、图像分析等多模态任务；GLM Coding Plan 套餐也可用于 Claude Code 等其他 Agent 工具。接入其他模型时的实际表现需自行验证。

### ZCode 怎么收费？

ZCode 通过智谱的 GLM Coding Plan 计费，分 Lite、Pro、Max 等档位。当前价格与额度见智谱官方套餐页，本页不复制具体数字。

### ZCode 和 Claude Code、Codex 有什么区别？

三者都是编码 Agent，分别由智谱、Anthropic 和 OpenAI 提供。ZCode 的差异点在于与 GLM 模型的联合调优、国内网络连接顺畅以及远程操控入口（微信、飞书、Telegram）。节目参与者把它描述为“Codex Alternative”，属于使用感受；选择时应比较实际任务中的完成质量、成本与工作流。

## 来源

- [ZCode 官方页面](https://zcode.z.ai/en)
- [Z.ai 官方网站](https://z.ai)
- [Claude Code 官方概览](https://docs.anthropic.com/en/docs/claude-code/overview)（对照编码 Agent 定位）
