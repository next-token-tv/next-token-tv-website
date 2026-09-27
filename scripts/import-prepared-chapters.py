"""Import a locked release timeline into website preparation pages only."""
import hashlib
import importlib.util
import json
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: python3 scripts/import-prepared-chapters.py <production-episode-directory>")
episode = Path(sys.argv[1]).resolve()
website = Path(__file__).resolve().parent.parent
production = episode.parents[3]
spec = importlib.util.spec_from_file_location("chapters", production / "tools/chapters/sync.py")
chapters = importlib.util.module_from_spec(spec)
spec.loader.exec_module(chapters)
source = episode / "04-release/copy/chapters.json"
raw = source.read_bytes()
data = json.loads(raw)
chapters.validate(data)
assert data["episode_id"] == f"next-token-weekly--{episode.name}"
publication = json.loads((episode / "04-release/platforms/publication.json").read_text())
published = any(p.get("status", "").startswith("published") and p.get("public_url") for p in publication["platforms"].values())
if published and data.get("status") == "release_aligned":
    qa = json.loads((episode / "05-qa/audio-report.json").read_text())
    assert abs(qa["timeline"]["end_seconds"] - data["duration_seconds"]) < .1
    outro = next(c for c in data["chapters"] if c["id"] == "outro")
    assert outro["start_seconds"] == int(qa["timeline"]["outro_start_seconds"])
else:
    assets = json.loads((episode / "03-post-production/current-assets.json").read_text())
    assert assets["subtitles_status"] == "locked"
    assert data["source"]["srt"] == assets["current_srt"]
    assert data["source"]["srt_sha256"] == assets["current_srt_sha256"]
    assert hashlib.sha256((episode / data["source"]["srt"]).read_bytes()).hexdigest() == data["source"]["srt_sha256"]
sections = {lang: chapters.render(data, language=lang, grouped=True, level=3) for lang in ("zh-Hans", "en")}
snapshot = {"schemaVersion": 1, "episodeId": data["episode_id"],
            "source": "04-release/copy/chapters.json", "sourceSha256": hashlib.sha256(raw).hexdigest(),
            "publicationStatus": "published" if published else "prepared", "sections": sections}
outputs = {}
for lang, body in sections.items():
    path = website / "src/content/prose/episodes" / f'{data["episode_id"]}.{lang}.md'
    outputs[path] = chapters.replace_block(path.read_text(), "website-" + lang, body)
outputs[website / "src/content/imported/chapters" / f'{data["episode_id"]}.json'] = json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n"
for path, text in outputs.items():
    path.write_text(text)
print(f'Imported {len(data["chapters"])} prepared chapters in two languages')
