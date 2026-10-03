import { isDeepStrictEqual } from 'node:util';

export const collections = {brand:'brands',product:'products',person:'people'};
export function entityKey(value) {
  if (!/^(brand|product|person):[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) throw new Error(`Invalid entity: ${value}`);
  const [type,id]=value.split(':');return {type,id};
}
export function entityPath(key) {const {type,id}=entityKey(key);return `/wiki/${collections[type]}/${id}`;}
export function resolveMigrations(records) {
  const map=new Map();
  for(const {from,to} of records) {entityKey(from);entityKey(to);if(map.has(from))throw new Error(`Duplicate migration ${from}`);map.set(from,to);}
  return records.map(({from})=>{
    const seen=new Set([from]);let to=map.get(from);
    while(map.has(to)) {if(seen.has(to))throw new Error('Migration cycle');seen.add(to);to=map.get(to);}
    if(seen.has(to))throw new Error('Migration cycle');
    return {from,to};
  });
}
export function redirectLines(records) {
  return resolveMigrations(records).flatMap(({from,to})=>['','/en'].flatMap(prefix=>{
    const path=entityPath(from),target=prefix+entityPath(to);
    return [path,path.replace('/wiki','')].flatMap(source=>['','/'].map(slash=>`${prefix}${source}${slash} ${target} 301`));
  }));
}
export function updateRedirects(text, records) {
  const generated=redirectLines(records);
  const sources=new Set(generated.map(line=>line.split(' ')[0]));
  const remaining=text.replace(/# BEGIN ENTITY MIGRATIONS[\s\S]*?# END ENTITY MIGRATIONS\n?/g,'').split('\n').filter(line=>!sources.has(line.trim().split(/\s+/)[0]));
  return `# BEGIN ENTITY MIGRATIONS\n${generated.join('\n')}\n# END ENTITY MIGRATIONS\n${remaining.join('\n').trim()}\n`;
}
export function migrateReferences(value, fromKey, toKey) {
  const from=entityKey(fromKey),to=entityKey(toKey);
  const walk = input => {
    if(Array.isArray(input)) return input.map(walk);
    if(!input || typeof input!=='object') return input;
    const out=Object.fromEntries(Object.entries(input).map(([key,val])=>[key,walk(val)]));
    if(out.entityType===from.type) {
      for(const field of ['entity','id','entityId']) if(out[field]===from.id) {out.entityType=to.type;out[field]=to.id;}
    }
    if(out.mentions?.[collections[from.type]]?.includes(from.id)) {
      out.mentions[collections[from.type]]=out.mentions[collections[from.type]].filter(id=>id!==from.id);
      out.mentions[collections[to.type]]=[...new Set([...(out.mentions[collections[to.type]]??[]),to.id])];
    }
    for(const [field,type] of [['brand','brand'],['ownerBrand','brand'],['parentBrand','brand'],['parent','product'],['person','person']]) {
      if(type===from.type && out[field]===from.id) {
        if(from.type!==to.type) throw new Error(`Cannot reinterpret ${field}: ${fromKey} as ${toKey}; reconcile ownership first`);
        out[field]=to.id;
      }
    }
    if(input.relations?.some(relation=>relation.entityType===from.type && relation.entity===from.id)) {
      const relations=new Map();
      out.relations=out.relations.filter(relation=>{
        const key=`${relation.entityType}:${relation.entity}`;
        const previous=relations.get(key);
        if(!previous){relations.set(key,relation);return true;}
        if(!isDeepStrictEqual(previous,relation))throw new Error(`Conflicting relations for ${key}; reconcile relationship attributes before migration`);
        return false;
      });
    }
    if(out.excludedEntities)out.excludedEntities=[...new Set(out.excludedEntities.map(key=>key===fromKey?toKey:key))];
    return out;
  };
  return walk(value);
}
export function replaceEntityLinks(text, fromKey, toKey) {
  const source=entityPath(fromKey),target=entityPath(toKey);
  return text.replace(new RegExp(source.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?=[/#?\\s)"\\]]|$)','g'),target);
}
