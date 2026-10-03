---
entityType: product
entity: codex
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-03'
seoTitle: 'Codex：OpenAI 编码 Agent、使用场景与边界｜Next Token Wiki'
seoDescription: '了解 OpenAI Codex 如何服务软件开发、官方文档入口以及 Agent 工作流中的审阅边界。'
---

## Codex 是什么

Codex 是 OpenAI 面向软件开发工作的编码 Agent，可在编辑器、终端、桌面应用和云端协作完成任务。它的价值不只在于生成一段代码，也在于理解代码库、修改文件、运行检查并交付可审阅的结果。具体入口与能力以 [Codex 官方页面](https://openai.com/codex/)和[开发者文档](https://developers.openai.com/codex/)为准。

## 用途与边界

Codex 适合把功能、修复、重构、测试或文档任务交给一个能使用开发工具的 Agent。可靠的结果仍取决于仓库上下文、项目规则、工具权限、测试和人的审阅。代码能运行不代表设计、依赖、数据处理或安全边界已经满足要求。

Codex 生成的改动仍应经过差异审阅和项目检查；需要通用对话与文件分析时，可了解 [ChatGPT](/wiki/products/chatgpt)。

## 节目中的讨论

Weekly #001 中，杨攀回顾为节目准备主理人背景资料的经历：他将相同需求交给 Codex 和 DeepSeek Harness，感觉后者找到了更多资料。他同时表示没有仔细拆解相关搜索机制。这个例子记录的是一次具体任务中的个人体验，没有控制模型、搜索工具和运行配置，不能据此推导两者在所有研究任务中的优劣。

可从[这段调研经历](/weekly/001/transcript#quote-dd5cd61bdd72b4d6d45f)了解当时的任务与分歧，再回到 [Weekly #001](/weekly/001) 查看完整节目。

Weekly #002 的“我们如何用 Agent 制作和发布播客”章节中，杨攀分享了用 Codex 协助发布播客、启动录音和用 FFmpeg 剪辑的体验；参见[对应中文章节](/weekly/002/transcript#chapter-05)。

## 常见问题

### Codex 是什么？

Codex 是 OpenAI 的编码 Agent，面向软件开发任务工作，可跨编辑器、终端、桌面应用和云端使用。它与只返回代码片段的聊天工具不同，重点是围绕代码库推进一个可检查的任务。

### Codex 怎么开始使用？

从 [Codex 官方页面](https://openai.com/codex/)了解产品入口，再按[开发者文档](https://developers.openai.com/codex/)选择相应的编辑器、终端或云端用法。

### Codex CLI 或应用从哪里开始？

终端用户可从 [Codex CLI 安装与登录指南](https://developers.openai.com/codex/cli/)开始；偏好图形界面的用户可查看[桌面应用指南](https://developers.openai.com/codex/app/)。两种入口都围绕项目工作，但安装方式和界面不同。

### Codex 的使用额度在哪里看？

在 ChatGPT 计划中，可通过[官方 Codex 使用说明](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)进入 Settings 或 usage dashboard 查看额度；API 模型价格不等于 Codex 额度。

### Codex 和 Claude Code、ChatGPT 有什么区别？

[ChatGPT](/wiki/products/chatgpt)是通用 AI 助手；Codex 与 [Claude Code](/wiki/products/claude-code)都聚焦软件工程任务，但分别由 OpenAI 与 Anthropic 提供。实际差异要看入口、工具权限和工作流。

## 来源

- [OpenAI Codex](https://openai.com/codex/)
- [Codex 开发者文档](https://developers.openai.com/codex/)
- [OpenAI Developers](https://developers.openai.com/)
