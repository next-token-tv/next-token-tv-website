---
entityType: product
entity: milkdown
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Milkdown：所见即所得 Markdown 编辑器框架｜Next Token Wiki'
seoDescription: '了解 Milkdown 的插件化框架定位、基于 ProseMirror 的技术栈、与成品编辑器的区别，以及 Weekly 节目中从 Milkdown 迁移内核的讨论。'
---

## Milkdown 是什么

Milkdown 是一个用于构建所见即所得（WYSIWYG）Markdown 编辑器的开源框架，以 MIT 协议发布，源码托管在 GitHub。官方站点把它概括为“插件驱动的所见即所得 Markdown 编辑器框架”，并说明它构建在 ProseMirror、Y.js 和 Remark 等库之上，可以借助这些项目的社区和生态解决问题。

## 定位与使用方式

Milkdown 面向的是要在自己的应用中嵌入 Markdown 编辑能力的开发者，而不是寻找成品写作软件的普通用户。官方页面的三个核心主张是：

- **插件驱动**：官方说法是“Everything in Milkdown are plugins”——语法、主题、UI 都以插件形式扩展。
- **无头（headless）**：框架本身不附带 CSS，编辑器外观由接入方按自己的产品风格定制。
- **协同编辑**：借助 Y.js 支持多人对同一文档的实时协同。

由此可以划出它与成品编辑器的边界：想直接写 Markdown，[Typora](/wiki/products/typora)、[Obsidian](/wiki/products/obsidian) 这类成品软件更合适；想把所见即所得编辑器集成进自己的产品、并自定义行为与外观时，Milkdown 提供的是框架和插件体系。npm 包名为 `@milkdown/kit`，入门走官方 Get Started 文档。

## 节目中的讨论

Weekly #005 的“迁移插件、替换编辑器内核”章节里，橘子提到[最近重构了自己的 Markdown 编辑器，把它从 Milkdown 迁移到 CodeMirror 6 内核](/weekly/005/transcript#quote-a26a210c2315f9a66446)。他解释迁移的原因：原来的方式下“渲染的东西和原始源码是两套”，改动看起来生效了、源码里却可能没改，他希望[以源码为单一事实来源，与 Typora 等主流编辑器一致](/weekly/005/transcript#quote-3ac4fb63746949f2b615)；迁移之后解决了一堆细节 Bug。这是节目参与者基于自己项目的取舍：所见即所得渲染层与源码的关系如何处理，在具体项目里可能导致更换内核的决定。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-09)。

## 常见问题

### Milkdown 是什么？

一个构建所见即所得 Markdown 编辑器的开源框架，基于 ProseMirror、Y.js 和 Remark，以插件形式扩展语法、主题和 UI。它面向开发者集成，不是拿来即用的写作软件。

### Milkdown 免费吗？

是。它以 MIT 协议开源，源码在 [GitHub 仓库](https://github.com/Milkdown/milkdown)公开，可以自由用于自己的项目。

### Milkdown 和 Typora 有什么区别？

[Typora](/wiki/products/typora) 是安装即用的成品编辑器；Milkdown 是框架，需要开发者在自己的应用里引入、配置插件并定制样式。两者服务的对象不同：一个面向写作者，一个面向做编辑器功能的开发者。

### 怎么在项目里引入 Milkdown？

通过 npm 安装 `@milkdown/kit`，然后按[官方 Get Started 文档](https://milkdown.dev/docs/getting-started)创建编辑器实例、按需加载插件。它无头、不带 CSS，样式需要自行接入。

## 来源

- [Milkdown 官方站点](https://milkdown.dev/)
- [Milkdown GitHub 仓库](https://github.com/Milkdown/milkdown)
