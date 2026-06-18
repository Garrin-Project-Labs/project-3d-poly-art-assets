import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createGiantSpiderInstance() {
  const asset = createAssetById('giant_spider');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateGiantSpider(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
