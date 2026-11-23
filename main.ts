// curious-acct1: one text that makes the judge feel curious.
// Writes the text to $MAKEFUN_OUTPUT_DIR/entry.txt
import * as fs from "node:fs";
import * as path from "node:path";

// One ordinary morning, one detail that does not add up, no explanation.
const lines = [
  "Every morning the kitchen chair faces the window.",
  "I live alone.",
  "I turn it back each night, shove it under the table.",
  "Its legs are cold.",
  "The seat is warm.",
  "Last night I left a glass of water on the sill, full to the brim.",
  "This morning the glass was empty.",
  "The chair was facing me.",
];

const text = lines.join("\n");

const size = [...text].length;
if (size < 1 || size > 280 || text.trim() === "") {
  throw new Error("text must be 1-280 chars, got " + size);
}

const folder = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(path.join(folder, "entry.txt"), text, "utf8");
console.log("text written: " + size + " chars");
