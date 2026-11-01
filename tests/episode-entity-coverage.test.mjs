import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from 'js-yaml';
const root=new URL('../',import.meta.url);
const read=path=>readFileSync(new URL(path,root),'utf8');
const episode=load(read('src/content/data/episodes/next-token-weekly--008.yaml'));
const transcript=JSON.parse(read('src/content/imported/transcripts/next-token-weekly--008.zh-Hans.json'));
const segments=transcript.chapters.flatMap(c=>c.turns.flatMap(t=>t.paragraphs.flat()));
const examples=[
 ['君晨','person','yan-junchen'],['Foyege','person','foyege'],['孟岩','person','meng-yan'],['王虹','person','hong-wang'],
 ['刘慈欣','person','liu-cixin'],['赫拉利','person','yuval-noah-harari'],['刘作虎','person','pete-lau'],['CZ','person','changpeng-zhao'],
 ['点点','product','diandian'],['微软 Copilot','product','microsoft-copilot'],['GitHub Copilot','product','github-copilot'],
 ['心力球','product','oppo-ai-xinli-ball'],['一加 13T','product','oneplus-13t'],['OPPO Pad Mini','product','oppo-pad-mini'],
 ['《归墟》','product','guixu-ai-series'],['《零号档案》','product','zero-files'],['《持械入宋》','product','chi-xie-ru-song'],
 ['《影之刃零》','product','phantom-blade-zero'],['《万神殿》','product','pantheon'],['《赛博朋克 2077》','product','cyberpunk-2077'],
 ['亚马逊','brand','amazon'],['Opus 5.5','product','claude'],['Qwen 3.8 Flash Next','product','qwen'],['iPhone Duo','product','iphone'],
 ['豆包（模型）','product','doubao-seed'],['AI RSS','product','qiaomu-ai-rss'],['B300','product','nvidia-b300'],['Excel','product','microsoft-excel'],
];
test('008 confirmed people, products and works link to the intended entity and appear in episode mentions',()=>{
 for(const [value,type,id] of examples){
  assert.ok(segments.some(s=>s.type==='entity-link'&&s.value===value&&s.entityType===type&&s.entityId===id),`${value} -> ${type}:${id}`);
  assert.ok(episode.mentions[{person:'people',product:'products',brand:'brands'}[type]].includes(id),`Missing homepage reference: ${id}`);
 }
});
test('008 ordinary words and geographic references do not become unrelated catalog links',()=>{
 for(const id of ['silicon-valley','netease-youdao','rea','ted'])assert.ok(!segments.some(s=>s.entityId===id),id);
 for(const k of ['brands','products','people'])assert.equal(new Set(episode.mentions[k]).size,episode.mentions[k].length);
});

test('008 company shorthand links and Chinese-English spacing survive import',()=>{
 const paragraphs=transcript.chapters.flatMap(c=>c.turns.flatMap(t=>t.paragraphs));
 for(const paragraph of paragraphs){
  const text=paragraph.map(s=>s.value).join('');
  assert.doesNotMatch(text, /[\p{Script=Han}][A-Za-z]|[A-Za-z][\p{Script=Han}]/u, text);
  for(const [alias,id] of [['A 社','anthropic'],['O 社','openai']]){
   const occurrences=text.split(alias).length-1;
   assert.equal(paragraph.filter(s=>s.type==='entity-link'&&s.value===alias&&s.entityType==='brand'&&s.entityId===id).length,occurrences);
  }
 }
 for(const [alias,id] of [['A 社','anthropic'],['O 社','openai']]){
  assert.ok(segments.some(s=>s.type==='entity-link'&&s.value===alias&&s.entityId===id));
 }
 const ordinary=paragraphs.find(p=>p.map(s=>s.value).join('').includes('非常的没有道理'));
 assert.ok(ordinary);
 assert.ok(ordinary.some(s=>s.type==='text'&&s.value.includes('非常的没有道理')));
});

test('008 context distinguishes companies, models and apps while keeping complete hardware names',()=>{
 const links=id=>transcript.chapters.find(c=>c.id===id).turns.flatMap(t=>t.paragraphs.flat()).filter(s=>s.type==='entity-link');
 assert.ok(segments.some(s=>s.type==='entity-link'&&s.value==='iPad mini'&&s.entityId==='ipad'));
 const financialDeepSeek=links('chapter-02').filter(s=>s.value==='DeepSeek');
 assert.ok(financialDeepSeek.length>0);
 assert.ok(financialDeepSeek.every(s=>s.entityType==='brand'));
 assert.ok(links('chapter-03').some(s=>s.value==='DeepSeek'&&s.entityType==='product'));
 assert.ok(links('chapter-07').some(s=>s.value==='豆包'&&s.entityId==='doubao-seed'));
 assert.ok(links('chapter-08').some(s=>s.value==='豆包'&&s.entityId==='doubao'));
});

test('008 reviewed contextual links retain product mentions and cover Find shorthand',()=>{
 const paragraphs=id=>transcript.chapters.find(c=>c.id===id).turns.flatMap(t=>t.paragraphs);
 const productLinks=paragraphs('chapter-03').flat().filter(s=>s.type==='entity-link'&&s.entityId==='diandian');
 assert.equal(productLinks.length,2);
 const ordinary=paragraphs('chapter-07').find(p=>p.map(s=>s.value).join('').includes('一点点引导'));
 assert.ok(ordinary.some(s=>s.type==='text'&&s.value.includes('一点点引导')));
 assert.ok(!ordinary.some(s=>s.entityId==='diandian'));
 const deepseek=paragraphs('chapter-08').flat().filter(s=>s.type==='entity-link'&&s.value==='DeepSeek');
 assert.equal(deepseek.length,1);
 assert.equal(deepseek[0].entityType,'brand');
 for(const id of ['chapter-12','chapter-13'])assert.equal(paragraphs(id).flat().filter(s=>s.type==='entity-link'&&s.value==='Find'&&s.entityId==='oppo-find-n').length,1);
});
