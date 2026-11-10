---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'The model replies quickly, so why hasn’t the video exported yet?'
description: 'PDF narration can start early while video packaging may still be waiting on rendering. Follow the actual steps of a task to find the part of the wait worth shortening.'
updatedAt: '2026-11-10'
---

Before setting off on a drive, send an Agent the PDF you haven’t had time to read and ask it to read it aloud, then listen to the contents. This use case, recorded in episode seven, has no timing data, but one outcome is clear: the person can listen to the document without having to worry about how to convert the file.

In the same episode, packaging a screen recording takes fifteen to twenty minutes. It needs a cover, an outro, transitions, and a table of contents. When you’re in a hurry to publish, adding subtitles yourself might be faster. Put side by side, the two experiences show why model response speed alone can’t explain how long the entire task takes.

## First, look at when users can start using the result

The feeling that the DeepSeek app responds quickly when search is turned off comes from personal experience on the show. To judge how much that speedup helps the product, you also need to consider what the output will be used for.

Anthropic’s [latency documentation](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency) calls the time from sending a request to receiving the first token TTFT. Streaming output lets people read the beginning sooner, which works well for content they can use as they read, such as explanations and answers. If the task is to generate a file, users usually can’t do anything yet when the first few lines of code appear.

PDF narration allows for another approach: start playback as soon as the first passage of speech is ready, while the rest of the content continues to be processed. This is a design choice; the episode does not say whether the tool used at the time had such a pipeline. It is worth considering because listeners naturally use the content from beginning to end.

Similarly, you can provide a preview before a video export is complete. If the preview is enough to check subtitle placement or transition styles, it helps people spot problems early. A few lines of logs showing that work is in progress are of little use to someone preparing to publish a video.

## Break down the twenty minutes

A hypothetical example makes this clearer: the task takes twenty minutes in total, with two minutes for model processing and eighteen minutes for asset transfer and export. Shortening the model portion to twelve seconds still leaves a total time of eighteen minutes and twelve seconds.

When investigating the actual process, record separately how long downloading, generation, rendering, and uploading take. If the task spends a long time in rendering, check the output specifications, effects, and execution device. If most of the time goes to rework, find out why the first preview arrives so late.

Packaging itself involves tradeoffs, too. A screen recording made to explain a feature on the fly may only need its blank sections trimmed and subtitles added. The extra wait for completing every animation may not be worthwhile. Letting users choose between a quick version and a fully packaged version will often address their immediate problem better than continuing to emphasize how many tokens the model outputs per second.

## While users wait, report only what affects their next step

Short tasks can end quickly, so just provide the result. For longer tasks, users need to know whether they should step in. They can leave while an export is running; if a source file is missing, they should provide it; and if an external request has timed out, they need an option to retry or cancel.

These status updates can be brief and don’t need to reveal the model’s thought process. A completion notification should ideally include a file users can open directly, so they don’t have to ask where the result is when they return.

For PDF narration, check how soon the audio starts, whether it pauses along the way, and whether it can keep playing after users leave the current page. For video, check when the preview is ready and when the final file can be downloaded. These are the timings that directly affect users’ plans.

## Related resources

- [The DeepSeek app’s response experience and the conditions for using it](/weekly/007/transcript#quote-c527db7301f884083b47)
- [An account of using an Agent to read a PDF aloud](/weekly/007/transcript#quote-da26127f2aa4fa07d186) and [the requirements for the delivered result](/weekly/007/transcript#quote-708e374316ea336c23e6)
- [The wait for screen recording packaging](/weekly/007/transcript#quote-fe2fb8bd99cb2aed0417) and [the discussion of the rendering stage](/weekly/007/transcript#quote-05e84c5cf4c2d60321bd)
- [Anthropic: Reducing latency](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency), accessed October 26, 2026.
