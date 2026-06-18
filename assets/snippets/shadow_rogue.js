import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createShadowRogueInstance() {
  const asset = createAssetById('shadow_rogue');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateShadowRogue(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
