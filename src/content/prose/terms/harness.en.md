---
term: harness
locale: en
updatedAt: "2026-10-11"
---

## Definition

An agent harness is the software runtime layer that wraps a model, turning a system that only generates text into an [agent](/en/wiki/terms/agent) that can actually execute tasks. Anthropic uses the term directly when describing the Claude Agent SDK as "the agent harness that powers Claude Code".

## How it works

The harness drives the agent loop — gather context, take action by calling tools, verify the result and repeat. It manages tool access, the context window, permission control and error handling, so the model can concentrate on decisions without dealing with the plumbing underneath.

## Usage

Claude Code is a representative example: the same model paired with different harnesses can take on coding, deep research or browser operation. For developers, choosing or building a harness is one of the main engineering tasks in shipping an agent application.

## Related and confusable terms

The harness and the [agent](/en/wiki/terms/agent) relate as foundation to product: the harness provides the loop and the tools, and the agent is the actor on top of it. It also determines how [agent teams](/en/wiki/terms/agent-teams) are orchestrated, and the domain extensions it loads usually take the form of [agent skills](/en/wiki/terms/agent-skills).
