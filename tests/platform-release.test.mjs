import { test } from 'node:test';
import assert from 'node:assert/strict';
import { planPlatformSync } from '../scripts/lib/platform-release.mjs';
import { mediaActions, validPlatformUrl } from '../src/data/platforms.mjs';
const blank = { platforms: [], media: { audio: false, video: false } };
const record = { status: 'published-public-playback-verified', public_url: 'https://www.xiaoyuzhoufm.com/episode/example', mode: 'audio-only' };
const publication = r => ({ platforms: { xiaoyuzhou: r } });
test('stale audio-only source cannot overwrite confirmed video or mutate input', () => {
  const episode = { platforms: [{ platform: 'xiaoyuzhou', href: record.public_url, action: mediaActions.both }], media: { audio: true, video: true } };
  const before = structuredClone(episode);
  assert.throws(() => planPlatformSync(episode, publication(record)), /downgrade/);
  assert.deepEqual(episode, before);
});
test('pending video is not publicly available', () => {
  const plan = planPlatformSync(blank, publication({ ...record, video_status: 'submitted-saved-readback-verified-review-pending' }));
  assert.deepEqual(plan.media, { audio: true, video: false });
});
test('published video evidence overrides stale mode and contributes to episode video', () => {
  const plan = planPlatformSync(blank, publication({ ...record, audio_status: 'published', video_status: 'published-public-playback-verified' }));
  assert.deepEqual(plan.media, { audio: true, video: true });
  assert.deepEqual(plan.platforms[0].action, mediaActions.both);
  assert.deepEqual(planPlatformSync(plan, publication({ ...record, audio_status: 'published', video_status: 'published' })), plan);
});
test('Spotify video-only publication counts as video, not audio', () => {
  const plan = planPlatformSync(blank, { platforms: { spotify: { status: 'published', public_url: 'https://open.spotify.com/episode/example', video_status: 'published' } } });
  assert.deepEqual(plan.media, { audio: false, video: true });
});
test('unknown mixed availability and removal require reconciliation', () => {
  assert.throws(() => planPlatformSync(blank, publication({ ...record, mode: undefined })), /evidence/);
  const plan = planPlatformSync(blank, publication(record));
  assert.throws(() => planPlatformSync(plan, { platforms: {} }), /remove/);
});
test('platform URLs require known HTTPS hosts', () => {
  assert.equal(validPlatformUrl('youtube', 'https://youtu.be/example'), true);
  for (const url of ['invalid', 'http://youtu.be/example', 'https://youtu.be.evil.test/example'])
    assert.equal(validPlatformUrl('youtube', url), false);
});

test('legacy records preserve confirmed media only for the same public URL', () => {
  const episode = { platforms: [{ platform: 'xiaoyuzhou', href: record.public_url, action: mediaActions.both }], media: { audio: true, video: true } };
  for (const mode of [undefined, 'rss', 'manual-upload']) {
    const plan = planPlatformSync(episode, publication({ ...record, mode }));
    assert.deepEqual(plan.media, episode.media);
    assert.deepEqual(plan.platforms[0].action, mediaActions.both);
  }
  assert.throws(() => planPlatformSync(episode, publication({ ...record, mode: undefined, public_url: record.public_url + '-different' })), /evidence/);
});
test('new published video does not erase legacy audio-only evidence', () => {
  const episode = { platforms: [{ platform: 'xiaoyuzhou', href: record.public_url, action: mediaActions.audio }], media: { audio: true, video: false } };
  const plan = planPlatformSync(episode, publication({ ...record, video_status: 'published' }));
  assert.deepEqual(plan.media, { audio: true, video: true });
  assert.deepEqual(plan.platforms[0].action, mediaActions.both);
});
test('missing audio evidence retains the existing audio while video is added', () => {
  const episode = { platforms: [{ platform: 'xiaoyuzhou', href: record.public_url, action: mediaActions.audio }], media: { audio: true, video: false } };
  const plan = planPlatformSync(episode, publication({ ...record, mode: undefined, video_status: 'published' }));
  assert.deepEqual(plan.media, { audio: true, video: true });
});
test('historical review status preserves an existing URL but cannot publish a new one', () => {
  const episode = { platforms: [{ platform: 'xiaoyuzhou', href: record.public_url, action: mediaActions.both }], media: { audio: true, video: true } };
  const source = publication({ ...record, mode: 'manual-upload', status: 'video-reviewing' });
  assert.deepEqual(planPlatformSync(episode, source).media, episode.media);
  assert.deepEqual(planPlatformSync(blank, source), blank);
});
test('explicit negative media status still blocks downgrades despite legacy fallback', () => {
  const episode = { platforms: [{ platform: 'xiaoyuzhou', href: record.public_url, action: mediaActions.both }], media: { audio: true, video: true } };
  assert.throws(() => planPlatformSync(episode, publication({ ...record, mode: undefined, video_status: 'review-pending' })), /downgrade/);
});

test('explicit release states distinguish uploading, review and publication',()=>{
 const evidence={kind:'user-confirmation',description:'Public playback confirmed by operator'};
 for(const state of ['uploaded','reviewing','unavailable']) {
  const plan=planPlatformSync(blank,publication({...record,media_release:{audio:{state:'published',evidence},video:{state}}}));
  assert.deepEqual(plan.media,{audio:true,video:false});
 }
 const plan=planPlatformSync(blank,publication({...record,media_release:{audio:{state:'published',evidence},video:{state:'published',evidence}}}));
 assert.deepEqual(plan.media,{audio:true,video:true});
 assert.throws(()=>planPlatformSync(blank,publication({...record,media_release:{audio:{state:'published'},video:{state:'uploaded'}}})),/evidence/);
});
