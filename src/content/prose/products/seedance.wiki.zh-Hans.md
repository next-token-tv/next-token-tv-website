---
entityType: product
entity: seedance
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Seedance：字节跳动视频生成模型家族与 API｜Next Token Wiki'
seoDescription: '了解字节跳动 Seed 团队的 Seedance 视频生成模型、官方入口与 API 可用性，以及 Weekly 节目中关于 AI 短剧和 Token 供应的讨论。'
---

## Seedance 是什么

Seedance 是字节跳动 Seed 团队的视频生成模型家族。官方 [Seedance 2.5 页面](https://seed.bytedance.com/en/seedance2_5)将其描述为"新一代音视频联合生成模型"，主打最长 30 秒的单次生成（可延长两次）、参考视频的意图与镜头语言理解，以及白模控制、绿幕抠像等编辑能力。海外云服务 BytePlus 的 [Seedance 产品页](https://www.byteplus.com/en/product/seedance)则将其标注为"Dreamina Seedance 2.5"，并写明 API 已开放，支持从文本或图像生成 4 至 30 秒的视频、最多 50 个多模态参考输入和音画同步输出。

## 用途与使用边界

Seedance 的定位是视频内容生产的模型层：输入文本提示或参考图像/视频，输出生成视频。官方页面提供"Get API"与"Try now"入口；开发者可经 BytePlus 调用 API，支持 480P/720P 分辨率与多种画幅。生成质量、时长上限和编辑能力随版本演进，具体能力边界以[官方页面](https://seed.bytedance.com/en/seedance2_5)为准。

价格按用量计费，BytePlus 页面列有按时长或按 Token 结算的套餐结构，具体费率见官方定价入口，本文不引用具体数字。需要注意，模型生成内容的版权、平台分发规则和素材合规仍由使用者负责；用 Seedance 制作的成片进入短剧等分发渠道时，还受各平台自身规则约束。

## 节目中的讨论

Weekly #001 的“AI 短剧把 Token 消费带进新的内容市场”章节里，[歸藏说 Seedance 非常猛](/weekly/001/transcript#quote-44958efa4a8671429878)，称在抖音、红果上几乎每周都有高质量爆款 AI 短剧，B 站头部 AI 短剧每周播放量可观，并认为头部 AI 短剧更像网络小说的精品化而非流水线短剧。在接下来“AI 应用市场回暖了吗？利润空间比需求更现实”章节中，[歸藏指出 Seedance 2.5 供应不足](/weekly/001/transcript#quote-fa58955b16bb8ffcc655)、因此给不了折扣；因此给不了折扣；橘子补充说做短剧的人买 Seedance Token 转售没有利润空间。这些是节目参与者当时的观察与经营判断，可阅读[对应章节](/weekly/001/transcript#chapter-30)与[第 31 章](/weekly/001/transcript#chapter-31)。

## 常见问题

### Seedance 是什么，是哪家公司的？

Seedance 是字节跳动 Seed 团队研发的视频生成模型家族，官方介绍见 [Seed 团队网站](https://seed.bytedance.com/en/seedance2_5)。它不是独立软件，而是供内容生产工具和 API 调用的模型。

### Seedance 在哪里能用？

官方页面提供"Try now"和"Get API"入口；开发者可通过字节跳动海外云服务 [BytePlus 的 Seedance 页面](https://www.byteplus.com/en/product/seedance)调用 API，页面标注 API 已开放。国内可用的具体入口以官方说明为准。

### Seedance 怎么收费？

按生成用量计费，与分辨率、时长和输入模式相关；BytePlus 页面列有套餐与按 Token 结算的说明。当前费率以[官方定价入口](https://www.byteplus.com/en/product/seedance)为准，本文不固定具体价格。

### Seedance 和即梦是什么关系？

官方 Seedance 页面没有说明它与各生成工具的对应关系，BytePlus 将该模型标注为"Dreamina Seedance 2.5"。哪个应用或站点可以使用哪个版本的 Seedance，应以官方页面和产品内说明为准，本文不替官方下结论。

## 来源

- [ByteDance Seed：Seedance 2.5 官方页面](https://seed.bytedance.com/en/seedance2_5)
- [BytePlus：Seedance API 产品页](https://www.byteplus.com/en/product/seedance)
