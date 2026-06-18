import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createHealerAdeptInstance() {
  const asset = createAssetById('healer_adept');
  asset.userData.defaultAnimation = 'cast';
  return asset;
}

export function animateHealerAdept(asset, time, delta, animation = 'cast') {
  return animateAsset(asset, animation, time, delta);
}
