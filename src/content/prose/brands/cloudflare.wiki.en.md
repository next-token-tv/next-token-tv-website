---
entityType: brand
entity: cloudflare
locale: en
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Cloudflare: CDN and security services and the Workers developer platform | Next Token Wiki'
seoDescription: 'Learn what Cloudflare does: its CDN, DDoS protection, and DNS services, the Cloudflare Workers developer platform, and the company’s origins.'
---

## Cloudflare

Cloudflare is a company providing network infrastructure and security services. It was founded on July 26, 2009, by Matthew Prince, Lee Holloway, and Michelle Zatlyn, and is headquartered in San Francisco. Its best-known role is acting as a reverse proxy between website visitors and origin servers, delivering content delivery, DDoS mitigation, DNS, and domain registration services.

## Business and developer platform

- **Network and security services**: a content delivery network (CDN), DDoS mitigation, WAF, SSL/TLS, Zero Trust, the 1.1.1.1 public DNS resolver, and more, delivered through a network of data centers in over 330 cities worldwide.
- **Developer platform**: centered on [Cloudflare Workers](https://www.cloudflare.com/en-gb/developer-platform/products/workers/), a serverless computing platform launched in 2017. Workers code runs on V8 isolates rather than containers, which the company says virtually eliminates cold starts on requests; companion products include the Workers KV key-value store, the zero-egress-fee object storage R2, and Workers AI for inference.

Pricing and quotas for developer products should be read from the current official pages.

## Discussion in the show

In Weekly #004’s chapter “Muse Charm、手机与 AI 的入口” (Muse Charm, phones, and the AI entry point), while discussing ways to run code on iOS, Qiaomu connected a library that uses iOS’s built-in browser component to Cloudflare’s technical approach: “[是吧，WASM 这，应该是 Cloudflare，然后那个解释器，那个 Python 解释器，那个 Worker 也是用这种东西做的](/weekly/004/transcript#quote-d5e03b754d78c12145d9)” — the WebAssembly route Cloudflare uses, where the Python interpreter and the Worker are built this way. This is a host’s observation and analogy, not a Cloudflare statement. The chapter is in the Chinese transcript.

## Frequently asked questions

### What kind of company is Cloudflare?

Cloudflare provides network and cloud security services: on one hand, it delivers CDN, DDoS protection, and DNS for websites via a reverse proxy; on the other, it operates a serverless developer platform built around Workers. The company was founded in 2009 and is headquartered in San Francisco.

### Where is Cloudflare’s official website?

The official website is [cloudflare.com](https://www.cloudflare.com/); the developer platform products are described on the [Workers product page](https://www.cloudflare.com/en-gb/developer-platform/products/workers/).

### What is Cloudflare Workers?

Workers is Cloudflare’s serverless computing platform, where deployed code runs on a global network of data centers close to users. The official description says it uses V8 isolates instead of containers, so requests have almost no cold start, and it pairs with Workers KV, R2, and Pages to build full applications. See the [official Workers product page](https://www.cloudflare.com/en-gb/developer-platform/products/workers/).

## Sources

- [Cloudflare official website](https://www.cloudflare.com/)
- [Cloudflare Workers product page](https://www.cloudflare.com/en-gb/developer-platform/products/workers/)
- [Wikipedia: Cloudflare](https://en.wikipedia.org/wiki/Cloudflare)
