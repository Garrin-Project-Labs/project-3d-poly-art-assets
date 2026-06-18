import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createBoneSkeletonInstance() {
  const asset = createAssetById('bone_skeleton');
  asset.userData.defaultAnimation = 'walk';
  return asset;
}

export function animateBoneSkeleton(asset, time, delta, animation = 'walk') {
  return animateAsset(asset, animation, time, delta);
}
