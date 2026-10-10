---
locale: en
episodes:
  - next-token-weekly--003
status: published
title: 'Icons, book illustrations, and publishing: what AI-generated vector graphics are for'
description: 'An icon a few dozen pixels wide, an illustration headed to print, a logo blown up on a giant screen — none of these need a pixel image; they need vector graphics that can keep being edited.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-23'
---

Enlarge an AI-generated image a few times and the edges start to blur. On screen it may still pass, but once it enters icons, print publishing, or large-screen display, blurred edges make it a reject. These scenarios never needed "an image" in the first place — they need a set of shapes described by curves and editable afterwards: vector graphics.

Image generation models output pixel arrays; vector graphics take another road. Formats like SVG record paths and shapes, scale without distortion, and every anchor point and color can be modified at any time. However strong image-generation models get, they cannot change the fact that their output is pixels. Vector generation therefore becomes a problem of its own.

## How hard can drawing one small icon be

The SVG icons common in interfaces are far harder to draw than they look. In a frame a few dozen pixels square in [Figma](/en/wiki/products/figma), you trace Bézier curves point by point with the pen tool, or cut and combine basic shapes with boolean operations. Skilled hands work faster, but people who are genuinely good at icons are rare — one figure cited from experience: twenty icons take a day.

The difficulty comes from size and tolerance for error. An icon is only a few dozen pixels, so a deviation of a few is plainly visible, and a slight error in a curve's arc bends the whole glyph. Unlike illustration, which tolerates mistakes through overall atmosphere, an icon demands precision in every stroke. More troublesome still, icons rarely exist alone — a set shares its grid, stroke widths, and corner-radius rules, so changing one means preserving the consistency of the whole group. None of these constraints can be satisfied by "drawing something that looks right"; they all live at the path level.

That is exactly why icon work is difficult for image-generation models to do incidentally: pixel output gives you no anchors to adjust, and every regeneration makes the style drift again. Bézier curves and boolean operations are the basic vocabulary of this work — and they happen to be what code is best at manipulating, since a path is data: coordinates, arcs, and composition relations can all be read and modified by a program.

General-purpose models have never been particularly good at this task. Ask a large model to draw everyday interface icons, and the shapes often will not hold while the details blur into a mess — a repeated observation from daily use, not a benchmark conclusion.

## What the specialized model demonstrated

A demonstration by a model built specifically for SVG ([Arrow](/en/wiki/products/arrow)) left a deep impression on those watching: a pelican riding a bicycle, its feathers traced stroke by fine stroke, the wheel spokes dense and deliberately exaggerated — a detail density far beyond the general-purpose models compared live alongside it. An assessment like "ten thousand times better than every model" is rhetorical exaggeration and should not be taken literally; what can be confirmed is only that, in the demonstration, its control over strokes and detail clearly exceeded the level people are used to seeing.

As for whether it is comprehensively stronger than general-purpose models, there is currently only a demonstration and no systematic comparison. That judgment should be left to actual samples of editability and output quality. A different trajectory is worth considering, though: this capability might be absorbed by frontier models and become part of general ability — there is already precedent of a model turning a photo into a line drawing via code. A specialized model's room to survive depends on cost (small parameters, low training cost) and on whether it can occupy a stable position in design workflows. There are real signs on the demand side: a wave of AI products aimed at design and at replacing existing design tools is emerging, and they have a genuine need for a supply of editable vector assets — that may be the commercial reason for a specialized model to keep an independent form.

## From icons to publishing illustrations

The value of vector graphics goes beyond icons. Print publishing is the most demanding scenario: illustrations headed to press must adapt to different layouts and paper, stay sharp at any enlargement, and remain editable in detail afterwards. Using image generation for book illustrations is not dependable; vector graphics are this industry's native language.

Attempts to turn text into vector graphics automatically already exist. A service called [Napkin](/en/wiki/products/napkin) converts selected text into diagrams, but its layout options are quite limited. If vector-generation models matured enough for wide use, there would be room to imagine new ways of illustrating print publishing — as of now, though, this remains speculation, unverified in practice.

Large-screen display is another natural scenario. From a phone icon to a conference hall's big screen, the size span a single set of graphics has to cover keeps growing, and an infinitely scalable vector format is the only option that never needs redrawing.

## The form it takes inside a workflow

Keeping a dedicated model around just for drawing SVG is unrealistic for most users. The more natural form is to provide it as an interface — an MCP tool or a similar skill call — so that existing agents can reach for graphics whenever they need them. One concrete gap is presentation generation: existing skills call an icon library to cover common needs, but when richer, more content-fitting graphics are required, the icon library runs out, and custom generation is exactly what fills that gap.

Custom generation for the moments icon libraries fall short, and the missing execution environment for design agents, are two sides of the same need: design work requires not just "generating an image" but a complete flow in which what is generated can be edited afterwards, dropped into layouts, and arranged alongside other assets. Whether models like this are useful comes down to two concrete things: whether the SVG they output is clean and editable, and whether it holds up under enlargement and modification in a real layout. Both questions are still waiting on more samples of actual output.

## Sources

- [The difficulty of drawing icons and the SVG specialized model's demo](/en/weekly/003/transcript#quote-99e82db7b58fb55934a2)
