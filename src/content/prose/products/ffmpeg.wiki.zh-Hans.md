---
entityType: product
entity: ffmpeg
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'FFmpeg：开源音视频处理工具集｜Next Token Wiki'
seoDescription: '了解 FFmpeg 的框架组成、命令行工具与库、下载安装入口，以及 Next Token 节目中"回到 FFmpeg"的视频剪辑工作流讨论。'
---

## FFmpeg 是什么

FFmpeg 是一个开源多媒体框架，官方称其为"领先的多媒体框架"，能对"人类和机器创建的几乎任何内容"进行解码、编码、转码、复用、解复用、流处理、滤镜处理和播放。项目由社区志愿者维护，可编译运行于 Linux、macOS、Windows、BSD 等平台。它既是一组命令行工具，也是大量播放器和剪辑软件在底层调用的库集合。

## 组成与使用方式

对普通用户最常用的是三个命令行工具：`ffmpeg`（在各格式之间转换多媒体文件）、`ffprobe`（多媒体流分析器）和 `ffplay`（基于 SDL 的简单播放器）。对开发者，它提供 libavcodec、libavformat、libavfilter、libswscale 等库，覆盖编解码、封装、滤镜、缩放与重采样。

下载入口是[官方下载页](https://ffmpeg.org/download.html)：Linux 发行版官方仓库、Windows（gyan.dev 与 BtbN 构建）、macOS（evermeet.cx 静态构建）都有现成二进制，源码通过 Git 与镜像获取。典型任务如格式转换、提取音频、压缩视频、生成 GIF，都通过命令行参数完成，具体用法见[官方文档](https://ffmpeg.org/documentation.html)。

## 节目中的讨论

Weekly #002 的"我们如何用 Agent 制作和发布播客"章节中，橘子说剪映对某些需求适配不好，[导致他"回到 FFmpeg"](/weekly/002/transcript#quote-555026c6546093f334d0)；杨攀则描述了自己用 Codex 加 FFmpeg 剪辑的工作流：[第一期视频全部是用 Codex 剪的](/weekly/002/transcript#quote-1e88c579405e0c5a4111)。两段讨论的共同点是：图形界面软件不覆盖的需求，可以由 FFmpeg 的命令行能力配合编码 Agent 来补齐。

## 常见问题

### FFmpeg 是什么？

一个开源多媒体框架和命令行工具集，用于转换、处理、录制与分析音视频，也是许多播放器和编辑器底层的编解码库。见[官网](https://ffmpeg.org/)。

### FFmpeg 怎么下载安装？

Windows 与 macOS 可从[官方下载页](https://ffmpeg.org/download.html)指向的构建方获取现成二进制，Linux 通常直接用发行版软件包管理器安装；源码在官网与 GitHub 镜像提供。

### FFmpeg 免费吗？

免费开源，以 LGPL/GPL 配置发布；官方靠社区贡献与捐赠维持，不收取授权费。

### FFmpeg 常见操作（转格式、提取音频、压缩）在哪学？

[官方文档](https://ffmpeg.org/documentation.html)提供完整参数说明；转换格式、提取音轨等常见任务通常一条命令即可完成，可先在官方文档确认参数含义再执行。

## 来源

- [FFmpeg 官网 About 页](https://ffmpeg.org/about.html)
- [FFmpeg 官方下载页](https://ffmpeg.org/download.html)
- [FFmpeg 官方文档](https://ffmpeg.org/documentation.html)
