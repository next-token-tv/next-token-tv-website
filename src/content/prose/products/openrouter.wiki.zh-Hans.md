---
entityType: product
entity: openrouter
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'OpenRouter：统一 API 接入多家模型供应商｜Next Token Wiki'
seoDescription: '了解 OpenRouter 的统一 API、计费方式、API Key 入口与收购报道，以及 Next Token 节目中对 OpenRouter 的讨论。'
---

## OpenRouter 定位

OpenRouter 是一个模型路由平台：开发者在 [openrouter.ai](https://openrouter.ai/) 通过一个 OpenAI 兼容的统一 API 调用多家供应商的数百个模型，由平台提供路由、故障转移和成本跟踪。公司 2023 年由 Alex Atallah 与 Louis Vichy 创立，总部位于纽约。2026 年 8 月，据彭博社与《华尔街日报》报道，Stripe 已敲定以超过 70 亿美元收购 OpenRouter 的交易。

## 使用与边界

- 接口：官方[快速入门](https://openrouter.ai/docs/quickstart)给出的基础地址是 `https://openrouter.ai/api/v1`，聊天端点为 `/api/v1/chat/completions`，模型以 `供应商/模型` 形式指定；切换模型不需要改代码，出故障时可以自动转移到其他供应商。
- 计费：按 Token 用量计费，官方称不在供应商价格上加价，带 `:free` 后缀的模型免费使用；当前费率见[官方价格页](https://openrouter.ai/docs/api-reference/overview)与各模型页面。
- API Key：注册后在官方账户控制台创建，请求中以 Bearer Token 方式携带；密钥不要放进公开代码或网页。
- 其他：模型目录与排名见 [openrouter.ai/models](https://openrouter.ai/models/)，官方还提供面向 Agent 的 MCP server 和在自己的提示词上评测模型的工具。

## 节目中的讨论

- Weekly #001 第 4 章“Computer Use 正在怎样改变 Vibe Coding 的验收”中，[向阳乔木提到某模型在 OpenRouter 上开放很久、支撑全球使用，一周消耗 66T Token，以至 X 上有人推测模型背后是谁](/weekly/001/transcript#quote-04eb570f7407d93d51be)。这是对平台公开统计的转述。
- Weekly #001 第 8 章“当所有模型都差不多，用户该如何选择”中，[橘子认为在 OpenRouter 里免费让大家用，是比 Benchmark 更公平合理的测试方法](/weekly/001/transcript#quote-8e051d18a5e240b395d3)。这是观点。
- Weekly #001 第 26 章“Hugging Face 的价值，以及英伟达为何要为产业托底”中，杨攀和歸藏谈到 OpenRouter 被收购，歸藏认为[中国开源模型的兴起提升了这类开源模型基建的价值](/weekly/001/transcript#quote-b6e2995f4273bcefb519)。
- Weekly #001 第 28 章“Token Is New Money：买 Mac Studio 像在家里'铸币'”中，[橘子点评 Stripe 收购 OpenRouter：Stripe 管钱，而 Token 就是钱](/weekly/001/transcript#quote-ebd320ef41ad24c06f00)。

## 常见问题

### OpenRouter 是什么？

OpenRouter 是一个模型路由平台，用统一的 OpenAI 兼容 API 聚合多家供应商的数百个模型，提供路由、故障转移与成本跟踪。官网是 [openrouter.ai](https://openrouter.ai/)。

### OpenRouter API Key 在哪里创建？

注册 OpenRouter 账户后，在官方账户控制台创建 API Key，然后按[官方快速入门](https://openrouter.ai/docs/quickstart)配置基础地址 `https://openrouter.ai/api/v1` 与 Bearer 认证。

### OpenRouter 怎么收费？

按 Token 用量计费，官方称不在供应商价格上加价；带 `:free` 后缀的模型可免费使用。各模型当前费率见[官方价格说明](https://openrouter.ai/docs/api-reference/overview)。

### OpenRouter 和直接调用厂商 API 有什么区别？

主要差别在接入层：OpenRouter 用一个端点、一份账单和一套 SDK 覆盖多家供应商，换模型不改代码，并能绕开单家供应商的故障与限流；模型本身的输出和官方直连一致与否取决于上游供应商。计费仍按 Token 用量。

### Stripe 收购 OpenRouter 是真的吗？

2026 年 8 月，彭博社与《华尔街日报》报道 Stripe 已敲定以超过 70 亿美元收购 OpenRouter 的交易。交易细节以双方官方公告为准。

## 来源

- [OpenRouter 官网](https://openrouter.ai/)
- [OpenRouter 快速入门文档](https://openrouter.ai/docs/quickstart)
- [OpenRouter 模型目录](https://openrouter.ai/models/)
- [Wikipedia: OpenRouter](https://en.wikipedia.org/wiki/OpenRouter)
