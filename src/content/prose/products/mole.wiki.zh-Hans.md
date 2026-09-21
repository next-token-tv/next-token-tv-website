---
entityType: product
entity: mole
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Mole：macOS 清理与系统维护的开源工具｜Next Token Wiki'
seoDescription: '了解 Tw93 开发的开源 macOS 工具 Mole：清理、卸载、空间分析与监控功能、安装方式，以及 Next Token 节目中的相关讨论。'
---

## Mole 是什么

Mole 是开发者 Tw93 维护的开源 macOS 维护工具，官方 README 的描述是"Clean, uninstall, analyze, optimize, and monitor your Mac. Free open-source CLI, plus a native Mac app"——即清理、卸载、分析、优化和监控 Mac 的免费开源命令行工具，另有独立的原生 Mac 应用。项目地址是 [github.com/Tw93/Mole](https://github.com/Tw93/Mole)，代码遵循 GPL-3.0 许可。

## 功能与使用边界

README 将 Mole 描述为一个整合 CleanMyMac、AppCleaner、DaisyDisk、iStat Menus 等常见工作流的"All-in-one CLI toolkit"。主要命令覆盖：

- **深度清理**：删除缓存、日志、残留和孤儿应用数据。
- **智能卸载**：连同启动代理、偏好设置和隐藏残留一起移除应用。
- **空间分析**：`mo analyze` 可视化磁盘占用、找出大文件。
- **实时监控**：`mo status` 查看 CPU、GPU、内存、磁盘和网络的实时状态。
- **其他**：`mo optimize`、清理 node_modules 等项目产物的 `mo purge`，以及清理 DMG/PKG 安装残留的 `mo installer`。

安装通过 Homebrew 执行 `brew install mole`，或使用官方安装脚本。README 标注支持 macOS 12 及以上版本的 Intel 与 Apple Silicon 机型。作为命令行工具，它的界面是终端而不是图形窗口，这对偏好图形界面的用户是个使用边界；原生 Mac 应用是另一款单独的产品，获取方式见项目说明。同为 Apple 生态话题，磁盘与系统背景可参考 [macOS 条目](/wiki/products/macos)。

## 节目中的讨论

Weekly #003 的"常驻 Agent 与多平台内容分发"章节讨论常驻 Agent 的真实用例时，[向阳乔木提到在杭州见到 Tw93，问他怎么用 Grok Bot；Tw93 让 Grok Bot 自动做多平台营销推广，推广他的 Mole 清理软件，由一台独立电脑定时访问欧美小众论坛、按论坛调性发帖](/weekly/003/transcript#quote-13cbd1a894a6c7b2bc1e)。这段讨论的主角是 [Grok Bot](/wiki/products/grok-bot) 的常驻运行能力，Mole 是其中的推广对象。

## 常见问题

### Mole 是什么工具？谁开发的？

Mole 是 Tw93 开源开发的 macOS 维护工具，把清理、卸载、空间分析、优化和监控组合在一个命令行工具里，代码以 GPL-3.0 许可发布在 [GitHub](https://github.com/Tw93/Mole)。

### Mole 怎么安装？

通过 Homebrew 执行 `brew install mole`，或运行官方 README 提供的安装脚本。系统要求见 [项目 README](https://github.com/Tw93/Mole)。

### Mole 免费吗？

开源命令行工具免费，遵循 GPL-3.0 许可。README 同时提到另有一个独立的原生 Mac 应用（"plus a native Mac app"），那是单独的产品，其获取与授权方式见项目官方说明。

### Mole 和 CleanMyMac 这类工具是什么关系？

按 README 的说法，Mole 是把 CleanMyMac、AppCleaner、DaisyDisk、iStat Menus 等工具的常见工作流整合进一个开源 CLI 的尝试；区别在于它是命令行工具、开源且免费。

## 来源

- [Tw93/Mole 项目仓库](https://github.com/Tw93/Mole)
