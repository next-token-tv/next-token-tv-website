---
entityType: product
entity: arrow
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Arrow：QuiverAI 的 SVG 矢量图形模型家族｜Next Token Wiki'
seoDescription: '了解 QuiverAI Arrow 模型家族的定位、Arrow 2 与 Arrow 2 Telos 的差异、API 接入方式，以及 Weekly 节目中关于 SVG 生成的讨论。'
---

## Arrow 是什么

Arrow 是 [QuiverAI](/wiki/brands/quiver-ai) 面向矢量图形的模型家族，用于生成、编辑和动画化 SVG。官方模型页对它的概括是"每个 Arrow 模型写的是可编辑的 SVG，而不是像素"。现行型号为 Arrow 2 与 Arrow 2 Telos，官方标注两者均为正式可用（Generally available）：Arrow 2 定位为平衡质量与速度的旗舰，Arrow 2 Telos 是官方描述中能力最强的型号；两者均支持 5 种操作、最多 14 张参考图，按 Token 计费。

更早的 Arrow 1.x 系列（Arrow 1.1、Arrow 1.1 Max 及 `arrow-1`、`arrow-preview` 等端点）在官方模型页上标注为即将停用：官方写明这些端点于 2026 年 10 月 16 日 08:00（UTC）停止服务，并将生成、矢量化、编辑和动画工作负载引导迁移到 `arrow-2`。

## 用途与使用边界

QuiverAI 把 Arrow 放在产品、品牌与营销工作流的矢量素材环节，官网列出的典型用途包括从文本或参考图生成可用于生产的 logo 和插画。它的产出是 SVG 代码，可以在设计工具中继续编辑、放大到任意尺寸——这与输出位图的图像生成模型是两类不同的东西，也是模型家族与设计工具分工的边界。

开发者可以通过 QuiverAI 的 API 使用 Arrow：官方文档列出文本生成 SVG、图片生成 SVG 端点，以及一个与 OpenResponses 兼容、以 Arrow 2 为后端的流式接口；官方还提供 MCP 服务器、命令行工具和 Node.js SDK。官方博客显示，Arrow 2 与 Arrow 2 Telos 于 2026 年 9 月 7 日发布；模型能力、套餐与费率见[官方模型页](https://quiver.ai/models/)。

## 节目中的讨论

Weekly #003 的"SVG、图标与设计工作流"章节中，[歸藏介绍了 Arrow 2，并描述了它画"鹈鹕骑自行车"的演示：逐笔勾勒羽毛、细节非常多](/weekly/003/transcript#quote-99e82db7b58fb55934a2)。他把界面 SVG 图标设计描述为对设计师非常费时的工作，认为当时的通用大模型画图标都画不好。杨攀提出以 MCP 之类的形式把这类模型接入工作流的想法，向阳乔木则从出版印刷的角度强调矢量格式"可以放大"的价值，并拿把文本转成矢量图的 Napkin 类工具做对比。这些是节目参与者结合演示的观感与判断，不是对模型能力的独立测评。可阅读[第 003 期对应章节](/weekly/003/transcript#chapter-11)。

## 常见问题

### QuiverAI 的 Arrow 是什么？

Arrow 是 QuiverAI 面向矢量图形的模型家族，输出可编辑的 SVG，覆盖生成、矢量化、编辑和动画，型号与能力说明见[官方模型页](https://quiver.ai/models/)。

### Arrow 2 和 Arrow 2 Telos 有什么区别？

官方模型页把两者都列为正式可用型号：Arrow 2 定位为平衡质量与速度的旗舰，Arrow 2 Telos 是官方描述中能力最强的型号。两者支持的操作种类和参考图数量相同，均按 Token 计费。

### Arrow 怎么接入 API？

官方文档提供文本生成 SVG、图片生成 SVG 端点和一个与 OpenResponses 兼容的流式接口，另有 MCP 服务器、命令行工具和 Node.js SDK；接入说明见 [QuiverAI 官网](https://quiver.ai/)的开发者入口。

### Arrow 1 还能用吗？

官方模型页写明 Arrow 1.x（含 `arrow-1`、`arrow-1.1`、`arrow-1.1-max` 等端点）于 2026 年 10 月 16 日 08:00（UTC）停止服务，官方将既有工作负载引导迁移到 `arrow-2`。迁移说明见[官方模型页](https://quiver.ai/models/)。

### Arrow 适合用来做什么？

按官方口径，它面向设计工作流中的矢量素材：从文本或参考图生成 logo、插画，做矢量化与动画，产出可在设计工具中继续编辑的 SVG。节目讨论中提到的场景是界面图标与出版印刷配图。

## 来源

- [QuiverAI 模型页：Arrow 2、Arrow 2 Telos 与 Arrow 1.x 停用说明](https://quiver.ai/models/)
- [QuiverAI 官网（含博客与开发者 API 文档）](https://quiver.ai/)
