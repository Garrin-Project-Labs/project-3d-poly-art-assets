import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createWoodenCrateInstance() {
  const asset = createAssetById('wooden_crate');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateWoodenCrate(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
