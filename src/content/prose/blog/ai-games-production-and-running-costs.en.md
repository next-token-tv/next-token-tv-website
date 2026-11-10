---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'Two Costs of AI Games: Production and Operation'
description: 'Generated code can be run repeatedly, while dialogue generated in real time keeps incurring call costs. When making a browser game, how should you choose and estimate these two kinds of investment?'
updatedAt: '2026-11-10'
---

Using AI to make a game does not necessarily mean players have to call a model when they play it. Generated code can handle movement, collisions, and upgrades just like any other program. The fact that a model helped make the game does not mean every button press incurs a Token cost.

Episode 7 discussed PokéBonk, with impressions focused on a few details: it can be opened on both phones and computers, and progress is still there when you return. The episode did not provide its complete tech stack or verified business data. These experiences can be a starting point for discussing how polished browser games are, but they do not let us claim on the developer's behalf exactly how it uses AI.

## What is decided during production, and what needs to be generated live

Suppose you are making a monster-fighting and leveling game. The map, enemy behavior, drop rules, and equipment descriptions can all be generated during development and written into the program. When players replay the game, they are running code that has already been delivered.

If you want every NPC to respond to players' free-form input, the model becomes part of the live operation. You then need to consider the wait for each conversation, how to handle failed calls, and the costs as the number of players grows. You could also give this capability to only a few characters and use fixed rules for everything else.

To make a choice, compare a specific section of gameplay: are prewritten branches already enough? Does free-form generation create a difference players can feel? If it only rephrases the same meaning in a few ways, the extra cost and instability of live generation may not be worthwhile.

## Initial investment can be spread out, but service costs still arise

For a hypothetical single-player browser game with an initial production cost of C and a cumulative N plays, the production cost allocated per play is C/N. This calculation does not include resource downloads, servers, or ongoing maintenance.

Accounts, leaderboards, multiplayer state, and payments may all bring ongoing costs. Any part that uses a model at runtime also has call costs to account for separately. When discussing low-cost distribution, first explain which computations the game leaves to the client and which still depend on the server.

The approach proposed in the episode is to turn production-stage investment into a work that can be used repeatedly. This cost structure is worth trying, but revenue still depends on whether players are willing to pay, as well as how much it costs to acquire players, update the game, and operate it.

## A link opens, but is it really fun on a phone?

[MDN's guide to publishing web games](https://developer.mozilla.org/en-US/docs/Games/Publishing_games) describes options such as self-hosting and distribution through marketplaces. Web games are easy to try through a link, making it practical to get an early version into other people's hands.

Compatibility still needs to be checked on devices. A small button that is easy to click precisely with a mouse may be hard to use on a touchscreen. If keyboard movement is replaced with a virtual joystick, how much of the screen will it cover? Does the game resume after the page goes into the background and returns? If progress is saved in the current browser, can players continue on another device?

These issues are easy to miss in a desktop demo. [Browsers' graphics, input, audio, and storage capabilities](https://developer.mozilla.org/en-US/docs/Games/Introduction) provide the foundation for development; the game itself still has to handle the actual experience.

An early version can include just one complete flow: enter, play, fail or finish, exit, and open it again. Handing that flow to a friend and watching where they get stuck makes problems easier to spot than adding more levels first. Once they want to play another round on their own, consider adding content and payment options.

## Related resources

- [PokéBonk's gameplay and personal trial experience](/en/weekly/007/transcript#quote-20beee0f3aed440036e9) and [the experience of accessing it on a phone and retaining progress](/en/weekly/007/transcript#quote-bfdee750456ad982b4f5)
- [Turning production costs into a work that can be consumed repeatedly](/en/weekly/007/transcript#quote-7cf873daf94bc4bfe3f5)
- [Discussion of increasing supply and players' time](/en/weekly/007/transcript#quote-b713aca92855b8a868cf)
- [MDN: Publishing games](https://developer.mozilla.org/en-US/docs/Games/Publishing_games) and [Introduction to game development for the Web](https://developer.mozilla.org/en-US/docs/Games/Introduction), consulted on October 26, 2026.
