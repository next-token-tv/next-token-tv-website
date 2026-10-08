---
entityType: product
entity: strata
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Strata: an open-source local inference engine for consumer hardware｜Next Token Wiki'
seoDescription: 'What Strata is: an MIT-licensed engine that runs Qwen3.8-Flash-Next on consumer PCs, its hardware requirements, local API serving, and the Next Token discussion.'
---

## What Strata is

Strata is a free, open-source (MIT license) local inference engine published on GitHub by user Niko1221. Its goal is to run large language models — models that normally need servers — on ordinary consumer PCs. The official README says Strata runs [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) from the Qwen team, a 125-billion-parameter mixture-of-experts model with 24,576 experts, and spreads its work across the graphics card, RAM and SSD so that a home graphics card with 12 GB of VRAM can take part. Quantized versions come from ISTA-DASLab, UkisAI and Unsloth, and the engine uses parts of llama.cpp/ggml.

## What it does and its limits

- **Requirements**: the official list asks for an NVIDIA GeForce RTX 20/30/40/50 or specified AMD Radeon card with 12 GB or more of VRAM, 32 GB or more of RAM, about 80 GB of disk, and Windows 10/11 or Linux; two or three cards can share the model.
- **Install**: `START-HERE.bat` on Windows or `./setup.sh` on Linux detects the hardware, picks a quantization level and downloads a model of roughly 70 GB.
- **How it works**: the busiest experts stay on the graphics card, all of them live in RAM, the processor handles the rest, and the SSD holds a lookup table. Speculative decoding — a small model guesses, the big one verifies — yields what the README reports as a 1.6–1.8x speedup.
- **Speed**: official measurements on an RTX 5070 (12 GB) are 53–94 tokens/s generation and 1,620–2,650 tokens/s prompt reading, depending on the quantization level; full tables are in the repository docs.
- **Interfaces**: a local web chat at `127.0.0.1:8080`, plus an OpenAI-compatible API (`/v1`), an Anthropic-style endpoint (`/v1/messages`, usable as Claude Code's `ANTHROPIC_BASE_URL`), the OpenAI Responses API for Codex CLI, and an MCP server.

The officially supported systems are x86-64 PCs; Arm64 devices such as DGX Spark are covered by a third-party fork (see below).

## Discussion in the show

In Weekly #005's chapter "推理优化与成本下降" (Inference optimization and falling costs), [Orange relayed that Strata could raise inference speed "a hundredfold" and had "directly caused DGX prices to rise"](/weekly/005/transcript#quote-dfbbfd3135c8a0e4b298) — Chinese transcript, no English transcript is available for this episode. Yangpan added that this wave of optimizations mostly came from code rewritten for specific model architectures. These are the participants' relays and judgments: the official README reports a 1.6–1.8x speculative-decoding speedup and per-tier measured throughput, and no official source states a hundredfold claim; DGX Spark is also outside the officially supported systems, with Arm64 support coming from the community fork [shi3z/Strata-DGX-Spark](https://github.com/shi3z/Strata-DGX-Spark). The machine itself has its own entry: [NVIDIA DGX Spark](/en/wiki/products/nvidia-dgx-spark).

## Frequently asked questions

### What is Strata?

An open-source (MIT) local inference engine that spreads the Qwen3.8-Flash-Next model across a consumer PC's graphics card, RAM and SSD and serves it through local APIs; see the [official repository](https://github.com/Niko1221/Strata).

### What hardware does Strata need?

An NVIDIA/AMD card with 12 GB or more of VRAM, 32 GB or more of RAM, about 80 GB of disk, and Windows 10/11 or Linux. The full list is in the README's "What you need" section.

### How do I connect Claude Code or Codex to Strata?

Strata serves an Anthropic-style endpoint locally (set `ANTHROPIC_BASE_URL` for Claude Code) and the OpenAI Responses API for Codex CLI, plus an OpenAI-compatible `/v1` API and an MCP server. The default address is `127.0.0.1:8080`; setup details are in the repository documentation.

### Can Strata run on an NVIDIA DGX Spark?

Not officially — the original project covers x86-64 PCs only. DGX Spark (GB10 chip, Arm64) support comes from the third-party fork shi3z/Strata-DGX-Spark, compiled and tested by community members on their own machines.

## Sources

- [Strata official repository (Niko1221/Strata)](https://github.com/Niko1221/Strata)
- [Strata DGX Spark community fork (shi3z/Strata-DGX-Spark)](https://github.com/shi3z/Strata-DGX-Spark)
- [Qwen3.8-Flash-Next model page (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
