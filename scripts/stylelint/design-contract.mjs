import stylelint from 'stylelint';
import selectorParser from 'postcss-selector-parser';
import { resolveNestedSelector } from '@csstools/selector-resolve-nested';

const ruleName = 'next-token/design-contract';
const messages = stylelint.utils.ruleMessages(ruleName, {
  order: 'Declare the canonical layer order before any layer block.',
  unknownLayer: 'Use a layer from the canonical design-system order.',
  layer: 'Place declarations inside an explicit design-system @layer.',
  role: 'Shared heading typography belongs to src/styles/typography.css.',
  h2: 'H2 leading must reference var(--section-heading-leading).',
  important: 'Do not use !important to override typography or layout.',
});
const typography = new Set(['font', 'font-family', 'font-size', 'line-height', 'letter-spacing']);
const sharedRole = /^heading-(?:section-(?:display|content|compact)|follow-display|reading-title)$/;

// Only the subject (rightmost compound) receives the declarations. Ancestors,
// descendants in :has(), and exclusions in :not() do not own this typography.
function targets(selector, predicate) {
  const lastCombinator = selector.nodes.findLastIndex(node => node.type === 'combinator');
  return selector.nodes.slice(lastCombinator + 1).some(node =>
    predicate(node) || (node.type === 'pseudo' && [':is', ':where', ':global'].includes(node.value) &&
      node.nodes?.some(branch => targets(branch, predicate))));
}
function resolvedSelector(ancestors) {
  const rules = ancestors.filter(node => node.type === 'rule').reverse();
  let resolved;
  for (const rule of rules) {
    const parsed = selectorParser().astSync(rule.selector);
    resolved = resolved ? resolveNestedSelector(parsed, resolved) : parsed;
  }
  return resolved;
}

export default stylelint.createPlugin(ruleName, enabled => (root, result) => {
  if (!enabled) return;
  let firstLayer;
  root.walkAtRules('layer', node => {
    firstLayer ??= node;
    if (node.nodes && !['reset', 'tokens', 'base', 'layouts', 'components', 'utilities', 'overrides'].includes(node.params.trim())) {
      stylelint.utils.report({ ruleName, result, node, message: messages.unknownLayer });
    }
  });
  if (firstLayer && (firstLayer.nodes || firstLayer.params.replace(/\s/g, '') !== 'reset,tokens,base,layouts,components,utilities,overrides')) {
    stylelint.utils.report({ ruleName, result, node: firstLayer, message: messages.order });
  }
  root.walkDecls(decl => {
    const ancestors = [];
    for (let node = decl.parent; node; node = node.parent) ancestors.push(node);
    const report = key => stylelint.utils.report({ ruleName, result, node: decl, message: messages[key] });
    if (!ancestors.some(node => node.type === 'atrule' && node.name === 'layer')) report('layer');
    const selector = resolvedSelector(ancestors);
    const ownsRole = selector?.nodes.some(branch => targets(branch, node => node.type === 'class' && sharedRole.test(node.value)));
    const ownsH2 = selector?.nodes.some(branch => targets(branch, node => node.type === 'tag' && node.value.toLowerCase() === 'h2'));
    const file = decl.source?.input.file?.replaceAll('\\', '/') ?? '';
    if (ownsRole && typography.has(decl.prop) && !file.endsWith('/src/styles/typography.css')) report('role');
    if (ownsH2 && (decl.prop === 'line-height' || decl.prop === 'font') &&
        !(decl.prop === 'line-height' && decl.value === 'var(--section-heading-leading)')) report('h2');
    if (decl.important && !['animation-duration', 'animation-iteration-count', 'transition-duration'].includes(decl.prop)) report('important');
  });
});
