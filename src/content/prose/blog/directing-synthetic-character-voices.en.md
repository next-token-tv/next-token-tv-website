---
locale: en
episodes:
  - next-token-weekly--006
status: published
publishedAt: '2026-11-10'
title: 'Before Directing a Fictional Character’s Voice, Decide Who They’re Speaking To'
description: 'Using a fictional exchange between a shopkeeper and a regular customer, this article discusses how to give synthetic voices specific performance directions and check for vocal consistency and conversational flow.'
updatedAt: '2026-11-10'
---

The same “Welcome back” can sound very different in different situations. Is the shopkeeper genuinely happy to see a regular, or trying to pretend they barely know each other? Even with the same voice, pauses and volume can change what the line means.

In episode six, Guicang discussed turning novel content into something like a visual novel, with fixed voice qualities and personalities for each character. One example was an old, sinister priest. Choosing an older-sounding voice is only a starting point; the specific lines still need to be considered in the context of what the character is doing.

## After the personality labels, the situation for this line is still missing

Try it with a fictional exchange: the shopkeeper recognizes a regular customer but does not want others to know they know each other. If you only give labels like “mysterious, complex, and nuanced,” it is hard to tell what to adjust when listening to a sample.

A more specific direction could be: read the opening as an ordinary greeting, pause briefly before the form of address, lower your voice for the second half, and show no surprise. Whether the tool can follow these directions accurately has to be judged by listening to the generated result. But at least you can tell whether it makes the familiarity between them too obvious.

If the line contains a long explanation but the character is supposed to cut someone off in a hurry, simply speeding up the delivery may make it sound increasingly awkward. In that case, shorten the dialogue first so the character’s actions match the length of the text, then adjust the delivery.

You can also keep one natural-sounding version and change just one emphasis or pause at a time. Listening to several versions in a row makes it easier to find the effect you want than continually adding personality words to the prompt.

## Keep the voice consistent; let the emotion change

Speech synthesis has long offered expressive controls. [SSML 1.1](https://www.w3.org/TR/speech-synthesis11/) defines tags for pronunciation, pauses, pitch, volume, and speaking rate. So character voice direction should not be reduced to saying that new tools perform while old tools only read aloud.

Some interfaces now let you describe the delivery in natural language. [Google’s current speech generation documentation](https://ai.google.dev/gemini-api/docs/speech-generation) also offers settings such as voice identity and turn style. It can help illustrate one production approach; the specific models and configurations tried on the show are limited to what the show’s materials describe.

Voice identity and the emotion of an individual line can be saved separately: set which voice a character uses on its own, and specify whether this line is a quiet explanation or a hurried defense in the current turn. Google’s documentation also cautions that repeatedly adding overly long character descriptions can cause voice drift. This is usage guidance for that product; other tools need to be checked by listening to their outputs individually.

In production, you can keep a few reference clips for each character, then listen to later generations alongside them. Can you still recognize the same character when they speak calmly, tensely, or quietly? Have their pronunciation habits suddenly changed? If you notice a change, checking the voice settings and current directions makes it easier to pinpoint the cause than rewriting the entire character biography.

## Listen to two lines together

Once you have chosen a line on its own, put it back into the conversation. The time left after the previous line and whether the next person interrupts can directly change how the relationship comes across. An answer that originally sounded impatient might sound hesitant after a long silence.

First, play the adjacent lines from both characters together, then pair them with the visuals and check whether forms of address, pronunciation, and character identities are getting confused. Two voices that sound great on their own may be too similar back to back. If the characters need to be recognized quickly in this scene, adjust the voice choices or their speaking habits.

Finally, listen to the whole scene: does the background music drown out the shopkeeper’s quiet “Welcome back”? Does the regular customer’s next line pick up on that hint? If these two moments do not land, listeners may not notice the fine performance details in either line on its own.

## Related materials

- [A production experiment in setting fixed voice qualities and personalities for novel characters](/en/weekly/006/transcript#quote-48aa03f48cac92da24ec)
- [An example of describing voice performance for the priest character](/en/weekly/006/transcript#quote-db2fa6a59652219f2ec5) and [the expected personality traits](/en/weekly/006/transcript#quote-b9e9ebf275cbc0abc0b0)
- [W3C: Speech Synthesis Markup Language 1.1](https://www.w3.org/TR/speech-synthesis11/), 2010; accessed October 26, 2026.
- [Google: Text-to-speech generation](https://ai.google.dev/gemini-api/docs/speech-generation), accessed October 26, 2026.
