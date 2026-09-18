---
entityType: product
entity: claude-code
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Claude Code: terminal coding agent, uses, and permission boundaries | Next Token Wiki'
seoDescription: 'Learn how Claude Code works with repositories and commands, and why software-engineering review and permissions still matter.'
---

## What Claude Code is

Claude Code is Anthropic’s coding agent for terminal, editor, and software-engineering workflows. Anthropic’s documentation describes a tool that can read repositories, edit files, execute commands, and request confirmation when needed; current setup and configuration belong to the [official overview](https://docs.anthropic.com/en/docs/claude-code/overview).

## Uses and boundaries

Claude Code can help explore an unfamiliar repository, implement features, fix issues, run tests, and maintain engineering documentation. Because it operates in a real development environment, project rules, context, command permissions, and verification results matter as much as the model. Developers should review diffs, dependency changes, and test results.

Terminal access can expose source code, environment variables, and external services. Limit directories and credentials to the task, and keep production or destructive operations behind explicit review. It belongs to the same product family as [Claude](/en/wiki/products/claude), but it is a separate product surface.

## Discussion in the show

Weekly #001’s chapter “Harness evaluation: completion rate, token cost, and the kill line” discusses Claude Code alongside Codex and Claude in the context of tools, context, and execution environments; see the [Chinese transcript chapter](/weekly/001/transcript#chapter-06). An English transcript chapter is not available.

## Frequently asked questions

### How do I install Claude Code?

Anthropic’s [setup guide](https://code.claude.com/docs/en/quickstart) provides the current terminal installation, authentication, and launch path. After installation, start it from the project directory.

### Where are the Claude Code desktop and terminal entry points?

The Claude desktop app has a built-in Code tab, so it does not require a separate CLI install. For terminal work, install the CLI using the [setup guide](https://code.claude.com/docs/en/quickstart); the desktop Code tab is described in the [Claude Desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart).

### How is Claude Code billed?

Claude Code can use Anthropic Console API billing or an eligible Claude subscription; the current authentication and account paths are in the [setup guide](https://code.claude.com/docs/en/quickstart).

### How is Claude Code different from Codex?

Both are coding agents, provided by Anthropic and OpenAI respectively. Compare the actual model, tools, permissions, context, and review workflow for a task instead of inferring the result from the brand name.

## Sources

- [Claude Code](https://www.anthropic.com/claude-code)
- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Code common developer use cases](https://support.claude.com/en/articles/14553517-claude-code-common-developer-use-cases)
