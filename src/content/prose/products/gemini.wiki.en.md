---
entityType: product
entity: gemini
locale: en
slot: wiki
updatedAt: '2026-11-16'
seoTitle: 'Gemini: Google’s multimodal model and assistant family, API, and boundaries | Next Token Wiki'
seoDescription: 'Learn how Gemini is offered as an assistant and model family, where the API documentation lives, and how to verify model status.'
---

## What Gemini is

Gemini is Google’s family of multimodal AI models and assistants. It includes a user-facing Gemini product and the Gemini API for developers. Google’s model documentation distinguishes stable, preview, and other lifecycle states; versions, aliases, and availability change, so use the [current model list](https://ai.google.dev/gemini-api/docs/models) as the source of truth.

## Uses and boundaries

Gemini can support conversation, text and code generation, and supported image, audio, or other multimodal inputs. The [Gemini API reference](https://ai.google.dev/api) covers standard, streaming, live, batch, and embedding interfaces, and Google AI Studio can create an API key. Whether a model supports a particular input, tool, or stability level cannot be inferred from the Gemini family name.

Applications still own authentication, rate limits, data governance, output checks, and retries. Creative and content workflows also depend on input quality and process design; model documentation is not a guarantee for every task.

## Discussion in the show

In Weekly #002’s chapter “写作体验：不同模型各有所长” (Writing experience: every model has its strengths), Xiangyang Qiaomu relays a friend’s experience using Gemini to write website content. See the [Chinese transcript chapter](/weekly/002/transcript#chapter-07); an English transcript chapter is not available.

In Weekly #006’s chapter “模型体验的两极：最强能力、等待时间与便宜模型的生态位” (The two ends of the model experience: top capability, wait times, and the niche of cheap models), Xiangyang Qiaomu mentions “比如说 Gemini 4，就 [Argon](/weekly/006/transcript#quote-69000da3dd4cf2888cd0)。那个模型好像没什么人讨论” (for example Gemini 4 — that is, Argon; that model seems to get little discussion) and explains the element naming with “[氩（Argon）不是那个惰性气体嘛](/weekly/006/transcript#quote-8104004a63a54f3941b1)” (you know, argon — that inert gas), both in the Chinese transcript.

Weekly #010’s chapter “[Carbon 体验：写作的人味与设计、编码能力](/weekly/010/transcript#chapter-17)” (The Carbon experience: human touch in writing, plus design and coding) is devoted to Gemini 4 Carbon. Orange calls it “是 Google 憋了一年，终于放出来一个能用的” (the model Google held back for a year and finally shipped something usable) ([see the line](/weekly/010/transcript#quote-47969f4ef8b09bb03ff9)) and shares his experience writing fiction and redesigning an interface with it; Xiangyang Qiaomu points out the naming logic — “[Carbon 应该是碳的意思吧……另外它有一个轻量级的模型叫 Hydrogen](/weekly/010/transcript#quote-87e0b3aeb41f33a460ca)，是吧？那氢气的意思” (Carbon should mean carbon… and it has a lightweight model called Hydrogen — hydrogen, right?), in the Chinese transcript. These remarks are the participants’ own assessments.

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

### How are Gemini 4 models named?

The official model documentation lists element-named models such as [Gemini 4 Carbon and Gemini 4 Argon](https://ai.google.dev/gemini-api/docs/models) (model strings like gemini-4-carbon, gemini-4-argon, and gemini-4-hydrogen); naming and availability follow the [current model list](https://ai.google.dev/gemini-api/docs/models). The show participants discussed these names too: episode 006 mentions Gemini 4 Argon (argon), and episode 010 covers Gemini 4 Carbon (carbon) and the lightweight Hydrogen (hydrogen).

## Sources

- [Gemini](https://gemini.google.com/)
- [Google AI for Developers: Gemini models](https://ai.google.dev/gemini-api/docs/models)
- [Gemini API reference](https://ai.google.dev/api)
