---
entityType: brand
entity: quiver-ai
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'QuiverAI：矢量图形生成模型公司与 Arrow 2｜Next Token Wiki'
seoDescription: '了解 QuiverAI 是什么公司、Arrow 2 模型与 SVG 生成 API 的关系，以及开发者接入方式。'
---

## QuiverAI

QuiverAI 是一家研发矢量图形生成模型的人工智能公司，官方首页的自我定位是"Generating, Editing, and Animating vector graphics"——为产品、品牌与营销工作流生成可直接使用、可编辑的 SVG 资产，并称"Built by researchers. Made for designers."。见[官方网站](https://quiver.ai/)。

## 产品与开发者入口

- Arrow 2 模型：官方称其旗舰模型，主打更快的生成速度与更强的设计感，另有 Arrow 2 Telos 变体；官网标注 Arrow 2 于 2026 年 9 月 7 日发布。
- API：`https://api.quiver.ai/v1` 提供 text-to-SVG、image-to-SVG 等端点，并支持 OpenResponses 兼容的流式接口。
- 开发工具：Node.js SDK（`@quiverai/sdk`）、npm CLI（`npx quiverai add`，可将 SVG 以 React 组件形式安装），以及面向 Agent 工作流的 MCP server（含 Cursor 与 Codex 插件）。
- 应用场景：官网列出徽标（logo）与插图，字体排印与动画标注"Coming soon"。

接入方式见[官网](https://quiver.ai/)与 API 文档；官网提供一个不计费的沙箱密钥（`sk_test_` 前缀）用于试用。

## 常见问题

### QuiverAI 是什么公司？

QuiverAI 是研发矢量图形生成模型的公司，做从文本或位图生成可编辑 SVG 的模型（Arrow 系列）和配套 API，定位服务设计与营销工作流。

### QuiverAI 的官网和 API 入口在哪里？

官网是 [quiver.ai](https://quiver.ai/)，API 基地址为 `https://api.quiver.ai/v1`，官网首页提供文档与注册入口。

### Arrow 2 是什么？

Arrow 2 是 QuiverAI 的旗舰矢量图形生成模型，官网称其生成更快、设计感更强，于 2026 年 9 月 7 日发布；另有 Arrow 2 Telos 变体。

### QuiverAI 可以免费试用吗？

官网提供不计费的沙箱密钥（`sk_test_` 前缀）用于测试，输出为确定性结果；正式使用与商务方案见官网的注册与"Contact sales"入口。

## 来源

- [QuiverAI 官方网站](https://quiver.ai/)
