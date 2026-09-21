---
entityType: brand
entity: typesafe-ai
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'TypeSafe AI: System One models and the company behind Jev | Next Token Wiki'
seoDescription: 'What TypeSafe AI is, the System One model approach, and its relationship to the Jev model.'
---

## TypeSafe AI

TypeSafe AI is an AI lab building "System One models" for structured decisions in software automation. Per the [official announcement](https://typesafe.ai/blog/introducing-system-one-models-and-jev), the company was founded by Diogo Almeida (previously at OpenAI, working on the instruction-following research behind ChatGPT), operated in stealth for about two years, and made the announcement in September 2026.

## The System One model approach

The name borrows the System 1 / System 2 distinction from Kahneman’s *Thinking, Fast and Slow*: instead of generating text token by token like an LLM, a System One model outputs typed, structured values with calibrated probabilities (class labels, scores, yes/no decisions) and can be called in parallel. The announcement names the training method "Reinforcement Learning for Calibrated Decisions" (RLCD) and says outputs are constrained by schemas defined in advance — with the company itself noting that its "can’t hallucinate" claim comes from that schema-matching mechanism rather than from empirical measurement.

Its first model, [Jev](/en/wiki/products/jev) (named after economist William Stanley Jevons), is a structured-decision model built on this approach. The announcement lists pricing of $0.042 per million input tokens with free output, opened early access through a waitlist, and points developers to docs.typesafe.ai and console.typesafe.ai.

## Discussion in the show

In Next Token Weekly #003’s chapter “Jev：不聊天，做结构化判断” (Jev: no chat, just structured decisions), Guizang [introduces “TypeSafe AI’s Jev model” as a “general-purpose classifier” that outputs program-style results — choices, scores, yes/no judgments — saying “it’s very fast, can process things in parallel, and costs very little,” and cites the same input price as the official one](/weekly/003/transcript#quote-222f069c8d5fd45540e5). In the chapter “把新模型接入现有 Agent” (wiring a new model into an existing agent), Yang Pan [describes having GPT-6 read and understand the new model, write up a document, and build prototypes](/weekly/003/transcript#quote-a6157775ea73bd497666). The show’s descriptions match the official framing, but judgments like “fast” and “cheap” are the hosts’ experiences and opinions at the time.

## Frequently asked questions

### What company is TypeSafe AI?

TypeSafe AI is an AI lab founded by former OpenAI researcher Diogo Almeida. It builds System One models for structured decisions such as classification, scoring, and selection; its first model is Jev.

### What does “System One model” mean?

The name comes from “System 1” in *Thinking, Fast and Slow*: the model does not reason at length but, like a function, directly returns typed, probabilistic structured decisions (which option, what score, yes or no), callable in parallel and suited to software automation pipelines.

### How are TypeSafe AI and Jev related?

Jev is TypeSafe AI’s first System One model, introduced alongside the company’s announcement in September 2026. See the [Jev entry](/en/wiki/products/jev) and the [official announcement](https://typesafe.ai/blog/introducing-system-one-models-and-jev).

### How much does Jev cost?

The official announcement lists $0.042 per million input tokens with free output. For current pricing, rely on the [official announcement and documentation](https://typesafe.ai/blog/introducing-system-one-models-and-jev).

## Sources

- [TypeSafe AI announcement: Introducing System One models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [TypeSafe AI official website](https://typesafe.ai/)
