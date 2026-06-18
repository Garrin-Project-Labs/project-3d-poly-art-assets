import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ASSET_CATALOG,
  createAssetById,
  getAssetAttachmentPoints,
  getAssetQualityMeta
} from '../assets/library/low_poly_asset_library.js';

test('every asset exposes game-readiness attachment points', () => {
  for (const item of ASSET_CATALOG) {
    const asset = createAssetById(item.id);
    const attachments = getAssetAttachmentPoints(asset);
    for (const key of ['root', 'center', 'overhead', 'front', 'head', 'chest', 'leftHand', 'rightHand', 'weapon', 'vfx']) {
      assertFiniteVector(attachments[key], `${item.id}.${key}`);
    }
    if (item.type === 'environment') {
      for (const key of ['entry', 'exit', 'top']) assertFiniteVector(attachments[key], `${item.id}.${key}`);
    }
  }
});

test('every asset exposes quality metadata for import decisions', () => {
  for (const item of ASSET_CATALOG) {
    const quality = getAssetQualityMeta(item.id);
    assert.equal(quality.tier, 'prototype');
    assert.equal(quality.forwardAxis, '+Z');
    assert.equal(quality.origin, 'grounded');
    assert.ok(quality.meshCount > 0, `${item.id} has meshes`);
    assert.ok(quality.triangleCount > 0, `${item.id} has triangles`);
    assert.ok(quality.materialCount > 0, `${item.id} has materials`);
    assert.ok(quality.namedPartCount >= quality.meshCount, `${item.id} has named parts`);
  }
});

function assertFiniteVector(vector, label) {
  assert.ok(vector, `${label} exists`);
  assert.ok(Number.isFinite(vector.x), `${label}.x finite`);
  assert.ok(Number.isFinite(vector.y), `${label}.y finite`);
  assert.ok(Number.isFinite(vector.z), `${label}.z finite`);
}
