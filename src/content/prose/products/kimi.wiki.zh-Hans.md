---
entityType: product
entity: kimi
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Kimi：月之暗面模型家族、K3 与 Kimi Code 模型列表｜Next Token Wiki'
seoDescription: '了解月之暗面 Kimi 模型家族、K3 发布信息、Kimi Code 的模型 ID 与调用方式，以及 Weekly 节目中对 Kimi 版本节奏的讨论。'
---

## Kimi 模型家族是什么

Kimi 是[月之暗面](/wiki/brands/moonshot-ai)（Moonshot AI）的人工智能模型家族，也是其终端产品的名称。2026 年 7 月 22 日，月之暗面在官方论坛发布 [Kimi K3](https://forum.moonshot.ai/t/kimi-k3-is-here-our-most-capable-model/480)，称其为最强模型：2.8 万亿参数、原生视觉、100 万 Token 上下文，面向长程编程、知识工作与推理场景，通过 API 提供（模型 ID `kimi-k3`）。终端产品 [kimi.com](https://www.kimi.com/) 定位"智能体编程与知识工作"，页面上提供定时任务、深度研究、Agent 集群等能力入口，以及 Kimi Work、Kimi Code、Kimi Claw 等产品线。开发者接口是独立的 [Kimi API 平台](https://platform.kimi.ai/)。

## 用途与使用边界

普通用户通过 [kimi.com](https://www.kimi.com/) 使用对话与 Agent 任务；开发者注册 Kimi API 平台后创建密钥、按模型 ID 调用。以平台 2026 年 9 月列出的模型为准，家族内同时存在 K3（旗舰）、K2.7 Code（编程）与 K2.6（通用）等档位，各档位上下文长度与费率不同，不能从名字推断。

编程产品线 Kimi Code 的官方模型文档（截至 2026 年 9 月）列出四个模型 ID：`k3`（1M 上下文，文档标注面向高档位会员）、`k3-256k`（256K 上下文版本）、`kimi-for-coding`（承载 K2.8 Preview）与 `kimi-for-coding-highspeed`（承载 K2.7 Code HighSpeed）；调用入口是 Kimi Code 的桌面端、CLI 与 VS Code 插件。文档特别提醒要填模型 ID 而不是版本名。K3 的官方公告与 API 文档描述的都是 API 调用方式，公告未提及开放权重下载；分发方式以官方渠道为准。

在中文社区的模型比较中，Kimi 与 [Qwen](/wiki/products/qwen)、[GLM](/wiki/products/glm)、[DeepSeek](/wiki/products/deepseek) 等国产模型家族常被并列讨论；各家族定位见各自条目。

## 节目中的讨论

Weekly #001 的"国内模型为什么突然加速发布"一章中，橘子[观察到模型发布太密导致注意力不够："K3 之后，出那个 Qwen 3.8 Max，能力其实差不多，就没有人关心"](/weekly/001/transcript#quote-0f6450e1e0cc07ceb09c)——K3 在这里被当作发布节奏的参照点。

Weekly #002 的"写作体验：不同模型各有所长"一章中，对于"国内有哪些模型写得好"的提问，橘子[认为国内 K3 的写作稍微好一点](/weekly/002/transcript#quote-c2b7d697b92bf2d796c5)，歸藏与向阳乔木附议，同时指出大家都在卷 coding、写作关注度低——这是参与者的使用感受。在"Mistral、Kimi 与模型产品的不同选择"一章中，杨攀[判断 Kimi 出的 2.8 从版本号角度看不是 K3 架构](/weekly/002/transcript#quote-f5877d1e5a4ead841df9)，并[推测 K3 尺寸大、各家都在出低成本模型，Kimi 也需要出一个 Flash 类模型](/weekly/002/transcript#quote-31dc54abe1a50f6cb37b)；橘子[则认为 K3 是 1T 级模型、"不可能做成 Flash"](/weekly/002/transcript#quote-7d29ecb44055590db940)。这些均为录制时的推测与判断，不代表月之暗面的产品规划；可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-27)了解完整语境。

## 常见问题

### Kimi 官网和入口在哪里？

终端产品入口是 [kimi.com](https://www.kimi.com/)；开发者使用的 [Kimi API 平台](https://platform.kimi.ai/)是独立入口；编程产品线 Kimi Code 有自己的文档与客户端。

### Kimi API Key 在哪里申请？

在 [Kimi API 平台](https://platform.kimi.ai/)注册并创建密钥，按[官方文档](https://platform.kimi.ai/docs/overview)调用；Kimi Code 用户按其模型文档填写模型 ID。不要把密钥放进公开网页或公开代码仓库。

### Kimi K3 的价格是多少？

截至 2026 年 9 月，Kimi API 平台对 K3 列出的费率为缓存命中输入 0.30 美元、未命中输入 3.00 美元、输出 15.00 美元（每百万 Token）。费率会调整，当前价格见[官方定价页](https://platform.kimi.ai/docs/pricing/chat)。

### Kimi K3 开源吗？权重能下载吗？

官方公告介绍 K3 通过 Kimi API 平台调用（模型 ID `kimi-k3`），公告未提及开放权重下载。如需确认最新的分发方式，以月之暗面官方渠道为准。

### Kimi 和 Kimi Code 有什么区别？

Kimi 是月之暗面的模型家族与对话助手；Kimi Code 是面向编程的产品线，通过 `k3`、`kimi-for-coding` 等模型 ID 在桌面端、CLI 与 VS Code 插件中调用。两者的模型列表与上下文档位不同，见 [Kimi Code 模型文档](https://www.kimi.com/code/docs/kimi-code/models.html)。

### 搜索"Kimi"为什么会出别的结果？

Kimi 也是常见人名，并因 F1 车手基米·莱科宁（Kimi Räikkönen）、基米·安东内利（Kimi Antonelli）和动画电影《你的名字。》的日文原名等混入大量同名内容。想找月之暗面的模型时，加上"Kimi AI""月之暗面"或"Kimi K3"等词。

## 来源

- [Kimi K3 官方发布公告（Kimi 论坛）](https://forum.moonshot.ai/t/kimi-k3-is-here-our-most-capable-model/480)
- [Kimi 官网](https://www.kimi.com/)
- [Kimi API 平台](https://platform.kimi.ai/)
- [Kimi Code 官方模型文档](https://www.kimi.com/code/docs/kimi-code/models.html)
