import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createStoneSlimeInstance() {
  const asset = createAssetById('stone_slime');
  asset.userData.defaultAnimation = 'hop';
  return asset;
}

export function animateStoneSlime(asset, time, delta, animation = 'hop') {
  return animateAsset(asset, animation, time, delta);
}
