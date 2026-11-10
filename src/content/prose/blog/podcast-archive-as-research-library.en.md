---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'Turning Hundreds of Podcast Episodes into a Research Library: The Hard Part Comes After Transcription'
description: 'Import episodes that already have subtitles and transcribe the rest to build up a collection quickly. To make these materials searchable and citable, you also need to preserve their sources, timestamps, missing content, and the context around each point of view.'
updatedAt: '2026-11-10'
---

You remember a guest making a certain point, but can’t recall which episode or minute it was. When hundreds of interviews are available as text, searching gets easier. But if the sentences you find have no source, you still have to go back to the player and search from the beginning.

The seventh episode mentioned an effort to organize this material: obtain subtitles already available on the show’s website, transcribe the episodes without them, and compile everything into a Chinese-language website. After transcription, the library still needs to retain clues that lead back to the source material. Otherwise, the more content you have, the harder it becomes to verify.

## One sentence can have several layers of sources

Publisher-provided subtitles, your own transcription, a Chinese translation, and a summary may all correspond to the same stretch of audio. When importing them, preserve the relationships between these versions. If a claim in a summary turns out to be wrong, you need to know whether to check the translation, the transcription, or the original audio.

Each episode record needs at least the original link, date, language, and text source. If a text has timestamps, preserve the corresponding positions. If it does not, don’t estimate a playback time that only looks precise.

Official subtitles can also contain errors; their source is simply easier to verify. If a revised version becomes available later, you should be able to tell which translations and summaries are still based on the old transcript, rather than quietly replacing the original and continuing to show conclusions based on it.

## Fluent text should still be checkable against the audio

One person’s name can be transcribed as another familiar name, and the result may read perfectly naturally. The [Whisper model card](https://github.com/openai/whisper/blob/main/model-card.md) also points out that the output may include words that were never spoken in the audio. Checking only whether the sentences sound smooth won’t catch this kind of error.

Text intended for browsing can be labeled with its source and proofreading status. When preparing to quote a sentence, listen to the corresponding section, paying particular attention to names, numbers, negations, and qualifying conditions. Translations should also preserve uncertainty in the original; don’t turn “might happen” into “has happened.”

After correcting a name, related translations, summaries, and search indexes may all need updating. If each passage has a stable identifier and the system records which passages derived text refers to, maintenance will be much more reliable than searching and replacing across the full text.

## Bring the surrounding conditions along in search results

Suppose you want to look up someone’s views on open-source models and find one passage in favor and another critical of them. They may be years apart, or they may discuss individual research and enterprise deployment, respectively. Putting the two sentences together does not explain the difference.

A results page can first show the episode date, topic, and necessary surrounding context, then link to the original passage. A summary helps readers decide whether to continue reading; formal citations should still point back to the source material.

The catalog also needs to show what is missing. An episode without subtitles, an incomplete transcription, or a broken video link should all be visible. Otherwise, not finding something in a search can easily be mistaken for the guest never having discussed it.

For acceptance checks, you can pick a few discussions whose sources you already know and check whether you can find them, whether they’re located accurately, and whether their surrounding conditions have been preserved. Then choose an episode with incomplete materials and confirm that the system explains the gap. These checks say more about whether the library is suitable for finding source material than a count of how many articles have been imported.

## Related materials

- [An attempt to obtain official subtitles, transcribe the rest, and compile a Chinese-language website](/weekly/007/transcript#quote-194fdd8d1baa66b25243)
- [The experience of expanding the scope and continuing the work](/weekly/007/transcript#quote-04eaf393ebc8920f2d17)
- [A discussion of using existing show notes to help with the process](/weekly/007/transcript#quote-4c70343fdf7752a9466e)
- [OpenAI Whisper: Model Card, Performance and Limitations](https://github.com/openai/whisper/blob/main/model-card.md), accessed October 26, 2026.
