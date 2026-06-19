import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ASSET_CATALOG,
  POLY_ART_ASSET_PACKAGE,
  createAssetById,
  getProjectDependencySnippet
} from '../assets/poly-art-assets.js';

test('public dependency entrypoint re-exports the asset library', () => {
  assert.ok(ASSET_CATALOG.length >= 30, 'entrypoint exposes catalog metadata');
  const asset = createAssetById('knight_hero');
  assert.equal(asset.userData.assetId, 'knight_hero');
});

test('dependency snippet imports the project by package alias', () => {
  assert.equal(POLY_ART_ASSET_PACKAGE.id, 'project-3d-poly-art-assets');
  assert.match(POLY_ART_ASSET_PACKAGE.moduleUrl, /assets\/poly-art-assets\.js$/);
  assert.equal(
    POLY_ART_ASSET_PACKAGE.importMap.imports['poly-art-assets'],
    POLY_ART_ASSET_PACKAGE.moduleUrl
  );

  const snippet = getProjectDependencySnippet('forest_ranger');
  assert.match(snippet, /"poly-art-assets"/);
  assert.match(snippet, /from 'poly-art-assets'/);
  assert.match(snippet, /createAssetById\('forest_ranger'\)/);
});
