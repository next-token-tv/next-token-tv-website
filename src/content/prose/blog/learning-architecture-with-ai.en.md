---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'Learning Architecture with AI, Starting with a Background Task'
description: 'Read the code through task submission, failure retries, and result delivery, then look up the design rationale. Use a concrete example to turn an architecture explanation into judgments that can be checked and reused.'
updatedAt: '2026-11-10'
---

After reading an AI-organized project overview, you may know which framework, database, and queue it uses, yet still not know how to make those choices in your own project. This gap is common: technical names are easy to remember, but the conditions behind choosing them may not be written in the code.

The seventh episode introduced using REA to analyze a large project, then having a model explain the architecture and organize the documentation. With that overview in hand, you can investigate one specific decision instead of rushing to judge whether the whole architecture is good.

## Follow a Background Task Through the Code

Take a hypothetical project: after a user uploads a file, the system puts a conversion task in a queue. First find where the task is created, what consumes it, and where the result is saved. Then see how the user knows processing is complete.

At this point, you can confirm the calls and the direction of the data flow. To find out why background processing was chosen, you need to keep looking. Perhaps the task takes too long, perhaps concurrency needs to be limited, or perhaps the choice comes from existing infrastructure. If there is no design record, ask the model to list these explanations as candidates and point out what evidence each would require.

Next, inspect the failure path. If the process exits before saving the result, will the task run again? If it does, could it generate duplicate files? If the model says retries are safe, ask it to point to the code that prevents duplicate writes. If you cannot find it, that judgment is not yet established.

Read this way, a broad architecture explanation becomes a set of questions that can be investigated further.

## Change One Condition and See Whether the Approach Still Fits

Suppose this conversion task used to run only a few times per hour, but now runs hundreds of times per minute. First estimate the processing time per task and the available concurrency, then see how long the queue will build up. If users must wait for the result before continuing, you also need to reconsider how the background task communicates progress.

These analyses do not necessarily require rebuilding the whole system. In an experimental project, you can validate just the point you are most concerned about, such as whether duplicate submissions create duplicate records. Recording the input, the observed result, and the cases not yet covered is more useful later than saving only the statement “this architecture is scalable.”

Sometimes the answer is that the existing approach is already sufficient. Introducing a complex queue for an infrequent task may instead increase deployment and troubleshooting burdens. Understanding architecture also means knowing when you can do less.

## Record What the Decision Was Solving at the Time

Michael Nygard's [Architecture Decision Records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) preserve the context, status, and consequences of important decisions in short documents. Martin Fowler's [explanation](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) also recommends keeping old decisions and linking to a new record when they are superseded.

For the exercise above, a note could state how long file conversion usually takes, whether users can leave the page, why background processing was adopted, and how duplicate tasks are handled. If any item is only a guess, keep a “to check” marker and the relevant code location.

When a similar need comes up next time, compare these conditions first. If usage frequency, how long users wait, and the cost of failure are all different, the old approach can only provide a list of questions; it cannot be used directly as the answer.

## Related Materials

- [An attempt to use REA and a model to analyze architecture and organize experience](/en/weekly/007/transcript#quote-3fb85b619a2fda8c51d1) and its [reuse purpose](/en/weekly/007/transcript#quote-e5214dbc3daa7801eb8e)
- [Discussion of the need for opportunities to practice architectural skills](/en/weekly/007/transcript#quote-b2df0bd183e54d599af5)
- [Michael Nygard: Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), November 15, 2011; accessed October 26, 2026.
- [Martin Fowler: Architecture Decision Record](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html), March 24, 2026; accessed October 26, 2026.
