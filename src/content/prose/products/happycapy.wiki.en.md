---
entityType: product
entity: happycapy
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Happycapy: an agent-native computer in your browser | Next Token Wiki'
seoDescription: 'How Happycapy runs agents in a cloud sandbox with skills and automations, how credits work, and what the Next Token show said about its cloud setup.'
---

## What Happycapy is

Happycapy is an "agent-native computer": the official documentation defines it as "an agent-native computer that runs in your browser. No installs. No terminal setup. No API keys." You assign tasks to agents in a web tab, and the agents execute in a cloud sandbox where they can browse the web, work with files, and run code. The documentation also states that Happycapy is powered by Claude Code and routes each task to suitable built-in models. Entry points are the [official site](https://happycapy.ai/) and the [official documentation](https://docs.happycapy.ai/en).

## Usage and boundaries

The core mechanisms described in the official documentation are:

- Cloud sandbox: work runs in the cloud while local files stay separate;
- Skill Store: ready-made skills for generation, coding, analysis, translation, and more;
- Automations (beta): recurring and long-running work that keeps going in the cloud;
- Credit-based billing, with a free way to start on the official site.

What an agent can access depends on the task's authorization; the relationship to your machine is "runs in the cloud, separate from your computer," which differs from tools that execute locally. For scenarios that need a persistent work environment with logins and installed skills, compare the [Grok Bot](/en/wiki/products/grok-bot) entry.

## Discussion in the show

In Weekly #002's chapter "临时环境与常驻电脑的区别" (Temporary environments vs. always-on computers), Guizang argued that domestic temporary-VM offerings "are all hard to use" and lack an always-on environment like Grok Bot's; Qiaomu then asked, [per the Chinese transcript, “Happycapy, right? I'm not sure if Happycapy gives you a VM, if I remember correctly.”](/weekly/002/transcript#quote-e59a1df53d4fdf5be2c5). This is an uncertain recollection; the official documentation describes a cloud sandbox rather than a full virtual machine, so this entry does not treat the guess as product fact.

## Frequently asked questions

### What is Happycapy?

A cloud-based agent computer that runs in your browser, described in the official documentation as an "agent-native computer" — no installs or API keys, with agents browsing the web, handling files, and running code in a cloud sandbox. See the [official documentation](https://docs.happycapy.ai/en).

### Is Happycapy free, and how is it billed?

The official site offers a free way to start, and usage is metered in credits; credit rules and model usage are covered by the Credits & Usage page of the official documentation.

### Does Happycapy require installation?

Per the official documentation, no: there is nothing to install and no terminal setup — you open a browser tab. The site footer also lists an iOS app.

### How does Happycapy relate to Claude Code?

The official documentation states that Happycapy is "powered by Claude Code," meaning agents are driven by Claude Code underneath, with tasks routed to built-in models per scenario; this page is not an official Claude Code product page, and the exact relationship follows the documentation's wording.

## Sources

- [Happycapy official site](https://happycapy.ai/)
- [Happycapy official documentation](https://docs.happycapy.ai/en)
