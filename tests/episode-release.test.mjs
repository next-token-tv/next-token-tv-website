import {test} from 'node:test';
import assert from 'node:assert/strict';
import {episodeReleaseErrors} from '../scripts/lib/episode-release.mjs';
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
