---
entityType: product
entity: claude-cowork
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Claude Cowork：Anthropic 办公 Agent、用途与边界｜Next Token Wiki'
seoDescription: '了解 Claude Cowork 的定位、文件与办公任务的工作方式、与 Claude 和 Claude Code 的分工，以及 2026 年 9 月与聊天合并的官方公告。'
---

## Claude Cowork 是什么

Claude Cowork 是 Anthropic 面向办公与文件处理任务的 Agent 产品，属于 Claude 产品家族。官方描述它的工作方式是：用户给出一个目标，Claude 在用户选定的文件夹和工具中执行多步任务，产出待审阅的结果。产品形态包括 macOS、Windows、ChromeOS 和 Linux 桌面应用，以及 beta 状态的网页与移动端入口；官方页面注明其需要付费计划（见[Claude Cowork 产品页](https://claude.com/product/cowork)）。

2026 年 9 月 16 日，Anthropic 发布官方公告宣布 Claude Cowork 与聊天合并为同一个 Claude，逐步向 Pro 与 Max 计划推送，Team 与 Free 计划随后跟进，Enterprise 客户会提前 30 天收到变更通知（见[官方博客](https://claude.com/blog/cowork-is-now-claude/)）。产品入口与可用状态随这次合并变化，以官方页面的实时说明为准。

## 用途与边界

官方页面给 Cowork 的典型任务是整理文件夹、批量审阅、汇总报表和电子表格一类多步知识工作：用户描述要做什么而不是怎么做，Claude 打开需要的文件与工具，按步骤执行并展示每一步；任务也可以定时或并行运行，关闭电脑后云端继续执行。它自带一个独立于用户浏览器的内置浏览器，用于打开网页、填写表单等网络任务，该能力在官方页面标注为面向 Pro、Max、Team 计划的桌面应用。

权限是使用 Cowork 的核心边界：Claude 只能访问用户选择的文件夹与工具，删除操作需要用户批准，重大操作默认先征得同意（安全说明见[官方 Use Cowork safely 文档](https://support.claude.com/en/articles/13364135-use-cowork-safely)）。官方 FAQ 还说明，直接操作屏幕的 computer use 在 Cowork 与 [Claude Code](/wiki/products/claude-code) 中都处于 research preview，Agent 任务的额度消耗快于普通聊天。

## 与 Claude、Claude Code 的分工

[Claude](/wiki/products/claude) 是 Anthropic 的通用模型与助手家族；官方 FAQ 把 [Claude Code](/wiki/products/claude-code) 定位为面向软件工程（写代码、调试、交付代码），而 Cowork 面向非编码的知识工作——研究、分析、文档创建等多步任务，两者采用同样的 agentic 方式。与普通聊天的区别在于：聊天不能直接访问文件，Cowork 在用户指定的文件夹里读、写、创建文件，因此能完成任务而不只是描述做法。2026 年 9 月的合并公告后，这些能力正并入同一个对话入口，具体界面以官方当前说明为准。

## 节目中的讨论

Weekly #003 的"Coding 与 Office：两种工作模式"章节里，歸藏在介绍 Claude Code 推出 Projects 测试版之后提到：[Anthropic 这次把 Code、Cowork 和 Claude Chat 合到一起，学 Codex 的做法——就像 ChatGPT 与 ChatGPT Work 在一个应用里](/weekly/003/transcript#quote-f14ca85beeca6706c25f)。橘子和向阳乔木表示没必要按任务拆分入口，橘子认为"越来越简单"是大趋势。这是节目参与者对产品动向的转述与看法，合并的具体范围与节奏以官方公告为准。

## 常见问题

### Claude Cowork 是什么？

Anthropic 面向办公与文件处理任务的 Agent 产品：用户给出目标，Claude 在选定的文件夹和工具中完成多步任务并交付待审阅的结果。见[官方产品页](https://claude.com/product/cowork)。

### Claude Cowork 和 Claude Code 有什么区别？

官方 FAQ 的口径是：Claude Code 面向软件工程，用于编写、调试和交付代码；Cowork 面向非编码的知识工作，如研究、分析、文档创建等多步任务。两者采用同样的 agentic 方式。见[官方产品页 FAQ](https://claude.com/product/cowork)。

### Claude Cowork 怎么用？需要下载桌面应用吗？

不强制。官方 FAQ 说明 Cowork 也以 beta 状态运行在网页与移动端；桌面应用补充的是网页和移动端够不到的部分——自己电脑上的文件夹和应用程序。如果工作都在本机文件里，从[桌面应用](https://claude.com/product/cowork)开始（支持 macOS、Windows、ChromeOS、Linux）。入门步骤见[官方 Getting started with Cowork 文档](https://support.claude.com/en/articles/13345190-getting-started-with-cowork)。

### Claude Cowork 收费吗？

官方注明 Cowork 需要付费计划，官方 FAQ 与价格页列出它包含在 Pro、Max、Team、Enterprise 计划中，并提醒 Agent 任务比普通聊天消耗额度更快；截至 2026 年 9 月的费率与限额见[官方价格页](https://claude.com/pricing)。

### Cowork 和聊天合并是怎么回事？

Anthropic 于 2026 年 9 月 16 日发布[官方博客](https://claude.com/blog/cowork-is-now-claude/)宣布 Cowork 与聊天合并为同一个 Claude，逐步向 Pro 与 Max 计划推送；官方说明原有会话、项目、连接器与技能都会保留。合并后的入口与功能范围以官方页面实时说明为准。

## 来源

- [Claude Cowork 产品页](https://claude.com/product/cowork)
- [官方博客：Claude Cowork and chat are now one Claude（2026-09-16）](https://claude.com/blog/cowork-is-now-claude/)
- [Getting started with Cowork（帮助中心）](https://support.claude.com/en/articles/13345190-getting-started-with-cowork)
- [Use Cowork safely（帮助中心）](https://support.claude.com/en/articles/13364135-use-cowork-safely)
