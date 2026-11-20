import test from 'node:test';
import assert from 'node:assert/strict';
import {convertTranslationMarkdown} from '../scripts/lib/transcript-translation.mjs';
import {sha256} from '../scripts/lib/transcript-converter.mjs';
const id='001:c0:t0:p0';
const md=`<!-- translation-unit: ${id} -->\nUse [TypeScript](/wiki/products/typescript), not JavaScript.\n<!-- /translation-unit -->\n`;
function fixture(){
  const structure={chapters:[{id:'chapter-01',title:'',turns:[{kind:'speech',speaker:'Orange',speakerId:'orange',candidate:false,paragraphs:[[]]}]}]};
  const chinese=structuredClone(structure); chinese.chapters[0].turns[0].paragraphs[0]=[{type:'text',value:'用 TypeScript，不是 JavaScript。'}];
  const manifest={locale:'en',markdownSha256:sha256(md),review:{status:'reviewed'},structure,units:[{id,path:['chapters',0,'turns',0,'paragraphs',0],reviewedTextSha256:sha256('Use TypeScript, not JavaScript.')}],links:{'/wiki/products/typescript':{type:'entity-link',entityType:'product',entityId:'typescript'}}};
  return {manifest,chinese};
}
test('translation import retains reviewed negation and linked label, without guessing new entities',()=>{
 const {manifest,chinese}=fixture();const result=convertTranslationMarkdown(md,manifest,chinese,{sourceState:'untracked',sourceRevision:null});
 assert.equal(result.publicationStatus,'review-draft');
 assert.deepEqual(result.chapters[0].turns[0].paragraphs[0],[{type:'text',value:'Use '},{type:'entity-link',entityType:'product',entityId:'typescript',href:'/wiki/products/typescript',value:'TypeScript'},{type:'text',value:', not JavaScript.'}]);
});
test('translation rejects a changed source, missing/duplicate units, and edited reviewed text',()=>{
 const {manifest,chinese}=fixture();
 assert.throws(()=>convertTranslationMarkdown(md+' ',manifest,chinese,{}),/hash mismatch/);
 const missing=structuredClone(manifest);missing.units.push({...missing.units[0],id:'missing'});
 assert.throws(()=>convertTranslationMarkdown(md,missing,chinese,{}),/coverage mismatch/);
 const duplicate=md+md;assert.throws(()=>convertTranslationMarkdown(duplicate,{...manifest,markdownSha256:sha256(duplicate)},chinese,{}),/Duplicate/);
 const changed=md.replace('not JavaScript','JavaScript');assert.throws(()=>convertTranslationMarkdown(changed,{...manifest,markdownSha256:sha256(changed)},chinese,{}),/Unreviewed/);
});
test('translation cannot silently change speaker or introduce an unreviewed link target',()=>{
 const {manifest,chinese}=fixture();manifest.structure.chapters[0].turns[0].speakerId='yangpan';
 assert.throws(()=>convertTranslationMarkdown(md,manifest,chinese,{}),/speaker attribution/);
 const other=md.replace('/wiki/products/typescript','https://example.com');
 assert.throws(()=>convertTranslationMarkdown(other,{...manifest,markdownSha256:sha256(other)},chinese,{}),/Unknown translation link/);
});
