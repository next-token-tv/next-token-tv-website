---
entityType: product
entity: huawei-ascend
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: '华为昇腾：AI 计算的处理器与硬件系列｜Next Token Wiki'
seoDescription: '了解华为昇腾的 NPU 处理器、Atlas 硬件与 CANN/MindSpore 软件栈如何支撑模型训练与推理，以及 Weekly 第 007 期提到的昇腾 950。'
---

## 定义

昇腾（Ascend）是华为面向人工智能计算的处理器与硬件产品系列，官方站点将其定位为"昇腾AI基础软硬件平台"。产品覆盖 NPU 处理器（官方列出的 Ascend 950PR、950DT 等）、Atlas 品牌的超节点、服务器、加速卡与加速模组，以及 CANN 异构计算架构、MindSpore（昇思）框架和 MindStudio 等工具链，见[昇腾官方站点](https://www.hiascend.com/)。

## 工作方式

昇腾把自研 NPU 芯片与整机、集群组合成训练和推理两个方向的算力底座：芯片侧由 Ascend 系列处理器承担 AI 运算，硬件侧通过 Atlas 超节点和服务器组成集群，软件侧以 CANN 对接上层框架。官方开发者板块按训练开发、推理开发、算子开发等方向提供工具链，MindSpore 之外也支持 PyTorch、TensorFlow 等主流框架。

## 使用场景

主要用于大模型训练与推理部署、智能计算中心和企业级 AI 算力建设等场景，官方资料面向 LLM、多模态、搜索推广等业务方向给出解决方案。具体型号的性能、规格与兼容性以对应产品的官方文档为准。

## 易混概念

昇腾的处理器在官方语境中定位为 NPU（AI 处理器），与通用的[图形处理器（GPU）](/wiki/terms/gpu)术语不同，搜索型号对比时应区分两类架构口径；Atlas 是昇腾硬件产品的命名系列，不等于芯片本身。华为是昇腾所属的[品牌](/wiki/brands/huawei)，公司层面的业务不在本条目展开。

## 节目中的讨论

在 Weekly #007 的“DeepSeek 的推理速度，怎样改变产品体验？”章节中，歸藏转述 DeepSeek 开源其推理框架时"[第一天也折腾的支持华为的昇腾的 950](/weekly/007/transcript#quote-f6732b8b370bc2b61ce6)"。这是发言人对适配进展的转述，不是对昇腾型号性能或官方适配状态的核验结论。可阅读[对应章节](/weekly/007/transcript#chapter-02)。

## 常见问题

### 昇腾 950 是什么？

昇腾官方站点在 NPU 处理器名下列出 Ascend 950PR 与 Ascend 950DT。具体规格、参数与发布状态以[昇腾官方页面](https://www.hiascend.com/)为准，正文不引用未经核验的性能对比。

### 昇腾芯片用来做什么？

按官方资料，昇腾平台同时面向 AI 训练与推理：开发者板块分设训练开发与推理开发方向，Atlas 硬件覆盖从加速卡到超节点的部署形态，见[官方站点](https://www.hiascend.com/)。

### 昇腾是 GPU 吗？

官方将昇腾处理器定位为面向 AI 计算的 NPU，而不是图形处理器。GPU 是以图形渲染起源、扩展到通用并行计算的处理器类别，两者的术语区别见本站 GPU 术语条目。

## 来源

- [昇腾官方站点](https://www.hiascend.com/)
