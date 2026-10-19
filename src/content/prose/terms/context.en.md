---
term: context
locale: en
updatedAt: "2026-10-11"
---
## Definition

Context is everything a language model can see while handling one request: the user's input, the conversation history, and any attached documents or tool results. Its capacity limit, measured in [tokens](/en/wiki/terms/token), is called the context window.

## How it works

The model can only attend to what fits in the window; anything beyond the context window is invisible to it. Long conversations and documents are kept within the window through truncation, summarization, or storing key details in external memory.

## Usage

Long-document question answering, multi-turn conversation, codebase understanding, and retrieval-augmented generation all depend on sufficient context; the common complaint that a model "forgot earlier text" usually traces back to context management.

## Related and confusable terms

Predicting the [next token](/en/wiki/terms/next-token) is done from the context; the [KV cache](/en/wiki/terms/kv-cache) stores intermediate computations of that context to speed up repeated prefixes, but is not the context itself. All of this is machinery inside a [large language model](/en/wiki/terms/llm).
