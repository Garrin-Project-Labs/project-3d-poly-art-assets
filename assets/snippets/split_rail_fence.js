import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createSplitRailFenceInstance() {
  const asset = createAssetById('split_rail_fence');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateSplitRailFence(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
