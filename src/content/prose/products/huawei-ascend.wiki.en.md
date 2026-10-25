---
entityType: product
entity: huawei-ascend
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Huawei Ascend: AI processors and hardware family | Next Token Wiki'
seoDescription: 'How Huawei Ascend combines NPUs, Atlas hardware and the CANN/MindSpore software stack for AI training and inference, plus the Ascend 950 mention in Weekly #007.'
---

## Definition

Ascend (昇腾) is Huawei’s processor and hardware family for AI computing, which the official site positions as an AI foundational hardware and software platform (“昇腾AI基础软硬件平台”). The portfolio spans NPU processors (the official site lists Ascend 950PR and 950DT), Atlas-branded super nodes, servers, accelerator cards and modules, together with the CANN heterogeneous computing architecture, the MindSpore framework, and MindStudio tooling. See the [official Ascend site](https://www.hiascend.com/).

## How it works

Ascend combines in-house NPU chips with full systems and clusters into a compute base for both training and inference: Ascend processors handle AI workloads, Atlas super nodes and servers form the cluster layer, and CANN connects the hardware to upper-level frameworks. The official developer tracks cover training, inference, and operator development; beyond MindSpore, mainstream frameworks such as PyTorch and TensorFlow are supported.

## Usage

Typical uses are large-model training and inference deployment, intelligent computing centers, and enterprise AI capacity. The official materials target scenarios including LLMs, multimodal workloads, and search and advertising. Performance, specifications, and compatibility of any specific model are governed by that product’s official documentation.

## Related and confusable terms

Ascend’s processors are positioned as NPUs (AI processors), a different framing from the general-purpose [graphics processing unit (GPU)](/en/wiki/terms/gpu); comparison searches should distinguish the two architectures. Atlas is the naming series for Ascend hardware products, not the chips themselves. Huawei is the [brand](/en/wiki/brands/huawei) Ascend belongs to; company-level business is out of scope for this entry.

## Episode discussion

In Weekly #007, in the chapter “DeepSeek 的推理速度，怎样改变产品体验？” (Chinese transcript), Guizang relays that DeepSeek opened up its inference framework and that day-one support "[worked on Huawei’s Ascend 950](/weekly/007/transcript#quote-f6732b8b370bc2b61ce6)". This is a speaker’s secondhand account, not a verified statement about Ascend model performance or official adaptation status. See the [chapter](/weekly/007/transcript#chapter-02).

## Frequently asked questions

### What is Ascend 950?

The official Ascend site lists Ascend 950PR and Ascend 950DT under NPU processors. Specifications, parameters, and availability are governed by the [official pages](https://www.hiascend.com/); this entry does not repeat unverified performance comparisons.

### What are Ascend chips used for?

Per the official materials, the Ascend platform serves both AI training and inference: the developer tracks split into training and inference development, and Atlas hardware ranges from accelerator cards to super nodes. See the [official site](https://www.hiascend.com/).

### Is Ascend a GPU?

Officially, Ascend processors are positioned as NPUs for AI computing rather than graphics processors. A GPU is a processor category that originated in graphics rendering and extended to general-purpose parallel computing; the term distinction is covered in this site’s GPU entry.

## Sources

- [Huawei Ascend official site](https://www.hiascend.com/)
