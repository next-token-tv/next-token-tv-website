---
entityType: product
entity: deepswe
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'DeepSWE: Datacurve’s long-horizon software-engineering benchmark | Next Token Wiki'
seoDescription: 'What the DeepSWE benchmark measures, how its tasks are designed, how it differs from SWE-Bench and Terminal-Bench, and the Weekly episode that mixed the two up.'
---

## What DeepSWE is

DeepSWE is a coding-agent benchmark published by the research company Datacurve at [deepswe.datacurve.ai](https://deepswe.datacurve.ai/), announced on May 18, 2026 and positioned as “a benchmark for long-horizon software engineering.” It evaluates coding agents rather than models directly, measuring how they handle large, multi-step, original software-engineering tasks.

## Benchmark design and boundaries

Datacurve’s stated motivation: public coding benchmarks available at the time (such as SWE-Bench Pro) mostly consisted of small, single-file changes averaging about 120 lines of code, which failed to separate frontier models. DeepSWE’s tasks have reference solutions averaging about 668 lines of code. Datacurve also audited the verifiers of existing benchmarks, reporting 8% false positives and 25% false negatives, and made verifier reliability part of DeepSWE’s design. When new frontier models launch, Datacurve re-runs DeepSWE and updates the [leaderboard on its site](https://deepswe.datacurve.ai/).

On boundaries: DeepSWE is an evaluation benchmark, not a model, an agent, or a development tool; leaderboard scores reflect a specific task set and do not guarantee results on real projects. Similarly named benchmarks and projects abound — [Terminal-Bench](/en/wiki/products/terminal-bench), for example, is a separate benchmark from a different team, so confirm the referent before citing results.

## Discussion in the show

In Weekly #002’s chapter “If Astra can use a computer, is that AGI?”, Yang Pan brought up a coding benchmark that had rolled out versions 2.0, 3.0, and 4.0, where [most models dropped sharply on the new version while Anthropic’s models stayed stable](/weekly/002/transcript#quote-187fd0124b30c8c736f8). Orange first [guessed the benchmark was DeepSWE](/weekly/002/transcript#quote-dd24c125cfe948d0caa7); Yang Pan said it was a different one, and Orange settled on Terminal-Bench, where the discussion landed. The exchange is a live example of how easily DeepSWE and Terminal-Bench get confused. The facts about DeepSWE on this page come from Datacurve’s own materials and are unrelated to that segment; see the [Chinese transcript chapter](/weekly/002/transcript#chapter-06).

## Frequently asked questions

### What is DeepSWE?

A software-engineering benchmark published by Datacurve on May 18, 2026, evaluating coding agents on large, multi-step, original tasks that test long-horizon engineering ability.

### Who is behind DeepSWE?

Datacurve, a research company publishing benchmarks, datasets, and evaluation research; see its [research page](https://datacurve.ai/research).

### How does DeepSWE differ from SWE-Bench?

Per Datacurve, SWE-Bench-style benchmarks center on single-file changes of roughly 120 lines, while DeepSWE’s reference solutions average about 668 lines, plus an audit of benchmark verifiers themselves (8% false positives, 25% false negatives).

### Are DeepSWE and Terminal-Bench the same thing?

No — they are independent benchmarks from different teams. In Weekly #002, Orange guessed the benchmark Yang Pan described was DeepSWE and then corrected himself to Terminal-Bench; the confusion is common.

### Where can I see the DeepSWE leaderboard?

On the official site, [deepswe.datacurve.ai](https://deepswe.datacurve.ai/); Datacurve says it re-runs and updates results as new frontier models launch.

## Sources

- [DeepSWE official site](https://deepswe.datacurve.ai/)
- [Datacurve research introduction](https://datacurve.ai/research)
