---
entityType: product
entity: alphafold
locale: zh-Hans
slot: wiki
updatedAt: '2026-11-02'
seoTitle: 'AlphaFold 是什么：蛋白质结构预测模型、数据库与和 AI 制药的关系｜Next Token Wiki'
seoDescription: '了解 Google DeepMind 的 AlphaFold 模型系列：CASP14 突破、AlphaFold 数据库、AlphaFold 3 与 Server 的使用方式，以及第八期节目对 AI 制药的讨论。'
---

## AlphaFold 是什么

AlphaFold 是 [Google DeepMind](/wiki/brands/google-deepmind) 开发的生物分子结构预测模型系列，用于从氨基酸序列预测蛋白质等分子的三维结构。2018 年 12 月，第一代 AlphaFold 在国际评估赛事 CASP13 中排名第一；2020 年 11 月 30 日，AlphaFold2 在 CASP14 上以远超第二名的精度被赛事组织方认定为"蛋白质折叠问题"这一 50 年难题的解决方案。2021 年 7 月 15 日，方法论文发表于《自然》并同步开源代码；一周后 DeepMind 与欧洲生物信息学研究所（EMBL-EBI）上线 AlphaFold 蛋白质结构数据库；2022 年 7 月 28 日，数据库扩展到超过 2 亿个结构，覆盖当时已知科学目录中几乎全部的蛋白质。

2024 年 5 月 8 日，Google DeepMind 与 Isomorphic Labs 发布 AlphaFold 3，把预测范围从蛋白质结构扩展到蛋白质与 DNA、RNA、配体等分子之间的相互作用，同时上线面向非商业研究的免费入口 AlphaFold Server。2024 年 10 月 9 日，AlphaFold 项目因 Demis Hassabis 与 John Jumper 的工作获得诺贝尔化学奖（该奖另一半授予蛋白质设计的 David Baker）。官方介绍称 AlphaFold 已被 190 多个国家/地区的数百万研究人员使用。

## 用途与使用边界

研究者使用 AlphaFold 的三个官方入口各不相同：查询已有预测结果用免费的 [AlphaFold 蛋白质结构数据库](https://alphafold.ebi.ac.uk/)；在线预测蛋白质与配体、核酸等的相互作用用 [AlphaFold Server](https://alphafoldserver.com/about)；需要自行部署时，AlphaFold 3 的模型代码与权重开放学术用途下载，商业使用需另行联系 Google DeepMind 与 Isomorphic Labs。

AlphaFold 输出的是计算预测，不是实验测定的结构，也不能替代湿实验和临床验证：结构只是药物研发诸多环节中的一环。第八期节目讨论 AI 制药时，参与者也强调了临床环节无法用 AI 省略。

## 易混概念

AlphaFold 是模型系列；AlphaFold 蛋白质结构数据库是存放预测结果的免费数据库；AlphaFold Server 是在线预测入口。它们都不是药物研发公司：Isomorphic Labs 是 2021 年从 [Google DeepMind](/wiki/brands/google-deepmind) 分拆出来、用 AI 做药物设计的独立公司，与 AlphaFold 相关但属于不同实体。

## 节目中的讨论

第八期第六章[「AI 制药：从效率提升到创造增量」](/weekly/008/transcript#chapter-06)里，AlphaFold 出现在一段转述中：歸藏推荐了重轻主持的播客《蜉蝣天地》对一位制药研究者的采访，并转述其大意——有了 CRISPR 剪切、DNA 编辑和["谷歌那个 AlphaFold"](/weekly/008/transcript#quote-472379e97fac6c093cfb)这套工具，人们可以设计任意蛋白质结构和靶向治疗，瓶颈在于无法省略的三期临床；他还转述了"这些技术在 2019、2020 年前后成熟，2030 年左右会有一大波新药上市"的预测，并自称转述"可能不准确"。同章中杨攀补充说，AI 可以算出药物分子是否溶于水等性质，把上百次实验压缩到一两次；橘子则认为 AI 让非医药背景的人也有机会进入这个领域。这些都是参与者的转述和个人观点，不是 AlphaFold 官方资料，也不构成对新药上市时间的判断。

## 常见问题

### AlphaFold 是免费的吗？

三个入口的开放程度不同：AlphaFold 蛋白质结构数据库完全免费；AlphaFold Server 对非商业研究免费；AlphaFold 3 的代码与权重供学术用途下载，商业使用需要联系 Google DeepMind 与 Isomorphic Labs。各入口的最新条款以 [AlphaFold 官方页面](https://deepmind.google/science/alphafold/)为准。

### AlphaFold 2 和 AlphaFold 3 有什么区别？

AlphaFold 2（2020 年 11 月在 CASP14 上胜出）预测蛋白质自身的三维结构；AlphaFold 3（2024 年 5 月 8 日发布）把预测范围扩展到蛋白质与 DNA、RNA、配体等所有生命分子的结构和相互作用。前者已开源代码，后者通过 AlphaFold Server 和学术下载提供。

### 在哪里查 AlphaFold 预测的蛋白质结构？

在 [AlphaFold 蛋白质结构数据库](https://alphafold.ebi.ac.uk/)按蛋白名称、UniProt 编号或序列搜索。该数据库 2022 年 7 月起收录超过 2 亿个预测结构，可以免费查看和下载。

### AlphaFold 能用来研发新药吗？

AlphaFold 能预测靶点蛋白的结构和相互作用，是药物设计的重要工具，但不能替代实验验证和临床试验；临床环节无法用 AI 省略。第八期节目的讨论也把三期临床列为 AI 制药目前的瓶颈。AlphaFold 商业化药物研发由 Isomorphic Labs 承担。

### AlphaFold 为什么获得诺贝尔奖？

2024 年 10 月 9 日，诺贝尔化学奖的一半授予 Google DeepMind 的 Demis Hassabis 与 John Jumper，表彰他们用 AlphaFold 实现蛋白质结构预测的贡献；另一半授予 David Baker 的计算蛋白质设计工作。见[诺贝尔奖官方公告](https://www.nobelprize.org/prizes/chemistry/2024/summary/)。

## 来源

- [Google DeepMind：AlphaFold 官方介绍](https://deepmind.google/science/alphafold/)
- [AlphaFold 蛋白质结构数据库](https://alphafold.ebi.ac.uk/)
- [AlphaFold Server 说明](https://alphafoldserver.com/about)
- [AlphaFold 2 方法论文（Nature, 2021-07-15）](https://www.nature.com/articles/s41586-021-03819-2)
- [2024 年诺贝尔化学奖官方公告](https://www.nobelprize.org/prizes/chemistry/2024/summary/)
