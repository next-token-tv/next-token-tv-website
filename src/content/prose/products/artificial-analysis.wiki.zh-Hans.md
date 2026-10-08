---
entityType: product
entity: artificial-analysis
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Artificial Analysis：AI 模型评测平台的用途与指标｜Next Token Wiki'
seoDescription: '了解 Artificial Analysis 如何对 AI 模型与 API 服务商做能力、速度与价格评测，以及 Weekly 第 005 期引用 AA Index 的讨论。'
---

## Artificial Analysis 是什么

Artificial Analysis 是一个独立的 AI 模型评测平台，对 AI 模型、推理 API 端点及相关系统做能力（intelligence）、质量、性能与价格基准测试，覆盖专有与开源权重模型，也延伸到语音、图像、视频、音乐生成和编码 Agent 等方向。其官网 artificialanalysis.ai 以榜单形式公开各模型在不同测试项上的结果，[官方方法论文档](https://artificialanalysis.ai/methodology)说明测试口径。

## 主要指标与阅读方式

平台的速度指标包括首 Token 时间（Time to First Token）、输出速度（每秒输出 Token 数）和端到端响应时间等；价格指标包括服务商公布的输入/输出单价，以及按缓存命中、输入、输出约 7:2:1 比例折算的混合价格（blended price）和按任务加权的"每任务成本"（Cost per Task）。其发布的 Artificial Analysis Intelligence Index 由多个带权重的基准测试组成，用于衡量模型的综合能力。阅读榜单时需要注意：每个模型在不同推理强度下的结果会分别列出，模型展示名、API 名称与榜单条目不一定一一对应。

## 节目中的讨论

在 Weekly #005 的"开源模型与 AI 意识的讨论"章节中，[杨攀引用 Artificial Analysis Index 上某个新发布模型的排名](/weekly/005/transcript#quote-101917ed149a988beca1)来对比厂商宣传与第三方评测的落差，[歸藏也提到该模型自称超过某个竞品、但榜单排位靠后](/weekly/005/transcript#quote-bb5fad610c4853d809c5)；[杨攀还说明 AA 会把每个模型的每个推理强度分别算成一个排名](/weekly/005/transcript#quote-26a8d0c77ddcfe099641)。这是节目参与者对当时榜单数据的转述与评论；转述的数字以当期节目语境为准，排名本身随榜单更新而变化。完整语境见[第 005 期对应章节](/weekly/005/transcript#chapter-20)。

## 常见问题

### Artificial Analysis 是做什么的？

它对市面上的 AI 模型和推理 API 服务商做独立的第三方基准测试，把能力、速度与价格放在同一口径下比较，结果在其[官网](https://artificialanalysis.ai/)以公开榜单形式呈现。

### Artificial Analysis Intelligence Index 是什么？

这是该平台发布的综合能力指数，由多个带权重的基准测试组成，用来衡量模型在固定工作负载上的表现，并据此推算每任务成本。测试构成与权重见[官方方法论文档](https://artificialanalysis.ai/methodology)。

### Artificial Analysis 怎么测速度和价格？

速度方面测量首 Token 时间、输出速度（Token/秒）和端到端响应时间；价格方面记录服务商公布的单价，并按约 7:2:1 的缓存命中、输入、输出比例折算混合价格，再结合实际 Token 消耗算出每任务成本。口径细节见[方法论页面](https://artificialanalysis.ai/methodology)。

### 怎么用 Artificial Analysis 选模型？

把候选模型放在同一榜单下比较能力指数、速度与成本三类数据，并结合自己的任务类型（对话、编码、图像生成等）查看对应细分榜单。榜单反映测试时点的结果，选型前应查看[官网实时数据](https://artificialanalysis.ai/)。

## 来源

- [Artificial Analysis 官网](https://artificialanalysis.ai/)
- [Artificial Analysis 方法论](https://artificialanalysis.ai/methodology/)
