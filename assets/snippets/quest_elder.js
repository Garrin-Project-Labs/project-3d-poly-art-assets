import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createQuestElderInstance() {
  const asset = createAssetById('quest_elder');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateQuestElder(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
