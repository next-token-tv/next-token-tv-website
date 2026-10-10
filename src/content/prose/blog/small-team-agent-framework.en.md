---
locale: en
episodes:
  - next-token-weekly--001
  - next-token-weekly--002
status: published
title: 'Should a Small Team Still Write Its Own Agent Framework from Scratch?'
description: 'The basic execution capabilities of an agent are being taken over by managed services and mature frameworks. The question an application team has to answer is not whether to build in-house, but which responsibilities to hand over and which to keep.'
updatedAt: '2026-10-10'
publishedAt: '2026-09-16'
---

Take apart an agent application built by a small team and the genuinely differentiated part usually turns out to be a very thin layer. The basic capabilities—the task loop, tool calling, context assembly—now have multiple off-the-shelf sources: vendors' Agent APIs, continuously iterated open-source harnesses, CLIs that can be embedded into your own product. How much of writing a framework from scratch is still worth doing depends on what each of these alternatives has taken over.

## The Loop Is Easy; Long-Term Use Is Hard

A working agent loop is not complicated: hand the task to the model, parse which tools it wants to call, execute, stitch the results back into the context, and run another round. What really separates the players is the detail accumulated through long-term use. Agents look simple, and extended use reveals how hard they are—the organization of sessions and projects, cache hit rates, optimizations that work in concert with the model, all of it hidden behind "it runs."

[Codex](/en/wiki/products/codex) is a specimen of this kind of accumulated detail: it provides dedicated tools that can pull out all of its own Projects and Sessions, show progress and status, and even locate a reconnection problem that appeared somewhere inside a long conversation. These capabilities come from keeping complete records for model training from the moment of architectural design, plus continuous iteration over a long period. Even if a small team writes a loop of exactly the same shape, it can hardly invest the same level of maintenance across all of these details.

And the complexity keeps growing. A self-built harness usually starts from the simplest loop, then keeps acquiring features, and once it grows complicated enough it needs to be encapsulated—which is precisely one of the vendors' motives for turning it into a managed service.

## The Shell Involves More Work Than You Think

Once execution is handed to a mature framework, what an application team has left is often summarized as "building a shell." That summary understates the workload of the shell, and one case of actual development makes the point: [CodePilot](/en/wiki/products/codepilot) originally adapted to [Claude Code](/en/wiki/products/claude-code) alone; back then the Agent SDK did everything else well and the team only had to mind the UI. But as the various frameworks waxed and waned, users switched from one to another from day to day, and the shell was forced to adapt to every backend: building runtime routing to dispatch user input to different CLIs and frameworks; handling each vendor's incompatible API formats, return data, and billing schemes; and on top of that the product's own distinctive features and legacy debt—the adaptation work kept snowballing.

Deepening vendor lock-in makes the problem worse. Agents are binding ever more tightly to their own models, the various coding plans are mutually incompatible, and adaptation costs keep climbing. The "adapt to everything" shell grows more and more painful to maintain, yet nobody dares adapt to only one vendor—the one being mocked today may turn the tables a few days later on the strength of quotas or capability.

## Three Options, Three Scopes of Responsibility

There are at least three possible routes, each with a different scope of responsibility.

The first is the managed service. An Agent API or an official harness packages the model, the tools, and the execution environment into a closed loop, and the team simply calls the service. The price is deep binding: the model and the agent are co-optimized as a matched pair, and people who support the official pairing often cite the cache-rate example—the same model gets better cache hits inside the official host, though the exact numbers vary depending on who is telling it. The advantage of the pairing also extends to integration coverage: in Chinese information retrieval, the plugin for [DeepSeek](/en/wiki/products/deepseek)'s official pairing can reach content that external tools cannot, such as the full text of WeChat official accounts.

The second is the SDK and the CLI. You embed the execution engine into your own product; the model and the base loop are maintained upstream, while the runtime shape, the interface, and the data remain under your control. This is the middle path, but following upstream is itself a burden: the [DeepSeek Harness](/en/wiki/products/deepseek-harness) ships a dozen or more versions in a single day, and when the layer underneath a plugin moves, everything on top breaks; GUI adaptations die the moment the host interface shifts, which is why the community consensus has become to build against more stable exposure surfaces like MCP or the CLI; and if you want stability, you do what Linux users did in the early days—wait for someone else to package a distribution.

The third is building from scratch. It has not become pointless—when the execution environment is unusual, the security boundary is strict, or the product is itself a piece of framework research, building your own is still reasonable. But for most user-facing applications, the basic execution capabilities already have cheaper sources, and the criterion for building in-house has shifted from "no one else has it" to "does this layer really differentiate the product."

## After Handing It to Infrastructure

A further idea is to treat the entire execution layer as infrastructure: in the past, building an internet service meant renting a host from a cloud provider to deploy your program; in the future, what you rent might be an "agent host" or an agent environment that drives a large share of the business. The analogy is still a vision rather than reality, but the directional signals have appeared—agents are increasingly treated as a technology rather than a product, users no longer care which model is behind the scenes, and services expose only what is distinctive about themselves.

For application teams, what actually remains is, paradoxically, clearer than before: product definition, interface, vertical data and context, evaluation and delivery. Looking back, the investment many teams made over the past year in building their own harnesses resembles tuition paid—tuition that bought the ability to answer a question honestly: outsource the execution capabilities that can be outsourced, and concentrate resources on the layer that no one else can replace. As for which layer is irreplaceable for you, every team has to answer that with its own scenarios.

## Sources

- [The observation that agents are easy to build and hard to use long-term](/en/weekly/001/transcript#quote-846174adad06252d10f9), [Codex's ability to perceive its own projects](/en/weekly/001/transcript#quote-3f25f5a9fcd109253c54), and [preferences for model-and-agent pairings](/en/weekly/001/transcript#quote-23bda31a804e49123ef0)
- [How plugin systems offload complexity](/en/weekly/001/transcript#quote-56c9a7a492758084740a) and [frequent updates breaking compatibility](/en/weekly/001/transcript#quote-9b223772ff9194051c4d)
- [The two-way convergence of coding agents](/en/weekly/001/transcript#quote-6da3490b335d2ae6828d)
- [The Chinese retrieval experience of the official pairing](/en/weekly/002/transcript#quote-8316bc20929e3c03de42), and [plugins reaching WeChat content](/en/weekly/002/transcript#quote-a805ea92e1226e6adb67)
- [Updates too fast for plugins to keep up](/en/weekly/002/transcript#quote-4b12f7533b43dcc76981) and [a dozen-plus versions in a day](/en/weekly/002/transcript#quote-1802555fa13ce80c462b), [the fragility of GUI adaptations](/en/weekly/002/transcript#quote-7edaa117295025939d89), [switching to MCP or CLI](/en/weekly/002/transcript#quote-d87e3ed0d117548ed084), and [the distribution strategy](/en/weekly/002/transcript#quote-1aa8c2eff59cd4bedee9)
- [The division of labor between shell and loop](/en/weekly/002/transcript#quote-041481ffa5caf66f905d), [where adaptation costs come from](/en/weekly/002/transcript#quote-22236d8ec47c9a407d78), and [growing complex enough to need encapsulation](/en/weekly/002/transcript#quote-b42bc119a014f52e3342)
- [Agent APIs and official harnesses as packaged bundles](/en/weekly/002/transcript#quote-0208154e94365b78f6c6), and [the judgment that self-built harnesses will consolidate](/en/weekly/002/transcript#quote-a2f65ad7e3c155d5d55b)
- [The vision of agent services as new infrastructure](/en/weekly/002/transcript#quote-aa01ef206e5d60d944ed), [the analogy of renting an agent host](/en/weekly/002/transcript#quote-1efc17893c72c8d331b4), and [agents as technology, not product](/en/weekly/002/transcript#quote-ae057ee823546313680c)
