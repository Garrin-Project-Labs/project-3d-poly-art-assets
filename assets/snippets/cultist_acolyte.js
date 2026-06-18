import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createCultistAcolyteInstance() {
  const asset = createAssetById('cultist_acolyte');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateCultistAcolyte(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
