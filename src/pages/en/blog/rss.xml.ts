import type { APIRoute } from "astro";
import { getBlogPosts } from "../../../data/blog";
import { blogRss } from "../../../data/blog-rss";

export const GET: APIRoute = async ({ site }) => new Response(
  blogRss(await getBlogPosts("en"), site!, "en"),
  { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
);
