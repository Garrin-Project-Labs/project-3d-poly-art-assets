import test from 'node:test';
import assert from 'node:assert/strict';
import { ASSET_CATALOG, createAssetById, getAssetGameplayMeta } from '../assets/library/low_poly_asset_library.js';

test('every asset exposes finite gameplay bounds for placement and collisions', () => {
  for (const item of ASSET_CATALOG) {
    const asset = createAssetById(item.id);
    const gameplay = getAssetGameplayMeta(asset);
    assert.ok(gameplay, `${item.id} has gameplay metadata`);
    assertFinitePositive(gameplay.height, `${item.id}.height`);
    assertFinitePositive(gameplay.radius, `${item.id}.radius`);
    assert.ok(Number.isFinite(gameplay.groundOffset), `${item.id}.groundOffset finite`);
    for (const key of ['size', 'center']) assertFiniteVector(gameplay[key], `${item.id}.${key}`);
    for (const key of ['min', 'max']) assertFiniteVector(gameplay.bounds[key], `${item.id}.bounds.${key}`);
  }
});

test('gameplay metadata can be requested directly by asset id', () => {
  const meta = getAssetGameplayMeta('knight_hero');
  assert.ok(meta.height > 1, 'knight height is useful for camera/spawn placement');
  assert.ok(meta.radius > 0, 'knight has a collision-ish radius');
});

function assertFinitePositive(value, label) {
  assert.ok(Number.isFinite(value), `${label} finite`);
  assert.ok(value > 0, `${label} positive`);
}

function assertFiniteVector(vector, label) {
  assert.ok(Number.isFinite(vector.x), `${label}.x finite`);
  assert.ok(Number.isFinite(vector.y), `${label}.y finite`);
  assert.ok(Number.isFinite(vector.z), `${label}.z finite`);
}
