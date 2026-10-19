---
term: next-token
locale: en
updatedAt: "2026-10-11"
---
## Definition

The next token is the unit a language model outputs next during autoregressive generation. The model computes a probability for each candidate [token](/en/wiki/terms/token) given the sequence so far, then picks one to append.

## How it works

Generation is a loop: read the [context](/en/wiki/terms/context), predict the next token, append it, predict again, until a stopping condition fires. The selection strategy — greedy decoding or sampling — sets how deterministic or varied the output is. Pretraining pursues the same objective of next-token prediction, which is how the model learns language from vast amounts of text.

## Usage

Chat, writing, and code completion are all built on predicting the next token one step at a time; debates about output quality, sampling temperature, or generation speed are really debates about this step.

## Related and confusable terms

"Next token" is a purely technical notion — the successor unit in the [token](/en/wiki/terms/token) sequence a [large language model](/en/wiki/terms/llm) generates — and has nothing to do with the podcast brand Next Token that happens to share the name. How fast it is predicted is what the [tokens per second](/en/wiki/terms/tokens-per-second) metric measures.
