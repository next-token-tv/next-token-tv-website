---
term: connector
locale: en
updatedAt: "2026-10-11"
---

## Definition

A connector is a configured integration that links an agent or AI assistant to external tools, data sources and services. Once connected, the model can read data from that system and act on the user's behalf; in Claude, connectors are largely built on the [Model Context Protocol](/en/wiki/terms/mcp) (MCP).

## How it works

The user authorizes a connection to a service such as a calendar, drive or database, and the connector translates that service's capabilities into a standard interface the model can call. Anthropic maintains a directory of curated connectors, so most users enable what they need rather than building it themselves.

## Usage

Typical scenarios include having an agent answer questions from cloud documents, write meeting notes into a collaboration tool, or look up order data inside a support system. Enterprises also expose internal systems to agents through private connectors under access controls.

## Related and confusable terms

A connector emphasizes reaching one specific service, while [MCP](/en/wiki/terms/mcp) is the open protocol it commonly rides on. A [plugin](/en/wiki/terms/plugin) is a packaging and distribution vehicle that may contain connectors, commands and skills. When several connectors' capabilities are chained into fixed steps, the result is a [workflow](/en/wiki/terms/workflow).
