import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createPineTreeInstance() {
  const asset = createAssetById('pine_tree');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animatePineTree(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
