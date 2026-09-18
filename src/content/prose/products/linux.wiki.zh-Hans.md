---
entityType: product
entity: linux
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Linux 内核与发行模型：官网、文档与使用边界｜Next Token Wiki'
seoDescription: '了解 Linux 内核的定位、kernel.org 与官方文档入口、内核与发行版的分工，以及 Next Token 节目中对 Linux 的讨论。'
---

## Linux 内核与发行模型

Linux 通常指围绕 Linux 内核构建的开放操作系统家族。内核由林纳斯·托瓦兹（Linus Torvalds）于 1991 年 9 月 17 日首次发布，采用 GNU GPL v2 许可证，托瓦兹至今仍是内核的首席维护者。内核本身只是操作系统核心；日常可用的完整系统由各发行版把内核与 GNU 工具链、包管理器、桌面环境等组件打包而成。发行版数量庞大且定位各异，本页不维护发行版列表，具体选择请以各发行版官方网站为准。

[kernel.org](https://www.kernel.org/) 是 Linux 内核的官方源码发布站（The Linux Kernel Archives），由非营利组织 Linux Kernel Organization 运营，提供 mainline、stable、longterm 等分支的源码包、补丁、PGP 签名和 Git 仓库；内核开发文档在 [docs.kernel.org](https://docs.kernel.org/)。

## 用途与使用边界

Linux 内核长期广泛用于服务器、超级计算机、嵌入式设备与移动设备（Android 即基于 Linux 内核），桌面则是发行版生态中相对小众的形态。要不要用 Linux、用哪个发行版，取决于使用者需要的软件生态、硬件支持与维护方式；这些差异体现在发行版层面，而不是内核层面。

直接下载内核源码并自行编译主要面向内核开发与调试场景；普通用户通常经发行版获得内核更新。对面向特定工作流、由社区维护的发行版案例，可参考 [Omarchy](/wiki/products/omarchy) 的条目与官方页面。

## 节目中的讨论

- Weekly #001 第 12 章“Omarchy：一个 Agent 优先的 Linux 是什么体验”讨论了一个 Agent 优先的 Linux 发行版：[向阳乔木说安装后各种配置不会弄、网络也没配好，最后装了 ZCode 让它代为操作](/weekly/001/transcript#quote-87b8cb106894349cb85f)；歸藏提到 Mac 不能直接装 Linux 的遗憾；橘子认为 Linux 在国内政企环境胜算很高。这是节目参与者的使用体验与判断，不是对发行版的评测。
- Weekly #001 第 16 章“Grok Bot：为什么 Agent 需要一台永不下线的云电脑”讨论云电脑的系统时，[歸藏说那台机器“看起来像 Linux”](/weekly/001/transcript#quote-0dec1533ecbd8ac82f36)。
- Weekly #002 第 10 章“Harness 更新太快，插件和工作流如何跟上”里，[向阳乔木引述杨攀的说法，把频繁迭代的 Harness 类比为 Linux 早期：追求稳定就等别人打包好的发行版](/weekly/002/transcript#quote-1aa8c2eff59cd4bedee9)。

## 常见问题

### Linux 是什么？

Linux 是基于 Linux 内核的开放操作系统家族：内核 1991 年由 Linus Torvalds 首次发布，以 GPLv2 许可开源；完整系统由各发行版打包内核与配套软件组成，广泛用于服务器、嵌入式、移动（Android）和桌面场景。背景见 [kernel.org](https://www.kernel.org/)。

### Linux 和 Ubuntu 这类发行版是什么关系？

内核由内核社区在 kernel.org 维护；Ubuntu、Fedora、Arch 等发行版各自把内核与工具链、包管理器、桌面环境打包成完整系统并负责更新。选发行版时比较的是发行版层面的软件生态与维护方式，具体以各发行版官方网站为准。

### Linux 内核的官方网站在哪里？

内核源码与发布物的官方站点是 [kernel.org](https://www.kernel.org/)，内核文档在 [docs.kernel.org](https://docs.kernel.org/)。各发行版另有自己的官方网站。

### 想学习 Linux 内核，从哪里入手？

官方文档 [docs.kernel.org](https://docs.kernel.org/) 是内核开发文档的权威入口；kernel.org 也链接到邮件列表、补丁流程与 Git 仓库。入门通常需要 C 语言和操作系统基础，再结合一个便于折腾的发行版练习。

## 来源

- [The Linux Kernel Archives（kernel.org）](https://www.kernel.org/)
- [Linux 内核官方文档](https://docs.kernel.org/)
- [Wikipedia: Linux](https://en.wikipedia.org/wiki/Linux)
