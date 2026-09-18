---
entityType: product
entity: kimi
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Kimi: Moonshot AI’s model family, K3, and Kimi Code | Next Token Wiki'
seoDescription: 'What the Kimi model family covers, the Kimi K3 announcement, Kimi Code model IDs, API access and pricing, and what the Weekly show discussed about Kimi’s release cadence.'
---

## What the Kimi model family is

Kimi is [Moonshot AI](/en/wiki/brands/moonshot-ai)’s AI model family and the name of its end-user product. On July 22, 2026, Moonshot announced [Kimi K3](https://forum.moonshot.ai/t/kimi-k3-is-here-our-most-capable-model/480) on its official forum as its most capable model: a 2.8-trillion-parameter model with native vision and a 1-million-token context window, aimed at long-horizon coding, knowledge work, and reasoning, and served through the API (model ID `kimi-k3`). The end-user product [kimi.com](https://www.kimi.com/) is positioned around agentic coding and knowledge work, with entry points such as scheduled tasks, deep research, and agent swarms, plus product lines including Kimi Work, Kimi Code, and Kimi Claw. The developer interface is the separate [Kimi API Platform](https://platform.kimi.ai/).

## Usage and boundaries

Regular users work through [kimi.com](https://www.kimi.com/) for chat and agent tasks; developers register on the Kimi API Platform, create a key, and call models by ID. As listed on the platform in September 2026, the family includes K3 (flagship), K2.7 Code (coding), and K2.6 (general-purpose) tiers with different context lengths and rates; these cannot be inferred from the names alone.

The Kimi Code model documentation listed four model IDs as of September 2026: `k3` (1M context, documented as targeting higher membership tiers), `k3-256k` (a 256K-context variant), `kimi-for-coding` (carrying K2.8 Preview), and `kimi-for-coding-highspeed` (carrying K2.7 Code HighSpeed). They are called from the Kimi Code desktop app, CLI, and VS Code extension, and the documentation warns to use model IDs rather than version names. The K3 announcement and API documentation describe API access; the announcement does not mention open-weight downloads, so the official channels are authoritative on distribution.

In Chinese-language model comparisons, Kimi is frequently discussed alongside other Chinese model families such as [Qwen](/en/wiki/products/qwen), [GLM](/en/wiki/products/glm), and [DeepSeek](/en/wiki/products/deepseek); each family’s positioning is covered in its own entry.

## Discussion in the show

In Weekly #001’s chapter “国内模型为什么突然加速发布” (Why Chinese model releases suddenly accelerated), Orange [observed that releases had outpaced attention: “after K3 came Qwen 3.8 Max, which was about as capable, and nobody cared”](/weekly/001/transcript#quote-0f6450e1e0cc07ceb09c) — K3 serving as his reference point for release cadence.

In Weekly #002’s chapter “写作体验：不同模型各有所长” (Writing experiences differ by model), asked which Chinese models write well, Orange [said K3 is slightly better among domestic models](/weekly/002/transcript#quote-c2b7d697b92bf2d796c5), with Guizang and Xiangyang Qiaomu concurring while noting that everyone was focused on coding — participants’ impressions. In the chapter “Mistral、Kimi 与模型产品的不同选择” (Mistral, Kimi, and different product choices), Yang Pan [judged from its version number that Kimi’s new 2.8 is not K3-architecture](/weekly/002/transcript#quote-f5877d1e5a4ead841df9) and [speculated that since K3 is very large and every vendor ships low-cost models, Kimi would also need a Flash-class model](/weekly/002/transcript#quote-31dc54abe1a50f6cb37b); Orange [countered that K3, at the 1T scale, “can’t be made into a Flash”](/weekly/002/transcript#quote-7d29ecb44055590db940). These were speculations at recording time, not Moonshot’s product plans; see the [episode 002 chapter](/weekly/002/transcript#chapter-27) for context. The transcripts are in Chinese and no English transcript is available.

## Frequently asked questions

### Where are Kimi’s official website and entry points?

The end-user product is at [kimi.com](https://www.kimi.com/); developers use the separate [Kimi API Platform](https://platform.kimi.ai/); the Kimi Code product line has its own documentation and clients.

### Where do I get a Kimi API key?

Register on the [Kimi API Platform](https://platform.kimi.ai/), create a key, and follow the [official documentation](https://platform.kimi.ai/docs/overview); Kimi Code users fill in model IDs per its model documentation. Keep the key out of public websites and repositories.

### How much does Kimi K3 cost?

As of September 2026, the Kimi API Platform lists K3 at $0.30 per million tokens for cache-hit input, $3.00 for uncached input, and $15.00 for output. Rates change; check the [official pricing page](https://platform.kimi.ai/docs/pricing/chat) for current figures.

### Is Kimi K3 open source? Can I download the weights?

The official announcement describes K3 as accessed through the Kimi API Platform (model ID `kimi-k3`) and does not mention open-weight downloads. For the latest distribution arrangements, rely on Moonshot AI’s official channels.

### What is the difference between Kimi and Kimi Code?

Kimi is Moonshot AI’s model family and chat assistant; Kimi Code is the coding product line, calling models such as `k3` and `kimi-for-coding` from the desktop app, CLI, and VS Code extension. Their model lists and context tiers differ; see the [Kimi Code model documentation](https://www.kimi.com/code/docs/kimi-code/models.html).

### Why do searches for “Kimi” return other results?

Kimi is also a common given name, and results mix in Formula 1 drivers Kimi Räikkönen and Kimi Antonelli plus the Japanese title of the film Your Name. To find Moonshot AI’s models, add “Kimi AI,” “Moonshot AI,” or “Kimi K3” to the query.

## Sources

- [Kimi K3 announcement (Kimi Forum)](https://forum.moonshot.ai/t/kimi-k3-is-here-our-most-capable-model/480)
- [Kimi official website](https://www.kimi.com/)
- [Kimi API Platform](https://platform.kimi.ai/)
- [Kimi Code official model documentation](https://www.kimi.com/code/docs/kimi-code/models.html)
