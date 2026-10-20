---
term: rlhf
locale: en
updatedAt: "2026-10-11"
---
## Definition

Reinforcement learning from human feedback (RLHF) is a training method that uses human preference judgments as its training signal, steering a model toward outputs people actually want. It is most often applied in the alignment stage after pretraining.

## How it works

The typical pipeline has three steps: collect human comparisons or rankings of the model's outputs; train a reward model on those judgments so it can score outputs; then use reinforcement learning to optimize the [large language model](/en/wiki/terms/llm) toward outputs the reward model scores highly.

## Usage

RLHF and its variants are widely used to make language models follow instructions and give responses that are more helpful and safer, and it is a common training stage for chat assistants before release.

## Related and confusable terms

RLHF is a method applied on top of a model: it leaves the [transformer](/en/wiki/terms/transformer) architecture and the next-token generation mechanism intact, and instead shifts the model's tendency in what it chooses to generate.
