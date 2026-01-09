/**
 * SVG to PNG Converter Script
 * 
 * This script converts og-image.svg to og-image.png (1200x630)
 * 
 * Requirements:
 * - Node.js
 * - sharp package: npm install sharp
 * 
 * Usage:
 * node scripts/convert-svg-to-png.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/og-image.svg');
const pngPath = path.join(__dirname, '../public/og-image.png');

async function convertSvgToPng() {
  try {
    // Read SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert to PNG with exact dimensions
    await sharp(svgBuffer)
      .resize(1200, 630, {
        fit: 'fill',
        background: { r: 30, g: 58, b: 138, alpha: 1 } // Fallback background color
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toFile(pngPath);
    
    console.log('✅ Successfully converted og-image.svg to og-image.png');
    console.log(`📁 Output: ${pngPath}`);
  } catch (error) {
    console.error('❌ Error converting SVG to PNG:', error.message);
    console.log('\n💡 Alternative: Use an online tool like:');
    console.log('   - https://cloudconvert.com/svg-to-png');
    console.log('   - https://convertio.co/svg-png/');
    console.log('   - https://svgtopng.com/');
    console.log('\n📐 Required dimensions: 1200x630px');
  }
}

convertSvgToPng();

