import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createMushroomImpInstance() {
  const asset = createAssetById('mushroom_imp');
  asset.userData.defaultAnimation = 'hop';
  return asset;
}

export function animateMushroomImp(asset, time, delta, animation = 'hop') {
  return animateAsset(asset, animation, time, delta);
}
