This website is metadata-driven.

- Human-authored structured metadata lives as YAML under `src/content/data/`.
- Localized long-form content lives as Markdown under `src/content/prose/`.
- Generated snapshots imported from production repositories live as JSON under `src/content/imported/` and must not be hand-edited.
- Cross-entity references use stable lowercase ASCII IDs. IDs are filenames without their extension.
- Industry brands and products are separate entities: a product references its owning brand and may reference a parent product.
- A recording venue belongs to one partner. Every episode production snapshot references one exact venue.
- An announced episode may store a confirmed recording date and venue before a production snapshot exists. Published episodes require an imported production snapshot.
- Next Token logo and visual-identity source files remain authoritative in the sibling `next-token` repository. Files under `public/assets/` are website delivery copies.
- Metadata refactors must preserve the existing rendered design unless a design change is explicitly requested.
