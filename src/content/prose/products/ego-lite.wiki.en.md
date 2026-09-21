---
entityType: product
entity: ego-lite
locale: en
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'ego (lite): a browser shared by people and AI agents | Next Token Wiki'
seoDescription: 'What the ego (lite) browser does, how its Spaces and the ego-browser skill work, platform availability, and the Weekly show discussion around it.'
---

## What ego (lite) is

ego (lite) is a browser project maintained by the citrolabs organization on GitHub ([citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)). The official README positions it as "a browser where you and your AI agents work in parallel": agents run their web tasks in Spaces — isolated workspaces inside the same browser — while you keep browsing in your own tabs, so, in the project’s words, "no agent ever takes the browser away from you." The documentation site is lite.ego.app.

The README also distinguishes ego (lite) from browser-use and agent-browser-style tools: in the project’s framing, those are "a bridge to the browser, not a browser of their own," requiring a separate browser to drive, carrying over data imperfectly, and leaving human and agent fighting for control. That is the project’s own competitive characterization.

## Usage and integration

Agents connect through the `ego-browser` skill: per the README, installing ego lite adds the skill to every agent’s skills directory on the machine, it can be installed alone with `npx skills add citrolabs/ego-lite`, and Claude Code, Codex, Cursor, or a custom agent CLI can drive it. The skill exposes the browser as in-page JavaScript tools — snapshot, fill, click, wait, navigate, capture — and the agent writes a JavaScript snippet that runs in one pass. Pages are presented to text-only models as a Snapshot (structured text), which the project says stays reliable even on deeply nested iframes thanks to customization inside the browser engine. The README further claims that code-based control finishes faster and cheaper than conventional CLI loops — vendor-reported claims, all of them.

On first launch, ego lite can migrate Chrome data; the README states the agent inherits existing logins, cookies, extensions, and bookmarks. For platforms, the README states ego lite ships on macOS today (Apple Silicon and Intel DMGs), a Windows closed beta is "coming soon," and Linux is on the roadmap. The repository contents are released under the MIT License; the browser itself is a separate, free download.

## Discussion in the show

In the second half of Weekly #003’s chapter “语音输入产品与实时反馈” (voice-input products and real-time feedback), while discussing Codex’s built-in browser gaining Chrome extension, cookie, and history support, [Xiangyang Qiaomu says in the Chinese transcript that he had been considering a third-party browser such as ego (lite) or Tabbit, but now thinks it is no longer necessary](/weekly/003/transcript#quote-929a931e475be5e2bc48). This is a participant’s trade-off given that premise, not an evaluation of ego (lite) itself.

## Frequently asked questions

### What is ego (lite)?

A browser designed for people and AI agents to share: agents run web tasks in isolated Spaces while you keep your own tabs. The code lives at [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) on GitHub.

### How does an AI agent connect to ego (lite)?

Installing ego lite adds the `ego-browser` skill automatically, or install it alone with `npx skills add citrolabs/ego-lite`. The skill exposes snapshot, click, fill, navigate, and other JavaScript tools, and the README names Claude Code, Codex, Cursor, and custom agent CLIs as supported.

### Does ego (lite) support Windows?

The README states it ships on macOS (Apple Silicon and Intel), with a Windows closed beta "coming soon" and Linux on the roadmap. As of September 2026, check the [official repository](https://github.com/citrolabs/ego-lite) for current platform status.

### Is ego (lite) free?

The repository contents are released under the MIT License, and the browser itself is a separate, free download.

### How does ego (lite) relate to Chrome?

On first launch it can migrate Chrome’s logins, cookies, extensions, and bookmarks (per the README), so agents can start from your existing signed-in state.

## Sources

- [GitHub repository: citrolabs/ego-lite (README)](https://github.com/citrolabs/ego-lite)
- [ego lite documentation](https://lite.ego.app/document/)
