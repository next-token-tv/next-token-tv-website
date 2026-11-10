---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'An Agent Visited Your Website. Why Doesn’t It Show Up in Visitor Stats?'
description: 'Page tracking, server requests, and AI citations measure different things. Keeping them separate helps you understand how your content is accessed without mistaking crawl counts for reader growth.'
updatedAt: '2026-11-10'
---

An Agent may have read an article without changing your visitor stats, and that does not necessarily mean tracking is broken. If a client downloads only the article text and does not run the page’s tracking script, that read may not generate a browser-side visit event.

In episode 7, we mentioned an experiment by Jin’gang: using Umami to bring access logs and page-level JavaScript tracking together. The project has just launched, and the site still has little traffic, so it is not yet possible to use it to judge the share of traffic from AI versus humans. Combining the two data sources first raises a question of measurement definitions.

## One page visit can generate many requests

[Umami’s setup guide](https://docs.umami.is/docs/collect-data) uses a web tracking script to collect data. A client that only reads HTML may go uncounted, while an automated browser that runs the script may also generate events. Script-based stats therefore cannot serve as a measure of human visits on their own.

Server or CDN logs record requests. When a browser opens an article, it may go on to request images, fonts, and APIs; an Agent may also read the same URL repeatedly. Adding up all these requests produces a number much larger than the number of readers.

A user clicking a source in an AI answer is another, separate visit. It may carry an identifiable referral source, or it may not. Logs from your own site alone usually cannot show how many times an article appeared or which answers included it.

| Data | What it is useful for observing | Gap to keep in mind |
| --- | --- | --- |
| Page script events | Page views and on-site behavior | Misses reads that do not run scripts and may include automated browsers |
| Server or CDN requests | Paths, response status, and resource costs | One visitor generates multiple requests |
| Referral sources and subsequent behavior | Identifiable external clicks and the actions that follow | Does not cover all AI citations and clicks |

## How much can existing crawler tools see?

Cloudflare AI Crawl Control already provides views of AI crawlers, operators, and request activity. The measurement gap raised in the episode should not be taken to mean that no relevant tools exist.

[Cloudflare’s documentation](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/) explains that its free plan relies on User-Agent strings to identify known AI crawlers that actively declare their identity. The resulting figure is the number of requests identified under that rule; it cannot be generalized to all Agent activity.

Site owners can start by checking a few things with clear practical uses: whether the article body was returned successfully, whether an old URL keeps returning errors, whether a Markdown entry point was read, and whether a crawler frequently requests invalid paths. Even without identifying every client, these checks can help you fix links and responses.

## To calculate a share, first align what you are counting

Suppose there are 1,000 automated requests and 100 page views in a day. Dividing one by the other is meaningless. The two figures may include duplicates, miss activity, and use different units.

If you want to compare access to article text, start by aligning the time period and path scope, excluding static assets, and recording successful requests, failed requests, and how clients were identified separately. Even after doing that, the conclusion should be described as the share of a particular type of request, not the composition of your readership.

If your goal is to find out whether AI brought in new readers, look separately at clicks with identifiable sources and whether those visitors continued reading. If your goal is to reduce service costs, look at request frequency, cache hits, and unusual paths. When a report is tied to the decision it is meant to inform, its numbers are less likely to be misused.

## Related materials

- [The attempt to combine logs with page scripts](/en/weekly/007/transcript#quote-af0116525cd7e9cf3cf4) and its [Umami source](/en/weekly/007/transcript#quote-7b1f7eddfc944a1032c0)
- [The project is not yet enough to judge the share of AI versus human traffic](/en/weekly/007/transcript#quote-f4e0cb51e97175f4e4a2)
- [A single read triggered by a user task](/en/weekly/007/transcript#quote-49111cf322364fcee17d)
- [Umami: Collect data](https://docs.umami.is/docs/collect-data), accessed October 26, 2026.
- [Cloudflare: Manage AI crawlers](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/), accessed October 26, 2026.
