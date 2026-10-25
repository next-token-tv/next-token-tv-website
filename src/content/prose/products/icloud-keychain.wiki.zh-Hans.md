---
entityType: product
entity: icloud-keychain
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'iCloud 钥匙串：Apple 的凭据同步功能｜Next Token Wiki'
seoDescription: '了解 iCloud 钥匙串的同步范围、端到端加密方式、开启步骤，与密码应用的分工，以及节目中的密码管理讨论。'
---

## 定义

iCloud 钥匙串是 Apple 的凭据同步功能：官方支持页描述为让密码和其他安全信息在各设备间保持更新，并可与信任的人共享。它记住 Safari 与 App 的用户名、密码、通行密钥、信用卡信息与安全码、Wi-Fi 密码，并在用户批准的设备上自动填充。详见[官方支持页](https://support.apple.com/zh-cn/109016)。

## 工作方式

开启前置条件是设备运行较新的系统版本，且 Apple 账户已开启双重认证。开启路径：iPhone、iPad 上在"设置 > [你的名字] > iCloud > 已保存到 iCloud > 密码"（iOS 17 或更早为"密码与钥匙串"）里点"同步此设备"；Mac 上在"系统设置 > [你的名字] > iCloud > 密码"里点"同步此 Mac"。官方说明这些数据受端到端加密保护：密钥由设备独有信息与只有用户知道的设备密码组合生成，传输与存储中他人都无法读取。关闭 iCloud 钥匙串时，密码等保留在本地，不再跨设备更新；iCloud 服务器上会保留一份加密副本，重新开启后继续同步。

## 使用场景

在 iPhone、iPad、Mac 与 Apple Vision Pro 之间同步凭据并自动填充；通过共享密码组（iOS 17、iPadOS 17、macOS Sonoma 或更高版本）与家人等信任联系人共享密码和通行密钥。查看和管理这些凭据的界面是系统的[密码应用](/wiki/products/apple-passwords)，即 Passwords。

## 易混概念

- iCloud 钥匙串与密码应用：前者是经 iCloud 同步凭据的机制，后者是查看、管理的界面；两者配合使用。
- 与本地钥匙串（Keychain）：macOS 上"钥匙串"一词也指系统早已有之的本地凭据存储；iCloud 钥匙串特指经 iCloud 在获准设备间同步的那部分功能。
- 与 [1Password](/wiki/products/1password) 等第三方密码管理器：第三方产品独立安装、跨平台，商业模式与能力范围不同；是否搭配使用取决于个人需求。

## 节目中的讨论

在 Weekly #007 的"密码管理：随机密码、通行密钥与换设备"章节中，杨攀说自己绝大多数场合[没有特定密码，全靠 Apple 的 Keychain 自动生成](/weekly/007/transcript#quote-53ea85195bdef30afbf9)，[Keychain 已经用了十多年](/weekly/007/transcript#quote-ad6ab8891a5036d5a2e0)，并提到[形态迭代后应用叫 Passwords，在 Mac 上刷指纹即可填充](/weekly/007/transcript#quote-297787e2ecbedfdff50a)。这是参与者的个人使用方式，可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-11)。

## 常见问题

### iCloud 钥匙串是什么？

Apple 的凭据同步功能：把密码、通行密钥、信用卡信息和 Wi-Fi 密码在获准设备间端到端加密同步，并在 Safari 与 App 中自动填充。说明见[官方支持页](https://support.apple.com/zh-cn/109016)。

### iCloud 钥匙串在哪里打开？

iPhone/iPad：设置 > [你的名字] > iCloud > 已保存到 iCloud > 密码 > "同步此设备"；Mac：系统设置 > [你的名字] > iCloud > 密码 > "同步此 Mac"。前提是 Apple 账户已开启双重认证。

### iCloud 钥匙串有必要开启吗？

取决于使用需求：开启后凭据在获准设备间同步并自动填充，官方说明数据为端到端加密、传输与存储中他人无法读取；关闭后信息只保留在本地、不再跨设备更新。加密方式等细节以[官方支持页](https://support.apple.com/zh-cn/109016)为准。

### 保存的密码在哪里查看？

在系统的密码应用（Passwords）中查看和管理，iPhone、iPad 与 Mac 上均可使用；具体步骤见[密码应用条目](/wiki/products/apple-passwords)与官方支持页。

## 来源

- [Apple 支持页：设置 iCloud 钥匙串（109016）](https://support.apple.com/zh-cn/109016)
- [Apple 密码条目](/wiki/products/apple-passwords)
- [iCloud 条目](/wiki/products/icloud)
