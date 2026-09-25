import type { Block } from "./types";

function blockWordCount(block: Block): number {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
      return block.text.split(/\s+/).filter(Boolean).length;
    case "list":
      return block.items.reduce((sum, item) => sum + item.split(/\s+/).filter(Boolean).length, 0);
    case "callout":
      return block.text.split(/\s+/).filter(Boolean).length;
    case "table":
      return block.rows.reduce(
        (sum, row) => sum + row.reduce((s, cell) => s + cell.split(/\s+/).filter(Boolean).length, 0),
        0
      );
    default:
      return 0;
  }
}

const WORDS_PER_MINUTE = 180;

export function estimateReadingMinutes(blocks: Block[]): number {
  const words = blocks.reduce((sum, block) => sum + blockWordCount(block), 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
