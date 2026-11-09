---
entityType: product
entity: react
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'React：Meta 开源的用户界面组件库｜Next Token Wiki'
seoDescription: 'React 是什么：Meta 2013 年开源的组件化 UI 库，与 Next.js、Solid、Astro 的关系，以及第 9 期节目对框架选择马太效应的讨论。'
---

## React

React 是一个用组件构建用户界面的 JavaScript 库，由当时在 Facebook 的 Jordan Walke 开发，2013 年 5 月 29 日开源，此后由 Meta（原 Facebook）与社区共同维护，采用 MIT 许可（据[英文维基百科](https://en.wikipedia.org/wiki/React_(software))）。官方站点是 [react.dev](https://react.dev)，定位覆盖 Web 与原生界面——原生界面部分由 React Native 承担。

## 用途与区别

React 本身只负责组件与渲染，路由、数据获取等能力来自生态库，因此围绕它形成了多个上层框架。[Next.js](/wiki/products/nextjs) 是其中由 [Vercel](/wiki/brands/vercel) 维护的代表性框架；[Astro](/wiki/products/astro) 面向内容型网站，也允许在页面中按需使用 React 组件。

[Solid](/wiki/products/solid) 与 React 最容易混淆：两者都使用 JSX 书写组件，外观相似，但更新机制不同——React 以组件为单位重新渲染，Solid 采用细粒度响应式更新。组件代码迁移时通常不能直接照搬。

## 节目中的讨论

第九期在"[Harness 与插件生态](/weekly/009/transcript#chapter-01)"里，杨攀说他印象很深的一个案例：一家公司原本使用 Solid，引入 AI 编程后，AI 经常在写 Solid 时写出 React 语法，该公司最终换回 React；他把结论概括为"如果不是 AI 了解的最大共识，不是 AI 了解的最佳实践，你基本上就被市场淘汰了"（见[该段落](/weekly/009/transcript#quote-8cd6074f74c9128671c4)）。他接着称这一选择的马太效应"非常明显"（见[该段落](/weekly/009/transcript#quote-633b0bade23857fa1959)），并在第四章"[软件和游戏网文化与实践](/weekly/009/transcript#chapter-04)"再次把"AI 选择什么框架"归入这种效应。这些是参与者的个人观点与传闻转述，不是对任何公司的核实。

## 常见问题

### React 是框架还是库？

React 是用户界面库：只负责组件与渲染，路由、构建等由生态库和上层框架补齐。[Next.js](/wiki/products/nextjs) 这类框架基于 React 提供完整工程方案。

### React 是谁开发的？

Jordan Walke 在 Facebook 开发了 React，2013 年 5 月开源，此后由 Meta 与开源社区维护（据英文维基百科）。

### React 和 Solid 有什么区别？

两者都用 JSX 写组件，但 React 通过重新渲染组件来更新界面，Solid 用细粒度响应式直接更新依赖的部分。语法相近而机制不同，也是 AI 编程工具容易混淆的原因，见 [Solid 条目](/wiki/products/solid)。

### React 是免费的吗？

是，MIT 许可开源，源码在 [GitHub](https://github.com/facebook/react) 公开，商用无额外费用。

## 来源

- [React 官方网站](https://react.dev)
- [Wikipedia: React (software)](https://en.wikipedia.org/wiki/React_(software))
