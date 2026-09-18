---
entityType: product
entity: rodin
locale: en
slot: wiki
updatedAt: '2026-09-18'
seoTitle: 'Rodin (Hyper3D): text and image to 3D model generation | Next Token Wiki'
seoDescription: 'What Hyper3D Rodin does, its Gen-2.5 generation levels, export formats, credit-based pricing, API access, and how the Weekly show used it through MCP.'
---

## What Rodin is

Rodin is the flagship product of Hyper3D, used to turn text descriptions, photos, sketches, or multi-view reference images into complete 3D models. The official site states that the Hyper3D AI platform comes from Deemos Corporation and that Rodin is its core technology: a single pass produces geometry, mesh, UV mapping, textures, and materials ready for games, 3D printing, animation, e-commerce, and AR/VR pipelines. The current model is Gen-2.5, with five generation-effort levels from Extreme-Low to Extreme-High that trade generation time against detail. The entry point is the [official website](https://www.rodin3ds.com/).

## Usage and boundaries

Rodin targets creators who need 3D assets without deep expertise in traditional tools like Blender or Maya. Its officially described capabilities include:

- Generation: text-to-3D and image-to-3D with up to five multi-view reference images — the first image drives materials, the rest refine the shape.
- Control: 3D ControlNet steers structure with bounding boxes, voxels, or point clouds; partial editing, model splitting, and per-region retries are supported.
- Delivery: raw triangle meshes or quad topology, custom polygon counts, HD PBR textures, and export to GLB, FBX, OBJ, STL, and USDZ.
- Pricing model: accounts are free, generation and iteration cost nothing, and credits are only spent when you confirm and download a result. Tiers and quotas are on the [official pricing guide](https://www.rodin3ds.com/pricing).
- Developers: the site mentions a Business-plan API; sibling products are ChatAvatar for 3D characters and OmniCraft for asset preparation.

Boundaries: the official site notes that AI output may still need retopology, rigging, scaling, or material tweaks before professional production. Capabilities and tiers change with versions, so the official pages are authoritative.

## Discussion in the show

In Weekly #002's chapter "从代码到实物：3D 打印带来的创作空间" (from code to physical objects, in the Chinese transcript), Xiangyang Qiaomu [shared that he generated an Optimus Prime model through Rodin's MCP without ever opening the Rodin website — the agent handled the whole flow](/weekly/002/transcript#quote-ea06018d7768a63f9a08), and Yang Pan followed up that a 3D printer would let him print it. This is a participant's firsthand account; the official documentation is authoritative for MCP integrations. See the [episode 002 chapter](/weekly/002/transcript#chapter-28); an English transcript is not available.

## Frequently asked questions

### What is Rodin, and how do Hyper3D and Deemos relate?

Rodin is the flagship 3D generation product of the Hyper3D platform, which the official site attributes to Deemos Corporation. "Hyper3D Rodin" and "Rodin AI" refer to the same product. See the [official website](https://www.rodin3ds.com/).

### Where is the Rodin website?

The official site is [rodin3ds.com](https://www.rodin3ds.com/), with entry points for Rodin, ChatAvatar, and OmniCraft, plus pricing and guides.

### How much does Rodin cost?

Registration is free, and generating or retrying models costs nothing; credits are only spent when you confirm and download a result. Paid subscriptions add larger quotas and features. Current tiers are on the [official pricing guide](https://www.rodin3ds.com/pricing).

### Does Rodin have an API?

The official site mentions a Business-plan API for automating the generation loop from your own code; developer entry points are on the official website. A show participant also described letting an agent call Rodin through MCP — that is personal experience, and the official documentation is authoritative for integrations.

### Which formats can Rodin export?

GLB, FBX, OBJ, STL, and USDZ, with quad topology, custom polygon counts, and HD PBR textures for direct use in game engines, slicers, or storefronts. Details are on the [official website](https://www.rodin3ds.com/).

### Is Rodin related to the sculptor Rodin?

No. The 3D generation product is named after the Hyper3D/Deemos product line. Search results about the Musée Rodin or The Thinker belong to the French sculptor Auguste Rodin and have nothing to do with this product.

## Sources

- [Rodin (Hyper3D) official website](https://www.rodin3ds.com/)
- [Rodin pricing guide](https://www.rodin3ds.com/pricing)
