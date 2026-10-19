---
term: transformer
locale: en
updatedAt: "2026-10-11"
---
## Definition

The transformer is a neural network architecture built around self-attention, introduced in the paper "Attention Is All You Need" for processing sequences such as text.

## How it works

Self-attention lets every position in a sequence attend directly to every other position, weighting them by relevance — a structure that, unlike earlier recurrent designs, lends itself to parallel training. The model transforms the sequence's representations layer by layer, and pretraining usually targets [next-token](/en/wiki/terms/next-token) prediction to learn language from text.

## Usage

The transformer is the architecture underlying [large language models](/en/wiki/terms/llm) and is also widely used for translation, speech, and multimodal models; the [KV cache](/en/wiki/terms/kv-cache) used at inference time is an optimization tailored to how attention works in this architecture.

## Related and confusable terms

The transformer is an architecture, while a [large language model](/en/wiki/terms/llm) is a model trained in that architecture — not the same thing. Its basic unit of computation is the [token](/en/wiki/terms/token), not the character, which shapes how its input and output work.
