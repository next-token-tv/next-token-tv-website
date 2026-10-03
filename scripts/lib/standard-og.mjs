import { extname } from 'node:path';

const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

export function standardCardHtml(card, { font, photo }) {
  return `<html lang="${card.locale}"><style>
      @font-face{font-family:Display;src:url(data:font/ttf;base64,${font})}*{box-sizing:border-box}body{margin:0;background:#f1eee5;color:#111;font-family:Arial,'PingFang SC',sans-serif}main{height:39.375rem;padding:3rem 3.5rem;display:flex;flex-direction:column;border-top:1rem solid #ff4b0a}.brand{font-family:Display;font-size:1.7rem}.label{margin-top:2.8rem;color:#c83200;font-size:1.1rem;font-weight:bold;letter-spacing:.08em}.content{display:flex;gap:3rem;align-items:center;flex:1;min-height:0}.copy{flex:1;min-width:0}h1{font-family:Display,'PingFang SC',sans-serif;font-size:3.8rem;line-height:1.2;margin:1rem 0 1.5rem;white-space:pre-line;overflow-wrap:break-word}p{font-size:1.15rem;line-height:1.6;margin:0;color:#56534d}img{width:19rem;height:19rem;object-fit:cover}footer{font-size:.95rem;border-top:.0625rem solid #aaa;padding-top:1rem;display:flex;justify-content:space-between}
      </style><main><div class="brand">Next Token｜词元之外</div><div class="content"><div class="copy"><div class="label">${escape(card.label)}</div><h1>${escape(card.title)}</h1><p>${escape(card.subtitle)}</p></div>${photo ? `<img src="data:image/${extname(card.photo).slice(1)};base64,${photo.toString('base64')}">` : ''}</div><footer><span>nexttoken.tv</span><span>${escape(card.route)}</span></footer></main></html>`;
}

export const fitStandardCard = async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); const h = document.querySelector('h1'); while(h.getBoundingClientRect().height > 235 && parseFloat(getComputedStyle(h).fontSize) > 32) h.style.fontSize = `${parseFloat(getComputedStyle(h).fontSize) / 16 - 0.125}rem`; };
