---
entityType: product
entity: m5stack-stopwatch
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'M5Stack StopWatch：圆形 AMOLED 触摸屏开发板｜Next Token Wiki'
seoDescription: '了解 M5Stack StopWatch 的硬件构成、开发方式与适用场景，以及 Weekly 节目中把它作为 ESP32 小硬件刷固件使用的讨论。'
---

## StopWatch 是什么

StopWatch 是 [M5Stack](/wiki/products/m5stack) 推出的一款圆形 AMOLED 触摸屏开发板（官方文档 SKU：C152），定位为面向便携与交互场景的开发硬件。官方文档列出它的核心配置：ESP32-S3R8 主控（双核 240 MHz，16 MB Flash、8 MB PSRAM）、1.75 英寸 466×466 圆形 AMOLED 触摸屏、6 轴 IMU、RTC、麦克风与 1 W 喇叭、振动马达、450 mAh 电池和 2.4 GHz Wi-Fi。它属于 [ESP32](/wiki/products/esp32) 生态的一块整机开发板：芯片由乐鑫提供，M5Stack 把屏幕、传感器、电源和外壳集成成开箱可用的成品。

## 用途与使用边界

官方给出的典型场景包括便携智能设备、电子徽章和轻量物联网终端。开发方式支持 UiFlow2 图形化编程、Arduino IDE（经 M5Unified/M5GFX 库）以及 ESP-IDF/PlatformIO，固件也可以通过 M5Burner 烧录（官方文档以小智语音助手等为例）。圆形屏幕、麦克风、喇叭和振动马达使它常被做成可穿戴或桌面小设备，而不只是面包板上的实验电路。

需要注意官方文档中的硬件版本提醒：v1.0 版板上有一处贴纸把引脚标为 "BAT"，实际是 5V 输入，文档明确警告该引脚不可接电池；v1.0.1 已修正定义。下单和接线前应核对[官方文档](https://docs.m5stack.com/en/core/StopWatch)中的版本说明与原理图。

## 节目中的讨论

Weekly #005 的“ModRetro、AI Passport 与 ESP32 改造”章节里，歸藏介绍 Meta 的 Muse 为常见 ESP32 设备提供了通用固件，[其中就点名了“他那个叫 Stopwatch，那个圆圈”的设备](/weekly/005/transcript#quote-a7989c59e165750403f9)：固件直接刷进去就能连上使用。他还当场描述了自己在 StopWatch 上用 Codex 改固件的经历——改 UI、加中文显示、把默认角色换成自己的橘猫动画，并补充语音输出等原来固件没有的能力。杨攀把这类玩法称为“电子乐高”。这段讨论把 StopWatch 放在“小硬件成为 Personal Agent 物理外挂”的语境中：成品的 ESP32 整机加 AI 生成的固件改造，让原来玩过就丢的设备变成日常使用的东西。这是节目参与者的体验，不代表官方配合或通用效果。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-15)。

## 常见问题

### M5Stack StopWatch 是什么？

M5Stack 的圆形 AMOLED 触摸屏开发板：ESP32-S3 主控、1.75 英寸 466×466 圆屏，集成 IMU、麦克风、喇叭、振动马达和电池，官方定位为便携与交互场景的开发硬件。

### StopWatch 怎么开发固件？

支持 UiFlow2 图形化编程、Arduino IDE 和 ESP-IDF/PlatformIO；固件可经 M5Burner 烧录。入门资料见[官方文档](https://docs.m5stack.com/en/core/StopWatch)，原理图与结构文件在官方 GitHub 提供。

### StopWatch 能接入 Home Assistant 或语音助手吗？

社区里有 Home Assistant、ESPHome 相关的玩法讨论，官方文档也以语音助手固件作为 M5Burner 烧录示例。这些属于社区与固件生态的用法，是否可行取决于具体固件版本，建议从[官方文档](https://docs.m5stack.com/en/core/StopWatch)和项目仓库确认。

### StopWatch 和普通 ESP32 开发板有什么区别？

普通 DevKit 开发板是裸的芯片引出板；StopWatch 是把圆屏、触摸、音频、IMU、电池和外壳都集成好的整机开发板，适合直接做成产品原型或随身小设备，代价是价格更高、扩展依赖官方预留的接口。

## 来源

- [M5Stack StopWatch 官方文档](https://docs.m5stack.com/en/core/StopWatch)
- [M5Stack 官方网站](https://m5stack.com/)
