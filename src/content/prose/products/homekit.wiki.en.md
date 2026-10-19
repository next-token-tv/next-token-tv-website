---
entityType: product
entity: homekit
locale: en
slot: wiki
updatedAt: '2026-10-19'
seoTitle: 'HomeKit: Apple’s Smart Home Framework and Accessory Certification | Next Token Wiki'
seoDescription: 'What HomeKit is, how developers integrate with it, accessory certification and Matter support, and the Next Token Weekly #006 discussion of smart home pain points.'
---

## What HomeKit is

HomeKit is [Apple](/en/wiki/brands/apple)’s smart home connectivity framework. Apple’s developer page defines it this way: the HomeKit framework enables an app to "coordinate and control supported smart home accessories from multiple vendors to present a coherent, user-focused interface." On the consumer side, HomeKit corresponds to the Home (Apple Home) app on [iPhone](/en/wiki/products/iphone), iPad, and Mac: accessories are configured, controlled, and automated in the app, with actions that can also be triggered by [Siri](/en/wiki/products/siri).

HomeKit was first released in 2014. Apple’s smart home integration later expanded to the Matter standard: according to the official developer documentation, the MatterSupport framework is available starting with iOS 16.1, iPadOS 16.1, macOS Ventura, watchOS 9.1, tvOS 16.1, and HomePod software 16.1 (that system generation shipped in 2022).

This entry covers the HomeKit framework and Apple’s smart home platform only; the [Apple](/en/wiki/brands/apple) company, [iPhone](/en/wiki/products/iphone), and [iOS](/en/wiki/products/ios) have their own entries, and Apple’s home smart display is covered in the [Apple HomeView](/en/wiki/products/apple-homeview) entry.

## Uses and integration boundaries

For developers, HomeKit offers two paths:

- Building apps: on top of the HomeKit framework, apps on iOS, iPadOS, macOS, watchOS, and tvOS can configure accessories, create actions to control them, and group actions into automations triggered by Siri.
- Building accessories: HomeKit accessories require enrollment in Apple’s MFi Program, which grants access to the HomeKit Accessory Protocol Specification, the HomeKit Accessory Development Kit (ADK), and certification tools, plus the "Works with Apple Home" badge; Matter accessories must go through the Connectivity Standards Alliance certification process.

For users, HomeKit directly controls only accessories certified through these programs. Whether an uncertified device can be connected depends on the vendor offering a compliant bridge or update; check the accessory maker’s official documentation for compatibility. The official developer page also lists HomeKit Secure Video, ThreadNetwork, and EnergyKit among home-related capabilities; the current support scope is on [Apple’s developer Home page](https://developer.apple.com/apple-home/).

## In the show

In Weekly #006’s chapter “智能家居为什么还这么难用？连接、体验与封闭生态” (Why is smart home still so hard? Connectivity, experience, and closed ecosystems), HomeKit came up in the participants’ assessment of Apple’s smart home ecosystem. [Yang Pan recalled the name HomeKit while trying to remember Apple’s smart home protocol](/weekly/006/transcript#quote-6de598516b98521d24fa) and [described the idea of connecting Xiaomi devices through a gateway](/weekly/006/transcript#quote-1df0708bef0a159a5973); [Orange said the two smart speakers in his home still fail to connect properly](/weekly/006/transcript#quote-25dd15bf3ae3b6c81e59). [Guizang said Muse, open for just a month, might already have more connected devices than HomeKit](/weekly/006/transcript#quote-2cdaf6b33bf1458827a8). These are the participants’ judgments based on their own experiences, not an independent compatibility review of HomeKit. Chinese transcript: [the chapter](/weekly/006/transcript#chapter-08).

## FAQ

### What is Apple HomeKit?

HomeKit is Apple’s smart home connectivity framework, used together with the Home app to set up, control, and automate compatible smart accessories. The official definition is on [Apple’s developer Home page](https://developer.apple.com/apple-home/).

### What does HomeKit do?

In the Home app or a HomeKit-enabled app, you can add certified smart home accessories, group them by room, create automations, and control them with Siri. The available features depend on each accessory’s capabilities.

### Does HomeKit work with Matter?

Yes. Matter is the cross-vendor smart home connectivity standard, and HomeKit is Apple’s own framework and certification system. Starting with iOS 16.1 and that generation of systems, Apple supports Matter accessories through the MatterSupport framework, so the two are coexisting integration paths.

### Can HomeKit add Xiaomi or Mi Home devices?

HomeKit directly supports only accessories certified through MFi or Matter. Uncertified Mi Home devices cannot be added directly; whether a compliant path (such as a certified bridge) exists is decided by the device vendor, so check the official documentation for the specific device.

### What is the difference between HomeKit and Mi Home?

HomeKit is Apple’s smart home framework on Apple platforms; Mi Home is Xiaomi’s app ecosystem for its own and partner devices. They differ in certification systems, supported devices, and the phone platforms they rely on — the choice depends on the devices you already own and your phone ecosystem. This entry does not rank the two.

## Sources

- [Apple Developer — Home (HomeKit, Matter, and related frameworks)](https://developer.apple.com/apple-home/)
