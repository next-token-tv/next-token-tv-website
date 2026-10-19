---
term: runtime
locale: en
updatedAt: "2026-10-11"
---

## Definition

A runtime is the environment and supporting system in which a program actually executes: memory management, scheduling, standard libraries, and interaction with the operating system. The word also refers to the concrete software hosting a language's execution, such as Node.js or a browser's JavaScript engine.

## How it works

Once a program starts, the runtime loads the code, allocates memory, executes it and reclaims resources; garbage-collected languages delegate memory management to the runtime. The runtime exposes capabilities to the program through built-in APIs, such as reading files or making network requests.

## Usage

The same JavaScript code can manipulate a page inside a browser runtime or read and write files inside a Node.js runtime — which built-in capabilities a program can use depends on the runtime. Java programs, meanwhile, run on the JVM.

## Related and confusable terms

An [API](/en/wiki/terms/api) is the calling convention a runtime exposes to programs; the runtime is the environment that executes those calls. Runtime is contrasted with compile time: the former is the phase of execution, the latter the phase of translating source code into machine code.
