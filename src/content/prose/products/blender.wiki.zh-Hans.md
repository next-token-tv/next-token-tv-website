---
entityType: product
entity: blender
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Blender：开源三维创作套件、bpy 脚本与 AI 建模｜Next Token Wiki'
seoDescription: '了解 Blender 的定位、官方入口、bpy Python 脚本能力，以及 Weekly 节目中 AI 通过 bpy 驱动 Blender 建模的讨论。'
---

## Blender 是什么

Blender 是一套免费、开源的三维创作软件，由 blender.org 托管的公共项目维护，采用 GNU GPL 许可证，代码由贡献者共同拥有。它覆盖建模、雕刻、绑定与动画、渲染（内置 Cycles 渲染引擎）、视觉特效跟踪、Grease Pencil 二维绘制等环节，官方称其已被用于多部短片、广告、剧集和电影长片。当前版本与各平台安装包见[官方下载页](https://www.blender.org/download/)。

## 用途与使用边界

Blender 的官方入口是[blender.org](https://www.blender.org/)，提供 Windows、macOS 和 Linux 安装包，软件本体免费，项目靠捐赠和周边商店支持。它既可以用图形界面手动操作，也提供完整的 [Python API（bpy）](https://docs.blender.org/api/current/)：`bpy.data`、`bpy.ops` 等模块可以读写场景数据、调用操作符，Blender 还能作为 Python 模块脱离图形界面运行。这意味着建模、渲染等任务可以完全以脚本方式完成——同一份工程既可以给人看，也可以给自动化程序或 AI Agent 调用。

需要区分的是：Blender 本身不是 AI 产品，也不包含生成式模型；AI 相关的工作流是外部模型或 Agent 通过 bpy 等接口驱动 Blender 完成的。渲染效果、工程结构和性能问题仍属于三维制作本身的范畴。

## 节目中的讨论

Weekly #002 的“Blender 与代码：给模型合适的工具”章节里，[歸藏描述了他观察到的 AI 建模方式](/weekly/002/transcript#quote-fe0f9eda66da21490336)：Agent 并不是用 Computer Use 去点 Blender 界面，而是用 bpy 写代码建模，界面几乎没有动静，结果直接生成。杨攀补充说这种方式 Token 效率很高。同章还对比了 DaVinci Resolve 通过 MCP 开放调用的做法。在“GPT-6 Astra：从 3D 建模聊起”和“设计 Agent 为什么也需要执行环境”章节中，歸藏多次以 Blender 为例讨论模型 3D 能力的演示方式。这些是节目参与者的观察，不是对 Blender 软件本身的评测。可阅读[对应章节](/weekly/002/transcript#chapter-04)。

## 常见问题

### Blender 是什么软件？

Blender 是一套免费开源的三维创作软件，覆盖建模、雕刻、动画、渲染、特效跟踪和二维绘制，由 blender.org 托管的公共项目以 GNU GPL 许可证维护，介绍见[官网](https://www.blender.org/)。

### Blender 免费吗，官网在哪里？

免费。官方页面明确 Blender 是"Free and Open Source software"，采用 GNU GPL 许可证，项目靠捐赠和商店支持。下载入口是[官方下载页](https://www.blender.org/download/)，提供 Windows、macOS、Linux 安装包。

### 什么是 bpy？Blender 可以用脚本或 AI 自动化吗？

bpy 是 Blender 的官方 Python API，包含 `bpy.context`、`bpy.data`、`bpy.ops` 等模块，可以脚本化操作建模、动画、渲染等几乎全部功能，Blender 还可作为 Python 模块独立运行，详见[官方 API 文档](https://docs.blender.org/api/current/)。AI Agent 驱动 Blender 建模的常见方式正是通过这套接口写代码，而不是模拟鼠标操作界面。

### Blender 支持哪些操作系统？

官方下载页提供 Windows（含 ARM）、macOS（Apple Silicon）和 Linux 安装包，另有 Steam、Microsoft Store 等分发渠道；具体版本和系统要求以[下载页](https://www.blender.org/download/)为准。

## 来源

- [Blender 官网](https://www.blender.org/)
- [Blender 官方下载页](https://www.blender.org/download/)
- [Blender Python API 文档](https://docs.blender.org/api/current/)
