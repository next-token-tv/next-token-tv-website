---
entityType: product
entity: muse-home-link
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Muse Home Link：把 Meta Muse 接入家庭网络与智能设备的硬件｜Next Token Wiki'
seoDescription: '了解 Muse Home Link 的硬件规格、安装方式、获取条件，它与 Muse 个人智能体和 Muse Charm 的分工，以及第 005 期节目中的讨论。'
---

## Muse Home Link

Muse Home Link 是 [Meta](/wiki/brands/meta) 为 [Muse 个人智能体](/wiki/products/muse-agent)推出的一款 USB-C 小型硬件，作用是把 Muse 连入家庭 Wi-Fi，让它能访问家里兼容的智能设备，以及任何提供本地 HTTP API 的设备。官方页面将其描述为"Connect Muse to your home Wi-Fi so it can reach compatible devices you already own, or anything you build with a local HTTP API"，并给出灯控、电视控制、打印文档等由社区技能（community skills）实现的使用示例。

## 规格与安装方式

官方页面列出的规格包括乐鑫 ESP32-C5 芯片（32 位 RISC-V，240 MHz）、8 MB PSRAM、8 MB 闪存、双频 Wi-Fi 6（2.4 与 5 GHz）、USB-C 与 USB-A 接口（USB 用于供电）、LED 指示灯，机身尺寸 35 × 42 × 10 毫米。固件基于开源的 ESP32 Device SDK 构建，但官方说明设备只能运行官方固件，不能自行刷写。

安装流程按官方页面为：把设备插上 USB 电源、放在路由器附近，在 Muse 应用中通过蓝牙低功耗（BLE）配对，为其选择家庭 Wi-Fi 网络，然后安装社区技能，让 Muse 触达家中的设备。社区技能安装自 GitHub，官方页面列出的既有集成包括 Philips Hue、Sonos、Apple TV、Google Nest 音箱与三星电视；页面同时提示这些技能由社区构建，不应依赖它处理家庭安防、医疗等安全关键场景。这类与家庭网络交互的硬件天然涉及隐私与设备权限，接入前应阅读官方说明并自行评估范围。

## 获取方式

官方页面标注该设备"Free with an active Muse subscription in the United States only, limit one per subscriber"（仅限美国、随有效 Muse 订阅免费领取、每个订阅限一台），并写明"Ships in October, first come, first served"——在页面预留名额只是排队，不构成订单。发行范围与后续开放情况以 [Muse Home Link 官方页](https://gadgets.muse.ai/home-link)为准。

## 节目中的讨论

Weekly #005 在"小硬件成为 Personal Agent 的物理外挂"章节讨论了这类设备。[杨攀把 Muse 开放周边硬件的思路概括为：这些硬件就是 Muse 这个 Personal Agent 的"物理外挂"，用户用什么硬件都行，等于扩大了它的生态](/weekly/005/transcript#quote-d0aba6f744c615e3d3a3)。[歸藏把 Muse Home Link 称为一个"准入"：有一个 ESP32 就能做 Mesh 网关，进而接管全屋智能硬件——官方的 Muse Home Link 本来就是做 Mesh 的，也可以自己用一个 ESP32 搓一个；设备注册会员免费领，"领完了那个想象力就大了"](/weekly/005/transcript#quote-61d3d46e957ee9a7f1a9)。他接着说，[它可以接管家里的摄像头和监控，知道什么时候开空调、什么时候关空调](/weekly/005/transcript#quote-6e73b156ac8863adf170)，[甚至能通过音箱去广播](/weekly/005/transcript#quote-6001961b1939421d6e91)。他提到的"注册会员免费领"与官方页"随有效订阅免费领取"的口径一致；"自己用 ESP32 搓网关"是节目参与者的设想，官方页未提供这种玩法，且明确设备固件不可刷写。这些是节目参与者对产品方向的解读，不是官方结论。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-16)。

## 常见问题

### Muse Home Link 是什么？

它是 Meta 为 Muse 个人智能体推出的 USB-C 小硬件，把 Muse 连入家庭 Wi-Fi，使其能控制兼容智能设备或调用本地 HTTP API 的设备，官方介绍见 [Muse Home Link 官方页](https://gadgets.muse.ai/home-link)。

### Muse Home Link 怎么安装？

按官方页面：插上 USB 电源并放在路由器附近，在 Muse 应用里通过蓝牙配对，为它选择家庭 Wi-Fi，然后安装社区技能（如 Philips Hue、Sonos、Apple TV、Google Nest、三星电视）让 Muse 访问设备。

### Muse Home Link 多少钱，怎么获得？

官方页标注仅限美国、随有效 Muse 订阅免费领取、每个订阅限一台，"Ships in October, first come, first served"；领取名额只是排队。是否扩展到其他地区以官方页为准。

### Muse Home Link 和 Muse Charm 有什么区别？

两者都是 Muse 的周边硬件：Home Link 是固定在家的网络入口，让 Muse 触达家中设备；Muse Charm 是随身携带的语音交互设备（官方尚未公布发售安排），区别说明见 [Muse Charm 条目](/wiki/products/muse-charm)。

### 可以自己刷固件或接入任意设备吗？

官方页说明固件基于开源 ESP32 Device SDK，但设备只运行官方固件、不能刷写；任意设备的官方路径是本地 HTTP API 加社区技能。节目参与者提出的"自己用 ESP32 搓 Mesh 网关"是个人设想，不是官方支持的方式。

## 来源

- [Muse Home Link 官方页](https://gadgets.muse.ai/home-link)
- [Meta 新闻稿：Introducing Muse, a Personal AI Agent](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)
