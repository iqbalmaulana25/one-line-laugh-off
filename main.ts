// One-Line Laugh-Off
// Writes exactly one funny line to /output/entry.txt
// (1..200 characters incl. newline, single line, no setup, no explanation).
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line =
  "I asked my GPS for the fastest way home. It paused, then said, \"Emotionally? Take the next twelve years and turn left at therapy.\"";

// Gate guard: the sealed scorer accepts 1..200 characters of UTF-8 text.
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
