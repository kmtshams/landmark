import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ✅ Fix __dirname in ES modules (MUST come first)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Change these paths as needed
const imagesDir = path.resolve(__dirname, '../public/properties');
const outputDir = path.resolve(__dirname, '../public/properties/blur');

// ✅ Create blur folder if missing
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const blurData = {};

// ✅ Helper: Process images
async function processImage(filePath, fileName) {
  const buffer = fs.readFileSync(filePath);

  // ✅ Generate base64 for Next.js blurDataURL
  const { base64 } = await getPlaiceholder(buffer);
  blurData[fileName] = base64;

  // ✅ Generate small WebP blurred version for background-image
  const outputFile = path.join(
    outputDir,
    `${fileName.split('.')[0]}-blur.webp`
  );

  await sharp(buffer)
    .resize(20) // Tiny width (keeps aspect ratio)
    .webp({ quality: 50 })
    .toFile(outputFile);

  console.log(`✅ Processed: ${fileName}`);
}

// ✅ Main Function
async function generateBlurData() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue; // skip non-images

    const filePath = path.join(imagesDir, file);
    await processImage(filePath, file);
  }

  // ✅ Save all blurData as JSON
  fs.writeFileSync(
    path.join(outputDir, 'blurData.json'),
    JSON.stringify(blurData, null, 2)
  );

  console.log(`\n🎉 All blur data saved to ${outputDir}/blurData.json`);
}

generateBlurData();
