import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createCaveTrollInstance() {
  const asset = createAssetById('cave_troll');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateCaveTroll(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
