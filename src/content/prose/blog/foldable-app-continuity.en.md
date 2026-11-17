---
locale: 'en'
episodes:
  - 'next-token-weekly--008'
status: published
publishedAt: '2026-11-17'
title: 'Does Your Draft Survive When You Unfold the Phone?'
description: 'A half-written message reveals three distinct foldable-app requirements: adaptive layout, retained task state, and a usable hinge-aware interface.'
updatedAt: '2026-11-17'
---

You are halfway through writing a message when you unfold your phone to see more of the conversation. If the draft disappears or the app returns to the conversation list, the larger screen has interrupted a task that was already going smoothly.

[Episode 008 discusses foldable app experiences](/weekly/008/transcript#quote-64f28f588a3ce308e4f1) and [raises the limitations of simply stretching an interface](/weekly/008/transcript#quote-d924a27f7006dd9bd6c0). A useful test begins with a smaller question: after folding and unfolding the device, can someone continue the same task?

## Keep the same screen in view as the layout changes

Unfolding a device may give an app a wider window, while folding it makes the window narrower. The layout can rearrange panes and their content as space becomes available. Android’s adaptive-app guidance describes a common pattern: a compact window shows either a list or a detail view, while a wider window can show both.

Imagine someone browsing a product. When folded, the detail page fills the screen. When unfolded, a list appears on the left, with the same selected product and additional information on the right. The same item stays open. On folding the device again, the compact view should retain the open detail page. A subsequent Back action can return to the list.

## What state needs to survive?

Changing layout and retaining session state are separate jobs. A message editor should preserve at least the current conversation, unsent text, and cursor position. A product view should preserve the selected item and a meaningful reading position. Whether the keyboard remains visible and the input retains focus should also be checked against the task’s expected behavior.

Android’s documentation notes that state needs to be explicitly preserved across configuration changes, and its foldable guidance calls for saving and restoring progress. An implementation must account for different situations, including interface recreation and the system reclaiming a process, and choose a persistence mechanism appropriate to each kind of state. An unsent message is work in progress. It should not depend on a particular view instance happening to survive.

Restoring is also different from submitting. Restoring a draft must not send it automatically. Restoring a detail view should not quietly change the selected item or filters. Data that may have expired can be refreshed, while preserving the user’s context where possible and clearly identifying anything that could not be restored.

## Where does the hinge fall?

A wide window is not necessarily one uninterrupted surface. A fold or hinge can interfere with reading and touch; Android’s foldable guidance advises keeping important elements away from it. A layout can use the two sides for a list and detail pane, while ensuring that the Send button and text around the cursor remain usable.

## Test a round trip

For a draft-message test, open a conversation while the device is folded, type some text, move the cursor into the middle, and note its position. Unfold the device and check that the same conversation, text, and cursor remain. Continue typing, fold it again, and confirm the new text is still present. Only then should the tester deliberately send the message. Throughout, check whether the fold obscures text or controls.

Repeat with product details: open an item from a list, scroll partway down, unfold and confirm the item remains selected, then fold and check the Back path. Exercising both window sizes and the hinge position says more about task continuity than a screenshot of the unfolded layout alone.

## Sources

- [Android: Learn about foldables](https://developer.android.com/develop/adaptive-apps/guides/foldables/learn-about-foldables)
- [Android: Get started with adaptive apps](https://developer.android.com/develop/adaptive-apps/guides/get-started-with-adaptive-apps)
