const fs = require('fs');
const path = require('path');

// Einfache Bildoptimierung durch Kopieren mit niedrigerer Qualität
// Für echte Optimierung nutze: https://squoosh.app oder https://tinypng.com

const images = [
  'public/img/stock/Videoproduktion.jpg',
  'public/img/stock/grafikdesign.png',
  'public/img/stock/webdesign.jpg',
  'public/img/stock/online-marketing.png',
  'public/img/stock/n8n.png'
];

console.log('\n=== BILD-OPTIMIERUNG BENÖTIGT ===\n');
console.log('Die folgenden Bilder sind zu groß und müssen optimiert werden:\n');

images.forEach(img => {
  if (fs.existsSync(img)) {
    const stats = fs.statSync(img);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`- ${img}: ${sizeMB} MB`);
  }
});

console.log('\n📌 EMPFOHLENE LÖSUNG:');
console.log('1. Gehe zu: https://squoosh.app');
console.log('2. Lade jedes Bild hoch');
console.log('3. Einstellungen:');
console.log('   - Resize: 800px Breite');
console.log('   - Format: MozJPEG (für .jpg) oder OxiPNG (für .png)');
console.log('   - Qualität: 80-85%');
console.log('4. Lade optimierte Bilder herunter und ersetze die Originale\n');
console.log('🎯 ZIEL: Jedes Bild sollte unter 200 KB sein\n');
