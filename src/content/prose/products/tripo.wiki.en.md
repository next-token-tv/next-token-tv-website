---
entityType: product
entity: tripo
locale: en
slot: wiki
updatedAt: '2026-11-16'
seoTitle: 'Tripo: AI 3D model generation service | Next Token Wiki'
seoDescription: 'What Tripo is, its text-to-3D and image-to-3D features, auto-rigging and AI texturing, and the episode 010 discussion of generating models for a single-file HTML game.'
---

## Tripo

Tripo (also known as Tripo AI) is an online 3D model generation service. Its [official page](https://www.tripo3d.ai/) describes it as an AI 3D model generator that "turns your text prompts or images into 3D models instantly", offered as the web-based Tripo Studio, a developer API, and a mobile app. The terms of service state that Tripo is operated by Holymolly Limited, a Hong Kong company. The team publishes open-source research under the VAST-AI organization, such as TripoSR, a single-image 3D reconstruction model released in March 2024 in collaboration with Stability AI (see the [official repository](https://github.com/VAST-AI-Research/TripoSR)).

## Main features

- Text-to-3D and image-to-3D: generating 3D models from a text prompt or a single image.
- AI texturing: full PBR texture sets that, per the official page, reach up to 8K and are ready for Unreal Engine, Unity, and [Blender](/en/wiki/products/blender).
- Auto rigging: skeletons and motion for humanoid or creature characters.
- Model processing and export: Smart Mesh quad meshes, Smart UV, high-detail models, and export formats including GLB, FBX, OBJ, USD, and STL/3MF for printing, plus plugins for Blender, Unity, Unreal, and other software.

On commercial use, the official FAQ states that "models generated using Tripo AI are generally available for commercial use", with the exact conditions governed by the [terms of service](https://www.tripo3d.ai/terms).

## Discussion in the show

Episode 010 discusses Tripo in the chapter "把模型、动作和音乐装进一个 HTML 游戏" ([packing models, actions, and music into a single HTML game](/weekly/010/transcript#chapter-05) in the Chinese transcript). [Guizang](/en/wiki/people/guizang) describes how he "[接的 Tripo](/weekly/010/transcript#quote-0473aafcc337a28c2cd5)" (hooked up Tripo) for the game he presented on the show: the generated 3D models had broken faces and were uneven, but rigging was still done on those models, with character actions built from the model skeletons; sword-move models were generated whole and then rigged one by one. He adds that throughout the process "[Blender 用了。但是没有启动过](/weekly/010/transcript#quote-e9db8c0b955c057a09b6)" (Blender was used, but never launched) — the rigging was carried out by the AI. In the same chapter, [Xiangyang Qiaomu](/en/wiki/people/xiangyang-qiaomu) says he downloaded the resulting HTML file at 100 MB and later compressed it to 30 MB, and that his AI told him it contained a large number of audio files and 3D models; Guizang adds that it packs more than 20 models, character actions, textures, 3 music tracks, and many sound effects. These are participant accounts of their own workflow, not official workflow documentation.

## Frequently asked questions

### What is Tripo?

An online 3D model generation service that creates 3D models from text prompts or images, with production features such as texturing and auto rigging; the entry point is the [official website](https://www.tripo3d.ai/).

### Can models generated with Tripo be used commercially?

The official FAQ states that generated models are generally available for commercial use; the exact conditions are in the [terms of service](https://www.tripo3d.ai/terms).

### How is Tripo related to Blender?

Tripo is a standalone 3D model generation service, not a Blender feature; the two connect through export formats (GLB, FBX, OBJ, and others) and an official Blender plugin. In episode 010, Guizang describes a workflow of generating models with Tripo, then rigging them and packing everything into a single HTML file.

### Does Tripo have an API?

Yes. The official developer API is at developers.tripo3d.ai, with a CLI available, and the product page has a dedicated Tripo API section.

## Sources

- [Tripo official website](https://www.tripo3d.ai/)
- [Tripo terms of service](https://www.tripo3d.ai/terms)
- [TripoSR official repository (GitHub)](https://github.com/VAST-AI-Research/TripoSR)
- [TripoSR technical report (arXiv:2403.02151)](https://arxiv.org/abs/2403.02151)
