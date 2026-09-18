---
entityType: product
entity: claude
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-17'
seoTitle: 'Claude：Anthropic 模型与助手家族、API 与边界｜Next Token Wiki'
seoDescription: '了解 Claude 的产品与模型家族、官方使用入口、API 文档和答案核验边界。'
---

## Claude 是什么

Claude 是 Anthropic 的通用人工智能模型与助手家族，既可以通过 Claude 产品直接使用，也可以通过 Anthropic 的开发者平台接入应用和 Agent。模型名称、可用性与接口会更新，当前信息应以[Claude 官方页面](https://www.anthropic.com/claude)和[模型文档](https://docs.anthropic.com/en/docs/about-claude/models/overview)为准。

## 用途与边界

Claude 可用于写作、分析、问答、代码和构建基于模型的应用。开发者通过 [Claude API](https://platform.claude.com/docs/en/api/overview)发送请求，使用支持的认证方式和模型标识；模型家族本身不等于一个固定能力或固定配额。应用仍需处理提示、工具权限、数据保留、错误处理和结果审阅。

Claude 与 Claude Code 是相关但不同的产品：Claude 是通用模型与助手家族，[Claude Code](/wiki/products/claude-code)则把模型放入面向软件工程的终端和开发工作流。

## 节目中的讨论

Weekly #001 的“Harness 评测：完成率、Token 成本与‘斩杀线’”章节同时讨论 Claude 与 Claude Code，重点是模型、工具和执行环境如何共同影响 Agent 体验；参见[对应中文章节](/weekly/001/transcript#chapter-06)。

## 常见问题

### Claude 怎么登录？

直接使用 Claude 可从 [claude.ai](https://claude.ai/)登录；桌面版可从[官方桌面安装说明](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)进入下载页面。

### Claude API 怎么接入？

先准备 Claude Console 账户和凭证，按 [Claude API 概览](https://platform.claude.com/docs/en/api/overview)使用 Messages API 或官方 SDK；API 是开发者平台，和 claude.ai 登录分开。

### Claude 有桌面版吗？

有。Anthropic 的[桌面安装说明](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)提供 macOS 和 Windows 下载路径，安装后使用 Claude 账户登录。

### Claude 和 Claude Code 有什么区别？

Claude 是通用模型与助手家族；Claude Code 是面向软件工程的编码 Agent，负责把模型、代码库和终端工具放进同一工作流。两者的权限、入口和使用方式分别以各自文档为准。

## 来源

- [Anthropic Claude](https://www.anthropic.com/claude)
- [Claude 模型概览](https://docs.anthropic.com/en/docs/about-claude/models/overview)
- [Claude API 概览](https://platform.claude.com/docs/en/api/overview)
