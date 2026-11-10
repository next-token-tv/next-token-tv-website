---
locale: en
episodes:
  - next-token-weekly--006
status: published
publishedAt: '2026-11-10'
title: 'From Recognizing an Image to Keeping Up with an Object in Your Hand'
description: 'Once a model can return an object’s location, the camera, coordinates, and display update timing start to shape the experience. How can a real-time bounding-box demo move from static recognition to continuous interaction?'
updatedAt: '2026-11-10'
---

The camera looks at an object in your hand, the program draws a box around it, then passes the selected content to be redrawn; as the object moves, the image updates too. Episode six introduced an experiment like this, without providing frame-rate or latency measurements. This action is well suited to exposing one kind of real-time vision problem: is the thing the model recognized still where it was a moment ago?

## First, get the box in the right place

To draw recognition results, the program needs coordinates. For example, the [Gemini image understanding API](https://ai.google.dev/gemini-api/docs/image-understanding#object-detection) uses `[ymin, xmin, ymax, xmax]` in its bounding-box example, with coordinates normalized relative to the image dimensions on a scale of 0–1000. When displaying the box, those values need to be converted using the original image’s width and height. This is the convention for that API; it cannot be applied to every model.

If the model sees a cropped image while the interface displays the full image, the crop offset also needs to be added back. Scaling or mirroring the image changes the coordinate mapping too. A box that consistently appears toward the upper left may simply indicate a conversion problem; there is no need to switch models first.

You can start by checking these transformations with a still image. Once the box is in the right place, connect the camera. That makes it possible to investigate coordinate errors and timing errors separately.

A bounding box is only a rectangle, and may also contain fingers and background. If the redraw should replace only the object’s outline, more precise region selection is needed; an accurate box does not mean segmentation is complete.

## By the time the result returns, the hand has moved

Suppose a cup is on the left in one frame, but by the time recognition returns, it has been moved to the right. Overlaying the old coordinates on the current image can look like tracking failed, even if recognition was completely correct.

Each request should carry the identifier of the frame it corresponds to, and the result should be checked against it when it returns. The browser’s [`requestVideoFrameCallback()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) provides video-frame callbacks and timing metadata that can help associate frames. It does not compensate for recognition time, and it should not be treated broadly as the camera capture clock for every video source.

For results that have become stale, you can display the original frame with its annotation, or discard it and wait for a newer result. The first option works when you want users to pause and confirm an object; the second is closer to a continuously updating image. If requests keep queuing up, results will fall further behind, and stable processing speed for each individual request will not help. The backlog needs to be limited so that every old frame does not have to finish processing before the current image gets its turn.

Continuous following can also be attempted with another implementation: the model identifies the object, a tracking mechanism updates its position between adjacent frames, and redrawing happens again when needed. This is an optional implementation approach; the program demonstration alone cannot tell us which approach it actually uses.

Whichever implementation you use, it is worth trying a few actions that are likely to fail: first hold the object still, then move it quickly out of the frame, and bring back a different object. Whether the old box disappears and whether the new object is recognized again say more about the current state of the interaction than a single successful screenshot.

## Related references

- [An experiment connecting object bounding boxes to interactive gameplay](/en/weekly/006/transcript#quote-9288bb56f08a2927b7bb)
- [Specific description of moving and redrawing a handheld object](/en/weekly/006/transcript#quote-4d51c5e5481b38adc870)
- [Google: Image understanding — Object detection](https://ai.google.dev/gemini-api/docs/image-understanding#object-detection), accessed October 26, 2026.
- [MDN: HTMLVideoElement.requestVideoFrameCallback()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback), accessed October 26, 2026.
