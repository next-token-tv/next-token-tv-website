---
entityType: product
entity: nextjs
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'Next.js：Vercel 的 React Web 应用框架｜Next Token Wiki'
seoDescription: 'Next.js 是什么：Vercel 2016 年发布的 React 框架，提供服务端渲染与静态渲染，以及第 9 期节目把 Next.js 比作乐高组件的讨论。'
---

## Next.js

Next.js 是基于 [React](/wiki/products/react) 的开源 Web 应用框架，由 [Vercel](/wiki/brands/vercel) 创建，2016 年 10 月 25 日首次发布，此后由 Vercel 与开源社区共同维护，采用 MIT 许可（据[英文维基百科](https://en.wikipedia.org/wiki/Next.js)）。官方站点是 [nextjs.org](https://nextjs.org)。

## 用途与区别

React 本身只负责组件与渲染；Next.js 在其上补充了完整的 Web 应用工程能力，包括服务端渲染、静态生成、路由与构建部署方案。同一个 React 组件可以在这两种渲染方式间选择，页面按需在服务器或构建时生成。

与 [Astro](/wiki/products/astro) 相比，Next.js 面向通用 Web 应用，Astro 面向以内容为主的网站，默认输出更少的客户端脚本，也可按需引入 React 组件。与 [Tailwind CSS](/wiki/products/tailwind-css) 不是同类工具：Next.js 是应用框架，Tailwind 是样式方案，两者经常在同一项目中搭配使用。

## 节目中的讨论

第九期在"[Harness 与插件生态](/weekly/009/transcript#chapter-01)"里，杨攀把 Next.js、[Astro](/wiki/products/astro) 与 [Tailwind CSS](/wiki/products/tailwind-css) 列为开发前端时的常见框架（见[该段落](/weekly/009/transcript#quote-1015d384978ae7a10e49)），并提出：建站时底层选 Next.js 还是 Astro 属于"乐高组件"，AI 模型不需要自己改这类框架，直接调用即可（见[该段落](/weekly/009/transcript#quote-02ab560177ba9cacb0fb)）。这些是参与者的个人观点。

## 常见问题

### Next.js 和 React 是什么关系？

Next.js 基于 React：React 提供组件模型，Next.js 提供路由、服务端渲染、静态生成等应用层能力，见 [React 条目](/wiki/products/react)。

### Next.js 是谁开发的？

由 Vercel 创建，2016 年 10 月首次发布并开源；Vercel 同时提供同名的商业云部署平台，但 Next.js 本身是 MIT 许可的开源项目。

### Next.js 和 Astro 应该怎么选？

通用 Web 应用常用 Next.js；以内容为主、希望默认少加载脚本的网站常用 Astro。两者定位的比较见 [Astro 条目](/wiki/products/astro)。

### Next.js 是免费的吗？

框架本身 MIT 许可开源，源码在 [GitHub](https://github.com/vercel/next.js) 公开；Vercel 的托管平台单独计费，价格见[官方定价页](https://vercel.com/pricing)。

## 来源

- [Next.js 官方网站](https://nextjs.org)
- [vercel/next.js 仓库](https://github.com/vercel/next.js)
- [Wikipedia: Next.js](https://en.wikipedia.org/wiki/Next.js)
