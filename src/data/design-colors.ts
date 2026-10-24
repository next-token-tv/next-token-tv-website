import tokenStyles from "../styles/tokens.css?raw";

export const colorNames = {
  "--paper": { "zh-Hans": "暖纸", en: "Warm Paper" },
  "--ink": { "zh-Hans": "墨黑", en: "Ink Black" },
  "--signal": { "zh-Hans": "信号橙", en: "Signal Orange" },
  "--sky": { "zh-Hans": "远空蓝", en: "Distant Sky" },
  "--white": { "zh-Hans": "暖白", en: "Warm White" },
  "--surface": { "zh-Hans": "纸影", en: "Paper Shadow" },
  "--muted": { "zh-Hans": "淡墨", en: "Soft Ink" },
} as const;
export type NamedColorToken = keyof typeof colorNames;
export const coreColorTokens: NamedColorToken[] = ["--paper", "--ink", "--signal"];

// Printed values and swatches share the CSS token source, including without JavaScript.
export function colorHex(token: string): string {
  if (!/^--[a-z-]+$/.test(token)) throw new Error(`Invalid color token: ${token}`);
  const value = tokenStyles.match(new RegExp(`${token}:\\s*(#[a-fA-F0-9]{6});`))?.[1];
  if (!value) throw new Error(`Missing hex color token: ${token}`);
  return value.toLowerCase();
}

export function colorValue(token: string): string {
  if (!/^--[a-z-]+$/.test(token)) throw new Error(`Invalid color token: ${token}`);
  const value = tokenStyles.match(new RegExp(`${token}:\\s*([^;]+);`))?.[1];
  if (!value) throw new Error(`Missing color token: ${token}`);
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
