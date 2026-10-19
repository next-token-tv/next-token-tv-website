---
entityType: product
entity: fish-audio
locale: en
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'Fish Audio: speech generation and voice cloning platform | Next Token Wiki'
seoDescription: 'What Fish Audio offers in text to speech, voice cloning and speech APIs, its open-source models, and how the show discussed its expressive speech capability.'
---

## What Fish Audio is

Fish Audio is a speech generation platform run by Hanabi AI, offering text to speech (TTS), voice cloning, speech to text and voice agent capabilities, with REST endpoints and SDKs for developers. The model lines listed on its official pages include the Drama series, OpenAudio, the Fish Audio S series and Fish Speech; current models and capabilities are best confirmed on the [official site](https://fish.audio/) and its [documentation](https://docs.fish.audio/).

## Uses and boundaries

Typical uses are generating speech for applications, agents or content production: the official page describes TTS with tag-based control over emotion, voice cloning from a small audio sample, and support for more than 30 languages. The platform also ships companion tools such as voice changing, sound effects and audio separation.

On the open-source side, the `fishaudio` GitHub organization maintains repos such as fish-speech alongside an official Python library for the API. Open weights and the commercial API are parallel paths with different capabilities and licenses, which should be checked separately. Self-reported numbers about user scale or rankings on marketing pages are the platform's own claims, not independent evaluation.

## In the show

In Weekly #006's chapter on speech that performs a character rather than reading lines, 橘子 (Orange) said while discussing Google's expressive speech model that [Fish Audio's newly released model also supported that kind of capability, but in his judgment did not do it as well](/weekly/006/transcript#quote-e7afcc04d26a02417c13). This is a participant's comparative experience at the time, not a review verdict; see the [Chinese transcript](/weekly/006/transcript#chapter-25).

## FAQ

### Where is the Fish Audio website?

The site is [fish.audio](https://fish.audio/), with developer documentation at [docs.fish.audio](https://docs.fish.audio/).

### Where do I get a Fish Audio API key?

After signing up, API keys are available in the platform console; integration is documented at the [official docs](https://docs.fish.audio/). Do not publish keys on public pages or in public repositories.

### Can Fish Audio clone voices?

Yes. The official page says a voice can be cloned from a short audio sample (about 15 seconds by the page's own wording) and used for multilingual speech. Before cloning someone else's voice, confirm you have permission and follow the platform's terms.

### Is Fish Audio free?

The official page states the free tier is for personal use only and that commercial use requires a paid plan, with the API billed by usage. Current rates are on the [official site](https://fish.audio/).

### Is Fish Audio open source?

The `fishaudio` organization maintains open-source repositories such as [fish-speech](https://github.com/fishaudio/fish-speech) on GitHub. The open models and the commercial fish.audio API are not equivalent in capability or licensing; check each separately.

## Sources

- [Fish Audio official website](https://fish.audio/)
- [Fish Audio developer documentation](https://docs.fish.audio/)
- [fishaudio GitHub organization](https://github.com/fishaudio)
