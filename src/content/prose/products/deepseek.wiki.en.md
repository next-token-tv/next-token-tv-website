---
entityType: product
entity: deepseek
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'DeepSeek model family: API, models, and usage boundaries | Next Token Wiki'
seoDescription: 'Learn what the DeepSeek model family offers, how its developer API works, and what the Weekly show discussed about DeepSeek Flash.'
---

## DeepSeek model family

DeepSeek is a general-purpose model family with end-user web and app products as well as an API for developers. Its official Transparency Center lists released models such as DeepSeek-V4 and DeepSeek-V3.2. The API documentation provides the model list and calling interfaces. Model names, availability, and pricing change, so current details should be checked in the [official model list](https://api-docs.deepseek.com/api/list-models/), [API documentation](https://api-docs.deepseek.com/), and [Transparency Center](https://www.deepseek.com/en/transparency/).

## Usage and boundaries

Developers can call DeepSeek through the Responses API or compatible Chat Completions interfaces. The Responses API documentation listed `deepseek-flash` and `deepseek-v4-pro` as of September 2026, along with tool-related input items. The API is stateless: callers must provide the conversation history again for multi-turn requests. Model names alone do not establish capability, compatibility, or quota.

DeepSeek’s fit depends on the task, model, context, and execution environment. It can serve as the model layer in question answering, coding, and agent workflows. Permissions, tool integration, testing, and delivery remain responsibilities of the surrounding application or agent. For persistent coding workflows, see [DeepSeek Harness](/en/wiki/products/deepseek-harness).

## Discussion in the show

In Weekly #002’s chapter “Trying DeepSeek Flash and Harness,” [Yang Pan describes his Chinese retrieval experience in the Chinese transcript](/weekly/002/transcript#quote-8316bc20929e3c03de42), while the episode discusses DeepSeek Flash in relation to speed, cost, rapidly changing harnesses, and delivery bottlenecks. This is participant experience and opinion, not an independent capability evaluation. The [episode 002 chapter](/weekly/002/transcript#chapter-08) remains the broader context; an English transcript chapter is not available.

## Frequently asked questions

### Where are the official DeepSeek website and web chat?

The official website is [deepseek.com](https://www.deepseek.com/), and the chat interface is [chat.deepseek.com](https://chat.deepseek.com/). Developers use the separate [API platform](https://platform.deepseek.com/).

### Is the DeepSeek API free, and how is it priced?

The API charges for input and output tokens, with rates depending on the model and factors such as cache hits. Granted account credits do not make the API permanently free. Check the [official pricing page](https://api-docs.deepseek.com/quick_start/pricing/) for current rates and billing rules.

### Where do I get a DeepSeek API key?

Apply for a key on the [official API platform](https://platform.deepseek.com/), then configure the key, base URL, and model as described in the [quick-start documentation](https://api-docs.deepseek.com/). Keep the key out of public websites and repositories.

### Which DeepSeek model names should I use in API requests?

As of September 2026, the official documentation lists `deepseek-flash` and `deepseek-v4-pro`. Display names and API identifiers are not always identical; check the [current model documentation](https://api-docs.deepseek.com/quick_start/pricing/) before integrating.

## Sources

- [DeepSeek Transparency Center](https://www.deepseek.com/en/transparency/)
- [DeepSeek API model list](https://api-docs.deepseek.com/api/list-models/)
- [DeepSeek Responses API documentation](https://api-docs.deepseek.com/api/create-response/)
- [DeepSeek API changelog](https://api-docs.deepseek.com/updates/)
