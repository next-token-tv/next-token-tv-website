---
term: memory
locale: en
updatedAt: "2026-10-11"
---

## Definition

Agent memory is the mechanism by which an AI system persists and reuses information across sessions: after a conversation ends, a user's facts, preferences, and ongoing work remain stored and can be recalled later. It normally lives outside the context window of any single conversation, in files or databases.

## How it works

The common approach is to write memory to external storage — files, vector stores, or structured data — and have the agent retrieve and inject it into context when needed. Memory is often split into short-term (state within a session) and long-term (persistent information across sessions); deciding what to write and when to retrieve is the core design problem.

## Usage

This usage came up repeatedly in Next Token discussions: participants talked about the Memory in products like ChatGPT and Doubao, about self-hosting personal memory as Markdown files in a Git repository, and about a phone assistant automatically writing bookmarks into Memory. The common thread is an agent that "knows you" without being reintroduced every time.

## Related and confusable terms

Memory is often discussed alongside [context](/en/wiki/terms/context): context is the input the model can actually see during one inference, ephemeral by nature, while memory is persistent information across sessions that only takes effect when it enters the context. The show even featured a live "is it Memory or Context?" exchange on this distinction.
