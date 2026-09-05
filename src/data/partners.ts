import type { Locale } from "./site";

type LocalizedText = Record<Locale, string>;

export type Partner = {
  slug: string;
  name: string;
  englishName: string;
  role: LocalizedText;
  summary: LocalizedText;
  introduction: Record<Locale, string[]>;
  logo: string;
  heroImage: string;
  heroAlt: LocalizedText;
  gallery: Array<{
    src: string;
    alt: LocalizedText;
  }>;
  location: {
    label: LocalizedText;
    address: LocalizedText;
    transport: LocalizedText;
    mapUrl: string;
  };
  facts: Array<{
    value: string;
    label: LocalizedText;
  }>;
  spaces: Array<{
    title: LocalizedText;
    copy: LocalizedText;
  }>;
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
      { value: "3500 m²", label: { "zh-Hans": "复合文化空间", en: "Cultural space" } },
      { value: "09:30–22:00", label: { "zh-Hans": "每日开放", en: "Open daily" } },
      { value: "280", label: { "zh-Hans": "阅览坐席", en: "Reading seats" } },
      { value: "200", label: { "zh-Hans": "大会空间容量", en: "Large event capacity" } },
    ],
    spaces: [
      {
        title: { "zh-Hans": "阅读与社区", en: "Reading and community" },
        copy: { "zh-Hans": "公共阅读、亲子空间与社区活动共用一个日常开放的文化会客厅。", en: "Public reading, family spaces, and community programming share one everyday cultural living room." },
      },
      {
        title: { "zh-Hans": "艺术与展览", en: "Art and exhibitions" },
        copy: { "zh-Hans": "二层设有近 500 平方米美术馆，曾与中央美术学院、清华大学美术学院合作办展。", en: "A nearly 500-square-meter gallery has hosted collaborations with leading Beijing art schools." },
      },
      {
        title: { "zh-Hans": "会议与录制", en: "Events and recording" },
        copy: { "zh-Hans": "两个会议空间配备音响、话筒与 LED 屏，可支持圆桌、沙龙和大型活动。", en: "Two meeting spaces with sound, microphones, and LED displays support roundtables, salons, and larger events." },
      },
    ],
    sources: [
      {
        label: { "zh-Hans": "阅读北京 · 朝阳区象外空间", en: "Reading Beijing · Xanadu Why Space" },
        href: "https://readingbeijing.clcn.net.cn/detail?media=top10-space-detail&id=1649",
      },
      {
        label: { "zh-Hans": "象外空间公众号介绍", en: "Official WeChat introduction" },
        href: "https://mp.weixin.qq.com/s/Yip3KTJKfds3kW30E6znrg",
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
