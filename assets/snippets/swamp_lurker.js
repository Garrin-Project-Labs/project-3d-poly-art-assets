import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createSwampLurkerInstance() {
  const asset = createAssetById('swamp_lurker');
  asset.userData.defaultAnimation = 'hop';
  return asset;
}

export function animateSwampLurker(asset, time, delta, animation = 'hop') {
  return animateAsset(asset, animation, time, delta);
}
