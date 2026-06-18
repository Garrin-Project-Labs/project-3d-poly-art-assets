import test from 'node:test';
import assert from 'node:assert/strict';
import { createAssetById, getAssetAttachmentPoints } from '../assets/library/low_poly_asset_library.js';

const HELD_ITEMS = {
  knight_hero: [
    ['right_weapon_anchor', 'sword'],
    ['left_weapon_anchor', 'shield']
  ],
  mage_apprentice: [['right_weapon_anchor', 'staff']],
  forest_ranger: [['left_weapon_anchor', 'bow_string']],
  sun_paladin: [['right_weapon_anchor', 'warhammer_handle']],
  shadow_rogue: [
    ['left_weapon_anchor', 'left_dagger'],
    ['right_weapon_anchor', 'right_dagger']
  ]
};

test('hero fighting assets are children of reusable hand weapon anchors', () => {
  for (const [id, pairs] of Object.entries(HELD_ITEMS)) {
    const asset = createAssetById(id);
    for (const [anchorName, itemName] of pairs) {
      const weaponAnchor = asset.getObjectByName(anchorName);
      const heldItem = asset.getObjectByName(itemName);
      assert.ok(weaponAnchor, `${id} has ${anchorName}`);
      assert.ok(heldItem, `${id} has ${itemName}`);
      assert.equal(heldItem.parent, weaponAnchor, `${id}.${itemName} is attached to ${anchorName}`);
    }
  }
});

test('hero hand attachment metadata resolves to hand anchors, not loose arm centers', () => {
  for (const id of Object.keys(HELD_ITEMS)) {
    const asset = createAssetById(id);
    const attachments = getAssetAttachmentPoints(asset);
    const leftHand = asset.getObjectByName('left_hand_anchor').getWorldPosition(asset.position.clone());
    const rightHand = asset.getObjectByName('right_hand_anchor').getWorldPosition(asset.position.clone());
    assertCloseVector(attachments.leftHand, leftHand, `${id}.leftHand`);
    assertCloseVector(attachments.rightHand, rightHand, `${id}.rightHand`);
  }
});

function assertCloseVector(actual, expected, label) {
  for (const axis of ['x', 'y', 'z']) {
    assert.ok(Math.abs(actual[axis] - expected[axis]) < 1e-9, `${label}.${axis} uses anchor world position`);
  }
}
