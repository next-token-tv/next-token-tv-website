---
locale: en
episodes:
  - next-token-weekly--002
status: published
title: 'Before You Ask AI to Build a Game, Break the World into Scenes'
description: 'The same idea—"have AI make a game"—can cost wildly different amounts and produce wildly different results depending on how the task is expressed. One attempt at building a planet shows how engineering expression determines the size of the task.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-19'
---

Asking AI to build "a complete planet" sounds perfectly reasonable: isn't there a planet in the game? One real attempt ended with a large amount of quota consumed and no planet built. The problem was not that the model wasn't capable enough—it was that the task itself had been described incorrectly.

## A Planet Is Not Modeled as One Solid Piece

Game worlds are never built at real-world scale. In that attempt, the requirement was "model everything on the planet," but the game's actual implementation was engineered: there is a planet on the outside, a cutscene plays when the player enters, and then the game loads one region at a time, each with boundaries. The complete visual impression is assembled from a planet shell plus five or six scenes inside it.

Asking a model to model a planet at true surface area is something AI cannot do—and neither can a human. "Build a planet" and "build a game world made of region-by-region loading" differ by several orders of magnitude in scope—the former is physically infeasible. The task description directly determines the size of the task, and whether it has a solution at all.

A wrong requirement costs more than just failure. From usage observations around the same period, one common complaint was that a two-hundred-dollar subscription quota ran out within a week, and the output still didn't meet the requirements. The underlying causes were exactly this: asking for too much, lacking a clear concept of what to build, and people still using "you are a such-and-such" style prompt templates, spending large amounts of text constraining parts of the model that never needed constraining.

By contrast, another session cost far less: a small Roguelike game first consumed 3% of the quota, then was extended into an endless game in the vein of [Vampire Survivors](/en/wiki/products/vampire-survivors)—constant enemy waves, leveling up, picking weapons—which took another 2%. That 5% of quota corresponds to a task with clear boundaries that can be described step by step. It should be noted that a subscription quota's percentage is not a universal cost unit; it depends on the subscription tier, model pricing, and the specific task, and cannot be converted into "how much does it cost to make a game." All it can convey is relative scale—with the same goal of having AI make a game, different task expressions can differ in consumption by many times.

## Give the Model a Code Interface It Can Write To

Beyond how the task is expressed, the tool interface also affects the cost of this kind of work.

One reason the 3D modeling went so well this time was the scripting infrastructure [Blender](/en/wiki/products/blender) has accumulated over the years. The model didn't build things by clicking around a graphical interface—it used bpy, Blender's built-in Python API. It was writing code the whole time; the UI sat frozen on the welcome screen, and after a while it announced the model was done. Opening the file, the model was complete. The process required almost no screenshot-based confirmation, and token consumption was low.

Game engines have similar affordances. The [Godot Engine](/en/wiki/products/godot-engine) also provides a programmatic interface; once the model finishes, you open the project and see the result directly, skipping the entire interface-manipulation process. For a model, describing geometry, lighting, and scenes in code is more precise and cheaper than clicking step by step through a GUI.

This points to one direction software could adjust toward: expose core capabilities as code interfaces the model can call directly, and leave the UI for humans to view interactions and content. Of course, this path depends on the software having a mature scripting interface in the first place—not every category of tool can copy it. In graphical creative software, the manipulation interface itself remains part of the expression.

## From Digital Models to Physical Objects (An Extension)

The downstream of 3D modeling is 3D printing. Models for printing used to come mostly from the community, and when someone else's model didn't fit your needs, it was very hard to modify: one person made a charging dock clip that turns an iPhone into an alarm clock, modeled around the iPhone 18, and adapting it to a different phone model was nearly impossible. Once modeling capability is plugged in, this kind of modification can be handed to the model, and a printer's companion software can be operated through computer control as well—lowering the learning barriers around loading filament, supports, and other operations that used to require dedicated study.

But successful modeling is only the first step. Materials, support structures, print settings—these physical-world factors still determine whether the final print works and how it looks. Between a digital model and a physical object there remains a stretch that requires hands-on verification; smooth modeling does not guarantee smooth printing.

## Sources

- [The case of asking for an entire planet](/en/weekly/002/transcript#quote-9efac401529673bdcc9c) and [the observation on quota consumption and over-asking](/en/weekly/002/transcript#quote-ccd9509479ed2535f667)
- [The modeling process through the bpy interface](/en/weekly/002/transcript#quote-fe0f9eda66da21490336) and [Godot's similar interface](/en/weekly/002/transcript#quote-74af9f2569f40800b725)
- [The idea of building software infrastructure for agent calling efficiency](/en/weekly/002/transcript#quote-a6541d5453bc83e4b71e)
- [Changes in 3D printing usability](/en/weekly/002/transcript#quote-da73799323e064e2c43f) and [community models that are hard to modify](/en/weekly/002/transcript#quote-8865ca2e95efa0acf0b5)
