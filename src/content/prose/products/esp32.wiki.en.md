---
entityType: product
entity: esp32
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'ESP32: Espressif wireless microcontroller family, selection, and getting started | Next Token Wiki'
seoDescription: 'What the ESP32 chip family is, how its series differ, how to start developing with ESP-IDF, and the Weekly episode that called ESP32 boards "the new Lego."'
---

## What ESP32 is

ESP32 is a family of wireless microcontrollers from Espressif Systems (see [Espressif](/en/wiki/brands/espressif)) that integrates Wi-Fi and Bluetooth on the chip, aimed at IoT and embedded devices. The first ESP32 launched in September 2016 as the successor to the ESP8266. Since then Espressif has expanded the family into several series named ESP32-S, ESP32-C, ESP32-H, and ESP32-P — such as the ESP32-S3, ESP32-C3, ESP32-C6, and ESP32-P4. Chips use Xtensa LX6/LX7 or RISC-V processors, with different wireless and peripheral capabilities. The [official product page](https://www.espressif.com/en/products/socs/esp32) lists all series; use it for current selection.

## Uses and boundaries

ESP32 fits small devices that need wireless connectivity and simple control: smart-home sensors, desk gadgets, robot parts, and DIY instruments are typical projects. Espressif ships the family at three levels: bare chips for mass production, modules with antenna and radio components integrated, and DevKit boards for hands-on experimentation. Development centers on the official [ESP-IDF framework](https://github.com/espressif/esp-idf), with official support for ecosystems such as Arduino and Zephyr, plus dedicated components for audio and voice AI. Exact specifications, certifications, and availability vary by model — check the official technical documentation before designing or ordering.

## Discussion in the show

In Weekly #001’s chapter titled “ESP32 becomes the ‘new Lego’: the era of everyday inventors,” Guizang described [ESP32 boards as “the new Lego — sold out every day”](/weekly/001/transcript#quote-fd8b64bb3e29bbdc9c33). Yang Pan followed up by noting that Wang Le’s [Microduck](/en/wiki/products/microduck) robot used “not even a particularly high-spec version,” and Orange observed that most people treat it as a toy. The chapter frames ESP32 as an “everyday inventor” platform: cheap, wireless-capable, with a large ecosystem, so that anyone can assemble working devices like building blocks. These are the participants’ observations and a metaphor, not a statement about specific models or stock levels; see the [Chinese transcript chapter](/weekly/001/transcript#chapter-20).

## Frequently asked questions

### What is ESP32?

ESP32 is a family of microcontrollers with integrated Wi-Fi and Bluetooth from Espressif, sold with modules, development boards, and software tools such as ESP-IDF, widely used for IoT and DIY electronics.

### How do I get started with ESP32 development?

A common path: buy an official DevKit board, then pick a software framework — the official choice is [ESP-IDF](https://github.com/espressif/esp-idf), with Arduino as a lighter alternative to start. The official product page links documentation and examples.

### Which ESP32 model should I choose?

The family is divided into S, C, H, and P series; ESP32-S3, ESP32-C3, ESP32-C6, and ESP32-P4 are common branches. CPUs (Xtensa or RISC-V), wireless capabilities, and peripherals differ significantly between models — compare the [official SoC list](https://www.espressif.com/en/products/socs/esp32) and datasheets.

### How is ESP32 different from ESP8266?

ESP32 is the successor to the ESP8266: the family covers more CPU architectures and wireless combinations, with finer-grained series. Whether migrating an old project is worthwhile depends on the specific model and peripheral needs.

### Why did the podcast call ESP32 “the new Lego”?

It is Guizang’s metaphor from Weekly #001: the boards are cheap, wireless-ready, and backed by a large community, so anyone can assemble working devices like building blocks. See [Discussion in the show](#discussion-in-the-show).

## Sources

- [Espressif ESP32 product page](https://www.espressif.com/en/products/socs/esp32)
- [Espressif 2016 ESP32 launch announcement](https://www.espressif.com/en/media_overview/news/20160907-esp32briefing)
- [ESP-IDF official GitHub repository](https://github.com/espressif/esp-idf)
- [ESP32 — Wikipedia](https://en.wikipedia.org/wiki/ESP32)
