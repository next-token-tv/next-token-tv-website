---
entityType: product
entity: godot-engine
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Godot Engine: Open-Source 2D/3D Game Engine, License, and Languages｜Next Token Wiki'
seoDescription: 'Godot Engine as a free, open-source 2D and 3D game engine: MIT license, cross-platform export, GDScript and other languages, plus related discussions on the Next Token Weekly show.'
---

## What is Godot Engine

Godot Engine is a free and open-source game engine for creating 2D and 3D games, and it can also be used for non-game applications. Development is community-driven and supported by the not-for-profit Godot Foundation, and the source code is released under the permissive MIT license: the official documentation states that the engine is completely free and open source, "no strings attached, no royalties, nothing," and that users' games are theirs down to the last line of engine code. Searching "Godot" also surfaces Samuel Beckett's play *Waiting for Godot* — a same-name ambiguity, not the engine.

Technically, Godot organizes games around a Node and Scene system, provides a dedicated 2D rendering engine alongside its 3D renderer, and includes XR capabilities such as built-in OpenXR and WebXR support. Games can be scripted in the engine's own GDScript, in C#, or in C++, and other languages can be added through GDExtension; the official site notes that as of Godot 4.2, C# support is limited to desktop and mobile platforms.

## Uses and boundaries

The editor is available from the [official download page](https://godotengine.org/download) for Windows, macOS, and Linux, and a Web editor runs in the browser. Games can be exported with one click to the major desktop platforms (Linux, macOS, Windows), mobile platforms (Android, iOS), and the web; console deployment goes through third-party publishers, which the official site describes as a console-ecosystem requirement rather than an engine limitation.

Everything beyond the engine — art, audio, code, and distribution — is the developer's responsibility or a third-party choice. Godot releases move quickly; the official [release policy documentation](https://docs.godotengine.org/en/stable/about/release_policy.html) covers which version to pick for a new project and when to upgrade, and the download page lists the current release.

## Mentioned on the show

In the Weekly #002 chapter "Blender 与代码：给模型合适的工具" (Blender and code: giving the model the right tools), Guizang described how AI builds models in [Blender](/en/wiki/products/blender) through the bpy interface with pure code, with no visible operations in the UI, and [noted that Godot Engine, which he uses for game making, works in a similar way — once the task is done, opening it shows the result directly, with no UI operation process](/weekly/002/transcript#quote-74af9f2569f40800b725) in Chinese transcript. Yang Pan followed up: upcoming software needs one set of interfaces optimized for agent invocation efficiency and another for human interaction. The context is "give the model the right tools and improve token efficiency" — a working-style example from a participant, not a review of the engine.

## FAQ

### Is Godot Engine free? Do I pay royalties for commercial releases?

It is free. The official documentation states that Godot is completely free and open source under the MIT license, with no royalties; "users' games are theirs, down to the last line of engine code." Commercial releases do not pay the engine anything.

### Where do I download Godot Engine?

From the [official download page](https://godotengine.org/download), which lists builds for each operating system; a Web editor is also available without installation, as described in the [official documentation](https://docs.godotengine.org/). Older and experimental versions are in the download archive.

### What programming languages does Godot use?

The engine ships with GDScript and also supports C# and C++, with other languages available through GDExtension. Note that since Godot 4.2, C# covers desktop and mobile platforms only; the [official documentation](https://docs.godotengine.org/en/stable/about/introduction.html) discusses the language options.

### How does Godot compare to Unity or Unreal?

The most direct difference is licensing: Godot is an open-source engine under the MIT license with no royalties, and the engine itself can be modified freely, while Unity and Unreal are commercial engines with their own subscription and revenue-sharing terms. Capabilities, ecosystems, and fit differ per project, so compare against your project's needs.

### Can games made with Godot ship on consoles?

Yes, but through a different path: Godot exports directly to desktop, mobile, and web platforms, while console deployment is handled by officially licensed third-party porters and publishers, a console-ecosystem requirement.

## Sources

- [Godot Engine official website](https://godotengine.org/)
- [Godot documentation: Introduction (license and FAQ)](https://docs.godotengine.org/en/stable/about/introduction.html)
- [Godot official download page](https://godotengine.org/download)
- [Godot documentation: release policy](https://docs.godotengine.org/en/stable/about/release_policy.html)
