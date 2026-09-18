---
entityType: product
entity: muse
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Meta Muse: The Developer-Facing Multimodal Model Family | Next Token Wiki'
seoDescription: 'Meta Muse explained: family members (Muse Spark 1.3, Muse Voice Transcribe, Muse Image, Muse Glimmer), developer access, preview status, and the Weekly show discussion.'
---

## What is Muse

Muse is a developer-facing model family from [Meta](/en/wiki/brands/meta). The [official page](https://ai.meta.com/llama/) (hosted under ai.meta.com/llama/) presents it with the headline "Your next build starts with Muse" and lists:

- Muse Spark 1.3: a coding model trained for long-horizon, agentic workflows, which the official page says tracks context and prior results, works through messy or conflicting inputs, and asks for input when needed; it has native multimodal perception across video, images, and documents. The page labels it Public preview with expanded global access.
- Muse Voice Transcribe: a streaming speech transcription model.
- Muse Image: an image generation model the page calls "agentic image gen", served through the Meta Model API.
- Muse Glimmer: an open-weight model built for local agents.

Developer components include Muse Code (a CLI coding agent, listed for macOS and Windows), the Meta Model API for direct self-serve access, and OpenRouter as an access path for Spark. The page also keeps Llama 4 and Llama 3 in its navigation.

One caveat: Weekly show participants discussed "Muse" as if it were a personal-assistant product (see below), while the official site's subject is a developer model family with APIs; the actual mapping should follow official material.

## Use and boundaries

- Access: the Meta Model API provides direct, self-serve access to Spark; official cookbooks cover OpenAI SDK-compatible clients, multi-agent orchestration, computer use, GitHub agents, and search grounding; Spark can also be routed into existing tools through OpenRouter.
- Status boundaries: the official page labels Muse Spark as Public preview — a pre-release form that should not be described as generally available. Model names, statuses, and availability are governed by the live [official page](https://ai.meta.com/llama/).
- Performance and pricing claims: statements such as "performs competitively with frontier models across several coding evals" are Meta's own framing; the official page lists the metered prices for Voice Transcribe and Image.

## Mentioned on Next Token

In the opening model roundup of Weekly #001, [Yang Pan said "just before we recorded, Gemini 3.8 Flash was released last night, and right after it topped the benchmark, Meta's Muse Spark 1.3 was released"](/weekly/001/transcript#quote-1c1a629c363571d067b1), and [listed Meta's Muse Voice Transcribe among the week's smaller releases](/weekly/001/transcript#quote-a05a9b1877aa0566a687).

In the chapter “语音与多模态模型为什么仍然难用” (“Why speech and multimodal models remain hard to use”), [Xiangyang Qiaomu asked "why did both of them ship one? Gemini and Muse both put out speech transcription models"](/weekly/001/transcript#quote-80c05d9d7a5eaf6f5200); Orange considered such releases "small, done on the side" and said Doubao's transcription already led in China. This is casual discussion of release cadence, not a capability review.

The Weekly #002 chapter [Grok Bot / Muse：为什么 Agent 需要云电脑](/weekly/002/transcript#chapter-13) (“Grok Bot / Muse: why agents need cloud computers”) placed Muse in an agent-and-cloud-computer context: [Xiangyang Qiaomu said "Meta also released one called Muse", framing it as a return to the chatbot](/weekly/002/transcript#quote-5370d8756a780c47b0b1); [Orange understood it as "still more personal — I think it's free to use as well. It's positioned differently from Grok Bot; more like an American Doubao"](/weekly/002/transcript#quote-e05b4279cf60687bde0c).

In the chapter “Agent 服务会成为新的云基础设施吗” (“Will agent services become the new cloud infrastructure”), [Orange listed features such as connecting email, calendar, shopping and payments, and health](/weekly/002/transcript#quote-6078d54926488c588306); [after Yang Pan pinned down the context he asked "isn't Muse copying WorkBuddy then?"](/weekly/002/transcript#quote-43c2cd9360a93e872d2b), and Orange judged it quite different from [WorkBuddy](/en/wiki/products/workbuddy). In this discussion Muse pointed toward a personal-assistant form that does not fully match the official developer positioning; the [comparison with Grok Bot](/en/wiki/products/grok-bot) belongs to the same context. All of it reflects the participants' views.

## FAQ

### What is Muse to Meta?

A developer-facing model family presented on ai.meta.com/llama/ under "Your next build starts with Muse", with members including Muse Spark 1.3, Muse Voice Transcribe, Muse Image, and Muse Glimmer, plus the Muse Code CLI and the Meta Model API.

### What is Muse Spark 1.3?

Per the official page, a coding model for long-horizon agentic workflows with native multimodal perception (video, images, documents) that "performs competitively with frontier models across several coding evals" (Meta's own framing). The page labels it Public preview, meaning a pre-release form rather than general availability.

### How much does Muse cost?

The Meta Model API offers self-serve access; the official page lists metered prices for Muse Voice Transcribe and Muse Image (as of September 2026 the page shows $0.18/hour for transcription and $0.01 per image). Current prices and billing are on the [official page](https://ai.meta.com/llama/).

### Is Muse an AI assistant, like Grok Bot?

The official site presents Muse as a developer model family, not a messaging-style assistant. On Weekly #002, participants read it as "more personal" and "like an American Doubao", positioned differently from [Grok Bot](/en/wiki/products/grok-bot)'s persistent cloud computers — these are show opinions, and the product's actual form should follow official material.

### How do Muse and Llama relate?

Both live within Meta's official page system: Muse is presented on the ai.meta.com/llama/ page, which keeps Llama 4 and Llama 3 in its navigation. Meta does not state a replacement or subordination relationship; defer to official documentation when integrating.

## Sources

- [Meta: Muse official page (ai.meta.com/llama/)](https://ai.meta.com/llama/)
