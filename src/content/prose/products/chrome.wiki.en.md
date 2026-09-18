---
entityType: product
entity: chrome
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Chrome: the Google cross-platform browser and built-in AI | Next Token Wiki'
seoDescription: 'What Chrome is, where to download it, how it relates to Chromium, its built-in AI including Gemini Nano, and the Next Token podcast discussion.'
---

## What Chrome is

Chrome is a cross-platform web browser developed by [Google](/en/wiki/brands/google). It was first released for Windows in September 2008 and later expanded to macOS, Linux, iOS and Android; it is also the core component of ChromeOS. Most of Chrome's source code comes from Chromium, Google's open-source project. Google's AI assistant [Gemini](/en/wiki/products/gemini) is present in the browser as "Gemini in Chrome".

## Usage and boundaries

- Download and platforms: builds for Windows, Mac, iPhone, iPad and Android are distributed from the [official website](https://www.google.com/chrome/); Chrome Beta, Dev and Canary channels exist for testing new features early.
- Update cadence: the official site states that Chrome ships a stable update roughly every four weeks.
- Built-in AI: the official site lists Gemini in Chrome and AI Mode search among its AI features; availability, languages and subscription requirements for each feature are governed by the official page. For developers, the [Prompt API](https://developer.chrome.com/docs/ai/prompt-api) uses the Gemini Nano model inside Chrome: the model is downloaded separately on first use, runs entirely on the device, and no data is sent to Google or third parties while using the model.
- Account and safety: signing in to a Google account syncs passwords, tabs and settings across devices; features include Safety Check, Enhanced Safe Browsing and a Privacy Guide.

## Discussion in the show

In the "本地模型进入浏览器和机器人" (local models enter browsers and robots) chapter of Weekly #001, after a discussion of Perplexity Comet installing local inference models, [Yang Pan points out that Chrome has Gemini Nano, a small model that can be downloaded online](/weekly/001/transcript#quote-e0c08b1b4dafc9684b32); Guizang and Orange judge the model too small for real tasks and argue browsers would need to bring in larger local models themselves. These are the participants' observations at the time. See the [Chinese transcript](/weekly/001/transcript#chapter-21); an English transcript is not available.

## Frequently asked questions

### Where do I download Chrome?

Builds for Windows, Mac, iPhone, iPad and Android are available from the [official website](https://www.google.com/chrome/); on mobile you can also search for "Chrome" in the respective app stores.

### What is the difference between Chrome and Chromium?

Chrome is Google's finished browser product, adding proprietary components such as auto-update, certain media codecs and Google service integration on top of the open-source [Chromium](https://www.chromium.org/) project; Chromium is the upstream open-source project itself, sharing most of the code but not those components.

### What is Gemini Nano in Chrome?

Gemini Nano is the local small model behind Chrome's built-in AI features. According to the official developer documentation, it is downloaded to the device on first use and runs locally, with no data sent to Google while the model is used; developers can call it through the [Prompt API](https://developer.chrome.com/docs/ai/prompt-api). Availability varies with version and hardware, so check the official documentation.

### How often does Chrome update?

The official site states that Chrome releases a stable update every four weeks; the Beta, Dev and Canary channels offer earlier access to new features.

## Sources

- [Chrome official website](https://www.google.com/chrome/)
- [Chrome for Developers: The Prompt API](https://developer.chrome.com/docs/ai/prompt-api)
- [Chromium project website](https://www.chromium.org/)
- [Wikipedia: Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) (historical facts such as the 2008 release and the Chromium relationship)
