import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createVenomSerpentInstance() {
  const asset = createAssetById('venom_serpent');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateVenomSerpent(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
