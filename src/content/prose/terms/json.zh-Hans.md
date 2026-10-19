---
term: json
locale: zh-Hans
updatedAt: "2026-10-11"
---

## 定义

JSON（JavaScript Object Notation）是一种基于文本的数据交换格式，用对象、数组、字符串、数字、布尔值和 null 表示结构化数据，由 RFC 8259 定义。语法源自 JavaScript 对象字面量，但已被几乎所有语言支持。

## 工作方式

JSON 文档由对象的键值对和数组的有序元素嵌套构成；各语言提供的解析与序列化函数在文本和内存数据结构之间转换。合法的 JSON 不允许注释、尾随逗号或单引号字符串。

## 使用场景

Web API 的请求与响应体、配置文件（如 `package.json`）、日志与消息队列的数据传输都广泛使用 JSON。

## 易混概念

[Markdown](/wiki/terms/markdown) 面向人类可读的排版文本，JSON 面向机器解析的结构化数据；[HTML](/wiki/terms/html) 是标记文档结构的语言。许多 [API](/wiki/terms/api) 默认以 JSON 作为数据编码格式。
