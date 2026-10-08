---
entityType: product
entity: tailwind-css
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Tailwind CSS：工具类优先的 CSS 框架｜Next Token Wiki'
seoDescription: '了解 Tailwind CSS 是什么：utility-first CSS 框架的工作方式、与 Bootstrap 等框架的区别、开源授权与常见问题。'
---

## Tailwind CSS

Tailwind CSS 是一个工具类优先（utility-first）的开源 CSS 框架。它不提供成套的按钮、表格等预制组件类，而是提供大量单一用途的工具类（如 `flex`、`pt-4`、`text-center`），开发者直接在 HTML 标记中组合这些类来构建设计。项目由 Tailwind Labs 开发维护，原作者为 Adam Wathan、Jonathan Reinink、David Hemphill 和 Steve Schoger，1.0 版于 2019 年 5 月 13 日发布。

## 工作方式与适用场景

Tailwind 的做法是把样式拆成细粒度的工具类：响应式断点、暗色模式、状态变体（hover、focus 等）都通过在类名上加前缀来表达。设计系统的一致性由配置（设计令牌如颜色、间距、字体）约束。这种方式适合直接在 HTML 中完成界面开发、由配置统一样式的场景；是否选用取决于团队的工作流偏好，框架本身只负责样式层，不限定 JavaScript 框架。当前版本的安装方式与文档见[官方文档](https://tailwindcss.com/docs/)。

Tailwind CSS 以 MIT 许可证开源，代码仓库在 [GitHub](https://github.com/tailwindlabs/tailwindcss)。

## 节目中的讨论

Weekly #005 的"迁移插件、替换编辑器内核"章节谈到 AI 让重写软件变得轻而易举时，杨攀说[自己刷新个人网站时"顺手做了一个杨攀版的 Tailwind CSS，就是一下就出来了"](/weekly/005/transcript#quote-1d2a57aa06e20b940e31)，歸藏补充说"把那个 Token 提出来就完事了"。这里的"杨攀版 Tailwind CSS"指的是用 AI 生成一套以个人设计令牌为基础的类名样式，是主理人对 AI 编码效率的个人体验，不是在介绍 Tailwind Labs 的产品发布。

## 常见问题

### Tailwind CSS 是什么？

Tailwind CSS 是一个 utility-first 的开源 CSS 框架：它提供大量单一用途的工具类，开发者直接在 HTML 中组合这些类来构建界面，见[官网](https://tailwindcss.com/)。

### Tailwind CSS 免费吗？

免费。Tailwind CSS 以 MIT 许可证开源，可自由用于个人和商业项目，许可证见 [GitHub 仓库](https://github.com/tailwindlabs/tailwindcss)。

### Tailwind CSS 和 Bootstrap 有什么区别？

两者是不同思路：Bootstrap 提供成套的预制组件类（按钮、卡片、表格等），Tailwind 提供单一用途的工具类，由开发者在 HTML 里自行组合出设计。前者开箱即用、后者更灵活但需要自己组合，见 [Wikipedia 对 Tailwind CSS 的介绍](https://en.wikipedia.org/wiki/Tailwind_CSS)与[官方文档](https://tailwindcss.com/docs/)。

### Tailwind CSS 文档在哪里？

官方文档在 [tailwindcss.com/docs](https://tailwindcss.com/docs/)，安装方式随版本变化，以文档当前内容为准。

## 来源

- [Tailwind CSS 官网](https://tailwindcss.com/)
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs/)
- [GitHub: tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [Wikipedia: Tailwind CSS](https://en.wikipedia.org/wiki/Tailwind_CSS)（2026-10-08 查阅）
