---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'How should new requirements take effect while an agent is still running?'
description: 'It is common to discover a better direction only after a task has started. How can additions made along the way actually change execution and prevent old results from overriding new decisions?'
updatedAt: '2026-11-10'
---

A page is being generated when the user realizes the title needs changing; the images are not ready yet when they decide to switch to portrait format. It is normal to clarify requirements halfway through the work. If every time we wait until the entire task is finished, the parts we already know need changing will keep being done in vain.

The seventh episode mentioned that people used to wait until an Agent finished before making requests, but later began adding them directly during execution. Once the input box can remain in use, we still need to confirm exactly which work the new requirements affect.

## The same addition can affect different scopes

Suppose an Agent is making three posters. Adding an address usually affects only the text; changing landscape to portrait affects the whole layout; stopping requires preventing subsequent actions.

Some steps have not started yet, so the plan can simply be adjusted. Some images have already been handed off to an external tool for generation and may not be cancellable right away. The product should tell users the difference: what has changed, what is still pending, and which results will be discarded.

Temporal's [workflow message documentation](https://docs.temporal.io/encyclopedia/workflow-message-passing) offers a technical point of reference: a Query reads state, a Signal changes it asynchronously, and an Update allows waiting for a result or an error. The product discussed in the episode may not use this implementation, but it shows that receiving a message and finishing its processing can be represented separately.

User-facing feedback does not need to copy the terminology. Explaining that the first two posters need to be redone and the third will use the new dimensions is enough to let people know whether the change has been applied to the actual task.

## Late-arriving old results can most easily override new decisions

Take the posters again as an example. A landscape image is submitted for generation, and then the user switches to portrait. The portrait version comes back first, and the old landscape version arrives a few minutes later. If the system treats the last file received as the final one, the dimensions that were already fixed will revert.

Keeping the version of the requirements each request was based on can prevent this confusion. The old image can remain available for viewing, but the delivery location should point to the result that matches the current requirements. If the title has been changed three times, the image generated for the first title should not re-enter the final package.

This issue can also arise during validation. Test results from before a code change cannot prove that the new code passes; if report filters change, the old table needs to be recalculated. The new instruction's effects on deliverables and checks should be handled together.

## Give users a current status they can verify

After multiple changes, a short summary of the current requirements can be kept beside the deliverables: portrait format, which title to use, and which images have been updated. If users have questions, they can compare directly without searching through a dozen chat messages.

Update the status only when something important changes. If two requirements conflict, clarify the conflicting part; there is no need to stop all the work that can continue. When an external operation cannot be interrupted, explain what result it will still produce and how that result will be handled.

Before final delivery, check the files once more against the current requirements. Users want to see that this change has been reflected in the poster; a simple “received” is not enough to reassure them that they can close the window.

## Related materials

- [An account of moving from waiting for a task to finish to adding requirements along the way](/en/weekly/007/transcript#quote-8607bd02dee57564e193) and [feedback on continuing to make changes](/en/weekly/007/transcript#quote-81ea975af366ebf49a27)
- [Discussion of Steer mode](/en/weekly/007/transcript#quote-eacbdd3fd520ad42e7b8)
- [Temporal: Workflow message passing](https://docs.temporal.io/encyclopedia/workflow-message-passing), consulted on October 26, 2026.
