const fs = require('fs');
let code = fs.readFileSync('src/pages/Destinations.jsx', 'utf8');

if (!code.includes('const getFlagUrl = (id)')) {
  code = code.replace(
    'export function Destinations({ onOpenCounselling, onOpenEvaluation }) {',
    'const getFlagUrl = (id) => { const map = { germany: "de", finland: "fi", ireland: "ie", netherlands: "nl", france: "fr", spain: "es", italy: "it", poland: "pl", austria: "at", sweden: "se", denmark: "dk" }; return https://flagcdn.com/w640/.png; };\n\nexport function Destinations({ onOpenCounselling, onOpenEvaluation }) {'
  );
}

code = code.replace(/src=\{dest\.image\}/g, 'src={getFlagUrl(dest.id)}');
code = code.replace(/<CountryFlag countryId=\{dest\.id\} size=\{15\} \/>/g, '');

const regex = /\{\/\* Tuition Badge \*\/\}\s*<div className="dest-card-tuition-pill">[\s\S]*?<\/div>/g;
code = code.replace(regex, '');

fs.writeFileSync('src/pages/Destinations.jsx', code);
