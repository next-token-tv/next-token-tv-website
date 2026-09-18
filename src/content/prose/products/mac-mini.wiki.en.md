---
entityType: product
entity: mac-mini
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Mac mini: Apple’s Compact Desktop Mac and Always-On Computing | Next Token Wiki'
seoDescription: 'Mac mini explained: positioning, M6 and M5 Pro configurations and availability, Apple’s local AI and agent scenarios, how it differs from Mac Studio, and the Weekly #001 discussion.'
---

## What is Mac mini

Mac mini is Apple's compact desktop Mac, about 12.7 cm square, sold without a display, keyboard, or mouse. Apple announced the new generation with M6 and M5 Pro chips on August 25, 2026, opening pre-orders the same day; the [official page](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) notes availability starting September 22 in 30 countries and regions.

Within Apple's desktop lineup, Mac mini sits below [Mac Studio](/en/wiki/products/mac-studio) and differs from the all-in-one iMac. It is commonly used as a small always-on host, which matches Apple's own "always-on, deskside agentic computing" positioning.

## Use and boundaries

- Official specifications: the M6 model has a 12-core CPU and 12-core GPU, unified memory from 16GB to 32GB, and 170GB/s memory bandwidth. The M5 Pro model has up to an 18-core CPU and 20-core GPU, up to 64GB of unified memory, and 307GB/s of bandwidth. The front carries two USB-C ports and a headphone jack; the back has three Thunderbolt ports (Thunderbolt 4 on M6, Thunderbolt 5 on M5 Pro), HDMI, and 2.5Gb Ethernet (10Gb optional), plus Wi-Fi 7 and Bluetooth 6. Full details are on the [official specs page](https://www.apple.com/mac-mini/specs/).
- Official AI scenarios: Apple positions Mac mini for always-on, deskside agentic computing, citing local model inference with LM Studio Bionic and Ollama, clustering multiple Mac minis with exo to run large models on device, and running agent tools such as Claude Code and Codex. The performance multiples on the page (such as LM Studio prompt processing speedups) are Apple's own comparisons.
- Boundaries: Thunderbolt 5 on the M5 Pro supports clustering several Mac minis, which is Apple's stated scaling path. Memory and storage are configure-to-order. Unified memory tops out at 64GB on Mac mini; larger memory configurations belong to [Mac Studio](/en/wiki/products/mac-studio) (up to 512GB with M5 Ultra).

## Mentioned on Next Token

Weekly #001 was recorded in early September 2026, shortly after the new Mac mini was announced, so most in-show information is secondhand.

In the hardware roundup, [Yang Pan listed the newly announced Mac mini M6 and Mac Studio as hot topics](/weekly/001/transcript#quote-16dbac2d3a1f25eb76ca) and relayed market chatter about high configurations costing tens of thousands of yuan with memory "heading for 128, 256, 512GB". Per official specifications, those memory ceilings belong to Mac Studio; the new Mac mini tops out at 64GB. The price remarks are secondhand, not Apple pricing.

In the chapter “GLM 5.3 Flash 与 MiniMax H3” (“GLM 5.3 Flash and MiniMax H3”), [Guizang relayed the report that OpenAI bought 30,000 Mac minis and drove prices up](/weekly/001/transcript#quote-59e419a0a1ff5cd2065b), and [Yang Pan added that, as he understood it, the machines were not for running models but for large-scale agent training in Mac environments and for collecting behavioral training data](/weekly/001/transcript#quote-37d4edd56fc77789ace4). Both statements are unverified secondhand information.

In the chapter “Mac Studio、本地推理与一台始终在线的电脑” (“Mac Studio, local inference, and an always-on computer”), [Guizang says he owns both a Mac mini and a 32GB Mac Studio](/weekly/001/transcript#quote-8801767eeff61b98ee9a), and [his comparative experience is that the Mac mini falls short on cooling and performance, crashing under heavy engineering workloads](/weekly/001/transcript#quote-6d4d1080e09a799ffe3c). [Xiangyang Qiaomu says he has a Mac mini and no upgrade plans](/weekly/001/transcript#quote-81f033ec93dd17db6183). These are personal experiences, not benchmark results. See [the episode 001 chapter](/weekly/001/transcript#chapter-22).

While discussing [Omarchy](/en/wiki/products/omarchy), [Guizang said it would be great if a Mac mini could run that system](/weekly/001/transcript#quote-97881b924caf24e35dcc), and [Yang Pan replied that a barebones PC would do instead](/weekly/001/transcript#quote-9f73295fa2a97468f7bd). This is casual banter in a Linux-distribution context, not an indication that Mac mini officially supports third-party operating systems.

## FAQ

### Which chips does the new Mac mini use, and when is it available?

The generation announced on August 25, 2026 uses M6 and M5 Pro. Pre-orders opened the same day, with availability starting September 22 in 30 countries and regions, shipping with macOS 27. See the [Apple newsroom release](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/).

### How much does Mac mini cost?

Per the official news release, US starting prices are $899 for the M6 model ($799 for education) and $1,699 for the M5 Pro model ($1,599 for education). Final pricing depends on memory and storage; see the [official store page](https://www.apple.com/shop/buy-mac/mac-mini) for live pricing. The price increases mentioned on Weekly #001 are secondhand market chatter, not official pricing.

### Can Mac mini run large models locally?

Apple lists local AI as a core Mac mini scenario, with official examples including LM Studio Bionic, Ollama, and clustering Mac minis with exo to run large models on device. What fits is bounded by the memory ceiling: 64GB of unified memory at most on the new models, so larger-memory local inference typically moves to Mac Studio. See the [Mac Studio article](/en/wiki/products/mac-studio) for Yang Pan's experience running local models on a 128GB machine.

### How is Mac mini different from Mac Studio?

They are separate product lines: Mac mini uses M6/M5 Pro chips with up to 64GB of unified memory for entry and prosumer desktops, while Mac Studio uses M5 Max/M5 Ultra chips with up to 512GB of memory for professional workflows and large-scale local inference. On Weekly #001, Guizang's personal experience was that the Mac mini is "indeed not enough on cooling and performance" for heavy engineering tasks; see [the episode 001 chapter](/weekly/001/transcript#chapter-22). See also the [Mac Studio article](/en/wiki/products/mac-studio).

### Can Mac mini run Linux?

Apple supports macOS, and the new models ship with macOS 27; Apple does not provide Linux installation support. On Weekly #001, Guizang wished a Mac mini could run a Linux system (in the Omarchy discussion), but that is a personal wish — no official installation path was offered on the show.

## Sources

- [Apple: Mac mini product page](https://www.apple.com/mac-mini/)
- [Apple newsroom: Apple unveils a more powerful Mac mini featuring the all-new M6 and M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/)
- [Apple: Mac mini tech specs](https://www.apple.com/mac-mini/specs/)
- [Apple Store: Mac mini buying page](https://www.apple.com/shop/buy-mac/mac-mini)
