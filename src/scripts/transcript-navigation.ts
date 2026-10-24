const sidebar = document.querySelector<HTMLElement>('.transcript-sidebar');
  const toc = sidebar?.querySelector<HTMLDetailsElement>('.transcript-toc');
  const list = toc?.querySelector<HTMLOListElement>('ol');
  const chapters = [...document.querySelectorAll<HTMLElement>('.transcript-chapter')];
  const links = [...(toc?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? [])];
  if (sidebar && toc && list && chapters.length) {
    let active = -1;
    let frame = 0;
    const reveal = () => {
      const link = links[active];
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
        reveal();
      }
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
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', resize);
    addEventListener('hashchange', schedule);
    toc.addEventListener('toggle', resize);
    new ResizeObserver(resize).observe(sidebar.querySelector('.transcript-search') ?? sidebar);
    document.fonts.ready.then(resize);
    resize();
  }
