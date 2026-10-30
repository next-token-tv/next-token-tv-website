import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, cp, symlink, rm, rename } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import net from 'node:net';
import { chromium } from '@playwright/test';
import { developmentPreview } from '../scripts/lib/development-preview.mjs';

test('development watcher settings do not affect builds', () => {
  let updated;
  const setup = developmentPreview().hooks['astro:config:setup'];
  setup({ command: 'build', updateConfig: value => { updated = value; } });
  assert.equal(updated, undefined);
  setup({ command: 'dev', updateConfig: value => { updated = value; } });
  assert.equal(updated.vite.server.strictPort, true);
});

test('preview refreshes atomic YAML, JSON and Markdown edits and offline changes', { timeout: 90000 }, async () => {
  const root = await mkdtemp(join(tmpdir(), 'next-token-dev-'));
  let server, browser, logs = '';
  async function stop() {
    if (server && server.exitCode === null) {
      const child = server;
      const done = once(child, 'exit');
      const timeout = setTimeout(() => child.kill('SIGKILL'), 5000);
      child.kill('SIGTERM');
      try { await done; } finally { clearTimeout(timeout); }
    }
    server = undefined;
  }
  try {
    for (const dir of ['scripts/lib', 'src/pages', 'src/content/yaml', 'src/content/json', 'src/content/md']) await mkdir(join(root, dir), { recursive: true });
    await symlink(resolve('node_modules'), join(root, 'node_modules'), 'dir');
    await cp('scripts/dev.mjs', join(root, 'scripts/dev.mjs'));
    await cp('scripts/lib/development-preview.mjs', join(root, 'scripts/lib/development-preview.mjs'));
    await writeFile(join(root, 'package.json'), '{"type":"module"}');
    await writeFile(join(root, 'astro.config.mjs'), `import {defineConfig} from 'astro/config'; import {developmentPreview} from './scripts/lib/development-preview.mjs'; export default defineConfig({integrations:[developmentPreview()]});`);
    await writeFile(join(root, 'src/content.config.ts'), `import {defineCollection} from 'astro:content'; import {glob} from 'astro/loaders'; export const collections=Object.fromEntries(['yaml','json','md'].map(ext=>[ext,defineCollection({loader:glob({base:'./src/content/'+ext,pattern:'**/*.'+ext})})]));`);
    await writeFile(join(root, 'src/pages/index.astro'), `---\nimport {getCollection} from 'astro:content';\nconst entries=await Promise.all(['yaml','json','md'].map(name=>getCollection(name)));\n---\n{entries.flat().map(e=><p>{e.data.title}</p>)}`);
    const files = {yaml:'title: YAML-one\n',json:'{"title":"JSON-one"}',md:'---\ntitle: Markdown-one\n---\nBody\n'};
    for(const [ext,text] of Object.entries(files)) await writeFile(join(root,`src/content/${ext}/entry.${ext}`),text);
    const socket=net.createServer();socket.listen(0,'127.0.0.1');await once(socket,'listening');const port=socket.address().port;await new Promise(r=>socket.close(r));
    const url=`http://127.0.0.1:${port}`;
    async function start() {
      server=spawn(process.execPath,['scripts/dev.mjs','--port',String(port)],{cwd:root,env:{PATH:process.env.PATH,HOME:process.env.HOME,TMPDIR:process.env.TMPDIR,NODE_ENV:'production'},stdio:['ignore','pipe','pipe']});
      server.stdout.on('data',d=>{logs+=d;});server.stderr.on('data',d=>{logs+=d;});
      for(let i=0;i<150;i++) { try {if((await fetch(url, {signal: AbortSignal.timeout(1000)})).ok)return;}catch{} if(server.exitCode!==null)throw Error(logs);await new Promise(r=>setTimeout(r,100)); }
      throw Error('Preview did not start: '+logs);
    }
    await start();browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();await page.goto(url);
    for(const [ext,text] of Object.entries(files)) {
      const file=join(root,`src/content/${ext}/entry.${ext}`);
      await writeFile(file+'.tmp',text.replace('-one','-two'));await rename(file+'.tmp',file);
      const expected=ext==='md'?'Markdown-two':ext.toUpperCase()+'-two';
      await page.getByText(expected,{exact:true}).waitFor({timeout:15000});
    }
    await stop();await writeFile(join(root,'src/content/yaml/entry.yaml'),'title: YAML-offline\n');await start();await page.goto(url);await page.getByText('YAML-offline',{exact:true}).waitFor();
  } catch(error) { error.message += '\n'+logs; throw error; }
  finally { if(browser)await browser.close();await stop();await rm(root,{recursive:true,force:true}); }
});
