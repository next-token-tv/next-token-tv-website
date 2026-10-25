---
entityType: product
entity: android-debug-bridge
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Android Debug Bridge (ADB): Device Debugging CLI｜Next Token Wiki'
seoDescription: 'How ADB works (client, daemon, server), USB and wireless connections, common uses including TVs, and the show discussion on remote ADB.'
---

## Definition

Android Debug Bridge (adb) is a versatile command-line tool in the Android SDK Platform Tools for communicating with Android devices. The official documentation describes it as supporting a variety of device actions such as installing and debugging apps, and providing access to a Unix shell for running commands on a device. See the [official adb documentation](https://developer.android.com/tools/adb).

## How it works

adb is a client-server program with three components: a client that sends commands from your development machine, a daemon (adbd) that runs commands as a background process on each device, and a server that manages communication between them on the development machine, binding to local TCP port 5037. USB connections require USB debugging to be enabled in the device's Developer options, and the device shows a confirmation dialog before accepting the computer. The official documentation also describes wireless debugging: pair with `adb pair` using a pairing code, then connect with `adb connect`; the traditional route uses `adb tcpip 5555` followed by connecting to the device's IP address. Common commands include `adb devices` to list connected devices and `adb shell` to open a device shell.

## Usage

App development and debugging is the primary use: installing apps, reading logs and running shell commands. Android-based TVs and set-top boxes expose adb as well; once network ADB is enabled, a computer on the same local network can send commands remotely, which is a common path for automating older devices. adb ships together with fastboot in the standalone Platform Tools package ([official releases page](https://developer.android.com/tools/releases/platform-tools)); unlocking a bootloader and flashing system images are fastboot's job, not adb's.

## Related and confusable terms

- adb vs. fastboot: both are Platform Tools components; adb talks to a running system for debugging, while fastboot is needed to unlock a device bootloader and flash a new system image.
- ADB is not an Android app: it is a command-line tool on the computer side, talking to the adbd daemon on the device.
- Same-name abbreviations: ADB also stands for other institutions and terms (such as the Asian Development Bank); in phone and TV contexts "ADB" usually means the Android Debug Bridge.

## In this episode

In Weekly #007, in the chapter "重做电视启动器，让旧设备接入 AI" (Rebuilding a TV launcher to bring old devices into AI), 歸藏 (Guizang) describes letting a personal agent connect over [remote ADB to issue commands on the TV and open anything on it](/weekly/007/transcript#quote-233da04975cb2c57cc85), and explains that [remote ADB over the local network needs no cable, so an always-on machine can control the TV at any time](/weekly/007/transcript#quote-cf038512591ac83330b4). This is the participant's account of his own setup; in the chapter "Omarchy、旧手机与重写软件的可能性" he also mentions using ADB to flash Linux onto old devices. See the [episode 007 chapter](/weekly/007/transcript#chapter-09) (Chinese transcript).

## Frequently asked questions

### Where do I download ADB?

The official channel is the [Android SDK Platform Tools releases page](https://developer.android.com/tools/releases/platform-tools), which offers standalone packages for Windows, macOS and Linux without installing Android Studio; developers with Android Studio installed usually use the copy the SDK Manager installs.

### What is ADB on a TV?

Android-based TVs and boxes expose the same adb interface. After enabling network/wireless ADB in Developer options, a computer on the same local network can connect and run commands; switch names and menu locations differ by brand, so check the device's own documentation.

### How do I connect adb over Wi-Fi?

The official documentation describes two routes: the newer wireless debugging flow pairs with `adb pair ipaddr:port` using a pairing code and then connects with `adb connect`; the traditional flow runs `adb tcpip 5555` once over USB and then `adb connect <device IP>`.

## Sources

- [Android Developers: Android Debug Bridge (adb)](https://developer.android.com/tools/adb)
- [Android SDK Platform-Tools releases](https://developer.android.com/tools/releases/platform-tools)
- [Android entry](/en/wiki/products/android)
