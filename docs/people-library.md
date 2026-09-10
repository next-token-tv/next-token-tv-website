# People library

- Person-to-brand/product relationships live only in `people/*.yaml` under `relations`, with a localized role, source URLs and verification date. Brand/product pages derive the reverse links from this same data. Catalog validation rejects missing targets and duplicate relationships.
- Relationships are independent of episode mentions. Only directly mentioned entities belong in `mentions`; company ownership or a person's affiliation does not create a transcript mention.
- David Heinemeier Hansson is the canonical name; DHH is an alias and `dhh` remains the stable route ID. Omarchy is a product associated with the Omacom Foundation and linked to its creator.
- Brand/product `sources` are factual references, separate from `official` links. Evoken currently uses a published founder interview as its source; no unverified corporate website is supplied.

- `src/content/data/people/*.yaml` is the person metadata authority. Hosts and people discussed in episodes share this collection and `/people/{id}/` routes; host memberships determine the co-host role.
- `/people/` and `/en/people/` list all people. Existing co-host profiles retain their presentation. Other profiles show biographies, source links and related episode chapters.
- Brand, product and people directories share `EntityDirectoryPage.astro`. People use the `co-host` and `mentioned` categories, with the filter persisted in `?type=`. Co-host membership takes precedence over mentions. Related episode counts are the deduplicated union of participation and mentions, including confirmed previews.
- A portrait is optional for a reference-library entry and required for co-hosts. Missing portraits are omitted, not fabricated.
- Episode `mentions.people` references stable person IDs. Transcript person links use longest-alias matching for every eligible occurrence. Co-hosts of the episode's show are excluded from automatic body-text links using host-membership data; their profiles, participant cards and speaker identities remain intact.
- Person aliases identify the person by name or a confirmed nickname, not a spoken description containing another entity. In Weekly #001, only “Ruby on Rails” links to the framework; “那个连，作者” remains plain text. DHH's authorship is recorded as a person-to-product relationship. Runta is a platform product, not a person alias.
- Weekly #001 includes the four co-hosts, Guanlan Dai, DHH, Chen Mian, Fuli Luo, Wang Le and AJ. The editor confirmed Wang Le as FoloToy's founder and AJ as WaytoAGI's initiator on 2026-09-09. Public sources are attached to their records.
- 栋哥 is excluded by editorial decision. Shiyi remains unresolved; names contained within media brands or technical terms do not create person references.
