import type { Locale, LocalizedText } from "./types";

export type PartnerVenueRef = {
  partnerSlug: string;
  venueSlug: string;
};

export type PartnerVenue = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  heroImage?: string;
  heroAlt?: LocalizedText;
  gallery?: Array<{
    src: string;
    alt: LocalizedText;
  }>;
  location: {
    label: LocalizedText;
    address: LocalizedText;
    transport?: LocalizedText;
    mapUrl: string;
  };
  facts?: Array<{
    value: string;
    label: LocalizedText;
  }>;
  spaces?: Array<{
    title: LocalizedText;
    copy: LocalizedText;
  }>;
};

export type Partner = {
  slug: string;
  name: string;
  englishName: string;
  role: LocalizedText;
  summary: LocalizedText;
  introduction: Record<Locale, string[]>;
  logo: string;
  featuredVenueSlug: string;
  venues: PartnerVenue[];
  sources: Array<{
    label: LocalizedText;
    href: string;
  }>;
};

export const partners: Partner[] = [
  {
    slug: "xiangwai",
    name: "象外空间",
    englishName: "Xanadu Why Space",
    role: {
      "zh-Hans": "场地合作伙伴",
      en: "Venue partner",
    },
    summary: {
      "zh-Hans": "从书出发，不止于书的复合文化空间，也是 Next Token Weekly 的圆桌录制现场。",
      en: "A cultural space that starts with books and goes beyond them—and the home of the Next Token Weekly roundtable recording.",
    },
    introduction: {
      "zh-Hans": [
        "象外空间位于北京朝阳来广营，是一处约 3500 平方米的复合文化空间。它以“让附近更有温度”为愿景，将公共阅读、艺术展览、咖啡简餐、主题沙龙与社区活动放在同一个日常场景里。",
        "象外空间为 Next Token 提供场地支持。开放的书墙、长桌与社区会客厅氛围，让节目可以在真实的公共文化空间中进行圆桌对话。",
      ],
      en: [
        "Xanadu Why Space is a roughly 3,500-square-meter cultural venue in Laiguangying, Chaoyang, Beijing. Guided by the idea of making the neighborhood warmer, it brings public reading, exhibitions, food and drink, salons, and community programs into one everyday place.",
        "The venue supports Next Token as its recording partner. Its open bookshelves, shared tables, and community-living-room atmosphere give the Weekly roundtable a real public-cultural setting.",
      ],
    },
    logo: "/assets/partners/xiangwai/logo.svg",
    featuredVenueSlug: "beijing-fuxi",
    venues: [
      {
        slug: "beijing-fuxi",
        name: { "zh-Hans": "福熙店", en: "Fuxi venue" },
        summary: {
          "zh-Hans": "位于北京朝阳来广营的复合文化空间，也是 Next Token Weekly #001 的录制场地。",
          en: "A cultural venue in Laiguangying, Chaoyang, Beijing, and the recording location for Next Token Weekly #001.",
        },
        heroImage: "/assets/partners/xiangwai/space-main.jpg",
        heroAlt: {
          "zh-Hans": "象外空间的阅读与文创区",
          en: "Reading and cultural retail area at Xanadu Why Space",
        },
        gallery: [
          {
            src: "/assets/partners/xiangwai/reading-area.jpg",
            alt: {
              "zh-Hans": "象外空间的书墙与阅读座位",
              en: "Bookshelves and reading seats at Xanadu Why Space",
            },
          },
          {
            src: "/assets/partners/xiangwai/event-space.jpg",
            alt: {
              "zh-Hans": "象外空间的社区活动现场",
              en: "A community gathering at Xanadu Why Space",
            },
          },
        ],
        location: {
          label: {
            "zh-Hans": "北京 · 朝阳 · 来广营",
            en: "Laiguangying, Chaoyang, Beijing",
          },
          address: {
            "zh-Hans": "北京市朝阳区清河营东路 3 号院 2 号楼福熙大道南区",
            en: "Building 2, South Fuxi Avenue, No. 3 Qingheying East Road, Chaoyang District, Beijing",
          },
          transport: {
            "zh-Hans": "地铁 13 号线北苑站 / 17 号线清河营站",
            en: "Beiyuan Station on Line 13 / Qingheying Station on Line 17",
          },
          mapUrl: "https://uri.amap.com/search?keyword=%E8%B1%A1%E5%A4%96%E7%A9%BA%E9%97%B4%C2%B7%E7%A6%8F%E7%86%99%E5%BA%97&city=%E5%8C%97%E4%BA%AC&view=map&callnative=1",
        },
        facts: [
          {
            value: "3500 m²",
            label: { "zh-Hans": "复合文化空间", en: "Cultural space" },
          },
          {
            value: "09:30–22:00",
            label: { "zh-Hans": "每日开放", en: "Open daily" },
          },
          {
            value: "280",
            label: { "zh-Hans": "阅览坐席", en: "Reading seats" },
          },
          {
            value: "200",
            label: { "zh-Hans": "大会空间容量", en: "Large event capacity" },
          },
        ],
        spaces: [
          {
            title: { "zh-Hans": "阅读与社区", en: "Reading and community" },
            copy: {
              "zh-Hans": "公共阅读、亲子空间与社区活动共用一个日常开放的文化会客厅。",
              en: "Public reading, family spaces, and community programming share one everyday cultural living room.",
            },
          },
          {
            title: { "zh-Hans": "艺术与展览", en: "Art and exhibitions" },
            copy: {
              "zh-Hans": "二层设有近 500 平方米美术馆，曾与中央美术学院、清华大学美术学院合作办展。",
              en: "A nearly 500-square-meter gallery has hosted collaborations with leading Beijing art schools.",
            },
          },
          {
            title: { "zh-Hans": "会议与录制", en: "Events and recording" },
            copy: {
              "zh-Hans": "两个会议空间配备音响、话筒与 LED 屏，可支持圆桌、沙龙和大型活动。",
              en: "Two meeting spaces with sound, microphones, and LED displays support roundtables, salons, and larger events.",
            },
          },
        ],
      },
    ],
    sources: [
      {
        label: {
          "zh-Hans": "阅读北京 · 朝阳区象外空间",
          en: "Reading Beijing · Xanadu Why Space",
        },
        href: "https://readingbeijing.clcn.net.cn/detail?media=top10-space-detail&id=1649",
      },
      {
        label: {
          "zh-Hans": "象外空间公众号介绍",
          en: "Official WeChat introduction",
        },
        href: "https://mp.weixin.qq.com/s/Yip3KTJKfds3kW30E6znrg",
      },
    ],
  },
  {
    slug: "agi-bar",
    name: "AGI Bar",
    englishName: "AGI Bar · Knowledge Distillation",
    role: {
      "zh-Hans": "场地合作伙伴",
      en: "Venue partner",
    },
    summary: {
      "zh-Hans": "白天是 AI 门店，晚上回归酒吧本质的行业社交网络，目前在北京与上海设有空间。",
      en: "An AI studio by day and a bar by night, with a growing network of spaces in Beijing and Shanghai.",
    },
    introduction: {
      "zh-Hans": [
        "AGI Bar 以“知识蒸馏”为中文名，把 AI 术语与酒吧场景叠在一起：白天是 AI 门店，晚上回归酒吧本质。品牌于 2025 年 6 月从北京中关村起步，目前已在北京与上海设有空间。",
        "它把自己定义为一个非正式但高密度的社交场域，面向 AI 创业者、工程师、创作者与投资人。新品发布、行业交流、After Party、活动 IP、酒水投送和具身智能展示，共同构成这里的活动方法。",
        "作为 Next Token 的场地合作伙伴，AGI Bar 为线下录制、主题圆桌与行业交流提供一个更松弛、也更贴近 AI 从业者日常的发生地。",
      ],
      en: [
        "AGI Bar folds the AI term “Knowledge Distillation” into the language of a bar: an AI studio by day, returning to the nature of a bar at night. The brand began in Beijing's Zhongguancun in June 2025 and now has spaces in Beijing and Shanghai.",
        "The venue describes itself as an informal yet high-density social space for AI founders, engineers, creators, and investors. Product launches, industry exchange, after-parties, original event formats, a mobile bar, and embodied-AI showcases make up its programming model.",
        "As a venue partner for Next Token, AGI Bar offers a relaxed, industry-native setting for recordings, themed roundtables, and in-person exchange.",
      ],
    },
    logo: "/assets/partners/agi-bar/logo.svg",
    featuredVenueSlug: "beijing-zhongguancun",
    venues: [
      {
        slug: "beijing-zhongguancun",
        name: { "zh-Hans": "北京中关村店", en: "Beijing Zhongguancun" },
        summary: {
          "zh-Hans": "AGI Bar 的首个常设空间，位于中关村创业大街。",
          en: "AGI Bar's first permanent space, on Zhongguancun Startup Street.",
        },
        heroImage: "/assets/partners/agi-bar/hero.webp",
        heroAlt: {
          "zh-Hans": "AGI Bar 知识蒸馏的具身智能活动现场",
          en: "An embodied-AI event outside AGI Bar Knowledge Distillation",
        },
        gallery: [
          {
            src: "/assets/partners/agi-bar/community.webp",
            alt: {
              "zh-Hans": "AGI Bar 户外桌边的行业交流",
              en: "An industry gathering around the outdoor tables at AGI Bar",
            },
          },
          {
            src: "/assets/partners/agi-bar/street-event.webp",
            alt: {
              "zh-Hans": "AGI Bar 门前进行的现场访谈",
              en: "A live conversation outside AGI Bar",
            },
          },
        ],
        location: {
          label: {
            "zh-Hans": "北京 · 海淀 · 中关村",
            en: "Zhongguancun, Haidian, Beijing",
          },
          address: {
            "zh-Hans": "北京市海淀区海淀西大街 39 号中关村创业大街 2 号楼",
            en: "Building 2, Zhongguancun Startup Street, No. 39 Haidian West Street, Haidian District, Beijing",
          },
          transport: {
            "zh-Hans": "地铁 10 号线苏州街站 / 16 号线万泉河桥站",
            en: "Suzhoujie Station on Line 10 / Wanquanheqiao Station on Line 16",
          },
          mapUrl: "https://uri.amap.com/search?keyword=AGI%20Bar%20%E7%9F%A5%E8%AF%86%E8%92%B8%E9%A6%8F&city=%E5%8C%97%E4%BA%AC&view=map&callnative=1",
        },
        facts: [
          {
            value: "2025.06",
            label: { "zh-Hans": "北京首店开业", en: "Beijing opening" },
          },
          {
            value: "15:00–23:00",
            label: { "zh-Hans": "每日营业时间", en: "Open daily" },
          },
          {
            value: "6",
            label: {
              "zh-Hans": "官方活动类型",
              en: "Official activity formats",
            },
          },
          {
            value: "¥9.9",
            label: { "zh-Hans": "AGI 泡沫标准杯", en: "Standard AGI Foam" },
          },
        ],
        spaces: [
          {
            title: {
              "zh-Hans": "发布与冷启动",
              en: "Launches and cold starts",
            },
            copy: {
              "zh-Hans": "面向新品首发与早期验证，让从业者、创始人与投资人在现场形成即时反馈。",
              en: "A setting for debuts and early validation, with immediate feedback from practitioners, founders, and investors.",
            },
          },
          {
            title: {
              "zh-Hans": "圆桌与行业交流",
              en: "Roundtables and industry exchange",
            },
            copy: {
              "zh-Hans": "松弛的酒吧氛围承载高密度讨论，也适合主题圆桌、现场录制和 After Party。",
              en: "A relaxed bar atmosphere carries high-density discussion, themed roundtables, live recording, and after-parties.",
            },
          },
          {
            title: {
              "zh-Hans": "AI 实验与场景延伸",
              en: "AI experiments and extensions",
            },
            copy: {
              "zh-Hans": "具身智能展示把空间变成创新首秀场，酒水投送则将 AGI Bar 的体验延伸到外部活动。",
              en: "Embodied-AI showcases turn the venue into a debut stage, while the mobile bar extends the AGI Bar experience to outside events.",
            },
          },
        ],
      },
      {
        slug: "shanghai-beiyang",
        name: { "zh-Hans": "上海北杨店", en: "Shanghai Beiyang" },
        summary: {
          "zh-Hans": "位于上海徐汇北杨的 AGI Bar 空间，落地红杉中国创新加速器。",
          en: "AGI Bar's Shanghai location in Beiyang, Xuhui, inside the HongShan Innovation Accelerator.",
        },
        location: {
          label: {
            "zh-Hans": "上海 · 徐汇 · 北杨",
            en: "Beiyang, Xuhui, Shanghai",
          },
          address: {
            "zh-Hans": "上海市徐汇区华发路 777 弄 2 号 1 楼红杉中国创新加速器 · 上海北杨",
            en: "1F, Building 2, Lane 777 Huafa Road, HongShan Innovation Accelerator, Xuhui District, Shanghai",
          },
          mapUrl: "https://uri.amap.com/search?keyword=AGI%20Bar%20%E4%B8%8A%E6%B5%B7%E5%8C%97%E6%9D%A8&city=%E4%B8%8A%E6%B5%B7&view=map&callnative=1",
        },
      },
    ],
    sources: [
      {
        label: {
          "zh-Hans": "AGI Bar 官方网站",
          en: "AGI Bar official website",
        },
        href: "https://agi.bar/",
      },
      {
        label: {
          "zh-Hans": "中关村创业大街 · AGI Bar 入驻介绍",
          en: "Zhongguancun Startup Street · AGI Bar introduction",
        },
        href: "https://segmentfault.com/a/1190000046708905",
      },
      {
        label: {
          "zh-Hans": "澎湃新闻 · AGI Bar 现场报道",
          en: "The Paper · Inside AGI Bar",
        },
        href: "https://www.thepaper.cn/newsDetail_forward_33823195",
      },
      {
        label: {
          "zh-Hans": "WaytoAGI · 上海北杨活动信息",
          en: "WaytoAGI · Shanghai Beiyang event listing",
        },
        href: "https://waic.waytoagi.com/events/ai-taste-party-e_67535cbda2",
      },
    ],
  },
];

export function partnerPath(partner: Partner, locale: Locale) {
  return locale === "en" ? `/en/partners/${partner.slug}/` : `/partners/${partner.slug}/`;
}

export function partnersPath(locale: Locale) {
  return locale === "en" ? "/en/partners/" : "/partners/";
}

export function featuredVenue(partner: Partner) {
  const venue = partner.venues.find(({ slug }) => slug === partner.featuredVenueSlug);

  if (!venue) {
    throw new Error(`Featured venue ${partner.featuredVenueSlug} is missing from partner ${partner.slug}`);
  }

  return venue;
}

export function resolvePartnerVenue(ref: PartnerVenueRef) {
  const partner = partners.find(({ slug }) => slug === ref.partnerSlug);
  const venue = partner?.venues.find(({ slug }) => slug === ref.venueSlug);

  if (!partner || !venue) {
    throw new Error(`Unknown partner venue ${ref.partnerSlug}/${ref.venueSlug}`);
  }

  return { partner, venue };
}
