---
entityType: product
entity: mac-studio
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Mac Studio：Apple 的紧凑工作站与本地推理｜Next Token Wiki'
seoDescription: '了解 Mac Studio 的定位、M5 Max 与 M5 Ultra 规格与发售状态、本地运行大模型的官方场景，以及 Weekly #001 中的使用体验讨论。'
---

## Mac Studio 是什么

Mac Studio 是 [Apple](/wiki/brands/apple) 推出的紧凑型专业台式 Mac，官方称其为“终极专业桌面”（the ultimate pro desktop），机身约 19.7 厘米见方、9.5 厘米高。Apple 于 2026 年 8 月 25 日发布了搭载 M5 Max 与全新 [M5 Ultra](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) 的新一代 Mac Studio，官方页面标注 9 月 22 日起发售。上一代机型搭载 M4 Max 与 M3 Ultra 芯片，仍被 Apple 用于官方性能对比。

## 用途与使用边界

Mac Studio 的实际用途集中在两类工作流：对性能和端口要求高的专业创作与开发，以及在本地运行大规模 AI 模型。

- 官方规格：M5 Max 机型配备 18 核 CPU、最高 40 核 GPU，统一内存最高 128GB、带宽 614GB/s；M5 Ultra 由两颗 M5 Max 融合而来，配备 36 核 CPU、最高 80 核 GPU，统一内存最高 512GB、带宽 1.2TB/s。接口包括 4 个雷雳 5（Thunderbolt 5）端口、10Gb 以太网、HDMI 和 SDXC 卡槽（M5 Ultra 前面板也是两个雷雳 5），并首次支持 Wi-Fi 7 与 Bluetooth 6。完整参数见[官方技术规格页](https://www.apple.com/mac-studio/specs/)。
- 官方 AI 场景：Apple 官网以 [LM Studio Bionic 本地运行大模型](https://www.apple.com/mac-studio/)、Draw Things 生成图像、用 exo 把多台工作站组成集群为例，并称 M5 Ultra 可以“在设备端运行前沿级模型”。官方新闻稿还介绍了 Core AI 框架与 MLX，以及通过雷雳 5 与 RDMA 把最多四台 Mac Studio 组成集群、分布式 AI 推理最高可达单机的 3 倍。这些是 Apple 的官方宣传口径，不是独立评测结论。
- 使用边界：内存与存储在购买时选配，价格随芯片、内存与存储配置变化，官方购买页是唯一可靠的价格入口；Apple 官网列出的性能倍数均为 Apple 自己的对比测试，实际体验取决于工作负载。

## 节目中的讨论

Mac Studio 在 Weekly #001 中多次出现，参与者谈的都是自己手上的设备，属于个人体验；录制时新一代机型刚发布不久。

在“GLM 5.3 Flash 与 MiniMax H3”章节，[杨攀介绍了他在 128GB 内存 Mac Studio 上跑本地模型的体验](/weekly/001/transcript#quote-fd38512a48f266e43abe)：试过 Qwen 系列 27B、35B，DeepSeek V4 Flash 的推理速度约 30 TPS，“已经能用了”。他也强调本地推理仍然是特定场景，[自己做过的极端测算是 24 小时连转约两年回本，普通人可能要 10 到 20 年](/weekly/001/transcript#quote-d858cf2d46092dfde617)。

在“Mac Studio、本地推理与一台始终在线的电脑”章节，[歸藏说他同时有 Mac mini 和 32GB 的 Mac Studio](/weekly/001/transcript#quote-8801767eeff61b98ee9a)，后者主要跑工程任务而非本地模型，并描述了[Mac mini 在散热和性能上跑重负载容易崩的对比体验](/weekly/001/transcript#quote-6d4d1080e09a799ffe3c)。[杨攀的体感是“感觉不到那个电脑的存在”](/weekly/001/transcript#quote-7f137420739f1df4688c)，两人都说自己的 Mac Studio 买来后[一直开机不关](/weekly/001/transcript#quote-6da575083b2ac4ee9801)。向阳乔木与橘子当时表示暂无购买计划。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-22)。

在硬件热点环节，[杨攀转述了新发布的 Mac mini 与 Mac Studio 内存最高奔向 128、256、512GB、高配价格被抬高的情况](/weekly/001/transcript#quote-16dbac2d3a1f25eb76ca)；“几万、十几万”是参与者当时对市场价格的转述，不是 Apple 官方定价。在“Token Is New Money”章节，[橘子把买 Mac Studio 比作“自己印钞票”和“在家里铸币”](/weekly/001/transcript#quote-1cecab0aab1f8761cb0b)，用来形容本地跑 Flash 级模型等于把云端 Token 开销换成自有算力——这是节目观点与比喻，不是 Apple 的官方立场。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-28)。

## 常见问题

### Mac Studio 是什么？适合什么人？

Apple 的紧凑型专业台式 Mac，官方定位为“终极专业桌面”。官方列举的适用人群包括创意工作者、开发者、AI 研究人员和数据科学家；典型工作是视频剪辑、3D 渲染、代码编译和本地 AI 推理。参见[官方产品页](https://www.apple.com/mac-studio/)。

### 现在的 Mac Studio 用什么芯片？什么时候能买到？

2026 年 8 月 25 日发布的一代搭载 M5 Max 和全新的 M5 Ultra，官方页面标注 9 月 22 日起发售。上一代机型使用 M4 Max 与 M3 Ultra。详见 [Apple 新闻稿](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/)。

### Mac Studio 最多支持多少统一内存？

按官方技术规格：M5 Max 机型最高 128GB 统一内存（起步 36GB，可选 48/64/128GB）；M5 Ultra 机型最高 512GB（起步 96GB，可选 256/512GB）。内存需要在购买时选配，见[官方规格页](https://www.apple.com/mac-studio/specs/)。

### Mac Studio 能本地跑大模型吗？

Apple 官网将本地运行 LLM 列为 Mac Studio 的核心场景，示例工具包括 LM Studio Bionic、Core AI 框架、MLX，以及用 exo 组建多机集群；M5 Ultra 的 512GB 统一内存与 1.2TB/s 带宽是其宣传重点。这些是官方口径；实际可跑的模型规模和速度取决于模型与配置。Weekly #001 中杨攀在 128GB 内存机型上跑本地模型“约 30 TPS、已经能用”是他个人的体验，见[第 001 期逐字稿](/weekly/001/transcript#chapter-03)。

### Mac Studio 和 Mac mini 有什么区别？

两者是不同的产品线：Mac Studio 用 M5 Max/M5 Ultra 芯片，统一内存、带宽、端口和官方性能定位都更高；Mac mini 是更入门的桌面 Mac（[2026 年 8 月发布的新款搭载 M6 与 M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/)）。在 Weekly #001 中，歸藏的个人体验是 Mac mini 跑重工程任务“散热和性能上确实不够”，这是参与者观点，见[第 001 期对应章节](/weekly/001/transcript#chapter-22)。

### Mac Studio 价格是多少？

价格随芯片、内存与存储配置变化，具体标价见 [Apple 官方购买页](https://www.apple.com/shop/buy-mac/mac-studio)的实时报价。节目参与者和媒体报道中提到的整机价格属于转述或市场行情，不是官方定价。

## 来源

- [Apple：Mac Studio 产品页](https://www.apple.com/mac-studio/)
- [Apple：Mac Studio 技术规格](https://www.apple.com/mac-studio/specs/)
- [Apple 新闻稿：Apple introduces new Mac Studio with M5 Max and M5 Ultra](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/)
- [Apple Store：Mac Studio 购买页](https://www.apple.com/shop/buy-mac/mac-studio)
