---
entityType: product
entity: 1password
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: '1Password: password and passkey manager — platforms, plans, developer tools | Next Token Wiki'
seoDescription: 'What 1Password is: how vaults store passwords, passkeys, and secrets; clients for macOS/Windows/iOS/Android/Linux plus CLI; individual and business plans; and the show’s agent sign-in discussion.'
---

## What 1Password is

1Password is a tool for storing and managing sign-in information: passwords, passkeys, and credit cards live in encrypted vaults and are filled by its apps and browser extension. Core features listed on the official site include two-factor authentication, password generation, secure sharing, and Watchtower alerts for weak or compromised credentials; developers get Secrets Management for API keys and other infrastructure credentials. On the business side, 1Password offers the Unified Access platform, covering an enterprise password manager, SaaS management, privileged access, device trust, and a Credential Broker that delivers runtime-authorized credentials to AI agents and machine workloads.

## Usage and boundaries

Clients cover macOS, Windows, iOS, Android, and Linux, plus browser extensions and a command-line tool, with downloads at the [official downloads area](https://1password.com/downloads). Personal use comes in Individual and Families plans billed annually, each with a 14-day free trial; business offerings are quote-based. Rates change, so the [personal pricing page](https://1password.com/personal) and the [business pricing page](https://1password.com/pricing) are the references.

The developer surface is a separate layer: the CLI brings vault credentials into scripts and automation, and Secrets Management is documented at [developer.1password.com](https://developer.1password.com/). As a boundary, 1Password governs how credentials are stored and authorized; the actual sign-in flows and two-factor policies remain up to each website or app. When sharing vaults or letting external tools read credentials, the scope of access is configured and reviewed by the user.

## Discussion in the show

In Weekly #003’s chapter “语音输入产品与实时反馈” (“Voice-input products and live feedback”), [Guizang describes installing 1Password for the agents he lets browse the web: sign-ins happen by authorization rather than plaintext passwords, and his stored credit cards are filled after authorization](/weekly/003/transcript#quote-ce5caa2ce3bb262342a5). In the same discussion, [Yang Pan notes that Chrome can now read the passwords in Apple’s system keychain directly, and that apart from 1Password’s features, Chrome covers the basics on its own](/weekly/003/transcript#quote-412f36d175e0184f9616). These are two different personal trade-offs: handing authorized sign-in to a dedicated credential tool, versus relying on the system password store for basic needs.

## Frequently asked questions

### What is 1Password?

1Password is a password and sign-in manager: encrypted vaults hold passwords, passkeys, and cards, apps and browser extensions fill them in, and the feature set adds two-factor authentication, Watchtower alerts, and developer-facing Secrets Management.

### Which platforms does 1Password support, and where do I download it?

Official clients cover macOS, Windows, iOS, Android, and Linux, plus extensions for major browsers and a CLI; downloads are at the [official downloads area](https://1password.com/downloads).

### How is 1Password priced?

Personal use comes in Individual and Families plans, billed annually, each with a 14-day free trial; the family plan invites up to 5 members. Business offerings, including the Unified Access platform products, are quote-based. Current prices are on the [personal pricing page](https://1password.com/personal) and the [business pricing page](https://1password.com/pricing).

### Does 1Password have a CLI or developer tools?

Yes. The CLI brings vault credentials into scripts and automation, and Secrets Management handles API keys, certificates, and other infrastructure credentials; the documentation is at [developer.1password.com](https://developer.1password.com/).

### Can 1Password store passkeys?

Yes. The official site lists passkeys among its core features, stored and managed alongside passwords, two-factor items, and autofill data.

## Sources

- [1Password website](https://1password.com/)
- [1Password personal pricing](https://1password.com/personal)
- [1Password business pricing](https://1password.com/pricing)
- [1Password developer documentation](https://developer.1password.com/)
