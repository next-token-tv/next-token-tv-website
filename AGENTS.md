This website is metadata-driven.

- Follow [the entity library rules](docs/entity-library.md) when adding or classifying brands, products, models, and shows.

- Follow [the website design guidelines](docs/design-guidelines.md) for presentation changes, including the shared H2 line-height rule.

- Human-authored structured metadata lives as YAML under `src/content/data/`.
- Localized long-form content lives as Markdown under `src/content/prose/`.
- Generated snapshots imported from production repositories live as JSON under `src/content/imported/` and must not be hand-edited.
- Transcript snapshots must record their source repository, repository-relative path, source SHA-256, source Git state, and committed revision when one exists. Website builds never read editorial working files directly.
- Cross-entity references use stable lowercase ASCII IDs. IDs are filenames without their extension.
- Industry brands and products are separate entities: a product may reference its owning brand and a parent product. Standalone products do not require a separate brand entry. Versioned model names are aliases of their model-family entry.
- Brand entries describe companies, organizations, or independent media brands. Models, applications, platforms, and open-source tools belong in products; do not create a duplicate brand for the same product. A company and its same-name product may remain separate when each has distinct information. Shows use their show entry and pagePath, not a duplicate brand.
- A team/about page, founder identity, or legal company alone does not justify splitting a same-name platform into company and product entries. Split only when the library independently covers the organization (for example, its product portfolio or organization-specific topics). Runta and OpenRouter are standalone platform products.
- A recording venue belongs to one partner. Every episode production snapshot references one exact venue.
- An announced episode may store a confirmed recording date and venue before a production snapshot exists. Published episodes require an imported production snapshot.
- Next Token logo and visual-identity source files remain authoritative in the sibling `next-token` repository. Files under `public/assets/` are website delivery copies.
- Metadata refactors must preserve the existing rendered design unless a design change is explicitly requested.
