---
entityType: product
entity: ffmpeg
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'FFmpeg: the open-source audio and video toolkit | Next Token Wiki'
seoDescription: 'What FFmpeg is, its command-line tools and libraries, where to download it, and how the Next Token show used it with coding agents for video editing.'
---

## What FFmpeg is

FFmpeg is an open-source multimedia framework that its official site calls "the leading multimedia framework," able to "decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created." The community-run project compiles and runs on Linux, macOS, Windows, the BSDs, and more. It is both a set of command-line tools and the library collection underneath many players and editing applications.

## Components and usage

For everyday users the three best-known command-line tools are `ffmpeg` (converts multimedia files between formats), `ffprobe` (a multimedia stream analyzer), and `ffplay` (a simple player based on SDL). For developers, it ships libraries such as libavcodec, libavformat, libavfilter, and libswscale, covering codecs, containers, filters, scaling, and resampling.

Downloads start at the [official download page](https://ffmpeg.org/download.html): ready-made binaries exist through Linux distribution repositories, Windows builds (gyan.dev and BtbN), and macOS static builds (evermeet.cx), with source code via Git and mirrors. Typical tasks such as converting formats, extracting audio, compressing video, or generating GIFs are done through command-line options; the [official documentation](https://ffmpeg.org/documentation.html) has the details.

## Discussion in the show

In Weekly #002's chapter "我们如何用 Agent 制作和发布播客" (How we use agents to produce and publish a podcast), Orange said Jianying (CapCut's Chinese edition) did not adapt well to one of his needs, [which sent him "back to FFmpeg," as he puts it in the Chinese transcript](/weekly/002/transcript#quote-555026c6546093f334d0). Yang Pan described his workflow of editing with Codex plus FFmpeg: [the entire first episode video was edited by Codex, per the Chinese transcript](/weekly/002/transcript#quote-1e88c579405e0c5a4111). The common thread: needs that GUI editors do not cover can be filled by FFmpeg's command-line capabilities combined with a coding agent.

## Frequently asked questions

### What is FFmpeg?

An open-source multimedia framework and command-line toolkit for converting, processing, recording, and analyzing audio and video — also the codec library under many players and editors. See [ffmpeg.org](https://ffmpeg.org/).

### How do I download and install FFmpeg?

Windows and macOS builds are linked from the [official download page](https://ffmpeg.org/download.html) (gyan.dev, BtbN, evermeet.cx); on Linux, install through your distribution's package manager. Source code is available on the official site and GitHub mirrors.

### Is FFmpeg free?

Yes — it is open source under LGPL/GPL configurations; the project is sustained by community contributions and donations rather than license fees.

### Where can I learn common FFmpeg operations (converting, extracting audio, compressing)?

The [official documentation](https://ffmpeg.org/documentation.html) documents every option. Common tasks like converting a file or extracting an audio track take a single command; confirm the meaning of the options in the documentation before running them.

## Sources

- [FFmpeg About page](https://ffmpeg.org/about.html)
- [FFmpeg download page](https://ffmpeg.org/download.html)
- [FFmpeg documentation](https://ffmpeg.org/documentation.html)
