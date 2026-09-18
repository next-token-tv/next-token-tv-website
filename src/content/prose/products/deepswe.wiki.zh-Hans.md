---
entityType: product
entity: deepswe
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'DeepSWE：Datacurve 的长周期软件工程基准｜Next Token Wiki'
seoDescription: '了解 DeepSWE 基准的定位、任务设计、与 SWE-Bench 及 Terminal-Bench 的区别，以及 Weekly 节目中把它与 Terminal-Bench 混淆的片段。'
---

## DeepSWE 是什么

DeepSWE 是研究公司 Datacurve 发布的编程智能体基准，官方站点为 [deepswe.datacurve.ai](https://deepswe.datacurve.ai/)，于 2026 年 5 月 18 日发布，定位是"长周期软件工程基准"（a benchmark for long-horizon software engineering）。它评测的对象是编码智能体而不是模型本身，重点衡量智能体在大型、多步骤的原创软件工程任务上的表现。

## 基准设计与使用边界

Datacurve 发布 DeepSWE 的动因是：当时公开的编程基准（如 SWE-Bench Pro）多以单文件、平均约 120 行代码的小改动为主，难以区分前沿模型；DeepSWE 任务的参考解决方案平均约 668 行代码。此外，Datacurve 审计了现有基准的验证器，报告了 8% 的假阳性与 25% 的假阴性比例，并把通过验证器保证任务判定可靠作为基准设计的一部分。新前沿模型发布时，Datacurve 会重跑 DeepSWE 并更新[官网榜单](https://deepswe.datacurve.ai/)。

使用边界方面：DeepSWE 是评测基准，不是模型、Agent 或开发工具；榜单分数反映特定任务集上的表现，不等于真实工程项目的效果。名字相近的基准和项目不少——例如与 [Terminal-Bench](/wiki/products/terminal-bench) 就是两个不同的基准，选择参考时应先确认指代。

## 节目中的讨论

Weekly #002 的"Astra 会用电脑，就算 AGI 了吗？"一章里，杨攀提到某个编程基准陆续推出 2.0、3.0、4.0 版本，[多数模型在新版上分数大幅下滑，只有 Anthropic 的模型保持稳定](/weekly/002/transcript#quote-187fd0124b30c8c736f8)；橘子先[猜测这个基准是 DeepSWE](/weekly/002/transcript#quote-dd24c125cfe948d0caa7)，杨攀说"不是另外一个"，橘子随后改口认为是 Terminal-Bench，讨论最终落在 Terminal-Bench 上。这段对话是 DeepSWE 与 Terminal-Bench 容易混淆的现场例子；本页对 DeepSWE 的事实描述均来自 Datacurve 官方资料，与该段节目讨论无涉。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-06)。

## 常见问题

### DeepSWE 是什么？

DeepSWE 是 Datacurve 于 2026 年 5 月 18 日发布的软件工程基准，用大型、多步骤的原创任务评测编程智能体在长周期工程上的能力。

### DeepSWE 是谁做的？

Datacurve，一家发布基准、数据集与评测研究的研究公司；介绍页见 [datacurve.ai/research](https://datacurve.ai/research)。

### DeepSWE 和 SWE-Bench 有什么区别？

按 Datacurve 的说明，SWE-Bench 系列以单文件、约 120 行的小改动为主，DeepSWE 的参考解决方案平均约 668 行，并补上了对基准验证器本身的审计（8% 假阳性、25% 假阴性）。

### DeepSWE 和 Terminal-Bench 是一回事吗？

不是，两者是不同团队的独立基准。Weekly #002 中橘子曾把杨攀描述的基准猜成 DeepSWE，随后更正为 Terminal-Bench，是常见的混淆点。

### 在哪里看 DeepSWE 榜单？

官方站点 [deepswe.datacurve.ai](https://deepswe.datacurve.ai/) 发布榜单，Datacurve 表示新前沿模型发布时会重跑并更新结果。

## 来源

- [DeepSWE 官方站点](https://deepswe.datacurve.ai/)
- [Datacurve 研究介绍](https://datacurve.ai/research)
