import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ASSET_CATALOG,
  animateAsset,
  createAssetById,
  getAssetQualityMeta
} from '../assets/library/low_poly_asset_library.js';

const MONSTER_FAMILIES = {
  kobold_spearman: {
    rig: 'monster_humanoid_v1',
    family: 'humanoid',
    parts: ['torso', 'head', 'left_hand_anchor', 'right_weapon_anchor', 'monster_spear', 'spear_tip'],
    animation: 'attack'
  },
  mummy_guard: {
    rig: 'monster_humanoid_v1',
    family: 'humanoid',
    parts: ['torso', 'head', 'right_weapon_anchor', 'left_weapon_anchor', 'khopesh_blade', 'scarab_shield'],
    animation: 'attack'
  },
  harpy_screecher: {
    rig: 'monster_winged_v1',
    family: 'winged',
    parts: ['body', 'head', 'left_wing', 'right_wing', 'left_talon', 'right_talon'],
    animation: 'fly'
  },
  crystal_scarab: {
    rig: 'monster_segmented_v1',
    family: 'segmented',
    parts: ['segment_0', 'segment_1', 'head', 'back_crystal_large', 'mandible_left', 'mandible_right'],
    animation: 'walk'
  },
  swamp_lurker: {
    rig: 'monster_quadruped_v1',
    family: 'quadruped',
    parts: ['body', 'chest', 'head', 'front_left_leg', 'back_right_leg', 'moss_back'],
    animation: 'hop'
  },
  frost_sprite: {
    rig: 'monster_winged_v1',
    family: 'winged',
    parts: ['body', 'head', 'left_wing', 'right_wing', 'floating_spell_orb', 'ice_crown'],
    animation: 'cast'
  }
};

test('new monster families are cataloged and expose reusable rig metadata', () => {
  for (const [id, spec] of Object.entries(MONSTER_FAMILIES)) {
    const meta = ASSET_CATALOG.find(item => item.id === id);
    assert.ok(meta, `${id} appears in ASSET_CATALOG`);
    assert.equal(meta.type, 'monster');
    assert.ok(meta.animations.includes(spec.animation), `${id} supports ${spec.animation}`);

    const asset = createAssetById(id);
    assert.equal(asset.userData.rig, spec.rig);
    assert.equal(asset.userData.family, spec.family);
    for (const part of spec.parts) {
      assert.ok(asset.getObjectByName(part), `${id} has ${part}`);
    }
  }
});

test('new monster families animate with finite transforms and truthful +Z readiness metadata', () => {
  for (const [id, spec] of Object.entries(MONSTER_FAMILIES)) {
    const asset = createAssetById(id);
    animateAsset(asset, spec.animation, 1.25, 1 / 60);
    asset.updateMatrixWorld(true);
    asset.traverse(obj => {
      assert.ok(Number.isFinite(obj.position.x), `${id}:${obj.name}:position.x finite`);
      assert.ok(Number.isFinite(obj.rotation.z), `${id}:${obj.name}:rotation.z finite`);
      assert.ok(Number.isFinite(obj.scale.y), `${id}:${obj.name}:scale.y finite`);
      assert.ok(Number.isFinite(obj.matrixWorld.elements[0]), `${id}:${obj.name}:matrixWorld finite`);
    });
    assert.equal(getAssetQualityMeta(asset).forwardAxis, '+Z');
  }
});

test('humanoid monster weapons are nested under reusable weapon anchors', () => {
  const kobold = createAssetById('kobold_spearman');
  assert.ok(isDescendantOf(kobold.getObjectByName('spear_tip'), kobold.getObjectByName('right_weapon_anchor')));

  const mummy = createAssetById('mummy_guard');
  assert.ok(isDescendantOf(mummy.getObjectByName('khopesh_blade'), mummy.getObjectByName('right_weapon_anchor')));
  assert.ok(isDescendantOf(mummy.getObjectByName('scarab_shield'), mummy.getObjectByName('left_weapon_anchor')));
});

function isDescendantOf(child, expectedAncestor) {
  assert.ok(child, 'child exists');
  assert.ok(expectedAncestor, 'ancestor exists');
  for (let current = child.parent; current; current = current.parent) {
    if (current === expectedAncestor) return true;
  }
  return false;
}
