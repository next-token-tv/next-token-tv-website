---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'Giving an ESP32 a talking personal assistant'
description: 'Flash off-the-shelf firmware, rework the interface into Chinese, bolt on a voice output path, and a small desktop dev board goes from toy to an assistant terminal that gets used every day; as for taking over the whole house, that is still just a vision.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-10'
---

An [ESP32](/en/wiki/products/esp32) dev board costing a few dozen yuan, with a screen, microphone, speaker and gyroscope, is electronic Lego for hardware hobbyists. In the past, whatever you built with one mostly stayed a toy: AI could write firmware, but it wasn't familiar enough with this kind of hardware, so what it produced had many problems and wasn't pleasant to use.

The change came once the platform started taking this board seriously. When off-the-shelf firmware, an editable interface, and a hastily assembled voice pipeline all came together, the board went from a desk ornament to an assistant terminal that actually gets picked up and talked to every day.

## From writing your own firmware to flashing and going

The turning point was general-purpose firmware. [Muse](/en/wiki/products/muse) provides firmware for common ESP32 devices in different hardware form factors: round screens and rectangular ones each get a matching version. Flash it in and there's nothing to configure — it just works. Pairing is simplified to the level of a normal consumer product: enable developer mode in the phone app, tap the plus button, and it's connected.

The details show how complete this firmware is: Chinese font packs are large, and in the past they were usually the first thing cut on memory-constrained small devices — this firmware ships with Chinese support out of the box. Problems that used to require workarounds now have answers in the stock solution.

## One concrete desktop makeover

With a ready-made foundation in place, the work concentrates on the experience layer. One actual makeover involved the following:

The interface was switched to Chinese first, with the cramped UI relaid out. The default character was replaced too: the original was a 64×64 dot-matrix sprite that had to be drawn stroke by stroke in code; this time, a model generated a few images that were turned into frame sequences packed into the firmware and played back — something like stop-motion animation, with the device showing a different animation depending on what it's doing. Going from dot matrix to image sequences made the character on the little screen dramatically more alive.

The genuinely missing piece was voice output. The firmware supports voice input only, so replies could only be read as text — and Chinese text is a real strain on a small screen. The firmware offers no speech service, so the fix was to take an API key for a text-to-speech service and route the device's return data through a Mac on the same Wi-Fi: the device sends the text to synthesize to the Mac, the Mac forwards it to the speech service, and the audio comes back the same way and plays. This pipeline was rigged up temporarily, but it works — the device can talk now.

## Why it started getting real use

Before the makeover, this kind of device was a toy you'd touch once and never pick up again; afterwards the pattern of use was completely different: lift it, say something, get an answer.

One typical use is checking on task status. Ask it why the material it was told to gather yesterday still hasn't arrived, and it answers: the previous job is still running Memory optimization. Behind that exchange, the device itself does no computing — the heavy lifting runs on a cloud Agent, and the small device only handles input and output. Speaking is easier than typing, the screen and sound provide feedback, and the desktop device thus becomes a physical entrance and exit for a Personal Agent.

That is exactly where the value of small hardware lies. Hardware itself isn't scarce — over the past year companies have turned out large numbers of small devices with similar form factors; what makes a piece of hardware useful is the platform and ecosystem behind it. Only once it's connected to an Agent does it have a purpose. The same logic can be pushed further: there's a demo of an electric wheelchair with no brain of its own given a slice of local compute, after which the wheelchair could move on its own — compute and models can directly become the "brain" of anything.

## The division of labor is shifting

General-purpose firmware also changes the situation for hardware makers. A device vendor doesn't have to build its own Agent: once the firmware is open, hardware can plug directly into the Personal Agent ecosystems of the big platforms and act as their "physical add-on" — both an entrance for input and an exit for output. Hardware startups are already considering this direction: rather than building an Agent nobody can use, be the bridge, and do it well.

For individual hobbyists, the lowered barrier is just as visible. Modify the firmware for a dev board, publish it to GitHub for others to download and flash — distribution is simpler than for a phone app. The skills needed to customize a desktop device are sliding from "knows embedded development" to "knows how to use an Agent."

## Whole-home takeover is a vision, not the current state

Push the "physical add-on" idea outward and you reach household-scale imagination: within this kind of firmware ecosystem there are products that can serve as Mesh gateways, so in theory a single ESP32 device could become the access point for whole-home intelligence — taking over cameras and all kinds of sensors, learning when the air conditioning should come on and when you feel hot, even broadcasting proactively through the speakers at home. Measured against the smart-speaker era's satisfaction of "turn off the light, turn on the AC," the jobs an Agent could take over might be ten or a hundred times more complex.

Two things must be kept apart here. The desktop-scale makeover is done, and it has survived a period of real use; whole-home takeover is a vision, separated from reality by device compatibility, gateway capability, firmware permissions, and the actual performance of the speech service — and none of it counts until verified on your own hardware. This article isn't a shopping guide either: which board pairs with which firmware, how permissions should be granted, whether you need to wire up your own audio output — all of it varies by device model and can only be settled by testing.

## What's been verified and what hasn't been walked yet

In this board's story, what's verified is the desktop scale: speech goes in, an answer comes out, and task status can be checked along the way. The bigger vision sits at the scale of the house, and there the first step hasn't even been completed. The leap from toy to assistant terminal shows that in the Agent era, what small hardware lacks isn't compute, and isn't ideas — it's a platform willing to get the firmware right. The rest has to be worked out through one concrete makeover at a time.

## Sources

- [This week's hardware buzz and the rise of small devices](/en/weekly/001/transcript#quote-16dbac2d3a1f25eb76ca)
- [A local-compute demo embedded in an electric wheelchair](/en/weekly/001/transcript#quote-f17ea47f098be0c4cb4f)
- [Hardware value comes from the platform and ecosystem behind it](/en/weekly/004/transcript#quote-e67f548ca14b85281415)
- [From smart speakers to Agents: imagining the home](/en/weekly/004/transcript#quote-7754f4e7754267842ab1)
- [Mini game consoles and M5Stack's Agent deployment model](/en/weekly/005/transcript#quote-4b1ad6b3128f67e47d87)
- [Small hardware as the physical add-on for a Personal Agent](/en/weekly/005/transcript#quote-d0aba6f744c615e3d3a3)
