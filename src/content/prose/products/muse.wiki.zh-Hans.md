---
entityType: product
entity: muse
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Meta Muse：面向开发者的多模态模型家族｜Next Token Wiki'
seoDescription: '了解 Meta 的 Muse 模型家族（Muse Spark 1.3、Muse Voice Transcribe、Muse Image、Muse Glimmer）、开发者接入方式、preview 状态，以及 Weekly 节目中的相关讨论。'
---

## Muse 是什么

Muse 是 [Meta](/wiki/brands/meta) 面向开发者提供的模型家族。[官方页面](https://ai.meta.com/llama/)（位于 ai.meta.com/llama/ 域名下）以"Your next build starts with Muse"呈现这一家族，并列出：

- Muse Spark 1.3：面向长程 Agent 工作流的编码模型，官方称其能追踪上下文与此前结果、处理混乱或冲突的输入、在需要时主动询问；具备原生多模态感知（视频、图像与文档）。官方页面将其标注为 Public preview，并称已扩大全球可用范围。
- Muse Voice Transcribe：流式语音转写模型。
- Muse Image：官方称"agentic image gen"的图像生成模型，经 Meta Model API 提供。
- Muse Glimmer：面向本地 Agent 的开放权重模型。

配套的开发者组件包括 Muse Code（终端编码 Agent，官方标注支持 macOS 与 Windows）、Meta Model API（自助接入）以及经 OpenRouter 调用 Spark 的方式。页面同时保留 Llama 4 与 Llama 3 的导航入口。

需要注意的是：Weekly 节目参与者把"Muse"当作偏个人助手的产品来讨论（见下文），而官方站点的主题是面向开发者的模型家族与 API；两者的对应关系应以官方资料为准。

## 用途与使用边界

- 接入方式：Meta Model API 提供自助、直接的 Spark 访问；官方 cookbook 覆盖 OpenAI SDK 兼容客户端、多 Agent 编排、computer use、GitHub agents 与搜索接地等场景；也可经 OpenRouter 将 Muse Spark 接入既有工具链。
- 状态边界：官方页面将 Muse Spark 标注为 Public preview——这是预览形态，不应写成普遍可用；各模型的名称、状态与可用范围以[官方页面](https://ai.meta.com/llama/)实时内容为准。
- 性能与价格口径：页面上"与前沿模型在多项编码评测中具有竞争力"等说法是 Meta 自己的评测口径；Voice Transcribe 与 Image 的官方标价见[官方页面](https://ai.meta.com/llama/)。

## 节目中的讨论

Weekly #001 的开场模型盘点中，[杨攀说"就在我们录节目之前，昨天晚上应该发布了 Gemini 3.8 Flash，紧接着这个 Benchmark 刚刚登顶，Meta 的 Muse Spark 1.3 就发布了"](/weekly/001/transcript#quote-1c1a629c363571d067b1)，并[把 Meta 的 Muse Voice Transcribe 列入当周几个较小的发布](/weekly/001/transcript#quote-a05a9b1877aa0566a687)。

在"语音与多模态模型为什么仍然难用"章节，[向阳乔木问"为啥他俩都出？不是 Gemini 和 Muse 都出那个语音转写模型"](/weekly/001/transcript#quote-80c05d9d7a5eaf6f5200)；橘子认为这类发布"比较小，就是顺便做的"，并说国内豆包的转写已经领先。这是参与者对模型发布节奏的闲谈式讨论。

Weekly #002 的[Grok Bot / Muse：为什么 Agent 需要云电脑](/weekly/002/transcript#chapter-13)章节把 Muse 放在 Agent 与云电脑的语境中：[向阳乔木说"Meta 也出了一个叫 Muse"，并回到"返璞归真"的 Chat Bot 判断](/weekly/002/transcript#quote-5370d8756a780c47b0b1)；[橘子的理解是"Muse 其实还是更个人一点吧，它其实应该我理解免费也能用。它跟 Grok Bot 定位还不太一样，我觉得它更像一个就是美国豆包那种感觉"](/weekly/002/transcript#quote-e05b4279cf60687bde0c)。

在"Agent 服务会成为新的云基础设施吗"章节，[橘子列举了某产品连接邮箱、日历、购物支付、健康等功能](/weekly/002/transcript#quote-6078d54926488c588306)，[杨攀确认语境后问"那 Muse 不是抄 WorkBuddy 吗？"](/weekly/002/transcript#quote-43c2cd9360a93e872d2b)，橘子认为它与 [WorkBuddy](/wiki/products/workbuddy) 不太一样。这段讨论中的 Muse 指向偏个人助手的形态，与官方页面的开发者定位并不完全对应；[与 Grok Bot 的对比讨论](/wiki/products/grok-bot)也属同一语境，均为参与者观点。

## 常见问题

### Muse 是 Meta 的什么产品？

一个面向开发者的模型家族，官方页面在 ai.meta.com/llama/ 下以"Your next build starts with Muse"呈现，成员包括 Muse Spark 1.3、Muse Voice Transcribe、Muse Image 与 Muse Glimmer，配套 Muse Code CLI 与 Meta Model API。

### Muse Spark 1.3 是什么？

官方称其为面向长程 Agent 工作流的编码模型，具备原生多模态感知（视频、图像、文档），并在多项编码评测中"与前沿模型具有竞争力"（Meta 自家口径）。官方页面将其标注为 Public preview，表示它是预览形态而非正式版。

### Muse 怎么收费？

Meta Model API 提供自助接入；官方页面标注了 Muse Voice Transcribe 与 Muse Image 的按量价格（截至 2026 年 9 月页面显示转写 0.18 美元/小时、图像 0.01 美元/张）。当前价格与计费方式见[官方页面](https://ai.meta.com/llama/)。

### Muse 是 AI 助手吗？跟 Grok Bot 一样吗？

官方站点把 Muse 呈现为开发者模型家族，不是消息式助手产品。Weekly #002 中参与者把它理解为"更个人一点""更像美国豆包"，并认为与 [Grok Bot](/wiki/products/grok-bot) 的持久云电脑定位不同——这些是节目观点，产品的实际形态以官方资料为准。

### Muse 和 Llama 是什么关系？

两者都在 Meta 的官方页面体系内：Muse 的呈现位于 ai.meta.com/llama/ 页面，页面导航中保留了 Llama 4 与 Llama 3 的入口。官方没有说明两者的替代或从属关系，接入时以官方文档为准。

## 来源

- [Meta：Muse 官方页面（ai.meta.com/llama/）](https://ai.meta.com/llama/)
