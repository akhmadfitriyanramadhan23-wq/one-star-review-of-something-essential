// one-star-review-of-something-essential
// A one-star review of the sun, filed in earnest: great light, terrible
// timing. It rises at 5 a.m., shines straight into my eyes,
// and — the turn — has never once apologised. Deadpan throughout.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-160 characters (this review: 126 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The sun: great light, terrible timing. Rises at 5 a.m., shines straight into my eyes, and has never once apologised. One star.";

const points = [...text].length;
if (points < 1 || points > 160 || text.trim().length === 0) {
  throw new Error(`entry must be 1-160 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
