---
term: agent-teams
locale: en
updatedAt: "2026-10-11"
---

## Definition

Agent teams describe an arrangement in which multiple agents divide work, communicate and coordinate to complete complex tasks that a single agent would struggle with alone. In the research literature this corresponds to the long-standing concept of a multi-agent system.

## How it works

A common pattern is an orchestrator: a lead agent decomposes the task and dispatches subtasks to several parallel [subagents](/en/wiki/terms/subagent), then integrates their results. Agents exchange progress through structured messages; in practice, teams also have to manage coordination costs such as duplicated work, lost context and error propagation.

## Usage

Typical scenarios include splitting a large research report into parallel retrieval and writing tasks, or assigning exploration, modification and testing of a large codebase to different agents. When the required information does not fit into a single context window, divide and conquer is one of the main motivations.

## Related and confusable terms

Agent teams are composed of [agents](/en/wiki/terms/agent), and the collaborating units are usually subagents. Unlike a [chatbot](/en/wiki/terms/chatbot) that follows a fixed conversational script, the emphasis is on task division rather than dialogue. How a team is orchestrated and scheduled depends on the [agent harness](/en/wiki/terms/harness) it runs on.
