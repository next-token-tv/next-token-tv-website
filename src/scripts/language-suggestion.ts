const storageKey = "next-token-language";
const suggestion = document.querySelector<HTMLElement>("[data-language-suggestion]");
const currentLanguage = suggestion?.dataset.currentLanguage;

function saveLanguage(language: string) {
  try {
    window.localStorage.setItem(storageKey, language);
  } catch {}
}

let preferredLanguage: string | null = null;
try {
  preferredLanguage = window.localStorage.getItem(storageKey);
} catch {}

if (preferredLanguage !== "zh-Hans" && preferredLanguage !== "en") {
  preferredLanguage = null;
  for (const language of navigator.languages?.length ? navigator.languages : [navigator.language]) {
    if (/^zh(?:-|$)/i.test(language)) { preferredLanguage = "zh-Hans"; break; }
    if (/^en(?:-|$)/i.test(language)) { preferredLanguage = "en"; break; }
  }
}

if (suggestion && preferredLanguage && preferredLanguage !== currentLanguage) {
  suggestion.hidden = false;
}

suggestion?.querySelector("[data-dismiss-language]")?.addEventListener("click", () => {
  if (currentLanguage) saveLanguage(currentLanguage);
  suggestion.hidden = true;
});

document.querySelectorAll<HTMLAnchorElement>("[data-language]").forEach((link) => {
  const target = new URL(link.href, window.location.href);
  if (target.pathname !== window.location.pathname) {
    target.search = window.location.search;
    target.hash = window.location.hash;
    link.href = target.href;
  }
  link.addEventListener("click", () => {
    const language = link.dataset.language;
    if (language === "zh-Hans" || language === "en") saveLanguage(language);
    if (suggestion) suggestion.hidden = true;
  });
});
