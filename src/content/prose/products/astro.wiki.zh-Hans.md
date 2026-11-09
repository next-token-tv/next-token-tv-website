---
entityType: product
entity: astro
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'Astro：面向内容型网站的 Web 框架｜Next Token Wiki'
seoDescription: 'Astro 是什么：2021 年开源、2022 年发布 1.0 的内容型网站框架，Islands 架构与 React 组件支持，以及第 9 期节目中的讨论。'
---

## Astro

Astro 是面向内容型网站的开源 Web 框架，2021 年 6 月公开发布（据其[官方博客](https://astro.build/blog/the-astro-technology-company/)的回顾），2022 年 8 月 9 日发布 1.0 版本（据[官方发布公告](https://astro.build/blog/astro-1/)）。项目由 Fred Schott 为首、曾维护 Snowpack 等工具的团队创建，2022 年 1 月官方宣布成立 The Astro Technology Company 并获种子轮融资，专职维护 Astro，项目以 MIT 许可开源。

## 用途与区别

Astro 的默认产物是几乎不含客户端脚本的静态页面，交互能力按需引入：单个交互组件（React、Solid、Vue 等写法均可）单独加载，官方称为 Islands（岛屿）架构。这种定位适合博客、文档、营销页等内容为主的网站，与面向通用 Web 应用的 [Next.js](/wiki/products/nextjs) 形成分工；页面中的交互组件也可以直接复用 [React](/wiki/products/react) 生态。

## 节目中的讨论

第九期在"[Harness 与插件生态](/weekly/009/transcript#chapter-01)"里，杨攀把 [Next.js](/wiki/products/nextjs)、Astro 与 [Tailwind CSS](/wiki/products/tailwind-css) 列为常见前端框架（见[该段落](/weekly/009/transcript#quote-1015d384978ae7a10e49)），并提出建站时底层选 Next.js 还是 Astro 属于"乐高组件"，AI 模型直接调用而不需要自己改框架（见[该段落](/weekly/009/transcript#quote-02ab560177ba9cacb0fb)）。这些是参与者的个人观点。

## 常见问题

### Astro 和 Next.js 有什么区别？

Astro 面向内容为主的网站，默认输出静态页面、按需加载交互组件；Next.js 面向通用 Web 应用，整体围绕 React 组织。内容站与重交互应用是两条典型路线。

### Astro 能用 React 组件吗？

能。Astro 页面按需引入 React、Solid、Vue 等框架写的组件，只在需要交互的位置加载脚本。

### Astro 是谁开发的？

由 Fred Schott 为首的团队创建，2021 年 6 月公开，2022 年 1 月官方宣布成立 The Astro Technology Company 并获种子轮融资（据官方博客公告）。

### Astro 是免费的吗？

是，MIT 许可开源，源码在 [GitHub](https://github.com/withastro/astro) 公开。

## 来源

- [Astro 官方网站](https://astro.build)
- [Astro 1.0 发布公告（2022-08-09）](https://astro.build/blog/astro-1/)
- [Announcing The Astro Technology Company（2022-01-12）](https://astro.build/blog/the-astro-technology-company/)
- [withastro/astro 仓库](https://github.com/withastro/astro)
