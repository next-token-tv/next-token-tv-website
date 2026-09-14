export function displayAliases(names: Record<string, string>, aliases: string[]): string[] {
  const normalize = (value: string) => value.trim().toLowerCase();
  const seen = new Set(Object.values(names).map(normalize));
  return aliases.filter((alias) => {
    const key = normalize(alias);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
