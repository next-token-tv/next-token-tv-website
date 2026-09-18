---
entityType: product
entity: microduck
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Microduck: Pollen Robotics’ open-source biped robot | Next Token Wiki'
seoDescription: 'What Microduck is, its pre-order price, how reinforcement learning training works, and how the Next Token podcast discussed it.'
---

## What Microduck is

Microduck is a small open-source biped robot from [Pollen Robotics](https://pollen-robotics.com/), a robotics company owned by [Hugging Face](/en/wiki/brands/hugging-face). It is 25 cm tall and weighs under 800 g, with 15 motors, a camera, a depth sensor (listed as LiDAR on the official spec sheet), two IMUs, and an articulated beak that can pick up objects. The official positioning is “a tiny biped robot you can teach new tricks”: its behaviors are trained with reinforcement learning, and it is playable out of the box. Within Pollen’s product line, Reachy Mini is a platform for AI that interacts, while Microduck is a platform for AI that acts.

The robot is sold by pre-order: pre-orders opened on August 27, 2026, and availability and shipping progress are tracked on the [official store](https://store.pollen-robotics.com/products/microduck) and the [official blog](https://pollen-robotics.com/microduck/blog/introducing-microduck/). The software stack, however, is available as open source: the SDK and robot software live at [pollen-robotics/microduck](https://github.com/pollen-robotics/microduck) (Apache-2.0), and the reinforcement-learning and sim-to-real tools at [pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl).

## Usage and boundaries

Microduck is built for experimenting with physical AI at desk scale: train a locomotion behavior in simulation, deploy the policy on the real robot, and iterate.

- Out of the box: the robot ships with 7 trained behaviors, including walking, sitting and standing, kicking, grabbing with the beak, roller skating with the skates equipped, and getting back up on its own. It can be driven with a game controller and can chase a laser dot. Each robot generates its own audio identity on first boot.
- Training loop: the official workflow is “train in the MuJoCo physics simulation → deploy to the robot in one step → tune and retrain → publish the policy.” Training can run on your own machine or on Hugging Face Jobs, and the [official simulator](https://huggingface.co/spaces/pollen-robotics/microduck-simulator) runs in the browser. Maintenance uses the `robotctl` command (monitor/configure/update).
- Purchase boundaries: pre-orders opened on August 27, 2026 at an introductory price of $399 before taxes and shipping in the [official store](https://store.pollen-robotics.com/products/microduck), with a $39 charger pack, a $119 dev pack, and a $39 accessory pack. According to the official blog, first deliveries are targeted before Christmas 2026 in North America, Europe, and the UK, in four colorways: Cream, Graphite, Lavender, and Sky.

## Discussion in the show

Weekly #001’s chapter “Microduck 为什么一夜走红” (“Why Microduck went viral overnight”) in the [Chinese transcript](/weekly/001/transcript#chapter-19) treats Microduck as one of the week’s hardware stories; an English transcript is not available. [Yang Pan introduces it as Hugging Face’s MicroDuck and says it is manufactured by the Chinese company Seeed](/weekly/001/transcript#quote-ef668720aacb7871ed55); the Seeed statement is a participant’s claim — neither Pollen’s product page nor its blog mentions a manufacturing partner. His “around 300 US dollars” is consistent with the official $399 pre-order price. Guizang adds that [the robot was published by the company Hugging Face acquired, whose previous product was already popular before the acquisition](/weekly/001/transcript#quote-8a2fcec8111ab79972f1) — consistent with the official blog’s note that more than 10,000 Reachy Mini units have reached users. Orange praises the design, demo, and price, and [Guizang sums up the toy category as “useless enough to be fun”](/weekly/001/transcript#quote-a4c6282844868aeff0cf), noting that it can even do a backflip.

These are the participants’ live impressions and opinions, not a product evaluation or an official position.

## Frequently asked questions

### What is the Microduck robot?

An open-source biped robot, 25 cm tall and about 800 g, with 15 motors, a camera, a depth sensor, and two IMUs. Its behaviors are trained with reinforcement learning, and it ships with 7 built-in behaviors such as walking and grabbing. See the [official product page](https://pollen-robotics.com/microduck/).

### How much does Microduck cost, and where can I pre-order it?

The [official store’s pre-order page](https://store.pollen-robotics.com/products/microduck) lists $399 before taxes and shipping, plus $39–$119 accessory and dev packs. Third-party sites with similar names exist in search results; pre-order only through the official Pollen Robotics store.

### Can I buy Microduck now, and when does it ship?

Pre-orders opened on August 27, 2026, and the official blog targets first deliveries before Christmas 2026 in North America, Europe, and the UK. As of September 2026 the robot is still sold by pre-order; whether direct purchase is open is on the [official store](https://store.pollen-robotics.com/products/microduck), and delivery progress is on the [official blog](https://pollen-robotics.com/microduck/blog/introducing-microduck/).

### Is Microduck made by Hugging Face?

Microduck is developed by Pollen Robotics, a company owned by Hugging Face. The launch blog post is co-authored by Pollen’s team and Hugging Face’s Thomas Wolf, and the product page footer reads “Part of Hugging Face.” See the [official blog](https://pollen-robotics.com/microduck/blog/introducing-microduck/).

### Can I play with Microduck without writing code?

Yes. The robot ships with 7 trained behaviors, works with a game controller, and can chase a laser dot. Teaching new behaviors requires the simulation training loop: the SDK, the MuJoCo simulation, and the full reinforcement-learning stack are open source on [GitHub](https://github.com/pollen-robotics/microduck).

### How does Microduck differ from Reachy Mini?

Per the official blog, Reachy Mini is a platform for AI that interacts — it sees, listens, and speaks — while Microduck is a platform for AI that acts, focused on movement, reinforcement learning, and sim-to-real. Both share the same open-source philosophy but serve different purposes. See the [official blog](https://pollen-robotics.com/microduck/blog/introducing-microduck/).

## Sources

- [Pollen Robotics: Microduck product page](https://pollen-robotics.com/microduck/)
- [Pollen Robotics blog: Meet Microduck](https://pollen-robotics.com/microduck/blog/introducing-microduck/)
- [GitHub: pollen-robotics/microduck](https://github.com/pollen-robotics/microduck)
- [GitHub: pollen-robotics/microduck_rl](https://github.com/pollen-robotics/microduck_rl)
- [Official store: Microduck pre-order page](https://store.pollen-robotics.com/products/microduck)
- [Microduck simulator (Hugging Face Spaces)](https://huggingface.co/spaces/pollen-robotics/microduck-simulator)
