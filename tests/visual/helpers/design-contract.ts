/** Runs inside page.evaluate; read actual layout without changing page styles. */
export function designContractViolations() {
  const problems: string[] = [];
  if (document.documentElement.scrollWidth > innerWidth) problems.push('page overflow');
  const nav = document.querySelector('.nav.shell')!.getBoundingClientRect();
  for (const el of document.querySelectorAll('main .shell')) {
    const r = el.getBoundingClientRect();
    if (!r.width) continue;
    if (Math.abs(r.left - nav.left) > 1 || Math.abs(r.right - nav.right) > 1) problems.push(`shell: ${el.className}`);
  }
  for (const el of document.querySelectorAll('main h1, main h2, .heading-reading-title')) {
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    if (!r.width) continue;
    if (el.scrollWidth > el.clientWidth + 1) problems.push(`heading overflow: ${el.textContent?.slice(0,40)}`);
    if (el.tagName === 'H2' || el.classList.contains('heading-reading-title') || el.classList.contains('type-title')) {
      if (Math.abs(parseFloat(s.lineHeight) / parseFloat(s.fontSize) - 1.25) > .01) problems.push(`heading leading: ${el.className}`);
    }
  }
  const roles: Record<string, string> = {
    'heading-section-display': '--heading-section-display-size',
    'heading-section-content': '--heading-section-content-size',
    'heading-section-compact': '--heading-section-compact-size',
    'heading-follow-display': '--heading-follow-display-size',
  };
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  for (const [role, token] of Object.entries(roles)) for (const el of document.querySelectorAll(`.${role}`)) {
    const s = getComputedStyle(el);
    const value = s.getPropertyValue(token).trim();
    const expected = parseFloat(value) * rem;
    if (!value.endsWith('rem') || !Number.isFinite(expected) || Math.abs(parseFloat(s.fontSize) - expected) > .1) {
      problems.push(`role size: ${role} actual=${s.fontSize} expected=${expected}px token=${value}`);
    }
  }
  for (const el of document.querySelectorAll('.transcript-meta-actions a')) {
    const r = el.getBoundingClientRect(), parent = el.parentElement!.getBoundingClientRect();
    if (Math.abs(r.left-parent.left)>1 || Math.abs(r.right-parent.right)>1) problems.push('transcript action alignment');
  }
  return problems;
}
