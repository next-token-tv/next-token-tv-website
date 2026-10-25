---
entityType: product
entity: nvidia-dlss
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'NVIDIA DLSS: The Neural Rendering Family｜Next Token Wiki'
seoDescription: 'The components of NVIDIA DLSS (Super Resolution, Frame Generation, Ray Reconstruction, DLAA and DLSS 5 3D-Guided Neural Rendering), how it is enabled, and the show discussion.'
---

## Definition

NVIDIA DLSS is NVIDIA’s family of neural rendering technologies: the official page describes it as a suite that uses AI to boost FPS, reduce latency and improve image quality in games. See the [official DLSS page](https://www.nvidia.com/en-us/geforce/technologies/dlss/).

## How it works

The official page lists the family’s members: Super Resolution uses AI to output higher-resolution frames from a lower-resolution input to boost performance; Frame Generation, Multi Frame Generation and Dynamic Multi Frame Generation (introduced with DLSS 4.5, together with a second-generation transformer model) generate additional frames; Ray Reconstruction uses AI to generate higher-quality pixels for intensive ray-traced scenes; DLAA uses the same Super Resolution technology to construct a high-quality image at native resolution; and DLSS 5 adds 3D-Guided Neural Rendering, which uses AI to infuse game scenes with lifelike lighting and materials on GeForce RTX 50 Series GPUs, with the final output tuned by developers for each game. These features take effect only when a game integrates them, and availability depends on the game and GPU model.

## Usage

In games that support DLSS, players enable Super Resolution, Frame Generation and related options to raise frame rates or image quality; developers targeting RTX GPUs can integrate DLSS components into their rendering pipelines. The features appear as separate options in a game’s graphics settings, and which games support which features is defined by the official page and each game’s documentation.

## Related and confusable terms

- DLSS 5 vs. the DLSS family: DLSS 5 is a member of the family (3D-Guided Neural Rendering), not a standalone product; game support for DLSS 4.5, DLSS 5 and other versions varies.
- DLSS vs. ray tracing: ray tracing is a lighting-computation rendering method, while DLSS is an AI neural rendering technology; Ray Reconstruction is the family member that works alongside ray tracing, so the two sit at different layers.
- DLAA vs. DLSS Super Resolution: both use the same AI technology; DLAA builds a high-quality anti-aliased image at native resolution and does not target higher frame rates.

## In this episode

In Weekly #007, in the chapter "AI 游戏破圈：移植、网页游戏与上瘾机制" (AI games breaking through: ports, web games and addiction loops), 歸藏 (Guizang) mentions that community porters [added DLSS 5 and frame generation to the PC port of Bloodborne](/weekly/007/transcript#quote-652b44db3666d879be65). This is the participant retelling community porting news, not an NVIDIA or game-studio statement; DLSS 5’s official definition is on the [official DLSS page](https://www.nvidia.com/en-us/geforce/technologies/dlss/). See the [episode 007 chapter](/weekly/007/transcript#chapter-06) (Chinese transcript).

## Frequently asked questions

### What is DLSS?

NVIDIA’s family of neural rendering technologies that uses AI to boost FPS, reduce latency and improve image quality; members include Super Resolution, Frame Generation, Ray Reconstruction, DLAA and DLSS 5’s 3D-Guided Neural Rendering.

### Is DLSS a game?

No. It is a set of graphics technologies that games must integrate; support depends on the game and the [NVIDIA](/en/wiki/brands/nvidia) GPU model.

### What is DLSS 5?

Per the official page, DLSS 5 adds 3D-Guided Neural Rendering: AI-generated lifelike lighting and materials for game scenes, on GeForce RTX 50 Series GPUs, with the final output tuned by developers for each game.

### How do I turn on DLSS?

It depends on the game: games that support DLSS usually expose Super Resolution, Frame Generation and related toggles in their graphics settings, and some features require RTX GPUs; supported games and features are listed on the [official DLSS page](https://www.nvidia.com/en-us/geforce/technologies/dlss/) and in each game’s documentation. (The enabling path is an editorial summary; there is no single universal switch.)

## Sources

- [NVIDIA official DLSS page](https://www.nvidia.com/en-us/geforce/technologies/dlss/)
- [NVIDIA brand entry](/en/wiki/brands/nvidia)
