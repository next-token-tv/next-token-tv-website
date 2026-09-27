---
entityType: product
entity: muse-agent
locale: en
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Muse Personal Agent: Meta’s consumer AI agent, connectors, and safety boundaries | Next Token Wiki'
seoDescription: 'What Meta’s Muse personal AI agent does, how Muse Secure VM, connectors, and payments work, and what the Next Token show discussed in episode 004.'
---

## Muse Personal Agent

Muse (Muse Personal Agent) is a personal AI agent from Meta that the official announcement positions as "built for everyone," emphasizing that it does not just answer questions but carries out real tasks. According to the official announcement, Meta released Muse on September 8, 2026, initially rolling it out in the US on iOS, Android, and the [muse.ai](https://muse.ai/) website. Capabilities listed by the official announcement include handling email, booking travel, filling out forms, working in a browser, and turning long-term goals into plans that continue after the app is closed; for sensitive actions such as payments, Muse asks for user approval first. Meta says Muse is powered by the Muse Spark model. Features, connectors, and availability change, so check the [official announcement](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) before relying on details.

## Usage and boundaries

Muse is used through the iOS and Android apps and the muse.ai website, and the official announcement states that Muse also works directly in WhatsApp. Per the official description, Muse runs inside a dedicated cloud virtual machine called Muse Secure VM that holds the agent and the user's data; a separate reviewing agent named Sentinel approves outbound internet activity at the system level. Payments run through Link built by Stripe, which Meta describes as the first agent covered by Link's purchase protections; Shop Pay and 1Password support had not launched at the time of the announcement.

Connectors determine which apps and services Muse can act on. At Meta Connect on September 24, 2026, the company announced new connectors including Walmart, Best Buy, PayPal, Expedia, Instacart, Notion, GitHub, and Box, and said Muse would reach Meta AI glasses in the coming months and get its own email address. For the pocket voice device Meta announced alongside it, see [Muse Charm](/en/wiki/products/muse-charm).

On billing, the official announcement says Muse is free for most needs with subscription plans for heavier use; current plans and prices belong to the [official channels](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/). On privacy, the official description states that credentials are stored so Muse can use but not see them, that per-app access can be changed or revoked at any time, that users can opt out of training on their interactions, and that a Muse Confidential VM with a user-held key was announced as upcoming.

Muse belongs to the same personal-agent direction as OpenClaw and Grok Bot but with a different position: Muse targets everyday consumers and keeps execution and payments inside Meta's managed environment, while open frameworks such as OpenClaw require users to supply their own runtime. Participant discussion of this difference appears below.

## Discussion in the show

Episode 004 devotes several chapters to Muse. In the chapter “Muse：面向普通人的 Personal Agent” (Muse: a Personal Agent for everyday people), [Guizang argues Meta found a lane that suits it — a Personal Agent for people who do not follow AI closely](/weekly/004/transcript#quote-7abc5963e7b3fd15cdcf), [and notes that Zuckerberg let Muse read Instagram, Facebook, and Threads, as recorded in the Chinese transcript](/weekly/004/transcript#quote-dbed584c312b76ce1677); [Yang Pan compares Muse to “the new Store”](/weekly/004/transcript#quote-adbb878d9135f6dd9e44). [Xiangyang Qiaomu compares his experience of Muse and Grok Bot, finding Muse simpler, easier, and less geeky](/weekly/004/transcript#quote-6a055fdd454af94fe13d), and [describes Idea-tab scenarios such as recovering an accidental credit-card overcharge as evidence of low operating cost](/weekly/004/transcript#quote-44c5ae002498a91ee71f). The online controversy claiming Muse copies OpenClaw is mentioned as well, relayed by Yang Pan as public opinion rather than a conclusion the show endorses.

In the chapter “AI 产品经理与人的使用体验” (AI product managers and the human experience), [Guizang analyzes the experience side: a Personal Agent fails when it creates problems instead of solving them](/weekly/004/transcript#quote-bbfb96fd47df6fe8bdcb); [he describes how Muse runs just two processes — one to talk and delegate, one to execute in the background](/weekly/004/transcript#quote-2b98f3f5a368f0bd0c72), [showing progress in a side panel so conversation never has to stop](/weekly/004/transcript#quote-81e4a39f6370ebb5105d). In the chapter “开放生态、资源与商业闭环” (Open ecosystem, resources, and the business loop), [Guizang notes that Muse is unusually open: geeks can fold it into their workflows, and the phone app even exposes files on the cloud VM for viewing and download](/weekly/004/transcript#quote-2ea181054d175801f623); [Orange calls it the first real consumer agent](/weekly/004/transcript#quote-5045c1ee684eaac2b0ae), [arguing that no other company can cover Muse’s cost](/weekly/004/transcript#quote-130cdc0fdf9ff1ca32cc). The same chapter discusses Amazon blocking Muse from shopping; see the show-discussion section of [Amazon](/en/wiki/products/amazon).

These are participant impressions and reports based on personal use and public coverage, not an independent capability evaluation and not official statements. The [episode 004 chapter](/weekly/004/transcript#chapter-06) in the Chinese transcript holds the full context; an English transcript is not available.

## Frequently asked questions

### What is Muse, and whose product is it?

Muse is a personal AI agent released by Meta on September 8, 2026. It connects to apps and services and carries out tasks such as email, bookings, and shopping on the user's behalf. The official description is in the [Meta announcement](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/).

### Where can I use Muse, and how do I get it?

The official announcement describes an initial rollout in the US on iOS, Android, and the [muse.ai](https://muse.ai/) website, with AI glasses support planned, and Muse also works in WhatsApp. Whether the service is offered in your region, and whether an invite is needed, depends on official channels and your local app store.

### Is Muse free, and how is it priced?

The official announcement says Muse is free for most needs, with subscription plans for heavier use. Plan tiers and prices are time-sensitive; check the official pages for current details.

### How is Muse different from OpenClaw or Grok Bot?

All three are personal agents, but Muse runs in Meta's managed environment (Muse Secure VM) with payments through Stripe Link and targets users who do not want to manage technical details; OpenClaw requires users to provide their own runtime, and Grok Bot's positioning is covered on [Grok Bot](/en/wiki/products/grok-bot). This comparison reflects the show's discussion; each product's actual capabilities are defined by its official documentation.

## Sources

- [Meta newsroom: Introducing Muse, a Personal AI Agent](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)
- [Meta newsroom: The Biggest News From Connect 2026](https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/)
