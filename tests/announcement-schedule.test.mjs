import assert from 'node:assert/strict';
import test from 'node:test';
import { hasRecordingDatePassed } from '../scripts/lib/announcement-schedule.mjs';

test('date-only announcements expire after the entire recording day in their time zone', () => {
  for (const now of ['2026-09-18T15:59:59Z', '2026-09-19T04:21:31Z', '2026-09-19T15:59:59.999Z']) {
    assert.equal(hasRecordingDatePassed('2026-09-19', 'Asia/Shanghai', Date.parse(now)), false);
  }
  assert.equal(hasRecordingDatePassed('2026-09-19', 'Asia/Shanghai', Date.parse('2026-09-19T16:00:00Z')), true);
});

test('date-only expiry uses the specified time zone, not UTC or the build machine zone', () => {
  const now = Date.parse('2026-09-20T02:00:00Z');
  assert.equal(hasRecordingDatePassed('2026-09-19', 'America/Los_Angeles', now), false);
  assert.equal(hasRecordingDatePassed('2026-09-19', 'Asia/Shanghai', now), true);
});

test('announcements with an exact time retain timestamp-based expiry', () => {
  const scheduledAt = '2026-09-19T10:00:00+08:00';
  assert.equal(hasRecordingDatePassed(scheduledAt, 'Asia/Shanghai', Date.parse('2026-09-19T01:59:59Z')), false);
  assert.equal(hasRecordingDatePassed(scheduledAt, 'Asia/Shanghai', Date.parse('2026-09-19T02:00:00Z')), false);
  assert.equal(hasRecordingDatePassed(scheduledAt, 'Asia/Shanghai', Date.parse('2026-09-19T02:00:01Z')), true);
});
