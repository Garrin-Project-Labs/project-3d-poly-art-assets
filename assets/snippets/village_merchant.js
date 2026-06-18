import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createVillageMerchantInstance() {
  const asset = createAssetById('village_merchant');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateVillageMerchant(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
