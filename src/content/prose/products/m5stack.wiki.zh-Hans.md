---
entityType: product
entity: m5stack
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'M5Stack 开发套件：模块化 IoT 硬件的定位、产品线与开发方式｜Next Token Wiki'
seoDescription: '了解 M5Stack 模块化开发套件的产品线、ESP32 硬件基础与开发工具链，以及 Weekly 第 005 期主理人用 AI 写固件的体验。'
---

## M5Stack 是什么

M5Stack 是一个模块化开源物联网开发平台，其硬件以 [ESP32](/wiki/products/esp32) 微控制器为核心构建，官方将其描述为"快速原型开发的模块化 IoT 开发套件"（Modular IoT Dev Kits for Rapid Prototyping）。标准硬件是 5×5 厘米的模块化系统，模块间可堆叠，板载 microSD 卡槽、USB-C 接口和扩展连接器。官方站点为 [m5stack.com](https://m5stack.com/)。

## 产品线与开发工具

M5Stack 的硬件按形态分为多个系列：Core 主控系列、Stick、Atom、Cardputer、Stamp 模组，以及传感器、执行器等 Unit 配件，另有面向不同场景的整机方案。[M5Stack StopWatch](/wiki/products/m5stack-stopwatch) 等具体开发板也属于这一体系。软件方面，官方提供图形化编程工具 UiFlow 与 AiFlow，支持 Arduino、ESP-IDF 等主流嵌入式开发框架，并提供 M5Burner 烧录工具与产品文档。

这类套件的典型用途是物联网原型验证、教学和嵌入式项目开发：把主控、屏幕、传感器模块堆叠起来，先快速搭出可运行的原型，再决定是否转向定制硬件。

## 节目中的讨论

在 Weekly #005 的"ModRetro、AI Passport 与 ESP32 改造"章节中，[歸藏回忆自己以前拿 M5Stack 或 ESP32 玩小硬件的经历](/weekly/005/transcript#quote-a7989c59e165750403f9)：当时 AI 写这些固件还不太熟练，写出来的东西问题较多；对比之下，据节目参与者描述，Meta 的 Muse 为常见 ESP32 设备（包括 M5Stack 的圆形 StopWatch 等）提供了可直接刷入的通用固件，[杨攀把这类固件称作"Agent Ready 的固件"](/weekly/005/transcript#quote-b78e87424d126fabbeca)。[歸藏还提到改造后的设备如今成了他日常会真的拿来用的东西](/weekly/005/transcript#quote-1b3c1b62e943e12869f0)。这些是节目参与者对 AI 辅助嵌入式开发变化的亲身体验，不是对 M5Stack 产品的评测。完整语境见[第 005 期对应章节](/weekly/005/transcript#chapter-15)。

## 常见问题

### M5Stack 是什么？

它是基于 ESP32 的模块化开源 IoT 开发平台，硬件以 5×5 厘米标准模块堆叠组成，产品线覆盖 Core 主控、Stick、Atom、Cardputer、Stamp 和 Unit 传感器/执行器等，用于物联网原型和嵌入式项目开发。

### M5Stack 和 ESP32 是什么关系？

M5Stack 的核心硬件普遍以[乐鑫（Espressif）](/wiki/brands/espressif)的 ESP32 系列微控制器为核心，官方文档与开发框架（Arduino、ESP-IDF）也围绕 ESP32 生态展开。

### M5Stack 用什么软件编程？

官方提供图形化工具 UiFlow 和 AiFlow，同时支持 Arduino 与 ESP-IDF 开发框架；烧录可使用 M5Burner。产品文档见 [docs.m5stack.com](https://docs.m5stack.com/)。

### M5Stack 的产品在哪里买、文档在哪里看？

官方商店是 [m5stack.com](https://m5stack.com/)，产品文档与开发资料在 [docs.m5stack.com](https://docs.m5stack.com/)。

## 来源

- [M5Stack 官网](https://m5stack.com/)
- [M5Stack 产品文档](https://docs.m5stack.com/)
