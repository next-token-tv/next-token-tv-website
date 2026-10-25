---
entityType: product
entity: umami
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Umami：开源网站与产品分析工具｜Next Token Wiki'
seoDescription: '了解 Umami 开源分析工具的工作方式、自托管与云服务两种用法、与同类统计工具的区别，以及 Weekly 第 007 期中的相关讨论。'
---

## 定义

Umami 是开源的网站与产品分析工具，用于查看流量来源、访问行为和转化。官方定位为隐私优先的分析平台——"No cookies, no surveillance"，数据可以自托管，也可以使用官方 Umami Cloud，见[官方资料](https://umami.is/)。

## 工作方式

在网站页面中嵌入 Umami 提供的脚本后，访问数据汇总到一个仪表盘，覆盖浏览量、访客、来源与 UTM 归因、事件、漏斗和留存等指标。官方声明不存储可识别个人身份的信息，数据"never sold or shared"，并以此支持 GDPR、CCPA 等合规要求；代码以 MIT 许可开源在 GitHub，另有只读 MCP 服务供 AI 助手查询数据（官方站点注明适用于 Umami Cloud Pro+ 或 v3.4 以上自托管版本）。

## 使用场景

适合个人网站、博客和产品团队把流量统计、行为分析放在一个工具里完成；因为开源且支持自托管，也常被改造为数据自持的定制统计，例如面向 AI 爬虫与个人 Agent 抓取的流量分析。

## 易混概念

Umami 与日语中表示"鲜味"的 umami 同名，搜索时注意区分烹饪与词典含义；自托管的开源版本与官方 Umami Cloud 是同一软件的两种运行方式，能力差异以[官方文档](https://umami.is/docs)为准。

## 节目中的讨论

在 Weekly #007 的"Agent 流量、个人网站与开放接口"章节中，向阳乔木提到一个正在开发的流量统计服务，希望同时统计网页访问与 AI 爬虫、个人 Agent 的抓取，[并说明它"是基于 Umami 开源来改的"，计划先自用](/weekly/007/transcript#quote-7b1f7eddfc944a1032c0)。这是参与者对该二次开发项目的说明，不是 Umami 官方功能介绍。参见[对应章节](/weekly/007/transcript#chapter-04)。

## 常见问题

### Umami 可以自己部署吗？

可以。官方区分自托管开源版本与托管服务 Umami Cloud 两种用法，部署说明见[官方文档](https://umami.is/docs)。

### Umami 和 Google Analytics 有什么区别？

官方定位是无 Cookie、不做用户追踪、数据不出售不共享、可自托管的开源分析；具体能力对照见[官方网站](https://umami.is/)。

## 来源

- [Umami 官方网站](https://umami.is/)
- [Umami 官方文档](https://umami.is/docs)
- [umami-software/umami 仓库（GitHub）](https://github.com/umami-software/umami)
