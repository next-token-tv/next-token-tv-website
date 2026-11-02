import {test} from 'node:test';import assert from 'node:assert/strict';
import {getCatalogRelations} from '../src/data/catalog-relations.ts';
test('shared relationships deduplicate direct and product brand mentions and include participants',()=>{
 const product={id:'p',data:{brand:'b'}};
 const episode={id:'e',data:{status:'published',productionImport:'i',mentions:{brands:['b'],products:['p'],people:['alice']}}};
 const catalog={products:[product],episodes:[episode],episodeImports:[{id:'i',data:{participants:[{person:'alice'},{person:'bob'}]}}]};
 const relations=getCatalogRelations(catalog);
 assert.deepEqual(relations.episodes('brand','b'),[episode]);
 assert.deepEqual(relations.episodes('person','bob'),[episode]);
 assert.deepEqual(relations.brandProducts('b'),[product]);
 assert.equal(getCatalogRelations(catalog),relations);
 assert.notEqual(getCatalogRelations({...catalog}),relations);
});
test('transcript entity links create back-references, excluding self-references and unpublished drafts',()=>{
 const episode={id:'e',data:{status:'published',productionImport:'i',mentions:{brands:['cited'],products:[],people:[]}}};
 const draft={id:'d',data:{status:'announced',participants:[],productionImport:'j',mentions:{brands:[],products:[],people:[]}}};
 const span=(entityType,entityId)=>({type:'entity-link',value:entityId,entityType,entityId});
 const transcript=(episodeId,publicationStatus,chapters)=>({data:{episodeId,locale:'zh-Hans',publicationStatus,chapters}});
 const catalog={
  products:[],episodes:[episode,draft],episodeImports:[],
  transcriptImports:[
   transcript('e','published',[{turns:[{paragraphs:[[span('brand','cited'),span('show','next-token-weekly')]]}]}]),
   transcript('e','review-draft',[{turns:[{paragraphs:[[span('product','draft-only')]]}]}]),
   transcript('d','review-draft',[{turns:[{paragraphs:[[span('term','concept')]]}]}]),
   transcript('d','published',[{turns:[{paragraphs:[[span('brand','next-token'),span('term','concept')]]}]}]),
  ],
 };
 const relations=getCatalogRelations(catalog);
 // 'cited' is both a mention and a transcript citation: the back-reference dedupes to one entry.
 assert.deepEqual(relations.episodes('brand','cited'),[episode]);
 assert.deepEqual(relations.episodes('term','concept'),[draft]);
 assert.deepEqual(relations.episodes('show','next-token-weekly'),[]);
 assert.deepEqual(relations.episodes('brand','next-token'),[]);
 assert.deepEqual(relations.episodes('product','draft-only'),[]);
});
