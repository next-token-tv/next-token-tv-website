---
term: agent
locale: en
updatedAt: "2026-10-11"
---

## Definition

An agent is a software system that perceives its environment, makes decisions autonomously and uses tools to pursue a goal. In the AI context, an LLM usually serves as the reasoning core. Unlike a single question-and-answer call, an agent can keep acting across multiple steps and adjust its next move based on intermediate results.

## How it works

Agents typically run in a feedback loop: gather context, take action (calling tools, running code or accessing external systems), verify the outcome and repeat until the task is done. The model decides when and which tool to call; tool outputs flow back into the model's context as new input for the next decision.

## Usage

Common applications include coding agents that edit codebases and run tests, deep research agents that search and synthesize sources, and task automation in support and back-office workflows. Tasks with a clear goal but steps that are hard to enumerate in advance are a natural fit for an agent loop.

## Related and confusable terms

An agent can delegate work to a [subagent](/en/wiki/terms/subagent) or operate as part of [agent teams](/en/wiki/terms/agent-teams); the form focused on one person's daily tasks is a [personal agent](/en/wiki/terms/personal-agent). The software layer that runs an agent is the [agent harness](/en/wiki/terms/harness), and [agent skills](/en/wiki/terms/agent-skills) extend what an agent can do on demand. A program that only follows a conversational script is better described as a [chatbot](/en/wiki/terms/chatbot).
