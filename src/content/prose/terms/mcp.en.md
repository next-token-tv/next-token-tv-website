---
term: mcp
locale: en
updatedAt: "2026-10-11"
---

## Definition

The Model Context Protocol (MCP) is an open protocol that gives AI applications a standardized interface for connecting to external data sources and tools, proposed and open-sourced by Anthropic in 2024. It is often compared to a "USB-C port" for AI applications.

## How it works

MCP follows a client-server architecture: the AI application acts as the client and connects to MCP servers that expose specific capabilities. Each server wraps a file system, database or third-party service in the protocol's common format, so an integration built once on either side can be combined with anything on the other.

## Usage

Developers use MCP to let agents read local files, query enterprise databases or call SaaS services. End users typically encounter it through [connectors](/en/wiki/terms/connector) or [plugins](/en/wiki/terms/plugin) that package ready-made MCP integrations, with no code required.

## Related and confusable terms

MCP is the protocol itself. A [connector](/en/wiki/terms/connector) is an integration that uses the protocol to reach a specific service; a [plugin](/en/wiki/terms/plugin) bundles MCP servers together with other components for distribution; and a [workflow](/en/wiki/terms/workflow) is how those tool capabilities get orchestrated into a fixed process.
