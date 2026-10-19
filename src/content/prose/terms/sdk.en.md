---
term: sdk
locale: en
updatedAt: "2026-10-11"
---

## Definition

A software development kit (SDK) is a bundle of resources for building on a specific platform or service, typically including libraries, APIs, documentation, sample code, and build or debugging tools. The goal is to let developers build apps or integrate services on a target platform without starting from zero.

## How it works

A developer references the SDK's libraries in a project and calls its interfaces; the SDK in turn translates those calls into requests against platform capabilities or remote services. During a build, the toolchain packages code that depends on the SDK into a runnable application.

## Usage

Building for iOS or Android requires the platform's SDK. Integrating third-party services such as payments, maps or analytics is usually done through the official SDK rather than calling the underlying API directly.

## Related and confusable terms

An [API](/en/wiki/terms/api) is the calling convention itself, while an SDK is a packaged entity of libraries, tools and docs — many SDKs essentially wrap APIs. Developers also commonly pair an SDK with [CLI](/en/wiki/terms/cli) tools for building, managing emulators and deploying.
