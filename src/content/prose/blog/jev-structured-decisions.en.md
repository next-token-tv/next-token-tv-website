---
locale: en
episodes:
  - next-token-weekly--003
status: published
title: 'What Is Jev For? Give the Model the Judgment, Give the Program the Result'
description: 'Filtering memories, tagging contacts, extracting to-dos: when a task calls for a score or a verdict, how does a model actually fit into a workflow?'
updatedAt: '2026-10-10'
publishedAt: '2026-09-26'
---

More than three hundred memories sit inside an AI assistant. Which ones are worth keeping, and which are just stale trivia? Asking the model to write a summary does not complete the cleanup. What the program ultimately needs is a keep-or-drop decision for each memory: a score, or a retention verdict.

That is exactly the kind of task [Jev](/en/wiki/products/jev) targets. Selection, scoring, and yes-or-no judgments all become results a downstream program can consume directly. Inside an agent that already understands requests and plans steps, this capability can take over the smaller, more frequent slice of the work.

## From three hundred memories to ten thousand contacts

In one trial against Cola, more than three hundred memories were handed to Jev for scoring. The model singled out roughly eighteen items it considered important, leaning toward abstract information and discarding fragmentary trivia.

The result offers a way to observe the model: how it understands "important," and whether that matches what the memory owner needs. Eighteen is the outcome of this one pass, not a tested optimum.

Another experiment ran at larger scale: tagging roughly ten thousand WeChat contacts based on chat history and shared groups. There were twenty-odd candidate labels—CTO, founder, and similar roles—and one person could match several at once.

The task was first imagined as one call returning multiple tags, then restructured into per-label judgments: does this person match the first label, does this person match the second, and so on. A multiple-choice question became a series of yes-or-no questions.

The split fits the model's output format better. Judgments across different contacts and labels have no dependency order, so calls can fire in parallel without waiting for the previous one. The model produces results; the program handles scheduling and aggregation.

As of when this experiment was recorded, the ten thousand contacts had not all been processed, and the comparison against other small models was unfinished. The case already demonstrates the task-splitting approach; accuracy and total processing time remain to be verified.

## Frequent judgments are the ones that scale

Tagging contacts is one use among many. Scanning each day's chats for to-dos and important information involves the same kind of repeated judgment; scoring contacts by rule and tidying up a friends list share the same structure.

What these tasks have in common is volume: the same judgment runs many times. Only then do the time and cost of a single call accumulate into a perceptible difference.

Conversely, if a step accounts for 1% of the total workload, cutting its cost by 90% improves the whole by only 0.9%. Swapping the occasional call in a workflow for a faster model may not justify adding a whole new integration path.

When choosing scenarios, it is worth seeing clearly where the judgments happen, how many times a day they run, and how much overhead they actually account for. Memory screening is good for observing a model's trade-offs; bulk tagging is better for testing throughput. The two need not be measured with the same yardstick.

## A returned result is not a correct judgment

Structured output solves how the program receives an answer, but whether the answer is trustworthy needs another layer of verification.

A classification can be perfectly well-formed and still put the wrong person in the wrong bucket; a score can come back stably and still mismatch the user's sense of importance. No longer retrying on format errors does not mean the program can skip checking judgment quality.

Claims of "no hallucination" therefore need careful reading. If the promise covers output format, it cannot be stretched to mean every answer is correct. The contact-tagging task still comes back to concrete questions: who got mislabeled, which labels are easy to confuse, and whether the errors affect downstream use.

The materials behind this trial also list limitations around multi-hop reasoning, complex references, arithmetic, and date handling. A question that takes several relational hops to answer should not be treated as a simple judgment just because the output is short. Irrelevant context can also hurt accuracy; up-front cleanup and filtering still matter.

## Finding its place inside an existing agent

In practice, a reasonable first step is having the existing agent read the model documentation and build a prototype for a concrete scenario. But once the prototype runs, differences in request types, calling conventions, and the existing workflow still need handling.

A standalone demo only has to prove that a usage is possible; a daily workflow has to process real data over and over. Where the model gets invoked, what it returns, and how results flow into the next step all need to be explicit.

That also defines where Jev is worth trying: judgment steps that are hard to fully specify as rules, need semantic understanding, and run at high frequency. Complex reasoning can stay with other models; deterministic computation can stay with programs. Whether a given step is worth replacing should be answered jointly by that step's quality, speed, and integration cost.

From memory scoring to contact tags, what always needs verifying is the concrete task. Returning a score is only the starting point; whether that score helps the program make better trade-offs decides whether it earns a place in the workflow.

## Sources

- [The memory-screening trial record](/en/weekly/003/transcript#quote-8fe6111b8fcd1ff74f0f)
- [The task split for contact tagging](/en/weekly/003/transcript#quote-41b03892faa40dcc1c49) and [experiment progress and high-frequency scenarios](/en/weekly/003/transcript#quote-e05f7e2da73cbdb6d1b6)
- [Output format versus judgment accuracy](/en/weekly/003/transcript#quote-adb4399997c2d586f1e8)
- [Reasoning limitations](/en/weekly/003/transcript#quote-5560e2d4ba097af7fb72) and [the effect of irrelevant context](/en/weekly/003/transcript#quote-8484e03366d3420cf373)
- [Building the prototype](/en/weekly/003/transcript#quote-a6157775ea73bd497666) and [the integration questions with an existing agent](/en/weekly/003/transcript#quote-4a6ca6eb9382587e6048)
