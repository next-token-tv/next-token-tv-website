const canonicalOrigin = "https://nexttoken.tv";

export function withoutTrailingSlash(value: string) {
  if (!value || value === "/" || value.startsWith("#")) return value;

  const suffixIndex = value.search(/[?#]/);
  const pathname = suffixIndex === -1 ? value : value.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : value.slice(suffixIndex);
  if (pathname === "/" || !pathname.endsWith("/")) return value;

  return `${pathname.slice(0, -1)}${suffix}`;
}

export function internalHref(value: string) {
  if (value.startsWith("/")) return withoutTrailingSlash(value);

  try {
    const url = new URL(value);
    if (url.origin !== canonicalOrigin || url.pathname === "/" || !url.pathname.endsWith("/")) return value;
    url.pathname = url.pathname.slice(0, -1);
    return url.toString();
  } catch {
    return value;
  }
}

export function absoluteSiteUrl(path: string, site: URL) {
  return internalHref(new URL(withoutTrailingSlash(path), site).toString());
}

export function normalizeRenderedInternalUrls(content: string) {
  return content
    .replace(/https:\/\/nexttoken\.tv\/[^\s"'<>()[\]{}]*/g, (value) => internalHref(value))
    .replace(/(\b(?:href|action)=["'])(\/[^"']*)(["'])/g, (_, prefix, value, quote) => `${prefix}${internalHref(value)}${quote}`);
}
