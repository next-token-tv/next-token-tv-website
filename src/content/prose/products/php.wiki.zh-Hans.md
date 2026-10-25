---
entityType: product
entity: php
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'PHP：Web 开发脚本语言｜Next Token Wiki'
seoDescription: '了解 PHP 语言的定位与运行方式、下载与版本入口、2026 年 10 月安全公告的处理方式，以及节目中关于 PHP 漏洞的讨论。'
---

## 定义

PHP 是一种广泛使用的通用脚本语言，尤其适合 Web 开发：php.net 首页的官方描述为"快、灵活、务实"，"从你的博客到世界上最流行的网站"都在使用。详见[官网](https://www.php.net/)。

## 工作方式

PHP 代码通常在服务器上执行，生成动态网页内容后再把结果发给浏览器，也可以用于命令行脚本。语言特性覆盖面向对象、命名空间、枚举、生成器等（见[官方手册](https://www.php.net/manual/)，含多语言版本）。解释器由 php.net 分发，[下载页](https://www.php.net/downloads)提供在维护的版本系列；版本升级、弃用与安全修复信息通过官网新闻与变更记录发布。

## 使用场景

博客、内容管理系统与服务端 Web 程序的常见基础，[WordPress](/wiki/products/wordpress) 等发布系统即用 PHP 构建；许多存量网站与内部系统也长期运行在 PHP 上。运维 PHP 站点时，更新版本与应用安全公告是常态工作：php.net 会通过[安全页](https://www.php.net/security/)与首页新闻发布安全更新。

## 易混概念

- PHP 语言与 PHP 货币代码：ISO 4217 中 `PHP` 是菲律宾比索的货币代码，搜索"PHP 是什么货币"命中的是后者。
- PHP 与 [WordPress](/wiki/products/wordpress)：PHP 是编程语言，WordPress 是用 PHP 构建的网站发布系统，两者属于不同层次。
- PHP 与 JavaScript：PHP 主要在服务器端执行、向浏览器输出结果；JavaScript 传统上运行在浏览器中，两者在 Web 架构中分工不同。

## 节目中的讨论

在 Weekly #007 的"安全风险集中爆发：漏洞、证书与补丁"章节中，歸藏描述了 PHP 漏洞引发的连锁反应：有人[在官方补丁发布前公开了漏洞本身，导致许多站点紧急下线，等打完补丁再上线](/weekly/007/transcript#quote-3f7204a5e2d49777b73a)；他称漏洞影响"2014 年以后的所有 PHP 版本"、多国网站受影响（[参与者说法](/weekly/007/transcript#quote-c88bd5553628b4089a2b)，未见官方渠道印证）。在"从 Key 泄露聊到 AI 时代的安全边界"章节中，橘子以 PHP 问题为例讨论了 AI 时代安全检查的边界。可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-10)。

## 常见问题

### PHP 是什么语言？

一种服务端脚本语言，尤其适合 Web 开发；代码在服务器执行后输出网页内容，也可用于命令行脚本。官方描述见 [php.net](https://www.php.net/)。

### PHP 在哪里下载？

[官方下载页](https://www.php.net/downloads)提供在维护的版本系列与 Windows 二进制包；源码与各版本变更记录也从官网进入。

### PHP 最近的安全漏洞怎么处理？

php.net 于 2026 年 10 月 21 日发布安全公告：PHP 8.5.12、8.4.27、8.3.36 与 8.2.35 修复两个可被未认证远程代码执行的严重漏洞；10 月 23 日另有关于 session upload progress 的信息性公告，建议设置 `session.upload_progress.enabled=0`。保持更新到已修复版本并关注[官方安全页](https://www.php.net/security/)。

### PHP 和 WordPress 是什么关系？

PHP 是编程语言，[WordPress](/wiki/products/wordpress) 是使用 PHP 构建的网站发布系统；WordPress 站点的安全维护同时涉及两者。

## 来源

- [php.net 官网](https://www.php.net/)
- [PHP 官方下载页](https://www.php.net/downloads)
- [PHP 官方安全页](https://www.php.net/security/)
