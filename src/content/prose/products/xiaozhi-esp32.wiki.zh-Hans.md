---
entityType: product
entity: xiaozhi-esp32
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: '小智 AI（xiaozhi-esp32）：开源 ESP32 语音聊天机器人｜Next Token Wiki'
seoDescription: '了解开源项目 xiaozhi-esp32 的定位、语音唤醒与大模型交互的工作方式、支持的 ESP32 硬件，以及与小爱音箱、超级小爱和 ESP32 芯片的区别。'
---

## 定义

小智 AI（xiaozhi-esp32）是面向 ESP32 等开发板的开源语音聊天机器人软件，通过语音和大模型交互。项目由 GitHub 用户 78 维护，README 自述为"一个基于 MCP 的聊天机器人"，代码以 MIT 许可证开源，项目官网为 [xiaozhi.me](https://xiaozhi.me/)，代码仓库见 [GitHub 上的 78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32)。

## 工作方式

按仓库 README 的描述，设备端固件负责离线语音唤醒（基于 ESP-SR，唤醒词可自定义）、录音与播放；语音识别、大模型对话与语音合成通过 WebSocket 或 MQTT + UDP 等传输方式与云端服务完成。README 还列出实时端到端语音模型、声纹识别、屏幕表情与摄像头输入等能力，并支持通过 MCP 协议控制设备端外设（扬声器、LED、舵机等）与云端服务（智能家居、电脑控制等）。

## 使用场景

主要场景是自制可以语音对话的设备：拿一块 [ESP32](/wiki/products/esp32) 开发板——README 列出的板型包括 Espressif ESP32-S3-BOX-3、[M5Stack](/wiki/products/m5stack) CoreS3、M5Stack AtomS3R 等——刷入固件后即为语音聊天终端。社区也把它作为旧智能硬件改造的软件选项，第 007 期节目提到的"把旧音箱改成小智"就属于这一类。

## 易混概念

- 小智 AI 是社区开源项目，不是小米官方产品；它与[小爱音箱](/wiki/products/xiaoai-speakers)、[超级小爱](/wiki/products/hyperxiaoai)代表的小米语音助手体系无关。
- 与 [ESP32](/wiki/products/esp32) 的关系：ESP32 是乐鑫的微控制器芯片家族，小智是运行在这些芯片和开发板上的固件项目，两者分属芯片与软件两个层次。
- 搜索"小智 AI"会混入表情包、教学课程等同名内容；本条目只指 78 维护的 xiaozhi-esp32 项目。

## 节目中的讨论

在 Weekly #007 的"Omarchy、旧手机与重写软件的可能性"章节，杨攀提出[旧智能音箱里的软件可以整个重写，"改成小智也行"](/weekly/007/transcript#quote-72707cd66b812d6566ec)，橘子随即说改成 Grok Bot 也可以。这是参与者对重写旧硬件软件可能性的讨论，不构成对项目能力的验证或对改造步骤的说明。可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-20)。

## 常见问题

### 小智 AI 的官网和代码仓库在哪里？

官网是 [xiaozhi.me](https://xiaozhi.me/)，代码在 [GitHub 仓库 78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32)，以 MIT 许可证开源。

### 小智 AI 支持哪些硬件？

[仓库 README](https://github.com/78/xiaozhi-esp32) 列出的芯片包括 ESP32、ESP32-C3、ESP32-C5、ESP32-C6、ESP32-S3、ESP32-P4，开发板涵盖 Espressif ESP32-S3-BOX-3、M5Stack CoreS3 等大量板型；支持列表以仓库实时内容为准。

### 可以把旧的小爱音箱改成小智吗？

这是社区改造玩法：第 007 期节目中杨攀提出过设想，但 README 列出的官方支持硬件以开发板为主，旧音箱需要自行适配扬声器、麦克风等部件。是否可行取决于具体硬件，评估依据见[项目仓库](https://github.com/78/xiaozhi-esp32)说明。

## 来源

- [xiaozhi-esp32 GitHub 仓库](https://github.com/78/xiaozhi-esp32)
- [小智官网 xiaozhi.me](https://xiaozhi.me/)
- [第 007 期逐字稿相关章节](/weekly/007/transcript#chapter-20)
