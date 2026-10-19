---
entityType: product
entity: zenmux
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'ZenMux：多供应商模型的统一 API 网关｜Next Token Wiki'
seoDescription: '了解 ZenMux 的统一 API 接入、协议兼容、多供应商故障转移与补偿机制，以及节目中的提及。'
---

## ZenMux 是什么

ZenMux 是一个提供统一 API 接入的 AI 服务平台：官方页面自述为"One Account, Unified Access to All Top AI Models"，把多家供应商的模型收进一个账户、一个 API，模型来源限定为官方供应商或授权云伙伴。平台分析页自 2025 年 9 月 29 日起公开平台的处理 token 与补偿数据。

## 用途与使用边界

按官方页面口径，ZenMux 的 API 兼容 OpenAI、Anthropic 与 Google Vertex AI 协议，另有用于聊天、图像与视频生成的图形界面；平台侧提供多供应商故障转移（某家供应商限流或不可用时自动切换备用通道）、按提示词自动选模型的 ZenMux Auto，以及针对幻觉输出、高延迟或低吞吐等情况的自动补偿机制，并用多维度面板呈现每次请求的 token 与成本。补偿规则、费率与可用模型以[官方网站](https://zenmux.ai/)与[价格页](https://zenmux.ai/pricing)的当前说明为准；"自动补偿"等是平台自己的承诺，实际结算条件应阅读其条款。

## 节目中的讨论

Weekly #006 的"模型体验的两极：最强能力、等待时间与便宜模型的生态位"章节中，参与者在讨论某新模型发布初期各入口的可用状态：杨攀说[他看到第一个能用的是 ZenMux 上能用的](/weekly/006/transcript#quote-12050cf8ee5571077bb1)，而官方客户端当时反而不可用。这是参与者当时的观察，可阅读[第 006 期对应章节](/weekly/006/transcript#chapter-22)。

## 常见问题

### ZenMux 是什么？

一个统一接入多家供应商模型的 AI 服务网关：一个账户、一个 API 调用多家模型，兼容 OpenAI、Anthropic 与 Google Vertex AI 协议。见[官方网站](https://zenmux.ai/)。

### ZenMux 的 API Key 在哪里获取？

注册后即可创建 API Key 并按统一接口调用模型；接入方式见官方平台的开发者文档。不要把密钥放进公开网页或公开代码仓库。

### ZenMux 怎么收费？

按平台用量计费，具体费率、充值方式与免费额度以[官方价格页](https://zenmux.ai/pricing)为准；页面展示的优惠活动属于营销信息，不作为长期价格依据。

### ZenMux 的保险补偿是什么？

官方页面对"Built-In Insurance"的描述是：出现幻觉输出、过高延迟或低吞吐等情况时平台自动向用户补偿。这是平台自身的承诺条款，适用条件与结算方式以其条款说明为准。

## 来源

- [ZenMux 官方网站](https://zenmux.ai/)
- [ZenMux 平台分析页](https://zenmux.ai/analytics)
