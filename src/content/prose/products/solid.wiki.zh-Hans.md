---
entityType: product
entity: solid
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'Solid：细粒度响应式的 JavaScript UI 框架｜Next Token Wiki'
seoDescription: 'Solid 是什么：Ryan Carniato 开发、2021 年发布 1.0 的细粒度响应式 UI 框架，与 React 的差异，以及第 9 期节目的框架选择讨论。'
---

## Solid

Solid 是一个 JavaScript 用户界面框架，由 Ryan Carniato 开发：GitHub 上的项目仓库创建于 2018 年，2021 年 6 月 28 日发布 1.0 版本（据 [GitHub 发布记录](https://github.com/solidjs/solid/releases/tag/v1.0.0)），以 MIT 许可开源。官方文档在 [docs.solidjs.com](https://docs.solidjs.com)。

## 用途与区别

Solid 使用 JSX 书写组件，采用细粒度响应式更新：状态变化只更新直接依赖它的界面部分，不重新渲染整个组件，也没有虚拟 DOM。与之相对，[React](/wiki/products/react) 以组件为单位重新渲染。

这正是 Solid 与 React 容易混淆的原因：两者组件写法相近，更新机制不同，把一个框架的组件代码直接交给按另一个框架训练的模型或开发者时容易出错。围绕 Solid 还有官方元框架 SolidStart，用于构建带路由与服务端能力的应用。

## 节目中的讨论

第九期在"[Harness 与插件生态](/weekly/009/transcript#chapter-01)"里，杨攀讲述了一个他印象很深的案例：一家公司原本使用 Solid，引入 AI 编程后，AI 经常在写 Solid 时写出 React 语法，该公司最终换回 React（见[该段落](/weekly/009/transcript#quote-1015d384978ae7a10e49)）。他认为框架选择的马太效应"非常明显"（见[该段落](/weekly/009/transcript#quote-633b0bade23857fa1959)），并在第四章"[软件和游戏网文化与实践](/weekly/009/transcript#chapter-04)"再次回顾这个例子。这些是参与者的个人观点与传闻转述，节目没有说明具体公司。

## 常见问题

### Solid 和 React 有什么区别？

组件语法都用 JSX、外观相近，但 Solid 用细粒度响应式更新、没有虚拟 DOM，React 以组件为单位重新渲染。机制差异使两者代码不能直接混用，见 [React 条目](/wiki/products/react)。

### Solid 是谁开发的？

Ryan Carniato 从 2018 年开始开发，2021 年 6 月 28 日发布 1.0 版本（据 GitHub 发布记录）。

### SolidStart 是什么？

Solid 官方的元框架，在 Solid 之上提供路由、服务端渲染等应用层能力，文档见 [SolidStart 指南](https://docs.solidjs.com/solid-start)。

### Solid 是免费的吗？

是，MIT 许可开源，源码在 [GitHub](https://github.com/solidjs/solid) 公开。

## 来源

- [Solid 官方文档](https://docs.solidjs.com)
- [solidjs/solid 仓库](https://github.com/solidjs/solid)
- [Solid v1.0.0 发布记录（2021-06-28）](https://github.com/solidjs/solid/releases/tag/v1.0.0)
