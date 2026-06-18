import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
  ASSET_CATALOG,
  EQUIPMENT_CATALOG,
  createAssetById,
  createEquipmentById
} from '../assets/library/low_poly_asset_library.js';

const VARIANTS = ['healer_adept', 'necromancer', 'barbarian', 'druid'];
const EQUIPMENT_IDS = ['longsword', 'kite_shield', 'mage_staff', 'ranger_bow', 'warhammer', 'dagger', 'healing_staff', 'skull_staff', 'battle_axe', 'druid_staff'];

test('new hero variants use the standard rig and expected animation roles', () => {
  for (const id of VARIANTS) {
    const meta = ASSET_CATALOG.find(item => item.id === id);
    assert.ok(meta, `${id} appears in ASSET_CATALOG`);
    assert.equal(meta.type, 'hero');
    const asset = createAssetById(id);
    assert.equal(asset.userData.rig, 'standard_hero_v1');
    assert.ok(asset.getObjectByName('right_weapon_anchor'), `${id} has a right weapon anchor`);
  }
  assert.ok(ASSET_CATALOG.find(item => item.id === 'barbarian').animations.includes('attack'));
  for (const id of ['healer_adept', 'necromancer', 'druid']) {
    assert.ok(ASSET_CATALOG.find(item => item.id === id).animations.includes('cast'), `${id} casts`);
    assert.ok(createAssetById(id).getObjectByName('floating_spell_orb'), `${id} has cast VFX`);
  }
});

test('reusable equipment catalog creates attachable THREE groups', () => {
  assert.deepEqual(EQUIPMENT_CATALOG.map(item => item.id), EQUIPMENT_IDS);
  for (const id of EQUIPMENT_IDS) {
    const equipment = createEquipmentById(id);
    assert.ok(equipment instanceof THREE.Group, `${id} is a group`);
    assert.equal(equipment.userData.equipmentId, id);
    assert.equal(equipment.userData.isEquipment, true);
    assert.ok(equipment.children.length > 0, `${id} has visible parts`);
  }
});
