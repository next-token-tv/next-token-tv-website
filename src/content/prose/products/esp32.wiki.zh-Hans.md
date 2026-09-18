---
entityType: product
entity: esp32
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ESP32：乐鑫无线微控制器家族、选型与开发入口｜Next Token Wiki'
seoDescription: '了解 ESP32 芯片家族的定位、型号分支、ESP-IDF 等开发方式，以及 Weekly 节目把 ESP32 开发板比作"新乐高"的讨论。'
---

## ESP32 是什么

ESP32 是乐鑫（Espressif Systems，见 [Espressif](/wiki/brands/espressif)）推出的无线微控制器芯片家族，在芯片上集成 Wi-Fi 与蓝牙，面向物联网和嵌入式设备。第一代 ESP32 于 2016 年 9 月发布，是 ESP8266 的后继产品。此后乐鑫按 ESP32-S、ESP32-C、ESP32-H、ESP32-P 等编号扩展出多个系列，例如 ESP32-S3、ESP32-C3、ESP32-C6 和 ESP32-P4；不同芯片采用 Xtensa LX6/LX7 或 RISC-V 处理器，无线与外设能力各有侧重。官方[产品页](https://www.espressif.com/en/products/socs/esp32)列出全部系列，选型应以该页面为准。

## 用途与使用边界

ESP32 适合为小型设备添加无线连接和简单控制：智能家居传感器、桌面小工具、机器人部件、自制仪表等都属于典型场景。官方把产品分为芯片、模组和开发板三层：芯片面向量产硬件，模组集成天线与射频部件，DevKit 开发板则供直接上手实验。开发软件以官方框架 [ESP-IDF](https://github.com/espressif/esp-idf) 为主，官方同时提供对 Arduino、Zephyr 等生态的支持，以及音频、AI 语音等专用组件。芯片的具体规格、认证和供货状态会随型号变化，下单与设计前应核对官方技术文档。

## 节目中的讨论

Weekly #001 中有一章以“ESP32 成为“新乐高”，全民发明家时代来了”为题，歸藏在其中形容[ESP32 开发板"成了新乐高"，天天卖断货](/weekly/001/transcript#quote-fd8b64bb3e29bbdc9c33)；杨攀接着聊到王乐的 [Microduck](/wiki/products/microduck) 机器人用的"不是一个特别高配的版本"，橘子则认为很多人就是把它当玩具。这一章把 ESP32 放在"全民发明家"的语境中：便宜、无线齐全、生态大，普通人也能像拼积木一样做出自己的设备。这是节目参与者的观察与比喻，不是对具体型号供货情况的说明。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-20)。

## 常见问题

### ESP32 是什么？

ESP32 是乐鑫推出的集成 Wi-Fi 与蓝牙的微控制器芯片家族，配套模组、开发板和 ESP-IDF 等软件工具，广泛用于物联网和自制电子设备。

### ESP32 怎么入门开发？

一条常见路径是：买一块官方 DevKit 开发板，然后选择软件框架——官方主推 [ESP-IDF](https://github.com/espressif/esp-idf)，也可以用 Arduino 等更轻的方式起步；官方产品页提供技术文档和示例入口。

### ESP32 有哪些型号，该选哪个？

家族按 S、C、H、P 等系列划分，ESP32-S3、ESP32-C3、ESP32-C6、ESP32-P4 等都是常见分支；不同型号的 CPU（Xtensa 或 RISC-V）、无线能力和外设差异较大，选型时对照[官方 SoC 列表](https://www.espressif.com/en/products/socs/esp32)与数据手册。

### ESP32 和 ESP8266 有什么区别？

ESP32 是 ESP8266 的后继产品：芯片家族覆盖更多 CPU 架构与无线组合，系列也划分得更细。老项目是否值得迁移，取决于具体型号与外设需求。

### 为什么节目里把 ESP32 叫"新乐高"？

这是 Weekly #001 中歸藏的比喻：开发板价格低、无线能力齐全、社区生态大，普通人可以像拼积木一样快速做出能用的设备。见[节目中的讨论](#节目中的讨论)。

## 来源

- [Espressif ESP32 产品页](https://www.espressif.com/en/products/socs/esp32)
- [Espressif 2016 年 ESP32 发布新闻](https://www.espressif.com/en/media_overview/news/20160907-esp32briefing)
- [ESP-IDF 官方 GitHub 仓库](https://github.com/espressif/esp-idf)
- [ESP32 — Wikipedia](https://en.wikipedia.org/wiki/ESP32)
