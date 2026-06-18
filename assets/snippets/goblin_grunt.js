import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createGoblinGruntInstance() {
  const asset = createAssetById('goblin_grunt');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateGoblinGrunt(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
