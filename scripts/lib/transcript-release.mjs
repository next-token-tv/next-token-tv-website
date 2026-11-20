const locales = ['zh-Hans', 'en'];

// Chinese-only snapshots already public in 0a752e9. Remove each entry when
// its English transcript is published. A changed snapshot must pass the gate.
const legacyChineseSnapshots = new Map(Object.entries({
  '006': 'd5dd9d7ab4b0c669b209ee051e990acfa6d814e9fb1377448d100fe42d2835f5',
  '007': '67edef5c14f787ecc9421e41921352e347246ce9bec860762bd963d828e45f63',
  '008': '66b8055dfe89befdb4d451003abb220b6d65196982ee5d4b67a0de723164b455',
  '009': '930931c62e9641219cbcfe5876cf4eea078c3a50088c388c831b44ba450146e4',
  '010': '5cc9369e0167f6dff6743aefe1823c795101e190377bcf969653f037daf70373',
}));

function hasApprovedSource(record) {
  const provenance = record?.transcript.provenance;
  return record?.transcript.publicationStatus === 'published'
    && provenance?.sourceState === 'committed'
    && /^[a-f0-9]{40}$/.test(provenance.sourceRevision)
    && typeof provenance.sourcePath === 'string' && provenance.sourcePath.length > 0
    && /^[a-f0-9]{64}$/.test(provenance.sourceSha256);
}

export function auditTranscriptRelease(records, outputFiles, llms = '') {
  const errors = [];
  const byNumber = new Map();
  const publishedEpisodes = new Set();
  for (const record of records) {
    const { name, transcript } = record;
    const number = transcript.episodeId?.match(/^next-token-weekly--(\d{3})$/)?.[1];
    if (!number || !locales.includes(transcript.locale) || name !== `${transcript.episodeId}.${transcript.locale}.json`) {
      errors.push(`${name}: invalid transcript episode or language`);
      continue;
    }
    if (!byNumber.has(number)) byNumber.set(number, new Map());
    byNumber.get(number).set(transcript.locale, record);
    if (hasApprovedSource(record)) publishedEpisodes.add(transcript.episodeId);
  }

  for (const file of outputFiles) {
    const number = file.match(/^(?:en\/)?weekly\/(\d{3})\/transcript(?:\/index\.html|\.md)$/)?.[1];
    if (number && !byNumber.has(number)) byNumber.set(number, new Map());
  }

  for (const [number, translations] of byNumber) {
    const chinese = translations.get('zh-Hans');
    const english = translations.get('en');
    const legacyChinese = legacyChineseSnapshots.has(number)
      && chinese?.sha256 === legacyChineseSnapshots.get(number)
      && english?.transcript.publicationStatus !== 'published';
    const routes = locales.map((locale) => {
      const path = `${locale === 'en' ? 'en/' : ''}weekly/${number}/transcript`;
      return {
        locale, path,
        html: outputFiles.has(`${path}/index.html`),
        markdown: outputFiles.has(`${path}.md`),
      };
    });
    const publishing = [...translations.values()].some(({ transcript }) => transcript.publicationStatus === 'published')
      || routes.some(({ html, markdown }) => html || markdown);

    for (const { locale, path, html, markdown } of routes) {
      const record = translations.get(locale);
      const label = `#${number} [${locale}]`;
      if (publishing && (locale === 'zh-Hans' || !legacyChinese)) {
        if (!hasApprovedSource(record)) errors.push(`${label}: missing approved transcript source`);
        if (!html) errors.push(`${label}: missing HTML output /${path}`);
        if (!markdown) errors.push(`${label}: missing Markdown output /${path}.md`);
      }
      if (record?.transcript.publicationStatus !== 'published'
        && (html || markdown || llms.includes(`https://nexttoken.tv/${path}.md`))) {
        errors.push(`${label}: transcript exposed without a published snapshot`);
      }
    }
  }

  return { errors, publishedEpisodes };
}
