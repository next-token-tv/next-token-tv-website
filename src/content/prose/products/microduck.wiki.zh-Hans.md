---
entityType: product
entity: microduck
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Microduck：Pollen Robotics 的开源双足机器人｜Next Token Wiki'
seoDescription: '了解 Microduck 的定位、预购信息、强化学习训练方式与使用边界，以及 Weekly #001 中关于它一夜走红的讨论。'
---

## Microduck 是什么

Microduck 是 [Pollen Robotics](https://pollen-robotics.com/)（[Hugging Face](/wiki/brands/hugging-face) 旗下机器人公司）推出的小型开源双足机器人：高 25 厘米、重不到 800 克，有 15 个电机、一颗摄像头、深度传感器（官方规格页写作 LiDAR）和两个 IMU，以及一个能拾取物体的活动喙。官方对它的定位是“可以自己教新动作的双足机器人”——运动行为由强化学习训练，开箱即可玩。在 Pollen 的产品线中，Reachy Mini 面向“会交互的 AI”，Microduck 面向“会行动的 AI”，两者互补。

整机以预购方式销售：预订于 2026 年 8 月 27 日开启，发售与交付进度见[官方商店](https://store.pollen-robotics.com/products/microduck)与[官方博客](https://pollen-robotics.com/microduck/blog/introducing-microduck/)。软件栈则以开源形式可用：SDK 与机器人软件在 [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck)（Apache-2.0），强化学习与 sim-to-real 工具在 [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl)。

## 用途与使用边界

Microduck 的实际用途是在桌面尺度上学习、实验物理 AI：训练行走等运动行为，把仿真策略部署到真机，再迭代。

- 开箱体验：出厂内置 7 个训练好的动作，包括行走、坐下与站起、踢腿、用喙拾取、穿上轮滑鞋滑行和自行起身；可以用游戏手柄直接控制，也能让它追随激光点。每台机器人首次开机时生成专属声音身份。
- 训练循环：官方工作流是“在 MuJoCo 物理仿真中训练 → 一步部署到真机 → 调整再训练 → 发布策略”。训练可以在自己的电脑上进行，也可以用 Hugging Face Jobs；[官方仿真器](https://huggingface.co/spaces/pollen-robotics/microduck-simulator)可以在线查看。维护用 `robotctl` 命令（monitor/configure/update）。
- 购买边界：预订于 2026 年 8 月 27 日开启，[官方商店](https://store.pollen-robotics.com/products/microduck)预购价 399 美元（introductory price，不含税费与运费），另有 39 美元充电包、119 美元开发包和 39 美元配件包。官方博客称首批交付目标为 2026 年圣诞节前，覆盖北美、欧洲和英国；四种配色为 Cream、Graphite、Lavender 和 Sky。

## 节目中的讨论

Weekly #001 的“Microduck 为什么一夜走红”章节把 Microduck 当作当周硬件热点讨论。[杨攀介绍它是 Hugging Face 的 MicroDuck，并说它由中国厂商 Seeed 生产](/weekly/001/transcript#quote-ef668720aacb7871ed55)；“Seeed 生产”是节目参与者的说法，Pollen 官方页面与博客均未提及生产合作伙伴。他给出的“300 多美元”与官方 399 美元预购价量级一致。歸藏在讨论中补充，[指出这是 Hugging Face 收购的公司发布的，被收购前它的前代产品就火过](/weekly/001/transcript#quote-8a2fcec8111ab79972f1)——这与官方博客“Reachy Mini 已有超过 10,000 台到用户手中”的说法相合。橘子认为它设计好、Demo 好、足够便宜，[歸藏则把这类玩具概括为“足够的没用才能好玩”](/weekly/001/transcript#quote-a4c6282844868aeff0cf)，并提到它会后空翻。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-19)。

以上是节目参与者的即时观察与观点，不是对产品的评测结论，也不代表官方立场。

## 常见问题

### Microduck 是什么机器人？

一款 25 厘米高、约 800 克重的开源双足机器人，15 个电机，带摄像头、深度传感器和两个 IMU，行为用强化学习训练，开箱自带行走、拾取等 7 个动作。详见 [Pollen Robotics 产品页](https://pollen-robotics.com/microduck/)。

### Microduck 多少钱，在哪里预订？

官方商店[预购页](https://store.pollen-robotics.com/products/microduck)标价 399 美元（不含税费与运费），另有 39–119 美元的配件与开发包。搜索结果中存在名称相似的第三方商店，预订请认准 Pollen Robotics 官方商店。

### Microduck 现在能买到吗？什么时候发货？

预订于 2026 年 8 月 27 日开启；官方博客称首批交付目标是 2026 年圣诞节前，先覆盖北美、欧洲和英国。截至 2026 年 9 月，整机仍以预购形式销售；是否已开放直接购买以[官方商店](https://store.pollen-robotics.com/products/microduck)为准，交付进度可关注[官方博客](https://pollen-robotics.com/microduck/blog/introducing-microduck/)。

### Microduck 是 Hugging Face 出品的吗？

Microduck 由 Pollen Robotics 开发，该公司属于 Hugging Face；发布博客由 Pollen 团队与 Hugging Face 的 Thomas Wolf 等署名，产品页页脚也标注“Part of Hugging Face”。参见[官方博客](https://pollen-robotics.com/microduck/blog/introducing-microduck/)。

### 不会写代码能玩 Microduck 吗？

能。开箱即有 7 个训练好的动作，可用游戏手柄控制、让它追随激光点。要教新动作则需要走仿真训练流程：官方在 GitHub 开源了 SDK、MuJoCo 仿真与整套强化学习训练栈，见 [microduck 仓库](https://github.com/pollen-robotics/microduck)。

### Microduck 和 Reachy Mini 有什么区别？

官方博客的区分是：Reachy Mini 是“会交互的 AI”平台，看、听、说，适合对话与表达类应用；Microduck 是“会行动的 AI”平台，主打运动、强化学习与 sim-to-real。两者共用开源理念但定位不同，参见[官方博客](https://pollen-robotics.com/microduck/blog/introducing-microduck/)。

## 来源

- [Pollen Robotics：Microduck 产品页](https://pollen-robotics.com/microduck/)
- [Pollen Robotics 博客：Meet Microduck](https://pollen-robotics.com/microduck/blog/introducing-microduck/)
- [GitHub：pollen-robotics/microduck](https://github.com/pollen-robotics/microduck)
- [GitHub：pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl)
- [官方商店：Microduck 预购页](https://store.pollen-robotics.com/products/microduck)
- [Microduck 仿真器（Hugging Face Spaces）](https://huggingface.co/spaces/pollen-robotics/microduck-simulator)
