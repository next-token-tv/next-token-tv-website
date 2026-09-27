---
entityType: product
entity: fireworks-ai
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Fireworks AI：开放模型推理与训练平台｜Next Token Wiki'
seoDescription: '介绍 Fireworks AI 的服务形态（Serverless、On-Demand、Reserved）、API 兼容性、定价入口，以及第 004 期节目中关于部署开源模型的讨论。'
---

## Fireworks AI

Fireworks AI 是一个提供开放模型推理、训练与部署服务的 AI 基础设施平台，官方页面称其出自 PyTorch 创作者（"From the Creators of PyTorch"）。开发者可以通过 API 调用平台托管的开放模型，也可以部署自己微调的模型。托管的模型清单会随时间变化，以[官网](https://fireworks.ai/)当前列出的为准。

## 服务形态与边界

官方页面将推理服务分为三种方式：Serverless（按 Token 计费的共享托管）、On-Demand（专用部署）与 Reserved（保留容量）；API 与 OpenAI、Anthropic 的接口兼容。平台还提供训练与微调能力（含强化学习训练流程）以及面向多模型路由的产品 Fireworks Nexus。具体能力与费率见[官方定价页](https://fireworks.ai/pricing)与[文档](https://docs.fireworks.ai/)。是否选择托管推理服务，需要结合模型支持、延迟、数据合规与成本自行评估。

## 节目中的讨论

在 Weekly #004 的"Harvey：开源模型与产品壁垒"章节，[杨攀提到硅谷不少公司在做自己的模型，"包括 Fireworks 也在推这些事情"](/weekly/004/transcript#quote-be20aa68704a5ecebd0b)。他的观点是：把前沿模型换成开源模型降本，适合像 Harvey 这样已经验证商业闭环、市场地位稳定的头部公司，而不是每个创业公司的普遍做法；歸藏补充说法律等封闭垂类更有壁垒。这是节目参与者的行业判断，不是对 Fireworks 产品能力的评价。

## 常见问题

### Fireworks AI 是什么？

一个提供开放模型推理、训练与部署的 AI 基础设施平台；开发者通过 API 使用托管模型或部署自有模型。

### Fireworks AI 怎么收费？

官方提供按 Token 计费的 Serverless、专用部署（On-Demand）与保留容量（Reserved）等方式；具体费率见[官方定价页](https://fireworks.ai/pricing)。

### Fireworks AI 兼容哪些 API？

官方页面称其 Serverless API 与 OpenAI、Anthropic 的接口兼容；接入前以[官方文档](https://docs.fireworks.ai/)为准。

### Fireworks AI 上有哪些模型？

托管模型清单随时间变化，以[官网](https://fireworks.ai/)当前列出的模型库为准。

## 来源

- [Fireworks AI 官网](https://fireworks.ai/)
- [Fireworks AI 定价页](https://fireworks.ai/pricing)
- [Fireworks AI 文档](https://docs.fireworks.ai/)
