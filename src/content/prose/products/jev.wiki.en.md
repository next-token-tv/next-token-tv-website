---
entityType: product
entity: jev
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Jev model: TypeSafe AI’s structured-decision model and its boundaries | Next Token Wiki'
seoDescription: 'What the Jev model from TypeSafe AI is: the System One positioning, Choice/Score/Noul primitives, early-access availability, announced pricing, and how the Weekly show discussed it.'
---

## What Jev is

Jev is a structured-decision model from [TypeSafe AI](/en/wiki/brands/typesafe-ai), which describes it as the first System One model: a call takes a state and typed questions and returns structured results that code can use directly, rather than text written for humans to read. The official documentation groups the interface into three primitives — Choice (pick an option), Score (grade a state against a rubric), and Noul (a 0–1 true-or-false judgment) — each returning typed values, probability distributions, and confidence. The official blog announced in September 2026 that Jev is available in early access, with developers joining from a waitlist; before being admitted, it offers no generally available public service.

## Usage and boundaries

TypeSafe positions Jev as the fast, structured-decision layer inside software workflows: classification, routing, scoring, extraction, filtering large datasets, and checking the outputs of large language models. The documentation states that every question is evaluated in parallel and in isolation against the same state, so adding questions barely changes response time; cardinality supports up to 255 options, with a two-stage path above that. Developer documentation lives at [docs.typesafe.ai](https://docs.typesafe.ai/), the console at [console.typesafe.ai](https://console.typesafe.ai/), and official SDKs exist for Python and JavaScript.

On boundaries, the documentation recommends decomposing questions that would require extended reasoning or weigh multiple factors into atomic questions composed in code. For multi-hop reasoning, understanding complex metaphors, or precise arithmetic and date handling, both the official materials and the show participants flag it as the wrong tool. As for pricing, the announcement post quotes an early-access rate of $0.042/MTok for input and free output; current rates and access terms are governed by the [announcement post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) and the [official documentation](https://docs.typesafe.ai/).

## Discussion in the show

Several chapters of Weekly #003 discuss Jev:

- In “Jev：不聊天，做结构化判断” (“Jev: no chat, structured decisions”), [Guizang summarizes it as a general classifier that only outputs choices, scores, and yes-or-no judgments, and relays the official rate of $0.042/MTok for input with free output](/weekly/003/transcript#quote-222f069c8d5fd45540e5); [Orange describes scoring over 300 memories in his Cola app and filtering out 18 worth keeping](/weekly/003/transcript#quote-8fe6111b8fcd1ff74f0f).
- In “微信好友标签与高频判断” (“WeChat friend tags and high-frequency judgments”), [Yang Pan walks through using Jev to tag 10,000 WeChat friends, suggest deletions, and extract TODOs from daily chats](/weekly/003/transcript#quote-e05f7e2da73cbdb6d1b6), noting it suits massive, high-frequency workloads with a few hundred milliseconds per parallel call.
- In ““没有幻觉”不等于判断正确” (“‘No hallucination’ is not the same as being correct”), [Yang Pan argues the official “no hallucination” claim is a sleight of hand — reliable output format does not mean accurate judgment](/weekly/003/transcript#quote-adb4399997c2d586f1e8); Guizang relays limitations the vendor itself lists, such as weak multi-hop reasoning, unreliable arithmetic and date handling, and poor handling of complex metaphors ([chapter-06](/weekly/003/transcript#chapter-06)).
- In “具身智能与零样本任务” (“Embodied intelligence and zero-shot tasks”), [Guizang argues this class of model lets a robot’s “brain” adjust limb and voice parameters in real time](/weekly/003/transcript#quote-d9b9b36c2167a613f767); [Orange calls Jev “moving Transformer and Token techniques into another dimension”](/weekly/003/transcript#quote-085df5faa61ef0e0bfdf).

These are participant experiences and opinions, not an independent evaluation of the model.

## Frequently asked questions

### What is Jev?

In this article, Jev refers to TypeSafe AI’s structured-decision model: it takes a state and typed questions and returns choices, scores, or true-or-false judgments that a program can use directly. It is unrelated to the Jevons paradox or other unrelated uses of the word “jev.”

### Is Jev available, and how do I get access?

The official blog announced early access in September 2026, with developers admitted from a waitlist; the documentation is at [docs.typesafe.ai](https://docs.typesafe.ai/) and the console at [console.typesafe.ai](https://console.typesafe.ai/). It is not a generally available service that anyone can start using on request.

### How is Jev priced?

The announcement post quotes an early-access rate of $0.042/MTok for input and free output. That is the announcement’s figure; check the [official documentation](https://docs.typesafe.ai/) and the [announcement post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) for current rates.

### How does Jev differ from a large language model?

An LLM generates text for people to read; Jev does not generate text. It evaluates typed questions against a given state and returns structured values, probabilities, and confidence. The documentation positions it as a decision layer complementary to chat models, with complex questions decomposed into atomic ones and composed in code.

### What are Jev’s known limitations?

The documentation tells developers to avoid complex questions requiring multi-step reasoning or weighing multiple factors; limitations relayed in the show also include unreliable arithmetic and date handling and difficulty with complex metaphors. In the show, Yang Pan cautions that “no hallucination” refers only to output format, not to the accuracy of the judgment itself.

## Sources

- [Introducing System One Models & Jev (TypeSafe AI blog)](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [TypeSafe AI documentation](https://docs.typesafe.ai/)
- [TypeSafe console](https://console.typesafe.ai/)
