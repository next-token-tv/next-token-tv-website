---
entityType: product
entity: guizang-ppt-skill
locale: en
slot: wiki
updatedAt: '2026-11-02'
seoTitle: "Guizang PPT Skill: an HTML slide-deck skill for AI agents | Next Token Wiki"
seoDescription: "What the Guizang PPT Skill does, how to install it for Claude Code or Codex, and the episode 008 discussion about trust behind its popularity."
---

## What the Guizang PPT Skill is

The Guizang PPT Skill is an open-source skill by [Guizang](/en/wiki/people/guizang) (歸藏, GitHub account op7418) for AI agent environments that can run commands, such as [Claude Code](/en/wiki/products/claude-code) and [Codex](/en/wiki/products/codex). It lets an agent produce web-based slide decks: a single-file HTML presentation with horizontal page flipping, plus matching slide images and social media covers. The project is published under the AGPL-3.0 license in the [GitHub repository op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill).

## Usage and how it works

Per the repository README, the skill encodes layout, color, and image rules as constraints an agent can follow:

- Two visual systems: Style A combines editorial-magazine and e-ink looks for narrative content with 10 layouts; Style B is Swiss International Style with 22 locked layouts, a 16-column grid, and preset theme colors only.
- Presenter mode: dual-window presentation, speaker notes, timed rehearsal, a laser pointer, and freeze/black-screen tools, all running locally.
- Images and covers: slide images can be generated through the Codex image-generation capability at template slot sizes, and covers for WeChat headers and share cards are supported.
- Validation scripts: bundled Node scripts check Swiss-style layout rules, speaker notes, and runtime sync.

The README's stated rationale: HTML/CSS is text that agents can read, edit, and verify directly, so the stricter the constraints, the more stable the generated output.

## Using it and how it differs

Installation adds a skill to an agent rather than installing an app: run `npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill` as the README describes, or simply hand the install instructions to an agent with shell access; the repository is cloned to `~/.claude/skills/guizang-ppt-skill`, after which a phrase like "make me a Swiss-style deck" triggers it. Unlike web-based AI slide generators, it runs inside your own agent environment, and the output is an HTML file you can keep editing in code.

## Discussed on Next Token

In episode 008 (recorded November 1, 2026), in the chapter on [why trust still matters as capabilities spread](/weekly/008/transcript#chapter-10), Yang Pan [used the project as an example: there are thousands upon thousands of PPT skills worldwide, so why do people use the Guizang PPT Skill](/weekly/008/transcript#quote-318147c5e3acb64b4b51) — arguing that once the capability itself is commoditized, personal brand and trust drive the choice; Xiangyang Qiaomu answered with a single word, ["trust."](/weekly/008/transcript#quote-aab85ce2ebe7aa538dbf) This is a participant's point in a discussion about trust, not an evaluation of the project itself.

## Frequently asked questions

### What is the Guizang PPT Skill?

It is an open-source skill by Guizang that lets AI agents such as Claude Code and Codex generate single-file HTML slide decks, with slide-image and social-cover generation and a local presenter mode. See the [GitHub repository](https://github.com/op7418/guizang-ppt-skill).

### How do I install the Guizang PPT Skill?

Run `npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill` as described in the README, or hand the install instructions to an agent with shell access; the repository lands in `~/.claude/skills/guizang-ppt-skill`. See the [README](https://github.com/op7418/guizang-ppt-skill) for details.

### Is the Guizang PPT Skill free?

The project is open source under the AGPL-3.0 license and free to use; see the license terms in the [GitHub repository](https://github.com/op7418/guizang-ppt-skill).

### How does it differ from web-based AI slide tools?

It is not a web app but a skill installed in an agent environment: the output is a local single-file HTML deck that can be edited in code, with layouts and colors constrained by the repository's rules; web tools usually generate and edit inside a cloud editor.

## Sources

- [GitHub repository op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)
