let cleanup = () => {};

function initializeTranscriptNavigation() {
  cleanup();
  const sidebar = document.querySelector<HTMLElement>('.transcript-sidebar');
  const toc = sidebar?.querySelector<HTMLDetailsElement>('.transcript-toc');
  const list = toc?.querySelector<HTMLOListElement>('ol');
  const chapters = [...document.querySelectorAll<HTMLElement>('.transcript-chapter')];
  const links = [...(toc?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? [])];
  if (sidebar && toc && list && chapters.length) {
    const controller = new AbortController();
    const { signal } = controller;
    let active = -1;
    let frame = 0;
    const reveal = () => {
      const link = links[active];
      // The mobile sidebar is static but its list is still its own scroll
      // container; scrollTop is a no-op wherever the list cannot scroll.
      if (!link || !toc.open) return;
      const bounds = list.getBoundingClientRect();
      const item = link.getBoundingClientRect();
      if (item.top < bounds.top || item.bottom > bounds.bottom) {
        // Only move the directory's own scroll container, never the document.
        list.scrollTop += item.top - bounds.top - (bounds.height - item.height) / 2;
      }
    };
    const update = () => {
      frame = 0;
      const readingLine = parseFloat(getComputedStyle(chapters[0]!).scrollMarginTop) + 1;
      let index = 0;
      for (let i = 0; i < chapters.length; i++) {
        if (chapters[i]!.getBoundingClientRect().top <= readingLine) index = i;
        else break;
      }
      if (index !== active) {
        links[active]?.removeAttribute('aria-current');
        active = index;
        links[active]?.setAttribute('aria-current', 'location');
      }
      reveal();
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = () => {
      // Reserve room for search, legend and the directory heading on short screens.
      if (getComputedStyle(sidebar).position === 'sticky') {
        const top = parseFloat(getComputedStyle(sidebar).top);
        const controls = list.getBoundingClientRect().top - sidebar.getBoundingClientRect().top;
        list.style.maxHeight = `${Math.max(80, innerHeight - top - controls - 16) / parseFloat(getComputedStyle(document.documentElement).fontSize)}rem`;
      } else list.style.removeProperty('max-height');
      schedule();
      reveal();
    };
    addEventListener('scroll', schedule, { passive: true, signal });
    addEventListener('resize', resize, { signal });
    addEventListener('hashchange', schedule, { signal });
    addEventListener('pageshow', resize, { signal });
    toc.addEventListener('toggle', resize, { signal });
    const observer = new ResizeObserver(resize);
    observer.observe(sidebar.querySelector('.transcript-search') ?? sidebar);
    document.fonts.ready.then(() => { if (!signal.aborted) resize(); });
    cleanup = () => {
      controller.abort();
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    resize();
  }
}

initializeTranscriptNavigation();
document.addEventListener("astro:page-load", initializeTranscriptNavigation);
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    cleanup();
    document.removeEventListener("astro:page-load", initializeTranscriptNavigation);
  });
}
