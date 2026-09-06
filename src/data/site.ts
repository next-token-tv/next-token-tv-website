import { getHostsForShow, getPublishedEpisode } from "./catalog";
import type { Locale } from "./types";

export type { Locale } from "./types";

export const siteLinks = {
  github: "https://github.com/next-token-tv",
};

type SocialLink = {
  platform: string;
  handle: string;
  href?: string;
  note?: string;
};

export type Host = {
  id: string;
  profilePath: string;
  name: string;
  bio: string;
  photo: string;
  width: number;
  height: number;
  alt: string;
  socialsLabel: string;
  socials: SocialLink[];
};

export type SiteContent = {
  locale: Locale;
  path: "/" | "/en/";
  title: string;
  description: string;
  ogDescription: string;
  skipLink: string;
  homeLabel: string;
  navigationLabel: string;
  navigation: {
    about: string;
    weekly: string;
    hosts: string;
    partners: string;
    subscribe: string;
  };
  languageLabel: string;
  status: string;
  hero: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    intro: string;
    primaryAction: string;
    secondaryAction: string;
    footnote: string;
    visualLabel: string;
    visualAlt: string;
  };
  topics: string[];
  about: {
    heading: [string, string];
    lede: string;
    cards: Array<{ title: string; titleSecondLine?: string; copy: string }>;
  };
  weekly: {
    lede: string;
    imageAlt: string;
    eyebrow: string;
    heading: [string, string];
    copy: string;
    topicsLabel: string;
    topics: string[];
    listenAction: string;
    watchAction: string;
  };
  hosts: {
    heading: [string, string];
    note: string;
    items: Host[];
  };
  subscribe: {
    heading: [string, string];
    copy: string;
    platformsLabel: string;
    available: string;
    comingSoon: string;
  };
};

type SiteContentBase = Omit<SiteContent, "weekly" | "hosts"> & {
  hosts: Omit<SiteContent["hosts"], "items">;
};

const siteContentBase: Record<Locale, SiteContentBase> = {
  "zh-Hans": {
    locale: "zh-Hans",
    path: "/",
    title: "Next Token | 词元之外",
    description: "Next Token | 词元之外是一档关注 AI 技术、产品、创业与创作的视频播客。Next Token Weekly #001 从 24 条一周新闻出发，讨论模型、Agent、智能硬件、AI 应用与原生组织。",
    ogDescription: "Next Token Weekly #001｜大模型进入“斩杀线”大战，Token 就是新货币",
    skipLink: "跳到主要内容",
    homeLabel: "Next Token 首页",
    navigationLabel: "主导航",
    navigation: {
      about: "关于品牌",
      weekly: "Next Token Weekly",
      hosts: "联合主理人",
      partners: "合作伙伴",
      subscribe: "订阅",
    },
    languageLabel: "语言切换",
    status: "首期已上线",
    hero: {
      eyebrow: "Next Token | 词元之外",
      headingLead: "不只预测\n下一个",
      headingAccent: "词元。",
      intro: "一档关注 AI 技术、产品、创业与创作的视频播客。我们从中文世界的一手经验出发，讨论 AI 正在改变什么，以及接下来真正值得关注什么。",
      primaryAction: "查看第一期内容",
      secondaryAction: "认识 Next Token",
      footnote: "Next Token 是主品牌，承载视频、音频与衍生内容；Next Token Weekly 是当前的旗舰周播。",
      visualLabel: "Next Token Weekly 四位联合主理人录制现场",
      visualAlt: "Next Token Weekly 四位联合主理人的圆桌录制现场",
    },
    topics: ["模型", "Agent 产品", "智能硬件", "创业", "创作", "商业与趋势"],
    about: {
      heading: ["词元之外，", "是正在发生的世界。"],
      lede: "“Next token”是生成式模型不断做出的下一次预测。Next Token 关注预测动作之外的人、产业、产品、社会与文化。",
      cards: [
        {
          title: "Next Token |",
          titleSecondLine: "词元之外",
          copy: "统一主品牌。以中英文连接中文世界的一手 AI 经验与全球对话，承载视频、音频和衍生内容。",
        },
        {
          title: "Next Token",
          titleSecondLine: "Weekly",
          copy: "当前旗舰周播。四位联合主理人以开放圆桌形式，讨论过去一周真正值得关注的 AI 新闻。",
        },
      ],
    },
    hosts: {
      heading: ["四位联合主理人，", "一张开放的圆桌。"],
      note: "节目不设长期固定主持人，也不为任何人预设观点或赛道。每一期，由当值主理人串起真实的讨论与分歧。",
    },
    subscribe: {
      heading: ["首期已经", "和你见面。"],
      copy: "第一期现已在小宇宙和哔哩哔哩上线。其他平台与完整文字稿入口将继续在本页更新。",
      platformsLabel: "收听与观看平台",
      available: "立即收听",
      comingSoon: "即将开放",
    },
  },
  en: {
    locale: "en",
    path: "/en/",
    title: "Next Token | Beyond the Next Token",
    description: "Next Token is a video podcast about AI technology, products, entrepreneurship, and creativity. Next Token Weekly #001 unpacks 24 stories across models, agents, AI hardware, applications, and AI-native organizations.",
    ogDescription: "Next Token Weekly #001 | The LLM “kill line” wars begin. Tokens are the new money.",
    skipLink: "Skip to main content",
    homeLabel: "Next Token home",
    navigationLabel: "Main navigation",
    navigation: {
      about: "About",
      weekly: "Next Token Weekly",
      hosts: "Co-hosts",
      partners: "Partners",
      subscribe: "Follow",
    },
    languageLabel: "Language switcher",
    status: "Episode #001 is live",
    hero: {
      eyebrow: "Next Token | 词元之外",
      headingLead: "Beyond the\nnext ",
      headingAccent: "token.",
      intro: "A video podcast about AI technology, products, entrepreneurship, and creativity. We start with first-hand experience from the Chinese-speaking world to ask what AI is changing—and what deserves our attention next.",
      primaryAction: "Explore episode #001",
      secondaryAction: "Meet Next Token",
      footnote: "Next Token is the main brand across video, audio, and related formats. Next Token Weekly is its flagship weekly show.",
      visualLabel: "Four Next Token Weekly co-hosts recording around a table",
      visualAlt: "Four Next Token Weekly co-hosts recording around a table",
    },
    topics: ["Models", "Agent products", "AI hardware", "Startups", "Creativity", "Business & trends"],
    about: {
      heading: ["Beyond the token,", "the world in motion."],
      lede: "A “next token” is the prediction a generative model makes over and over. Next Token looks beyond it—to the people, industries, products, societies, and cultures reshaped by AI.",
      cards: [
        {
          title: "Next Token |",
          titleSecondLine: "词元之外",
          copy: "One brand in Chinese and English, bringing first-hand AI perspectives from the Chinese-speaking world into the global conversation across video, audio, and related formats.",
        },
        {
          title: "Next Token",
          titleSecondLine: "Weekly",
          copy: "Our flagship weekly show. Four co-hosts gather at an open table to discuss the AI stories that genuinely matter each week.",
        },
      ],
    },
    hosts: {
      heading: ["Four co-hosts.", "One open table."],
      note: "The show has no permanent host, assigned viewpoint, or fixed beat. Each episode's active co-hosts surface genuine debate and disagreement.",
    },
    subscribe: {
      heading: ["Episode #001", "is now live."],
      copy: "Episode #001 is now available on Xiaoyuzhou and Bilibili. More platforms and the full transcript will be added here as they go live.",
      platformsLabel: "Listen and watch",
      available: "Listen now",
      comingSoon: "Coming soon",
    },
  },
};

export async function getSiteContent(locale: Locale): Promise<SiteContent> {
  const [hosts, episode] = await Promise.all([
    getHostsForShow("next-token-weekly", locale),
    getPublishedEpisode(),
  ]);
  const base = siteContentBase[locale];

  return {
    ...base,
    weekly: episode.data.homepage[locale],
    hosts: {
      ...base.hosts,
      items: hosts,
    },
  };
}
