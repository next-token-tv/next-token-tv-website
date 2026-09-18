---
entityType: person
entity: guanlan-dai
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: '戴冠兰：Runta 创始人与 AI Agent 执行基础设施｜Next Token Wiki'
seoDescription: '了解 Runta 创始人戴冠兰：Cloudflare 与 Kong 经历、Runta 的 Agent 执行层产品与融资、FrontierHarness Eval 评测，以及节目中的相关提及。'
---

## 戴冠兰（Guanlan Dai）

戴冠兰是 [Runta](/wiki/products/runta) 的创始人。Runta 是面向 AI Agent 的执行基础设施，官方称其为"the execution layer for AI agents"，为 Agent 提供隔离的持久运行时，并在此层处理 token 支出控制、凭证保护、网络访问治理与计算资源伸缩。

## 经历与 Runta

个人经历方面，[Runta 官方介绍页](https://runta.com/about/)称：戴冠兰有十余年大规模互联网基础设施经验，是 Cloudflare Edge 团队早期工程师之一、后领导 Edge Platform 团队，涉及 CDN、WAF 与前端请求路径，参与将边缘网络扩展至每月逾 10 万亿次请求、服务超 25 亿用户；此后他是 Kong 的创始工程负责人之一，构建并领导 Kong Gateway、Kong Cloud、Kubernetes Ingress Controller 及 Kong AI 基础设施产品的团队。播客"十字路口 Crossing"的单集介绍也称他曾是 Cloudflare 和 Kong 的早期团队成员。

公司方面，官方介绍页列出的投资方包括 World Labs（Martin Casado）以及 Jeff Dean、李飞飞（Fei-Fei Li）、Ali Ghodsi、Ram Shriram、Thomas Wolf 等；The Next Web 等多家媒体报道，Runta 于 2026 年 7 月完成 a16z 领投的 2000 万美元种子轮，投后估值超 1 亿美元（据 The Information），公司位于旧金山湾区。产品方面，[官网](https://runta.com/)与[文档](https://runta.com/docs/)介绍的能力包括：隔离持久运行时、Prompt compression 与 Token X-ray 等支出控制、以占位符注入的受保护凭证、按域名放行的受管控网络访问、闲置自动挂起与恢复；接入方式为 CLI 与 Python/TypeScript SDK，运行时可预装 Codex CLI、Claude Code、OpenClaw 等编码 Agent。

评测方面，Runta 于 2026 年 9 月 1 日在博客发布 FrontierHarness Eval（FrontierHarness v1.0）：在统一模型 Kimi K3 与统一运行时下，对 9 个编码 Agent harness、30 个任务、12 种配置共 360 组评测，采用确定性 verifier 判分；结果显示各 harness 通过率集中在 50.0%–66.7%，而每个通过任务的成本从 1.05 美元到 18.34 美元不等（约 17 倍差距），质量最高的是 Codex（66.7%）。

## 节目中的提及

戴冠兰未参与本页引用的节目。Weekly #001 的"Harness 评测：完成率、Token 成本与"斩杀线""章节中，杨攀介绍："Guanlan 他们，就是 Runta，新出了一个评测，叫 Harness Eval"，并说评测从任务完成率、Token 成本消耗等角度比较各 harness，"效率最高的是 Codex"，DeepSeek Harness 的效率也非常高（见[该段落](/weekly/001/transcript#quote-92ea5ff79896fd00a92a)与[对应章节](/weekly/001/transcript#chapter-06)）。节目中的"Harness Eval"即上文官方发布的 FrontierHarness Eval；节目对评测结果的解读是主理人的转述，与官方博客的数据基本一致，但不代表戴冠兰本人的发言。

## 常见问题

### 戴冠兰是谁？

Runta 创始人，此前是 Cloudflare Edge 团队早期工程师、Kong 创始工程负责人之一，以上见 [Runta 官方介绍](https://runta.com/about/)。

### Runta 是一家什么公司？

面向 AI Agent 的执行基础设施公司，提供隔离运行时、凭证保护、网络治理与资源伸缩；据 The Next Web 等报道，2026 年 7 月完成 a16z 领投的 2000 万美元种子轮。

### FrontierHarness Eval 是什么？

Runta 于 2026 年 9 月 1 日发布的编码 Agent harness 评测，用统一模型比较 9 个 harness 在 30 个任务上的通过率与成本，详见 [Runta 博客](https://runta.com/blog/introducing-frontierharness-eval/)。

## 来源

- [Runta 官网](https://runta.com/)
- [Runta 团队介绍页](https://runta.com/about/)
- [Runta 文档](https://runta.com/docs/)
- [Runta 博客：Introducing FrontierHarness Eval](https://runta.com/blog/introducing-frontierharness-eval/)
- [The Next Web：Runta 种子轮报道](https://thenextweb.com/news/runta-a16z-seed-ai-agent-infrastructure)
- [十字路口 Crossing 单集页（小宇宙）](https://www.xiaoyuzhoufm.com/episode/6a773808c4079d62c57f5802)
