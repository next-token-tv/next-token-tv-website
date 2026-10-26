# Website instructions

Use [documentation entrypoints](docs/README.md) for the relevant task and the sibling [production workflow](../next-token/docs/production/workflow.zh-Hans.md) for cross-repository ownership.

- Human-authored metadata is YAML in `src/content/data/`; localized prose is Markdown in `src/content/prose/`. Generated `src/content/imported/` JSON must not be hand-edited. Source provenance and episode availability follow the [release contract](docs/release-checklist.md).
- Keep stable lowercase ASCII entity IDs; follow [entity classification](docs/entity-library.md) rather than duplicating classification rules here.
- Production owns original dialogue, media and brand assets. This repository owns presentation and website delivery copies; builds never read editorial working files directly.
- Preserve rendered design during metadata refactors unless a design change was requested. Follow the [design guidelines](docs/design-guidelines.md).
- Review pages present final reader-facing copy; production status and source details belong in metadata/QA. Draft exclusion, noindex and publication checks follow the release contract. Local review does not authorize publishing.
- Preserve unrelated work and historical materials. Use Conventional Commits; run `gh` and `wrangler` outside the sandbox. Runtime/test changes listed in [implementation decisions](../next-token/docs/production/implementation-decisions.zh-Hans.md) require separate confirmation.

| Task | Entry |
|---|---|
| Blog writing/editing | [Blog skill](.agents/skills/next-token-blog/SKILL.md), [editorial standard](docs/blog-editorial.zh-Hans.md), [content contract](docs/blog.md) |
| Full-episode WeChat articles | [WeChat skill](.agents/skills/next-token-wechat/SKILL.md), [editorial standard](docs/wechat-editorial.zh-Hans.md), [channel contract](docs/wechat.md) |
| Technical SEO | [SEO skill](.agents/skills/next-token-seo/SKILL.md), [SEO contract](docs/seo-technical.md) |
| Episode import and site release | [README import commands](README.md), [release checks](docs/release-checklist.md), [maintenance](docs/site-maintenance.md) |
