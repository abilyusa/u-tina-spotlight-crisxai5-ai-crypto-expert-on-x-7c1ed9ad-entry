// Spotlight @crisxai5 entry for make.fun (Node 22, standard library only).
// This program only copies POST.json from the repository root to the
// output directory. That is all it has to do. The entry itself is the
// X post: the image crisxai5-spotlight.png is posted on X from a public
// account with the required mention and play code, and POST.json names
// that post's address once it exists.
//
//   mkdir -p /tmp/out-spot && MAKEFUN_OUTPUT_DIR=/tmp/out-spot node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));
