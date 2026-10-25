---
entityType: brand
entity: pingcap
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'PingCAP：TiDB 分布式数据库与云服务｜Next Token Wiki'
seoDescription: '了解 PingCAP 公司：TiDB 分布式 SQL 数据库的 MySQL 兼容与 HTAP 能力、TiDB Cloud 与自托管使用方式、面向 AI 应用的数据方案，以及节目中的提及。'
---

## 定义
开发 TiDB 分布式 SQL 数据库及相关云服务的公司。[官方资料](https://www.pingcap.com/about-us/)。

## 业务与主要产品线
据官方介绍，PingCAP 由三名曾在头部互联网公司任职的基础设施工程师于 2015 年创办，选择以开源方式构建数据库。核心产品 TiDB 是开源分布式 SQL 数据库，兼容 MySQL，可在同一系统中同时处理事务（OLTP）与实时分析（OLAP）负载（HTAP）；英文维基百科称其最初设计灵感来自 Google 的 Spanner 与 F1 论文，采用 Apache 2.0 许可证。TiDB 的键值存储层 TiKV 是 CNCF 毕业项目。

使用方式分两类：自行部署的 TiDB Self-Managed 与全托管的 TiDB Cloud，见 [TiDB 官方产品页](https://www.pingcap.com/tidb/)，各计划与价格见[官方定价页](https://www.pingcap.com/pricing/)。官网还设有向量搜索、RAG 与面向 Agentic AI 的[数据库方案板块](https://www.pingcap.com/ai/)。

## 使用场景
官方材料给出的典型场景包括：承接 MySQL 应用的现代化迁移，用可水平扩展的单一系统同时承担高并发交易与实时分析，以及为 AI 应用提供检索增强、Agent 记忆与状态管理所需的数据底座。

## 节目中的讨论
第 007 期在"Agent 流量、个人网站与开放接口"章节讨论 AI 抓取与流量占比时，杨攀在列举"Cloudflare 宣布 Agent 流量超过人类"之后说"之前 PingCAP 也说过创建数据库数量超过"（见[该段落](/weekly/007/transcript#quote-ee9b7545a706ea9eb79d)）。这是节目参与者对公司公告的转述，其比较口径以 PingCAP 官方发布为准，可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-04)。

## 易混概念
- PingCAP 与 TiDB：前者是开发公司，后者是其开源分布式数据库产品；本站未为 TiDB 设独立条目。
- TiDB 与 MySQL：TiDB 兼容 MySQL 协议、可承接 MySQL 应用的迁移，但它是独立实现的分布式数据库，不是 MySQL 的分支。
- TiKV 与 TiDB：TiKV 是 TiDB 的键值存储层，也是独立的 CNCF 毕业项目。

## 常见问题
### PingCAP 是什么公司？
开发开源分布式 SQL 数据库 TiDB 及相关云服务的公司，2015 年由三名基础设施工程师创办，见[官方公司介绍](https://www.pingcap.com/about-us/)。
### TiDB 和 MySQL 有什么区别？
TiDB 兼容 MySQL 语法，便于 MySQL 应用迁移，但它是分布式架构的独立数据库，支持水平扩展与 HTAP 混合负载；详见 [TiDB 产品页](https://www.pingcap.com/tidb/)。
