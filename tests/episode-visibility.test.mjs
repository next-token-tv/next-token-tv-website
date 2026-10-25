import {test} from 'node:test';
import assert from 'node:assert/strict';
import {isReleasePreview, isVisibleEpisode} from '../src/data/episode-visibility.ts';
const candidate={status:'announced',releasePreview:true,detailLayout:true,preview:{images:{'960':'/cover.webp'}}};
test('local release presentation does not authorize a production release',()=>{
 assert.equal(isVisibleEpisode(candidate,true),true);
 assert.equal(isReleasePreview(candidate,true),true);
 assert.equal(isVisibleEpisode(candidate,false),false);
 assert.equal(isVisibleEpisode(candidate),false);
 assert.equal(candidate.status,'announced');
});
test('ordinary announcements and incomplete candidates do not displace the latest episode',()=>{
 for(const data of [{...candidate,releasePreview:false},{...candidate,detailLayout:false},{...candidate,preview:{}}])assert.equal(isVisibleEpisode(data,true),false);
 assert.equal(isVisibleEpisode({status:'published'},false),true);
});
