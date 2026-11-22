import {readFile, writeFile, rename} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {dirname, resolve, relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {sha256} from './lib/transcript-converter.mjs';
import {convertTranslationMarkdown} from './lib/transcript-translation.mjs';

const [sourceArg, flag, ...rest] = process.argv.slice(2);
if (!sourceArg || rest.length || !['--review-preview', '--publish'].includes(flag)) {
  throw new Error('Usage: node scripts/import-transcript-translation.mjs <transcript.en.md> (--review-preview | --publish)');
}
const publish = flag === '--publish';
const source = resolve(sourceArg), root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = resolve(dirname(source), 'transcript.en.manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
if (!/^next-token-weekly--\d{3}$/.test(manifest.episodeId)) throw new Error('Invalid episode ID');
const chinesePath = resolve(root, `src/content/imported/transcripts/${manifest.episodeId}.zh-Hans.json`);
const chineseBytes = await readFile(chinesePath);
const chinese = JSON.parse(chineseBytes);
if (publish) {
  if (manifest.publicationStatus !== 'approved-for-publication' || chinese.publicationStatus !== 'published' || chinese.provenance?.sourceState !== 'committed') {
    throw new Error('Publication requires approval and a published Chinese transcript from a committed source');
  }
  if (chinese.provenance.sourceSha256 !== manifest.chineseSourceSha256) throw new Error('Chinese transcript source changed after translation review');
}
if (sha256(chineseBytes) !== manifest.chineseSnapshotSha256) throw new Error('Chinese transcript changed after translation review');
const repo = execFileSync('git', ['-C', dirname(source), 'rev-parse', '--show-toplevel'], {encoding:'utf8'}).trim();
const sourcePath = relative(repo, source).replaceAll('\\', '/');
const reportPath = resolve(repo, manifest.review.reportPath);
if (relative(repo, reportPath).startsWith('..')) throw new Error('Translation evidence must belong to the source repository');
const reportBytes = await readFile(reportPath);
if (sha256(reportBytes) !== manifest.review.reportSha256) throw new Error('Translation review evidence changed');
const report = JSON.parse(reportBytes);
if (report.status !== 'reviewed' || report.model !== 'gpt-6-luna' || report.provider !== 'openai') throw new Error('Invalid translation review identity');
const episodeReport = report.episodes[manifest.episodeId];
if (!episodeReport || episodeReport.finalTextHashes.length !== manifest.units.length) throw new Error('Incomplete translation review coverage');
const verified = new Map(episodeReport.finalTextHashes.map(unit => [unit.id, unit.sha256]));
if (verified.size !== manifest.units.length || manifest.units.some(unit => verified.get(unit.id) !== unit.reviewedTextSha256)) throw new Error('Translation changed after review');
let tracked = true;
try {execFileSync('git', ['-C', repo, 'ls-files', '--error-unmatch', '--', sourcePath], {stdio:'pipe'});} catch {tracked = false;}
const status = execFileSync('git', ['-C', repo, 'status', '--porcelain', '--', sourcePath], {encoding:'utf8'}).trim();
const state = !tracked ? 'untracked' : status ? 'modified' : 'committed';
if (publish) {
  for (const path of [sourcePath, relative(repo, manifestPath), relative(repo, reportPath)]) {
    try {
      execFileSync('git', ['-C', repo, 'ls-files', '--error-unmatch', '--', path], {stdio:'pipe'});
    } catch {
      throw new Error(`Published translation evidence must be committed: ${path}`);
    }
    if (execFileSync('git', ['-C', repo, 'status', '--porcelain', '--', path], {encoding:'utf8'}).trim()) {
      throw new Error(`Published translation evidence must be unchanged: ${path}`);
    }
  }
}
const markdown = await readFile(source, 'utf8');
const snapshot = convertTranslationMarkdown(markdown, manifest, chinese, {
  sourceRepository:'next-token', sourceRevision:state === 'committed' ? execFileSync('git', ['-C', repo, 'rev-parse', 'HEAD'], {encoding:'utf8'}).trim() : null,
  sourceState:state, sourcePath, sourceSha256:sha256(markdown),
});
if (publish) snapshot.publicationStatus = 'published';
const output = resolve(root, `src/content/imported/transcripts/${manifest.episodeId}.en.json`);
await writeFile(`${output}.tmp`, JSON.stringify(snapshot, null, 2)+'\n');
await rename(`${output}.tmp`, output);
console.log(`${manifest.episodeId}: ${manifest.units.length} reviewed translation units imported for ${publish ? 'publication' : 'local review'}`);
