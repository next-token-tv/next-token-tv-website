---
entityType: product
entity: deepseek-chat
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'DeepSeek 对话应用：网页与 App 入口、使用方式与产品分层｜Next Token Wiki'
seoDescription: '了解 DeepSeek 对话应用（DeepSeek App）的定位与入口、它与模型家族和 API 的分层关系，以及第 007 期节目对其响应速度的体验描述。'
---

## 定义

DeepSeek 对话应用是 DeepSeek 面向个人用户的 AI 对话产品，提供网页与移动 App 两种形态，网页入口为 [chat.deepseek.com](https://chat.deepseek.com/)。它调用 DeepSeek 模型家族完成对话；官方更新记录见 [API 文档更新页](https://api-docs.deepseek.com/updates/)。

## 工作方式

用户在对话界面提问，应用调用 DeepSeek 模型生成回答；应用内的模型与功能随官方更新变化，当前可用的模型名称与能力以[官方透明度中心](https://www.deepseek.com/transparency/)和模型列表为准，不能从应用名称推断。对话应用不等于底层模型：同一个模型家族同时通过开发者 API 对外提供。

## 使用场景

典型场景是日常问答、写作、代码问题和检索类提问，适合在网页或手机上直接使用。开发者若要把模型接入自己的应用或 Agent，走的是 [DeepSeek 开放平台](https://platform.deepseek.com/)的 API，而不是对话应用。

## 易混概念

三层产品容易混淆：[DeepSeek 模型](/wiki/products/deepseek) 指模型家族，[DeepSeek 公司](/wiki/brands/deepseek) 是提供者；本条目的对话应用（DeepSeek App）是面向个人用户的界面；[DeepSeek 开放平台](https://platform.deepseek.com/)的 API 是面向开发者的按量计费服务。此外，与把搜索和网页获取能力单独提供的 [DeepSeek Search / Fetch API](/wiki/products/deepseek-search) 也属于不同层次。

## 节目中的讨论

在 Weekly #007 的"DeepSeek 的推理速度，怎样改变产品体验？"章节，杨攀说[很多人最近不用 DeepSeek 的 App 了、自己"最近又回归到用 DeepSeek App"，体感是"问问题的发出去那一刹那，答案就秒回来"](/weekly/007/transcript#quote-c527db7301f884083b47)，并补充[它在 App 里"每秒可能几百个 Token"](/weekly/007/transcript#quote-3c01b7329a38914309cf)。这是参与者的使用体感，不是对应用或模型的测评（[对应章节](/weekly/007/transcript#chapter-02)）。

## 常见问题

### DeepSeek App 的官方入口在哪里？

网页版入口是 [chat.deepseek.com](https://chat.deepseek.com/)；移动 App 通过各应用商店获取，认准 DeepSeek 官方发布的应用，入口以[官方页面](https://chat.deepseek.com/)为准。

### DeepSeek App 用的是什么模型？

它调用 DeepSeek 模型家族；具体型号与功能随官方更新变化，以[官方透明度中心](https://www.deepseek.com/transparency/)和模型列表为准。

### DeepSeek App 和 DeepSeek API 有什么区别？

App 是面向个人用户的对话入口；API 是开发者在[开放平台](https://platform.deepseek.com/)按调用量计费接入模型的服务，两者的账户体系与计费方式不同。

## 来源

- [DeepSeek 在线对话入口](https://chat.deepseek.com/)
- [DeepSeek 官方透明度中心](https://www.deepseek.com/transparency/)
- [DeepSeek API 更新记录](https://api-docs.deepseek.com/updates/)
- [DeepSeek 开放平台](https://platform.deepseek.com/)
