export * from './library/low_poly_asset_library.js';

export const POLY_ART_ASSET_PACKAGE = {
  id: 'project-3d-poly-art-assets',
  name: '3D Poly Art Assets',
  version: '0.1.0',
  homepage: 'https://garrin-project-labs.github.io/project-3d-poly-art-assets/',
  moduleUrl: 'https://garrin-project-labs.github.io/project-3d-poly-art-assets/assets/poly-art-assets.js',
  threeVersion: '0.165.0',
  importMap: {
    imports: {
      three: 'https://unpkg.com/three@0.165.0/build/three.module.js',
      'poly-art-assets': 'https://garrin-project-labs.github.io/project-3d-poly-art-assets/assets/poly-art-assets.js'
    }
  }
};

export function getProjectDependencySnippet(assetId = 'knight_hero') {
  return `<script type="importmap">
${JSON.stringify(POLY_ART_ASSET_PACKAGE.importMap, null, 2)}
</script>
<script type="module">
  import * as THREE from 'three';
  import { createAssetById, animateAsset } from 'poly-art-assets';

  const asset = createAssetById('${assetId}');
  scene.add(asset);

  // In your render loop:
  animateAsset(asset, 'idle', clock.elapsedTime, clock.getDelta());
</script>`;
}
