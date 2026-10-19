---
term: dom
locale: en
updatedAt: "2026-10-11"
---

## Definition

The Document Object Model (DOM) is the tree of objects a browser builds when parsing an HTML or XML document, with nodes representing elements, text and attributes. Programs read and write this tree through standard interfaces to inspect and modify the page. WHATWG maintains the DOM Standard.

## How it works

After a document loads, the parser constructs the node tree; JavaScript reaches in through entry points such as `document` to query nodes, change attributes or insert new ones, and the browser updates the rendering. Event handling for clicks and input also attaches to DOM nodes.

## Usage

Frontend frameworks and libraries ultimately update the screen through DOM operations. Dynamically loaded content, interactive effects and accessibility improvements all depend on the page's DOM structure.

## Related and confusable terms

[HTML](/en/wiki/terms/html) is the source text describing the document; the DOM is the in-memory object tree built from parsing it. Changing the DOM does not alter the original HTML file on the server.
