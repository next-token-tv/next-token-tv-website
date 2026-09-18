---
entityType: product
entity: mistral
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Mistral: the Mistral AI model family, Le Chat, and developer platform | Next Token Wiki'
seoDescription: 'What the Mistral model family covers, Le Chat, the API with Studio/Forge/Vibe product lines, open-weight licensing, pricing entry points, and the Weekly show discussion.'
---

## What Mistral is

Mistral is the model family and AI product line developed by the French company [Mistral AI](/en/wiki/brands/mistral-ai). The name covers three things: a model family mixing open-weight and commercial releases (generalist, OCR, speech, and coding directions), the Le Chat assistant for end users, and the API and platform tools for developers. The official site is [mistral.ai](https://mistral.ai/), with developer documentation at [docs.mistral.ai](https://docs.mistral.ai/). The company emphasizes sovereignty and open weights: an official announcement states it raised €3 billion in Series D funding at a post-money valuation above €21 billion, led by Samsung Electronics, which it calls the largest equity round ever completed by a European technology company.

On the official Models page the family is grouped three ways: generalist models include the open-weight flagship Mistral Large 3, Mistral Medium 3.5, the Apache 2.0 Mistral Small 4, and the edge-focused Ministral series; specialist models include OCR 4.1, the Voxtral speech models, the open-weights coding model Devstral 2, and the low-latency completion model Codestral; and there are experimental or earlier models such as Leanstral and Mistral NeMo. Model names, versions, and licenses change, so check the [official model list](https://docs.mistral.ai/models/overview) before integrating.

## Product forms and access

- Le Chat: the consumer assistant at [chat.mistral.ai](https://chat.mistral.ai/), with iOS and Android apps.
- Developer platform: create API keys and organizations at [console.mistral.ai](https://console.mistral.ai/) and call the API as described in the [API documentation](https://docs.mistral.ai/api/). The official docs summarize the platform as Vibe (a productivity and coding agent), Studio (the console and API), and Admin (organization management).
- Models and deployment: beyond the cloud API, the site offers Forge (custom model training) and AI Cloud (training and inference infrastructure); several models ship as open weights for self-hosting.

Boundaries: model identifiers, licenses, and quotas on the models page and docs change with releases, so verify against the official list before building. Open-weight licenses differ per model (Apache 2.0 and Modified MIT, for example), so read each model's terms before commercial use.

## Discussion in the show

Weekly #002's chapter "Mistral、Kimi 与模型产品的不同选择" (Mistral, Kimi, and models' different choices, in the Chinese transcript) includes Xiangyang Qiaomu [recalling that he used Mistral two or three years ago when building agents, and mentioning the company's recent funding round](/weekly/002/transcript#quote-31beac9863dffb57a0bb); Orange called it "Europe's sovereign large model," and Yang Pan argued its value lies first in Europe needing a homegrown one. Guizang's and Yang Pan's in-episode guesses that the newest model was fine-tuned from another family are speculation, unverified by official sources, and are not adopted here. The same chapter discusses Kimi's release cadence — see the [Kimi](/en/wiki/products/kimi) entry. See the [episode 002 chapter](/weekly/002/transcript#chapter-27); an English transcript is not available.

## Frequently asked questions

### What kind of company is Mistral AI?

Mistral AI is a French AI company developing open and commercial models and services, with a stated emphasis on European sovereign AI and open weights; its products span the Le Chat assistant, the developer API, and enterprise services. See the [official site](https://mistral.ai/).

### Which models does Mistral offer?

The official Models page lists generalist models (Mistral Large 3, Mistral Medium 3.5, Mistral Small 4, Ministral series) and specialist models (OCR 4.1, the Voxtral speech series, Devstral 2, Codestral, and others). Identifiers and licenses change with releases — see the [official model list](https://docs.mistral.ai/models/overview).

### Where do I get a Mistral API key?

Register and create a key at the [official console](https://console.mistral.ai/), then configure the key and API base URL as described in the [official documentation](https://docs.mistral.ai/). Keep the key out of public websites and repositories.

### What is Le Chat?

Le Chat is Mistral AI's consumer assistant, available on the web at [chat.mistral.ai](https://chat.mistral.ai/) and through iOS and Android apps. It is a separate entry point from the developer API platform.

### How is Mistral priced?

Le Chat can be used directly after registration, the developer API is billed by usage, and enterprises have custom arrangements. Current rates and free-tier terms are on the [official pricing page](https://mistral.ai/pricing).

### Does the word "mistral" mean anything else?

Yes. A mistral is a cold northerly wind of southern France, and search results also surface a home-appliance brand of that name; neither is related to Mistral AI or its models.

## Sources

- [Mistral AI official site](https://mistral.ai/)
- [Mistral Models page](https://mistral.ai/models)
- [Mistral official documentation](https://docs.mistral.ai/)
- [Mistral models overview](https://docs.mistral.ai/models/overview)
- [Funding announcement: Mistral raises €3B](https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier)
