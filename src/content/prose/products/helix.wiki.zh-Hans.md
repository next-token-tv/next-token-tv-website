---
entityType: product
entity: helix
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Helix：Figure 的人形机器人控制模型家族｜Next Token Wiki'
seoDescription: '了解 Figure Helix 模型家族的定位、Helix 2.5 的零样本泛化结果与官方评估口径，以及 Weekly 节目中关于具身智能进度的讨论。'
---

## Helix 是什么

Helix 是 [Figure](/wiki/brands/figure) 的机器人控制模型家族，用于人形机器人对环境的感知与全身动作控制。2026 年 9 月 17 日，Figure 发布 Helix 2.5，官方称其为该公司迄今最先进的神经网络，覆盖移动、刚性与可变形物体操作、双手协调和主动感知等全身行为，验证任务是整理客厅、叠毛巾和铺床。

## 能力与边界

官方新闻稿的核心结果是零样本泛化：在 30 个真实家庭中，同一个固定模型检查点没有针对这些环境或物品做任何数据采集、微调或适配，直接完成任务。Figure 称这是人形机器人上首次在该规模演示的零样本全身泛化，并给出量化口径：在自家数据引擎 Index 上的预训练使零样本成功率从 9%（从零训练策略）提高到 56%。官方另称 Helix 2.5 的行为规范数据成本降为一半而适用范围扩大 30 倍。

训练方式上，Helix 2.5 与此前的 Helix 02 不同：官方说明 Helix 02 从预训练视觉语言模型起步，而 Helix 2.5 从随机初始化开始、完全在 Index 上预训练。

这些结果来自 Figure 自己组织的评估（湾区 30 个家庭、单一检查点、"不给部分得分"的判分标准），属于厂商自述。官方材料中 Helix 用于 Figure 自己的人形机器人，新闻稿未提供对外授权、开放下载或 API 的信息。

## 节目中的讨论

Weekly #003 的"具身智能与零样本任务"章节中，[歸藏转述了 Helix 2.5 的发布：主要提升零样本任务成功率，把整理房间、叠毛巾、铺床这类任务的零样本成功率从 9% 提到 56%，并认为具身智能"在脑子这部分"的进度仍然很慢](/weekly/003/transcript#quote-b90ae9a54b67a67f92e5)；[橘子补充说演示视频里有机器人在地上捡袜子的画面，看着"有一点点吓人"但挺有意思](/weekly/003/transcript#quote-5083d6a0a3149fbd372b)。在上一章"实时语音与 Computer Use"结尾，歸藏以"之前跟 OpenAI 合作的机器人公司"指代 Figure 的这次发布，橘子确认是 Figure。可阅读[第 003 期对应章节](/weekly/003/transcript#chapter-14)。

## 常见问题

### Helix 是什么？

Figure 的机器人控制模型家族，负责人形机器人的感知与全身动作控制；Helix 2.5 于 2026 年 9 月 17 日发布。

### Helix 2.5 相比之前提升了什么？

按官方新闻稿：在 30 个真实家庭实现零样本全身自主；Index 预训练把零样本成功率从 9% 提到 56%；行为规范数据成本减半而适用范围扩大 30 倍。

### Helix 02 和 Helix 2.5 有什么区别？

官方口径：Helix 02 从预训练视觉语言模型起步；Helix 2.5 从随机初始化开始、完全在 Figure 的 Index 数据引擎上预训练，并在官方对比中以一半的适配数据匹配了 Helix 02 的行为。

### Helix 可以给其他公司或研究者用吗？

官方新闻稿没有提供对外授权、开放下载或 API 的信息，公开结果均针对 Figure 自家机器人。

### Helix 的数据可信吗？

上述成功率与泛化结果由 Figure 自己评估并发布（30 个湾区家庭、单一检查点、无部分得分），属于厂商自述口径；第三方独立复现结果官方页面未列出。

## 来源

- [Figure 新闻稿：Helix 2.5 — zero-shot generalization across 30 homes（2026-09-17）](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization)
- [Figure 公司页面](https://www.figure.ai/company)
