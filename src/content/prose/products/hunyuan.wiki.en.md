---
entityType: product
entity: hunyuan
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Tencent Hunyuan: Model Family, API Access, and Hy4 Preview | Next Token Wiki'
seoDescription: 'Tencent Hunyuan explained: family members (Hy3, Hy4 preview), developer access via Tencent Cloud, open-source channels, use across Tencent products, and the Weekly #001 discussion.'
---

## What is Hunyuan

Hunyuan is [Tencent's](/en/wiki/brands/tencent) in-house model family, with its official site at [hunyuan.tencent.com](https://hunyuan.tencent.com/). The family spans language, vision, image generation, speech recognition, and translation. Members listed on the official site include:

- Hy3: a Mixture-of-Experts language model, officially listed at 295B/21B with 256K context length and three thinking modes, aimed at code, long-form text, reasoning, and agent execution.
- Hy Vision 2.0: a vision-language understanding model.
- HY Image 3.0 Plus: an image generation model with multi-turn interaction.
- Hy ASR 3.0 preview: a speech recognition model.
- Hy-MT2: a translation model covering 33 languages, including an on-device quantized variant.
- Hyra-1.0: an agent for research and engineering tasks.

In addition, Tencent Cloud documentation lists “混元语言模型（Hy4 preview）” (Hunyuan language model, Hy4 preview) in its [platform model list](https://cloud.tencent.com/document/product/1759), and the [billing document](https://cloud.tencent.com/document/product/1759/127342) also includes a Hy4 preview entry. It is offered in preview form; the official documentation does not state a release date or a preview end date.

## Use and boundaries

- Developer access: the Tencent Cloud Agent Development Platform (ADP) and TokenHub expose the Hunyuan language models Hy3 and Hy4 preview (see the [platform documentation](https://cloud.tencent.com/document/product/1759)); usage is billed in platform PU resources, with rates in the [official billing document](https://cloud.tencent.com/document/product/1759/127342). The official site also points to Tencent AI Studio for trial access.
- Open source: the official site lists GitHub, Hugging Face, ModelScope, and AtomGit as open-source channels.
- Use across Tencent products: according to the official site, Hunyuan capabilities are applied in Tencent Docs, QQ Browser, QQ, ima, Sogou Input, Tencent Video, WeChat official accounts, Tencent News, and Peace Elite, with related products including [WorkBuddy](/en/wiki/products/workbuddy) (CodeBuddy), Yuanbao, and ima.
- Boundaries: model membership, names, and statuses should be checked against the live official documentation. The "preview" label on Hy4 preview means it is a pre-release offering, not a general-availability version. The queuing experience mentioned on the show reflects the participants' experience at the time, not the current service state.

## Mentioned on Next Token

Discussion of Hunyuan on the show is concentrated in Weekly #001 (recorded in early September 2026).

In the opening model roundup, [Yang Pan listed Hunyuan 4 Preview among the models released that week](/weekly/001/transcript#quote-444d2f8b219e819e8720).

In the chapter “GLM 5.3 Flash 与 MiniMax H3” (“GLM 5.3 Flash and MiniMax H3”), [Guizang said capable, low-cost models attract attention, "including Hunyuan 4 Preview, and the trial experiences on WorkBuddy that many people follow"](/weekly/001/transcript#quote-045ad2d720d0a1ea162c), with Orange adding that the trial lasted two weeks. This is the show's relay of the trial channels available at the time.

In the chapter “国内模型为什么突然加速发布” (“Why Chinese models suddenly accelerated their releases”), [Xiangyang Qiaomu said he tried Hunyuan 4 Preview and Qwen 3.8 Max 0902 and "couldn't find a really good test case"](/weekly/001/transcript#quote-1588534f219b872a1069); Orange and Guizang felt the models were "all about the same".

In the chapter “滚动发版之后，Benchmark 还有没有意义” (“After rolling releases, do benchmarks still matter”), [Xiangyang Qiaomu judged that "Hunyuan is decent", while noting his queuing experience — "their own cards aren't enough for their own use; I queued at 8 a.m. and got position 4,000-something" — and observed the release cadence: "last month they released Hunyuan 3, this month it's already Hunyuan 4, one version a month"](/weekly/001/transcript#quote-fa747b45b646c6a5e68d). These are experiences and observations from the recording date. See [the episode 001 chapter](/weekly/001/transcript#chapter-13).

On talent movement, [Yang Pan relayed that "Hunyuan hired another person from Zhipu, one of the 5.3 people"](/weekly/001/transcript#quote-e75c0dc96674911d8b71) — an unverified industry rumor relayed on the show.

## FAQ

### What kind of model is Tencent Hunyuan?

Tencent's in-house model family, spanning language, vision, images, speech, and translation. The main language model is Hy3, officially listed as a 295B/21B Mixture-of-Experts model with 256K context; Tencent Cloud documentation also lists Hy4 preview. See the [official site](https://hunyuan.tencent.com/) and the [platform documentation](https://cloud.tencent.com/document/product/1759) for current members and statuses.

### What is the status of Hy4 preview?

Official documentation lists it as the Hunyuan language model (Hy4 preview), offered in preview form on the Tencent Cloud platform, with a billing entry in the official document. Tencent has not announced a release date or a preview end date; check the [official documentation](https://cloud.tencent.com/document/product/1759) for the latest list before integrating.

### Where can developers access the Hunyuan API?

Through the [Tencent Cloud Agent Development Platform (ADP) and TokenHub](https://cloud.tencent.com/document/product/1759), billed in PU resources with rates in the [official billing document](https://cloud.tencent.com/document/product/1759/127342); the official site also points to Tencent AI Studio for trial access.

### Is Hunyuan open source?

The official site lists GitHub, Hugging Face, ModelScope, and AtomGit as open-source channels, with open weights for some models (multiple variants of the translation model Hy-MT2 among them). Which versions are open and under which licenses should be checked on the repository pages.

### Which Tencent products use Hunyuan?

The official site lists Tencent Docs, QQ Browser, QQ, ima, Sogou Input, Tencent Video, WeChat official accounts, Tencent News, and Peace Elite, with related products including WorkBuddy (CodeBuddy), Yuanbao, and ima.

## Sources

- [Tencent Hunyuan official site](https://hunyuan.tencent.com/)
- [Tencent Cloud Agent Development Platform documentation (model list)](https://cloud.tencent.com/document/product/1759)
- [Tencent Cloud Hunyuan billing document](https://cloud.tencent.com/document/product/1759/127342)
- [Tencent AI Studio](https://aistudio.tencent.com/)
