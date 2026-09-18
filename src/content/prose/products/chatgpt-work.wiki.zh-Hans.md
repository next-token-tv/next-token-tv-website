---
entityType: product
entity: chatgpt-work
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ChatGPT Work：多步骤工作 Agent 与交付物｜Next Token Wiki'
seoDescription: '了解 ChatGPT Work 的定位、它与 Chat 和 Codex 的分工、云端与本地运行方式，以及 Weekly 节目中的实际用法。'
---

## ChatGPT Work 是什么

ChatGPT Work 是 ChatGPT 中面向较长、多步骤任务和完整交付物的工作型 Agent。按[官方帮助文档](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)，ChatGPT 内部分为 Chat、Work 和 Codex 三种形态：Chat 负责快速对话，Codex 专注软件开发与技术工作，Work 负责调研一个主题、分析信息、产出文档、表格、演示文稿、报告或网站这类成果。任务可以单次执行，也可以按计划或触发条件重复运行，并通过 Scheduled Tasks 监控变化；执行过程中用户可以查看进度、回答追问并批准操作。

## 用途与使用边界

Work 的典型用法是把目标、背景和交付要求交给它，让它跨多步完成并返回成品。在网页端和移动端，Work 在云端运行；桌面应用中的 Work 在获得许可后可以使用本地文件和应用，官方同时说明即使本地运行，消息与任务上下文仍可能存储在云端。它的用量结构与 Codex 相同，具体配额随订阅计划变化，见[官方文档](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)与 [ChatGPT 定价页](https://chatgpt.com/pricing/)。

与 [ChatGPT](/wiki/products/chatgpt) 主条目的分工：本条目只覆盖工作型 Agent 本身。与 [Codex](/wiki/products/codex) 的区别是，Codex 有独立的桌面应用视图并限定于软件开发工作流，Work 则面向一般性的文档与研究类交付。

## 节目中的讨论

Weekly #001 的“Grok Bot：为什么 Agent 需要一台永不下线的云电脑”章节中，杨攀[指出 GPT Work 的 Cloud 也提供了一台云主机](/weekly/001/transcript#quote-9459648a0637ee9aacc8)，并说这层能力在 ChatGPT 里"已经藏了三层"；歸藏补充那台主机配置很高。Weekly #002 的“健康数据与日常记录”章节里，[歸藏介绍自己只跑一个定时任务"ChatGPT Work 健康"](/weekly/002/transcript#quote-e8b27e3016c5fc5e59bb)：每周从训练记录和 Apple Watch 数据生成健康报告，并帮他发现了头疼与颈椎、久坐的关联。这些是节目参与者的个人用法，可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-16)与[第 002 期对应章节](/weekly/002/transcript#chapter-21)。

## 常见问题

### ChatGPT Work 是什么？

它是 ChatGPT 内的工作型 Agent，面向较长、多步骤任务和完整交付物（文档、表格、演示文稿、报告、网站等），支持按计划或触发条件重复运行，详见[官方帮助文档](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)。

### ChatGPT Work 和 Codex 是一回事吗？

不是。官方文档将 Codex 定位为软件开发与技术工作的专用形态，有独立的桌面应用视图；Work 面向调研、分析和文档类交付。两者共用相同的用量结构，但工作流和入口不同。

### ChatGPT Work 和普通 Chat 有什么区别？

Chat 处理快速对话式求助；Work 为多步骤任务返回成品，可跨网页、移动端和桌面端同步，云端运行的 Work 对话在多端可见。选择标准是交付物：要一份成型的文档或报告，用 Work；要一个问题的答案，用 Chat。

### ChatGPT Work 在哪里用？

Work 集成在 ChatGPT 中：网页端与移动端在云端运行，桌面应用（macOS/Windows）可以在授权后使用本地文件与应用。官方文档说明其可用范围在逐步扩大，当前入口与限制以[官方文档](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)为准。

### ChatGPT Work 收费吗？

Work 的用量结构与 Codex 相同，消耗随任务复杂度、输入输出规模和推理设置变化，包含在订阅计划额度内。当前计划与额度见 [ChatGPT 定价页](https://chatgpt.com/pricing/)与[官方文档](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)。

## 来源

- [OpenAI 帮助文档：ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [ChatGPT 定价页](https://chatgpt.com/pricing/)
