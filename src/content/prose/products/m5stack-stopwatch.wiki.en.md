---
entityType: product
entity: m5stack-stopwatch
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'M5Stack StopWatch: a round AMOLED touch development board | Next Token Wiki'
seoDescription: 'What the M5Stack StopWatch is, its hardware and development options, how it differs from a bare ESP32 dev board, and what the Weekly show said about flashing custom firmware on it.'
---

## What StopWatch is

StopWatch is a round AMOLED touch-screen development board from [M5Stack](/en/wiki/products/m5stack) (SKU C152 in the official documentation), positioned as development hardware for portable, interactive scenarios. The official documentation lists its core configuration: an ESP32-S3R8 SoC (dual-core 240 MHz, 16 MB Flash, 8 MB PSRAM), a 1.75-inch 466×466 round AMOLED touch display, a 6-axis IMU, an RTC, a MEMS microphone and 1 W speaker, a vibration motor, a 450 mAh battery, and 2.4 GHz Wi-Fi. It is a finished board in the [ESP32](/en/wiki/products/esp32) ecosystem: the chip comes from Espressif, while M5Stack integrates the display, sensors, power, and enclosure into an out-of-the-box device.

## Usage and boundaries

Officially suggested scenarios include portable smart devices, electronic badges, and lightweight IoT terminals. Development is supported through UiFlow2 visual programming, the Arduino IDE (via the M5Unified/M5GFX libraries), and ESP-IDF/PlatformIO; firmware can also be flashed through M5Burner, with a voice-assistant firmware as a documented example. The round display, microphone, speaker, and vibration motor make it a common base for wearable or desk gadgets rather than just a breadboard experiment.

One hardware-version caveat appears in the official documentation: on v1.0 boards, a sticker mislabels a pin as "BAT" when it is actually 5V input, and the docs explicitly warn never to connect a battery to it; v1.0.1 corrected the definition. Check the [official documentation](https://docs.m5stack.com/en/core/StopWatch) for version notes and schematics before ordering or wiring.

## Discussion in the show

In Weekly #005's chapter “ModRetro、AI Passport 与 ESP32 改造” (ModRetro, AI Passport, and ESP32 hacking), Guizang describes how Meta's Muse ships generic firmware for common ESP32 devices, [naming "the one called Stopwatch, the round one" per the Chinese transcript](/weekly/005/transcript#quote-a7989c59e165750403f9): flash the firmware and the device connects and just works. He goes on to describe using Codex to modify the firmware on his StopWatch — changing the UI, adding Chinese text, replacing the default character with an animation of his orange cat, and adding voice output the stock firmware lacked. Yang Pan compares the whole practice to "electronic Lego". The discussion places StopWatch in the context of small hardware becoming a physical extension for personal agents: a finished ESP32 device plus AI-written firmware turned a gadget he would have shelved into something he uses daily. These are participant experiences, not an official endorsement or a general guarantee. See the [episode 005 chapter](/weekly/005/transcript#chapter-15) (Chinese transcript; no English transcript is available).

## Frequently asked questions

### What is the M5Stack StopWatch?

A round AMOLED touch-screen development board from M5Stack: an ESP32-S3 SoC with a 1.75-inch 466×466 round display, integrating an IMU, microphone, speaker, vibration motor, and battery, positioned for portable and interactive projects.

### How do I develop firmware for it?

UiFlow2 visual programming, the Arduino IDE, and ESP-IDF/PlatformIO are supported, and firmware can be flashed with M5Burner. Start from the [official documentation](https://docs.m5stack.com/en/core/StopWatch); schematics and structure files are provided on the official GitHub.

### Can it work with Home Assistant or a voice assistant?

Community discussions cover Home Assistant and ESPHome use cases, and the official documentation cites voice-assistant firmware as an M5Burner example. Whether a given setup works depends on the specific firmware version; confirm via the [official documentation](https://docs.m5stack.com/en/core/StopWatch) and the relevant project repositories.

### How is it different from a plain ESP32 dev board?

A standard DevKit board exposes a bare chip's pins; StopWatch is an integrated device with a round display, touch, audio, IMU, battery, and enclosure, ready to become a product prototype or pocket gadget — at a higher price and with expansion limited to the interfaces M5Stack provides.

## Sources

- [M5Stack StopWatch official documentation](https://docs.m5stack.com/en/core/StopWatch)
- [M5Stack official website](https://m5stack.com/)
