---
term: app-server
locale: en
updatedAt: "2026-10-11"
---

## Definition

An application server is a software environment that hosts an application's business logic and serves application-level requests to clients. Typical examples include Tomcat and Jetty from the Java ecosystem, and web framework runtimes in other languages such as Node.js and Gunicorn.

## How it works

Requests usually arrive at a web server or reverse proxy first, and dynamic requests are then forwarded to the application server, which runs the application code, queries the database and produces a response. It manages runtime resources such as process or thread pools and connection pools, letting developers focus on business logic.

## Usage

Almost every website or API service that needs dynamic processing runs on an application server: e-commerce checkout, content back ends and model inference endpoints all live in such environments. In deployment, a single [VPS](/en/wiki/terms/vps) typically runs one or more application server instances.

## Related and confusable terms

An application server is not the same as a [server](/en/wiki/terms/server): the former is a software concept (the program running the application), while the latter can mean either the hardware or the process listening for requests. It is also on a different layer from [SSH](/en/wiki/terms/ssh) — SSH is a protocol used to administer these servers remotely.
