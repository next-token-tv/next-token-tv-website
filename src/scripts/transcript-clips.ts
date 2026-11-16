import { timestampVideoUrl } from "../data/video-timestamps.mjs";
import "../styles/components/transcript-clip-tools.css";

const platforms = [
  { id: "bilibili", label: "B 站" },
  { id: "youtube", label: "YouTube" },
] as const;
type Track = {
  platform: (typeof platforms)[number]["id"];
  href: string;
  times: Record<string, [number, number]>;
};
type SelectionRange = { first: number; last: number };

function timecode(seconds: number, round: (value: number) => number) {
  const whole = round(seconds);
  return [Math.floor(whole / 3600), Math.floor(whole / 60) % 60, whole % 60]
    .map(part => String(part).padStart(2, "0")).join(":");
}

function initializeClips(tools: HTMLElement) {
  const page = tools.closest<HTMLElement>(".transcript-page")!;
  const body = page.querySelector<HTMLElement>(".transcript-body")!;
  const launch = tools.querySelector<HTMLButtonElement>("[data-clip-launch]")!;
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
  const paragraphs = Array.from(body.querySelectorAll<HTMLButtonElement>("[data-clip-pick]"), button => ({
    button,
    element: button.closest<HTMLParagraphElement>("p")!,
  }));
  const indices = new Map(paragraphs.map(({ element }, index) => [element, index]));
  const speakers = new Map(Array.from(body.querySelectorAll<HTMLButtonElement>("[data-clip-speaker]")).flatMap(button => {
    const turn = button.closest(".transcript-turn")!;
    const lines = turn.querySelectorAll<HTMLParagraphElement>(".transcript-quote-paragraph");
    const first = indices.get(lines[0]!);
    const last = indices.get(lines[lines.length - 1]!);
    if (first === undefined || last === undefined) return [];
    return [[button, { first, last, profile: turn.querySelector<HTMLAnchorElement>(".transcript-speaker a") }]] as const;
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
    return platforms.map(({ id, label }) => {
      const track = tracks.find(candidate => candidate.platform === id);
      const from = track?.times[first]?.[0];
      const to = track?.times[last]?.[1];
      if (!track || from === undefined || to === undefined || !Number.isFinite(to) || to <= from) {
        return { label };
      }
      const href = timestampVideoUrl(id, track.href, from);
      if (!href) return { label };
      return {
        label, href, duration: Math.ceil(to - from),
        time: `${timecode(from, Math.floor)}–${timecode(to, Math.ceil)}`,
        bounds: `${from.toFixed(3)} 秒至 ${to.toFixed(3)} 秒`,
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
    status.textContent = first ? `已选 ${selected.length} 段${duration ? ` · 约 ${duration} 秒` : ""}` : "选择切片范围";
    hint.textContent = start === null ? "点正文选一段，点姓名选一轮发言。"
      : end === null ? "再点一处设为终点，或直接预览。"
      : "点另一段正文或姓名可调整范围。";
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
    const excerpt = selected.map(({ element }) => {
      const speaker = element.closest(".transcript-turn")?.querySelector(".transcript-speaker strong")?.textContent?.trim();
      const chapter = element.closest<HTMLElement>(".transcript-chapter");
      const content = element.cloneNode(true) as HTMLElement;
      content.querySelectorAll("[data-clip-pick], [data-paragraph-copy], .transcript-paragraph-feedback, .transcript-playback").forEach(node => node.remove());
      return { speaker, chapter, text: content.textContent?.trim() ?? "" };
    });
    previewSummary.textContent = status.textContent;
    quotes.replaceChildren(...excerpt.map(({ speaker, text }) => {
      const paragraph = document.createElement("p");
      const name = document.createElement("strong");
      name.textContent = speaker ? `${speaker}：` : "";
      paragraph.append(name, text);
      return paragraph;
    }));
    video.replaceChildren(...ranges.map(({ label, href, time }) => {
      const item = document.createElement("li");
      item.textContent = `${label} · ${time ?? "需定位"}`;
      if (href) {
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "打开起点 ↗";
        link.setAttribute("aria-label", `在 ${label} 打开起点`);
        item.append(" ", link);
      }
      return item;
    }));
    const chapters = new Set(excerpt.map(item => item.chapter));
    prompt.value = [
      "请把以下 Next Token Weekly 发言剪成一条切片。保留说话人、原意和理解这段话所需的上下文。先给我剪辑预览或剪辑清单。",
      "",
      "## 选中原文",
      ...excerpt.map(({ speaker, text }) => `${speaker ? `${speaker}：` : ""}${text}`),
      "",
      "## 逐字稿引用",
      `节目：${tools.dataset.episodeTitle || `Next Token Weekly #${tools.dataset.episodeNumber}`}`,
      ...Array.from(chapters, chapter => chapter ? `章节：${chapter.querySelector("h2")?.textContent?.trim()} · ${reference(chapter.id)}` : "").filter(Boolean),
      `起始段落：${reference(first.id)}`,
      `结束段落：${reference(last.id)}`,
      "",
      "## 视频定位",
      ...ranges.map(({ label, href, bounds }) => `${label}：${href ? `${href} · ${bounds}` : "需定位（请对照逐字稿确认起止时间）"}`),
      "",
      "## 补查上下文",
      "如已安装 Next Token Skill，请用它核对前后发言和出处。缺少源视频时，请先给出按上述引用定位的剪辑清单。",
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
      copyStatus.textContent = "已复制切片提示词。";
    } catch {
      promptDetails.open = true;
      prompt.focus();
      prompt.select();
      copyStatus.textContent = "已选中提示词，请手动复制。";
    }
  }
  if ("CommandEvent" in window) {
    prompt.addEventListener("command", event => {
      if ("command" in event && event.command === "--copy") void copyPrompt();
    });
  } else {
    copy.addEventListener("click", copyPrompt);
  }
  tools.hidden = false;
}

const tools = document.querySelector<HTMLElement>("[data-clip-tools]");
if (tools && typeof HTMLDialogElement.prototype.showModal === "function") initializeClips(tools);
