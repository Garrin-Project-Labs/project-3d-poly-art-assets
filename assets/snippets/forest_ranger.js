import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createForestRangerInstance() {
  const asset = createAssetById('forest_ranger');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateForestRanger(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
