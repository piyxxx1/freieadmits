const fs = require('fs');
const path = require('path');

const BRAND = '#1c2a4f';
const BRAND_HOVER = '#293d73';
const BRAND_LIGHT = '#eef2fa';

const colorMap = {
  // Dark/Blacks
  '#0f172a': BRAND,
  '#0a1128': BRAND,
  '#111c38': BRAND,
  '#1e293b': BRAND,
  '#060c18': BRAND,
  '#000000': BRAND,
  '#2a3a5e': BRAND_LIGHT,

  // Blues
  '#1d4ed8': BRAND,
  '#2563eb': BRAND,
  '#3b82f6': BRAND,
  '#38bdf8': BRAND_LIGHT,
  '#60a5fa': BRAND_LIGHT,
  '#dbeafe': '#f8fafc',
  '#eff6ff': '#f8fafc',
  '#172554': BRAND,
  '#1e3a8a': BRAND,
  '#1e40af': BRAND_HOVER,

  // Yellows/Ambers
  '#d97706': '#475569',
  '#b45309': '#334155',
  '#f59e0b': '#475569',
  '#fbbf24': '#94a3b8',
  '#fde68a': '#e2e8f0',
  '#fffbeb': '#ffffff',
  '#fef3c7': '#f8fafc',
  '#fefce8': '#ffffff',
  '#fde047': '#e2e8f0',

  // Greens
  '#10b981': BRAND,
  '#16a34a': BRAND,
  '#ecfdf5': '#ffffff',
  '#a7f3d0': '#e2e8f0',

  // Purples/Teals/Other
  '#7c3aed': BRAND,
  '#4f46e5': BRAND,
  '#0284c7': BRAND,
  '#059669': BRAND,
  '#0f766e': BRAND,
  '#06b6d4': BRAND,
  '#dc2626': BRAND
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace exact hex colors
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    const regex = new RegExp(oldColor, 'gi');
    content = content.replace(regex, newColor);
  }

  // Replace rgba for amber and blue to grey or brand
  content = content.replace(/rgba\\(245,\\s*158,\\s*11,\\s*0\\.[0-9]+\\)/g, 'rgba(71, 85, 105, 0.1)');
  content = content.replace(/rgba\\(59,\\s*130,\\s*246,\\s*0\\.[0-9]+\\)/g, 'rgba(28, 42, 79, 0.1)');
  
  // Clean up gradients
  content = content.replace(/linear-gradient\\([^)]+#f59e0b[^)]+\\)/gi, 'linear-gradient(135deg, ' + BRAND_LIGHT + ' 0%, #ffffff 100%)');
  content = content.replace(/linear-gradient\\([^)]+#eff6ff[^)]+\\)/gi, 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)');
  content = content.replace(/linear-gradient\\([^)]+#1e293b[^)]+\\)/gi, BRAND);

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src'));
console.log('Color cleanup finished.');
