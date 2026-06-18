# Asset Pack Roadmap

Goal: make the assets easy for another Three.js project to import, preview, and animate.

## Current status

- Browser-ready ES module exists: `assets/library/low_poly_asset_library.js`.
- Public catalog exists: `assets/catalog/`.
- Assets are procedural `THREE.Group` objects with metadata and simple procedural animations.
- These are usable now by importing `createAssetById()` and `animateAsset()`.

## To-do list

### 1. Package usability

- [x] Export stable `ASSET_CATALOG` metadata.
- [x] Export `createAssetById(id)` factory.
- [x] Export `animateAsset(asset, animation, time, delta)` helper.
- [x] Add `assets/README.md` quick-start docs.
- [ ] Add per-asset detail pages with copy-paste import snippets.
- [x] Add downloadable source snippets per asset.
- [ ] Add GLB export/download pipeline once designs stabilize.

### 2. Animation readiness

- [x] Add generic idle, walk, jump/hop, attack, cast, fly, wave, work, flame animations.
- [ ] Split animation helpers into per-family controllers.
- [x] Add preview controls to switch animations in the catalog.
- [ ] Add named attachment points for weapons, VFX, and hats.
- [x] Add automated tests for buildable assets and finite animation transforms.
- [ ] Add normalized bounds/grounding metadata for gameplay placement.

### 3. Asset volume

- [x] Heroes: knight, mage, ranger, paladin, rogue.
- [x] Monsters: goblin, orc, slime, skeleton, mushroom imp, dire wolf, cave bat, ember whelp.
- [x] NPCs: merchant, blacksmith, quest elder.
- [x] Environment: pine tree, rocks, crate, campfire, ruin arch, forest clearing, dungeon room.
- [x] Add 10 more monsters: spider, boar, bandit, cultist, ghost, treant, minotaur, troll, serpent, golem.
- [ ] Add 8 more environment pieces: bridge, fence, signpost, well, house, tower, cave mouth, portal.
- [ ] Add hero variants: healer, necromancer, barbarian, druid.

### 4. Demo integration

- [ ] Keep the walking demo stable; avoid experimental camera rewrites without feature flag.
- [ ] Add an optional spawn menu for trying catalog assets in the courtyard.
- [ ] Add collision/bounds metadata before using environment kits in gameplay.

## Recommended next slice

Add per-asset detail pages with copy-paste import snippets, then add the next environment batch. That will make the pack easier for other projects to consume without reading the full source file.
