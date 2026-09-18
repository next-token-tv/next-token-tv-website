---
entityType: product
entity: runta
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Runta: the execution layer for AI agents, capabilities and FrontierHarness Eval | Next Token Wiki'
seoDescription: 'What Runta provides for AI agents — runtimes, spend control, credential protection, network governance — plus how to onboard and what the Weekly show relayed.'
---

## What Runta is

Runta is an execution-infrastructure platform for AI agents, which it calls "the execution layer for AI agents": durable, isolated runtimes for agents, with controls for token spend, credentials, network access, and compute handled at that layer. The company was founded by [Guanlan Dai](/en/wiki/people/guanlan-dai). See the [Runta website](https://runta.com/).

## Capabilities and onboarding

Per the [website](https://runta.com/), Runta's capabilities fall into three groups. Spend: prompt compression to trim redundant context, and Token X-ray for inspecting captured tool inputs and outputs to spot repeated calls. Control: protected credentials replace raw secrets with usable credential stubs, with real values injected only at the authorized network boundary; egress is governed by allow or deny rules on exact and wildcard hosts. Scale: idle runtimes are suspended automatically and resumed on demand while preserving state, and memory auto-scales within a configured cap.

Onboarding is to install the Runta CLI, authenticate, create a runtime, and run the agent inside it — the controls apply without modifying the agent itself. The site also links [documentation](https://runta.com/docs/), pricing, an OpenAPI spec, and a blog, with a free trial via dashboard.runta.com.

## Funding and FrontierHarness Eval

The [official about page](https://runta.com/about/) lists investors including World Labs (Martin Casado) and Jeff Dean, Fei-Fei Li, Ali Ghodsi, Ram Shriram, and Thomas Wolf. According to reporting by The Next Web and others, Runta raised a $20 million seed round led by a16z in July 2026 at a valuation above $100 million (per The Information). On September 1, 2026, Runta published FrontierHarness Eval (FrontierHarness v1.0) on its blog: 9 coding agent harnesses evaluated on 30 tasks across 12 configurations — 360 runs in total — under a unified model (Kimi K3) and runtime, scored by a deterministic verifier. See the [official blog post](https://runta.com/blog/introducing-frontierharness-eval/). More background is on [Guanlan Dai's page](/en/wiki/people/guanlan-dai).

## Discussion in the show

In Weekly #001's chapter "Harness 评测：完成率、Token 成本与"斩杀线"" ("Harness evaluation: completion rates, token costs, and the 'culling line'"), Yang Pan relayed the day's news: ["Guanlan's team, that is Runta, just released an evaluation called Harness Eval," comparing harnesses by task completion rate, token cost, and other angles](/weekly/001/transcript#quote-92ea5ff79896fd00a92a). The host's reading of the results is a relay that broadly matches the official blog data; it is not a statement from Runta. See the [episode 001 chapter](/weekly/001/transcript#chapter-06) in the Chinese transcript; an English transcript is not available.

## Frequently asked questions

### What is Runta?

An execution-infrastructure platform for AI agents: durable, isolated runtimes with controls for token spend, credential protection, network governance, and resource scaling. See [runta.com](https://runta.com/).

### Who founded Runta?

[Guanlan Dai](/en/wiki/people/guanlan-dai), previously an early engineer on Cloudflare's Edge team and a founding engineering lead at Kong, per the [official about page](https://runta.com/about/).

### How much does Runta cost?

The site offers a free trial via dashboard.runta.com, and plans are described on the official pricing page; this page does not restate prices.

### What is FrontierHarness Eval?

A benchmark Runta published on September 1, 2026, comparing 9 coding agent harnesses on 30 tasks under a unified model, reporting completion rates and token costs — see the [official blog post](https://runta.com/blog/introducing-frontierharness-eval/).

## Sources

- [Runta website](https://runta.com/)
- [Runta documentation](https://runta.com/docs/)
- [Runta about page](https://runta.com/about/)
- [Runta blog: Introducing FrontierHarness Eval](https://runta.com/blog/introducing-frontierharness-eval/)
- [The Next Web: Runta seed round report](https://thenextweb.com/news/runta-a16z-seed-ai-agent-infrastructure)
