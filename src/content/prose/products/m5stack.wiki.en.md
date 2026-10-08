---
entityType: product
entity: m5stack
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'M5Stack development kits: modular IoT hardware, product lines, and tooling | Next Token Wiki'
seoDescription: 'Learn what M5Stack development kits are, their ESP32-based product lines and software tools, plus what the Weekly hosts said about writing firmware with AI in episode 005.'
---

## What M5Stack is

M5Stack is a modular, open-source IoT development platform built around the [ESP32](/en/wiki/products/esp32) microcontroller family; officially it describes itself as “Modular IoT Dev Kits for Rapid Prototyping.” The standard hardware is a 5×5 cm modular system: modules stack together and carry a microSD card slot, a USB-C port, and expansion connectors. The official site is [m5stack.com](https://m5stack.com/).

## Product lines and development tools

The hardware is organized into several form-factor families: the Core controller series, Stick, Atom, Cardputer, and Stamp modules, plus Unit accessories such as sensors and actuators, along with complete devices for specific scenarios. Individual boards like the [M5Stack StopWatch](/en/wiki/products/m5stack-stopwatch) belong to this system. On the software side, M5Stack ships the block-based UiFlow and AiFlow tools, supports mainstream embedded frameworks such as Arduino and ESP-IDF, and provides the M5Burner flashing tool alongside product documentation.

Typical uses are IoT prototyping, education, and embedded projects: stack a controller with a display and sensor modules, get a working prototype running quickly, and only then decide whether to move to custom hardware.

## Discussion in the show

In Weekly #005’s chapter “ModRetro、AI Passport 与 ESP32 改造” (ModRetro, AI Passport, and ESP32 hacking), [Guizang recalls hacking small hardware with M5Stack and ESP32 boards in the Chinese transcript](/weekly/005/transcript#quote-a7989c59e165750403f9): at that time AI-written firmware was still rough and produced code with many problems. By contrast, as Guizang described on the show, Meta’s Muse provides ready-to-flash general-purpose firmware for common ESP32 devices, including M5Stack’s round StopWatch, and [Yang Pan calls this kind of firmware “Agent Ready”](/weekly/005/transcript#quote-b78e87424d126fabbeca). [Guizang adds that his modified device has become something he genuinely uses daily](/weekly/005/transcript#quote-1b3c1b62e943e12869f0). These are the participants’ first-hand accounts of how AI-assisted embedded development has changed, not a review of M5Stack products. The [episode 005 chapter](/weekly/005/transcript#chapter-15) holds the full context; an English transcript chapter is not available.

## Frequently asked questions

### What is M5Stack?

It is an ESP32-based modular open-source IoT platform: hardware built from stackable 5×5 cm modules, with product lines covering Core controllers, Stick, Atom, Cardputer, Stamp, and Unit sensors and actuators, used for IoT prototypes and embedded projects.

### How does M5Stack relate to ESP32?

M5Stack’s core hardware is built on Espressif’s ESP32 microcontroller family, and the official documentation and supported frameworks (Arduino, ESP-IDF) are anchored in the ESP32 ecosystem.

### What software do I use to program M5Stack?

Official tooling includes the block-based UiFlow and AiFlow, with support for the Arduino and ESP-IDF frameworks; M5Burner handles flashing. Product documentation lives at [docs.m5stack.com](https://docs.m5stack.com/).

### Where can I buy M5Stack products and read the docs?

The official store is [m5stack.com](https://m5stack.com/), and product documentation and development resources are at [docs.m5stack.com](https://docs.m5stack.com/).

## Sources

- [M5Stack official site](https://m5stack.com/)
- [M5Stack product documentation](https://docs.m5stack.com/)
