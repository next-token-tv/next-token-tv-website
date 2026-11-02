---
entityType: product
entity: nvidia-b300
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-02'
seoTitle: 'NVIDIA B300 是什么：Blackwell Ultra 数据中心 GPU｜Next Token Wiki'
seoDescription: '了解 NVIDIA B300 所属的 Blackwell Ultra 架构、2025 年 3 月发布的 HGX B300 NVL16 与 GB300 NVL72 平台形态，以及节目对 B300 的两处讨论。'
---

## 定义

NVIDIA B300 是[NVIDIA](/wiki/brands/nvidia)面向数据中心 AI 计算的 GPU，属于 Blackwell Ultra 架构。2025 年 3 月 18 日，NVIDIA 在 GTC 上发布 Blackwell Ultra 平台，其中包括机架级的 GB300 NVL72 方案和 16 GPU 的 HGX B300 NVL16 系统。官方新闻稿称，相较于 Hopper 一代，HGX B300 NVL16 提供约 11 倍的大模型推理速度、7 倍算力和 4 倍显存容量（见[官方新闻稿](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning)）。

## 产品形态

B300 以数据中心平台的形式交付，而不是单张零售显卡：HGX B300 NVL16 是面向 AI 工厂与推理负载的 16 GPU 系统，GB300 NVL72 则将 72 颗 Blackwell Ultra GPU 与 36 颗 Grace CPU 组成机架级方案。官方将其定位为面向"AI 推理时代"的大规模计算平台。具体供货方式与规格见[官方资料](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html)。

## 易混概念

B300 是数据中心 GPU，与[NVIDIA](/wiki/brands/nvidia)面向游戏与个人计算的 [GeForce](/wiki/products/nvidia-geforce) 品牌分属不同产品层级；同一 Blackwell Ultra 平台中的 GB300 指搭载 Grace CPU 的超级芯片形态，GB300 NVL72 是机架级方案名称，B300 则是平台中的 GPU 本体。

## 节目中的讨论

第一期"国内模型为什么突然加速发布"章节讨论国内模型发布加速的原因，向阳乔木提到国产推理卡逐渐可用时，橘子说"[B300 已经管够了](/weekly/001/transcript#chapter-07)"，以此回应高端 GPU 供给是否构成瓶颈的话题。第八期在“[Anthropic 上市话题](/weekly/008/transcript#chapter-02)”章节中，橘子在观察内存与显卡价格走势时提到[“连 B300 都已经在降了”](/weekly/008/transcript#quote-eb87151026091344480d)，认为相关价格已到阶段顶部——这是参与者基于个人观察的判断。两处均未涉及具体规格或采购信息。

## 常见问题

### B300 和 GB300 有什么区别？

B300 是 Blackwell Ultra 架构的数据中心 GPU 本体；GB300 是搭载 Grace CPU 的超级芯片形态，GB300 NVL72 则是由 72 颗 Blackwell Ultra GPU 与 36 颗 Grace CPU 组成的机架级方案。平台于 2025 年 3 月 18 日在 GTC 发布，见[官方新闻稿](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning)。

### B300 属于什么架构？

B300 属于 NVIDIA 的 Blackwell Ultra 架构，是 Blackwell 数据中心平台之后的演进一代。官方称其相较 Hopper 一代在推理速度、算力与显存上有大幅提升（约 11 倍 LLM 推理、7 倍算力、4 倍显存），数据出自[官方新闻稿](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning)。

### B300 可以在哪里使用？

B300 面向数据中心场景，通过 HGX B300 NVL16 等平台形式由系统与云服务商交付，不面向个人零售。软件支持情况见 [NVIDIA AI Enterprise 支持矩阵](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html)。

### B300 和 B200 是什么关系？

两者都是 NVIDIA 数据中心 Blackwell 平台的 GPU：B200 属于 2024 年发布的第一代 Blackwell 产品，B300 属于 2025 年 3 月发布的 Blackwell Ultra 一代。两代的具体规格差异以[官方资料](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html)为准。

## 来源

- [NVIDIA Blackwell Ultra 平台官方新闻稿（2025-03-18）](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning)
- [NVIDIA AI Enterprise 支持矩阵](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html)
- [Wikipedia: Blackwell (microarchitecture)](https://en.wikipedia.org/wiki/Blackwell_(microarchitecture))
