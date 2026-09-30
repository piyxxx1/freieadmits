const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

const targetStr = "style={{ background: '#f8fafc', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n                                    <img src={getFlagUrl(dest.id)} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }} />";

const replacementStr = "style={{ background: '#f8fafc', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n                                    <img src={getFlagUrl(dest.id)} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} />";

if (code.includes(targetStr)) {
  code = code.replace(targetStr, replacementStr);
  fs.writeFileSync('src/components/Navbar.jsx', code);
  console.log('Replaced in Navbar successfully');
} else {
  console.log('Target string not found in Navbar');
}
