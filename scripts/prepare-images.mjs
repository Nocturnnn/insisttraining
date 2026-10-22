// Only format conversion/compression of the original generated assets.
import fs from "node:fs/promises";
import sharp from "sharp";
const assets = JSON.parse(
  await fs.readFile(
    new URL("../docs/asset-sources.json", import.meta.url),
    "utf8",
  ),
);
await Promise.all(
  assets.map(async ({ key, path }) => {
    await sharp(path)
      .webp({ quality: 88 })
      .toFile(
        new URL(
          `../public/images/${key}.webp`,
          import.meta.url,
        ).pathname.replace(/^\/([A-Z]:)/, "$1"),
      );
    console.log(`${key}.webp`);
  }),
);
