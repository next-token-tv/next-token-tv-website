---
locale: 'en'
episodes:
  - 'next-token-weekly--009'
status: published
publishedAt: '2026-11-17'
title: 'Your Game Runs. Let Someone Play It First.'
description: 'Watch a first-time player without a demo, separate technical problems from comprehension and replay value, and use the result to choose the next revision.'
updatedAt: '2026-11-17'
---

You have made a small game. You can play it from beginning to end, and none of the buttons throw an error. The most useful next test may be to hand it to someone who has never seen a demo, stay quiet, and watch their first session.

The creator already knows the objective, the controls, and what to do after failure. That knowledge makes it easy to fill gaps the game leaves unexplained. A new player has no such context. The first moment they hesitate, make an unintended move, or quit can tell you more than an opinion given after you have explained everything.

## Separate three questions

First, does the game run? Check loading, input, audio, visuals, and restarting. Second, can a player understand the first session? Look for whether they grasp what they can do, what they are trying to achieve, and what happens when they fail. Third, once they understand it, do they want another round? Are the choices interesting, and does the outcome make them want to try a different approach?

These layers affect one another, but they do not substitute for one another. A crash prevents a useful assessment of play. Confusion about a rule does not by itself prove the underlying game has no appeal. In episode #009, one guest argued that passing functional tests leaves the question of whether a game is fun, while another worried about creators releasing games without playing them sufficiently themselves. The discussions of [functional tests and enjoyment](/weekly/009/transcript#quote-1990176263c6ff1950f2) and [creators playing their own games](/weekly/009/transcript#quote-4efc5118511fc0a7d05a) raise a practical question: what should a team observe before release?

## Let feedback guide the next build

Imagine a game about dodging obstacles. Three first-time players all miss the fact that the space bar triggers a dash. Once told, two want to try again and begin looking for moments to use it. The next build might improve the opening prompt or teach the dash in a safe situation. Then test it with new players who have not received that explanation.

Now imagine players understand the dash quickly but feel every round is just more waiting, with no interesting choice to make. If similar feedback keeps recurring, examine obstacle pacing and the balance of risk and reward rather than merely enlarging the instruction text. A small sample cannot establish what every player will feel, but it can suggest a specific change to test next.

Record the build version, where players get stuck, and what they do before and after an explanation. Afterwards, ask when they wanted to continue and when they felt like stopping. Do not turn every suggested fix directly into a requirement: identify the problem first, then choose a response.

## Keep testing separate from launch

One example mentioned on the show was [PokéBonk](/weekly/009/transcript#quote-f83f68eec19c4d3253db), which people could play directly on the web. A web link can help invite the intended players, provided you also explain device requirements and offer a way to send feedback.

For teams considering Steam, Valve's documentation describes Steam Playtest, which is associated with the main game but uses a separate child App ID. Players can request access. Developers can admit them in batches and close the test. Valve applies a simplified store-page and build review to the test app.

Fix anything that prevents a session first, then distinguish comprehension problems from problems with the play loop. After each revision, watch a fresh player who has not been coached through it. That is how the team can tell whether the change helped.

## Sources

- [Valve: Steam Playtest](https://partner.steamgames.com/doc/features/playtest)
