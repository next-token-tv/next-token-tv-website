---
entityType: product
entity: xiaozhi-esp32
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Xiaozhi AI (xiaozhi-esp32): Open-Source ESP32 Voice Chatbot｜Next Token Wiki'
seoDescription: 'The open-source xiaozhi-esp32 project: what it is, how wake-word and LLM voice interaction work, supported ESP32 hardware, how it differs from Xiaomi speakers, HyperXiaoAI and the ESP32 chip, and the podcast mention.'
---

## Definition

Xiaozhi AI (xiaozhi-esp32) is open-source voice chatbot software for boards such as the ESP32, connecting spoken interaction with large language models. The project is maintained by GitHub user 78, whose README describes it as "an MCP-based chatbot"; the code is open source under the MIT license, the project's website is [xiaozhi.me](https://xiaozhi.me/), and the code lives in the [GitHub repository 78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32).

## How it works

Per the repository README, the on-device firmware handles offline voice wake-up (based on ESP-SR, with customizable wake words), recording, and playback; speech recognition, LLM conversation, and text-to-speech run through cloud services over WebSocket or MQTT + UDP transports. The README also lists realtime end-to-end voice models, speaker recognition, on-screen emoji, and camera input, plus device control through the MCP protocol for both on-device peripherals (speaker, LED, servos, and more) and cloud-side services (smart home, PC control, and more).

## Usage

The main use is building your own voice-chat device: flash an [ESP32](/en/wiki/products/esp32) development board — board types listed in the README include the Espressif ESP32-S3-BOX-3, [M5Stack](/en/wiki/products/m5stack) CoreS3, and M5Stack AtomS3R — and it becomes a voice chat terminal. The community also uses it as a software option for repurposing old smart hardware; the "turn an old speaker into a Xiaozhi" idea mentioned in episode 007 belongs to this category.

## Related and confusable terms

- Xiaozhi AI is a community open-source project, not an official Xiaomi product; it has no connection to Xiaomi's voice-assistant stack represented by [XiaoAI speakers](/en/wiki/products/xiaoai-speakers) and [HyperXiaoAI](/en/wiki/products/hyperxiaoai).
- Relation to [ESP32](/en/wiki/products/esp32): ESP32 is Espressif's microcontroller chip family, while Xiaozhi is a firmware project running on those chips and boards — chip layer and software layer.
- Searching "Xiaozhi AI" also surfaces emoji packs, courses, and other unrelated namesakes; this entry covers only the xiaozhi-esp32 project maintained by 78.

## Discussed on Next Token

In episode 007, in the chapter "Omarchy、旧手机与重写软件的可能性" (Omarchy, old phones, and the possibility of rewriting software), 杨攀 (Yang Pan) proposed that [the software inside old smart speakers could be rewritten entirely — "you could turn it into a Xiaozhi"](/weekly/007/transcript#quote-72707cd66b812d6566ec), with 橘子 (Orange) adding that turning it into a Grok Bot would work too. This is the participants' discussion of the possibility of rewriting old hardware, not a verification of the project's capabilities or a conversion guide. See the [episode 007 chapter](/weekly/007/transcript#chapter-20) (Chinese transcript).

## Frequently asked questions

### Where are Xiaozhi AI's website and code repository?

The website is [xiaozhi.me](https://xiaozhi.me/), and the code is in the [GitHub repository 78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32), open source under the MIT license.

### What hardware does Xiaozhi AI support?

The [repository README](https://github.com/78/xiaozhi-esp32) lists chips including ESP32, ESP32-C3, ESP32-C5, ESP32-C6, ESP32-S3, and ESP32-P4, plus a large set of boards such as the Espressif ESP32-S3-BOX-3 and M5Stack CoreS3; the supported list is governed by the repository's live content.

### Can an old XiaoAI speaker be converted into a Xiaozhi?

That is a community conversion project: Yang Pan floated the idea in episode 007, but the README's officially supported hardware is mainly development boards, so an old speaker needs its speaker, microphones, and other parts adapted by hand. Feasibility depends on the specific hardware; evaluate against the [project repository](https://github.com/78/xiaozhi-esp32) documentation.

## Sources

- [xiaozhi-esp32 GitHub repository](https://github.com/78/xiaozhi-esp32)
- [Xiaozhi website, xiaozhi.me](https://xiaozhi.me/)
- [Episode 007 transcript, relevant chapter](/weekly/007/transcript#chapter-20)
