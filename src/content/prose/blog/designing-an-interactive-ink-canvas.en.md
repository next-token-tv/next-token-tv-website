---
locale: 'en'
episodes:
  - 'next-token-weekly--010'
status: published
publishedAt: '2026-11-17'
title: 'A Stroke of Ink, and a Fish Changes Course'
description: 'Follow one drawing gesture from input samples to ink, wind, and fish behavior, with practical ways to compare pointer devices and debug the interaction.'
updatedAt: '2026-11-17'
---

A cursor moves slowly from the left side of a canvas to the right, leaving a trail of ink. A breeze pushes the ink sideways. A fish swimming nearby changes course slightly. The viewer does not need to see the equations to understand that things in the image affect one another. If the fish suddenly teleports, or the ink drifts against the visible wind, that understanding breaks down.

A prototype described on the show used SVG for its imagery, responded to mouse position, and included interactions among fish, a dragon, ink, and wind. The passages on [the image and mouse position](/weekly/010/transcript#quote-8f2765158585edd7607d) and [interactions among objects](/weekly/010/transcript#quote-21320602ed25ea960adb) give us a starting point. Imagine a canvas that lets a single gesture affect both an ink trail and the creatures around it.

## How does a drag become an ink stroke?

Suppose the canvas starts sampling when a pointer goes down, records position and time as it moves, and ends the stroke when it is released. The program can estimate speed from the distance and time between samples, then turn the trajectory into a series of ink marks or a path. Slow movement might leave denser ink and fast movement a lighter trail. That is an artistic rule to tune visually, not an inevitable property of real ink.

Sampling need not mean drawing a circle for every event. Uneven event intervals can leave gaps during a fast drag, so the program can interpolate between positions and limit the effect of extreme speeds. Stroke beginnings, pauses, and endings deserve separate attention. Otherwise a line can jump abruptly in thickness at its boundaries.

## How can wind, ink, and fish follow coherent rules?

In this hypothetical design, the canvas maintains a wind direction that varies across space and time. Local wind slowly moves the ink, while separate limits govern its spread and fade. A fish turns gently as it approaches a dense patch. A dragon could respond too, with a different strength and delay. One gust first changes the ink’s position, then indirectly changes what the fish encounters. The viewer can follow the chain of cause and effect.

The rules need limits. Cap displacement in strong wind, constrain how quickly a fish can turn, and remove ink only after it fades past a threshold. If every object responds instantly to every tiny fluctuation, the scene may jitter. Some smoothing and delay can preserve continuity while keeping the effect of the original gesture visible.

## How does the gesture work on another device?

Pointer Events provides a common event interface for mouse, pen, and touch, with fields including `pointerType` and `pressure`. For a device without pressure sensing, the specification assigns a pressure of 0.5 while a button is active. That value should not be interpreted as a user applying half pressure.

Suppose mouse hover previews where a stroke will begin, while pressing and dragging draws ink. On a touchscreen without usable hover, the canvas can show feedback on contact and draw as the finger moves. When a pen reports pressure, the app might map it to ink density and offer an option to adjust or disable the mapping. Pressure behavior varies by hardware, so the same task should remain usable without it.

## How can you see which rule failed?

For debugging, record an input path and replay it from the same initial conditions. Show the raw samples, interpolated path, local wind direction, and fish steering vector side by side. First disable wind and check stroke continuity. Then enable wind, and finally add the fish. Fix the random seed or turn randomness off during comparison so a rule change can be distinguished from a chance variation.

A beautiful still frame is only one part of the result. The gesture should work across input devices, and the resulting changes should remain legible enough for a viewer to follow their causes.

## Sources

- [W3C: Pointer Events Level 3](https://www.w3.org/TR/pointerevents3/)
