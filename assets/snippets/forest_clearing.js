import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createForestClearingInstance() {
  const asset = createAssetById('forest_clearing');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateForestClearing(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
