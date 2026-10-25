---
entityType: product
entity: php
locale: en
slot: wiki
updatedAt: '2026-10-25'
seoTitle: 'PHP: The Web Scripting Language｜Next Token Wiki'
seoDescription: 'What PHP is and how it runs, where to download it, how the October 2026 security advisories were handled, and the show discussion of the PHP vulnerability.'
---

## Definition

PHP is a widely used general-purpose scripting language especially suited to web development: php.net describes it as "fast, flexible and pragmatic", powering "everything from your blog to the most popular websites in the world". See the [official site](https://www.php.net/).

## How it works

PHP code usually runs on a server, generating dynamic web content before the result is sent to the browser; it can also be used for command-line scripts. Language features span object-oriented programming, namespaces, enums and generators (see the [official manual](https://www.php.net/manual/), available in many languages). The interpreter is distributed by php.net, and the [downloads page](https://www.php.net/downloads) lists the maintained release series; version upgrades, deprecations and security fixes are announced through the site’s news feed and changelogs.

## Usage

PHP is a common foundation for blogs, content management systems and server-side web applications — [WordPress](/wiki/products/wordpress) is built with it — and many existing websites and internal systems run on PHP long-term. Operating a PHP site involves keeping up with releases and security advisories: php.net publishes security updates through its [security page](https://www.php.net/security/) and front-page news.

## Related and confusable terms

- The PHP language vs. the PHP currency code: in ISO 4217, `PHP` is the code for the Philippine peso, which is what "PHP currency" queries hit.
- PHP vs. [WordPress](/wiki/products/wordpress): PHP is the programming language; WordPress is a website publishing system built with it. They sit at different layers.
- PHP vs. JavaScript: PHP mainly executes on the server and outputs the result to the browser, while JavaScript traditionally runs in the browser; the two divide the labor in web architecture.

## In this episode

In Weekly #007, in the chapter "安全风险集中爆发：漏洞、证书与补丁" (Security risks erupt: vulnerabilities, certificates and patches), 歸藏 (Guizang) describes the chain reaction around a PHP vulnerability: someone [published the vulnerability itself before the official patch was out, forcing many sites to go offline until they could patch](/weekly/007/transcript#quote-3f7204a5e2d49777b73a); he also says it affected "every PHP version since 2014" and websites in many countries ([participant claims](/weekly/007/transcript#quote-c88bd5553628b4089a2b) not corroborated by official channels). In the chapter "从 Key 泄露聊到 AI 时代的安全边界" (From key leaks to security boundaries in the AI era), 橘子 (Orange) uses the PHP incident to discuss the limits of security review in the AI era. See the [episode 007 chapter](/weekly/007/transcript#chapter-10) (Chinese transcript).

## Frequently asked questions

### What kind of language is PHP?

A server-side scripting language especially suited to web development; code executes on the server to produce web pages and can also be used on the command line. The official description is on [php.net](https://www.php.net/).

### Where do I download PHP?

The [official downloads page](https://www.php.net/downloads) lists the maintained release series and Windows binaries; source code and per-version changelogs are also reached from the official site.

### How was the recent PHP vulnerability fixed?

php.net published a security advisory on October 21, 2026: PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35 fix two critical vulnerabilities that could allow unauthenticated remote code execution; an October 23 informational advisory about session upload progress suggests setting `session.upload_progress.enabled=0`. Keep installations updated to the fixed releases and follow the [official security page](https://www.php.net/security/).

### How does PHP relate to WordPress?

PHP is the programming language and [WordPress](/en/wiki/products/wordpress) is a publishing system built with it; maintaining a WordPress site safely involves both.

## Sources

- [php.net official site](https://www.php.net/)
- [PHP official downloads](https://www.php.net/downloads)
- [PHP official security page](https://www.php.net/security/)
