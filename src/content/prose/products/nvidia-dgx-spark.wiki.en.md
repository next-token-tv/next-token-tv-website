---
entityType: product
entity: nvidia-dgx-spark
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'NVIDIA DGX Spark: A Desktop AI Supercomputer for Local Workloads | Next Token Wiki'
seoDescription: 'What NVIDIA DGX Spark is, its GB10 chip and unified memory, local inference and fine-tuning limits, availability, and the DGX price discussion on episode 005.'
---

## NVIDIA DGX Spark

NVIDIA DGX Spark is a desktop computer from [NVIDIA](/en/wiki/brands/nvidia) for local AI development. The official product page calls it "A Grace Blackwell AI Supercomputer on your desk" and positions it as a Desktop Agent Computer — for building and running autonomous agents locally, reducing reliance on cloud resources. It is built around the GB10 Grace Blackwell Superchip, with up to 1 petaFLOP of AI performance at FP4 precision, in a 150 × 150 × 50.5 mm, roughly 1.2 kg chassis with a 240 W power supply. Specifications and configurations change; the [official product page](https://www.nvidia.com/en-us/products/workstations/dgx-spark/) is authoritative.

## Capabilities and boundaries

Key configurations listed on the official page include a 20-core Arm CPU (10 Cortex-X925 plus 10 Cortex-A725), fifth-generation Tensor Cores, 64 GB or 128 GB of coherent unified LPDDR5X memory (256-bit interface, 273 GB/s bandwidth), up to 4 TB of NVMe storage, and a ConnectX-7 NIC at 200 Gbps — with up to four DGX Spark units linkable to run larger models. By NVIDIA's own figures, DGX Spark runs inference on models with up to 200 billion parameters and fine-tunes models of up to 70 billion parameters locally; those ceilings correspond to the 128 GB unified memory configuration. DGX Spark is not in the same class as data center DGX systems: it targets desktop prototyping, fine-tuning, and modest inference, while heavy training and large-scale deployment remain the domain of cloud and data center lines. Which frameworks and tools it runs (Ollama, LM Studio, Docker, and others) follows official and partner documentation.

## Availability and purchase

According to the official press release, DGX Spark became orderable on NVIDIA.com starting October 15, 2025, with systems from partners including Acer, ASUS, Dell, GIGABYTE, HP, Lenovo, and MSI on the same day, plus Micro Center stores in the US. The official product page has since listed a 64 GB configuration as "Coming Soon," available exclusively through participating OEM partners. No unified price is listed on the official page; current pricing, configurations, and purchase channels should follow the [official product page](https://www.nvidia.com/en-us/products/workstations/dgx-spark/) and channel listings.

## Discussion in the show

Episode 005 touched DGX Spark twice. In the chapter "推理优化与成本下降" (Inference optimization and falling costs), [Orange relayed progress on inference optimization and argued it directly drove DGX prices up](/weekly/005/transcript#quote-dfbbfd3135c8a0e4b298). In the chapter "DGX 涨价与硬件需求" (DGX price hikes and hardware demand), [Yang Pan relayed news from October 2: the 128 GB DGX previously sold for $3,999](/weekly/005/transcript#quote-f1bd249d3df8eb132717), [and the newly introduced 64 GB configuration was priced even higher](/weekly/005/transcript#quote-d766d6b5ee3cbc760cea), leading into a Jevons paradox discussion about efficiency gains raising hardware demand. These price and hike claims are participant reports; they have not been corroborated by NVIDIA's official channels and are not treated as official pricing. See the [episode 005 chapter](/weekly/005/transcript#chapter-13) in the Chinese transcript.

## Frequently asked questions

### What is DGX Spark?

DGX Spark is NVIDIA's desktop AI computer, described officially as a Grace Blackwell AI supercomputer on your desk, for building and running agents, prototyping, fine-tuning, and inference locally. See the [official product page](https://www.nvidia.com/en-us/products/workstations/dgx-spark/).

### How much does DGX Spark cost?

The official product page lists no unified price. Systems are sold via NVIDIA.com and partners such as Acer, ASUS, Dell, HP, Lenovo, and MSI; current pricing should follow official and channel pages. Figures like $3,999 heard on the show are participant reports, not verified against official channels.

### How large a model can DGX Spark run?

By NVIDIA's figures, the 128 GB unified memory configuration runs inference on models up to 200 billion parameters and fine-tunes models up to 70 billion parameters locally; actual results depend on the model, quantization, and software stack.

### When did DGX Spark ship?

The official press release says ordering on NVIDIA.com started October 15, 2025, with partner systems available the same day.

### What is the 64 GB DGX Spark?

As of October 2026, the official product page lists 64 GB and 128 GB unified memory configurations, with the 64 GB configuration marked "Coming Soon" and available exclusively through participating OEM partners. The show also discussed reports on this new configuration's pricing; see above.

## Sources

- [NVIDIA DGX Spark official product page](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
- [NVIDIA press release: DGX Spark Arrives for World's AI Developers (2025-10-13)](https://nvidianews.nvidia.com/news/nvidia-dgx-spark-arrives-for-worlds-ai-developers)
