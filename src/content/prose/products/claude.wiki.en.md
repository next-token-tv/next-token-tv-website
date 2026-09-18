---
entityType: product
entity: claude
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Claude: Anthropic’s model and assistant family, API, and boundaries | Next Token Wiki'
seoDescription: 'Learn how Claude is offered as an assistant and developer platform, where its documentation lives, and what still needs review.'
---

## What Claude is

Claude is Anthropic’s family of general-purpose AI models and assistants. It is available through the Claude product for direct use and through Anthropic’s developer platform for applications and agents. Model names, availability, and interfaces change, so current details belong to the [Claude product page](https://www.anthropic.com/claude) and [model documentation](https://docs.anthropic.com/en/docs/about-claude/models/overview).

## Uses and boundaries

Claude can support writing, analysis, questions, code, and applications built on a model. Developers call the [Claude API](https://platform.claude.com/docs/en/api/overview) with supported credentials and model identifiers. A model family is not a fixed capability or quota: the surrounding application still owns prompting, tool permissions, data handling, error handling, and review.

Claude and Claude Code are related but separate products. Claude is the general model and assistant family; [Claude Code](/en/wiki/products/claude-code) places a model inside a terminal and software-engineering workflow.

## Discussion in the show

Weekly #001’s chapter “Harness evaluation: completion rate, token cost, and the kill line” discusses Claude and Claude Code together, focusing on how models, tools, and execution environments shape an agent experience; see the [Chinese transcript chapter](/weekly/001/transcript#chapter-06). An English transcript chapter is not available.

## Frequently asked questions

### How do I log in to Claude?

Start at [claude.ai](https://claude.ai/). For desktop use, Anthropic’s [desktop installation guide](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop) links to the official download page.

### How do I connect to the Claude API?

Create a Claude Console account and credentials, then use the [Claude API overview](https://platform.claude.com/docs/en/api/overview) for the Messages API or official SDKs. The API platform is separate from signing in at claude.ai.

### Does Claude have a desktop app?

Yes. Anthropic’s [desktop installation guide](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop) provides macOS and Windows download paths; sign in with a Claude account after installation.

### How is Claude different from Claude Code?

Claude is the general model and assistant family. Claude Code is a coding agent that combines a model, repository context, and terminal tools in a software-engineering workflow. Their permissions, entry points, and usage rules are documented separately.

## Sources

- [Anthropic Claude](https://www.anthropic.com/claude)
- [Claude model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
- [Claude API overview](https://platform.claude.com/docs/en/api/overview)
