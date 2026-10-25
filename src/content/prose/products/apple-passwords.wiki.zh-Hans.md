---
entityType: product
entity: apple-passwords
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Apple 密码（Passwords）：密码、通行密钥与验证码管理｜Next Token Wiki'
seoDescription: '了解 Apple 的密码应用能管理什么、如何查看与共享凭据、安全建议与导入导出功能，以及节目中的使用讨论。'
---

## 定义

密码（Passwords）是 Apple 用于管理密码、通行密钥与验证码的系统应用。官方《Passwords 使用手册》将其描述为在一个地方查看所有网站和 App 的密码凭据，并跨设备使用；手册覆盖密码、通行密钥、验证码、Wi-Fi 与 iCloud 钥匙串等内容。详见[官方使用手册](https://support.apple.com/guide/passwords/welcome/mac)。

## 工作方式

应用内置于系统，不需要单独下载；凭据经 [iCloud 钥匙串](/wiki/products/icloud-keychain)在获准设备间端到端加密同步。功能按官方手册包括：查找、创建、更改与恢复密码，查看某个密码的历史版本，与个人或群组共享密码，以及导入和导出。应用还提供安全建议（Security Recommendations），对弱密码或疑似泄露的密码给出更换提示。自动填充时，系统在需要登录的场合弹出匹配的凭据，用面容、指纹或设备密码确认。

## 使用场景

按网站或应用查找密码，一个站点下可以保存多个用户名；处理安全建议中标记为弱或已泄露的密码；把家庭密码组交给家人共享；从其他密码管理器导入数据，或在换机时导出。两步验证码也存放在应用里，不需要另装独立验证器应用。

## 易混概念

- 密码应用与 iCloud 钥匙串：应用是查看管理的界面，钥匙串是同步机制，不是两个竞争产品。
- 与 [1Password](/wiki/products/1password) 等第三方密码管理器：第三方产品跨平台、功能更广，Passwords 内置于 Apple 系统并与系统集成更深；选择取决于平台组合与需求。
- 密码应用与"Apple 账户密码"：应用管理的是各网站与 App 的登录凭据；Apple 账户本身的密码在系统设置的账户部分管理。

## 节目中的讨论

在 Weekly #007 的"密码管理：随机密码、通行密钥与换设备"章节中，杨攀说[密码都在苹果的 Keychain 里，形态迭代后应用叫 Passwords，在 Mac 上刷指纹即可填充](/weekly/007/transcript#quote-297787e2ecbedfdff50a)，并介绍[手机上打开 Passwords 按网站或应用搜索、一个站点下可有多个用户名、可以把密码显示出来手动输入](/weekly/007/transcript#quote-22ba07abd66aaf0b6797)。这是参与者的个人使用方式，可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-11)。

## 常见问题

### 密码应用是干嘛的？

Apple 的系统应用，集中管理网站与 App 的密码、通行密钥和两步验证码，配合 iCloud 钥匙串跨设备同步与自动填充。功能范围见[官方使用手册](https://support.apple.com/guide/passwords/welcome/mac)。

### 在哪里找到密码应用？

它内置于 Apple 系统：iPhone、iPad 与 Mac 上都以"密码"（Passwords）应用的形式出现，不需要单独下载；官方手册有各平台的入门说明。

### "密码已泄露"的提示是什么？

应用的"安全建议"功能会对弱密码或出现在泄露数据中的密码给出更换建议；这一功能的定位见官方手册的 Security Recommendations 部分，具体某条提示的原因以应用内说明为准。

### 可以导出密码吗？

官方手册包含导入与导出章节，用于从其他密码管理器迁移或在设备间转移数据；操作步骤见手册的 Import and export 部分。

## 来源

- [Apple 官方《Passwords 使用手册》](https://support.apple.com/guide/passwords/welcome/mac)
- [Apple 支持页：设置 iCloud 钥匙串（109016）](https://support.apple.com/zh-cn/109016)
- [iCloud 钥匙串条目](/wiki/products/icloud-keychain)
