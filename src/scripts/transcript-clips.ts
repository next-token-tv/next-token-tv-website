import { timestampVideoUrl } from "../data/video-timestamps.mjs";
import "../styles/components/transcript-clip-tools.css";

type Track = {
  platform: "bilibili" | "youtube";
  href: string;
  times: Record<string, [number, number]>;
};
type SelectionRange = { first: number; last: number };

const strings = {
  en: {
    pick: "Select", pickLine: "Select this paragraph", pickTurn: (name: string) => `Select this turn by ${name}`,
    idle: "Select a clip range", count: (num: number) => `${num} ${num === 1 ? "paragraph" : "paragraphs"} selected`,
    duration: (seconds: number) => `about ${seconds} s`,
    hints: ["Choose a paragraph or a speaker’s turn.", "Choose an end point or preview now.", "Choose another paragraph or speaker to adjust the range."],
    copied: "Clip prompt copied.", manual: "The prompt is selected. Copy it manually.",
    videoLink: "Open at start", openOn: (label: string) => `Open at start on ${label}`, needsTiming: "Timing needs verification",
    bounds: (from: string, to: string) => `${from} to ${to} seconds`,
    timingFallback: "Find the start and end times using the transcript references.",
    request: "Edit the following Next Token Weekly excerpt into a clip. Preserve the speakers, meaning, and context. Start with an edit preview or a cut list.",
    excerpt: "Selected transcript", references: "Transcript references", episode: "Episode", chapter: "Chapter",
    start: "First paragraph", end: "Last paragraph", video: "Video timestamps", context: "Check context",
    skill: "If the Next Token Skill is installed, use it to check the surrounding conversation and sources. If you do not have the video, start with a cut list using the references above.",
    colon: ": ",
  },
  "zh-Hans": {
    pick: "选取", pickLine: "选取这段正文", pickTurn: (name: string) => `选取${name}的这轮发言`,
    idle: "选择切片范围", count: (num: number) => `已选 ${num} 段`, duration: (seconds: number) => `约 ${seconds} 秒`,
    hints: ["点正文选一段，点姓名选一轮发言。", "再点一处设为终点，或直接预览。", "点另一段正文或姓名可调整范围。"],
    copied: "已复制切片提示词。", manual: "已选中提示词，请手动复制。",
    videoLink: "打开起点", openOn: (label: string) => `在 ${label} 打开起点`, needsTiming: "需定位",
    bounds: (from: string, to: string) => `${from} 秒至 ${to} 秒`, timingFallback: "请对照逐字稿确认起止时间。",
    request: "请把以下 Next Token Weekly 发言剪成一条切片。保留说话人、原意和理解这段话所需的上下文。先给我剪辑预览或剪辑清单。",
    excerpt: "选中原文", references: "逐字稿引用", episode: "节目", chapter: "章节",
    start: "起始段落", end: "结束段落", video: "视频定位", context: "补查上下文",
    skill: "如已安装 Next Token Skill，请用它核对前后发言和出处。缺少源视频时，请先给出按上述引用定位的剪辑清单。",
    colon: "：",
  },
} as const;

function timecode(seconds: number, round: (value: number) => number) {
  const whole = round(seconds);
  return [Math.floor(whole / 3600), Math.floor(whole / 60) % 60, whole % 60]
    .map(part => String(part).padStart(2, "0")).join(":");
}

function paragraphText(paragraph: HTMLParagraphElement) {
  const copy = paragraph.cloneNode(true) as HTMLParagraphElement;
  copy.querySelectorAll("[data-clip-pick], [data-paragraph-copy], .transcript-paragraph-feedback, .transcript-playback")
    .forEach(node => node.remove());
  return copy.textContent?.trim() ?? "";
}

function pickButton(label: string) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "transcript-clip-pick";
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", label);
  return button;
}

function initializeClips(tools: HTMLElement, launch: HTMLButtonElement) {
  const page = tools.closest<HTMLElement>(".transcript-page")!;
  const body = page.querySelector<HTMLElement>(".transcript-body")!;
  const en = tools.dataset.clipLocale === "en";
  const locale = strings[en ? "en" : "zh-Hans"];
  const toolbar = tools.querySelector<HTMLElement>("[data-clip-toolbar]")!;
  const exit = tools.querySelector<HTMLButtonElement>("[data-clip-exit]")!;
  const reset = tools.querySelector<HTMLButtonElement>("[data-clip-reset]")!;
  const status = tools.querySelector<HTMLElement>("[data-clip-status]")!;
  const hint = tools.querySelector<HTMLElement>("[data-clip-hint]")!;
  const preview = tools.querySelector<HTMLButtonElement>("[data-clip-preview]")!;
  const dialog = tools.querySelector<HTMLDialogElement>("[data-clip-dialog]")!;
  const previewSummary = tools.querySelector<HTMLElement>("[data-clip-preview-summary]")!;
  const video = tools.querySelector<HTMLUListElement>("[data-clip-video]")!;
  const quotes = tools.querySelector<HTMLElement>("[data-clip-quotes]")!;
  const promptDetails = tools.querySelector<HTMLDetailsElement>("[data-clip-prompt-details]")!;
  const prompt = tools.querySelector<HTMLTextAreaElement>("#transcript-clip-prompt")!;
  const copy = tools.querySelector<HTMLButtonElement>("[data-clip-copy]")!;
  const copyStatus = tools.querySelector<HTMLElement>("[data-clip-copy-status]")!;
  const tracks = JSON.parse(tools.dataset.clipTracks ?? "[]") as Track[];
  const paragraphs = Array.from(body.querySelectorAll<HTMLParagraphElement>(".transcript-quote-paragraph[id]"), element => {
    const text = paragraphText(element);
    const button = pickButton(`${locale.pickLine}${locale.colon}${text.slice(0, 32)}`);
    button.dataset.clipPick = "";
    element.append(button);
    return { button, element, text };
  });
  const indices = new Map(paragraphs.map(({ element }, index) => [element, index]));
  const speakers = new Map(Array.from(body.querySelectorAll<HTMLElement>(".transcript-speaker")).flatMap(speaker => {
    const lines = speaker.closest(".transcript-turn")!.querySelectorAll<HTMLParagraphElement>(".transcript-quote-paragraph[id]");
    const first = indices.get(lines[0]!);
    const last = indices.get(lines[lines.length - 1]!);
    if (first === undefined || last === undefined) return [];
    const name = speaker.querySelector("strong")?.textContent?.trim() ?? "";
    const button = pickButton(`${locale.pickTurn(name)}${locale.colon}${paragraphs[first]!.text.slice(0, 32)}`);
    button.dataset.clipSpeaker = "";
    const hint = document.createElement("span");
    hint.className = "transcript-clip-pick-hint";
    hint.setAttribute("aria-hidden", "true");
    hint.dataset.pickLabel = locale.pick;
    button.append(hint);
    speaker.append(button);
    return [[button, { first, last, profile: speaker.querySelector<HTMLAnchorElement>("a") }]] as const;
  }));
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? location.href;
  const reference = (id: string) => {
    const url = new URL(canonical);
    url.hash = id;
    return url.href;
  };
  let selecting = false;
  let start: SelectionRange | null = null;
  let end: SelectionRange | null = null;
  let selected = paragraphs.slice(0, 0);

  function videoRanges(first: string, last: string) {
    return tracks.map(track => {
      const label = track.platform === "youtube" ? "YouTube" : en ? "Bilibili" : "B 站";
      const from = track.times[first]?.[0];
      const to = track.times[last]?.[1];
      if (from === undefined || to === undefined || !Number.isFinite(to) || to <= from) {
        return { label };
      }
      const href = timestampVideoUrl(track.platform, track.href, from);
      if (!href) return { label };
      return {
        label, href, duration: Math.ceil(to - from),
        time: `${timecode(from, Math.floor)}–${timecode(to, Math.ceil)}`,
        bounds: locale.bounds(from.toFixed(3), to.toFixed(3)),
      };
    });
  }

  function renderSelection() {
    for (const { element, button } of selected) {
      delete element.dataset.clipSelected;
      button.setAttribute("aria-pressed", "false");
    }
    const firstIndex = start ? Math.min(start.first, end?.first ?? start.first) : 0;
    const lastIndex = start ? Math.max(start.last, end?.last ?? start.last) : -1;
    selected = paragraphs.slice(firstIndex, lastIndex + 1);
    for (const { element, button } of selected) {
      element.dataset.clipSelected = "";
      button.setAttribute("aria-pressed", "true");
    }
    for (const [button, { first, last }] of speakers) {
      const state = first >= firstIndex && last <= lastIndex ? "true"
        : first <= lastIndex && last >= firstIndex ? "mixed" : "false";
      if (button.getAttribute("aria-pressed") !== state) button.setAttribute("aria-pressed", state);
    }

    const first = selected[0];
    const final = selected.at(-1);
    const duration = first && final && videoRanges(first.element.id, final.element.id).find(item => item.href)?.duration;
    status.textContent = first ? `${locale.count(selected.length)}${duration ? ` · ${locale.duration(duration)}` : ""}` : locale.idle;
    hint.textContent = locale.hints[start === null ? 0 : end === null ? 1 : 2];
    reset.hidden = !first;
    preview.disabled = !first;
  }

  function focusParagraph() {
    const near = paragraphs.find(({ element }) => {
      const { top, bottom } = element.getBoundingClientRect();
      return bottom > 80 && top < window.innerHeight - toolbar.offsetHeight - 24;
    });
    (near ?? paragraphs[0])?.button.focus();
  }

  function setMode(active: boolean) {
    selecting = active;
    start = end = null;
    launch.hidden = active;
    toolbar.hidden = !active;
    page.toggleAttribute("data-clip-selecting", active);
    for (const { button } of paragraphs) button.hidden = !active;
    for (const [button, { profile }] of speakers) {
      button.hidden = !active;
      if (profile) profile.inert = active;
    }
    renderSelection();
    if (active) focusParagraph();
    else launch.focus({ preventScroll: true });
  }

  launch.addEventListener("click", () => setMode(true));
  exit.addEventListener("click", () => setMode(false));
  reset.addEventListener("click", () => {
    start = end = null;
    renderSelection();
    focusParagraph();
  });

  body.addEventListener("click", event => {
    if (!selecting || !(event.target instanceof Element)) return;
    const speaker = event.target.closest<HTMLButtonElement>("[data-clip-speaker]");
    let range: SelectionRange | undefined = speaker ? speakers.get(speaker) : undefined;
    if (!range) {
      const control = event.target.closest("a,button");
      if (control && !control.matches("[data-clip-pick]")) return;
      if (!control && window.getSelection()?.isCollapsed === false) return;
      const row = event.target.closest<HTMLParagraphElement>(".transcript-quote-paragraph");
      const index = row ? indices.get(row) : undefined;
      if (index === undefined) return;
      range = { first: index, last: index };
    }
    if (start === null) start = range;
    else end = range;
    renderSelection();
  });

  preview.addEventListener("click", () => {
    const first = selected[0]?.element;
    const last = selected.at(-1)?.element;
    if (!first || !last) return;
    const ranges = videoRanges(first.id, last.id);
    const excerpt = selected.map(({ element, text }) => {
      const speaker = element.closest(".transcript-turn")?.querySelector(".transcript-speaker strong")?.textContent?.trim();
      const chapter = element.closest<HTMLElement>(".transcript-chapter");
      return { speaker, chapter, text };
    });
    previewSummary.textContent = status.textContent;
    quotes.replaceChildren(...excerpt.map(({ speaker, text }) => {
      const paragraph = document.createElement("p");
      const name = document.createElement("strong");
      name.textContent = speaker ? `${speaker}${locale.colon}` : "";
      paragraph.append(name, text);
      return paragraph;
    }));
    video.replaceChildren(...ranges.map(({ label, href, time }) => {
      const item = document.createElement("li");
      item.textContent = `${label} · ${time ?? locale.needsTiming}`;
      if (href) {
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = `${locale.videoLink} ↗`;
        link.setAttribute("aria-label", locale.openOn(label));
        item.append(" ", link);
      }
      return item;
    }));
    const chapters = new Set(excerpt.map(item => item.chapter));
    prompt.value = [
      locale.request,
      "",
      `## ${locale.excerpt}`,
      ...excerpt.map(({ speaker, text }) => `${speaker ? `${speaker}${locale.colon}` : ""}${text}`),
      "",
      `## ${locale.references}`,
      `${locale.episode}${locale.colon}${tools.dataset.episodeTitle || `Next Token Weekly #${tools.dataset.episodeNumber}`}`,
      ...Array.from(chapters, chapter => chapter ? `${locale.chapter}${locale.colon}${chapter.querySelector("h2")?.textContent?.trim()} · ${reference(chapter.id)}` : "").filter(Boolean),
      `${locale.start}${locale.colon}${reference(first.id)}`,
      `${locale.end}${locale.colon}${reference(last.id)}`,
      "",
      `## ${locale.video}`,
      ...ranges.map(({ label, href, bounds }) => `${label}${locale.colon}${href ? `${href} · ${bounds}` : locale.timingFallback}`),
      "",
      `## ${locale.context}`,
      locale.skill,
      "https://github.com/next-token-tv/next-token-skill",
    ].join("\n");
    promptDetails.open = false;
    copyStatus.textContent = "";
    dialog.showModal();
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "exit") setMode(false);
    dialog.returnValue = "";
  });

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt.value);
      copyStatus.textContent = locale.copied;
    } catch {
      promptDetails.open = true;
      prompt.focus();
      prompt.select();
      copyStatus.textContent = locale.manual;
    }
  }
  if ("CommandEvent" in window) {
    prompt.addEventListener("command", event => {
      if ("command" in event && event.command === "--copy") void copyPrompt();
    });
  } else {
    copy.addEventListener("click", copyPrompt);
  }
  setMode(true);
}

const tools = document.querySelector<HTMLElement>("[data-clip-tools]");
if (tools && typeof window.HTMLDialogElement?.prototype.showModal === "function") {
  const launch = tools.querySelector<HTMLButtonElement>("[data-clip-launch]")!;
  launch.addEventListener("click", () => initializeClips(tools, launch), { once: true });
  tools.hidden = false;
}
