import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createFrostSpriteInstance() {
  const asset = createAssetById('frost_sprite');
  asset.userData.defaultAnimation = 'cast';
  return asset;
}

export function animateFrostSprite(asset, time, delta, animation = 'cast') {
  return animateAsset(asset, animation, time, delta);
}
