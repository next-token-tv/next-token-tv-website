---
entityType: product
entity: qwen
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Qwen (Tongyi Qianwen): model family, open weights, and the Alibaba Cloud API | Next Token Wiki'
seoDescription: 'How the Qwen model family is distributed through open weights and the Alibaba Cloud Model Studio API, how its snapshot naming works, and what the Weekly show discussed.'
---

## What the Qwen model family is

Qwen (Chinese name Tongyi Qianwen) is Alibaba’s general-purpose model family spanning language, vision, and video understanding. It is distributed in two ways: open-weight models are published under the Qwen organization on Hugging Face for local deployment, while hosted access is provided through the official site [qwen.ai](https://qwen.ai/) and Alibaba Cloud Model Studio’s API. The end-user chat product and the developer-facing model interface are separate layers with different names, versions, and entry points.

The family uses both "Qwen" and "Tongyi Qianwen," and model IDs are lowercase (for example, `qwen3.8-max`). Some models use dated snapshot names that roll forward (such as snapshot `qwen3.8-max-2026-09-02`, alias 0902), so any discussion of a specific model should reference the model ID and official documentation rather than a marketing name.

## Usage and boundaries

Regular users access chat, writing, translation, and summarization through [qwen.ai](https://qwen.ai/) and the official app. Developers register with Alibaba Cloud Model Studio, create an API key, and call models by ID. Taking `qwen3.8-max` as an example, the official documentation positions it as a flagship model for professional work such as law, finance, and design, with a documented 1,000,000-token context window and support for function calling, structured outputs, context caching, and web search. These attributes follow the documentation’s current wording and cannot be inferred from the model name alone.

On the open-weight side, Qwen publishes downloadable models on Hugging Face. [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next), released in August 2026, is labeled on its official model card as an "experimental preview of the architecture that will underpin Qwen4" (tagged `qwen4_exp`) and is experimental by design; the production variant of the same series, Qwen3.8-Flash, is served through Qwen’s cloud service. Check the model card’s license and positioning before using the experimental preview in production.

In Chinese-language model comparisons, Qwen is frequently discussed alongside other Chinese model families such as [Kimi](/en/wiki/products/kimi), [GLM](/en/wiki/products/glm), [DeepSeek](/en/wiki/products/deepseek), and [Hunyuan](/en/wiki/products/hunyuan); each family’s positioning and tiers are covered in their own entries.

## Discussion in the show

In Weekly #001’s chapter “当所有模型都差不多，用户该如何选择” (When all models look alike, how should users choose), Orange, speaking from his own product Cola’s free-model usage data, [observed that Qwen’s Flash model drew worse user feedback than Z.ai’s Flash yet ranked first in daily consumption](/weekly/001/transcript#quote-b6c4393c01ec9960a865), and [added that the Qwen model was free to use on his platform at the time](/weekly/001/transcript#quote-78388566b2004546da59) — an operator’s observation. In the chapter “滚动发版之后，Benchmark 还有没有意义” (After rolling releases, do benchmarks still matter), Yang Pan [noted that Qwen ships rolling releases under date-style names like 0902 without emphasizing version numbers](/weekly/001/transcript#quote-ea83290f01de720c5c8a). In the chapter “GLM 5.3 Flash 与 MiniMax H3，便宜模型为何更容易进入真实使用” (Why cheap models reach real use first), Yang Pan [said he ran Qwen 27B and 35B locally on a 128GB Mac Studio](/weekly/001/transcript#quote-fd38512a48f266e43abe) and [listed Qwen 3.8 Flash Next among models a 256GB-memory machine can run](/weekly/001/transcript#quote-db0d856b6db3893cf011). In the chapter “为什么 AI 应用团队仍然跑不过模型厂商” (Why AI app teams still can’t outpace model vendors), Guizang [complained that Qwen allows only two concurrent scheduled tasks regardless of how much you pay](/weekly/001/transcript#quote-38e408275441fa0535d4).

In Weekly #002’s chapter “垂直应用的价值：数据、接口与上下文” (The value of vertical apps), Orange [argued that Qwen as a general agent cannot handle shopping on Taobao](/weekly/002/transcript#quote-8e674125c2511a604363) and [that Taobao’s own AI and Fliggy’s AI do better in their respective scenarios](/weekly/002/transcript#quote-8a01d0363c7febd4fae2) — his own observation, not an evaluation. In the chapter “健康数据与日常记录：有用与隐私的边界” (Health data and daily logging), Yang Pan [grouped Chinese product lines into coding-focused Qoder and TRAE versus office-focused Doubao Work and Qwen Office](/weekly/002/transcript#quote-9482dab44286a6da7f20). See the [episode 001 chapter](/weekly/001/transcript#chapter-08), the [rolling-release chapter](/weekly/001/transcript#chapter-13), and the [vertical-apps chapter](/weekly/002/transcript#chapter-16) for the full context; the transcripts are in Chinese and no English transcript is available.

## Frequently asked questions

### Where are the official Qwen / Tongyi Qianwen website and web app?

The official site is [qwen.ai](https://qwen.ai/), which provides the online entry point and app download guidance. Developers use Alibaba Cloud Model Studio, which is a separate entry point.

### Where do I get a Qwen API key?

Register with Alibaba Cloud Model Studio (international documentation at [alibabacloud.com](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max), China site at help.aliyun.com), create an API key, and call models by ID as described in the documentation. Keep the key out of public websites and repositories.

### Which Qwen model is the latest?

As of September 2026, Alibaba Cloud Model Studio documentation lists the flagship `qwen3.8-max` (snapshot `qwen3.8-max-2026-09-02`); on the open-weight side, the August 2026 Hugging Face release is the experimental preview Qwen3.8-Flash-Next. Qwen rolls forward with dated snapshots, so check the [current official model documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max) for the latest listing.

### Where can I download Qwen open weights?

From the [Qwen organization on Hugging Face](https://huggingface.co/Qwen). Distinguish experimental previews from production variants: Qwen3.8-Flash-Next is the officially labeled experimental preview of the Qwen4 architecture under a qwen-community license; review the model card before production use.

### What is the relationship between Qwen and Tongyi Qianwen?

Two names for the same family: Tongyi Qianwen is the Chinese name, and Qwen is the international name and model-ID prefix. Both appear in search results, documentation, and model IDs, and they refer to the same series of models.

## Sources

- [Qwen official website](https://qwen.ai/)
- [Alibaba Cloud Model Studio: qwen3.8-max model documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- [Hugging Face: Qwen3.8-Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- [Hugging Face: Qwen organization](https://huggingface.co/Qwen)
