import test from 'node:test';
import assert from 'node:assert/strict';
import {streamCommand} from '../scripts/lib/release-process.mjs';

test('publisher streams before exit and retains version output', async () => {
  let received = '';
  let first;
  const chunk = new Promise(resolve => {first = resolve;});
  const sink = {write(data) {received += data; first();}};
  let finished = false;
  const running = streamCommand(process.execPath, ['-e', 'console.log("uploading"); setTimeout(()=>console.log("Current Version ID: abc"), 200)'], {stdout: sink, stderr: sink});
  running.then(() => {finished = true;});
  await chunk;
  assert.equal(finished, false);
  assert.match(received, /uploading/);
  const result = await running;
  assert.equal(result.code, 0);
  assert.match(result.output, /Current Version ID: abc/);
});
test('publisher bounds a stalled process and reports failure separately', async () => {
  const sink = {write() {}};
  const stalled = await streamCommand(process.execPath, ['-e', 'setInterval(()=>{}, 1000)'], {timeoutMs: 100, graceMs: 100, stdout: sink, stderr: sink});
  assert.equal(stalled.timedOut, true);
  assert.notEqual(stalled.code, 0);
  assert.ok(stalled.seconds < 3);
  const failed = await streamCommand(process.execPath, ['-e', 'process.exit(7)'], {stdout: sink, stderr: sink});
  assert.equal(failed.code, 7);
  assert.equal(failed.timedOut, false);
});
