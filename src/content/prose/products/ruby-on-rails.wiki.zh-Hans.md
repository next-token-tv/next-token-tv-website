---
entityType: product
entity: ruby-on-rails
locale: zh-Hans
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Ruby on Rails：全栈 Web 框架、约定优先与获取方式｜Next Token Wiki'
seoDescription: '了解 Ruby on Rails 的定位、约定优先的设计、主要组件、获取与学习入口，以及它与 Ruby、Django/Laravel 的关系。'
---

## Ruby on Rails 是什么

Ruby on Rails（常简称 Rails）是用 Ruby 语言编写的开源全栈 Web 应用框架，由 David Heinemeier Hansson（[DHH](/wiki/people/dhh)）创建。官网将其定位为"用约定优于配置加速你的 Agent"，自述覆盖从前端渲染、数据库、邮件、WebSocket 实时页面、异步任务到云存储上传与常见安全防护的全栈能力，代码以 MIT 协议开源在 [GitHub（rails/rails）](https://github.com/rails/rails)。Rails 的设计哲学集中在 DHH 撰写的 [Rails Doctrine](https://rubyonrails.org/doctrine)，其中"约定优于配置"（Convention over Configuration）与"菜单是 omakase（主厨搭配）"是常被引用的支柱。

Rails 也是 [Omarchy](/wiki/products/omarchy) 作者 DHH 最知名的作品；节目在讨论 Omarchy 的走红时曾以其作者背景作比，见下文。

## 用途与使用边界

Rails 的典型用途是独立开发者和小团队快速搭建数据库驱动的 Web 应用：模型（Active Record）、路由、控制器、视图、邮件（Action Mailer）、后台任务（Active Job）、文件存储（Active Storage）与实时通信（Action Cable）都在框架内提供默认方案，也支持只作 API 后端使用的模式。学习路径从[官方 Guides](https://guides.rubyonrails.org/) 的 Getting Started 开始，安装方式见[官网](https://rubyonrails.org/)。

使用边界主要有两条：Rails 需要 Ruby 语言基础，框架的默认约定意味着按它的方式组织代码最省力，偏离约定的定制成本更高；它面向 Web 应用这一形态，移动端原生开发、系统编程等场景不在其覆盖范围内。官网还强调其代码"对 Agent 写入高效、对人类可读"，这是官方定位表述，实际效果因项目而异。

## 节目中的讨论

Weekly #001 的"Omarchy：一个 Agent 优先的 Linux 是什么体验"章节中，向阳乔木在解释 Omarchy 为何走红时提到 Ruby on Rails 作者的推广力度，[认为 Omarchy 4.0 的完成度比 3.0 高了很多](/weekly/001/transcript#quote-681e231d2b480c02f219)。这是对 Rails 作者与 Omarchy 关系的间接提及，不涉及 Rails 本身的使用评价。可阅读[第 001 期对应章节](/weekly/001/transcript#chapter-12)。

## 常见问题

### Ruby on Rails 是什么，谁开发的？

Ruby on Rails 是用 Ruby 编写的开源全栈 Web 应用框架，由 DHH（David Heinemeier Hansson，37signals 联合所有者）创建，至今已有二十多年历史。见[官网](https://rubyonrails.org/)与[Rails Doctrine](https://rubyonrails.org/doctrine)。

### Ruby on Rails 和 Ruby 是什么关系？

Ruby 是编程语言，Rails 是用 Ruby 写的 Web 框架；使用 Rails 开发应用就是用 Ruby 写代码。没有 Ruby 语言基础时，建议先从 Ruby 入门再进入 Rails Guides。

### Ruby on Rails 免费吗，开源协议是什么？

免费。Rails 是开源项目，代码在 [GitHub（rails/rails）](https://github.com/rails/rails)以 MIT 协议发布，任何人都可以免费使用和参与贡献。

### Ruby on Rails 现在的最新版本是什么？

截至 2026 年 9 月，官网首页公布的版本为 Rails 8.1.3（2026 年 3 月 24 日发布）。当前版本与发布记录以[官网](https://rubyonrails.org/)为准。

### Ruby on Rails 和 Django、Laravel 怎么选？

三者分属 Ruby、Python、PHP 三个语言生态，都是面向 Web 应用的全栈框架。Rails 的差异点在"约定优于配置"的设计哲学与自带全栈默认方案，具体选择取决于团队语言背景与项目需求；Rails 侧的设计理念见[Rails Doctrine](https://rubyonrails.org/doctrine)。

## 来源

- [Ruby on Rails 官网](https://rubyonrails.org/)
- [The Rails Doctrine](https://rubyonrails.org/doctrine)
- [Ruby on Rails Guides](https://guides.rubyonrails.org/)
- [GitHub：rails/rails](https://github.com/rails/rails)
