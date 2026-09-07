import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
if (process.argv.length !== 3) throw new Error('Usage: npm run import:chapters -- <production-episode-directory>');
const episode = resolve(process.argv[2]);
const production = resolve(episode, '../../../..');
execFileSync('python3', [resolve(production, 'tools/chapters/sync.py'), episode, '--website', root], { stdio: 'inherit' });
