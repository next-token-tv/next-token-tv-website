---
locale: en
episodes:
  - next-token-weekly--003
  - next-token-weekly--005
status: published
title: 'Turning a TV remote into a voice entry point for your computer'
description: 'A Bluetooth remote costing a few dozen yuan plus a small voice program written at home made for two straight days of fully voice-driven work: how a physical button changes what it feels like to give an Agent its orders.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-10'
---

A TV remote already has buttons and a microphone; "hold to talk" is something it knows how to do out of the box. Hook it up to a computer — could it work as a voice entry point? The answer from a recent experiment: yes, but the missing piece of software in the middle has to be built yourself.

## The hardware is ready-made

The experiment used the second-generation Pro of the [Xiaomi Bluetooth remote](/en/wiki/products/xiaomi-bluetooth-remote). It has a sandblasted aluminum shell, a button layout identical to the Apple TV remote, hold-to-talk, Bluetooth, USB charging, and battery drain measured in days. At the time of recording, the official price was 99 yuan and 89 yuan online, with the first generation cheaper; dedicated AI voice hardware sold around the same time for two to three hundred yuan, with plastic shells, poorly reviewed software, and, in some cases, a USB port taken up. The model, price, and battery life are all specific to the time of recording — the point here is the experience, not a recommendation of any particular product.

What's actually notable is the niche: the vendor's attention is on models and the AI ecosystem, and it hasn't treated its own Bluetooth remote as a computer peripheral — no desktop voice input software exists for it. That empty slot is exactly where ordinary users could get real use out of it.

## What's missing is a piece of software

Getting the remote connected to the computer is just the start. To turn it into a voice input tool there are two routes: find an existing driver online, or write one to your own requirements. This experiment chose the latter — during the October Golden Week holiday, a voice input program was developed with [Codex](/en/wiki/products/codex), tailored to personal habits, and put straight into use once written.

There is nothing technically novel about this: Bluetooth remotes are mass-produced hardware, speech recognition is a mature capability, and writing an input program is not hard for today's Agents. What's new is how it feels once the pieces are joined together.

## Two days of all-voice work

Once the program was in place, two full days were spent at the computer working on projects with input almost entirely by holding the remote and talking. On the third day, needing the keyboard for something temporary, something unexpected happened: the shortcut for switching input methods wouldn't come to mind — an unfamiliar sense of "I've forgotten how to type."

That was a single experience, not a conclusion. Two days prove nothing about any long-term change; they only show that input habits form faster than expected — the body's adaptation to "speaking to type" may run deeper than you'd assume. As for what a long-term switch of input methods would look like, the material offers no answer, and there's no need to rush to judgment.

## What the button and the screen each take care of

The most concrete part of this experience was the sense of control: with a keyboard, it feels like using a tool; holding the remote and talking, it feels like giving orders — tell it to do something, and it does it. The physical button provides a clear start and end: press to speak, release to stop, with no need to hunt for a microphone button on screen. For a way of using an Agent centered on conversation, this "entry point held in the hand" has more presence than any button in an interface.

The other half of the experience is on the screen. If voice input can't show what's being said in real time — two or three minutes of talking with nothing to see, the content arriving in one dump — the experience is noticeably worse; that's why another voice tool got installed and promptly uninstalled. The remote solves the entry point for "speaking," and screen feedback solves the "knowing it's working while you speak." Both are indispensable: the physical entry point issues the command; the screen confirms the command was heard.

## Who will fill the niche

No part of this combo is new; what's new is how the combination feels to use. If the vendor ever sold this remote as a standalone product with an official driver to go with it, that empty niche might not stay empty for long. Until then, the precondition of this path is writing the missing software yourself — which is exactly why it currently reads as an experiment worth recording, not a tutorial to follow.

## Sources

- [The Xiaomi remote and the gap in the AI hardware ecosystem](/en/weekly/005/transcript#quote-0a10a111aa695683556c)
- [The poor experience of speaking with no real-time display](/en/weekly/003/transcript#quote-f627091715d2a8075cfa)
