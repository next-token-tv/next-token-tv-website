---
term: transformer
locale: zh-Hans
updatedAt: "2026-10-11"
---
## 定义

Transformer 是一种以自注意力机制为核心的神经网络架构，发表于论文《Attention Is All You Need》，用于处理文本等序列数据。

## 工作方式

自注意力让序列中的每个位置都能直接关注其他位置并按相关性分配权重，相比更早的循环结构更适合并行训练。模型逐层变换序列表示，预训练通常以预测[下一个词元](/wiki/terms/next-token)为目标学习语言规律。

## 使用场景

Transformer 是[大语言模型](/wiki/terms/llm)的基础架构，也广泛用于翻译、语音和多模态模型；推理阶段的[键值缓存](/wiki/terms/kv-cache)正是针对这一架构注意力计算特性的优化。

## 易混概念

Transformer 是模型架构，[大语言模型](/wiki/terms/llm)是在这一架构上训练出来的模型，两者不是一回事。它处理的基本单位是[词元](/wiki/terms/token)而非字符，这是理解其输入输出方式的关键。
