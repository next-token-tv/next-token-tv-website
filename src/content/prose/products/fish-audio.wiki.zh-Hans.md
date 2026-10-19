---
entityType: product
entity: fish-audio
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Fish Audio：语音生成与声音克隆平台｜Next Token Wiki'
seoDescription: '了解 Fish Audio 的文本转语音、声音克隆、API 接入与开源模型，以及节目中对其语音表演能力的讨论。'
---

## Fish Audio 是什么

Fish Audio 是一个语音生成平台，由 Hanabi AI 运营，提供文本转语音（TTS）、声音克隆、语音转写与 Voice Agent 等能力，开发者可以通过 REST 接口与 SDK 接入。官方页面列出的模型线包括 Drama 系列、OpenAudio、Fish Audio S 系列、Fish Speech 等；具体模型与能力以[官方网站](https://fish.audio/)与[文档](https://docs.fish.audio/)为准。

## 用途与使用边界

Fish Audio 的典型用途是为应用、Agent 或内容制作生成语音：官方页面描述其 TTS 支持情绪等标签控制，声音克隆只需少量音频即可复现音色，并宣称支持 30 种以上语言。平台还提供变声、音效生成、音频分离等配套工具。

开源方面，`fishaudio` 组织在 GitHub 上维护 fish-speech 等开源仓库，同时官方 Python 库提供 API 封装——开源模型与商业 API 是两条并行的使用路径，能力和许可各不相同，使用前应分别确认。营销页面上的用户规模、榜单名次等自述数字是平台自己的口径，不是独立评测结论。

## 节目中的讨论

Weekly #006 的"语音不只是念台词：让模型带着角色的性格去表演"章节中，橘子在讨论谷歌语音模型"能表演、有智能"的效果时说，[Fish Audio 新出的模型也支持这类能力，但他的判断是没有那个做得好](/weekly/006/transcript#quote-e7afcc04d26a02417c13)。这是参与者当时的比较体验，不是对模型的测评结论，可阅读[第 006 期对应章节](/weekly/006/transcript#chapter-25)。

## 常见问题

### Fish Audio 官网在哪里？

官网是 [fish.audio](https://fish.audio/)，开发者文档在 [docs.fish.audio](https://docs.fish.audio/)。

### Fish Audio 的 API Key 在哪里获取？

注册后可在平台控制台获取 API Key，接入方式见[官方文档](https://docs.fish.audio/)。不要把密钥放进公开网页或公开代码仓库。

### Fish Audio 可以克隆声音吗？

可以。官方页面称用少量音频（页面口径为约 15 秒）即可克隆音色并生成多语言语音。克隆他人声音前应确认已获得授权，并遵守平台的使用条款。

### Fish Audio 免费吗？

官方页面写明免费层仅限个人使用，商业用途需要付费计划；API 按量计费。当前费率以[官网](https://fish.audio/)为准。

### Fish Audio 开源吗？

`fishaudio` 组织在 GitHub 上维护 [fish-speech](https://github.com/fishaudio/fish-speech) 等开源仓库；开源模型与 fish.audio 平台的商业 API 在能力与许可上并不等同，选用前应分别核对。

## 来源

- [Fish Audio 官方网站](https://fish.audio/)
- [Fish Audio 开发者文档](https://docs.fish.audio/)
- [fishaudio GitHub 组织](https://github.com/fishaudio)
