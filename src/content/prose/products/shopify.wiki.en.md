---
entityType: product
entity: shopify
locale: en
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Shopify: the commerce platform, plans, and agent-facing APIs | Next Token Wiki'
seoDescription: 'What Shopify is, how its subscription plans work, Sidekick and agent tools, and the Weekly show discussion about shopping agents and Shopify.'
---

## What Shopify is

Shopify is a global commerce platform company that describes itself as "a complete commerce platform to sell online or in person," whether you run a side hustle, a retail shop, or a global brand. Merchants build their own online storefront on Shopify and get a commerce back office with it, rather than renting a stall inside a marketplace. The official site says it has operated "since 2006," and its own scale figures include: over $1 trillion in sales made by businesses on Shopify, more than 675 million unique shoppers who bought from Shopify stores in 2023, and 10% of U.S. ecommerce sales processed through Shopify. The company overview is at [shopify.com/about](https://www.shopify.com/about).

Shopify's product matrix covers the full retail chain: website building (website builder, themes, domains), sales channels (online store, Point of Sale, the Shop App, social and marketplace channels, B2B), checkout and Shopify Payments, shipping and finances, and marketing and analytics. The official site also lists Sidekick, an AI assistant for merchants, and an official app store with more than 13,000 apps.

## Usage and boundaries

For merchants, the core is "your own storefront plus a commerce back office": products, orders, inventory, payments, and customer relationships are managed in one place, while the storefront faces consumers through themes and domains. Subscription plans and transaction rates are time-sensitive; the official pricing page lists the Basic, Grow, Advanced, and Plus tiers, and current prices live on the [official pricing page](https://www.shopify.com/pricing).

For developers and AI applications, Shopify ships official agent-facing APIs: the developer docs record that Storefront MCP previously let AI agents search a store's catalog and manage carts over the Model Context Protocol, and that its catalog and cart tools have been retired in favor of the [Universal Commerce Protocol (UCP)](https://shopify.dev/docs/apps/build/storefront-mcp), whose endpoint requires each request to include an agent profile; merchants can also use a no-code Inbox agent. In other words, Shopify builds "being shopped by agents" as an official platform capability rather than leaving it to external scrapers.

## Discussion in the show

In Weekly #004's chapter "开放生态、资源与商业闭环" (Open ecosystem, resources, and the business loop), the participants discuss the relayed report that Muse could place orders on Amazon and was then blocked by Amazon. In that context, [Guizang jokes in the Chinese transcript that the Shopify CEO would be "crazy" about it — grinning from ear to ear](/weekly/004/transcript#quote-65426e4302ce787fd2f6), and [Yang Pan quips that "Shopify stock will rise right away"](/weekly/004/transcript#quote-c8d1061b1c5571c48583) — both expressing, in jest, the judgment that platforms welcoming shopping agents would benefit. This is the participants' playful speculation, not an official Shopify statement; Shopify's official agent-facing APIs are covered in the previous section and the [developer docs](https://shopify.dev/docs/apps/build/storefront-mcp). The full context is in [the episode 004 chapter](/weekly/004/transcript#chapter-09), alongside the [Muse Personal Agent](/en/wiki/products/muse-agent) and [Amazon](/en/wiki/products/amazon) pages.

## Frequently asked questions

### What is Shopify?

Shopify is a commerce platform for merchants: they use it to build their own online store, manage orders and inventory, and sell across online and in-person channels. The official positioning and capability list is at [shopify.com/about](https://www.shopify.com/about).

### How much does Shopify cost?

Shopify is subscription-based: the official pricing page lists the Basic, Grow, Advanced, and Plus monthly plans, with additional payment-related fees. Prices and rates vary by region and change over time; current figures are shown on the [official pricing page](https://www.shopify.com/pricing).

### Who is Shopify for?

The official description targets "whether you're running a side hustle, retail shop, or global brand" — merchants who want control over their own storefront and brand, with products and orders managed in one back office across online and in-person sales. The official site does not advise on minimum business size.

### How do I connect AI agents to Shopify?

Developers can use the agent tools in Shopify's official documentation: Storefront MCP (catalog and cart tools) has been retired in favor of the Universal Commerce Protocol (UCP), served at a store's `/api/ucp/mcp` endpoint with an agent profile required on every request; merchants without code can use the Inbox agent. See the [official migration guide](https://shopify.dev/docs/apps/build/storefront-mcp).

### How is Shopify different from marketplaces like Etsy or Amazon?

Shopify gives merchants an independent storefront and their own back office; "social and marketplaces" is one optional sales channel among several, and where else merchants choose to sell is up to them. Fee comparisons with specific platforms are time-sensitive and should be checked on each platform's official pages.

## Sources

- [Shopify official About page](https://www.shopify.com/about)
- [Shopify official pricing page](https://www.shopify.com/pricing)
- [Shopify Careers (company history and scale in its own words)](https://www.shopify.com/careers)
- [Shopify investor relations](https://www.shopify.com/investors)
- [Shopify developer docs: Storefront MCP migration and UCP](https://shopify.dev/docs/apps/build/storefront-mcp)
