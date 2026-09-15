import type { APIRoute } from "astro";
import { createWikiApi, jsonResponse, wikiIndex } from "../../../data/wiki-api";

export const GET: APIRoute = async ({ site }) => {
  const collections = await createWikiApi(site!);
  return jsonResponse(wikiIndex(site!, collections));
};
