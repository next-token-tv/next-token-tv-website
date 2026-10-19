---
entityType: product
entity: homekit
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'HomeKit：Apple 智能家居框架与配件认证｜Next Token Wiki'
seoDescription: 'HomeKit 是什么、开发者如何接入、配件认证与 Matter 支持、与米家的关系，以及 Weekly 第 006 期对智能家居体验的讨论。'
---

## HomeKit 是什么

HomeKit 是 [Apple](/wiki/brands/apple) 面向智能家居的连接框架。官方开发者页面的定义是：HomeKit 框架让应用能够"协调并控制来自多个厂商的支持智能家居配件，呈现统一的、以用户为中心的界面"。消费者一侧，HomeKit 对应 iPhone、iPad、Mac 等设备上的"家庭"（Apple Home）应用：配件的配置、控制和自动化在应用里完成，也可以通过 [Siri](/wiki/products/siri) 触发。

HomeKit 于 2014 年首次发布。此后 Apple 的智能家居接入方式扩展到 Matter 标准：官方开发者资料显示，MatterSupport 框架从 iOS 16.1、iPadOS 16.1、macOS Ventura、watchOS 9.1、tvOS 16.1 和 HomePod software 16.1 起可用（该代系统于 2022 年发布）。

本条目只覆盖 HomeKit 框架与 Apple 智能家居平台本身；[Apple](/wiki/brands/apple) 公司、[iPhone](/wiki/products/iphone)、[iOS](/wiki/products/ios) 等见各自条目；Apple 推出的家用智能设备见 [Apple HomeView](/wiki/products/apple-homeview) 条目。

## 用途与接入边界

对开发者而言，HomeKit 提供两条接入路径：

- 开发应用：基于 HomeKit 框架，在 iOS、iPadOS、macOS、watchOS、tvOS 上开发配置配件、创建控制动作、组合自动化（可由 Siri 触发）的应用。
- 开发配件：HomeKit 配件需要加入 Apple 的 MFi 计划，才能获得 HomeKit Accessory Protocol 规范、HomeKit Accessory Development Kit（ADK）与认证工具，并使用 "Works with Apple Home" 标识；Matter 配件则需通过 Connectivity Standards Alliance 的认证流程。

对使用者而言，HomeKit 只直接控制通过上述认证的配件。未经认证的设备能否接入取决于厂商是否提供合规的网关或升级，具体兼容性应以配件厂商的官方说明为准。官方开发者页面还列有 HomeKit Secure Video、ThreadNetwork、EnergyKit 等与家庭场景相关的能力，最新的支持范围以 [Apple 开发者 Home 页面](https://developer.apple.com/apple-home/)为准。

## 节目中的讨论

在 Weekly #006 的"智能家居为什么还这么难用？连接、体验与封闭生态"一章中，HomeKit 出现在参与者对 Apple 智能家居生态的评价里。[杨攀在回忆 Apple 的智能家居协议时说出 HomeKit 这个名字](/weekly/006/transcript#quote-6de598516b98521d24fa)，[并谈到通过网关把小米设备连接起来的思路](/weekly/006/transcript#quote-1df0708bef0a159a5973)；[橘子则说自己家的两个小音箱至今连不明白](/weekly/006/transcript#quote-25dd15bf3ae3b6c81e59)。[歸藏说刚开放一个月的 Muse，联网设备可能都已经比 HomeKit 多](/weekly/006/transcript#quote-2cdaf6b33bf1458827a8)。这些是节目参与者基于各自使用体验的判断，不构成对 HomeKit 兼容性的独立测评。更多讨论见[该章节](/weekly/006/transcript#chapter-08)。

## 常见问题

### HomeKit 是什么？

HomeKit 是 Apple 的智能家居连接框架，配套"家庭"应用使用，用于配置、控制兼容的智能配件并组合自动化。官方定义见 [Apple 开发者 Home 页面](https://developer.apple.com/apple-home/)。

### HomeKit 有什么用？

在支持 HomeKit 的应用或"家庭"应用里，可以添加经认证的智能家居配件、按房间分组、创建联动自动化，并通过 Siri 控制。具体可用功能取决于配件能力。

### HomeKit 能添加小米（米家）设备吗？

HomeKit 只直接支持通过 MFi 认证或 Matter 认证的配件。未经认证的米家设备无法直接添加，是否有合规接入途径（如支持认证的网关）由设备厂商决定，应查看具体设备的官方说明。

### HomeKit 和 Matter 是什么关系？

Matter 是跨厂商的智能家居连接标准，HomeKit 是 Apple 自己的框架与认证体系。Apple 从 iOS 16.1 及同代系统起通过 MatterSupport 框架支持 Matter 配件接入，两者是并存的接入路径。

### HomeKit 和米家有什么区别？

HomeKit 是 Apple 平台上的智能家居框架，配合 Apple 设备使用；米家是 Xiaomi 面向自家及合作设备的智能家居应用生态。两者的设备认证体系、适用设备和所依托的手机平台不同，选择取决于已有设备与所用手机生态，本文不对两者作优劣评价。

## 来源

- [Apple Developer — Home（HomeKit、Matter 与相关框架）](https://developer.apple.com/apple-home/)
