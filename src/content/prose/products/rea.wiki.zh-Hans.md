---
entityType: product
entity: rea
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'REA（Reverse Engineer Anything）：给 AI 智能体的逆向工程工具｜Next Token Wiki'
seoDescription: 'REA 是什么、支持哪些逆向目标与 AI 编程工具、如何安装使用，以及 Weekly 第 006 期关于 REA 与 AI 逆向的讨论。'
---

## REA 是什么

REA（Reverse Engineer Anything）是一个开源项目，仓库位于 GitHub（morluto/rea），为 AI 编程智能体提供逆向工程工具。官方描述是"One MCP for reverse engineering across binaries, applications, and runtime behavior"——把覆盖二进制、应用与运行时行为的逆向分析能力，通过 MCP 接口交给智能体调用。REA 自身代码采用 MIT 许可，项目同时提供独立 CLI 和官网 [rea.tools](https://rea.tools)。

## 用途与使用边界

REA 的核心场景是分析没有源代码的软件：看中某个功能，让智能体把它的工作原理拆解到二进制层面，输出代码、引用位置和待确认项，并附证据与局限说明。按官方 README，可分析的目标包括原生二进制（伪代码、汇编、符号）、JavaScript/Electron 应用、.NET 程序集、网站、WASM、Android APK 与设备、固件、SQLite 数据库、HAR/SAZ 网络抓包、进程行为等。

REA 不重新实现整套逆向引擎，而是把既有工具链编排给智能体：深度原生分析可调用 Hopper、Ghidra 或 IDA（商业工具需要使用者自行合法授权），此外还支持 objdump、Rizin、JADX、Apktool、Binwalk、mitmdump 等外部工具；JavaScript 与 .NET 的静态分析为内置能力。

接入方式是通过 `npx rea-agents setup` 注册 MCP server，面向 Claude Code、Codex、Cursor、Gemini CLI 等智能体；运行环境需要 Node.js 22 及以上版本。分析在本地运行。项目定位是合法用途的研究、教学、互操作与软件分析，对象应为自己拥有或获授权检验的软件；安装要求与最新工具目录见[官方仓库 README](https://github.com/morluto/rea)。

## 节目中的讨论

在 Weekly #006 的"REA 与 AI 逆向：给怒喵鼠标补一个 macOS 驱动"一章中，[向阳乔木以"现在这个模型能力强了以后，感觉能逆向一切，所有的硬件，软件都被迫开源了"开场](/weekly/006/transcript#quote-e163f25f5667f2010006)。[歸藏说自己没用 REA，觉得它"有点重"，习惯先让 AI 直接试](/weekly/006/transcript#quote-b55c73e9c9d26550fb59)；他讲了自己在用[怒喵](/wiki/brands/angry-miao)鼠标却找不到 macOS 驱动，于是请人逆向并做一个原生驱动的故事——[一晚上写完，DPI 切换、按键映射、光效和三种连接方式全部可用](/weekly/006/transcript#quote-b79ec8065580ad28d3a6)。针对社区"REA 只是个套壳、关键还是那几个常见破解项目"的说法（向阳乔木转述），[歸藏认为 REA 确实厉害，因为它集成了很多生僻的破解软件](/weekly/006/transcript#quote-1972ff8f5c4a5ffea27b)，[杨攀把这类工具概括为典型的 Skill 模式](/weekly/006/transcript#quote-327453006a4f9300b48b)。这些是节目参与者的使用体验与判断。更多讨论见[该章节](/weekly/006/transcript#chapter-02)。

## 常见问题

### REA 逆向是什么？

指用 REA 这个开源项目做软件逆向分析：它把二进制、应用与运行时行为的分析工具通过 MCP 接口提供给 AI 智能体，让智能体解释目标软件的工作原理并给出证据。项目见 [GitHub 仓库 morluto/rea](https://github.com/morluto/rea)。

### REA 是哪家公司开源的？

REA 开源在 GitHub（morluto/rea），REA 自身代码采用 MIT 许可，官网为 rea.tools；官方渠道未见其归属公司的说明。

### REA 怎么安装？支持哪些 AI 编程工具？

按官方 README，用 `npx rea-agents setup` 注册 MCP server，支持 Claude Code、Codex、Cursor、Gemini CLI 等智能体，需要 Node.js 22 及以上版本。REA 也提供独立 CLI。安装步骤见[官方仓库](https://github.com/morluto/rea)。

### REA 能逆向哪些目标？支持 APK 吗？

按官方 README，支持的目标包括原生二进制、JavaScript/Electron 应用、.NET 程序集、网站、WASM、Android APK 与设备、固件、SQLite 数据库、网络抓包、进程行为等，APK 在支持列表内。

### REA 是不是"套壳"？

REA 的定位是把既有逆向工具链（如 Hopper、Ghidra、IDA）编排给智能体，同时内置 JavaScript 与 .NET 静态分析能力；其中商业工具需要使用者自行合法授权。"套壳"是社区与节目参与者转述中出现的评价，项目实际能力以官方 README 与实际使用为准。

## 来源

- [GitHub — morluto/rea（REA: Reverse Engineer Anything）](https://github.com/morluto/rea)
- [REA 官网](https://rea.tools)
