import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createQuestSignpostInstance() {
  const asset = createAssetById('quest_signpost');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateQuestSignpost(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
