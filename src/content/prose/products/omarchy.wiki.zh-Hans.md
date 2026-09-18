---
entityType: product
entity: omarchy
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Omarchy：DHH 打造的 Agent 优先 Linux 发行版｜Next Token Wiki'
seoDescription: '了解 Omarchy 的定位、安装方式、内置 AI Agent 与使用边界，以及 Weekly #001 中关于这台 Agent 优先 Linux 的一手讨论。'
---

## Omarchy 是什么

Omarchy 是由 David Heinemeier Hansson（[DHH](/wiki/people/dhh)）创建的 Linux 发行版，官网将其定位为“好看、好玩、Agent 原生的 Linux”（Beautiful, fun & agentic Linux），面向 Agent 时代的可塑操作系统。它以 [Arch Linux](https://omarchy.org/) 为基础，预配置 Hyprland、Quickshell 和一套键盘优先的工作流。项目在 37signals 孵化，由非营利组织 [Omacom Foundation](/wiki/brands/omacom) 资助开发，代码在 [GitHub（omacom/omarchy）](https://github.com/omacom/omarchy)维护。提供下载的 ISO 版本见[官网](https://omarchy.org/)。

## 用途与使用边界

Omarchy 的实际用途是给开发者和愿意折腾 Linux 的用户一台“装完即用”的工作电脑：安装、驱动、窗口管理、终端、开发工具由系统替你选好，然后把改动权交给你和 Agent。

- 安装：把[官方 ISO](https://omarchy.org/#install) 写入 USB 启动盘，选择全盘安装或利用剩余空间安装（后者可与 Windows 等系统双启动）。安装默认开启全盘加密，需要在 BIOS 中关闭 Secure Boot/TPM 才能安装；[安装手册](https://omarchy.org/manual/getting-started/)提示全盘加密启动时不能用蓝牙键盘输入密码，需要有线或 2.4G 键盘。
- Agent 优先：首次开机时系统邀请你选择一个默认 Agent；主流编码 Agent CLI（Claude Code、Codex、OpenCode、GitHub Copilot CLI、Grok CLI 等）预置为懒加载启动器，首次运行才真正下载。默认 Agent 可用快捷键直接拉起，也能通过 `omarchy agent prompt` 直接派任务，这种方式下 Agent 以不逐步询问的自动模式运行；应用崩溃时可以把崩溃转储交给默认 Agent 诊断。细节见[官方 AI 手册](https://omarchy.org/manual/ai/)。
- 日常定制：主题可以一次性重设终端、顶栏、通知和壁纸的外观；社区插件[目录](https://plugins.omarchy.org)提供大量扩展；系统更新通过 `omarchy update` 统一处理。
- 本地模型：系统内置菜单提供 LM Studio 和 Ollama 两种本地运行大模型的方式，新手推荐 LM Studio。
- 边界：预置 Agent 的自动模式意味着它可能直接改动系统，官方手册建议先用 plan mode 查看 Omarchy Skill 想改什么、并准备回滚；国内用户可能面临网络可达性问题，官方提供[简体中文站点](https://zh.omarchy.org/)。

## 节目中的讨论

Weekly #001 的“Omarchy：一个 Agent 优先的 Linux 是什么体验”章节是节目里对 Omarchy 的主要讨论，发言者均为亲身体验或个人判断。[向阳乔木安装后不会配置、网络也没配好](/weekly/001/transcript#quote-996a84fc2d1e3ab6e38f)，最后装了 [ZCode](/wiki/products/zcode) 让 Agent 代为操作；他评价 4.0 完成度比 3.0 高很多，[认为系统把哪些地方能改交给 Agent 控制，崩溃了也能由 Agent 修复](/weekly/001/transcript#quote-87b8cb106894349cb85f)。他还描述了默认全屏、按窗口数量自动分屏的窗口管理理念。[歸藏把它称为“AI Native 的 OS”](/weekly/001/transcript#quote-a0ac0fd541895dc1235b)，认为自进化让写软件很方便。杨攀从架构角度把它比作“巨型 Harness”，并在后续章节用它说明[AI 原生软件系统与端侧小模型的分工](/weekly/001/transcript#quote-9a65193887dd7397f52d)。关于国内支持，向阳乔木提到“做国内官网、加国内镜像”当时是转述中的计划；这是参与者的说法，不构成官方承诺。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-12)。

以上是节目参与者的使用体验与观点，不是对发行版的独立评测，也不是官方背书。

## 常见问题

### Omarchy 是什么，和 Arch Linux 是什么关系？

Omarchy 是 DHH 创建的 Linux 发行版，基于 Arch Linux，预配置 Hyprland、Quickshell 和一套默认开发与 Agent 工具。官网的比喻是“omakase（主厨搭配）”：工具和细节由 Omarchy 选好，但用户可以改一切。参见[官方网站](https://omarchy.org/)与 [Omarchy Doctrine](https://omarchy.org/doctrine/)。

### Omarchy 怎么安装？需要什么配置？

从[官网](https://omarchy.org/#install)下载 ISO 写入 USB 启动盘，支持全盘安装和与 Windows 双启动的安装方式。安装需在 BIOS 关闭 Secure Boot/TPM。官方称最快的机器 35 秒内装完，多数电脑两分钟内，老电脑也在 5 分钟以内；官方甚至演示了 2011 年 ThinkPad X220（2GB 内存）可以运行。步骤见[完整安装指南](https://omarchy.org/manual/getting-started/)。

### Omarchy 内置了哪些 AI Agent？

Claude Code、OpenAI Codex、OpenCode、GitHub Copilot CLI、Grok CLI 等主流编码 Agent CLI 都预置为启动器，首次运行才下载；首次开机可以选择默认 Agent，应用崩溃可交给 Agent 诊断。系统菜单还提供 LM Studio 和 Ollama 用于本地模型。完整列表见[官方 AI 手册](https://omarchy.org/manual/ai/)。

### Omarchy 能装在 Mac（Apple Silicon）上吗？

可以先试用：官方提供 [Try Omarchy](https://github.com/omacom/try-omarchy)，让 Apple Silicon Mac 以应用形式运行真实的 Omarchy 桌面。原生支持方面，官方在 2026 年 9 月宣布了 [Omarchy M 团队](https://omarchy.org/news/2026/09/introducing-omarchy-m/)，目标是完成 Apple Silicon 支持，首个版本瞄准 M1 与 M2 机型。

### Omarchy 免费吗，由谁维护？

ISO 从官网免费下载，官方将其描述为自由开放的代码；开发由 [Omacom Foundation](https://omarchy.org/foundation/) 这个非营利组织资助，代码在 [GitHub](https://github.com/omacom/omarchy) 公开维护，个人与企业赞助者名单公布在官网。

## 来源

- [Omarchy 官方网站](https://omarchy.org/)
- [Omarchy 安装手册（Getting Started）](https://omarchy.org/manual/getting-started/)
- [Omarchy AI 手册](https://omarchy.org/manual/ai/)
- [Omarchy 新闻：Introducing Omarchy M](https://omarchy.org/news/2026/09/introducing-omarchy-m/)
- [Omacom Foundation](https://omarchy.org/foundation/)
- [GitHub：omacom/omarchy](https://github.com/omacom/omarchy)
