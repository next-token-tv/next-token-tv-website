import episode001 from "./episodes/001.json";
import type { PartnerVenueRef } from "./partners";
import type { Locale } from "./types";

export type { Locale } from "./types";

export const episode001Url = "https://www.xiaoyuzhoufm.com/episode/6a9ad843f03e74ee6b05352c";
export const episode001BilibiliUrl = "https://www.bilibili.com/video/BV1qdtz6LEHf/";
export const episode001Assets = {
  id: episode001.id,
  recordedAt: episode001.recorded_at,
  recordingVenue: {
    partnerSlug: episode001.recording_venue.partner_slug,
    venueSlug: episode001.recording_venue.venue_slug,
  } satisfies PartnerVenueRef,
  images: episode001.images,
} as const;

type SocialLink = {
  platform: string;
  handle: string;
  href?: string;
  note?: string;
};

export type Host = {
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

const sharedHosts = {
  yangPan: {
    photo: "/assets/hosts/yang-pan.webp",
    width: 400,
    height: 400,
    socials: [
      {
        platform: "X",
        handle: "@ericyangpan",
        href: "https://x.com/ericyangpan",
      },
      {
        platform: "GitHub",
        handle: "@ericyangpan",
        href: "https://github.com/ericyangpan",
      },
      {
        platform: "Jike",
        handle: "杨攀同学",
        href: "https://m.okjike.com/users/B53205DA-8DDC-463C-87B3-3F65F88B6EA2",
      },
      { platform: "WeChat", handle: "杨攀同学" },
      { platform: "Xiaohongshu", handle: "杨攀同学" },
      {
        platform: "LinkedIn",
        handle: "Pan YANG",
        href: "https://www.linkedin.com/in/ericyangpan",
      },
    ],
  },
  guizang: {
    photo: "/assets/hosts/guizang.webp",
    width: 400,
    height: 400,
    socials: [
      { platform: "X", handle: "@op7418", href: "https://x.com/op7418" },
      {
        platform: "GitHub",
        handle: "@op7418",
        href: "https://github.com/op7418",
      },
      { platform: "Jike", handle: "歸藏" },
      {
        platform: "Weibo",
        handle: "@歸藏的AI工具箱",
        href: "https://www.sina.cn/media/6182606334",
      },
      { platform: "WeChat", handle: "歸藏的AI工具箱" },
      { platform: "Xiaohongshu", handle: "歸藏" },
    ],
  },
  orange: {
    photo: "/assets/hosts/orange.webp",
    width: 320,
    height: 320,
    socials: [
      { platform: "X", handle: "@oran_ge", href: "https://x.com/oran_ge" },
      {
        platform: "GitHub",
        handle: "@orange2ai",
        href: "https://github.com/orange2ai",
      },
      { platform: "Jike", handle: "橘AI" },
      {
        platform: "Blog",
        handle: "橘子汽水铺",
        href: "https://blog.orangesai.com",
      },
      {
        platform: "Podcast",
        handle: "橘座",
        href: "https://www.xiaoyuzhoufm.com/podcast/6640bb10390b415a59a41773",
      },
      { platform: "WeChat", handle: "橘AI" },
      { platform: "Xiaohongshu", handle: "橘AI" },
      {
        platform: "LinkedIn",
        handle: "Leo Feng",
        href: "https://www.linkedin.com/in/orangeai",
      },
    ],
  },
  xiangyangQiaomu: {
    photo: "/assets/hosts/xiangyang-qiaomu.webp",
    width: 400,
    height: 400,
    socials: [
      { platform: "X", handle: "@vista8", href: "https://x.com/vista8" },
      {
        platform: "GitHub",
        handle: "@joeseesun",
        href: "https://github.com/joeseesun",
      },
      {
        platform: "Jike",
        handle: "向阳乔木",
        href: "https://m.okjike.com/users/b66a780a-1572-455a-a0db-d601070d4251",
      },
      { platform: "WeChat", handle: "向阳乔木推荐看" },
      { platform: "Xiaohongshu", handle: "向阳乔木" },
    ],
  },
} as const;

const zhSocialLabels: Record<string, string> = {
  Jike: "即刻",
  Weibo: "微博",
  WeChat: "公众号",
  Xiaohongshu: "小红书",
  Blog: "博客",
  Podcast: "播客",
};

function localizeSocials(socials: readonly SocialLink[], locale: Locale): SocialLink[] {
  return socials.map((social) => ({
    ...social,
    platform: locale === "zh-Hans" ? (zhSocialLabels[social.platform] ?? social.platform) : social.platform,
    note: social.href
      ? undefined
      : locale === "zh-Hans"
        ? social.platform === "WeChat"
          ? "微信内搜索"
          : "App 内搜索"
        : social.platform === "WeChat"
          ? "Search in WeChat"
          : "Search in app",
  }));
}

function hosts(locale: Locale): Host[] {
  const zh = locale === "zh-Hans";

  return [
    {
      ...sharedHosts.yangPan,
      name: zh ? "杨攀" : "杨攀 Pan YANG",
      bio: zh ? "联合主理人 · Bilink.ai 创始人，融云联合创始人，前硅基流动联合创始人" : "Co-host · Founder of Bilink.ai; co-founder of RongCloud and SiliconFlow.",
      alt: zh ? "联合主理人杨攀" : "Co-host Pan YANG",
      socialsLabel: zh ? "杨攀的社交账号" : "Pan YANG's social accounts",
      socials: localizeSocials(sharedHosts.yangPan.socials, locale),
    },
    {
      ...sharedHosts.guizang,
      name: zh ? "歸藏" : "歸藏 Guizang",
      bio: zh ? "联合主理人 · AI 创作者，“超级一人公司”实践者" : "Co-host · AI creator and “super individual company” practitioner",
      alt: zh ? "联合主理人歸藏" : "Co-host Guizang",
      socialsLabel: zh ? "歸藏的社交账号" : "Guizang's social accounts",
      socials: localizeSocials(sharedHosts.guizang.socials, locale),
    },
    {
      ...sharedHosts.orange,
      name: "橘子 Orange",
      bio: zh ? "联合主理人 · MarsWave 创始人、ListenHub 与 ColaOS 创始人" : "Co-host · Founder of MarsWave, ListenHub, and ColaOS",
      alt: zh ? "联合主理人橘子 Orange" : "Co-host Orange",
      socialsLabel: zh ? "橘子 Orange 的社交账号" : "Orange's social accounts",
      socials: localizeSocials(sharedHosts.orange.socials, locale),
    },
    {
      ...sharedHosts.xiangyangQiaomu,
      name: zh ? "向阳乔木" : "向阳乔木 Xiangyang Qiaomu",
      bio: zh ? "联合主理人 · AI 创作者与连续创业者，《AI领导力》合著者" : "Co-host · AI creator, serial entrepreneur, and co-author of AI Leadership",
      alt: zh ? "联合主理人向阳乔木" : "Co-host Xiangyang Qiaomu",
      socialsLabel: zh ? "向阳乔木的社交账号" : "Xiangyang Qiaomu's social accounts",
      socials: localizeSocials(sharedHosts.xiangyangQiaomu.socials, locale),
    },
  ];
}

export const siteContent: Record<Locale, SiteContent> = {
  "zh-Hans": {
    locale: "zh-Hans",
    path: "/",
    title: "Next Token | 词元之外",
    description: "Next Token | 词元之外是一档关注 AI 技术、产品、创业与创作的视频播客。Next Token Weekly #001 从 24 条一周新闻出发，讨论模型、Agent、智能硬件、AI 应用与原生组织。",
    ogDescription: episode001.title,
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
    weekly: {
      lede: "第一期开箱 2026 年 8 月 27 日至 9 月 3 日的 24 条 AI 新闻。四位联合主理人从密集发布的模型聊到 Agent、智能硬件、商业变化与 AI 原生组织。",
      imageAlt: "Next Token Weekly 第一期开录现场",
      eyebrow: "首期 · 24 条新闻 · 现已上线",
      heading: ["大模型进入“斩杀线”大战，", "Token 就是新货币"],
      copy: "从 GLM-5.3 Flash、MiniMax H3，到 WorkBuddy、AI 硬件与 Hugging Face 收购话题；四位联合主理人沿着一周新闻，聊模型成本、原厂 Agent、AI 应用回暖，以及每个人都必须闭环的 AI 原生组织。",
      topicsLabel: "本期议题",
      topics: ["24 条新闻", "模型与 Agent", "智能硬件", "商业与组织"],
      listenAction: "在小宇宙收听/收看",
      watchAction: "在哔哩哔哩观看",
    },
    hosts: {
      heading: ["四位联合主理人，", "一张开放的圆桌。"],
      note: "节目不设长期固定主持人，也不为任何人预设观点或赛道。每一期，由当值主理人串起真实的讨论与分歧。",
      items: hosts("zh-Hans"),
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
    description:
      "Next Token is a video podcast about AI technology, products, entrepreneurship, and creativity. Next Token Weekly #001 unpacks 24 stories across models, agents, AI hardware, applications, and AI-native organizations.",
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
      intro:
        "A video podcast about AI technology, products, entrepreneurship, and creativity. We start with first-hand experience from the Chinese-speaking world to ask what AI is changing—and what deserves our attention next.",
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
    weekly: {
      lede: "Episode #001 unpacks 24 AI stories from August 27 to September 3, 2026. Four co-hosts move from a crowded week of model releases to agents, AI hardware, business shifts, and AI-native organizations.",
      imageAlt: "Next Token Weekly episode #001 recording session",
      eyebrow: "Episode #001 · 24 stories · Now live",
      heading: ["The LLM “kill line” wars begin.", "Tokens are the new money."],
      copy: "From GLM-5.3 Flash and MiniMax H3 to WorkBuddy, AI hardware, and Hugging Face acquisition talk, four co-hosts trace a week of AI news through model economics, first-party agents, an application rebound, and why every person needs a closed loop inside an AI-native organization.",
      topicsLabel: "Episode topics",
      topics: ["24 stories", "Models & agents", "AI hardware", "Business & organizations"],
      listenAction: "Listen / watch on Xiaoyuzhou",
      watchAction: "Watch on Bilibili",
    },
    hosts: {
      heading: ["Four co-hosts.", "One open table."],
      note: "The show has no permanent host, assigned viewpoint, or fixed beat. Each episode's active co-hosts surface genuine debate and disagreement.",
      items: hosts("en"),
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

export const platforms = [
  {
    zh: "小宇宙",
    en: "Xiaoyuzhou",
    href: episode001Url,
    action: { zh: "收听/收看", en: "Listen / watch" },
  },
  { zh: "Apple Podcasts", en: "Apple Podcasts" },
  { zh: "Spotify", en: "Spotify" },
  {
    zh: "哔哩哔哩",
    en: "Bilibili",
    href: episode001BilibiliUrl,
    action: { zh: "立即观看", en: "Watch now" },
  },
  { zh: "YouTube", en: "YouTube" },
] as const;
