---
term: llm
locale: en
updatedAt: "2026-10-11"
---
## Definition

A large language model (LLM) is a deep neural network trained on massive amounts of text; "large" typically refers to parameter counts and training data far beyond those of earlier, smaller language models. It takes text in and produces text out, covering many kinds of language tasks.

## How it works

The model works in [tokens](/en/wiki/terms/token): pretraining teaches it to predict the next token, and generation proceeds the same way, producing text autoregressively one token at a time. Everything the model can use to shape its answer is carried in the [context](/en/wiki/terms/context).

## Usage

LLMs power chatbots, coding assistants, translation, summarization, and agents. They also serve as a base that is further adapted through fine-tuning or [reinforcement learning from human feedback](/en/wiki/terms/rlhf) to align with specific uses.

## Related and confusable terms

An LLM is one concrete class of [artificial intelligence](/en/wiki/terms/ai), not AI as a whole; its underlying architecture is the [transformer](/en/wiki/terms/transformer). Three concepts unlock how LLMs work: tokens, next-token prediction, and context length.
