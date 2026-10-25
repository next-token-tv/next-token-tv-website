---
entityType: product
entity: android-debug-bridge
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'Android Debug Bridge（ADB）：设备调试命令行工具｜Next Token Wiki'
seoDescription: '了解 ADB 的客户端—服务器结构、USB 与无线连接方式、常见使用场景，以及节目中用远程 ADB 控制电视的讨论。'
---

## 定义

Android Debug Bridge（adb）是 Android SDK Platform Tools 中的通用命令行工具，用于与 Android 设备通信。官方文档描述它支持安装和调试应用等多种设备操作，并提供一个可在设备上执行各种命令的 Unix shell。详见[官方 adb 文档](https://developer.android.com/tools/adb)。

## 工作方式

adb 是客户端—服务器程序，包含三个组件：运行在电脑上的 client（在终端输入 adb 命令启动）、设备上作为后台进程运行的守护进程 adbd，以及管理两者通信的 server（运行在电脑上，绑定本机 TCP 5037 端口）。USB 连接需要在设备的开发者选项中开启 USB 调试，首次连接时设备上会弹出是否信任该电脑的确认。官方文档还描述了无线调试流程：用 `adb pair` 输入配对码完成配对，再用 `adb connect` 连接；传统方式可用 `adb tcpip 5555` 切换后按 IP 连接。常用命令如 `adb devices` 列出已连接设备，`adb shell` 进入设备命令行。

## 使用场景

应用开发与调试是最主要的用途：安装应用、查看日志、执行 shell 命令。电视、机顶盒等 Android 设备同样提供 adb 接口，在局域网内开启网络 ADB 后可从电脑远程下发命令，这也是旧设备自动化改造的常见路径。adb 与 fastboot 同属 Platform Tools 独立包（[官方发布页](https://developer.android.com/tools/releases/platform-tools)）；解锁引导加载程序、刷写系统镜像属于 fastboot 的用途，不是 adb 的。

## 易混概念

- adb 与 fastboot：同为 Platform Tools 组件；adb 面向运行中的系统做调试通信，fastboot 用于解锁 bootloader 和刷写新系统镜像。
- ADB 不是 Android 应用：它是电脑侧的命令行工具，与设备上的 adbd 守护进程通信。
- 同名缩写：ADB 也是亚洲开发银行等机构、术语的缩写；电视和手机语境下的"ADB"通常指 Android 调试桥。

## 节目中的讨论

在 Weekly #007 的"重做电视启动器，让旧设备接入 AI"章节中，歸藏介绍让个人 Agent 连上[远程 ADB，直接在电视上下命令、点开任何东西](/weekly/007/transcript#quote-233da04975cb2c57cc85)，并说明[局域网内的远程 ADB 不需要连线，常开机的机器可以随时操作休眠中的电视](/weekly/007/transcript#quote-cf038512591ac83330b4)。这是参与者对自己实践的描述；另在"Omarchy、旧手机与重写软件的可能性"章节中提到用 ADB 给旧设备刷 Linux。可阅读[第 007 期对应章节](/weekly/007/transcript#chapter-09)。

## 常见问题

### ADB 在哪里下载？

官方渠道是 [Android SDK Platform Tools 发布页](https://developer.android.com/tools/releases/platform-tools)，提供 Windows、macOS 与 Linux 的独立压缩包，不需要安装 Android Studio；装了 Android Studio 的开发者通常直接用 SDK Manager 安装的副本。

### 电视上的 ADB 是什么？

电视、盒子等 Android 设备同样提供 adb 调试接口。在设备的开发者选项中打开网络/无线 ADB 后，同一局域网内的电脑可以连接并执行命令；不同品牌设备的开关名称和入口不同，以设备说明为准。

### adb 怎么无线连接？

官方文档描述两条路径：较新的无线调试用 `adb pair ipaddr:port` 输入配对码完成配对，再 `adb connect` 连接；传统方式先用 USB 执行 `adb tcpip 5555`，然后 `adb connect 设备IP`。

## 来源

- [Android 开发者 adb 文档](https://developer.android.com/tools/adb)
- [Android SDK Platform-Tools 发布页](https://developer.android.com/tools/releases/platform-tools)
- [Android 条目](/wiki/products/android)
