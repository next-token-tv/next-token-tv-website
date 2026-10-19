---
term: computer-use
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

Computer use 指让模型像人一样操作计算机图形界面的能力：看屏幕、移动光标、点击、打字，从而跨越多个应用完成任务。Anthropic 和 OpenAI 都提供了相应的计算机操作工具或模型能力。

## 工作方式

通常是一个循环：截取屏幕给模型，模型分析后输出点击、输入等动作指令，底层虚拟机或容器执行后再截图反馈，如此往复直到任务完成。

## 使用场景

缺少 API 的老旧软件、跨应用的重复操作、端到端的界面测试等，都可以交给 computer use 类智能体去执行。

## 易混概念

与[浏览器操作](/wiki/terms/browser-use)相比范围更广：computer use 面向整个桌面环境，browser use 专攻浏览器内的任务。它也可视为[具身智能](/wiki/terms/embodied-ai)在数字界面上的对应形态。
