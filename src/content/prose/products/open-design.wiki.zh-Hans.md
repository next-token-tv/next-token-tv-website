---
entityType: product
entity: open-design
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-16'
seoTitle: 'OpenDesign：开源的 AI 设计 Agent 工作台｜Next Token Wiki'
seoDescription: 'OpenDesign 是什么：开源协作式 AI 设计工作台，接入 Claude Code、Codex 等编码 Agent 生成原型与网页，以及第十期节目关于开源壁垒的讨论。'
---

## OpenDesign

OpenDesign 是一个开源（Apache-2.0 许可）的协作式 AI 设计工作台，官方称其为"首个协作式设计 Agent 工作台"（The First Collaborative Design Agent Workspace），官网为 [open-design.ai](https://open-design.ai/)，源码托管在 [GitHub](https://github.com/nexu-io/open-design)。它不自带模型，而是把用户已有的编码 Agent 当作设计引擎：用自然语言描述界面，由 Agent 生成可运行的 HTML 原型，再在工具里预览、修改和协作。

## 功能与工作方式

按官方站点和仓库说明：

- Agent 接入：支持接入 [Claude Code](/wiki/products/claude-code)、[Codex](/wiki/products/codex)、[Cursor](/wiki/products/cursor) 等多种编码 Agent，也可以自带 API Key 或使用官方托管服务。
- 设计系统：内置 150 多个开源设计系统包，渲染时按统一的 DESIGN.md 品牌约定执行，也可以从现有网站、GitHub 仓库或 Figma 文件生成自己的设计系统。
- 编辑与协作：生成的原型可以直接移动、缩放和改样式，不必重新生成；团队成员在共享工作区评论后，可以把评论汇总发回 Agent 作为一次修改任务。
- 产出：导出 HTML、PDF、PNG 和 PowerPoint，覆盖原型、网页、仪表盘、幻灯片、图像和动态图形等素材类型。
- 运行形态：本地优先，提供 macOS 与 Windows 桌面应用，也可以从源码或 Docker 运行。

## 节目中的讨论

第十期在"[持续迭代与开源生态：代码之外还能留下什么](/weekly/010/transcript#chapter-13)"章节里，[向阳乔木](/wiki/people/xiangyang-qiaomu)提到他曾就 OpenDesign 问过其开发者，觉得"[这好像没有壁垒，别人也都可以抄](/weekly/010/transcript#quote-b084c5c2a0dd9e856d79)"；对方的回答是正因为它开源，吸引了很多贡献者、形成了生态，"[你只能抄我的代码，你抄不了我的生态](/weekly/010/transcript#quote-64ec7f37c8a54cd77118)"，也抄不了团队持续投入的迭代。向阳乔木由此认为，真正热爱并持续优化一个东西、带着一群人参与，可能是一条可行之路。这是参与者转述的开发者观点与个人判断，节目未对 OpenDesign 本身做产品评测。

## 常见问题

### OpenDesign 是什么？

一个开源的协作式 AI 设计工作台：由编码 Agent 根据自然语言生成 HTML 原型、网页等设计素材，团队在同一工作区预览、评论和迭代，见[官方网站](https://open-design.ai/)。

### OpenDesign 用什么模型？

它本身不提供模型，而是接入你已有的编码 Agent（如 Claude Code、Codex、Cursor 等），也可以自带 API Key 或使用官方托管服务，见[项目说明](https://github.com/nexu-io/open-design)。

### OpenDesign 是免费开源的吗？

是。桌面应用与源码采用 Apache-2.0 许可在 [GitHub](https://github.com/nexu-io/open-design) 公开；官方托管服务属于付费选项，本地接入自己的 Agent 或 API Key 不需要账号。

### OpenDesign 支持哪些系统？

官方桌面应用覆盖 macOS 和 Windows；Linux 未提供官方桌面安装包，可从源码运行。具体以[仓库说明](https://github.com/nexu-io/open-design)为准。

## 来源

- [OpenDesign 官方网站](https://open-design.ai/)
- [nexu-io/open-design 仓库](https://github.com/nexu-io/open-design)
