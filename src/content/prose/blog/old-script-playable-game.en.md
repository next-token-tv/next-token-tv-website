---
locale: en
episodes:
  - next-token-weekly--005
status: published
title: 'From an Old Game Script to a Playable Prototype'
description: 'A game script and worldbuilding document that sat on a hard drive for a year became a playable experience prototype over this holiday. Which stretch of the road from idea to playable got compressed, and which judgments remain in human hands.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

A game script and worldbuilding document sat on a hard drive for a year. Nothing followed after it was finished last year; this holiday it was handed to a model, and the very first version that ran was already playable.

## Existing Lore Replaced Communication from Scratch

The starting point this time was not a vague idea but a finished script and setting document. The model read through the existing script and lore, started writing right away, and the first version had almost no obvious flaws—it was immediately playable, and all that followed was a few rounds of iteration.

What the script and lore did here was equivalent to a requirements document written in advance: the worldview, gameplay rules, and goals were already on paper, so the model didn't have to guess what to build from a general wish. Between idea and playable there used to be a stretch of road—"translating the setting into development tasks": breaking down features, setting priorities, spelling out how each system behaves. This time, that stretch was largely skipped.

The division of labor in later iterations is also worth recording: the human pointed out where performance tuning was needed and where the lore logic had to change, and the model expanded such a brief instruction into a full implementation. Requirements could be issued very briefly because the context was already complete inside the project—the script, the existing code, and every previous round of changes replaced the paragraphs of explanation that would otherwise have gone into a requirements document.

One description of the experience compared it to "a game company CTO with a multi-million salary finishing months of work in a few dozen minutes." That is an experience-level analogy, not a verifiable benchmark; all it conveys is the subjective feeling brought by the iteration speed.

## When the Performance Problem Showed Up

Once the prototype was running, the problem became performance. The initial implementation drew with Canvas; after a request to improve performance, the implementation was switched to [PixiJS](/en/wiki/products/pixijs). During the tuning, the executor explained what it was doing as it went: where CPU time was going, how that related to the screen refresh rate, how the algorithmic path could be optimized, how many milliseconds could be won back.

This is a typical prototype path: first make the thing run, then optimize item by item against frame time and the critical path. "Playable" takes priority over "smooth," and performance problems only earn the right to exist once something is playable—for a prototype meant to validate an idea, reversing the order means nothing gets validated.

## The Fork in the Road After the Prototype

The next consideration was shipping on [Steam](/en/wiki/products/steam) and the [App Store](/en/wiki/products/app-store). Asked about this, the model recommended moving to the [Godot Engine](/en/wiki/products/godot-engine). Meanwhile, for a project already finished in some language and with enough unit tests to lock in its logic, replacing the implementation language was considered something that could be done with ease.

One thing has to be made clear: all of this remains at the stage of next-step ideas. As of when this attempt was recorded, the game is a playable experience prototype; it has not been listed on any platform yet, and no final technology stack for release has been decided.

## "The Code Is Great" Is, for Now, Only a Rumor

There is another claim circulating about this attempt: the resulting code is of international standard. Here the levels of evidence must be distinguished. What came out is the functionality; the code itself has not been read. The alleged standard comes partly from the experience of using it—few defects, fast iteration, professional explanations—and partly from other people's assessments of the model's coding ability. A good product experience does not entail high code quality; to support a judgment like "the code is elegant," someone actually has to read the code, and project-level evidence is needed.

Until that evidence arrives, what this attempt can confirm is: from an old script to a playable prototype, the implementation stretch has been compressed into a few conversations over a holiday. And the decisions about whether it is fun, whether it's worth further investment, and whether to head toward Steam or some other direction—those remain in human hands.

It's also worth remembering what the prototype validated and what it did not. What it proves is that lore written a year ago can become something that runs without obvious defects; it does not prove the game is fun, let alone that anyone will pay for it. Game feel, content depth, retention—those answers have to wait until more people have played. The prototype lowered the threshold for "getting it made"; the threshold for "making it worth it" hasn't moved.

## Sources

- [Writing directly from the old script, playable right away](/en/weekly/005/transcript#quote-81f943aef47b26983010)
- [Process feedback during performance tuning](/en/weekly/005/transcript#quote-6139918695a5af2f0223)
- [The "international standard" claim and the unread code](/en/weekly/005/transcript#quote-aff1582549a7819a7135)
- [Canvas to PixiJS and the shipping considerations](/en/weekly/005/transcript#quote-5f97bb176cc07f28406e)
- [Language replacement after unit tests locked in the logic](/en/weekly/005/transcript#quote-7958f61026c7f81e12fb)
