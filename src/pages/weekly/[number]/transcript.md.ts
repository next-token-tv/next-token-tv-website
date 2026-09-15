import type { APIRoute } from "astro";
import { getEpisodeTranscript, getPublishedTranscriptEpisodes } from "../../../data/catalog";
import { renderTranscriptMarkdown } from "../../../data/transcript-markdown";

export async function getStaticPaths() {
  const episodes = await getPublishedTranscriptEpisodes("zh-Hans");
  return episodes.map((episode) => ({
    params: { number: episode.data.number },
    props: { episodeId: episode.id },
  }));
}

export const GET: APIRoute = async ({ props, params, site }) => {
  const transcript = await getEpisodeTranscript(props.episodeId, "zh-Hans");
  const episodeNumber = params.number!;
  return new Response(renderTranscriptMarkdown(transcript.data, episodeNumber, site!), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
