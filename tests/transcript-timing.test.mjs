import test from 'node:test';
import assert from 'node:assert/strict';
import { alignTranscriptTimings } from '../scripts/lib/transcript-timing.mjs';
import { publicBilibiliTiming } from '../scripts/lib/bilibili-timing.mjs';
test('timing accepts full unique matches and rejects repeats, edits and short replies', () => {
  const sentence = '这是一段用于测试的完整字幕内容';
  const chapters = [{turns:[{paragraphs:[[ {value:sentence} ],[{value:'嗯'}],[{value:'这是一段不同的完整字幕内容'}]]}]}];
  const srt = `1\n00:00:10,000 --> 00:00:13,500\n${sentence}\n`;
  assert.equal(alignTranscriptTimings(chapters,srt),1);
  assert.deepEqual(chapters[0].turns[0].paragraphTimings,[{startSeconds:10,endSeconds:13.5},null,null]);
  assert.equal(alignTranscriptTimings(chapters,srt+'\n2\n00:00:20,000 --> 00:00:23,500\n'+sentence),0);
});

test('a replacement at the same Bilibili URL cannot use the earlier part’s captions', async () => {
  const href = 'https://www.bilibili.com/video/BV1zQhv6VEwj';
  const view = cid => async url => {
    assert.equal(url.searchParams.get('bvid'), 'BV1zQhv6VEwj');
    return Response.json({ code: 0, data: { bvid: 'BV1zQhv6VEwj', pages: [{ page: 1, cid }] } });
  };
  const timing = await publicBilibiliTiming('003', href, view(42105047244));
  assert.equal(timing?.filename, 'subtitles-bilibili.zh-Hans.srt');
  assert.equal(timing?.cid, 42105047244);
  assert.equal(await publicBilibiliTiming('003', href, view(42105047245)), null);
  assert.equal(await publicBilibiliTiming('003', `${href}?p=2`, view(42105047244)), null);
});
