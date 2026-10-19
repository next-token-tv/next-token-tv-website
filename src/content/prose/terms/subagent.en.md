---
term: subagent
locale: en
updatedAt: "2026-10-11"
---

## Definition

A subagent is an agent spawned by a main agent to carry out a specific subtask on its behalf. It usually runs with its own context window, a custom system prompt and a restricted tool set, and returns only a summary of its results to the main conversation.

## How it works

The main agent decides which subagent to delegate to based on task descriptions and hands over the necessary input. The subagent then explores or executes independently inside its own context; the intermediate details of that exploration never fill the main thread, which keeps the orchestrating conversation clean.

## Usage

Typical uses include dedicating one subagent to exploring a codebase, another to running and interpreting tests, or dispatching parallel retrieval on several research topics. The value of context isolation is most visible when a subtask requires extensive reading but yields a short conclusion.

## Related and confusable terms

A subagent is an organizational form of an [agent](/en/wiki/terms/agent); multiple subagents working in parallel constitute [agent teams](/en/wiki/terms/agent-teams). Unlike a [chatbot](/en/wiki/terms/chatbot) that follows a preset flow, a subagent is handed a task it must execute autonomously.
