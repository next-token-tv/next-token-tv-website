---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--004
  - next-token-weekly--005
status: published
title: 'From Selling Tokens to Delivering Services: Where AI Applications Make Money'
description: 'Resale discounts on model APIs keep thinning; profit has to be earned by turning tokens into usable services. This article maps the cost structure of AI applications and the opportunity in "experience arbitrage."'
updatedAt: '2026-10-10'
publishedAt: '2026-10-08'
---

Want to use a multimodal model in your product? First you wade through an ocean of documentation to find the model's name, then work out how to call it; once you finally get it connected, the time to first token can be on the order of a hundred times worse than other providers' — one real integration experience from recording time. Between buying tokens and turning them into an experience lies a whole stretch of engineering. The question of where profit lives is hiding in exactly that distance.

## The resale math does not add up

The most direct business idea is resale: get a discounted price, sell at a markup. The reality is that the discount is thin. At recording time, someone reported being quoted a twenty-percent-off rate for reselling mainstream models' APIs. The baseline for a viable business is roughly a forty percent gross margin; a twenty-point spread means losing money on every deal. For top models, the official channels already offer discounts themselves, leaving middlemen no room at all. It is even more true when models are in short supply — with no spare capacity, vendors have no reason to give discounts.

Another common accounting move is collecting upfront: bill a full year's subscription at once and book it in the current period. That is cash flow, not profit — the service has not been delivered, and the costs are still ahead. Treating those numbers as profitability was a common error in that period's application-layer funding stories. With capital once again concentrating into a few tracks, there is less room to subsidize losses with fundraising, so the profit question can no longer be dodged.

## Margin only opens up once models get cheap

The turn comes from the supply side. A wave of low-priced, high-speed models around recording time gave the application layer real margin room for the first time: for the same reply, the same judgment, cost fell to a small fraction of what it was, leaving room to maneuver on service pricing. One case relayed in the discussion: an enterprise services company used to pay model vendors more than every dollar of revenue it took in; after switching to a self-trained version based on an open-source model, its gross margin finally turned positive. That is the relayer's account, not independently verified, but the mechanism is clear: when model spending is large enough to swallow gross margin, an application company's earnings have really been working for the model vendors all along.

This is also the context for the line "don't be shy about selling tokens." All the engineering the application layer does — interfaces, caching, scheduling, verification — ultimately exists so that users are willing to consume tokens there. Only by admitting this can you work out which part of the money you are actually earning.

## Tokens are a unit of account, not a product

Comparing tokens to money was fashionable at recording time: model capability as the hard currency of the digital world — even a payments company's acquisition of a model-routing platform was read as an early bet on "token settlement." The metaphor has explanatory power, but it misleads easily — a currency's value lies in being universal, while the application layer's value lies precisely in not being universal.

Users have never paid for tokens themselves, but for the certainty behind them: availability, latency, output formats, fallbacks when things break, and the assurance that results can be safely handed to the next step. The same tokens, fetched from a cloud vendor's console versus from a product that just works, are entirely different experiences. Cloud vendors sell APIs the enterprise way, while users often just want to get things running — that gap is the opportunity.

## Earning the money in the last stretch of distance

Hence so-called experience arbitrage: integrate the models that are hard to integrate, smooth out the parameters that are hard to tune, so that users and agents can call them directly. It is most visible with multimodal and content-generation models — strong capability, but the interfaces are scattered across each vendor's docs; whoever assembles them into a frictionless service is earning money for engineering and experience. The position is not short of people trying it; what it lacks is people who treat the interface service itself as a product. The direction favored in the discussion was a one-stop interface covering an entire class of multimodal models — video, images, and more — precisely because that part is the hardest to read and the most laborious. Opportunities like this need no exclusive models — only the stretch of distance that turns "it works" into "it's good to use."

The cost structure is still shifting. Inference costs are falling, while the compute hardware that running agents at scale needs is getting more expensive, so the build-versus-rent math is rewritten in real time as prices move. What does not change is the position: a pure discount-resale business has no moat; profit belongs to those who turn tokens into dependable services. The cheaper models get, the clearer the value of that distance — it is the application layer's real source of gross margin.

## Sources

- [The integration cost of multimodal models](/en/weekly/001/transcript#quote-2c8334a1b5f3e32dd231)
- [Don't be shy about selling tokens](/en/weekly/001/transcript#quote-399df2fd435fe42658e5)
- [The tokens-as-currency metaphor](/en/weekly/001/transcript#quote-ebd320ef41ad24c06f00)
- [Real-world constraints on the application market](/en/weekly/001/transcript#quote-0783c632245d53cdf8af)
- [The relayed account of an open-source model swap turning gross margin positive](/en/weekly/004/transcript#quote-36409c36b11adf09038f)
- [The background on rising hardware costs](/en/weekly/005/transcript#quote-f1bd249d3df8eb132717)
