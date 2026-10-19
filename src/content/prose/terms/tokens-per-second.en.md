---
term: tokens-per-second
locale: en
updatedAt: "2026-10-11"
---
## Definition

Tokens per second (TPS) measures the throughput of language model inference: how many [tokens](/en/wiki/terms/token) the model outputs per second. It usually counts the steady generation speed after the first token arrives, which is why it is also called output speed.

## How it works

The metric is obtained by counting tokens produced per unit of time in an inference service or benchmark, and it varies with model size, hardware, [context](/en/wiki/terms/context) length, and concurrent load. The same model can score very differently across deployment setups.

## Usage

TPS is used to compare inference services and hardware options and to estimate user waiting time; in streaming output it governs how fast the "typewriter" renders text.

## Related and confusable terms

TPS describes the speed at which the model emits one [next token](/en/wiki/terms/next-token) after another, and the [KV cache](/en/wiki/terms/kv-cache) is a key optimization behind that speed. Unlike [benchmark](/en/wiki/terms/benchmark) capability scores, TPS measures speed, not answer quality.
