/** Runs inside page.evaluate; keep dependencies inside the function. */
export function headingClippingViolations() {
  const problems: string[] = [];
  for (const heading of document.querySelectorAll('main h1, main h2, .heading-reading-title')) {
    const bounds = heading.getBoundingClientRect();
    if (!bounds.width || getComputedStyle(heading).visibility === 'hidden') continue;
    const label = heading.textContent?.trim().slice(0, 60);
    let textRects: Array<{top: number; bottom: number; left: number; right: number}> = [];
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.textContent?.trim()) continue;
      const range = document.createRange();
      range.selectNodeContents(node);
      textRects.push(...range.getClientRects());
    }
    for (let container: Element | null = heading; container; container = container.parentElement) {
      const style = getComputedStyle(container);
      // Compare viewport coordinates throughout, including scaled borders and padding boxes.
      const clipsY = ['hidden', 'clip'].includes(style.overflowY);
      const clipsX = ['hidden', 'clip'].includes(style.overflowX);
      const scrollsY = ['auto', 'scroll'].includes(style.overflowY);
      const scrollsX = ['auto', 'scroll'].includes(style.overflowX);
      if (!clipsX && !clipsY && !scrollsX && !scrollsY) continue;
      const box = container.getBoundingClientRect();
      const element = container as HTMLElement;
      const scaleX = element.offsetWidth ? box.width / element.offsetWidth : 1;
      const scaleY = element.offsetHeight ? box.height / element.offsetHeight : 1;
      const top = box.top + container.clientTop * scaleY;
      const left = box.left + container.clientLeft * scaleX;
      const bottom = top + container.clientHeight * scaleY;
      const right = left + container.clientWidth * scaleX;
      const clipped = textRects.some(rect =>
        (clipsY && (rect.top < top - 1 || rect.bottom > bottom + 1)) ||
        (clipsX && (rect.left < left - 1 || rect.right > right + 1)));
      const selfOverflow = container === heading &&
        ((clipsY && heading.scrollHeight > heading.clientHeight + 1) ||
         (clipsX && heading.scrollWidth > heading.clientWidth + 1));
      if (clipped || selfOverflow) {
        problems.push(`heading clipped by ${container.tagName}.${container.className}: ${label}`);
        break;
      }
      // An outer clip acts on this scrollport, not on the off-screen text inside
      // it. Project each scrollable axis into the port before walking outward.
      // Retain boundary points so an outer clip of the scrollport is still caught.
      const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
      if (scrollsX || scrollsY) textRects = textRects.map(rect => ({
        top: scrollsY ? clamp(rect.top, top, bottom) : rect.top,
        bottom: scrollsY ? clamp(rect.bottom, top, bottom) : rect.bottom,
        left: scrollsX ? clamp(rect.left, left, right) : rect.left,
        right: scrollsX ? clamp(rect.right, left, right) : rect.right,
      }));
    }
  }
  return problems;
}
