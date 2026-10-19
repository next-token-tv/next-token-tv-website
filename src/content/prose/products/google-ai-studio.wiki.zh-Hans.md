---
entityType: product
entity: google-ai-studio
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Google AI Studio：试用 Gemini 模型的开发工具｜Next Token Wiki'
seoDescription: '了解 Google AI Studio 的定位、提示词调试与生成代码的工作流、与 Gemini 应用的区别，以及节目中的实际使用。'
---

## Google AI Studio 是什么

Google AI Studio 是 [Google](/wiki/brands/google) 面向开发者的网页工具，用于试用 [Gemini](/wiki/products/gemini) 模型、调试提示词并过渡到 Gemini API 开发，入口是 [aistudio.google.com](https://aistudio.google.com/)。它属于 Gemini API 开发者体系的一部分：Gemini 应用面向终端用户对话，AI Studio 面向模型试验与应用构建。

## 用途与使用边界

官方 Quickstart 描述的典型工作流是：在 Playground 中选择模型并尝试不同提示词（聊天、实时流式等提示类型），通过 Run settings 调整模型参数、安全设置以及结构化输出、函数调用、代码执行、grounding 等工具开关；需要编码时，用 "Get code" 直接生成所选语言的 Gemini API 调用代码。API Key 也从这里创建，之后的应用接入按 Gemini API 的模型列表与计费规则执行。

边界方面：AI Studio 里看到的模型能力对应具体模型版本，不能把某次演示的效果推广到整个 Gemini 家族；模型可用性、配额与价格会变化，以 [Gemini API 文档](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)和[价格页](https://ai.google.dev/gemini-api/docs/pricing)为准。

## 节目中的讨论

Weekly #006 的"语音不只是念台词：让模型带着角色的性格去表演"章节中，歸藏介绍自己把一篇小说改造成带语音表演的动态 Galgame 演示时说，[他是在 AI Studio 里做的，因为那里边调用方便](/weekly/006/transcript#quote-48aa03f48cac92da24ec)，并让语音模型按小说人物固定音色与性格。这是参与者的个人使用体验，可阅读[第 006 期对应章节](/weekly/006/transcript#chapter-25)。

## 常见问题

### Google AI Studio 收费吗？

试用模型与调试提示词在网页中进行；生成的应用接入 Gemini API 后按 API 计费，Gemini API 提供免费层与付费层，具体额度与费率见[官方价格页](https://ai.google.dev/gemini-api/docs/pricing)。

### Google AI Studio 的 API Key 在哪里创建？

登录 [Google AI Studio](https://aistudio.google.com/) 后在平台的 API Key 页面创建；密钥用于调用 Gemini API，不要放进公开网页或公开代码仓库。

### Google AI Studio 和 Gemini 应用有什么区别？

Gemini 应用（gemini.google.com）是面向终端用户的助手入口；AI Studio 是开发者在浏览器里试用模型、调试提示词并生成 Gemini API 代码的工具，两者面向的使用者不同。

### Google AI Studio 支持哪些模型？

AI Studio 中的模型与 Gemini API 的模型列表对应，包括不同状态（稳定、预览等）的版本；可用模型以 [Gemini API 模型文档](https://ai.google.dev/gemini-api/docs/models)为准。

## 来源

- [Google AI Studio](https://aistudio.google.com/)
- [AI Studio Quickstart（Gemini API 文档）](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)
- [Gemini API 价格页](https://ai.google.dev/gemini-api/docs/pricing)
