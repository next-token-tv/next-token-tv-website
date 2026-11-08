import { test } from 'node:test';
import assert from 'node:assert/strict';
import { episodeTermIds } from '../src/data/episode-term-ids.ts';

test('terms render before a reading transcript exists and remain deduplicated after import', () => {
  assert.deepEqual(episodeTermIds(['harness','agent','harness']), ['harness','agent']);
  const span=(entityType,entityId)=>({type:'entity-link',entityType,entityId});
  const transcript={chapters:[{turns:[{paragraphs:[[span('term','agent'),span('product','codex'),span('term','context')]]}]}]};
  assert.deepEqual(episodeTermIds(['harness','agent'],transcript), ['harness','agent','context']);
  assert.deepEqual(episodeTermIds([],transcript), ['agent','context']);
  assert.deepEqual(episodeTermIds(), []);
});
