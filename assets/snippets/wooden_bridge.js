import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createWoodenBridgeInstance() {
  const asset = createAssetById('wooden_bridge');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateWoodenBridge(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
