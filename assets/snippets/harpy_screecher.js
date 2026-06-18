import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createHarpyScreecherInstance() {
  const asset = createAssetById('harpy_screecher');
  asset.userData.defaultAnimation = 'fly';
  return asset;
}

export function animateHarpyScreecher(asset, time, delta, animation = 'fly') {
  return animateAsset(asset, animation, time, delta);
}
