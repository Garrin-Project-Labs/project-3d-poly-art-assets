import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createDireWolfInstance() {
  const asset = createAssetById('dire_wolf');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateDireWolf(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
