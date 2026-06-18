import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
  ASSET_CATALOG,
  animateAsset,
  createAssetById,
  createAssetPack,
  getAssetMeta
} from '../assets/library/low_poly_asset_library.js';

test('catalog exports unique, buildable assets with metadata', () => {
  assert.ok(ASSET_CATALOG.length >= 30, 'expected a useful starter catalog');
  const ids = new Set();

  for (const item of ASSET_CATALOG) {
    assert.equal(typeof item.id, 'string');
    assert.equal(typeof item.name, 'string');
    assert.ok(['hero', 'monster', 'npc', 'environment'].includes(item.type), `${item.id} has valid type`);
    assert.ok(Array.isArray(item.animations) && item.animations.includes('idle'), `${item.id} supports idle`);
    assert.ok(Array.isArray(item.tags) && item.tags.length > 0, `${item.id} has tags`);
    assert.equal(ids.has(item.id), false, `${item.id} should be unique`);
    ids.add(item.id);

    const asset = createAssetById(item.id);
    assert.ok(asset instanceof THREE.Group, `${item.id} factory returns THREE.Group`);
    assert.equal(asset.userData.assetId, item.id);
    assert.equal(asset.userData.assetType, item.type);
    assert.equal(getAssetMeta(item.id), item);
    assert.ok(asset.children.length > 0, `${item.id} has visible parts`);
  }
});
