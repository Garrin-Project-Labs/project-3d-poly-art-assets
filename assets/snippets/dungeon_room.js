import { createAssetById, animateAsset } from '../library/low_poly_asset_library.js';

export function createDungeonRoomInstance() {
  const asset = createAssetById('dungeon_room');
  asset.userData.defaultAnimation = 'idle';
  return asset;
}

export function animateDungeonRoom(asset, time, delta, animation = 'idle') {
  return animateAsset(asset, animation, time, delta);
}
