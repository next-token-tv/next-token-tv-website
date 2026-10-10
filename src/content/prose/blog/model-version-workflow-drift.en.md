---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
status: published
title: 'The Model Name Didn''t Change — So Why Did the Workflow?'
description: 'After the prompts are tuned and the pipeline works, model behavior can quietly shift one day. This article breaks the "models got dumber" debate into separate questions: versions, routing, pricing, and compatibility.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-15'
---

An API model once had only two fixed names for a long stretch: one for chat, one for reasoning. Callers wrote their prompts against the names and got their pipelines working — until one day the output was off. The name had not changed; the model behind it had been swapped, with no notice of any kind. This was the common experience in the year before recording, and it is where many "models got dumber" discussions started.

A model's name is the most basic contract between users and the service. To discuss why that contract has loosened, we need to separate the things that have been bundled together.

## Version numbers are disappearing

Rolling releases are becoming the industry default. Vendors ship a Preview first to sound out reception; some replace version numbers with dates; some announce continuous online updates with no more version numbers, updating several times a week by default. For vendors, this exposes the pace of post-training iteration directly to users; for users, it means "which model am I actually calling" no longer has a definite answer.

For evaluation this is double-edged: you can no longer pin a bad verdict on a particular version — and you cannot pin a good one on it either. A fixed public belief like "that version of the model was strong" is losing its carrier.

How loosely a vendor treats names follows the weight of its business model. The same vendor, when it released models early on in a "just try it" spirit, largely ignored user demands; as commercialization deepened and it began serving enterprise customers, its responsiveness to feedback visibly improved, and controversial changes got rolled back. The closer a model service comes to being public infrastructure, the less the stability of its name is a technical detail — and the more it is a promise.

## Four things behind one name

What users perceive as "it changed" is really four different things, each changing on its own.

First, updates: the backend model is quietly replaced, and behavior changes with it. Fixed names were designed so callers could upgrade without noticing; the price is that behavioral differences are left for users to discover on their own.

Second, routing: in a controversy shortly before recording, a model ID was temporarily pointed at another, cheaper model, then switched back a few days later. Name, price, and actual model briefly fell out of sync — and for anyone programming against the name, that is an interface change. Though brief, the discussion still flagged the difference in kind: continuously updating your own model is one thing; pointing an ID at a different model is another — the former is iteration, the latter changes what the name itself means.

Third, pricing: enterprise-facing services need stable prices. When models roll update after update, how are ten thousand enterprises supposed to adjust their pricing and budgets along with you? It is a genuine burden. That is why some argue that vendors that want enterprise revenue need to offer stable versions; those unwilling to are effectively ceding that market to third parties — and third-party resale usually pays for it in speed and cache efficiency.

Fourth, compatibility: prompts, plugins, and workflows are all built on specific behaviors. Worth noting: the share of a product's behavior driven by prompts has actually declined over the past two years, as more constraints get internalized into the model; but workflows' dependence on predictable behavior has not fallen — it has risen.

## The "got dumber" debate: start with checkable observations

In the same period, "models got dumber" discussions kept resurfacing in the community. The impression itself deserves to be described precisely first: the same model, well reviewed at launch, is later widely judged worse than before. The explanations in circulation include routing simple questions to smaller models, throttling the amount of thinking, adjusting output strategy, and so on. These come from the community's reverse-engineered guesses about the service; no vendor has confirmed them, and they cannot be treated as conclusions. The confirmable facts are far fewer: quality problems caused by bugs did happen — users reported them en masse and the vendor investigated and fixed them; restrictions on abnormal usage patterns are product policy, a separate matter from model capability; and users' felt experience is real and deserves to be taken seriously.

Accusing vendors of "deliberately dumbing the model down" is hard to prove and does not help solve the problem. What is actually missing is evidence: outputs from the same task, the same settings, at different times. Only with that comparison in hand can you distinguish whether the model changed, the routing changed, or the way you use it changed. Community sentiment reacts fastest in this process, but the sample is biased — good as a lead, not as an attribution.

## Keep your failure cases

For workflows that depend on models, the workable move is to fill in what the vendor does not provide: record the version info, parameter settings, and outputs of every call. When something goes wrong, check the records first to confirm "what changed," then decide whether to change the prompt, lock in a third-party stable version, or adjust the pipeline. Providers running internal evaluations need the same thing — reproducible scenarios, not conclusions drawn from a single experience.

Model names will most likely keep getting more abstract — dates, codenames, continuously updated major versions. Once the contract loosens, part of the responsibility for reliability shifts to users: whoever keeps the records is the one entitled to judge "what exactly changed."

## Sources

- [Silent swaps under a fixed model name](/en/weekly/002/transcript#quote-3c040c2168faa3d31861)
- [Rolling releases and vanishing version numbers](/en/weekly/001/transcript#quote-ea83290f01de720c5c8a)
- [The circulating explanations behind "got dumber" and the felt experience](/en/weekly/002/transcript#quote-e1f2ecea0247c377ea85)
