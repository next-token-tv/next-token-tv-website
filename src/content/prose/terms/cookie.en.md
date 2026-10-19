---
term: cookie
locale: en
updatedAt: "2026-10-11"
---

## Definition

A cookie is a small piece of key-value data that a website stores in the browser via the HTTP Set-Cookie response header; the browser sends it back with subsequent requests. Defined by RFC 6265, it is the basic mechanism for maintaining state over the stateless HTTP protocol.

## How it works

The server includes a Set-Cookie field in its response; the browser stores it per domain and path, then automatically returns it in the Cookie request header on later requests. Attributes such as Expires, HttpOnly and Secure govern lifetime, script access and transport security respectively.

## Usage

Features that must remember state across requests—login sessions, shopping carts, language and theme preferences—have traditionally relied on cookies. Third-party cookies used for cross-site tracking face restrictions from browser policies and privacy regulation.

## Related and confusable terms

Cookies are often confused with the cache: the cache stores copies of resources to speed up loading, while cookies store data tied to user state. Both are lumped together with browser storage such as localStorage as "browser data", but their mechanisms and purposes differ.
