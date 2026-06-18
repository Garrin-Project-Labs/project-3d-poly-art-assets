import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createCaveMouthInstance() {
  const asset = createAssetById('cave_mouth');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateCaveMouth(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
