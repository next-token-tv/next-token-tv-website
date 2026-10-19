---
term: lora
locale: en
updatedAt: "2026-10-11"
---

## Definition

LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning method: the original model weights stay frozen, and only small low-rank matrices injected alongside selected layers are trained, adapting the model to a task or style with a fraction of the trainable parameters.

## How it works

LoRA approximates a weight update as the product of two small matrices, trains only that bypass during fine-tuning, and merges it back into the base weights afterwards. Compared with full fine-tuning this cuts training cost and memory use, and the resulting artifacts are small.

## Usage

LoRA is the standard way to customize large language models or diffusion models on limited hardware — teaching a text-to-image model a particular art style, or adapting a chat model to a vertical domain. Community fine-tunes are commonly shared as LoRA adapters.

## Related and confusable terms

[Diffusion models](/en/wiki/terms/diffusion) are often fine-tuned with LoRA: one is the model, the other the adaptation technique. LoRA is also distinct from quantization — quantization shrinks numerical precision, while LoRA decides what gets trained on top.
