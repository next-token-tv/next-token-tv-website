---
entityType: product
entity: deepseek-harness
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'DeepSeek Harness：开源插件化 Agent 框架与使用边界｜Next Token Wiki'
seoDescription: '了解 DeepSeek Harness 的插件化架构、四种运行模式、安装方式与开发者预览状态，以及 Weekly 节目对它的评测和迭代讨论。'
---

## DeepSeek Harness 是什么

DeepSeek Harness（官方简称 dsh）是 DeepSeek 推出的开源 Agent 框架，面向编码 Agent 工作流，由杭州深度求索开发，源代码以 MIT 协议在 [GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness)开放。官方称其核心设计是"一切都是插件"：模型、工具、技能、会话、沙箱、存储、循环、调度、UI 等 Agent 能力都由插件组合而成，底层是只负责插件加载、卸载和依赖关系的 Cordis 内核。

它和 DeepSeek 模型属于两个层级：模型提供智能，Harness 提供执行环境和工具编排。官方以开发者预览版（developer preview）的形式发布它，并明确说明[核心插件和基础 API 将持续迭代](https://www.deepseek.com/harness/)，仓库 README 也警告会有兼容性破坏变更。

## 用途与使用边界

DeepSeek Harness 通过命令行启动，官方[快速开始](https://www.deepseek.com/harness/)给出 `npx @deepseek-ai/dsh web`（需要 Node.js），会在本地启动 Web UI；也可以克隆仓库从源码构建。官方网站列出四种运行模式：

- **标准模式**：包含文件编辑、Shell、搜索、技能、子代理、工作流等完整工具集的编码 Agent。
- **PTC 模式**：通过 Code Mode SDK 让模型编写 TypeScript 程序来编排多步工具调用。
- **极简模式**：只提供持久 bash 和 str_replace_editor 两个工具，官方定位是给模型做基准测试。
- **创造模式**：加入运行时检查、插件实验和预设编写能力。

使用边界方面：它是自托管的开发者工具，插件生态要跟随官方版本自行适配；官方在 [SAFETY.md](https://github.com/deepseek-ai/deepseek-harness) 中要求运行前阅读安全说明。与其他 Agent 形态的区别：DeepSeek Harness 是搭 Agent 用的开源框架，[OpenClaw](/wiki/products/openclaw) 是装在自己设备上的个人助手，[WorkBuddy](/wiki/products/workbuddy) 是腾讯的桌面办公 Agent 产品，[Grok Bot](/wiki/products/grok-bot) 则把常驻云端电脑作为产品本体——四者分别对应框架、自托管助手、桌面产品和云端环境。

## 节目中的讨论

Weekly #001 的[Harness 评测：完成率、Token 成本与“斩杀线”](/weekly/001/transcript#chapter-06)章节中，杨攀介绍了 Runta 发布的 Harness Eval 评测，称 DeepSeek Harness 效率很高、三种模式分别有不同的 Token 消耗，并[谈到它能把微信公众号文章完整拉下来](/weekly/001/transcript#quote-786597a8b2d26974dc6a)，这是他的亲身体验；他也提出自己的判断，认为 Harness 的实际意义在于模型与 Agent 的联合训练。同章节里向阳乔木认为它比 Pi 更适合开发者 DIY。

在 Weekly #001 的[WorkBuddy、Qoder、OpenClaw 与 DeepSeek Harness](/weekly/001/transcript#chapter-14)章节中，杨攀观察到它热度过后仍在持续发版；[歸藏抱怨插件系统把复杂度转嫁给开发者、频繁更新导致插件无法兼容](/weekly/001/transcript#quote-9b223772ff9194051c4d)，橘子称其为破坏性更新。Weekly #002 的[Harness 更新太快，插件和工作流如何跟上](/weekly/002/transcript#chapter-10)章节延续了这一讨论。而在“[DeepSeek Flash 与 Harness 的使用体验](/weekly/002/transcript#chapter-08)”章节中，[杨攀强烈推荐两者组合做中文世界的信息检索](/weekly/002/transcript#quote-8316bc20929e3c03de42)，并承认说不清组合生效的原因——这些均为节目参与者的体验与观点，不是官方背书或独立评测。

## 常见问题

### DeepSeek Harness 怎么安装？

按官方文档，在装好 Node.js 后执行 `npx @deepseek-ai/dsh web` 即可启动本地 Web UI；想改源码可以克隆 [GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness)后用 pnpm 构建安装。安装与运行的具体要求见[官方网站](https://www.deepseek.com/harness/)。

### DeepSeek Harness 是开源的吗，要花钱吗？

框架本身以 MIT 协议开源，官方站点未对框架收取费用；实际开销取决于你接入的模型及其 API 用量。

### DeepSeek Harness 必须搭配 DeepSeek 模型吗？

官方架构把模型列为可替换的插件之一，文档没有写死只能用 DeepSeek 模型；但节目里分享的体验都是 DeepSeek Flash 与 Harness 的组合，相关效果判断属于使用者个人体验。

### DeepSeek Harness 和 Claude Code、Codex 是什么关系？

类别不同：DeepSeek Harness 是可自托管、插件化、模型可替换的开源框架；Claude Code 和 Codex 是厂商提供的编码 Agent 产品。Weekly #001 的 Harness 评测章节把若干编码 Agent 放在同一框架下比较完成率与 Token 成本，那属于节目参与者对当时评测结果的转述与讨论。

### DeepSeek Harness 稳定吗，适合生产环境吗？

官方定位是开发者预览版，并预告核心插件和基础 API 会持续迭代、存在兼容性破坏变更。节目参与者也多次提到更新频繁导致插件跟不上，构建生产工作流时应自行评估锁定版本与适配成本。

### DeepSeek Harness 的版本号是什么规则？

杨攀在 Weekly #001 中观察到它按语义化版本（Semantic Versioning）持续发版，群里有用户对版本号规则感到困惑；官方仓库 README 只强调"快速迭代、可能有破坏性变更"，未给出正式的版本承诺，以[仓库发布记录](https://github.com/deepseek-ai/deepseek-harness)为准。

## 来源

- [DeepSeek Harness 官方网站（中文）](https://www.deepseek.com/harness/)
- [DeepSeek Harness 官方网站（英文）](https://www.deepseek.com/harness/en/)
- [DeepSeek Harness GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness)
