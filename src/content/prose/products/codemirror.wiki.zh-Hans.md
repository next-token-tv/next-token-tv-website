---
entityType: product
entity: codemirror
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'CodeMirror：嵌入网页的可扩展代码编辑器组件｜Next Token Wiki'
seoDescription: '了解 CodeMirror 的组件定位、CodeMirror 6 的架构与安装方式、与 Monaco 的常见比较，以及 Weekly 节目中的编辑器内核迁移讨论。'
---

## CodeMirror 是什么

CodeMirror 是一个用于网页的代码编辑器组件：开发者把它嵌入 Web 应用，就能得到支持语法高亮、行号、自动补全、代码折叠、搜索替换、多选、双向文本、协作编辑与无障碍等能力的编辑区，并通过公开的编程接口继续扩展。它以 MIT 许可证开源，由 Marijn Haverbeke 开发维护。

## 版本与使用边界

CodeMirror 最初于 2007 年发布；现行的主要体系 CodeMirror 6 于 2022 年发布，核心拆分为可独立发布的多个包，官方仍为旧的 Version 5 保留文档。安装通过 npm 进行，`codemirror` 包提供基础配置，语言支持、主题等功能以独立包的形式按需引入，具体见[官方指南](https://codemirror.net/docs/guide/)。

CodeMirror 是组件库而不是成品编辑器：它面向需要在应用里提供编辑器能力的场景（笔记软件、低代码平台、在线 IDE 等），集成需要前端开发工作。选型时常见的比较对象是 Monaco——VS Code 所用的编辑器组件；两者定位和体积取舍不同，建议按各自官方文档评估。

## 节目中的讨论

在 Weekly #005 的"迁移插件、替换编辑器内核"章节中，[橘子说他把 Markdown 编辑器的内核从 Milkdown 迁移到了 CodeMirror 6](/weekly/005/transcript#quote-a26a210c2315f9a66446)，[动机是让源码成为唯一事实，解决"渲染内容与源码两套状态"带来的一类 Bug](/weekly/005/transcript#quote-3ac4fb63746949f2b615)；他提到这项工作由 DeepSeek Flash 完成，"换完之后就巨爽"。这是参与者的迁移体验，不是对组件能力的评测。[第 005 期对应章节](/weekly/005/transcript#chapter-09)有完整上下文。

## 常见问题

### CodeMirror 是什么？和 VS Code 有什么关系？

CodeMirror 是嵌入网页的编辑器组件，与 VS Code 没有关系；经常被拿来比较的 Monaco 才是 VS Code 使用的编辑器组件。

### CodeMirror 6 和 CodeMirror 5 应该用哪个？

新项目一般从 CodeMirror 6 开始：它是重写后的架构，核心拆分为独立发布的包，通过 npm 安装；Version 5 仍有官方文档，但截至 2026 年 10 月，6 是主要体系。

### CodeMirror 怎么安装？

用 npm 安装 `codemirror` 包并按[官方指南](https://codemirror.net/docs/guide/)配置；语言包、主题等按需单独引入。

### CodeMirror 收费吗？

不收费。它以 MIT 许可证开源；官方说明商业使用者有资助维护的社会期望，但这不是法律义务。

## 来源

- [CodeMirror 官方网站](https://codemirror.net/)
- [CodeMirror 官方指南](https://codemirror.net/docs/guide/)
- [CodeMirror 开发仓库](https://github.com/codemirror/dev)
- [维基百科：CodeMirror](https://en.wikipedia.org/wiki/CodeMirror)
