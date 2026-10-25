---
entityType: product
entity: whisper
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: "Whisper: OpenAI's open-source speech recognition model | Next Token Wiki"
seoDescription: 'How Whisper performs multilingual transcription and translation, model sizes and the turbo variant, running it locally, and the Weekly #007 podcast-transcription discussion.'
---

## Definition

Whisper is a speech recognition model and open-source implementation released by OpenAI. The official README describes it as "a general-purpose speech recognition model" that performs multilingual speech recognition, speech translation, and language identification; the code and model weights are published under the MIT license in the [official GitHub repository](https://github.com/openai/whisper).

## How it works

It is a Transformer sequence-to-sequence model that represents multilingual recognition, speech translation, language identification, and voice activity detection as token sequences to be predicted. The repository offers six model sizes (four of them English-only) plus a `turbo` variant optimized from large-v3, trading speed against accuracy. Per the README, running `pip install -U openai-whisper` with ffmpeg installed lets you transcribe locally.

## Usage

Its main use is generating text transcripts from audio files, and it can also translate non-English speech into English. Because the code and weights are open, it is widely used for local transcription, subtitle preparation, and automated speech-processing pipelines. Note that the official README states the `turbo` model is not intended for translation tasks; use the multilingual models instead.

## Related and confusable terms

Whisper is a model and a command-line implementation, not an end-user graphical application; many transcription apps and browser plugins call Whisper or its derivatives internally, and their results depend on that integration. Hosted transcription through [OpenAI](/en/wiki/brands/openai)'s platform is a separate usage; the entry point is the [Audio API reference](https://platform.openai.com/docs/api-reference/audio).

## Episode discussion

In Weekly #007, in the chapter “更大胆的任务：播客转写、Slack 与微信整理” (Chinese transcript), Orange describes a browser plugin that transcribes podcast subtitles locally, and [Xiangyang Qiaomu asks which model it uses, mentioning "Qwen 0.6B and Whisper"](/weekly/007/transcript#quote-084fbfda19fab1965a03); Orange replies that the transcription works well. See the [chapter](/weekly/007/transcript#chapter-18).

## Frequently asked questions

### Can Whisper run locally?

Yes. Per the official README, install it with `pip install -U openai-whisper`, install ffmpeg, and transcription runs on your own machine; model files are downloaded for the chosen size.

### Does Whisper support translation?

Yes — translating non-English speech into English — but the official README states the `turbo` model is not trained for translation; use the multilingual models from tiny to large instead.

### Is there an official Whisper API?

OpenAI's platform documents audio transcription interfaces in the [Audio API reference](https://platform.openai.com/docs/api-reference/audio); that hosted service is a separate usage from the open-source model.

## Sources

- [openai/whisper official repository and README](https://github.com/openai/whisper)
- [Whisper paper (arXiv:2212.04356)](https://arxiv.org/abs/2212.04356)
- [OpenAI Audio API reference](https://platform.openai.com/docs/api-reference/audio)
