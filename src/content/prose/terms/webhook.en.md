---
term: webhook
locale: en
updatedAt: "2026-10-20"
---

## Definition

A webhook sends an HTTP request to a configured URL when an event occurs, allowing one system to notify another.

## Usage and distinctions

A code push can trigger a build, or an incoming message can start an automation. Instead of repeatedly polling for changes, the receiver accepts event deliveries. It should verify the sender and account for duplicate deliveries and retries.
