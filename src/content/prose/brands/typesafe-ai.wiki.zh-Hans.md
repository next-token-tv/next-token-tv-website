---
entityType: brand
entity: typesafe-ai
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'TypeSafe AI：System One 模型与 Jev 背后的公司｜Next Token Wiki'
seoDescription: '了解 TypeSafe AI 是什么公司、System One 模型的思路，以及它与 Jev 模型的关系。'
---

## TypeSafe AI

TypeSafe AI 是一家人工智能实验室，研发面向自动化场景中结构化判断的"System One 模型"。据[官方发布公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev)，公司由 Diogo Almeida 创立（此前在 OpenAI 从事 ChatGPT 指令遵循方向的研究），在发布前经历约两年隐身运营，公告发布于 2026 年 9 月。

## System One 模型思路

System One 模型的名字借自心理学家卡尼曼《思考，快与慢》中的系统一/系统二之分：大语言模型逐 token 生成文字、偏向"慢思考"，而 System One 模型不输出聊天文本，直接输出带校准概率的类型化结构化取值（分类标签、评分、是非判断等），支持并行调用。官方公告称其训练方法为"Reinforcement Learning for Calibrated Decisions"（RLCD），并说明输出结构由预先定义的 schema 约束——公司同时自述，"不会幻觉"的说法来自 schema 匹配机制，而非实测结论。

首个模型 [Jev](/wiki/products/jev)（以经济学家 William Stanley Jevons 命名）即按此思路设计的结构化判断模型，官方公告给出输入 0.042 美元/百万 token、输出免费的定价，并通过 waitlist 提供早期访问，开发者入口见 docs.typesafe.ai 与 console.typesafe.ai。

## 节目中的讨论

Next Token Weekly #003 在["Jev：不聊天，做结构化判断"](/weekly/003/transcript#chapter-03)章节中，歸藏[介绍"TypeSafe AI 的 Jev 模型"可当"通用的分类器"，输出选择、打分、是非判断等程序化结果，"速度就非常快，同时可以并行去处理，成本也非常低"，并引用了与官方一致的输入价格](/weekly/003/transcript#quote-222f069c8d5fd45540e5)。在["把新模型接入现有 Agent"](/weekly/003/transcript#chapter-08)章节，杨攀[描述自己让 GPT-6 先去阅读理解这个新模型再写文档、搭原型的工作流](/weekly/003/transcript#quote-a6157775ea73bd497666)。节目描述与官方口径一致，但"快""成本低"等判断属于主理人当时的体验与观点。

## 常见问题

### TypeSafe AI 是什么公司？

TypeSafe AI 是一家 AI 实验室，由前 OpenAI 研究者 Diogo Almeida 创立，研发面向分类、评分、选择等结构化判断任务的 System One 模型，首个模型是 Jev。

### System One 模型是什么意思？

名字来自《思考，快与慢》的"系统一"：模型不做长篇推理，而是像函数一样直接输出类型化、带概率的结构化判断（选哪个、打几分、是或否），可并行调用，适合放进软件自动化流程。

### TypeSafe AI 和 Jev 是什么关系？

Jev 是 TypeSafe AI 发布的首个 System One 模型，2026 年 9 月随官方公告一同推出。模型详情见 [Jev 条目](/wiki/products/jev)和[官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev)。

### Jev 的价格是多少？

官方公告给出的定价为输入 0.042 美元/百万 token，输出免费。当前价格以[官方公告及文档](https://typesafe.ai/blog/introducing-system-one-models-and-jev)为准。

## 来源

- [TypeSafe AI 官方公告：Introducing System One models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [TypeSafe AI 官方网站](https://typesafe.ai/)
