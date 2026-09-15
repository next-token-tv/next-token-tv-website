import type { APIRoute } from "astro";
import { createWikiApi, jsonResponse } from "../../../../../data/wiki-api";

export async function getStaticPaths() {
  const { brands } = await createWikiApi(new URL("https://nexttoken.tv"));
  return brands.map((brand) => ({ params: { id: brand.id }, props: { brand } }));
}

export const GET: APIRoute = ({ props }) => jsonResponse(props.brand);
