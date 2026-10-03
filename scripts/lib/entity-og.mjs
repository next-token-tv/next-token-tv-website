const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

export function entityCardHtml(card, { font, logo }) {
  const dark = card.collection === 'brands';
  const terminal = card.route.endsWith('/claude-code');
  return `<!doctype html><html lang="${card.locale}"><meta charset="utf-8"><style>
  @font-face{font-family:Display;src:url(data:font/ttf;base64,${font});font-weight:900}
  *{box-sizing:border-box}html{font-size:16px}body{margin:0;background:${dark ? '#111' : '#f1eee5'};color:${dark ? '#f1eee5' : '#111'};font-family:Arial,'PingFang SC',sans-serif}
  main{width:1200px;height:630px;padding:32px 56px 40px;position:relative}
  header{height:112px;display:flex;align-items:center;gap:22px}header img{width:112px;height:112px;object-fit:contain;margin-left:-8px}.signature{font-size:2rem;font-weight:650;line-height:1.4}.signature small{display:block;font-size:1.5rem;font-weight:500;opacity:.65}.domain{margin-left:auto;font-size:1.75rem;font-weight:600}
  .copy{position:absolute;top:188px;left:56px;right:56px;bottom:40px;display:flex;flex-direction:column;justify-content:center;gap:28px}
  h1{font-family:Display,'PingFang SC',sans-serif;font-size:9.5rem;font-weight:900;line-height:1;letter-spacing:0;margin:0;overflow-wrap:normal;max-width:${dark ? '1088' : '790'}px}
  p{font-size:2.75rem;line-height:1.22;font-weight:500;margin:0;max-width:1088px;white-space:normal;overflow-wrap:normal}
  .art{position:absolute;right:0;top:180px;width:236px;height:220px;background:#ff4b18;display:flex;align-items:center;justify-content:center}.art svg{width:166px;height:150px}.token{width:74px;height:74px;background:#111}.accent{position:absolute;right:56px;top:158px;width:52px;height:12px;background:#ff4b18}
  </style><main><header><img src="data:image/svg+xml;base64,${logo}" alt="Next Token"><div class="signature">词元之外<small>${card.locale === 'en' ? 'AI field notes' : 'AI 资料库'}</small></div><span class="domain">nexttoken.tv</span></header>
  ${dark ? '<div class="accent" aria-hidden="true"></div>' : `<div class="art" aria-hidden="true">${terminal ? '<svg viewBox="0 0 226 200" fill="none"><path d="M22 40 L84 100 L22 160 M114 160 H206" stroke="#111" stroke-width="22"/></svg>' : '<div class="token"></div>'}</div>`}
  <div class="copy"><h1>${escape(card.title)}</h1><p>${escape(card.subtitle)}</p></div></main></html>`;
}

// Runs in the rendering browser. Reject unreadable or clipped cards instead of
// silently truncating editorial copy or shrinking descriptions to caption size.
export async function fitEntityCard() {
  await document.fonts.ready;
  await Promise.all([...document.images].map(image => image.decode()));
  const title = document.querySelector('h1');
  const description = document.querySelector('p');
  const copy = document.querySelector('.copy');
  const art = document.querySelector('.art');
  const fitsTitle = () => title.scrollWidth <= title.clientWidth && title.getBoundingClientRect().height <= 250;
  let size = 152;
  while (!fitsTitle() && size > 72) { size -= 2; title.style.fontSize = `${size / 16}rem`; }
  if (!fitsTitle()) throw new Error(`Title needs editorial layout: ${title.textContent}`);
  // Descriptions use the full card width below any supporting artwork.
  if (art) copy.style.justifyContent = 'flex-start';
  const place = () => {
    const titleEnd = title.getBoundingClientRect().bottom;
    const gap = art ? Math.max(28, art.getBoundingClientRect().bottom + 24 - titleEnd) : 28;
    copy.style.gap = `${gap}px`;
  };
  place();
  for (let descSize = 44; description.getBoundingClientRect().bottom > 590 && descSize > 40;) {
    descSize -= 2; description.style.fontSize = `${descSize / 16}rem`; place();
  }
  if (description.getBoundingClientRect().bottom > 590 || description.scrollWidth > description.clientWidth) {
    throw new Error(`Add a shorter socialSummary: ${title.textContent} — ${description.textContent}`);
  }
  return { titleSize: size, descriptionSize: parseFloat(getComputedStyle(description).fontSize) };
}
