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

test('catalog presents project dependency import flow before downloads', async () => {
  const html = await readFile(new URL('../assets/catalog/index.html', import.meta.url), 'utf8');

  assert.match(html, /Import once, use anywhere/, 'catalog should explain dependency-first usage');
  assert.match(html, /Copy dependency snippet/, 'catalog should expose a copyable project import');
  assert.match(html, /getProjectDependencySnippet/, 'catalog should use the shared dependency snippet helper');
  assert.match(html, /Copy import/, 'asset cards should copy per-asset imports');
  assert.match(html, /Advanced: snippet file/, 'snippet downloads should remain as advanced fallback');
});

test('catalog links to detail pages and shows readiness badges', async () => {
  const html = await readFile(new URL('../assets/catalog/index.html', import.meta.url), 'utf8');

  assert.match(html, /getAssetQualityMeta/, 'catalog should read readiness metadata');
  assert.match(html, /class="readiness \$\{quality\.tier\}"/, 'catalog should render readiness tier badges');
  assert.match(html, /href="detail\.html\?id=\$\{item\.id\}"/, 'catalog should link each asset to a detail page');
});

test('asset detail page exposes storybook-style import and metadata panels', async () => {
  const html = await readFile(new URL('../assets/catalog/detail.html', import.meta.url), 'utf8');

  assert.match(html, /Copy import/, 'detail page should copy per-asset imports');
  assert.match(html, /Import readiness/, 'detail page should show quality metadata');
  assert.match(html, /Gameplay placement/, 'detail page should show gameplay bounds');
  assert.match(html, /Attachment points/, 'detail page should show attachment metadata');
  assert.match(html, /getAssetGameplayMeta/, 'detail page should use gameplay metadata API');
  assert.match(html, /getAssetAttachmentPoints/, 'detail page should use attachment metadata API');
});
