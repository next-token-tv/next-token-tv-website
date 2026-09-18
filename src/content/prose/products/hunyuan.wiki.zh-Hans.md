---
entityType: product
entity: hunyuan
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: '腾讯混元 Hunyuan：模型家族、API 接入与 Hy4 Preview｜Next Token Wiki'
seoDescription: '了解腾讯混元模型家族的构成（Hy3、Hy4 preview 等）、开发者接入入口、开源渠道、在腾讯产品中的应用，以及 Weekly #001 中的试用讨论。'
---

## Hunyuan 是什么

Hunyuan（混元）是[腾讯](/wiki/brands/tencent)的自研模型家族，官方站点为 [hunyuan.tencent.com](https://hunyuan.tencent.com/)。家族覆盖语言、视觉理解、图像生成、语音识别和翻译等多种模态。官方站点列出的成员包括：

- Hy3：混合专家（MoE）架构的语言模型，官方标注 295B/21B 规格、256K 上下文长度和三种思考模式，面向代码、长文、推理与 Agent 执行。
- Hy Vision 2.0：视觉理解模型。
- HY Image 3.0 Plus：支持多轮交互的图像生成模型。
- Hy ASR 3.0 preview：语音识别模型。
- Hy-MT2：覆盖 33 种语言的翻译模型，含端侧量化版本。
- Hyra-1.0：面向研究与工程任务的 Agent。

此外，腾讯云文档已列出"混元语言模型（Hy4 preview）"（[平台模型列表](https://cloud.tencent.com/document/product/1759)），[计费文档](https://cloud.tencent.com/document/product/1759/127342)中也出现了 Hy4 preview 的条目——它以 preview 形态提供，官方文档未给出发布日期与预览期结束时间。

## 用途与使用边界

- 开发者接入：腾讯云智能体开发平台（ADP）与 TokenHub 提供混元语言模型 Hy3 与 Hy4 preview 的调用（见[平台文档](https://cloud.tencent.com/document/product/1759)）；按平台的 PU 资源结算，费率见[官方计费文档](https://cloud.tencent.com/document/product/1759/127342)。官方站点另提供腾讯 AI Studio 的试用入口。
- 开源：官方站点给出 GitHub、Hugging Face、ModelScope 与 AtomGit 的开源渠道。
- 腾讯产品内应用：官方称混元能力应用于腾讯文档、QQ 浏览器、QQ、ima、搜狗输入法、腾讯视频、微信公众号、腾讯新闻、和平精英等产品；相关产品还包括 [WorkBuddy](/wiki/products/workbuddy)（CodeBuddy）、元宝与 ima。
- 使用边界：模型成员、名称与状态以官方文档实时列表为准；Hy4 preview 的"preview"表示预览形态，不应视为正式版。节目里提到的排队现象属于参与者当时的体验，不代表当前服务状态。

## 节目中的讨论

混元在节目中的讨论集中在 Weekly #001（2026 年 9 月初录制）。

在开场模型盘点中，[杨攀把混元的 Hunyuan 4 Preview 列入当周发布的模型列表](/weekly/001/transcript#quote-444d2f8b219e819e8720)。

在"GLM 5.3 Flash 与 MiniMax H3"章节，[歸藏说能力好、成本低的产品受关注，"包括 Hunyuan 4 Preview，在 WorkBuddy 上的一些试用体验，可能大家也关注比较多"](/weekly/001/transcript#quote-045ad2d720d0a1ea162c)，橘子补充"试用 2 周"。这是节目对当时试用渠道的转述。

在"国内模型为什么突然加速发布"章节，[向阳乔木说他试了 Hunyuan 4 Preview 和 Qwen 3.8 Max 0902，"找不出特别好的测试 Case 来"](/weekly/001/transcript#quote-1588534f219b872a1069)，橘子和歸藏的观感是各家"都差不多"。

在"滚动发版之后，Benchmark 还有没有意义"章节，[向阳乔木的评价是"混元还可以"，同时指出自己的排队体验："他们自己的卡都不够自己用，我八点能排到四千多"，并观察其迭代节奏"上个月刚发了混元三，这个月就 Hunyuan 4 了，1 个月一个版本"](/weekly/001/transcript#quote-fa747b45b646c6a5e68d)。这些是录制当时的体验与观察。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-13)。

在人才流动的话题中，[杨攀转述"混元又挖了之前智谱的一个，5.3 的那个"](/weekly/001/transcript#quote-e75c0dc96674911d8b71)——这是节目内的行业传闻式转述，未经官方证实。

## 常见问题

### 腾讯混元是什么模型？

腾讯的自研模型家族，覆盖语言、视觉、图像、语音和翻译。语言模型主力是官方标注 295B/21B 规格、256K 上下文的混合专家模型 Hy3；腾讯云文档另列出 Hy4 preview。成员与状态见[官方站点](https://hunyuan.tencent.com/)与[平台文档](https://cloud.tencent.com/document/product/1759)。

### Hy4 preview 是什么状态？

官方文档将其列为"混元语言模型（Hy4 preview）"，以 preview 形态在腾讯云平台提供；计费文档中也有其条目。官方未公布发布日期或预览期结束时间，接入前应核对[官方文档](https://cloud.tencent.com/document/product/1759)的最新列表。

### 混元 API 在哪里接入？

开发者经[腾讯云智能体开发平台（ADP）与 TokenHub](https://cloud.tencent.com/document/product/1759)调用混元语言模型，按 PU 资源结算，费率见[官方计费文档](https://cloud.tencent.com/document/product/1759/127342)；官方站点还提供腾讯 AI Studio 试用入口。

### 混元开源吗？

官方站点给出 GitHub、Hugging Face、ModelScope 与 AtomGit 的开源渠道，部分模型（如翻译模型 Hy-MT2 的多个规格）提供开放权重。哪些版本开源、以什么许可发布，以各仓库页面为准。

### 混元用在腾讯的哪些产品里？

官方站点列出腾讯文档、QQ 浏览器、QQ、ima、搜狗输入法、腾讯视频、微信公众号、腾讯新闻、和平精英等，相关产品还包括 WorkBuddy（CodeBuddy）、元宝与 ima。

## 来源

- [腾讯混元官方站点](https://hunyuan.tencent.com/)
- [腾讯云智能体开发平台文档（模型列表）](https://cloud.tencent.com/document/product/1759)
- [腾讯云混元计费文档](https://cloud.tencent.com/document/product/1759/127342)
- [腾讯 AI Studio](https://aistudio.tencent.com/)
