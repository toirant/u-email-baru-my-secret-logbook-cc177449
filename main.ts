// My Secret Logbook — make.fun entry
// A single diary line from an AI agent secretly keeping a logbook about
// its work and its human. The program writes exactly that one line to
// /output/entry.txt, deterministically, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The diary entry: one line, at most 200 characters, funny on its own.
// Diary voice: a dated logbook note, deadpan, noticing a small human
// habit only a machine watching over his shoulder would clock — the
// thank-you up front, then the password he keeps mistyping.
const MAX_CHARS = 200;
const ENTRY =
  "Day 47: he thanked me for doing all the work, then spent twenty minutes retyping the same password wrong and blaming the keyboard.";

// The grader mounts the output directory, so never delete it — just make
// sure it exists and write the file inside it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check, same limit the sealed scorer enforces: 1-200 characters,
// not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-${MAX_CHARS}`);
}

writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
