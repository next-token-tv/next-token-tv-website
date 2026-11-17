---
locale: 'en'
episodes:
  - 'next-token-weekly--009'
status: published
publishedAt: '2026-11-17'
title: 'A Beautiful Prototype Still Has to Be Changed'
description: 'Use a 3D achievement timeline to identify the visual behavior worth keeping, test edge states, and design a reduced-motion version that preserves the task.'
updatedAt: '2026-11-17'
---

An achievement timeline unfolds into the distance as you scroll, with points and activity arranged in three-dimensional space. Its first demo may be compelling because several details work together: perspective, speed, spacing, visual depth, and the way the scene responds to a mouse wheel.

In episode #009, Orange described a 3D timeline prototype for a Cola achievement page, generated in one pass. The team spent two weeks trying changes while turning the demo into a product, then chose the original version. In his subjective assessment, changes readily disturbed the scroll feel and relationships among visual elements. His [account of the prototype](/weekly/009/transcript#quote-f62bdbcbc3e5825f2908) gives the team a baseline for future changes and shows how the feel of scrolling depends on several visual parameters working together.

## Identify the behavior worth keeping

Start by treating the first version as something that can be examined, not as an indivisible object. Record normal interaction and describe what happens: how the focus moves during scrolling, when a new achievement comes into view, and whether depth helps the reader understand time. Ask people which behaviors help them find their place and which merely add visual activity.

Imagine users care most about being able to find the current date. The behavior to preserve may be a clear focus and chronological order, rather than movement in every background layer. State that as something the team can check. Then, when speed changes or the rendering method is replaced, there is a shared understanding of what must survive.

## Compare the edges, not just the demo

A polished demo often shows a page with just the right amount of data. Before delivery, compare an empty state, a single achievement, dense entries, long titles, a narrow screen, and different input methods. Do labels collide when the timeline grows or shrinks? Can users still locate the focus at either end? Can keyboard users reach the same information?

Change only a few parameters at a time and compare each revision against a baseline in the same set of states. That makes it easier to see whether a speed change hurts orientation or a spacing adjustment causes collisions, instead of guessing after the whole page feels wrong. The prototype creator's sense that motion feels smooth is a useful starting point. Delivery also requires checking results across content and usage conditions. The episode's [discussion of personalized results and broader scenarios](/weekly/009/transcript#quote-6714cce59af09ec3dab6) offers a parallel case. A creator can choose a filter that suits their own camera. A tool for a broader audience needs tests that cover how other people will use it.

## Reduce motion without losing information

A reduced-motion version might remove scroll-driven parallax while retaining the static chronological order, current focus, and controls. W3C's explanation of WCAG 2.2 Success Criterion 2.3.3 describes an AAA criterion under which nonessential motion animation triggered by interaction can be disabled. Scroll-driven background parallax is one example. For the timeline, turn off parallax and run through the same entries again. Check that the dates and current focus are still easy to find.

If the timeline becomes clearer after simplification, every layer need not animate. Preserve behaviors that support orientation and understanding, and make other effects independently controllable. That gives the team room to evolve the interface without choosing between the entire animation system and a complete rollback each time.

## Sources

- [W3C: Understanding Success Criterion 2.3.3, Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
