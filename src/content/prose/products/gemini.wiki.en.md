---
entityType: product
entity: gemini
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Gemini: Google’s multimodal model and assistant family, API, and boundaries | Next Token Wiki'
seoDescription: 'Learn how Gemini is offered as an assistant and model family, where the API documentation lives, and how to verify model status.'
---

## What Gemini is

Gemini is Google’s family of multimodal AI models and assistants. It includes a user-facing Gemini product and the Gemini API for developers. Google’s model documentation distinguishes stable, preview, and other lifecycle states; versions, aliases, and availability change, so use the [current model list](https://ai.google.dev/gemini-api/docs/models) as the source of truth.

## Uses and boundaries

Gemini can support conversation, text and code generation, and supported image, audio, or other multimodal inputs. The [Gemini API reference](https://ai.google.dev/api) covers standard, streaming, live, batch, and embedding interfaces, and Google AI Studio can create an API key. Whether a model supports a particular input, tool, or stability level cannot be inferred from the Gemini family name.

Applications still own authentication, rate limits, data governance, output checks, and retries. Creative and content workflows also depend on input quality and process design; model documentation is not a guarantee for every task.

## Discussion in the show

In Weekly #002’s chapter “Writing experience: every model has its strengths,” Xiangyang Qiaomu relays a friend’s experience using Gemini to write website content. See the [Chinese transcript chapter](/weekly/002/transcript#chapter-07); an English transcript chapter is not available.

## Frequently asked questions

### Where are the Gemini website and app?

The user-facing entry is [gemini.google.com](https://gemini.google.com/), while Google’s Gemini pages provide web and app access. Developers should start with the [Gemini API reference](https://ai.google.dev/api).

### What can Gemini handle?

Supported inputs and outputs depend on the selected model and endpoint, including text, code, and some image, audio, and other multimodal tasks. Check the model list for endpoint and capability details rather than applying one model’s support to the whole family.

### Where do I get a Gemini API key, and is the API free?

Create a key in [Google AI Studio](https://aistudio.google.com/). Gemini API has a Free Tier and a Paid Tier with billing; eligible models, limits, and billing rules are listed on the current [pricing page](https://ai.google.dev/gemini-api/docs/pricing).

### How are the Gemini app and API different?

The Gemini app is the user-facing assistant; the API is the developer interface for calling models from an application, with AI Studio, API keys, and separate usage and billing rules.

### Why do Gemini model names change?

Google’s model list distinguishes stable, preview, latest, and experimental versions and marks deprecated models. For production, use the exact model string in the current documentation and monitor deprecation notices instead of relying on an old tutorial alias.

## Sources

- [Gemini](https://gemini.google.com/)
- [Google AI for Developers: Gemini models](https://ai.google.dev/gemini-api/docs/models)
- [Gemini API reference](https://ai.google.dev/api)
