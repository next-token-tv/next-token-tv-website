import {test} from 'node:test';import assert from 'node:assert/strict';
import {searchDocuments} from '../src/data/search-engine.ts';
const documents=[{kind:'transcript',title:'004',text:'在这里讨论 Muse Spark',href:'/weekly/004/transcript#quote-a'},{kind:'entity',title:'Muse',aliases:['Spark','Ｍｕｓｅ'],text:'模型家族',href:'/wiki/products/muse'},{kind:'episode',title:'004 Muse',text:'产品经理',href:'/weekly/004'}];
test('search prioritizes exact names and aliases, supports Chinese and width normalization',()=>{
 assert.equal(searchDocuments(documents,'ＭＵＳＥ')[0].kind,'entity');
 assert.equal(searchDocuments(documents,'spark')[0].kind,'entity');
 assert.equal(searchDocuments(documents,'产品经理')[0].kind,'episode');
 assert.equal(searchDocuments(documents,'Muse','transcript')[0].href,'/weekly/004/transcript#quote-a');
});
test('search requires all terms, handles empty and unmatched queries',()=>{
 assert.equal(searchDocuments(documents,'muse 讨论').length,1);
 assert.deepEqual(searchDocuments(documents,'  '),[]);
 assert.deepEqual(searchDocuments(documents,'not-present'),[]);
});
test('a term in the episode title does not match unrelated transcript paragraphs',()=>{
 assert.deepEqual(searchDocuments([{kind:'transcript',title:'004 Muse',text:'大家好',href:'/x'}],'Muse'),[]);
});
