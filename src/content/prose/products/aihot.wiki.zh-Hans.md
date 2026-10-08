---
entityType: product
entity: aihot
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'AIHOT：自动筛选热点、生成日报的 AI 资讯站与开源框架｜Next Token Wiki'
seoDescription: '了解 AIHOT.news 的采集、评分、聚簇与日报机制，其开源框架的部署方式与给 Agent 的接口，以及 Weekly 节目中的相关讨论。'
---

## AIHOT 是什么

AIHOT（AIHOT.news）是 AI 内容创作者[数字生命卡兹克](/wiki/people/kazike)创建并运营的 AI 热点资讯网站。官方仓库将其概括为"一个自己找热点、自己写日报的网站框架"：每天从一批信源收资料，用大模型先预筛、再独立打两次分，写成中文标题和摘要；不同来源报道的同一件事聚成一个事件，热度按独立来源数量计算；每天早上出一份日报，周报、月报再从日报汇编。

## 开源框架与部署

AIHOT 的仓库是同名网站的引擎和框架，以 MIT 许可证开源，技术栈为 Node.js、PostgreSQL 与 Docker Compose。按官方仓库的说明，线上站与仓库运行同一份引擎代码，但仓库不包含 AIHOT 的真实信源名单和运营数据，只附带 18 个公开的海外 AI 资讯源作示范；AIHOT 的名字和 Logo 也不在许可范围内，部署者应换成自己的品牌。

框架支持六种信源：RSS、网页列表、JSON 接口、X 账号、微信公众号，以及脚本推送；精选标准与入选门槛写在可修改的提示词和配置里。面向 Agent 场景，它输出 RSS、公开 API、MCP、Agent Markdown 与 `llms.txt`，同一份内容既给人看也给 Agent 用。自行部署需要 Docker、Node.js 和一个 OpenAI 兼容的模型 API Key，步骤以[官方仓库](https://github.com/KKKKhazix/AIHOT)文档为准。

## 节目中的讨论

在 Weekly #005 的"RSS、独立博客与内容开放"章节中，[杨攀提到卡兹克发布了 AIHOT.news，但表示自己不打算照做，而是把整理好的优质 AI 信源直接发布成 RSS](/weekly/005/transcript#quote-090a602af9cf1d5a15bd)；歸藏建议再包一层 MCP，认为本质相同；向阳乔木提到他做 RSS 订阅器时，公众号内容需要借助抓取服务才能被订阅。这一章的语境是中文互联网内容开放与 RSS 生态的讨论，详见[第 005 期对应章节](/weekly/005/transcript#chapter-06)。

## 常见问题

### AIHOT 是谁做的？

AIHOT.news 由 AI 内容创作者数字生命卡兹克创建并运营；他与 AIHOT 的创作者关系见[其人物条目](/wiki/people/kazike)，来源是官方仓库。

### AIHOT 的框架可以自己部署吗？

可以。框架以 MIT 许可证开源，官方 README 给出基于 Docker Compose 的部署步骤，需要自备一个 OpenAI 兼容的模型 API Key；仓库只带示范信源，真实信源和行业精选标准要自己配置。

### AIHOT 给 Agent 提供哪些接口？

按官方仓库的说明，站点输出 RSS（精选、全部、全文、日报、周报、月报）、公开 API、MCP、Agent Markdown 和 `llms.txt`；接入方式可从部署后站点的 `/agent` 页面复制。

### AIHOT 和 AIoT 是一回事吗？

不是。AIHOT 是 AI 热点资讯网站；AIoT 指人工智能与物联网结合的技术方向，两者只是拼写相近，没有关系。

## 来源

- [AIHOT 官方仓库（GitHub）](https://github.com/KKKKhazix/AIHOT)
- [AIHOT.news](https://aihot.news/)
