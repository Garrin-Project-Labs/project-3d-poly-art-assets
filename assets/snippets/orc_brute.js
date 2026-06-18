import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createOrcBruteInstance() {
  const asset = createAssetById('orc_brute');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateOrcBrute(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
