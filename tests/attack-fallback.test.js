import test from 'node:test';
import assert from 'node:assert/strict';
import { animateAsset, createAssetById } from '../assets/library/low_poly_asset_library.js';

test('attack animation lunges assets without arms or weapon handles', () => {
  const slime = createAssetById('stone_slime');
  const baseZ = slime.position.z;

  animateAsset(slime, 'attack', Math.PI / 20, 1 / 60);

  assert.ok(slime.position.z > baseZ, 'arm-less slime lunges forward on attack');
  assert.ok(slime.rotation.x < 0, 'arm-less slime leans into attack');
});

test('attack animation still uses weapon/arm motion when available', () => {
  const goblin = createAssetById('goblin_grunt');
  const baseZ = goblin.position.z;

  animateAsset(goblin, 'attack', Math.PI / 20, 1 / 60);

  assert.equal(goblin.position.z, baseZ, 'armed goblin does not need generic root lunge');
});
