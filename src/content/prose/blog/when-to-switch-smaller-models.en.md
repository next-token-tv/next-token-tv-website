---
locale: en
episodes:
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'When Is It Worth Replacing Frontier Models with Your Own Smaller Model?'
description: 'Switching to open-source or self-trained models to cut costs only works once the business is stable and quality can be verified independently. This article discusses the conditions under which that decision should be made.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-10'
---

Whenever a company announces that it has replaced frontier models with open-source ones at a fraction of the cost, the comments always fill with "shouldn't other companies do the same?" The judgment at recording time was clear: this decision is not the starting point of a technology choice but the outcome of business maturity. Get the order backwards, and the money saved on models will not come close to covering the quality you lose.

## Earn the right to talk about replacing first

The precondition for replacing a model is a stable business loop: the product has found its market, the revenue process works, and the whole chain still holds after the swap. Only companies that have reached this state can talk about "cutting costs" — because before replacing, they can already answer independently what "good enough quality" means. The vast majority of companies have not even found product-market fit yet; at that stage the right choice is to use capability to the fullest, not to save money.

News can easily create an illusion: one leading company switched models, and it looks like the next step for everyone. The ones actually able to take that step are the few who have already validated their business on frontier models and polished their pipelines. For most teams, the fear of "being killed by competitors if we don't use the latest model" is closer to reality than the fear of "an overly expensive model dragging down gross margin."

## What a relayed case actually shows

The case cited repeatedly in the discussion, by the relayer's account: an enterprise services company in the legal industry early on paid model vendors more than every dollar of revenue it took in; later it trained its own model based on an open-source LLM, and its gross margin turned positive. The revenue and cost figures have not been independently verified, but the mechanics of the case are worth unpacking: the replacement happened when model spending had grown large enough to affect gross margin, when the tasks were stable enough to evaluate systematically, and when the vertical was closed enough and the data proprietary enough. Only when all three conditions hold at once is replacing rational.

## "Good enough" must be defined by metrics from within the scenario

The claim "switching to a small model makes little difference" needs a follow-up question first: verified by what metrics, at which steps of the process. Another example relayed at recording time: a product lead claimed that in their scenario, a small model matched the frontier model's engagement rate. Engagement rate is a real business metric, but it is an aggregate — an identical overall engagement rate does not mean every step is equally reliable; the quality distribution across summarization, judgment, and execution can still vary widely.

Being able to run this kind of verification is itself a qualification. Only teams with real usage data that can run head-to-head tests of old and new models have grounds to conclude anything; teams without a data loop cannot even prove "about the same." So the sensible order is: define the product's requirements and quality standards first, build independent evaluation, and then let the replacement decision be made by the evaluation results — not directly by cost pressure.

## Vertical and closed scenarios are where replacement holds up more easily

The company in the case operates in the legal industry — high barriers, closed processes, clear accountability. Similar structures appear in fields like medical services for doctors and architectural design: proprietary data, costly errors, customers paying for outcomes rather than for models. In these scenarios the model is just one factor of production; swapping it does not change the product's foundation.

Conversely, in everyday, general-purpose scenarios — verticals like video generation that everyone can enter — barriers are thin to begin with and product value hugs model capability closely, so the freedom to swap models is actually smaller: the model is the product's power itself. Figuring out which situation you are in matters more than studying how others switched.

At recording time, one complementary product direction also came up: since model capability is a black box to most users, a product can absorb the model choice, giving users an automatic mode while the product side handles scheduling and quality. Removing the model list from the interface and taking the choice back onto the product side is itself an expression of "the moat is in the product." It also hides a way to test your moat: if the business still stands after swapping out the frontier model, the moat lives in the product, the data, and the process; if it collapses the moment you swap, the moat you were proud of was actually rented from a model.

## Timing is also a cost question

The returns to replacement change over time. Inference costs are trending down overall while the compute hardware needed to run agents is getting more expensive; between the falling and the rising, the build-and-train math has to be recalculated again and again. On the hardware side there is also an old regularity cited in the discussion: as availability rises, usage grows — efficiency gains do not reduce total compute demand. Free products sustaining huge volumes of everyday interactions show that small models can already handle many ordinary tasks; but "can handle ordinary tasks" and "can handle your core task" are two different things.

The moment when replacing frontier models with your own smaller model is worth doing — and can be done successfully — is when the business is stable, the metrics are defined, the data is in hand, and the vertical is deep enough. Miss any one of the four, and the more rational choice is still to keep using the strongest model and spend the energy on product hypotheses not yet validated. Replacement is the result of capability being verified, not the starting point of saving money.

## Sources

- [The relayed account of an open-source model swap turning gross margin positive](/en/weekly/004/transcript#quote-36409c36b11adf09038f)
- [Hardware costs and the math of free products](/en/weekly/005/transcript#quote-f1bd249d3df8eb132717)
