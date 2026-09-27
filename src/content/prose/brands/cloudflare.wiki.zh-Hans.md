---
entityType: brand
entity: cloudflare
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-27'
seoTitle: 'Cloudflare：CDN 与安全服务及 Workers 开发者平台｜Next Token Wiki'
seoDescription: '了解 Cloudflare 的核心服务（CDN、DDoS 防护、DNS）与 Cloudflare Workers 开发者平台，以及这家公司的由来。'
---

## Cloudflare

Cloudflare 是一家提供网络基础设施与安全服务的公司，2009 年 7 月 26 日由 Matthew Prince、Lee Holloway 和 Michelle Zatlyn 创立，总部位于旧金山。它最广为人知的角色是充当网站访客与源站服务器之间的反向代理，为网站提供内容分发、DDoS 防护、DNS 和域名注册等服务。

## 业务与开发者平台

- **网络与安全服务**：包括内容分发网络（CDN）、DDoS 缓解、WAF、SSL/TLS、Zero Trust 与 1.1.1.1 公共 DNS 解析器等，通过遍布全球 330 多个城市的数据中心网络交付。
- **开发者平台**：以 2017 年推出的 [Cloudflare Workers](https://www.cloudflare.com/en-gb/developer-platform/products/workers/) 为核心。Workers 是一个无服务器计算平台，代码运行在 V8 isolates 而非容器上，官方称这几乎消除了请求的冷启动；配套产品包括键值存储 Workers KV、零出口费的对象存储 R2，以及面向 AI 推理的 Workers AI。

开发者相关的定价与额度以官方页面的当前说明为准。

## 节目中的讨论

Weekly #004 在“Muse Charm、手机与 AI 的入口”章节讨论 iOS 上运行代码的方案时，乔木提到一个利用 iOS 自带浏览器组件执行 JavaScript 的库，并把它与 Cloudflare 的技术路线联系起来：“[是吧，WASM 这，应该是 Cloudflare，然后那个解释器，那个 Python 解释器，那个 Worker 也是用这种东西做的](/weekly/004/transcript#quote-d5e03b754d78c12145d9)”。这是主理人把该方案类比到 Cloudflare Workers 所用的 WebAssembly 思路，属于节目内的观察与联想。

## 常见问题

### Cloudflare 是什么公司？

Cloudflare 是提供网络与云安全服务的公司：一方面以反向代理方式为网站提供 CDN、DDoS 防护和 DNS，另一方面运营以 Workers 为核心的无服务器开发者平台。公司 2009 年创立，总部在旧金山。

### Cloudflare 官网在哪里？

官网是 [cloudflare.com](https://www.cloudflare.com/)，开发者平台产品见 [Workers 产品页](https://www.cloudflare.com/en-gb/developer-platform/products/workers/)。

### Cloudflare Workers 是什么？

Workers 是 Cloudflare 的无服务器计算平台，开发者部署的代码运行在靠近用户的全球数据中心网络上。官方介绍称其使用 V8 isolates 而非容器，因而几乎没有冷启动，并可配合 Workers KV、R2 和 Pages 构建完整应用。详见 [Workers 官方产品页](https://www.cloudflare.com/en-gb/developer-platform/products/workers/)。

## 来源

- [Cloudflare 官网](https://www.cloudflare.com/)
- [Cloudflare Workers 产品页](https://www.cloudflare.com/en-gb/developer-platform/products/workers/)
- [Wikipedia: Cloudflare](https://en.wikipedia.org/wiki/Cloudflare)
