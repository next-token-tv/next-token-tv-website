---
entityType: product
entity: subcast
locale: en
slot: wiki
updatedAt: '2026-11-21'
seoTitle: "SubCast: an open-source podcast and YouTube player with bilingual subtitles | Next Token Wiki"
seoDescription: "What SubCast is: Xiangyang Qiaomu's open-source desktop app combining podcast and YouTube subscriptions, bilingual subtitles, AI guides and Q&A, supported platforms, subtitle sources, and licensing."
---

## What is SubCast?

SubCast is an open-source desktop app (AGPL-3.0, repository [joeseesun/subcast](https://github.com/joeseesun/subcast)) by [Xiangyang Qiaomu](/en/wiki/people/xiangyang-qiaomu). It brings podcast and [YouTube](/en/wiki/products/youtube) subscriptions, playback, bilingual subtitles, and AI Q&A into one place for listening to and revisiting long episodes. The app is built with Tauri (Rust and React) and stores its data locally.

## Subscriptions and playback

- Subscription sources: [YouTube](/en/wiki/products/youtube) channels, Apple Podcasts, [Xiaoyuzhou](/en/wiki/products/xiaoyuzhou), or any RSS feed; new episodes download automatically and podcasts are searchable by name.
- Platforms: builds for macOS (Apple silicon and Intel), Windows 10/11, and Linux (AppImage, deb, rpm); the macOS builds are signed and notarized, while the Windows installer is unsigned and the first launch requires bypassing the SmartScreen warning.

## Bilingual subtitles

Subtitles use official transcripts first. Episodes without them can be transcribed on device — by default with a local speech recognition model, so audio never leaves the machine — or through configured cloud services such as Doubao, Groq, or OpenAI, with translation via Google Translate by default. The interface offers bilingual, Chinese-only, and original-language display modes. Episodes transcribed by other users open with subtitles ready; sharing uploads text only, never audio, and can be turned off.

## AI guides and Q&A

Per episode, SubCast can produce an AI guide with a summary, timeline, key points, and timestamps, and can answer questions grounded in the full transcript with clickable timestamp citations. AI providers are user-configurable (DeepSeek, Kimi, Claude, OpenAI, Gemini, Ollama, and others), with API keys stored in the system keychain.

## Discussed on Next Token

Episode 011 discusses subscribing to the Next Token video podcast and cutting highlights.

## Frequently asked questions

### Who develops SubCast?

[Xiangyang Qiaomu](/en/wiki/people/xiangyang-qiaomu) develops and maintains it as open source. The code is on [GitHub](https://github.com/joeseesun/subcast), and the official site is [subcast.qiaomu.ai](https://subcast.qiaomu.ai/).

### Which platforms does SubCast support?

macOS (Apple silicon and Intel), Windows 10/11, and Linux (AppImage, deb, rpm).

### Where do the bilingual subtitles come from?

Official transcripts first. Otherwise the app transcribes on device (audio stays local) or uses a configured cloud service, then translates for the bilingual view; episodes transcribed by other users open with subtitles ready.

### Is SubCast paid, and do AI features cost extra?

The app is free and open source. AI features connect to providers the user configures, with API keys kept in the system keychain; costs depend on the chosen provider.

### What license does SubCast use?

AGPL-3.0: free to use, modify, and redistribute, but distributing modified versions or running it as a network service requires releasing the complete source under the same license.

## Sources

- [joeseesun/subcast repository and README](https://github.com/joeseesun/subcast)
- [SubCast official site](https://subcast.qiaomu.ai/)
