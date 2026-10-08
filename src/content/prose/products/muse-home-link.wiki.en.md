---
entityType: product
entity: muse-home-link
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Muse Home Link: The USB-C Hardware That Puts Meta Muse on Your Home Network | Next Token Wiki'
seoDescription: 'What Muse Home Link is, its specs and setup, how to get one, how it differs from Muse Charm, and what episode 005 of the show discussed.'
---

## Muse Home Link

Muse Home Link is a small USB-C device from [Meta](/en/wiki/brands/meta) for the [Muse personal agent](/en/wiki/products/muse-agent). It connects Muse to a home Wi-Fi network so the agent can reach compatible smart devices already in the home, or anything built with a local HTTP API. The official page describes it as "Connect Muse to your home Wi-Fi so it can reach compatible devices you already own, or anything you build with a local HTTP API," with community-built skills enabling actions such as turning on lights, controlling TVs, or printing documents.

## Specifications and setup

The official page lists an Espressif ESP32-C5 chip (32-bit RISC-V at 240 MHz), 8 MB PSRAM, 8 MB flash, dual-band Wi-Fi 6 (2.4 and 5 GHz), USB-C and USB-A connectors (USB for power), an LED indicator, and 35 × 42 × 10 mm dimensions. The firmware is built on the open source ESP32 Device SDK, but the page states the device runs only official firmware and cannot be reflashed.

Setup follows the official page: plug the device into USB power near the router, pair it via Bluetooth Low Energy in the Muse app, join it to the home Wi-Fi network, then add community skills so Muse can reach devices on the network. Skills install from GitHub; existing integrations listed include Philips Hue, Sonos, Apple TV, Google Nest speakers, and Samsung TVs. The page cautions that skills are community-built and should not be relied on for safety-critical uses such as home security or medical needs. Hardware that touches a home network inherently involves privacy and device permissions; read the official documentation and weigh the scope before connecting devices.

## How to get one

The official page states the device is "Free with an active Muse subscription in the United States only, limit one per subscriber," and "Ships in October, first come, first served" — claiming a spot holds a place in line rather than placing an order. Availability beyond that should follow the [Muse Home Link page](https://gadgets.muse.ai/home-link).

## Discussion in the show

Episode 005, in the chapter "小硬件成为 Personal Agent 的物理外挂" (Small hardware as physical add-ons for a personal agent), discussed this class of device. [Yang Pan summarized Meta's approach: these peripherals are "physical add-ons" for the Muse personal agent — users bring whatever hardware they like, which expands Muse's ecosystem](/weekly/005/transcript#quote-d0aba6f744c615e3d3a3). [Guizang called Muse Home Link an entry ticket: with an ESP32 you can serve as a mesh gateway and even take over a whole home of smart devices — the official Muse Home Link is built for mesh, but you can also build one yourself with an ESP32; the device is free for registered subscribers, and "once you have claimed one, the imagination space opens up"](/weekly/005/transcript#quote-61d3d46e957ee9a7f1a9). He went on to say [it could take over the cameras and monitors at home and know when to turn the air conditioning on and off](/weekly/005/transcript#quote-6e73b156ac8863adf170), and [even make announcements through the speakers](/weekly/005/transcript#quote-6001961b1939421d6e91). His "free for members" description matches the official "free with an active subscription" wording; the DIY ESP32 gateway is the participant's own idea — the official page offers no such path and states the firmware cannot be reflashed. These are participant interpretations of the product direction, not official conclusions. See the [episode 005 chapter](/weekly/005/transcript#chapter-16) in the Chinese transcript.

## Frequently asked questions

### What is Muse Home Link?

It is a USB-C device from Meta for the Muse personal agent. It connects Muse to home Wi-Fi so the agent can control compatible smart devices or call local HTTP APIs. See the [official Muse Home Link page](https://gadgets.muse.ai/home-link).

### How is Muse Home Link set up?

Per the official page: plug it into USB power near the router, pair it in the Muse app over Bluetooth, join it to the home Wi-Fi, then install community skills (Philips Hue, Sonos, Apple TV, Google Nest, and Samsung TVs are listed) so Muse can reach your devices.

### How much does Muse Home Link cost and how do I get one?

The official page states it is free with an active Muse subscription, in the United States only, one per subscriber, shipping in October on a first-come, first-served basis; claiming a spot is not an order. Availability in other regions should follow the official page.

### How does Muse Home Link differ from Muse Charm?

Both are Muse peripherals: Home Link is a stationary home-network gateway that lets Muse reach household devices, while Muse Charm is a portable voice device whose release has not yet been scheduled (see the [Muse Charm article](/en/wiki/products/muse-charm)).

### Can I reflash it or connect arbitrary devices?

The official page says the firmware is built on the open source ESP32 Device SDK but the device runs only official firmware and cannot be reflashed; the official path for arbitrary devices is a local HTTP API plus community skills. The "build your own ESP32 mesh gateway" idea from the show is a participant's concept, not an officially supported method.

## Sources

- [Muse Home Link official page](https://gadgets.muse.ai/home-link)
- [Meta press release: Introducing Muse, a Personal AI Agent](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)
