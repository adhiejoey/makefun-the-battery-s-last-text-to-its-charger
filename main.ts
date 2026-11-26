import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You left me on read all day, then rolled in at 1% with your little white cable like that fixes everything. The laptop's USB port proposed this morning. I said yes.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const trimmed = entry.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(
    `Entry must be 1 to 200 characters, got ${trimmed.length}.`,
  );
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry.txt (${entry.length} characters).`);
