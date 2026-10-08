---
entityType: product
entity: sublime-text
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Sublime Text：跨平台代码与文本编辑器｜Next Token Wiki'
seoDescription: '了解 Sublime Text 的定位、免费评估与许可购买模式、与 VS Code 的取舍，以及 Weekly 节目中把它作为早期 AI 写代码工作流的记忆。'
---

## Sublime Text 是什么

Sublime Text 是澳大利亚 Sublime HQ 公司开发的跨平台文本编辑器，官方定位是“面向代码、标记和文本的精致编辑器”。截至 2026 年 10 月，主版本为 Sublime Text 4，覆盖 Windows、macOS（原生支持 Apple Silicon）和 Linux（含面向树莓派等设备的 ARM64 构建）。编辑器以轻快著称：官方介绍强调 GPU 渲染界面、多标签分栏、基于项目上下文的自动补全，以及默认内置 TypeScript/JSX/TSX 支持的语法引擎；插件通过 Python API 编写，保持对 Sublime Text 3 包的向后兼容。同门产品还有 Git 客户端 Sublime Merge。

## 用途与使用边界

Sublime Text 适合需要快速打开和编辑单个文件、大文件或做轻量文本处理的场景：启动快、占用小、键盘操作密集，很多开发者把它当作随开随用的“顺手编辑器”，与 VS Code 这类重扩展的完整 IDE 形成互补。它本身是编辑器而非 IDE——调试、重构等深度功能依赖插件生态，包管理通过 Package Control 等社区机制完成。

授权模式比较特殊：官方下载页写明编辑器可以免费下载和评估，评估期“目前没有强制时限”，但继续使用需要购买许可（个人许可跨多设备，具体条款见官方页面）。也就是说它不是免费软件，而是“先试用、后付费”的商业模式。

## 节目中的讨论

Weekly #005 的“迁移插件、替换编辑器内核”章节里，向阳乔木回顾 AI 编程的变迁：三四年前 GPT-3.5 时代，[模型“能吐代码，能写代码，你自己放到 Sublime 里边保存成一个文档”，再运行它](/weekly/005/transcript#quote-6b94571b76e364d009c5)，对比当下 AI 直接完成整个项目，他感叹“提升巨大”。在这段语境里，Sublime Text 代表的是早期人机分工的工作流：模型只负责产出代码片段，粘贴、保存、运行全靠人。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-09)。

## 常见问题

### Sublime Text 收费吗？

官方允许免费下载和评估，且截至 2026 年 10 月未设强制时限，但继续使用应当购买许可；许可类型与价格见[官网购买入口](https://www.sublimetext.com/)。

### Sublime Text 官网和下载入口在哪里？

官网是 [sublimetext.com](https://www.sublimetext.com/)，提供 Windows、macOS、Linux 安装包，Linux 还有面向树莓派等设备的 ARM64 构建。

### Sublime Text 和 VS Code 有什么区别？

Sublime Text 走轻快路线：启动与文件切换快、资源占用小，适合快速编辑；VS Code 以扩展生态和调试、重构等 IDE 能力见长。很多开发者两者并用——日常快速改动用 Sublime，完整开发用 VS Code。

### Sublime Text 能写 Markdown 吗？

可以。它本质是文本编辑器，Markdown 语法高亮开箱即用，预览、格式化等增强功能通过插件补充；需要所见即所得体验时，[Typora](/wiki/products/typora) 这类专用编辑器更合适。

## 来源

- [Sublime Text 官方网站](https://www.sublimetext.com/)
- [Sublime Text 下载页（评估与许可说明）](https://www.sublimetext.com/download)
