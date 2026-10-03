// Neutral wording remains accurate after the scheduled date on a static site.
// A passed date alone never establishes that recording or publication happened.
export function announcementCopy(episode, locale) {
  const en = locale === 'en';
  if (episode.phase === 'post-production') return {
    label: en ? 'In production' : '节目制作中',
    date: en ? 'Recording date' : '录制日期',
    note: en ? 'The episode is in production. Published formats will appear here when available.' : '节目正在制作中，已发布的内容形式将更新在本页。',
  };
  return {
    label: en ? 'Recording schedule · Status unconfirmed' : '录制安排 · 进度待确认',
    date: en ? 'Scheduled date' : '计划录制日期',
    note: en ? 'This is the planned recording schedule. Recording and release status remain unconfirmed until updated here.' : '此处为计划录制安排；实际录制与发布进度以本页后续更新为准。',
  };
}
