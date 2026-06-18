import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createKnightHeroInstance() {
  const asset = createAssetById('knight_hero');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateKnightHero(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
