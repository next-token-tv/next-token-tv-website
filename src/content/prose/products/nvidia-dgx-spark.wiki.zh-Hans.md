---
entityType: product
entity: nvidia-dgx-spark
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'NVIDIA DGX Spark：桌面级本地 AI 超算｜Next Token Wiki'
seoDescription: '了解 NVIDIA DGX Spark 的 GB10 芯片、统一内存与本地推理/微调能力，发售与配置渠道，以及第 005 期节目中关于 DGX 涨价的讨论。'
---

## NVIDIA DGX Spark

NVIDIA DGX Spark 是 [NVIDIA](/wiki/brands/nvidia) 面向本地 AI 开发的桌面级计算机，官方产品页将其描述为"A Grace Blackwell AI Supercomputer on your desk"，并定位为 Desktop Agent Computer——在本地构建和运行自主 Agent，减少对云端资源的依赖。它基于 GB10 Grace Blackwell Superchip，官方标称 FP4 精度下最高 1 petaFLOP 的 AI 算力，机身仅 150 × 150 × 50.5 毫米、约 1.2 千克，整机功耗 240 瓦。规格与配置会变化，以[官方产品页](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)为准。

## 能力与使用边界

官方产品页列出的关键配置包括：20 核 Arm CPU（10 个 Cortex-X925 加 10 个 Cortex-A725）、第五代 Tensor Core、64GB 或 128GB LPDDR5X 统一内存（256 位接口，273 GB/s 带宽）、最高 4TB NVMe 存储，以及 200Gb 的 ConnectX-7 网卡——官方称最多可把四台 DGX Spark 互联以运行更大的模型。按官方口径，DGX Spark 可在本地对最多 2000 亿参数的模型做推理、对最多 700 亿参数的模型做微调；这一能力上限对应 128GB 统一内存配置。DGX Spark 与数据中心级 DGX 系统不是同一档产品：它面向开发者在桌面完成原型、微调与小规模推理，重训练与大规模部署仍属云端与数据中心产品线。运行哪些框架与工具链（如 Ollama、LM Studio、Docker 等）以官方与合作方文档为准。

## 发售与购买

官方新闻稿显示，DGX Spark 于 2025 年 10 月 15 日起可在 NVIDIA.com 订购，Acer、ASUS、Dell、GIGABYTE、HP、Lenovo、MSI 等合作方的整机同期发售，美国 Micro Center 门店同步开售。官方产品页此后将 64GB 配置标注为"Coming Soon"，并注明该配置仅经参与项目的 OEM 合作伙伴提供。官方渠道未在页面上标注统一售价，现行价格、在售配置与购买渠道以[官方产品页](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)及各渠道页面为准。

## 节目中的讨论

Weekly #005 两处讨论了 DGX Spark。在"推理优化与成本下降"章节，[橘子转述了推理优化的进展，并认为它直接导致了 DGX 涨价](/weekly/005/transcript#quote-dfbbfd3135c8a0e4b298)。在"DGX 涨价与硬件需求"章节，[杨攀转述了 10 月 2 日的新闻：DGX 原 128GB 版此前售 3,999 美元](/weekly/005/transcript#quote-f1bd249d3df8eb132717)，[而新推出的 64GB 版定价还更高](/weekly/005/transcript#quote-d766d6b5ee3cbc760cea)，并引出"效率提升反而推高硬件需求"的杰文斯悖论讨论。这些价格与涨价的说法来自节目参与者的转述，未见 NVIDIA 官方渠道印证，不作为官方定价依据。可阅读[第 005 期对应章节](/weekly/005/transcript#chapter-13)。

## 常见问题

### DGX Spark 是什么？

DGX Spark 是 NVIDIA 的桌面级 AI 计算机，官方称其为"放在桌上的 Grace Blackwell AI 超算"，用于本地构建与运行 AI Agent、模型原型、微调与推理，详见[官方产品页](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)。

### DGX Spark 多少钱？

官方产品页未标注统一售价，整机经 NVIDIA.com 与 Acer、ASUS、Dell、HP、Lenovo、MSI 等合作渠道销售，现行价格以官方与渠道页面为准。节目中提到的 3,999 美元等价格是参与者转述，未经官方渠道核验。

### DGX Spark 能跑多大的模型？

按官方口径：128GB 统一内存配置可在本地对最多 2000 亿参数的模型做推理、对最多 700 亿参数的模型做微调；实际可用性取决于模型、量化和软件栈。

### DGX Spark 是什么时候发售的？

官方新闻稿显示 2025 年 10 月 15 日起可在 NVIDIA.com 订购，合作方整机同日发售。

### 64GB 版 DGX Spark 是什么？

截至 2026 年 10 月，官方产品页列有 64GB 与 128GB 两种统一内存配置，并将 64GB 配置标注为"Coming Soon"、仅经参与项目的 OEM 合作伙伴提供。节目中也讨论了这一新配置的价格转述，见上文。

## 来源

- [NVIDIA DGX Spark 官方产品页](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
- [NVIDIA 新闻稿：DGX Spark Arrives for World's AI Developers（2025-10-13）](https://nvidianews.nvidia.com/news/nvidia-dgx-spark-arrives-for-worlds-ai-developers)
