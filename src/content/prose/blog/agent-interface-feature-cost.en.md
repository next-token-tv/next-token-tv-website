---
locale: 'en'
episodes:
  - 'next-token-weekly--010'
status: published
publishedAt: '2026-11-17'
title: 'The Button Is Easy. What Comes After It?'
description: 'Using HTML export in a chat tool as an example, this article examines the discovery, testing, and maintenance costs of a new entry point—and when a visible control earns its place.'
updatedAt: '2026-11-17'
---

Imagine a chat tool that can already turn a conversation into HTML. The team wants more people to know about the capability, so it adds an “Export webpage” button beside the input. Building the control may be quick. The lasting product questions begin after launch: Where does it go on mobile? Can it be pressed in an empty conversation? What happens when generation fails? Will files exported by an older version still open?

A discussion on the show observes that AI can make adding features easier. Another distinguishes the ability to generate HTML from the decision to give it a dedicated button. Together, the passages on [feature expansion](/weekly/010/transcript#quote-5cbcf812036a18f78089) and [HTML generation without a dedicated button](/weekly/010/transcript#quote-0f7920320d6a6c0f5c10) point to a practical trade-off: delivering a capability and maintaining an entry point for it carry different costs.

## Which paths does one entry point change?

A new button needs a defined relationship with existing export, share, and copy actions. If a user selects part of a conversation first, does it export the selection or the whole thread? If a response is still being generated, does the control wait, become disabled, or export what is currently available? Those choices become interface behavior and test cases.

Each path adds combinations to consider across devices, content states, languages, errors, and recovery. A team need not exhaustively test every combination, but it does need to identify failures that could cost users work and decide where simpler rules provide adequate coverage. Google SRE’s chapter on simplicity distinguishes essential from accidental complexity and discusses the ongoing cost of unused code and unnecessary APIs. Here, saving a file is a user requirement. Maintaining several ways to export, each with slightly different behavior, adds to the work of changing it later.

## If the button disappears, can people find the capability?

On-demand discovery can reduce the number of permanent controls. A user might say, “Turn this conversation into a webpage,” and receive a preview with a visible save action. An example prompt or help page can introduce the possibility to first-time users.

There is a trade-off: people cannot reliably request a capability they do not know exists. Suppose exporting is a frequent handoff in a collaborative workflow, or someone needs to save work reliably before going offline. A prominent export control may serve them better than waiting for a natural-language request. Actions people must find promptly, such as save, cancel, or delete, should not depend solely on guessing a command either.

Before making an entry point permanent, describe the task it serves, when people will look for it, and what happens if they cannot find it. Then examine help searches, failure reports, and actual use together. Low usage alone is ambiguous: a feature may be unwanted, or simply hard to discover.

## Plan the way out before launch

Assign an owner, define compatibility expectations, and set a review date. If a feature later no longer merits a permanent place, test its replacement in real tasks, give users advance notice, and provide a way to export or migrate their data with a reasonable transition period. Cancellation for an in-progress action and undo for a reversible one can also make experimentation less costly.

A simple interface is maintained over time. Before adding the next entry point, include the cost of explaining, testing, and eventually retiring it alongside the cost of building it.

## Sources

- [Google SRE: Simplicity](https://sre.google/sre-book/simplicity/)
