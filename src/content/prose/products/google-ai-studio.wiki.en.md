---
entityType: product
entity: google-ai-studio
locale: en
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Google AI Studio: experiment with Gemini models in the browser | Next Token Wiki'
seoDescription: 'What Google AI Studio is, its prompt-testing and code-generation workflow, how it differs from the Gemini app, and how it was used on the show.'
---

## What Google AI Studio is

Google AI Studio is a web-based developer tool from [Google](/en/wiki/brands/google) for trying out [Gemini](/en/wiki/products/gemini) models, testing prompts and moving on to Gemini API development, at [aistudio.google.com](https://aistudio.google.com/). It sits in the Gemini API developer ecosystem: the Gemini app serves end users in conversation, while AI Studio serves model experimentation and application building.

## Uses and boundaries

The workflow described in the official quickstart: pick a model in the Playground and try prompts (chat, realtime streaming and other prompt types), adjust model parameters and safety settings in Run settings, and toggle tools such as structured output, function calling, code execution and grounding; when ready to build, use "Get code" to emit Gemini API code in your preferred language. API keys are created here too, after which applications follow the Gemini API model list and billing rules.

As a boundary: the capabilities seen in AI Studio belong to specific model versions and should not be generalized to the whole Gemini family; model availability, quotas and pricing change, and the [Gemini API documentation](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart) and [pricing page](https://ai.google.dev/gemini-api/docs/pricing) are the reference.

## In the show

In Weekly #006's chapter on speech that performs a character, 歸藏 (Guizang) described turning a novel into a dynamic Galgame-style demo with performed speech, saying [he did it in AI Studio because calling models there was convenient](/weekly/006/transcript#quote-48aa03f48cac92da24ec), fixing each character's voice and personality via the speech model. This is a participant's personal experience; see the [Chinese transcript](/weekly/006/transcript#chapter-25).

## FAQ

### Is Google AI Studio free to use?

Trying models and testing prompts happens in the browser; once an app calls the Gemini API it is billed under that API, which has a free tier and paid tiers. Current quotas and rates are on the [official pricing page](https://ai.google.dev/gemini-api/docs/pricing).

### Where do I create a Google AI Studio API key?

Sign in to [Google AI Studio](https://aistudio.google.com/) and create a key on the platform's API key page; the key is used to call the Gemini API. Do not put keys on public pages or in public repositories.

### How does Google AI Studio differ from the Gemini app?

The Gemini app (gemini.google.com) is the end-user assistant entry; AI Studio is where developers try models, refine prompts and generate Gemini API code in the browser. They serve different audiences.

### Which models does Google AI Studio support?

Models in AI Studio correspond to the Gemini API model list, including versions in different stability states; the available models are those in the [Gemini API model documentation](https://ai.google.dev/gemini-api/docs/models).

## Sources

- [Google AI Studio](https://aistudio.google.com/)
- [AI Studio Quickstart (Gemini API docs)](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)
- [Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing)
