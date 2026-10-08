---
entityType: product
entity: raspberry-pi
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: '树莓派（Raspberry Pi）：单板计算机家族｜Next Token Wiki'
seoDescription: '了解树莓派单板计算机家族的产品线、官方系统与烧录工具、与 ESP32/Arduino 的分工，以及 Weekly 节目中的相关讨论。'
---

## 树莓派是什么

树莓派（Raspberry Pi）是 Raspberry Pi 公司推出的低成本单板计算机产品家族，自 2012 年起设计这类把处理器、内存、接口集成在一张信用卡大小电路板上的计算机。官方介绍称其基于 Arm 架构、运行 Linux 操作系统，十年间售出超过六千万台。产品线包括[官方产品页](https://www.raspberrypi.com/products/)列出的：树莓派 5、树莓派 4 等全功能单板计算机，Zero 2 W 等微型型号，Pi 500 等键盘一体机，基于 RP2350 的 Pico 系列微控制器，以及面向嵌入式量产的 Compute Module 系列和摄像头、扩展板等配件。

## 用途与使用边界

树莓派是一台完整的 Linux 计算机：可以接显示器键盘当桌面用，也常被用作家庭服务器、NAS、媒体中心、智能家居网关、复古游戏机和编程学习板。官方系统是 Raspberry Pi OS，官方烧录工具 Raspberry Pi Imager 负责把系统写入 microSD 卡；远程访问可用官方的 Raspberry Pi Connect。

它与 [ESP32](/wiki/products/esp32)、Arduino 的分工常被拿来比较：ESP32 是微控制器，适合低功耗、实时的传感与控制任务；树莓派跑完整操作系统，适合需要网络服务、文件存储、容器或多任务的场景。两者在家用项目里经常搭配使用——树莓派做中枢，微控制器做末端。具体型号的价格、供货和规格随时间变化，购买前以[官方产品页](https://www.raspberrypi.com/products/)为准。

## 节目中的讨论

Weekly #005 的“云电脑、自己的电脑与服务器管理”章节里，杨攀提到自己十一假期整理家里的设备：[“一个 NUC，然后 2 个树莓派，然后还有 3 个 Pad，还有一堆 NAS”](/weekly/005/transcript#quote-adb85c7ee0f0a3b6b7ee)，他问 Codex 这些设备能怎么利用，“也没给我提出个啥好建议来”；随后章节转向用 Agent 管理服务器、给播客做冷备份等话题。树莓派在这里出现的语境是个人设备集群与 Agent 运维：家里闲置的单板计算机如何被纳入 Personal Agent 的管理范围。这是节目参与者的个人经历，不构成使用建议。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-07)。

## 常见问题

### 树莓派是什么？

Raspberry Pi 公司推出的单板计算机家族：一张电路板上有处理器、内存和常用接口，基于 Arm 架构、运行 Linux，自 2012 年起累计售出数千万台，用于学习编程、自建服务器和各类自制项目。

### 树莓派能做什么？

跑 Linux 就能做的事大多可行：桌面电脑、家庭服务器、NAS、智能家居网关、媒体中心、广告牌、小型网站等。它也可以配合摄像头、扩展板做视觉和传感项目；具体取决于型号与外设。

### 树莓派和 ESP32、Arduino 有什么区别？

树莓派是能跑完整操作系统的计算机，ESP32 和 Arduino 是微控制器，适合低功耗的实时控制。需要系统服务、存储和网络就选树莓派，需要省电、便宜、实时响应就选微控制器；两者常在同一项目里搭配。

### 树莓派怎么装系统？

用官方工具 [Raspberry Pi Imager](https://www.raspberrypi.com/software/) 把 Raspberry Pi OS 或其他系统写入 microSD 卡，然后插卡开机。官方软件页同时提供远程访问工具 Raspberry Pi Connect。

### 树莓派官网在哪里？

官网是 [raspberrypi.com](https://www.raspberrypi.com/)，产品列表见[官方产品页](https://www.raspberrypi.com/products/)，系统与工具见[官方软件页](https://www.raspberrypi.com/software/)。

## 来源

- [Raspberry Pi 官方产品页](https://www.raspberrypi.com/products/)
- [Raspberry Pi 官方 About 页](https://www.raspberrypi.com/about/)
- [Raspberry Pi 官方软件页](https://www.raspberrypi.com/software/)
