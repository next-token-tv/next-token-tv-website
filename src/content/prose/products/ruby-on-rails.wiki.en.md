---
entityType: product
entity: ruby-on-rails
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Ruby on Rails: full-stack web framework, convention over configuration | Next Token Wiki'
seoDescription: 'What Ruby on Rails is, its convention-over-configuration design, main components, how to get started, and how it relates to Ruby, Django, and Laravel.'
---

## What Ruby on Rails is

Ruby on Rails (usually shortened to Rails) is an open-source full-stack web application framework written in Ruby, created by David Heinemeier Hansson ([DHH](/en/wiki/people/dhh)). The official site positions it as "Accelerate your agents with convention over configuration" and describes full-stack coverage spanning frontend rendering, databases, email, live pages over WebSockets, background jobs, cloud uploads, and protections against common attacks. The source code is open under the MIT license on [GitHub (rails/rails)](https://github.com/rails/rails). Rails' design philosophy is collected in the [Rails Doctrine](https://rubyonrails.org/doctrine), written by DHH, whose pillars include "Convention over Configuration" and "The menu is omakase."

Rails is also the best-known work of DHH, the creator of [Omarchy](/en/wiki/products/omarchy); the show referenced his authorship while discussing Omarchy's rise, as noted below.

## Usage and boundaries

Rails is typically used by independent developers and small teams to build database-driven web applications quickly: models (Active Record), routing, controllers, views, email (Action Mailer), background jobs (Active Job), file storage (Active Storage), and real-time communication (Action Cable) all ship with framework defaults, and an API-only mode is supported. Learning starts with the [official Guides](https://guides.rubyonrails.org/); installation instructions are on the [official site](https://rubyonrails.org/).

Two boundaries matter in practice: Rails requires Ruby, and its conventions pay off most when code is organized the Rails way — deviating from them costs more. It targets web applications; native mobile development and systems programming are outside its scope. The official site also describes Rails code as "token-efficient" for agents to write and readable for humans; that is an official positioning claim, and real-world results vary by project.

## Discussion in the show

In Weekly #001's chapter "Omarchy：一个 Agent 优先的 Linux 是什么体验" (the Omarchy chapter in the Chinese transcript), Xiangyang Qiaomu attributed Omarchy's rise partly to the promotion by the Ruby on Rails author and [judged that Omarchy 4.0 was far more polished than 3.0](/weekly/001/transcript#quote-681e231d2b480c02f219). This is an indirect mention of the Rails author's connection to Omarchy, not an evaluation of Rails itself. See the [episode 001 chapter](/weekly/001/transcript#chapter-12); an English transcript is not available.

## Frequently asked questions

### What is Ruby on Rails, and who created it?

Ruby on Rails is an open-source full-stack web application framework written in Ruby, created by DHH (David Heinemeier Hansson, co-owner of 37signals) more than two decades ago. See the [official site](https://rubyonrails.org/) and the [Rails Doctrine](https://rubyonrails.org/doctrine).

### How are Ruby on Rails and Ruby related?

Ruby is the programming language; Rails is a web framework written in it. Building a Rails application means writing Ruby code. Without a Ruby background, start with Ruby basics before working through the Rails Guides.

### Is Ruby on Rails free, and what is its license?

Yes, it is free. Rails is an open-source project published under the MIT license on [GitHub (rails/rails)](https://github.com/rails/rails); anyone can use it and contribute.

### What is the latest version of Ruby on Rails?

As of September 2026, the official homepage displays Rails 8.1.3, released March 24, 2026. Check the [official site](https://rubyonrails.org/) for the current version and release notes.

### How do I choose between Ruby on Rails, Django, and Laravel?

They belong to the Ruby, Python, and PHP ecosystems respectively, and all three are full-stack web frameworks. Rails differentiates itself through convention over configuration and its built-in full-stack defaults; the right choice depends on your team's language background and project needs. For Rails' own rationale, read the [Rails Doctrine](https://rubyonrails.org/doctrine).

## Sources

- [Ruby on Rails official site](https://rubyonrails.org/)
- [The Rails Doctrine](https://rubyonrails.org/doctrine)
- [Ruby on Rails Guides](https://guides.rubyonrails.org/)
- [GitHub: rails/rails](https://github.com/rails/rails)
