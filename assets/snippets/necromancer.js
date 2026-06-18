import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createNecromancerInstance() {
  const asset = createAssetById('necromancer');
  asset.userData.defaultAnimation = 'cast';
  return asset;
}

export function animateNecromancer(asset, time, delta, animation = 'cast') {
  return animateAsset(asset, animation, time, delta);
}
