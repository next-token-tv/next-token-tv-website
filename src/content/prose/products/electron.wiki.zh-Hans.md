---
entityType: product
entity: electron
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Electron：跨平台桌面应用框架、官方入口与生态｜Next Token Wiki'
seoDescription: '了解 Electron 框架的定位、技术构成、文档与工具入口、用它构建的知名应用，以及 Weekly 节目对 Electron 的提及。'
---

## Electron 是什么

Electron 是 OpenJS Foundation 维护的开源框架，用 JavaScript、HTML 和 CSS 构建跨平台桌面应用，运行在 macOS、Windows 和 Linux 上。它把 Chromium 浏览器引擎和 Node.js 运行时打包在一起，让应用自带完整的 Web 运行环境。项目最初为 Atom 编辑器而建，2013 年 7 月 15 日以"Atom Shell"的名称首次发布，2015 年更名为 Electron。官方站点列举的使用者包括 VS Code、Slack、Discord、Figma、Notion、Obsidian、1Password、Claude 桌面端等应用。

## 用途与使用边界

Electron 适合已有 Web 技术栈的团队把产品带到桌面端，或需要跨操作系统一致界面的桌面工具。官方入口包括[官方网站](https://www.electronjs.org/)、[文档](https://www.electronjs.org/docs/latest/)、用于搭建与发布的 Electron Forge，以及用于试验的 Electron Fiddle；依赖通过 npm 安装。当前版本与更新节奏见[官方发布页](https://releases.electronjs.org/)。需要理解的技术边界是：Electron 应用自带 Chromium 与 Node.js，界面能力基本等同于 Web，系统级能力依赖 Node.js 侧与原生模块；深度的系统集成需求要评估是否超出框架的舒适区。

## 节目中的讨论

Weekly #002 的"Blender 与代码：给模型合适的工具"一章里，橘子谈到自己开发 ColaMD（一个 Markdown 编译器）的体验：[用以前的模型时，它们会自己启动一个 Electron 版本来测试](/weekly/002/transcript#quote-b2b0a48179812ca8f3c8)，而换成 DeepSeek Flash 后测试方式不一样，有时不启动界面就自己测完。这段讨论的语境是 Agent 如何使用软件的"基建"，Electron 在其中作为模型能够构建和运行的一类桌面应用出现。这也是 AI 编程工具语境下 Electron 的一个侧面：它足够常见，以至于模型可以直接"跑一个 Electron 版本"来验收工作。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-04)。

## 常见问题

### Electron 是什么？

一个用 JavaScript、HTML、CSS 构建跨平台桌面应用的开源框架，由 OpenJS Foundation 维护，内部使用 Chromium 渲染界面、Node.js 提供系统能力，支持 macOS、Windows 和 Linux。

### 哪些应用是用 Electron 做的？

官方站点列举了 VS Code、Slack、Discord、Figma、Notion、Obsidian、1Password、Claude 桌面端等；完整与最新的例子见[官方网站](https://www.electronjs.org/)。

### 怎么开始开发 Electron 应用？

从[官方文档](https://www.electronjs.org/docs/latest/)起步，用 npm 安装依赖；正式项目建议使用 Electron Forge 搭建和打包，小实验可以用 Electron Fiddle 快速验证。

### Electron 和 Tauri 有什么区别？

两者都用于构建跨平台桌面应用。Electron 的方式是应用内嵌 Chromium 和 Node.js，自带完整运行时；Tauri 是另一个独立框架，技术路线不同。选择时比较官方文档中各自的架构说明与自身项目需求。

## 来源

- [Electron 官方网站](https://www.electronjs.org/)
- [Electron 官方文档](https://www.electronjs.org/docs/latest/)
- [Electron 发布页](https://releases.electronjs.org/)
- [Electron (software framework) — Wikipedia](https://en.wikipedia.org/wiki/Electron_(software_framework))
