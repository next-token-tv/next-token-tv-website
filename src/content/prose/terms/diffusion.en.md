---
term: diffusion
locale: en
updatedAt: "2026-10-11"
---

## Definition

A diffusion model is a generative model trained to reverse a gradual noising process: during training the model learns to predict and remove noise at each step; at generation time it starts from pure noise and denoises step by step to produce images, audio and other samples.

## How it works

The process has two directions: a fixed forward process that gradually turns data into noise, and a learned reverse process that restores the data step by step. Diffusion models are known for high output quality and stable training, at the cost of multi-step inference that is usually slower than single-pass generators.

## Usage

Diffusion models are widely used for text-to-image generation, video and audio synthesis, image restoration and super-resolution, and they underpin many modern speech synthesis systems.

## Related and confusable terms

[LoRA](/en/wiki/terms/lora) is often used as an efficient fine-tuning method for diffusion models: one is the model itself, the other is an adaptation technique, and they frequently appear together in community model sharing.
