---
entityType: product
entity: github-copilot
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-02'
seoTitle: 'GitHub Copilot 是什么：AI 编程助手、编码代理与和 Microsoft Copilot 的区别｜Next Token Wiki'
seoDescription: '了解 GitHub 的 AI 编程助手 GitHub Copilot：从 2021 年技术预览到编码代理，编辑器支持、免费层与付费计划，以及与微软消费级 Copilot 的区别。'
---

## GitHub Copilot 是什么

GitHub Copilot 是 GitHub 提供的 AI 编程助手与编码代理。2021 年 6 月 29 日，GitHub 以技术预览形式发布 Copilot，当时它基于 OpenAI Codex 运行在 VS Code 中；2022 年 6 月 21 日结束预览，转为面向个人开发者的付费订阅（学生和获认证的开源维护者免费）；2024 年 12 月又推出了免费层。JetBrains、Visual Studio 等编辑器的插件在预览期内陆续跟进。

如今的 GitHub Copilot 覆盖软件开发的多个环节：代码补全与下一步编辑建议、Copilot Chat 对话、代码评审，以及编码代理——可以把一个 issue 指派给 Copilot，由云端代理在独立分支上完成修改并返回 pull request（2025 年以公开预览形式推出）。它还提供 Copilot CLI，可在模型选择上切换多家厂商的模型，或接入自有 API Key 与本地模型。

## 使用与区别

GitHub Copilot 的入口分三类：编辑器插件（官方支持 Visual Studio Code、Visual Studio、JetBrains、Xcode、Vim、Neovim、Zed、Eclipse 等）、命令行（Copilot CLI）和 GitHub 网站本身（issue、pull request 与代码评审里直接使用代理和评审功能）。计划从免费层到个人 Pro 及企业方案，额度与价格见[官方定价页](https://github.com/features/copilot/plans)。

它不是聊天助手产品：GitHub Copilot 面向开发者，工作对象是代码库、issue 和 pull request。面向个人问答、搜索与内容创作的微软助手是另一个产品，见[Microsoft Copilot](/wiki/products/microsoft-copilot)。

## 易混概念

GitHub Copilot 与 [Microsoft Copilot](/wiki/products/microsoft-copilot) 同属微软体系、名字相近，但定位不同：GitHub Copilot 是开发者的编码助手与代理，围绕代码库和软件工程流程；Microsoft Copilot 是面向普通用户的个人 AI 助手。在媒体上读到"Copilot 引用了某网站"这类说法时，需要注意它指的是哪个产品——两个产品的信息获取路径并不相同。此外，Microsoft 365 Copilot 是微软办公套件里的工作版 Copilot，也不是 GitHub Copilot。

## 节目中的讨论

第八期第八章[「GEO：AI 从哪里获取信息，又相信谁？」](/weekly/008/transcript#chapter-08)中，向阳乔木介绍他基于 GEO 工具公司 Profound 提供的千万条数据、数千万链接所做的分析：海外的 Gemini、GitHub Copilot 等主流模型在 AI 引用上呈现的模式各不相同，而 Reddit 被各大模型引用的比例也在急剧下降——这与同章讨论的 Reddit 财报电话会内容相呼应。这是参与者对一组第三方数据分析结论的转述，节目未附原始报告。前一章（[第七章「Agent 会怎样影响人的判断？」](/weekly/008/transcript#chapter-07)）中，橘子还转述过"微软 Copilot 75% 的引用指向一个 AI 生成的选民指南网站"的说法，那是关于微软消费级 Copilot 的讨论，详见[Microsoft Copilot 页面](/wiki/products/microsoft-copilot)。

## 常见问题

### GitHub Copilot 是免费的吗？

2024 年 12 月起有免费层，包含每月有限额的代码补全和基础功能；学生与教师可通过认证获得免费使用。免费层之外还有个人 Pro 等订阅。具体额度见[官方定价页](https://github.com/features/copilot/plans)。

### GitHub Copilot 怎么收费？

个人开发者有免费层和付费计划，企业另有商业方案；不同计划在模型选择、代理用量和评审功能上额度不同。当前各计划的价格与包含内容以[官方定价页](https://github.com/features/copilot/plans)为准。

### GitHub Copilot 支持哪些编辑器？

官方支持 Visual Studio Code、Visual Studio、JetBrains 系列 IDE、Xcode、Vim、Neovim、Zed、Eclipse 等，另有 Copilot CLI 和 GitHub 网站、移动端入口。完整清单见 [GitHub Copilot 文档](https://docs.github.com/en/copilot)。

### GitHub Copilot 能自己完成一个开发任务吗？

可以尝试：编码代理模式下，把 issue 指派给 Copilot，它会在云端为仓库创建分支、编写修改并返回 pull request，由人评审合并。该能力于 2025 年以公开预览形式推出，具体可用范围见 [GitHub Copilot 文档](https://docs.github.com/en/copilot)。

### GitHub Copilot 和 Microsoft Copilot 有什么区别？

两者是不同的产品：GitHub Copilot 是面向开发者的编码助手与编码代理，围绕代码库、issue 和 pull request；[Microsoft Copilot](/wiki/products/microsoft-copilot) 是面向个人用户的通用 AI 助手。名字相近，入口、订阅和用途都不同。

## 来源

- [GitHub Copilot 官方页面](https://github.com/features/copilot)
- [GitHub Copilot 定价页](https://github.com/features/copilot/plans)
- [GitHub Copilot 文档](https://docs.github.com/en/copilot)
