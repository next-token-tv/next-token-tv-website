---
entityType: product
entity: gpt
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'GPT model family: current models, developer API, and how it differs from ChatGPT | Next Token Wiki'
seoDescription: 'Learn which models make up OpenAI’s GPT family today, how developers access and pay for the API, and what the Weekly show said about GPT-6 Astra.'
---

## What the GPT model family is

GPT is [OpenAI’s](/en/wiki/brands/openai) family of general-purpose models; this page covers the models themselves and the developer interface. It sits at a different layer from [ChatGPT](/en/wiki/products/chatgpt): ChatGPT is the assistant product for individuals and organizations, while GPT is the model layer behind such products, also exposed to developers through the [OpenAI API platform](https://platform.openai.com/docs/overview).

As of September 2026, the official model catalog lists the flagships GPT-6 Astra (`gpt-6-astra`) and GPT-5.6 Sol, GPT-5.6 Terra, and GPT-5.6 Luna, plus specialized image, realtime voice, and transcription models. Flagship models support reasoning and tools including function calling, web search, file search, and computer use. The [GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/) describes it as the successor to GPT-5.6 Sol, rolling out first to a limited set of organizations and then to all ChatGPT Plus, Pro, Business, and Enterprise users over the following days, available through the OpenAI API, Microsoft Azure, and AWS Bedrock; Enterprise workspaces have access off by default at launch. Model names, availability, and pricing change, so check the [official model catalog](https://developers.openai.com/api/docs/models) before relying on any of this.

## Uses and boundaries

The same name covers two typical uses: end users pick a model inside ChatGPT for Q&A, writing, and analysis, while developers create an API key on the [OpenAI API platform](https://platform.openai.com/docs/overview) and integrate the models into their own applications and agent workflows. The full coding agent for software development is a separate product, [Codex](/en/wiki/products/codex), which is likewise built on these models.

Do not infer capability from a model name: models in the family target different tasks and cost tiers and are updated on a rolling basis. ChatGPT subscriptions and API usage are billed separately — API usage is not included in a ChatGPT plan. Available features also depend on account type, region, and organization policy; for example, the announcement states that Enterprise workspaces have GPT-6 Astra access off by default and an admin must enable it.

## Discussion in the show

Weekly #002 was recorded on the day GPT-6 Astra launched. In the chapters “GPT-6 Astra：从 3D 建模聊起” (GPT-6 Astra: starting from 3D modeling) and “Blender 与代码：给模型合适的工具” (Blender and code: giving the model the right tools), [Guizang describes using Astra for 3D and modeling](/weekly/002/transcript#quote-ccd9509479ed2535f667) and [gives his overall assessment](/weekly/002/transcript#quote-7befc13448a71232968f): no obvious gap versus Fable in his own agent work, but a major opportunity in multimodal and 3D; he also observed GPT-6 modeling through Blender’s Python interface — writing code rather than clicking the UI, which kept token usage low. Juzi [relays a new benchmark comparison](/weekly/002/transcript#quote-33f1c0f172adba1f8820) saying 3D and Computer Use are where Astra clearly stands out. Yang Pan [describes producing and publishing the first episode and the website entirely with Astra](/weekly/002/transcript#quote-0b24d683e735d5c62dfa) and [relays news of OpenAI’s earlier acquisition of a computer-control team and a bulk Mac purchase](/weekly/002/transcript#quote-f330240dcedd74d8282d), adding his own guess that it relates to training agents — that part is hearsay plus speculation. See the [3D modeling chapter](/weekly/002/transcript#chapter-03), the [Blender chapter](/weekly/002/transcript#chapter-04), and the [podcast-production chapter](/weekly/002/transcript#chapter-05) of the Chinese transcript.

The show also covered weaknesses. In the writing chapter, [Yang Pan argues GPT is poor at writing](/weekly/002/transcript#quote-34c317c8a5029b292b96), and Juzi adds that novel writing only became viable from GPT 5.5 onward while domestic models still could not write Chinese web novels. In the image-editing chapter, [Yang Pan cites unchanged regions staying perfectly stable across successive edits](/weekly/002/transcript#quote-cc4aeb196c25c1de5bc7) as the strength of GPT Image 2.5 (the official GPT-Image-2.5 image series), while Guizang points to lingering artifacts and aesthetics issues. In the chapter on models “getting dumber,” [Yang Pan argues the perception is more likely caused by bugs](/weekly/002/transcript#quote-86a3925861994bcf720c), noting that both Claude and GPT had waves of user complaints traced to bugs and fixed this year; the community “Juice value” claims Xiangyang Qiaomu relays remain unverified community lore. See the [writing](/weekly/002/transcript#chapter-07), [image](/weekly/002/transcript#chapter-22), and [model-perception](/weekly/002/transcript#chapter-26) chapters of the Chinese transcript.

On the timeline: Weekly #001’s “Computer Use 正在怎样改变 Vibe Coding 的验收” (how Computer Use is changing vibe-coding acceptance) was recorded before GPT-6 launched, with [Guizang relaying claims about its new architecture](/weekly/001/transcript#quote-7d08f4942f9c4081ee94); by Weekly #002’s recording day, Astra had shipped. These are participant experiences, retellings, and predictions from the Chinese transcript — not official endorsements or independent evaluations.

## Frequently asked questions

### How is GPT different from ChatGPT?

GPT is OpenAI’s model family; ChatGPT is OpenAI’s assistant product built on those models. The same models can be used directly inside ChatGPT or called separately by developers: [ChatGPT](/en/wiki/products/chatgpt) is billed to users through plans, while API usage is billed separately on the [OpenAI API platform](https://platform.openai.com/docs/overview).

### What is the newest GPT model?

As of September 2026, the newest model in the [official catalog](https://developers.openai.com/api/docs/models) is GPT-6 Astra (`gpt-6-astra`). The announcement says it rolled out first to a limited set of organizations and then to ChatGPT paid plans over the following days; whether your account can select it depends on what [ChatGPT](https://chatgpt.com/) and the catalog actually show you.

### Which models make up the GPT-5.6 series?

The [official model catalog](https://developers.openai.com/api/docs/models) lists three: GPT-5.6 Sol (flagship for complex professional work), GPT-5.6 Terra (balances intelligence and cost), and GPT-5.6 Luna (optimized for cost-sensitive workloads). Context limits and rates for each are as currently labeled in the catalog.

### Where do I get a GPT API key?

Register on the [OpenAI API platform](https://platform.openai.com/docs/overview) and create an API key, then pick a model as described in the [model documentation](https://developers.openai.com/api/docs/models). API keys and ChatGPT subscriptions are separate; keep the key out of public pages and repositories.

### How is the GPT API priced?

The API charges per input and output token, with rates varying by model; ChatGPT plans and the API are separate billing systems. Current per-model pricing is listed in the [official model catalog](https://developers.openai.com/api/docs/models).

### Why do searches for “GPT” return unrelated results?

GPT has entirely different meanings in other fields (a medical test marker, a disk partition table format), so same-name content mixes into results. To find OpenAI’s models, add words like OpenAI, AI, or ChatGPT to the query, or go straight to [openai.com](https://openai.com/).

## Sources

- [OpenAI model catalog](https://developers.openai.com/api/docs/models)
- [GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/)
- [OpenAI API platform documentation](https://platform.openai.com/docs/overview)
- [OpenAI developer documentation](https://developers.openai.com/)
