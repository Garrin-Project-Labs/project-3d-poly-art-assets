import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createCampfireInstance() {
  const asset = createAssetById('campfire');
  asset.userData.defaultAnimation = 'flame';
  return asset;
}

export function animateCampfire(asset, time, delta, animation = 'flame') {
  return animateAsset(asset, animation, time, delta);
}
