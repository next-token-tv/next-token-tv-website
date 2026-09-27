---
entityType: brand
entity: nodejs
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Node.js：开源 JavaScript 运行时与开发者生态｜Next Token Wiki'
seoDescription: '了解 Node.js：基于 V8 的开源 JavaScript 运行时，事件驱动模型、npm 生态与 OpenJS Foundation 治理，以及官方入口。'
---

## Node.js

Node.js 是一个开源、跨平台的 JavaScript 运行时环境，让 JavaScript 代码在浏览器之外运行。它基于 Chrome 的 V8 引擎，采用事件驱动、非阻塞 I/O 的模型，官方文档称其“被设计用于构建可扩展的网络应用”，HTTP 在其中是一等公民。项目由 OpenJS Foundation 与全球贡献者共同维护。

## 项目与生态

Node.js 由 Ryan Dahl 于 2009 年创建，首个版本发布于 2009 年 5 月 27 日，同年 11 月 8 日在欧洲首届 JSConf 上演示。2010 年 1 月，包管理器 npm 随之推出，逐渐形成了围绕 Node.js 的大型服务端 JavaScript 生态；大量 Web 应用、命令行工具和部署平台都以它为运行基础，相关生态条目可另见 [Vercel](/wiki/brands/vercel)。

治理层面，2015 年 2 月 Node.js Foundation 宣布成立，结束了 io.js 分叉时期的治理分歧；2019 年，Node.js Foundation 与 JS Foundation 合并为 OpenJS Foundation，Node.js 成为其旗下项目。Node.js 采用按日期推进的发布线与 LTS（长期支持）机制，具体版本状态以[官网发布页](https://nodejs.org/)为准。

## 节目中的讨论

Weekly #004 在“Muse Charm、手机与 AI 的入口”章节讨论端侧 Agent 的限制时，歸藏指出手机系统的封闭让本地模型无事可做：“[无论安卓还是 iOS，Node 对吧，我们那些代码常用的那个脚手架和组件](/weekly/004/transcript#quote-457b2d9a74e293ccd011)，一个都跑不了”。他又提到社区发布了一个通过 iOS 自带浏览器组件“[去执行 Node.js 这些东西，执行命令行](/weekly/004/transcript#quote-da23fdb168780567fd4c)”的库，认为这让手机接近可开发环境，但也指出这类方案难以通过上架审核。这是主理人对 Node.js 在端侧运行环境限制的讨论，不代表 Node.js 项目官方口径。

## 常见问题

### Node.js 是什么？

Node.js 是一个开源的 JavaScript 运行时，让开发者用 JavaScript 编写服务器、命令行工具等浏览器之外的程序。官方对其的定义是“异步事件驱动的 JavaScript 运行时，用于构建可扩展的网络应用”，见 [About 页](https://nodejs.org/en/about)。

### Node.js 官网在哪里，在哪里下载？

官网是 [nodejs.org](https://nodejs.org/)，官方下载页为 [nodejs.org/en/download](https://nodejs.org/en/download)，提供 LTS 与 Current 两个发布线的安装包。

### Node.js 是谁发明的？

Node.js 由 Ryan Dahl 于 2009 年创建，首个版本于 2009 年 5 月 27 日发布，并在 2009 年 11 月的欧洲 JSConf 大会上公开演示。

### Node.js 和浏览器里的 JavaScript 有什么区别？

两者都执行 JavaScript，但 Node.js 在服务器和本地环境中运行，没有浏览器的 DOM 和 window 等对象，取而代之的是文件系统、网络和进程等系统能力，并且把事件循环作为运行时的一部分内建。

## 来源

- [Node.js 官方网站](https://nodejs.org/)
- [Node.js About 页](https://nodejs.org/en/about)
- [Node.js 官方下载页](https://nodejs.org/en/download)
- [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js)
