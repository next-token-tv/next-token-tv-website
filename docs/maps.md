# Venue Maps

- Venue YAML owns the Apple Place ID and coordinates under `location.appleMap`. Localized pages share that location record.
- `VenueMap.astro` renders the official Apple Embed API with a light, muted-standard map and lazy loading. Addresses and external map links remain available outside the frame.
- Website locale `zh-Hans` maps to Apple's `zh-CN` parameter; English maps to `en-US`. The website locale itself remains `zh-Hans`.
- Only venues with supplied Apple location data render an embedded map. Missing places must not use a nearby business as a substitute.
- Set `PUBLIC_APPLE_MAPS_EMBED_TOKEN` at build time, locally in ignored `.env.local` or in the deployment build environment. This is a browser-visible, domain-restricted Embed API token, not a private signing key. A missing token leaves existing addresses and external links intact.
- The current token is restricted to `nexttoken.tv`; it does not authorize `127.0.0.1` previews. Live map rendering must be verified on an authorized origin before release acceptance.
- Beijing Zhongguancun, Shanghai Beiyang, and Xanadu Why Space Fuxi use the Place IDs and coordinates supplied in their respective Apple Maps share links.
- Partner detail pages and episode recording previews use the same venue metadata and map component.
- URL parameters follow Apple's public [Create a Map generator](https://developer.apple.com/maps/create-a-map/) and its public `/maps/index.js` implementation.
