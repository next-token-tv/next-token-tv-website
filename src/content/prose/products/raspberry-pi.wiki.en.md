---
entityType: product
entity: raspberry-pi
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Raspberry Pi: a family of single-board computers | Next Token Wiki'
seoDescription: 'What Raspberry Pi is, its product lines, official OS and imaging tools, how it compares with ESP32 and Arduino, and what the Weekly show said about the Raspberry Pis in a home device fleet.'
---

## What Raspberry Pi is

Raspberry Pi is a family of low-cost single-board computers made by the company Raspberry Pi, which has been designing such computers — processor, memory, and common interfaces on a credit-card-sized board — since 2012. The company describes them as Arm-based machines running the Linux operating system, with over sixty million units sold in the last decade. The [official product page](https://www.raspberrypi.com/products/) lists the range: full-size single-board computers such as Raspberry Pi 5 and Raspberry Pi 4, tiny models like the Zero 2 W, keyboard-integrated machines such as the Pi 500, the Pico microcontroller line built on RP2350, Compute Modules for embedded production, and accessories including cameras and HAT expansion boards.

## Usage and boundaries

A Raspberry Pi is a complete Linux computer: it can drive a desk setup with a monitor and keyboard, and it commonly serves as a home server, NAS, media center, smart-home gateway, retro game console, or a board for learning to program. The official operating system is Raspberry Pi OS, the official Raspberry Pi Imager tool writes it to a microSD card, and Raspberry Pi Connect provides remote access.

Its division of labor against [ESP32](/en/wiki/products/esp32) and Arduino comes up often: ESP32 is a microcontroller for low-power, real-time sensing and control, while Raspberry Pi runs a full operating system for workloads that need network services, file storage, containers, or multitasking. Home projects often pair the two — a Pi as the hub and microcontrollers at the edges. Prices, availability, and specifications vary by model and over time; check the [official product page](https://www.raspberrypi.com/products/) before buying.

## Discussion in the show

In Weekly #005's chapter “云电脑、自己的电脑与服务器管理” (cloud computers, your own computers, and server management), Yang Pan mentions tidying up his home devices over the October holiday: [“one NUC, then 2 Raspberry Pis, then 3 Pads, and a pile of NAS”, per the Chinese transcript](/weekly/005/transcript#quote-adb85c7ee0f0a3b6b7ee). He asked Codex what these devices could be used for and "didn't get a good suggestion"; the chapter then moves to agents managing servers and making cold backups of the podcast. Raspberry Pi appears here in the context of a personal device fleet and agent-driven administration: how idle single-board computers at home fit into a personal agent's management scope. This is one participant's experience, not usage advice. See the [episode 005 chapter](/weekly/005/transcript#chapter-07) (Chinese transcript; no English transcript is available).

## Frequently asked questions

### What is Raspberry Pi?

A family of single-board computers from the company Raspberry Pi: processor, memory, and common interfaces on one board, Arm-based and running Linux, with tens of millions sold since 2012 for learning, self-hosting, and hobby projects.

### What can a Raspberry Pi do?

Most things a Linux machine can do: desktop computing, home servers, NAS, smart-home gateways, media centers, signage, and small websites, plus camera- and sensor-driven projects with the official accessories. The right answer depends on the model and peripherals.

### Raspberry Pi vs ESP32 vs Arduino — what is the difference?

Raspberry Pi runs a full operating system; ESP32 and Arduino are microcontrollers for low-power real-time control. Choose Raspberry Pi for system services, storage, and networking, and a microcontroller when power draw, cost, and real-time response matter. Combined projects are common.

### How do I install an OS on a Raspberry Pi?

Use the official [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to write Raspberry Pi OS or another OS to a microSD card, then boot from it. The official software page also offers Raspberry Pi Connect for remote access.

### Where is the Raspberry Pi official website?

The official site is [raspberrypi.com](https://www.raspberrypi.com/), with products at the [official product page](https://www.raspberrypi.com/products/) and operating systems and tools at the [software page](https://www.raspberrypi.com/software/).

## Sources

- [Raspberry Pi official product page](https://www.raspberrypi.com/products/)
- [Raspberry Pi About page](https://www.raspberrypi.com/about/)
- [Raspberry Pi software page](https://www.raspberrypi.com/software/)
