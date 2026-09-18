---
entityType: product
entity: autoglm
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'AutoGLM: the Z.ai device-operating agent and open phone-agent framework | Next Token Wiki'
seoDescription: 'What AutoGLM is, the Open-AutoGLM framework and models, supported devices and apps, deployment and download entry points, and the Next Token discussion.'
---

## What AutoGLM is

AutoGLM is the device-interaction and task-execution agent direction from [Z.ai](/en/wiki/brands/zhipu): the model reads screenshots, understands what is on screen, then plans and carries out concrete actions, operating a phone on the user's behalf. The official open-source project Open-AutoGLM provides the AutoGLM-Phone-9B model and its framework under the Apache-2.0 license, with an architecture identical to GLM-4.1V-9B-Thinking; the corresponding research paper was published on arXiv in 2024 ([arXiv:2411.00820](https://arxiv.org/abs/2411.00820)). Code and instructions are at [GitHub (zai-org/Open-AutoGLM)](https://github.com/zai-org/Open-AutoGLM).

## Usage and boundaries

- Supported devices: Android, HarmonyOS and iOS devices are controlled through ADB, HDC and WebDriverAgent respectively; WiFi remote debugging is supported, and integration is possible via a CLI, the Python API or environment variables.
- Supported apps: the official README lists more than 50 Android apps and more than 60 HarmonyOS apps, including WeChat, Taobao, JD, Meituan and Douyin.
- Actions and safety: actions include launching apps, tapping, typing, swiping, back and long press; a confirmation mechanism covers sensitive operations, and a Take_over mode hands control back to the human for logins and CAPTCHAs.
- Model downloads: AutoGLM-Phone-9B and the English-oriented AutoGLM-Phone-9B-Multilingual are available on Hugging Face and ModelScope.

The open-source framework targets development and self-hosting; Z.ai also uses related device-operation capabilities in consumer products such as its input method, whose scope follows Z.ai's official product pages.

## Discussion in the show

In the "Computer Use 正在怎样改变 Vibe Coding 的验收" (how Computer Use is changing Vibe Coding acceptance) chapter of Weekly #001, while the hosts discuss the Computer Use route, [Yang Pan recalls that Z.ai released AutoGLM earlier and says this device-operation route has kept attracting work](/weekly/001/transcript#quote-47121f247d1a66b31225). This is a participant's recollection of the broader trend, not a statement about the product's current state. See the [Chinese transcript](/weekly/001/transcript#chapter-04); an English transcript is not available.

## Frequently asked questions

### What is AutoGLM?

Z.ai's device-operating agent: the model reads screenshots, plans actions and operates a phone on the user's behalf. The research paper is [arXiv:2411.00820](https://arxiv.org/abs/2411.00820) and the open-source implementation is on [GitHub](https://github.com/zai-org/Open-AutoGLM).

### Is Open-AutoGLM open source?

Yes. The framework and models are open sourced under the Apache-2.0 license; the code is in the zai-org/Open-AutoGLM repository, and weights are downloadable from Hugging Face and ModelScope.

### Which phones and systems does Open-AutoGLM support?

Per the official README: Android (via ADB), HarmonyOS (via HDC) and iOS (via WebDriverAgent), covering more than 50 Android apps and more than 60 HarmonyOS apps. The detailed list is in the repository documentation.

### Where can I download the AutoGLM models?

AutoGLM-Phone-9B and AutoGLM-Phone-9B-Multilingual are available on Hugging Face and ModelScope; download links are in the [official README](https://github.com/zai-org/Open-AutoGLM).

## Sources

- [GitHub: zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM)
- [arXiv: AutoGLM: Autonomous Foundation Agents for GUIs (2024)](https://arxiv.org/abs/2411.00820)
