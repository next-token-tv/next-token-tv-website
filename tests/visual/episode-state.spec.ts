import { expect, test } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { load } from 'js-yaml';

// Read current publication inputs independently from the page's selectors.
// No episode number or publication date is fixed in these behavior assertions.
const episodeDir = 'src/content/data/episodes';
const episodes = readdirSync(episodeDir).filter(name => name.endsWith('.yaml')).map(name => ({
  id: name.replace(/\.yaml$/, ''), data: load(readFileSync(join(episodeDir, name), 'utf8')) as any,
}));
const latest = episodes.filter(({ data }) => data.show === 'next-token-weekly' && data.status === 'published')
  .sort((a, b) => Number(b.data.number) - Number(a.data.number))[0]!;
const upcoming = episodes.filter(({ data }) => data.show === 'next-token-weekly' && data.status === 'announced')
  .sort((a, b) => Date.parse(a.data.scheduledAt) - Date.parse(b.data.scheduledAt))[0];
const transcriptDir = 'src/content/imported/transcripts';
const transcripts = readdirSync(transcriptDir, { recursive: true }).filter(name => typeof name === 'string' && name.endsWith('.json'))
  .map(name => JSON.parse(readFileSync(join(transcriptDir, String(name)), 'utf8')));

for (const prefix of ['', '/en']) test(`current episode and announcement entries ${prefix || 'zh'}`, async ({ page }) => {
  const locale = prefix ? 'en' : 'zh-Hans';
  const ids = new Set(transcripts.filter(item => item.locale === locale && item.publicationStatus === 'published').map(item => item.episodeId));
  const transcriptEpisode = episodes.filter(({ id }) => ids.has(id)).sort((a, b) => Number(b.data.number) - Number(a.data.number))[0];
  for (const surface of ['home', 'weekly']) {
    await page.goto(surface === 'home' ? prefix || '/' : `${prefix}/weekly`);
    const hero = page.locator(surface === 'home' ? '.hero-grid' : '.weekly-show-hero');
    const latestLink = hero.locator(surface === 'home' ? '.button.primary' : '.weekly-latest-actions > a').first();
    await expect(latestLink).toHaveAttribute('href', `${prefix}/weekly/${latest.data.number}`);
    await expect(hero.locator(surface === 'home' ? '.button.primary' : '.weekly-latest-actions > strong')).toContainText(`#${latest.data.number}`);
    if (surface === 'weekly') await expect(hero.locator('.latest-episode-title'))
      .toHaveText(latest.data.homepage[locale].heading.join(prefix ? ' ' : ''));
    await expect(hero.locator('.upcoming-episode-link')).toHaveCount(upcoming ? 1 : 0);
    if (upcoming) {
      await expect(hero.locator('.upcoming-episode-link')).toHaveAttribute('href', `${prefix}/weekly/${upcoming.data.number}`);
      await expect(hero.locator('.upcoming-episode-label')).toContainText(`#${upcoming.data.number}`);
      expect((await page.request.get(`${prefix}/weekly/${upcoming.data.number}`)).status()).toBe(200);
    }
    const transcriptLink = hero.locator('.episode-transcript-cta');
    await expect(transcriptLink).toHaveCount(transcriptEpisode ? 1 : 0);
    if (transcriptEpisode) await expect(transcriptLink).toHaveAttribute('href', `${prefix}/weekly/${transcriptEpisode.data.number}/transcript`);
    expect((await page.request.get(`${prefix}/weekly/${latest.data.number}`)).status()).toBe(200);
  }
});

test('test fixture pages are absent from the production build', async ({ request }) => {
  expect((await request.get('/__visual/zh-Hans/home/with-preview')).status()).toBe(404);
});
