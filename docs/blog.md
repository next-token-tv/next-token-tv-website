# Blog

- Blog is organized by reader question, with independent `/blog/<slug>` and `/blog/<slug>.md` routes. An episode may have multiple posts; a post may draw on multiple episodes and independent research. A brief mention can seed a full article; episode airtime does not limit article scope.
- Chinese posts live in `src/content/prose/blog/<slug>.md`. Required fields: `title`, `description`, `locale: zh-Hans`, `episodes` (unique episode IDs), `status`, and `updatedAt`. Published posts also require `publishedAt`.
- Source episodes and their Chinese transcripts must be published; imported transcript sources must be committed. Episode-derived claims and quotes link to stable transcript paragraph anchors. External facts cite their own sources in the body or references; editorial analysis is not attributed to speakers. `episodes` links the episodes that inspired or informed the post, not the entirety of its evidence.
- Draft posts are available in local development with noindex. Production omits draft routes, exports, search entries and links. Trial drafts require editorial approval before publication. Deployment is a separate action.
- `/blog` is the Chinese channel. English navigation may link to it as Chinese content; no English translation or hreflang alternate is implied.
- Blog titles express the topic rather than reproduce the episode title. Existing `/weekly/NNN/article` pages remain separate and unchanged.
- Editorial style is defined in [博客编辑规范](blog-editorial.zh-Hans.md), the source of truth for narrative perspective, structure, case handling and citations.
- Use the repository skill `.agents/skills/next-token-blog/SKILL.md` for topic selection, writing and editorial checks.


- Blog RSS is `/blog/rss.xml`, linked in the footer and HTML autodiscovery. It includes full rendered articles with absolute links and only `published` posts, even in development. Article URLs are stable GUIDs; `publishedAt` sets the original publication date and `updatedAt` records edits. Static builds regenerate the feed with content changes; publish and deploy normally to update the live feed. An empty feed is valid while all posts are drafts.
- Episode RSS is generated at `/weekly/rss.xml` from published website episodes. Each item contains the episode title and summary, with its link and stable GUID pointing to the official `/weekly/{number}` page. The earliest known release or transcript publication date sets pubDate. Announcements are excluded. The show metadata `rssUrl` supplies the Weekly landing page subscription link and autodiscovery link. This feed has no audio enclosures. Blog and episode feeds update with each static build.

- `/blog/episodes` groups blog posts by published Weekly episode. `/blog/episodes/{number}` lists that episode’s related posts, using each post’s `episodes` metadata. Drafts remain visible only in local development. Transcript pages link to the aggregation page through one compact link; article lists are not rendered inside transcript headers.
