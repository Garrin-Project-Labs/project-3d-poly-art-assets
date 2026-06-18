import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createCrystalScarabInstance() {
  const asset = createAssetById('crystal_scarab');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateCrystalScarab(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
