---
entityType: person
entity: guanlan-dai
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Guanlan Dai: Runta Founder and AI Agent Execution Infrastructure | Next Token Wiki'
seoDescription: 'Learn about Runta founder Guanlan Dai: his Cloudflare and Kong background, Runta’s execution layer for AI agents and funding, FrontierHarness Eval, and his mention on the show.'
---

## Guanlan Dai

Guanlan Dai (戴冠兰) is the founder of [Runta](/en/wiki/products/runta), an execution-infrastructure company for AI agents that Runta calls "the execution layer for AI agents": isolated persistent runtimes in which token spending, credential protection, network-access governance, and resource scaling are handled at the layer where agents execute.

## Background and Runta

Personal background: per [Runta's team page](https://runta.com/about/), Dai has more than ten years of experience in large-scale internet infrastructure. He was an early engineer on the Cloudflare Edge team and later led the Edge Platform team (CDN, WAF, and the front-end request path), helping scale the edge network to over 10 trillion requests per month serving more than 2.5 billion users. He was then a founding engineering leader at Kong, building and leading teams behind Kong Gateway, Kong Cloud, the Kubernetes Ingress Controller, and Kong's AI infrastructure products. The episode notes of the podcast Crossing (十字路口 Crossing) also describe him as an early member of the Cloudflare and Kong teams.

Company facts: Runta's team page lists investors including World Labs (Martin Casado) and Jeff Dean, Fei-Fei Li, Ali Ghodsi, Ram Shriram, and Thomas Wolf. The Next Web and other outlets reported in July 2026 that Runta raised a US$20 million seed round led by a16z at a valuation above US$100 million (per The Information), with the company based in the San Francisco Bay Area. Product facts from the [site](https://runta.com/) and [docs](https://runta.com/docs/): isolated persistent runtimes; spend controls such as Prompt compression and Token X-ray; protected credentials injected as placeholders; governed network access with per-domain rules; and automatic suspend/resume. Access is via a CLI and Python/TypeScript SDK, and runtimes can come preinstalled with coding agents including Codex CLI, Claude Code, and OpenClaw.

Benchmarks: on September 1, 2026, Runta published FrontierHarness Eval (FrontierHarness v1.0) on its blog, evaluating 9 coding-agent harnesses across 30 tasks and 12 configurations — 360 evaluations in total — on the same Kimi K3 model and runtime, with deterministic verifier-based pass/fail scoring. Pass rates clustered between 50.0% and 66.7%, while cost per passed task ranged from US$1.05 to US$18.34 (a roughly 17x spread), with Codex the quality leader at 66.7%.

## Mention in the show

Guanlan Dai does not appear in the episodes quoted on this page. In Weekly #001's chapter on harness evaluations, Yang Pan says: "Guanlan's team — that is, Runta — just released an evaluation called Harness Eval," describing it as comparing harnesses on task completion rate, token cost, and other dimensions, with Codex the most efficient and DeepSeek Harness very strong ([see the line in the Chinese transcript](/weekly/001/transcript#quote-92ea5ff79896fd00a92a) and [the chapter](/weekly/001/transcript#chapter-06)). The "Harness Eval" named on the show is the officially published FrontierHarness Eval; the hosts' reading of the results is their own summary, consistent with the official blog's data, and is not a statement by Dai.

## Frequently asked questions

### Who is Guanlan Dai?

The founder of Runta; per [Runta's team page](https://runta.com/about/), he was an early engineer on Cloudflare's Edge team and a founding engineering leader at Kong.

### What does Runta do?

It builds the execution layer for AI agents: isolated runtimes with credential protection, governed network access, and resource scaling. The Next Web and other outlets reported a US$20 million seed round led by a16z in July 2026.

### What is FrontierHarness Eval?

A benchmark Runta published on September 1, 2026, comparing 9 coding-agent harnesses on 30 tasks with one shared model, measuring pass rate and cost per pass; see the [Runta blog](https://runta.com/blog/introducing-frontierharness-eval/).

## Sources

- [Runta website](https://runta.com/)
- [Runta team page](https://runta.com/about/)
- [Runta documentation](https://runta.com/docs/)
- [Runta blog: Introducing FrontierHarness Eval](https://runta.com/blog/introducing-frontierharness-eval/)
- [The Next Web on Runta's seed round](https://thenextweb.com/news/runta-a16z-seed-ai-agent-infrastructure)
- [Crossing episode page (Xiaoyuzhou)](https://www.xiaoyuzhoufm.com/episode/6a773808c4079d62c57f5802)
