---
entityType: person
entity: simon-willison
locale: en
slot: wiki
updatedAt: '2026-11-09'
seoTitle: 'Simon Willison: Django co-creator and Datasette author | Next Token Wiki'
seoDescription: 'Learn about open source developer Simon Willison: co-creator of the Django Web Framework, creator of Datasette, blogger since 2002, and the model-weights game-identification experiment retold in episode 009.'
---

## Positioning

Simon Willison is an open source developer, co-creator of the Django Web Framework and creator of Datasette, who has blogged about web development and programming since 2002 and is known in recent years for hands-on write-ups of large language model experiments.

## Career and representative work

Per his [site's about page](https://simonwillison.net/about/), he is a co-creator of the Django Web Framework. Datasette is his open source tool for exploring and publishing data, and as an independent developer he builds open source tools for data journalism around Datasette and SQLite. He co-founded Lanyrd, a Y Combinator-funded company, in 2010, and joined Eventbrite as an engineering director through its acquisition of Lanyrd. He also sits on the Python Software Foundation board, is a GitHub Star, and works one day a week at Prime Radiant, Jesse Vincent's applied AI research lab. On 3 November 2026 he published a [blog post](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) replicating the paper "Sparks of Weight-Space Programming", which finds that large language models can natively read and write neural network weights: running Qwen 3.8 27B locally on his laptop, he identified from the raw weights alone which game reinforcement-learning policy networks had been trained to play on simplified versions of Breakout, Pong, Pac-Man, and Freeway (Qwen did not identify the Freeway network).

## Mention in the show

Simon Willison does not appear in the episode quoted on this page. In episode 009's chapter "模型、算力与安全" (Models, compute, and safety), Xiangyang Qiaomu says "那个 Simon Willison 他自己做了测试，我觉得挺有意思的" (Simon Willison ran a test himself, and I found it quite interesting), describing how he fed features or binary data from some very old games to a model without naming the games and asked it to identify them, and "基本上都能找出来" (it got almost all of them) ([see the line](/weekly/009/transcript#quote-96e42cc2ab6c64cbba8e) in the Chinese transcript, plus [Qiaomu's follow-up](/weekly/009/transcript#quote-bc2ab081ff86db5c38c9)). Guizang, discussing the same experiment, says "这个是比刚才那个你说那个 Simon Willison 复刻的，就其实就是这个，直接让它写神经网络" (compared with the Simon Willison replication you mentioned, this one actually has the model write the neural network directly) ([see the line](/weekly/009/transcript#quote-a38c362c394c1d16dc5c)). Qiaomu's description matches Simon Willison's [3 November 2026 blog post](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/). The show's retelling is the participants' account; the original write-up and the paper are available in the post linked above.

## Frequently asked questions

### Who is Simon Willison?

An open source developer, co-creator of the Django Web Framework and creator of Datasette, blogging about software since 2002 at [simonwillison.net](https://simonwillison.net/about/) and known for hands-on LLM experiment write-ups.

### What is Simon Willison's relationship to Django?

He is one of the co-creators of the Django Web Framework, per [his about page](https://simonwillison.net/about/); his own website also runs on Django.

### What is the Simon Willison test mentioned in episode 009?

The show retells the experiment recorded in his 3 November 2026 blog post: models run locally were given only the raw numbers of neural network weights and asked which game each policy network — trained on simplified versions of classic games — was playing, and got most of them right. See the [blog post](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) and [the chapter in the transcript](/weekly/009/transcript#chapter-03).

### Is his name Willison or Wilson?

The correct name is Simon Willison.

## Sources

- [Simon Willison's about page](https://simonwillison.net/about/)
- [Qwen 3.8 27B on my laptop can interpret model weights, too — simonwillison.net, 3 November 2026](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)
- [Episode 009 transcript](/weekly/009/transcript)
