import test from 'node:test';
import assert from 'node:assert/strict';
import { createAssetById } from '../assets/library/low_poly_asset_library.js';

const HERO_IDS = ['knight_hero', 'mage_apprentice', 'forest_ranger', 'sun_paladin', 'shadow_rogue'];
const REQUIRED_BASE_PARTS = ['left_leg', 'right_leg', 'hip_belt', 'torso', 'chest_inset', 'left_shoulder', 'right_shoulder', 'left_arm', 'right_arm', 'left_hand', 'right_hand', 'neck', 'head'];

test('core heroes share the standardized modular hero rig', () => {
  for (const id of HERO_IDS) {
    const asset = createAssetById(id);
    assert.equal(asset.userData.rig, 'standard_hero_v1', `${id} uses standard rig`);
    assert.equal(asset.userData.assetType, 'hero');
    for (const part of REQUIRED_BASE_PARTS) {
      assert.ok(asset.getObjectByName(part), `${id} includes shared base part ${part}`);
    }
    assert.ok(asset.userData.kit, `${id} declares class kit`);
  }
});

test('standardized heroes keep similar playable scale', () => {
  const heights = HERO_IDS.map(id => createAssetById(id).userData.gameplay.height);
  const min = Math.min(...heights);
  const max = Math.max(...heights);
  assert.ok(max - min < 0.7, `hero heights stay close: ${heights.join(', ')}`);
});
