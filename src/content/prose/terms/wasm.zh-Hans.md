---
term: wasm
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

WebAssembly（缩写 Wasm）是一种面向栈式虚拟机的二进制指令格式，可在浏览器等沙箱环境中以接近原生的速度执行。

## 工作方式

C、C++、Rust 等语言先编译成 .wasm 二进制模块，由宿主运行时实例化并执行；模块运行在沙箱里，只能访问宿主显式提供的接口，并可与 JavaScript 互操作。

## 使用场景

网页中的游戏、音视频编辑与仿真应用，桌面与服务器软件的可移植插件系统，以及服务端与边缘侧的轻量运行时。

## 易混概念

Wasm 不是 [操作系统](/wiki/terms/operating-system)：OS 是管理硬件的完整系统软件层，Wasm 是运行在 OS 之上的一层沙箱化可移植执行环境；与 [虚拟机](/wiki/terms/virtual-machine) 的区别是它作用于进程级，不虚拟化整台机器。
