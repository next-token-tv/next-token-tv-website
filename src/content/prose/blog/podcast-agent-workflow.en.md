---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
status: published
title: 'The agent workflow behind a podcast episode: from recording to multi-platform publishing'
description: 'Recording, editing, platform uploads, and the website transcript used to be separate manual chores. When the steps beyond writing code can also be handed to an agent, the most human-intensive part of the pipeline shifts from operating to deciding.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-18'
---

For a podcast episode, the most time-consuming part is often not the talking. Recording software has to be launched, audio and video need to be edited, five platforms each have their own upload process, and the website needs a searchable transcript. None of these steps involves a line of code, and in the past every one of them had to be clicked through by a person.

This is the actual path one episode took from recording to publication. One caveat first: it is a retrospective summary of experience, not a how-to guide. Tools, interfaces, and platform rules are all changing, and a single case does not make a reproducible recipe. What it can show is which gaps Computer Use filled in, and what it left for humans.

## The steps beyond writing code used to be done by hand

Once agents entered daily work, writing code itself became highly automated; the problem sits at both ends of the pipeline. Recording means opening local software, and publishing means operating a stack of unfamiliar admin consoles. These steps cannot be done by writing code, so the current task has to stop and the work switch to manual operation. Almost all of the interruption time in the workflow was spent here.

One practical approach was to simply hand the computer over to [Codex](/en/wiki/products/codex): launching recording software no longer meant figuring out where the menus were yourself — the agent moved the mouse and clicked its way through. The same went for editing: when a graphical editing app felt awkward to use, switching to the [FFmpeg](/en/wiki/products/ffmpeg) command line actually returned the work to the mode agents are already good at. In the same round of experimentation, someone also had an agent submit the listing materials for two iOS apps and an Obsidian plugin item by item, doing only the final acceptance review personally.

The value of this kind of delegation is eliminating the switch. Tasks no longer break off because "this step isn't code," and you no longer have to relearn the operation of every piece of software.

## Five platforms, one publishing run

The first episode went live on five platforms: [Xiaoyuzhou](/en/wiki/products/xiaoyuzhou), Bilibili, Spotify, Apple Podcasts, and YouTube. The person responsible for publishing had never used the creator console of any of them, and did not study each platform's feature differences one by one — they only stated requirements and prepared the materials; the uploads and form-filling were done by the agent.

What this changes is more than time. One person maintaining five platforms used to mean five separate sets of procedures, and every new platform raised the cost again. When the operation itself can be delegated, the number of platforms no longer translates directly into workload, and the choice of where to publish can weigh the audience more heavily than the operating cost.

Worth noting, though, is the other side of the cost structure. This publishing run and the website build used the newest model released in that very period — more expensive per token, but with noticeably fewer retries and a higher chance of getting it right on the first attempt, so the total spend stayed under control. Tokens saved and person-hours saved are, in the end, the same thing.

## The website and the searchable transcript

Beyond publishing, the website took on another share of the work. Every transcript segment carries a stable anchor, keywords in the text are clickable and aggregate under the same tag, and listeners can trace any passage back to its source. Features like these are uncommon in general-purpose podcast products, and the threshold for custom development used to be hard to cross; this time, the website went onto the same delegation list as the publishing.

For a podcast, a searchable transcript means the content can be cited on its own. When an article discusses a particular exchange, it can link to the exact passage instead of vaguely pointing at a whole episode — the links at the end of this article are exactly that usage.

## A throttling with no answer

The workflow did not go smoothly everywhere. All five platforms accepted the episode, but one of them throttled it after the agent-published release. The cause was never verified: it could have been a judgment about the content, a detection of the publishing method, or entirely unrelated to automated operation. Attributing the throttling to automated publishing is, for now, only the publisher's own speculation — it cannot be written up as a penalty reason confirmed by the platform.

What the incident did prompt is a discussion worth recording: if platforms want to push back against low-quality content, reviewing the content itself makes more sense than reviewing the act of publishing — the same show recorded by the same real people does not become low-quality because the publishing method differs. This remains an argument, not a description of any platform's rules.

## What remains for the human

Looking back over the whole chain, three human roles remain: deciding what content to make, preparing and vetting the materials, and accepting the final result. Which platforms to publish to, in what order, and whether to publish at all are all authorized by a person. What the agent covers is everything from launching software to clicking submit, after that authorization.

The sample here is one episode and one operator, so the conclusions should stay within the bounds of a single case. What it does show: when the operations beyond writing code can also be delegated, the most human-intensive part of the pipeline shifts from "operating" to "deciding." Which platforms will tolerate this approach long-term, and how much time other kinds of shows could save, will take more episodes to answer.

## Sources

- [How Computer Use improves productivity](/en/weekly/001/transcript#quote-3f10e541956b25adfc80)
- [Delegating the first episode's publishing and website build](/en/weekly/002/transcript#quote-0b24d683e735d5c62dfa)
- [The throttling experience after publishing](/en/weekly/002/transcript#quote-f04e99372001a9cb9a60)
