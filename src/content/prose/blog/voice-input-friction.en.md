---
locale: en
episodes:
  - next-token-weekly--002
  - next-token-weekly--003
status: published
title: 'Speech recognition is already accurate — so why is voice input still clunky?'
description: 'Accuracy is no longer the main bottleneck for voice input. What decides whether people stick with it is a set of unglamorous frictions: vocabularies, real-time display, how aggressively the text gets cleaned up, and system permissions.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-24'
---

Anyone who has built their own transcription setup can feel the progress in speech recognition directly: newer models handle proper nouns better and cope with spoken language better, and the speech field is still thought to hold plenty of low-hanging fruit, because most top talent has gone over to language models. The recognition side is genuinely getting better.

But day-to-day input is a different story. Over the same period, new players like NetEase Youdao have entered the category one after another, yet a single desktop may still keep two or three voice input tools installed at once — installed, then uninstalled. Beyond accuracy, where exactly is the friction?

## Voice tools and keyboards got bundled together

Voice input products come in two forms: standalone software, and features that live inside a keyboard. Each used to mind its own lane; the trouble starts when they cross the line.

One trial on a phone went like this: [Doubao](/en/wiki/products/doubao) has solid speech recognition, but it bundles voice with its own keyboard, and that keyboard's vocabulary and word prediction haven't caught up. The user only wanted the voice part, but typing kept producing errors; after a few of those, the instinct isn't to report the problem — it's to uninstall.

That experience forces a choice on the user: is a voice tool meant to replace the keyboard, or complement it? One pragmatic answer is to keep one of each — the keyboard handles typing, a standalone app handles voice, with no three-in-one ambitions. When users have to manage these tools by deciding how many to keep, it's a sign the boundaries between products aren't yet clear enough for anyone to keep just one.

## Custom vocabulary is the mile beyond recognition

Progress on the model side reduces recognition errors, but proper nouns — people's names, project names, jargon — still tend to need a custom vocabulary as the safety net. The product gap here is actually more obvious: the [WeChat keyboard](/en/wiki/products/wechat-input-method) is already good enough at speech recognition; it just doesn't support a custom voice vocabulary. If that feature shipped, standalone tools like [Typeless](/en/wiki/products/typeless) would stop being a necessity for many users.

Proper nouns thus set up a contest between two routes: models keep improving and cut corrections off at the source, or products open up vocabularies so users don't have to wait for the models. For now, the latter is cheaper and faster — and it is exactly the part many products haven't built.

## When the text appears, and how much it gets cleaned up

Another reason a voice tool gets installed and quickly uninstalled: you can't see the words as you speak. You talk for two or three minutes, nothing appears on screen, and the whole thing arrives in one dump. Without real-time feedback, the speaker has no way to know whether recognition has gone off track, and realizing mid-sentence that something is wrong means starting over.

Real-time display isn't a hard requirement for everyone, though. When someone complains about it, other users' first reaction is to wonder whether the tools they use daily do the same — they never treated it as their main pain point. Preferences about "cleaning up" the text split more sharply within the same group: heavy users can't live without long-form polish and want filler and repetition removed and the layout reflowed; the same feature in other tools is seen either as overreaching or as doing only the bare minimum; and some users feel that at the transcription level everyone is about equal, with no fundamental difference in long-form capability.

There is no single right answer for how much to clean up. Too little polish and the text still needs manual rework; too much and the product starts making decisions on the speaker's behalf, changing what was actually meant. This is closer to a parameter that should be adjustable than to a setting the product picks for everyone.

## On phones, the OS is the first roadblock

On the desktop, the friction is at the product level; on the phone, it starts at the system level. Using a third-party keyboard's voice input on an iPhone means going back and forth through Settings to manage permissions; keeping it always-on raises a different set of worries. Both per-use authorization and a persistent background presence were seen as unacceptable, and the end result was that voice input simply wasn't usable on the phone at all — someone used to speaking to type switches back to an iPhone and instinctively makes the wrong gestures, then finds the cursor jumping between input fields.

In-app entry points therefore become a way around the system. The microphone button built into chat apps is many people's most frequent voice input method on the phone, and the later addition of press-and-hold-to-talk with the mouse on desktop was considered intuitive. The problem with these entry points isn't the interaction itself but the details: repeated usage tips get tiresome. The lower the threshold of an entry point, the more it gets used — a position these products earned for themselves outside the keyboard.

## The friction list decides what stays

Put the frictions above side by side and it becomes clear that the competition in voice input left recognition accuracy behind long ago: whether vocabularies are open, whether text appears in real time, whether the level of cleanup is adjustable, whether system permissions can be worked around — each one helps decide which tool a user keeps and which gets uninstalled.

Almost none of these problems requires new technology. What they require is for products to hand control back to users — allow voice-only without hijacking typing, allow custom vocabularies, allow watching the words as you speak, allow adjusting how much the text gets cleaned up. Recognition is already accurate enough; for everything else, the contest is over who removes the friction first.

## Sources

- [Two voice input tools in daily use, and the new arrivals](/en/weekly/002/transcript#quote-d55f5ee52262b97c51ae)
- [Local transcription tests: proper nouns and spoken language](/en/weekly/003/transcript#quote-63eaf2e2552dba626fa0)
- [Installed-then-uninstalled, and the lack of real-time display](/en/weekly/003/transcript#quote-f627091715d2a8075cfa)
