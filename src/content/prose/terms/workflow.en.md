---
term: workflow
locale: en
updatedAt: "2026-10-11"
---

## Definition

A workflow is a process orchestrated through predefined steps. In the AI context it pairs against the [agent](/en/wiki/terms/agent): in a workflow, developers prescribe the execution path and the model runs along it, whereas an agent decides its own steps.

## How it works

The developer breaks the task into fixed stages — say "retrieve first, then have the model summarize, then format to a template" — and chains them in code or an orchestration tool, invoking the model only within each stage. Because humans control the path, results are more predictable and costs more controllable, at the price of handling less variance outside the path.

## Usage

Workflows suit tasks with stable steps and high volume: batch content generation, form review, ticket triage and the like. A common piece of engineering advice follows from this — prefer simple workflows first, and reach for an [agent](/en/wiki/terms/agent) only when the task genuinely requires autonomous decisions.

## Related and confusable terms

The core difference between a workflow and an [agent](/en/wiki/terms/agent) is who decides the path: humans for workflows, the model for agents. They often combine — an [agent harness](/en/wiki/terms/harness) can serve as one stage inside a workflow, while [connectors](/en/wiki/terms/connector) and [plugins](/en/wiki/terms/plugin) supply the ability to reach external systems.
