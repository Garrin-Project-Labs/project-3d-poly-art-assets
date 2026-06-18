# Asset Readiness Contract

This is the checklist for making a procedural asset feel safe to import into another Three.js project.

## Game-ready contract

Every catalog asset should provide:

- Stable `id`, `name`, `type`, `role`, `tags`, and supported `animations` in `ASSET_CATALOG`.
- A `THREE.Group` factory via `createAssetById(id)`.
- Consistent orientation: local +Z is the visual/gameplay forward direction.
- Ground-friendly origin: assets sit on or near world Y=0 after creation.
- Finite gameplay metadata: bounds, size, center, radius, height, ground offset.
- Quality metadata: mesh count, triangle count, material count, named part count, readiness tier.
- Attachment points for gameplay/VFX: `root`, `overhead`, `center`, `front`, and type-specific points.
- Safe animation behavior: unsupported/global preview animations should not throw or produce invalid transforms.
- Predictable part names for common overrides: `head`, `body`/`torso`, arms, weapon handles, wings, flame/core pieces.

## Attachment point expectations

All assets:

- `root` — `{ x: 0, y: 0, z: 0 }`
- `center` — center of measured bounds
- `overhead` — above the top of measured bounds, useful for labels/selection rings
- `front` — at the front edge of the measured radius, useful for attacks/spawns

Humanoid heroes, monsters, and NPCs should also expose, when reasonable:

- `head`
- `chest`
- `leftHand`
- `rightHand`
- `weapon`
- `vfx`

Environment assets should expose:

- `entry`
- `exit`
- `top`

## Quality tiers

- `prototype` — usable in tests/catalog, needs visual polish.
- `game-ready` — coherent silhouette, scale, bounds, attachments, and animation behavior.
- `hero` — flagship model with extra polish and stronger silhouette.

Current target: move core heroes/monsters from `prototype` toward `game-ready`. Heroes now share `standard_hero_v1`, a single consistent humanoid base with class-specific gear kits layered on top.

## To-do

- [x] Define asset-readiness contract.
- [x] Add attachment point metadata.
- [x] Add quality metadata.
- [x] Add tests for readiness metadata.
- [ ] Add readiness badges to catalog cards.
- [x] Tighten polygons on core heroes with `standard_hero_v1`: knight, mage, ranger, paladin, rogue.
- [ ] Tighten polygons on core monsters: goblin, orc, skeleton, slime, wolf.
- [ ] Promote polished assets to `game-ready` tier.
- [ ] Add GLB/export path after the visual language stabilizes.
