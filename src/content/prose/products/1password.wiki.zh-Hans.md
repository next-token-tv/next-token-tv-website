---
entityType: product
entity: 1password
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: '1Password：密码与通行密钥管理工具的平台、套餐与开发者接口｜Next Token Wiki'
seoDescription: '了解 1Password：密码、通行密钥与密钥的管理方式，覆盖 macOS/Windows/iOS/Android/Linux 的客户端与 CLI，个人与企业套餐，以及 Weekly 节目中给 Agent 授权登录的用法。'
---

## 1Password 是什么

1Password 是一款密码与登录信息管理工具：把密码、通行密钥（passkey）、信用卡等登录和支付信息保存在加密的保险库（vault）里，通过浏览器扩展和应用自动填充。官方页面列出的核心功能还包括双因素认证、密码生成、安全共享，以及提醒弱密码和泄露凭据的 Watchtower；面向开发者的 Secrets Management 用来管理 API 密钥等基础设施凭据。企业侧，1Password 提供 Unified Access 平台，覆盖企业密码管理、SaaS 管理、特权访问、设备信任，以及给 AI Agent 和机器负载在运行时下发授权凭据的 Credential Broker。

## 使用方式与边界

客户端覆盖 macOS、Windows、iOS、Android、Linux，另有浏览器扩展和命令行工具，下载入口在[官方下载区](https://1password.com/downloads)。个人使用分 Individual 和 Families 两个套餐，年付计费，均有 14 天免费试用；企业方案为报价制。具体费率会调整，以[官方个人价格页](https://1password.com/personal)和企业[价格页](https://1password.com/pricing)为准。

开发者接口是独立的一层：命令行工具（CLI）可以把凭据接入脚本和自动化流程，Secrets Management 的文档在 [developer.1password.com](https://developer.1password.com/)。使用边界上，1Password 管理的是凭据的存取与授权，网页或应用本身的登录流程、双因素策略仍由各服务决定；把保险库共享给他人或让外部工具读取凭据时，共享范围由使用者自己配置和审查。

## 节目中的讨论

Weekly #003 的"语音输入产品与实时反馈"章节里，[歸藏介绍自己给上网的 Agent 装 1Password：登录靠授权而不是明文密码，信用卡也存在里面，由授权后自动填写](/weekly/003/transcript#quote-ce5caa2ce3bb262342a5)。同一段讨论中，[杨攀提到 Chrome 已经能直接读取苹果系统钥匙串里的密码，认为除开 1Password 的功能之外，基本体验 Chrome 自己已经能搞定](/weekly/003/transcript#quote-412f36d175e0184f9616)。这是两种不同的个人取舍：一个把授权登录交给专门的凭据工具，一个用系统自带的密码库满足基本需求。

## 常见问题

### 1Password 是什么？

1Password 是密码与登录信息管理工具：用加密保险库保存密码、通行密钥、信用卡等凭据，通过应用和浏览器扩展自动填充，并提供双因素认证、Watchtower 安全提醒和开发者 Secrets Management 等功能。

### 1Password 支持哪些平台，在哪里下载？

官方客户端覆盖 macOS、Windows、iOS、Android、Linux，另有各主流浏览器的扩展和 CLI，下载入口在[官方下载区](https://1password.com/downloads)。

### 1Password 怎么收费？

个人使用分 Individual 和 Families 两个套餐，按年付费，均有 14 天免费试用；家庭版最多邀请 5 名成员。企业方案（含 Unified Access 平台各产品）为报价制。当前价格见[官方个人价格页](https://1password.com/personal)与[企业价格页](https://1password.com/pricing)。

### 1Password 有 CLI 或开发者工具吗？

有。命令行工具可以把保险库凭据接入脚本与自动化；面向开发者的 Secrets Management 管理 API 密钥、证书等基础设施凭据，文档在 [developer.1password.com](https://developer.1password.com/)。

### 1Password 能保存通行密钥（passkey）吗？

能。官方页面把通行密钥列为核心功能之一，与密码、双因素认证、自动填充并列保存和管理。

## 来源

- [1Password 官网](https://1password.com/)
- [1Password 个人价格页](https://1password.com/personal)
- [1Password 企业价格页](https://1password.com/pricing)
- [1Password 开发者文档](https://developer.1password.com/)
