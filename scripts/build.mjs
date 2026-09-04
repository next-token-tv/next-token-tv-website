import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(projectRoot, "index.html");
const assetsPath = resolve(projectRoot, "assets");
const outputPath = resolve(projectRoot, "dist");

const source = await readFile(sourcePath, "utf8");

const replacements = [
  ["<html lang=\"zh-Hans\">", "<html lang=\"en\">"],
  [
    "Next Token | 词元之外是一档关注 AI 技术、产品、创业与创作的视频播客。Next Token Weekly #001 从 24 条一周新闻出发，讨论模型、Agent、智能硬件、AI 应用与原生组织。",
    "Next Token is a video podcast about AI technology, products, entrepreneurship, and creativity. Next Token Weekly #001 unpacks 24 stories across models, agents, AI hardware, applications, and AI-native organizations.",
  ],
  [
    "<meta property=\"og:title\" content=\"Next Token | 词元之外\" />",
    "<meta property=\"og:title\" content=\"Next Token | Beyond the Next Token\" />",
  ],
  [
    "Next Token Weekly #001：模型试不过来，Agent 也试不过来，我们到底该怎么选？",
    "Next Token Weekly #001: With more models and agents than anyone can test, how should we choose?",
  ],
  [
    "<link rel=\"canonical\" href=\"https://nexttoken.tv/\" />",
    "<link rel=\"canonical\" href=\"https://nexttoken.tv/en/\" />",
  ],
  ["<title>Next Token | 词元之外</title>", "<title>Next Token | Beyond the Next Token</title>"],
  ["跳到主要内容", "Skip to main content"],
  ["aria-label=\"Next Token 首页\"", "aria-label=\"Next Token home\""],
  ["aria-label=\"主导航\"", "aria-label=\"Main navigation\""],
  ["<a href=\"#about\">关于品牌</a>", "<a href=\"#about\">About</a>"],
  ["<a href=\"#hosts\">联合主理人</a>", "<a href=\"#hosts\">Co-hosts</a>"],
  ["<a href=\"#subscribe\">订阅</a>", "<a href=\"#subscribe\">Follow</a>"],
  [
    `<div class="language-switcher" aria-label="语言切换">
            <a href="/" lang="zh-Hans" data-language="zh-Hans" aria-current="page">中文</a>
            <span aria-hidden="true">/</span>
            <a href="/en/" lang="en" data-language="en">EN</a>
          </div>`,
    `<div class="language-switcher" aria-label="Language switcher">
            <a href="/" lang="zh-Hans" data-language="zh-Hans">中文</a>
            <span aria-hidden="true">/</span>
            <a href="/en/" lang="en" data-language="en" aria-current="page">EN</a>
          </div>`,
  ],
  ["首期即将上线", "Episode #001 coming soon"],
  ["Next Token | 词元之外", "Next Token | Beyond the Next Token"],
  ["<h1>不只预测<br />下一个<span class=\"accent\">词元。</span></h1>", "<h1>More than<br />the next <span class=\"accent\">token.</span></h1>"],
  [
    "一档关注 AI 技术、产品、创业与创作的视频播客。我们从中文世界的一手经验出发，讨论 AI 正在改变什么，以及接下来真正值得关注什么。",
    "A video podcast about AI technology, products, entrepreneurship, and creativity. We start with first-hand experience from the Chinese-speaking world to ask what AI is changing—and what deserves our attention next.",
  ],
  ["查看第一期内容", "Explore episode #001"],
  ["认识 Next Token", "Meet Next Token"],
  [
    "Next Token 是主品牌，承载视频、音频与衍生内容；Next Token Weekly 是当前的旗舰周播。",
    "Next Token is the main brand across video, audio, and related formats. Next Token Weekly is its flagship weekly show.",
  ],
  ["aria-label=\"Next Token Weekly 四位联合主理人录制现场\"", "aria-label=\"Four Next Token Weekly co-hosts recording around a table\""],
  ["alt=\"Next Token Weekly 四位联合主理人的圆桌录制现场\"", "alt=\"Four Next Token Weekly co-hosts recording around a table\""],
  [
    "<span>模型</span><span>Agent 产品</span><span>智能硬件</span><span>创业</span><span>创作</span><span>商业与趋势</span>",
    "<span>Models</span><span>Agent products</span><span>AI hardware</span><span>Startups</span><span>Creativity</span><span>Business &amp; trends</span>",
    2,
  ],
  ["<h2>词元之外，<br />是正在发生的世界。</h2>", "<h2>Beyond the token,<br />the world in motion.</h2>"],
  [
    "“Next token”是生成式模型不断做出的下一次预测。Next Token 关注预测动作之外的人、产业、产品、社会与文化。",
    "A “next token” is the prediction a generative model makes over and over. Next Token looks beyond it—to the people, industries, products, societies, and cultures reshaped by AI.",
  ],
  [
    "主品牌。以中文世界的一手经验和观点讨论 AI，并把这些观点带入全球对话。",
    "Our main brand brings first-hand perspectives from the Chinese-speaking world into the global AI conversation.",
  ],
  [
    "英文品牌。向英文听众解释中文世界正在发生什么、为何重要，以及它与全球 AI 发展的关系。",
    "Our English-language brand explains what is happening in the Chinese-speaking world, why it matters, and how it connects to global AI.",
  ],
  [
    "第一期开箱 2026 年 8 月 27 日至 9 月 3 日的 24 条 AI 新闻。四位联合主理人从密集发布的模型聊到 Agent、智能硬件、商业变化与 AI 原生组织。",
    "Episode #001 unpacks 24 AI stories from August 27 to September 3, 2026. Four co-hosts move from a crowded week of model releases to agents, AI hardware, business shifts, and AI-native organizations.",
  ],
  ["alt=\"Next Token Weekly 第一期开录现场\"", "alt=\"Next Token Weekly episode #001 recording session\""],
  ["首期 · 24 条新闻 · 即将发布", "Episode #001 · 24 stories · Coming soon"],
  ["<h3>模型试不过来，<br />Agent 也试不过来</h3>", "<h3>Too many models to test.<br />Too many agents, too.</h3>"],
  [
    "从 GLM-5.3 Flash、MiniMax H3，到 WorkBuddy、AI 硬件与 Hugging Face 收购话题；四位联合主理人沿着一周新闻，聊模型成本、原厂 Agent、AI 应用回暖，以及每个人都必须闭环的 AI 原生组织。",
    "From GLM-5.3 Flash and MiniMax H3 to WorkBuddy, AI hardware, and Hugging Face acquisition talk, four co-hosts trace a week of AI news through model economics, first-party agents, an application rebound, and why every person needs a closed loop inside an AI-native organization.",
  ],
  ["aria-label=\"本期议题\"", "aria-label=\"Episode topics\""],
  ["<span>24 条新闻</span>", "<span>24 stories</span>"],
  ["<span>模型与 Agent</span>", "<span>Models &amp; agents</span>"],
  ["<span>智能硬件</span>", "<span>AI hardware</span>"],
  ["<span>商业与组织</span>", "<span>Business &amp; organizations</span>"],
  ["<h2>四位联合主理人，<br />一张开放的圆桌。</h2>", "<h2>Four co-hosts.<br />One open table.</h2>"],
  [
    "节目不设长期固定主持人，也不为任何人预设观点或赛道。每一期，由当值主理人串起真实的讨论与分歧。",
    "The show has no permanent host, assigned viewpoint, or fixed beat. Each episode's active co-hosts surface genuine debate and disagreement.",
  ],
  ["alt=\"联合主理人杨攀\"", "alt=\"Co-host Pan YANG\""],
  ["<h3>杨攀</h3>", "<h3>杨攀 Pan YANG</h3>"],
  [
    "联合主理人 · Bilink.ai 创始人，融云联合创始人 &amp; 前 CTO，前硅基流动联合创始人",
    "Co-host · Founder of Bilink.ai; co-founder &amp; ex-CTO of RongCloud, co-founder of SiliconFlow.",
  ],
  ["alt=\"联合主理人歸藏\"", "alt=\"Co-host Guizang\""],
  ["<h3>歸藏</h3>", "<h3>歸藏 Guizang</h3>"],
  ["联合主理人 · AI 创作者，“超级一人公司”实践者", "Co-host · AI creator and “super individual company” practitioner"],
  ["alt=\"联合主理人橘子 Orange\"", "alt=\"Co-host Orange\""],
  ["<h3>橘子 Orange</h3>", "<h3>橘子 Orange</h3>"],
  ["联合主理人 · MarsWave 创始人、ListenHub 与 ColaOS 创始人", "Co-host · Founder of MarsWave, ListenHub, and ColaOS"],
  ["alt=\"联合主理人向阳乔木\"", "alt=\"Co-host Xiangyang Qiaomu\""],
  ["<h3>向阳乔木</h3>", "<h3>向阳乔木 Xiangyang Qiaomu</h3>"],
  ["联合主理人 · AI 创作者与连续创业者，《AI领导力》合著者", "Co-host · AI creator, serial entrepreneur, and co-author of AI Leadership"],
  ["<h2>首期很快<br />和你见面。</h2>", "<h2>Episode #001<br />is coming soon.</h2>"],
  [
    "视频、音频与完整文字稿将同步从这里出发。首期发布后，各平台入口会在本页开放。",
    "Video, audio, and a full transcript will launch together here. Links to every platform will appear on this page when episode #001 is released.",
  ],
  ["aria-label=\"即将开放的订阅平台\"", "aria-label=\"Subscription platforms coming soon\""],
  ["<strong>小宇宙</strong>", "<strong>Xiaoyuzhou</strong>"],
  ["<strong>哔哩哔哩</strong>", "<strong>Bilibili</strong>"],
  ["<span class=\"coming\">即将开放</span>", "<span class=\"coming\">Coming soon</span>", 5],
];

function replaceChecked(html, sourceText, translatedText, expected = 1) {
  const count = html.split(sourceText).length - 1;
  if (count !== expected) {
    throw new Error(`Expected ${expected} occurrence(s), found ${count}: ${sourceText.slice(0, 80)}`);
  }
  return html.replaceAll(sourceText, translatedText);
}

let english = source;
for (const [sourceText, translatedText, expected] of replacements) {
  english = replaceChecked(english, sourceText, translatedText, expected);
}
english = english.replaceAll("assets/", "/assets/");

await rm(outputPath, { recursive: true, force: true });
await mkdir(resolve(outputPath, "en"), { recursive: true });
await cp(assetsPath, resolve(outputPath, "assets"), { recursive: true });
await writeFile(resolve(outputPath, "index.html"), source);
await writeFile(resolve(outputPath, "en", "index.html"), english);

console.log("Built zh-Hans / and en /en/ static pages.");
