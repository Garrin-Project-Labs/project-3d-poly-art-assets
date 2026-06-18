import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { ASSET_CATALOG } from '../assets/library/low_poly_asset_library.js';

test('every catalog asset has a downloadable snippet linked from the catalog template', async () => {
  const catalogHtml = await readFile(new URL('../assets/catalog/index.html', import.meta.url), 'utf8');
  assert.match(catalogHtml, /href="\.\.\/snippets\/\$\{item\.id\}\.js" download/);

  for (const item of ASSET_CATALOG) {
    const snippetUrl = new URL(`../assets/snippets/${item.id}.js`, import.meta.url);
    await access(snippetUrl, constants.R_OK);
    const snippet = await readFile(snippetUrl, 'utf8');
    assert.match(snippet, new RegExp(`createAssetById\\('${item.id}'\\)`));
    assert.match(snippet, /animateAsset\(asset, animation, time, delta\)/);
  }
});
