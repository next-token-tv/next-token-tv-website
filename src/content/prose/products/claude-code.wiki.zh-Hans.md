---
entityType: product
entity: claude-code
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-17'
seoTitle: 'Claude Code：终端编码 Agent、用途与权限边界｜Next Token Wiki'
seoDescription: '了解 Claude Code 如何读写代码库、运行命令，以及软件工程中必须保留的审阅和权限边界。'
---

## Claude Code 是什么

Claude Code 是 Anthropic 面向终端、编辑器和软件工程工作流的编码 Agent。官方资料描述了它读取代码库、编辑文件、执行命令并在需要时请求确认的工作方式；当前入口和配置应以[官方概览](https://docs.anthropic.com/en/docs/claude-code/overview)为准。

## 用途与边界

Claude Code 适合探索陌生仓库、实现功能、修复问题、运行测试和整理工程文档。它把模型放进真实的开发环境，因此项目规则、上下文、命令权限和检查结果同样重要。Agent 生成的 diff、依赖变更和测试结果都需要开发者审阅。

终端访问意味着它可能接触源代码、环境变量和外部服务。应根据任务限制目录和凭证权限，避免把未经审阅的命令直接用于生产或破坏性操作。它与通用助手 [Claude](/wiki/products/claude)共享产品家族，但不是同一入口。

## 节目中的讨论

Weekly #001 的“Harness 评测：完成率、Token 成本与‘斩杀线’”章节把 Claude Code 与 Codex、Claude 放在工具、上下文和执行环境的语境中讨论；参见[对应中文章节](/weekly/001/transcript#chapter-06)。

## 常见问题

### Claude Code 怎么安装？

官方[安装指南](https://code.claude.com/docs/en/quickstart)提供 Claude Code 的终端安装、认证和启动路径；安装后进入项目目录即可开始使用。

### Claude Code 的桌面和终端入口是什么？

Claude 桌面应用的 Code 标签内置 Claude Code，无需另装 CLI；需要终端工作流时，再按[终端安装指南](https://code.claude.com/docs/en/quickstart)安装 CLI。桌面标签的说明见[Claude Desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart)。

### Claude Code 怎么收费？

Claude Code 可通过 Anthropic Console 的 API 计费，也可与符合条件的 Claude 订阅结合使用；认证与账户路径见[官方安装指南](https://code.claude.com/docs/en/quickstart)。

### Claude Code 和 Codex 有什么区别？

两者都是编码 Agent，但分别由 Anthropic 与 OpenAI 提供。选择时应比较实际的模型、工具、权限、上下文和审阅流程，而不能只按品牌或宣传名称推断结果。

## 来源

- [Claude Code 官方页面](https://www.anthropic.com/claude-code)
- [Claude Code 概览](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Code 常见开发者用例](https://support.claude.com/en/articles/14553517-claude-code-common-developer-use-cases)
