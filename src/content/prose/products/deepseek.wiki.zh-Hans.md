---
entityType: product
entity: deepseek
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'DeepSeek 模型家族：API、模型与使用边界｜Next Token Wiki'
seoDescription: '了解 DeepSeek 模型家族、开发者 API、Responses API 的调用边界，以及 Weekly 节目中的 DeepSeek Flash 讨论。'
---

## DeepSeek 模型家族

DeepSeek 是一个面向通用任务的模型家族，既有面向终端用户的 Web 与 App 产品，也提供开发者 API。官方透明度中心列出 DeepSeek-V4 与 DeepSeek-V3.2 等已发布模型；API 文档提供模型列表和调用接口。模型名称、可用性和价格会变化，使用前应以[官方模型列表](https://api-docs.deepseek.com/api/list-models/)、[API 文档](https://api-docs.deepseek.com/)和[官方透明度中心](https://www.deepseek.com/transparency/)为准。

## 使用方式与边界

对开发者而言，DeepSeek API 可以通过 Responses API 或兼容的 Chat Completions 方式调用。官方文档于 2026 年 9 月列出的 Responses API 模型包括 `deepseek-flash` 和 `deepseek-v4-pro`，并支持工具调用相关的输入项；Responses API 本身是无状态的，多轮请求需要由调用方继续提供对话历史。具体模型能力、接口兼容性和配额不能从模型名称推断。

DeepSeek 的适用问题取决于任务、模型、上下文和执行环境。它可以作为问答、代码和 Agent 工作流中的模型；工具权限、应用封装、测试和交付仍由使用者或上层 Agent 负责。需要长期运行的编码工作流时，可以继续了解 [DeepSeek Harness](/wiki/products/deepseek-harness)。

## 节目中的讨论

在 Weekly #002 的“DeepSeek Flash 与 Harness 的使用体验”章节中，[杨攀谈到自己的中文检索体验](/weekly/002/transcript#quote-8316bc20929e3c03de42)，节目将 DeepSeek Flash 放在速度、成本、Harness 更新和交付瓶颈的语境中讨论。这是节目参与者的使用体验与判断，不是对模型能力的独立测评。可阅读[第 002 期对应章节](/weekly/002/transcript#chapter-08)。

## 常见问题

### DeepSeek 官网和网页版入口在哪里？

官网是 [deepseek.com](https://www.deepseek.com/)，在线对话入口是 [chat.deepseek.com](https://chat.deepseek.com/)。开发者使用的 [API 开放平台](https://platform.deepseek.com/)是另一个入口。

### DeepSeek API 免费吗，怎么收费？

API 按输入和输出 Token 用量计费，并区分模型、缓存命中等条件。账户有赠送余额不代表 API 永久免费；当前费率和扣费规则见[官方价格页](https://api-docs.deepseek.com/quick_start/pricing/)。

### DeepSeek API Key 在哪里申请，怎么接入？

在[官方开放平台](https://platform.deepseek.com/)申请 API Key，然后按[官方入门文档](https://api-docs.deepseek.com/)配置密钥、API 地址和模型名称。不要把密钥放进公开网页或公开代码仓库。

### DeepSeek API 现在应该填写哪个模型名称？

截至 2026 年 9 月，官方文档列出的模型 ID 为 `deepseek-flash` 和 `deepseek-v4-pro`。模型展示名称与 API ID 不一定相同；接入前应核对[官方模型说明](https://api-docs.deepseek.com/quick_start/pricing/)。

## 来源

- [DeepSeek 官方透明度中心](https://www.deepseek.com/transparency/)
- [DeepSeek API 模型列表](https://api-docs.deepseek.com/api/list-models/)
- [DeepSeek Responses API 文档](https://api-docs.deepseek.com/api/create-response/)
- [DeepSeek API 更新记录](https://api-docs.deepseek.com/updates/)
