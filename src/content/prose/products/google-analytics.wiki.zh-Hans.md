---
entityType: product
entity: google-analytics
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Google Analytics：网站与应用分析服务｜Next Token Wiki'
seoDescription: '了解 Google Analytics 的 GA4 定位、跨平台统计工作方式、免费版与 Analytics 360 的区别，以及 Weekly 第 007 期关于 Agent 流量统计的讨论。'
---

## 定义

Google Analytics 是 Google 提供的网站与应用分析服务，用于了解访问来源、用户行为和转化。官方将其定位为跨设备、跨平台理解客户的工具，宣称"the tools, free of charge"免费提供，另有面向企业的付费版 Analytics 360，见[官方资料](https://marketingplatform.google.com/about/analytics/)。

## 工作方式

在网页或应用中部署统计代码（可与 Google Tag Manager 配合）后，访问数据汇总到一个媒体资源，报告覆盖用户在整个生命周期内跨网站与应用的旅程。官方页面列出与 Google Ads、Search Ads 360、Display & Video 360、Google Cloud 和 Search Console 的集成，并提供基于 Google 机器学习的洞见与自动化报告。现行版本是 Google Analytics 4（GA4）：按[官方支持页](https://support.google.com/analytics/answer/11583528)说明，标准版 Universal Analytics 媒体资源已于 2023 年 7 月 1 日停止处理数据，GA4 "has replaced Universal Analytics"。

## 使用场景

适合网站和应用的运营者衡量流量、用户行为与营销转化，尤其是投放 Google 广告并需要归因与跨平台报表的团队；个人网站也可以用它观察访问来源。

## 易混概念

GA4 与 Universal Analytics 是先后两代版本，旧版已停止处理数据；免费标准版与 Analytics 360 是同一服务的两个付费层级。Google Analytics 由 Google 托管，与可自托管的开源分析工具（如本站收录的 [Umami](/wiki/products/umami)）是不同形态的选择。

## 节目中的讨论

在 Weekly #007 的“Agent 流量、个人网站与开放接口”章节中，向阳乔木提出现有流量统计缺少对 AI 训练爬虫与个人 Agent 抓取的跟踪，[杨攀回应"你们就做一个新时代的 Google Analytics 就完了"](/weekly/007/transcript#quote-c1ee1f67ce28fede2cd0)。这是参与者把 Google Analytics 当作传统网站分析的参照，不是对产品功能的介绍。可阅读[对应章节](/weekly/007/transcript#chapter-04)。

## 常见问题

### GA4 是什么？

GA4（Google Analytics 4）是现行版本的 Google Analytics。官方支持页说明它取代了 Universal Analytics——后者标准版媒体资源已于 2023 年 7 月 1 日停止处理数据，360 版处理延期至 2024 年 7 月 1 日，详见[官方迁移说明](https://support.google.com/analytics/answer/11583528)。

### Google Analytics 免费吗？

官方产品页写明分析工具免费提供（"free of charge"）；另设面向企业的付费版 Analytics 360，提供更深入的商用工具。层级与条款见[官方页面](https://marketingplatform.google.com/about/analytics/)。

### Google Analytics 和 Umami 有什么区别？

Google Analytics 是 Google 托管的商业分析服务，深度集成 Google 广告生态；Umami 是可自托管的开源分析工具，官方定位为无 Cookie、不做用户追踪。两者形态与数据归属不同，本站 Umami 条目有对照说明。

## 来源

- [Google Analytics 官方产品页](https://marketingplatform.google.com/about/analytics/)
- [Google Analytics 4 迁移与 Universal Analytics 停更说明](https://support.google.com/analytics/answer/11583528)
