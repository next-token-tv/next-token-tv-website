import tokens from '../styles/tokens.css?raw';

export function typeMetric(token: string): string {
  if (!/^--[a-z-]+$/.test(token)) throw new Error(`Invalid type token: ${token}`);
  const values = [...tokens.matchAll(new RegExp(`${token}:\\s*([^;]+);`, 'g'))].map(match => match[1]!);
  if (!values.length) throw new Error(`Missing type token: ${token}`);
  const sizes = [...new Set(values.flatMap(value => [...value.matchAll(/([\d.]+)rem/g)].map(match => Number(match[1]))))];
  const separator = values.some(value => value.startsWith('clamp(')) ? '–' : ' / ';
  return `${sizes.join(separator)}rem · ${sizes.map(size => size * 16).join(separator)}px`;
}
