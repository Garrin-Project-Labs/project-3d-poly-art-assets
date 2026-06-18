import test from 'node:test';
import assert from 'node:assert/strict';
import { createAssetById } from '../assets/library/low_poly_asset_library.js';

const HERO_IDS = ['knight_hero', 'mage_apprentice', 'forest_ranger', 'sun_paladin', 'shadow_rogue'];

test('standard heroes do not use separate foot or boot blocks', () => {
  for (const id of HERO_IDS) {
    const asset = createAssetById(id);
    for (const part of ['left_boot', 'right_boot', 'left_foot', 'right_foot']) {
      assert.equal(asset.getObjectByName(part), undefined, `${id} has no separate ${part} block`);
    }
    for (const part of ['left_leg', 'right_leg']) {
      const leg = asset.getObjectByName(part);
      assert.ok(leg, `${id} has ${part}`);
      assert.equal(leg.geometry.type, 'CylinderGeometry', `${id}.${part} is the grounded limb shape`);
      assert.ok(leg.position.y <= 0.4, `${id}.${part} reaches toward the ground`);
    }
  }
});
