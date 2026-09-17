import { defineMiddleware } from "astro:middleware";
import { normalizeRenderedInternalUrls } from "./data/internal-url";

const textTypes = ["text/html", "text/markdown", "text/plain", "application/json", "application/xml"];

export const onRequest = defineMiddleware(async ({ request }, next) => {
  const response = await next();
  const contentType = response.headers.get("content-type") ?? "";
  if (!textTypes.some((type) => contentType.includes(type))) return response;

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  const normalized = normalizeRenderedInternalUrls(await response.text());
  const pathname = new URL(request.url).pathname;
  const body = contentType.includes("text/markdown") || pathname === "/llms.txt" ? `\uFEFF${normalized}` : normalized;
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
