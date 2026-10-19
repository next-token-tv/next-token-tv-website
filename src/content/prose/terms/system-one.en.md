---
term: system-one
locale: en
updatedAt: "2026-10-11"
---

## Definition

System One (or System One Model) is a model category proposed by TypeSafe AI, officially defined as "a new class of frontier models built to make fast, structured decisions that software can use directly." It is not the psychological concept itself but one company's name for its class of models; the name borrows the distinction in Kahneman's Thinking, Fast and Slow between fast, intuitive System 1 and slow, deliberate System 2.

## How it works

Per the official framing, such models do not generate human-readable text token by token; a call passes in a state and typed questions and returns structured values, probability distributions, and confidence, with TypeSafe describing a new architecture and parallel sampling. TypeSafe calls its Jev the first publicly announced System One model, with the interface grouped into the Choice, Score, and Noul decision primitives.

## Usage

The official positioning is a fast, structured-decision layer inside software workflows: classification, routing, scoring, extraction, bulk filtering, and checking LLM outputs. Weekly #003 devoted several chapters to Jev's practical use and its limits; see the on-site product page for the Jev model.

## Related and confusable terms

Relation to [Token](/en/wiki/terms/token): System One models sit in the same token-based technical lineage, but per the official description they do not follow the generate-text-token-by-token path, so the key difference from chat models is not the token itself but whether the output is a structured judgment or free-form text. Also distinguish System One (the product-category name) from System 1 in psychology, which broadly means intuitive thinking.
