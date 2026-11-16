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

test('repeated short cues are aligned only when both neighbors establish a unique ordered match', () => {
  const first = '这是紧接重复片段以前的唯一完整字幕';
  const last = '这是整个重复片段结束以后唯一的完整字幕';
  const makeChapters = () => [{ turns: [first, '没有之一。', '没有之一。', '没有之一。', last]
    .map(value => ({ paragraphs: [[{ value }]] })) }];
  const srt = [first, '没有之一。', '没有之一。', '没有之一。', last].map((line, index) =>
    `${index + 1}\n00:00:0${index},000 --> 00:00:0${index},850\n${line}`,
  ).join('\n\n');
  const chapters = makeChapters();
  assert.equal(alignTranscriptTimings(chapters, srt, { includeShortCues: true }), 5);
  assert.deepEqual(chapters[0].turns.slice(1, 4).map(turn => turn.paragraphTimings[0]), [
    { startSeconds: 1, endSeconds: 1.85 },
    { startSeconds: 2, endSeconds: 2.85 },
    { startSeconds: 3, endSeconds: 3.85 },
  ]);

  const ambiguous = makeChapters();
  assert.equal(alignTranscriptTimings(ambiguous, srt.replace('00:00:03,850\n没有之一。', '00:00:03,850\n还有一句话。'),
    { includeShortCues: true }), 2);
  assert.ok(ambiguous[0].turns.slice(1, 4).every(turn => turn.paragraphTimings[0] === null));
});

test('a replacement at the same Bilibili URL cannot use the earlier part’s captions', async () => {
  const href = 'https://www.bilibili.com/video/BV1zQhv6VEwj';
  const view = cid => async url => {
    assert.equal(url.searchParams.get('bvid'), 'BV1zQhv6VEwj');
    return Response.json({ code: 0, data: { bvid: 'BV1zQhv6VEwj', pages: [{ page: 1, cid }] } });
  };
  const timing = await publicBilibiliTiming('003', href, view(43534387211));
  assert.equal(timing?.filename, 'subtitles.zh-Hans.srt');
  assert.equal(timing?.cid, 43534387211);
  assert.equal(await publicBilibiliTiming('003', href, view(42105047244)), null);
  assert.equal(await publicBilibiliTiming('003', href, view(42105047245)), null);
  assert.equal(await publicBilibiliTiming('003', `${href}?p=2`, view(43534387211)), null);
});
