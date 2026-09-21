---
entityType: product
entity: jev
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Jev 模型：TypeSafe AI 的结构化判断模型与使用边界｜Next Token Wiki'
seoDescription: '了解 TypeSafe AI 的 Jev 模型：System One 模型的定位、Choice/Score/Noul 接口、早鸟访问方式、官方公布的定价，以及 Weekly 节目中的讨论。'
---

## Jev 是什么

Jev 是 [TypeSafe AI](/wiki/brands/typesafe-ai) 推出的结构化判断模型，官方称之为第一款 System One 模型：调用时传入状态（state）和带类型的问题，直接返回代码可以使用的结构化结果，而不是供人阅读的聊天文本。官方文档把接口归纳为三类原语——Choice（从选项中选择）、Score（按评分标准打分）、Noul（0–1 的真假判断），每次调用返回结构化的值、概率分布和置信度。官方博客于 2026 年 9 月宣布 Jev 以早鸟访问（early access）形式开放，开发者可通过等候名单申请；在这之前它不提供普遍可用的公开服务。

## 用途与使用边界

官方把 Jev 定位为软件工作流中的"快速结构化判断"层：分类、路由、评分、抽取、批量数据筛选，以及对大语言模型输出的校验。官方文档说明，每个问题并行、独立地对照同一状态求值，增加问题几乎不增加响应时间；选项基数最多支持 255 个，更高的基数走两段式处理。开发者接口在 [docs.typesafe.ai](https://docs.typesafe.ai/)，控制台在 [console.typesafe.ai](https://console.typesafe.ai/)，官方提供 Python 和 JavaScript SDK。

边界方面，官方文档建议把需要多步推理或多因素权衡的问题拆解成原子问题，在代码中组合；对多跳推理、复杂隐喻理解和精确数值、日期处理这类任务，官方与节目参与者都提示它不是合适的工具。定价上，官方发布博客公布的早鸟口径为输入 $0.042/MTok、输出免费；现行费率与访问方式以[官方发布博客](https://typesafe.ai/blog/introducing-system-one-models-and-jev)和[官方文档](https://docs.typesafe.ai/)为准。

## 节目中的讨论

Weekly #003 有多个章节围绕 Jev 展开：

- 在"Jev：不聊天，做结构化判断"章节，[歸藏把它概括为只输出选择、分数、是非判断的通用分类器，并转述官方输入 $0.042/MTok、输出免费的定价](/weekly/003/transcript#quote-222f069c8d5fd45540e5)；[橘子说他用它给自己 Cola 里的 300 多条记忆打分，筛出 18 条值得保留的](/weekly/003/transcript#quote-8fe6111b8fcd1ff74f0f)。
- 在"微信好友标签与高频判断"章节，[杨攀介绍了把 Jev 用于微信 1 万好友打标签、好友删除建议、每日聊天内容提取 TODO 的做法](/weekly/003/transcript#quote-e05f7e2da73cbdb6d1b6)，并说明它适合海量高频场景，并行调用时单次几百毫秒。
- 在"“没有幻觉”不等于判断正确"章节，[杨攀认为官方"没有幻觉"的说法有偷换概念之嫌——返回格式可靠不等于内容判断准确](/weekly/003/transcript#quote-adb4399997c2d586f1e8)；歸藏转述了官方自己写明的局限，例如多跳推理较弱、数值计算和日期处理不可靠、复杂隐喻无法理解等（[chapter-06](/weekly/003/transcript#chapter-06)）。
- 在"具身智能与零样本任务"章节，[歸藏认为这类模型让机器人的"脑子"能实时调整肢体与声音的参数](/weekly/003/transcript#quote-d9b9b36c2167a613f767)；[橘子评价 Jev 是"把 Transformer、Token 这些技术转换到另一个维度"](/weekly/003/transcript#quote-085df5faa61ef0e0bfdf)。

这些是节目参与者的使用体验与判断，不是对模型能力的独立测评。

## 常见问题

### Jev 是什么？

本文所指的 Jev 是 TypeSafe AI 的结构化判断模型：输入状态和带类型的问题，输出选择、分数或真假判断等结构化结果，供程序直接使用。它与 Jevons 悖论或其他同名词汇无关。

### Jev 现在能用吗，怎么获取访问权限？

官方博客宣布 Jev 于 2026 年 9 月以早鸟访问形式开放，开发者通过等候名单申请；文档在 [docs.typesafe.ai](https://docs.typesafe.ai/)，控制台在 [console.typesafe.ai](https://console.typesafe.ai/)。它不是提交请求就立即普遍可用的服务。

### Jev 怎么收费？

官方发布博客公布的早鸟定价口径为输入 $0.042/MTok、输出免费。这是发布公告中的口径，现行费率应以[官方文档](https://docs.typesafe.ai/)和[发布博客](https://typesafe.ai/blog/introducing-system-one-models-and-jev)为准。

### Jev 和大语言模型有什么区别？

大语言模型生成供人阅读的文本；Jev 不生成文本，而是对照给定状态求解带类型的问题，返回结构化的值、概率和置信度。官方文档把它定位为与聊天模型互补的判断层，复杂问题需要拆成原子问题在代码中组合。

### Jev 有哪些已知的局限？

官方文档要求避免多跳推理和多因素权衡的复杂问题；节目转述的官方局限还包括数值计算、日期处理不可靠和复杂隐喻理解困难。杨攀在节目中提醒，"没有幻觉"只指输出格式可靠，不等于判断内容准确。

## 来源

- [Introducing System One Models & Jev（TypeSafe AI 官方博客）](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [TypeSafe AI 文档](https://docs.typesafe.ai/)
- [TypeSafe 控制台](https://console.typesafe.ai/)
