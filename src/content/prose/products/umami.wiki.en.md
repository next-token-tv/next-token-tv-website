---
entityType: product
entity: umami
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Umami: open-source web and product analytics | Next Token Wiki'
seoDescription: 'How Umami collects traffic, behavior and conversion data without cookies, self-hosting versus Umami Cloud, and the Weekly #007 discussion (Chinese transcript).'
---

## Definition

Umami is open-source web and product analytics for understanding traffic sources, visitor behavior, and conversions. Officially it is a privacy-first analytics platform — "No cookies, no surveillance" — that can be self-hosted or used through the managed Umami Cloud. See the [official site](https://umami.is/).

## How it works

After a tracking script is embedded in a site, data accumulates in one dashboard covering pageviews, visitors, referrers and UTM attribution, events, funnels, and retention. The vendor states that no personally identifiable information is stored and that data is "never sold or shared", supporting GDPR and CCPA obligations. The code is open source under the MIT license on GitHub, and a read-only MCP server lets AI assistants query the data (per the official site, for Umami Cloud Pro+ or self-hosted v3.4 and above).

## Usage

It fits personal sites, blogs, and product teams that want traffic and behavior analytics in one tool. Because it is open source and self-hostable, it is also adapted into custom, self-owned analytics — for example, tracking AI crawler and personal-agent fetches alongside human visits.

## Related and confusable terms

Umami shares its name with the Japanese word for the savory taste, so culinary and dictionary results crowd searches. The self-hosted open-source version and Umami Cloud are two ways of running the same software; capability differences are documented in the [official docs](https://umami.is/docs).

## Episode discussion

In Weekly #007, in the chapter “Agent 流量、个人网站与开放接口” (Chinese transcript), Xiangyang Qiaomu describes an in-progress analytics service that would measure both human visits and AI crawler or personal-agent fetches, [noting that it “is based on the open-source Umami” and is meant for personal use first](/weekly/007/transcript#quote-7b1f7eddfc944a1032c0). This is a speaker's account of a third-party project, not a description of Umami itself. See the [chapter](/weekly/007/transcript#chapter-04).

## Frequently asked questions

### Can I self-host Umami?

Yes. The official materials distinguish a self-hosted open-source deployment from the managed Umami Cloud; setup instructions are in the [official docs](https://umami.is/docs).

### How is Umami different from Google Analytics?

The official positioning is cookie-free, non-tracking analytics whose data is never sold or shared, with open-source code you can self-host. Compare the capabilities listed on the [official site](https://umami.is/).

## Sources

- [Umami official site](https://umami.is/)
- [Umami documentation](https://umami.is/docs)
- [umami-software/umami repository (GitHub)](https://github.com/umami-software/umami)
