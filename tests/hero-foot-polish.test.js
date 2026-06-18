import test from 'node:test';
import assert from 'node:assert/strict';
import { createAssetById } from '../assets/library/low_poly_asset_library.js';

const HERO_IDS = ['knight_hero', 'mage_apprentice', 'forest_ranger', 'sun_paladin', 'shadow_rogue'];

test('standard hero feet use tapered low-poly geometry instead of block boots', () => {
  for (const id of HERO_IDS) {
    const asset = createAssetById(id);
    assert.equal(asset.getObjectByName('left_boot'), undefined, `${id} no longer uses left_boot block`);
    assert.equal(asset.getObjectByName('right_boot'), undefined, `${id} no longer uses right_boot block`);
    for (const part of ['left_foot', 'right_foot']) {
      const foot = asset.getObjectByName(part);
      assert.ok(foot, `${id} has ${part}`);
      const xs = [];
      const topXs = [];
      const frontTopYs = [];
      const pos = foot.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        xs.push(Math.abs(x));
        if (y > 0) topXs.push(Math.abs(x));
        if (y > 0 && z > 0) frontTopYs.push(y);
      }
      assert.ok(Math.max(...topXs) < Math.max(...xs), `${id}.${part} narrows toward the top`);
      assert.ok(Math.max(...frontTopYs) < 0.09, `${id}.${part} slopes down at the toe`);
    }
  }
});
