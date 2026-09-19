export function hasRecordingDatePassed(scheduledAt, timeZone, now = Date.now()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(scheduledAt)) {
    return Date.parse(scheduledAt) < now;
  }

  // A date-only announcement remains current for the whole day at the venue.
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date(now));
  const date = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return scheduledAt < `${date.year}-${date.month}-${date.day}`;
}
