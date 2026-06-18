import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createKoboldSpearmanInstance() {
  const asset = createAssetById('kobold_spearman');
  asset.userData.defaultAnimation = 'attack';
  return asset;
}

export function animateKoboldSpearman(asset, time, delta, animation = 'attack') {
  return animateAsset(asset, animation, time, delta);
}
