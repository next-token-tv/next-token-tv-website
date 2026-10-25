import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { satteri } from '@astrojs/markdown-satteri';

// Keep editorial citations intact, but only render links to available transcripts.
export function transcriptCitationPlugin({ includePreview = false, publishedPaths = [] } = {}) {
  const published = new Set(publishedPaths);
  function unavailable(href) {
    let url;
    try { url = new URL(href, 'https://nexttoken.tv'); } catch { return false; }
    if (url.origin !== 'https://nexttoken.tv') return false;
    const path = url.pathname.replace(/\/$/, '').replace(/\.md$/, '');
    return /^\/(?:en\/)?weekly\/\d+\/transcript$/.test(path) && !published.has(path);
  }
  return {
    name: 'transcript-citation-visibility',
    element: {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties?.href;
        if (!includePreview && typeof href === 'string' && unavailable(href)) {
          ctx.replaceNode(node, [...node.children]);
        }
      },
    },
  };
}

export function transcriptLinks() {
  return {
    name: 'next-token-transcript-links',
    hooks: {
      'astro:config:setup': ({ config, command, updateConfig, addWatchFile }) => {
        const directory = new URL('src/content/imported/transcripts/', config.root);
        const publishedPaths = [];
        addWatchFile(directory);
        for (const name of readdirSync(directory)) {
          if (!name.endsWith('.json')) continue;
          const path = join(fileURLToPath(directory), name);
          addWatchFile(path);
          const data = JSON.parse(readFileSync(path, 'utf8'));
          if (data.publicationStatus !== 'published') continue;
          const number = data.episodeId.match(/^next-token-weekly--(\d+)$/)?.[1];
          if (number) publishedPaths.push(`${data.locale === 'en' ? '/en' : ''}/weekly/${number}/transcript`);
        }
        updateConfig({ markdown: { processor: satteri({ hastPlugins: [transcriptCitationPlugin({
          includePreview: command === 'dev', publishedPaths,
        })] }) } });
      },
    },
  };
}
