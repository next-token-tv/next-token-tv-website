---
entityType: product
entity: gemini
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-17'
seoTitle: 'Gemini：Google 多模态模型与助手、API 与边界｜Next Token Wiki'
seoDescription: '了解 Gemini 的助手与模型家族、Gemini API 官方入口，以及模型版本和能力的核验边界。'
---

## Gemini 是什么

Gemini 是 Google 的多模态人工智能模型与助手家族，既有面向用户的 Gemini 产品，也有供开发者调用的 Gemini API。Google 的模型文档按稳定、预览等状态列出可用模型和端点；版本、别名与生命周期会变化，应以[当前模型列表](https://ai.google.dev/gemini-api/docs/models)为准。

## 用途与边界

Gemini 可用于对话、文本与代码生成，以及处理图像、音频或其他受支持的多模态输入。开发者可通过 [Gemini API](https://ai.google.dev/api)调用标准生成、流式、实时、批处理和嵌入等接口，并在 Google AI Studio 创建 API key。具体模型是否支持某个输入、工具或稳定性等级，不能从“Gemini”这一家族名称推断。

应用仍需处理认证、速率限制、数据治理、输出核验和错误重试。面向创作或内容生产的体验还会受输入质量和工作流设计影响，模型文档不等于对每个任务的效果保证。

## 节目中的讨论

Weekly #002 的“写作体验：不同模型各有所长”章节中，向阳乔木转述朋友使用 Gemini 编写网站内容的体验；参见[对应中文章节](/weekly/002/transcript#chapter-07)。

## 常见问题

### Gemini 官网和 App 入口在哪里？

面向用户的入口是 [gemini.google.com](https://gemini.google.com/)，Google 的 Gemini 页面提供 Web 与应用入口；开发者从 [Gemini API 文档](https://ai.google.dev/api)开始。

### Gemini 可以处理哪些内容？

Gemini 产品和 API 支持的输入输出取决于具体模型与接口，覆盖文本、代码以及部分图像、音频和其他多模态任务。请查看模型列表中的端点和能力说明，不要把一个模型的支持范围套到全系列。

### Gemini API Key 在哪里申请，API 免费吗？

可在 [Google AI Studio](https://aistudio.google.com/)创建 API key。Gemini API 有 Free Tier，也有需要绑定计费的 Paid Tier；免费模型、额度和计费条件按当前[价格页](https://ai.google.dev/gemini-api/docs/pricing)变化。

### Gemini 应用和 API 有什么区别？

Gemini 应用是面向用户的助手入口；API 是开发者在自己的程序中调用模型的接口，使用 AI Studio、API key 和独立的用量/计费规则。

### Gemini 模型名称为什么会变化？

官方模型列表区分稳定、预览、最新和实验版本，也会标记弃用模型。接入生产环境时应使用文档列出的确切模型字符串并关注弃用通知，不能把旧教程中的别名当作当前状态。

## 来源

- [Gemini 官方入口](https://gemini.google.com/)
- [Google AI for Developers：Gemini 模型](https://ai.google.dev/gemini-api/docs/models)
- [Gemini API 参考](https://ai.google.dev/api)
