export const interfaceIcons = {
  search: {
    name: { "zh-Hans": "搜索", en: "Search" },
    usage: { "zh-Hans": "页头搜索入口", en: "Header search link" },
    viewBox: "0 0 24 24", size: 1.125, stroke: 2,
    path: "m15 15 6 6",
  },
  menu: {
    name: { "zh-Hans": "菜单", en: "Menu" },
    usage: { "zh-Hans": "移动端导航开关", en: "Mobile navigation toggle" },
    viewBox: "0 0 20 20", size: 1.25, stroke: 1.5,
    path: "M3 5h14M3 10h14M3 15h14",
  },
} as const;

export type InterfaceIconName = keyof typeof interfaceIcons;
