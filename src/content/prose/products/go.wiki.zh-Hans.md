---
entityType: product
entity: go
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Go 语言：Google 支持的开源编程语言与工具链｜Next Token Wiki'
seoDescription: '了解 Go（Golang）是什么：Google 支持的开源编程语言，并发与标准库特性、版本发布沿革、下载入口，以及节目中"用 Go 写前端"的讨论。'
---

## Go 是什么

Go（又称 Golang）是 Google 支持的开源编程语言，配有编译器、标准库和开发工具链。官方将其定位为构建"简单、安全、可扩展系统"的语言，特点是内置并发、标准库完善、通常可编译为独立可执行文件，官方列出的主要用途包括云与网络服务、命令行工具、Web 开发以及 DevOps 与站点可靠性工程。官方站点是 [go.dev](https://go.dev/)。

Go 1 于 2012 年 3 月 28 日发布，官方承诺该版本长期稳定；此后的主要版本按半年节奏迭代，各版本变更见[官方发布历史](https://go.dev/doc/devel/release)。

## 使用与边界

Go 适合开发后端服务、命令行工具与基础设施类软件。开发者从[官方下载页](https://go.dev/dl/)获取 Windows、macOS、Linux 等平台的安装包，用 `go` 命令构建、测试和管理依赖；模块默认通过 Google 运营的模块镜像与校验数据库下载和认证。语言是否适合某个具体项目取决于团队与场景，官方教程与文档（如 Tour of Go、Effective Go）是判断上手成本的入口。

## 节目中的讨论

在 Weekly #005 的"用 Opus 5.5 写游戏：代码质量与效率"章节中，橘子提到一种"邪修"做法：[“最近有些程序员开始用 Go 来写前端……就是不用前端框架，用 Go 写”](/weekly/005/transcript#quote-ba69a7f02660e5f685f3)。同章节中杨攀谈到自己写游戏时，提到在有足够多单元测试锁定逻辑后，把代码换成另一种语言或技术栈（如 [Godot](/wiki/products/godot-engine) 这类引擎）会"轻轻松松"。这些是参与者对社区现象的转述与个人经验，不是对 Go 语言能力的评测。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-08)。

## 常见问题

### Go 和 Golang 是同一种语言吗？

是。Go 是官方名称，Golang 是社区常用别名，官方站点是 [go.dev](https://go.dev/)。

### Go 是谁开发的？

Go 是由 Google 支持的开源语言，源码与文档公开在官方站点。

### Go 在哪里下载？

Windows、macOS、Linux 等平台的安装包在[官方下载页](https://go.dev/dl/)提供。

### Go 适合写什么？

官方列出的典型用途包括云与网络服务、命令行工具、Web 开发和 DevOps 与站点可靠性工程；它强调编译速度快、内置并发、通常可生成独立可执行文件。

### Go 1.0 是什么时候发布的？

Go 1 于 2012 年 3 月 28 日发布，官方将其定位为长期稳定版本；后续主要版本见[官方发布历史](https://go.dev/doc/devel/release)。

## 来源

- [Go 官方站点](https://go.dev/)
- [Go 官方发布历史](https://go.dev/doc/devel/release)
- [Go 官方下载页](https://go.dev/dl/)
