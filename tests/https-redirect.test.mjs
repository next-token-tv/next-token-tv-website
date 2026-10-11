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

test('production slash normalization becomes permanent without another asset request', async () => {
  for (const method of ['GET', 'HEAD']) {
    for (const path of ['/en/', '/en/wiki/brands/agi-bar/', '/weekly/002/transcript/']) {
      const request = new Request(`https://nexttoken.tv${path}?x=%2F&a=1&a=2`, { method });
      const location = path.slice(0, -1) + '?x=%2F&a=1&a=2';
      let calls = 0;
      const response = await worker.fetch(request, { ASSETS: { fetch: async (received) => {
        calls++;
        assert.equal(received, request);
        return new Response(null, { status: 307, headers: { Location: location, 'X-Test': 'asset' } });
      } } });
      assert.equal(response.status, 308);
      assert.equal(response.headers.get('Location'), location);
      assert.equal(response.headers.get('X-Test'), 'asset');
      assert.equal(calls, 1);
    }
  }
});

test('unrelated redirects, root, files, missing paths and local preview remain unchanged', async () => {
  for (const [url, status, location] of [
    ['https://nexttoken.tv/', 307, '/en'],
    ['https://nexttoken.tv/file.svg', 200, null],
    ['https://nexttoken.tv/missing/', 404, null],
    ['https://nexttoken.tv/products/minimax-h3/', 301, '/wiki/products/minimax'],
    ['https://nexttoken.tv/en/', 307, 'https://example.com/en'],
    ['https://nexttoken.tv/en/?a=1', 307, '/en?a=2'],
    ['https://nexttoken.tv/en/', 307, '/en#section'],
    ['https://nexttoken.tv/en/', 302, '/en'],
    ['http://localhost:4176/en/', 307, '/en'],
  ]) {
    const asset = new Response(null, { status, headers: location ? { Location: location } : {} });
    assert.equal(await worker.fetch(new Request(url), { ASSETS: { fetch: async () => asset } }), asset);
  }
});

test('Markdown exports expose localized HTML canonicals and preserve other headers', async () => {
  for (const host of ['https://nexttoken.tv', 'http://127.0.0.1:4197']) {
    for (const path of ['/blog/example.md', '/en/blog/example.md', '/weekly/005/transcript.md', '/en/weekly/005/transcript.md', '/weekly/001/article.md']) {
      for (const method of ['GET', 'HEAD']) {
        const asset = new Response(method === 'HEAD' ? null : '# Content', { headers: {
          'Content-Type': 'text/markdown; charset=utf-8', Link: '</llms.txt>; rel="describedby"', ETag: '"asset"',
        } });
        const response = await worker.fetch(new Request(`${host}${path}?utm_source=test`, { method }), { ASSETS: { fetch: async () => asset } });
        assert.equal(response.status, 200);
        assert.equal(response.headers.get('Link'), `</llms.txt>; rel="describedby", <https://nexttoken.tv${path.slice(0, -3)}>; rel="canonical"`);
        assert.equal(response.headers.get('ETag'), '"asset"');
        assert.equal(await response.text(), method === 'HEAD' ? '' : '# Content');
      }
    }
  }
});

test('missing, redirected and unrelated Markdown resources are not canonicalized', async () => {
  for (const [path, status, type] of [
    ['/blog/missing.md', 404, 'text/markdown'], ['/blog/moved.md', 301, 'text/markdown'],
    ['/blog/cached.md', 304, 'text/markdown'], ['/blog/example.md', 200, 'text/html'],
    ['/download.md', 200, 'text/markdown'],
  ]) {
    const asset = new Response(null, { status, headers: { 'Content-Type': type } });
    assert.equal(await worker.fetch(new Request(`https://nexttoken.tv${path}`), { ASSETS: { fetch: async () => asset } }), asset);
  }
});
