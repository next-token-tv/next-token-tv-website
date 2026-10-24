import test from 'node:test';
import assert from 'node:assert/strict';
import {glob, readFile} from 'node:fs/promises';
import {resolve, dirname} from 'node:path';

const root = resolve(import.meta.dirname, '..');
test('Astro templates reference external styles instead of owning CSS rules', async () => {
  for await (const file of glob('src/**/*.astro', {cwd: root})) {
    const text = await readFile(resolve(root, file), 'utf8');
    for (const block of text.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)) {
      assert.match(block[1].trim(), /^@import "[^"\n]+\.css";$/, file);
      const imported = block[1].match(/"([^"]+)"/)[1];
      await readFile(resolve(root, dirname(file), imported));
    }
  }
});
