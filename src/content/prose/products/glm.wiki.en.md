---
entityType: product
entity: glm
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'GLM Model Family: Z.ai Models, API, and Open Weights｜Next Token Wiki'
seoDescription: 'The GLM model family by Z.ai: how the models, developer API, open weights, and GLM Coding Plan fit together, plus related discussions on the Next Token Weekly show.'
---

## What is the GLM model family

GLM is the general model family of [Z.ai](/en/wiki/brands/zhipu), covering language, visual understanding, and generation. It powers Z.ai's own products and is offered to the outside world through an API and open weights. Z.ai's product layers follow one model line: a consumer chat assistant (Zhipu Qingyan / ChatGLM, internationally at [z.ai](https://z.ai/)); a developer API (the BigModel open platform in China, with the API documented for international users at [docs.z.ai](https://docs.z.ai/)); and agent products built on these models, such as the coding environment [ZCode](/en/wiki/products/zcode) and the device-operating [AutoGLM](/en/wiki/products/autoglm). Company background and the full product line are covered in the Z.ai brand entry; this entry focuses on the model family and its developer interface.

The GLM-5 series is the current flagship line. According to the official release notes, GLM-5 was released on February 12, 2026, and GLM-5.2 on June 16, 2026; GLM-5.3 followed on August 18, 2026, positioned by Z.ai as the flagship for complex software engineering and agentic capabilities, and GLM-5.3-Flash on August 26, 2026 as the first natively multimodal model in the GLM-5 series. Beyond language models, the API also serves vision models (GLM-4.6V, GLM-OCR), image generation, and speech recognition. Models and prices change, so the official documentation is the reference.

## Uses and boundaries

Developers call the models through the API using lowercase model IDs: the flagship `glm-5.3` accepts text-only input and is documented with a 1M-token context window, reasoning always enabled, and three reasoning-effort levels (`low`, `high`, `max`); `glm-5.3-flash` and the faster `glm-5.3-flashx` accept video, image, text, and file input, and are documented with 320B total parameters and 18B activated, using a hybrid of sparse and linear attention. These specifications follow the [official model documentation](https://docs.z.ai/guides/llm/glm-5.3.md) and should not be inferred from model names.

On the open-weights side, GLM models are published under the [zai-org](https://huggingface.co/zai-org) organization on Hugging Face; per the official blog, GLM-5.3-Flash is released under the MIT license. Self-hosting requires checking each model card for license, hardware requirements, and inference-framework support.

For coding, Z.ai offers the GLM Coding Plan, a monthly subscription that lets subscribers call GLM-5.3 and GLM-5.3-Flash from tools such as ZCode, Claude Code, Cline, and OpenCode; the subscription and pay-as-you-go API billing are different payment models. Installation and usage of ZCode are covered in the [ZCode entry](/en/wiki/products/zcode); comparisons with other Chinese model families such as [Qwen](/en/wiki/products/qwen) and [DeepSeek](/en/wiki/products/deepseek) are covered in their own entries.

## Mentioned on the show

In the Weekly #001 model round-up, Yang Pan [listed the "GLM 5.3 Flash that got very hot over the past week — known to everyone as 'Niulai'"](/weekly/001/transcript#quote-444d2f8b219e819e8720) in Chinese transcript and [noted that Z.ai 5.3 was subsequently open-sourced](/weekly/001/transcript#quote-dbc803d85a93950cf75d). In the chapter "GLM 5.3 Flash 与 MiniMax H3，便宜模型为何更容易进入真实使用" (GLM 5.3 Flash and MiniMax H3: why cheap models reach real usage first), Guizang [argued that capable-but-cheap models get real adoption because "many things people simply can't afford, so nobody pays attention"](/weekly/001/transcript#quote-881880fdb8b857214f65) in Chinese transcript; Yang Pan added that he [tried 5.3 Flash locally as one of the models a 256 GB machine can run](/weekly/001/transcript#quote-db0d856b6db3893cf011).

In the same episode's "Computer Use 正在怎样改变 Vibe Coding 的验收" (How Computer Use is changing Vibe Coding acceptance) chapter, Yang Pan [contrasted "Niulai" with Gemini as two routes: Gemini pushes speed while Z.ai goes for affordability and opens up supply](/weekly/001/transcript#quote-c6e35f7aa3659816e709) in Chinese transcript; Orange [attributed it to the new architecture, native multimodality, being "small and strong"](/weekly/001/transcript#quote-023ef7b30e402b826cc4); and Xiangyang Qiaomu [mentioned its long availability on OpenRouter serving global usage, which led some to speculate it was not a Chinese model](/weekly/001/transcript#quote-04eb570f7407d93d51be). In "当所有模型都差不多，用户该如何选择" (When all models are similar, how should users choose), Guizang [called free public trial a good move by Z.ai, since trying models itself costs money](/weekly/001/transcript#quote-e51e5d1462803b9739c6).

On combining models with tools, Guizang [reported high token consumption when using "Niulai" for multimodal tasks inside ZCode, running short of his plan's quota](/weekly/001/transcript#quote-10a029bbadfcaf889bc2) in Chinese transcript. Yang Pan [said "Niulai" at its price is much stronger than Claude 3.5](/weekly/001/transcript#quote-d63b1169039a106ffbca), while Guizang [countered that GLM 5.3 Flash supply was actually short, leaving no room for discounts](/weekly/001/transcript#quote-42c999dfb0219fe73b64).

In Weekly #002, the chapter "能力够用之后，测试与交付成为瓶颈" (Once capability suffices, testing and delivery become the bottleneck) [debated whether a newer model would displace "Niulai" as the new baseline; Yang Pan considered "Niulai" still somewhat slow](/weekly/002/transcript#quote-c1f3e38683f1e343c1e8) in Chinese transcript ([continuation](/weekly/002/transcript#quote-15e650c6078b2a405eb5)). In "Mistral、Kimi 与模型产品的不同选择" (Mistral, Kimi, and different model-product choices), Orange [relayed Tang Jie's remarks about GLM 6, saying "the next GLM 6 should be coming"](/weekly/002/transcript#quote-849ebf0fa658c5107cab) — an expectation about an unreleased product, not a statement about shipped features. See the [Weekly #001 GLM 5.3 Flash chapter](/weekly/001/transcript#chapter-03) and the [corresponding Weekly #002 chapter](/weekly/002/transcript#chapter-27).

## FAQ

### What is the GLM model and who develops it?

GLM is a general large-model family developed by Z.ai, covering language, multimodal understanding, and generation. See the [Z.ai brand entry](/en/wiki/brands/zhipu) for company background. Searching "GLM" can also surface the actress Gwei Lun-mei or the OpenGL Mathematics library — same-name ambiguity, not the model.

### Where is the GLM website and can I try it for free?

Consumers can use the international entry [z.ai](https://z.ai/) or the domestic chat product Zhipu Qingyan; some models have free tiers (such as GLM-4.7-Flash). The currently available models and free options are listed in the [official documentation](https://docs.z.ai/) and its pricing page.

### Where do I get a GLM API key?

In China, register and create a key on the [BigModel open platform](https://bigmodel.cn/); internationally, follow the getting-started flow in the [Z.AI API documentation](https://docs.z.ai/), then call the API with a model ID such as `glm-5.3`. Never put API keys in public pages or public repositories.

### What is the latest GLM model right now?

As of September 2026, the official documentation lists GLM-5.3 (model ID `glm-5.3`) as the flagship, alongside GLM-5.3-Flash and GLM-5.3-FlashX. The family updates continuously; check the [official release notes](https://docs.z.ai/release-notes/new-released.md) and [pricing page](https://docs.z.ai/guides/overview/pricing.md) for the current list.

### What is the GLM Coding Plan, and how is it different from pay-as-you-go API billing?

The GLM Coding Plan is a monthly subscription for coding scenarios that calls GLM-5.3 and GLM-5.3-Flash from tools including ZCode, Claude Code, Cline, and OpenCode. Pay-as-you-go API billing charges per token and suits applications you build yourself. Plan tiers and quotas are described in the [official Devpack documentation](https://docs.z.ai/devpack/overview.md); current rates live on the official pages.

### Where can I download GLM open weights?

From the [zai-org organization on Hugging Face](https://huggingface.co/zai-org). Per the official blog, GLM-5.3-Flash is under the MIT license; before self-hosting, check the specific model card for license and hardware requirements.

## Sources

- [Z.AI API documentation: GLM-5.3 model page](https://docs.z.ai/guides/llm/glm-5.3.md)
- [Z.AI API documentation: GLM-5.3-Flash/FlashX model page](https://docs.z.ai/guides/vlm/glm-5.3-flash.md)
- [Z.AI API documentation: release notes](https://docs.z.ai/release-notes/new-released.md)
- [Z.AI API documentation: GLM Coding Plan (Devpack) overview](https://docs.z.ai/devpack/overview.md)
- [Z.AI API documentation: pricing](https://docs.z.ai/guides/overview/pricing.md)
- [GLM-5.3-Flash official blog post](https://z.ai/blog/glm-5.3-flash)
- [Hugging Face: zai-org organization](https://huggingface.co/zai-org)
- [BigModel open platform](https://bigmodel.cn/)
