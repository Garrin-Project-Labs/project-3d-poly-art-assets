import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createBarbarianInstance() {
  const asset = createAssetById('barbarian');
  asset.userData.defaultAnimation = 'attack';
  return asset;
}

export function animateBarbarian(asset, time, delta, animation = 'attack') {
  return animateAsset(asset, animation, time, delta);
}
