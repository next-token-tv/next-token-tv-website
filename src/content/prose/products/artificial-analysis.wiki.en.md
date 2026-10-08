---
entityType: product
entity: artificial-analysis
locale: en
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Artificial Analysis: what the AI benchmarking platform measures | Next Token Wiki'
seoDescription: 'Learn how Artificial Analysis benchmarks AI models and API providers on capability, speed, and price, plus what Weekly episode 005 said about its index.'
---

## What Artificial Analysis is

Artificial Analysis is an independent benchmarking platform that performs intelligence, quality, performance, and price testing on AI models, inference API endpoints, and related systems. It covers both proprietary and open-weights models, and extends into speech, image, video, and music generation as well as coding agents. Its website, artificialanalysis.ai, publishes the results as public leaderboards, with the [official methodology documentation](https://artificialanalysis.ai/methodology) describing the testing approach.

## Key metrics and how to read them

Speed metrics include Time to First Token, output speed (tokens per second), and end-to-end response time. Price metrics include providers’ listed input/output rates, a blended price assuming roughly a 7:2:1 ratio of cache hits, input, and output tokens, and a workload-weighted Cost per Task. The platform’s Artificial Analysis Intelligence Index combines individual weighted benchmarks into a measure of overall model capability. When reading the leaderboards, note that results are listed separately for each model at each reasoning effort, and display names, API identifiers, and leaderboard entries do not always map one to one.

## Discussion in the show

In Weekly #005’s chapter “开源模型与 AI 意识的讨论” (Open models and the discussion of AI consciousness), [Yang Pan cites a newly released model’s ranking on the Artificial Analysis Index in the Chinese transcript](/weekly/005/transcript#quote-101917ed149a988beca1) to contrast vendor claims with third-party measurements, and [Guizang notes the same model ranked far down the board despite claiming to surpass a competitor](/weekly/005/transcript#quote-bb5fad610c4853d809c5); [Yang Pan adds that Artificial Analysis scores each model at each reasoning effort as a separate ranking](/weekly/005/transcript#quote-26a8d0c77ddcfe099641). These are the participants’ retellings of leaderboard data at the time; the figures quoted belong to the episode’s context, and rankings themselves shift as the index updates. The [episode 005 chapter](/weekly/005/transcript#chapter-20) holds the full context; an English transcript chapter is not available.

## Frequently asked questions

### What does Artificial Analysis do?

It runs independent third-party benchmarks on AI models and inference API providers, putting capability, speed, and price on a comparable footing. Results are published as public leaderboards on its [website](https://artificialanalysis.ai/).

### What is the Artificial Analysis Intelligence Index?

It is the platform’s composite capability index, built from weighted benchmarks measuring how models perform on a fixed workload, from which a cost per task is derived. The test composition and weights are described in the [official methodology](https://artificialanalysis.ai/methodology).

### How does Artificial Analysis measure speed and price?

Speed measurements cover Time to First Token, output speed in tokens per second, and end-to-end response time. Price is taken from providers’ listed rates, blended at a roughly 7:2:1 ratio of cache-hit, input, and output tokens, and combined with actual token consumption into a cost per task. Details are on the [methodology page](https://artificialanalysis.ai/methodology).

### How can I use Artificial Analysis to pick a model?

Compare candidate models on the same leaderboard across capability, speed, and cost, then look at the specialized boards for your task type (chat, coding, image generation, and so on). Leaderboards reflect the state at testing time, so check the [live site](https://artificialanalysis.ai/) before making decisions.

## Sources

- [Artificial Analysis website](https://artificialanalysis.ai/)
- [Artificial Analysis methodology](https://artificialanalysis.ai/methodology/)
