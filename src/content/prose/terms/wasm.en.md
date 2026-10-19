---
term: wasm
locale: en
updatedAt: "2026-10-11"
---

## Definition

WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine that executes in sandboxed environments such as browsers at near-native speed.

## How it works

Languages like C, C++ and Rust are first compiled into .wasm binary modules, which the host runtime instantiates and executes; a module runs inside a sandbox, can only reach interfaces the host explicitly provides, and interoperates with JavaScript.

## Usage

Games, audio/video editing and simulations on the web, portable plugin systems for desktop and server software, and lightweight server-side and edge runtimes.

## Related and confusable terms

Wasm is not an [operating system](/en/wiki/terms/operating-system): an OS is the full system-software layer managing hardware, while Wasm is a sandboxed, portable execution layer on top of it. Unlike a [virtual machine](/en/wiki/terms/virtual-machine), it works at the process level and does not virtualize a whole machine.
