---
locale: zh-Hans
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: '不用记密码以后，换设备靠什么找回账号'
description: '自动生成密码和通行密钥减轻了日常登录负担。换手机、换系统或丢失设备时，需要弄清凭据存在哪里，以及还有哪些恢复入口。'
updatedAt: '2026-10-26'
---

新注册的账号，密码由管理器生成，登录时自动填入。用了几年，人可能从来没记住过那串字符。直到准备换手机，才开始担心：旧手机不在了，账号还能不能打开？

第七期的密码讨论里有这层顾虑。回答它之前，需要先看账号保存的是密码还是通行密钥，以及凭据究竟存在哪儿。

## 自动填密码，与通行密钥登录

密码管理器替人保存并填入密码，网站仍用密码验证身份。通行密钥（passkey）使用密钥对认证，指纹、面容或设备 PIN 用来批准本地使用凭据。网站不会收到用户的指纹。[FIDO 的说明](https://fidoalliance.org/passkeys-2/)解释了这套机制。

同一个管理器可以保存两种凭据，因此仅凭登录时刷了一次脸，无法判断账号用的是什么。

还要确认是否同步。FIDO 区分可同步的通行密钥与绑定单个设备的通行密钥。绑定设备的那一份，不会因新手机登录了相同云账号而自动出现。

## 旧设备还在，先验证新设备

最方便的换机检查，是在保留旧设备访问的情况下，先在新设备登录管理器，确认同步完成，再实际登录几个重要账号。列表里出现账号名称，只能说明看到了记录，还没证明登录流程能走完。

微软的[通行密钥管理说明](https://support.microsoft.com/en-us/accounts-billing/security/manage-your-saved-passkeys)也采用这个顺序：需要新建凭据时，先完成设置，再清理旧凭据；使用同步管理器时，先恢复管理器访问。

跨系统或更换管理器时尤其要逐项确认。两边都支持 passkey，仍可能在迁移方式、浏览器支持或网站登录流程上有差别。确认新入口可用后，再处理旧设备，会少很多麻烦。

## 如果所有设备都丢了

这时需要查看提供方的恢复条件。以 iCloud 钥匙串为例，Apple 文档区分了新增设备与所有设备丢失的情况，并列出恢复联系人等路径，以及通过 iCloud 钥匙串托管恢复（escrow）时所需的认证条件。具体取决于账号已有设置，应按[官方说明](https://support.apple.com/guide/iphone/passwords-devices-iph82d6721b2/26/ios/26)核对。

平时可以检查：受信任号码是否仍在用，恢复联系人是否已设置，所需恢复信息是否只存在当前手机里。若找回邮箱需要手机上的凭据，恢复手机账号又要先登录这个邮箱，就需要提前确认还有哪条可用路径。

不必通过退出所有设备来试验。保留当前访问，核对恢复设置，在新增设备上完成一次真实登录，通常就能发现不少遗漏。


## 相关资料

- [密码管理器的使用方式与自动生成密码](/weekly/007/transcript#quote-53ea85195bdef30afbf9)
- [更换手机或操作系统时的顾虑](/weekly/007/transcript#quote-3d7f7fc305ff23b31561)
- [FIDO Alliance：Passkeys](https://fidoalliance.org/passkeys-2/)，查阅于 2026 年 10 月 26 日。
- [Microsoft：Manage your saved passkeys](https://support.microsoft.com/en-us/accounts-billing/security/manage-your-saved-passkeys)，查阅于 2026 年 10 月 26 日。
- [Apple：Make your passwords and passkeys available across devices with iPhone and iCloud Keychain](https://support.apple.com/guide/iphone/passwords-devices-iph82d6721b2/26/ios/26)，查阅于 2026 年 10 月 26 日。
