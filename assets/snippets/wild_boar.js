import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createWildBoarInstance() {
  const asset = createAssetById('wild_boar');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateWildBoar(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
