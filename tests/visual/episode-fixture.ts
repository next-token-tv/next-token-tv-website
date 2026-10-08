import {readFileSync,readdirSync} from 'node:fs';
import {load} from 'js-yaml';
export const episodeData=readdirSync('src/content/data/episodes').filter(n=>n.endsWith('.yaml')).map(n=>load(readFileSync('src/content/data/episodes/'+n,'utf8')) as any);
export const nextEpisode=episodeData.filter(e=>e.status==='announced').sort((a,b)=>Date.parse(a.scheduledAt)-Date.parse(b.scheduledAt))[0];

export const latestEpisode=episodeData.filter(e=>e.status==='published').sort((a,b)=>Number(b.number)-Number(a.number))[0];
