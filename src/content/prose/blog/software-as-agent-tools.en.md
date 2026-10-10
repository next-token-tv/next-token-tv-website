---
locale: en
episodes:
  - next-token-weekly--002
  - next-token-weekly--005
status: published
title: 'Making Software into Tools That Agents Can Actually Use'
description: 'How open a piece of software is to agents depends on whether it exposes capability interfaces, whether results can be inspected, and whether the host can carry the execution. From 3D modeling to editing tools, this line of judgment is taking shape.'
updatedAt: '2026-10-10'
publishedAt: '2026-10-09'
---

Building a 3D model with an agent can look nothing like what you would imagine: [Blender](/en/wiki/products/blender)'s interface sits utterly still, stuck on the welcome screen, while the agent beside it writes code continuously—it is using bpy, Blender's built-in Python interface. After a while it announces the model is done; open the file, and there it is, complete. Across the whole process, the reliance on the graphical interface amounts to nothing more than opening the file at the end to confirm the result.

This case is worth unpacking carefully, because it shows what actually happens when software is genuinely "put to use by an agent": the operations bypass the interface and go through the programming interfaces the software exposes; and the results can be inspected—only then does the loop actually close.

## The Interface Is Not the Entry Point for Agents

Graphical interfaces are designed for humans, relying on visualization and immediate feedback to help people understand state. The more efficient path for an agent is to bypass that layer and call the interfaces directly. One fallback route is Computer Use: model vendors could not wait for software to be retrofitted one product at a time, so they trained models to operate human interfaces, making legacy software usable. Software proactively adapting itself is the other route, and the two are advancing in parallel. But as long as the software exposes an interface, driving the UI is merely a transitional form—behind every click there was always a callable capability.

Operating through interfaces also differs in efficiency. Modeling with bpy consumes almost none of the overhead of "looking at the interface"; token efficiency is high, and the number of intermediate MCP screenshot confirmations is small. [Godot](/en/wiki/products/godot-engine) and other game engines have a similar structure: finish the work and open it to see the result—there is no "operating an interface" step in between.

This suggests a division of labor: let code handle the operating, and let the interface handle the viewing. Software can keep polishing its interactions to be human-friendly while building a separate layer of infrastructure for agent calling efficiency—two channels serving two classes of users, with no need for either to accommodate the other.

## Capability Interfaces and Inspectable Results

The first criterion for whether software is usable by agents is which capability interfaces it exposes. Command-line tools have a natural advantage: in video editing workflows, Codex plus FFmpeg can cut footage directly—not because it operates the interface of some editing application, but because FFmpeg itself is a text interface. By contrast, graphical software that has not opened up an interface cannot be plugged into the same workflow, no matter how polished its UI. This has nothing to do with whether a piece of software is pleasant to use; it is purely a difference in how open the interfaces are.

The second criterion is that results can be inspected. An agent's output has to be verifiable before a task loop closes: the model is built, so open the file to confirm; the layout is generated, so take a screenshot and compare. Inspectability determines whether an agent can correct itself, and it determines at which points a human needs to step in.

## Bundling an Agent In and Opening Capabilities Up Are Two Different Things

Software embraces agents in two ways that are often conflated. The first is putting an agent into your software: a built-in assistant that improves the experience of your own product. Editing software shipping its own agent falls into this category. The second is opening the software's capabilities so external agents can call them.

The difference shows up most clearly in closedness. One editing-software example: it has a Skill-like capability system, but at the time of that recording it could only be used inside the vendor's own agent—external Codex could not call it. The capabilities exist; they are just locked inside the vendor's ecosystem. The other approach is DaVinci Resolve splitting its capabilities into MCP, which any model can connect to; at the time it also placed MCP in the paid edition—openness itself became a paid feature, a sign that software vendors have begun treating "callable by agents" as a capability that can be priced.

The two approaches answer different questions: the built-in assistant serves the users of your own software; opening capabilities lets the software enter other people's workflows. For users who work with multiple agents, it is the second that decides whether a piece of software can appear in their task chains at all.

## The Host Also Has to Keep Up

Even when software opens up its capabilities, the host agent still needs an execution environment to receive them—a link in the chain that is also frequently missing. A counter-example from a vertical design agent: the connected model plainly has coding ability, yet the product actively restricts programming; a reference image for layout can be uploaded, and the agent can even see it sitting in the folder, but when it comes time to actually use it, it cannot—incomplete file system support. Even if the modeling software exposes bpy, a host like this has no way to use it. Ephemeral virtual machines add a persistence problem: every spin-up is a different environment, and context is hard to carry forward.

## Software Becomes an Agent Plugin

Putting the two threads together yields a directional claim: the old pattern was software pulling agents in; the coming pattern is software turning itself into an agent plugin—no longer waiting for some built-in assistant, but making its own capabilities into tools that every agent can call. Product ideas already exist around this direction, such as a replacement for closed-ecosystem editing software built to support external agent calls. Whether the idea holds up depends on whether it can answer the three questions laid out above: are the capability interfaces complete, are the results inspectable, and can the host environment keep up.

Those three also make up a checklist for evaluating any software's "agent usability." Only when all three are met does software stop being merely an interface for humans and become a tool genuinely usable in agent workflows.

## Sources

- [Building models by writing code with bpy](/en/weekly/002/transcript#quote-fe0f9eda66da21490336), [Godot's similar structure](/en/weekly/002/transcript#quote-74af9f2569f40800b725), and [the token efficiency of interface-level operations](/en/weekly/002/transcript#quote-3252d4202577e7b11351)
- [The case for infrastructure built for agent calling efficiency while keeping the interface for humans](/en/weekly/002/transcript#quote-a6541d5453bc83e4b71e)
- [The Computer Use route for software that cannot be retrofitted fast enough](/en/weekly/002/transcript#quote-2fefda8f8f0b427add9a) and [software adapting in parallel](/en/weekly/002/transcript#quote-ee1c77c3f5f3c32bc390)
- [Back to the FFmpeg editing workflow](/en/weekly/002/transcript#quote-555026c6546093f334d0) and [Codex plus FFmpeg in actual use](/en/weekly/002/transcript#quote-44ebeac53c74a2109226)
- [DaVinci Resolve splitting out MCP without tying itself to a single AI](/en/weekly/002/transcript#quote-88e066d70994208c2f85) and [the assessment of that approach to openness](/en/weekly/002/transcript#quote-c7e68571b152b978685f)
- [The design agent's missing execution environment](/en/weekly/002/transcript#quote-d005ab06bf8c7838d1cf) and [the reference image that could be seen but not used](/en/weekly/002/transcript#quote-270690b8a10dceedf73a)
- [Descript supporting only its own agent](/en/weekly/005/transcript#quote-1b705657a948e563b830), [Skill-like capabilities locked inside the vendor's ecosystem](/en/weekly/005/transcript#quote-e95c6b7cd1ae7594e3bd), and [the two modes: built-in agent versus software as plugin](/en/weekly/005/transcript#quote-8bef4b9d3f8a34c4f954)
