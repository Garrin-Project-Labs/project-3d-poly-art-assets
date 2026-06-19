# Project Dependency Imports

This project should feel like a reusable asset storybook, not a folder of files people have to download and manually place.

## Beginner path

1. Open the public asset catalog.
2. Copy the project dependency snippet once.
3. Paste it into a browser game project.
4. Copy an individual asset import from a catalog card.
5. Use the asset by id with `createAssetById(id)`.

The stable browser import is:

```js
import { createAssetById, animateAsset, ASSET_CATALOG } from 'poly-art-assets';
```

The project import map points `poly-art-assets` at:

```text
https://garrin-project-labs.github.io/project-3d-poly-art-assets/assets/poly-art-assets.js
```

## Why this shape

- Discord friends can think in terms of “add this asset to my project,” not “download a ZIP and fix paths.”
- The catalog behaves like a Storybook: browse, preview, copy/import.
- Projects stay current with the shared asset pack until they intentionally pin or copy it.
- Advanced users can still download individual snippet files from each card.

## Later engine-specific exporters

The dependency import path is the default for browser/Three.js projects. Later quests can add guided exporters for:

- Unity package/folder layout
- Godot scene/resource layout
- GLB/FBX bundles with textures and manifests

Those should be extra paths, not the beginner default.
