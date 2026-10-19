import type { APIRoute } from "astro";
import { collectionResponse, createWikiApi, jsonResponse } from "../../../../data/wiki-api";

export const GET: APIRoute = async ({ site }) => {
  const { terms } = await createWikiApi(site!);
  return jsonResponse(collectionResponse("terms", terms));
};
