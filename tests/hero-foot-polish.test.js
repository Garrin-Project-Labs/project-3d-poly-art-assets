import test from 'node:test';
import assert from 'node:assert/strict';
import { createAssetById } from '../assets/library/low_poly_asset_library.js';

const HERO_IDS = ['knight_hero', 'mage_apprentice', 'forest_ranger', 'sun_paladin', 'shadow_rogue'];

test('standard hero feet use small low-poly shoe tips instead of block boots', () => {
  for (const id of HERO_IDS) {
    const asset = createAssetById(id);
    assert.equal(asset.getObjectByName('left_boot'), undefined, `${id} no longer uses left_boot block`);
    assert.equal(asset.getObjectByName('right_boot'), undefined, `${id} no longer uses right_boot block`);
    for (const part of ['left_foot', 'right_foot']) {
      const foot = asset.getObjectByName(part);
      assert.ok(foot, `${id} has ${part}`);
      assert.equal(foot.geometry.type, 'ConeGeometry', `${id}.${part} is a pointed shoe-tip cone, not a box`);
      const box = foot.geometry.boundingBox ?? foot.geometry.computeBoundingBox() ?? foot.geometry.boundingBox;
      const size = box.getSize(asset.position.clone());
      assert.ok(size.z > size.x, `${id}.${part} points forward instead of reading as a square block`);
      assert.ok(size.y < size.x, `${id}.${part} is flattened vertically`);
    }
  }
});
