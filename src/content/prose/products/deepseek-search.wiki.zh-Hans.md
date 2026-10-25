---
entityType: product
entity: deepseek-search
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'DeepSeek Search / Fetch API：搜索与网页获取接口、调用与计费｜Next Token Wiki'
seoDescription: '了解 DeepSeek 的 Search 与 Fetch API：官方文档中的端点与调用方式、计费规则，与模型内置搜索的区别，以及第 007 期节目的接入讨论。'
---

## 定义

DeepSeek Search / Fetch API 是 DeepSeek 提供的搜索与网页获取接口：官方文档描述 Search API"为查询查找网页并返回结构化结果"，由 DeepSeek 自研搜索引擎支撑；配套的 Fetch API 获取单个网页并返回 Markdown 内容。入口见[官方指南](https://api-docs.deepseek.com/guides/search/)。

## 工作方式

两个端点均为 Bearer 认证的 JSON 接口：`POST /v1/tools/search`（搜索）与 `POST /v1/tools/fetch`（取页）。搜索请求的 `query` 为 1–128 字符，支持 `site:`、`"..."`、`lang:`、`after:`/`before:` 等操作符，`count` 可取 1–50；返回结果含标题、链接、摘要、rerank_score 等字段。计费按成功请求计，官方文档给出的费率为 Search 与 Fetch 均每 1000 次成功请求 0.75 美元，失败请求与空结果不计费；当前价格与规则以[官方文档](https://api-docs.deepseek.com/guides/search/)为准。

## 使用场景

它面向把外部信息接入应用或 Agent 的开发者：调用方拿到结构化搜索结果后，自行决定如何进入上下文。官方文档说明，经 DeepSeek Harness、Claude Code、Codex 使用模型时，服务端工具调用已经走这套 Search/Fetch API，并注明这部分调用自 2026 年 11 月 1 日（北京时间）0 点起按次计费。需要中文场景检索能力时，可直接把它包进自己的检索流程。

## 易混概念

它是独立计费的 API 服务，不是聊天应用里的联网搜索开关，也不是 [DeepSeek](/wiki/products/deepseek) 模型本身：任何模型都可以通过 HTTP 调用这两个端点。与模型的文本生成能力应分开理解；与对话应用内置搜索的关系见 [DeepSeek 对话应用](/wiki/products/deepseek-chat)条目。

## 节目中的讨论

在 Weekly #007 的"搜索 API：给个人 Agent 补上中文信息"章节，橘子说他们这周推出了搜索 API，[评价它"非常好用……基本是国内最好用的 API 之一"](/weekly/007/transcript#quote-670720405136b15e01a0)；向阳乔木说[自己"立马把它 API 包成了一个 Skill"，实际体验"响应又快，质量又好"](/weekly/007/transcript#quote-31440856481f8bea97c3)；橘子还提醒[这个 API 是单独拿出来给任何大模型用的](/weekly/007/transcript#quote-4b6962578fb24905ee49)。这些是节目参与者的使用体验，计费等事实以官方文档为准（[对应章节](/weekly/007/transcript#chapter-03)）。

## 常见问题

### DeepSeek 搜索 API 怎么收费？

按成功请求计费：官方文档给出的费率为 Search 与 Fetch 均每 1000 次成功请求 0.75 美元，失败请求与空结果不计费；当前价格见[官方指南](https://api-docs.deepseek.com/guides/search/)。

### DeepSeek 搜索 API 需要什么？

需要一个 DeepSeek API Key，在[开放平台](https://platform.deepseek.com/)创建后以 Bearer 方式调用 `POST /v1/tools/search` 与 `POST /v1/tools/fetch`，接入细节见[官方指南](https://api-docs.deepseek.com/guides/search/)。

### 搜索 API 只能配 DeepSeek 的模型用吗？

不是。两个端点是独立的 HTTP 接口，任何模型都可以调用；官方文档另说明 Harness、Claude Code、Codex 中的服务端工具调用已接入这套 API。

## 来源

- [DeepSeek Search API 官方指南](https://api-docs.deepseek.com/guides/search/)
- [DeepSeek 开放平台](https://platform.deepseek.com/)
- [DeepSeek API 更新记录](https://api-docs.deepseek.com/updates/)
