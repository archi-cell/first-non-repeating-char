const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

async function compareImages(img1Path, img2Path, outputPath) {
  if (!fs.existsSync(img1Path)) {
    console.log("Baseline not found. Saving current as baseline.");
    fs.copyFileSync(img2Path, img1Path);
    return 0;
  }

  const img1 = PNG.sync.read(fs.readFileSync(img1Path));
  const img2 = PNG.sync.read(fs.readFileSync(img2Path));

  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  fs.writeFileSync(outputPath, PNG.sync.write(diff));

  return numDiffPixels;
}

module.exports = { compareImages };
