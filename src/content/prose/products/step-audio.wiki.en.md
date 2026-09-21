---
entityType: product
entity: step-audio
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Step-Audio: StepFun speech model family | Next Token Wiki'
seoDescription: 'The Step-Audio speech model family by StepFun — lineage and open-source releases (Step-Audio 2 mini), the Step-Audio 3 Realtime report, and show discussion.'
---

## What Step-Audio is

Step-Audio is the speech model family of StepFun (阶跃星辰)， covering speech recognition, spoken conversation, speech synthesis, and audio content generation. The family appears in two forms: some models are released open source on GitHub and Hugging Face, while newer models are published through the official blog and technical reports. The official blog has a [Step-Audio 3 Realtime page](https://static.stepfun.com/blog/stepaudio3/realtime/), and open-source code lives under the [stepfun-ai](https://github.com/stepfun-ai) GitHub organization. For the company behind it, see the [StepFun entry](/en/wiki/brands/stepfun).

## Lineage and open-source releases

- **Step-Audio (February 2025)**: On February 17, 2025, StepFun open-sourced the first-generation Step-Audio, which the repository calls "the first production-ready open-source framework for intelligent speech interaction." It included Step-Audio-Chat, built on the 130-billion-parameter text model Step-1, and the 3B-parameter Step-Audio-TTS-3B, covering multilingual dialogue, dialects, emotional tones, adjustable speech rates, and voice cloning; the code was released under Apache 2.0. That repository is now unmaintained and points to the newer series.
- **Step-Audio 2 (2025)**: The technical report came out on July 23, 2025; on August 29, Step-Audio 2 mini and mini Base were open-sourced under Apache 2.0 as end-to-end multimodal models for industry-strength audio understanding and speech conversation, with emotional reasoning, tool calling, and multimodal RAG; the mini Think variant followed on September 15, 2025.
- **Step-Audio 3 (September 2026)**: StepFun published a Step-Audio 3 Realtime page on its official blog. Technical reports show that StepAudio 3 Realtime (submitted to arXiv on September 12, 2026) is an audio-language foundation model for real-time spoken interaction, built around a listen–converse–think–act loop with full-duplex conversation, think-while-speaking reasoning, and a Voice Agent that executes tools. Technical reports for StepAudio 3 Gen (unified audio generation) and StepAudio 3 Music (long-form music generation) came in the same period. How each model is currently distributed belongs to the [official blog](https://static.stepfun.com/blog/stepaudio3/realtime/) and the [stepfun-ai organization page](https://github.com/stepfun-ai).

## Discussion in the show

Near the end of Weekly #003's chapter “用 GPT-6 Astra 造数据、训练小模型” (the model-training chapter of the [Chinese transcript](/weekly/003/transcript#chapter-12)), [Guizang reads out the news that StepFun released three voice models, mentioning the real-time StepAudio 3 Realtime, StepAudio 3 ASR Max, and full audio content generation](/weekly/003/transcript#quote-12e140d159c4f3ce1815). This is the show's relay of an announcement; specifics about ASR Max belong to StepFun's official releases. The rest of that chapter is a separate discussion about using large models to create training data.

## Frequently asked questions

### Who develops Step-Audio?

Step-Audio is developed by StepFun (阶跃星辰)； see the [StepFun entry](/en/wiki/brands/stepfun) for the company.

### Is Step-Audio open source?

Part of the family has been open sourced: the first-generation Step-Audio (February 2025) and the Step-Audio 2 mini series (August 2025) were released under Apache 2.0 with code and weights. Not every model in the family has an open-source repository; how newer models are distributed belongs to the official pages.

### Where is the Step-Audio GitHub repository?

Open-source code lives under the [stepfun-ai](https://github.com/stepfun-ai) GitHub organization. The [Step-Audio2 repository](https://github.com/stepfun-ai/Step-Audio2) has model documentation, deployment scripts, and demos; the first-generation [Step-Audio repository](https://github.com/stepfun-ai/Step-Audio) is kept for reference and points to the newer series.

### What is Step-Audio 3 Realtime?

Step-Audio 3 Realtime is StepFun's audio-language foundation model for real-time spoken interaction. Per the official blog and the technical report (arXiv, September 2026), it supports full-duplex conversation, think-while-speaking reasoning, and a Voice Agent for asynchronous tool execution. See the [StepAudio 3 Realtime technical report](https://arxiv.org/abs/2609.14005) for reported results.

## Sources

- [Step-Audio 3 Realtime official blog](https://static.stepfun.com/blog/stepaudio3/realtime/)
- [StepAudio 3 Realtime technical report (arXiv:2609.14005)](https://arxiv.org/abs/2609.14005)
- [StepAudio 3 Gen technical report (arXiv:2609.12945)](https://arxiv.org/abs/2609.12945)
- [stepfun-ai Step-Audio2 repository](https://github.com/stepfun-ai/Step-Audio2)
- [stepfun-ai Step-Audio repository](https://github.com/stepfun-ai/Step-Audio)
