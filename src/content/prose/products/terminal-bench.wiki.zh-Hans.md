---
entityType: product
entity: terminal-bench
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Terminal-Bench：评测 AI Agent 终端任务能力的基准，版本与排行榜｜Next Token Wiki'
seoDescription: '了解 Terminal-Bench 是什么、由谁维护、各版本发布时间、排行榜与运行方式，以及 Weekly 节目中的相关讨论。'
---

## Terminal-Bench 是什么

Terminal-Bench 是评估 AI Agent 在真实终端环境中完成任务能力的基准：Agent 需要在终端里实际操作、解决任务，由基准按任务的解决率（resolution rate）打分，并统计成本与 Token 消耗。官方站点由 Stanford、Harbor 与 Laude Institute 署名，评测基础设施为 Harbor 框架，代码开源于 [GitHub 的 harborframework/terminal-bench 仓库](https://github.com/harborframework/terminal-bench)，见 [tbench.ai](https://www.tbench.ai/)。

## 版本与评测方式

官方 [Benchmarks 页面](https://www.tbench.ai/benchmarks)列出的版本包括：Terminal-Bench 1.0（2025 年 5 月 19 日）、2.0（2025 年 11 月 7 日）、2.1（2026 年 5 月 6 日）、3.0（2026 年 7 月 30 日）、Terminal-Bench-Science 0.1（2026 年 8 月 27 日）、Terminal-Bench Challenges（2026 年 6 月 18 日）与 4.0（2026 年 8 月 28 日）。官网首页的排行榜按解决率排名，同时列出成本与 Token 用量，并标注 95% 置信区间；任务数据集发布在 Harbor Hub，站点还提供运行基准的说明页。官方页面同时要求基准数据不得进入训练语料。

## 节目中的讨论

Weekly #002 的"Astra 会用电脑，就算 AGI 了吗？"一章讨论了基准测试的"打榜"现象：杨攀描述某个持续更新版本的基准，说各模型在 2.0、3.0 上分数很好、到 4.0 就明显下滑，只有 Anthropic 的模型在三个版本上稳定；橘子回忆说["好像 Terminal-Bench 吧"](/weekly/002/transcript#quote-141316712c8728029369)。官方页面显示的 2.0、3.0、4.0 版本序列与这段讨论吻合，但发言人对名称是回忆式确认，具体分数说法是参与者的观察，不是官方排行榜数据。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-06)。

## 常见问题

### Terminal-Bench 是什么，评测什么？

一个评估 AI Agent 在真实终端环境中完成任务的基准：Agent 在终端中实际操作解题，基准统计解决率、成本与 Token 消耗，见[官方网站](https://www.tbench.ai/)。

### Terminal-Bench 有哪些版本？

官方列出的版本有 1.0（2025-05-19）、2.0（2025-11-07）、2.1（2026-05-06）、3.0（2026-07-30）、Terminal-Bench Challenges（2026-06-18）、Terminal-Bench-Science 0.1（2026-08-27）与 4.0（2026-08-28），详见 [Benchmarks 页面](https://www.tbench.ai/benchmarks)。

### Terminal-Bench 排行榜在哪里看？

在[官方网站](https://www.tbench.ai/)首页，按解决率排名并列出成本与 Token 用量及 95% 置信区间。

### 怎么运行 Terminal-Bench 或提交结果？

官方站点提供 Run the benchmark 说明页，代码与框架在 [GitHub 仓库](https://github.com/harborframework/terminal-bench)，任务数据集在 Harbor Hub；具体步骤以官方文档为准。

### Terminal-Bench 是谁维护的？

官方站点由 Stanford、Harbor 与 Laude Institute 署名，评测基础设施为 Harbor 框架。

## 来源

- [Terminal-Bench 官方网站](https://www.tbench.ai/)
- [Terminal-Bench Benchmarks 页面](https://www.tbench.ai/benchmarks)
- [GitHub: harborframework/terminal-bench](https://github.com/harborframework/terminal-bench)
