import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createStoneWellInstance() {
  const asset = createAssetById('stone_well');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateStoneWell(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
