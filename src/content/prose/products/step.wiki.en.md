---
entityType: product
entity: step
locale: en
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Step model family: StepFun’s general-purpose AI models | Next Token Wiki'
seoDescription: 'The Step model family from StepFun, Step 5 Preview specifications and open weights, the API platform, and how the show discussed it.'
---

## What the Step family is

Step is the general-purpose AI model family from [StepFun](/en/wiki/brands/stepfun) (阶跃星辰), spanning reasoning, coding, multimodal and agent tasks; speech-oriented models are covered in the [Step-Audio](/en/wiki/products/step-audio) entry. Models are released on the official model pages and the `stepfun-ai` GitHub organization, with API access through the StepFun platform.

## Step 5 Preview

Step 5 Preview is the new flagship model that StepFun open-sourced in October 2026. The official GitHub repository describes it as "StepFun's flagship model for agentic work": a sparse Mixture-of-Experts model with 600B total parameters and 27B active parameters, supporting up to 1 million tokens of context and accepting text, image and video inputs, with official claims of strong performance in software engineering and professional knowledge work, particularly finance. Weights are published on Hugging Face and ModelScope, and the repository documents deployment with vLLM, Transformers and SGLang.

The Preview in the name marks it as a preview release: capabilities and deployment requirements may change before a final version. Specifications follow the [official model page](https://www.stepfun.com/step-5-preview), the [tech blog](https://platform.stepfun.ai/blog/inside-step-5-preview) and the [developer documentation](https://platform.stepfun.ai/docs/en/guides/models/step-5-preview).

## In the show

In Weekly #006's chapter on polarized model experiences, 向阳乔木 (Xiangyang Qiaomu) cited OpenRouter usage-rank data (82 trillion tokens a week from Chinese models) and said [StepFun ranked near the top](/weekly/006/transcript#quote-3a8ee430783398f4121e), with 杨攀 (Yang Pan) confirming it was [Step 5 Preview](/weekly/006/transcript#quote-2b5c207315bdc63fdec5). This is a participant's retelling of a usage ranking; see the [Chinese transcript](/weekly/006/transcript#chapter-22).

## FAQ

### What is Step 5 Preview?

StepFun's flagship model, open-sourced in October 2026: a sparse MoE with 600B total and 27B active parameters, up to 1 million tokens of context, accepting text, image and video inputs, positioned for agent and coding work. See the [official model page](https://www.stepfun.com/step-5-preview).

### Is Step 5 Preview open source, and where can I get it?

Yes — weights are on [Hugging Face](https://huggingface.co/stepfun-ai/Step-5-Preview) and ModelScope, with code and deployment notes in the [GitHub repository](https://github.com/stepfun-ai/Step-5-Preview). The official repository uses the StepFun Model License 1.0: the weights are downloadable, but commercial use and attribution carry extra conditions (commercial products past certain scale thresholds must display "Powered by StepFun AI", and hardware-device and large MaaS uses require a separate commercial license); see the repository's [LICENSE](https://github.com/stepfun-ai/Step-5-Preview/blob/main/LICENSE) file.

### Where is StepFun's API?

Through the StepFun platform at [platform.stepfun.ai](https://platform.stepfun.ai/); model names and calling conventions follow the official documentation.

### Which other models are in the Step family?

Beyond Step 5 Preview, the official GitHub organization maintains the Step-Audio speech series (see the [Step-Audio](/en/wiki/products/step-audio) entry) and Flash-series models among others; current offerings are those on [official channels](https://www.stepfun.com/).

## Sources

- [Step-5-Preview GitHub repository](https://github.com/stepfun-ai/Step-5-Preview)
- [StepFun official website](https://www.stepfun.com/)
- [StepFun API platform](https://platform.stepfun.ai/)
