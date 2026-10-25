---
entityType: product
entity: wordpress
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'WordPress：开源建站与内容管理系统｜Next Token Wiki'
seoDescription: '了解 WordPress 开源发布系统的起源、工作方式、主题与插件生态、与 WordPress.com 的区别，以及 Weekly 第 007 期的相关讨论。'
---

## 定义

WordPress 是用于构建和管理网站的开源发布系统，支持主题、插件与内容管理。官方 About 页记载它始于 2003 年，由 Mike Little 与 Matt Mullenweg 从 b2/cafelog 分叉创建，基于 PHP 与 MariaDB，采用 GPLv2 许可，见[官方资料](https://wordpress.org/about/)。

## 工作方式

软件从 [wordpress.org](https://wordpress.org/download/) 下载后安装在自己的服务器上运行：内容通过后台管理，外观由主题控制，功能通过插件扩展。官方把使命概括为"democratize publishing"，GPL 许可保留为任何目的使用、研究修改与再分发的自由；官方描述没有太多技术经验的用户可以开箱即用，懂技术的用户则可深度定制。

## 使用场景

覆盖博客、个人网站与企业站点等发布场景；由于构建在 [PHP](/wiki/products/php) 与数据库之上，运行环境需要服务器支持。大量第三方主题、插件与教程围绕它形成生态，具体功能因所选组件而异。

## 易混概念

WordPress.org 与 WordPress.com 名称相近：官方对比文档说明两者运行同一软件，主要区别在托管方式——.com 是包含托管的服务，.org 提供可自行部署的开源软件（见[官方对比](https://wordpress.com/support/com-vs-org/)）。本条目介绍的是 wordpress.org 的开源软件。

## 节目中的讨论

在 Weekly #007 的"安全风险集中爆发：漏洞、证书与补丁"章节中，歸藏在讨论一个影响 PHP 的漏洞时说，[一些国家选择先下线服务，"比如说 WordPress 我很多 WordPress 网站"](/weekly/007/transcript#quote-107704ffef288d42605e)，并指出它基于 PHP。这是参与者在安全事件语境中的转述，具体漏洞与修复状态以官方安全公告为准。参见[对应章节](/weekly/007/transcript#chapter-10)。

## 常见问题

### 用 WordPress 建站需要写代码吗？

不强制。官方 About 页描述没有太多技术经验的用户可以开箱即用，需要深度定制时才涉及代码。

### WordPress.org 和 WordPress.com 的区别？

同一软件、不同托管方式：.org 是可自行部署的开源软件，.com 是包含托管的服务；官方对比见 [com-vs-org 文档](https://wordpress.com/support/com-vs-org/)。

## 来源

- [WordPress 官方 About 页](https://wordpress.org/about/)
- [WordPress 下载页](https://wordpress.org/download/)
- [WordPress.com vs. WordPress.org 官方对比](https://wordpress.com/support/com-vs-org/)
