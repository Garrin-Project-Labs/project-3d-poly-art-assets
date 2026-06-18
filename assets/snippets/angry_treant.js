import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createAngryTreantInstance() {
  const asset = createAssetById('angry_treant');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateAngryTreant(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
