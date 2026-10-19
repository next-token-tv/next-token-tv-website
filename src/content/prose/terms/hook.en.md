---
term: hook
locale: en
updatedAt: "2026-10-11"
---

## Definition

A hook is an extension point a program reserves at specific events or lifecycle stages, allowing external code to inject custom logic without modifying the main program.

## How it works

The main program calls registered callbacks at key points: external code only needs to register following a convention, and it runs when the event occurs. Git's pre-commit hook and the lifecycle hooks of front-end frameworks are typical examples.

## Usage

Hooks power build automation, plugin systems and audit interception; in AI agent toolchains, hooks are often used to insert validation or human-approval logic before and after tool calls.

## Related and confusable terms

An [agent](/en/wiki/terms/agent) is a system that executes tasks autonomously, while a hook is the mechanism for inserting human or custom logic into it; a [workflow](/en/wiki/terms/workflow) defines how tasks are orchestrated, and a hook defines the intervention points at specific nodes along that path.
