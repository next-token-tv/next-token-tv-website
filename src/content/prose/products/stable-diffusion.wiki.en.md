---
entityType: product
entity: stable-diffusion
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Stable Diffusion: Open-Weight Image Generation Model Family, Versions and Licensing｜Next Token Wiki'
seoDescription: 'What the Stable Diffusion family is, its release history and current versions, how to obtain and license it, and how it differs from Midjourney.'
---

## What Stable Diffusion is

Stable Diffusion is a family of open-weight image-generation models from Stability AI: you give a text description, and the model produces a matching image. It was developed by CompVis (LMU Munich), Runway, and Stability AI among others, and publicly released on August 22, 2022; because the weights are openly downloadable, it became one of the most widely studied and extended families of image-generation models. The Wikipedia article records this early history and the version lineage (see [Sources](#sources)).

## Versions and how to get it

The version boundaries matter: the 2022 releases were the 1.x series (published by CompVis), SDXL followed in July 2023, Stable Diffusion 3 entered early preview in February 2024, and Stable Diffusion 3.5 was released on October 22, 2024. The current official [image models page](https://stability.ai/stable-image) lists Stable Diffusion 3.5 (Large, Turbo, Medium), SDXL (3.5 billion parameters), and SDXL Turbo among its members; the models actually on offer follow that page.

There are three main ways to use the family: self-host the models under a license from the [official licensing page](https://stability.ai/license); call them by usage through the Stability AI API (Platform); or use hosted entries such as the official cloud partners and Stable Assistant. Popular third-party interfaces (such as the various WebUI distributions) are not official Stability AI products; which version they load and how they are configured follow each project's own documentation.

On licensing: earlier versions used CreativeML OpenRAIL-M, while Stable Diffusion 3.5 uses the Stability AI Community License. The official licensing page states that the Community License is for researchers, developers, small businesses, and creators with less than $1M in annual revenue, and that enterprises exceeding $1M in annual revenue need the Enterprise License; the rights to generated images and commercial-use details follow the [official license text](https://stability.ai/community-license).

## How it differs from other image-generation products

Compared with [Midjourney](/en/wiki/products/midjourney), another image-generation product, the routes differ: Midjourney is a closed-source product from a research lab, used through its own service, while Stable Diffusion's defining trait is the openly downloadable weights, which allow self-hosting, fine-tuning, and integration into your own pipelines. The choice mainly comes down to whether local deployment and customization matter to you, and how you weigh the license conditions.

## In the show

In Weekly #003's chapter "把新模型接入现有 Agent" (connecting a new model to existing agents), Guizang mentions a community experiment with a newly released model: [someone drew a 24×24 or 30×30 grid and had the model predict, in parallel, what color every pixel should be, achieving image generation similar to Stable Diffusion or other diffusion models — and it could really draw something decent](/weekly/003/transcript#quote-95f3eddc0464471e29dd) (see the [episode 003 chapter](/weekly/003/transcript#chapter-08) in the Chinese transcript; an English transcript is not available). Stable Diffusion appears here only as a point of comparison for an alternative image-generation approach; the discussion is not about Stable Diffusion itself.

## FAQ

### What is Stable Diffusion?

A family of open-weight image-generation models developed by Stability AI and others: text in, images out, usable self-hosted or through the official API. See the [official image models page](https://stability.ai/stable-image).

### Where is the Stable Diffusion website, and where can I download it?

The official entry is [stability.ai](https://stability.ai/), with model and deployment information on the [image models page](https://stability.ai/stable-image). Model weights and licenses are obtained through the [official licensing page](https://stability.ai/license); download sites and bundled packages circulating online are not official channels.

### Is Stable Diffusion free? Is it open source?

It is an open-weight model family, not an unconditionally free service. The official licensing page states that self-hosting the core models is free when use is non-commercial or the user's annual revenue is under $1M (Community License), while enterprises with annual revenue above $1M need the Enterprise License; the API is billed by usage. Conditions follow the [official licensing page](https://stability.ai/license).

### Which Stable Diffusion versions exist now?

As of September 2026, the official image models page lists Stable Diffusion 3.5 (Large, Turbo, Medium), SDXL, and SDXL Turbo as the family members. The 1.x series from 2022 and other earlier releases also exist; third-party tools default to different versions, so confirm the actual version before use. Version information is on the [official page](https://stability.ai/stable-image).

### How does Stable Diffusion differ from Midjourney?

Stable Diffusion has open weights and can be self-hosted and fine-tuned under the Community License conditions; Midjourney is a closed-source service used through its website. The former wins on control and customizability, the latter on ease of use — the details are on both official pages and on our [Midjourney entry](/en/wiki/products/midjourney).

## Sources

- [Stability AI image models page](https://stability.ai/stable-image)
- [Stability AI license selection page](https://stability.ai/license)
- [Stability AI Community License](https://stability.ai/community-license)
- [Stable Diffusion 3.5 release announcement](https://stability.ai/news-updates/introducing-stable-diffusion-3-5)
- [Wikipedia: Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion)
