---
entityType: product
entity: blender
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Blender: open-source 3D suite, bpy scripting, and AI modeling | Next Token Wiki'
seoDescription: 'What Blender is, its official entry points, the bpy Python API, and how the Weekly show discussed AI agents modeling through code.'
---

## What Blender is

Blender is a free and open-source 3D creation suite maintained as a public project hosted on blender.org, licensed under the GNU GPL and owned by its contributors. It covers modeling, sculpting, rigging and animation, rendering with the built-in Cycles engine, visual-effects camera and object tracking, and 2D drawing with Grease Pencil; the official site notes it has been used for numerous short films, advertisements, TV series, and feature films. Current releases and installers for each platform are listed on the [official download page](https://www.blender.org/download/).

## Usage and boundaries

The official entry point is [blender.org](https://www.blender.org/), which offers installers for Windows, macOS, and Linux. The software itself is free, supported by donations and a store. Beyond its graphical interface, Blender ships a complete [Python API (bpy)](https://docs.blender.org/api/current/): modules such as `bpy.data` and `bpy.ops` read and write scene data and invoke operators, and Blender can also run as a standalone Python module without the GUI. Modeling, rendering, and other tasks can therefore be done entirely through scripts — the same project file can serve a human artist or be driven by an automation tool or an AI agent.

One distinction matters: Blender itself is not an AI product and ships no generative models. AI workflows around Blender are external models or agents driving it through bpy and similar interfaces. Render quality, scene structure, and performance remain the concerns of 3D production itself.

## Discussion in the show

In Weekly #002's chapter "Blender 与代码：给模型合适的工具" (Blender and code: giving models the right tools), [Guizang describes how he observed an AI agent modeling](/weekly/002/transcript#quote-fe0f9eda66da21490336): instead of driving the interface with computer use, the agent wrote code against bpy, the Blender UI stayed untouched, and the finished model simply appeared. Yang Pan added that this approach is very token-efficient. The same chapter compares DaVinci Resolve's MCP-based exposure of its tools. Guizang returns to Blender as an example of how models demonstrate 3D ability in the chapters "GPT-6 Astra：从 3D 建模聊起" and "设计 Agent 为什么也需要执行环境". These are participant observations, not an evaluation of Blender itself. See the [episode 002 chapter](/weekly/002/transcript#chapter-04).

## Frequently asked questions

### What is Blender?

Blender is a free, open-source 3D creation suite covering modeling, sculpting, animation, rendering, effects tracking, and 2D drawing, maintained as a GNU GPL-licensed public project on blender.org; see the [official site](https://www.blender.org/).

### Is Blender free, and where is the official website?

Yes. The official site states Blender is "Free and Open Source software, forever" under the GNU GPL, supported by donations and a store. Downloads are on the [official download page](https://www.blender.org/download/), with installers for Windows, macOS, and Linux.

### What is bpy? Can Blender be automated with scripts or AI?

bpy is Blender's official Python API, with modules such as `bpy.context`, `bpy.data`, and `bpy.ops` that script nearly everything from mesh editing to rendering; Blender can also run as a Python module outside the app, per the [official API documentation](https://docs.blender.org/api/current/). AI agents commonly model through this interface by writing code rather than simulating mouse clicks on the UI.

### Which operating systems does Blender support?

The download page lists Windows (x64 and ARM), macOS (Apple Silicon), and Linux builds, plus distribution via Steam, the Microsoft Store, and others; current versions and requirements are on the [download page](https://www.blender.org/download/).

## Sources

- [Blender official website](https://www.blender.org/)
- [Blender download page](https://www.blender.org/download/)
- [Blender Python API documentation](https://docs.blender.org/api/current/)
