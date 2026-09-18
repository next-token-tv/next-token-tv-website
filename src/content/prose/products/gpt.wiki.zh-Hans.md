---
entityType: product
entity: gpt
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'GPT 模型家族：当前型号、开发者 API 与和 ChatGPT 的区别｜Next Token Wiki'
seoDescription: '了解 OpenAI GPT 模型家族的当前型号、开发者 API 接入与计费方式，以及 Weekly 节目对 GPT-6 Astra 的实际使用讨论。'
---

## GPT 模型家族是什么

GPT 是 [OpenAI](/wiki/brands/openai) 的通用模型家族，本页覆盖模型本身与开发者接口。它与 [ChatGPT](/wiki/products/chatgpt) 是两个层级：ChatGPT 是面向个人和组织的助手产品，GPT 是这些产品背后的模型层，同时也通过 [OpenAI API 平台](https://platform.openai.com/docs/overview)提供给开发者自行集成。

截至 2026 年 9 月，官方模型目录列出的旗舰模型包括 GPT-6 Astra（`gpt-6-astra`）与 GPT-5.6 Sol、GPT-5.6 Terra、GPT-5.6 Luna，另有图像、实时语音、转写等专用模型；旗舰模型支持推理，并提供函数调用、联网搜索、文件搜索和 Computer Use 等工具。[GPT-6 Astra 发布说明](https://openai.com/index/gpt-6-astra/)称它是 GPT-5.6 Sol 的后继，发布时先向部分组织开放，随后数日扩展到 ChatGPT 各付费计划，并通过 OpenAI API、Microsoft Azure 与 AWS Bedrock 提供；企业工作区在发布时默认不开启访问。型号、可用性和价格会变化，使用前应以[官方模型目录](https://developers.openai.com/api/docs/models)为准。

## 用途与使用边界

同一名词下有两种典型用法：普通用户在 ChatGPT 里选择模型完成问答、写作、分析等任务；开发者注册 [OpenAI API 平台](https://platform.openai.com/docs/overview)后创建 API Key，按文档接入模型，把能力嵌进自己的应用或 Agent 工作流。面向软件开发的完整编码 Agent 是另一个产品 [Codex](/wiki/products/codex)，它同样建立在这批模型之上。

选型时不要从模型名称推断能力：家族内不同型号面向不同任务和成本档位，模型也在滚动更新。ChatGPT 的订阅计划与 API 的按量计费是两套体系，API 用量不会包含在 ChatGPT 订阅里。可用功能还受账户类型、地区和企业策略影响，例如发布说明写明企业工作区默认关闭 GPT-6 Astra 访问，需要管理员开启。

## 节目中的讨论

Weekly #002 录制当天正值 GPT-6 Astra 发布。在"GPT-6 Astra：从 3D 建模聊起"与"Blender 与代码：给模型合适的工具"两章中，[歸藏谈到自己用 Astra 做 3D 和建模的体验](/weekly/002/transcript#quote-ccd9509479ed2535f667)，并[给出他的整体评价](/weekly/002/transcript#quote-7befc13448a71232968f)：与自己 Agent 里常用的 Fable 相比没有感觉到明显差距，但多模态和 3D 是很大的机会；他还观察到 GPT-6 用 Blender 的 Python 接口以写代码的方式建模，界面几乎不动、Token 效率高。橘子则[转述一个新 Benchmark 的比较结果](/weekly/002/transcript#quote-33f1c0f172adba1f8820)，称 3D 和 Computer Use 是 Astra 明显强的两项。杨攀[谈到第一期播客和网站全用 Astra 制作发布](/weekly/002/transcript#quote-0b24d683e735d5c62dfa)，并[转述 OpenAI 收购电脑操作小团队、批量购买 Mac 的新闻](/weekly/002/transcript#quote-f330240dcedd74d8282d)，推测与训练 Agent 有关——这部分是转述加个人推测。可阅读[3D 建模一章](/weekly/002/transcript#chapter-03)、[Blender 与代码一章](/weekly/002/transcript#chapter-04)与[播客制作一章](/weekly/002/transcript#chapter-05)。

节目也谈到这个家族的短处：在"写作体验"一章中，[杨攀认为 GPT 写作很差](/weekly/002/transcript#quote-34c317c8a5029b292b96)，橘子补充说写小说从 GPT 5.5 起才可用、国内模型当时还写不了中文网文；在"音乐与图像编辑"一章中，[杨攀以连续编辑时未修改部分保持不动为例](/weekly/002/transcript#quote-cc4aeb196c25c1de5bc7)，肯定 GPT Image 2.5（官方图像模型系列 GPT-Image-2.5）的编辑稳定性，歸藏则指出伪影和美学问题仍在。在"模型真的变笨了吗"一章中，[杨攀认为"降智"更可能是 bug 所致](/weekly/002/transcript#quote-86a3925861994bcf720c)，提到 Claude 与 GPT 今年都出现过用户大规模投诉后查明并修复 bug 的情况；向阳乔木转述的社区"Juice 值"等说法属于社区逆向传闻，节目未证实。分别见[写作章节](/weekly/002/transcript#chapter-07)、[图像章节](/weekly/002/transcript#chapter-22)与[降智章节](/weekly/002/transcript#chapter-26)。

时间线上，Weekly #001 的"Computer Use 正在怎样改变 Vibe Coding 的验收"录制时 GPT-6 尚未发布，[歸藏转述了关于它新架构的说法](/weekly/001/transcript#quote-7d08f4942f9c4081ee94)；到 Weekly #002 录制当天 Astra 正式发布。以上均为节目参与者的亲身体验、转述或预测，不构成官方背书或独立评测。

## 常见问题

### GPT 和 ChatGPT 有什么区别？

GPT 是 OpenAI 的模型家族；ChatGPT 是 OpenAI 基于这些模型推出的助手产品。同一个模型既能在 ChatGPT 里直接使用，也能由开发者通过 API 单独调用：[ChatGPT](/wiki/products/chatgpt) 面向用户订阅，API 走 [OpenAI API 平台](https://platform.openai.com/docs/overview)单独计费。

### 现在最新的 GPT 模型是哪个？

截至 2026 年 9 月，官方模型目录中最新的是 GPT-6 Astra（`gpt-6-astra`）。发布说明称其发布时先向部分组织开放、随后数日扩展到 ChatGPT 各付费计划；你的账户能否选用，以 [ChatGPT](https://chatgpt.com/) 界面和[官方模型目录](https://developers.openai.com/api/docs/models)实际显示为准。

### GPT-5.6 系列有哪几个型号？

[官方模型目录](https://developers.openai.com/api/docs/models)列出三个：GPT-5.6 Sol（面向复杂专业工作的旗舰）、GPT-5.6 Terra（平衡能力与成本）、GPT-5.6 Luna（面向成本敏感的工作负载）。各自的上下文长度和费率以目录当前标注为准。

### 在哪里申请 GPT API Key？

在 [OpenAI API 平台](https://platform.openai.com/docs/overview)注册并创建 API Key，再按[官方模型文档](https://developers.openai.com/api/docs/models)选择模型接入。API Key 与 ChatGPT 订阅相互独立；不要把密钥放进公开网页或公开代码仓库。

### GPT API 怎么收费？

API 按输入和输出 Token 用量计费，不同型号费率不同；ChatGPT 的订阅与 API 是两套计费体系。当前各模型的具体价格见[官方模型目录](https://developers.openai.com/api/docs/models)。

### 搜索"GPT"为什么会搜到不相干的内容？

GPT 在其他领域有完全不同的含义（例如一种医学检验指标、一种磁盘分区表格式），同名内容会混入结果。想找 OpenAI 的模型时，建议加上 OpenAI、AI 或 ChatGPT 等词，或直接访问 [openai.com](https://openai.com/)。

## 来源

- [OpenAI 模型目录](https://developers.openai.com/api/docs/models)
- [GPT-6 Astra 发布说明](https://openai.com/index/gpt-6-astra/)
- [OpenAI API 平台文档](https://platform.openai.com/docs/overview)
- [OpenAI 开发者文档](https://developers.openai.com/)
