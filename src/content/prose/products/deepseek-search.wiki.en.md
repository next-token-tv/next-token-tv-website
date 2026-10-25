---
entityType: product
entity: deepseek-search
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'DeepSeek Search / Fetch API: endpoints, usage and billing | Next Token Wiki'
seoDescription: 'What the DeepSeek Search and Fetch APIs do, their endpoints and request fields, how billing works per official docs, how they differ from built-in search, and the episode 007 discussion.'
---

## Definition

The DeepSeek Search / Fetch API is DeepSeek's search and page-retrieval interface: the official documentation describes the Search API as finding "web pages for a query and return[ing] structured results", powered by DeepSeek's in-house search engine, with a companion Fetch API that retrieves a single web page and returns its content as Markdown. See the [official guide](https://api-docs.deepseek.com/guides/search/).

## How it works

Both endpoints are bearer-authenticated JSON APIs: `POST /v1/tools/search` (search) and `POST /v1/tools/fetch` (page retrieval). The search `query` takes 1–128 characters and supports operators such as `site:`, `"..."`, `lang:`, and `after:`/`before:`; `count` ranges from 1–50; results carry title, URL, snippet, summary and a rerank score. Billing is per successful request — the official documentation prices both Search and Fetch at $0.75 per 1,000 successful requests, with failed requests and empty results not billed; current prices and rules follow the [official guide](https://api-docs.deepseek.com/guides/search/).

## Usage

It targets developers wiring external information into applications or agents: the caller receives structured results and decides how to feed them into context. The official documentation notes that when using models through DeepSeek Harness, Claude Code or Codex, server-side tool calls already hit this Search/Fetch API, and that this usage starts being billed per request from 00:00 Beijing time on November 1, 2026. It can be wrapped directly into a retrieval pipeline when Chinese-language search capability is needed.

## Related and confusable terms

This is a separately billed API service, not the web-search toggle in the chat app and not the [DeepSeek](/en/wiki/products/deepseek) models themselves: any model can call the two endpoints over HTTP. Keep it distinct from the models' text generation; its relation to built-in chat search is covered in the [DeepSeek Chat](/en/wiki/products/deepseek-chat) entry.

## Discussed on Next Token

In episode 007, in the chapter "搜索 API：给个人 Agent 补上中文信息" (Chinese transcript), 橘子 said the search API had come out that week and [called it "非常好用……基本是国内最好用的 API 之一"](/weekly/007/transcript#quote-670720405136b15e01a0); 向阳乔木 said [he "立马把它 API 包成了一个 Skill" and found it "响应又快，质量又好"](/weekly/007/transcript#quote-31440856481f8bea97c3); 橘子 also noted [the API was exposed as a standalone service any model can use](/weekly/007/transcript#quote-4b6962578fb24905ee49). These are the participants' experiences; billing and other facts follow the official documentation ([full chapter](/weekly/007/transcript#chapter-03)).

## Frequently asked questions

### How is the DeepSeek Search API billed?

Per successful request: the official documentation prices both Search and Fetch at $0.75 per 1,000 successful requests, and failed requests or empty results are not billed; current pricing is on the [official guide](https://api-docs.deepseek.com/guides/search/).

### What do I need to use the DeepSeek Search API?

A DeepSeek API Key, created on the [open platform](https://platform.deepseek.com/) and sent as a bearer token to `POST /v1/tools/search` and `POST /v1/tools/fetch`; integration details are in the [official guide](https://api-docs.deepseek.com/guides/search/).

### Is the Search API tied to DeepSeek models?

No. The two endpoints are standalone HTTP interfaces any model can call; the official documentation additionally notes that server-side tool calls in Harness, Claude Code and Codex already use this API.

## Sources

- [DeepSeek Search API official guide](https://api-docs.deepseek.com/guides/search/)
- [DeepSeek open platform](https://platform.deepseek.com/)
- [DeepSeek API updates](https://api-docs.deepseek.com/updates/)
