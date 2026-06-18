import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createMinotaurGuardInstance() {
  const asset = createAssetById('minotaur_guard');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateMinotaurGuard(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
