import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createArcanePortalInstance() {
  const asset = createAssetById('arcane_portal');
  asset.userData.defaultAnimation = 'flame';
  return asset;
}

export function animateArcanePortal(asset, time, delta, animation = 'flame') {
  return animateAsset(asset, animation, time, delta);
}
