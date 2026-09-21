import test from 'node:test';
import assert from 'node:assert/strict';
import { alignTranscriptTimings } from '../scripts/lib/transcript-timing.mjs';
test('timing accepts full unique matches and rejects repeats, edits and short replies', () => {
  const sentence = '这是一段用于测试的完整字幕内容';
  const chapters = [{turns:[{paragraphs:[[ {value:sentence} ],[{value:'嗯'}],[{value:'这是一段不同的完整字幕内容'}]]}]}];
  const srt = `1\n00:00:10,000 --> 00:00:13,500\n${sentence}\n`;
  assert.equal(alignTranscriptTimings(chapters,srt),1);
  assert.deepEqual(chapters[0].turns[0].paragraphTimings,[{startSeconds:10,endSeconds:13.5},null,null]);
  assert.equal(alignTranscriptTimings(chapters,srt+'\n2\n00:00:20,000 --> 00:00:23,500\n'+sentence),0);
});
