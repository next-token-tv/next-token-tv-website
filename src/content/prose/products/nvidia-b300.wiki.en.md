---
entityType: product
entity: nvidia-b300
locale: en
slot: wiki
updatedAt: '2026-11-02'
seoTitle: 'What is the NVIDIA B300: a Blackwell Ultra data-center GPU | Next Token Wiki'
seoDescription: "The NVIDIA B300 and its Blackwell Ultra architecture, the HGX B300 NVL16 and GB300 NVL72 platforms announced in March 2025, and how the podcast discussed B300 supply and pricing."
---

## Definition

The NVIDIA B300 is a data-center AI GPU from [NVIDIA](/en/wiki/brands/nvidia), part of the Blackwell Ultra architecture. On March 18, 2025, NVIDIA announced the Blackwell Ultra platform at GTC, consisting of the rack-scale GB300 NVL72 solution and the 16-GPU HGX B300 NVL16 system. According to the official press release, HGX B300 NVL16 delivers roughly 11x faster inference on large language models, 7x more compute, and 4x larger memory than the Hopper generation (see the [official press release](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning)).

## Product form

B300 GPUs are delivered through data-center platforms rather than as retail cards: the HGX B300 NVL16 is a 16-GPU system aimed at AI factories and inference workloads, while the GB300 NVL72 connects 72 Blackwell Ultra GPUs with 36 Grace CPUs into a rack-scale solution. NVIDIA positions the platform for large-scale computing in the age of AI reasoning. Supply arrangements and specifications are governed by the [official materials](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html).

## Related concepts

B300 is a data-center GPU, separate from NVIDIA's gaming and personal-computing [GeForce](/en/wiki/products/nvidia-geforce) brand. Within the same Blackwell Ultra platform, GB300 refers to the superchip form with Grace CPUs, and GB300 NVL72 is the name of the rack-scale solution, while B300 is the GPU itself.

## Episode discussion

In Weekly #001, in the chapter "国内模型为什么突然加速发布" on why Chinese model releases accelerated, Xiangyang Qiaomu mentions that domestic inference cards had become usable, and Orange replies "[B300 已经管够了](/en/weekly/001/transcript#chapter-07)" ("B300 supply is more than enough") in the discussion of whether high-end GPU supply was a bottleneck. In Episode 008, in the chapter on [the Anthropic listing](/weekly/008/transcript#chapter-02), Orange observes while discussing memory and GPU prices that ["even B300 prices have started to fall,"](/weekly/008/transcript#quote-eb87151026091344480d) taking the view that prices had peaked — a judgment based on the participant's personal observation. Neither discussion involves specific specifications or purchasing details.

## Frequently asked questions

### How do B300 and GB300 differ?

B300 is the Blackwell Ultra data-center GPU itself; GB300 is the superchip form that pairs it with Grace CPUs, and GB300 NVL72 is the rack-scale solution of 72 Blackwell Ultra GPUs with 36 Grace CPUs. The platform was announced at GTC on March 18, 2025 — see the [official press release](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning).

### What architecture does the B300 belong to?

The B300 belongs to NVIDIA's Blackwell Ultra architecture, the generation following the original Blackwell data-center platform. NVIDIA states it improves substantially over Hopper in inference speed, compute, and memory (about 11x LLM inference, 7x compute, 4x memory), as stated in the [official press release](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning).

### Where can the B300 be used?

The B300 targets data-center scenarios and reaches customers through platforms such as the HGX B300 NVL16 via system makers and cloud providers; it is not a retail product for individuals. Software support is documented in the [NVIDIA AI Enterprise support matrix](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html).

### How do B300 and B200 relate?

Both are NVIDIA data-center Blackwell GPUs: the B200 belongs to the first Blackwell generation announced in 2024, while the B300 belongs to the Blackwell Ultra generation announced in March 2025. Specific specification differences between the generations are governed by the [official materials](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html).

## Sources

- [NVIDIA Blackwell Ultra platform press release (2025-03-18)](https://nvidianews.nvidia.com/news/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning)
- [NVIDIA AI Enterprise support matrix](https://docs.nvidia.com/ai-enterprise/support-matrix/latest/index.html)
- [Wikipedia: Blackwell (microarchitecture)](https://en.wikipedia.org/wiki/Blackwell_(microarchitecture))
