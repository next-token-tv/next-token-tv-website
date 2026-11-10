---
locale: en
episodes:
  - next-token-weekly--006
status: published
title: 'As models get stronger, what should remain in a Skill?'
description: 'General capabilities, personal preferences, project resources, and execution methods are packed into the same Skill. After a model upgrade, which content is worth keeping, and which should be revalidated?'
updatedAt: '2026-11-10'
publishedAt: '2026-10-19'
---

Can a single sentence already get a model to make a video? Does it still need a video-editing Skill installed? If all you want is a picture and sound, you might get a result quickly. But if you want to use your own subtitles, assets, pacing, and publishing specifications, the problem becomes much more specific.

A presentation about producing an AI news briefing showed another level of complexity: the user gives a prompt that asks a Bot to install four or five existing Skills, then calls on them to complete the task. An arrangement originally created to avoid repeating instructions gradually needs another layer of instructions before it can be used. The boundary between Prompts and Skills becomes blurred, but the things users want to preserve may not be the same.

## A model’s ability to do the work is one thing; knowing what you want requires another layer of information

Imagine a video-editing Skill as having several different parts. How to cut between shots and how to generate subtitles are methods for completing the task. Where the intro file is, which font to use, and how to export in landscape and portrait formats are project materials and preferences. Which clips must not be removed and who should approve the finished video are specific work requirements.

A model upgrade may change the first part. Methods that once needed step-by-step explanation may later work reliably with a single sentence, making the old, lengthy instructions worth reviewing. But the other parts do not come with answers just because the model has become stronger. A general-purpose model cannot learn from general knowledge which version of the intro a team has just approved.

So when deciding whether a Skill is outdated, don’t look only at whether the model can complete a similar demo. A more useful comparison is: without it, which results the user cares about would change? If the only changes involve outdated operating steps, trimming them may simplify the process. If what gets lost is the project specification, a reliable place to store it is still needed.

## A Skill can store procedures and resources

Anthropic’s introduction to Agent Skills defines them as instructions, scripts, and resources organized in directories, with progressive loading used to reduce irrelevant content in the context. This design shows that a Skill can be more than a prompt: it can also hand well-defined calculations to scripts and keep materials needed for only some tasks in separate files.

For example, suppose every output must follow the same file-naming rules and include covers in several fixed sizes. Encapsulating these requirements in a program that can be run repeatedly means the model does not have to reinvent the process every time. The model handles understanding the content for this task; the program carries out transformations that have already been specified.

But bundling things together does not mean they should all run automatically. Whether the resources apply to the current project, whether script dependencies are in place, and whether the generated result meets the requirements still need to be checked. A content-rich Skill can still contain incorrect assumptions or an operating path that no longer works.

## Layers of encapsulation can hide decisions

When one prompt asks for multiple Skills to be installed, and each Skill in turn references other prompts, the hardest thing to find is often not the entry point, but where a particular decision came from.

Imagine two content Skills that both set a headline style: one calls for restraint, the other for strong click appeal. Each may be useful on its own, but loading both can cause one to override the other. Adding another layer of master prompt may not resolve the conflict; it may instead make it harder for users to know which file to change.

One way to break down this complexity is to start with ownership: keep general production methods in reusable capabilities, manage project preferences in project materials, and put exceptions for the current task in its requirements. When each layer is responsible for different information, there is no need to copy the same font or headline rule into every file.

This is an organizational recommendation, not a guarantee that comes with any particular format. The actual results also depend on whether the Agent can find the right materials and how it handles conflicting requirements.

## When cleaning up, compare against old tasks

After a model update, deleting every Skill outright or keeping every historical patch forever both lack a solid basis. A more reliable approach is to pick several recurring tasks and compare versions using the same inputs: the full Skill, a streamlined version with the general steps removed, and a version that uses no Skill.

The results to observe can also be specific: whether the correct assets were used, whether the output specifications were met, where a person had to give a reminder, and whether extra rework was needed afterward. This comparison should not rely on a single polished example; in particular, failures that the old Skill once fixed should be included in the validation again.

The content that remains may spend less time on common knowledge that the model already has and more time recording facts and constraints specific to this work. Whether a Skill is worth keeping depends on whether it can reliably convey that information. What matters far more than whether the file is called a Prompt or a Skill is what it stores.

## Related resources

- [Even when models can edit video, style requirements still need to be expressed](/en/weekly/006/transcript#quote-1e34f8e5e05b53e87674)
- [Producing a news briefing with a prompt that calls multiple Skills](/en/weekly/006/transcript#quote-586e55e466f63a0828d9)
- [Discussion about periodically cleaning up Skills](/en/weekly/006/transcript#quote-d32a9a2b95ac1cbd5f9a)
- [Anthropic: Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), October 16, 2025.
