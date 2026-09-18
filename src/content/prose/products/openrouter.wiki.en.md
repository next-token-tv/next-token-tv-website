---
entityType: product
entity: openrouter
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'OpenRouter: unified API access to many model providers | Next Token Wiki'
seoDescription: 'How OpenRouter’s unified API, billing, and API keys work, the reported Stripe acquisition, and how the show discussed it.'
---

## What OpenRouter is

OpenRouter is a model routing platform: at [openrouter.ai](https://openrouter.ai/), developers call hundreds of models from many providers through one OpenAI-compatible unified API, with routing, fallbacks, and cost tracking handled by the platform. The company was founded in 2023 by Alex Atallah and Louis Vichy and is headquartered in New York City. In August 2026, Bloomberg and The Wall Street Journal reported that Stripe had finalized a deal to buy OpenRouter for more than $7 billion.

## Usage and boundaries

- API: the official [quickstart](https://openrouter.ai/docs/quickstart) gives the base URL `https://openrouter.ai/api/v1` with a chat endpoint at `/api/v1/chat/completions`; models are specified as `provider/model`. Switching models requires no code change, and requests can automatically route around provider outages and rate limits.
- Billing: usage is charged per token, and the official position is no markup on the provider’s price; models with a `:free` suffix cost nothing. Current rates are in the [official pricing documentation](https://openrouter.ai/docs/api-reference/overview) and on each model page.
- API keys: create keys in the official account console after signing up and send them as a Bearer token; keep keys out of public repositories and web pages.
- Extras: the model catalog and rankings live at [openrouter.ai/models](https://openrouter.ai/models/); OpenRouter also offers an MCP server for agents and tooling to evaluate models on your own prompts.

## Discussion in the show

- In Weekly #001’s chapter “Computer Use 正在怎样改变 Vibe Coding 的验收” ([Chinese transcript](/weekly/001/transcript#chapter-04)), [Xiangyang Qiaomu notes that a model had been open on OpenRouter for a long time, supporting global usage at 66T tokens per week, to the point that people on X speculated about who was behind it](/weekly/001/transcript#quote-04eb570f7407d93d51be) — a retelling of public platform statistics.
- In Weekly #001’s chapter “当所有模型都差不多，用户该如何选择”, [Orange argues that letting everyone use a model for free on OpenRouter is the fairest possible testing method, better than any benchmark](/weekly/001/transcript#quote-8e051d18a5e240b395d3) — an opinion.
- In Weekly #001’s chapter “Hugging Face 的价值，以及英伟达为何要为产业托底”, Yang Pan and Guizang discuss OpenRouter’s acquisition; Guizang argues [the rise of Chinese open models raised the value of this kind of open-model infrastructure](/weekly/001/transcript#quote-b6e2995f4273bcefb519).
- In Weekly #001’s chapter “Token Is New Money：买 Mac Studio 像在家里'铸币'”, [Orange comments that Stripe buying OpenRouter makes sense: Stripe handles money, and tokens are money](/weekly/001/transcript#quote-ebd320ef41ad24c06f00).

## Frequently asked questions

### What is OpenRouter?

OpenRouter is a model routing platform that aggregates hundreds of models from many providers behind one OpenAI-compatible unified API, adding routing, fallbacks, and cost tracking. The official site is [openrouter.ai](https://openrouter.ai/).

### Where do I create an OpenRouter API key?

Sign up for an OpenRouter account and create a key in the official account console, then follow the [official quickstart](https://openrouter.ai/docs/quickstart) to configure the base URL `https://openrouter.ai/api/v1` and Bearer authentication.

### How is OpenRouter priced?

You pay per token, with no markup on the provider’s price according to OpenRouter; models with a `:free` suffix are free. Current per-model rates are in the [official pricing documentation](https://openrouter.ai/docs/api-reference/overview).

### How does OpenRouter differ from calling a provider’s API directly?

The difference is at the integration layer: OpenRouter covers many providers with one endpoint, one bill, and one SDK, lets you switch models without code changes, and routes around a single provider’s outages and rate limits. Model behavior depends on the upstream provider. Billing remains per token.

### Did Stripe really acquire OpenRouter?

In August 2026, Bloomberg and The Wall Street Journal reported that Stripe had finalized a deal to acquire OpenRouter for more than $7 billion. Deal details should be confirmed against official announcements from both companies.

## Sources

- [OpenRouter official site](https://openrouter.ai/)
- [OpenRouter quickstart documentation](https://openrouter.ai/docs/quickstart)
- [OpenRouter model catalog](https://openrouter.ai/models/)
- [Wikipedia: OpenRouter](https://en.wikipedia.org/wiki/OpenRouter)
