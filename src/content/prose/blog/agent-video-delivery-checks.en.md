---
locale: en
episodes:
  - next-token-weekly--006
status: published
publishedAt: '2026-11-10'
title: 'How to Review a Video Delivered by an Agent'
description: 'A successful export proves that a file was produced, but not that the subtitles, packaging, audio tracks, and edits meet the requirements. Reviewing the finished video itself helps catch omissions early.'
updatedAt: '2026-11-10'
---

You hand a screen recording to an Agent, expecting it to apply the existing editing rules and package it. The Agent replies that the job is done, but what it delivers is still unwrapped footage. Episode 6 records Qiaomu’s experience, along with another failure case: an audio track timing mix-up that occurred during an episode of *AI Alchemy*.

Packaging omissions and audio misalignment require different checks. A video file can be generated and opened while still having either or both of these problems. Delivery checks need to cover both the visuals and the sound.

## First check which requirements the task used

On the show, someone suspected that after the orchestration entry point changed, the Agent no longer had the original project context. This is a troubleshooting lead, not a confirmed cause of the missing packaging.

Start by checking which set of rules the task actually read, then see whether the packaging steps made it into the processing plan. If the plan already includes an intro, subtitles, and an outro, but the export lacks them, investigate the rendering next. If the rules were never found during execution, rerunning the same command usually will not solve the problem.

It is best to write delivery requirements as results that can be located in the finished video. For example, specify that a particular line of dialogue should be removed while preserving a natural transition, that a particular subtitle style should be used, and that a particular version of the outro asset should be included. Verifying these requirements is more useful than simply asking the person doing the work whether they “understand.”

Guizang described a workflow on the show that starts with a storyboard document, then generates the video and cover image. A storyboard can catch missing content in advance, but even after it passes review, the final video still needs to be opened and checked to see how it was implemented.

## Selecting the right audio track and syncing the audio are two separate checks

[ffprobe](https://ffmpeg.org/ffprobe.html) can read media container and audio/video stream information, making it useful for checking output specifications, duration, and which audio tracks are present. [FFmpeg’s stream selection documentation](https://ffmpeg.org/ffmpeg.html#Stream-selection) explains the difference between automatic selection and specifying a stream manually with `-map`. When an input file has multiple audio tracks, confirm which one the output actually uses.

Even if the correct audio track is selected, it may be placed at the wrong time. Mapping selects a stream; it cannot prove that the audio is aligned with the video. You also need to check the starting point, the timing relative to the edits, and listen to the actual output.

One useful way to spot problems is to find a clear instance of speech or action near the beginning, in the middle, and farther toward the end. Audio that matches at the beginning but gradually drifts out of sync gives a different clue from audio that is offset by a fixed duration throughout. In conversations with multiple speakers, also watch for tracks getting mixed up when the speaker changes. These observations can narrow down where rework is needed, but they do not replace listening through the entire piece.

## Check the places that changed first

Suppose this version removes a line, replaces an image, and adds an outro. Open the removal point, the image replacement, and the ending first. Check that the surrounding sentences have not been cut off, that no old footage remains, and that the outro is complete. Then review the rest of the content against the delivery requirements.

Subtitles also need to be checked in an actual player. Detecting a subtitle stream only shows that the file contains one. You still need to check whether it displays by default, whether burned-in text extends beyond the frame, and whether it obscures the subject after cropping to vertical video.

For content that is explicitly required to be removed, confirm that it is gone from the final file. Not seeing the footage in the project does not rule out delivering the wrong, older version. If a spot check finds a problem, fix it and recheck the relevant section. If it finds none, do not record that as having watched the entire video.

## Record check results that can be tied to the file

If you change the subtitles or volume after completing the review, check the newly exported version. Keeping the file version or checksum can help avoid confusion between files with the same name.

A specific note is enough when handing over the file: where the finished video is, its version, what has been checked, and what still needs a full viewing. For example, say that three removal points and the audio mapping have been checked, but the entire video has not yet been listened through. The next person will know what still needs review.

## Related materials

- [An experience where the editing rules were expected to be applied, but the delivered video was missing its packaging](/weekly/006/transcript#quote-a2fcb2430449dc4f0f0b)
- [Discussion of orchestration and context handoff](/weekly/006/transcript#quote-2564fed4537f88aa58fd)
- [An editing experience involving audio track timing mix-ups](/weekly/006/transcript#quote-ca507e21a569037f2497)
- [A workflow that starts with a storyboard, then generates the video and cover image](/weekly/006/transcript#quote-18e37c2504e3107e3659)
- [FFmpeg: ffprobe Documentation](https://ffmpeg.org/ffprobe.html) and [Stream selection](https://ffmpeg.org/ffmpeg.html#Stream-selection), accessed October 26, 2026.
