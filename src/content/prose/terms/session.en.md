---
term: session
locale: en
updatedAt: "2026-10-11"
---
## Definition

A session is a bounded period of continuous interaction between a user and a system: on the web, servers group multiple requests into one user's continuous visit using credentials such as cookies; in AI assistant contexts, a session is one complete conversation whose context stays continuous.

## How it works

Web sessions rely on credentials (such as cookies) to associate scattered requests with the same user, and they expire when the session ends or times out. AI product sessions are carried by conversation history: messages within one session participate as context in later replies, and starting a new session usually means the context resets.

## Usage

Login state, shopping carts, and multi-turn conversations all rely on sessions to preserve the semantics of "the same user acting continuously". In agent tools and coding assistants, the session is also a common unit for organizing task history and context.

## Related and confusable terms

A session relates to but differs from [context](/en/wiki/terms/context): context is the set of information a model can see in one inference, while a session is the product-level way of organizing a stretch of interaction. This contrasts with long-term cross-session retention in [agent memory](/en/wiki/terms/memory).
