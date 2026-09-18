---
entityType: product
entity: chrome
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Chrome：Google 的跨平台浏览器与内置 AI 功能｜Next Token Wiki'
seoDescription: 'Chrome 的定位、下载入口、与 Chromium 的关系、Gemini Nano 等内置 AI 能力，以及 Next Token 节目中关于浏览器本地模型的讨论。'
---

## Chrome 是什么

Chrome 是 [Google](/wiki/brands/google) 开发的跨平台网页浏览器，2008 年 9 月首次面向 Windows 发布，此后扩展到 macOS、Linux、iOS 和 Android 等平台，也是 ChromeOS 的核心组件。Chrome 的大部分源码来自 Google 主导的开源项目 Chromium。Google 的 AI 助手 [Gemini](/wiki/products/gemini) 也以"Gemini in Chrome"的形式进入这款浏览器。

## 使用方式与边界

- 下载与平台：Windows、Mac、iPhone、iPad 与 Android 版本都通过[官方网站](https://www.google.com/chrome/)下载；另有 Chrome Beta、Dev、Canary 等先行版本用于测试新功能。
- 更新节奏：官方页面说明 Chrome 每四周发布一次稳定版更新。
- 内置 AI：官网列出的 AI 功能包括 Gemini in Chrome 与 AI Mode 搜索；各功能的可用范围、语言与订阅要求以官方页面说明为准。面向开发者的 [Prompt API](https://developer.chrome.com/docs/ai/prompt-api) 在 Chrome 内使用 Gemini Nano 模型：模型在首次使用时单独下载、完全在本地运行，使用模型时不向 Google 或第三方发送数据。
- 账号与安全：登录 Google 账号后可在设备间同步密码、标签页与设置，并提供 Safety Check、Enhanced Safe Browsing、隐私指南等功能。

## 节目中的讨论

在 Weekly #001"本地模型进入浏览器和机器人"章节，讨论从 Perplexity Comet 在本地自动安装推理模型展开。[杨攀提到 Chrome 里有个 Gemini Nano，是可以在线下载的小模型](/weekly/001/transcript#quote-e0c08b1b4dafc9684b32)；歸藏和橘子认为这个模型太小，浏览器厂商需要自装更大的本地模型才能承担实际任务。这是节目参与者当时对本地模型路线的观察与判断。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-21)。

## 常见问题

### Chrome 在哪里下载？

Windows、Mac、iPhone、iPad 和 Android 版本都通过[官方网站](https://www.google.com/chrome/)下载；移动端也可以在各自的应用商店中搜索"Chrome"。

### Chrome 和 Chromium 有什么区别？

Chrome 是 Google 的正式浏览器产品，在 [Chromium](https://www.chromium.org/) 开源项目基础上加入自动更新、部分媒体编解码与 Google 服务集成等专有组件；Chromium 是上游的开源项目本身，大部分代码相同但不包含这些组件。

### Chrome 里的 Gemini Nano 是什么？

Gemini Nano 是 Chrome 内置 AI 功能所用的本地小模型。按官方开发者文档，模型在功能首次使用时下载到设备、在本地运行，使用时不向 Google 发送数据；开发者可以通过 [Prompt API](https://developer.chrome.com/docs/ai/prompt-api) 调用它。功能可用性随版本和硬件条件变化，以官方文档为准。

### Chrome 多久更新一次？

官方页面说明 Chrome 每四周发布一次稳定版更新；想提前体验新功能可以使用 Beta、Dev 或 Canary 渠道。

## 来源

- [Chrome 官方网站](https://www.google.com/chrome/)
- [Chrome for Developers：The Prompt API](https://developer.chrome.com/docs/ai/prompt-api)
- [Chromium 项目官网](https://www.chromium.org/)
- [Wikipedia: Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome)（2008 年发布与 Chromium 关系等历史事实）
