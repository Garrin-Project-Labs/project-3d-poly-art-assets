import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createRockClusterInstance() {
  const asset = createAssetById('rock_cluster');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateRockCluster(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
