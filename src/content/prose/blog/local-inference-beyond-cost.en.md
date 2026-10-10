---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--003
  - next-token-weekly--004
status: published
title: 'Local Inference Is Worth More Than the Money It Saves'
description: 'Buying an always-on machine does not mean you have to run models on it. This article pulls apart three needs — local inference, an always-on device, and privacy control — and judges when each is worth adding to your own setup.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-28'
---

Two identically named machines can be used in completely different ways. One 128GB desktop runs open-source models as a local inference box; another 32GB machine in the same series never runs local models at all — it serves as an always-on development machine and has not been shut down since the day it was bought. These two cases from recording time show that "buy an always-on computer" and "run models on it" are two separate decisions. Always-on devices have their own constraints, but those constraints have nothing to do with models: smaller-memory machines tend to hit the ceiling on heavy engineering workloads, and cooling becomes the bottleneck before compute does. To discuss whether local inference is worth it, it is best to pull the tangled needs apart item by item.

## The savings math mostly does not balance

The most-cited reason for local inference is saving money. One extreme calculation concluded that a high-end desktop running models around the clock would break even in about two years; at ordinary people's actual usage frequency, the payback period has to be counted in decades — because the device cannot run at full load all the time. Counted purely in saved API fees, self-hosting is almost never worthwhile for an individual.

Vendors do the math differently. When request volume is large enough, moving some tasks onto users' devices is actually cheaper: at recording time, one vendor built a local model into its browser product, auto-configured after installation, so that specific tasks complete on-device; browser makers have long shipped small models that download on demand. On-device compute is an expensive idle asset for an individual, but a lever for spreading costs for a platform — the same hardware, viewed from the two sides, produces completely different accounts.

## What you can run is decided by VRAM and quantization

The first gate for local inference is VRAM. Slightly larger models do not fit on a single consumer GPU, and multi-GPU setups exceed what an individual can take on in both cost and complexity. Quantization therefore becomes key: one case circulating at recording time was ternary quantization of a 27B model, shrinking it to about 5.6GB with a claimed 98.2% of aggregate performance retained, runnable on a single GPU. Claimed numbers like that come from the vendor's own evaluation; whether they hold on specific tasks still needs re-testing. Speed, too — one user got roughly thirty tokens per second on their own machine and concluded "it's already usable"; that is a single case on specific hardware with a specific model, not a general benchmark.

Judgments about parameter scale also change with time. The wave of Flash-tier open-source models around recording time noticeably expanded the options for desktop machines: one user tried installing several open-source models in turn on a large-memory machine — mid-sized model families through the new Flash tiers — and concluded that the machine could run them at acceptable speeds. That also means the feasibility list for local inference needs to be recalculated regularly; old conclusions cannot be carried over as-is.

## Some value does not convert into the payback math

Counting savings alone misses local inference's real points of difference. Data never leaves the machine: tasks involving personal records or private files need not be uploaded to any service. Offline availability: when the network is down or a service is discontinued, local models and pipelines keep running. Control: you decide when to upgrade and when to replace, unaffected by vendor decisions — a cloud model's version and pricing can change at any moment; local weights will not.

These three values depend heavily on the specific person and situation. Professions handling sensitive data, places with unreliable networks, and wariness of depending on a single vendor's pricing all shift where the balance sits; for users without those constraints, they are worth almost nothing. Cloud models also have a lifecycle problem: gains in inference efficiency push vendors to keep delisting older versions, and any workflow depending on a specific version faces migration at any moment; local weights are untouched by such arrangements. That is why the same payback calculation leads different people to completely different conclusions — the difference is not just the electricity price, but all these factors that cannot be converted into money.

## Edge and cloud are a division of labor, not a replacement

Local inference does not have to shoulder every task, either. The more realistic division of labor: the mechanical, high-frequency everyday operations inside software — organizing files, renaming things, running a one-off classification — go to small on-device models; the heavy lifting of creating complex systems and products stays on large cloud models. The value of an always-online device lies here too: it stands by at all times for requests that do not need top-tier intelligence but do need an immediate response.

Worth noting: the always-on execution environment itself is becoming a business of its own. Demand for always-on cloud-hosted machines is expected to grow fast as agents spread — agents need a "computer that never goes offline," but that computer can be rented rather than bought. That makes the local trade-off clearer: put the non-price values — privacy, offline use, control — back on the scale, then decide which parts are worth keeping in your own hands.

## Sources

- [The vendor logic behind browsers shipping local models](/en/weekly/001/transcript#quote-f05d5d8ed57048cbfd7a)
- [The experience of always-on devices, and using them without running models](/en/weekly/001/transcript#quote-2dffb584117bf2af5f78)
- [Quantization, VRAM, and what scales can run locally](/en/weekly/003/transcript#quote-283872caf0ef6a74a2ce)
- [The demand judgment for always-on cloud-hosted machines](/en/weekly/004/transcript#quote-c7845e194896b946c645)
