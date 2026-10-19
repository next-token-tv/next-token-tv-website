---
term: plugin
locale: en
updatedAt: "2026-10-11"
---

## Definition

A plugin is an extension component that adds features to a host program without modifying its core. In the context of AI coding tools, it refers specifically to an extension mechanism that bundles commands, [subagents](/en/wiki/terms/subagent), [MCP](/en/wiki/terms/mcp) servers, hooks and the like into a single installable unit.

## How it works

A plugin's contents are described by a manifest file and usually distributed through a marketplace: the author packages a set of capabilities and publishes it, and the user installs or removes it with one command while the host tool loads the components at runtime. Teams use this to turn internal processes into shareable packages.

## Usage

Whenever a group of [connectors](/en/wiki/terms/connector), commands and skills needs to travel together, packaging them as a plugin is the convenient route — a shared linting setup, a deployment routine or a report-generation kit. Browser extensions and editor plugins follow the same pattern in traditional software.

## Related and confusable terms

A plugin is a packaging and distribution vehicle; [MCP](/en/wiki/terms/mcp) is the protocol many of its integrations rely on; and a [workflow](/en/wiki/terms/workflow) is the fixed process you orchestrate once those capabilities are installed. The smallest unit of packaged capability is closer to a "skill" than to a plugin.
