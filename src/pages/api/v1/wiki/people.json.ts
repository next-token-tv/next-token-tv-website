import type { APIRoute } from "astro";
import { collectionResponse, createWikiApi, jsonResponse } from "../../../../data/wiki-api";

export const GET: APIRoute = async ({ site }) => {
  const { people } = await createWikiApi(site!);
  return jsonResponse(collectionResponse("people", people));
};
