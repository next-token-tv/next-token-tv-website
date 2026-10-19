---
term: kv-cache
locale: en
updatedAt: "2026-10-11"
---
## Definition

The KV cache is a memory optimization used when running [transformer](/en/wiki/terms/transformer) models for inference: the key and value vectors of every [token](/en/wiki/terms/token) already processed in the attention layers are stored and reused in later steps.

## How it works

Autoregressive generation adds one token per step. Without a cache, each step recomputes attention over the whole history; with one, the new token only computes its own keys and values to compare against the cache, cutting redundant computation sharply. The tradeoff is cache memory that grows with the [context](/en/wiki/terms/context) length.

## Usage

The KV cache is standard equipment in LLM inference serving, directly shaping [tokens per second](/en/wiki/terms/tokens-per-second) and how much concurrency a service can handle; advanced schemes like prompt caching reuse prefix computations on the same principle.

## Related and confusable terms

What the KV cache stores is an internal intermediate computation, not the user-visible [context](/en/wiki/terms/context) itself; the cache grows with the number of processed tokens, which is the crux of the distinction.
