---
locale: en
episodes:
  - next-token-weekly--006
status: published
publishedAt: '2026-11-10'
title: 'When a School Notice Changes the Plan, the Household Assistant Should Follow Suit'
description: 'After fitness testing is canceled, what should happen to the old calendar entry and preparation reminder? Starting from a school email notice, this article discusses activity links, change records, and duplicate notifications.'
updatedAt: '2026-11-10'
---

A reminder arrives before heading out: heavy rain is forecast for Beijing the next day, and an email from the school says fitness testing has been canceled. This is an experience Yang Pan shared in episode 6 about using Dots; he had also connected Grok Bot, but did not receive a reminder from it that time.

The account ends with “being notified in time.” The episode does not say that the assistant then updated the calendar, or that it handled all the preparations at home. Still, following the email to its practical next question: the original event is still on the calendar. What should happen to the old reminder?

## Later notices need to reconnect to the original event

Suppose the school first announces a sports day, changes the venue a few days later, then cancels it the day before because of the weather. If each of the three emails becomes a separate calendar event, parents have to figure out for themselves which one is current. Simply keeping the latest email is not enough either: it may say only “the previously scheduled event is canceled,” without restating the time or event name.

The assistant needs to link later notices back to the original event. The email thread can offer clues, as can the school, class, event name, and original date. If two classes have similar events on the same day, matching by title alone is not enough.

Relative dates are especially easy to get wrong. If an email sent on Monday says “tomorrow,” it still means Tuesday when forwarded on Tuesday; it must not be pushed back another day just because that is when it was read. The original notice’s send time needs to be preserved, and the system needs to distinguish whether the person forwarding it added any new information.

Calendar protocols already have fields for expressing these relationships. [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545.html) uses a UID to identify the same component and SEQUENCE to indicate its revision number; an event can also be marked CANCELLED. Ordinary school emails may not include these fields, but activity records can follow the same approach: give the same event a stable identifier and attach changes to its original record.

## Canceling fitness testing doesn’t mean there’s no school tomorrow

The easiest place to go too far when updating a record is to infer consequences that the notice doesn’t state. Canceling fitness testing supports canceling that event only. Whether students should still come to school as usual, whether it will be rescheduled, and whether they still need to bring their gear all depend on what the notice actually says. If it only says “to be rescheduled,” the calendar should leave the date undecided; it must not fill in a plausible-looking date the following week.

If there was already a reminder to “prepare fitness testing gear tonight,” it can be linked to the fitness testing event. When the event is canceled, that reminder can be found and handled too. If the assistant has read-only access, it should show the old plan as pending an update. If it already has permission to make changes, it can update the plan and show the result along with a link to the original email so parents can check it.

The product could display a change in just a few details: the originally scheduled date, the canceled item, the notice time, and a link to the original. What parents most need to confirm is what the change affects; they don’t need to read another generic weather summary.

To test this feature, enter four fictional notices in order: announce the event, change the venue, forward the notice again, and cancel the event. At the end, there should be just one event record, showing that the venue changed once, that the event is canceled, and where the old preparation reminder went. Then add another notice with the same event name but for a different class, and check whether it gets incorrectly merged.

## Related resources

- [The experience of receiving a school notice canceling fitness testing](/en/weekly/006/transcript#quote-8f1224ad90673192786d)
- [Clear attribution of the reminder to Dots](/en/weekly/006/transcript#quote-5644622b812dbd3a6437)
- [RFC 5545: iCalendar](https://www.rfc-editor.org/rfc/rfc5545.html), 2009; with particular reference to sections 3.8.4.7, 3.8.7.4, and 3.8.1.11; consulted on October 26, 2026.
