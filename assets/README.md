# 3D Poly Art Asset Pack

Reusable procedural low-poly assets for browser games using Three.js.

## Quick start

```html
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.165.0/build/three.module.js"
  }
}
</script>
<script type="module">
  import * as THREE from 'three';
  import { createAssetById, animateAsset, ASSET_CATALOG } from './assets/library/low_poly_asset_library.js';

  const knight = createAssetById('knight_hero');
  scene.add(knight);

  const clock = new THREE.Clock();
  function tick() {
    const delta = clock.getDelta();
    const time = clock.elapsedTime;
    animateAsset(knight, 'walk', time, delta);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
</script>
```

## API

- `ASSET_CATALOG` — metadata for every asset: id, name, type, role, supported animations, tags.
- `createAssetById(id)` — returns a ready-to-add `THREE.Group`.
- `createAssetPack(ids?, spacing?)` — returns a group containing many assets laid out in a grid.
- `getAssetMeta(id)` — returns metadata for one asset.
- `animateAsset(asset, animation, time, delta)` — applies simple procedural animation.

## Current asset families

- Heroes: knight, mage, ranger, paladin, rogue.
- Monsters: goblin, orc, slime, skeleton, mushroom imp, dire wolf, cave bat, ember whelp, spider, boar, bandit, cultist, ghost, treant, minotaur, troll, serpent, golem.
- NPCs: merchant, blacksmith, quest elder.
- Environment props/kits: pine tree, rocks, crate, campfire, ruin arch, forest clearing, dungeon room.

## Notes

These are deliberately lightweight procedural meshes, not exported GLB files yet. That makes them easy to import directly in Three.js prototypes and easy to modify in code. A later milestone should add GLB export/downloads once the visual language settles.
