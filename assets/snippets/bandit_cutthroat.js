import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createBanditCutthroatInstance() {
  const asset = createAssetById('bandit_cutthroat');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateBanditCutthroat(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
