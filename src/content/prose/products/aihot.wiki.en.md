---
entityType: product
entity: aihot
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'AIHOT: an AI news site that writes its own daily digest, plus an open-source framework | Next Token Wiki'
seoDescription: 'How AIHOT.news collects, scores, clusters and publishes daily digests, how to deploy its open-source framework, and what the Weekly show said about it.'
---

## What AIHOT is

AIHOT (AIHOT.news) is an AI news site created and run by the AI content creator [Khazix](/en/wiki/people/kazike) (数字生命卡兹克). The official repository describes it as "a website framework that finds its own hot topics and writes its own daily digest": every day it collects material from a set of sources, pre-screens it with a large language model, scores it twice independently, and writes Chinese-language titles and summaries. Reports of the same event from different outlets are clustered into one event, with heat computed from the number of independent sources. A daily digest is published every morning, with weekly and monthly editions compiled from it.

## The open-source framework and deployment

The repository is the engine and framework of the same site, released under the MIT license, built on Node.js, PostgreSQL, and Docker Compose. According to the repository's README, the online site and the repository run the same engine code, but the repository does not include AIHOT's real source list or operational data — it ships 18 public overseas AI news sources as a demonstration. The AIHOT name and logo are excluded from the license; deployers should rebrand the site.

The framework supports six source types: RSS, web page lists, JSON APIs, X accounts, WeChat official accounts, and script pushes; selection criteria and thresholds live in editable prompts and configuration. For agent scenarios it outputs RSS, a public API, MCP, Agent Markdown, and `llms.txt`, so the same content serves both humans and agents. Self-hosting requires Docker, Node.js, and an OpenAI-compatible model API key; follow the [official repository](https://github.com/KKKKhazix/AIHOT) documentation for steps.

## Discussion in the show

In Weekly #005's chapter "RSS、独立博客与内容开放" (RSS, independent blogs, and open content), [Yang Pan mentioned that Khazix had released AIHOT.news but said he would not build the same thing; instead he planned to publish his curated AI sources as RSS feeds in the Chinese transcript](/weekly/005/transcript#quote-090a602af9cf1d5a15bd). Guizang suggested wrapping the same material in an MCP server, arguing the essence was identical, and Xiangyang Qiaomu noted that his RSS reader needed a paid scraping service before WeChat official account content could be subscribed. The chapter sits in a broader discussion of open content and the RSS ecosystem on the Chinese internet; see the [episode 005 chapter](/weekly/005/transcript#chapter-06). An English transcript is not available.

## Frequently asked questions

### Who created AIHOT?

AIHOT.news was created and is run by AI content creator Khazix (数字生命卡兹克). His creator relationship with AIHOT is recorded in [his entry](/en/wiki/people/kazike), sourced from the official repository.

### Can I deploy the AIHOT framework myself?

Yes. The framework is open source under the MIT license, and the official README documents a Docker Compose deployment that requires your own OpenAI-compatible model API key. The repository ships demonstration sources only; real sources and industry-specific selection criteria must be configured by you.

### What interfaces does AIHOT provide for agents?

According to the official repository, the site exposes RSS (curated, all, full text, daily, weekly, and monthly digests), a public API, MCP, Agent Markdown, and `llms.txt`. Integration details can be copied from the `/agent` page of a deployed site.

### Is AIHOT the same thing as AIoT?

No. AIHOT is an AI news website; AIoT refers to combining artificial intelligence with the Internet of Things. The similarity is only in spelling.

## Sources

- [AIHOT official repository (GitHub)](https://github.com/KKKKhazix/AIHOT)
- [AIHOT.news](https://aihot.news/)
