import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../worker/index.js';

test('HTTP upgrades and resolves legacy/slash redirects with the query intact', async () => {
  const seen = [];
  const env = { ASSETS: { async fetch(request) {
    seen.push(request.url);
    assert.equal(request.method, 'HEAD');
    assert.equal(request.redirect, 'manual');
    const url = new URL(request.url);
    if (url.pathname === '/products/claude-code/') return Response.redirect('https://nexttoken.tv/wiki/products/claude-code' + url.search, 301);
    return new Response(null);
  } } };
  const response = await worker.fetch(new Request('http://nexttoken.tv/products/claude-code/?utm_source=test'), env);
  assert.equal(response.status, 308);
  assert.equal(response.headers.get('Location'), 'https://nexttoken.tv/wiki/products/claude-code?utm_source=test');
  assert.equal(seen.length, 2);
});

test('HTTPS and local preview retain asset status, headers and request', async () => {
  for (const url of ['https://nexttoken.tv/missing', 'http://127.0.0.1:4176/', 'http://localhost:4176/']) {
    const request = new Request(url);
    const asset = new Response('Not found', { status: 404, headers: { 'X-Test': 'asset' } });
    const response = await worker.fetch(request, { ASSETS: { fetch: async (received) => { assert.equal(received, request); return asset; } } });
    assert.equal(response, asset);
  }
});

test('HTTP root and missing pages upgrade without changing the path or query', async () => {
  for (const path of ['/?a=1&a=2', '/missing?x=%2F']) {
    const response = await worker.fetch(new Request(`http://nexttoken.tv${path}`), { ASSETS: { fetch: async () => new Response(null, { status: 404 }) } });
    assert.equal(response.headers.get('Location'), `https://nexttoken.tv${path}`);
  }
});

test('asset redirect loops are bounded', async () => {
  const response = await worker.fetch(new Request('http://nexttoken.tv/a'), { ASSETS: { fetch: async (request) => Response.redirect(new URL(request.url).pathname === '/a' ? 'https://nexttoken.tv/b' : 'https://nexttoken.tv/a', 301) } });
  assert.equal(response.status, 508);
});
