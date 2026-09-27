---
entityType: product
entity: shopify
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Shopify：电商平台定位、收费方案与面向 Agent 的开放接口｜Next Token Wiki'
seoDescription: '了解 Shopify 的电商平台定位、订阅方案、Sidekick 与 Agent 工具，以及 Weekly 节目中关于购物 Agent 与 Shopify 的讨论。'
---

## Shopify 是什么

Shopify 是一家全球电商平台公司，官方将其描述为"完整的商务平台"，供商家在线上和线下销售——无论是副业、零售店还是全球品牌。商家在 Shopify 上搭建自己的网店并获得配套的商业后台，而不是在平台内租一个摊位；官网自述"Since 2006"（自 2006 年起）运营，页面列出的规模数字包括：Shopify 商家累计销售超过 1 万亿美元、2023 年有超过 6.75 亿独立买家在 Shopify 商店购物、美国电商销售额的 10% 经过 Shopify 处理（官方自述口径），公司介绍见 [Shopify 官网](https://www.shopify.com/about)。

Shopify 的产品矩阵覆盖开店的完整链路：建站（网站生成器、主题、域名）、销售渠道（在线商店、Point of Sale 线下收银、Shop App、社交与市场渠道、B2B）、结账与 Shopify Payments、物流与财务、营销与分析。官方页面还列有 Sidekick（商家侧 AI 助手）与超过 1.3 万个应用的官方应用商店。

## 使用与边界

对商家而言，Shopify 的核心是"自己的店面 + 商业后台"：商品、订单、库存、支付和客户关系在同一个后台管理，前台通过主题和域名面向消费者。订阅方案与交易费率属于时效信息，官方列出 Basic、Grow、Advanced、Plus 几档，现行价格与费率以[官方定价页](https://www.shopify.com/pricing)为准。

对开发者和 AI 应用而言，Shopify 提供面向 Agent 的官方接口：开发者文档记载，此前的 Storefront MCP 让 AI Agent 通过模型上下文协议（MCP）搜索商店目录和管理购物车，其目录与购物车工具已被 [Universal Commerce Protocol（UCP）](https://shopify.dev/docs/apps/build/storefront-mcp)取代，迁移后的端点要求请求附带 agent profile；商家还可以使用无需写代码的 Inbox agent。也就是说，Shopify 在官方层面把"被 Agent 购物"作为平台能力来建设，而不是放任外部 Agent 抓取。

## 节目中的讨论

在 Weekly #004 的"开放生态、资源与商业闭环"章节，参与者讨论 Muse 能在亚马逊代用户下单、随后被亚马逊封禁的转述消息。在这一语境中，[歸藏笑称 Shopify CEO 会"疯了"、"嘴都笑烂了"](/weekly/004/transcript#quote-65426e4302ce787fd2f6)、[杨攀接话说"Shopify 马上就涨"](/weekly/004/transcript#quote-c8d1061b1c5571c48583)——两人以调侃的方式表达了一个判断：欢迎购物 Agent 的平台（如 Shopify）会从中受益。这是节目参与者的玩笑式推测，不是 Shopify 的官方表态；Shopify 面向 Agent 的官方接口见上节与[开发者文档](https://shopify.dev/docs/apps/build/storefront-mcp)。完整语境见[第 004 期对应章节](/weekly/004/transcript#chapter-09)与 [Muse 个人智能体](/wiki/products/muse-agent)、[亚马逊](/wiki/products/amazon)相关页面。

## 常见问题

### Shopify 是什么平台？

Shopify 是面向商家的电商平台：商家用它搭建自己的网店、管理订单与库存，并在线上、线下多个渠道销售。官方定位与能力清单见 [Shopify 官网](https://www.shopify.com/about)。

### Shopify 怎么收费？

Shopify 采用订阅制：官方定价页列出 Basic、Grow、Advanced、Plus 几档月费方案，另有支付通道等交易相关费用。具体价格与费率随地区和时间变化，以[官方定价页](https://www.shopify.com/pricing)实时显示为准。

### Shopify 适合什么人用？

官方描述的目标用户覆盖"副业、零售店或全球品牌"：需要自己掌控店面与品牌、同时要线上线下统一管理商品和订单的商家。个人闲置出售这类轻量需求可能更适合其他渠道，官方并未对使用门槛给出建议。

### Shopify 怎么接入 AI Agent？

开发者可使用 Shopify 官方文档中的 agent 工具：此前提供 Storefront MCP（目录与购物车工具），现已被 Universal Commerce Protocol（UCP）取代，端点为商店的 `/api/ucp/mcp`，请求需附带 agent profile；商家无需写代码可使用 Inbox agent。见[官方迁移文档](https://shopify.dev/docs/apps/build/storefront-mcp)。

### Shopify 和 Etsy、亚马逊这类平台有什么区别？

Shopify 给商家的是独立店面和自有的商业后台，销售渠道中的"社交与市场"只是可选渠道之一；商家是否以及在哪些平台上额外开店，由商家自己决定。与具体平台的费率对比属于时效信息，以各平台官方说明为准。

## 来源

- [Shopify 官网 About](https://www.shopify.com/about)
- [Shopify 官方定价页](https://www.shopify.com/pricing)
- [Shopify Careers（公司沿革与规模自述）](https://www.shopify.com/careers)
- [Shopify 投资者关系](https://www.shopify.com/investors)
- [Shopify 开发者文档：Storefront MCP 迁移与 UCP](https://shopify.dev/docs/apps/build/storefront-mcp)
