---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'A New Use for an Old TV, Starting with a Simpler Home Screen'
description: 'You only want to open two apps, but have to navigate a complicated TV home screen. What changes when you redesign the launcher and connect a personal Agent, and what hardware and permission limits remain regardless of the interface?'
updatedAt: '2026-11-10'
---

You regularly use only two apps on your TV, yet the home screen is packed with content, and every time you turn it on you have to press a string of buttons on the remote. The launcher redesign in episode seven starts here: take inspiration from existing projects and adapt a home screen to your own habits.

This is not a complicated request, but it is a good way to evaluate interfaces built with AI. After the redesign, can you get things done with fewer button presses? Can other people at home use it? Is everything easy to see from the sofa? Each of these questions has a concrete answer.

## Try it with the remote first

On a phone, you can tap directly. TVs often rely on the directional pad to move focus from item to item. Where frequently used apps are placed, which one is selected by default, and where the Back button takes you all have more impact on usability than how many cards fit on the screen.

Android’s [TV navigation guide](https://developer.android.com/training/tv/get-started/navigation) emphasizes short navigation paths and using the directional pad to reach every visible control. To check yours, start from power-on, go all the way to playing content, then return to the home screen. If even one dialog along the way cannot be closed with the remote, the path is not complete.

You can start by putting only frequently used shortcuts on the home screen. If you need search, recently watched content, or other features, see whether adding them pushes the original buttons farther away. Try each new shortcut with the remote again.

## Check issues with the old device separately

The episode also features a TV that often reports low memory, even though not many apps have been added. This description alone is not enough to determine the cause, and it is unclear whether the warning refers to RAM or storage space.

Changing the launcher can change the home screen, but it may not solve this kind of problem. If an app will not open, playback stutters, or the system reports insufficient space, check the corresponding error and the device status. A home screen that feels snappier cannot replace those checks.

It is also useful to keep the original recovery path before making changes. If the new home screen has a problem, being able to return to settings or the original launcher means a UI experiment will not get in the way of everyday TV use.

## What else does it take to put an Agent on the TV?

At the time of recording, 歸藏 had already connected a Codex entry point to the TV, while the Grok Bot switching entry point was still being built. Searching for shows, controlling other apps, and scheduling morning news playback were ideas raised next.

The model and tasks can run on another device, while the TV handles display and input. That makes the things to verify quite concrete: Is it hard to read a reply from the sofa? Is there clear feedback after voice input? Will the screen keep showing “processing” if the network disconnects?

A shared screen also raises questions about what is visible. If a personal work session is moved straight into the living room, family members might see private messages while watching TV. A separate TV entry point that shows only selected tasks would be easier to manage than copying the entire desktop.

As for opening other apps, simulating button presses, or waking the TV, you need to check device support for each one. The episode mentions ADB, the Android Debug Bridge. The [official documentation](https://developer.android.com/tools/adb) lists the requirements for enabling and authorizing a debugging connection; having devices on the same local network does not guarantee that any control will work.

First, get the home screen for frequently used apps working reliably, then add a page for viewing Agent results. If you find a place where you cannot go back or focus gets lost, fix remote navigation first.

## Related resources

- [The starting point for the launcher redesign and the need for frequently used apps](/weekly/007/transcript#quote-4154c19a238626c15f07) and [the existing burden of use](/weekly/007/transcript#quote-6d64eecd91e4b566849a)
- [A personal account of an old TV reporting low memory](/weekly/007/transcript#quote-543b8841ddb45ddb6988)
- [The Codex entry point on the TV](/weekly/007/transcript#quote-198f4774cb3d5438779f) and [the Grok Bot entry point still being built](/weekly/007/transcript#quote-40afa2e781b80762c2c7)
- [The idea of controlling the TV over the local network and playing morning news](/weekly/007/transcript#quote-cf038512591ac83330b4)
- [Android Developers: TV navigation](https://developer.android.com/training/tv/get-started/navigation) and [Android Debug Bridge](https://developer.android.com/tools/adb), accessed October 26, 2026.
