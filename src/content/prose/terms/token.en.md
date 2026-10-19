---
term: token
locale: en
updatedAt: "2026-10-11"
---
## Definition

A token is the basic unit of text that a language model reads and generates. A tokenizer splits raw text into tokens; a token may be a word, a subword, a character, or a punctuation mark or other symbol.

## How it works

The model does not operate on raw characters — each token is mapped to a vector that participates in the computation, and both input and output are sequences of tokens. The number of tokens a piece of text consumes drives compute, cost, and the usable [context](/en/wiki/terms/context) length.

## Usage

Developers watch token counts when managing cost, sizing requests, and planning context capacity. Usage-billed APIs and the progress of streaming output are likewise measured in tokens.

## Related and confusable terms

The model emits one [next token](/en/wiki/terms/next-token) at a time, at a rate expressed in [tokens per second](/en/wiki/terms/tokens-per-second); how many tokens a request can hold is bounded by the [context](/en/wiki/terms/context) window. All of this happens inside a [large language model](/en/wiki/terms/llm).
