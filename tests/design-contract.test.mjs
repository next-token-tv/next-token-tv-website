import test from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';
import plugin from '../scripts/stylelint/design-contract.mjs';
const order = '@layer reset, tokens, base, layouts, components, utilities, overrides;';
const wrap = css => `${order}@layer components {${css}}`;
async function warnings(code, astro = false) {
  const result = await stylelint.lint({ code, codeFilename: astro ? '/tmp/Fixture.astro' : '/tmp/fixture.css',
    ...(astro ? {customSyntax: 'postcss-html'} : {}),
    config: {plugins: [plugin], rules: {'next-token/design-contract': true}},
  });
  return result.results.flatMap(r => r.warnings);
}
test('component declarations require layers and deterministic layer order', async () => {
  assert.equal((await warnings('.card { padding: 1rem; }')).length, 1);
  assert.equal((await warnings('@layer components {.card {padding: 1rem;}}')).length, 1);
  assert.equal((await warnings(wrap('.card {padding: 1rem;}'))).length, 0);
  assert.equal((await warnings(`${order}@layer bypass {.card {padding: 1rem;}}`)).length, 1);
});
test('Astro scoped styles cannot bypass the contract', async () => {
  assert.equal((await warnings('<div>Hello</div><style>.card {padding: 1rem;}</style>', true)).length, 1);
  assert.equal((await warnings(`<div>Hello</div><style>${wrap('.card {padding: 1rem;}')}</style>`, true)).length, 0);
});
test('heading overrides and font shorthand are rejected', async () => {
  for (const css of ['.heading-section-content {font-size: 3rem;}', '.heading-reading-title {line-height: 1;}', '.hero h2 {line-height: 1.05;}', '.body :global(h2) {font: bold 2rem/1 sans-serif;}']) {
    assert.equal((await warnings(wrap(css))).length, 1, css);
  }
  assert.equal((await warnings(wrap('h2 {line-height: var(--section-heading-leading);}'))).length, 0);
});
test('important cannot evade typography or geometry while reduced motion works', async () => {
  assert.equal((await warnings(wrap('.card {width: 100vw !important;}'))).length, 1);
  assert.equal((await warnings(wrap('@media(prefers-reduced-motion: reduce){*{animation-duration: .01ms !important;}}'))).length, 0);
});

test('nested selectors retain heading ownership through lists, media and multiple levels', async () => {
  for (const css of [
    'h2 { & {line-height: .8;} }',
    '.heading-section-content { & {font-size: 9rem;} }',
    '.card { h2 { @media (min-width: 40rem) { &:hover {line-height: 1;} } } }',
    '.other, h2 { &:is(:hover, :focus) {line-height: 1;} }',
    '.card { :is(h2, h3) {line-height: 1;} }',
    '.card { :global(h2) {font: bold 2rem/1 sans-serif;} }',
  ]) {
    assert.equal((await warnings(wrap(css))).length, 1, css);
    assert.equal((await warnings(`<style>${wrap(css)}</style>`, true)).length, 1, css);
  }
});
test('heading descendants, siblings and negative selectors are not heading overrides', async () => {
  for (const css of [
    '.heading-section-content a {font-size: .8rem;}',
    '.heading-section-content { a {font-size: .8rem;} }',
    'h2 { & > a {line-height: 1;} }',
    'h2 { & + p {line-height: 1;} }',
    ':not(h2) {line-height: 1;}',
    '.card:has(h2) {line-height: 1;}',
    '[data-kind="h2"] {line-height: 1;}',
  ]) assert.equal((await warnings(wrap(css))).length, 0, css);
});
