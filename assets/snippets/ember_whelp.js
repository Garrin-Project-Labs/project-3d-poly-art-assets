import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createEmberWhelpInstance() {
  const asset = createAssetById('ember_whelp');
  asset.userData.defaultAnimation = 'fly';
  return asset;
}

export function animateEmberWhelp(asset, time, delta, animation = 'fly') {
  return animateAsset(asset, animation, time, delta);
}
