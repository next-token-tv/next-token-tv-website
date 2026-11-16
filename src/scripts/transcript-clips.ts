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
    copied: "Clip citation copied.", manual: "The citation is selected. Copy it manually.",
    videoLink: "Open at start", openOn: (label: string) => `Open at start on ${label}`, needsTiming: "Timing needs verification",
    timingFallback: "Find the start and end times using the transcript references.",
    endNeedsTiming: "End time needs verification",
    references: "Transcript references", start: "First paragraph", end: "Last paragraph",
    sources: "Video sources", citationRange: "Clip range", playFrom: (start: string) => `Play from ${start}`,
    colon: ": ",
  },
  "zh-Hans": {
    pick: "选取", pickLine: "选取这段正文", pickTurn: (name: string) => `选取${name}的这轮发言`,
    idle: "选择切片范围", count: (num: number) => `已选 ${num} 段`, duration: (seconds: number) => `约 ${seconds} 秒`,
    hints: ["点正文选一段，点姓名选一轮发言。", "再点一处设为终点，或直接预览。", "点另一段正文或姓名可调整范围。"],
    copied: "已复制切片引用。", manual: "已选中引用内容，请手动复制。",
    videoLink: "打开起点", openOn: (label: string) => `在 ${label} 打开起点`, needsTiming: "需定位",
    timingFallback: "请对照逐字稿确认起止时间。",
    endNeedsTiming: "终点待确认",
    references: "逐字稿引用", start: "起始段落", end: "结束段落",
    sources: "视频来源", citationRange: "引用范围", playFrom: (start: string) => `从 ${start} 播放`,
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
  const episodeName = `Next Token Weekly #${tools.dataset.episodeNumber}`;
  const episodeTopic = tools.dataset.episodeTitle
    ?.replace(/^(?:(?:Next Token )?Weekly )?#\d{3}\b\s*[｜|·]?\s*/u, "").trim();
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
      if (from === undefined) return { label };
      const href = timestampVideoUrl(track.platform, track.href, from);
      if (!href) return { label };
      const startTime = timecode(from, Math.floor);
      if (to === undefined || !Number.isFinite(to) || to <= from) return { label, href, startTime };
      return {
        label, href, startTime, duration: Math.ceil(to - from),
        time: `${startTime}–${timecode(to, Math.ceil)}`,
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
    const duration = first && final && videoRanges(first.element.id, final.element.id).find(item => item.duration)?.duration;
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
      return { speaker, text };
    });
    previewSummary.textContent = status.textContent;
    quotes.replaceChildren(...excerpt.map(({ speaker, text }) => {
      const paragraph = document.createElement("p");
      const name = document.createElement("strong");
      name.textContent = speaker ? `${speaker}${locale.colon}` : "";
      paragraph.append(name, text);
      return paragraph;
    }));
    video.replaceChildren(...ranges.map(({ label, href, startTime, time }) => {
      const item = document.createElement("li");
      const timing = time ?? (startTime ? `${startTime} · ${locale.endNeedsTiming}` : locale.needsTiming);
      item.textContent = `${label} · ${timing}`;
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
    const firstTime = ranges[0]?.time;
    const sharedTime = ranges.every(item => item.time === firstTime) ? firstTime : undefined;
    prompt.value = [
      episodeTopic ? `${episodeName} · ${episodeTopic}` : episodeName,
      "",
      locale.references,
      `- [${locale.start}](${reference(first.id)})`,
      `- [${locale.end}](${reference(last.id)})`,
      "",
      sharedTime ? `${locale.sources} · ${locale.citationRange} ${sharedTime}` : locale.sources,
      ...ranges.map(({ label, href, startTime, time }) => {
        if (!href || !startTime) return `- ${label} · ${locale.timingFallback}`;
        const link = `- [${label} · ${locale.playFrom(startTime)}](${href})`;
        if (!time) return `${link} · ${locale.endNeedsTiming}`;
        return sharedTime ? link : `${link} · ${locale.citationRange} ${time}`;
      }),
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
