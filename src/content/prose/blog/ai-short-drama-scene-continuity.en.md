---
locale: 'en'
episodes:
  - 'next-token-weekly--008'
status: published
publishedAt: '2026-11-17'
title: 'Once the Camera Moves, Can the Scene Hold Together?'
description: 'A hypothetical two-person scene shows how to plan eyelines, space, props, and edit points when generating an AI short drama.'
updatedAt: '2026-11-17'
---

Video generation tools make it easier to try different camera moves. But if a person on a sofa looks toward an armchair and the next shot makes the other person appear to sit somewhere else, viewers start reconstructing the room instead of following the exchange.

In a trial of Jimeng’s short-drama tools, a creator could [choose camera moves from a library](/weekly/008/transcript#quote-a6bbd698a031010abb88) and [choose among several views of the same sofa and armchair](/weekly/008/transcript#quote-87581f659474658b59e7). That makes it easier to try shots. In the edit, each angle still needs to carry the characters’ eyelines and actions across the cut.

## Where is everyone sitting?

Imagine a scene in which A sits at the left end of a sofa and B sits in an armchair on the right of the frame. A pushes an unopened letter to the middle of the coffee table, hoping B will read it. B doubts where it came from and hesitates to reach for it. The envelope is face up, and a window is behind the sofa.

Before generating footage, sketch a simple floor plan showing the seats, table, window, and eyelines. Write down the action in order: A pushes the letter, B looks at it, then B looks up at A. When the edit cuts to B, the letter is still on the table. B looks at it, then looks up at A.

Give the shots a shared spatial constraint. Treat the line between the two characters as an axis and keep the main dialogue shots on one side: A looks toward the right of the frame, B toward the left. Adobe’s continuity-editing guide describes consistent screen direction, time, and space as ways to keep viewers oriented, and explains the 180-degree line.

## What needs checking at each cut?

Start with a two-shot that establishes the room, then generate a close-up of A pushing the letter, B’s reaction, and the exchange of looks. Repeat the necessary constraints in each shot description: character positions, light direction, envelope appearance, and the current stage of the action. A shorter prompt is not automatically easier to revise. If it never says the letter is on the table, there is one less condition to check in the next shot.

Watch a rough cut once with the sound off. When the edit reaches B’s reaction, is B looking toward the letter? On the cut back, is A still looking toward B? Does the envelope flip over, disappear, or move? Then restore the sound and check whether the pause gives B’s hesitation room to register. If the scene cuts from B seeing the letter straight to a refusal, the geography may be correct while the motivation still feels incomplete.

A director can cross the axis deliberately, for example by using an establishing shot that lets viewers understand the camera’s new position. An accidental reversal has a different effect from a planned change of perspective.

## Which shot deserves another attempt?

Suppose the only shot that breaks continuity is B’s reaction, which puts the letter in B’s hand. Keep the other shots and regenerate that one. Record the state at the end of the preceding shot: the letter is face up in the middle of the table, and B has not touched it. Compare the replacement against both neighboring cuts so it follows A’s push and leads into B looking up.

If repeated attempts still fail, revisit the shot design: shorten the action or add a shot that re-establishes the positions. The acceptance test is practical. Without extra explanation, can viewers tell what each person wants, where the letter is, and why someone reacts at that moment?

## Sources

- [Adobe: Sequence shots and continuity editing](https://www.adobe.com/creativecloud/video/production/cinematography/camera-shots-and-angles/sequence-shot.html)
