---
term: mcp
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

模型上下文协议（Model Context Protocol，MCP）是一个开放协议，为 AI 应用连接外部数据源与工具提供标准化接口，由 Anthropic 于 2024 年提出并开源。它常被比作 AI 应用的"USB-C 接口"。

## 工作方式

MCP 采用客户端-服务器架构：AI 应用作为客户端，连接到暴露特定能力的 MCP 服务器，服务器负责把文件系统、数据库或第三方服务的功能以统一格式提供给模型。应用侧与数据源侧各自实现一次协议，即可互相组合。

## 使用场景

开发者用 MCP 让智能体读取本地文件、查询企业数据库或调用 SaaS 服务；普通用户则通过[连接器](/wiki/terms/connector)或[插件](/wiki/terms/plugin)安装现成的 MCP 集成，无需自己写代码。

## 易混概念

MCP 是协议本身；[连接器](/wiki/terms/connector)是使用协议接入具体服务的集成，[插件](/wiki/terms/plugin)是把 MCP 服务器与其他组件打包分发的载体，[工作流](/wiki/terms/workflow)则是这些工具能力被编排进固定流程的方式。
