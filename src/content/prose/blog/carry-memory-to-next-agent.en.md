---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--005
status: published
title: 'Carry Your Memory to the Next Agent'
description: 'Whichever service holds your memory is the one you have to ask for it back when you switch tools. A file system you own lets personal context move between multiple agents — but sync, backup, and multimodal material are still unfinished roads.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

Say you have used an AI assistant for a year, and it remembers your projects, your writing habits, the topics you keep coming back to. Then a better agent appears, and the problem is no longer "should I switch" but "I cannot take it with me." The memory lives inside the original product; switching tools means losing it all.

## Who owns the memory

In cloud products, memory is stored on the server, bound to your account. That brings two headaches. First, the quality of the memory depends on whether the product is willing to do it well — if it does not, the user has no other way. Second, the product and the model behind it can change, and once data is handed over there is no guarantee you can get it back — a service that works well today may be redesigned, restructured, or shut down later, and the next, better one cannot read what was accumulated here.

One response is to maintain a local Memory and local context, on the expectation that dedicated products will appear to do this well. That is a judgment about product direction, still to be validated — but it points to a stance: personal context should have a home independent of any chat window, any product.

## A file system as the foundation

Someone has already built this home as a file system: a database plus documents, with Memory as a pile of files. It is probably the least fashionable form, and the hardest for any single company to lock down — where the files are, what format they are in, whether they open: all plain to see.

Syncing is the first problem to solve. Syncing the files to a private [GitHub](/en/wiki/products/github) repository is one option, but the practical problems are specific: the files are numerous and fragmented, and the repository quickly becomes bloated; worse is multimodal material — people who work with images and video often have no way to put those things into Git. So another approach appeared: write a mount that syncs the local Memory automatically to [Xiaomi Smart Storage](/en/wiki/products/xiaomi-smart-storage) at home, without passing through any third-party service.

It should be noted that this is a personal practice, not a validated general-purpose architecture. What it demonstrates is that "an individual can hold their own context"; as for what structure the files should use, how the sync frequency should be set, and how different kinds of material should be indexed, there is no standard answer yet.

## Tools change; the organization can stay

File-based memory has one easily underestimated advantage: it can move house wholesale.

One actual migration attempt took a set of plugins developed for [Obsidian](/en/wiki/products/obsidian) and gave them to an agent to port into another runtime: the agent judged which features had nothing to do with notes and removed them itself, then migrated everything in one pass. The tool changed, and the accumulated things — the plugins, the directory structure, the organizational habits — came along. This Memory folder's way of organizing was originally carried over from an Obsidian notes folder; the software can change, and the organization does not depend on any one piece of software.

Memory, in implementation terms, is "a thing made of Markdown and Git" — or simply, files. The closer it stays to ordinary files, the lower the migration cost and the smaller the chance of being held hostage by a single product.

## What goes into memory, and who uses it

A Memory actually in operation falls roughly into a few categories: your own projects, published work and content, the understanding you have formed, and records of daily life. Health data is in there too, synced once a day on a schedule and written back into Memory, then later used for analysis and visualization.

Another use of this file system is letting multiple agents share the same context. One approach is to load the usage quotas of several models into a single virtual machine and let them work out the arrangement themselves: whoever can write, writes; sitting idle is a waste. Tasks are no longer bound to a particular model or product — because the context lives in the file system, any agent that connects can read it. Portability therefore changes not just "switching tools" but also the way "using several tools at once" works.

## Syncing is not backup

Finally, two things need to be told apart. Syncing solves "every location has the latest copy"; backup solves "what is lost can be recovered." Files auto-synced to a NAS are gone entirely if the NAS has only one drive and it fails; high-frequency read-write also genuinely consumes the drive's lifespan — there are already cases of heavy users wearing drives out by writing large amounts of raw data every day.

Collecting is not reliable memory, either. Stuffing things into Memory is easy; whether what was stuffed in can still be found, whether it is already outdated, whether it is worth keeping — these take another round of curation. Carrying memory to the next agent depends not on the act of copying files over, but on a library that is maintained continuously and can be handed over at any time — only if it belongs to you can it be said to follow you.

## Sources

- [Maintaining local Memory and local context](/en/weekly/001/transcript#quote-02a8453227d523dd9382) and [file-based Memory and NAS mount syncing](/en/weekly/001/transcript#quote-4b44ecebdba34d3f84a6)
- [Migrating Obsidian plugins wholesale](/en/weekly/005/transcript#quote-4aee9820b94a95b919f3) and [multiple models sharing one VM, and sorting Memory into categories](/en/weekly/005/transcript#quote-697d332a09a3d0ce8c22)
