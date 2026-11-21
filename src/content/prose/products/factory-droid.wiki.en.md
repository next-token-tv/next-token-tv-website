---
entityType: product
entity: factory-droid
locale: en
slot: wiki
updatedAt: '2026-11-21'
seoTitle: "Factory Droid: Factory's software development agent and the Droid CLI | Next Token Wiki"
seoDescription: "What Factory Droid is: Factory's software development agent, the Droid CLI for editing, testing, and reviewing code in the terminal, the desktop app for previews and line-by-line review, and how it compares with Devin."
---

## How Droid fits into development work

Droid is Factory's software development agent. Developers can use the Droid CLI in a project's terminal: per the official documentation, it plans, implements, tests, and reviews code changes, keeps humans in the loop through approval workflows, draws on project files, repository instructions, and connected knowledge, and integrates with Jira, Notion, Slack, Linear, PagerDuty, and [MCP](/en/wiki/terms/mcp) tools. Repeating workflows can move to Droid Exec, which runs them with structured input and output in scripts and CI/CD pipelines.

Factory's desktop app can also be used to preview outputs, inspect diffs, and leave feedback.

## Factory Desktop and cross-device sync

The official product page describes Factory Desktop as "the desktop app for your software factory," with native builds for macOS, Windows, and Linux: files and live sites open beside their sessions; design mode lets you select an element in a live preview and tell Droid what to change, keeping feedback attached to that element; and diffs can be reviewed and commented on line by line, as with a teammate's pull request. Sessions stay in sync across the desktop app, web, mobile, and CLI.

## Discussed on Next Token

Episode 011 discusses Droid alongside [Devin](/en/wiki/products/devin) as an alternative coding tool.

## Frequently asked questions

### What is Droid and who develops it?

Droid is the software development agent from Factory (factory.ai), covering code changes, testing, and review. The [official documentation](https://docs.factory.com/droid-cli/overview) describes the CLI and workflows.

### How is the Droid CLI used?

Once running in a project's terminal, Droid shows plans, tool calls, and diffs in an interactive interface and executes work through approval flows; a headless mode connects it to scripts and CI/CD. See the [official documentation](https://docs.factory.com/droid-cli/overview) for details.

### What does Factory Desktop do?

It previews files and live sites beside sessions, offers design mode for selecting elements and directing changes, and supports line-by-line comments on code diffs; sessions sync across desktop, web, mobile, and CLI. See the [product page](https://factory.ai/product/desktop).

### How do Droid and Devin differ?

Both are [coding agents](/en/wiki/terms/coding-agent). Droid is terminal-first through the Droid CLI and plugs into local workflows and CI/CD pipelines; [Devin](/en/wiki/products/devin) executes engineering tasks in its own cloud environment. The choice depends on the execution environment and workflow.

## Sources

- [Droid CLI documentation](https://docs.factory.com/droid-cli/overview)
- [Factory Desktop product page](https://factory.ai/product/desktop)
