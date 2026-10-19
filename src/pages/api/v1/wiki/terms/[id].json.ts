import type { APIRoute } from "astro";
import { createWikiApi, jsonResponse } from "../../../../../data/wiki-api";

export async function getStaticPaths() {
  const { terms } = await createWikiApi(new URL("https://nexttoken.tv"));
  return terms.map((term) => ({ params: { id: term.id }, props: { term } }));
}

export const GET: APIRoute = ({ props }) => jsonResponse(props.term);
