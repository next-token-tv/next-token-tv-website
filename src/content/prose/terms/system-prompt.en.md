---
term: system-prompt
locale: en
updatedAt: "2026-10-11"
---

## Definition

A system prompt is an instruction injected by the developer or product before a conversation begins, setting the model's role, rules and output constraints; it is typically invisible to end users.

## How it works

Most APIs expose it as a message in a dedicated system role placed at the front of the conversation, where it joins the user messages in the model's context. It is a convention rather than a hard guarantee: attacks such as prompt injection can still bypass its rules.

## Usage

Defining a chatbot's persona and boundaries, fixing the output format, and embedding product rules or safety policy are all typically written into the system prompt.

## Related and confusable terms

Contrast with the ordinary [prompt](/en/wiki/terms/prompt): the system prompt is a standing instruction, the user prompt a one-off input; both are part of the model's [context](/en/wiki/terms/context).
