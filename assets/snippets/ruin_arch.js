import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createRuinArchInstance() {
  const asset = createAssetById('ruin_arch');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateRuinArch(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
