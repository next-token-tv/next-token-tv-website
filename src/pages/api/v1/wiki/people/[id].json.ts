import type { APIRoute } from "astro";
import { createWikiApi, jsonResponse } from "../../../../../data/wiki-api";

export async function getStaticPaths() {
  const { people } = await createWikiApi(new URL("https://nexttoken.tv"));
  return people.map((person) => ({ params: { id: person.id }, props: { person } }));
}

export const GET: APIRoute = ({ props }) => jsonResponse(props.person);
