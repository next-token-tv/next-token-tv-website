---
term: tpu
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

张量处理单元（TPU）是 Google 为机器学习工作负载设计的专用集成电路（ASIC），核心目标是加速神经网络中占比最大的计算——矩阵乘法。它主要经由 Google Cloud 以云服务形式提供。

## 工作方式

TPU 用大规模矩阵乘法单元组成的脉动阵列执行张量运算，并采用 bfloat16 等较低精度格式换取更高吞吐与能效。它牺牲通用性，把一类特定计算做到极致。

## 使用场景

用户通过 Google Cloud 使用 TPU 训练与部署大模型、推荐系统等大规模机器学习负载。对已经在 Google 生态内（如 JAX、TensorFlow）开发的团队尤其顺手。

## 易混概念

与 [GPU](/wiki/terms/gpu) 相比，TPU 是为张量计算定制的 ASIC，适用面更窄；[CPU](/wiki/terms/cpu) 则是处理通用串行逻辑的处理器。三者常在同一套 AI 基础设施中分工协作。
