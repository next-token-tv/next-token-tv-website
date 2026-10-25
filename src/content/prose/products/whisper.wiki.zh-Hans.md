---
entityType: product
entity: whisper
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Whisper：OpenAI 开源语音识别模型｜Next Token Wiki'
seoDescription: '了解 Whisper 语音识别模型的工作方式、模型尺寸与翻译任务边界、本地运行方法，以及 Weekly 第 007 期播客转写讨论中的提及。'
---

## 定义

Whisper 是 OpenAI 发布的语音识别模型与开源实现，官方 README 将其描述为通用语音识别模型（general-purpose speech recognition model），可执行多语言语音识别、语音翻译与语言识别等任务；代码与模型权重以 MIT 许可在 [GitHub 官方仓库](https://github.com/openai/whisper)公开。

## 工作方式

它是一个基于 Transformer 的序列到序列模型，把多语言识别、语音翻译、语言识别与语音活动检测等任务统一表示为待预测的 token 序列。官方仓库提供六个尺寸的模型（其中四个有英文专用版本），另有一个在 large-v3 基础上优化的 `turbo` 版本，尺寸对应速度与精度的取舍；按 README 通过 `pip install -U openai-whisper` 安装并配合 ffmpeg 即可在本机运行。

## 使用场景

为音频文件生成文字转写是主要用法，也可把非英语语音翻译成英语；由于模型与权重开源，常被用于本地转写、字幕整理与语音数据处理的自动化流程。注意官方 README 写明 `turbo` 模型不用于翻译任务，翻译需选用其他多语言模型。

## 易混概念

Whisper 是模型与命令行实现，不是面向最终用户的图形应用；很多转写软件和浏览器插件在内部调用 Whisper 或其衍生版本，实际效果取决于集成方式。它与 [OpenAI](/wiki/brands/openai) 平台的托管语音转写接口是两种使用方式，后者入口见 [Audio API 文档](https://platform.openai.com/docs/api-reference/audio)。

## 节目中的讨论

在 Weekly #007 的"更大胆的任务：播客转写、Slack 与微信整理"章节中，橘子介绍了一个本地转写播客字幕的浏览器插件，[向阳乔木追问用的是哪个模型，提到"Qwen 0.6B 还有 Whisper"](/weekly/007/transcript#quote-084fbfda19fab1965a03)，橘子表示转写效果不错。参见[对应章节](/weekly/007/transcript#chapter-18)。

## 常见问题

### Whisper 可以在本地跑吗？

可以。按官方 README，用 `pip install -U openai-whisper` 安装并装好 ffmpeg 后即可在本机运行转写，模型文件按所选尺寸下载。

### Whisper 支持翻译吗？

支持把非英语语音翻译成英语，但官方写明 `turbo` 模型不用于翻译任务，需选用 tiny 到 large 等多语言模型。

### Whisper 有官方 API 吗？

OpenAI 平台设有语音转写相关的 [Audio API 文档](https://platform.openai.com/docs/api-reference/audio)，与开源模型是两种使用方式。

## 来源

- [openai/whisper 官方仓库与 README](https://github.com/openai/whisper)
- [Whisper 论文（arXiv:2212.04356）](https://arxiv.org/abs/2212.04356)
- [OpenAI Audio API 参考](https://platform.openai.com/docs/api-reference/audio)
