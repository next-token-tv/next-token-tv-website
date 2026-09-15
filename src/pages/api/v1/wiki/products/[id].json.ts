import type { APIRoute } from "astro";
import { createWikiApi, jsonResponse } from "../../../../../data/wiki-api";

export async function getStaticPaths() {
  const { products } = await createWikiApi(new URL("https://nexttoken.tv"));
  return products.map((product) => ({ params: { id: product.id }, props: { product } }));
}

export const GET: APIRoute = ({ props }) => jsonResponse(props.product);
