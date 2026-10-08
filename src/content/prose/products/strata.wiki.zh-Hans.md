---
entityType: product
entity: strata
locale: zh-Hans
slot: wiki
updatedAt: '2026-10-08'
seoTitle: 'Strata：消费级硬件上的开源本地推理引擎｜Next Token Wiki'
seoDescription: '了解开源推理引擎 Strata：在消费级 PC 上运行 Qwen3.8-Flash-Next 的原理、硬件要求、本地 API 接入，以及 Next Token 节目中的讨论。'
---

## Strata 是什么

Strata 是一个免费开源（MIT 许可证）的本地推理引擎，由 GitHub 用户 Niko1221 发布，目标是在普通消费级 PC 上运行原本需要服务器的大语言模型。官方 README 称，Strata 运行 Qwen 团队的 [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)——一个 1250 亿参数、拥有 24576 个"专家"的混合专家模型——并把它的工作分摊到显卡、内存和 SSD 上，使 12 GB 显存的家用显卡也能参与运行。模型量化版由 ISTA-DASLab、UkisAI 和 Unsloth 制作，引擎使用了 llama.cpp/ggml 的部分代码。

## 用途与使用边界

- **硬件要求**：官方列出的门槛是 12 GB 以上显存的 NVIDIA GeForce RTX 20/30/40/50 系或指定 AMD Radeon 显卡、32 GB 以上内存、约 80 GB 磁盘空间，系统为 Windows 10/11 或 Linux；多卡可以共享模型。
- **安装**：Windows 下运行 `START-HERE.bat`、Linux 下运行 `./setup.sh`，安装程序自动检测硬件并选择合适的量化档位，随后下载约 70 GB 模型。
- **工作方式**：最常用的"专家"放在显卡、全部专家放在内存、其余由处理器分担，SSD 存放查找表；推测解码（小模型先猜、大模型验证）带来官方所称 1.6–1.8 倍加速。
- **速度**：官方实测数字为 RTX 5070（12 GB）生成 53–94 token/s、读取长提示 1,620–2,650 token/s，随量化档位与硬件而变；详细表格见仓库文档。
- **接口**：本地网页聊天在 `127.0.0.1:8080`；对外提供 OpenAI 兼容 API（`/v1`）、Anthropic 风格接口（`/v1/messages`，可作 Claude Code 的 `ANTHROPIC_BASE_URL`）、OpenAI Responses API（供 Codex CLI 使用）以及一个 MCP 服务器。

官方支持的系统是 x86-64 PC；DGX Spark 等 Arm64 设备依靠第三方分支（见下）。

## 节目中的讨论

Weekly #005 的"推理优化与成本下降"章节中，[橘子转述说 Strata "能把那个推理的速度提升上百倍"，并"直接导致那个 DGX 涨价"](/weekly/005/transcript#quote-dfbbfd3135c8a0e4b298)；杨攀补充说这一波优化多是针对特定模型架构用重写的代码实现的。这些都是节目参与者的转述与判断：官方 README 给出的加速数字是推测解码 1.6–1.8 倍和分档实测吞吐，未见"上百倍"的官方表述；DGX Spark 也不在官方支持范围内，Arm64 支持来自社区分支 [shi3z/Strata-DGX-Spark](https://github.com/shi3z/Strata-DGX-Spark)。DGX Spark 这台机器本身另见 [NVIDIA DGX Spark](/wiki/products/nvidia-dgx-spark) 条目。

## 常见问题

### Strata 是什么？

一个开源（MIT）本地推理引擎，把 Qwen3.8-Flash-Next 模型分摊到消费级 PC 的显卡、内存和 SSD 上运行，并提供本地 API 服务；见[官方仓库](https://github.com/Niko1221/Strata)。

### Strata 需要什么配置？

12 GB 以上显存的 NVIDIA/AMD 显卡、32 GB 以上内存、约 80 GB 磁盘，Windows 10/11 或 Linux。完整要求见仓库 README 的 "What you need" 部分。

### 怎么用 Strata 接入 Claude Code 或 Codex？

Strata 在本地提供 Anthropic 风格接口（Claude Code 设置 `ANTHROPIC_BASE_URL`）和 OpenAI Responses API（供 Codex CLI），另有 OpenAI 兼容 `/v1` 接口和 MCP 服务器；地址默认为 `127.0.0.1:8080`，接入细节见仓库文档。

### Strata 能在 NVIDIA DGX Spark 上运行吗？

官方版本只覆盖 x86-64 PC。DGX Spark（GB10 芯片，Arm64）的支持来自第三方分支 shi3z/Strata-DGX-Spark，由社区成员在自己的机器上编译和测试。

## 来源

- [Strata 官方仓库（Niko1221/Strata）](https://github.com/Niko1221/Strata)
- [Strata DGX Spark 社区分支（shi3z/Strata-DGX-Spark）](https://github.com/shi3z/Strata-DGX-Spark)
- [Qwen3.8-Flash-Next 模型页（Hugging Face）](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
