import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createDruidInstance() {
  const asset = createAssetById('druid');
  asset.userData.defaultAnimation = 'cast';
  return asset;
}

export function animateDruid(asset, time, delta, animation = 'cast') {
  return animateAsset(asset, animation, time, delta);
}
