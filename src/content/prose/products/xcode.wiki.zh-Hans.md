---
entityType: product
entity: xcode
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-21'
seoTitle: 'Xcode：Apple 平台应用开发环境｜Next Token Wiki'
seoDescription: '了解 Xcode 的定位、覆盖的 Apple 平台、下载方式与开发者资源边界，以及 Next Token 节目中的相关讨论。'
---

## Xcode 是什么

Xcode 是 Apple 提供的集成开发环境，官方描述为"Xcode offers the tools you need to develop, test, and distribute apps for all Apple platforms"，包含智能代码补全、Apple 设备模拟器和性能分析调试工具。它面向 iOS、iPadOS、macOS、tvOS、visionOS 和 watchOS 六个平台的应用开发，官方入口是 [developer.apple.com/xcode](https://developer.apple.com/xcode/)。公司背景见 [Apple 条目](/wiki/brands/apple)。

## 使用方式与开发者资源

Xcode 的典型用法是在 Mac 上新建项目、编写 Swift 或 SwiftUI 代码、用模拟器在不同设备与系统版本上测试，再经由 App Store 分发。官方页面列出的配套工具链包括 Xcode Cloud、TestFlight、Icon Composer 和 SF Symbols，语言与界面框架的官方入口是 Swift 与 SwiftUI 教程。

下载方面，Xcode 可从 Mac App Store 获取；官方页面说明，在开发者站点查看更多下载（命令行工具、历史版本、Beta 软件）只需登录 Apple 账户，不需要 Apple Developer Program 会员。版本更新情况见官方 [Xcode 发布说明](https://developer.apple.com/documentation/xcode-release-notes)。

需要留意的一点是磁盘占用：模拟器的各平台系统镜像会随测试需要成倍增长，[节目中的讨论](#节目中的讨论)也提到了这一点。管理磁盘空间可以参考 [macOS 条目](/wiki/products/macos)。

## 节目中的讨论

Weekly #003 的"Vibe Coding 把硬盘用满之后"章节讨论了开发者硬盘不够用的问题。[歸藏提到 iPad 和 iOS 的模拟器分别要装最高、最低和中间三档系统做测试，四个系统加起来约 50 GB](/weekly/003/transcript#quote-d56600f6fa6820c593c2)，并[补了一句"Xcode 本身也大"](/weekly/003/transcript#quote-5d702aadbf9a8b7f15d3)；杨攀也提到开发 iOS 时相关镜像很大。这些是节目参与者做 iOS 开发时的亲身占用情况，不是官方数字。

## 常见问题

### Xcode 是什么软件？

Xcode 是 Apple 官方的应用开发环境，用于开发、测试和分发覆盖 iOS、iPadOS、macOS、tvOS、visionOS 和 watchOS 的应用，包含代码补全、设备模拟器和性能调试工具。

### Xcode 在哪里下载？

主入口是 [Mac App Store 的 Xcode 页面](https://apps.apple.com/app/xcode/id497799835?mt=12/)；命令行工具、历史版本和 Beta 版可在 [Apple Developer 下载区](https://developer.apple.com/download/all/)登录 Apple 账户后获取。

### 下载 Xcode 需要 Apple Developer Program 会员吗？

不需要。官方页面明确说明查看开发者下载只需登录 Apple 账户；Developer Program 会员关系到在 App Store 分发应用等环节，而不是下载工具本身。

### Xcode 只能开发 macOS 应用吗？

不是。官方说明 Xcode 覆盖 Apple 全部平台的应用开发：iOS、iPadOS、macOS、tvOS、visionOS 和 watchOS。

## 来源

- [Xcode 官方页面](https://developer.apple.com/xcode/)
- [Xcode 资源页](https://developer.apple.com/xcode/resources/)
- [Mac App Store 的 Xcode 页面](https://apps.apple.com/app/xcode/id497799835?mt=12/)
- [Xcode 发布说明](https://developer.apple.com/documentation/xcode-release-notes)
