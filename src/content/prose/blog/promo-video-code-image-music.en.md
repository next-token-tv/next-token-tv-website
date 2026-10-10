---
locale: en
episodes:
  - next-token-weekly--002
  - next-token-weekly--003
  - next-token-weekly--004
status: published
title: 'A product promo video made with code, images, and music'
description: 'A promo video can be composed from a musical score, vector animation, and a handful of generated images. Code handles the orchestration, image models supply the key assets, and whether it looks good still has to be judged by eye.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-02'
---

A product promo video usually implies a small team: script, voiceover, music, motion graphics, and editing, each owned by someone. Now a different path has appeared — the whole video is drawn and written by a program, yet at first glance it looks nothing like the work of code.

The trail starts with the music. Someone produced two software promo videos in a row, and at first the background music was taken for ready-made tracks from a stock library — until it turned out that every video's music was different, and each one landed precisely on the rhythm of the visuals. Asked where it came from, the answer was: written in Python.

## Music: the score first, the sound second

In the past, asking AI to make electronic music usually produced a few notes looping back and forth over a mechanical drum track — instantly recognizable as generated. This time the approach was different: the model first wrote the music as a score, then converted it to audio via MIDI.

A score is a structured representation, and for a model, writing one is close to writing code — every note, duration, and dynamic can be specified precisely. That explains why the music lands on the video's beats: the rhythm was not aligned in post-production; it was designed against the video's tempo at the moment the score was written. The sound follows the structure of the visuals, rather than the music coming first and being made to fit the picture afterwards.

Sound effects follow the same logic. In one finished piece, even the typing sound sits on the BPM metronome — effects are not casually layered on afterwards; they are arranged as elements on the timeline. Every component of the audio layer obeys the same beat line, which is the direct reason the piece sounds "complete."

## Visuals: texture, motion, and overall orchestration

What makes viewers "momentarily forget it is made of code" is the texture in the imagery — a crayon-like feel, paper-like grain. These usually appear in handcrafted motion graphics or video-model output, but here every layer of texture was drawn by a program.

Another common technique is SVG animation: grass that grows with the music is actually a Bézier-curve animation; a sailboat is drawn line by line in a single continuous shot, with the surrounding waves generated from lines as well. Individually these frames are not photorealistic; what makes them pleasing is how the elements are orchestrated — when they appear, how they transition, how they land on the music.

Orchestration capability also changes the trade-offs. One case started from a codebase: the model was given an existing software codebase to make a promo video. The interface components were already there; it orchestrated the page actions, composed the score, and organized the pacing, and the finished video exceeded expectations. Model vendors themselves release feature videos this way — the launch content is produced by the model, no one spends much dedicated effort on it, yet the videos get richer with every release.

Orchestration also shifts the old calculations: next-generation models can assemble an entire piece straight from low-level graphics and audio libraries, bypassing the higher-level tools; the skill pipelines previously built for promo videos actually got in the way — applying the old workflow template to the same task worked worse than letting the model improvise. A template freezes in the capability limits of the previous generation of models; once the model gets stronger, the constraints become negative optimization.

## Image models are still called in from the sidelines

This path is not "everything in pure code." In one fully observed case, the maker provided only the script and the music; the model chose a sticker style on its own and produced, from scratch, a complete video with a plot and full transitions — along the way it called an image model to generate pictures, while the rest of the animation was pure code. The division of labor is roughly: image models handle the concrete forms that code struggles to conjure out of nothing, and code makes them move while maintaining the rhythm of the whole piece.

Controllable editing of image assets is where the weakness still lies. Image editing had a well-known problem: generate or modify from one reference image a dozen or more times, and the person in the picture drifts slightly, gradually changing. The new generation of editing achieves "things that shouldn't move don't move at all" — change one region and everything else stays pixel-identical — but other regions show artifacts and colors that gradually turn muddy, so it remains some distance from being usable. For promo assets, predictable local editing matters as much as generation; otherwise every revision means re-checking the whole image from scratch.

## Whether it looks good is an experience judgment

"Motion graphics at eighty out of a hundred are already good enough to take client jobs," "no different from music written by a person" — statements like these are impressions formed after watching the finished pieces, not benchmark results. They carry limited information, but they can be checked: publishing the finished video, the prompts, and the production time is more convincing than any adjective. Taste here is not mysticism but a set of concrete questions that can be verified with the eyes — does the texture look hand-drawn, are the beats landed accurately, does the story flow. Until more finished pieces are made public, evaluation of these works should stay at the level of "experience reports," not capability ratings.

## Combining the pieces into a finished work

Look back at how this promo video is constructed: the music comes from a score, the visuals from vector animation plus a few generated images, the structure from overall orchestration. Each kind of material has one expression form that suits it best — sound via scores, graphics via paths, key imagery via image models — and code stitches them into the same timeline.

Compared with earlier generations of generative tools, the real change is at the orchestration layer: instead of generating disconnected clips segment by segment, it works like an editor — the finished film is already conceived in the mind before pen touches paper, and only then is each element's timing decided. Whether this path can be reproduced reliably on every project depends on the material type and the requirements for the final piece; what is certain is that "made entirely in code" was never the point — the point is that every part got the right expression form.

## Sources

- [The discovery that the promo's music was generated by Python](/en/weekly/003/transcript#quote-88081d14fc7d0d30e066)
- [That week's discussion of promo videos and visual creation](/en/weekly/004/transcript#quote-211751707d08d0b7b7c2)
- [Stability and artifacts in continuous image editing](/en/weekly/002/transcript#quote-cc4aeb196c25c1de5bc7)
