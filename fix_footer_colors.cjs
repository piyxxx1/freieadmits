const fs = require('fs');

let file = fs.readFileSync('src/components/Footer.jsx', 'utf8');

// Container & Background replacements
file = file.replace(/background: '#0a1633'/g, "background: '#ffffff'");
file = file.replace(/borderTop: '1px solid #1c2a4f'/g, "borderTop: '1px solid #e2e8f0'");
file = file.replace(/background: '#050c1e'/g, "background: '#f8fafc', borderTop: '1px solid #e2e8f0'");

// Text color replacements
file = file.replace(/color: '#ffffff'/g, "color: '#0a1633'");
file = file.replace(/color: '#cbd5e1'/g, "color: '#475569'");
file = file.replace(/color: '#94a3b8'/g, "color: '#475569'");
file = file.replace(/color: '#e2e8f0'/g, "color: '#1c2a4f'");
file = file.replace(/color: '#334155'/g, "color: '#cbd5e1'");
file = file.replace(/color: '#64748b'/g, "color: '#475569'");

// Background rgba replacements (office cards, social icons)
file = file.replace(/background: 'rgba\(255,255,255,0\.06\)'/g, "background: '#f8fafc'");
file = file.replace(/background: 'rgba\(255,255,255,0\.03\)'/g, "background: '#f8fafc'");
file = file.replace(/border: '1px solid rgba\(255,255,255,0\.12\)'/g, "border: '1px solid #e2e8f0'");
file = file.replace(/border: '1px solid rgba\(255,255,255,0\.08\)'/g, "border: '1px solid #e2e8f0'");

// Logo theme
file = file.replace(/theme="dark"/g, 'theme="light"');

// Hover link effects on colors
file = file.replace(/onMouseEnter=\{\(e\) => \(e.target.style.color = '#ffffff'\)\}/g, "onMouseEnter={(e) => (e.target.style.color = '#3b82f6')}");
file = file.replace(/onMouseLeave=\{\(e\) => \(e.target.style.color = '#94a3b8'\)\}/g, "onMouseLeave={(e) => (e.target.style.color = '#475569')}");

fs.writeFileSync('src/components/Footer.jsx', file);
console.log("Done");
