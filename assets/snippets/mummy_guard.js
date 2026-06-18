import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createMummyGuardInstance() {
  const asset = createAssetById('mummy_guard');
  asset.userData.defaultAnimation = 'attack';
  return asset;
}

export function animateMummyGuard(asset, time, delta, animation = 'attack') {
  return animateAsset(asset, animation, time, delta);
}
