import {test} from 'node:test';
import assert from 'node:assert/strict';
import {episodeReleaseErrors} from '../scripts/lib/episode-release.mjs';
import {auditTranscriptRelease} from '../scripts/lib/transcript-release.mjs';
const now=Date.parse('2026-09-27T14:00:00Z');
const text={media:{audio:false,video:false},transcriptPublishedAt:'2026-09-27'};
test('approved transcript can publish independently without media or a media date',()=>assert.deepEqual(episodeReleaseErrors(text,{},true,now),[]));
test('an absent or uncommitted published transcript cannot authorize a text-only release',()=>assert.equal(episodeReleaseErrors(text,{},false,now).length,1));
test('text-only release requires its own valid non-future date',()=>{
 for(const date of [undefined,'invalid','2026-09-28'])assert.equal(episodeReleaseErrors({...text,transcriptPublishedAt:date},{releaseDate:'2026-09-27'},true,now).length,1);
});
test('media release still needs a media release date even with an approved transcript',()=>{
 const media={...text,media:{audio:true,video:false}};
 assert.equal(episodeReleaseErrors(media,{},true,now).length,1);
 assert.deepEqual(episodeReleaseErrors(media,{releaseDate:'2026-09-27'},true,now),[]);
});

test('publication day begins at midnight in Asia/Shanghai, before the UTC date changes', () => {
 const episode = {...text, transcriptPublishedAt: '2026-10-19'};
 assert.deepEqual(episodeReleaseErrors(episode, {}, true, Date.parse('2026-10-18T16:00:00Z')), []);
 assert.equal(episodeReleaseErrors(episode, {}, true, Date.parse('2026-10-18T15:59:59Z')).length, 1);
});

function transcriptRecord(locale, { number = '011', status = 'published', sourceState = 'committed', sha256 } = {}) {
  const episodeId = `next-token-weekly--${number}`;
  return {
    name: `${episodeId}.${locale}.json`,
    sha256,
    transcript: {
      episodeId,
      locale,
      publicationStatus: status,
      provenance: {
        sourceState,
        sourceRevision: sourceState === 'committed' ? 'a'.repeat(40) : null,
        sourcePath: `shows/weekly/episodes/${number}/04-release/copy/transcript.${locale}.md`,
        sourceSha256: 'b'.repeat(64),
      },
    },
  };
}

const chineseOutputs = ['weekly/011/transcript/index.html', 'weekly/011/transcript.md'];
const englishOutputs = ['en/weekly/011/transcript/index.html', 'en/weekly/011/transcript.md'];

test('publishing a Chinese transcript fails when the English transcript is missing', () => {
  const { errors } = auditTranscriptRelease([transcriptRecord('zh-Hans')], new Set(chineseOutputs));
  assert.deepEqual(errors, [
    '#011 [en]: missing approved transcript source',
    '#011 [en]: missing HTML output /en/weekly/011/transcript',
    '#011 [en]: missing Markdown output /en/weekly/011/transcript.md',
  ]);
});

test('both localized artifacts and approved committed sources are required for publication', () => {
  const chinese = transcriptRecord('zh-Hans');
  const english = transcriptRecord('en', { sourceState: 'modified' });
  const audit = auditTranscriptRelease([chinese, english], new Set([chineseOutputs[1], englishOutputs[0]]));
  assert.deepEqual(audit.errors, [
    '#011 [zh-Hans]: missing HTML output /weekly/011/transcript',
    '#011 [en]: missing approved transcript source',
    '#011 [en]: missing Markdown output /en/weekly/011/transcript.md',
  ]);
  const bilingual = auditTranscriptRelease(
    [chinese, transcriptRecord('en')],
    new Set([...chineseOutputs, ...englishOutputs]),
  );
  assert.deepEqual(bilingual.errors, []);
  assert.deepEqual([...bilingual.publishedEpisodes], ['next-token-weekly--011']);
});

test('media can publish without transcripts or while both languages are drafts', () => {
  const drafts = ['zh-Hans', 'en'].map((locale) => (
    transcriptRecord(locale, { status: 'review-draft', sourceState: 'untracked' })
  ));
  for (const records of [[], drafts]) {
    const audit = auditTranscriptRelease(records, new Set());
    assert.deepEqual(audit.errors, []);
    assert.equal(audit.publishedEpisodes.size, 0);
    const mediaEpisode = { media: { audio: true, video: true } };
    assert.deepEqual(episodeReleaseErrors(mediaEpisode, { releaseDate: '2026-09-27' }, false, now), []);
  }
});

test('a draft cannot satisfy the English source gate even with both output files', () => {
  const audit = auditTranscriptRelease(
    [transcriptRecord('zh-Hans'), transcriptRecord('en', { status: 'review-draft' })],
    new Set([...chineseOutputs, ...englishOutputs]),
  );
  assert.deepEqual(audit.errors, [
    '#011 [en]: missing approved transcript source',
    '#011 [en]: transcript exposed without a published snapshot',
  ]);
});

test('only the established Chinese snapshot is eligible for a legacy rebuild', () => {
  const legacy = transcriptRecord('zh-Hans', {
    number: '006',
    sha256: 'd5dd9d7ab4b0c669b209ee051e990acfa6d814e9fb1377448d100fe42d2835f5',
  });
  const files = new Set(['weekly/006/transcript/index.html', 'weekly/006/transcript.md']);
  assert.deepEqual(auditTranscriptRelease([legacy], files).errors, []);
  const updated = { ...legacy, sha256: 'c'.repeat(64) };
  assert.ok(auditTranscriptRelease([updated], files).errors.includes('#006 [en]: missing approved transcript source'));
});
