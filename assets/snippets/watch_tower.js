import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createWatchTowerInstance() {
  const asset = createAssetById('watch_tower');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateWatchTower(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
