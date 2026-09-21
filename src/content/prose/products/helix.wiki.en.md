---
entityType: product
entity: helix
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Helix: Figure’s humanoid robot control model family | Next Token Wiki'
seoDescription: 'What Figure’s Helix model family does, what Helix 2.5 claims for zero-shot generalization, how Figure evaluated it, and what the Weekly show discussed.'
---

## What Helix is

Helix is a robot control model family from [Figure](/en/wiki/brands/figure) for humanoid perception and whole-body action control. On September 17, 2026, Figure announced Helix 2.5, calling it the most advanced neural network the company has built. It covers whole-body behaviors including locomotion, rigid and deformable manipulation, bimanual coordination, and active perception, with tidying living rooms, folding towels, and making beds as its validation tasks.

## Capabilities and boundaries

The core result in the official announcement is zero-shot generalization: one fixed checkpoint completed the tasks across 30 real homes with no data collection, fine-tuning, or adaptation in those environments or on those objects. Figure describes this as the first demonstration of zero-shot whole-body generalization at this scale on a humanoid, and quantifies the pretraining effect: pretraining on its Index data engine raised zero-shot success from 9% (a from-scratch policy) to 56%. The company also states that behavior specification became 2x cheaper while its scope expanded 30x.

In training terms, Helix 2.5 differs from the earlier Helix 02: Figure states that Helix 02 started from a pretrained vision-language model, whereas Helix 2.5 was pretrained from random initialization entirely on Index.

These results come from Figure’s own evaluation (30 Bay Area homes, a single checkpoint, "no partial credit" scoring) and are vendor-reported. Official materials describe Helix in the context of Figure’s own humanoid robots; the announcement offers no licensing, open download, or API for outside parties.

## Discussion in the show

In Weekly #003’s chapter “具身智能与零样本任务” (embodied intelligence and zero-shot tasks), [Guizang relays the Helix 2.5 release in the Chinese transcript: the main gain is zero-shot task success, lifted from 9% to 56% for tidying rooms, folding towels, and making beds, and he argues that progress in embodied intelligence — "the brain part" — remains slow](/weekly/003/transcript#quote-b90ae9a54b67a67f92e5). [Orange adds that the demo video shows the robot picking socks off the floor, which he found slightly eerie but interesting](/weekly/003/transcript#quote-5083d6a0a3149fbd372b). At the end of the previous chapter, Guizang refers to the release as coming from "the robot company that previously worked with OpenAI," and Orange confirms it is Figure. The [episode 003 chapter](/weekly/003/transcript#chapter-14) has the full context; an English transcript is not available.

## Frequently asked questions

### What is Helix?

Figure’s robot control model family for humanoid perception and whole-body action control. Helix 2.5 was announced on September 17, 2026.

### What does Helix 2.5 improve over earlier versions?

Per the official announcement: zero-shot whole-body autonomy across 30 real homes; Index pretraining raised zero-shot success from 9% to 56%; behavior specification became 2x cheaper while its scope expanded 30x.

### How do Helix 02 and Helix 2.5 differ?

Per Figure: Helix 02 started from a pretrained vision-language model, while Helix 2.5 was pretrained from random initialization entirely on the Index data engine and matched a Helix 02 behavior with half the adaptation data.

### Can other companies or researchers use Helix?

The announcement offers no licensing, open download, or API; the published results all concern Figure’s own humanoid robots.

### Are the reported numbers independently verified?

The success rates and generalization claims were evaluated and published by Figure itself (30 Bay Area homes, a single checkpoint, no partial credit); the official page lists no independent replication.

## Sources

- [Figure news: Helix 2.5 — zero-shot generalization across 30 homes (September 17, 2026)](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization)
- [Figure company page](https://www.figure.ai/company)
