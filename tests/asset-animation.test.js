import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ASSET_CATALOG, animateAsset, createAssetById, createAssetPack } from '../assets/library/low_poly_asset_library.js';

const ALL_ANIMATIONS = ['idle', 'walk', 'jump', 'hop', 'attack', 'cast', 'fly', 'wave', 'work', 'flame'];

test('supported animations keep every asset renderable with finite transforms', () => {
  for (const item of ASSET_CATALOG) {
    const asset = createAssetById(item.id);
    for (const animation of item.animations) {
      animateAsset(asset, animation, 1.25, 1 / 60);
      assertFiniteObject3D(asset, `${item.id}:${animation}`);
    }
  }
});

test('animation helper tolerates global catalog preview animations for every asset', () => {
  for (const item of ASSET_CATALOG) {
    const asset = createAssetById(item.id);
    for (const animation of ALL_ANIMATIONS) {
      assert.doesNotThrow(() => animateAsset(asset, animation, 2.5, 1 / 30), `${item.id}:${animation}`);
      assertFiniteObject3D(asset, `${item.id}:${animation}`);
    }
  }
});

test('animations reset to base pose before applying the next animation', () => {
  const mage = createAssetById('mage_apprentice');
  const staffCrystal = mage.getObjectByName('staff_crystal');
  assert.ok(staffCrystal, 'mage has staff crystal');

  animateAsset(mage, 'cast', Math.PI / 10, 1 / 60);
  assert.notEqual(staffCrystal.scale.x, 1, 'cast changes crystal scale');

  animateAsset(mage, 'idle', 0, 1 / 60);
  assert.equal(staffCrystal.scale.x, 1, 'idle restores crystal scale through pose reset');
  assert.equal(staffCrystal.scale.y, 1, 'idle restores crystal y scale');
  assert.equal(staffCrystal.scale.z, 1, 'idle restores crystal z scale');
});

test('asset packs lay out requested assets as one reusable THREE.Group', () => {
  const ids = ['knight_hero', 'mage_apprentice', 'forest_ranger', 'iron_golem'];
  const pack = createAssetPack(ids, 3);

  assert.ok(pack instanceof THREE.Group);
  assert.equal(pack.name, 'poly_art_asset_pack');
  assert.equal(pack.children.length, ids.length);
  assert.deepEqual(pack.children.map(child => child.userData.assetId), ids);
  assert.deepEqual(pack.children.map(child => child.position.x), [0, 3, 6, 9]);
});

function assertFiniteObject3D(root, label) {
  root.updateMatrixWorld(true);
  root.traverse(obj => {
    assertFiniteVector(obj.position, `${label}:${obj.name}:position`);
    assertFiniteEuler(obj.rotation, `${label}:${obj.name}:rotation`);
    assertFiniteVector(obj.scale, `${label}:${obj.name}:scale`);
    assert.ok(Number.isFinite(obj.matrixWorld.elements[0]), `${label}:${obj.name}:matrixWorld finite`);
  });
}

function assertFiniteVector(vector, label) {
  assert.ok(Number.isFinite(vector.x), `${label}.x finite`);
  assert.ok(Number.isFinite(vector.y), `${label}.y finite`);
  assert.ok(Number.isFinite(vector.z), `${label}.z finite`);
}

function assertFiniteEuler(euler, label) {
  assert.ok(Number.isFinite(euler.x), `${label}.x finite`);
  assert.ok(Number.isFinite(euler.y), `${label}.y finite`);
  assert.ok(Number.isFinite(euler.z), `${label}.z finite`);
}
