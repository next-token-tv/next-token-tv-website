import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {load, dump} from 'js-yaml';
const number=process.argv[2];
if(!/^\d{3}$/.test(number??''))throw Error('Usage: node scripts/sync-episode-release.mjs NNN');
const base=`../next-token/shows/weekly/episodes/${number}/`;
const path=`src/content/data/episodes/next-token-weekly--${number}.yaml`;
const episode=load(await fs.readFile(path,'utf8'));
const snapshotPath=`src/content/imported/episodes/${episode.productionImport}.json`;
const snapshot=JSON.parse(await fs.readFile(snapshotPath,'utf8'));
for(const source of snapshot.provenance.sources)source.sha256=createHash('sha256').update(await fs.readFile('../next-token/'+source.path)).digest('hex');
const publication=JSON.parse(await fs.readFile(base+'04-release/platforms/publication.json','utf8'));
const metadata=JSON.parse(await fs.readFile(base+'episode.json','utf8'));
const names={'xiaoyuzhou':['小宇宙','Xiaoyuzhou'],'apple-podcasts':['Apple Podcasts','Apple Podcasts'],spotify:['Spotify','Spotify'],bilibili:['哔哩哔哩','Bilibili'],youtube:['YouTube','YouTube']};
const live=Object.entries(names).filter(([id])=>publication.platforms[id]?.status?.startsWith('published')&&publication.platforms[id].public_url);
const audioOnly = id => publication.platforms[id]?.mode === 'audio-only' || id === 'apple-podcasts';
if(live.length){
 episode.platforms=live.map(([id,[zh,en]])=>({platform:id,label:{'zh-Hans':zh,en},href:publication.platforms[id].public_url,action:{'zh-Hans':audioOnly(id)?'立即收听':['xiaoyuzhou','spotify'].includes(id)?'收听 / 收看':'立即观看',en:audioOnly(id)?'Listen now':['xiaoyuzhou','spotify'].includes(id)?'Listen / watch':'Watch now'}}));
 episode.media.audio=live.some(([id])=>['xiaoyuzhou','spotify','apple-podcasts'].includes(id));
 episode.media.video=live.some(([id])=>['bilibili','youtube'].includes(id));
 const dates=[metadata.release_date,...live.map(([id])=>(publication.platforms[id].published_at ?? publication.platforms[id].public_display_time))].filter(Boolean).map(d=>d.slice(0,10)).sort();
 if(dates.length)snapshot.releaseDate=dates[0];
 await fs.writeFile(path,dump(episode,{lineWidth:-1,noRefs:true}));
}
await fs.writeFile(snapshotPath,JSON.stringify(snapshot,null,2)+'\n');
console.log({number,platforms:live.map(([id])=>id),releaseDate:snapshot.releaseDate??null});
