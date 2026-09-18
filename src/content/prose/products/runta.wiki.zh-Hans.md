---
entityType: product
entity: runta
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Runta：面向 AI Agent 的执行基础设施平台，能力、接入与 FrontierHarness Eval｜Next Token Wiki'
seoDescription: '了解 Runta 是什么、为 AI Agent 提供哪些运行时与控制能力、如何接入，以及 Weekly 节目中对 Harness Eval 的转述。'
---

## Runta 是什么

Runta 是面向 AI Agent 的执行基础设施平台，官方称其为"the execution layer for AI agents"：为 Agent 提供持久、隔离的运行时，并在这一层处理 token 支出、凭证、网络访问与计算资源的控制。公司由[戴冠兰](/wiki/people/guanlan-dai)创立，详见 [Runta 官网](https://runta.com/)。

## 核心能力与接入

按[官网](https://runta.com/)的介绍，Runta 的能力分为三块：支出方面，提供 Prompt compression（压缩冗余上下文）与 Token X-ray（检查捕获的工具输入输出、发现重复调用）；控制方面，以受保护凭证替换原始密钥——真实值只在授权的网络边界注入，Agent 拿到的是可用的凭证占位符——网络出站按精确或通配域名放行或拒绝；伸缩方面，闲置运行时自动挂起并在需要时恢复、保留运行状态，内存在设定上限内自动伸缩。

接入方式为安装 Runta CLI、认证、创建运行时并让 Agent 在其中运行，上述控制不需要修改 Agent 本身。官网还提供[文档](https://runta.com/docs/)、定价页、OpenAPI 规范与博客，并通过 dashboard.runta.com 提供免费试用。

## 融资与 FrontierHarness Eval

[Runta 官方介绍页](https://runta.com/about/)列出的投资方包括 World Labs（Martin Casado）以及 Jeff Dean、李飞飞、Ali Ghodsi、Ram Shriram、Thomas Wolf 等；据 The Next Web 等媒体报道，Runta 于 2026 年 7 月完成 a16z 领投的 2000 万美元种子轮，投后估值超 1 亿美元（据 The Information）。2026 年 9 月 1 日，Runta 在博客发布 FrontierHarness Eval（FrontierHarness v1.0）：在统一模型 Kimi K3 与统一运行时下，对 9 个编码 Agent harness、30 个任务、12 种配置共 360 组评测，采用确定性 verifier 判分，详见[官方博客](https://runta.com/blog/introducing-frontierharness-eval/)。更多背景见[戴冠兰的人物页](/wiki/people/guanlan-dai)。

## 节目中的讨论

Weekly #001 的"Harness 评测：完成率、Token 成本与"斩杀线""章节中，杨攀转述当天看到的新闻：["Guanlan 他们，就是 Runta，新出了一个评测，叫 Harness Eval"，从任务完成率、Token 成本消耗等角度比较各 harness 的效率](/weekly/001/transcript#quote-92ea5ff79896fd00a92a)。节目对评测结果的解读是主理人的转述，与官方博客数据基本一致，但不代表 Runta 官方发言。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-06)。

## 常见问题

### Runta 是什么？

面向 AI Agent 的执行基础设施平台，提供持久隔离运行时，并在运行时层处理 token 支出、凭证保护、网络访问治理与资源伸缩，见 [Runta 官网](https://runta.com/)。

### Runta 是谁创立的？

[戴冠兰](/wiki/people/guanlan-dai)，此前是 Cloudflare Edge 团队早期工程师、Kong 创始工程负责人之一，见 [Runta 官方介绍](https://runta.com/about/)。

### Runta 怎么收费？

官网提供免费试用入口（dashboard.runta.com），方案与计费结构见[官方定价页](https://runta.com/)；本页不固定价格信息。

### FrontierHarness Eval 是什么？

Runta 于 2026 年 9 月 1 日发布的编码 Agent harness 评测，用统一模型比较 9 个 harness 在 30 个任务上的完成率与 Token 成本，详见[官方博客](https://runta.com/blog/introducing-frontierharness-eval/)。

## 来源

- [Runta 官网](https://runta.com/)
- [Runta 文档](https://runta.com/docs/)
- [Runta 团队介绍页](https://runta.com/about/)
- [Runta 博客：Introducing FrontierHarness Eval](https://runta.com/blog/introducing-frontierharness-eval/)
- [The Next Web：Runta 种子轮报道](https://thenextweb.com/news/runta-a16z-seed-ai-agent-infrastructure)
