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
