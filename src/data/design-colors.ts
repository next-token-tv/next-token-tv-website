import tokenStyles from "../styles/tokens.css?raw";

export const colorNames = {
  "--paper": { "zh-Hans": "暖纸", en: "Warm Paper" },
  "--ink": { "zh-Hans": "墨黑", en: "Ink Black" },
  "--signal": { "zh-Hans": "信号橙", en: "Signal Orange" },
  "--sky": { "zh-Hans": "远空蓝", en: "Distant Sky" },
  "--gold": { "zh-Hans": "暖姜", en: "Warm Ginger" },
  "--white": { "zh-Hans": "暖白", en: "Warm White" },
  "--surface": { "zh-Hans": "纸影", en: "Paper Shadow" },
  "--muted": { "zh-Hans": "淡墨", en: "Soft Ink" },
} as const;
export const standardColorNames = {
  ...colorNames,
  "--signal-soft": { "zh-Hans": "信号橙 · 浅底", en: "Signal Orange · Surface" },
  "--signal-text": { "zh-Hans": "信号橙 · 文字", en: "Signal Orange · Text" },
  "--signal-display": { "zh-Hans": "信号橙 · 大字", en: "Signal Orange · Display" },
  "--signal-light": { "zh-Hans": "信号橙 · 浅色", en: "Signal Orange · Light" },
  "--sky-soft": { "zh-Hans": "远空蓝 · 浅底", en: "Distant Sky · Surface" },
  "--sky-text": { "zh-Hans": "远空蓝 · 文字", en: "Distant Sky · Text" },
  "--muted-light": { "zh-Hans": "淡墨 · 浅色", en: "Soft Ink · Light" },
  "--muted-border": { "zh-Hans": "淡墨 · 边界", en: "Soft Ink · Border" },
  "--success": { "zh-Hans": "成功绿", en: "Success Green" },
  "--error": { "zh-Hans": "错误红", en: "Error Red" },
} as const;

export function colorReference(token: string) {
  if (token in standardColorNames) {
    return { source: token, name: standardColorNames[token as keyof typeof standardColorNames], opacity: 1 };
  }
  const value = tokenStyles.match(new RegExp(`${token}:\\s*([^;]+);`))?.[1]?.trim();
  if (!value) throw new Error(`Missing color token: ${token}`);
  const alias = value.match(/^var\((--[a-z-]+)\)$/);
  const overlay = value.match(/^rgb\(from var\((--[a-z-]+)\) r g b \/ ([\d.]+)\)$/);
  const source = alias?.[1] ?? overlay?.[1];
  if (!source || !(source in standardColorNames)) throw new Error(`Color role must reference a standard color: ${token}`);
  return { source, name: standardColorNames[source as keyof typeof standardColorNames], opacity: overlay ? Number(overlay[2]) : 1 };
}

export type NamedColorToken = keyof typeof colorNames;
export const coreColorTokens: NamedColorToken[] = ["--paper", "--ink", "--signal"];

// Printed values and swatches share the CSS token source, including without JavaScript.
export function colorHex(token: string): string {
  if (!/^--[a-z-]+$/.test(token)) throw new Error(`Invalid color token: ${token}`);
  const value = colorValue(token);
  if (!/^#[a-fA-F0-9]{6}$/.test(value)) throw new Error(`Missing hex color token: ${token}`);
  return value.toLowerCase();
}

export function colorValue(token: string, seen = new Set<string>()): string {
  if (seen.has(token)) throw new Error(`Circular color token: ${token}`);
  seen.add(token);
  if (!/^--[a-z-]+$/.test(token)) throw new Error(`Invalid color token: ${token}`);
  const value = tokenStyles.match(new RegExp(`${token}:\\s*([^;]+);`))?.[1];
  if (!value) throw new Error(`Missing color token: ${token}`);
  const reference = value.trim().match(/^var\((--[a-z-]+)\)$/)?.[1];
  if (reference) return colorValue(reference, seen);
  const overlay = value.trim().match(/^rgb\(from var\((--[a-z-]+)\) r g b \/ ([\d.]+)\)$/);
  if (overlay) {
    const hex = colorValue(overlay[1]!, seen);
    if (!/^#[\da-f]{6}$/i.test(hex)) throw new Error(`Invalid overlay source: ${token}`);
    const channels = [1, 3, 5].map(index => parseInt(hex.slice(index, index + 2), 16));
    return `rgba(${channels.join(', ')}, ${overlay[2]})`;
  }
  return value.trim();
}

// Public color notation uses six-digit HEX plus a separate opacity percentage.
export function colorNotation(token: string): string {
  const value = colorValue(token);
  if (/^#[\da-f]{6}$/i.test(value)) return value.toLowerCase();
  const rgba = value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
  if (rgba) {
    const hex = rgba.slice(1, 4).map(channel => Number(channel).toString(16).padStart(2, "0")).join("");
    return `#${hex} · ${Number((Number(rgba[4]) * 100).toFixed(2))}%`;
  }
  throw new Error(`Unsupported color notation: ${token}`);
}

export function namedColor(token: string) {
  if (!(token in colorNames)) throw new Error(`Unknown named color: ${token}`);
  const id = token as NamedColorToken;
  return { token: id, name: colorNames[id], hex: colorHex(id), foreground: id === "--ink" || id === "--muted" ? "--paper" : "--ink" };
}
