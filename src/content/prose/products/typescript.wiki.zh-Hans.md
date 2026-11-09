---
entityType: product
entity: typescript
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'TypeScript：微软的 JavaScript 静态类型语言｜Next Token Wiki'
seoDescription: 'TypeScript 是什么：微软 2012 年发布的 JavaScript 静态类型超集，第 9 期节目讨论了用 TypeScript 迁移 Electron 插件的经过。'
---

## TypeScript

TypeScript 是微软开发的编程语言，2012 年 10 月首次发布，由 Anders Hejlsberg 等人主导设计，采用 Apache 2.0 许可开源（据[英文维基百科](https://en.wikipedia.org/wiki/TypeScript)）。它在 JavaScript 基础上增加静态类型检查，代码最终转译为 JavaScript 运行，官方站点是 [typescriptlang.org](https://www.typescriptlang.org)。

## 用途与区别

TypeScript 面向规模较大的 JavaScript 应用：类型标注让编辑器在写代码时发现拼写错误和接口不匹配，也让生成式 AI 编程工具更容易读懂和修改既有代码。它与 [JavaScript](/wiki/products/javascript) 的关系是超集——JavaScript 代码通常可以直接作为 TypeScript 编译。

很多桌面应用插件生态以 TypeScript 书写。第九期提到的例子：[Obsidian](/wiki/products/obsidian) 与 DeepSeek Harness 都基于 [Electron](/wiki/products/electron)，插件都用 TypeScript 编写，语法一致使两者之间的插件迁移工作量很小。

## 节目中的讨论

第九期在"[Harness 与插件生态](/weekly/009/transcript#chapter-01)"里，向阳乔木讲了把自己写的 [Obsidian](/wiki/products/obsidian) 插件整套迁移为 Harness 插件的经历：因为两边都是 Electron、语法都是 TypeScript，他让 Codex 执行迁移，结果"完全顺滑迁移过去了"（见[该段落](/weekly/009/transcript#quote-f532968167318dcc8271)）。这是参与者的个人使用体验。

## 常见问题

### TypeScript 和 JavaScript 是什么关系？

TypeScript 是 JavaScript 的超集：语法兼容 JavaScript，在此基础上增加静态类型标注，编译后转回 JavaScript 运行。语言本身的关系另见 [JavaScript 条目](/wiki/products/javascript)。

### TypeScript 是谁开发的？

微软开发并维护，2012 年 10 月首次发布，语言设计由 Anders Hejlsberg 等人主导（据英文维基百科）。

### TypeScript 是开源的吗？

是，以 Apache 2.0 许可在 [GitHub](https://github.com/microsoft/TypeScript) 开源，源码公开。

### 学前端要先学 JavaScript 还是 TypeScript？

两者语法一致，通常先掌握 JavaScript 的运行方式再学习 TypeScript 的类型系统；TypeScript 官方手册的[入门章节](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)按 JavaScript 基础讲解。

## 来源

- [TypeScript 官方网站](https://www.typescriptlang.org)
- [TypeScript 手册：从零开始的 TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Wikipedia: TypeScript](https://en.wikipedia.org/wiki/TypeScript)
- [microsoft/TypeScript 仓库](https://github.com/microsoft/TypeScript)
