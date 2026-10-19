---
term: kv-cache
locale: zh-Hans
updatedAt: "2026-10-11"
---
## 定义

键值缓存（KV Cache）是 [Transformer](/wiki/terms/transformer) 模型推理时使用的一种内存优化：把注意力层中每个已处理[词元](/wiki/terms/token)的键和值向量缓存起来，供后续步骤复用。

## 工作方式

自回归生成每步只新增一个词元。没有缓存时，每一步都要重算全部历史词元的注意力；有了缓存，新词元只需计算自身的键值并与缓存比对，重复计算大幅减少。代价是缓存占用随[上下文](/wiki/terms/context)长度增长。

## 使用场景

键值缓存是大模型推理服务的常规配置，直接影响[每秒词元数](/wiki/terms/tokens-per-second)和可服务的并发规模；提示缓存等进阶方案也基于同样的思路复用前缀计算。

## 易混概念

KV Cache 缓存的是模型内部的中间计算结果，不是用户可见的[上下文](/wiki/terms/context)本身；缓存量随已处理的词元数增长，这是理解两者关系的要点。
