---
entityType: product
entity: mac-studio
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Mac Studio: Apple’s compact workstation and local inference | Next Token Wiki'
seoDescription: 'Mac Studio’s positioning, M5 Max and M5 Ultra specs and availability, Apple’s official local-AI scenarios, and the Next Token podcast discussion.'
---

## What Mac Studio is

Mac Studio is [Apple](/en/wiki/brands/apple)’s compact professional desktop Mac, which the company calls “the ultimate pro desktop,” in a chassis about 19.7 cm square and 9.5 cm tall. On August 25, 2026, Apple introduced a new generation with M5 Max and the all-new [M5 Ultra](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/), with Apple’s pages listing availability beginning September 22. The previous generation used M4 Max and M3 Ultra chips and still appears in Apple’s official performance comparisons.

## Usage and boundaries

Mac Studio targets two kinds of work: professional creation and development that need sustained performance and connectivity, and running large AI models locally.

- Official specifications: the M5 Max model has an 18-core CPU and up to a 40-core GPU, with up to 128GB of unified memory at 614GB/s bandwidth. The M5 Ultra — two M5 Max dies fused into one SoC — has a 36-core CPU and up to an 80-core GPU, with up to 512GB of unified memory at 1.2TB/s. Ports include four Thunderbolt 5 ports, 10Gb Ethernet, HDMI, and an SDXC slot (the M5 Ultra’s front panel is two Thunderbolt 5 ports), plus first-time support for Wi-Fi 7 and Bluetooth 6. Full details are on the [official tech specs page](https://www.apple.com/mac-studio/specs/).
- Official AI scenarios: Apple’s site highlights [running LLMs locally with LM Studio Bionic](https://www.apple.com/mac-studio/), image generation in Draw Things, clustering workstations with exo, and running “frontier-class models on device” with M5 Ultra. The press release also introduces the Core AI framework and MLX, and states that Thunderbolt 5 and RDMA can cluster up to four Mac Studio systems for up to 3x faster distributed AI inference than a single system. These are Apple’s official claims, not independent benchmark results.
- Boundaries: memory and storage are configured at purchase; pricing varies with the chip, memory, and storage, and the official store is the only reliable price source. Apple’s published performance multiples come from Apple’s own testing; real-world results depend on the workload.

## Discussion in the show

Mac Studio comes up several times in Weekly #001 in the [Chinese transcript](/weekly/001/transcript); an English transcript is not available. The participants describe their own machines — personal experience, recorded not long after the new generation was announced.

In the chapter on GLM 5.3 Flash and MiniMax H3, [Yang Pan describes running local models on his 128GB Mac Studio](/weekly/001/transcript#quote-fd38512a48f266e43abe): the Qwen series at 27B and 35B, and DeepSeek V4 Flash at roughly 30 tokens per second, “already usable.” He still calls local inference a niche case, [sharing his own back-of-envelope math that the machine pays for itself in about two years only if it runs flat out, while normal users may wait 10 to 20 years](/weekly/001/transcript#quote-d858cf2d46092dfde617).

In the chapter “Mac Studio、本地推理与一台始终在线的电脑” (“Mac Studio, local inference, and an always-on computer”), [Guizang says he owns both a Mac mini and a 32GB Mac Studio](/weekly/001/transcript#quote-8801767eeff61b98ee9a), using the latter for engineering tasks rather than local models, and [describes the Mac mini as falling short on cooling and performance under heavy work](/weekly/001/transcript#quote-6d4d1080e09a799ffe3c). [Yang Pan’s impression is that you stop noticing the computer at all](/weekly/001/transcript#quote-7f137420739f1df4688c), and both say they [leave their Mac Studios running around the clock](/weekly/001/transcript#quote-6da575083b2ac4ee9801). Xiangyang Qiaomu and Orange said they had no purchase plans at the time. See [the episode 001 chapter](/weekly/001/transcript#chapter-22).

In the hardware news roundup, [Yang Pan relays that the newly announced Mac mini and Mac Studio push memory toward 128, 256, and 512GB, with high-end configurations becoming much more expensive](/weekly/001/transcript#quote-16dbac2d3a1f25eb76ca); the “tens of thousands of yuan” figures are the participant’s account of market prices at the time, not Apple’s official pricing. In the “Token Is New Money” chapter, [Orange likens buying a Mac Studio to “printing your own money” or minting coins at home](/weekly/001/transcript#quote-1cecab0aab1f8761cb0b), describing local Flash-class models as turning cloud token spending into owned compute — a show metaphor, not an Apple position. See [the episode 001 chapter](/weekly/001/transcript#chapter-28).

## Frequently asked questions

### What is Mac Studio, and who is it for?

It is Apple’s compact professional desktop Mac, positioned as the ultimate pro desktop. Apple names creatives, developers, AI researchers, and data scientists as its users, with typical workloads including video editing, 3D rendering, code compilation, and local AI inference. See the [official product page](https://www.apple.com/mac-studio/).

### Which chips does the current Mac Studio use, and when can I get one?

The generation announced August 25, 2026 uses M5 Max and the all-new M5 Ultra, with availability beginning September 22 per Apple’s pages. The previous generation used M4 Max and M3 Ultra. See the [Apple press release](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/).

### How much unified memory can a Mac Studio have?

Per the official tech specs: up to 128GB on M5 Max models (36GB base, configurable to 48/64/128GB) and up to 512GB on M5 Ultra models (96GB base, configurable to 256/512GB). Memory is selected at purchase. See the [official specs page](https://www.apple.com/mac-studio/specs/).

### Can a Mac Studio run large language models locally?

Apple’s site presents local LLMs as a core Mac Studio scenario, with LM Studio Bionic, the Core AI framework, MLX, and exo clustering as examples, and emphasizes the M5 Ultra’s 512GB unified memory and 1.2TB/s bandwidth. These are Apple’s claims; the model sizes and speeds you actually get depend on the model and configuration. In Weekly #001, Yang Pan’s “about 30 tokens per second, already usable” on a 128GB machine is his personal experience, described in [the episode 001 transcript](/weekly/001/transcript#chapter-03).

### How is Mac Studio different from Mac mini?

They are different product lines: Mac Studio uses M5 Max/M5 Ultra chips with higher unified memory, bandwidth, port counts, and official performance positioning, while Mac mini is the more entry-level desktop Mac ([updated in August 2026 with M6 and M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/)). In Weekly #001, Guizang’s personal experience was that the Mac mini “falls short on cooling and performance” for heavy engineering work — a participant opinion, described in [the episode 001 chapter](/weekly/001/transcript#chapter-22).

### How much does a Mac Studio cost?

Pricing depends on the chip, memory, and storage configuration; check the [official Apple store page](https://www.apple.com/shop/buy-mac/mac-studio) for current prices. Prices quoted by show participants or media reports are relayed or market figures, not official pricing.

## Sources

- [Apple: Mac Studio product page](https://www.apple.com/mac-studio/)
- [Apple: Mac Studio tech specs](https://www.apple.com/mac-studio/specs/)
- [Apple press release: Apple introduces new Mac Studio with M5 Max and M5 Ultra](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/)
- [Apple Store: Mac Studio buy page](https://www.apple.com/shop/buy-mac/mac-studio)
