import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('catalog preview page lazily creates and disposes WebGL renderers', async () => {
  const html = await readFile(new URL('../assets/catalog/index.html', import.meta.url), 'utf8');

  assert.match(html, /new IntersectionObserver/, 'catalog should observe preview visibility');
  assert.match(html, /preview\.start\(\)/, 'visible previews should start rendering');
  assert.match(html, /preview\.stop\(\)/, 'hidden previews should stop rendering');
  assert.match(html, /renderer\.dispose\(\)/, 'renderer resources should be disposed');
  assert.match(html, /renderer\.forceContextLoss\(\)/, 'WebGL contexts should be released');
});
