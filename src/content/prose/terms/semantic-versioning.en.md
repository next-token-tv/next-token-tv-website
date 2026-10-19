---
term: semantic-versioning
locale: en
updatedAt: "2026-10-11"
---

## Definition

Semantic Versioning (SemVer) is a versioning scheme with the format major.minor.patch (for example 2.4.1): a major bump signals an incompatible API change, a minor bump adds backward-compatible functionality, and a patch bump fixes backward-compatible bugs.

## How it works

When releasing, you increment the digit that matches the nature of the change. Package managers use these conventions to decide upgrade behavior — for example, automatically accepting patch and minor updates but never crossing a major boundary on its own.

## Usage

Package ecosystems such as npm rely on SemVer to express compatibility ranges in dependencies (like `^1.2.3`). Releases and changelogs are also described at this granularity.

## Related and confusable terms

[Release notes](/en/wiki/terms/release-notes) explain to users what happened in each version; SemVer defines what the version number itself means. Date-based or plain sequence numbers carry no compatibility information.
