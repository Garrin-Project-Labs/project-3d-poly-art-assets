import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createIronGolemInstance() {
  const asset = createAssetById('iron_golem');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateIronGolem(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
