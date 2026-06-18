import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createMageApprenticeInstance() {
  const asset = createAssetById('mage_apprentice');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateMageApprentice(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
