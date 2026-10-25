---
entityType: brand
entity: pingcap
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'PingCAP: TiDB and distributed SQL cloud services | Next Token Wiki'
seoDescription: 'Learn about PingCAP: the TiDB distributed SQL database with MySQL compatibility and HTAP, self-managed and TiDB Cloud deployment, data solutions for AI apps, and its mention on the show.'
---

## Definition
The company behind the TiDB distributed SQL database and related cloud services. [Official source](https://www.pingcap.com/about-us/).

## Business and main product lines
According to the company's own history, PingCAP was started in 2015 by three infrastructure engineers from leading internet companies who chose to build their database the open-source way. The core product TiDB is an open-source distributed SQL database with MySQL compatibility that handles transactional (OLTP) and real-time analytical (OLAP) workloads in one system (HTAP); English Wikipedia notes that its initial design was inspired by Google's Spanner and F1 papers and that it is licensed under Apache 2.0. TiKV, TiDB's key-value storage layer, is a CNCF Graduated project.

Deployment comes in two forms: self-managed TiDB and the fully managed TiDB Cloud, both introduced on the [official TiDB product page](https://www.pingcap.com/tidb/); plans and pricing are on the [official pricing page](https://www.pingcap.com/pricing/). The site also hosts an [AI solutions hub](https://www.pingcap.com/ai/) covering vector search, RAG and databases for agentic AI.

## Use cases
Official materials point to scenarios such as modernizing MySQL applications, serving high-volume transactions and real-time analytics from a single horizontally scalable system, and providing the data layer for AI applications that need retrieval-augmented generation and persistent agent memory and state.

## Discussion on the show
In episode 007's chapter "Agent 流量、个人网站与开放接口" (Agent traffic, personal websites, and open interfaces), while discussing AI crawlers and traffic share, Yang Pan lists Cloudflare's announcement that agent traffic exceeded human traffic and adds that "PingCAP 也说过创建数据库数量超过" (PingCAP also announced that the number of databases created had exceeded a comparable human figure) ([see the line in the Chinese transcript](/weekly/007/transcript#quote-ee9b7545a706ea9eb79d)). This is a speaker's retelling of a company announcement, not a company metric; see [episode 007's chapter](/weekly/007/transcript#chapter-04), linked transcript is in Chinese.

## Common confusions
- PingCAP vs. TiDB: the former is the company, the latter is its open-source distributed database product; this wiki has no separate TiDB entry.
- TiDB vs. MySQL: TiDB speaks the MySQL protocol and eases MySQL migrations, but it is an independently implemented distributed database, not a MySQL fork.
- TiKV vs. TiDB: TiKV is TiDB's key-value storage layer and also a standalone CNCF Graduated project.

## Frequently asked questions
### What company is PingCAP?
The company behind the open-source distributed SQL database TiDB and related cloud services, started in 2015 by three infrastructure engineers; see the [official company page](https://www.pingcap.com/about-us/).
### How is TiDB different from MySQL?
TiDB is MySQL-compatible, which eases migrations, but it is an independently built distributed database with horizontal scalability and HTAP workloads; see the [TiDB product page](https://www.pingcap.com/tidb/).
