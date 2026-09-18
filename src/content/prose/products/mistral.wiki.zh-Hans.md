---
entityType: product
entity: mistral
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Mistral：Mistral AI 的模型家族、Le Chat 与开发者平台｜Next Token Wiki'
seoDescription: '了解 Mistral 模型家族的组成、Le Chat 助手、API 与 Studio/Forge/Vibe 产品线、开放权重与收费方式，以及 Weekly 节目中的讨论。'
---

## Mistral 是什么

Mistral 是法国公司 [Mistral AI](/wiki/brands/mistral-ai) 开发的模型家族与 AI 产品线。它同时指三类东西：开源与商用并存的模型家族（通用、OCR、语音、编码等方向）、面向普通用户的 Le Chat 助手，以及面向开发者的 API 与平台工具。官网是 [mistral.ai](https://mistral.ai/)，开发者文档在 [docs.mistral.ai](https://docs.mistral.ai/)。公司强调主权与开放权重路线：官网公告写明其已完成 30 亿欧元 Series D 融资（投后估值超 210 亿欧元，三星电子领投），并称这是欧洲科技公司迄今最大的一轮股权融资。

模型家族按官方 Models 页分三组：通用模型包括 open-weight 旗舰 Mistral Large 3、Mistral Medium 3.5、Apache 2.0 协议的 Mistral Small 4 与面向边缘设备的 Ministral 系列；专长模型包括 OCR 4.1、Voxtral 语音系列、open-weights 编码模型 Devstral 2、低延迟补全模型 Codestral 等；另有 Leanstral、Mistral NeMo 等实验或早期模型。模型名称、版本与许可证会变化，使用前以[官方模型列表](https://docs.mistral.ai/models/overview)为准。

## 产品形态与使用方式

- Le Chat：消费级助手，入口 [chat.mistral.ai](https://chat.mistral.ai/)，另有 iOS 与 Android 应用。
- 开发者平台：在 [console.mistral.ai](https://console.mistral.ai/) 创建 API Key 与组织，按 [API 文档](https://docs.mistral.ai/api/)调用；官方文档把平台概括为 Vibe（生产力与编码 Agent）、Studio（控制台与 API）和 Admin（组织管理）三部分。
- 模型与部署：除云端 API 外，官网还提供 Forge（定制模型训练）与 AI Cloud（训练与推理基础设施）；多个模型以开放权重发布，可自行部署。

使用边界：模型页与文档中的型号、许可证与配额随版本更新，接入前应核对官方列表；开放权重模型的许可条款逐模型不同（如 Apache 2.0 与 Modified MIT），商用前需阅读各自条款。

## 节目中的讨论

Weekly #002 的"Mistral、Kimi 与模型产品的不同选择"章节中，向阳乔木[回忆两三年前做 Agent 时用过 Mistral，并提到公司刚融了一笔钱](/weekly/002/transcript#quote-31beac9863dffb57a0bb)；橘子称其为"欧洲主权大模型"，杨攀认为它的存在价值首先是欧洲需要一个本土模型。歸藏与杨攀在章节中猜测其新模型为微调版本，属于现场推测，官方未证实，正文不采用。该章还讨论了 Kimi 的版本节奏，见 [Kimi](/wiki/products/kimi) 条目。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-27)。

## 常见问题

### Mistral AI 是什么公司？

Mistral AI 是一家法国人工智能公司，开发开放与商用模型及服务，强调欧洲主权 AI 与开放权重路线；产品覆盖 Le Chat 助手、开发者 API 与企业服务。见[官网](https://mistral.ai/)。

### Mistral 有哪些模型？

官方 Models 页列出的家族包括通用模型（Mistral Large 3、Mistral Medium 3.5、Mistral Small 4、Ministral 系列）与专长模型（OCR 4.1、Voxtral 语音系列、Devstral 2、Codestral 等）。型号与许可证随版本变化，见[官方模型列表](https://docs.mistral.ai/models/overview)。

### Mistral API Key 在哪里申请？

在[官方控制台](https://console.mistral.ai/)注册并创建 Key，然后按[官方入门文档](https://docs.mistral.ai/)配置密钥与 API 地址。不要把密钥放进公开网页或代码仓库。

### Le Chat 是什么？

Le Chat 是 Mistral AI 的消费级 AI 助手，提供网页版 [chat.mistral.ai](https://chat.mistral.ai/) 与 iOS、Android 应用，与开发者 API 平台是不同入口。

### Mistral 怎么收费？

Le Chat 可直接注册使用，开发者 API 按用量计费，企业另有定制方案；当前费率与免费层说明见[官方定价页](https://mistral.ai/pricing)。

### Mistral 这个词还有其他含义吗？

有。mistral 本指法国南部一种寒冷的北风，搜索时也会遇到同名小家电品牌等结果；与 Mistral AI 及其模型无关。

## 来源

- [Mistral AI 官网](https://mistral.ai/)
- [Mistral Models 页](https://mistral.ai/models)
- [Mistral 官方文档](https://docs.mistral.ai/)
- [Mistral 模型概览](https://docs.mistral.ai/models/overview)
- [融资公告：Mistral raises €3B](https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier)
