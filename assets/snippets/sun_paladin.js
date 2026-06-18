import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createSunPaladinInstance() {
  const asset = createAssetById('sun_paladin');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateSunPaladin(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
