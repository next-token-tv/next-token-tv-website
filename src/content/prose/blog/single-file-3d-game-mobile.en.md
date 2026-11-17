---
locale: en
episodes:
  - next-token-weekly--010
status: published
publishedAt: '2026-11-17'
title: 'A 3D Game Fits in One HTML File. How Do You Get It onto Phones?'
description: 'An AI-assisted 3D action game shrank from over 100 MB to about 8 MB. The case shows what single-file delivery means for package size, time to first play, and combat feedback on a phone.'
updatedAt: '2026-11-17'
---

The attachment you send a friend for a playtest is a single `.html` file. Open it in a browser and you can control a character in a 3D scene, trigger attacks with animated effects, and hear music and sound effects. An action game prototype built with help from Fable 5.2 was delivered this way. The creator described more than twenty models, character animations, textures, and three music tracks. The mobile build went from over 100 MB to about 8 MB.

A single file is easy to pass around and try. Getting it into a mobile distribution channel makes the trade-offs more concrete. How long does a player wait after opening it? Does the first attack respond smoothly? Which visual details are worth keeping as the package gets smaller?

## One file still carries a whole game's assets

HTML can reference separate scripts, images, and audio files. It can also carry the asset data itself. A `data:` URL, for example, embeds a resource in the page, and Base64 can represent binary data as text. Base64 uses four characters for every three input bytes, so the encoded text is about a third larger than the original binary before transport compression. A single file simplifies delivery. The assets still take up space in the package.

With a single-file build, every embedded asset travels with the page, even if the music for level two will go unused for several minutes. If players mostly try the game from a website, later levels and their music can load when a player reaches them. Separate assets can also be cached independently, so a tweak to a gameplay parameter can leave the browser's cached copies of the artwork intact. In this case, the creator first got the file down to about 30 MB, then cut it further to fit a 10 MB upload limit on the mobile distribution channel.

## Save room for what players need in the first minute

In the mobile playtest described by the creator, visual detail was reduced while the character moves and their key effects were preserved. The episode gives the resulting size of about 8 MB. It gives no asset-by-asset compression settings. The useful lesson for another game is to decide which assets deserve space based on the camera and the way the game plays.

Take a top-down action game. A character winding up, an enemy telegraphing an attack, and the feedback on impact all help the player decide what to do next. Preserve those first. If the usual camera angle gives a distant stone wall only a sliver of the screen, try a lower-resolution texture there. Compare the old and new builds on the same phone at the moments when attacks start and land. Check that the cues players rely on are still easy to see.

An agent can help with this work. Give it the package limit and the animations and sounds that need to survive. Ask for a breakdown of the built file by models, textures, audio, and code, then work through the largest items one at a time. Record which asset changed and how many bytes it saved in each pass so a playtest regression can be traced to a specific change.

## Measure how long it takes to get control

Upload size, bytes transferred over the network, and time until the player can act answer three different questions. A server can use gzip or Brotli to cut transfer size. An upload limit is measured against the file you submit. After the download, the browser still has to parse the page, prepare models and textures, and draw the scene. Test on the target device to see whether a smaller build actually shortens the wait.

Clear the cache on a target phone, open the game on a slow connection, and time how long it takes for the character to respond to touch. Then play through a round. Check whether enemy attacks are readable, movement and attacks respond smoothly, and sound effects land in time. A long cold start points to the assets needed for the first scene. A scene that opens quickly and drops frames during combat calls for a closer look at the rendering workload. Each result gives you a different place to spend the next round of work.

## Sources

- [Building the 3D scene and opening camera work](/weekly/010/transcript#quote-beff84ecfc55665d5593), [the roughly 30 MB intermediate version](/weekly/010/transcript#quote-309553c2d8d5d9232144), and [the models, animation, and sound in the single HTML file](/weekly/010/transcript#quote-48a8d3c373bc0f5bddc2)
- [The mobile package limit and the roughly 8 MB build](/weekly/010/transcript#quote-09db0fcb0951e24e5bbd) and [what the mobile playtest preserved and changed](/weekly/010/transcript#quote-cb41b0c371f925992a78)
- [RFC 2397 on embedding resources with `data:` URLs](https://www.rfc-editor.org/rfc/rfc2397.html) and [RFC 4648 on Base64 encoding](https://www.rfc-editor.org/rfc/rfc4648.html#section-4)
- [RFC 9110 on HTTP content coding](https://www.rfc-editor.org/rfc/rfc9110.html#section-8.4) and [Chrome DevTools on disabling the cache, throttling the network, and viewing resource sizes](https://developer.chrome.com/docs/devtools/network/reference)
