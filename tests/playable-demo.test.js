import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('playable demo exposes optional catalog asset spawning without replacing movement demo', async () => {
  const html = await readFile(new URL('../assets/prototypes/knight_hero/knight_hero_low_poly.html', import.meta.url), 'utf8');

  assert.match(html, /import \{ ASSET_CATALOG, animateAsset, createAssetById \}/);
  assert.match(html, /id="spawnSelect"/);
  assert.match(html, /id="spawnAsset"/);
  assert.match(html, /id="spawnAnimationSelect"/);
  assert.match(html, /id="clearSpawns"/);
  assert.match(html, /const demoAnimations = \['auto', 'idle', 'walk', 'jump', 'hop', 'attack', 'cast', 'fly', 'wave', 'work', 'flame'\]/);
  assert.match(html, /spawnedAssets\.push\(asset\)/);
  assert.match(html, /animateAsset\(asset, asset\.userData\.previewAnimation/);
});
