import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createTimberHouseInstance() {
  const asset = createAssetById('timber_house');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateTimberHouse(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
