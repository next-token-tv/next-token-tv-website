---
term: agent-skills
locale: en
updatedAt: "2026-10-11"
---

## Definition

Agent Skills are an extension mechanism that packages instructions, scripts and related resources into folders — typically a directory containing a SKILL.md file — so an agent can load the right capability on demand instead of keeping every instruction resident in its context.

## How it works

The agent first sees only a skill's name and description. When it judges that a skill matches the current task, it reads the full instructions and accompanying files from the skill's folder. This progressive loading lets one agent carry a large body of domain knowledge while keeping its context lightweight.

## Usage

Skills are a natural home for reusable expertise and procedures: generating documents that follow a house style, processing data in a specific format, or encoding a fixed sequence of steps for an analysis report. Skills are written by teams or communities, and one well-written skill can be reused across many tasks.

## Related and confusable terms

A skill is a capability package that an [agent](/en/wiki/terms/agent) loads, whereas the [agent harness](/en/wiki/terms/harness) is the underlying software that hosts those capabilities and drives the run loop. A person's frequently used skill collection often becomes part of a [personal agent](/en/wiki/terms/personal-agent).
