import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createTownBlacksmithInstance() {
  const asset = createAssetById('town_blacksmith');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateTownBlacksmith(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
