import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createCaveBatInstance() {
  const asset = createAssetById('cave_bat');
  asset.userData.defaultAnimation = 'fly';
  return asset;
}

export function animateCaveBat(asset, time, delta, animation = 'fly') {
  return animateAsset(asset, animation, time, delta);
}
