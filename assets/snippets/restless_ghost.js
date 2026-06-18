import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createRestlessGhostInstance() {
  const asset = createAssetById('restless_ghost');
  asset.userData.defaultAnimation = 'fly';
  return asset;
}

export function animateRestlessGhost(asset, time, delta, animation = 'fly') {
  return animateAsset(asset, animation, time, delta);
}
