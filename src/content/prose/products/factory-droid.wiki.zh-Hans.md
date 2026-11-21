---
entityType: product
entity: factory-droid
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-21'
seoTitle: 'Factory Droid：Factory 的软件开发智能体与 Droid CLI｜Next Token Wiki'
seoDescription: 'Factory Droid 是什么：Factory 的软件开发智能体，Droid CLI 在终端里改代码、跑测试、做审查，桌面端预览产物与逐行评审差异，以及与 Devin 的对比和节目中的讨论。'
---

## Droid 如何进入开发工作流

Droid 是 Factory 的软件开发智能体。开发者可以在终端里用 Droid CLI 处理所在项目：按官方文档，它负责计划、实现、测试和审查代码修改，通过审批流程保留人工确认，读取项目文件、仓库说明和连接的知识，并接入 Jira、Notion、Slack、Linear、PagerDuty 与 [MCP](/wiki/terms/mcp) 工具。重复性流程可以交给 Droid Exec，在脚本和 CI/CD 流水线里以结构化输入输出运行。

也可以用 Factory 的桌面应用预览产物、查看代码差异并留下反馈。

## Factory 桌面端与多端同步

官方产品页把 Factory Desktop 描述为"软件工厂的桌面应用"，提供 macOS、Windows 和 Linux 原生版本：文件和可运行网站在会话旁边直接预览；设计模式可以选中界面元素并让 Droid 修改，反馈跟随元素保存；差异评审支持像评审同事的 PR 一样逐行评论。会话在桌面端、网页、移动端和 CLI 之间同步。

## 节目中的讨论

第 011 期把 Droid 和 [Devin](/wiki/products/devin) 一起列为编程工具备选。

## 常见问题

### Droid 是什么，谁开发的？

Factory（factory.ai）的软件开发智能体，覆盖代码修改、测试与审查，官方文档见 [docs.factory.com](https://docs.factory.com/droid-cli/overview)。

### Droid CLI 怎么用？

在项目终端运行后，Droid 以交互式界面展示计划、工具调用和代码差异，按审批流程执行；也提供无头模式，接入脚本与 CI/CD，详见[官方文档](https://docs.factory.com/droid-cli/overview)。

### Factory Desktop 能做什么？

在会话旁边预览文件和网站、用设计模式选中元素并让 Droid 修改、像评审 PR 一样逐行评论代码差异；会话跨桌面端、网页、移动端和 CLI 同步，见[产品页](https://factory.ai/product/desktop)。

### Droid 和 Devin 有什么区别？

两者都是[编码智能体](/wiki/terms/coding-agent)：Droid 以终端 CLI 为主要入口，可接入本地工作流和 CI/CD 流水线；[Devin](/wiki/products/devin) 在自己的云端环境中执行工程任务。按执行环境和工作流选择。

## 来源

- [Droid CLI 官方文档](https://docs.factory.com/droid-cli/overview)
- [Factory Desktop 产品页](https://factory.ai/product/desktop)
