export function validateTranscriptManifest(manifest, sourceSha256, reviewPreview = false, evidence = {}) {
  const resolvedReading = reviewPreview && manifest.status === "ready-for-review"
    && evidence.verified === true && evidence.srtSha256 === manifest.srt_sha256
    && evidence.readingSha256 === manifest.transcript_sha256
    && manifest.body_text_preserved === true && manifest.pending_speaker_cues === 0;
  const completeReading = reviewPreview && manifest.status === "complete-reading-draft"
    && evidence.status === "passed" && evidence.srtSha256 === manifest.srt_sha256
    && manifest.srt_approval?.text_approved === true;
  const expectedHash = reviewPreview
    ? (completeReading || resolvedReading ? evidence.readingSha256 : manifest.reading_markdown_sha256 ?? manifest.reading_transcript_sha256)
    : manifest.output_sha256;
  if (expectedHash !== sourceSha256) throw new Error("Source hash does not match transcript manifest");
  if (reviewPreview) {
    const proofread = manifest.subtitle_text_proofread === true && manifest.reading_transcript_sha256 === sourceSha256;
    if ((!completeReading && !resolvedReading && !proofread && manifest.status !== "complete_review_draft") || manifest.transcript_approved !== false || manifest.publication_approved !== false) {
      throw new Error(`Transcript is not an eligible review draft: ${manifest.status}`);
    }
  } else if (manifest.status !== "approved-for-publication") {
    throw new Error(`Transcript is not approved for publication: ${manifest.status}`);
  }
}
